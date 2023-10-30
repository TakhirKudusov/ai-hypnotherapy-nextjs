import { FC, memo, SyntheticEvent, useMemo } from "react";
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

type Props = {
  formik: FormikProps<TRegisterValues>;
};

const RegisterForm: FC<Props> = ({ formik }) => {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formik.values.password !== formik.values.confirmPassword)
      return formik.setFieldError(
        REGISTER_FIELD.CONFIRM_PASSWORD,
        "Пароли не совпадают",
      );
    formik.handleSubmit(e);
  };

  const emailInputStyles = useMemo(
    () =>
      clsx({
        error: formik.errors.email && formik.touched.email,
      }),
    [formik.errors.email],
  );

  const usernameInputStyles = useMemo(
    () =>
      clsx({
        error: formik.errors.username && formik.touched.username,
      }),
    [formik.errors.username],
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
            errorMessage={formik.errors.username}
            touched={formik.touched.username}
          >
            <StyledInput
              value={formik.values[REGISTER_FIELD.USERNAME]}
              placeholder={REGISTER_PLACEHOLDER.USERNAME}
              name={REGISTER_FIELD.USERNAME}
              onChange={formik.handleChange}
              type="text"
              className={usernameInputStyles}
            />
          </InputWrapper>
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
        </FormInnerContainer>
        <StyledButton
          type="submit"
          text="зарегистрироваться"
          buttonStyle={BUTTON_STYLE.FILLED}
        />
      </>
    </StyledForm>
  );
};

export default memo(RegisterForm);
