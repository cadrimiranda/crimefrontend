import React, { createContext, useContext, useState } from "react";

type TFilterContext = {
  city: string;
  rangeStart: string;
  rangeEnd: string;
  type: string;
  period: string;
  setCity: (data: string) => void;
  setRangeStart: (data: string) => void;
  setRangeEnd: (data: string) => void;
  setType: (data: string) => void;
  setPeriod: (data: string) => void;
};

const FilterContext = createContext<TFilterContext>({
  city: "",
  rangeStart: "",
  rangeEnd: "",
  type: "",
  period: "",
  setCity: () => {},
  setRangeStart: () => {},
  setRangeEnd: () => {},
  setType: () => {},
  setPeriod: () => {},
});

const useFilterContext = () => useContext(FilterContext);

const FilterProvider: React.FC = ({ children }) => {
  const [city, setCity] = useState("");
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd] = useState("");
  const [type, setType] = useState("");
  const [period, setPeriod] = useState("");

  return (
    <FilterContext.Provider
      value={{
        city,
        rangeStart,
        rangeEnd,
        type,
        period,
        setCity,
        setRangeStart,
        setRangeEnd,
        setType,
        setPeriod,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilterContext };
