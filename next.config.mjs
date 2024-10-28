/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.BASEPATH,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
