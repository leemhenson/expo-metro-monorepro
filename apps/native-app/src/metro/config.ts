// Learn more https://docs.expo.io/guides/customizing-metro

import { getDefaultConfig } from "expo/metro-config";
import { mergeConfig } from "metro-config";
import { join } from "path";

const appRoot = join(__dirname, "..", "..");
const workspaceRoot = join(appRoot, "..", "..");
const packagesRoot = join(workspaceRoot, "packages");
const defaultConfig = getDefaultConfig(appRoot);

const resolverConditionNames = [
  ...(defaultConfig.resolver?.unstable_conditionNames ?? []),
  "default",
];

console.log("resolverConditionNames: ", resolverConditionNames);

const config = mergeConfig(defaultConfig, {
  projectRoot: workspaceRoot,
  // it can work without explicitly setting watchFolders, but I saw webpack errors in not related folders without it
  watchFolders: [appRoot, packagesRoot, workspaceRoot],
  resolver: {
    unstable_conditionNames: resolverConditionNames,
    unstable_enablePackageExports: true,
  },
});

module.exports = config;
