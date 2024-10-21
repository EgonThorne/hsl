import Link from "next/link";
import Image from "next/image";
import { logo, footerLinks } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background" role="contentinfo">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-12">
          <section className="flex flex-col items-start gap-4">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src={logo.footerLogo.src}
                alt={logo.footerLogo.alt}
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              © {currentYear} {logo.footerLogo.appName}. All rights reserved.
            </p>
          </section>
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-2">
            <section>
              <h2 className="mb-3 text-sm font-semibold">Company</h2>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="mb-3 text-sm font-semibold">Legal</h2>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </nav>
        </div>
      </div>
    </footer>
  );
}
