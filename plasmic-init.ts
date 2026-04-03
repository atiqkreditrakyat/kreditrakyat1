import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Hero from "./components/Hero";
import About from "./components/About";
import FAQ from "./components/FAQ";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "wbzrBSUp5WarDzzqKyUecH",
      token: "0U1k2u4C781pkA1YyoiDawFL3lDxqJfMc8cLOeXtZ07gEixkfGoj1yTVkPYn8KLG1Q0QoZ3OADp8jzMTMjtA"
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
