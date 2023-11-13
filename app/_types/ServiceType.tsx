import ContentfulDocument from "./ContentfulDocument";
import contentfulImage from "./ContentfulImage";
import { Document } from "@contentful/rich-text-types";


type ServiceType = {
    naam: string,
    beschrijving: Document,
    afbeelding: contentfulImage,
    slug: string,
}

export default ServiceType;