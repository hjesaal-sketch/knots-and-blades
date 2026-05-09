// app/page.tsx
import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirige al idioma por defecto (inglés)
  redirect("/en");
}