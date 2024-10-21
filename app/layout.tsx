import "./globals.css";
import { ThemeProvider } from "@/components/dark/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getSEOTags } from "@/config/seo";
import Header from "@/components/header";
import Footer from "@/components/footer";

const gaId = process.env.NEXT_PUBLIC_GOOGLE_ID!;
const isDevelopment = process.env.NODE_ENV === "development";

// 这会将默认 SEO 标签添加到我们应用的所有页面。
// 您可以在每页中通过将参数传递给 getSOTags() 函数来覆盖它们。
export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex-1">
            <main className="max-w-7xl mx-auto">{children}</main>
          </div>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
      {!isDevelopment && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
