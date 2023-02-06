import { ReactNode } from "react";
import styled from "styled-components";
import { BsQuestionCircle } from "react-icons/bs";

const Wrapper = styled.div`
  background-color: rgba(7, 91, 201, 0.5);
  color: white;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  font-size: 24px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  @media screen and (max-width: 840px) {
    justify-content: left;
  }
`;

const Title = styled.h1``;

const Info = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  justify-content: right;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  :hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    svg {
      color: ${(props) => props.theme.lightGrayColor};
      transition: color 0.3s ease-in-out;
    }
  }
`;

type IProps = {
  children: ReactNode;
};

function Header({ children }: IProps) {
  return (
    <Wrapper>
      <Title>{children}</Title>
      <Info>
        <BsQuestionCircle />
      </Info>
    </Wrapper>
  );
}

export default Header;
