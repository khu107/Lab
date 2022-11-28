import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import brain2 from '../../../asset/brain2.png';
import brain1 from '../../../asset/brain3.png';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const H4 = styled.h5`
  color: white;
`;
export const H5 = styled.h6`
  color: white;
  margin-top: 10px;
`;

export const Rasm = styled.img`
  width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  width: 750px;
`;

export default function ResultDemintional(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Main>
      {loading ? (
        <BeatLoader color={'#36d7b7'} loading={loading} size={35} />
      ) : (
        <div>
          <H4>MRI 데이터 분석 및 결과 {props.activeId} </H4>
          <H5>등록 MRI</H5>
          <Rasm src={brain1} alt="" />
          <H5>예측 결과: Non demented</H5>
          <img src={brain2} alt="brain2" width={'250px'} />
          <H5>
            선택된 MRI 영상 이미지는 Non demented 로 분류되고 있으며 현재 치매
            정도는 정상 범주에 해당 됩니다. 현재 분석 결과는 참고용으로만
            제공되며 의학적 판단은 전문의에게 문의하시기 바랍니다.
          </H5>

          <Button onClick={() => props.cancelView()}>종료</Button>
        </div>
      )}
    </Main>
  );
}
