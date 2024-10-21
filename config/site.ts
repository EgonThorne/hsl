const config = {
  appName: "HSL Selector",
  appDescription: "HSL",
  domainName: "https://nexthsl.vercel.app/",
} as ConfigProps;

export const headerNav = [{ name: "Home", href: "/" }];

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
