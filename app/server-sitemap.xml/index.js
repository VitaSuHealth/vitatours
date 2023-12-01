import { getServerSideSitemap, ISitemapField } from "next-sitemap";

//CMS imports
import { client } from '@/app/_lib/client';

export const getServerSideProps = async (ctx) => {
 
    const ressortCollection = await client.getEntries({content_type: 'ressort'}).items;

    const ressorten = ressortCollection.map((ressort) => ({
        loc: `https://www.vitatours.sr/ressorten/${ressort.slug}`,
        lastmod: new Date().toISOString(),
    }));


    return getServerSideSitemap(ctx, ressorten)
}

export default function Site() {}
