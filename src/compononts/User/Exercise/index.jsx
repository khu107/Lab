import styles from './style.module.css';
import { Modal } from 'antd';
import Week from '../Exercise/Week';
import Calorie from '../Exercise/Calorie/index';
import Workouts from '../Exercise/Workouts';
import { useState } from 'react';
import styled from 'styled-components';
import TodayCalorie from '../Exercise/TodayCalorie';
import WeekShin from '../Exercise/Weekshin';
import Workoutsweek from '../Exercise/Woroutsweek';

const Title = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 50px;
`;

function Exercise({ visibe, onClose }) {
  const [show, setShow] = useState(false);
  const [calorie, setCalorie] = useState(false);
  const [work, setWork] = useState(false);

  return (
    <Modal
      className={styles.main}
      width={1700}
      title="운동 상태"
      visible={visibe}
      onCancel={onClose}
      bodyStyle={{ background: '#fff' }}
      footer={null}
    >
      <div>
        <div className={styles.body}>
          <div className={styles.shimbak}>
            <h4 style={{ textAlign: 'center' }}>심박수</h4>
            <Title>
              <h6
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setShow(false);
                }}
              >
                오늘
              </h6>
              <h6
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setShow(true);
                }}
              >
                주간
              </h6>
            </Title>
            {show === false ? (
              <div>
                <Week />
                <div className={styles.vaqt}>
                  <p>오전6</p>
                  <p>오전12</p>
                  <p>오후1</p>
                  <p>오후9</p>
                </div>
              </div>
            ) : (
              <WeekShin />
            )}
          </div>
          <div className={styles.calorie}>
            <h4 style={{ textAlign: 'center' }}>소모 칼로리</h4>
            <Title>
              <h6
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setCalorie(false);
                }}
              >
                오늘
              </h6>
              <h6
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setCalorie(true);
                }}
              >
                주간
              </h6>
            </Title>
            {calorie === false ? <TodayCalorie /> : <Calorie />}
          </div>
          <div className={styles.worouts}>
            <h4 style={{ textAlign: 'center' }}>운동 횟수</h4>
            <Title>
              <h6
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setWork(false);
                }}
              >
                오늘
              </h6>
              <h6
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setWork(true);
                }}
              >
                주간
              </h6>
            </Title>
            {work === false ? <Workouts /> : <Workoutsweek />}
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default Exercise;
