import { TLoginValues } from "@/components/auth/utils/types/TLoginValues";

export type TRegisterValues = TLoginValues & {
  username: string;
  confirmPassword: string;
};
