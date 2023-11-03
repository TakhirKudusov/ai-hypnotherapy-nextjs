import { LOCAL_STORAGE_ITEM } from "@/utils/enums/localStorageItem.enum";

export type TTokenData = {
  [LOCAL_STORAGE_ITEM.ACCESS_TOKEN]: string;
  [LOCAL_STORAGE_ITEM.REFRESH_TOKEN]: string;
};
