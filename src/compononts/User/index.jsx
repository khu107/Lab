import React from 'react';
import { useSelector } from 'react-redux';
import ResultCard from './ResultCard';
import styles from './style.module.css';
import Brain2 from '../../asset/brain2.png';
import ResultUser from './ResultUser';
import { useState } from 'react';
import DimentiaModal from './DimentiaModal';
import HealthChart from './HealthChart';
import foot from '../../asset/foot.png';
import Exercise from './Exercise';

export default function User() {
  const user = useSelector((state) => state.user);
  const [dementiaVisible, setDementiaVisible] = useState(false);
  const [healthchat, setHealthchat] = useState(false);
  const [exercise, setExercise] = useState(false);

  console.log({ dementiaVisible });

  return (
    <>
      <div className={styles.con}>
        <div className={styles.navbar}>
          <ul>
            <li className={styles['title-bold']}>Navbar</li>
            <li>Home</li>
            <li>General Health Status</li>
            <li>Activity Status</li>
            <li>Stroke Prediction</li>
            <li>Alzheiner Prediction</li>
            <li>About</li>
          </ul>
        </div>
        <div className={styles.title}>
          <h1 style={{ color: 'white' }}>
            OHDEP::Open Health Data Exchange Platform
          </h1>
          <p style={{ color: 'white' }}>
            OHDEP기반 개인 건강정보 통합 포탈 서비스 입니다.
          </p>
        </div>
        <div className={styles.user}>
          <div className={styles.itemm}>
            <ResultUser
              img={user.state.img}
              name={user.state.name}
              age={user.state.age}
              sex={user.state.sex}
              height={user.state.height}
              weight={user.state.weight}
              disease={user.state.disease}
            />
          </div>
          <div className={styles.itemm}>
            <ResultCard
              style={{ backgroundColor: '#368ee6' }}
              header="기초 건강 관리 상태"
              detailButtonText="상세보기"
              title={user.health.title}
              onDetailButtonClick={() => {
                console.log('?');
                setHealthchat(true);
              }}
              body={
                <div className={styles.resultBody}>
                  <div className={styles.row}>
                    <div>체중</div>
                    <div>{user.health.weight}</div>
                  </div>
                  <div className={styles.row}>
                    <div>걸음걸이</div>
                    <div>{user.health.steps}</div>
                  </div>
                  <div className={styles.row}>
                    <div>스트레스 지수</div>
                    <div>{user.health.stress}</div>
                  </div>
                </div>
              }
              desc={user.health.desc}
            />
          </div>
          <div className={styles.itemm}>
            <ResultCard
              style={{ backgroundColor: 'green' }}
              header="운동 상태"
              title={user.exercise.title}
              detailButtonText="상세보기"
              onDetailButtonClick={() => {
                console.log('?');
                setExercise(true);
              }}
              body={
                <div className={styles.resultBody}>
                  <div className={styles.row}>
                    <div>운동 회수</div>
                    <div>{user.exercise.reps}</div>
                  </div>
                  <div className={styles.row}>
                    <div>소모 칼로리</div>
                    <div>{user.exercise.kalory}</div>
                  </div>
                  <div className={styles.row}>
                    <div>심박</div>
                    <div>{user.exercise.heartrate}</div>
                  </div>
                </div>
              }
              desc={user.exercise.desc}
            />
          </div>
          <div className={styles.itemm}>
            <ResultCard
              style={{ backgroundColor: 'tomato' }}
              header="노질환 예직"
              detailButtonText="데이터 선택"
              title={user.brain.title}
              body={
                <div className={styles.resultBody}>
                  <div className={styles.row}>
                    <div>총콜레스테롤</div>
                    <div>{user.brain.cholesterol}</div>
                  </div>
                  <div className={styles.row}>
                    <div>중성지방</div>
                    <div>{user.brain.triglycerides}</div>
                  </div>
                  <div className={styles.row}>
                    <div>HDL콜레스테롤</div>
                    <div>{user.brain.hdlcholesterol}</div>
                  </div>
                </div>
              }
              desc={user.brain.desc}
            />
          </div>
          <div className={styles.itemm}>
            <ResultCard
              style={{ backgroundColor: '#ffc107' }}
              header="치매 예측"
              detailButtonText="데이터 선택"
              title={user.brain.title}
              onDetailButtonClick={() => {
                console.log('?');
                setDementiaVisible(true);
              }}
              body={
                <div className={styles.resultBody}>
                  <div className={styles.row}>
                    <div>분류 상태</div>
                    <div>{user.brain.cholesterol}</div>
                  </div>
                  <div className={styles.row}>
                    <img src={Brain2} width="100%" alt="brain" />
                  </div>
                </div>
              }
              desc={user.brain.desc}
            />
          </div>
        </div>
        <footer className={styles.foot}>
          <div className={styles.footlogo}>
            <img src={foot} alt="gachon"></img>
            <div className={styles.foottit}>
              <div>
                <p>© 2022 HIT Lab, Gachon University</p>
                <p>Powered by OHDEPOpen Health Data eXchange Platform</p>
              </div>
              <div>
                <p>Contact: hwanghj@gachon.ac.kr</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <DimentiaModal
        name={user.state.name}
        visibe={dementiaVisible}
        onClose={() => setDementiaVisible(false)}
      />
      <HealthChart visibe={healthchat} onClose={() => setHealthchat(false)} />
      <Exercise visibe={exercise} onClose={() => setExercise(false)} />
    </>
  );
}
