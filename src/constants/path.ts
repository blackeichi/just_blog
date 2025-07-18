import { EachMenu, MenuValue } from "@/types/menuT";

export const MENUS = {
  HOME: "HOME",
  PROFILE: "PROFILE",
  CAREER: "CAREER",
  CLOSING: "CLOSING",
} as const;

export const ROUTES: Record<MenuValue, string> = {
  [MENUS.HOME]: "/",
  [MENUS.PROFILE]: "/profile",
  [MENUS.CAREER]: "/career",
  [MENUS.CLOSING]: "/closing",
} as const;

export const MENU_BY_ROUTE: Record<(typeof ROUTES)[MenuValue], MenuValue> = {
  [ROUTES.HOME]: MENUS.HOME,
  [ROUTES.PROFILE]: MENUS.PROFILE,
  [ROUTES.CAREER]: MENUS.CAREER,
  [ROUTES.CLOSING]: MENUS.CLOSING,
} as const;

export const MENU_LIST: Record<MenuValue, EachMenu> = {
  [MENUS.HOME]: {
    name: "Home",
    path: ROUTES[MENUS.HOME],
    imgPath: "/images/myComputer.png",
  },
  [MENUS.PROFILE]: {
    name: "Profile",
    path: ROUTES[MENUS.PROFILE],
    imgPath: "/images/document.png",
  },
  [MENUS.CAREER]: {
    name: "Career",
    path: ROUTES[MENUS.CAREER],
    imgPath: "/images/postsFolder.png",
  },
  [MENUS.CLOSING]: {
    name: "End",
    path: ROUTES[MENUS.CLOSING],
    imgPath: "/images/monitor_moon.png",
  },
};
