const config = {
  appName: "Launcher",
  appDescription: "Build a beautiful landing page",
  domainName: "basiclauncher.st",
} as ConfigProps;

export const headerNav = [
  { name: "Features", href: "#features" },
  { name: "FAQ", href: "/#faq" },
  { name: "Blog", href: "/blog" },
];

export const logo = {
  headerLogo: {
    appName: "BasicLauncher",
    alt: "BasicLauncherLogo",
    src: "/logo.svg",
  },
  footerLogo: {
    appName: "BasicLauncher",
    alt: "BasicLauncherLogo",
    src: "/logo.svg",
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
