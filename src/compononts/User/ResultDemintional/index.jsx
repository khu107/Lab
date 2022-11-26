import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Carousel, Modal } from 'antd';
import { BeatLoader } from 'react-spinners';

export default function ResultDemintional(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loading ? (
        <BeatLoader color={'#36d7b7'} loading={loading} size={15} />
      ) : (
        <div>
          <h4>MRI 데이터 분석 및 결과 {props.activeId} </h4>
          <button onClick={() => props.cancelView()}>go back</button>
        </div>
      )}
    </div>
  );
}
