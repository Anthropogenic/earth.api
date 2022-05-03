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
        destination:
          "https://anthropogenic.notion.site/Earth-API-Docs-f612e44da33d44ada672295d3db45da2",
        permanent: true,
      },
    ];
  },
};
