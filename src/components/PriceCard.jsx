import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1.5px solid crimson; */
  border-radius: 10px;
  padding: 20px 30px;
  height: 70vh;
  margin-left: 50px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
`;
const Type = styled.button`
  border-radius: 20px;
  border: 1.5px solid crimson;
  background-color: #fff;
  cursor: pointer;
  padding: 10px;
  color: crimson;
  margin: 20px 0;
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 30px 0;
`;
const Button = styled.button`
  margin-top: 30px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  padding: 10px;
  background-color: darkblue;
  color: white;
  width: 120px;
`;
const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>
        /month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
