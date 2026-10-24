(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$buildLucideIconForReact$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/context.mjs [app-client] (ecmascript)");
"use strict";
"use client";
;
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color, size, width, height, strokeWidth, absoluteStrokeWidth, nonScalingStroke, className = "", children, iconNode = [], icon = {
    node: iconNode,
    aliases: [],
    size: 24
}, ...rest }, ref)=>{
    const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, nonScalingStroke: contextNonScalingStroke = false, color: contextColor = "currentColor", className: contextClass = "" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLucideContext"])() ?? {};
    const hasAccessibleProp = Boolean(children) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest);
    const [name, svgAttributes, builtIconNode = []] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$buildLucideIconForReact$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(icon, {
        color: color ?? contextColor,
        width: width ?? size ?? contextSize,
        height: height ?? size ?? contextSize,
        strokeWidth: strokeWidth ?? contextStrokeWidth,
        absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
        nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(contextClass, className),
        hasA11yProp: hasAccessibleProp,
        attributes: rest
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(name, {
        ref,
        ...svgAttributes
    }, [
        ...builtIconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
}),
"[project]/node_modules/lucide-react/dist/esm/context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LucideProvider",
    ()=>LucideProvider,
    "useLucideContext",
    ()=>useLucideContext
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use strict";
"use client";
;
const LucideContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
function LucideProvider({ children, size, color, strokeWidth, absoluteStrokeWidth, nonScalingStroke, className }) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LucideProvider.useMemo[value]": ()=>({
                size,
                color,
                strokeWidth,
                absoluteStrokeWidth,
                nonScalingStroke,
                className
            })
    }["LucideProvider.useMemo[value]"], [
        size,
        color,
        strokeWidth,
        absoluteStrokeWidth,
        nonScalingStroke,
        className
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(LucideContext.Provider, {
        value
    }, children);
}
const useLucideContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LucideContext);
;
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toLucideIconData$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-client] (ecmascript)");
;
;
;
;
function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
    const iconData = typeof iconDataOrName === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toLucideIconData$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toLucideIconData"])(iconDataOrName, iconNode, aliases) : iconDataOrName;
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            icon: iconData,
            className,
            ...props
        }));
    if (iconData.name) {
        Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconData.name);
    }
    return Component;
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>ArrowUpDown
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "arrow-up-down",
    size: 24,
    node: [
        [
            "path",
            {
                d: "m21 16-4 4-4-4",
                key: "f6ql7i"
            }
        ],
        [
            "path",
            {
                d: "M17 20V4",
                key: "1ejh1v"
            }
        ],
        [
            "path",
            {
                d: "m3 8 4-4 4 4",
                key: "11wl7u"
            }
        ],
        [
            "path",
            {
                d: "M7 4v16",
                key: "1glfcx"
            }
        ]
    ]
};
__iconData.node;
const ArrowUpDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.mjs [app-client] (ecmascript) <export default as ArrowUpDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowUpDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>MapPin
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "map-pin",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
                key: "1r0f0z"
            }
        ],
        [
            "circle",
            {
                cx: "12",
                cy: "10",
                r: "3",
                key: "ilqhr7"
            }
        ]
    ]
};
__iconData.node;
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconData = {
    name: "search",
    size: 24,
    node: [
        [
            "path",
            {
                d: "m21 21-4.34-4.34",
                key: "14j7rj"
            }
        ],
        [
            "circle",
            {
                cx: "11",
                cy: "11",
                r: "8",
                key: "4ej97u"
            }
        ]
    ]
};
__iconData.node;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildLucideIconForReact
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$buildLucideIconNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs [app-client] (ecmascript)");
;
function buildLucideIconForReact(icon, params = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$buildLucideIconNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(icon, {
        ...params,
        attributeNames: {
            ...params.attributeNames,
            class: "className",
            "stroke-width": "strokeWidth",
            "stroke-linecap": "strokeLinecap",
            "stroke-linejoin": "strokeLinejoin",
            "vector-effect": "vectorEffect"
        }
    });
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildLucideIconNode
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-client] (ecmascript)");
;
;
function isDefined(value) {
    return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
    const attributeNames = params.attributeNames ?? {};
    const getAttributeName = (attributeName)=>attributeNames[attributeName] ?? attributeName;
    const viewBoxWidth = icon.size ?? icon.width ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["width"];
    const viewBoxHeight = icon.size ?? icon.height ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["height"];
    const aliasClassNames = icon.aliases?.filter((alias)=>typeof alias === "string" && alias.trim() !== "").map((alias)=>`lucide-${alias}`) ?? [];
    const iconClassNames = [
        ...icon.name ? [
            `lucide-${icon.name}`
        ] : [],
        ...aliasClassNames
    ];
    const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
    const className = params.includeDefaultClasses === false ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(...classNamesFromClassName) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", ...iconClassNames, ...classNamesFromClassName);
    const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["stroke-width"]) * Number(icon.size ?? icon.width ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["width"]) / Number(params.size ?? params.width ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["width"]) : params.strokeWidth ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["stroke-width"];
    const attributes = {
        ...Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$build$2f$defaultAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).reduce((attrs, [attrName, value])=>{
            attrs[getAttributeName(attrName)] = value;
            return attrs;
        }, {}),
        ..."color" in params && params.color && {
            [getAttributeName("stroke")]: params.color
        },
        ..."size" in params && isDefined(params.size) && {
            [getAttributeName("width")]: params.size,
            [getAttributeName("height")]: params.size
        },
        ..."width" in params && isDefined(params.width) && {
            [getAttributeName("width")]: params.width
        },
        ..."height" in params && isDefined(params.height) && {
            [getAttributeName("height")]: params.height
        },
        [getAttributeName("stroke-width")]: calculatedStrokeWidth,
        ...className && {
            [getAttributeName("class")]: className
        },
        [getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
        ...params.hasA11yProp === false ? {
            [getAttributeName("aria-hidden")]: "true"
        } : {},
        ..."attributes" in params && params.attributes
    };
    return [
        "svg",
        attributes,
        icon.node.map((child)=>{
            const [name, attrs, children] = child;
            const nextAttrs = params.nonScalingStroke ? {
                [getAttributeName("vector-effect")]: "non-scaling-stroke",
                ...attrs
            } : attrs;
            return children ? [
                name,
                nextAttrs,
                children
            ] : [
                name,
                nextAttrs
            ];
        })
    ];
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>{
    let out = "";
    let upperNext = false;
    for (const ch of string){
        if (ch === "-" || ch === "_" || ch <= " ") {
            upperNext = out.length > 0;
            continue;
        }
        if (out.length === 0) {
            out += ch.toLowerCase();
        } else {
            out += upperNext ? ch.toUpperCase() : ch;
        }
        upperNext = false;
    }
    return out;
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toLucideIconData",
    ()=>toLucideIconData
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-client] (ecmascript)");
;
function toLucideIconData(iconName, iconNode, aliases = []) {
    if (iconNode == null) {
        throw new Error("[lucide]: iconNode is required when icon name is used");
    }
    return {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName),
        size: 24,
        node: iconNode,
        ...aliases.length > 0 ? {
            aliases
        } : {}
    };
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-client] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.mjs [app-client] (ecmascript) <export default as ArrowUpDown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AdsContent() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialQ = searchParams?.get("q") || "";
    const initialCity = searchParams?.get("city") || "";
    const initialCategory = searchParams?.get("category") || "";
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialQ);
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCity);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCategory);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("featured");
    const filteredAds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdsContent.useMemo[filteredAds]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_ADS"].filter({
                "AdsContent.useMemo[filteredAds]": (ad)=>{
                    const matchQ = !searchQuery.trim() || ad.title.toLowerCase().includes(searchQuery.toLowerCase()) || ad.description.toLowerCase().includes(searchQuery.toLowerCase()) || ad.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
                    const matchCity = !selectedCity.trim() || ad.city.toLowerCase() === selectedCity.toLowerCase() || ad.area.toLowerCase().includes(selectedCity.toLowerCase());
                    const matchCategory = !selectedCategory.trim() || ad.categorySlug === selectedCategory;
                    return matchQ && matchCity && matchCategory;
                }
            }["AdsContent.useMemo[filteredAds]"]).sort({
                "AdsContent.useMemo[filteredAds]": (a, b)=>{
                    if (sortBy === "price-asc") return a.priceNum - b.priceNum;
                    if (sortBy === "price-desc") return b.priceNum - a.priceNum;
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return 0;
                }
            }["AdsContent.useMemo[filteredAds]"]);
        }
    }["AdsContent.useMemo[filteredAds]"], [
        searchQuery,
        selectedCity,
        selectedCategory,
        sortBy
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-10 bg-neutral-50/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-neutral-500 mb-2 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-1",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 31
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-neutral-900 font-bold",
                                    children: "Browse Ads"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 63
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight",
                            children: [
                                "Browse ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-blue-600 to-fb8500 bg-clip-text text-transparent",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-neutral-600",
                            children: "Find verified pest exterminators, cleaners, technicians and handymen across India"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ads/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-neutral-200/80 mb-8 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-3 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-1 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value),
                                            placeholder: "Search services, e.g. cockroach control, pipe leak, AC...",
                                            className: "w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-medium text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-fb8500 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full md:w-56",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fb8500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedCity,
                                            onChange: (e)=>setSelectedCity(e.target.value),
                                            className: "w-full pl-9 pr-8 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-medium text-neutral-900 focus:outline-none focus:border-fb8500 appearance-none cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "All Cities"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ads/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POPULAR_METRO_CITIES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c,
                                                        children: c
                                                    }, c, false, {
                                                        fileName: "[project]/src/app/ads/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-neutral-400",
                                            children: "▼"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full md:w-52",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sortBy,
                                            onChange: (e)=>setSortBy(e.target.value),
                                            className: "w-full pl-9 pr-8 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm font-medium text-neutral-900 focus:outline-none focus:border-fb8500 appearance-none cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "featured",
                                                    children: "Featured First"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ads/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "price-asc",
                                                    children: "Price: Low to High"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ads/page.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "price-desc",
                                                    children: "Price: High to Low"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ads/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-neutral-400",
                                            children: "▼"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t border-neutral-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedCategory(""),
                                    className: `px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${selectedCategory === "" ? "bg-fb8500 text-white shadow-sm" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`,
                                    children: "All Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedCategory(cat.slug),
                                        className: `px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${selectedCategory === cat.slug ? "bg-fb8500 text-white shadow-sm" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: cat.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ads/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: cat.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/ads/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, cat.slug, true, {
                                        fileName: "[project]/src/app/ads/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ads/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-4 mb-6 text-sm text-neutral-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Showing ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-neutral-900",
                                    children: filteredAds.length
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 21
                                }, this),
                                " services",
                                selectedCity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        " in ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-neutral-900",
                                            children: selectedCity
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 30
                                }, this),
                                selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        " in ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-neutral-900",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].find((c)=>c.slug === selectedCategory)?.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ads/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ads/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        (searchQuery || selectedCity || selectedCategory) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSearchQuery("");
                                setSelectedCity("");
                                setSelectedCategory("");
                            },
                            className: "text-xs font-semibold text-fb8500 hover:underline",
                            children: "Clear filters"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ads/page.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                filteredAds.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
                    children: filteredAds.map((ad)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$AdCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdCard"], {
                            ad: ad
                        }, ad.id, false, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 172,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/ads/page.tsx",
                    lineNumber: 170,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl p-12 text-center border border-neutral-200 max-w-lg mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-4xl mb-3",
                            children: "🔍"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-neutral-900",
                            children: "No services found"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-500 mt-1",
                            children: "Try adjusting your search terms or clearing city/category filters."
                        }, void 0, false, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSearchQuery("");
                                setSelectedCity("");
                                setSelectedCategory("");
                            },
                            className: "mt-5 px-5 py-2.5 rounded-xl font-bold text-xs text-white primary-gradient",
                            children: "Reset All Filters"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ads/page.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ads/page.tsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ads/page.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ads/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(AdsContent, "wyc/WqJuS/w1ekpoZuEjSXlW/pw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = AdsContent;
function AdsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-24 text-center text-neutral-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse text-lg",
                children: "Loading WrkZone services…"
            }, void 0, false, {
                fileName: "[project]/src/app/ads/page.tsx",
                lineNumber: 204,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ads/page.tsx",
            lineNumber: 203,
            columnNumber: 9
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdsContent, {}, void 0, false, {
            fileName: "[project]/src/app/ads/page.tsx",
            lineNumber: 208,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ads/page.tsx",
        lineNumber: 201,
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
    // Category banner pastel background & pill badge colors matching original wrkzone.com
    const catStyles = {
        "pest-control": {
            bg: "linear-gradient(135deg, #ecfccb 0%, #d9f99d 100%)",
            badge: "#84cc16"
        },
        cleaning: {
            bg: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
            badge: "#f59e0b"
        },
        "ac-repair": {
            bg: "linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)",
            badge: "#06b6d4"
        },
        plumbing: {
            bg: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
            badge: "#3b82f6"
        },
        carpentry: {
            bg: "linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)",
            badge: "#d97706"
        },
        electrician: {
            bg: "linear-gradient(135deg, #fef9c3 0%, #fef08a 100%)",
            badge: "#eab308"
        },
        movers: {
            bg: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
            badge: "#8b5cf6"
        }
    };
    const currentStyle = catStyles[ad.categorySlug] || {
        bg: "linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)",
        badge: "#fb8500"
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
                        children: ad.categoryIcon
                    }, void 0, false, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    ad.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-3 top-3 rounded-full bg-white/80 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold text-neutral-700 shadow-xs border border-white/50",
                        children: "⭐ Featured"
                    }, void 0, false, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white shadow",
                        style: {
                            background: currentStyle.badge
                        },
                        children: [
                            ad.categoryIcon,
                            " ",
                            ad.categoryName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/services/AdCard.tsx",
                lineNumber: 58,
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
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 line-clamp-2 text-sm text-neutral-600 leading-relaxed font-normal",
                        children: ad.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center gap-1.5 text-xs sm:text-sm text-neutral-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "📍"
                            }, void 0, false, {
                                fileName: "[project]/src/components/services/AdCard.tsx",
                                lineNumber: 88,
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
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 87,
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
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-neutral-400 font-normal",
                                children: ad.postedAgo
                            }, void 0, false, {
                                fileName: "[project]/src/components/services/AdCard.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/services/AdCard.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/services/AdCard.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/services/AdCard.tsx",
        lineNumber: 53,
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
    },
    // Additional Pest Control & Home Services Listings for Rich Coverage
    {
        id: "cmqdfo7pest01",
        title: "Subterranean Termite Treatment & Anti-Termite Piping",
        categorySlug: "pest-control",
        categoryName: "Pest Control",
        categoryIcon: "🐜",
        price: "₹2,499",
        priceNum: 2499,
        area: "Andheri East",
        city: "Mumbai",
        state: "Maharashtra",
        views: 94,
        postedAgo: "2 months ago",
        featured: true,
        description: "Comprehensive drill-fill-seal termite control for residential & commercial spaces. Pre-construction & post-construction anti-termite treatment with 5 years written warranty.",
        fullDetails: [
            "Bayer Premise chemical barrier treatment",
            "Drilling 12mm holes at 1-foot intervals along skirting walls",
            "Woodwork emulsion spray on door frames and kitchen cabinets",
            "5-Year renewable service guarantee"
        ],
        provider: {
            name: "Sunil Shinde",
            initials: "SS",
            city: "Mumbai",
            memberSince: "2026",
            rating: 4.9,
            reviewsCount: 62,
            phone: "9876543220",
            whatsapp: "9876543220",
            verified: true
        },
        highlights: [
            "5-Year Guarantee",
            "Bayer Certified",
            "Drill-Fill-Seal",
            "Pre & Post Construction"
        ]
    },
    {
        id: "cmqdfo7pest02",
        title: "Bed Bug Thermal & Chemical Eradication",
        categorySlug: "pest-control",
        categoryName: "Pest Control",
        categoryIcon: "🐜",
        price: "₹1,199",
        priceNum: 1199,
        area: "Indiranagar",
        city: "Bangalore",
        state: "Karnataka",
        views: 78,
        postedAgo: "1 month ago",
        featured: false,
        description: "Two-step intensive bed bug treatment: high heat steaming of mattresses & sofa cushions, followed by targeted contact spray. Complete elimination of eggs and nymphs.",
        fullDetails: [
            "Steam extraction kills hidden bed bug eggs instantly",
            "Micro-encapsulated spray on bed frames, headboards and seams",
            "Complimentary second follow-up spray after 14 days",
            "Odour-free and non-staining solution"
        ],
        provider: {
            name: "Manoj Gowda",
            initials: "MG",
            city: "Bangalore",
            memberSince: "2026",
            rating: 4.8,
            reviewsCount: 45,
            phone: "9876543221",
            whatsapp: "9876543221",
            verified: true
        },
        highlights: [
            "2-Visit Treatment",
            "Steam & Spray",
            "Mattress Safe",
            "Free Follow-up"
        ]
    },
    {
        id: "cmqdfo7pest03",
        title: "Kitchen Cockroach Gel & Drain Clean Treatment",
        categorySlug: "pest-control",
        categoryName: "Pest Control",
        categoryIcon: "🐜",
        price: "₹699",
        priceNum: 699,
        area: "Madhapur",
        city: "Hyderabad",
        state: "Telangana",
        views: 112,
        postedAgo: "3 weeks ago",
        featured: false,
        description: "Targeted fipronil dot gel baiting applied to kitchen cabinet hinges, refrigerator motor, sink bottoms, and micro-cracks. Clears German roaches without food removal.",
        fullDetails: [
            "Dot gel baiting ensures roaches take bait back to nest",
            "Drain pipe foaming to stop cockroach entry from sewage",
            "Zero smell, 100% kitchen safe",
            "Long-lasting residual protection for 6 months"
        ],
        provider: {
            name: "Naveen Reddy",
            initials: "NR",
            city: "Hyderabad",
            memberSince: "2026",
            rating: 4.9,
            reviewsCount: 33,
            phone: "9876543222",
            whatsapp: "9876543222",
            verified: true
        },
        highlights: [
            "No Food Relocation",
            "Fipronil Gel Baiting",
            "Drain Protection",
            "6 Months Relief"
        ]
    },
    {
        id: "cmqdfo7pest04",
        title: "Mosquito Fogging & Larvicide Garden Treatment",
        categorySlug: "pest-control",
        categoryName: "Pest Control",
        categoryIcon: "🐜",
        price: "₹1,299",
        priceNum: 1299,
        area: "Adyar",
        city: "Chennai",
        state: "Tamil Nadu",
        views: 65,
        postedAgo: "2 weeks ago",
        featured: false,
        description: "Thermal thermal fogging for compound areas, gardens, balconies, and basement parking. Eco-friendly larvicide granules for drains and stagnant water.",
        fullDetails: [
            "Thermal fogging kills active adult mosquitoes immediately",
            "Anti-larval treatment stops breeding in gutters and plants",
            "Dengue, Malaria, and Chikungunya prevention",
            "Ideal for apartments, villas, and society compounds"
        ],
        provider: {
            name: "Senthil Nathan",
            initials: "SN",
            city: "Chennai",
            memberSince: "2026",
            rating: 4.7,
            reviewsCount: 22,
            phone: "9876543223",
            whatsapp: "9876543223",
            verified: true
        },
        highlights: [
            "Thermal Fogging",
            "Anti-Larval Granules",
            "Dengue Prevention",
            "Garden & Balcony Safe"
        ]
    },
    {
        id: "cmqdfo7clean01",
        title: "Bathroom Descaling & Deep Sanitization",
        categorySlug: "cleaning",
        categoryName: "Cleaning",
        categoryIcon: "🧹",
        price: "₹499",
        priceNum: 499,
        area: "Satellite",
        city: "Ahmedabad",
        state: "Gujarat",
        views: 89,
        postedAgo: "1 month ago",
        featured: false,
        description: "Hard water scale removal from shower taps, glass partitions, wall tiles, and commode descaling. Chemical-free steam sterilization for bacteria-free bathrooms.",
        fullDetails: [
            "Taski high-grade descaling solutions",
            "Buffing of chromium bathroom fittings to showroom shine",
            "Steam cleaning kills 99.9% germs in corners",
            "Exhaust fan and tile grout deep scrub"
        ],
        provider: {
            name: "Bhavin Patel",
            initials: "BP",
            city: "Ahmedabad",
            memberSince: "2026",
            rating: 4.8,
            reviewsCount: 27,
            phone: "9876543224",
            whatsapp: "9876543224",
            verified: true
        },
        highlights: [
            "Hard Water Scale Removal",
            "Steam Sterilization",
            "Chrome Polish",
            "Tile Grout Scrubbing"
        ]
    },
    {
        id: "cmqdfo7mover01",
        title: "Professional Packers & Movers — Intercity & Local Shifting",
        categorySlug: "movers",
        categoryName: "Movers",
        categoryIcon: "📦",
        price: "₹3,999",
        priceNum: 3999,
        area: "Hinjewadi",
        city: "Pune",
        state: "Maharashtra",
        views: 145,
        postedAgo: "3 months ago",
        featured: true,
        description: "5-layer safe bubble wrap packaging, carton boxes, skilled loading & unloading staff, GPS-tracked covered trucks. Zero damage transit assurance.",
        fullDetails: [
            "Multi-layer bubble wrap for TV, fridge, crockery and furniture",
            "Dismantling & reassembly of beds and wardrobes included",
            "Covered containers with weather protection",
            "Full transit insurance coverage optional"
        ],
        provider: {
            name: "Sachin Kadam",
            initials: "SK",
            city: "Pune",
            memberSince: "2026",
            rating: 4.9,
            reviewsCount: 88,
            phone: "9876543225",
            whatsapp: "9876543225",
            verified: true
        },
        highlights: [
            "5-Layer Packaging",
            "Dismantle & Assemble",
            "GPS Tracking",
            "Transit Insurance"
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

//# sourceMappingURL=_1cjgnk8-i8twl._.js.map