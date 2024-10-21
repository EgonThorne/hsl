import { renderSchemaTags } from "@/config/seo";
import Example from "@/components/home/example";
import FAQ from "@/components/home/Faq";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <>
      {renderSchemaTags()}
      <Example />
      <Features />
      <FAQ />
    </>
  );
}
