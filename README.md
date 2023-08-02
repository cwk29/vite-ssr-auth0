# Vite SSR Auth0 Plugin

A plugin to enable auth0.

## vite-plugin-inspect

Visit `localhost:3000/__inspect/` to inspect the modules.

### Build Mode

```ts
// vite.config.ts
import Inspect from "vite-plugin-inspect";

export default {
  plugins: [
    Inspect({
      build: true,
      outputDir: ".vite-inspect",
    }),
  ],
};
```

After running `vite build`, the inspector client will be generated under `.vite-inspect`, where you can use `npx serve .vite-inspect` to check the result.
