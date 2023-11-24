import { TLoginValues } from "@/components/auth/utils/types/TLoginValues";

export type TRegisterValues = TLoginValues & {
  confirmPassword: string;
  gender: 1 | 0 | null;
};
