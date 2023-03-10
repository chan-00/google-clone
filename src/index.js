import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//recoil 사용을 위한 RecoilRoot 추가
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);