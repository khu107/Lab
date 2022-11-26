import styles from './style.module.css';
import { Carousel, Modal } from 'antd';
import Brain3_1 from '../../../asset/brain3.png';
import Brain3_2 from '../../../asset/brain3-1.png';
import Brain3_3 from '../../../asset/brain3-2.png';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import Demin1 from '../../User/ResultDemintional/index';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const mriDetails = [
  {
    id: 1,
    img: Brain3_1,
    date: '[2021.08.15]',
    content: '서울대학교 병원 / 7T / Philips',
  },
  {
    id: 2,
    img: Brain3_2,
    date: '[2021.08.15]',
    content: '서울대학교 병원 / 7T / Philips',
  },
  {
    id: 3,
    img: Brain3_3,
    date: '[2021.08.15]',
    content: '서울대학교 병원 / 7T / Philips',
  },
];

function DimentiaModal({ name, visibe, onClose }) {
  const [dotPosition, setDotPosition] = useState('left');
  const [isSelectImage, setSelectImage] = useState(false);
  const [clickIdStore, setClickIdStore] = useState(0);

  return (
    <Modal
      width={800}
      cancelText="취소"
      title={`MRI 데이터 선택: ${name}`}
      visible={visibe}
      onCancel={onClose}
      bodyStyle={{ background: '#364d79' }}
      footer={false}
    >
      <div>
        <div className="body">
          {isSelectImage ? (
            <Demin1
              cancelView={() => setSelectImage(false)}
              activeId={clickIdStore}
            />
          ) : (
            <Carousel dotPosition={dotPosition}>
              {mriDetails.map(({ img, date, content, id }) => {
                return (
                  <div
                    key={id}
                    style={contentStyle}
                    className={styles.carouselBody}
                  >
                    <img src={img} alt="brain" />
                    <div className={styles.content}>
                      <div>{date}</div>
                      <div>{content}</div>
                    </div>

                    <Button
                      onClick={() => {
                        setClickIdStore(id);
                        setSelectImage(true);
                      }}
                      className={styles.btn}
                      variant="success"
                    >
                      데이터등록
                    </Button>
                  </div>
                );
              })}
            </Carousel>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default DimentiaModal;
