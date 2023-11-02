import { montserrat } from "@/lib/fonts";
import styled from "styled-components";
import { CircleInfo } from "@styled-icons/fa-solid";
import { FC, memo } from "react";

type Props = {
  className?: string;
};

const InformationList: FC<Props> = ({ className }) => {
  return (
    <InfoContainer className={className}>
      <InfoRow>
        <InfoIcon />
        <InfoText className={montserrat.className}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </InfoText>
      </InfoRow>
      <InfoRow>
        <InfoIcon />
        <InfoText className={montserrat.className}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </InfoText>
      </InfoRow>
      <InfoRow>
        <InfoIcon />
        <InfoText className={montserrat.className}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </InfoText>
      </InfoRow>
      <InfoRow>
        <InfoIcon />
        <InfoText className={montserrat.className}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </InfoText>
      </InfoRow>
      <InfoRow>
        <InfoIcon />
        <InfoText className={montserrat.className}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </InfoText>
      </InfoRow>
    </InfoContainer>
  );
};

const InfoText = styled.p`
  color: #292929;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.2;
  @media screen and (max-width: 1200px) {
    font-size: 11px;
  }
`;

const InfoIcon = styled(CircleInfo)`
  color: #3d3b66;
  min-width: 15px;
  height: 15px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 7px;
  column-gap: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export default memo(InformationList);
