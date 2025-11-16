import { LoaderDebugContent } from "./LoaderDebugContent";
import { locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LoaderDebugPage() {
  return <LoaderDebugContent />;
}
