import { FiltersForm } from "./FiltersForm";
import { MobileFIlter } from "./MobileFilter";

const Filters = () => {
  return (
    <div className="filters">
      <div className="hidden-mobile">
        <FiltersForm />
      </div>
      <MobileFIlter />
    </div>
  );
};

export { Filters };
