//import react styled component
import styled from "styled-components";
//import recoil
import { useRecoilValue } from "recoil";
import atomDisplayProfileArea from "../Atoms/atomDisplayProfileArea";

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

function ProfileArea() {
    //해당 영역의 display 값을 담고 있는 recoil 변수
    const profileArea = useRecoilValue(atomDisplayProfileArea);

    return (
        <ProfileAllContainer display={profileArea}>
            <ProfileContainer>

            </ProfileContainer>
        </ProfileAllContainer>
    )
}

export default ProfileArea;