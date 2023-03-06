import styled from "styled-components";
import LogoSrc from "../Images/google-logo-image.PNG";
import MicIcon from "../Svg/MicIcon.jsx";
import { Search } from "react-bootstrap-icons";

const MainContainer = styled.div`
    position: absolute;
    left: 50%;
    margin: 150px 0 0 -280px;
    text-align: center;
`;

const LogoIcon = styled.img.attrs({
    src: `${LogoSrc}`
  })`
    width: 270px;
    height: 90px;
`;

const SearchForm = styled.form`
  margin-top: 40px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 460px;
  padding: 12px 50px;
  font-size: 16px;

  border: 1px solid rgb(240, 240, 240);
  border-radius: 50px;
  box-shadow: 0 -3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
`;

const SearchIcon = styled(Search)`
  position: absolute;
  font-size: 13px;
  margin-top: 16px;
  margin-left: 20px;
`;

const ShortCutsDiv = styled.div`
  display: inline-block;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;

  :hover {
    background-color: rgb(220, 220, 220);
  }
`;

const PlusButton = styled.p`
  display: inline-block;
  border-radius: 50%;
  padding: 0 15px 10px;

  background-color: rgb(240, 240, 240);

  font-size: 30px;
  font-weight: 800;

  margin: 15px 0;
  `;

const PlusText = styled.p`
  font-size: 14px;
  margin: 0 10px 10px;
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