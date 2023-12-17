/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.ctfassets.net"]
    },
    env:{
        CONTENTFUL_SPACE_ID: "l5ga6ot6r2vv",
        CONTENTFUL_ACCES_KEY: "HokQja3YmE2SrqcieX-VKM7TDD0ibWleJvtt9Vb80wg",
        CONTENTFUL_ENVIRONMENT: "master",
        NODEMAILER_EMAIL: "vitahealth.su@gmail.com",
        NODEMAILER_CCEMAIL: "",
        NODEMAILER_PASS: "rpah tagt dfoq quji"
    }
}

module.exports = nextConfig
