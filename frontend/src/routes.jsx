import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, OrgTables, Notifications, Classes, StudentTables } from "@/pages/dashboard";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Organization",
        path: "/org-dashboard",
        element: <OrgTables />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Student",
        path: "/student-dashboard",
        element: <StudentTables />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: "classes",
        path: "/classes",
        element: <Classes />,
      },
    ],
  },
];

export default routes;
