import { atom } from "recoil";

//사용자가 function 영역을 보기 위해 버튼을 클릭했을 때 해당 이벤트를 감지하여 영역을 보여주기 위한 recoil 값
const atomDisplayFunctionArea = atom({
    key: "atomDisplayFunctionArea",
    default: "none"
});

export default atomDisplayFunctionArea;