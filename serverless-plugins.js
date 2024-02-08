const plugins = [
  "serverless-plugin-typescript",
  "serverless-plugin-optimize",
  "serverless-plugin-ifelse",
];

if (process.env.NODE_ENV === "local") {
  plugins.push("serverless-offline");
}

export default plugins
