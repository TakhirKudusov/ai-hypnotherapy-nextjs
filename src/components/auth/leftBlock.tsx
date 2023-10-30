import { FORM_NAME } from "@/utils/enums/formNameEnum";
import LoginForm from "@/components/auth/loginForm";
import RegisterForm from "@/components/auth/registerForm";
import { montserrat } from "@/lib/fonts";
import StyledButton from "@/UI kit/styledButton";
import { BUTTON_STYLE } from "@/UI kit/styledButton/utils/enums/ButtonStyle.enum";
import { useMemo, useState } from "react";
import { useGetFormiks } from "@/components/auth/utils/hooks/useGetFormiks";
import styled from "styled-components";
import BlockWrapper from "@/components/auth/blockWrapper";

const LeftBlock = () => {
  const [currForm, setCurrForm] = useState<FORM_NAME>(FORM_NAME.LOGIN);

  const { loginFormik, registerFormik } = useGetFormiks();

  const changeFormBtnText = useMemo(() => {
    switch (currForm) {
      case FORM_NAME.LOGIN:
        return "регистрация";
      case FORM_NAME.REGISTER:
        return "логин";
    }
  }, [currForm]);

  const subTitleText = useMemo(() => {
    switch (currForm) {
      case FORM_NAME.REGISTER:
        return "Уже есть аккаунт?";
      case FORM_NAME.LOGIN:
        return "Еще нет аккаунта?";
    }
  }, [currForm]);

  const handleChangeForm = () =>
    setCurrForm((prevState) => {
      switch (prevState) {
        case FORM_NAME.LOGIN:
          return FORM_NAME.REGISTER;
        case FORM_NAME.REGISTER:
          return FORM_NAME.LOGIN;
      }
    });

  return (
    <LeftBlockWrapper>
      <BlockContainer>
        {currForm === FORM_NAME.LOGIN && <LoginForm formik={loginFormik} />}
        {currForm === FORM_NAME.REGISTER && (
          <RegisterForm formik={registerFormik} />
        )}
        <ChangeFormContainer>
          <SubTitle className={montserrat.className}>{subTitleText}</SubTitle>
          <StyledButton
            text={changeFormBtnText}
            buttonStyle={BUTTON_STYLE.OUTLINED}
            onClick={handleChangeForm}
          />
        </ChangeFormContainer>
      </BlockContainer>
    </LeftBlockWrapper>
  );
};

const ChangeFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

const SubTitle = styled.p`
  font-size: 14px;
`;

const BlockContainer = styled.div`
  display: flex;
  row-gap: 40px;
  flex-direction: column;
  width: 50%;
  max-width: 430px;
`;

const LeftBlockWrapper = styled(BlockWrapper)``;

export default LeftBlock;
