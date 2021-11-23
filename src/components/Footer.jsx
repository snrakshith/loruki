import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 10vh;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: black;
  color: white;
  align-items: center;
  padding: 15px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;
const ListItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
`;
const Copyright = styled.span`
  font-size: 18px;
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem> Guide </ListItem>
          <ListItem> Support </ListItem>
          <ListItem> API </ListItem>
          <ListItem> Community </ListItem>
        </List>
        <Copyright>Lama Dev &copy;</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
