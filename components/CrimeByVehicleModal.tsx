import Modal from "antd/lib/modal";
import { TDataExpand } from "./CrimeByIconPercentage";

interface ICrimeByVehicleModal {
  isOpen: boolean;
  onClose: () => void;
  data: TDataExpand[];
}

const CrimeByVehicleModal = ({
  isOpen,
  onClose,
  data,
}: ICrimeByVehicleModal) => {
  return (
    <Modal
      onOk={onClose}
      onCancel={onClose}
      footer={null}
      className="crime-modal"
      destroyOnClose
      visible={isOpen}
      getContainer={() => document.getElementById("main") as HTMLElement}
      closable={false}
    >
      <ul className="crime-button-icon-percentage-list">
        {data.map((x) => (
          <li className="crime-list-item crime-list-item-noborder" key={x.qtd}>
            <span className="crime-list-item-name">{`${x.name}: `}</span>
            <span className="crime-list-item-description">{`${x.qtd} (${x.percentage}%)`}</span>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export { CrimeByVehicleModal };
