import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Hero from "./components/Hero";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Marquee from "./components/Marquee";
import Testimonials from "./components/Testimonials";
import Comparison from "./components/Comparison";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

PLASMIC.registerComponent(Products, {
    name: "Products",
    props: {
        badge: "string",
        title: "string",
        description: "string",
        items: "object"
    }
});

PLASMIC.registerComponent(Benefits, {
    name: "Benefits",
    props: {
        badge: "string",
        title: "string",
        highlightedTitle: "string",
        description: "string",
        items: "object"
    }
});

PLASMIC.registerComponent(Marquee, {
    name: "Marquee",
    props: {
        title: "string",
        items: "object"
    }
});

PLASMIC.registerComponent(Testimonials, {
    name: "Testimonials",
    props: {
        badge: "string",
        title: "string",
        highlightedTitle: "string",
        description: "string",
        stats: "object",
        items: "object"
    }
});

PLASMIC.registerComponent(Comparison, {
    name: "Comparison",
    props: {
        badge: "string",
        title: "string",
        highlightedTitle: "string",
        description: "string",
        columnHeaders: "object",
        rows: "object"
    }
});

PLASMIC.registerComponent(Process, {
    name: "Process",
    props: {
        badge: "string",
        title: "string",
        description: "string",
        steps: "object",
        buttonText: "string"
    }
});

PLASMIC.registerComponent(CTA, {
    name: "CTA",
    props: {
        badge: "string",
        title: "string",
        description: "string",
        primaryButtonText: "string",
        whatsappButtonText: "string",
        whatsappNumber: "string",
        hotlineTitle: "string",
        hotlineValue: "string"
    }
});

PLASMIC.registerComponent(Header, {
    name: "Header",
    props: {
        buttonText: "string"
    }
});

PLASMIC.registerComponent(Footer, {
    name: "Footer",
    props: {
        description: "string",
        email: "string",
        phone: "string",
        address: "string",
        disclaimer: "string",
        copyrightText: "string"
    }
});
