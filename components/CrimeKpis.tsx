import { DataCircle } from "./DataCircle";

const CrimeKpis = () => {
  return (
    <div className="crime-kpi-container crime-card-only-desktop">
      <h1 className="crime-title-with-subtitle crime-only-desktop">
        Aqui vai um titulo para os KPIs que ainda nao pensei
      </h1>
      <h2 className="crime-subtitle crime-only-desktop">
        Preciso ver como exibir, no mobile tá as bolinhas
      </h2>
      <div className="crime-kpi-itens crime-pos-flex crime-pos-center-around">
        <DataCircle text="1800 crime" />
        <DataCircle text="1800 crime" />
        <DataCircle text="1800 crime" />
      </div>
    </div>
  );
};

export { CrimeKpis };
