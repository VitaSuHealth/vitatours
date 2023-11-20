/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.ctfassets.net"]
    },
    env:{
        CONTENTFUL_SPACE_ID: "l5ga6ot6r2vv",
        CONTENTFUL_ACCES_KEY: "HokQja3YmE2SrqcieX-VKM7TDD0ibWleJvtt9Vb80wg",
        CONTENTFUL_ENVIRONMENT: "master",
    }
}

module.exports = nextConfig
