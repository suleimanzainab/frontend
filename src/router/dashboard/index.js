import { adminRoutes } from "./admimRoutes";

import { institutionRoutes } from "./institutionRoutes";

const DashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../../views/dashboard/Dashboard.vue")
  },
  {
    path: "/user/profile",
    name: "UserProfile",
    component: () => import("../../views/User/UserProfile.vue")
  },
  

  ...adminRoutes,
 
  ...institutionRoutes
];

export { DashboardRoutes };
