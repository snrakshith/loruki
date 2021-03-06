import "./app.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";

const Container = styled.div`
  /* height: 100vh; */
  overflow: hidden;
  position: relative;
`;
const Shape = css`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;
// const FeatureShape = styled.div`
//   ${Shape}
//   clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
//   background-color: pink;
// `;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0, 33% 100%, 0 100%);
  background-color: #ef98aa;
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path:polygon( 33% 0%, 100% 0%, 100% 100%, 70% 100%);
  background-color: crimson;
`;
const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        {/* <FeatureShape /> */}
      </Container>
      <Container>
        <Service />
        <ServiceShape />
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default App;
