import "./app.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;
const IntroShape = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
  z-index: -1;
`;
const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
      <IntroShape />
    </Container>
  );
};

export default App;
