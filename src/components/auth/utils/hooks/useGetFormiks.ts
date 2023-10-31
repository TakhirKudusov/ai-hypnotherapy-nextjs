import { FormikHelpers, useFormik } from "formik";
import { loginInitialValues } from "@/components/auth/utils/constants/loginInitialValues";
import { LOGIN_SCHEMA } from "@/components/auth/utils/constants/loginSchema";
import { TLoginValues } from "@/components/auth/utils/types/TLoginValues";
import { registerInitialValues } from "@/components/auth/utils/constants/registerInitialValues";
import { REGISTER_SCHEMA } from "@/components/auth/utils/constants/registerSchema";
import { TRegisterValues } from "@/components/auth/utils/types/TRegisterValues";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/routes/routes.enum";

export const useGetFormiks = () => {
  const router = useRouter();

  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: LOGIN_SCHEMA,
    onSubmit: async (
      values: TLoginValues,
      formikHelpers: FormikHelpers<TLoginValues>,
    ) => {
      console.log(values);
      const { email, password } = values;
      if (email === "test@test.test" && password === "123456qQ") {
        toast.success("Вход выполнен успешно");
        formikHelpers.resetForm();
        router.push(ROUTES.CHAT);
      } else {
        toast.error("Неверные данные пользователя");
      }
    },
  });

  const registerFormik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: REGISTER_SCHEMA,
    onSubmit: async (
      values: TRegisterValues,
      formikHelpers: FormikHelpers<TRegisterValues>,
    ) => {
      console.log(values);
      toast.success("Вы успешно зарегистрированы");
      formikHelpers.resetForm();
      router.push(ROUTES.CHAT);
    },
  });

  return { loginFormik, registerFormik };
};
