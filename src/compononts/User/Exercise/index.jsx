import styles from './style.module.css';
import { Modal } from 'antd';
import Week from '../Exercise/Week';
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
        <div className={styles.body}>
          <div className={styles.shimbak}>
            <h3>심박수</h3>
            <Week />
            <div className={styles.vaqt}>
              <p>오전6</p>
              <p>오전12</p>
              <p>오후1</p>
              <p>오후9</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default Exercise;
