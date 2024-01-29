module.exports = {
  name: "my-app",
  slug: "my-app",
  experiments: {
    tsconfigPaths: true,
  },
  orientation: "portrait",
  android: {
    package: "com.monorepo.myapp",
  },
  ios: {
    bundleIdentifier: "com.monorepo.myapp",
  },
};
