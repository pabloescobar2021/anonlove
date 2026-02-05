(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/app/anonlove/things/utils/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select("public_id, username").eq("id_user", userId).single();
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
"[project]/app/anonlove/things/hooks/useAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/auth.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useAuth() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            const loadUser = {
                "useAuth.useEffect.loadUser": async ()=>{
                    try {
                        const userData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                        setUser(userData);
                        if (userData) {
                            const profileData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserProfile"])(userData.id);
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
            const subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChange"])({
                "useAuth.useEffect.subscription": async (newUser)=>{
                    setUser(newUser);
                    if (newUser) {
                        const profileData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserProfile"])(newUser.id);
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
        loading
    };
}
_s(useAuth, "DYSpA4ZauWKW8e4CNkO4ayA+RbM=");
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
async function getCurrentMessage(messageId, userId, isMine) {
    console.log('Querying message:', {
        messageId,
        userId
    });
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages_safe").select("*").eq("id", messageId).eq(isMine === "true" ? "from_user" : "to_user", userId).maybeSingle();
    console.log('Query result:', {
        data,
        error
    });
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
"[project]/app/anonlove/things/types/type.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "itemDtoListToItems",
    ()=>itemDtoListToItems,
    "itemDtoToItem",
    ()=>itemDtoToItem
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonlove/things/utils/parseDate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseBackendDate",
    ()=>parseBackendDate,
    "parseDate",
    ()=>parseDate
]);
function parseBackendDate(raw) {
    if (!raw) return new Date(NaN);
    return new Date(raw.replace(" ", "T").replace(/\.\d+/, (m)=>m.slice(0, 4)) // миллисекунды → 3 знака
    .replace(/\+00:?00$/, "Z")) // +00 or +00:00 → Z
    ;
}
function parseDate(date) {
    return date.toLocaleString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
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
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/types/type.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/parseDate.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
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
        let receiverId = to.userId;
        if (!receiverId) {
            if (!to.publicId) throw new Error("Не указан пользователь, малыш");
            const { data: receiver, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select("id_user").eq("public_id", to.publicId).single();
            if (userError || !receiver) {
                throw new Error("Пользователь не найден, кись");
            }
            receiverId = receiver.id_user;
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc("toggle_anonymous", {
            p_from: userId,
            p_to: receiverId,
            p_is_anon: isAnon
        });
        if (error) throw error;
        const { error: errorMsg } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages").insert({
            from_user: userId,
            to_user: receiverId,
            body
        });
        if (errorMsg) throw errorMsg;
        await loadMessage();
        return data;
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
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentMessage"])(messageId, userId, isMine);
                        setMessage({
                            ...data,
                            body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemDtoListToItems"])(data.body)
                        });
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
function useDialogs(inboxMessages, sentMessages, myUserId, myPublicId) {
    _s2();
    const dialogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDialogs.useMemo[dialogs]": ()=>{
            const map = new Map();
            const allMessages = [
                ...inboxMessages,
                ...sentMessages
            ].map({
                "useDialogs.useMemo[dialogs].allMessages": (msg)=>({
                        ...msg,
                        created_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBackendDate"])(msg.created_at)
                    })
            }["useDialogs.useMemo[dialogs].allMessages"]);
            for (const msg of allMessages){
                const dialogUserId = msg.from_user === myUserId ? msg.to_user : msg.from_user;
                let displayId = '';
                if (msg.from_display_id === 'A') {
                    displayId = 'Anon';
                } else {
                    displayId = msg.from_display_id === myPublicId ? msg.to_display_id : msg.from_display_id;
                }
                if (!map.has(dialogUserId)) {
                    map.set(dialogUserId, {
                        userId: dialogUserId,
                        displayId: displayId,
                        lastMessage: msg,
                        messages: [
                            msg
                        ],
                        count: 1,
                        rating: msg.to_user_rating
                    });
                } else {
                    const dialog = map.get(dialogUserId);
                    dialog.messages.push(msg);
                    dialog.count++;
                    if (msg.created_at > dialog.lastMessage.created_at) {
                        dialog.lastMessage = msg;
                    }
                }
            }
            return Array.from(map.values()).sort({
                "useDialogs.useMemo[dialogs]": (a, b)=>b.lastMessage.created_at.getTime() - a.lastMessage.created_at.getTime()
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
"[project]/app/anonlove/things/hooks/useSetAnon.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    const setAnon = async ({ from_user_id, to_user_id, is_anon })=>{
        try {
            setLoading(true);
            setError(null);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc("toggle_anonymous", {
                p_from: from_user_id,
                p_to: to_user_id,
                p_is_anon: is_anon
            });
            if (error) throw error;
            if (data === false) {
                throw new Error("Анонимность уже была использована");
            }
            return data;
        } catch (err) {
            setError(err);
            throw err;
        } finally{
            setLoading(false);
        }
    };
    const checkAnon = async (from_user_id, to_user_id)=>{
        try {
            setLoading(true);
            setError(null);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("user_anonymous_settings").select("is_anon, anon_used_once").eq("from_user_id", from_user_id).eq("to_user_id", to_user_id).maybeSingle();
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
"[project]/app/anonlove/things/utils/getId.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/anonlove/createcard/components/all.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
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
                    fileName: "[project]/app/anonlove/createcard/components/all.tsx",
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
                                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                            lineNumber: 123,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
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
                                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                            lineNumber: 139,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                lineNumber: 111,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 110,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                            className: "-right-1 bottom-1/2 translate-y-1/2 w-1 h-3 cursor-w-resize",
                            onStart: (e)=>startResize(e, item, "horizontal")
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                            className: "-top-1 left-1/2 -translate-x-1/2 w-3 h-1 cursor-s-resize",
                            onStart: (e)=>startResize(e, item, "top")
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 155,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                            className: "-bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 cursor-s-resize",
                            onStart: (e)=>startResize(e, item, "bottom")
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 159,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                            className: "-bottom-1.5 -right-1.5 w-2 h-2 cursor-se-resize",
                            onStart: (e)=>startResize(e, item, "diagonal")
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 163,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
            lineNumber: 91,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
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
        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_c1 = ResizeHandle;
function RightField({ rightPanelOpen, setRightPanelOpen, userId, setUserId, isReply, anonState, setAnonState, handleSendMessage, idRef, anonRef, isRecieve, routeTo, userError }) {
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
                        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                        lineNumber: 257,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                    lineNumber: 254,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "relative flex flex-col w-full justify-center items-center",
                    onSubmit: (e)=>{
                        e.preventDefault();
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: idRef,
                            value: inputValue,
                            onChange: (e)=>setInputValue(e.target.value),
                            onBlur: ()=>setUserId(inputValue),
                            disabled: isReply,
                            type: "text",
                            placeholder: "ID кисы",
                            className: `p-2 mb-4 w-1/2 bg-white/10 border rounded-md text-white
                                    ${isReply && "opacity-50"}
                                    ${userError && "border-red-500"}
                            `
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 273,
                            columnNumber: 25
                        }, this),
                        userError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 text-xs mb-3",
                            children: userError
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 288,
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
                                    fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                    lineNumber: 294,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px]",
                                    children: anonState.canToggle ? "Будешь анонимен? (только 1 раз)" : "Анонимность уже использована"
                                }, void 0, false, {
                                    fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                    lineNumber: 302,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 293,
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
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 310,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                    lineNumber: 267,
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
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 330,
                            columnNumber: 136
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                        lineNumber: 330,
                        columnNumber: 29
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                    lineNumber: 323,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
            lineNumber: 244,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
        lineNumber: 238,
        columnNumber: 9
    }, this);
}
_s(RightField, "Ey4xVAoziqKVixSVHy9qdKPwxqQ=");
_c2 = RightField;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CanvasItem");
__turbopack_context__.k.register(_c1, "ResizeHandle");
__turbopack_context__.k.register(_c2, "RightField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonlove/createcard/useItemInteractions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        return {
            x: (clientX - rect.left - viewport.offsetX) / viewport.scale,
            y: (clientY - rect.top - viewport.offsetY) / viewport.scale
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
            rotation = currentAngle - r.startAngle;
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
    //zoom
    const handleZoom = (e)=>{
        // e.preventDefault()
        setViewport((v)=>({
                ...v,
                scale: Math.min(3, Math.max(0.3, v.scale - e.deltaY * 0.001))
            }));
    };
    const getDistanceBetweenTouches = (touch1, touch2)=>{
        const dx = touch1.clientX - touch2.clientX;
        const dy = touch1.clientY - touch2.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    };
    const handleTouchStart = (e)=>{
        if (e.touches.length === 2) {
            touchDistanceRef.current = getDistanceBetweenTouches(e.touches[0], e.touches[1]);
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
    };
    const handleTouchEnd = ()=>{
        touchDistanceRef.current = null;
    };
    const zoomHandlers = {
        onWheel: handleZoom,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd
    };
    return {
        startDrag,
        startResize,
        deleteItem,
        zoomHandlers
    };
};
_s(userItemInteractions, "o8RRLN4nyH9jSFUaVKTQ70K/POg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonlove/things/hooks/checkMobile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/anonlove/createcard/components/Redactor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Redactor",
    ()=>Redactor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/checkMobile.ts [app-client] (ecmascript)");
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
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"])();
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
                setRotation(formatNumber(item.rotation, 1));
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute right-0 w-7 rounded-l-full 
                backdrop-blur-mdtransition cursor-pointer
                md:inset-y-0
                inset-y-60
                ${isOpen ? "hidden" : ""}
                ${isMobile ? "bg-black/50" : "bg-white/10"}
            `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full h-full",
                    onClick: ()=>open(!isOpen),
                    children: `>`
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                    lineNumber: 110,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: panelRef,
                className: `absolute right-0 inset-y-0 
                bg-gradient-to-b from-[#3b0d10] to-[#220507] shadow-2xl
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
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-white/60",
                                            children: "Size"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                                            lineNumber: 133,
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
                                                    fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-white/40",
                                                    children: "px"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                                            lineNumber: 134,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                                    lineNumber: 132,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-white/60",
                                            children: "Color"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                                            lineNumber: 149,
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
                                            fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                                            lineNumber: 150,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                                    lineNumber: 148,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-white/60",
                                            children: "Rotate"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                                            lineNumber: 163,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: inputStyle,
                                            value: rotation,
                                            onChange: (e)=>setRotation(normalizeNumber(e.target.value)),
                                            onBlur: ()=>item && onChange(item.id, {
                                                    rotation: Number(rotation)
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                                            lineNumber: 164,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                                    lineNumber: 162,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                            lineNumber: 130,
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
                            fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                            lineNumber: 179,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                    lineNumber: 128,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/anonlove/createcard/components/Redactor.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(Redactor, "0+FiuHqsXT8h5iKpQ3i4gCIUleE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"]
    ];
});
_c = Redactor;
var _c;
__turbopack_context__.k.register(_c, "Redactor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonlove/createcard/btnFunction.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/anonlove/things/hooks/useklipy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/anonlove/createcard/components/CreateBtns.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateBtns",
    ()=>CreateBtns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$btnFunction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/createcard/btnFunction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useklipy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/useklipy.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CreateBtns({ setItems }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isOpen, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gifPerPage, setGifPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(24);
    const { resultsGif, loadingGif } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useklipy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useklipySearch"])(query, 'pF3P65Wzij6l78j3fDut9DS0h2Ek0UxktVVcLmTCUmdcvsbECRLYJHzZxDaBO1WH', gifPerPage);
    const addText = ()=>{
        setItems((prev)=>[
                ...prev,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$btnFunction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createText"])(prev.length)
            ]);
    };
    const addGif = (src)=>{
        setItems((prev)=>[
                ...prev,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$btnFunction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertGif"])(prev.length, src)
            ]);
        setQuery('');
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `relative flex p-2 mt-20 gap-2 bg-[#ffffff1a] rounded-full backdrop-blur-md
            `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "p-2 border rounded-2xl",
                onClick: addText,
                children: "Текст"
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/components/CreateBtns.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: query,
                onChange: (e)=>setQuery(e.target.value),
                placeholder: "Введи слово",
                className: `transition-all duration-300
                        ${isOpen ? 'w-100' : 'w-0'}
                    `,
                onKeyDown: (e)=>{
                    if (!query) return;
                    if (e.key === 'Enter') {
                        addGif(query);
                        setQuery("");
                        setOpen(false);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/components/CreateBtns.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "p-2 border rounded-2xl",
                onClick: ()=>{
                    setOpen(true);
                    if (!query) return;
                    addGif(query);
                    setQuery("");
                    setOpen(false);
                },
                children: isOpen ? "Вставить" : "Гифка"
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/components/CreateBtns.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-full flex overflow-x-auto no-scrollbar max-h-[80px]    bg-black/20 rounded-2xl gap-1      ",
                children: [
                    resultsGif.map((url)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: url,
                            className: "flex object-fill w-full cursor-pointer",
                            onClick: (e)=>{
                                addGif(url);
                            // openInputUrl(false)
                            }
                        }, url, false, {
                            fileName: "[project]/app/anonlove/createcard/components/CreateBtns.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this)),
                    resultsGif.length !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flexC p-2",
                        onClick: (e)=>{
                            setGifPerPage((prev)=>prev + 24);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
                            }, void 0, false, {
                                fileName: "[project]/app/anonlove/createcard/components/CreateBtns.tsx",
                                lineNumber: 100,
                                columnNumber: 108
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/CreateBtns.tsx",
                            lineNumber: 100,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/components/CreateBtns.tsx",
                        lineNumber: 94,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonlove/createcard/components/CreateBtns.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/anonlove/createcard/components/CreateBtns.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_s(CreateBtns, "u+X7vRVWSDe8sDJ770tIjtgpFP4=");
_c = CreateBtns;
var _c;
__turbopack_context__.k.register(_c, "CreateBtns");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonlove/createcard/CreateCardClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateCardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$useRandColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/createcard/useRandColor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/useMessages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useSetAnon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/useSetAnon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$getId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/getId.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$components$2f$all$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/createcard/components/all.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$useItemInteractions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/createcard/useItemInteractions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/checkMobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$components$2f$Redactor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/createcard/components/Redactor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$components$2f$CreateBtns$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/createcard/components/CreateBtns.tsx [app-client] (ecmascript)");
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
;
function CreateCardPage({ initialData }) {
    _s();
    const { user, profile, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
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
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"])() // проверка разрешения
    ;
    const { sendMessage: send, loading: messageLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])(user?.id || null);
    const { message, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentMessage"])(isRecieve ? user?.id || null : null, isRecieve ? messageId : null, isMine);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.items || []);
    const fieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        scale: 1,
        offsetX: 0,
        offsetY: 0
    });
    const { checkAnon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useSetAnon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAnon"])();
    const [rightPanelOpen, setRightPanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const idRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const anonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [anonState, setAnonState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isAnon: false,
        anonUsedOnce: false,
        canToggle: true
    });
    const [userError, setUserError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ismenuTextOpen, setMenuTextOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { startDrag, startResize, deleteItem, zoomHandlers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$useItemInteractions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userItemInteractions"])(items, setItems, fieldRef, setViewport, viewport);
    // redactor panel
    const [redactorOpen, setRedactorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedItemId, setSelectedItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateCardPage.useMemo[selectedItem]": ()=>items.find({
                "CreateCardPage.useMemo[selectedItem]": (item)=>item.id === selectedItemId
            }["CreateCardPage.useMemo[selectedItem]"]) ?? null
    }["CreateCardPage.useMemo[selectedItem]"], [
        items,
        selectedItemId
    ]);
    //
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
    // проверка на анон
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateCardPage.useEffect": ()=>{
            if (!userId || !user) return;
            const fetchAnon = {
                "CreateCardPage.useEffect.fetchAnon": async ()=>{
                    try {
                        setUserError(null);
                        const toUserId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$getId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getId"])(userId);
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
    const { bg } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$useRandColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRandColor"])();
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
            router.push('anonlovemain');
        } catch (error) {
            console.log(error.message || 'Error sending message');
        }
    };
    const handleRedactorChange = (id, patch)=>{
        setItems((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    ...patch
                } : item));
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
            (isSend || isRecieve && !loading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative border rounded-md bg-white overflow-hidden z-10
                            touch-none select-none
                            ${isMobile ? "w-full h-1/2" : "w-1/2 h-1/2"}
                            `,
                ref: fieldRef,
                onMouseDown: (e)=>{
                    if (e.target !== e.currentTarget) return;
                    setItems((prev)=>prev.map((it)=>({
                                ...it,
                                isSelected: false,
                                isEditing: 'none'
                            })));
                    setRedactorOpen(false);
                },
                ...zoomHandlers,
                style: {
                    transform: `
                            translate(${viewport.offsetX}px, ${viewport.offsetY}px)
                            scale(${viewport.scale})
                            `,
                    transformOrigin: "center center"
                },
                children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$components$2f$all$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasItem"], {
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
                        isLoading: loading,
                        setselectedItemId: setSelectedItemId,
                        setOpenRedactor: setRedactorOpen
                    }, item.id, false, {
                        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                        lineNumber: 239,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                lineNumber: 218,
                columnNumber: 21
            }, this),
            !isRecieve && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$components$2f$CreateBtns$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBtns"], {
                setItems: setItems
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                lineNumber: 263,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute left-0  flex justify-center items-center 
                    w-7 rounded-r-full backdrop-blur-md hover:bg-white/20 transition-cursor
                    md:inset-y-0
                    inset-y-60
                    z-20
                    ${isMobile ? "bg-black/50" : "bg-white/10"}
                    `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push("anonlovemain"),
                    className: "w-full h-full ",
                    children: `<`
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 281,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                lineNumber: 271,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$components$2f$Redactor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Redactor"], {
                    item: selectedItem,
                    items: items,
                    open: setRedactorOpen,
                    isOpen: redactorOpen,
                    onChange: handleRedactorChange
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 292,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                lineNumber: 291,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute right-1/2 bottom-0 translate-x-1/2 
                    flex justify-center items-center overflow-hidden
                    w-50 rounded-t-2xl bg-black/50 backdrop-blur-md hover:bg-white/20 transition-cursor
                    z-20
                    ${isMobile ? "bg-black/50" : "bg-white/10"}
                    `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setRightPanelOpen(true);
                    },
                    className: "flexC w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "currentColor",
                            d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                            lineNumber: 316,
                            columnNumber: 109
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                        lineNumber: 316,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 313,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                lineNumber: 304,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$components$2f$all$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RightField"], {
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
                userError: userError
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                lineNumber: 322,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
        lineNumber: 207,
        columnNumber: 13
    }, this);
}
_s(CreateCardPage, "qdrH8fzVBXvPQeTD3EpCLb/+qJ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentMessage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useSetAnon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAnon"],
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

//# sourceMappingURL=_28bfd712._.js.map