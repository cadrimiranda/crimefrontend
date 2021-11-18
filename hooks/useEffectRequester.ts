import { useEffect } from "react";

const useEffectRequester = (fetcher: () => void, dependencies: any[] = []) => {
  useEffect(fetcher, dependencies);
};

export { useEffectRequester };
