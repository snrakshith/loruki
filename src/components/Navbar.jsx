import styled from "styled-components";

const Container = styled.div`
  height: 70px;
  /* background-color: red; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  text-decoration: underline crimson;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: grey;
`;
const Button = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  border-color: white;
  background-color: crimson;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>Join Today</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
