module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/test/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Test
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Test() {
    const messageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const PIXEL_SIZE = 2;
    const shatter = ()=>{
        const el = messageRef.current;
        const canvas = canvasRef.current;
        if (!el || !canvas) return;
        const rect = el.getBoundingClientRect();
        const ctx = canvas.getContext("2d", {
            willReadFrequently: true
        });
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const offsetX = rect.left;
        const offsetY = rect.top;
        // 1️⃣ рисуем сообщение вручную
        ctx.fillStyle = "#1f2937";
        ctx.fillRect(offsetX, offsetY, rect.width, rect.height);
        ctx.font = "16px system-ui";
        ctx.fillStyle = "#fff";
        ctx.textBaseline = "top";
        ctx.fillText(el.innerText, offsetX + 16, offsetY + 12);
        // 2️⃣ получаем bitmap
        const image = ctx.getImageData(offsetX, offsetY, canvas.width, canvas.height);
        const data = image.data;
        const particles = [];
        // 3️⃣ превращаем пиксели в частицы
        for(let y = 0; y < canvas.height; y += PIXEL_SIZE){
            for(let x = 0; x < canvas.width; x += PIXEL_SIZE){
                const i = (y * canvas.width + x) * 4;
                const a = data[i + 3];
                if (a > 50) {
                    particles.push({
                        x: offsetX + x,
                        y: offsetY + y,
                        vx: (Math.random() - 0.5) * 0.6,
                        vy: Math.random() - 1.5,
                        alpha: 1,
                        r: data[i],
                        g: data[i + 1],
                        b: data[i + 2]
                    });
                }
            }
        }
        setHidden(true);
        animate(ctx, canvas, particles);
    };
    const animate = (ctx, canvas, particles)=>{
        const gravity = 0.04;
        const frame = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p)=>{
                p.vy += gravity;
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= 0.015;
                if (p.alpha > 0) {
                    ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.alpha})`;
                    ctx.fillRect(p.x, p.y, PIXEL_SIZE, PIXEL_SIZE);
                }
            });
            if (particles.some((p)=>p.alpha > 0)) {
                requestAnimationFrame(frame);
            }
        };
        requestAnimationFrame(frame);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-20 bg-black min-h-screen text-white overflow-visible relative",
        children: [
            !hidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: messageRef,
                onClick: shatter,
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   bg-red-500 px-4 py-3 rounded-xl cursor-pointer select-none   w-50 h-50   ",
                children: "ДОБРО"
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute top-0 left-0 pointer-events-none overflow-visible",
                style: {
                    width: '100vw',
                    height: '100vh'
                }
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f9c09874._.js.map