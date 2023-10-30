import * as Yup from "yup";
import { TRegisterValues } from "@/components/auth/utils/types/TRegisterValues";
import { passwordRegexp } from "@/components/auth/utils/constants/passwordRegexp";

export const REGISTER_SCHEMA = Yup.object<TRegisterValues>().shape({
  email: Yup.string()
    .email("Пожалуйста, введите корректный mail")
    .required("Пожалуйста, введите email"),
  username: Yup.string().required("Пожалуйста, введите username"),
  password: Yup.string()
    .required("Пожалуйста, введите пароль")
    .min(8, "Минимальная длина пароля - 8 символов")
    .matches(
      passwordRegexp,
      "Пароль должен содержать символы верхнего и нижнего регистров и цифры",
    ),
  confirmPassword: Yup.string()
    .required("Пожалуйста, подтвердите пароль")
    .min(8, "Минимальная длина пароля - 8 символов")
    .matches(
      passwordRegexp,
      "Пароль должен содержать символы верхнего и нижнего регистров и цифры",
    ),
});
