import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Hero from "./components/Hero";
import About from "./components/About";
import FAQ from "./components/FAQ";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "5c7UXYbV5Fq3AcRH2ziLEz",
      token: "ILuqSf1imewWvBEpiyaykmJCcxA5MK6F7rZBRMDCigqrxjV6E1NtfgN0GcYh8JodfNGSHYRluHlgjPLcsA"
    }
  ],
  preview: true,
});

PLASMIC.registerComponent(Hero, {
  name: "Hero",
  props: {
    badge: "string",
    headline: "string",
    highlightedText: "string",
    subHeadline: "string",
    description: "string"
  }
});

PLASMIC.registerComponent(About, {
  name: "About",
  props: {
    badge: "string",
    title: "string",
    highlightedTitle: "string",
    description1: "string",
    description2: "string"
  }
});

PLASMIC.registerComponent(FAQ, {
  name: "FAQ",
  props: {
    badge: "string",
    title: "string",
    items: "object"
  }
});
