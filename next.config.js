const withPreact = require("next-plugin-preact");
//nextjs build analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withPreact({
    reactStrictMode: true,
    experimental: { esmExternals: true },
  })
);
