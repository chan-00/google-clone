//import styled component
import styled from "styled-components";
//import react bootstrap icon
import { Image, PaletteFill, Link } from "react-bootstrap-icons";
//import react hooks
import { useState } from "react";


//Chrome 맞춤 설정 버튼 클릭 시 나타나는 모달 창에 대한 전체 컨테이너 css
const PageSettingAllContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.3s;

    display: ${props => props.display};

    z-index: 2;
`;

//Chrome 맞춤 설정 클릭 시 나타나는 모달 창 컨테이너 css
const PageSettingContainer = styled.div`
    width: 790px;
    height: 510px;

    background-color: white;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 10px;
`;

//메인 컨텐츠 전체를 감싸는 컨테이너 css
const MainContentsAllContainer = styled.div`
    width: 100%;
    height: 87%;

    display: grid;
    grid-template-columns: 30% 1fr;
`;

//메인 컨텐츠의 버튼 영역을 감싸는 컨테이너 css
const MainContentsButtonContainer = styled.div`
    padding-top: 80px;

    > button {
        display: block;
    }
`;

//메인 컨텐츠의 버튼 중 클릭되지 않은 버튼에 대한 css
const MainContentsButton = styled.button`
    width: 83%;
    border-radius: 0 60px 60px 0;
    text-align: left;

    font-size: 14px;
    font-weight: 300;
    cursor: pointer;

    margin-bottom: 10px;
    padding: 9px 0;

    background-color: white;

    border: none;

    > svg {
        padding-left: 20px;
        padding-right: 20px;
        font-size: 16px;
        vertical-align: bottom;
    }

    :hover {
        background-color: rgb(220, 220, 220);
    }
`;

//메인 컨텐츠의 버튼 중 클릭된 버튼에 대한 css
const MainContentsClickedButton = styled(MainContentsButton)`
    background-color: rgb(184, 222, 255);
    color: blue;

    : hover {
        background-color: rgb(184, 222, 255);
    }
`;

//메인 컨텐츠의 헤더 영역을 감싸는 컨테이너 css
const MainContentsHeaderContainer = styled.p`
    margin: 40px 0;
`;

//버튼 영역을 감싸는 컨테이너 css
const ButtonContainer = styled.div`
    margin: 15px 15px 0 0;

    > button {
        float: right;
        border: 1px solid rgb(220, 220, 220);
        border-radius: 5px;
        padding: 7px 20px;
    }
`;

//취소 버튼 css
const CancelButton = styled.button`
    background-color: white;
    color: blue;
    margin-right: 10px;
    cursor: pointer;

    :hover {
        background-color: rgb(250, 250, 250);
    }
`;

//완료 버튼 css
const CompleteInputButton = styled.button`
    cursor: pointer;
    color: white;
    background-color: blue;

    :hover {
        opacity: 0.7;
    }
`;


function PageSetting({ display, setDisplay }) {

    //현재 어떤 버튼을 클릭했는지에 대한 값이 담겨져 있는 useState 변수
    //1 : 배경, 2 : 바로가기, 3 : 색상 및 테마
    const [ clickButton, setClickButton ] = useState(1);

    //버튼 클릭 시 해당 모달 창이 사라지게 하기 위한 이벤트 함수
    const handleClickButton = (e) => {
        e.stopPropagation();
        setDisplay("none");
    }

    //배경 버튼 클릭 시 호출되는 이벤트 함수
    const handleClick1 = () => {
        setClickButton(1);
    }
    //바로가기 버튼 클릭 시 호출되는 이벤트 함수
    const handleClick2 = () => {
        setClickButton(2);
    }
    //색상 및 테마 버튼 클릭 시 호출되는 이벤트 함수
    const handleClick3 = () => {
        setClickButton(3);
    }

    return (
        <PageSettingAllContainer display={display}>
            <PageSettingContainer>
                <MainContentsAllContainer>
                    <MainContentsButtonContainer>
                        {clickButton === 1 ?
                        <MainContentsClickedButton onClick={handleClick1}><Image />배경</MainContentsClickedButton> :
                        <MainContentsButton onClick={handleClick1}><Image />배경</MainContentsButton>}

                        {clickButton === 2 ?
                        <MainContentsClickedButton onClick={handleClick2}><Link />바로가기</MainContentsClickedButton> :
                        <MainContentsButton onClick={handleClick2}><Link />바로가기</MainContentsButton>}

                        {clickButton === 3 ?
                        <MainContentsClickedButton onClick={handleClick3}><PaletteFill />색상 및 테마</MainContentsClickedButton> :
                        <MainContentsButton onClick={handleClick3}><PaletteFill />색상 및 테마</MainContentsButton>}
                    </MainContentsButtonContainer>

                    <div>
                        <MainContentsHeaderContainer>페이지 맞춤설정</MainContentsHeaderContainer>
                        {clickButton === 1 ? <p>배경 내용입니당~</p> : clickButton === 2 ? <p>바로가기 내용입니당~</p> : <p>색상 및 테마 내용입니당~</p>}
                    </div>
                </MainContentsAllContainer>

                <ButtonContainer>
                    <CompleteInputButton onClick={handleClickButton}>완료</CompleteInputButton>
                    <CancelButton onClick={handleClickButton}>취소</CancelButton>
                </ButtonContainer>
            </PageSettingContainer>
        </PageSettingAllContainer>
    )
}

export default PageSetting;