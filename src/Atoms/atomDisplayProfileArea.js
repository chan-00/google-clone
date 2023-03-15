import { atom } from "recoil";

//사용자가 Profile 사진 영역을 보기 위해 버튼을 클릭했을 때 해당 이벤트를 감지하여 영역을 보여주기 위한 recoil 값
const atomDisplayProfileArea = atom({
    key: "atomDisplayProfileArea",
    default: "none"
});

export default atomDisplayProfileArea;