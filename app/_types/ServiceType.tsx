import ContentfulImage from "./ContentfulImage";
import { Document } from "@contentful/rich-text-types";


type ServiceType = {
    naam: string,
    beschrijving: Document,
    afbeelding: ContentfulImage,
    slug: string,
}

export default ServiceType;