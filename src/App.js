import ButtonDiv from "./Component/ButtonDiv";
import MainDiv from "./Component/MainDiv";
import SettingDiv from "./Component/SettingDiv";
import styled from "styled-components";

const AllContainer = styled.div`
  height: 96vh;
  position: relative;
`;


function App() {
  return (
    <AllContainer>
      <ButtonDiv/>
      <MainDiv/>
      <SettingDiv/>
    </AllContainer>
  );
}

export default App;