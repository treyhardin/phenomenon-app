globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as decodeKey } from './chunks/astro/server_jD9syGVz.mjs';
import './chunks/astro-designed-error-pages_Bb--tmHv.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_wbGI4Jzg.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/","cacheDir":"file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/node_modules/.astro/","outDir":"file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/dist/","srcDir":"file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/src/","publicDir":"file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/public/","buildClientDir":"file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/dist/","buildServerDir":"file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"api/getLocations","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/getlocations","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/getLocations\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"getLocations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/getLocations.ts","pathname":"/api/getLocations","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"shapes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/shapes","isIndex":true,"type":"page","pattern":"^\\/shapes\\/?$","segments":[[{"content":"shapes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shapes/index.astro","pathname":"/shapes","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/Map.astro",{"propagation":"in-tree","containsHead":false}],["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/[country]/[state]/[city]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[country]/[state]/[city]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/[country]/[state]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[country]/[state]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/[country]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[country]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/ReportCard.astro",{"propagation":"in-tree","containsHead":false}],["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/ReportList.astro",{"propagation":"in-tree","containsHead":false}],["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/MapNavigation.astro",{"propagation":"in-tree","containsHead":false}],["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/ShapeReports.astro",{"propagation":"in-tree","containsHead":false}],["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/shapes/[shape].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/shapes/[shape]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/shapes/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/shapes/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/ShapesList.astro",{"propagation":"in-tree","containsHead":false}],["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/api/getLocations.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/api/getLocations@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-actions":"_noop-actions.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/api/getLocations@_@ts":"pages/api/getlocations.astro.mjs","\u0000@astro-page:src/pages/shapes/[shape]@_@astro":"pages/shapes/_shape_.astro.mjs","\u0000@astro-page:src/pages/shapes/index@_@astro":"pages/shapes.astro.mjs","\u0000@astro-page:src/pages/[country]/[state]/[city]/index@_@astro":"pages/_country_/_state_/_city_.astro.mjs","\u0000@astro-page:src/pages/[country]/[state]/index@_@astro":"pages/_country_/_state_.astro.mjs","\u0000@astro-page:src/pages/[country]/index@_@astro":"pages/_country_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/Users/treyhardin/Documents/Active Projects/phenomenon-app/.astro/content-assets.mjs":"chunks/content-assets_XqCgPAV2.mjs","/Users/treyhardin/Documents/Active Projects/phenomenon-app/.astro/content-modules.mjs":"chunks/content-modules_Bvq7llv8.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BAv-S55s.mjs","/Users/treyhardin/Documents/Active Projects/phenomenon-app/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_XotSlSSp.mjs","/Users/treyhardin/Documents/Active Projects/phenomenon-app/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","\u0000@astrojs-manifest":"manifest_OOtlOD6P.mjs","/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/search/Search.jsx":"_astro/Search.0jCp46P4.js","@astrojs/solid-js/client.js":"_astro/client.GYaJ8Ya_.js","/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/Map.astro?astro&type=script&index=0&lang.ts":"_astro/Map.astro_astro_type_script_index_0_lang.Ci0ORTIL.js","/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/MapNavigation.astro?astro&type=script&index=0&lang.ts":"_astro/MapNavigation.astro_astro_type_script_index_0_lang.BP79cktX.js","/Users/treyhardin/Documents/Active Projects/phenomenon-app/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BZs-2RF_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/MapNavigation.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const e=document.getElementById(\"map-navigation\"),t=document.getElementById(\"reports-toggle\");e&&t&&t.addEventListener(\"click\",()=>{e.dataset.menuOpen===\"true\"?e.dataset.menuOpen=\"false\":e.dataset.menuOpen=\"true\"})});"]],"assets":["/_astro/pin.Dyk08EWO.svg","/_astro/hamburger.DmAsUKwN.svg","/_astro/close.CyZMWlfN.svg","/_astro/arrow-back.C7tQvhPx.svg","/_astro/shape_cone.3Z7deYeI.svg","/_astro/shape_cigar.uAGcbkE3.svg","/_astro/shape_cross.DhoN_TDI.svg","/_astro/shape_disk.BFh1FhUu.svg","/_astro/shape_cylinder.BC7V-W-U.svg","/_astro/shape_cube.D_YFeg5O.svg","/_astro/shape_diamond.BUlEwwXq.svg","/_astro/shape_formation.dKx21m_I.svg","/_astro/shape_chevron.OtSDIAxp.svg","/_astro/shape_egg.CItRDGR7.svg","/_astro/shape_light.BXE-AYpG.svg","/_astro/shape_fireball.DLrw-dZq.svg","/_astro/shape_flash.DSnMihLx.svg","/_astro/shape_oval.CPN9IEr7.svg","/_astro/shape_rectangle.BkzKbeS_.svg","/_astro/shape_star.OPq-02VC.svg","/_astro/shape_orb.D2T7_bOZ.svg","/_astro/shape_sphere.B0IqZ72H.svg","/_astro/shape_circle.CrKSEKq2.svg","/_astro/shape_teardrop.DmLlYFoN.svg","/_astro/shape_triangle.Yq7CqvGt.svg","/_astro/shape_unknown.IlGMtcX3.svg","/_astro/search.CS0asuiH.svg","/_astro/index.CN-AWh6p.css","/_astro/index.B32nsG-P.css","/DrukWide-Heavy.woff","/DrukWide-Heavy.woff2","/DrukWide-HeavyItalic.woff","/DrukWide-HeavyItalic.woff2","/DrukWide-Medium.woff","/DrukWide-Medium.woff2","/PPSupplySans-Regular.woff","/PPSupplySans-Regular.woff2","/PPSupplySans-Ultralight.woff","/PPSupplySans-Ultralight.woff2","/favicon.svg","/og_image.png","/search-data.json","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BZs-2RF_.js","/_astro/Map.astro_astro_type_script_index_0_lang.Ci0ORTIL.js","/_astro/Search.0jCp46P4.js","/_astro/client.GYaJ8Ya_.js","/_astro/web.B3ItKGQM.js","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_astro/arrow-back.C7tQvhPx.svg","/_worker.js/_astro/close.CyZMWlfN.svg","/_worker.js/_astro/hamburger.DmAsUKwN.svg","/_worker.js/_astro/index.B32nsG-P.css","/_worker.js/_astro/index.CN-AWh6p.css","/_worker.js/_astro/pin.Dyk08EWO.svg","/_worker.js/_astro/search.CS0asuiH.svg","/_worker.js/_astro/shape_chevron.OtSDIAxp.svg","/_worker.js/_astro/shape_cigar.uAGcbkE3.svg","/_worker.js/_astro/shape_circle.CrKSEKq2.svg","/_worker.js/_astro/shape_cone.3Z7deYeI.svg","/_worker.js/_astro/shape_cross.DhoN_TDI.svg","/_worker.js/_astro/shape_cube.D_YFeg5O.svg","/_worker.js/_astro/shape_cylinder.BC7V-W-U.svg","/_worker.js/_astro/shape_diamond.BUlEwwXq.svg","/_worker.js/_astro/shape_disk.BFh1FhUu.svg","/_worker.js/_astro/shape_egg.CItRDGR7.svg","/_worker.js/_astro/shape_fireball.DLrw-dZq.svg","/_worker.js/_astro/shape_flash.DSnMihLx.svg","/_worker.js/_astro/shape_formation.dKx21m_I.svg","/_worker.js/_astro/shape_light.BXE-AYpG.svg","/_worker.js/_astro/shape_orb.D2T7_bOZ.svg","/_worker.js/_astro/shape_oval.CPN9IEr7.svg","/_worker.js/_astro/shape_rectangle.BkzKbeS_.svg","/_worker.js/_astro/shape_sphere.B0IqZ72H.svg","/_worker.js/_astro/shape_star.OPq-02VC.svg","/_worker.js/_astro/shape_teardrop.DmLlYFoN.svg","/_worker.js/_astro/shape_triangle.Yq7CqvGt.svg","/_worker.js/_astro/shape_unknown.IlGMtcX3.svg","/_worker.js/pages/_country_.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/shapes.astro.mjs","/_worker.js/chunks/Map_KWE1yw37.mjs","/_worker.js/chunks/ReportList_DTVW5H31.mjs","/_worker.js/chunks/ShapeReports_D4eRyOC2.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_CrE5Lg7U.mjs","/_worker.js/chunks/_astro_assets_D4Y-C-xi.mjs","/_worker.js/chunks/_astro_content_Bq3V8wBQ.mjs","/_worker.js/chunks/_astro_data-layer-content_BAv-S55s.mjs","/_worker.js/chunks/astro-designed-error-pages_Bb--tmHv.mjs","/_worker.js/chunks/astro_Dl82cMRE.mjs","/_worker.js/chunks/browser_CNYQJoIP.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/content-assets_XqCgPAV2.mjs","/_worker.js/chunks/content-modules_Bvq7llv8.mjs","/_worker.js/chunks/db-queries_DKyUPOJu.mjs","/_worker.js/chunks/index_DfvzXTkm.mjs","/_worker.js/chunks/internal_CwtpzG_q.mjs","/_worker.js/chunks/noop-middleware_wbGI4Jzg.mjs","/_worker.js/chunks/parse_EttCPxrw.mjs","/_worker.js/chunks/sharp_XotSlSSp.mjs","/_worker.js/pages/_country_/_state_.astro.mjs","/_worker.js/pages/api/getlocations.astro.mjs","/_worker.js/pages/shapes/_shape_.astro.mjs","/_worker.js/chunks/astro/server_jD9syGVz.mjs","/_worker.js/pages/_country_/_state_/_city_.astro.mjs","/api/getLocations","/shapes/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"NvXoyuJf2ykKHk+dGyI4i9BKmT4sgwOSQzP1z9yeStI=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
