import React from "react";
import styled from "styled-components";
import Woman from "../img/woman.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 70px);
  /* background-color: red; */
  display: flex;
  padding: 20px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
`;
const Right = styled.div`
  width: 40%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  width: 60%;
`;
const Desc = styled.p`
  width: 60%;
  margin-top: 20px;
`;
const Info = styled.div`
  width: 60%;
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  background-color: darkblue;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 15px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
  font-size: 20px;
`;
const ContactInfo = styled.span`
  color: grey;
  margin-top: 5px;
  font-size: 20px;
`;
const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real imapct on their on
          their on their business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us (012) 345-6789</Phone>
            <ContactInfo>For only question or concern</ContactInfo>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
