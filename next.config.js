/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  basePath: process.env.GITHUB_ACTIONS ? "/managatsuo" : "",
  trailingSlash: true,
}
