globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-06T09:12:44.671Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-06T09:12:44.671Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/a10-C7KnvQjK.jpg": {
		"type": "image/jpeg",
		"etag": "\"137d8-L1Ljks0Osa0jNigIQLNNjm7l29A\"",
		"mtime": "2026-10-06T09:12:44.472Z",
		"size": 79832,
		"path": "../public/assets/a10-C7KnvQjK.jpg"
	},
	"/assets/a1-BtQrxVQs.jpg": {
		"type": "image/jpeg",
		"etag": "\"17c81-H7ijvZz7fejGZG9O84ww/4bzwGg\"",
		"mtime": "2026-10-06T09:12:44.472Z",
		"size": 97409,
		"path": "../public/assets/a1-BtQrxVQs.jpg"
	},
	"/assets/a11-B2iTLGQY.jpg": {
		"type": "image/jpeg",
		"etag": "\"ce24-NXm9EzUWHawYODOLGJIP5BitdX4\"",
		"mtime": "2026-10-06T09:12:44.472Z",
		"size": 52772,
		"path": "../public/assets/a11-B2iTLGQY.jpg"
	},
	"/assets/a3-D63OQP3O.jpg": {
		"type": "image/jpeg",
		"etag": "\"12c9c-/pW4gVHW3Hsm7j3IZGA6BMTE3ys\"",
		"mtime": "2026-10-06T09:12:44.473Z",
		"size": 76956,
		"path": "../public/assets/a3-D63OQP3O.jpg"
	},
	"/assets/a2-DBqL2I2k.jpg": {
		"type": "image/jpeg",
		"etag": "\"168ff-LsIPdQB36O4jikgSqmFrZYa2yto\"",
		"mtime": "2026-10-06T09:12:44.473Z",
		"size": 92415,
		"path": "../public/assets/a2-DBqL2I2k.jpg"
	},
	"/assets/a4-Ck9OkIyL.jpg": {
		"type": "image/jpeg",
		"etag": "\"18599-4XyCAONZQrcAzZIaPUx7tUvZ3B8\"",
		"mtime": "2026-10-06T09:12:44.473Z",
		"size": 99737,
		"path": "../public/assets/a4-Ck9OkIyL.jpg"
	},
	"/assets/a8-CRMTA7lX.jpg": {
		"type": "image/jpeg",
		"etag": "\"11f97-1B24j8i0Suf51xvvxxQFstOi184\"",
		"mtime": "2026-10-06T09:12:44.473Z",
		"size": 73623,
		"path": "../public/assets/a8-CRMTA7lX.jpg"
	},
	"/assets/a5-8LBH-ZZH.jpg": {
		"type": "image/jpeg",
		"etag": "\"107a5-6WGhCVLWnjBUIV4RrPrbX4RiICY\"",
		"mtime": "2026-10-06T09:12:44.473Z",
		"size": 67493,
		"path": "../public/assets/a5-8LBH-ZZH.jpg"
	},
	"/assets/a7-TlgFDmLc.jpg": {
		"type": "image/jpeg",
		"etag": "\"14efc-So+gJDOTzZcxax+rlWf82YdujNk\"",
		"mtime": "2026-10-06T09:12:44.473Z",
		"size": 85756,
		"path": "../public/assets/a7-TlgFDmLc.jpg"
	},
	"/assets/auth-form-Dwvw1A-o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b43-ofUdqBVSFwx2RPiIwN/bGVZIq60\"",
		"mtime": "2026-10-06T09:12:44.471Z",
		"size": 2883,
		"path": "../public/assets/auth-form-Dwvw1A-o.js"
	},
	"/assets/about-FT6vm-2m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45a-8AqrMqYKHBTXRSZ3tjw4dbb6PG8\"",
		"mtime": "2026-10-06T09:12:44.471Z",
		"size": 1114,
		"path": "../public/assets/about-FT6vm-2m.js"
	},
	"/assets/cart-CaUeaOZn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5a-MwkWVtVwVxvm3Bcx5f6Fvuv9pqM\"",
		"mtime": "2026-10-06T09:12:44.471Z",
		"size": 3162,
		"path": "../public/assets/cart-CaUeaOZn.js"
	},
	"/assets/checkout-CnvE12L6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"472c-gIqU12+Vgt6N0qMpsBFYxc8ui3c\"",
		"mtime": "2026-10-06T09:12:44.471Z",
		"size": 18220,
		"path": "../public/assets/checkout-CnvE12L6.js"
	},
	"/assets/hero-DYKe0wQr.jpg": {
		"type": "image/jpeg",
		"etag": "\"16026-28dl68nwUM/8M9jJU/It+HKPpu4\"",
		"mtime": "2026-10-06T09:12:44.474Z",
		"size": 90150,
		"path": "../public/assets/hero-DYKe0wQr.jpg"
	},
	"/assets/login-D6yo3268.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"92-yXv08/52r72pwxuuOf33izzMTtU\"",
		"mtime": "2026-10-06T09:12:44.471Z",
		"size": 146,
		"path": "../public/assets/login-D6yo3268.js"
	},
	"/assets/a9-BqJ5Ep2P.jpg": {
		"type": "image/jpeg",
		"etag": "\"1234e-OFSPcIWqYX7B2GYT3XOswYrMJ5M\"",
		"mtime": "2026-10-06T09:12:44.474Z",
		"size": 74574,
		"path": "../public/assets/a9-BqJ5Ep2P.jpg"
	},
	"/assets/p10-CLQneI-F.jpg": {
		"type": "image/jpeg",
		"etag": "\"1872e-KyT/z98luLecrN37T8JjGiWya+4\"",
		"mtime": "2026-10-06T09:12:44.474Z",
		"size": 100142,
		"path": "../public/assets/p10-CLQneI-F.jpg"
	},
	"/assets/p1-00KN1keB.jpg": {
		"type": "image/jpeg",
		"etag": "\"118c3-Uza7HUodYcGOk+w4GHoVPa/uabY\"",
		"mtime": "2026-10-06T09:12:44.474Z",
		"size": 71875,
		"path": "../public/assets/p1-00KN1keB.jpg"
	},
	"/assets/p11-CipQtQm4.jpg": {
		"type": "image/jpeg",
		"etag": "\"dd1e-gEXK8zeXP3qqrU9khNU6+xcjyGg\"",
		"mtime": "2026-10-06T09:12:44.474Z",
		"size": 56606,
		"path": "../public/assets/p11-CipQtQm4.jpg"
	},
	"/assets/p3-2N8-hZgX.jpg": {
		"type": "image/jpeg",
		"etag": "\"1befc-RNA+I/4jIDiQ45qBQ8Iw3kqbXe0\"",
		"mtime": "2026-10-06T09:12:44.475Z",
		"size": 114428,
		"path": "../public/assets/p3-2N8-hZgX.jpg"
	},
	"/assets/p2-D-uya5fu.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfa2-cfxc4gF/BPCaDcZUm8/jccKDzUU\"",
		"mtime": "2026-10-06T09:12:44.475Z",
		"size": 53154,
		"path": "../public/assets/p2-D-uya5fu.jpg"
	},
	"/assets/p4-B0E1e30F.jpg": {
		"type": "image/jpeg",
		"etag": "\"1271a-JhCGi9STmWG+Fcn97OSdsq/iMK0\"",
		"mtime": "2026-10-06T09:12:44.476Z",
		"size": 75546,
		"path": "../public/assets/p4-B0E1e30F.jpg"
	},
	"/assets/index-C0dcPAqk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97f29-MWJCz5aLd075Yj4MwBfLsNI/oYM\"",
		"mtime": "2026-10-06T09:12:44.470Z",
		"size": 622377,
		"path": "../public/assets/index-C0dcPAqk.js"
	},
	"/assets/p5-B46mm5r1.jpg": {
		"type": "image/jpeg",
		"etag": "\"c8aa-CC5atPOrPBILV3zcYncv9DGVqzg\"",
		"mtime": "2026-10-06T09:12:44.476Z",
		"size": 51370,
		"path": "../public/assets/p5-B46mm5r1.jpg"
	},
	"/assets/p7-BjQ4LHRg.jpg": {
		"type": "image/jpeg",
		"etag": "\"caf3-rTsXw/SsSFKowb4cW+8U63JbuD8\"",
		"mtime": "2026-10-06T09:12:44.476Z",
		"size": 51955,
		"path": "../public/assets/p7-BjQ4LHRg.jpg"
	},
	"/assets/p6-DwiySub4.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ee35-szJ4SFDwLjJL1VRCGGe03RzMKqY\"",
		"mtime": "2026-10-06T09:12:44.476Z",
		"size": 126517,
		"path": "../public/assets/p6-DwiySub4.jpg"
	},
	"/assets/p9-Ch0i_4RS.jpg": {
		"type": "image/jpeg",
		"etag": "\"11a56-Jvv06zfqH0ZHidJ3A7EIJyI6mkQ\"",
		"mtime": "2026-10-06T09:12:44.476Z",
		"size": 72278,
		"path": "../public/assets/p9-Ch0i_4RS.jpg"
	},
	"/assets/product-card-D2Al5Slu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c3-qIKweqvA6eeH2Ffxwu5AKqHEEuQ\"",
		"mtime": "2026-10-06T09:12:44.471Z",
		"size": 1219,
		"path": "../public/assets/product-card-D2Al5Slu.js"
	},
	"/assets/react-yIOJJ3r4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20d2-kVhPh4bAQsY8cpxNQjSFv8q1v2A\"",
		"mtime": "2026-10-06T09:12:44.471Z",
		"size": 8402,
		"path": "../public/assets/react-yIOJJ3r4.js"
	},
	"/assets/p8-BiJXYLI3.jpg": {
		"type": "image/jpeg",
		"etag": "\"1602e-PZ5OtdHRvmqJnp5pGercfIxYW9s\"",
		"mtime": "2026-10-06T09:12:44.476Z",
		"size": 90158,
		"path": "../public/assets/p8-BiJXYLI3.jpg"
	},
	"/assets/routes-9fsuCHG3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6fb-nz7JXJoFMDQtTOVnf3d4eQ6DWL8\"",
		"mtime": "2026-10-06T09:12:44.471Z",
		"size": 1787,
		"path": "../public/assets/routes-9fsuCHG3.js"
	},
	"/assets/shop-eupKPxKg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"385-6JkNetFXr22aW8jA7EugTGwbGE8\"",
		"mtime": "2026-10-06T09:12:44.472Z",
		"size": 901,
		"path": "../public/assets/shop-eupKPxKg.js"
	},
	"/assets/signup-C9VDe7cN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"93-CcOOdt0D27SSUU0AXz9L+aLw0Ic\"",
		"mtime": "2026-10-06T09:12:44.472Z",
		"size": 147,
		"path": "../public/assets/signup-C9VDe7cN.js"
	},
	"/assets/styles-Y8iVuIf9.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"135e8-+YSGJzLaOyWIvTkLqraZsKGSUhY\"",
		"mtime": "2026-10-06T09:12:44.476Z",
		"size": 79336,
		"path": "../public/assets/styles-Y8iVuIf9.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_B4SloU = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_B4SloU
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
