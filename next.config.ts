import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    useCache: true,
    nextScriptWorkers: true
  }
};

export default withContentCollections(nextConfig);
