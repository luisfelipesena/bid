/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./drizzle/**/*']
    }
  }
}

export default nextConfig
