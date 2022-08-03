module.exports = {
  images: {
    domains: ["cdn.anthropogenic.com", "tailwindui.com"],
  },
  i18n: {
    locales: ["en", "fr", "nl", "ja"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "https://docs.hge.earth",
        permanent: true,
      },
    ];
  },
};
