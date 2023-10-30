import { FC, memo, PropsWithChildren, SyntheticEvent, useId } from "react";
import styled from "styled-components";
import { montserrat } from "@/lib/fonts";

type Props = {
  title: string;
  handleSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
};

const StyledForm: FC<PropsWithChildren<any> & Props> = ({
  children,
  title,
  handleSubmit,
}) => {
  const uniqId = useId();

  return (
    <Wrapper>
      <Title className={montserrat.className}>{title}</Title>
      <Form onSubmit={handleSubmit} id={uniqId}>
        {children}
      </Form>
    </Wrapper>
  );
};

const Title = styled.h3`
  color: black;
  font-size: 20px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
`;

export default memo(StyledForm);
