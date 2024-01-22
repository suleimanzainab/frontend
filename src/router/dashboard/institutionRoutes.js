const institutionRoutes = [
  {
    path: "/dashboard/institution",
    name: "InstitutionDashboard",
    component: () =>
      import("../../views/dashboard/institution/InstitutionDashboard.vue")
  },
  
  
];

export { institutionRoutes };
