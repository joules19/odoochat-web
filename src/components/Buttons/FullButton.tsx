
import React from "react";
import styled from "styled-components";

// Define the types for the props
interface FullButtonProps {
  title: string;
  action?: () => void;
  border?: boolean;
}

const FullButton: React.FC<FullButtonProps> = ({ title, action, border }) => {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : undefined}
      border={border}
    >
      {title}
    </Wrapper>
  );
};

export default FullButton;

// Define the types for styled component props
interface WrapperProps {
  border?: boolean;
}

const Wrapper = styled.button<WrapperProps>`
  border: 1px solid ${(props: any) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props: any) => (props.border ? "transparent" : "#7620ff")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props: any) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props: any) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props: any) => (props.border ? "#7620ff" : "#fff")};
  }
`;
