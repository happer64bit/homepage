import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        JWT_SECRET: process.env.JWT_SECRET
    },
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    }
}

const millionConfig = {
    auto: true,
    rsc: true
};
  
export default million.next(nextConfig, millionConfig)
