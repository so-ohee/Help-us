/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// proxy
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/ocr",
        destination: "https://bec8udp05h.apigw.ntruss.com/custom/v1/15684/b2ab54fd83e5770a4f755bd8d556a8b0815ad072db3cd9bae4a86827b995edee/general",
      },
    ];
  },
};


