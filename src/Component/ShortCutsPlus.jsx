import styled from "styled-components";


//바로가기 추가 버튼 클릭 시 나타나는 모달 창에 대한 전체 컨테이너 css
const ShortCutsAllContainer = styled.div`
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
    width: 475px;
    height: 235px;

    background-color: white;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 15px;

    border-radius: 10px;
`;

//바로가기 추가 title 영역의 css
const ShortCutsTitle = styled.p`
    margin: 0;
    font-size: 14px;
`;

//input title 영역에 대한 css
const ShortCutsLabel = styled.p`
    font-size: 10px;
    color: gray;
    margin: 10px 0;
`;

//input 영역에 대한 css
const ShortCutsInput = styled.input`
    width: 95%;
    border: none;
    border-radius: 5px;

    background-color: rgb(240, 240, 240);

    padding: 5px;

    :active {
        border: none;
        border-bottom: 1px solid blue;
    }
`;

function ShortCutsPlus({ display }) {

    //input 영역 클릭 시 css 변경을 위한 useState 변수
    const [ clickNameInput, setClickNameInput ] = useState(0);

    //이름 input 영역 클릭 시 호출되는 이벤트 함수
    const handleClickNameInput = (e) => {
        e.stopPropagation();
        setClickNameInput(1);
    }



    return (
        <ShortCutsAllContainer display={display}>
            <ProfileContainer>
                <ShortCutsTitle>바로가기 추가</ShortCutsTitle>
                <form>
                    <ShortCutsLabel>이름</ShortCutsLabel>
                    <ShortCutsInput type="text" onClick={handleClickNameInput} />
                </form>
            </ProfileContainer>
        </ShortCutsAllContainer>
    )
}

export default ShortCutsPlus;