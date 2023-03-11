//import react-routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import react components
import ButtonDiv from "../Component/ButtonDiv";
import MainDiv from "../Component/MainDiv";
import SettingDiv from "../Component/SettingDiv";
import FunctionArea from "../Component/FunctionArea";
import styled from "styled-components";
//import react hooks
import { useEffect } from "react";
//recoil 사용
import { useSetRecoilState } from "recoil";
import atomDisplayFunctionArea from "../Atoms/atomDisplayFunctionArea";

const AllContainer = styled.div`
  height: 96vh;
  position: relative;
`;

function MainPage() {
  //다른 영역 클릭 시 function display 값을 none으로 바꿔 영역을 사라지게 하기 위한 set recoil 함수
  const setDisplayFunctionArea = useSetRecoilState(atomDisplayFunctionArea);

  //다른 어느 영역을 클릭해도 function Area 영역이 사라지게끔 window 이벤트 함수를 추가하는 useEffect 함수 코드
  useEffect(() => {
    const handleClick = () => {
      setDisplayFunctionArea("none");
    }
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <AllContainer>
      <ButtonDiv/>
      <MainDiv/>
      <SettingDiv/>
      <FunctionArea/>
    </AllContainer>
  );
}

export default MainPage;