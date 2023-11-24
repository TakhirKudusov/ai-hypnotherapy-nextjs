import { TLoginValues } from "@/components/auth/utils/types/TLoginValues";

export type TRegisterValues = TLoginValues & {
  confirmPassword: string;
  gender: "male" | "female" | null;
};
