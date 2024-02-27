import React from "react";
import SignUpForm from "./SignUpForm";
import styled from "@emotion/styled";

export const SignUp = () => {
  return (
    <Wrapper>
      <SignUpForm />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
