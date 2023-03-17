//import styled component
import styled from "styled-components";


//Chrome 맞춤 설정 버튼 클릭 시 나타나는 모달 창에 대한 전체 컨테이너 css
const PageSettingAllContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.3s;

    display: ${props => props.display};

    z-index: 2;
`;

//Chrome 맞춤 설정 클릭 시 나타나는 모달 창 컨테이너 css
const PageSettingContainer = styled.div`
    width: 790px;
    height: 510px;

    background-color: white;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 10px;
`;

//메인 컨텐츠 전체를 감싸는 컨테이너 css
const MainContentsAllContainer = styled.div`
    width: 100%;
    height: 87%;
`;

//버튼 영역을 감싸는 컨테이너 css
const ButtonContainer = styled.div`
    margin: 15px 15px 0 0;

    > button {
        float: right;
        border: 1px solid rgb(220, 220, 220);
        border-radius: 5px;
        padding: 7px 20px;
    }
`;

//취소 버튼 css
const CancelButton = styled.button`
    background-color: white;
    color: blue;
    margin-right: 10px;
    cursor: pointer;

    :hover {
        background-color: rgb(250, 250, 250);
    }
`;

//완료 버튼 css
const CompleteInputButton = styled.button`
    cursor: pointer;
    color: white;
    background-color: blue;

    :hover {
        opacity: 0.7;
    }
`;


function PageSetting({ display, setDisplay }) {

    //버튼 클릭 시 해당 모달 창이 사라지게 하기 위한 이벤트 함수
    const handleClickButton = (e) => {
        e.stopPropagation();
        setDisplay("none");
    }

    console.log(display);

    return (
        <PageSettingAllContainer display={display}>
            <PageSettingContainer>
                <MainContentsAllContainer>

                </MainContentsAllContainer>
                <ButtonContainer>
                    <CompleteInputButton onClick={handleClickButton}>완료</CompleteInputButton>
                    <CancelButton onClick={handleClickButton}>취소</CancelButton>
                </ButtonContainer>
            </PageSettingContainer>
        </PageSettingAllContainer>
    )
}

export default PageSetting;