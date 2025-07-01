import { menuT } from "@/types/menuT";

export const MENUS = {
  HOME: "HOME",
  PROFILE: "PROFILE",
  CAREER: "CAREER",
  END: "END",
} as const;

export const ROUTES = {
  [MENUS.HOME]: "/",
  [MENUS.PROFILE]: "/profile",
  [MENUS.CAREER]: "/career",
  [MENUS.END]: "/end",
} as const;

export const MENU_LIST: menuT = {
  [MENUS.HOME]: {
    name: "Home",
    path: ROUTES[MENUS.HOME],
    imgPath: "/images/myComputer",
  },
  [MENUS.PROFILE]: {
    name: "Profile",
    path: ROUTES[MENUS.PROFILE],
    imgPath: "/images/document",
  },
  [MENUS.CAREER]: {
    name: "Career",
    path: ROUTES[MENUS.CAREER],
    imgPath: "/images/postsFolder",
  },
  [MENUS.END]: {
    name: "End",
    path: ROUTES[MENUS.END],
    imgPath: "/images/monitor_moon",
  },
};
