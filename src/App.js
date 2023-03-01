import ButtonDiv from "./Component/ButtonDiv";
import MainDiv from "./Component/MainDiv";
import styled from "styled-components";

const AllContainer = styled.div`
  position: relative;
`;


function App() {
  return (
    <AllContainer>
      <ButtonDiv/>
      <MainDiv/>
    </AllContainer>
  );
}

export default App;