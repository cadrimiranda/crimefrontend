import { CrimeByData } from "./CrimeByData";

const fakeData = [
  { local: "Residência", percentagem: 30 },
  { local: "Comércio", percentagem: 10 },
  { local: "Via pública", percentagem: 15 },
  { local: "Restaurante e afins", percentagem: 5 },
  { local: "Unidade rural", percentagem: 40 },
];

const CrimeByLocal = () => {
  return (
    <CrimeByData
      data={fakeData}
      xField="local"
      yField="percentagem"
      title="Porcentagem de crimes cometidos nos locais das cidades"
    />
  );
};

export { CrimeByLocal };
