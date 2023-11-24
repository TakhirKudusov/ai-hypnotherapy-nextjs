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
        <InfoText>
          <strong>Как начать пользоваться?</strong>
          <br /> Четко определи задачу (проблему, которую хочешь решить; страх
          от&nbsp;которого хочешь избавиться; цель, которую хочешь достигнуть).
          Сформулируй её&nbsp;одним предложением. Удели 2-3 часа непрерывного
          времени, чтобы полностью сосредоточиться на&nbsp;процессе работы
          с&nbsp;GeniusMind Bot. Начни диалог с&nbsp;ботом. Твоё участие
          в&nbsp;беседе приведет к&nbsp;состоянию сознания, в&nbsp;котором
          ты&nbsp;сможешь переосмыслить и&nbsp;отредактировать свои обычные
          реакции и&nbsp;действия.
        </InfoText>
      </InfoRow>
      <InfoRow>
        <InfoIcon />
        <InfoText>
          <strong>Важно помнить:</strong>
          <br /> GeniusMind Bot представляет собой инструмент самопомощи
          и&nbsp;не&nbsp;предназначен для замены профессионального
          психологического лечения. Если у&nbsp;вас есть серьезные
          психологические проблемы, рекомендуется обратиться за&nbsp;помощью
          к&nbsp;квалифицированному специалисту.
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
  color: #4768b5;
  min-width: 15px;
  height: 15px;
`;

const InfoRow = styled.div`
  display: flex;
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
