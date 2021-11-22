import React from "react";
import styled from "styled-components";
import MiniCard from "./MiniCard";

const Container = styled.div``;

const Service = () => {
  return (
    <Container>
      <Left>
        <Image />
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
        <Button>How it works</Button>
      </Right>
    </Container>
  );
};

export default Service;
