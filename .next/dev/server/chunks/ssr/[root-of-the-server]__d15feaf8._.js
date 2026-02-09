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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.esm.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Test() {
    const msgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const shatter = async ()=>{
        if (!msgRef.current || !canvasRef.current) return;
        const rect = msgRef.current.getBoundingClientRect();
        const canvas = canvasRef.current;
        // Позиционируем канвас точно на месте сообщения
        canvas.style.left = `${rect.left}px`;
        canvas.style.top = `${rect.top}px`;
        canvas.width = rect.width;
        canvas.height = rect.height;
        // 🔥 СНИМОК DOM
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(msgRef.current, {
            backgroundColor: null,
            scale: 1
        });
        const ctx = canvas.getContext("2d", {
            willReadFrequently: true
        });
        ctx.drawImage(snapshot, 0, 0);
        const size = 8; // увеличил чтоб было меньше частиц = быстрее
        const particles = [];
        for(let y = 0; y < canvas.height; y += size){
            for(let x = 0; x < canvas.width; x += size){
                const img = ctx.getImageData(x, y, size, size);
                // проверяем есть ли непрозрачные пиксели
                let hasOpaque = false;
                for(let i = 3; i < img.data.length; i += 4){
                    if (img.data[i] > 20) {
                        hasOpaque = true;
                        break;
                    }
                }
                if (!hasOpaque) continue;
                particles.push({
                    x,
                    y,
                    vx: (Math.random() - 0.5) * 6,
                    vy: (Math.random() - 0.5) * 4 - 3,
                    opacity: 1,
                    img
                });
            }
        }
        // 💥 УБИРАЕМ DOM
        setHidden(true);
        let lastTime = performance.now();
        const animate = (currentTime)=>{
            const deltaTime = (currentTime - lastTime) / 1000; // секунды
            lastTime = currentTime;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let anyAlive = false;
            particles.forEach((p)=>{
                // гравитация
                p.vy += 0.5 * (deltaTime * 60); // нормализуем по FPS
                p.x += p.vx * (deltaTime * 60);
                p.y += p.vy * (deltaTime * 60);
                p.opacity -= 0.015 * (deltaTime * 60);
                if (p.opacity > 0) {
                    anyAlive = true;
                    ctx.globalAlpha = Math.max(0, p.opacity);
                    ctx.putImageData(p.img, Math.round(p.x), Math.round(p.y));
                }
            });
            ctx.globalAlpha = 1;
            if (anyAlive) {
                requestAnimationFrame(animate);
            } else {
                // очищаем канвас после завершения
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        };
        requestAnimationFrame(animate);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-20 bg-slate-900 min-h-screen text-white relative",
        children: [
            !hidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: msgRef,
                onClick: shatter,
                style: {
                    backgroundColor: "rgba(60, 60, 70, 0.95)",
                    color: "#ffffff",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontSize: "15px",
                    lineHeight: "1.4",
                    userSelect: "none"
                },
                children: "Удаляюсь как в Telegram 💥"
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute pointer-events-none",
                style: {
                    position: "fixed"
                }
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/page.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d15feaf8._.js.map