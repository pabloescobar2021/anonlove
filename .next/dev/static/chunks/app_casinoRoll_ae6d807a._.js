(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/casinoRoll/utils/visual.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describeArc",
    ()=>describeArc,
    "generateColor",
    ()=>generateColor,
    "getTextCoords",
    ()=>getTextCoords,
    "polarToCartesian",
    ()=>polarToCartesian
]);
function polarToCartesian(cx, cy, r, angle) {
    const rad = (angle - 90) * Math.PI / 180.;
    return {
        x: cx + r * Math.cos(rad),
        y: cy + r * Math.sin(rad)
    };
}
function describeArc(cx, cy, r, startAngle, endAngle) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    return `
        M ${cx} ${cy}
        L ${start.x} ${start.y}
        A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}
        Z
    `;
}
function getTextCoords(cx, cy, r, startAngle, endAngle, factor = 0.65) {
    const angle = (startAngle + endAngle) / 2;
    const pos = polarToCartesian(cx, cy, r * factor, angle);
    let rotation = angle - 90;
    return {
        x: pos.x,
        y: pos.y,
        rotation
    };
}
function generateColor(index) {
    const hue = index * 137.508 % 360; // use golden angle approximation
    return `hsl(${hue}, 70%, 60%)`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/casinoRoll/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Roll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$casinoRoll$2f$utils$2f$visual$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/casinoRoll/utils/visual.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Roll() {
    _s();
    /* ------------------ STATE ------------------ */ const [lots, setLots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); //лот выбран но еще крутится колесо 
    const wheelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // ref на колесо
    const [lotName, setLotName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [lotCost, setLotCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedinterval, setSelectedInterval] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5); // время вращения по умолчанию
    const [hoveredLotId, setHoveredLotId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Roll.useEffect": ()=>{
            try {
                const saved = localStorage.getItem("lots");
                if (saved) setLots(JSON.parse(saved));
            } catch  {}
            setHydrated(true);
        }
    }["Roll.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Roll.useEffect": ()=>{
            if (hydrated) {
                localStorage.setItem("lots", JSON.stringify(lots));
            }
        }
    }["Roll.useEffect"], [
        lots,
        hydrated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Roll.useEffect": ()=>{
            const wheel = wheelRef.current;
            if (!wheel) return;
            const handleTranstionEnd = {
                "Roll.useEffect.handleTranstionEnd": (e)=>{
                    if (e.propertyName !== 'transform') return;
                    if (!pending) return;
                    setResult(pending);
                    setLots({
                        "Roll.useEffect.handleTranstionEnd": (prev)=>prev.map({
                                "Roll.useEffect.handleTranstionEnd": (lot)=>lot.id === pending.id ? {
                                        ...lot,
                                        enabled: false
                                    } : lot
                            }["Roll.useEffect.handleTranstionEnd"])
                    }["Roll.useEffect.handleTranstionEnd"]);
                    setPending(null);
                }
            }["Roll.useEffect.handleTranstionEnd"];
            wheel.addEventListener('transitionend', handleTranstionEnd);
            return ({
                "Roll.useEffect": ()=>{
                    wheel.removeEventListener('transitionend', handleTranstionEnd);
                }
            })["Roll.useEffect"];
        }
    }["Roll.useEffect"], [
        pending
    ]);
    if (!hydrated) return null;
    // Размеры колеса
    const size = [
        500,
        500,
        490
    ];
    const cx = size[0] / 2;
    const cy = size[1] / 2;
    const radius = size[2] / 2;
    const activeLots = lots.filter((lot)=>lot.enabled !== false);
    const disabledLots = lots.filter((lot)=>lot.enabled === false);
    const totalWeight = activeLots.reduce((sum, lot)=>sum + lot.weight, 0); //сумма весов
    const angelPerWeight = 360 / totalWeight; // угол каждого лота
    function pickLot(activeLots) {
        let rand = Math.random() * totalWeight;
        for (const lot of activeLots){
            rand -= lot.weight;
            if (rand <= 0) {
                return lot;
            }
        }
        return activeLots[0];
    }
    let currentAngle = 0;
    const sectors = activeLots.map((lot, index)=>{
        const start = currentAngle;
        const angel = lot.weight * angelPerWeight;
        const end = start + angel;
        currentAngle = end;
        const coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$casinoRoll$2f$utils$2f$visual$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextCoords"])(cx, cy, radius, start, end);
        return {
            ...lot,
            start,
            end,
            path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$casinoRoll$2f$utils$2f$visual$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeArc"])(cx, cy, radius, start, end),
            textX: coords.x,
            textY: coords.y,
            textAngle: coords.rotation,
            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$casinoRoll$2f$utils$2f$visual$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColor"])(index)
        };
    });
    const spin = ()=>{
        const winner = pickLot(activeLots);
        setPending(winner);
        const winnerSector = sectors.find((s)=>s.id === winner.id);
        const middleAngle = (winnerSector.start + winnerSector.end) / 2;
        const spins = 5 * 360; // количество полных оборотов
        const finalRotation = spins + (360 - middleAngle);
        setRotation((prev)=>prev + finalRotation);
    };
    const addLot = ()=>{
        const name = lotName || `Лот ${lots.length + 1}`;
        const weight = Number(lotCost) || 0;
        if (!weight || weight <= 0) return;
        setLots((prev)=>[
                ...prev,
                {
                    id: crypto.randomUUID(),
                    label: name,
                    weight,
                    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$casinoRoll$2f$utils$2f$visual$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateColor"])(prev.length),
                    enabled: true
                }
            ]);
        setLotName('');
        setLotCost('');
    };
    const removeLot = (id)=>{
        setLots((prev)=>prev.filter((lot)=>lot.id !== id));
    };
    const chooseTime = (time)=>{
        // функция для выбора времени вращения
        setSelectedInterval(time);
    };
    const returnLot = (id)=>{
        setLots((prev)=>prev.map((lot)=>lot.id === id ? {
                    ...lot,
                    enabled: true
                } : lot));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-6 p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-4 left-1/2 -translate-x-1/2 z-10",
                                children: "🔻"
                            }, void 0, false, {
                                fileName: "[project]/app/casinoRoll/page.tsx",
                                lineNumber: 183,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: wheelRef,
                                style: {
                                    transform: `rotate(${rotation}deg)`,
                                    transition: `transform ${selectedinterval}s cubic-bezier(.17,.67,.12,.99)`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: size[0],
                                    height: size[1],
                                    children: [
                                        activeLots.length === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: cx,
                                                    cy: cy,
                                                    r: radius,
                                                    fill: activeLots[0].color,
                                                    stroke: "#fff",
                                                    strokeWidth: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/app/casinoRoll/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: cx,
                                                    y: cy,
                                                    fill: "#fff",
                                                    fontSize: 12,
                                                    textAnchor: "middle",
                                                    dominantBaseline: "middle",
                                                    children: activeLots[0].label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/casinoRoll/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        activeLots.length > 1 && sectors.map((lot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                onMouseEnter: ()=>setHoveredLotId(lot.id),
                                                onMouseLeave: ()=>setHoveredLotId(null),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: lot.path,
                                                        fill: lot.color,
                                                        stroke: "#fff",
                                                        strokeWidth: 1,
                                                        opacity: hoveredLotId === lot.id ? 0.5 : 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/casinoRoll/page.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: lot.textX,
                                                        y: lot.textY,
                                                        fill: "#fff",
                                                        fontSize: "12",
                                                        textAnchor: "middle",
                                                        dominantBaseline: "middle",
                                                        transform: `rotate(${lot.textAngle} ${lot.textX} ${lot.textY})`,
                                                        children: lot.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/casinoRoll/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, lot.id, true, {
                                                fileName: "[project]/app/casinoRoll/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 29
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/casinoRoll/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/casinoRoll/page.tsx",
                                lineNumber: 188,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/casinoRoll/page.tsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: spin,
                        className: "px-6 py-2 bg-black text-white rounded-md",
                        children: "Крутить"
                    }, void 0, false, {
                        fileName: "[project]/app/casinoRoll/page.tsx",
                        lineNumber: 257,
                        columnNumber: 13
                    }, this),
                    result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-semibold",
                        children: [
                            "Выпало: ",
                            result.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/casinoRoll/page.tsx",
                        lineNumber: 267,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/casinoRoll/page.tsx",
                lineNumber: 179,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col p-2 gap-4 border-l ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            1,
                            5,
                            10,
                            15
                        ].map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>chooseTime(time),
                                className: `flex justify-center border rounded-md p-2 w-10 
                            ${selectedinterval === time ? 'bg-blue-500 text-white' : 'bg-white text-black'}
                            hover:bg-blue-300 transition-colors
                            `,
                                children: time
                            }, time, false, {
                                fileName: "[project]/app/casinoRoll/page.tsx",
                                lineNumber: 278,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/casinoRoll/page.tsx",
                        lineNumber: 276,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: lotName,
                                onChange: (e)=>setLotName(e.target.value),
                                placeholder: "Название лота",
                                className: "border rounded-md p-2 mb-2 w-full"
                            }, void 0, false, {
                                fileName: "[project]/app/casinoRoll/page.tsx",
                                lineNumber: 293,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: lotCost,
                                onChange: (e)=>setLotCost(e.target.value),
                                placeholder: "Вес лота",
                                className: "border rounded-md p-2 mb-2 w-full"
                            }, void 0, false, {
                                fileName: "[project]/app/casinoRoll/page.tsx",
                                lineNumber: 300,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>addLot(),
                                className: "border rounded-md p-2",
                                children: "Добавить лот"
                            }, void 0, false, {
                                fileName: "[project]/app/casinoRoll/page.tsx",
                                lineNumber: 308,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/casinoRoll/page.tsx",
                        lineNumber: 292,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Лоты"
                            }, void 0, false, {
                                fileName: "[project]/app/casinoRoll/page.tsx",
                                lineNumber: 317,
                                columnNumber: 21
                            }, this),
                            lots.map((lot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex border rounded-md p-2 gap-2 hover:translate-x-0.5
                            ${hoveredLotId === lot.id ? 'bg-white/20' : ''} 
                            ${!lot.enabled ? 'opacity-50' : ''} 
                            `,
                                    children: [
                                        lot.enabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>returnLot(lot.id),
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/app/casinoRoll/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 52
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: lot.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/casinoRoll/page.tsx",
                                            lineNumber: 328,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: lot.weight,
                                            onChange: (e)=>{
                                                const newWeight = Number(e.target.value);
                                                setLots((prev)=>prev.map((l)=>l.id === lot.id ? {
                                                            ...l,
                                                            weight: newWeight
                                                        } : l));
                                            },
                                            className: "border rounded-md"
                                        }, void 0, false, {
                                            fileName: "[project]/app/casinoRoll/page.tsx",
                                            lineNumber: 332,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeLot(lot.id),
                                            children: "X"
                                        }, void 0, false, {
                                            fileName: "[project]/app/casinoRoll/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, lot.id, true, {
                                    fileName: "[project]/app/casinoRoll/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/casinoRoll/page.tsx",
                        lineNumber: 316,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/casinoRoll/page.tsx",
                lineNumber: 274,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/casinoRoll/page.tsx",
        lineNumber: 177,
        columnNumber: 9
    }, this);
}
_s(Roll, "YpUutvLjuY0QGFlyj0oXWD4d2E4=");
_c = Roll;
var _c;
__turbopack_context__.k.register(_c, "Roll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_casinoRoll_ae6d807a._.js.map