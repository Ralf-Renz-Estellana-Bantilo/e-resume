/** @type {import('next').NextConfig} */

const protocol = 'https';
const hostname = 'res.cloudinary.com';
const pathname = 'doprewqnx/image/upload';

const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol,
                hostname,
                port: '',
                pathname: `/${pathname}/**`,
            },
        ],
    },
};

module.exports = nextConfig;
