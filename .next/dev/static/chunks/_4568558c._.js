(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/utils/supabase/alSupabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-client] (ecmascript)");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])(("TURBOPACK compile-time value", "https://obiquapxaofdgrftsysf.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iaXF1YXB4YW9mZGdyZnRzeXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMTk1NTIsImV4cCI6MjA4MzU5NTU1Mn0.qvqqjsnpQo_Ro4wK7cBqBabmWiof6DyD6-_rSan6uiY"));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/auth/AnimatedBg.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedBg",
    ()=>AnimatedBg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CIRCLES = [
    {
        size: 300,
        blur: 80,
        color: "hsla(334, 95%, 51%, 0.5)",
        delay: 0
    },
    {
        size: 200,
        blur: 60,
        color: "hsla(210, 90%, 60%, 0.4)",
        delay: 1200
    },
    {
        size: 400,
        blur: 100,
        color: "hsla(270, 80%, 65%, 0.35)",
        delay: 600
    },
    {
        size: 250,
        blur: 70,
        color: "hsl(325, 100%, 50%)",
        delay: 2000
    }
];
function AnimCicle({ size, blur, color, delay }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAnimatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const randomPos = ()=>({
            x: Math.floor(Math.random() * window.innerWidth),
            y: Math.floor(Math.random() * window.innerHeight)
        });
    const animationCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AnimCicle.useCallback[animationCircle]": ()=>{
            if (isAnimatingRef.current) return;
            isAnimatingRef.current = true;
            const el = ref.current;
            if (!el) return;
            const pos = randomPos();
            el.style.transition = "none";
            el.style.left = `${pos.x}px`;
            el.style.top = `${pos.y}px`;
            el.style.transform = "translate(-50%, -50%) scale(0)";
            el.style.opacity = "0";
            requestAnimationFrame({
                "AnimCicle.useCallback[animationCircle]": ()=>{
                    requestAnimationFrame({
                        "AnimCicle.useCallback[animationCircle]": ()=>{
                            // Появляемся
                            el.style.transition = "transform 3s linear, opacity 0.8s ease";
                            el.style.transform = "translate(-50%, -50%) scale(3)";
                            el.style.opacity = "1";
                            //исчезаем
                            setTimeout({
                                "AnimCicle.useCallback[animationCircle]": ()=>{
                                    el.style.transition = "opacity 1s ease";
                                    el.style.opacity = "0";
                                    // Запускаем следующий круг
                                    setTimeout({
                                        "AnimCicle.useCallback[animationCircle]": ()=>{
                                            isAnimatingRef.current = false;
                                            animationCircle();
                                        }
                                    }["AnimCicle.useCallback[animationCircle]"], 1000);
                                }
                            }["AnimCicle.useCallback[animationCircle]"], 3000);
                        }
                    }["AnimCicle.useCallback[animationCircle]"]);
                }
            }["AnimCicle.useCallback[animationCircle]"]);
        }
    }["AnimCicle.useCallback[animationCircle]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimCicle.useEffect": ()=>{
            const t = setTimeout(animationCircle, delay);
            return ({
                "AnimCicle.useEffect": ()=>clearTimeout(t)
            })["AnimCicle.useEffect"];
        }
    }["AnimCicle.useEffect"], [
        animationCircle,
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "overflow-visible",
            style: {
                position: "absolute",
                width: `${size}px`,
                height: `${size}px`,
                filter: `blur(${blur}px)`,
                background: `radial-gradient(circle at 50% 50%, ${color}, transparent 100%)`,
                transform: "translate(-50%, -50%) scale(0)"
            }
        }, void 0, false, {
            fileName: "[project]/app/auth/AnimatedBg.tsx",
            lineNumber: 68,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(AnimCicle, "srU/xCh8HTXdUbhp/+XFFxfHLWs=");
_c = AnimCicle;
function AnimatedBg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: CIRCLES.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimCicle, {
                ...c
            }, i, false, {
                fileName: "[project]/app/auth/AnimatedBg.tsx",
                lineNumber: 89,
                columnNumber: 17
            }, this))
    }, void 0, false);
}
_c1 = AnimatedBg;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimCicle");
__turbopack_context__.k.register(_c1, "AnimatedBg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/auth/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$auth$2f$AnimatedBg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/auth/AnimatedBg.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
const dynamic = "force-dynamic";
;
;
;
;
;
function AuthPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messageEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [authFlow, setAuthFlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [credetial, setCredetial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}) // пароль логин
    ;
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [textBot, setTextBot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isShowBtns, setIsShowBtns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inputDisabled, setInputDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const typingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const addBotMessage = (text, masked = false)=>{
        setMessages((prev)=>[
                ...prev,
                {
                    who: "bot",
                    text,
                    time: new Date(),
                    masked
                }
            ]);
    };
    const addUserMessage = (text, masked = false)=>{
        setMessages((prev)=>[
                ...prev,
                {
                    who: 'me',
                    text: masked ? "•".repeat(text.length) : text,
                    time: new Date()
                }
            ]);
    };
    // печатает текст
    const typePretty = (s, onDone)=>{
        if (typingRef.current) clearInterval(typingRef.current);
        setIsTyping(true);
        setTextBot("");
        let index = 0;
        typingRef.current = setInterval(()=>{
            setTextBot(s.slice(0, index + 1));
            index++;
            if (index === s.length) {
                clearInterval(typingRef.current);
                setIsTyping(false);
                onDone?.();
            }
        }, 70);
    };
    // Бот пишет сообщение с задержкой (имитация печати)
    const botSay = (text, delay = 600)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                addBotMessage(text);
                resolve();
            }, delay);
        });
    };
    // Запуск flow по шагам
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthPage.useEffect": ()=>{
            if (step === 1) {
                typePretty("Добро пожаловать!", {
                    "AuthPage.useEffect": ()=>setStep(2)
                }["AuthPage.useEffect"]);
            }
            if (step === 2) {
                typePretty("Что желаешь?", {
                    "AuthPage.useEffect": ()=>{
                        setIsShowBtns(true);
                        setInputDisabled(false);
                    }
                }["AuthPage.useEffect"]);
            }
        }
    }["AuthPage.useEffect"], [
        step
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthPage.useEffect": ()=>{
            if (!authFlow) return;
            setIsShowBtns(false);
            setInputDisabled(false);
            if (authFlow === "tg") {
                return;
            }
            const label = authFlow === "login" ? "Войти" : "Зарегистрироваться";
            addUserMessage(label);
            setTimeout({
                "AuthPage.useEffect": ()=>{
                    addBotMessage("Введите логин 👤");
                    setStep(3);
                    inputRef.current?.focus();
                }
            }["AuthPage.useEffect"], 400);
        }
    }["AuthPage.useEffect"], [
        authFlow
    ]);
    const handleSubmit = async (login, pass, flow)=>{
        setInputDisabled(true);
        setIsLoading(true);
        typePretty("Проверяю...");
        const email = `${login}@example.com`;
        const { error } = flow === "login" ? await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email,
            password: pass
        }) : await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email,
            password: pass
        });
        setIsLoading(false);
        if (error) {
            const msg = flow === "login" ? "Неправильный логин или пароль 😕" : "Ошибка регистрации. Попробуйте еще раз 😕";
            typePretty("Ошибка");
            await botSay(msg, 600);
            await botSay("Попробуйте еще раз", 1000);
            setCredetial({});
            setStep(3);
            setInputDisabled(false);
            inputRef.current?.focus();
            return;
        }
        await typePretty(flow === "login" ? "Добро пожаловать! 🎉" : "Регистрация прошла успешно! 🎉");
        await botSay(flow === "login" ? "Входим..." : "Регистрация прошла успешно! Входим...", 600);
        setTimeout(()=>{
            router.push("/");
        }, 1000);
    };
    const enterBtn = async ()=>{
        if (isTyping || isLoading || inputDisabled) return;
        const input = inputRef.current?.value.trim();
        if (!input) return;
        inputRef.current.value = "";
        if (step === 3) {
            addUserMessage(input);
            setCredetial({
                login: input
            });
            setStep(4);
            setTimeout(()=>{
                addBotMessage("Теперь введи пароль 🔒🔑");
                inputRef.current?.focus();
            }, 400);
        } else if (step === 4) {
            addUserMessage(input, true);
            const login = credetial.login;
            setCredetial((prev)=>({
                    ...prev,
                    pass: input
                }));
            setStep(5);
            await handleSubmit(login, input, authFlow);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            enterBtn();
        }
    };
    const btns = [
        {
            text: "Войти",
            onClick: ()=>setAuthFlow("login")
        },
        {
            text: "Зарегистрироваться",
            onClick: ()=>setAuthFlow("reg")
        },
        {
            text: "Telegram",
            onClick: ()=>setAuthFlow("tg")
        }
    ];
    const getPlaceholder = ()=>{
        if (step === 3) {
            return "Введите логин";
        } else if (step === 4) {
            return "Введите пароль";
        }
        return "...";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center h-full relative bg-black",
        style: {
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$auth$2f$AnimatedBg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBg"], {}, void 0, false, {
                fileName: "[project]/app/auth/page.tsx",
                lineNumber: 196,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `flex flex-col justify-center relative
                    w-120 h-120 rounded-md border border-white/10
                    bg-black/50 backdrop-blur-2xl
                `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative backdrop-blur-2xl w-full h-full flex flex-col rounded-md`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flexC text-center border-b border-white/10 h-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: textBot
                                    }, void 0, false, {
                                        fileName: "[project]/app/auth/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 25
                                    }, this),
                                    (isTyping || isLoading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex gap-[3px] items-center",
                                        children: [
                                            0,
                                            1,
                                            2
                                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 h-1 rounded-full bg-white/60 animate-bounce",
                                                style: {
                                                    animationDelay: `${i * 0.15}s`
                                                }
                                            }, i, false, {
                                                fileName: "[project]/app/auth/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/auth/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/auth/page.tsx",
                                lineNumber: 208,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex flex-col py-2 px-3 gap-2 flex-1 overflow-y-auto`,
                                children: [
                                    messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `bg-white/20 rounded-2xl px-3 py-2 max-w-[70%] shadow-lg relative
                                    ${msg.who === "me" ? "self-end rounded-br-sm" : "self-start rounded-bl-sm"}
                                `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm pr-8 break-all",
                                                    children: msg.text
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute right-2 bottom-1 text-[9px] text-white/40",
                                                    children: msg.time?.toTimeString().slice(0, 5)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/auth/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 29
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messageEndRef
                                    }, void 0, false, {
                                        fileName: "[project]/app/auth/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/auth/page.tsx",
                                lineNumber: 224,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute bottom-10 w-full flex text-[15px] gap-2 transition-all duration-300
                            ${isShowBtns ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"}
                        `,
                                children: btns.map((btn, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn-type",
                                        onClick: btn.onClick,
                                        children: btn.text
                                    }, i, false, {
                                        fileName: "[project]/app/auth/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/auth/page.tsx",
                                lineNumber: 241,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/auth/page.tsx",
                        lineNumber: 204,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: " w-full h-10 flex justify-center ",
                        onClick: (e)=>{
                            e.preventDefault();
                            enterBtn();
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                type: step === 4 ? "password" : "text",
                                className: `
                            border border-white/20 rounded-l-md w-full text-sm px-3
                            bg-white/5 text-white placeholder-white/30 outline-none
                            transition-opacity duration-200
                            ${inputDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100"}
                        `,
                                placeholder: getPlaceholder(),
                                disabled: inputDisabled,
                                onKeyDown: handleKeyDown,
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/app/auth/page.tsx",
                                lineNumber: 264,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: inputDisabled || isLoading,
                                className: "bg-white/10 hover:bg-white/20 rounded-r-md w-10 flexC transition-colors disabled:opacity-40",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    enterBtn();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/auth/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 108
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/auth/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/auth/page.tsx",
                                lineNumber: 279,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/auth/page.tsx",
                        lineNumber: 259,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/auth/page.tsx",
                lineNumber: 198,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/auth/page.tsx",
        lineNumber: 192,
        columnNumber: 9
    }, this);
}
_s(AuthPage, "W1Bx1oBuhHWKken2lem7Gxo08mY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthPage;
var _c;
__turbopack_context__.k.register(_c, "AuthPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_4568558c._.js.map