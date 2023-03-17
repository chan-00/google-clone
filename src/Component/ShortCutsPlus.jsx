//import styled component
import styled from "styled-components";
//import react hooks
import { useState, useRef, useEffect } from "react";


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

//form 영역 컨테이너 css
const ShortCutsFormContainer = styled.form`
    width: 100%;
    height: 90%;

    position: relative;
`;

//input title 영역에 대한 css
const ShortCutsLabel = styled.p`
    font-size: 10px;
    color: ${props => props.color};
    margin: 10px 0;
`;

//input 영역에 대한 css
const ShortCutsInput = styled.input`
    width: 97%;
    border: none;
    border-radius: 5px;

    background-color: rgb(240, 240, 240);

    padding: 5px;
    margin-bottom: 10px;

    :focus {
        outline: none;
        box-shadow: 0 4px 4px -3px blue;
    }
`;

//취소, 완료 버튼을 감싸는 컨테이너 css
const ShortCutsButtonContainer = styled.div`
    position: absolute;
    bottom: 5px;
    right: 5px;

    > button {
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

//완료 버튼 css(input 입력 전)
const CompleteNoInputButton = styled.button`
    color: gray;
`;

//완료 버튼 css(input 입력 후)
const CompleteInputButton = styled.button`
    cursor: pointer;
    color: white;
    background-color: blue;

    :hover {
        opacity: 0.7;
    }
`;

function ShortCutsPlus({ display, setDisplay }) {

    //input 영역 클릭 시 이름 label css 변경을 위한 useState 변수
    const [ clickNameInput, setClickNameInput ] = useState("gray");
    //input 영역 클릭 시 URL label css 변경을 위한 useState 변수
    const [ clickURLInput, setClickURLInput ] = useState("gray");

    //이름 input 영역의 텍스트 길이 값을 갖고 있을 useState 변수
    const [ nameInputLength, setNameInputLength ] = useState(0);
    //url input 영역의 텍스트 길이 값을 갖고 있을 useState 변수
    const [ urlInputLength, setUrlInputLength ] = useState(0);

    //이름 input 영역과 연결된 useRef 변수
    const nameRef = useRef();
    const urlRef = useRef();

    //ShortCutsPlus 창이 처음 렌더링 될 때 이름 영역에 focus를 주기 위한 useEffect 함수
    useEffect(() => {
        nameRef.current.focus();
        setNameInputLength(0);
        setUrlInputLength(0);
    }, [display]);

    //이름 input 영역 클릭 시 호출되는 이벤트 함수
    const handleClickNameInput = () => {
        setClickNameInput("blue");
    }

    //URL input 영역 클릭 시 호출되는 이벤트 함수
    const handleClickURLInput = () => {
        setClickURLInput("blue");
    }

    //이름 input 영역 포커스 해제 시 호출되는 이벤트 함수
    const handleBlurNameInput = () => {
        setClickNameInput("gray");
    }

    //URL input 영역 포커스 해제 시 호출되는 이벤트 함수
    const handleBlurURLInput = () => {
        setClickURLInput("gray");
    }

    //바로가기 추가에서 submit 이벤트 발생 시 호출되는 이벤트 함수
    const handleShortCutsSubmit = (e) => {
        e.preventDefault();
    }

    //이름 input 영역의 값이 변화할 때 호출되는 이벤트 함수
    const handleChangeNameInput = (e) => {
        setNameInputLength(e.target.value.length);
    }

    //이름 input 영역의 값이 변화할 때 호출되는 이벤트 함수
    const handleChangeUrlInput = (e) => {
        setUrlInputLength(e.target.value.length);
    }

    //취소 버튼 클릭 시 호출되는 이벤트 함수
    const handleClickCancelButton = () => {
        nameRef.current.value = "";
        urlRef.current.value = "";
        setDisplay("none");
    }

    return (
        <ShortCutsAllContainer display={display}>
            <ProfileContainer>
                <ShortCutsTitle>바로가기 추가</ShortCutsTitle>
                <ShortCutsFormContainer onSubmit={handleShortCutsSubmit}>
                    <ShortCutsLabel color={clickNameInput}>이름</ShortCutsLabel>
                    <ShortCutsInput 
                        type="text"
                        onFocus={handleClickNameInput} 
                        onBlur={handleBlurNameInput} 
                        onChange={handleChangeNameInput}
                        ref={nameRef}
                    />
                    <ShortCutsLabel color={clickURLInput}>URL</ShortCutsLabel>
                    <ShortCutsInput 
                        type="text" 
                        onFocus={handleClickURLInput} 
                        onBlur={handleBlurURLInput} 
                        onChange={handleChangeUrlInput} 
                        ref={urlRef}
                    />
                    <ShortCutsButtonContainer>
                        <CancelButton onClick={handleClickCancelButton}>취소</CancelButton>
                        {(nameInputLength === 0) || (urlInputLength === 0) ? <CompleteNoInputButton>완료</CompleteNoInputButton>
                        : <CompleteInputButton>완료</CompleteInputButton>}
                    </ShortCutsButtonContainer>
                </ShortCutsFormContainer>
            </ProfileContainer>
        </ShortCutsAllContainer>
    )
}

export default ShortCutsPlus;