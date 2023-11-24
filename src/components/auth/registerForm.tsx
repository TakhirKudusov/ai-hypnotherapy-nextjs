import { FC, memo, SyntheticEvent, useMemo, useState } from "react";
import { FormikProps } from "formik";
import { TRegisterValues } from "@/components/auth/utils/types/TRegisterValues";
import StyledForm from "@/components/auth/styledForm";
import clsx from "clsx";
import InputWrapper from "@/components/auth/InputWrapper";
import StyledInput from "@/UI kit/styledInput";
import { REGISTER_FIELD } from "@/components/auth/utils/enums/registerField.enum";
import { REGISTER_PLACEHOLDER } from "@/components/auth/utils/enums/registerPlaceholder.enum";
import FormInnerContainer from "@/components/auth/formInnerContainer";
import StyledButton from "@/UI kit/styledButton";
import { BUTTON_STYLE } from "@/UI kit/styledButton/utils/enums/ButtonStyle.enum";
import styled from "styled-components";
import { montserrat } from "@/lib/fonts";

type Props = {
  formik: FormikProps<TRegisterValues>;
  loading: boolean;
};

const RegisterForm: FC<Props> = ({ formik, loading }) => {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formik.values.password !== formik.values.confirmPassword) {
      formik.touched.confirmPassword = true;
      return formik.setErrors({
        [REGISTER_FIELD.CONFIRM_PASSWORD]: "Пароли не совпадают",
      });
    }
    formik.handleSubmit(e);
  };

  const emailInputStyles = useMemo(
    () =>
      clsx({
        error: formik.errors.email && formik.touched.email,
      }),
    [formik.errors.email],
  );

  const passwordInputStyles = useMemo(
    () =>
      clsx({
        error: formik.errors.password && formik.touched.password,
      }),
    [formik.errors.password],
  );

  const confirmPasswordInputStyles = useMemo(
    () =>
      clsx({
        error: formik.errors.confirmPassword && formik.touched.confirmPassword,
      }),
    [formik.errors.confirmPassword],
  );

  return (
    <StyledForm title="Регистрация" handleSubmit={handleSubmit}>
      <>
        <FormInnerContainer>
          <InputWrapper
            errorMessage={formik.errors.email}
            touched={formik.touched.email}
          >
            <StyledInput
              value={formik.values[REGISTER_FIELD.EMAIL]}
              placeholder={REGISTER_PLACEHOLDER.EMAIL}
              name={REGISTER_FIELD.EMAIL}
              onChange={formik.handleChange}
              type="email"
              className={emailInputStyles}
            />
          </InputWrapper>
          <InputWrapper
            errorMessage={formik.errors.password}
            touched={formik.touched.password}
          >
            <StyledInput
              value={formik.values[REGISTER_FIELD.PASSWORD]}
              placeholder={REGISTER_PLACEHOLDER.PASSWORD}
              name={REGISTER_FIELD.PASSWORD}
              onChange={formik.handleChange}
              type="password"
              className={passwordInputStyles}
            />
          </InputWrapper>
          <InputWrapper
            errorMessage={formik.errors.confirmPassword}
            touched={formik.touched.confirmPassword}
          >
            <StyledInput
              value={formik.values[REGISTER_FIELD.CONFIRM_PASSWORD]}
              placeholder={REGISTER_PLACEHOLDER.CONFIRM_PASSWORD}
              name={REGISTER_FIELD.CONFIRM_PASSWORD}
              onChange={formik.handleChange}
              type="password"
              className={confirmPasswordInputStyles}
            />
          </InputWrapper>
          <InputWrapper
            errorMessage={formik.errors.gender}
            touched={formik.touched.gender}
          >
            <Title className={montserrat.className}>Выберите пол</Title>
            <CheckBoxWrapper>
              <CheckBoxContainer>
                <input
                  type="checkbox"
                  checked={male}
                  onClick={() => {
                    if (female) setFemale(false);
                    if (!male) {
                      formik
                        .setFieldValue("gender", "male")
                        .catch(console.error);
                    } else {
                      formik.setFieldValue("gender", null).catch(console.error);
                    }
                    setMale((prevState) => !prevState);
                  }}
                />
                <GenderTitle>Мужчина</GenderTitle>
              </CheckBoxContainer>
              <CheckBoxContainer>
                <input
                  type="checkbox"
                  checked={female}
                  onClick={() => {
                    if (male) setMale(false);
                    if (!female) {
                      formik
                        .setFieldValue("gender", "female")
                        .catch(console.error);
                    } else {
                      formik.setFieldValue("gender", null).catch(console.error);
                    }
                    setFemale((prevState) => !prevState);
                  }}
                />
                <GenderTitle>Женщина</GenderTitle>
              </CheckBoxContainer>
            </CheckBoxWrapper>
          </InputWrapper>
        </FormInnerContainer>
        <StyledButton
          type="submit"
          text="зарегистрироваться"
          buttonStyle={BUTTON_STYLE.FILLED}
          isLoading={loading}
        />
      </>
    </StyledForm>
  );
};

const GenderTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  column-gap: 15px;
`;

export default memo(RegisterForm);
