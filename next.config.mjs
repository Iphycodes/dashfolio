/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add SVGR loader
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true, // Makes SVG inherit parent font size
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
