import { TLoginValues } from "@/components/auth/utils/types/TLoginValues";
import { LOGIN_FIELD } from "@/components/auth/utils/enums/loginField.enum";

export const loginInitialValues: TLoginValues = {
  [LOGIN_FIELD.EMAIL]: "",
  [LOGIN_FIELD.PASSWORD]: "",
};
