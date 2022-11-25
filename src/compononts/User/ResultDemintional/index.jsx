import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Carousel, Modal } from 'antd';

export default function ResultDemintional() {
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
        <ClipLoader color={'36d7b7'} loading={loading} size={150} />
      ) : (
        <h1>salom</h1>
      )}
    </div>
  );
}
