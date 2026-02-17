(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/createcard/useRandColor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/things/utils/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentUser",
    ()=>getCurrentUser,
    "getUserProfile",
    ()=>getUserProfile,
    "onAuthStateChange",
    ()=>onAuthStateChange,
    "sighOut",
    ()=>sighOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-client] (ecmascript)");
;
async function getCurrentUser() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
    if (error) return;
    return data.user;
}
async function getUserProfile(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select("public_id, username, telegram_id, telegram_username").eq("id_user", userId).single();
    if (error) return null;
    return data;
}
async function sighOut() {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
    if (error) throw error;
}
function onAuthStateChange(callback) {
    const { data: listener } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange((event, session)=>{
        callback(session?.user || null);
    });
    return listener.subscription;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/things/hooks/useAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/utils/auth.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useAuth() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const refreshProfile = async ()=>{
        if (!user) return;
        const profileData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserProfile"])(user.id);
        setProfile(profileData);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            const loadUser = {
                "useAuth.useEffect.loadUser": async ()=>{
                    try {
                        const userData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                        setUser(userData);
                        if (userData) {
                            const profileData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserProfile"])(userData.id);
                            setProfile(profileData);
                        }
                    } catch (error) {
                        console.error("Error loading user:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useAuth.useEffect.loadUser"];
            loadUser();
            const subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChange"])({
                "useAuth.useEffect.subscription": async (newUser)=>{
                    setUser(newUser);
                    if (newUser) {
                        const profileData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserProfile"])(newUser.id);
                        setProfile(profileData);
                    } else {
                        setProfile(null);
                    }
                }
            }["useAuth.useEffect.subscription"]);
            return ({
                "useAuth.useEffect": ()=>{
                    subscription.unsubscribe();
                }
            })["useAuth.useEffect"];
        }
    }["useAuth.useEffect"], []);
    return {
        user,
        profile,
        loading,
        refreshProfile
    };
}
_s(useAuth, "DYSpA4ZauWKW8e4CNkO4ayA+RbM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/things/utils/messages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
            `).eq("to_user", userId).eq("is_visible_for_receiver", true).order("created_at", {
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
async function getCurrentMessage(messageId, userId, isMine) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages_safe").select("*").eq("id", messageId).eq(isMine === "true" ? "from_user" : "to_user", userId).maybeSingle();
    console.log('Query result messages.ts:', {
        data,
        error
    });
    if (error) throw error;
    return data || [];
}
async function getSentMessages(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('messages_safe').select(`
            *`).eq("from_user", userId).eq("is_visible_to_sender", true).order("created_at", {
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
    const { data: toggle, error: toggleError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc("toggle_anonymous", {
        p_from: fromUserId,
        p_to: receiverId,
        p_is_anon: isAnon
    });
    if (toggleError) throw toggleError;
    const { error: messageError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages").insert({
        from_user: fromUserId,
        to_user: receiverId,
        body
    });
    if (messageError) throw messageError;
    return toggle;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/things/types/type.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "itemDtoListToItems",
    ()=>itemDtoListToItems,
    "itemDtoToItem",
    ()=>itemDtoToItem,
    "messageDtoToUiMessage",
    ()=>messageDtoToUiMessage
]);
function itemDtoToItem(dto) {
    if (dto.type === 'text') {
        return {
            ...dto,
            isEditing: 'none',
            isSelected: false
        };
    }
    return {
        ...dto,
        isSelected: false
    };
}
function itemDtoListToItems(dtos) {
    return dtos.map(itemDtoToItem);
}
function messageDtoToUiMessage(dto) {
    return {
        ...dto,
        body: itemDtoListToItems(dto.body)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/things/hooks/useMessages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrentMessage",
    ()=>useCurrentMessage,
    "useMessages",
    ()=>useMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/utils/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/types/type.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInboxMessages"])(userId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSentMessages"])(userId)
            ]);
            setInbox(inboxData.map(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageDtoToUiMessage"]));
            setSent(sentData.map(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageDtoToUiMessage"]));
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
        let receiverId = to.userId;
        if (!receiverId) {
            if (!to.publicId) throw new Error("Не указан пользователь, малыш");
            const { data: receiver, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select("id_user").eq("public_id", to.publicId).single();
            if (userError || !receiver) {
                throw new Error("Пользователь не найден, кись");
            }
            receiverId = receiver.id_user;
        }
        const { data: messageData, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc("send_message", {
            p_from: userId,
            p_to: receiverId,
            p_body: body,
            p_is_anon: isAnon
        });
        if (error) throw error;
        // уведомляем о сообщении
        fetch("/api/telegram/sendNotifyTg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: receiverId,
                text: `Новое сообщение от ${userId}`,
                button: [
                    [
                        {
                            text: "Открыть",
                            url: `https://anonlove.vercel.app/createcard?isMine=false&id=${messageData.id}&type=recieve&to=${messageData.from_user}`
                        }
                    ]
                ]
            })
        });
        await loadMessage();
        return messageData;
    };
    const deleteMessage = async (ids)=>{
        if (!ids.length) {
            console.warn("Message ID is required");
            return;
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc("hide_message_for_me", {
            msg_id: ids
        });
        if (error) {
            console.error("Failed to delete message:", error);
            throw error;
        }
    };
    return {
        inbox,
        sent,
        loading,
        sendMessage: send,
        refresh: loadMessage,
        deleteMessage
    };
}
_s(useMessages, "95c/dDNWoED5e3oy85imaxz0iCs=");
function useCurrentMessage(userId, messageId, isMine) {
    _s1();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCurrentMessage.useEffect": ()=>{
            if (!userId || !messageId) return;
            const loadMessage = {
                "useCurrentMessage.useEffect.loadMessage": async ()=>{
                    setLoading(true);
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentMessage"])(messageId, userId, isMine);
                        setMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["messageDtoToUiMessage"])(data));
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
_s1(useCurrentMessage, "49h+jLg/z5cfZEce3EM2N7kcBII=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 // export type Dialog = {
 //     userId: string,
 //     displayId: string,
 //     lastMessage: UiMessage,
 //     messages: UiMessage[],
 //     count: number,
 //     rating?: number
 // }
}),
"[project]/app/things/hooks/useSetAnon.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSetAnon",
    ()=>useSetAnon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useSetAnon() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const setAnon = async ({ conversation_id, is_anon })=>{
        try {
            setLoading(true);
            setError(null);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc("toggle_anon", {
                p_conversation_id: conversation_id,
                p_is_anon: is_anon
            });
            if (error) throw error;
            console.log(data);
            return data;
        } catch (err) {
            setError(err);
            throw err;
        } finally{
            setLoading(false);
        }
    };
    const checkAnon = async (from_user_id, conversation_id)=>{
        try {
            setLoading(true);
            setError(null);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("conversation_participants").select("is_anon, anon_used_once").eq("user_id", from_user_id).eq("conversation_id", conversation_id).maybeSingle();
            if (error) throw error;
            if (!data) {
                return {
                    isAnon: false,
                    anonUsedOnce: false,
                    canToggle: true
                };
            }
            return {
                isAnon: data?.is_anon ?? false,
                anonUsedOnce: data?.anon_used_once ?? false,
                canToggle: !(data?.anon_used_once && !data.is_anon)
            };
        } catch (err) {
            setError(err);
            throw err;
        } finally{
            setLoading(false);
        }
    };
    return {
        setAnon,
        checkAnon,
        loading,
        error
    };
}
_s(useSetAnon, "Iz3ozxQ+abMaAIcGIvU8cKUcBeo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/things/utils/getId.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getId",
    ()=>getId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-client] (ecmascript)");
;
async function getId(id) {
    if (!id || id.trim() === "") {
        throw new Error("Empty ID provided");
    }
    const { data: toUser, error: toUserError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select("id_user").eq("public_id", id.trim()).maybeSingle();
    if (toUserError) {
        console.error("Error fetching user:", toUserError);
        throw toUserError;
    }
    if (!toUser) {
        throw new Error("User not found");
    }
    return toUser.id_user;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/things/hooks/useGetDialogUsers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGetDialogUsers",
    ()=>useGetDialogUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useGetDialogUsers = (id)=>{
    _s();
    const [dialogs, setDialogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGetDialogUsers.useEffect": ()=>{
            if (!id) {
                setDialogs([]);
                setError(null);
                return;
            }
            let cancelled = false;
            setLoading(true);
            setError(null);
            ({
                "useGetDialogUsers.useEffect": async ()=>{
                    const { data, error: queryError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages_safe").select("to_display_id").eq("from_user", id);
                    if (cancelled) return;
                    if (queryError) {
                        console.error("Error fetching dialogs:", queryError);
                        setError(queryError);
                        setDialogs([]);
                        setLoading(false);
                        return;
                    }
                    setDialogs(data ?? []);
                    setLoading(false);
                }
            })["useGetDialogUsers.useEffect"]();
            return ({
                "useGetDialogUsers.useEffect": ()=>{
                    cancelled = true;
                }
            })["useGetDialogUsers.useEffect"];
        }
    }["useGetDialogUsers.useEffect"], [
        id
    ]);
    return {
        dialogs,
        loading,
        error
    };
};
_s(useGetDialogUsers, "AEG/juafq3PU2PJVKc+ShL1V4Es=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/createcard/components/all.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasItem",
    ()=>CanvasItem,
    "RightField",
    ()=>RightField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function CanvasItem({ item, canEdit, onSelect, onUpdate, onDelete, startDrag, startResize, ismenuTextOpen, setMenuTextOpen, isLoading, setselectedItemId, setOpenRedactor }) {
    const textItem = item.type === "text";
    const gifItem = item.type === "gif";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex text-black select-none relative
        ${textItem && item.isSelected && item.isEditing !== "text" ? "border" : ""}
      `,
        style: {
            position: "absolute",
            left: item.x,
            top: item.y,
            width: item.w,
            height: item.h,
            fontSize: textItem ? item.fontSize : undefined,
            color: textItem ? item.color : undefined,
            cursor: canEdit ? item.isSelected ? "move" : "pointer" : "cursor-allow",
            transform: `rotate(${item.rotation || 0}rad)`,
            transformOrigin: "center center"
        },
        onDoubleClick: ()=>{
            if (item.type === 'text') onUpdate(item.id, {
                isEditing: "text"
            });
        },
        onMouseDown: (e)=>{
            if (!canEdit) return;
            startDrag(e, item);
            onSelect(item.id);
        },
        onTouchStart: (e)=>{
            if (!canEdit) return;
            startDrag(e, item);
            onSelect(item.id);
        },
        onClick: ()=>{
            setselectedItemId(item.id);
            setOpenRedactor(true);
        },
        tabIndex: 0,
        onKeyDown: (e)=>{
            if (e.key === 'Delete') onDelete(item);
        },
        children: textItem && item.isEditing === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            autoFocus: true,
            value: item.content,
            onChange: (e)=>onUpdate(item.id, {
                    content: e.target.value
                }),
            onBlur: ()=>onUpdate(item.id, {
                    isEditing: "none"
                }),
            onKeyDown: (e)=>{
                if (e.key === "Enter") e.currentTarget.blur();
            }
        }, void 0, false, {
            fileName: "[project]/app/createcard/components/all.tsx",
            lineNumber: 81,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative w-full h-full flex ${item.isSelected ? "" : "overflow-hidden"}`,
            children: [
                item.type === 'text' ? item.content : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: item.src,
                    draggable: false,
                    className: "w-full h-full object-contain"
                }, void 0, false, {
                    fileName: "[project]/app/createcard/components/all.tsx",
                    lineNumber: 100,
                    columnNumber: 13
                }, this),
                item.isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-1.5 -right-2.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setMenuTextOpen(!ismenuTextOpen);
                                        },
                                        className: "hover:scale-110 transition-transform cursor-pointer",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "10",
                                        height: "10",
                                        viewBox: "0 0 32 32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M4 8h24M4 16h24M4 24h24"
                                        }, void 0, false, {
                                            fileName: "[project]/app/createcard/components/all.tsx",
                                            lineNumber: 123,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/createcard/components/all.tsx",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute top-1 left-full text-[9px] bg-black/20 rounded-md
                      flex flex-col transition-opacity ${ismenuTextOpen ? "opacity-100" : "opacity-0"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "hover:bg-black/10",
                                            onClick: ()=>onDelete(item),
                                            children: "Удалить"
                                        }, void 0, false, {
                                            fileName: "[project]/app/createcard/components/all.tsx",
                                            lineNumber: 139,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/createcard/components/all.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/createcard/components/all.tsx",
                                lineNumber: 111,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/components/all.tsx",
                            lineNumber: 110,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                            className: "-right-1 bottom-1/2 translate-y-1/2 w-1 h-3 cursor-w-resize",
                            onStart: (e)=>startResize(e, item, "horizontal")
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/components/all.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                            className: "-top-1 left-1/2 -translate-x-1/2 w-3 h-1 cursor-s-resize",
                            onStart: (e)=>startResize(e, item, "top")
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/components/all.tsx",
                            lineNumber: 155,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                            className: "-bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 cursor-s-resize",
                            onStart: (e)=>startResize(e, item, "bottom")
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/components/all.tsx",
                            lineNumber: 159,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                            className: "-bottom-1.5 -right-1.5 w-2 h-2 cursor-se-resize",
                            onStart: (e)=>startResize(e, item, "diagonal")
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/components/all.tsx",
                            lineNumber: 163,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/app/createcard/components/all.tsx",
            lineNumber: 91,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/createcard/components/all.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = CanvasItem;
function ResizeHandle({ className, onStart }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute bg-white border ${className}`,
        onMouseDown: (e)=>{
            e.stopPropagation();
            onStart(e);
        },
        onTouchStart: (e)=>{
            e.stopPropagation();
            onStart(e);
        }
    }, void 0, false, {
        fileName: "[project]/app/createcard/components/all.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_c1 = ResizeHandle;
function RightField({ rightPanelOpen, setRightPanelOpen, userId, setUserId, isReply, anonState, setAnonState, handleSendMessage, idRef, anonRef, isRecieve, routeTo, userError, to, dialogs, isMine }) {
    _s();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(userId || "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RightField.useEffect": ()=>{
            if (!userId) return;
            setInputValue(userId || "");
        }
    }["RightField.useEffect"], [
        userId
    ]);
    const [isMsgMenuOpen, setIsMsgMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (isMine === 'true') return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-20 bg-black/50 transition-all duration-300 overflow-hidden 
                    ${rightPanelOpen ? "backdrop-blur-lg translate-y-0" : "backdrop-blur-none translate-y-full"}
                `,
        onMouseDown: (e)=>setRightPanelOpen(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-1/2 inset-y-0 -translate-x-1/2    flex justify-center items-center    md:w-[400px] w-full bg-black/90 z-20",
            onMouseDown: (e)=>{
                e.stopPropagation();
            },
            children: [
                isRecieve ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " bg-white/10 rounded-xl p-3   ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            routeTo(userId);
                            setRightPanelOpen(false);
                        },
                        children: [
                            "Ответить, ",
                            `${userId}`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/createcard/components/all.tsx",
                        lineNumber: 266,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/createcard/components/all.tsx",
                    lineNumber: 263,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "relative flex flex-col w-full justify-center items-center",
                    onSubmit: (e)=>{
                        e.preventDefault();
                    },
                    children: [
                        to === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute bottom-full flex items-center justify-start flex-col rounded-md
                                      overflow-y-auto gap-1
                                      w-1/2 mb-10 transition-all duration-300 ease-in-out
                                      ${isMsgMenuOpen ? "opacity-100 h-20" : " h-0 opacity-0"}
                            `,
                            children: dialogs.map((d, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-1 w-full    bg-linear-to-br from-white/5 to-white/9 border-b border-white/20 backdrop-blur-md   rounded-full shadow-2xl   hover:from-white/10 hover:to-white/20   ",
                                    onClick: (e)=>{
                                        setInputValue(d.to_display_id);
                                    },
                                    children: d.to_display_id
                                }, index, false, {
                                    fileName: "[project]/app/createcard/components/all.tsx",
                                    lineNumber: 293,
                                    columnNumber: 31
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/components/all.tsx",
                            lineNumber: 285,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full flexC",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: idRef,
                                    value: inputValue,
                                    onChange: (e)=>setInputValue(e.target.value),
                                    onBlur: ()=>{
                                        setUserId(inputValue);
                                    },
                                    disabled: isReply,
                                    type: "text",
                                    placeholder: "ID кисы",
                                    className: `p-2 mb-4 w-1/2 bg-white/10 border rounded-md text-white
                                        ${isReply && "opacity-50"}
                                        ${userError && "border-red-500"}
                                `
                                }, void 0, false, {
                                    fileName: "[project]/app/createcard/components/all.tsx",
                                    lineNumber: 312,
                                    columnNumber: 29
                                }, this),
                                to === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "absolute left-1/2 bottom-full -translate-x-1/2   bg-white/10 h-2 w-10 rounded-t-2xl p-2   flexC   ",
                                    onClick: ()=>{
                                        setIsMsgMenuOpen((prev)=>!prev);
                                    },
                                    children: "..."
                                }, void 0, false, {
                                    fileName: "[project]/app/createcard/components/all.tsx",
                                    lineNumber: 327,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/createcard/components/all.tsx",
                            lineNumber: 311,
                            columnNumber: 25
                        }, this),
                        userError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 text-xs mb-3",
                            children: userError
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/components/all.tsx",
                            lineNumber: 340,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full justify-center items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    ref: anonRef,
                                    checked: anonState.isAnon,
                                    disabled: !anonState.canToggle,
                                    onChange: (e)=>setAnonState(e.target.checked),
                                    className: "bg-white/10 border rounded-md text-white"
                                }, void 0, false, {
                                    fileName: "[project]/app/createcard/components/all.tsx",
                                    lineNumber: 346,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px]",
                                    children: anonState.canToggle ? "Будешь анонимен? (только 1 раз)" : "Анонимность уже использована"
                                }, void 0, false, {
                                    fileName: "[project]/app/createcard/components/all.tsx",
                                    lineNumber: 354,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/createcard/components/all.tsx",
                            lineNumber: 345,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: `p-2 mt-4 border rounded-2xl transition-all duration-200
                                ${userError ? "opacity-50 cursor-not-allowed" : "hover:bg-white/20"}
                            `,
                            onClick: handleSendMessage,
                            disabled: !!userError,
                            children: "Отправить"
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/components/all.tsx",
                            lineNumber: 362,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/createcard/components/all.tsx",
                    lineNumber: 276,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute bottom-0 w-20 bg-white/20 rounded-t-full    hover:bg-white/40 transition-all duration-200   flex justify-center items-center   ",
                    onClick: ()=>setRightPanelOpen(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        transform: "rotate(180)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "currentColor",
                            d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/components/all.tsx",
                            lineNumber: 382,
                            columnNumber: 136
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/createcard/components/all.tsx",
                        lineNumber: 382,
                        columnNumber: 29
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/createcard/components/all.tsx",
                    lineNumber: 375,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/createcard/components/all.tsx",
            lineNumber: 253,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/createcard/components/all.tsx",
        lineNumber: 247,
        columnNumber: 9
    }, this);
}
_s(RightField, "OIumGLNBFbfFrYSnfYE3N8FiTO4=");
_c2 = RightField;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CanvasItem");
__turbopack_context__.k.register(_c1, "ResizeHandle");
__turbopack_context__.k.register(_c2, "RightField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/things/hooks/checkMobile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCheckMobile",
    ()=>useCheckMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useCheckMobile(breakPoint = 768) {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCheckMobile.useEffect": ()=>{
            const check = {
                "useCheckMobile.useEffect.check": ()=>{
                    setIsMobile(window.innerWidth <= 768);
                }
            }["useCheckMobile.useEffect.check"];
            check();
            window.addEventListener('resize', check);
            return ({
                "useCheckMobile.useEffect": ()=>window.removeEventListener('resize', check)
            })["useCheckMobile.useEffect"];
        }
    }["useCheckMobile.useEffect"], [
        breakPoint
    ]);
    return isMobile;
}
_s(useCheckMobile, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/createcard/components/Redactor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Redactor",
    ()=>Redactor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/checkMobile.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function formatNumber(value, digits = 1) {
    if (value == null || Number.isNaN(value)) return "";
    return value.toFixed(digits).replace(/\.0+$/, "");
}
const normalizeNumber = (v)=>v.replace(",", ".").replace(/[^0-9.-]/g, "");
function Redactor({ item, items, isOpen, open, onChange }) {
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('#000000');
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Redactor.useEffect": ()=>{
            if (!item) {
                open(false);
            }
            if (item?.type === 'text') {
                setSize(formatNumber(item.fontSize, 1));
                setColor(item.color ?? "#000000");
                setRotation(formatNumber(radToDeg(item.rotation ?? 0)));
                setText(item.content);
            }
        }
    }["Redactor.useEffect"], [
        item
    ]);
    const inputStyle = `
  w-14 px-2 py-1
  text-sm font-mono text-white
  bg-white/15 rounded-md
  outline-none
  focus:bg-white/25 focus:ring-1 focus:ring-white/40
`;
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const startW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(300);
    const handleChangeOpen = (e)=>{
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        startX.current = clientX;
        startW.current = panelRef.current?.offsetWidth ?? 300;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleMouseMove);
        window.addEventListener('touchend', handleMouseUp);
    };
    const handleMouseMove = (e)=>{
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        if (!panelRef.current) return;
        const delta = startX.current - clientX;
        const newWidth = Math.min(500, Math.max(100, startW.current + delta));
        panelRef.current.style.width = `${newWidth}px`;
    };
    const handleMouseUp = ()=>{
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleMouseMove);
        window.removeEventListener('touchend', handleMouseUp);
    };
    const radToDeg = (rad)=>rad * 180 / Math.PI;
    const degToRad = (deg)=>deg * Math.PI / 180;
    const rotateItem = (side)=>{
        if (!item) return;
        const currentDeg = Number(rotation) || 0;
        const nextdeg = side === 'left' ? currentDeg - 90 : currentDeg + 90;
        setRotation(formatNumber(nextdeg));
        onChange(item.id, {
            rotation: degToRad(nextdeg)
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: panelRef,
            className: `absolute right-0 top-0
                bg-linear-to-b from-black/30 to-black-40 shadow-2xl border border-white/10
                z-50 transition-transform rounded-l-2xl
                ${isOpen ? "traslate-x-0 " : "translate-x-full "}
            `,
            style: {
                width: 300
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full flex justify-center p-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: `${inputStyle} w-full`,
                                        value: text,
                                        onChange: (e)=>setText(e.target.value),
                                        onBlur: ()=>item && onChange(item.id, {
                                                content: String(text)
                                            }),
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter') {
                                                item && onChange(item.id, {
                                                    content: String(text)
                                                });
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/createcard/components/Redactor.tsx",
                                        lineNumber: 133,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/createcard/components/Redactor.tsx",
                                    lineNumber: 132,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/createcard/components/Redactor.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-white/60",
                                        children: "Size"
                                    }, void 0, false, {
                                        fileName: "[project]/app/createcard/components/Redactor.tsx",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: inputStyle,
                                                value: size,
                                                onChange: (e)=>setSize(normalizeNumber(e.target.value)),
                                                onBlur: ()=>item && onChange(item.id, {
                                                        fontSize: Number(size)
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/app/createcard/components/Redactor.tsx",
                                                lineNumber: 155,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-white/40",
                                                children: "px"
                                            }, void 0, false, {
                                                fileName: "[project]/app/createcard/components/Redactor.tsx",
                                                lineNumber: 164,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/createcard/components/Redactor.tsx",
                                        lineNumber: 154,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/createcard/components/Redactor.tsx",
                                lineNumber: 152,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-white/60",
                                        children: "Color"
                                    }, void 0, false, {
                                        fileName: "[project]/app/createcard/components/Redactor.tsx",
                                        lineNumber: 170,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "color",
                                        value: color,
                                        className: "w-8 h-8 rounded-md bg-transparent cursor-pointer",
                                        onChange: (e)=>{
                                            setColor(e.target.value);
                                            item && onChange(item.id, {
                                                color: e.target.value
                                            });
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/createcard/components/Redactor.tsx",
                                        lineNumber: 171,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/createcard/components/Redactor.tsx",
                                lineNumber: 169,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-white/60",
                                        children: "Rotate"
                                    }, void 0, false, {
                                        fileName: "[project]/app/createcard/components/Redactor.tsx",
                                        lineNumber: 184,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: inputStyle,
                                        value: rotation,
                                        onChange: (e)=>setRotation(normalizeNumber(e.target.value)),
                                        onBlur: ()=>{
                                            if (!item) return;
                                            const deg = Number(rotation);
                                            if (Number.isNaN(deg)) return;
                                            onChange(item.id, {
                                                rotation: degToRad(deg)
                                            });
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/createcard/components/Redactor.tsx",
                                        lineNumber: 185,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>rotateItem('left'),
                                        className: "text-xs text-white/40",
                                        children: `<`
                                    }, void 0, false, {
                                        fileName: "[project]/app/createcard/components/Redactor.tsx",
                                        lineNumber: 197,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>rotateItem('right'),
                                        className: "text-xs text-white/40",
                                        children: `>`
                                    }, void 0, false, {
                                        fileName: "[project]/app/createcard/components/Redactor.tsx",
                                        lineNumber: 198,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/createcard/components/Redactor.tsx",
                                lineNumber: 183,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/createcard/components/Redactor.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "   absolute left-0 top-1/2 -translate-y-1/2   h-16 w-2 rounded-full   bg-white/20 hover:bg-white/40   cursor-ew-resize transition   ",
                        onDoubleClick: ()=>open(false),
                        onClick: ()=>{
                            if (isMobile) open(false);
                        },
                        onMouseDown: handleChangeOpen,
                        onTouchStart: handleChangeOpen
                    }, void 0, false, {
                        fileName: "[project]/app/createcard/components/Redactor.tsx",
                        lineNumber: 205,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/createcard/components/Redactor.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/createcard/components/Redactor.tsx",
            lineNumber: 117,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/createcard/components/Redactor.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(Redactor, "iOMGrDjYSdJclmGs/jrJHrlYbBA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"]
    ];
});
_c = Redactor;
var _c;
__turbopack_context__.k.register(_c, "Redactor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/createcard/useItemInteractions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userItemInteractions",
    ()=>userItemInteractions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const userItemInteractions = (items, setItems, fieldRef, setViewport, viewport)=>{
    _s();
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        id: null,
        offsetX: 0,
        offsetY: 0,
        w: 0,
        h: 0
    });
    const resizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        id: null,
        startX: 0,
        startY: 0,
        startW: 0,
        startH: 0,
        fontSize: 0,
        rotate: 0,
        direction: "horizontal"
    });
    const touchDistanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function screenToCanvas(clientX, clientY, rect, viewport) {
        const mx = clientX - rect.left - rect.width / 2;
        const my = clientY - rect.top - rect.height / 2;
        const cx = (mx - viewport.offsetX) / viewport.scale;
        const cy = (my - viewport.offsetY) / viewport.scale;
        return {
            x: cx + 400,
            y: cy + 300
        };
    }
    function getTouchCoordinates(e) {
        if (e.touches.length === 0) return null;
        const touch = e.touches[0];
        return {
            clientX: touch.clientX,
            clientY: touch.clientY
        };
    }
    const startDrag = (e, item)=>{
        const rect = fieldRef.current.getBoundingClientRect();
        let clientX, clientY;
        if ('touches' in e) {
            if (e.touches.length === 0) return;
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        const pos = screenToCanvas(clientX, clientY, rect, viewport);
        dragRef.current = {
            id: item.id,
            offsetX: pos.x - item.x,
            offsetY: pos.y - item.y,
            w: item.w,
            h: item.h
        };
        window.addEventListener('mousemove', onDragMove);
        window.addEventListener('mouseup', stopDrag);
        window.addEventListener('touchmove', onDragMove);
        window.addEventListener('touchend', stopDrag);
    };
    const onDragMove = (e)=>{
        if (resizeRef.current.id !== null) return;
        const rect = fieldRef.current.getBoundingClientRect();
        const drag = dragRef.current;
        let clientX, clientY;
        if (e instanceof TouchEvent) {
            if (e.touches.length === 0) return;
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        const pos = screenToCanvas(clientX, clientY, rect, viewport);
        if (drag.id === null) return;
        setItems((prev)=>prev.map((it)=>it.id === drag.id ? {
                    ...it,
                    x: pos.x - drag.offsetX,
                    y: pos.y - drag.offsetY
                } : it));
    };
    const stopDrag = ()=>{
        dragRef.current.id = null;
        window.removeEventListener('mousemove', onDragMove);
        window.removeEventListener('mouseup', stopDrag);
        window.removeEventListener('touchmove', onDragMove);
        window.removeEventListener('touchend', stopDrag);
    };
    //resize
    const startResize = (e, item, direction)=>{
        e.stopPropagation();
        let clientX, clientY;
        if ('touches' in e) {
            if (e.touches.length === 0) return;
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        const rect = fieldRef.current.getBoundingClientRect();
        const canvasPos = screenToCanvas(clientX, clientY, rect, viewport);
        const cx = item.x + item.w / 2;
        const cy = item.y + item.h / 2;
        resizeRef.current = {
            id: item.id,
            startX: clientX,
            startY: clientY,
            startW: item.w,
            startH: item.h,
            cx: cx,
            cy: cy,
            startAngle: Math.atan2(canvasPos.y - cy, canvasPos.x - cx),
            fontSize: item.type === 'text' ? item.fontSize : undefined,
            rotate: item.rotation,
            direction: direction
        };
        window.addEventListener('mousemove', onResizeMove);
        window.addEventListener('mouseup', stopResize);
        window.addEventListener('touchmove', onResizeMove);
        window.addEventListener('touchend', stopResize);
    };
    const onResizeMove = (e)=>{
        const r = resizeRef.current;
        if (r.id === null) return;
        let clientX, clientY;
        if (e instanceof TouchEvent) {
            if (e.touches.length === 0) return;
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        const dx = (clientX - r.startX) / viewport.scale;
        const dy = (clientY - r.startY) / viewport.scale;
        let w = r.startW;
        let h = r.startH;
        let fontSize = r.fontSize;
        let newX = undefined;
        let newY = undefined;
        let rotation = undefined;
        if (r.direction === "horizontal") {
            w = Math.max(50, r.startW + dx);
        }
        if (r.direction === "top") {
            h = Math.max(30, r.startH + dy);
        }
        if (r.direction === "bottom") {
            h = Math.max(30, r.startH + dy);
        }
        if (r.direction === "diagonal") {
            const rect = fieldRef.current.getBoundingClientRect();
            const mousePos = screenToCanvas(clientX, clientY, rect, viewport);
            const currentAngle = Math.atan2(mousePos.y - r.cy, mousePos.x - r.cx);
            rotation = r.rotate + (currentAngle - r.startAngle);
            const newDist = Math.sqrt((mousePos.x - r.cx) ** 2 + (mousePos.y - r.cy) ** 2);
            const oldDist = Math.sqrt((r.startW / 2) ** 2 + (r.startH / 2) ** 2);
            const scale = newDist / oldDist;
            w = Math.max(50, r.startW * scale);
            h = Math.max(30, r.startH * scale);
            fontSize = Math.max(8, r.fontSize * scale);
            // Центр остается на месте
            newX = r.cx - w / 2;
            newY = r.cy - h / 2;
        }
        // console.log("resize direction:", r.direction, "w:", w, "h:", h, "fontSize:", fontSize)
        setItems((prev)=>prev.map((it)=>it.id === r.id ? {
                    ...it,
                    w,
                    h,
                    fontSize,
                    rotation: rotation !== undefined ? rotation : it.rotation,
                    x: newX || it.x,
                    y: newY || it.y
                } : it));
    };
    const stopResize = ()=>{
        resizeRef.current.id = null;
        window.removeEventListener('mousemove', onResizeMove);
        window.removeEventListener('mouseup', stopResize);
        window.removeEventListener('touchmove', onResizeMove);
        window.removeEventListener('touchend', stopResize);
    };
    //delete
    const deleteItem = (item)=>{
        setItems((prev)=>prev.filter((it)=>it.id !== item.id));
    };
    const clamp = (v, min, max)=>Math.min(max, Math.max(min, v));
    const lerp = (a, b, t)=>a + (b - a) * t;
    //zoom
    const handleZoom = (e)=>{
        const rect = fieldRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;
        setViewport((v)=>{
            const oldScale = v.scale;
            const newScale = clamp(oldScale - e.deltaY * 0.001, 0.1, 3);
            const scaleFactor = newScale / oldScale;
            let nextOffsetX = mouseX - (mouseX - v.offsetX) * scaleFactor;
            let nextOffsetY = mouseY - (mouseY - v.offsetY) * scaleFactor;
            if (newScale <= 1) {
                const t = 1 - newScale;
                nextOffsetX = nextOffsetX * (1 - t);
                nextOffsetY = nextOffsetY * (1 - t);
            }
            return {
                scale: newScale,
                offsetX: nextOffsetX,
                offsetY: nextOffsetY
            };
        });
    };
    const getDistanceBetweenTouches = (touch1, touch2)=>{
        const dx = touch1.clientX - touch2.clientX;
        const dy = touch1.clientY - touch2.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    };
    const handleTouchStart = (e)=>{
        if (e.touches.length === 2) {
            touchDistanceRef.current = getDistanceBetweenTouches(e.touches[0], e.touches[1]);
            startTouchPan(e);
        }
    };
    const handleTouchMove = (e)=>{
        if (e.touches.length === 2 && touchDistanceRef.current !== null) {
            e.preventDefault();
            const currentDistance = getDistanceBetweenTouches(e.touches[0], e.touches[1]);
            const distanceDelta = currentDistance - touchDistanceRef.current;
            setViewport((v)=>({
                    ...v,
                    scale: Math.min(3, Math.max(0.3, v.scale + distanceDelta * 0.01))
                }));
            touchDistanceRef.current = currentDistance;
        }
        // Pan для двух пальцев
        onTouchPanMove(e);
    };
    const handleTouchEnd = ()=>{
        touchDistanceRef.current = null;
        stopTouchPan();
    };
    const zoomHandlers = {
        onWheel: handleZoom,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd
    };
    const panRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        startX: 0,
        startY: 0,
        startOffsetX: 0,
        startOffsetY: 0
    });
    const isPanning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const panTouchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        startX: 0,
        startY: 0,
        startOffsetX: 0,
        startOffsetY: 0
    });
    const isPanningTouch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const clampOffset = (offsetX, offsetY, scale)=>{
        // Ограничиваем только когда отдалено (scale < 1)
        if (scale >= 1) {
            return {
                offsetX,
                offsetY
            };
        }
        const maxOffset = 400 * (1 - scale);
        return {
            offsetX: clamp(offsetX, -maxOffset, maxOffset),
            offsetY: clamp(offsetY, -maxOffset, maxOffset)
        };
    };
    const startPan = (e)=>{
        if (e.button === 0 && e.ctrlKey) {
            e.preventDefault();
            isPanning.current = true;
            panRef.current = {
                startX: e.clientX,
                startY: e.clientY,
                startOffsetX: viewport.offsetX,
                startOffsetY: viewport.offsetY
            };
            window.addEventListener("mousemove", onPanMove);
            window.addEventListener("mouseup", stopPan);
        }
    };
    const onPanMove = (e)=>{
        if (!isPanning.current) return;
        const dx = e.clientX - panRef.current.startX;
        const dy = e.clientY - panRef.current.startY;
        setViewport((v)=>{
            const nextOffsetX = panRef.current.startOffsetX + dx;
            const nextOffsetY = panRef.current.startOffsetY + dy;
            const clamped = clampOffset(nextOffsetX, nextOffsetY, v.scale);
            return {
                ...v,
                offsetX: clamped.offsetX,
                offsetY: clamped.offsetY
            };
        });
    };
    const stopPan = ()=>{
        isPanning.current = false;
        window.removeEventListener("mousemove", onPanMove);
        window.removeEventListener("mouseup", stopPan);
    };
    // Touch Pan (два пальца)
    const startTouchPan = (e)=>{
        if (e.touches.length === 2) {
            isPanningTouch.current = true;
            panTouchRef.current = {
                startX: (e.touches[0].clientX + e.touches[1].clientX) / 2,
                startY: (e.touches[0].clientY + e.touches[1].clientY) / 2,
                startOffsetX: viewport.offsetX,
                startOffsetY: viewport.offsetY
            };
        }
    };
    const onTouchPanMove = (e)=>{
        if (!isPanningTouch.current || e.touches.length !== 2) return;
        e.preventDefault();
        const dx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - panTouchRef.current.startX;
        const dy = (e.touches[0].clientY + e.touches[1].clientY) / 2 - panTouchRef.current.startY;
        setViewport((v)=>{
            const nextOffsetX = panTouchRef.current.startOffsetX + dx;
            const nextOffsetY = panTouchRef.current.startOffsetY + dy;
            const clamped = clampOffset(nextOffsetX, nextOffsetY, v.scale);
            return {
                ...v,
                offsetX: clamped.offsetX,
                offsetY: clamped.offsetY
            };
        });
    };
    const stopTouchPan = ()=>{
        isPanningTouch.current = false;
    };
    return {
        startDrag,
        startResize,
        deleteItem,
        zoomHandlers,
        startPan
    };
};
_s(userItemInteractions, "otJyl3IA4xfVeBmK3ik5ohc7brU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/createcard/btnFunction.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createText",
    ()=>createText,
    "insertGif",
    ()=>insertGif
]);
const createText = (index)=>({
        id: index,
        type: "text",
        content: `new text ${index + 1}`,
        x: 0,
        y: 0 + index * 20,
        w: 100,
        h: 50,
        fontSize: 16,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        isEditing: 'none'
    });
const insertGif = (index, src)=>({
        id: index,
        type: "gif",
        src,
        x: 0,
        y: 0 + index * 20,
        w: 100,
        h: 100,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        autoplay: true,
        loop: true
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/things/hooks/useklipy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useklipySearch",
    ()=>useklipySearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useklipySearch(query, apiKey, perPage = 24) {
    _s();
    const [resultsGif, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingGif, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useklipySearch.useEffect": ()=>{
            if (!query.trim()) {
                setResults([]);
                return;
            }
            const controller = new AbortController();
            setLoading(true);
            const fetchGifs = {
                "useklipySearch.useEffect.fetchGifs": async ()=>{
                    try {
                        const res = await fetch(`https://api.klipy.com/api/v1/${apiKey}/gifs/search?q=${encodeURIComponent(query)}&per_page=${perPage}&locale=ru`, {
                            headers: {
                                "X-KLIPY-API-KEY": apiKey
                            },
                            signal: controller.signal
                        });
                        const json = await res.json();
                        const urls = (json.data?.data || []).map({
                            "useklipySearch.useEffect.fetchGifs.urls": (item)=>{
                                return item.file?.xs.gif.url;
                            }
                        }["useklipySearch.useEffect.fetchGifs.urls"]).filter(Boolean);
                        // console.log(urls)
                        setResults(urls);
                    } catch (err) {
                        if (err.name !== "AbortError") {
                            console.error(err);
                        }
                    } finally{
                        setLoading(false);
                    }
                }
            }["useklipySearch.useEffect.fetchGifs"];
            fetchGifs();
            return ({
                "useklipySearch.useEffect": ()=>{
                    controller.abort();
                }
            })["useklipySearch.useEffect"];
        }
    }["useklipySearch.useEffect"], [
        query,
        apiKey,
        perPage
    ]);
    return {
        resultsGif,
        loadingGif
    };
}
_s(useklipySearch, "TSyiUyH9lQierfEWDi+Vqk+Zw7g=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/things/hooks/useClickOutside.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClickOutside",
    ()=>useClickOutside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useClickOutside(ref, handler) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useClickOutside.useEffect": ()=>{
            const listener = {
                "useClickOutside.useEffect.listener": (e)=>{
                    if (!ref.current) return;
                    if (ref.current.contains(e.target)) return;
                    handler();
                }
            }["useClickOutside.useEffect.listener"];
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return ({
                "useClickOutside.useEffect": ()=>{
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                }
            })["useClickOutside.useEffect"];
        }
    }["useClickOutside.useEffect"], [
        ref,
        handler
    ]);
}
_s(useClickOutside, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/createcard/components/CreateBtns.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateBtns",
    ()=>CreateBtns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$btnFunction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/createcard/btnFunction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useklipy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useklipy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useClickOutside.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/checkMobile.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CreateBtns({ setItems }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClickOutside"])(ref, {
        "CreateBtns.useClickOutside": ()=>{
            setOpen(false);
            setQuery('');
        }
    }["CreateBtns.useClickOutside"]);
    const isMobil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isOpen, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gifPerPage, setGifPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(24);
    const { resultsGif, loadingGif } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useklipy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useklipySearch"])(query, 'pF3P65Wzij6l78j3fDut9DS0h2Ek0UxktVVcLmTCUmdcvsbECRLYJHzZxDaBO1WH', gifPerPage);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const addText = ()=>{
        setItems((prev)=>[
                ...prev,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$btnFunction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createText"])(prev.length)
            ]);
    };
    const addGif = (src)=>{
        setItems((prev)=>[
                ...prev,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$btnFunction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertGif"])(prev.length, src)
            ]);
        setQuery('');
        setOpen(false);
    };
    const handleGifButtonClick = ()=>{
        if (!isOpen) {
            setOpen(true);
            setTimeout(()=>inputRef.current?.focus(), 100);
        } else if (query) {
            addGif(query);
            setQuery("");
            setOpen(false);
        } else {
            setOpen(false);
        }
    };
    const isMobilWH = `${isMobil ? 'w-10 h-10' : 'w-12 h-12'}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
                ${isOpen ? 'w-auto' : 'w-auto'}
            `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-x-0 bottom-full mb-3 overflow-hidden transition-all duration-300
                    ${resultsGif.length > 0 && isOpen ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0'}
                `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-2 shadow-2xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full h-20 overflow-x-auto gap-2 pb-2 no-scrollbar",
                        children: [
                            resultsGif.map((url)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: url,
                                    className: " object-contain rounded-lg cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-200 flex-shrink-0 border border-white/10",
                                    onClick: ()=>addGif(url),
                                    alt: "GIF"
                                }, url, false, {
                                    fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                    lineNumber: 69,
                                    columnNumber: 29
                                }, this)),
                            resultsGif.length !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center justify-center px-4 flex-shrink-0 hover:bg-white/10 rounded-lg transition-all duration-200",
                                onClick: ()=>setGifPerPage((prev)=>prev + 24),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "28",
                                    height: "28",
                                    viewBox: "0 0 24 24",
                                    className: "text-white/70",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                        lineNumber: 83,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                    lineNumber: 82,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                lineNumber: 78,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                        lineNumber: 67,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 left-1/2 -translate-x-1/2
                    flex items-center bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-2xl 
                    rounded-full border border-white/20 shadow-2xl p-2 gap-2
                    transition-opacity duration-150
                    ${isOpen ? 'opacity-0' : 'opacity-100'}
                    `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `relative flex items-center justify-center 
                         rounded-full bg-gradient-to-br 
                         from-white/20 to-white/10 border border-white/30 hover:from-white/30 hover:to-white/20 hover:scale-110 active:scale-95 
                        transition-all duration-150 shadow-lg group 
                        ${isMobilWH}
                    `,
                        onClick: addText,
                        disabled: isOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "22",
                                height: "22",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M4 7V4h16v3M9 20h6M12 4v16"
                                }, void 0, false, {
                                    fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                lineNumber: 112,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none",
                                children: "Добавить текст"
                            }, void 0, false, {
                                fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                lineNumber: 115,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `relative flex items-center justify-center rounded-full transition-all duration-300 shadow-lg group
                        bg-gradient-to-br from-white/20 to-white/10 border border-white/30 hover:from-white/30 hover:to-white/20
                        hover:scale-110 active:scale-95
                        ${isMobilWH}
                    `,
                        onClick: handleGifButtonClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${isOpen ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "22",
                                    height: "22",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "2",
                                            y: "2",
                                            width: "20",
                                            height: "20",
                                            rx: "2.18",
                                            ry: "2.18"
                                        }, void 0, false, {
                                            fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                            lineNumber: 133,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "7",
                                            y1: "2",
                                            x2: "7",
                                            y2: "22"
                                        }, void 0, false, {
                                            fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                            lineNumber: 134,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "17",
                                            y1: "2",
                                            x2: "17",
                                            y2: "22"
                                        }, void 0, false, {
                                            fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                            lineNumber: 135,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "2",
                                            y1: "12",
                                            x2: "22",
                                            y2: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                            lineNumber: 136,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "2",
                                            y1: "7",
                                            x2: "7",
                                            y2: "7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                            lineNumber: 137,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "2",
                                            y1: "17",
                                            x2: "7",
                                            y2: "17"
                                        }, void 0, false, {
                                            fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                            lineNumber: 138,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "17",
                                            y1: "17",
                                            x2: "22",
                                            y2: "17"
                                        }, void 0, false, {
                                            fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                            lineNumber: 139,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "17",
                                            y1: "7",
                                            x2: "22",
                                            y2: "7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                            lineNumber: 140,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                    lineNumber: 132,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg transition-opacity whitespace-nowrap pointer-events-none
                        ${isOpen ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}
                    `,
                                children: "Добавить GIF"
                            }, void 0, false, {
                                fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${isOpen ? 'flex' : 'hidden'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        value: query,
                        onChange: (e)=>setQuery(e.target.value),
                        placeholder: "Найти GIF...",
                        className: `p-2 bg-white/10 border 
                        border-white/20 rounded-full text-white placeholder-white/50 outline-none focus:border-white/40 focus:bg-white/15 
                        transition-all duration-300 
                        ${isOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 pointer-events-none'}
                    `,
                        onKeyDown: (e)=>{
                            if (query && e.key === 'Enter') {
                                addGif(query);
                                setQuery("");
                                setOpen(false);
                            }
                            if (e.key === 'Escape') {
                                setOpen(false);
                                setQuery('');
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200    bg-gradient-to-br from-white/20 to-white/10 hover:bg-white/20 border border-white/20 ",
                        onClick: ()=>{
                            setOpen(false);
                            setQuery('');
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                    lineNumber: 190,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                                    lineNumber: 191,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                            lineNumber: 189,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                        lineNumber: 181,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/createcard/components/CreateBtns.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/createcard/components/CreateBtns.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
_s(CreateBtns, "0hDb98SqmcEEhn0YfC/g1dPtE1k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClickOutside"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"]
    ];
});
_c = CreateBtns;
var _c;
__turbopack_context__.k.register(_c, "CreateBtns");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/createcard/components/canvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Canvas",
    ()=>Canvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$Redactor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/createcard/components/Redactor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$useItemInteractions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/createcard/useItemInteractions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$all$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/createcard/components/all.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$CreateBtns$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/createcard/components/CreateBtns.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CANVAS_W = 800;
const CANVAS_H = 600;
function Canvas({ items, setItems, canEdit, isRecieve }) {
    _s();
    const fieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        scale: 1,
        offsetX: 0,
        offsetY: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Canvas.useEffect": ()=>{
            const getInitialScale = {
                "Canvas.useEffect.getInitialScale": ()=>{
                    const availW = window.innerWidth - 32;
                    const availH = window.innerHeight - 120;
                    const scaleX = availW / 800;
                    const scaleY = availH / 600;
                    const initScale = Math.min(scaleX, scaleY, 1);
                    setViewport({
                        "Canvas.useEffect.getInitialScale": (v)=>({
                                ...v,
                                scale: initScale
                            })
                    }["Canvas.useEffect.getInitialScale"]);
                }
            }["Canvas.useEffect.getInitialScale"];
            getInitialScale();
            window.addEventListener('resize', getInitialScale);
            return ({
                "Canvas.useEffect": ()=>window.removeEventListener('resize', getInitialScale)
            })["Canvas.useEffect"];
        }
    }["Canvas.useEffect"], []);
    const [redactorOpen, setRedactorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedItemId, setSelectedItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ismenuTextOpen, setMenuTextOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectedItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Canvas.useMemo[selectedItem]": ()=>items.find({
                "Canvas.useMemo[selectedItem]": (item)=>item.id === selectedItemId
            }["Canvas.useMemo[selectedItem]"]) ?? null
    }["Canvas.useMemo[selectedItem]"], [
        items,
        selectedItemId
    ]);
    const handleRedactorChange = (id, patch)=>{
        setItems((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    ...patch
                } : item));
    };
    const { startDrag, startResize, deleteItem, zoomHandlers, startPan } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$useItemInteractions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userItemInteractions"])(items, setItems, fieldRef, setViewport, viewport);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: fieldRef,
                className: `relative w-full h-full overflow-hidden z-10 touch-none select-none
                    `,
                onMouseDown: (e)=>{
                    if (e.button === 0 && e.ctrlKey) {
                        startPan(e);
                        return;
                    }
                    if (e.target !== e.currentTarget) return;
                    setItems((prev)=>prev.map((it)=>({
                                ...it,
                                isSelected: false,
                                isEditing: 'none'
                            })));
                    setRedactorOpen(false);
                },
                ...zoomHandlers,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden",
                    style: {
                        position: 'absolute',
                        width: '800px',
                        height: '600px',
                        left: '50%',
                        top: '50%',
                        marginLeft: '-400px',
                        marginTop: '-300px',
                        transform: `translate(${viewport.offsetX}px, ${viewport.offsetY}px) scale(${viewport.scale})`,
                        transformOrigin: 'center center',
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.15)'
                    },
                    onMouseDown: (e)=>{
                        if (e.target !== e.currentTarget) return;
                        setItems((prev)=>prev.map((it)=>({
                                    ...it,
                                    isSelected: false,
                                    isEditing: 'none'
                                })));
                        setRedactorOpen(false);
                    },
                    children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$all$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasItem"], {
                            item: item,
                            canEdit: canEdit,
                            onSelect: (id)=>setItems((prev)=>prev.map((it)=>({
                                            ...it,
                                            isSelected: it.id === id
                                        }))),
                            onUpdate: (id, patch)=>setItems((prev)=>prev.map((it)=>it.id === id ? {
                                            ...it,
                                            ...patch
                                        } : it)),
                            onDelete: (item)=>setItems((prev)=>prev.filter((it)=>it.id !== item.id)),
                            startDrag: startDrag,
                            startResize: startResize,
                            ismenuTextOpen: ismenuTextOpen,
                            setMenuTextOpen: setMenuTextOpen,
                            isLoading: false,
                            setselectedItemId: setSelectedItemId,
                            setOpenRedactor: setRedactorOpen
                        }, item.id, false, {
                            fileName: "[project]/app/createcard/components/canvas.tsx",
                            lineNumber: 120,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/createcard/components/canvas.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/createcard/components/canvas.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            !isRecieve && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$CreateBtns$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBtns"], {
                    setItems: setItems
                }, void 0, false, {
                    fileName: "[project]/app/createcard/components/canvas.tsx",
                    lineNumber: 145,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/createcard/components/canvas.tsx",
                lineNumber: 144,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$Redactor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Redactor"], {
                    item: selectedItem,
                    items: items,
                    isOpen: redactorOpen,
                    open: setRedactorOpen,
                    onChange: handleRedactorChange
                }, void 0, false, {
                    fileName: "[project]/app/createcard/components/canvas.tsx",
                    lineNumber: 150,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/createcard/components/canvas.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Canvas, "u8Riz9nXQVz2vglSMW8apKQIUe8=");
_c = Canvas;
var _c;
__turbopack_context__.k.register(_c, "Canvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/createcard/CreateCardClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateCardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$useRandColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/createcard/useRandColor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useMessages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSetAnon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useSetAnon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$getId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/utils/getId.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useGetDialogUsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useGetDialogUsers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$all$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/createcard/components/all.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/checkMobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/createcard/components/canvas.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function CreateCardPage({ initialData }) {
    _s();
    const { user, profile, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    //messageId
    const messageIdRaw = searchParams.get("id");
    const messageId = messageIdRaw ? decodeURIComponent(messageIdRaw) : null;
    //userId
    const rawTo = searchParams.get("to");
    const to = rawTo ? decodeURIComponent(rawTo) : null;
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null) // получаем из url
    ;
    const [isReply, setIsReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // чье сообщение isMine = true || false
    const isMine = searchParams.get("isMine");
    // тип перехода send или recieve
    const type = searchParams.get("type");
    const [messageType, setMessageType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isRecieve = type === "recieve";
    const isSend = type === "send";
    const canEdit = isSend;
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"])() // проверка разрешения
    ;
    const { sendMessage: send, loading: messageLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])(user?.id || null);
    const { message, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentMessage"])(isRecieve ? user?.id || null : null, isRecieve ? messageId : null, isMine);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.items || []);
    const { checkAnon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSetAnon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAnon"])();
    const [rightPanelOpen, setRightPanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const idRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const anonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [anonState, setAnonState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isAnon: false,
        anonUsedOnce: false,
        canToggle: true
    });
    const [userError, setUserError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { dialogs, loading: dialogsLoading, error: dialogsError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useGetDialogUsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetDialogUsers"])(user?.id || null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateCardPage.useEffect": ()=>{
            if (to) {
                setItems([]);
                setUserId(to);
                setIsReply(true);
            }
            ;
            if (type) {
                setMessageType({
                    type
                });
            }
            ;
        }
    }["CreateCardPage.useEffect"], [
        to,
        type
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateCardPage.useEffect": ()=>{
            if (!isRecieve) return;
            if (!message) return;
            if (loading) return;
            setItems(message.body);
        }
    }["CreateCardPage.useEffect"], [
        isRecieve,
        message
    ]);
    // Прочтение сообщений
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateCardPage.useEffect": ()=>{
            if (isMine === 'true') return;
            if (messageId && type === "recieve") {
                fetch("/api/mark-read", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        messageId
                    })
                }).then({
                    "CreateCardPage.useEffect": async (res)=>{
                        const data = await res.json();
                        console.log("response", {
                            status: res.status,
                            data
                        });
                        if (!res.ok) {
                            console.error("failed", data);
                        } else {
                            console.log("success", data);
                        }
                    }
                }["CreateCardPage.useEffect"]).catch({
                    "CreateCardPage.useEffect": (err)=>console.log("❌ Fetch error:", err)
                }["CreateCardPage.useEffect"]);
            }
        }
    }["CreateCardPage.useEffect"], [
        messageId,
        type,
        to
    ]);
    // проверка на анон
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateCardPage.useEffect": ()=>{
            if (!userId || !user) return;
            const fetchAnon = {
                "CreateCardPage.useEffect.fetchAnon": async ()=>{
                    try {
                        setUserError(null);
                        const toUserId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$getId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getId"])(userId);
                        if (!toUserId) {
                            setUserError("Пользователь не найден");
                            return;
                        }
                        const state = await checkAnon(user.id, toUserId);
                        setAnonState(state);
                    } catch (err) {
                        if (err.message === "User not found") {
                            setUserError("Пользователь не найден");
                        } else {
                            setUserError("Ошибка при проверке пользователя");
                        }
                        console.log(`Error:`, err);
                    }
                }
            }["CreateCardPage.useEffect.fetchAnon"];
            fetchAnon();
        }
    }["CreateCardPage.useEffect"], [
        userId,
        user
    ]);
    // рандомный фон
    const { bg } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$useRandColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRandColor"])();
    const bgStyle = `rgba(${Math.floor(bg.r)}, ${Math.floor(bg.g)}, ${Math.floor(bg.b)}, ${bg.a})`;
    const handleSendMessage = async ()=>{
        const id = idRef.current?.value || "";
        if (!id) {
            alert('Введи ID, сладкий!');
            return;
        }
        if (id === profile.public_id) {
            alert('Нельзя отправить сообщение самому себе!');
            return;
        }
        const cleanItems = items.map((item)=>{
            if (item.type === 'text') {
                const { isSelected, isEditing, ...rest } = item;
                return rest;
            }
            const { isSelected, ...rest } = item;
            return rest;
        });
        try {
            await send({
                publicId: id
            }, cleanItems, anonState.isAnon);
            idRef.current.value = "";
            setRightPanelOpen(false);
            router.push('/');
        } catch (error) {
            console.log(error.message || 'Error sending message');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex flex-col justify-center items-center h-full overflow-hidden`,
        style: {
            backgroundColor: bgStyle
        },
        onClick: (e)=>{
            if (e.target !== e.currentTarget) return;
        },
        children: [
            (isSend || isRecieve && !loading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Canvas"], {
                items: items,
                setItems: setItems,
                canEdit: canEdit,
                isRecieve: isRecieve
            }, void 0, false, {
                fileName: "[project]/app/createcard/CreateCardClient.tsx",
                lineNumber: 203,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute  flex justify-center items-center z-20
                    rounded-full backdrop-blur-md transition-all duration-200

                    bg-linear-to-br from-white/20 to-white/10 border-white/20
                    hover:from-white/20 hover:to-white/30
                    ${isMobile ? "w-10 h-10 left-3 top-3" : "w-12 h-12 left-5 top-5"}
                    `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push("/"),
                    className: "w-full h-full ",
                    children: `<`
                }, void 0, false, {
                    fileName: "[project]/app/createcard/CreateCardClient.tsx",
                    lineNumber: 224,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/createcard/CreateCardClient.tsx",
                lineNumber: 214,
                columnNumber: 17
            }, this),
            isMine !== "true" && (!isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute right-0 bottom-0 -translate-y-1/2
                        flex justify-center items-center overflow-hidden
                        w-7 h-1/2 rounded-l-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-cursor
                        z-20
                        `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setRightPanelOpen(true);
                    },
                    className: "flexC w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "currentColor",
                            d: "M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/CreateCardClient.tsx",
                            lineNumber: 247,
                            columnNumber: 112
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/createcard/CreateCardClient.tsx",
                        lineNumber: 247,
                        columnNumber: 29
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/createcard/CreateCardClient.tsx",
                    lineNumber: 244,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/createcard/CreateCardClient.tsx",
                lineNumber: 237,
                columnNumber: 21
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 right-0 
                        flex justify-center items-center overflow-hidden
                        w-7 h-12 rounded-l-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-cursor
                        z-20
                        `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setRightPanelOpen(true);
                    },
                    className: "flexC w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "currentColor",
                            d: "M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/CreateCardClient.tsx",
                            lineNumber: 262,
                            columnNumber: 112
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/createcard/CreateCardClient.tsx",
                        lineNumber: 262,
                        columnNumber: 29
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/createcard/CreateCardClient.tsx",
                    lineNumber: 259,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/createcard/CreateCardClient.tsx",
                lineNumber: 252,
                columnNumber: 21
            }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$all$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RightField"], {
                rightPanelOpen: rightPanelOpen,
                setRightPanelOpen: setRightPanelOpen,
                userId: userId,
                setUserId: setUserId,
                isReply: isReply,
                anonState: anonState,
                setAnonState: (isAnon)=>setAnonState((s)=>({
                            ...s,
                            isAnon
                        })),
                handleSendMessage: handleSendMessage,
                idRef: idRef,
                anonRef: anonRef,
                isRecieve: isRecieve,
                routeTo: (id)=>{
                    // router.push(`createcard?type=send&id=${encodeURIComponent(id ?? '')}`)
                    router.push(`createcard?type=send&to=${encodeURIComponent(id ?? '')}`);
                },
                userError: userError,
                to: to,
                dialogs: dialogs,
                isMine: isMine
            }, void 0, false, {
                fileName: "[project]/app/createcard/CreateCardClient.tsx",
                lineNumber: 270,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/createcard/CreateCardClient.tsx",
        lineNumber: 192,
        columnNumber: 13
    }, this);
}
_s(CreateCardPage, "DlHF6/6ggYhm87i92/0Vi7Bc54w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentMessage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSetAnon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAnon"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useGetDialogUsers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetDialogUsers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$useRandColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRandColor"]
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

//# sourceMappingURL=_d1229f11._.js.map