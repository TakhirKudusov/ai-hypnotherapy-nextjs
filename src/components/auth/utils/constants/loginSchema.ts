import * as Yup from "yup";
import { TLoginValues } from "@/components/auth/utils/types/TLoginValues";
import { passwordRegexp } from "@/components/auth/utils/constants/passwordRegexp";

export const LOGIN_SCHEMA = Yup.object<TLoginValues>().shape({
  email: Yup.string()
    .email("Пожалуйста, введите корректный mail")
    .required("Пожалуйста, введите email"),
  password: Yup.string()
    .required("Пожалуйста, введите пароль")
    .min(8, "Минимальная длина пароля - 8 символов")
    .matches(
      passwordRegexp,
      "Пароль должен содержать символы верхнего и нижнего регистров и цифры",
    ),
});
