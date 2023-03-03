import buttonSrc from "../Images/google-button-image.svg";
import styled from "styled-components";
import userButtonSrc from "../Images/google-user-image.jpg";

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


function ButtonDiv() {
  return (
    <ButtonContainer>
        <ButtonText href="https://www.google.com/gmail/about/">Gmail</ButtonText>
        <ButtonText>이미지</ButtonText>
        <ButtonIcon/>
        <ButtonPersonCircle/>
    </ButtonContainer>
  );
}

export default ButtonDiv;
