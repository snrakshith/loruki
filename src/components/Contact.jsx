import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 80vh;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FormWrapper = styled.div`
  padding: 50px;
`;
const Wrapper = styled.div`
  /* padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between; */
`;
const Title = styled.h1`
  color: #333;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
const LeftForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
const Input = styled.input`
  padding: 18px;
  margin-top: 40px;
`;
const TextArea = styled.textarea`
  margin-top: 50px;
  height: 25vh;
  padding: 10px;
`;
const Button = styled.button`
  margin-top: 15px;
  cursor: pointer;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 13px 10px;
  border-radius: 10px;
`;
const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 180px;
`;
const Address = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  width: 25px;
  height: 25px;
`;
const Text = styled.span`
  margin: 20px 15px;
`;
const Contact = () => {
  return (
    <Container>
      {/* <Wrapper> */}
      <FormWrapper>
        <Title>
          Questions?
          <br /> Let's Get In Touch
        </Title>
        <Form>
          <LeftForm>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Input placeholder="Subject" />
          </LeftForm>
          <RightForm>
            <TextArea placeholder="Your Message" />
            <Button>Send</Button>
          </RightForm>
        </Form>
      </FormWrapper>
      <AddressContainer>
        <Address>
          <Icon src={Map} />
          <Text>123 Park Avenue St., New York USA</Text>
        </Address>
        <Address>
          <Icon src={Phone} />
          <Text>+1 631 1234 5678</Text>
          <Text>+1 326 1234 5678</Text>
        </Address>
        <Address>
          <Icon src={Send} />
          <Text>contact@lama.dev</Text>
          <Text>sales@lama.dev</Text>
        </Address>
      </AddressContainer>
      {/* </Wrapper> */}
    </Container>
  );
};

export default Contact;
