import { LOGIN_FIELD } from "@/components/auth/utils/enums/loginField.enum";

export type TLoginValues = {
  [LOGIN_FIELD.EMAIL]: string;
  [LOGIN_FIELD.PASSWORD]: string;
};
