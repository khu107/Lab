import styles from './style.module.css';
import { Modal } from 'antd';
import Week from '../Exercise/Week';
import Calorie from '../Exercise/Calorie/index';
import Workouts from '../Exercise/Workouts';
import { useState } from 'react';
import styled from 'styled-components';
import TodayCalorie from '../Exercise/TodayCalorie';
import WeekShin from '../Exercise/Weekshin';

const Title = styled.div`
  display: flex;

  justify-content: center;
  grid-gap: 50px;
`;

function Exercise({ visibe, onClose }) {
  const [show, setShow] = useState(false);
  const [calorie, setCalorie] = useState(false);

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
            <Title>
              <h4
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setShow(false);
                }}
              >
                오늘 심박
              </h4>
              <h4
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setShow(true);
                }}
              >
                주간 심박
              </h4>
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
            <Title>
              <h4
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setCalorie(false);
                }}
              >
                오늘 칼로리
              </h4>
              <h4
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setCalorie(true);
                }}
              >
                주간 칼로리
              </h4>
            </Title>
            {calorie === false ? <TodayCalorie /> : <Calorie />}
          </div>
          <div className={styles.worouts}>
            <h4>운동 횟수 </h4>
            <Workouts />
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default Exercise;
