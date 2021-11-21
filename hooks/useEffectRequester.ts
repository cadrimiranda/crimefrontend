import { useEffect, useState } from "react";
import useFetch from "use-http";

const useEffectRequester = <T, U = any>(
  url: string,
  mapper?: (data: T) => U,
  mappedDataDefault: any = [],
  dependencies: any[] = []
) => {
  // @ts-ignore
  const [state, setState] = useState<U>(mappedDataDefault);
  const fetchResponse = useFetch<T>(url);
  const { get, data } = fetchResponse;

  useEffect(() => {
    get();
  }, dependencies);

  useEffect(() => {
    if (data && mapper) {
      const mapped = mapper(data);
      setState(mapped);
    }
  }, [data]);

  return { ...fetchResponse, mappedData: state };
};

export { useEffectRequester };
