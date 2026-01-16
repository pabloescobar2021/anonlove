module.exports = [
"[project]/app/anonlove/things/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "size",
    ()=>size,
    "step",
    ()=>step
]);
const size = {
    width: 200,
    height: 200
};
const step = {
    s: 20,
    c: 10
};
}),
"[project]/app/anonlove/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnonLoveMain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function AnonLoveMain() {
    const [sizeFigure, setSizeFigure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"]);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const tap = ()=>{
        setSizeFigure((prev)=>({
                width: prev.width + __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["step"].s,
                height: prev.height + __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["step"].s
            }));
        setScale(1.2);
        setTimeout(()=>setScale(0.95), 120);
        setTimeout(()=>setScale(1.05), 220);
        setTimeout(()=>setScale(1), 320);
        const interval = setInterval(()=>{
            setScale(1.2);
            setTimeout(()=>setScale(0.95), 120);
            setTimeout(()=>setScale(1.05), 220);
            setTimeout(()=>setScale(1), 320);
        }, 1000);
        setTimeout(()=>clearInterval(interval), 1000);
    };
    const viewBox = 100;
    const center = viewBox / 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center bg-black h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: sizeFigure.width,
            height: sizeFigure.height,
            viewBox: `0 0 ${viewBox} ${viewBox}`,
            className: "overflow-visible",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                onClick: tap,
                className: "cursor-pointer transition-transform duration-150 ease-in-out",
                style: {
                    transformOrigin: "50% 50%",
                    transform: `scale(${scale})`
                },
                fill: "red",
                stroke: "#fff",
                strokeWidth: 2,
                d: "   M50 85   C20 60, 5 45, 25 25   C40 10, 50 25, 50 25   C50 25, 60 10, 75 25   C95 45, 80 60, 50 85   "
            }, void 0, false, {
                fileName: "[project]/app/anonlove/page.tsx",
                lineNumber: 47,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/anonlove/page.tsx",
            lineNumber: 41,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/anonlove/page.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=app_anonlove_97b043d4._.js.map