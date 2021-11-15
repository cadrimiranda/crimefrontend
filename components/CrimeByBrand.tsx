import { CrimeByIconPercentage } from "./CrimeByIconPercentage";

const CrimeByBrand = () => {
  return (
    <div className="crime-card">
      <h1 className="crime-title-with-subtitle">
        Aqui temos as marcas de celular e carros mais visadas nas ocorrências
      </h1>
      <h2 className="crime-subtitle">
        Clique nos icones para exibir mais detalhes
      </h2>
      <div className="crime-data-expand-wrap crime-pos-flex crime-pos-mobile-column">
        <CrimeByIconPercentage
          dataExpand={[
            { percentage: 10, qtd: 90, name: "Honda" },
            { percentage: 10, qtd: 90, name: "Hyundai" },
            { percentage: 10, qtd: 90, name: "Ford" },
          ]}
          icon="directions_car"
          qtd={20}
        />
        <CrimeByIconPercentage
          dataExpand={[
            { percentage: 10, qtd: 90, name: "iPhone" },
            { percentage: 10, qtd: 90, name: "Motorola" },
            { percentage: 10, qtd: 90, name: "Sansung" },
          ]}
          icon="smartphone"
          qtd={20}
        />
      </div>
    </div>
  );
};

export { CrimeByBrand };
