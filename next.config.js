/** @type {import('next').NextConfig} */

const protocol = 'https';
const hostname = 'res.cloudinary.com';
const pathname = 'doprewqnx/image/upload';

const nextConfig = {
   reactStrictMode: true,
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
   webpack: (config, { webpack, isServer }) => {
      const envs = {};

      Object.keys(process.env).forEach((env) => {
         if (env.startsWith('NEXT_PUBLIC_')) {
            envs[env] = process.env[env];
         }
      });

      if (!isServer) {
         config.plugins.push(
            new webpack.DefinePlugin({
               'process.env': JSON.stringify(envs),
            })
         );
      }

      return config;
   },
};

module.exports = nextConfig;
