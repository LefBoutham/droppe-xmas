module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/wishlist",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
