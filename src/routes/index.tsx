import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "../components/Portfolio";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tu Nombre — Portafolio" },
      { name: "description", content: "Portafolio profesional de Tu Nombre. Desarrollador, diseñador y creador de productos digitales." },
      { property: "og:title", content: "Tu Nombre — Portafolio" },
      { property: "og:description", content: "Portafolio profesional de Tu Nombre. Desarrollador, diseñador y creador de productos digitales." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return <Portfolio />;
}
