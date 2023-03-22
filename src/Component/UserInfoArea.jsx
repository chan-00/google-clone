//import react hooks
import { useEffect, useState } from "react";
//import react styled component
import styled from "styled-components";
//import image src
import userButtonSrc from "../Images/google-user-image.jpg";
//recoil 사용
import { useRecoilValue, useRecoilState } from "recoil";
import atomDisplayUserInfoArea from "../Atoms/atomDisplayUserInfoArea";
import atomDisplayProfileArea from "../Atoms/atomDisplayProfileArea";
//import react bootstrap icon
import { CameraFill, PersonPlus, BoxArrowRight } from "react-bootstrap-icons";

//전체 영역을 감싸는 컨테이너 css
const AllContainerDiv = styled.div`
    border: 1px solid rgb(240, 240, 240);
    border-radius: 30px;
    box-shadow: 0 -3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
    background-color: rgb(246, 248, 255);

    position: absolute;
    top: 60px;
    right: 15px;

    width: 380px;
    height: 300px;

    overflow-y: auto;

    z-index: 1;

    display: ${props => props.display};

    @media screen and (max-height: 395px) {
        height: 80%;
    }
`;

//유저 정보 영역을 감싸는 컨테이너 css
const UserInfoContainer = styled.div`
    margin: 5px;
    
    background-color: white;
    border-radius: 30px;

    margin-left: 10px;

    width: 95%;
    height: 200px;

    overflow: hidden;
`;

//유저 이미지 영역을 감싸는 컨테이너 css
const UserImage = styled.div`
    position: relative;
    background: url(${userButtonSrc}) no-repeat center;
    background-size: cover;

    width: 70px;
    height: 70px;

    border-radius: 50%;
    display: inline-block;

    margin: 15px 0 0 15px;
`;

//유저 이미지의 카메라 아이콘을 감싸는 컨테이너 css
const UserCameraIconContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;

    padding: 3px 3px 0;

    background-color: white;
    border-radius: 50%;
    display: inline-block;
`;

//유저 이미지에 붙어 있는 카메라 아이콘에 대한 css
const UserCameraIcon = styled(CameraFill)`
    border: 1px solid gray;
    border-radius: 50%;
    font-size: 16px;
    padding: 3px;

    cursor: pointer;
    :hover {
        background-color: rgb(220, 220, 220);
    }
`;

//사진 옆의 유저 텍스트 정보가 담겨 있는 컨테이너 css
const UserInfoTextContainer = styled.div`
    display: inline-block;
    vertical-align: top;

    margin: 30px 0 0 10px;

    > p {
        font-size: 14px;
        margin: 0;
    }
    > span {
        font-size: 13px;
        color: rgb(60, 60, 60);
    }
`;

//Google 계정 관리 버튼에 대한 css
const UserAccountButton = styled.button`
    background-color: white;
    padding: 5px 15px;

    border: 1px solid black;
    border-radius: 7px;

    margin: 10px 0 20px 90px;
    cursor: pointer;
    :hover {
        background-color: rgb(220, 220, 220);
    }
`;

//다른 계정 추가 영역 컨테이너 css
const OtherAccountPlusContainer = styled.div`
    border-top: 3px solid rgb(246, 248, 255);
    width: 100%;
    height: 100%;
    padding: 15px 35px 0;
    cursor: pointer;

    > p {
        display: inline-block;
        font-size: 13px;
        margin: 0;
        margin-left: 35px;
        vertical-align: top;
    }

    :hover {
        background-color: rgb(237, 235, 251);
    }
`;

//계정 추가 아이콘 css
const PlusPersonIcon = styled(PersonPlus)`
    font-size: 20px;
`;

//로그아웃 영역 컨테이너 css
const LogoutContainer = styled.div`
    cursor: pointer;
    padding: 10px 45px;
    border-bottom: 1px solid rgb(220, 220, 220);

    > p {
        display: inline-block;
        font-size: 13px;
        margin: 0;
        margin-left: 35px;
        vertical-align: top;
    }

    :hover {
        background-color: rgb(237, 235, 251);
    }
`;

//로그아웃 아이콘 css
const LogoutIcon = styled(BoxArrowRight)`
    font-size: 20px;
`;

//마지막 텍스트 부분 영역 컨테이너 css
const AdditionTextContainer = styled.div`
    text-align: center;

    > div {
        border-radius: 5px;
        display: inline-block;
        font-size: 12px;
        cursor: pointer;

        margin: 13px 7px 0;
        padding: 3px;

        :hover {
            background-color: rgb(237, 235, 251);
        }
    }
    > span {
        font-weight: bold;
        font-size: 20px;
    }
`;

function UserInfoArea() {
    //해당 영역을 디스플레이할 recoil 값
    const userInfoAreaDisplay = useRecoilValue(atomDisplayUserInfoArea);
    //카메라 아이콘 클릭 시 모달 창을 화면에 띄울 recoil 값
    const [ profileArea, setProfileArea ] = useRecoilState(atomDisplayProfileArea);

    //해당 영역을 클릭했을 때에도 부모의 onMouseDown 이벤트로 function 영역이 없어지기 때문에, 해당 이벤트를 막기 위한 함수
    const handleStopMouseDownEventBubbling = (e) => {  
        if(profileArea === "none") {
            e.stopPropagation();
        }
    }

    //카메라 아이콘 클릭 시 호출되는 이벤트 함수
    const handleClickCameraIcon = () => {
        setProfileArea("block");
    }

    return (
        <AllContainerDiv display={userInfoAreaDisplay} onMouseDown={handleStopMouseDownEventBubbling}>
            <UserInfoContainer>
                <UserImage>
                    <UserCameraIconContainer>
                        <UserCameraIcon onClick={handleClickCameraIcon}/>
                    </UserCameraIconContainer>
                </UserImage>
                <UserInfoTextContainer>
                    <p>찬영 정</p>
                    <span>a37975387@gmail.com</span>
                </UserInfoTextContainer>
                <UserAccountButton>Google 계정 관리</UserAccountButton>
                <OtherAccountPlusContainer>
                    <PlusPersonIcon/>
                    <p>다른 계정 추가</p>
                </OtherAccountPlusContainer>
            </UserInfoContainer>
            <LogoutContainer>
                <LogoutIcon/>
                <p>로그아웃</p>
            </LogoutContainer>
            <AdditionTextContainer>
                <div onClick={() => window.location.href="https://policies.google.com/privacy?hl=ko"}>개인정보처리방침</div>
                <span>.</span>
                <div onClick={() => window.location.href="https://policies.google.com/terms?hl=ko"}>서비스 약관</div>
            </AdditionTextContainer>
        </AllContainerDiv>
    )
}

export default UserInfoArea;