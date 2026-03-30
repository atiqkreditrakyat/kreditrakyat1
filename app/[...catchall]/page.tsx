import { PLASMIC } from "../../plasmic-init";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";
import PlasmicClientRootProvider from "../../components/PlasmicClientRootProvider";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateStaticParams() {
    // @ts-ignore
    const pages = await PLASMIC.fetchPages();
    const validPages = pages
        .map((page: any) => {
            const pathInfo = page.path;
            if (pathInfo === "/") {
                return null; // Homepage is handled by app/page.tsx
            }
            return {
                catchall: pathInfo.substring(1).split("/"),
            };
        })
        .filter(Boolean);

    if (validPages.length === 0) {
        return [{ catchall: ["_plasmic_placeholder"] }];
    }

    return validPages;
}

export default async function PlasmicCatchAllPage({
    params,
}: {
    params: { catchall: string[] };
}) {
    const plasmicPath = "/" + params.catchall.join("/");

    // @ts-ignore
    const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
    if (!plasmicData) {
        notFound();
    }

    const pageMeta = plasmicData.entryCompMetas[0];

    return (
        // @ts-ignore
        <PlasmicClientRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
            <PlasmicComponent component={pageMeta.displayName} />
        </PlasmicClientRootProvider>
    );
}
