import buttonSrc from "../Images/google-button-image.svg";
import styled from "styled-components";
import userButtonSrc from "../Images/google-user-image.jpg";

const ButtonContainer = styled.div`
  float:right;
  margin-top: 10px;
  * {
    margin-right: 25px;
    vertical-align: middle;
    cursor: pointer;
  }
  img {
    margin-right: 10px;
  }
`;

const ButtonText = styled.span`
  font-size: 20px;
  color: rgb(60, 60, 60);
  :hover {
    text-decoration: underline;
  }
`;

const ButtonIcon = styled.img.attrs({
  src: `${buttonSrc}`
})`
width: 35px;
height: 35px;
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
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 5px;
  :hover {
    background-color: rgb(240, 240, 240);
  }
`;


function ButtonDiv() {
  return (
    <ButtonContainer>
        <ButtonText>Gmail</ButtonText>
        <ButtonText>이미지</ButtonText>
        <ButtonIcon/>
        <ButtonPersonCircle/>
    </ButtonContainer>
  );
}

export default ButtonDiv;
