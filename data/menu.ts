export interface MenuItem {
  label: string;
  href: string;
  isLink?: boolean;
  hasDropdown?: boolean;
  submenu?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  { label: "About", href: "#about", isLink: false },
  { label: "Professional Impact", href: "#impact", isLink: false },
  { label: "Testimonials", href: "#testimonials", isLink: false },
  { label: "Experience", href: "#experience", isLink: false },
  { label: "Skills", href: "#skills", isLink: false },
  { label: "Work", href: "#work", isLink: false },
  { label: "Services", href: "#services", isLink: false },
  { label: "Contact", href: "#contact", isLink: false },
];
