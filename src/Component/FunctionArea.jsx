import styled from "styled-components";
import userButtonSrc from "../Images/google-user-image.jpg";

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
        border-radius: 50%;

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
    return (
        <AllContainerDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>검색</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>
            <ButtonDiv>
                <img src={userButtonSrc} />
                <p>Google 계정</p>
            </ButtonDiv>

        </AllContainerDiv>
    )
}

export default FunctionArea;