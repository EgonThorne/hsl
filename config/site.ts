const config = {
  appName: "HSL Selector",
  appDescription: "",
  domainName: "",
} as ConfigProps;

export const headerNav = [];

export const logo = {
  headerLogo: {
    appName: "HSL Selector",
    alt: "HSL Selector",
    src: "/200x50.svg",
  },
  footerLogo: {
    appName: "HSL Selector",
    alt: "HSL Selector",
    src: "/200x50.svg",
  },
};

export const footerLinks = {
  company: [{ href: "/about", label: "About Us" }],
  legal: [
    { href: "/tos", label: "Terms of Service" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ],
};

export default config;

interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;
}
