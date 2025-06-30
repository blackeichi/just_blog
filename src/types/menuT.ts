import { menuEnum } from "@/constants/path";

export interface SubMenu {
  name: string;
  path: string;
}
export interface Mainmenu {
  id: keyof typeof menuEnum;
  name: string;
  path?: string;
  subMenus?: SubMenu[];
}

export type MenuItem = Mainmenu;
