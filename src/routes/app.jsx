import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  FontDownload,
  Notifications
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Classroom Analytics",
    navbarName: "Classroom Analytics (Teacher)",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/dashboardstud",
    sidebarName: "Classroom Analytics 2",
    navbarName: "Classroom Analytics (Student)",
    icon: Dashboard,
    component: UserProfile
  },
  {
    path: "/codecombat",
    sidebarName: "CodeCombat Analytics",
    navbarName: "CodeCombat Analytics",
    icon: BubbleChart,
    component: TableList
  },
  {
    path: "/textanalytics",
    sidebarName: "Text Analytics",
    navbarName: "Text Analytics",
    icon: FontDownload,
    component: Maps
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
