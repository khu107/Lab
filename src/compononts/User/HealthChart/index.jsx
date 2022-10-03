import styles from './style.module.css';
import { Modal } from 'antd';
import Stepschart from './Stepschart';
import WeightChart from './WeightChart';
import StressChart from './StressChart';
import TodayStep from './Stepschart/TodayStep';
import MonthStep from './Stepschart/MonthStep';

import { NavLink, Route, Routes, useLocation } from 'react-router-dom';

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
          <nav className={styles.nav}>
            <span className={styles.item}>
              <NavLink to={'/user'} style={{ textDecoration: 'none' }}>
                오늘
              </NavLink>
            </span>
            <span className={styles.item}>
              <NavLink to={'/user/2'} style={{ textDecoration: 'none' }}>
                주별
              </NavLink>
            </span>
            <span className={styles.item}>
              <NavLink to={'/user/3'} style={{ textDecoration: 'none' }}>
                월별
              </NavLink>
            </span>

            <Routes>
              <Route path="/" element={<TodayStep />} />
              <Route path="2" element={<Stepschart />} />
              <Route path="3" element={<MonthStep />} />
            </Routes>
          </nav>

          <WeightChart />
          <StressChart />
        </div>
      </div>
    </Modal>
  );
}

export default HealthChart;
