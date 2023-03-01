import styled from "styled-components";
import LogoSrc from "../Images/google-logo-image.PNG";

const MainContainer = styled.div`
    position: absolute;
    left: 50%;
    margin: 230px 0 0 -400px;
    text-align: center;
`;

const ButtonIcon = styled.img.attrs({
    src: `${LogoSrc}`
  })`
    width: 413px;
    height: 140px;
`;

const SearchForm = styled.form`
  margin-top: 50px;
`;

const SearchInput = styled.input`
  width: 750px;
  font-size: 23px;
  padding: 20px;

  border: 1px solid rgb(240, 240, 240);
  border-radius: 50px;
  box-shadow: 0 -3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
`;

function MainDiv() {
    return (
        <MainContainer>
            <ButtonIcon/>
            <SearchForm>
                <SearchInput
                    placeholder="Google 검색 또는 URL 입력"    
                />
            </SearchForm>
        </MainContainer>
    )
}

export default MainDiv;