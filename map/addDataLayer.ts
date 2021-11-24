import mapboxgl from "mapbox-gl";
import { TMapboxHeatData } from "../components/CrimeMap";

export type TOptions = {
  minAmount: number;
  maxAmount: number;
};

export async function addDataLayer(
  map: mapboxgl.Map,
  data: TMapboxHeatData,
  options: TOptions
) {
  console.log({ data, options });
  if (!map.getSource("trees")) {
    map.addSource("trees", {
      type: "geojson",
      data: data,
    });
  } else {
    // @ts-ignore
    map.getSource("trees").setData(data);
    map.removeLayer("trees-heat");
  }

  map.addLayer(
    {
      id: "trees-heat",
      type: "heatmap",
      source: "trees",
      maxzoom: 5,
      paint: {
        // increase weight as diameter breast height increases
        "heatmap-weight": {
          property: "amount",
          type: "exponential",
          stops: [
            [1, 0],
            [options.maxAmount, options.minAmount],
          ],
        },
        // increase intensity as zoom level increases
        "heatmap-intensity": {
          stops: [
            [11, 1],
            [15, 3],
          ],
        },
        // assign color values be applied to points depending on their density
        "heatmap-color": [
          "interpolate",
          ["linear"],
          ["heatmap-density"],
          0,
          "rgba(236,222,239,0)",
          0.2,
          "rgb(208,209,230)",
          0.4,
          "rgb(166,189,219)",
          0.6,
          "rgb(103,169,207)",
          0.8,
          "rgb(28,144,153)",
        ],
        // increase radius as zoom increases
        "heatmap-radius": {
          stops: [
            [11, 15],
            [15, 20],
          ],
        },
        // decrease opacity to transition into the circle layer
        "heatmap-opacity": {
          default: 1,
          stops: [
            [14, 1],
            [15, 0],
          ],
        },
      },
    },
    "waterway-label"
  );

  const stopIntervalCircleRadius = Math.round(options.maxAmount / 4);
  const stopInterval = Math.round(options.maxAmount / 7);
  console.log({ stopInterval, stopIntervalCircleRadius });

  // map.addLayer(
  //   {
  //     id: "trees-point",
  //     type: "circle",
  //     source: "trees",
  //     minzoom: 14,
  //     paint: {
  //       // increase the radius of the circle as the zoom level and dbh value increases
  //       "circle-radius": {
  //         property: "amount",
  //         type: "exponential",
  //         stops: [
  //           [{ zoom: 15, value: 1 }, stopIntervalCircleRadius],
  //           [{ zoom: 15, value: 62 }, stopIntervalCircleRadius * 2],
  //           [{ zoom: 22, value: 1 }, stopIntervalCircleRadius * 3],
  //           [{ zoom: 22, value: 62 }, stopIntervalCircleRadius * 4],
  //         ],
  //       },
  //       "circle-color": {
  //         property: "amount",
  //         type: "exponential",
  //         stops: [
  //           [stopInterval, "rgba(236,222,239,0)"],
  //           [stopInterval * 2, "rgb(236,222,239)"],
  //           [stopInterval * 3, "rgb(208,209,230)"],
  //           [stopInterval * 4, "rgb(166,189,219)"],
  //           [stopInterval * 5, "rgb(103,169,207)"],
  //           [stopInterval * 6, "rgb(28,144,153)"],
  //           [stopInterval * 7, "rgb(1,108,89)"],
  //         ],
  //       },
  //       "circle-stroke-color": "white",
  //       "circle-stroke-width": 1,
  //       "circle-opacity": {
  //         stops: [
  //           [14, 0],
  //           [15, 1],
  //         ],
  //       },
  //     },
  //   },
  //   "waterway-label"
  // );
}
