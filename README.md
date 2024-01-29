1. `npm install`
2. `npm run build` - so we emit some code in the `packages/utils` `dist` directory
3. `cd apps/native-app`
4. `npm run build-native`
5. `npm run start -- --clear` - start metro
6. in another terminal: `cd apps/native-app && xed ios` - open xcode in the `ios` dir and build the devclient into a simulator
7. launch the app in the expo devclient in the simulator

Now the following error should be visible on the screen:

```
Metro has encountered an error: While resolving module `@monorepo/utils/common/test1`, the Haste package `@monorepo/utils` was found. However the module `common/test1` could not be found within the package. Indeed, none of these files exist:

<path>/expo-metro-monorepo/packages/utils/common/test11(.native|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx|.ios.js|.native.js|.js|.ios.jsx|.native.jsx|.jsx|.ios.json|.native.json|.json|.ios.cjs|.native.cjs|.cjs)
<path>/expo-metro-repro/packages/utils/common/test1/index(.native|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx|.ios.js|.native.js|.js|.ios.jsx|.native.jsx|.jsx|.ios.json|.native.json|.json|.ios.cjs|.native.cjs|.cjs)`
    at resolveHasteName (<path>/expo-metro-repro/node_modules/metro-resolver/src/resolve.js:218:9)
    at resolve (<path>/expo-metro-repro/node_modules/metro-resolver/src/resolve.js:92:20)
    at doResolve (<path>/expo-metro-repro/node_modules/@expo/cli/src/start/server/metro/withMetroMultiPlatform.ts:227:16)
    at resolver (<path>/expo-metro-repro/node_modules/@expo/cli/src/start/server/metro/withMetroMultiPlatform.ts:277:18)
    at resolveRequest (<path>/expo-metro-repro/node_modules/@expo/cli/src/start/server/metro/withMetroResolvers.ts:64:32)
    at Object.resolve (<path>/expo-metro-repro/node_modules/metro-resolver/src/resolve.js:47:12)
    at ModuleResolver.resolveDependency (<path>/expo-metro-repro/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:79:31)
    at DependencyGraph.resolveDependency (<path>/expo-metro-repro/node_modules/metro/src/node-haste/DependencyGraph.js:277:43)
    at Object.resolve (<path>/expo-metro-repro/node_modules/metro/src/lib/transformHelpers.js:169:21)
    at Graph._resolveDependencies (<path>/expo-metro-repro/node_modules/metro/src/DeltaBundler/Graph.js:473:35)
```
