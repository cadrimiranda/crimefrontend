import React, { MouseEvent, useEffect, useState } from "react";
import { CrimeByVehicleModal } from "./CrimeByVehicleModal";

export type TDataExpand = {
  name: string;
  qtd: number;
  percentage: number;
};

interface ICrimeByIconPercentage {
  icon: string;
  qtd: number;
  dataExpand: TDataExpand[];
}

const CrimeByIconPercentage = ({
  icon,
  qtd,
  dataExpand,
}: ICrimeByIconPercentage) => {
  const [open, setOpen] = useState(false);
  const [listHeight, setListHeight] = useState(0);
  const [expanded, setExpanded] = useState(false);

  function handleExpand(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (!open && dataExpand.length > 0) {
      setExpanded(!expanded);
    }
  }

  useEffect(() => {
    if (dataExpand.length === 0) {
      setExpanded(false);
    }
  }, [dataExpand]);

  useEffect(() => {
    if (navigator.userAgent) {
      const { userAgent } = navigator;
      if (!userAgent.includes("Mobile")) {
        setExpanded(true);
      }
    }
  }, []);

  return (
    <button
      onClick={handleExpand}
      style={{
        height: `${(expanded ? listHeight : 0) + 90}px`,
      }}
      className="crime-button-icon-percentage crime-non-button crime-pos-flex crime-pos-column"
    >
      <span className="material-icons">{icon}</span>
      <span className="crime-button-icon-percentage-text">{`${qtd}%`}</span>
      <ul
        ref={(ref) => {
          ref && setListHeight(ref.clientHeight);
        }}
        className="crime-button-icon-percentage-list"
      >
        {dataExpand
          .filter((x) => x.percentage > 0)
          .map((x) => (
            <li className="crime-list-item" key={x.qtd}>
              <span className="crime-list-item-name">{`${x.name}: `}</span>
              <span className="crime-list-item-description">{`${x.qtd} (${x.percentage}%)`}</span>
            </li>
          ))}
        <li className="see-more">
          <span
            onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
              e.stopPropagation();
              e.preventDefault();
              setOpen(true);
            }}
          >
            Veja mais
          </span>
          <CrimeByVehicleModal
            data={dataExpand}
            onClose={() => setOpen(false)}
            isOpen={open}
          />
        </li>
      </ul>
    </button>
  );
};

export { CrimeByIconPercentage };
