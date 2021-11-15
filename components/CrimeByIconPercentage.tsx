import { MouseEvent, useEffect, useState } from "react";

type TDataExpand = {
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
  const [listHeight, setListHeight] = useState(0);
  const [expanded, setExpanded] = useState(false);

  function handleExpand(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setExpanded(!expanded);
  }

  useEffect(() => {
    if (navigator.userAgent) {
      const { userAgent } = navigator;
      console.log({ userAgent });
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
        {dataExpand.map((x) => (
          <li className="crime-list-item" key={x.qtd}>
            <span className="crime-list-item-name">{`${x.name}: `}</span>
            <span className="crime-list-item-description">{`${x.qtd} (${x.percentage}%)`}</span>
          </li>
        ))}
      </ul>
    </button>
  );
};

export { CrimeByIconPercentage };
