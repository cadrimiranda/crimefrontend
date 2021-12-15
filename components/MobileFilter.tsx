import { useState } from "react";
import cx from "classnames";
import { FiltersForm } from "./FiltersForm";

const MobileFIlter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = cx({
    "menu-wrapper": true,
    "menu-open": isOpen,
    "menu-closed": !isOpen,
  });

  return (
    <div className="hidden-desktop mobile-menu-wrapper">
      <button
        onClick={() => setIsOpen(true)}
        className="filter-menu-button crime-pos-flex crime-pos-center-center"
      >
        <span className="material-icons">menu</span>
      </button>
      <div className={classes}>
        <div className="menu-wrapper-backdrop" />
        <div className="menu">
          <div className="crime-pos-flex crime-pos-right">
            <button
              onClick={() => setIsOpen(false)}
              className="filter-menu-button crime-pos-flex crime-pos-center-center"
            >
              <span className="material-icons">menu_open</span>
            </button>
          </div>
          <FiltersForm />
        </div>
      </div>
    </div>
  );
};

export { MobileFIlter };
