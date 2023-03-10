//import react hooks
import { useEffect, useState } from "react";
//import react styled component
import styled from "styled-components";
//import image src
import userButtonSrc from "../Images/google-user-image.jpg";

//전체 영역을 감싸는 컨테이너 css
const AllContainerDiv = styled.div`
    border: 1px solid rgb(240, 240, 240);
    border-radius: 10px;
    box-shadow: 0 -3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);

    position: absolute;
    top: 50px;
    right: 0;

    width: 300px;
    height: 440px;

    overflow-y: auto;

    padding-left: 10px;
`;

//각 아이콘 버튼들을 감싸는 div 영역에 대한 css
const ButtonDiv = styled.div`
    width: 78px;
    height: 80px;

    border-radius: 5px;

    margin: 5px 5px 0;
    display: inline-block;

    text-align: center;

    :hover {
        background-color: rgb(210, 232, 255);
    }

    > img {
        width: 40px;
        height: 40px;

        margin: 10px 0 5px;
    }
    > p {
        margin: 0;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

function FunctionArea() {

    //아이콘 이미지들의 src와 title 값을 저장할 useState 변수1
    const [ iconInfoList1, setIconInfoList1 ] = useState([]);
    //아이콘 이미지들의 src와 title 값을 저장할 useState 변수2
    const [ iconInfoList2, setIconInfoList2 ] = useState([]);

    //처음 렌더링될 때 아이콘들과 해당 버튼의 이름을 표시해주기 위한 useEffect 함수 코드
    useEffect(() => {
        const iconTempList1 = [];
        const titleTempList1 = ["검색", "비즈니스 프로필", "지도", "YouTube", "Play", "뉴스", "Gmail", "Meet", "채팅", "주소록", "드라이브", "캘린더", "번역", "사진", "My Ad Center", "쇼핑"];
        const iconTempList2 = [];
        const titleTempList2 = ["금융", "문서", "스프레드시트", "프레젠테이션", "도서", "Blogger", "행아웃", "Keep", "Jamboard", "클래스룸", "어스", "컬렉션", "아트 앤 컬처", "Google Ads", "팟캐스트", "Google One", "여행", "설문지", "Google Store"];

        for(let i = 1; i <= titleTempList1.length; i++) {
            iconTempList1.push([require("../Images/google-function-image" + i + ".png"), titleTempList1[i - 1]]);
        }
        for(let i = 1; i <= titleTempList2.length; i++) {
            iconTempList2.push([require("../Images/google-function-image" + (i + titleTempList1.length) + ".png"), titleTempList2[i - 1]]);
        }

        setIconInfoList1(iconTempList1);
        setIconInfoList2(iconTempList2);
    }, []);

    console.log(iconInfoList1);
    console.log(iconInfoList2);

    return (
        <AllContainerDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            {iconInfoList1.map((iconInfo, index) => (
                <ButtonDiv key={index}>
                    <img src={iconInfo[0]} />
                    <p>{iconInfo[1]}</p>
                </ButtonDiv>
            ))}
            <hr/>
            {iconInfoList2.map((iconInfo, index) => (
                <ButtonDiv key={index + 16}>
                    <img src={iconInfo[0]} />
                    <p>{iconInfo[1]}</p>
                </ButtonDiv>
            ))}
            <hr/>
            <ButtonDiv>
                <img src={require("../Images/google-function-image36.png")} />
                <p>Cloud Drive<sup>TM</sup> to Mail</p>
            </ButtonDiv>

        </AllContainerDiv>
    )
}

export default FunctionArea;