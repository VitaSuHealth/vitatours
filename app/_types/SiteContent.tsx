import { Document } from "@contentful/rich-text-types";
import ContentfulImage from "./ContentfulImage";

type SiteContent = {
    naam: string,
    tekst?: Document,
    afbeelding?: ContentfulImage,
    slug: string,
}

export default SiteContent;