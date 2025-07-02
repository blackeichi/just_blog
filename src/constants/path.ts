import { menuByRoutesT, menuT } from "@/types/menuT";

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

export const MENU_BY_ROUTE: menuByRoutesT = {
  [ROUTES.HOME]: MENUS.HOME,
  [ROUTES.PROFILE]: MENUS.PROFILE,
  [ROUTES.CAREER]: MENUS.CAREER,
  [ROUTES.END]: MENUS.END,
} as const;

export const MENU_LIST: menuT = {
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
  [MENUS.END]: {
    name: "End",
    path: ROUTES[MENUS.END],
    imgPath: "/images/monitor_moon.png",
  },
} as const;
