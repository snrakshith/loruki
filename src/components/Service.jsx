import React from "react";
import styled from "styled-components";
import MiniCard from "./MiniCard";
import AnimatedShapes from "./AnimatedShapes";
import How from "../img/how.png";
import Play from "../img/play.png";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const Left = styled.div`
  width: 50%;
`;
const Image = styled.img`
  /* width: 90%; */

  margin: 80px 0px 0px 100px;
`;
const ButtonImage = styled.img`
  margin-right: 5px;
  width: 25px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 0px 50px;
`;
const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
`;
const Desc = styled.p`
  margin-top: 30px;
  font-size: 24px;
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  margin-top: 40px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  cursor: pointer;
  padding: 10px;
`;

const Service = () => {
  return (
    <Container>
      <Left>
        <Image src={How} />
      </Left>
      <Right>
        <Title>Simple process to start</Title>
        <Desc>
          We provide digital experience services to startups and small
          businesses to looking for a partner of their digital media, design &
          development, lead generation and communications requirents. We work
          with you, not for you. Although we have a great resources
        </Desc>
        <CardContainer>
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </CardContainer>
        <Button>
          <ButtonImage src={Play} />
          How it works
        </Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Service;
// https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761
