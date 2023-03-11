import { atom } from "recoil";

//사용자가 user info 영역을 보기 위해 버튼을 클릭했을 때 해당 이벤트를 감지하여 영역을 보여주기 위한 recoil 값
const atomDisplayUserInfoArea = atom({
    key: "atomDisplayUserInfoArea",
    default: "none"
});

export default atomDisplayUserInfoArea;