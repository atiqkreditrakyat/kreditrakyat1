import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "5c7UXYbV5Fq3AcRH2ziLEz",  // ID of a project you are using
      token: "ILuqSf1imewWvBEpiyaykmJCcxA5MK6F7rZBRMDCigqrxjV6E1NtfgN0GcYh8JodfNGSHYRluHlgjPLcsA"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
