(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/src/components/home/FaqSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqSection",
    ()=>FaqSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FaqSection() {
    _s();
    const [openIdx, setOpenIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const col1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQS"].slice(0, 6);
    const col2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQS"].slice(6, 12);
    const toggleFaq = (index)=>{
        setOpenIdx(openIdx === index ? null : index);
    };
    const renderFaqItem = (faq, globalIdx)=>{
        const isOpen = openIdx === globalIdx;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative rounded-2xl overflow-hidden transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 bg-gradient-to-r ${isOpen ? "from-blue-600/15 to-fb8500/15" : "from-blue-600/0 to-fb8500/0"} group-hover:from-blue-600/10 group-hover:to-fb8500/10 rounded-2xl transition-all pointer-events-none`
                }, void 0, false, {
                    fileName: "[project]/src/components/home/FaqSection.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-white/90 backdrop-blur-sm ring-1 ring-neutral-200/80 group-hover:ring-fb8500/50 shadow-sm group-hover:shadow-md transition-all rounded-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>toggleFaq(globalIdx),
                            className: "w-full px-6 py-5 flex items-start gap-4 hover:bg-neutral-50/50 transition-all text-left focus:outline-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl shrink-0 mt-0.5",
                                    children: faq.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/FaqSection.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-neutral-900 text-sm sm:text-base leading-snug group-hover:text-fb8500 transition-colors",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/FaqSection.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-fb8500 text-xs transition-transform duration-300 shrink-0 font-bold ${isOpen ? "rotate-180" : ""}`,
                                            children: "▼"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/FaqSection.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/FaqSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/FaqSection.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100/80",
                            children: faq.answer
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/FaqSection.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/FaqSection.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, globalIdx, true, {
            fileName: "[project]/src/components/home/FaqSection.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50 opacity-60 blur-3xl pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/home/FaqSection.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-fb8500/10 rounded-full border border-fb8500/30 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent",
                            children: "❓ Got Questions?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/FaqSection.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/FaqSection.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl sm:text-5xl font-extrabold text-neutral-900 mb-4",
                        children: [
                            "Frequently Asked ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent",
                                children: "Questions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/FaqSection.tsx",
                                lineNumber: 73,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/FaqSection.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed",
                        children: "Find answers to common questions about WrkZone"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/FaqSection.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/FaqSection.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: col1.map((faq, i)=>renderFaqItem(faq, i))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/FaqSection.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: col2.map((faq, i)=>renderFaqItem(faq, i + 6))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/FaqSection.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/FaqSection.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/FaqSection.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(FaqSection, "JHeU1KdNesf9XDvPtRBg+hOAqPM=");
_c = FaqSection;
var _c;
__turbopack_context__.k.register(_c, "FaqSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroSection() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSearch = (e)=>{
        e.preventDefault();
        const params = new URLSearchParams();
        if (query.trim()) params.set("q", query.trim());
        if (city.trim()) params.set("city", city.trim());
        router.push(`/ads?${params.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-gradient-to-r from-[#173fa3] via-[#143285] to-[#0c1630] pt-14 pb-16 sm:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/3 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6 text-center relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2.5 rounded-full border border-blue-950/80 bg-[#122452]/90 px-5 py-2 mb-8 backdrop-blur-md shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)] animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs sm:text-sm font-bold text-white tracking-wider",
                                children: "🚀 WRKZONE'S #1 LOCAL SERVICE MARKETPLACE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-white mb-3 leading-tight tracking-tight break-words",
                        children: "Find & Post"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-3xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight break-words",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-400",
                                    children: "Professional"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-900",
                                    children: " Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/HeroSection.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/HeroSection.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg sm:text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed",
                        children: "Browse verified plumbers, electricians, cleaners & more across all major Indian cities."
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 text-base sm:text-lg font-bold mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white",
                                children: "100% Free"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white mx-2",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-400",
                                children: "No Registration"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white mx-2",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white",
                                children: "Live in 60 Seconds"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drop-shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSearch,
                                className: "flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-neutral-200 sm:flex-row sm:rounded-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-1 items-center gap-2 px-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: "🔍"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: query,
                                                onChange: (e)=>setQuery(e.target.value),
                                                placeholder: "What service do you need? e.g. Plumber, AC repair",
                                                className: "w-full bg-transparent py-3 text-sm outline-none placeholder:text-neutral-600/60 text-neutral-900 font-medium"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 border-t border-neutral-100 px-3 sm:border-l sm:border-t-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: "📍"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: city,
                                                onChange: (e)=>setCity(e.target.value),
                                                className: "w-full bg-transparent py-3 text-sm outline-none text-neutral-800 font-medium sm:w-32 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "All Cities"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POPULAR_METRO_CITIES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: c,
                                                            children: c
                                                        }, c, false, {
                                                            fileName: "[project]/src/components/home/HeroSection.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "rounded-xl sm:rounded-full bg-[#fb8500] hover:bg-[#e67300] px-8 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/30 hover:scale-105 transition-transform duration-300 cursor-pointer shrink-0",
                                        children: "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/HeroSection.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/HeroSection.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/HeroSection.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "qqsjdzLXxqNANyvmeOrjI6jf8Fo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/TestimonialsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsSection",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TestimonialsSection() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const current = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TESTIMONIALS"][currentIndex];
    const handlePrev = ()=>{
        setCurrentIndex((prev)=>prev === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TESTIMONIALS"].length - 1 : prev - 1);
    };
    const handleNext = ()=>{
        setCurrentIndex((prev)=>prev === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TESTIMONIALS"].length - 1 ? 0 : prev + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto max-w-7xl px-6 py-20 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50 opacity-60 blur-3xl pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-fb8500/20 rounded-full border border-fb8500/30 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-bold bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent",
                            children: "⭐ Customer Testimonials"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl sm:text-5xl font-extrabold mb-4 font-serif text-neutral-900",
                        children: [
                            "What Our",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent",
                                children: "Customers Say"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed",
                        children: "Join thousands of satisfied customers who have found trusted professionals on WrkZone"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 bg-gradient-to-br ${current.color} opacity-5 rounded-3xl blur-2xl group-hover:opacity-10 transition-opacity`
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 sm:p-12 ring-2 ring-white/50 group-hover:ring-fb8500/50 shadow-lg group-hover:shadow-2xl transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-4 -left-4 text-6xl opacity-20 font-serif",
                                        children: '"'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 mb-6",
                                        children: [
                                            ...Array(5)
                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl animate-pulse",
                                                children: "⭐"
                                            }, i, false, {
                                                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg sm:text-xl text-neutral-800 mb-10 leading-relaxed font-serif italic",
                                        children: [
                                            '"',
                                            current.text,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 pb-8 border-b border-neutral-200 group-hover:border-fb8500/30 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-16 h-16 rounded-full bg-gradient-to-br ${current.color} flex items-center justify-center text-3xl shadow-lg`,
                                                children: current.avatar
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-neutral-900",
                                                        children: current.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-neutral-600",
                                                        children: [
                                                            "📍 ",
                                                            current.city,
                                                            " • ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-fb8500",
                                                                children: current.service
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                                                lineNumber: 73,
                                                                columnNumber: 39
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mt-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handlePrev,
                                                className: "p-3 rounded-full bg-gradient-to-br from-blue-600/10 to-fb8500/10 hover:from-blue-600/20 hover:to-fb8500/20 transition-all group/btn cursor-pointer",
                                                "aria-label": "Previous Testimonial",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl group-hover/btn:scale-125 transition-transform inline-block",
                                                    children: "←"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TESTIMONIALS"].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCurrentIndex(i),
                                                        className: `h-3 rounded-full transition-all cursor-pointer ${currentIndex === i ? "bg-gradient-to-r from-blue-600 to-fb8500 w-8" : "bg-neutral-300 w-3 hover:bg-neutral-400"}`,
                                                        "aria-label": `Slide ${i + 1}`
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleNext,
                                                className: "p-3 rounded-full bg-gradient-to-br from-blue-600/10 to-fb8500/10 hover:from-blue-600/20 hover:to-fb8500/20 transition-all group/btn cursor-pointer",
                                                "aria-label": "Next Testimonial",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl group-hover/btn:scale-125 transition-transform inline-block",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 gap-3 mt-10",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TESTIMONIALS"].map((t, idx)=>{
                            const isSelected = currentIndex === idx;
                            const firstName = t.name.split(" ")[0];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentIndex(idx),
                                className: `p-4 rounded-xl font-semibold text-center transition-all duration-300 cursor-pointer ${isSelected ? "bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-lg ring-2 ring-white/50" : "bg-white text-neutral-700 ring-2 ring-neutral-200 hover:ring-fb8500/50 hover:shadow-md"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl mb-1",
                                        children: t.avatar
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs sm:text-sm",
                                        children: firstName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, t.name, true, {
                                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-20 -right-20 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-20 -left-20 w-48 h-48 bg-fb8500/10 rounded-full blur-3xl pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/home/TestimonialsSection.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/TestimonialsSection.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(TestimonialsSection, "tusBbsahUVevXfyh6oH5R6YDC9Q=");
_c = TestimonialsSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_1ltbjpfekak--._.js.map