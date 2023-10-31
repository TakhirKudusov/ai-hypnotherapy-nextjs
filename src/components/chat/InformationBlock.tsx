import styled from "styled-components";
import LeftTopBlock from "@/components/chat/leftTopBlock";
import LeftBottomBlock from "@/components/chat/leftBottomBlock";

const InformationBlock = () => {
  return (
    <Wrapper>
      <LeftTopBlock />
      <BottomBlockWrapper>
        <LeftBottomBlock />
        <MarginBlock />
      </BottomBlockWrapper>
    </Wrapper>
  );
};

const BottomBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
`;

const MarginBlock = styled.div`
  min-height: 40px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  row-gap: 20px;
  flex-basis: 50%;
`;

export default InformationBlock;
