export interface MenuItem {
  label: string;
  href: string;
  isLink?: boolean;
  hasDropdown?: boolean;
  submenu?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  { label: "Home", href: "/", isLink: true },
  { label: "Professional Impact", href: "#impact", isLink: false },
  { label: "Testimonials", href: "#testimonials", isLink: false },
  { label: "Experience", href: "#experience", isLink: false },
  { label: "Skills", href: "#skills", isLink: false },
];
