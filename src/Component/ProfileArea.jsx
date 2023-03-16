//import react styled component
import styled from "styled-components";
//import recoil
import { useRecoilState } from "recoil";
import atomDisplayProfileArea from "../Atoms/atomDisplayProfileArea";
//import image src
import GoogleAccoundLogoSrc from "../Images/google-profile-image01.png";
import userButtonSrc from "../Images/google-user-image.jpg";
//import react bootstrap icon
import { X, ThreeDotsVertical, GlobeAmericas, ChevronRight, Pencil, Trash } from "react-bootstrap-icons";

//카메라 버튼 클릭 시 나타나는 모달 창에 대한 전체 컨테이너 css
const ProfileAllContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.3s;

    display: ${props => props.display};

    z-index: 2;
`;

//카메라 버튼 클릭 시 나타나는 모달 창 컨테이너 css
const ProfileContainer = styled.div`
    width: 400px;
    height: 485px;

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
        width: 120px;
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

//profile area의 컨텐츠 영역 컨테이너 css
const ProfileContentsContainer = styled.div`
    margin: 10px 25px;

    > h3 {
        font-weight: 400;
        margin: 0;
    }

    > p {
        font-size: 14px;
        color: gray;
    }
`;

//profile area의 컨텐츠 영역 중 모두에게 표시 영역에 대한 css
const MarkButtonContainer = styled.div`
    border-top: 1px solid rgb(180, 180, 180);
    border-bottom: 1px solid rgb(180, 180, 180);

    cursor: pointer;

    padding: 17px 5px;
    margin: 25px 0;

    :hover {
        background-color: rgb(250, 250, 250);
    }

    * {
        color: rgb(80, 80, 80);
        font-size: 14px;
    }

    > svg:first-child {
        margin-left: 5px;
        margin-right: 15px;
    }

    > span {
        vertical-align: top;
    }

    > svg:last-child {
        float: right;
        margin-top: 3px;
        font-size: 15px;
    }
`;

//유저 프로필사진 영역을 감싸고 있는 컨테이너 css
const UserProfileButtonContainer = styled.div`
    width: 100%;
    text-align: center;
`;

//유저 프로필사진 버튼에 대한 css
const ButtonPersonCircle = styled.img.attrs({
    src: `${userButtonSrc}`
  })`
    width: 145px;
    height: 145px;
    border-radius: 50%;
    cursor: pointer;

    margin-top: 10px;
`;

//변경&삭제 버튼 컨테이너에 대한 css
const ModifyButtonContainer = styled.div`
  width: 100%;
  margin-top: 30px;

  > button {
    cursor: pointer;
    width: 48%;
    background-color: white;
    color: blue;
    border: 1px solid rgb(200, 200, 200);
    padding: 7px 0;
    border-radius: 5px;
  }

  > button:hover {
    background-color: rgb(245, 255, 255);
  }

   svg {
    margin-right: 10px;
    vertical-align: bottom;
  }

  > button:first-child {
    margin-right: 10px;
  }
`;

function ProfileArea() {
    //해당 영역의 display 값을 담고 있는 recoil 변수
    const [ profileArea, setProfileArea ] = useRecoilState(atomDisplayProfileArea);

    //부모의 onMouseDown 이벤트 함수로 해당 창을 클릭했을 때 해당 창이 사라지지 않게 이벤트 버블링을 막는 함수
    const handleProfileOnMouseDown = (e) => {
        e.stopPropagation();
    }

    //부모의 onClick 이벤트로 버블링되지 않도록 막는 이벤트 함수
    const handleProfileOnClick = (e) => {
        e.stopPropagation();
    }

    //X버튼 클릭 시 해당 영역이 사라지도록 하는 이벤트 함수
    const handleClickNoneDisplay = () => {
        setProfileArea("none");
    }


    return (
        <ProfileAllContainer display={profileArea} onMouseDown={handleProfileOnMouseDown} onClick={handleClickNoneDisplay}>

            <ProfileContainer onClick={handleProfileOnClick}>
                <ProfileHeaderContainer>
                    <XButton onClick={handleClickNoneDisplay} />
                    <img src={GoogleAccoundLogoSrc} />
                    <ThreeDotsVerticalButton />
                </ProfileHeaderContainer>

                <ProfileContentsContainer>
                    <h3>프로필 사진</h3>
                    <p>사진을 추가하면 다른 사람이 나를 알아보기 쉬워지며 내가 계정에 로그인되어 있는지 확인할 수 있습니다.</p>

                    <MarkButtonContainer>
                        <GlobeAmericas/>
                        <span>모두에게 표시</span>
                        <ChevronRight/>
                    </MarkButtonContainer>

                    <UserProfileButtonContainer>
                        <ButtonPersonCircle/>
                    </UserProfileButtonContainer>

                    <ModifyButtonContainer>
                        <button><Pencil/>변경</button>
                        <button><Trash/>삭제</button>
                    </ModifyButtonContainer>
                </ProfileContentsContainer>
            </ProfileContainer>

        </ProfileAllContainer>
    )
}

export default ProfileArea;