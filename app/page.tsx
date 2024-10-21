import { renderSchemaTags } from "@/config/seo";
import Component from "@/components/Component";

export default function Home() {
  return (
    <>
      {renderSchemaTags()}
      <Component />
    </>
  );
}
