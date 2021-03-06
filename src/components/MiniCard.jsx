import React from "react";
import styled from "styled-components";
import Search from "../img/search.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  padding: 20px 35px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
`;
const Image = styled.img`
  width: 20px;
`;
const Text = styled.span`
  font-size: 16px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
const MiniCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>Lorem, ipsum dolor sit amet consectetur.</Text>
    </Container>
  );
};

export default MiniCard;
