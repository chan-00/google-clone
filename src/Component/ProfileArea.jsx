//import react styled component
import styled from "styled-components";
//import recoil
import { useRecoilValue } from "recoil";
import atomDisplayProfileArea from "../Atoms/atomDisplayProfileArea";
//import image src
import GoogleAccoundLogoSrc from "../Images/google-profile-image01.png";
//import react bootstrap icon
import { X, ThreeDotsVertical } from "react-bootstrap-icons";

//카메라 버튼 클릭 시 나타나는 모달 창에 대한 전체 컨테이너 css
const ProfileAllContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    transition: all 0.3s;

    display: ${props => props.display};

    z-index: 2;
`;

//카메라 버튼 클릭 시 나타나는 모달 창 컨테이너 css
const ProfileContainer = styled.div`
    width: 400px;
    height: 490px;

    background-color: white;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 10px;
`;

//모달 창의 Header 영역 컨테이너 css
const ProfileHeaderContainer = styled.div`
    width: 100%;

    text-align: center;

    * {
        cursor: pointer;
    }

    > svg:hover {
        background-color: rgb(240, 240, 240);
    }

    > img {
        width: 130px;
        height: 27px;
        cursor: auto;
        margin-top: 13px;
    }
`;

//X 버튼에 대한 CSS
const XButton = styled(X)`
    float: left;
    font-size: 30px;
    padding: 10px;
    border-radius: 50%;
`;

//ThreeDotsVertical 버튼에 대한 CSS
const ThreeDotsVerticalButton = styled(ThreeDotsVertical)`
    float: right;
    font-size: 20px;
    padding: 15px;
    border-radius: 50%;
`;

function ProfileArea() {
    //해당 영역의 display 값을 담고 있는 recoil 변수
    const profileArea = useRecoilValue(atomDisplayProfileArea);

    return (
        <ProfileAllContainer display={profileArea}>
            <ProfileContainer>
                <ProfileHeaderContainer>
                    <XButton />
                    <img src={GoogleAccoundLogoSrc} />
                    <ThreeDotsVerticalButton />
                </ProfileHeaderContainer>
            </ProfileContainer>
        </ProfileAllContainer>
    )
}

export default ProfileArea;