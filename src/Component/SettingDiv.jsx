import styled from "styled-components";
import { PenFill } from "react-bootstrap-icons";

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
    return (
        <SettingContainer title="페이지 맞춤설정">
            <SettingPen/>
            <SettingText>Chrome 맞춤설정</SettingText>
        </SettingContainer>
    )
}

export default SettingDiv;