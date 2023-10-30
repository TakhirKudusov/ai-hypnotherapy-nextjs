import StyledInput from "@/UI kit/styledInput";
import { FC, memo, SyntheticEvent, useMemo } from "react";
import { LOGIN_FIELD } from "@/components/auth/utils/enums/loginField.enum";
import { LOGIN_PLACEHOLDER } from "@/components/auth/utils/enums/loginPlaceholder.enum";
import StyledButton from "@/UI kit/styledButton";
import { BUTTON_STYLE } from "@/UI kit/styledButton/utils/enums/ButtonStyle.enum";
import clsx from "clsx";
import StyledForm from "@/components/auth/styledForm";
import InputWrapper from "@/components/auth/InputWrapper";
import { FormikProps } from "formik";
import { TLoginValues } from "@/components/auth/utils/types/TLoginValues";
import FormInnerContainer from "@/components/auth/formInnerContainer";

type Props = {
  formik: FormikProps<TLoginValues>;
};

const LoginForm: FC<Props> = ({ formik }) => {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
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

  return (
    <StyledForm title="С возвращением" handleSubmit={handleSubmit}>
      <>
        <FormInnerContainer>
          <InputWrapper
            errorMessage={formik.errors.email}
            touched={formik.touched.email}
          >
            <StyledInput
              value={formik.values[LOGIN_FIELD.EMAIL]}
              placeholder={LOGIN_PLACEHOLDER.EMAIL}
              name={LOGIN_FIELD.EMAIL}
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
              value={formik.values[LOGIN_FIELD.PASSWORD]}
              placeholder={LOGIN_PLACEHOLDER.PASSWORD}
              name={LOGIN_FIELD.PASSWORD}
              onChange={formik.handleChange}
              type="password"
              className={passwordInputStyles}
            />
          </InputWrapper>
        </FormInnerContainer>
        <StyledButton
          type="submit"
          text="войти"
          buttonStyle={BUTTON_STYLE.FILLED}
        />
      </>
    </StyledForm>
  );
};

export default memo(LoginForm);
