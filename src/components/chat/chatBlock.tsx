import styled from "styled-components";

const ChatBlock = () => {
  return <Container></Container>;
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  //background-color: green;
  flex-basis: 50%;
  position: sticky;
  z-index: 1;
  top: 0;
  padding-bottom: 40px;
`;

export default ChatBlock;
