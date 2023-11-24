import { useFormik } from "formik";
import { loginInitialValues } from "@/components/auth/utils/constants/loginInitialValues";
import { LOGIN_SCHEMA } from "@/components/auth/utils/constants/loginSchema";
import { TLoginValues } from "@/components/auth/utils/types/TLoginValues";
import { registerInitialValues } from "@/components/auth/utils/constants/registerInitialValues";
import { REGISTER_SCHEMA } from "@/components/auth/utils/constants/registerSchema";
import { TRegisterValues } from "@/components/auth/utils/types/TRegisterValues";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/routes/routes.enum";
import {
  useLazyLoginQuery,
  useLazyRegisterQuery,
} from "@/redux/APIs/accountApi";
import { LOCAL_STORAGE_ITEM } from "@/utils/enums/localStorageItem.enum";
import { useCallback } from "react";
import { TAuthData } from "@/redux/APIs/utils/types/request/TAuthData";

export const useGetFormiks = () => {
  const router = useRouter();

  const [register, registerData] = useLazyRegisterQuery();

  const [login, loginData] = useLazyLoginQuery();

  const handleRequest = useCallback(
    async (
      callback: typeof login | typeof register,
      values: TAuthData,
      successMessage: string,
    ) => {
      try {
        const { data, isSuccess, error } = await callback(values);

        if (data && isSuccess) {
          toast.success(successMessage);
          localStorage.setItem(
            LOCAL_STORAGE_ITEM.ACCESS_TOKEN,
            data.data[LOCAL_STORAGE_ITEM.ACCESS_TOKEN],
          );
          localStorage.setItem(
            LOCAL_STORAGE_ITEM.REFRESH_TOKEN,
            data.data[LOCAL_STORAGE_ITEM.REFRESH_TOKEN],
          );
          router.push(ROUTES.CHAT);
        } else {
          const e = new Error();
          e.cause = (error as any).data;
          throw e;
        }
      } catch (e: any) {
        toast.error(e.cause || "Что-то пошло не так");
        console.error(e.cause || e);
      }
    },
    [],
  );

  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: LOGIN_SCHEMA,
    onSubmit: async (values: TLoginValues) => {
      await handleRequest(login, values, "Вход выполнен успешно");
    },
  });

  const registerFormik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: REGISTER_SCHEMA,
    onSubmit: async (values: TRegisterValues, formikHelpers) => {
      formikHelpers.setTouched({ gender: true }).catch(console.error);
      await handleRequest(register, values, "Вы успешно зарегистрированы");
    },
  });

  return {
    loginFormik,
    registerFormik,
    loading: registerData.isLoading || loginData.isLoading,
  };
};
