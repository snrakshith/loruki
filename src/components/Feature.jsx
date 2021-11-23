import React from "react";
import styled from "styled-components";
import App from "../img/app.jpg";
import Group from "../img/group.jpg";

import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const Image = styled.img`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 90%;
  height: 80vh;
  padding: 10px;
`;
const Left = styled.div`
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* padding-left: 15px; */
`;

const Title = styled.span`
  font-size: 70px;
`;
const SubTitle = styled.span`
  font-style: italic;
  font-size: 24px;
  margin-top: 30px;
  color: #333;
`;
const Desc = styled.p`
  color: grey;
  font-size: 20px;
  margin-top: 20px;
`;
const Button = styled.button`
  width: 150px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good </b>design
          <br />
          <b>good </b>business
        </Title>
        <SubTitle>We know that good design means good business</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identites, digital
          <br />
          experiences, and print materials that communicate clearly, achieve
          <br />
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and gurantee you to achieve marketing goals
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
