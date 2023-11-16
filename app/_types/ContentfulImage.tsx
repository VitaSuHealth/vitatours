type ContentfulImage = {
    metadata: object,
    sys: object,
    fields: {
        title: string,
        file: {
            url: string,
            details: object,
            fileName: string,
            contentType: string
        }
    }
}

export default ContentfulImage;