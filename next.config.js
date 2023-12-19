/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        JWT_SECRET: process.env.JWT_SECRET
    },
    reactStrictMode: false,
}

module.exports = nextConfig
