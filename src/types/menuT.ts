import { MENUS } from "@/constants/path";

export type EachMenu = {
  name: string;
  path: string;
  imgPath?: string;
};

export type MenuKey = keyof typeof MENUS;

export type MenuValue = (typeof MENUS)[MenuKey];
