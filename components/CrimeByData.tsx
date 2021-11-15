import React from "react";
import dynamic from "next/dynamic";
import { ColumnConfig } from "@ant-design/charts";

const Column = dynamic<ColumnConfig>(
  () => import("@ant-design/charts").then((mod) => mod.Column) as any,
  { ssr: false }
);

interface ICrimeByData {
  data: { [key: string]: any }[];
  xField: string;
  yField: string;
  title: string;
}

const CrimeByData = ({ data, xField, yField, title }: ICrimeByData) => {
  return (
    <div className="crime-card">
      <h1 className="crime-title">{title}</h1>
      <Column
        data={data}
        xField={xField}
        yField={yField}
        xAxis={{ label: { autoRotate: true } }}
        scrollbar={{ type: "horizontal" }}
        columnStyle={{
          lineWidth: 10,
          width: 10,
        }}
        legend={{
          layout: "vertical",
          flipPage: true,
        }}
      />
    </div>
  );
};

export { CrimeByData };
