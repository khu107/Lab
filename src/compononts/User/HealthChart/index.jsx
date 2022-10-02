import styles from './style.module.css';
import { Modal } from 'antd';
import Stepschart from './Stepschart';
import WeightChart from './WeightChart';
import StressChart from './StressChart';
import { Link } from 'react-router-dom';

function HealthChart({ visibe, onClose }) {
  return (
    <Modal
      className={styles.main}
      width={1800}
      title="기초 건강 관리 상태"
      visible={visibe}
      onCancel={onClose}
      bodyStyle={{ background: '#fff' }}
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
