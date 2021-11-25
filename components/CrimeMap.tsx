import { useLeaflefMap } from "../hooks/useLeaflefMap";
import { LoadingGraphic } from "./CrimeByData";

const CrimeMap = () => {
  const { loading } = useLeaflefMap("leatlef");

  return (
    <div className="mymap">
      {loading && <LoadingGraphic />}
      <div className="mymap" id="leatlef" />
    </div>
  );
};

export default CrimeMap;
