/** @type {import('next').NextConfig} */
const CopyPlugin = require("copy-webpack-plugin");
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  webpack: (config) => {
    // append the CopyPlugin to copy the file to your static dir
    // necessary for correct work of vad module!!!
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "node_modules/@ricky0123/vad-web/dist/vad.worklet.bundle.min.js",
            to: "static/[name][ext]",
          },
          {
            from: "node_modules/@ricky0123/vad-web/dist/*.onnx",
            to: "static/[name][ext]",
          },
          {
            from: "node_modules/onnxruntime-web/dist/*.wasm",
            to: "static/[name][ext]"
          },
        ],
      }),
    )

    // Important: return the modified config
    return config
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5003/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
