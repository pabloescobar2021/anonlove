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
"[project]/app/anonlove/things/utils/messages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentMessage",
    ()=>getCurrentMessage,
    "getInboxMessages",
    ()=>getInboxMessages,
    "getSentMessages",
    ()=>getSentMessages,
    "sendMessage",
    ()=>sendMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-client] (ecmascript)");
;
async function getInboxMessages(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages_safe").select(`
            *
            `).eq("to_user", userId).order("created_at", {
        ascending: true
    });
    if (error) throw error;
    const messages = (data || []).map((msg)=>{
        const anonSetting = msg.user_anonymous_settings?.[0]?.is_anon;
        return {
            ...msg,
            displayId: anonSetting || msg.is_anon ? "Anon" : msg.from_public_id,
            username: anonSetting || msg.is_anon ? "Anon" : msg.from_username
        };
    });
    return messages;
}
async function getCurrentMessage(messageId, userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages_safe").select("*").eq("id", messageId).eq("to_user", userId).single();
    if (error) throw error;
    return data || [];
}
async function getSentMessages(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('messages_safe').select(`
            *`).eq("from_user", userId).order("created_at", {
        ascending: true
    });
    if (error) throw error;
    return data || [];
}
async function sendMessage({ fromUserId, toUserId, toPublicId, body, isAnon }) {
    let receiverId = toUserId;
    if (!receiverId) {
        if (!toPublicId) throw new Error("Не указан пользователь, малыш");
        const { data: receiver, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select("id_user").eq("public_id", toPublicId).single();
        if (userError || !receiver) {
            throw new Error("Пользователь не найден, кись");
        }
        receiverId = receiver.id_user;
    }
    const { error: settingError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("user_anonymous_settings").upsert([
        {
            from_user_id: fromUserId,
            to_user_id: receiverId,
            is_anon: isAnon
        }
    ], {
        onConflict: 'from_user_id,to_user_id'
    });
    if (settingError) throw settingError;
    const { error: messageError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages").insert({
        from_user: fromUserId,
        to_user: receiverId,
        body
    });
    if (messageError) throw messageError;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonlove/things/hooks/useMessages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrentMessage",
    ()=>useCurrentMessage,
    "useDialogs",
    ()=>useDialogs,
    "useMessages",
    ()=>useMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/messages.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
function useMessages(userId) {
    _s();
    const [inbox, setInbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const loadMessage = async ()=>{
        if (!userId) return;
        try {
            setLoading(true);
            const [inboxData, sentData] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInboxMessages"])(userId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSentMessages"])(userId)
            ]);
            setInbox(inboxData);
            setSent(sentData);
        } catch (error) {
            console.error("Error loading messages:", error);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMessages.useEffect": ()=>{
            loadMessage();
        }
    }["useMessages.useEffect"], [
        userId
    ]);
    const send = async (to, body, isAnon)=>{
        if (!userId) throw new Error("User not logged in");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendMessage"])({
            fromUserId: userId,
            toUserId: to.userId,
            toPublicId: to.publicId,
            body,
            isAnon
        });
        await loadMessage();
    };
    return {
        inbox,
        sent,
        loading,
        sendMessage: send,
        refresh: loadMessage
    };
}
_s(useMessages, "95c/dDNWoED5e3oy85imaxz0iCs=");
function useCurrentMessage(userId, messageId) {
    _s1();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCurrentMessage.useEffect": ()=>{
            if (!userId || !messageId) return;
            const loadMessage = {
                "useCurrentMessage.useEffect.loadMessage": async ()=>{
                    setLoading(true);
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentMessage"])(messageId, userId);
                        setMessage(data);
                    } catch (error) {
                        console.error("Error loading messages:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useCurrentMessage.useEffect.loadMessage"];
            loadMessage();
        }
    }["useCurrentMessage.useEffect"], [
        userId,
        messageId
    ]);
    return {
        message,
        loading
    };
}
_s1(useCurrentMessage, "vZnQ1Di/DM3TFjT6KwzC4MKXsAU=");
function useDialogs(inboxMessages, sentMessages, myUserId) {
    _s2();
    const dialogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDialogs.useMemo[dialogs]": ()=>{
            const map = new Map();
            const allMessages = [
                ...inboxMessages,
                ...sentMessages
            ];
            for (const msg of allMessages){
                const dialogUserId = msg.from_user === myUserId ? msg.to_user : msg.from_user;
                let displayId = '';
                if (msg.from_display_id === 'A') {
                    displayId = 'Anon';
                } else {
                    displayId = msg.from_display_id;
                }
                if (!map.has(dialogUserId)) {
                    map.set(dialogUserId, {
                        userId: dialogUserId,
                        displayId: displayId,
                        lastMessage: msg,
                        messages: [
                            msg
                        ],
                        count: 1
                    });
                } else {
                    const dialog = map.get(dialogUserId);
                    dialog.messages.push(msg);
                    dialog.count++;
                    if (new Date(msg.created_at) > new Date(dialog.lastMessage.created_at)) {
                        dialog.lastMessage = msg;
                    }
                }
            }
            return Array.from(map.values()).sort({
                "useDialogs.useMemo[dialogs]": (a, b)=>new Date(b.lastMessage.created_at).getTime() - new Date(a.lastMessage.created_at).getTime()
            }["useDialogs.useMemo[dialogs]"]);
        }
    }["useDialogs.useMemo[dialogs]"], [
        inboxMessages,
        sentMessages,
        myUserId
    ]);
    return dialogs;
}
_s2(useDialogs, "1tZg0DN4CHn/6dkupkpP2D731a4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonlove/createcard/useRandColor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRandColor",
    ()=>useRandColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const lerp = (a, b, t)=>{
    return a + (b - a) * t;
};
const smoothStep = (t)=>{
    return t * t * (3 - 2 * t);
};
const mixColor = (from, to, t)=>{
    const k = smoothStep(t);
    return {
        r: lerp(from.r, to.r, k),
        g: lerp(from.g, to.g, k),
        b: lerp(from.b, to.b, k),
        a: lerp(from.a, to.a, k)
    };
};
const randomColor = ()=>{
    return {
        r: Math.floor(Math.random() * 256),
        g: 0,
        b: 0,
        a: 0.1
    };
};
function useRandColor() {
    _s();
    const [bg, setBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        r: 0,
        g: 0,
        b: 0,
        a: 0.1
    });
    const colorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(bg);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRandColor.useEffect": ()=>{
            let start = null;
            let from = colorRef.current;
            let to = randomColor();
            const duration = 3000;
            const animate = {
                "useRandColor.useEffect.animate": (time)=>{
                    if (!start) start = time;
                    const t = Math.min((time - start) / duration, 1);
                    const next = mixColor(from, to, t);
                    colorRef.current = next;
                    setBg(next);
                    if (t < 1) {
                        frameRef.current = requestAnimationFrame(animate);
                    } else {
                        from = to;
                        to = randomColor();
                        start = null;
                        frameRef.current = requestAnimationFrame(animate);
                    }
                }
            }["useRandColor.useEffect.animate"];
            frameRef.current = requestAnimationFrame(animate);
            return ({
                "useRandColor.useEffect": ()=>{
                    if (frameRef.current) cancelAnimationFrame(frameRef.current);
                }
            })["useRandColor.useEffect"];
        }
    }["useRandColor.useEffect"], []);
    return {
        bg
    };
}
_s(useRandColor, "5Q/VeYoiyR7CBcI4mPa1gfg/1fI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonlove/createcard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateCardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/useMessages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$useRandColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/createcard/useRandColor.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CreateCardPage({ initialData }) {
    _s();
    const { user, profile, loading: authLoading } = useAuth();
    const { inbox, sent, sendMessage: send, loading: messageLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])(user?.id || null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.items || []);
    const fieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [rightPanelOpen, setRightPanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const idRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const anonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isAnon, setIsAnon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const createText = ()=>{
        setItems((prev)=>[
                ...prev,
                {
                    id: prev.length,
                    type: "text",
                    content: `new text ${prev.length + 1}`,
                    x: 0,
                    y: 0 + prev.length * 20,
                    w: 100,
                    h: 50,
                    fontSize: 16,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0,
                    isEditing: 'none'
                }
            ]);
    };
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        id: null,
        offsetX: 0,
        offsetY: 0,
        w: 0,
        h: 0
    });
    // drag and drop
    const startDrag = (e, item)=>{
        const rect = fieldRef.current.getBoundingClientRect();
        dragRef.current = {
            id: item.id,
            offsetX: e.clientX - rect.left - item.x,
            offsetY: e.clientY - rect.top - item.y,
            w: item.w,
            h: item.h
        };
        window.addEventListener("mousemove", onDragMove);
        window.addEventListener("mouseup", stopDrag);
    };
    const onDragMove = (e)=>{
        if (resizeRef.current.id !== null) return;
        const rect = fieldRef.current.getBoundingClientRect();
        const drag = dragRef.current;
        if (drag.id === null) return;
        let x = e.clientX - rect.left - drag.offsetX;
        let y = e.clientY - rect.top - drag.offsetY;
        x = Math.max(0, Math.min(x, rect.width - drag.w)); // -50 чтобы элемент не ушел полностью
        y = Math.max(0, Math.min(y, rect.height - drag.h));
        setItems((prev)=>prev.map((it)=>it.id === drag.id ? {
                    ...it,
                    x,
                    y
                } : it));
    };
    const stopDrag = ()=>{
        dragRef.current.id = null;
        window.removeEventListener("mousemove", onDragMove);
        window.removeEventListener("mouseup", stopDrag);
    };
    const resizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        id: null,
        startX: 0,
        startY: 0,
        startW: 0,
        startH: 0,
        fontSize: 16,
        direction: "horizontal"
    });
    const startResize = (e, item, direction)=>{
        e.stopPropagation();
        resizeRef.current = {
            id: item.id,
            startX: e.clientX,
            startY: e.clientY,
            startW: item.w,
            startH: item.h,
            fontSize: item.fontSize,
            direction: direction
        };
        window.addEventListener("mousemove", onResizeMove);
        window.addEventListener("mouseup", stopResize);
    };
    const onResizeMove = (e)=>{
        const r = resizeRef.current;
        if (r.id === null) return;
        const dx = e.clientX - r.startX;
        const dy = e.clientY - r.startY;
        let w = r.startW;
        let h = r.startH;
        let fontSize = r.fontSize;
        if (r.direction === "horizontal") {
            w = Math.max(50, r.startW + dx);
        }
        if (r.direction === "vertical") {
            h = Math.max(30, r.startH + dy);
        }
        if (r.direction === "diagonal") {
            w = Math.max(50, r.startW + dx);
            h = Math.max(30, r.startH + dy);
            fontSize = Math.max(2, r.fontSize + (dx + dy) / 10);
        }
        console.log("resize direction:", r.direction, "w:", w, "h:", h, "fontSize:", fontSize);
        setItems((prev)=>prev.map((it)=>it.id === r.id ? {
                    ...it,
                    w,
                    h,
                    fontSize
                } : it));
    };
    const stopResize = ()=>{
        resizeRef.current.id = null;
        window.removeEventListener("mousemove", onResizeMove);
        window.removeEventListener("mouseup", stopResize);
    };
    // рандомный фон
    const { bg } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$useRandColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRandColor"])();
    const bgStyle = `rgba(${Math.floor(bg.r)}, ${Math.floor(bg.g)}, ${Math.floor(bg.b)}, ${bg.a})`;
    const handleSendMessage = async ()=>{
        const idInput = idRef.current?.value || "";
        const anonCheckbox = anonRef.current?.value || "";
        if (!idInput) {
            alert('Введи ID, сладкий!');
            return;
        }
        try {
            if (isReply) {
                const sendMessage = replyToUserId?.isAnon ? {
                    userId: replyToUserId?.id
                } : {
                    publicId: replyToUserId?.id
                };
                await send(sendMessage, text, isAnon);
            } else {
                await send({
                    publicId: idInput
                }, text, isAnon);
            }
            idRef.current.value = "";
            setRightPanelOpen(false);
        } catch (error) {
            console.log(error.message || 'Error sending message');
        }
    };
    const saveField = async ()=>{
        const messageData = {
            items
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex flex-col justify-center items-center h-full`,
        style: {
            backgroundColor: bgStyle
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative border w-1/2 h-1/2 rounded-md bg-white overflow-hidden z-10",
                ref: fieldRef,
                onMouseDown: (e)=>{
                    if (e.target !== e.currentTarget) return;
                    setItems((prev)=>prev.map((it)=>({
                                ...it,
                                isSelected: false,
                                isEditing: 'none'
                            })));
                },
                children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex text-black select-none border relative",
                        style: {
                            position: "absolute",
                            left: item.x,
                            top: item.y,
                            width: item.w,
                            height: item.h,
                            fontSize: item.fontSize,
                            cursor: item.isSelected ? "move" : "pointer"
                        },
                        onDoubleClick: ()=>{
                            setItems((prev)=>prev.map((it)=>it.id === item.id ? {
                                        ...it,
                                        isEditing: "text"
                                    } : it));
                        },
                        onMouseDown: (e)=>{
                            startDrag(e, item);
                            setItems((prev)=>prev.map((it)=>({
                                        ...it,
                                        isSelected: it.id === item.id
                                    })));
                        },
                        children: item.isEditing === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            autoFocus: true,
                            value: item.content,
                            onChange: (e)=>{
                                setItems((prev)=>prev.map((it)=>it.id === item.id ? {
                                            ...it,
                                            content: e.target.value
                                        } : it));
                            },
                            onBlur: ()=>{
                                setItems((prev)=>prev.map((it)=>it.id === item.id ? {
                                            ...it,
                                            isEditing: 'none'
                                        } : it));
                            },
                            onKeyDown: (e)=>{
                                if (e.key === "Enter") e.currentTarget.blur();
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/page.tsx",
                            lineNumber: 265,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative w-full h-full text-wrap wrap-break-word
                                            ${item.isSelected ? " " : "overflow-hidden"}`,
                            children: [
                                item.content,
                                item.isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseDown: (e)=>{
                                                e.stopPropagation();
                                                startResize(e, item, "horizontal");
                                            },
                                            className: "absolute -right-2.5 bottom-1/2 translate-y-1/2 w-3 h-3 bg-white    border cursor-w-resize"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/createcard/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseDown: (e)=>{
                                                e.stopPropagation();
                                                startResize(e, item, "vertical");
                                            },
                                            className: "absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white    border cursor-s-resize"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/createcard/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseDown: (e)=>{
                                                e.stopPropagation();
                                                startResize(e, item, "diagonal");
                                            },
                                            className: "absolute -bottom-2.5 right-[-10px]  w-3 h-3 bg-white    border cursor-se-resize"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/createcard/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/anonlove/createcard/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/anonlove/createcard/page.tsx",
                            lineNumber: 287,
                            columnNumber: 29
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/app/anonlove/createcard/page.tsx",
                        lineNumber: 242,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/page.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex p-2 mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "p-2 border rounded-2xl",
                    onClick: ()=>createText(),
                    children: "Text"
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/page.tsx",
                    lineNumber: 331,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/page.tsx",
                lineNumber: 329,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 inset-y-0 flex justify-center items-center    w-7 rounded-r-full bg-white/10 hover:bg-white/20 transition-cursor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.back(),
                    className: "w-full h-full",
                    children: `<`
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/page.tsx",
                    lineNumber: 345,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/page.tsx",
                lineNumber: 341,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 inset-y-0 flex justify-center items-center   w-7 rounded-l-full bg-white/10 hover:bg-white/20 transition-cursor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setRightPanelOpen(true);
                        },
                        className: "w-full h-full",
                        children: `...`
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/page.tsx",
                        lineNumber: 357,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `fixed inset-0 z-30 bg-black/50 transition-all duration-300
                                ${rightPanelOpen ? "backdrop-blur-lg translate-x-0" : "backdrop-blur-none translate-x-full"}
                            `,
                        onMouseDown: (e)=>setRightPanelOpen(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-0 inset-y-0 flex justify-center items-center w-[400px] bg-black/90 z-20",
                            onMouseDown: (e)=>{
                                e.stopPropagation();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "relative flex flex-col w-full justify-center items-center",
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: idRef,
                                        type: "text",
                                        placeholder: "ID кисы",
                                        className: "p-2 mb-4 w-1/2 bg-white/10 border rounded-md text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/createcard/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex w-full justify-center items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                ref: anonRef,
                                                checked: isAnon,
                                                className: "bg-white/10 border rounded-md text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonlove/createcard/page.tsx",
                                                lineNumber: 388,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px]",
                                                children: `Будешь анонимен? (потом можно изменить)`
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonlove/createcard/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/anonlove/createcard/page.tsx",
                                        lineNumber: 387,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "p-2 mt-4 border rounded-2xl hover:bg-white/20 transition-all duration-200",
                                        children: "Отправить"
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/createcard/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "absolute left-0 w-10 h-20 bg-white/20 rounded-r-full top-1/2 -translate-y-1/2   hover:bg-white/40 transition-all duration-200   ",
                                        onClick: ()=>setRightPanelOpen(false),
                                        children: `>`
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/createcard/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonlove/createcard/page.tsx",
                                lineNumber: 375,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/page.tsx",
                            lineNumber: 369,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/page.tsx",
                        lineNumber: 363,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonlove/createcard/page.tsx",
                lineNumber: 353,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/anonlove/createcard/page.tsx",
        lineNumber: 226,
        columnNumber: 9
    }, this);
}
_s(CreateCardPage, "qmBoTAqF4Rv00V+MWoDYkHr+bqc=", true, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$useRandColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRandColor"]
    ];
});
_c = CreateCardPage;
var _c;
__turbopack_context__.k.register(_c, "CreateCardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_55e62047._.js.map