//import styled component
import styled from "styled-components";
//import react bootstrap icon
import { PenFill } from "react-bootstrap-icons";
//import create portal
import { createPortal } from "react-dom";
//import react component
import PageSetting from "./PageSetting";
//import react hooks
import { useState } from "react";

const SettingContainer = styled.div`
    position: absolute;
    bottom: 0px;
    right: 15px;

    border: 1px solid rgb(240, 240, 240);   
    border-radius: 50px;
    box-shadow:  0 3px 6px rgba(0,0,0,0.25);

    padding: 5px 15px;
    color: blue;

    cursor: pointer;
`;

const SettingPen = styled(PenFill)`
    font-size: 11px;
    margin-right: 10px;
`;

const SettingText = styled.span`
    font-size: 13px;
`;


function SettingDiv() {
    //Chrome 맞춤 설정 모달 창의 display 요소를 결정할 useState 변수
    const [ displayPageSetting, setDisplayPageSetting ] = useState("none");

    //페이지 맞춤설정 버튼 클릭 시 모달 창이 띄워지게 하기 위한 이벤트 함수
    const handleClickSettingContainer = () => {
        setDisplayPageSetting("block");
    }

    return (
        <SettingContainer title="페이지 맞춤설정" onClick={handleClickSettingContainer}>
            <SettingPen/>
            <SettingText>Chrome 맞춤설정</SettingText>
            {createPortal(<PageSetting display={displayPageSetting} setDisplay={setDisplayPageSetting} />, document.getElementById("root"))}
        </SettingContainer>
    )
}

export default SettingDiv;