import { useEffect } from "react";
import useFetch from "use-http";

const useEffectRequester = <T>(url: string, dependencies: any[] = []) => {
  const fetchResponse = useFetch<T>(url);
  const { get } = fetchResponse;

  useEffect(() => {
    get();
  }, dependencies);

  return fetchResponse;
};

export { useEffectRequester };
