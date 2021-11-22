import { DatePicker, Input, Select } from "antd";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import useSWR from "swr";
import useFetch from "use-http";
import { useEffectRequester } from "../hooks/useEffectRequester";
import { useFilterContext } from "./FilterProvider";

const { RangePicker, YearPicker } = DatePicker;
const { Option } = Select;
const { Search } = Input;

enum CrimeEnum {
  btnFurtoCelular = "btnFurtoCelular",
  btnFurtoVeiculo = "btnFurtoVeiculo",
  btnRouboCelular = "btnRouboCelular",
  btnRouboVeiculo = "btnRouboVeiculo",
}

enum PeriodoOcorrenciaEnum {
  deMadrugada = "De Madrugada",
  pelaManha = "Pela Manhã",
  aTarde = "A Tarde",
  aNoite = "A Noite",
  emHoraIncerta = "Em Hora Incerta",
}

const Filters = () => {
  const { data: citiesData, loading } =
    useEffectRequester<{ cities: string[] }>("/get_list_cities");
  const { setCity, setType, setPeriod, setRangeEnd, setRangeStart, period } =
    useFilterContext();

  return (
    <Grid className="crime-filter-container" container spacing={1}>
      <Grid item xs={12} md={3}>
        <Select
          dropdownClassName="dropdown-overlay"
          className="crime-is-fullwidth"
          placeholder="Cidade"
          loading={loading}
          onChange={(e: string) => {
            setCity(e);
          }}
          allowClear
        >
          {citiesData?.cities.map((x) => (
            <Option value={x}>{x}</Option>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} md={3}>
        <RangePicker
          allowClear
          onChange={(e) => {
            // @ts-ignore
            const [begin, end] = e;
            setRangeStart(begin.year());
            setRangeEnd(end.year());
          }}
          dropdownClassName="dropdown-overlay"
          picker="year"
          format="YYYY"
          className="crime-is-fullwidth"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Select
          allowClear
          onChange={(e: string) => {
            setType(e);
          }}
          dropdownClassName="dropdown-overlay"
          className="crime-is-fullwidth"
          placeholder="Tipo de crime"
        >
          <Option value={CrimeEnum.btnFurtoCelular}>Furto Celuluar</Option>
          <Option value={CrimeEnum.btnFurtoVeiculo}>Furto Veículo</Option>
          <Option value={CrimeEnum.btnRouboCelular}>Roubo Celuluar</Option>
          <Option value={CrimeEnum.btnRouboVeiculo}>Roubo Veículo</Option>
        </Select>
      </Grid>
      <Grid item xs={12} md={3}>
        <Select
          allowClear
          onChange={(e: string) => {
            setPeriod(e);
          }}
          dropdownClassName="dropdown-overlay"
          className="crime-is-fullwidth"
          placeholder="Periodo Ocorrencia"
        >
          <Option value={PeriodoOcorrenciaEnum.deMadrugada}>
            De Madrugada
          </Option>
          <Option value={PeriodoOcorrenciaEnum.pelaManha}>Pela Manhã</Option>
          <Option value={PeriodoOcorrenciaEnum.aTarde}>A Tarde</Option>
          <Option value={PeriodoOcorrenciaEnum.aNoite}>A Noite</Option>
          <Option value={PeriodoOcorrenciaEnum.emHoraIncerta}>
            Em Hora Incerta
          </Option>
        </Select>
      </Grid>
    </Grid>
  );
};

export { Filters };
