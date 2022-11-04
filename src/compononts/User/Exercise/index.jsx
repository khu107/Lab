import styles from './style.module.css';
import { Modal } from 'antd';

function Exercise({ visibe, onClose }) {
  return (
    <Modal
      className={styles.main}
      width={1800}
      title="운동 상태"
      visible={visibe}
      onCancel={onClose}
      bodyStyle={{ background: '#fff' }}
      footer={null}
    >
      <div>
        <div className={styles.body}></div>
      </div>
    </Modal>
  );
}
export default Exercise;
