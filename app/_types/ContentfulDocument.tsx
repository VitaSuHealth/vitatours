import { Document } from "@contentful/rich-text-types";

type ContentfulDocument = {
        data: object,
        content: {
            data: object,
            content: any[],
            nodeType: Document
        },
        nodeType: Document
}

export default ContentfulDocument;