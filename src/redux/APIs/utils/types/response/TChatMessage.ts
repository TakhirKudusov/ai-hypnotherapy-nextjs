export type TChatMessage = {
  utcDateCreation: string;
  actor: 0 | 3;
  text: string;
  isLoading?: boolean;
  key: string;
};
