import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import { useInitializeMap } from "./useInitializeMap";

interface IMyPosition {
  long: number;
  lat: number;
}

const useMapbox = () => {
  const initializeMap = useInitializeMap();
  const [myPosition, setMyPosition] = useState<IMyPosition>({
    long: 0,
    lat: 0,
  });
  const [Map, setMap] = useState<mapboxgl.Map>();

  useEffect(() => {
    function mountMap(pos: IMyPosition) {
      let map = new mapboxgl.Map({
        container: "my-map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [pos.long, pos.lat],
        zoom: 5,
      });

      initializeMap(mapboxgl, map);
      setMap(map);
    }

    let pos = { long: 0, lat: 0 };
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        pos = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };
        setMyPosition({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        mountMap(pos);
      });
    } else {
      mountMap(pos);
    }
  }, []);

  return {
    Map,
    myPosition,
  };
};

export { useMapbox };
