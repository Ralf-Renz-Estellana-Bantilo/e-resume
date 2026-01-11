/** @type {import('next').NextConfig} */

const node_env = process.env.NODE_ENV;
const isDevEnv = node_env === 'development';

const protocol = isDevEnv
   ? process.env.NEXT_PUBLIC_CLOUDINARY_PROTOCOL
   : process.env.CLOUDINARY_PROTOCOL;
const hostname = isDevEnv
   ? process.env.NEXT_PUBLIC_CLOUDINARY_HOSTNAME
   : process.env.CLOUDINARY_HOSTNAME;
const pathname = isDevEnv
   ? process.env.NEXT_PUBLIC_CLOUDINARY_PATHNAME
   : process.env.CLOUDINARY_PATHNAME;

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
