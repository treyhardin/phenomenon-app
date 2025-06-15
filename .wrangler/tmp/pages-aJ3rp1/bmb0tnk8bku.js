// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/",
    "/_astro/*",
    "/DrukWide-Heavy.woff",
    "/DrukWide-Heavy.woff2",
    "/DrukWide-HeavyItalic.woff",
    "/DrukWide-HeavyItalic.woff2",
    "/DrukWide-Medium.woff",
    "/DrukWide-Medium.woff2",
    "/PPSupplySans-Regular.woff",
    "/PPSupplySans-Regular.woff2",
    "/PPSupplySans-Ultralight.woff",
    "/PPSupplySans-Ultralight.woff2",
    "/favicon.svg",
    "/og_image.png",
    "/search-data.json",
    "/api/*",
    "/shapes/*",
    "/united-states/*",
    "/australia/*",
    "/united-kingdom/*",
    "/atlantic-ocean/*",
    "/india/*",
    "/mexico/*",
    "/argentina/*",
    "/bahamas/*",
    "/caribbean-sea/*",
    "/albania/*",
    "/thailand/*",
    "/afghanistan/*",
    "/pacific-ocean/*",
    "/aruba/*",
    "/armenia/*",
    "/algeria/*",
    "/hungary/*",
    "/south-africa/*",
    "/antigua-and-barbuda/*",
    "/antarctica/*",
    "/international-waters/*",
    "/iraq/*",
    "/norway/*",
    "/unknown/*",
    "/zimbabwe/*",
    "/vietnam/*",
    "/canada/*",
    "/brazil/*",
    "/ireland/*",
    "/germany/*",
    "/turkiye/*",
    "/spain/*",
    "/belgium/*",
    "/netherlands/*",
    "/italy/*",
    "/united-arab-emirates/*",
    "/iceland/*",
    "/iran/*",
    "/new-zealand/*",
    "/sweden/*",
    "/france/*",
    "/dominican-republic/*",
    "/bosnia-and-herzegovina/*",
    "/portugal/*",
    "/indonesia/*",
    "/czech-republic/*",
    "/peru/*",
    "/poland/*",
    "/ukraine/*",
    "/philippines/*",
    "/croatia/*",
    "/nepal/*",
    "/austria/*",
    "/israel/*",
    "/chile/*",
    "/japan/*",
    "/oman/*",
    "/venezuela/*",
    "/colombia/*",
    "/paraguay/*",
    "/russia/*",
    "/cyprus/*",
    "/egypt/*",
    "/honduras/*",
    "/bangladesh/*",
    "/guatemala/*",
    "/estonia/*",
    "/switzerland/*",
    "/lithuania/*",
    "/kazakhstan/*",
    "/morocco/*",
    "/china/*",
    "/mauritius/*",
    "/pakistan/*",
    "/saudi-arabia/*",
    "/northern-mariana-islands/*",
    "/south-korea/*",
    "/jamaica/*",
    "/us-virgin-islands/*",
    "/slovenia/*",
    "/ecuador/*",
    "/finland/*"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/treyhardin/Documents/Active Projects/phenomenon-app/.wrangler/tmp/pages-aJ3rp1/bundledWorker-0.043739203584233666.mjs";
import { isRoutingRuleMatch } from "/Users/treyhardin/Documents/Active Projects/phenomenon-app/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/treyhardin/Documents/Active Projects/phenomenon-app/.wrangler/tmp/pages-aJ3rp1/bundledWorker-0.043739203584233666.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=bmb0tnk8bku.js.map
