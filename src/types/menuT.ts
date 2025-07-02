import { MENUS, ROUTES } from "@/constants/path";

export type eachMenuT = {
  name: string;
  path: string;
  imgPath?: string;
  subMenus?: menuT;
};

export type menuT = {
  [K in (typeof MENUS)[keyof typeof MENUS]]: eachMenuT;
};

export type menuByRoutesT = {
  [K in (typeof ROUTES)[keyof typeof ROUTES]]: (typeof MENUS)[keyof typeof MENUS];
};
