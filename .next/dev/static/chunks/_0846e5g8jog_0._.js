(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/src/app/ads/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$AdCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/services/AdCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Categories list exactly matching wrkzone.com/ads screenshot
const ADS_CATEGORIES = [
    {
        slug: "ac-repair",
        name: "AC Repair",
        icon: "❄️"
    },
    {
        slug: "appliance-repair",
        name: "Appliance Repair",
        icon: "🔌"
    },
    {
        slug: "cctv-security",
        name: "CCTV & Security",
        icon: "📹"
    },
    {
        slug: "carpentry",
        name: "Carpentry",
        icon: "🔨"
    },
    {
        slug: "cleaning",
        name: "Cleaning",
        icon: "🧹"
    },
    {
        slug: "computer-repair",
        name: "Computer Repair",
        icon: "💻"
    },
    {
        slug: "construction",
        name: "Construction",
        icon: "🏗️"
    },
    {
        slug: "electrician",
        name: "Electrician",
        icon: "💡"
    },
    {
        slug: "fitness-trainer",
        name: "Fitness Trainer",
        icon: "💪"
    },
    {
        slug: "gardening",
        name: "Gardening",
        icon: "🌿"
    },
    {
        slug: "home-salon",
        name: "Home Salon",
        icon: "💇"
    },
    {
        slug: "mobile-repair",
        name: "Mobile Repair",
        icon: "📱"
    },
    {
        slug: "movers",
        name: "Movers & Packers",
        icon: "📦"
    },
    {
        slug: "painting",
        name: "Painting",
        icon: "🎨"
    },
    {
        slug: "pest-control",
        name: "Pest Control",
        icon: "🐜"
    },
    {
        slug: "photography",
        name: "Photography",
        icon: "📸"
    },
    {
        slug: "plumbing",
        name: "Plumbing",
        icon: "🔧"
    },
    {
        slug: "tuition-coaching",
        name: "Tuition & Coaching",
        icon: "📚"
    }
];
function AdsContent() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialQ = searchParams?.get("q") || "";
    const initialCity = searchParams?.get("city") || "";
    const initialCategory = searchParams?.get("category") || "";
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialQ);
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCity);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCategory);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("newest");
    const filteredAds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdsContent.useMemo[filteredAds]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_ADS"].filter({
                "AdsContent.useMemo[filteredAds]": (ad)=>{
                    const matchQ = !query.trim() || ad.title.toLowerCase().includes(query.toLowerCase()) || ad.description.toLowerCase().includes(query.toLowerCase()) || ad.categoryName.toLowerCase().includes(query.toLowerCase());
                    const matchCity = !city.trim() || ad.city.toLowerCase() === city.toLowerCase() || ad.area.toLowerCase().includes(city.toLowerCase());
                    const matchCategory = !selectedCategory.trim() || ad.categorySlug === selectedCategory || selectedCategory === "movers" && (ad.categorySlug === "movers" || ad.categorySlug === "packers-movers");
                    return matchQ && matchCity && matchCategory;
                }
            }["AdsContent.useMemo[filteredAds]"]).sort({
                "AdsContent.useMemo[filteredAds]": (a, b)=>{
                    if (sortBy === "price-low") return a.priceNum - b.priceNum;
                    if (sortBy === "price-high") return b.priceNum - a.priceNum;
                    if (sortBy === "popular") return b.views - a.views;
                    // Default: featured first, then original order
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return 0;
                }
            }["AdsContent.useMemo[filteredAds]"]);
        }
    }["AdsContent.useMemo[filteredAds]"], [
        query,
        city,
        selectedCategory,
        sortBy
    ]);
    const handleSearch = (e)=>{
        e.preventDefault();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-7xl px-4 sm:px-6 py-10 w-full overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-extrabold font-serif text-neutral-900",
                children: "Browse services"
            }, void 0, false, {
                fileName: "[project]/src/app/ads/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-neutral-500",
                children: [
                    filteredAds.length,
                    " results"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ads/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 max-w-2xl",
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
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: query,
                                    onChange: (e)=>setQuery(e.target.value),
                                    placeholder: "What service do you need? e.g. Plumber, AC repair",
                                    className: "w-full bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 text-neutral-900 font-medium"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 border-t border-neutral-100 px-3 sm:border-l sm:border-t-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    children: "📍"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
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
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POPULAR_METRO_CITIES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: c,
                                                children: c
                                            }, c, false, {
                                                fileName: "[project]/src/app/ads/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "rounded-xl sm:rounded-full bg-[#fb8500] hover:bg-[#e67300] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform duration-300 shrink-0 cursor-pointer",
                            children: "Search"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ads/page.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ads/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelectedCategory(""),
                                className: `rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer ${selectedCategory === "" ? "bg-[#fb8500] text-white shadow-md shadow-orange-500/30" : "bg-white text-neutral-700 ring-1 ring-neutral-200 hover:ring-[#fb8500]"}`,
                                children: "All"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ads/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            ADS_CATEGORIES.map((cat)=>{
                                const isSelected = selectedCategory === cat.slug;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setSelectedCategory(isSelected ? "" : cat.slug),
                                    className: `rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer flex items-center gap-1.5 ${isSelected ? "bg-[#fb8500] text-white shadow-md shadow-orange-500/30" : "bg-white text-neutral-700 ring-1 ring-neutral-200 hover:ring-[#fb8500]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: cat.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: cat.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, cat.slug, true, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ads/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-neutral-600",
                                children: "Sort:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/ads/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: sortBy,
                                onChange: (e)=>setSortBy(e.target.value),
                                className: "rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold outline-none focus:border-[#fb8500] text-neutral-800 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "newest",
                                        children: "Newest first"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ads/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "price-low",
                                        children: "Price: low to high"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ads/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "price-high",
                                        children: "Price: high to low"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ads/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "popular",
                                        children: "Most viewed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ads/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ads/page.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ads/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ads/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            filteredAds.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-20 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-5xl mb-3",
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ads/page.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold font-serif text-neutral-900",
                        children: "No services found"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ads/page.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-neutral-500",
                        children: "Try adjusting your search terms or clearing the city filter."
                    }, void 0, false, {
                        fileName: "[project]/src/app/ads/page.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            setQuery("");
                            setCity("");
                            setSelectedCategory("");
                        },
                        className: "mt-4 rounded-full bg-[#fb8500] px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-[#e67300] transition",
                        children: "Clear Filters"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ads/page.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ads/page.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
                children: filteredAds.map((ad)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$AdCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdCard"], {
                        ad: ad
                    }, ad.id, false, {
                        fileName: "[project]/src/app/ads/page.tsx",
                        lineNumber: 206,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/ads/page.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ads/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(AdsContent, "54kpkHzg9dle1GIK4WzOd2H4cv8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = AdsContent;
function AdsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6 py-16 text-center text-neutral-500",
            children: "Loading services..."
        }, void 0, false, {
            fileName: "[project]/src/app/ads/page.tsx",
            lineNumber: 218,
            columnNumber: 9
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdsContent, {}, void 0, false, {
            fileName: "[project]/src/app/ads/page.tsx",
            lineNumber: 223,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ads/page.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
_c1 = AdsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdsContent");
__turbopack_context__.k.register(_c1, "AdsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/services/AdCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdCard",
    ()=>AdCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/ads/${ad.id}`,
        className: "card-lift group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200/80 shadow-sm hover:shadow-md hover:ring-[#fb8500] transition-all cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-44 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    ad.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-3 top-3 rounded-full bg-white/80 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold text-neutral-600 shadow-xs border border-white/50",
                        children: "⭐ Featured"
                    }, void 0, false, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white shadow flex items-center gap-1",
                        style: {
                            background: currentStyle.badge
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: currentStyle.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/services/AdCard.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "line-clamp-1 font-bold font-serif text-neutral-900 group-hover:text-[#fb8500] transition text-base",
                        children: ad.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 line-clamp-2 text-sm text-neutral-600 leading-relaxed font-normal",
                        children: ad.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center gap-1 text-sm text-neutral-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "📍"
                            }, void 0, false, {
                                fileName: "[project]/src/components/services/AdCard.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center justify-between border-t border-neutral-100 pt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = AdCard;
var _c;
__turbopack_context__.k.register(_c, "AdCard");
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

//# sourceMappingURL=_0846e5g8jog_0._.js.map