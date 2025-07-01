import { MENUS } from "@/constants/path";

export type eachMenuT = {
  name: string;
  path: string;
  imgPath?: string;
  subMenus?: menuT;
};

export type menuT = {
  [K in (typeof MENUS)[keyof typeof MENUS]]: eachMenuT;
};
