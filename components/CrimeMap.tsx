import { useEffect, useState } from "react";
import { useEffectRequester } from "../hooks/useEffectRequester";
import { useMapbox } from "../hooks/useMapbox";
import { addDataLayer, TOptions } from "../map/addDataLayer";
import { TypeCrime } from "./Filters";

type TResponse = {
  LATITUDE: string;
  LONGITUDE: string;
  TYPE: TypeCrime;
  AMOUNT: number;
}[];

type TMapFeature = {
  type: "Feature";
  properties: {
    amount: number;
    type: TypeCrime;
  };
  geometry: {
    type: "Point";
    coordinates: number[];
  };
};

type TFeatureCollection = "FeatureCollection";

export type TMapboxHeatData = {
  type: TFeatureCollection;
  features: TMapFeature[];
};

const CrimeMap = () => {
  const { Map } = useMapbox();
  const [options, setOptions] = useState<TOptions>();
  const { data, mappedData } = useEffectRequester<TResponse, TMapboxHeatData>(
    "/get_lat_long",
    (data): TMapboxHeatData => {
      const opt = {
        minAmount: 0,
        maxAmount: 1,
      };

      const finalData: TMapboxHeatData = {
        type: "FeatureCollection",
        features: data.map<TMapFeature>((x) => {
          if (x.AMOUNT > opt.maxAmount) {
            opt.maxAmount = x.AMOUNT;
          }
          if (x.AMOUNT < opt.minAmount) {
            opt.minAmount = x.AMOUNT;
          }

          return {
            type: "Feature",
            properties: {
              amount: x.AMOUNT,
              type: x.TYPE,
            },
            geometry: {
              type: "Point",
              coordinates: [
                parseFloat(x.LONGITUDE.replace(",", ".")),
                parseFloat(x.LATITUDE.replace(",", ".")),
              ],
            },
          };
        }),
      };

      setOptions(opt);
      return finalData;
    }
  );

  useEffect(() => {
    if (Map && mappedData && mappedData.features && options) {
      console.log("eu");
      setTimeout(() => {
        try {
          addDataLayer(Map, mappedData, options);
        } catch (e) {
          console.log({ e });
        }
      }, 500);
    }
  }, [Map, mappedData]);

  return <div className="mymap" id="my-map" />;
};

export { CrimeMap };
