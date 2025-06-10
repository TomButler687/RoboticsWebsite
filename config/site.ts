export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Robotics Portfolio",
  description: "Thomas Butler - Robotics Portfolio",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Pick and Plonk",
      href: "/pickandplonk",
    },
    {
      label: "Genetic Algorithm",
      href: "/ga",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {},
};
