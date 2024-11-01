/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_URL,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
