import { MENUS } from "@/constants/path";

export type EachSubMenu = {
  name: string;
  path: string;
};

export type EachMenu = {
  name: string;
  path: string;
  imgPath?: string;
  subMenus?: EachSubMenu[];
};

export type MenuKey = keyof typeof MENUS;

export type MenuValue = (typeof MENUS)[MenuKey];
