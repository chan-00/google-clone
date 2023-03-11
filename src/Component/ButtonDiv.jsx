import buttonSrc from "../Images/google-button-image.svg";
import styled from "styled-components";
import userButtonSrc from "../Images/google-user-image.jpg";
//recoil 사용
import { useRecoilState } from "recoil";
import atomDisplayFunctionArea from "../Atoms/atomDisplayFunctionArea";
import atomDisplayUserInfoArea from "../Atoms/atomDisplayUserInfoArea";

const ButtonContainer = styled.div`
  float:right;
  * {
    margin-right: 10px;
    vertical-align: middle;
    cursor: pointer;
  }
  img {
    margin-right: 10px;
  }
`;

const ButtonText = styled.a`
  font-size: 0.85rem;
  color: rgb(60, 60, 60);
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const ButtonIcon = styled.img.attrs({
  src: `${buttonSrc}`
})`
width: 25px;
height: 25px;
border-radius: 50%;
opacity: 0.7;
padding: 10px;
:hover {
  background-color: rgb(240, 240, 240);
}
`;

const ButtonPersonCircle = styled.img.attrs({
  src: `${userButtonSrc}`
})`
  color: gray;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
  :hover {
    background-color: rgb(240, 240, 240);
  }
`;

//다른 영역 클릭 시 mousedown 이벤트로 display 값이 none으로 바뀌는데, 여기서 function 버튼 클릭 시 mousedown 이벤트가 먼저 호출된다.
//그래서 function 영역이 none 값으로 닫혔다가 onclick 이벤트로 다시 block 값으로 바뀌어 결과적으로 버튼을 눌러도 function 영역이 꺼지지 않게 된다.
//그래서 위의 상황을 막기 위해 function 버튼의 onMouseDown 이벤트 함수를 추가하여 기본 동작을 막아야 한다.
const handleMouseDownFunctionButton = (e) => {
  e.stopPropagation();
}
//위와 같은 이유로 user info 버튼의 display 변경을 위한 함수
const handleMouseDownUserInfoButton = (e) => {
  e.stopPropagation();
}

function ButtonDiv() {
  //function area의 display 값을 나타내는 recoil 변수
  const [ functionAreaDisplay, setFunctionAreaDisplay ] = useRecoilState(atomDisplayFunctionArea);
  //function area의 display 값을 나타내는 recoil 변수
  const [ userInfoAreaDisplay, setUserInfoAreaDisplay ] = useRecoilState(atomDisplayUserInfoArea);

  //function 버튼 클릭 시 해당 영역을 display 하기 위한 이벤트 함수 호출
  const handleClickFunctionButton = () => {
    if(functionAreaDisplay === "none") {
      setFunctionAreaDisplay("block");
    }
    else if(functionAreaDisplay === "block") {
      setFunctionAreaDisplay("none");
    }
  }
  //user info 버튼 클릭 시 해당 영역을 display 하기 위한 이벤트 함수 호출
  const handleClickUserInfoButton = () => {
    if(userInfoAreaDisplay === "none") {
      setUserInfoAreaDisplay("block");
    }
    else if(userInfoAreaDisplay === "block") {
      setUserInfoAreaDisplay("none");
    }
  }

  return (
    <ButtonContainer>
        <ButtonText href="https://www.google.com/gmail/about/">Gmail</ButtonText>
        <ButtonText>이미지</ButtonText>
        <ButtonIcon onMouseDown={handleMouseDownFunctionButton} onClick={handleClickFunctionButton}/>
        <ButtonPersonCircle onMouseDown={handleMouseDownUserInfoButton} onClick={handleClickUserInfoButton}/>
    </ButtonContainer>
  );
}

export default ButtonDiv;
