/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: `/${process.env.REPO_NAME}`,
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
