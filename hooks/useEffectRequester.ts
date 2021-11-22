import { useEffect, useState } from "react";
import useFetch from "use-http";
import { useFilterContext } from "../components/FilterProvider";

const useEffectRequester = <T, U = any>(
  url: string,
  mapper?: (data: T) => U,
  mappedDataDefault: any = [],
  dependencies: any[] = []
) => {
  // @ts-ignore
  const [state, setState] = useState<U>(mappedDataDefault);
  const fetchResponse = useFetch<T>();
  const { get, data } = fetchResponse;
  const { city, type, period, rangeEnd, rangeStart } = useFilterContext();

  useEffect(() => {
    let hasFilter = false;
    let finalUrl = url;
    finalUrl.repeat;

    function addInterrogative(prop: string) {
      let a = prop;
      if (hasFilter) {
        return `${a}&`;
      }

      return (a += "?");
    }

    if (city) {
      finalUrl = addInterrogative(finalUrl);
      finalUrl += `city=${city.toUpperCase()}`;
      hasFilter = true;
    }

    if (type) {
      finalUrl = addInterrogative(finalUrl);
      finalUrl += `crime=${type}`;
      hasFilter = true;
    }

    if (period) {
      finalUrl = addInterrogative(finalUrl);
      finalUrl += `period_ocurrence=${period.toUpperCase()}`;
      hasFilter = true;
    }

    if (rangeStart) {
      finalUrl = addInterrogative(finalUrl);
      finalUrl += `start_year=${rangeStart}`;
      hasFilter = true;
    }

    if (rangeEnd) {
      finalUrl = addInterrogative(finalUrl);
      finalUrl += `end_year=${rangeEnd}`;
      hasFilter = true;
    }

    get(finalUrl);
  }, [...dependencies, city, type, period, rangeEnd, rangeStart]);

  useEffect(() => {
    if (data && mapper) {
      const mapped = mapper(data);
      setState(mapped);
    }
  }, [data]);

  return { ...fetchResponse, mappedData: state };
};

export { useEffectRequester };
