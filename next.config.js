const { withGlobalCss } = require("next-global-css");
const withTM = require("next-transpile-modules")([
  "@cloudscape-design/components",
]); // pass the modules you would like to see transpiled

const withConfig = withGlobalCss();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM(withConfig(nextConfig));
