import styled from "styled-components";
import LogoSrc from "../Images/google-logo-image.PNG";
import MicImageSrc from "../Images/google-mic-image.PNG";
import { Search } from "react-bootstrap-icons";

const MainContainer = styled.div`
    position: absolute;
    left: 50%;
    margin: 230px 0 0 -440px;
    text-align: center;
`;

const LogoIcon = styled.img.attrs({
    src: `${LogoSrc}`
  })`
    width: 413px;
    height: 140px;
`;

const SearchForm = styled.form`
  margin-top: 50px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 710px;
  font-size: 23px;
  padding: 20px 70px;

  border: 1px solid rgb(240, 240, 240);
  border-radius: 50px;
  box-shadow: 0 -3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
`;

const SearchIcon = styled(Search)`
  position: absolute;
  font-size: 20px;
  color: gray;
  margin-top: 25px;
  margin-left: 30px;
`;

const MicIcon = styled.img.attrs({
    src: `${MicImageSrc}`
  })`
  position: absolute;
  width: 42px;
  height: 42px;
  right: 20px;
  top: 15px;
  cursor: pointer;
`;

const ShortCutsDiv = styled.div`
  display: inline-block;
  border-radius: 15px;
  margin-top: 20px;
  cursor: pointer;

  :hover {
    background-color: rgb(220, 220, 220);
  }
`;

const PlusButton = styled.p`
  display: inline-block;
  border-radius: 50%;
  padding: 0 20px 10px;

  background-color: rgb(240, 240, 240);

  font-size: 40px;
  font-weight: 800;

  margin: 25px 0;
  `;

const PlusText = styled.p`
  font-size: 20px;
  margin: 5px 10px;
`;

function MainDiv() {
    return (
        <MainContainer>
            <LogoIcon/>
            <SearchForm>
                <SearchIcon/>
                <MicIcon title="음성 검색" />
                <SearchInput
                    placeholder="Google 검색 또는 URL 입력"    
                />
            </SearchForm>
            <ShortCutsDiv title="바로가기 추가">
                    <PlusButton>+</PlusButton>
                    <PlusText>바로가기 추가</PlusText>
            </ShortCutsDiv>
        </MainContainer>
    )
}

export default MainDiv;