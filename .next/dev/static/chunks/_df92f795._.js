(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/main.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// export const dynamic = "force-dynamic";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../things/hooks/useAuth'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../things/hooks/useMessages'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../things/utils/auth'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../things/hooks/useSwipe'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../things/hooks/checkMobile'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../things/utils/parseDate'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../modal/modalProfile'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../things/hooks/useCheckMsg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../createcard/components/ReadIndicator'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../createcard/components/Rating'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './components/contextMenu/messagePanel'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function MainPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, profile, loading: authLoading } = useAuth();
    const { inbox, sent, sendMessage: send, loading: messageLoading, refresh, deleteMessage } = useMessages(user?.id || null);
    const dialogs = useDialogs(inbox, sent, user?.id || "", profile?.public_id || "");
    const [activeDialogId, setActiveDialogId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDialog, setActiveDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { markAsRead } = useMessageRead() // индикатор прочтения
    ;
    const [openChat, setOpenChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = useCheckMobile();
    const [openProfile, setOpenProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // profile слева
    //открыл чат и записал
    const [activeChatUserId, setActiveChatUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openModalProfile, setOpenModalProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // state модалка профиля
    const styleToNotSwipe = {
        overscrollBehavior: 'contain',
        touchAction: 'pan-y'
    };
    // messagePanel
    const msgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeMenu = ()=>{
        setAction(null);
        setSelectTouched(null);
    } // закрытие меню
    ;
    const cancelTouch = ()=>{
        clearInterval(timer.current);
        setSelectTouched(null);
    } // отмена тача
    ;
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isChoose, setIsChoose] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false) // начало выбора
    ;
    const [choosenMsg, setChoosenMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]) // выбранные
    ;
    const [selectTouched, setSelectTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainPage.useEffect": ()=>{
            if (!activeDialogId) {
                setActiveDialog(null);
                return;
            }
            const found = dialogs.find({
                "MainPage.useEffect": (d)=>d.userId === activeDialogId
            }["MainPage.useEffect"]) || null;
            setActiveDialog(found);
        }
    }["MainPage.useEffect"], [
        dialogs,
        activeDialogId
    ]);
    // свайп для мобилки
    const chatSwipe = useSwipe({
        onSwipeRight: {
            "MainPage.useSwipe[chatSwipe]": ()=>{
                if (!isMobile) return;
                setOpenChat(false);
            }
        }["MainPage.useSwipe[chatSwipe]"]
    });
    // swipe close profile mobile
    const profileSwipe = useSwipe({
        onSwipeLeft: {
            "MainPage.useSwipe[profileSwipe]": ()=>{
                if (!isMobile) return;
                setOpenProfile(false);
            }
        }["MainPage.useSwipe[profileSwipe]"],
        onSwipeRight: {
            "MainPage.useSwipe[profileSwipe]": ()=>{
                if (!isMobile) return;
                setOpenProfile(true);
            }
        }["MainPage.useSwipe[profileSwipe]"]
    });
    // редирект если неавторизован
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainPage.useEffect": ()=>{
            if (authLoading) return;
            if (!user) {
                router.replace('/anonlove/auth');
            }
        }
    }["MainPage.useEffect"], [
        user,
        authLoading,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainPage.useEffect": ()=>{
            if (!isMobile) {
                setOpenChat(false);
            }
        }
    }["MainPage.useEffect"], [
        isMobile
    ]);
    const handleSignOut = async ()=>{
        await sighOut();
        router.push('/anonlove/auth');
    };
    const handleDeleteMessage = async (id)=>{
        try {
            if (!id) {
                console.warn("No message ID provided");
                return;
            }
            await deleteMessage(id);
            setAction(null);
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    };
    const handleDeleteManyMsg = async ()=>{
        try {
            await deleteMessage(choosenMsg);
            setChoosenMsg([]);
            setIsChoose(false);
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    };
    const [loadingText, setLoadingText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainPage.useEffect": ()=>{
            if (!authLoading) return;
            let index = 0;
            const word = 'ЗагрузОчка...';
            setLoadingText('');
            const interval = setInterval({
                "MainPage.useEffect.interval": ()=>{
                    setLoadingText({
                        "MainPage.useEffect.interval": (prev)=>{
                            if (index >= word.length) {
                                index = 0;
                                return '';
                            }
                            const next = prev + word[index];
                            index++;
                            return next;
                        }
                    }["MainPage.useEffect.interval"]);
                }
            }["MainPage.useEffect.interval"], 50);
            return ({
                "MainPage.useEffect": ()=>clearInterval(interval)
            })["MainPage.useEffect"];
        }
    }["MainPage.useEffect"], [
        authLoading
    ]);
    if (authLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black min-h-screen flex items-center justify-center text-white",
            children: loadingText
        }, void 0, false, {
            fileName: "[project]/app/main.tsx",
            lineNumber: 170,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative bg-black min-h-screen max-h-screen flex flex-col overflow-hidden ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative flex-1 text-white flex md:flex-row flex-col overflow-hidden",
                ...!openChat ? profileSwipe : {},
                onClick: ()=>{
                    if (openProfile) setOpenProfile(false);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 bg-[#12080b] 
                            overflow-y-auto
                            transition-transform duration-300 ease-out will-change-transform
                            md:static md:translate-x-0 md:w-1/2
                            ${isMobile && openChat ? "-translate-x-full" : "translate-x-0"}
                            ${isMobile ? "" : "border-r border-[#d91c558b]"}
                        `,
                        style: styleToNotSwipe,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full relative bg-white/10 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 h-8 w-15 flex justify-center items-center   hover:bg-white/20 transition-colors   ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setOpenProfile(true);
                                            },
                                            className: "w-8 h-8 rounded-full flex justify-center items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 32 32",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                        children: "Menu SVG Icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/main.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 116
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M4 8h24M4 16h24M4 24h24"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/main.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 144
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/main.tsx",
                                                lineNumber: 214,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/main.tsx",
                                            lineNumber: 211,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/main.tsx",
                                        lineNumber: 206,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-2 rounded-md w-full text-center flex justify-center items-center ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "medium",
                                            children: "Чаты"
                                        }, void 0, false, {
                                            fileName: "[project]/app/main.tsx",
                                            lineNumber: 221,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/main.tsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-1/2 translate-y-1/2 right-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedButton, {
                                            openModal: ()=>{
                                                router.push(`createcard?type=send`);
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 32 32",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M2 4h28v18H16l-8 7v-7H2Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/main.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 116
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/main.tsx",
                                                lineNumber: 233,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/main.tsx",
                                            lineNumber: 228,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/main.tsx",
                                        lineNumber: 224,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/main.tsx",
                                lineNumber: 204,
                                columnNumber: 21
                            }, this),
                            dialogs.map((dialog)=>{
                                const avatar = dialog.displayId.charAt(1).toUpperCase();
                                const title = dialog.displayId;
                                const timeSend = parseDate(dialog.lastMessage.created_at);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: " p-2 rounded-lg w-full",
                                    onClick: ()=>{
                                        setActiveDialogId(dialog.userId), setOpenChat(true), setActiveChatUserId(dialog.displayId);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex p-3 items-center relative gap-2  rounded-2xl transition-colors
                                    ${dialog.userId !== activeDialogId && !isMobile ? "bg-[#5b5b5ba2]" : "bg-[#949494a2]"}
                                    `,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex bg-red-500 w-8 h-8 items-center justify-center rounded-full text-lg font-bold",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    setOpenModalProfile(true);
                                                // setActiveDialogId(dialog.userId)
                                                },
                                                children: avatar
                                            }, void 0, false, {
                                                fileName: "[project]/app/main.tsx",
                                                lineNumber: 257,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/app/main.tsx",
                                                lineNumber: 268,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] flexC text-center text-gray-400 h-10   absolute bottom-1/2 translate-y-1/2  right-2 ",
                                                children: timeSend
                                            }, void 0, false, {
                                                fileName: "[project]/app/main.tsx",
                                                lineNumber: 273,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/main.tsx",
                                        lineNumber: 254,
                                        columnNumber: 33
                                    }, this)
                                }, dialog.userId, false, {
                                    fileName: "[project]/app/main.tsx",
                                    lineNumber: 245,
                                    columnNumber: 29
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/main.tsx",
                        lineNumber: 191,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ...isMobile ? chatSwipe : {},
                        className: `
                        absolute inset-0 bg-[#12080b]
                        overflow-y-auto
                        transition-transform duration-300 ease-in-out will-change-transform
                        md:static md:translate-x-0 md:w-1/2
                        ${openChat ? "translate-x-0" : "translate-x-full"}
                    `,
                        children: [
                            activeChatUserId && !isChoose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-0 w-full grid grid-cols-3 items-center justify-center z-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex justify-center items-center  bg-white/10 backdrop-blur-2xl m-2 w-15 h-8 text-center rounded-full z-10",
                                        onClick: ()=>setOpenChat(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "currentColor",
                                                d: "M16.88 2.88a1.25 1.25 0 0 0-1.77 0L6.7 11.29a.996.996 0 0 0 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77"
                                            }, void 0, false, {
                                                fileName: "[project]/app/main.tsx",
                                                lineNumber: 304,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/main.tsx",
                                            lineNumber: 303,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/main.tsx",
                                        lineNumber: 299,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flexC mx-auto bg-white/10 backdrop-blur-2xl rounded-full p-1 select-none",
                                        children: [
                                            activeChatUserId,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Rating, {
                                                value: activeDialog?.rating
                                            }, void 0, false, {
                                                fileName: "[project]/app/main.tsx",
                                                lineNumber: 310,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/main.tsx",
                                        lineNumber: 308,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex justify-center items-center justify-self-end bg-white/10 backdrop-blur-2xl m-2 w-15 h-8 text-center rounded-full z-10",
                                        onClick: ()=>{
                                            router.push(`createcard?type=send&to=${encodeURIComponent(activeChatUserId ?? '')}`);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 14 14",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M7.5.5h-5a1 1 0 0 0-1 1v9l-1 3l4-1h8a1 1 0 0 0 1-1v-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/main.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "m8.363 8.137l-3 .54l.5-3.04l4.73-4.71a.999.999 0 0 1 1.42 0l1.06 1.06a1.001 1.001 0 0 1 0 1.42z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/main.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/main.tsx",
                                                lineNumber: 322,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/main.tsx",
                                            lineNumber: 321,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/main.tsx",
                                        lineNumber: 314,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/main.tsx",
                                lineNumber: 298,
                                columnNumber: 25
                            }, this),
                            isChoose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-0 w-full flex items-start justify-between z-20 text-[15px] p-1      ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flexC prettyBtn ",
                                        onClick: ()=>{
                                            setIsChoose(false);
                                            setChoosenMsg([]);
                                        },
                                        children: "Назад"
                                    }, void 0, false, {
                                        fileName: "[project]/app/main.tsx",
                                        lineNumber: 335,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flexC prettyBtn",
                                        onClick: ()=>{
                                            handleDeleteManyMsg();
                                        },
                                        children: "Удалить"
                                    }, void 0, false, {
                                        fileName: "[project]/app/main.tsx",
                                        lineNumber: 344,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/main.tsx",
                                lineNumber: 332,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative p-2 space-y-2",
                                children: activeDialog?.messages.map((message, index)=>{
                                    const avatar = message.from_display_id.charAt(1).toUpperCase();
                                    const nameLabel = message.from_display_id;
                                    const bodyText = "тебе тут что то пришло, малышка";
                                    const isMine = message.from_user === user?.id;
                                    const date = parseDate(message.created_at);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex flex-col relative w-full transition hover:bg-white/10 select-none
                                        ${isMine ? "items-end" : "items-start"}
                                    `,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: msgRef,
                                            className: `relative flex flex-col items-center justify-center p-2 gap-2 w-1/2 rounded-2xl cursor-pointer transition-transform
                                            ${isMine ? "bg-[#ff00666d]" : "bg-white/50"}
                                            ${selectTouched === message.id && isMobile ? "scale-105" : ""}
                                            ${selectTouched === message.id && !isMobile ? "border-r" : ""}
                                        `,
                                            onClick: (e)=>{
                                                if (isChoose) {
                                                    setChoosenMsg((prev)=>{
                                                        if (prev.includes(message.id)) {
                                                            return prev.filter((id)=>id !== message.id);
                                                        } else {
                                                            return [
                                                                ...prev,
                                                                message.id
                                                            ];
                                                        }
                                                    });
                                                    return;
                                                } else {
                                                    if (!isMine && !message.is_checked) {
                                                        markAsRead(message.id, user?.id).then(()=>{
                                                            setActiveDialog((d)=>d && {
                                                                    ...d,
                                                                    messages: d.messages.map((m)=>m.id === message.id ? {
                                                                            ...m,
                                                                            is_checked: true
                                                                        } : m)
                                                                });
                                                        });
                                                    }
                                                    router.push(`createcard?isMine=${isMine}&id=${encodeURIComponent(message.id)}&type=recieve&to=${encodeURIComponent(message?.from_display_id ?? '')}`);
                                                }
                                            },
                                            onContextMenu: (e)=>{
                                                e.preventDefault();
                                                const target = e.currentTarget;
                                                const rect = target.getBoundingClientRect();
                                                setSelectTouched(message.id);
                                                setAction({
                                                    message,
                                                    rect,
                                                    type: 'desktop',
                                                    isMine
                                                });
                                            },
                                            onPointerDown: (e)=>{
                                                if (isChoose) return;
                                                const target = e.currentTarget;
                                                if (e.pointerType === 'touch') {
                                                    setSelectTouched(message.id);
                                                    timer.current = window.setTimeout(()=>{
                                                        const rect = target.getBoundingClientRect();
                                                        setAction({
                                                            message,
                                                            rect,
                                                            type: 'mobile',
                                                            isMine
                                                        });
                                                    }, 400);
                                                }
                                            },
                                            onPointerCancel: ()=>cancelTouch(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flexC gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "md:w-6 md:h-6 w-8 h-8   rounded-full bg-red-500   flex items-center justify-center   text-md font-bold shrink-0",
                                                            children: avatar
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/main.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold medium",
                                                                    children: nameLabel
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/main.tsx",
                                                                    lineNumber: 435,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "small line-clamp-2",
                                                                    children: ``
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/main.tsx",
                                                                    lineNumber: 438,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/main.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/main.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[9px] text-[#cdcdcd] ",
                                                    children: date
                                                }, void 0, false, {
                                                    fileName: "[project]/app/main.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReadIndicator, {
                                                    isRead: message.is_checked,
                                                    isMine: isMine
                                                }, void 0, false, {
                                                    fileName: "[project]/app/main.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute w-3 h-3 rounded-full border
                                            ${!isMine ? "-right-10" : "-left-10"}
                                            ${isChoose ? 'opacity-100 ' : 'opacity-0'}
                                            ${choosenMsg.map((msg)=>msg).includes(message.id) ? "bg-white" : ""}
                                            `
                                                }, void 0, false, {
                                                    fileName: "[project]/app/main.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/main.tsx",
                                            lineNumber: 371,
                                            columnNumber: 37
                                        }, this)
                                    }, message.id, false, {
                                        fileName: "[project]/app/main.tsx",
                                        lineNumber: 365,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/main.tsx",
                                lineNumber: 356,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/main.tsx",
                        lineNumber: 286,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...isMobile ? profileSwipe : {},
                className: `flex flex-1 flex-col items-center absolute bg-black/50 backdrop-blur-md transition-transform duration-150 ease-in-out will-change-transform
                    ${openProfile ? "translate-x-0" : "-translate-x-full "}
                    ${isMobile ? "inset-0" : "w-1/3 h-full"}
                    `,
                onClick: (e)=>{
                    e.stopPropagation();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/20 backdrop-blur-2xl w-full flexC p-2 rounded-b-2xl",
                        children: profile?.public_id
                    }, void 0, false, {
                        fileName: "[project]/app/main.tsx",
                        lineNumber: 488,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 bg-white/10 p-2 backdrop-blur-md w-full flexC rounded-t-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-red-500",
                            onClick: ()=>{
                                handleSignOut();
                            },
                            children: "Выйти"
                        }, void 0, false, {
                            fileName: "[project]/app/main.tsx",
                            lineNumber: 495,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/main.tsx",
                        lineNumber: 494,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute h-40 top-1/2 -translate-y-1/2 right-0 bg-white/20 backdrop-blur-2xl flexC p-1    animate-pulse rounded-l-2xl   ",
                        onClick: ()=>setOpenProfile(false),
                        children: `>`
                    }, void 0, false, {
                        fileName: "[project]/app/main.tsx",
                        lineNumber: 505,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 478,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalProfile, {
                isOpen: openModalProfile,
                onClose: ()=>{
                    setOpenModalProfile(false);
                },
                fromUser: user?.id,
                toUser: activeDialog || undefined,
                refresh: ()=>refresh()
            }, void 0, false, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 517,
                columnNumber: 13
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageActionRoot, {
                action: action,
                onClose: ()=>{
                    closeMenu();
                    setSelectTouched(null);
                },
                onDelete: handleDeleteMessage,
                isChose: setIsChoose,
                onChose: (id)=>setChoosenMsg((prev)=>[
                            ...prev,
                            id
                        ])
            }, void 0, false, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 527,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/main.tsx",
        lineNumber: 178,
        columnNumber: 9
    }, this);
}
_s(MainPage, "zVKZxHKx69zVjwrWHAalg6CG/KU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        useAuth,
        useMessages,
        useDialogs,
        useMessageRead,
        useCheckMobile,
        useSwipe,
        useSwipe
    ];
});
_c = MainPage;
function AnimatedButton({ children, openModal }) {
    _s1();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isHovering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const sizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        w: 0,
        h: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedButton.useEffect": ()=>{
            const canvas = canvasRef.current;
            const button = buttonRef.current;
            if (!canvas || !button) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const updateSize = {
                "AnimatedButton.useEffect.updateSize": ()=>{
                    const rect = canvas.parentElement.getBoundingClientRect();
                    const dpr = window.devicePixelRatio || 1;
                    sizeRef.current.w = rect.width;
                    sizeRef.current.h = rect.height;
                    canvas.width = rect.width * dpr;
                    canvas.height = rect.height * dpr;
                    canvas.style.width = rect.width + "px";
                    canvas.style.height = rect.height + "px";
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                }
            }["AnimatedButton.useEffect.updateSize"];
            updateSize();
            function getBtnCenter() {
                const btn = button.getBoundingClientRect();
                const cvs = canvas.getBoundingClientRect();
                return {
                    x: cvs.width / 2,
                    y: cvs.height / 2
                };
            }
            const particles = [];
            const speed = 50;
            let lastTime = performance.now();
            function animate(currentTime) {
                if (!ctx || !canvas) return;
                const deltaTime = (currentTime - lastTime) / 1000;
                lastTime = currentTime;
                const { w, h } = sizeRef.current;
                ctx.clearRect(0, 0, w, h);
                if (Math.random() < 0.06) {
                    const angle = Math.random() * Math.PI * 2;
                    particles.push({
                        x: Math.random() * w,
                        y: Math.random() * h,
                        radius: 1,
                        alpha: 1,
                        life: 1,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed
                    });
                }
                const target = getBtnCenter();
                for(let i = particles.length - 1; i >= 0; i--){
                    const p = particles[i];
                    p.life -= deltaTime * 0.3;
                    p.alpha = p.life;
                    if (isHovering.current) {
                        const dx = target.x - p.x;
                        const dy = target.y - p.y;
                        const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
                        const force = Math.max(0, 1 - dist / 700) * 400;
                        p.vx += dx / dist * force * deltaTime;
                        p.vy += dy / dist * force * deltaTime;
                    }
                    // max speed
                    const speed = Math.hypot(p.vx, p.vy);
                    const maxSpeed = 160;
                    if (speed > maxSpeed) {
                        p.vx = p.vx / speed * maxSpeed;
                        p.vy = p.vy / speed * maxSpeed;
                    }
                    p.x += p.vx * deltaTime;
                    p.y += p.vy * deltaTime;
                    if (p.alpha <= 0) {
                        particles.splice(i, 1);
                        continue;
                    }
                    ctx.globalAlpha = p.alpha;
                    ctx.shadowBlur = 1;
                    ctx.shadowColor = "white";
                    ctx.fillStyle = 'white';
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.globalAlpha = 1;
                animationRef.current = requestAnimationFrame(animate);
            }
            animationRef.current = requestAnimationFrame(animate);
            window.addEventListener('resize', updateSize);
            return ({
                "AnimatedButton.useEffect": ()=>{
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                    window.removeEventListener('resize', updateSize);
                }
            })["AnimatedButton.useEffect"];
        }
    }["AnimatedButton.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex justify-center items-center h-full w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute w-full h-full pointer-events-none z-1"
            }, void 0, false, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 691,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                onClick: ()=>openModal(),
                onMouseEnter: ()=>isHovering.current = true,
                onMouseLeave: ()=>isHovering.current = false,
                className: "relative flex items-center justify-center p-2 h-8 w-15 bg-white/10 rounded-full hover:bg-white/40 transition-colors z-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 696,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/main.tsx",
        lineNumber: 690,
        columnNumber: 9
    }, this);
}
_s1(AnimatedButton, "1TcZ0lI20Me3TK4Zz7/zjkLn3SI=");
_c1 = AnimatedButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "MainPage");
__turbopack_context__.k.register(_c1, "AnimatedButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_df92f795._.js.map