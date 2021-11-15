import { CrimeByIconPercentage } from "./CrimeByIconPercentage";

const CrimeByVehicle = () => {
  return (
    <div className="crime-card">
      <h1 className="crime-title-with-subtitle">
        Aqui temos a criminalidade por cada categoria de veículo
      </h1>
      <h2 className="crime-subtitle">
        Clique nos icones para exibir mais detalhes
      </h2>
      <div className="crime-data-expand-wrap crime-pos-flex crime-pos-mobile-column">
        <CrimeByIconPercentage
          dataExpand={[
            { name: "Caminhão", qtd: 2, percentage: 10 },
            { name: "Caminhão Trator", qtd: 2, percentage: 10 },
            { name: "Reboque", qtd: 2, percentage: 10 },
            { name: "Semi Reboque", qtd: 2, percentage: 10 },
          ]}
          icon="local_shipping"
          qtd={20}
        />
        <CrimeByIconPercentage
          dataExpand={[
            { name: "Utilitário", qtd: 2, percentage: 10 },
            { name: "Caminhonete", qtd: 2, percentage: 10 },
            { name: "Automóvel", qtd: 2, percentage: 10 },
          ]}
          icon="directions_car"
          qtd={20}
        />
        <CrimeByIconPercentage
          dataExpand={[
            { name: "Motoneta", qtd: 2, percentage: 10 },
            { name: "Motociclo", qtd: 2, percentage: 10 },
          ]}
          icon="two_wheeler"
          qtd={20}
        />
        <CrimeByIconPercentage
          dataExpand={[{ name: "Trator Rodas", qtd: 2, percentage: 10 }]}
          icon="agriculture"
          qtd={20}
        />
        <CrimeByIconPercentage
          dataExpand={[{ name: "Ônibus", qtd: 2, percentage: 10 }]}
          icon="directions_bus"
          qtd={20}
        />
      </div>
    </div>
  );
};

export { CrimeByVehicle };
