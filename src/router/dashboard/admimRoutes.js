import { guards } from "../../guards";
import { router } from "../../router";

const adminRoutes = [
  {
    path: "/dashboard/admin",
    name: "AdminDashboard",
    beforeEnter: () =>
      guards.is_super_admin() || router.push({ name: "Unauthorized" }),
    component: () => import("../../views/dashboard/admin/AdminDashboard.vue")
  },
  {
    path: "/dashboard/plans",
    name: "Plans",
    beforeEnter: () =>
      guards.is_super_admin() || router.push({ name: "Unauthorized" }),
    component: () => import("../../views/dashboard/admin/plans/Plans.vue")
  },
  // {
  //   path: "/dashboard/accounting_periods",
  //   name: "AccountingPeriods",
  //   beforeEnter: () =>
  //     guards.is_super_admin() || router.push({ name: "Unauthorized" }),
  //   component: () =>
  //     import(
  //       "../../views/dashboard/admin/accounting-periods/AccountingPeriods.vue"
  //     )
  // },
  {
    path: "/plans/new",
    name: "New Plan",
    beforeEnter: () =>
      guards.is_super_admin() || router.push({ name: "Unauthorized" }),
    component: () => import("../../views/Plans/NewPlan.vue")
  },
  {
    path: "/plans/:uuid/detail",
    name: "PlanDetail",
    beforeEnter: () =>
      guards.is_super_admin() || router.push({ name: "Unauthorized" }),
    component: () => import("../../views/Plans/PlanDetail.vue")
  },
  // {
  //   path: '/dashboard/account-types',
  //   beforeEnter: () =>
  //     guards.is_super_admin() || router.push({ name: "Unauthorized" }),
  //   component: () => import("../../views/dashboard/admin/account-types/AccountTypes.vue")
  // },
  // {
  //   path: '/dashboard/sub-account-types',
  //   beforeEnter: () =>
  //     guards.is_super_admin() || router.push({ name: "Unauthorized" }),
  //   component: () => import("../../views/dashboard/admin/sub-account-types/SubAccountTypes.vue")
  // }
];

export { adminRoutes };
