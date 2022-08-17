import styles from "./style.module.css";
import { Modal } from "antd";
import Stepschart from "./Stepschart";
import WeightChart from "./WeightChart";
import StressChart from "./StressChart";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function HealthChart({ visibe, onClose }) {
  return (
    <Modal
      width={950}
      title="기초 건강 관리 상태"
      visible={visibe}
      onCancel={onClose}
      bodyStyle={{ background: "#c2c2c2" }}
      footer={null}
    >
      <div>
        <div className={styles.body}>
          <Stepschart />
          <WeightChart />
          <StressChart />
        </div>
      </div>
    </Modal>
  );
}

export default HealthChart;
