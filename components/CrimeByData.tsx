import React from "react";
import dynamic from "next/dynamic";
import { ColumnConfig } from "@ant-design/charts";
import Spin from "antd/lib/spin";
import cx from "classnames";

const Column = dynamic<ColumnConfig>(
  () => import("@ant-design/charts").then((mod) => mod.Column) as any,
  { ssr: false }
);

interface ICrimeByData {
  data: { [key: string]: any }[];
  xField: string;
  yField: string;
  title: string;
  loading: boolean;
  classes?: string;
}

export const LoadingGraphic = () => (
  <div className="crime-load-graph">
    <Spin />
  </div>
);

const CrimeByData = ({
  data,
  xField,
  yField,
  title,
  loading,
  classes,
}: ICrimeByData) => {
  const allClasses = cx("crime-card", classes);
  return (
    <div className={allClasses}>
      <h1 className="crime-title">{title}</h1>
      <div style={{ position: "relative" }}>
        {loading && <LoadingGraphic />}
        <Column
          autoFit
          data={data}
          xField={xField}
          yField={yField}
          xAxis={{ label: { autoRotate: true } }}
          scrollbar={{ type: "horizontal" }}
          color="#3b7178"
          columnStyle={{
            lineWidth: 10,
            width: 10,
          }}
        />
      </div>
    </div>
  );
};

export { CrimeByData };
