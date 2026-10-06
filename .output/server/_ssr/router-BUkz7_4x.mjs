import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { s as useCart, t as CartProvider } from "./cart-C5Ngn_gM.mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, f as Scripts, g as Outlet, h as createRouter, p as HeadContent, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, c as BadgeIndianRupee, i as ShieldCheck, r as ShoppingBag, t as Truck } from "../_libs/lucide-react.mjs";
import { n as useAuth, t as AuthProvider } from "./auth-BDGEdFsj.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BUkz7_4x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SiteHeader() {
	const { count } = useCart();
	const { user, loading, signOut } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-primary py-2 text-center text-primary-foreground eyebrow",
			children: "Festive learning sale · Every item just ₹1 · Free delivery across India"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "font-display text-2xl tracking-wide",
				children: "Maison Ardent"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex items-center gap-8 eyebrow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						activeProps: { className: "text-accent" },
						children: "Shop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						activeProps: { className: "text-accent" },
						children: "About"
					}),
					!loading && (user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => signOut(),
						title: user.email ?? void 0,
						children: "Log out"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						activeProps: { className: "text-accent" },
						children: "Log in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/signup",
						activeProps: { className: "text-accent" },
						children: "Sign up"
					})] })),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cart",
						className: "relative flex items-center gap-2",
						"aria-label": "Bag",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] text-accent-foreground",
							children: count
						})]
					})
				]
			})]
		})]
	});
}
var trust = [
	{
		icon: ShieldCheck,
		t: "100% secure UPI payments"
	},
	{
		icon: Truck,
		t: "Free delivery across India"
	},
	{
		icon: RotateCcw,
		t: "Easy 7-day returns"
	},
	{
		icon: BadgeIndianRupee,
		t: "Pay with GPay, PhonePe, Paytm"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4",
			children: trust.map(({ icon: I, t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-6 w-6 text-accent" }),
					" ",
					t
				]
			}, t))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-4 border-t border-border px-6 py-8 md:flex-row md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl",
				children: "Maison Ardent"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted-foreground",
				children: "Prices in INR, incl. of all taxes · Learning demo store"
			})]
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-Y8iVuIf9.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Maison Ardent — Modern Clothing" },
			{
				name: "description",
				content: "Considered everyday clothing in natural fabrics."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Karla:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		] }) })
	});
}
var $$splitComponentImporter$6 = () => import("./routes-DRcI_ebJ.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Maison Ardent — Considered Everyday Clothing" },
		{
			name: "description",
			content: "Wool coats, linen shirts and knitwear in natural fabrics. Discover the Autumn collection."
		},
		{
			property: "og:title",
			content: "Maison Ardent — Considered Everyday Clothing"
		},
		{
			property: "og:description",
			content: "Wool coats, linen shirts and knitwear in natural fabrics."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-D5CPWSgB.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Maison Ardent" },
		{
			name: "description",
			content: "The story behind Maison Ardent and how we make our clothing."
		},
		{
			property: "og:title",
			content: "About — Maison Ardent"
		},
		{
			property: "og:description",
			content: "Our story, materials and approach to slow fashion."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./cart-CVL47VXK.mjs");
var Route$4 = createFileRoute("/cart")({
	head: () => ({ meta: [
		{ title: "Your Bag — Maison Ardent" },
		{
			name: "description",
			content: "Review the items in your shopping bag."
		},
		{
			property: "og:title",
			content: "Your Bag — Maison Ardent"
		},
		{
			property: "og:description",
			content: "Review the items in your shopping bag."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./checkout-xU1jPwvX.mjs");
var Route$3 = createFileRoute("/checkout")({
	head: () => ({ meta: [
		{ title: "Checkout — Maison Ardent" },
		{
			name: "description",
			content: "Enter your address and pay securely with UPI."
		},
		{
			property: "og:title",
			content: "Checkout — Maison Ardent"
		},
		{
			property: "og:description",
			content: "Pay securely with Google Pay, PhonePe or any UPI app."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./login-D5s7lC3T.mjs");
var Route$2 = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: "Log in — Maison Ardent" },
		{
			name: "description",
			content: "Log in to your Maison Ardent account."
		},
		{
			property: "og:title",
			content: "Log in — Maison Ardent"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./shop-4fiKZEao.mjs");
var Route$1 = createFileRoute("/shop")({
	head: () => ({ meta: [
		{ title: "Shop — Maison Ardent" },
		{
			name: "description",
			content: "Shop shirts, trousers and knitwear from Maison Ardent."
		},
		{
			property: "og:title",
			content: "Shop — Maison Ardent"
		},
		{
			property: "og:description",
			content: "Shirts, trousers and knitwear in natural fabrics."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./signup-BDci_kGt.mjs");
var Route = createFileRoute("/signup")({
	head: () => ({ meta: [
		{ title: "Sign up — Maison Ardent" },
		{
			name: "description",
			content: "Create a Maison Ardent account."
		},
		{
			property: "og:title",
			content: "Sign up — Maison Ardent"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	CartRoute: Route$4.update({
		id: "/cart",
		path: "/cart",
		getParentRoute: () => Route$7
	}),
	CheckoutRoute: Route$3.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$7
	}),
	LoginRoute: Route$2.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$7
	}),
	ShopRoute: Route$1.update({
		id: "/shop",
		path: "/shop",
		getParentRoute: () => Route$7
	}),
	SignupRoute: Route.update({
		id: "/signup",
		path: "/signup",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
