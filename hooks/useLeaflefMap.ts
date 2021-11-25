import { useEffect, useState } from "react";
import { TypeCrime } from "../components/Filters";
import { useEffectRequester } from "./useEffectRequester";
import L from "leaflet";
import { heatLayer, HeatCLassLayer } from "../static/heatmapLeafletPlugin";

type TResponse = {
  LATITUDE: string;
  LONGITUDE: string;
  TYPE: TypeCrime;
  AMOUNT: number;
}[];

export type TMapboxHeatData = Array<Array<number>>;

const useLeaflefMap = (mapId: string) => {
  const [map, setmap] = useState<L.Map>();
  const { mappedData, loading } = useEffectRequester<
    TResponse,
    TMapboxHeatData
  >("/get_lat_long", (data): TMapboxHeatData => {
    const dados = data.map((x) => [
      parseFloat(x.LATITUDE.replace(",", ".")),
      parseFloat(x.LONGITUDE.replace(",", ".")),
      x.AMOUNT,
    ]);
    return dados;
  });

  useEffect(() => {
    function createMap(pos: number[]) {
      console.log({ pos });
      var localmap = L.map("leatlef").setView([pos[0], pos[1]], 12);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "",
        }
      ).addTo(localmap);

      setmap(localmap);
    }

    if (!map) {
      createMap([-22.116282, -51.41126]);
    }
  }, []);

  useEffect(() => {
    let circles: L.Circle[] = [];
    let heat: L.Layer | null = null;
    const popup = L.popup();

    const onMapClick = (mymap: any, dados: number[]) => (e: any) => {
      popup
        .setLatLng(e.latlng)
        .setContent("Quantidade: " + dados[2])
        .openOn(mymap);
    };

    if (map && mappedData.length) {
      heat = heatLayer(mappedData.map((x) => [x[0], x[1], x[2]])).addTo(map);
      map.on("zoom", (e: any) => {
        if (e.sourceTarget._animateToZoom === 16) {
          mappedData.forEach((x) => {
            const circle = L.circle([x[0], x[1]], {
              color: "red",
              fillColor: "#f03",
              fillOpacity: 0.2,
              radius: 1,
            })
              .on("click", onMapClick(map, x))
              .addTo(map);

            circles.push(circle);
          });
        } else if (e.sourceTarget._animateToZoom === 14) {
          circles.forEach((x) => x.remove());
          circles = [];
        }
      });
    }

    return () => {
      circles.forEach((x) => x.remove());
      if (heat && heat.remove) {
        heat.remove();
      }
    };
  }, [mappedData.length, map]);

  return { loading };
};

export { useLeaflefMap };
