module.exports = [
(()=>{"use strict";return[
"[project]/src/app/ads/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdDetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$AdCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/services/AdCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-rsc] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-rsc] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-rsc] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-rsc] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-rsc] (ecmascript) <export default as ArrowLeft>");
;
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALL_ADS"].map((ad)=>({
            id: ad.id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const ad = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALL_ADS"].find((a)=>a.id === id);
    if (!ad) return {
        title: "Service Not Found | WrkZone"
    };
    return {
        title: `${ad.title} in ${ad.city} | WrkZone`,
        description: ad.description
    };
}
async function AdDetailPage({ params }) {
    const { id } = await params;
    const ad = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALL_ADS"].find((a)=>a.id === id);
    if (!ad) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const relatedAds = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALL_ADS"].filter((a)=>a.id !== ad.id && a.categorySlug === ad.categorySlug).slice(0, 3);
    const catStyles = {
        cleaning: {
            bg: "linear-gradient(135deg, #f59e0b22, #f59e0b44)",
            badge: "#f59e0b"
        },
        "pest-control": {
            bg: "linear-gradient(135deg, #84cc1622, #84cc1644)",
            badge: "#84cc16"
        },
        "ac-repair": {
            bg: "linear-gradient(135deg, #06b6d422, #06b6d444)",
            badge: "#06b6d4"
        },
        plumbing: {
            bg: "linear-gradient(135deg, #3b82f622, #3b82f644)",
            badge: "#3b82f6"
        },
        carpentry: {
            bg: "linear-gradient(135deg, #d9770622, #d9770644)",
            badge: "#d97706"
        },
        electrician: {
            bg: "linear-gradient(135deg, #eab30822, #eab30844)",
            badge: "#eab308"
        },
        movers: {
            bg: "linear-gradient(135deg, #8b5cf622, #8b5cf644)",
            badge: "#8b5cf6"
        },
        painting: {
            bg: "linear-gradient(135deg, #ec489922, #ec489944)",
            badge: "#ec4899"
        }
    };
    const currentStyle = catStyles[ad.categorySlug] || {
        bg: "linear-gradient(135deg, #f59e0b22, #f59e0b44)",
        badge: "#fb8500"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-6 sm:py-10 bg-neutral-50/60 overflow-x-hidden w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-2 mb-6 text-xs sm:text-sm text-neutral-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-1.5 sm:gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-fb8500 transition-colors",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/[id]/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/[id]/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/ads",
                                    className: "hover:text-fb8500 transition-colors",
                                    children: "Ads"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/[id]/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/[id]/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/category/${ad.categorySlug}`,
                                    className: "hover:text-fb8500 transition-colors font-medium text-neutral-800",
                                    children: ad.categoryName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/[id]/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ads/[id]/page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/ads",
                            className: "inline-flex items-center gap-1 text-xs font-semibold text-neutral-600 hover:text-neutral-900 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/[id]/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Back to services"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/[id]/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ads/[id]/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ads/[id]/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200/80 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-72 sm:h-96",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-full w-full items-center justify-center text-8xl",
                                                style: {
                                                    background: currentStyle.bg
                                                },
                                                children: ad.categoryIcon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            ad.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-4 top-4 rounded-full bg-[#fb8500] px-3 py-1.5 text-xs font-bold text-white shadow",
                                                children: "⭐ Featured"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 sm:p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white",
                                                style: {
                                                    background: currentStyle.badge
                                                },
                                                children: [
                                                    ad.categoryIcon,
                                                    " ",
                                                    ad.categoryName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "mt-3 text-2xl font-extrabold sm:text-3xl text-neutral-900 font-serif break-words",
                                                children: ad.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-500 pb-6 border-b border-neutral-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1 text-neutral-800 font-semibold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-4 h-4 text-fb8500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    ad.area ? `${ad.area}, ` : "",
                                                                    ad.city
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                className: "w-4 h-4 text-neutral-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    ad.views,
                                                                    " views"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "w-4 h-4 text-neutral-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: ad.postedAgo
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold text-neutral-900 mb-3",
                                                        children: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base text-neutral-700 leading-relaxed whitespace-pre-line",
                                                        children: ad.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, this),
                                            ad.highlights && ad.highlights.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-6 border-t border-neutral-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-bold uppercase tracking-wider text-neutral-800 mb-4",
                                                        children: "Service Highlights"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                        children: ad.highlights.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-sm font-medium text-neutral-800",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: "w-4 h-4 text-emerald-500 shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: h
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            ad.fullDetails && ad.fullDetails.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-6 border-t border-neutral-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-bold uppercase tracking-wider text-neutral-800 mb-4",
                                                        children: "What is Included"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2.5",
                                                        children: ad.fullDetails.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-2.5 text-sm text-neutral-600",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-fb8500 font-bold",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                        lineNumber: 196,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                        lineNumber: 197,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-6 border-t border-neutral-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-lg font-bold text-neutral-900",
                                                                children: "Customer Reviews"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold text-neutral-500",
                                                                children: [
                                                                    ad.provider.reviewsCount,
                                                                    " verified reviews"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl bg-neutral-50 p-5 text-center border border-neutral-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center gap-1 text-amber-500 mb-1 text-lg",
                                                                children: "⭐".repeat(Math.round(ad.provider.rating))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-extrabold text-neutral-900",
                                                                children: [
                                                                    ad.provider.rating,
                                                                    " out of 5"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-neutral-500 mt-1",
                                                                children: [
                                                                    "Based on ",
                                                                    ad.provider.reviewsCount,
                                                                    " customer jobs completed via WrkZone."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/ads/[id]/page.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-neutral-200/80 lg:sticky lg:top-24 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-neutral-500 font-medium block",
                                                children: "Service Rate"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-extrabold text-neutral-900 mt-1",
                                                children: ad.price
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-emerald-600 font-semibold block mt-1",
                                                children: "✓ Free consultation & inspection"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${ad.provider.phone}`,
                                                className: "w-full py-3.5 px-4 rounded-2xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Call ",
                                                            ad.provider.phone
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://wa.me/91${ad.provider.whatsapp}?text=Hi%2C%20I%20saw%20your%20${encodeURIComponent(ad.title)}%20ad%20on%20WrkZone`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "w-full py-3.5 px-4 rounded-2xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "WhatsApp Provider"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-6 border-t border-neutral-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4",
                                                children: "About the provider"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-full primary-gradient flex items-center justify-center text-white font-bold text-base shadow-sm",
                                                        children: ad.provider.initials
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-sm text-neutral-900 flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: ad.provider.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                        className: "w-4 h-4 text-blue-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-neutral-500",
                                                                children: [
                                                                    ad.provider.city,
                                                                    " • Member since ",
                                                                    ad.provider.memberSince
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold flex items-center gap-1.5 text-amber-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "🛡️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Stay safe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "leading-relaxed",
                                                children: "Meet in person, inspect the work before final payment, and never pay in full upfront. WrkZone is a free community classifieds platform."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/ads/[id]/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ads/[id]/page.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/ads/[id]/page.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ads/[id]/page.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                relatedAds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 pt-12 border-t border-neutral-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-extrabold text-neutral-900 mb-6",
                            children: [
                                "More in ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-fb8500",
                                    children: ad.categoryName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/[id]/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ads/[id]/page.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: relatedAds.map((ra)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$AdCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdCard"], {
                                    ad: ra
                                }, ra.id, false, {
                                    fileName: "[project]/src/app/ads/[id]/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/ads/[id]/page.tsx",
                            lineNumber: 309,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ads/[id]/page.tsx",
                    lineNumber: 305,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ads/[id]/page.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ads/[id]/page.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/services/AdCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdCard",
    ()=>AdCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function AdCard({ ad }) {
    // Category styles using the exact wrkzone.com hex22/hex44 gradient and badges
    const catStyles = {
        cleaning: {
            bg: "linear-gradient(135deg, #f59e0b22, #f59e0b44)",
            badge: "#f59e0b",
            icon: "🧹"
        },
        "pest-control": {
            bg: "linear-gradient(135deg, #84cc1622, #84cc1644)",
            badge: "#84cc16",
            icon: "🐜"
        },
        "ac-repair": {
            bg: "linear-gradient(135deg, #06b6d422, #06b6d444)",
            badge: "#06b6d4",
            icon: "❄️"
        },
        plumbing: {
            bg: "linear-gradient(135deg, #3b82f622, #3b82f644)",
            badge: "#3b82f6",
            icon: "🔧"
        },
        carpentry: {
            bg: "linear-gradient(135deg, #d9770622, #d9770644)",
            badge: "#d97706",
            icon: "🔨"
        },
        electrician: {
            bg: "linear-gradient(135deg, #eab30822, #eab30844)",
            badge: "#eab308",
            icon: "💡"
        },
        movers: {
            bg: "linear-gradient(135deg, #8b5cf622, #8b5cf644)",
            badge: "#8b5cf6",
            icon: "📦"
        },
        painting: {
            bg: "linear-gradient(135deg, #ec489922, #ec489944)",
            badge: "#ec4899",
            icon: "🎨"
        }
    };
    const currentStyle = catStyles[ad.categorySlug] || {
        bg: "linear-gradient(135deg, #f59e0b22, #f59e0b44)",
        badge: "#fb8500",
        icon: ad.categoryIcon || "⚡"
    };
    const isNegotiable = ad.title.toLowerCase().includes("cleaning") || ad.title.toLowerCase().includes("carpentry") || ad.price.toLowerCase().includes("negotiable");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: `/ads/${ad.id}`,
        className: "card-lift group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200/80 shadow-sm hover:shadow-md hover:ring-[#fb8500] transition-all cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-44 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full w-full items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300",
                        style: {
                            background: currentStyle.bg
                        },
                        children: currentStyle.icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    ad.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-3 top-3 rounded-full bg-white/80 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold text-neutral-600 shadow-xs border border-white/50",
                        children: "⭐ Featured"
                    }, void 0, false, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white shadow flex items-center gap-1",
                        style: {
                            background: currentStyle.badge
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: currentStyle.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/services/AdCard.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: ad.categoryName
                            }, void 0, false, {
                                fileName: "[project]/src/components/services/AdCard.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/services/AdCard.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "line-clamp-1 font-bold font-serif text-neutral-900 group-hover:text-[#fb8500] transition text-base",
                        children: ad.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 line-clamp-2 text-sm text-neutral-600 leading-relaxed font-normal",
                        children: ad.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center gap-1 text-sm text-neutral-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "📍"
                            }, void 0, false, {
                                fileName: "[project]/src/components/services/AdCard.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: [
                                    ad.area ? `${ad.area}, ` : "",
                                    ad.city
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/services/AdCard.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center justify-between border-t border-neutral-100 pt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-extrabold text-neutral-900 text-base",
                                children: [
                                    ad.price,
                                    isNegotiable && !ad.price.includes("Negotiable") ? " · Negotiable" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/services/AdCard.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-neutral-500 font-normal",
                                children: ad.postedAgo
                            }, void 0, false, {
                                fileName: "[project]/src/components/services/AdCard.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/services/AdCard.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/services/AdCard.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_ADS",
    ()=>ALL_ADS,
    "CATEGORIES",
    ()=>CATEGORIES,
    "FAQS",
    ()=>FAQS,
    "PARTNERS",
    ()=>PARTNERS,
    "POPULAR_METRO_CITIES",
    ()=>POPULAR_METRO_CITIES,
    "TESTIMONIALS",
    ()=>TESTIMONIALS,
    "TOP_CITIES",
    ()=>TOP_CITIES
]);
const CATEGORIES = [
    {
        slug: "pest-control",
        name: "Pest Control",
        icon: "🐜",
        description: "Herbal, termite, cockroach, rodent, bed bug & mosquito treatments",
        popular: true
    },
    {
        slug: "plumbing",
        name: "Plumbing",
        icon: "🔧",
        description: "Leak repair, pipe fitting, sanitaryware & water tank installation",
        popular: true
    },
    {
        slug: "electrician",
        name: "Electrician",
        icon: "⚡",
        description: "Wiring, short-circuit repairs, switchboards, MCBs & fans",
        popular: true
    },
    {
        slug: "ac-repair",
        name: "AC Repair",
        icon: "❄️",
        description: "Split/window AC servicing, jet wash, gas refilling & installation",
        popular: true
    },
    {
        slug: "cleaning",
        name: "Cleaning",
        icon: "🧹",
        description: "Full home deep cleaning, kitchen, bathroom & sofa sanitization",
        popular: true
    },
    {
        slug: "painting",
        name: "Painting",
        icon: "🎨",
        description: "Interior & exterior wall painting, waterproofing & textures",
        popular: true
    },
    {
        slug: "carpentry",
        name: "Carpentry",
        icon: "🪵",
        description: "Custom furniture, modular kitchens, door lock repair & polishing",
        popular: true
    },
    {
        slug: "hair-services",
        name: "Hair Services",
        icon: "💇",
        description: "At-home haircuts, hair spa, keratin & styling",
        popular: false
    },
    {
        slug: "massage",
        name: "Massage",
        icon: "💆",
        description: "Therapeutic body massage & relaxation therapy",
        popular: false
    },
    {
        slug: "salon",
        name: "Salon",
        icon: "💅",
        description: "Facials, manicures, pedicures, waxing & bridal glow",
        popular: false
    },
    {
        slug: "movers",
        name: "Movers",
        icon: "📦",
        description: "Household shifting, packing, vehicle transport & office relocation",
        popular: true
    },
    {
        slug: "home-repair",
        name: "Home Repair",
        icon: "🏠",
        description: "General masonry, tiles, ceiling repair & waterproofing",
        popular: false
    },
    {
        slug: "construction",
        name: "Construction",
        icon: "🔨",
        description: "Civil contractors, home renovation & structural building",
        popular: false
    },
    {
        slug: "glass-mirrors",
        name: "Glass & Mirrors",
        icon: "🪟",
        description: "Shower cubicles, sliding glass partitions & designer mirrors",
        popular: false
    },
    {
        slug: "bathroom-fittings",
        name: "Bathroom Fittings",
        icon: "🛁",
        description: "Geysers, showers, modern mixers & drainage solutions",
        popular: false
    },
    {
        slug: "doors-windows",
        name: "Doors & Windows",
        icon: "🚪",
        description: "UPVC & aluminium doors, insect mesh & sliding tracks",
        popular: false
    },
    {
        slug: "stone-work",
        name: "Stone Work",
        icon: "🏗️",
        description: "Marble polishing, granite cutting & stone floor restoration",
        popular: false
    },
    {
        slug: "makeup-artist",
        name: "Makeup Artist",
        icon: "💄",
        description: "Bridal, reception, party makeup & saree draping",
        popular: false
    },
    {
        slug: "car-wash",
        name: "Car Wash",
        icon: "🚿",
        description: "Doorstep foam wash, interior vacuuming & ceramic coating",
        popular: false
    },
    {
        slug: "car-repair",
        name: "Car Repair",
        icon: "🚗",
        description: "Scheduled car maintenance, battery jumping & dent repairs",
        popular: false
    },
    {
        slug: "locksmith",
        name: "Locksmith",
        icon: "🔐",
        description: "Key duplicating, digital locks & emergency unlocking",
        popular: false
    },
    {
        slug: "mobile-repair",
        name: "Mobile Repair",
        icon: "📱",
        description: "Screen replacement, battery, camera & motherboard diagnostics",
        popular: false
    },
    {
        slug: "computer-repair",
        name: "Computer Repair",
        icon: "💻",
        description: "Laptop repairs, Windows/Mac OS install, SSD speedup & recovery",
        popular: false
    },
    {
        slug: "tv-repair",
        name: "TV Repair",
        icon: "📺",
        description: "LED/OLED display fix, sound issues, motherboard & wall mounting",
        popular: false
    }
];
const TOP_CITIES = [
    {
        name: "Mumbai",
        state: "Maharashtra",
        areasCount: 16,
        icon: "🏙️",
        popularAreas: [
            "Andheri West",
            "Bandra West",
            "Powai",
            "Juhu",
            "Borivali",
            "Dadar",
            "Thane",
            "Navi Mumbai"
        ]
    },
    {
        name: "Delhi",
        state: "Delhi",
        areasCount: 16,
        icon: "🏛️",
        popularAreas: [
            "Rohini",
            "Dwarka",
            "Saket",
            "Lajpat Nagar",
            "Karol Bagh",
            "Vasant Kunj",
            "Connaught Place",
            "Janakpuri"
        ]
    },
    {
        name: "Bangalore",
        state: "Karnataka",
        areasCount: 16,
        icon: "🌴",
        popularAreas: [
            "Koramangala",
            "Indiranagar",
            "Whitefield",
            "HSR Layout",
            "Electronic City",
            "Jayanagar",
            "Marathahalli",
            "BTM Layout"
        ]
    },
    {
        name: "Hyderabad",
        state: "Telangana",
        areasCount: 14,
        icon: "💎",
        popularAreas: [
            "Gachibowli",
            "Hitec City",
            "Banjara Hills",
            "Jubilee Hills",
            "Kukatpally",
            "Secunderabad",
            "Madhapur",
            "Kondapur"
        ]
    },
    {
        name: "Chennai",
        state: "Tamil Nadu",
        areasCount: 14,
        icon: "🎭",
        popularAreas: [
            "T. Nagar",
            "Adyar",
            "Velachery",
            "Anna Nagar",
            "Mylapore",
            "Tambaram",
            "Besant Nagar",
            "Nungambakkam"
        ]
    },
    {
        name: "Kolkata",
        state: "West Bengal",
        areasCount: 10,
        icon: "🏰",
        popularAreas: [
            "Salt Lake",
            "Park Street",
            "New Town",
            "Ballygunge",
            "Behala",
            "Howrah",
            "Alipore",
            "Dum Dum"
        ]
    },
    {
        name: "Pune",
        state: "Maharashtra",
        areasCount: 12,
        icon: "🎓",
        popularAreas: [
            "Kothrud",
            "Viman Nagar",
            "Hinjewadi",
            "Baner",
            "Wakad",
            "Koregaon Park",
            "Aundh",
            "Hadapsar"
        ]
    },
    {
        name: "Ahmedabad",
        state: "Gujarat",
        areasCount: 11,
        icon: "🌻",
        popularAreas: [
            "Satellite",
            "Bodakdev",
            "Vastrapur",
            "Navrangpura",
            "SG Highway",
            "Maninagar",
            "Prahlad Nagar"
        ]
    },
    {
        name: "Jaipur",
        state: "Rajasthan",
        areasCount: 8,
        icon: "👑",
        popularAreas: [
            "Malviya Nagar",
            "Vaishali Nagar",
            "Mansarovar",
            "C Scheme",
            "Raja Park",
            "Tonk Road"
        ]
    },
    {
        name: "Surat",
        state: "Gujarat",
        areasCount: 8,
        icon: "💎",
        popularAreas: [
            "Adajan",
            "Vesu",
            "Piplod",
            "Varachha",
            "Katargam",
            "City Light"
        ]
    },
    {
        name: "Lucknow",
        state: "Uttar Pradesh",
        areasCount: 8,
        icon: "🕌",
        popularAreas: [
            "Gomti Nagar",
            "Hazratganj",
            "Aliganj",
            "Indira Nagar",
            "Mahanagar",
            "Vikas Nagar"
        ]
    },
    {
        name: "Kochi",
        state: "Kerala",
        areasCount: 8,
        icon: "🥥",
        popularAreas: [
            "Kakkanad",
            "Edappally",
            "Marine Drive",
            "Fort Kochi",
            "Palarivattom",
            "Vyttila"
        ]
    },
    {
        name: "Goa",
        state: "Goa",
        areasCount: 6,
        icon: "🏖️",
        popularAreas: [
            "Panaji",
            "Margao",
            "Calangute",
            "Candolim",
            "Mapusa",
            "Vasco"
        ]
    },
    {
        name: "Indore",
        state: "Madhya Pradesh",
        areasCount: 7,
        icon: "🍽️",
        popularAreas: [
            "Vijay Nagar",
            "Palasia",
            "Rajwada",
            "Bhanwar Kuan",
            "AB Road"
        ]
    },
    {
        name: "Bhopal",
        state: "Madhya Pradesh",
        areasCount: 7,
        icon: "🌊",
        popularAreas: [
            "MP Nagar",
            "Arera Colony",
            "Kolar Road",
            "Shahpura",
            "TT Nagar"
        ]
    },
    {
        name: "Patna",
        state: "Bihar",
        areasCount: 6,
        icon: "📜",
        popularAreas: [
            "Boring Road",
            "Kankarbagh",
            "Bailey Road",
            "Patliputra",
            "Rajendra Nagar"
        ]
    },
    {
        name: "Vadodara",
        state: "Gujarat",
        areasCount: 6,
        icon: "🏛️",
        popularAreas: [
            "Alkapuri",
            "Manjalpur",
            "Karelibaug",
            "Gotri",
            "Sayajigunj"
        ]
    },
    {
        name: "Coimbatore",
        state: "Tamil Nadu",
        areasCount: 6,
        icon: "🏭",
        popularAreas: [
            "RS Puram",
            "Gandhipuram",
            "Peelamedu",
            "Saibaba Colony",
            "Saravanampatti"
        ]
    },
    {
        name: "Nagpur",
        state: "Maharashtra",
        areasCount: 6,
        icon: "🍊",
        popularAreas: [
            "Dharampeth",
            "Ramdaspeth",
            "Sitabuldi",
            "Sadar",
            "Wardha Road"
        ]
    },
    {
        name: "Thiruvananthapuram",
        state: "Kerala",
        areasCount: 5,
        icon: "🌴",
        popularAreas: [
            "Kowdiar",
            "Sasthamangalam",
            "Kazhakoottam",
            "Technopark",
            "Vellayambalam"
        ]
    },
    {
        name: "Chandigarh",
        state: "Chandigarh",
        areasCount: 5,
        icon: "🌸",
        popularAreas: [
            "Sector 17",
            "Sector 35",
            "Sector 22",
            "Manimajra",
            "Industrial Area"
        ]
    },
    {
        name: "Mohali",
        state: "Punjab",
        areasCount: 5,
        icon: "⚡",
        popularAreas: [
            "Phase 7",
            "Phase 5",
            "Phase 3B2",
            "Sector 70",
            "Aerocity"
        ]
    }
];
const POPULAR_METRO_CITIES = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Chandigarh",
    "Gurgaon",
    "Kochi",
    "Surat",
    "Nagpur"
];
const ALL_ADS = [
    {
        id: "cmqdfo5qo000ld1yxv71q20jl",
        title: "Deep Home Cleaning — Kitchen & Bathroom",
        categorySlug: "cleaning",
        categoryName: "Cleaning",
        categoryIcon: "🧹",
        price: "₹1,499",
        priceNum: 1499,
        area: "Whitefield",
        city: "Bangalore",
        state: "Karnataka",
        views: 187,
        postedAgo: "4 months ago",
        featured: true,
        description: "Sparkling deep cleaning service for homes and offices. Trained staff, eco-friendly products, and complete sanitization. Perfect before festivals or moving in/out.",
        fullDetails: [
            "Kitchen de-greasing, chimney, stove & cabinet cleaning",
            "Bathroom descaling, tile scrubbing, mirror & sanitization",
            "Industrial single-disc scrubbing machine & vacuum",
            "Trained, background-checked professional cleaners"
        ],
        provider: {
            name: "Priya Sharma",
            initials: "PS",
            city: "Bangalore",
            memberSince: "2026",
            rating: 4.8,
            reviewsCount: 42,
            phone: "9876543211",
            whatsapp: "9876543211",
            verified: true
        },
        highlights: [
            "Eco-friendly Chemicals",
            "Deep Sanitization",
            "Industrial Equipment",
            "100% Guaranteed"
        ]
    },
    {
        id: "cmqdfo5ga000jd1yxo70irbzb",
        title: "Herbal Pest Control — Cockroach & Termite",
        categorySlug: "pest-control",
        categoryName: "Pest Control",
        categoryIcon: "🐜",
        price: "₹899",
        priceNum: 899,
        area: "Rohini",
        city: "Delhi",
        state: "Delhi",
        views: 160,
        postedAgo: "4 months ago",
        featured: true,
        description: "Safe, odourless, child & pet-friendly pest control treatment. Specializing in cockroaches, termites, bed bugs, and mosquitoes. 6 months warranty on all treatments.",
        fullDetails: [
            "100% Herbal & Bayer certified chemicals",
            "No need to vacate kitchen or home during spray",
            "Termite drill-fill-seal subterranean treatment with 5-year guarantee",
            "Gel baiting for German and American cockroaches",
            "Government licensed applicators with proper safety equipment"
        ],
        provider: {
            name: "Amit Verma",
            initials: "AV",
            city: "Delhi",
            memberSince: "2026",
            rating: 4.9,
            reviewsCount: 38,
            phone: "9876543212",
            whatsapp: "9876543212",
            verified: true
        },
        highlights: [
            "Herbal & Odourless",
            "6-Month Warranty",
            "Child & Pet Safe",
            "Free Inspection"
        ]
    },
    {
        id: "cmqdfo564000hd1yxpl07wvff",
        title: "Split & Window AC Service + Gas Refilling",
        categorySlug: "ac-repair",
        categoryName: "AC Repair",
        categoryIcon: "❄️",
        price: "₹499",
        priceNum: 499,
        area: "Kothrud",
        city: "Pune",
        state: "Maharashtra",
        views: 19,
        postedAgo: "4 months ago",
        featured: true,
        description: "Professional AC servicing, gas refilling, installation and uninstallation. We handle all brands — Voltas, LG, Samsung, Daikin. Free inspection on first visit. Cooling guaranteed!",
        fullDetails: [
            "High-pressure jet wash for cooling coils and outdoor condenser",
            "R32, R410A, and R22 gas top-up with pressure gauge testing",
            "Filter cleaning, copper pipe flare check, PCB repair",
            "90-day cooling service guarantee"
        ],
        provider: {
            name: "Rajesh Kumar",
            initials: "RK",
            city: "Pune",
            memberSince: "2026",
            rating: 5.0,
            reviewsCount: 29,
            phone: "9876543213",
            whatsapp: "9876543213",
            verified: true
        },
        highlights: [
            "High-Pressure Jet Wash",
            "Genuine Spare Parts",
            "30-Day Cooling Guarantee",
            "All AC Brands"
        ]
    },
    {
        id: "cmqdfo4m0000fd1yxlkt6g5ed",
        title: "Expert Plumber — 24/7 Emergency Service",
        categorySlug: "plumbing",
        categoryName: "Plumbing",
        categoryIcon: "🔧",
        price: "₹299/hr",
        priceNum: 299,
        area: "Andheri West",
        city: "Mumbai",
        state: "Maharashtra",
        views: 165,
        postedAgo: "4 months ago",
        featured: true,
        description: "Over 12 years of experience in pipe fitting, leak repair, bathroom fittings, and water tank installation. Quick response, fair pricing, and guaranteed work. Available all days including holidays.",
        fullDetails: [
            "Concealed pipe leakage detection and fixing",
            "Jaquar, Kohler, Hindware mixer tap & shower installation",
            "Water tank cleaning, motor connection & pressure pump setup",
            "Emergency blockage removal and drainage clearing"
        ],
        provider: {
            name: "Rahul Sharma",
            initials: "RS",
            city: "Mumbai",
            memberSince: "2026",
            rating: 4.9,
            reviewsCount: 54,
            phone: "9876543210",
            whatsapp: "9876543210",
            verified: true
        },
        highlights: [
            "24/7 Availability",
            "12+ Years Exp",
            "Fixed Upfront Price",
            "Guaranteed Work"
        ]
    },
    {
        id: "cmqdfo6as000pd1yxcjvkxjgw",
        title: "Custom Carpentry & Furniture Repair",
        categorySlug: "carpentry",
        categoryName: "Carpentry",
        categoryIcon: "🔨",
        price: "₹600",
        priceNum: 600,
        area: "Gachibowli",
        city: "Hyderabad",
        state: "Telangana",
        views: 12,
        postedAgo: "4 months ago",
        featured: false,
        description: "Modular kitchen, wardrobes, beds, and furniture repair. Quality wood, neat finishing, on-time delivery. Free design consultation at your home.",
        fullDetails: [
            "Custom hydraulic beds, wardrobes & TV units",
            "Hinge replacement, drawer channels & sliding door repair",
            "Teak wood, engineered plywood & laminate finish",
            "Door lock installation & handle fittings"
        ],
        provider: {
            name: "Suresh Rao",
            initials: "SR",
            city: "Hyderabad",
            memberSince: "2026",
            rating: 4.7,
            reviewsCount: 19,
            phone: "9876543214",
            whatsapp: "9876543214",
            verified: true
        },
        highlights: [
            "Free Home Consultation",
            "Quality Wood",
            "Neat Finish",
            "Warranty on Fitting"
        ]
    },
    {
        id: "cmqdfo60r000nd1yx81iy045w",
        title: "Licensed Electrician — Wiring & Repairs",
        categorySlug: "electrician",
        categoryName: "Electrician",
        categoryIcon: "💡",
        price: "₹350/hr",
        priceNum: 350,
        area: "Bandra",
        city: "Mumbai",
        state: "Maharashtra",
        views: 180,
        postedAgo: "4 months ago",
        featured: false,
        description: "Complete electrical solutions — new wiring, fan/light installation, MCB & inverter setup, short-circuit fixing. Safety-certified and insured work.",
        fullDetails: [
            "Concealed copper wiring & distribution box setup",
            "Inverter & battery wiring installation",
            "Ceiling fan, chandelier, LED panel light fittings",
            "Tripping MCB troubleshooting & earth leakage testing"
        ],
        provider: {
            name: "Karthik S",
            initials: "KS",
            city: "Mumbai",
            memberSince: "2026",
            rating: 4.8,
            reviewsCount: 31,
            phone: "9876543215",
            whatsapp: "9876543215",
            verified: true
        },
        highlights: [
            "Govt Licensed",
            "Insured Work",
            "Safety First",
            "Prompt Service"
        ]
    }
];
const TESTIMONIALS = [
    {
        name: "Priya Sharma",
        city: "Mumbai",
        rating: 5,
        text: "Excellent plumbing service! The professional was courteous, efficient, and fixed the issue promptly. Highly recommended!",
        service: "Plumbing",
        avatar: "👩‍💼",
        color: "from-blue-600 to-blue-400"
    },
    {
        name: "Rajesh Kumar",
        city: "Bangalore",
        rating: 5,
        text: "AC repair was done perfectly. Great communication throughout and very professional approach. Will book again!",
        service: "AC Repair",
        avatar: "👨‍💼",
        color: "from-fb8500 to-ffb81c"
    },
    {
        name: "Anita Desai",
        city: "Delhi",
        rating: 5,
        text: "The cleaning service was thorough and the team was very polite. My house looks brand new now!",
        service: "Home Cleaning",
        avatar: "👩‍💼",
        color: "from-blue-600 to-blue-400"
    },
    {
        name: "Vikram Patel",
        city: "Pune",
        rating: 5,
        text: "Electrician did excellent work. Very knowledgeable and completed the job on time with quality results.",
        service: "Electrician",
        avatar: "👨‍💼",
        color: "from-fb8500 to-ffb81c"
    }
];
const FAQS = [
    {
        icon: "🔍",
        question: "How does WrkZone help me find the right professional?",
        answer: "WrkZone connects you with verified professionals in your area. You can search by service type, location, and ratings to find the perfect match for your needs."
    },
    {
        icon: "🛡️",
        question: "Is it safe to hire professionals on WrkZone?",
        answer: "Yes! All our professionals are verified and reviewed by customers. We also provide secure payment options and a guarantee for peace of mind."
    },
    {
        icon: "📝",
        question: "How do I post my first service?",
        answer: "Posting is free and takes less than 2 minutes. Go to 'Post a Service', fill in details, add photos, and publish. You'll immediately start receiving inquiries."
    },
    {
        icon: "⭐",
        question: "What if I'm not satisfied with the service?",
        answer: "We offer a 100% satisfaction guarantee. If you're unhappy with the service, contact our support team and we'll help resolve the issue."
    },
    {
        icon: "👤",
        question: "How are professionals rated and reviewed?",
        answer: "After service completion, customers can rate professionals on quality, punctuality, and professionalism. These reviews help others make informed decisions."
    },
    {
        icon: "💳",
        question: "Are there any hidden fees?",
        answer: "No hidden fees! We're transparent about all costs. Our commission is clearly stated, and there are no surprise charges."
    },
    {
        icon: "⏱️",
        question: "How long does it take to complete a job?",
        answer: "It depends on the service type. Small tasks can be completed in hours, while larger projects may take days. You can discuss timelines with the professional."
    },
    {
        icon: "🗓️",
        question: "Can I schedule services in advance?",
        answer: "Yes! You can book services for a date that works best for you. Professionals will confirm the appointment based on their availability."
    },
    {
        icon: "💬",
        question: "Can I communicate directly with professionals?",
        answer: "Absolutely! Once you connect with a professional on WrkZone, you can message them directly to discuss details, clarify requirements, and finalize schedules."
    },
    {
        icon: "🏆",
        question: "What makes a professional 'verified'?",
        answer: "Verified professionals have passed our screening process, including identity verification, background checks, and skill validation. This ensures quality and safety."
    },
    {
        icon: "📍",
        question: "Does WrkZone work in my city?",
        answer: "WrkZone operates in 22+ major Indian cities. Check our 'Top Metro Cities' section or search your location to see available services."
    },
    {
        icon: "🔄",
        question: "What's your refund policy?",
        answer: "If you're not satisfied with the service, we offer a full refund within 7 days. Our support team will help process it quickly and fairly."
    }
];
const PARTNERS = [
    {
        name: "TechCorp",
        icon: "💻"
    },
    {
        name: "BuildCo",
        icon: "🏗️"
    },
    {
        name: "GreenLiving",
        icon: "🌱"
    },
    {
        name: "SafeGuard",
        icon: "🔒"
    },
    {
        name: "QuickServe",
        icon: "⚡"
    },
    {
        name: "ProCare",
        icon: "👨‍⚕️"
    }
];
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/ads/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/ads/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1-ujm0qsbytis._.js.map