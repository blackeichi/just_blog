import { Mainmenu } from "@/types/menuT";

export const ROUTES = {
  SET_SYSTEM: "/set-system",
  ATTENDANCES: "/attendances",
  ATTENDANCE_REQUEST: "/attendance-requests",
  GROUP: "/group",
  USER_ASSIGNMENT: "/user-assignment",
  WORK_PLACE: "/work-place",
  WORK_SCHEDULE: "/work-schedule",
  WORK_SCHEDULE_TEMPLATE: "/work-schedule-template",
  BREAK: "/break",
  LEAVES: "/leaves",
  REPORT: "/report",
  APPROVAL: "/approval",
};

export const enum menuEnum {
  SETTING = "SETTING",
  ATTENDANCES = "ATTENDANCES",
  GROUP = "GROUP",
  WORK_PLACE = "WORK_PLACE",
  WORK_SCHEDULE = "WORK_SCHEDULE",
  REST = "REST",
  REPORT = "REPORT",
  APPROVAL = "APPROVAL",
}

export const ROUTES_MENU = {
  [ROUTES.SET_SYSTEM]: menuEnum.SETTING,
  [ROUTES.ATTENDANCES]: menuEnum.ATTENDANCES,
  [ROUTES.ATTENDANCE_REQUEST]: menuEnum.ATTENDANCES,
  [ROUTES.GROUP]: menuEnum.GROUP,
  [ROUTES.USER_ASSIGNMENT]: menuEnum.GROUP,
  [ROUTES.WORK_PLACE]: menuEnum.WORK_PLACE,
  [ROUTES.WORK_SCHEDULE]: menuEnum.WORK_SCHEDULE,
  [ROUTES.WORK_SCHEDULE_TEMPLATE]: menuEnum.WORK_SCHEDULE,
  [ROUTES.BREAK]: menuEnum.REST,
  [ROUTES.LEAVES]: menuEnum.REST,
  [ROUTES.REPORT]: menuEnum.REPORT,
  [ROUTES.APPROVAL]: menuEnum.APPROVAL,
};
export const ROUTES_TITLE = {
  LOGIN: "로그인",
  SET_SYSTEM: "근태 시스템 설정",
  ATTENDANCES: "출/퇴근 내역",
  ATTENDANCE_REQUEST: "출/퇴근 요청 내역",
  GROUP: "조직 현황",
  USER_ASSIGNMENT: "사용자 배정",
  WORK_PLACE: "근무지",
  WORK_SCHEDULE: "근무일정",
  WORK_SCHEDULE_TEMPLATE: "근무일정 템플릿",
  BREAK: "휴게 관리",
  LEAVES: "휴가 관리",
  REPORT: "리포트",
  APPROVAL: "전자결재",
};

export const MENU_LIST: Mainmenu[] = [
  {
    id: menuEnum.SETTING,
    name: "관리",
    subMenus: [
      {
        name: ROUTES_TITLE.SET_SYSTEM,
        path: ROUTES.SET_SYSTEM,
      },
    ],
  },
  {
    id: menuEnum.ATTENDANCES,
    name: "출/퇴근",
    subMenus: [
      {
        name: ROUTES_TITLE.ATTENDANCES,
        path: ROUTES.ATTENDANCES,
      },
      {
        name: ROUTES_TITLE.ATTENDANCE_REQUEST,
        path: ROUTES.ATTENDANCE_REQUEST,
      },
    ],
  },
  {
    id: menuEnum.GROUP,
    name: "조직(부서)",
    subMenus: [
      {
        name: ROUTES_TITLE.GROUP,
        path: ROUTES.GROUP,
      },
      {
        name: ROUTES_TITLE.USER_ASSIGNMENT,
        path: ROUTES.USER_ASSIGNMENT,
      },
    ],
  },
  {
    id: menuEnum.WORK_PLACE,
    name: ROUTES_TITLE.WORK_PLACE,
    path: ROUTES.WORK_PLACE,
  },
  {
    id: menuEnum.WORK_SCHEDULE,
    name: "근무일정",
    subMenus: [
      {
        name: ROUTES_TITLE.WORK_SCHEDULE,
        path: ROUTES.WORK_SCHEDULE,
      },
      {
        name: ROUTES_TITLE.WORK_SCHEDULE_TEMPLATE,
        path: ROUTES.WORK_SCHEDULE_TEMPLATE,
      },
    ],
  },
  {
    id: menuEnum.REST,
    name: "휴게/휴가",
    subMenus: [
      {
        name: ROUTES_TITLE.BREAK,
        path: ROUTES.BREAK,
      },
      {
        name: ROUTES_TITLE.LEAVES,
        path: ROUTES.LEAVES,
      },
    ],
  },
  {
    id: menuEnum.REPORT,
    name: ROUTES_TITLE.REPORT,
    path: ROUTES.REPORT,
  },
  {
    id: menuEnum.APPROVAL,
    name: "전자결재",
    path: ROUTES.APPROVAL,
  },
];
