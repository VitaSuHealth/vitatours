import ContentfulDistrictObject from "./ContentfulDistrictObject";
import ContentfulImage from "./ContentfulImage";
import { Document } from "@contentful/rich-text-types";


type contentfulRessort = {
    naam: string,
    slug: string,
    gallerij: ContentfulImage[],
    beschrijving: Document,
    locatie: string,
    district: ContentfulDistrictObject
}


export default contentfulRessort;