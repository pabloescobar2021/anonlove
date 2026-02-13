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
"[project]/app/things/utils/parseDate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/utils/parseDate.ts [app-client] (ecmascript)");
;
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
        body: itemDtoListToItems(dto.body),
        created_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseBackendDate"])(dto.created_at)
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
    "useDialogs",
    ()=>useDialogs,
    "useMessages",
    ()=>useMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/utils/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/types/type.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc("toggle_anonymous", {
            p_from: userId,
            p_to: receiverId,
            p_is_anon: isAnon
        });
        if (error) throw error;
        const { data: messageData, error: errorMsg } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages").insert({
            from_user: userId,
            to_user: receiverId,
            body
        }).select("id").single();
        if (errorMsg) throw errorMsg;
        // уведомляем о сообщении
        fetch("/api/telegram/sendNotifyTg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: receiverId,
                text: `Новое сообщение от ${userId} https://anonlove.vercel.app/createcard?isMine=false&id=${messageData.id}&type=recieve&to=${userId}`
            })
        });
        await loadMessage();
        return data;
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
function useDialogs(inboxMessages, sentMessages, myUserId, myPublicId) {
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
"[project]/app/things/hooks/useSwipe.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSwipe",
    ()=>useSwipe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 50 }) {
    _s();
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onTouchStart = (e)=>{
        startX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e)=>{
        if (startX.current === null) return;
        const endX = e.changedTouches[0].clientX;
        const delta = endX - startX.current;
        if (Math.abs(delta) > threshold) {
            if (delta > 0) onSwipeRight?.();
            else onSwipeLeft?.();
        }
        startX.current = null;
    };
    return {
        onTouchStart,
        onTouchEnd
    };
}
_s(useSwipe, "OBAcJArbm2d1R/3X1xJDTyyiYXc=");
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
"[project]/app/createcard/components/ReadIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadIndicator",
    ()=>ReadIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ReadIndicator({ isRead, isMine }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 text-xs",
                children: isRead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 text-blue-400",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1 12l4 4L15 6M9 12l4 4L23 6",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/components/ReadIndicator.tsx",
                            lineNumber: 22,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/createcard/components/ReadIndicator.tsx",
                        lineNumber: 17,
                        columnNumber: 25
                    }, this)
                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 text-gray-400",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M5 12l4 4L19 6",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/createcard/components/ReadIndicator.tsx",
                                lineNumber: 39,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/components/ReadIndicator.tsx",
                            lineNumber: 34,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400",
                            children: "доставлено"
                        }, void 0, false, {
                            fileName: "[project]/app/createcard/components/ReadIndicator.tsx",
                            lineNumber: 47,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/app/createcard/components/ReadIndicator.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            !isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 text-md",
                children: isRead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "●"
                    }, void 0, false, {
                        fileName: "[project]/app/createcard/components/ReadIndicator.tsx",
                        lineNumber: 60,
                        columnNumber: 25
                    }, this)
                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "○"
                    }, void 0, false, {
                        fileName: "[project]/app/createcard/components/ReadIndicator.tsx",
                        lineNumber: 67,
                        columnNumber: 25
                    }, this)
                }, void 0, false)
            }, void 0, false, {
                fileName: "[project]/app/createcard/components/ReadIndicator.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = ReadIndicator;
var _c;
__turbopack_context__.k.register(_c, "ReadIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/createcard/components/Rating.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rating",
    ()=>Rating,
    "numberToRating",
    ()=>numberToRating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Rating({ value, className }) {
    const rating = numberToRating(value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-1 text-sm select-none ${className ?? ''}`,
        title: rating.s,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: rating.s
        }, void 0, false, {
            fileName: "[project]/app/createcard/components/Rating.tsx",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/createcard/components/Rating.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = Rating;
function numberToRating(rating) {
    if (!rating || rating === 0) {
        return {
            s: "😴"
        };
    }
    if (rating >= 5) {
        return {
            s: "❤️️"
        };
    }
    if (rating >= 10) {
        return {
            s: "🔥"
        };
    }
    if (rating >= 20) {
        return {
            s: "💘"
        };
    }
    if (rating >= 50) {
        return {
            s: "👑✮"
        };
    }
    if (rating >= 100) {
        return {
            s: "👑"
        };
    }
    return {
        s: "🥰"
    };
}
var _c;
__turbopack_context__.k.register(_c, "Rating");
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
"[project]/app/contextMenu/useContextMenuBehavior.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useContextMenuBehavior",
    ()=>useContextMenuBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useContextMenuBehavior(action, onClose, onDelete, panelRef, isMine) {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirm, setConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [panelState, setPanelState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        t: action.rect.top,
        l: action.rect.left,
        transform: 'none',
        transformOrigin: 'center'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useContextMenuBehavior.useLayoutEffect": ()=>{
            if (!action || !panelRef.current) return;
            const rect = action.rect;
            const panelW = panelRef.current.offsetWidth;
            const panelH = panelRef.current.offsetHeight;
            const viewport = {
                w: window.innerWidth,
                h: window.innerHeight
            };
            let left;
            let transform;
            let transformOrigin;
            if (isMine) {
                left = rect.left - panelW;
                transformOrigin = 'right center';
            } else {
                left = rect.left + rect.width;
                transformOrigin = 'left center';
            }
            let top = rect.top;
            if (top + panelH > viewport.h) {
                top = viewport.h - panelH - 5;
            }
            if (top < 0) {
                top = 5;
            }
            setPanelState({
                "useContextMenuBehavior.useLayoutEffect": (prev)=>({
                        ...prev,
                        t: top,
                        l: left,
                        transformOrigin
                    })
            }["useContextMenuBehavior.useLayoutEffect"]);
        }
    }["useContextMenuBehavior.useLayoutEffect"], [
        action,
        isMine
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useContextMenuBehavior.useEffect": ()=>{
            if (action) {
                requestAnimationFrame({
                    "useContextMenuBehavior.useEffect": ()=>{
                        setPanelState({
                            "useContextMenuBehavior.useEffect": (prev)=>({
                                    ...prev,
                                    transform: 'translateX(0%)'
                                })
                        }["useContextMenuBehavior.useEffect"]);
                        setVisible(true);
                    }
                }["useContextMenuBehavior.useEffect"]);
            }
        }
    }["useContextMenuBehavior.useEffect"], [
        action
    ]);
    const closeAnimated = ()=>{
        setVisible(false);
        setTimeout(()=>{
            onClose?.();
        }, 10);
    };
    const confirmDelete = ()=>{
        onDelete?.(action?.message.id);
        setConfirm(false);
        closeAnimated();
    };
    return {
        visible,
        confirm,
        setConfirm,
        closeAnimated,
        confirmDelete,
        panelState,
        setPanelState
    };
}
_s(useContextMenuBehavior, "Sz80xmFGYNdr/lUhhhXD+Sjj/Sk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/contextMenu/messagePanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageActionRoot",
    ()=>MessageActionRoot,
    "MobileCM",
    ()=>MobileCM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useClickOutside.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$useContextMenuBehavior$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/contextMenu/useContextMenuBehavior.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function MessageActionRoot(props) {
    if (!props.action) return null;
    return props.action.type === 'desktop' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopCM, {
        ...props
    }, void 0, false, {
        fileName: "[project]/app/contextMenu/messagePanel.tsx",
        lineNumber: 24,
        columnNumber: 11
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileCM, {
        ...props
    }, void 0, false, {
        fileName: "[project]/app/contextMenu/messagePanel.tsx",
        lineNumber: 25,
        columnNumber: 11
    }, this);
}
_c = MessageActionRoot;
function MobileCM({ action, onClose, onDelete, isChose, onChose }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cloneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [panelTop, setPanelTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClickOutside"])(ref, onClose);
    const { visible, confirm, setConfirm, closeAnimated, confirmDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$useContextMenuBehavior$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContextMenuBehavior"])(action, onClose, onDelete, panelRef);
    // положение панели
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "MobileCM.useLayoutEffect": ()=>{
            if (!cloneRef.current) return;
            const rect = cloneRef.current.getBoundingClientRect();
            setPanelTop(rect.bottom + 8);
        }
    }["MobileCM.useLayoutEffect"], [
        action
    ]);
    const [shiftyY, setShiftyY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "MobileCM.useLayoutEffect": ()=>{
            if (!action || !panelRef.current) return;
            const rect = action.rect;
            const panelHeight = panelRef.current.offsetHeight;
            const viewportH = window.innerHeight;
            const bottomNeed = rect.bottom + panelHeight;
            if (bottomNeed > viewportH) {
                const overflow = bottomNeed - viewportH;
                setShiftyY(overflow);
            } else {
                setShiftyY(0);
            }
        }
    }["MobileCM.useLayoutEffect"], [
        action
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
                fixed inset-0 bg-black/50 z-50 duration-250 ease-out
                select-auto
                ${visible ? 'opacity-100 ' : 'opacity-0 '}
            `,
                onClick: (e)=>closeAnimated(),
                onContextMenu: (e)=>{
                    e.preventDefault();
                }
            }, void 0, false, {
                fileName: "[project]/app/contextMenu/messagePanel.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cloneRef,
                className: `
                fixed z-50 transition-all duration-100 ease-out
                ${visible ? 'opacity-100 scale-105' : 'opacity-0 scale-95'}
            `,
                style: {
                    top: action.rect.top - shiftyY,
                    left: action?.rect.left,
                    width: action?.rect.width,
                    height: action?.type === 'mobile' ? '' : action?.rect.height,
                    transformOrigin: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scale-105 h-full rounded-2xl p-2 bg-white/10 backdrop-blur-2xl shadow-xl",
                    children: action?.message.from_display_id
                }, void 0, false, {
                    fileName: "[project]/app/contextMenu/messagePanel.tsx",
                    lineNumber: 112,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/contextMenu/messagePanel.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: panelRef,
                className: `fixed z-50 transition-all duration-100 ease-out delay-75
                    bg-white/50 backdrop-blur-2xl 
                    border border-black/10 
                    rounded-lg shadow-lg
                    min-w-[140px]
                    select-none
                    ${visible ? 'opacity-100 scale-105' : 'opacity-0 scale-95'}
                `,
                style: {
                    top: panelTop - shiftyY,
                    left: `${action?.rect.left}px`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            setConfirm(true);
                        },
                        onContextMenu: (e)=>{
                            e.preventDefault();
                        },
                        disabled: !action?.message.id,
                        className: "w-full p-2 hover:bg-black/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        children: "Удалить"
                    }, void 0, false, {
                        fileName: "[project]/app/contextMenu/messagePanel.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full p-2 hover:bg-black/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        onClick: (e)=>{
                            e.preventDefault();
                            isChose?.(true);
                            onChose?.(action?.message.id);
                            closeAnimated();
                        },
                        children: "Выбрать"
                    }, void 0, false, {
                        fileName: "[project]/app/contextMenu/messagePanel.tsx",
                        lineNumber: 151,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contextMenu/messagePanel.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this),
            confirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flexC flex-col   bg-linear-to-br from-white/20 to-white/40 z-50 w-90 h-30   backdrop-blur-2xl rounded-xl border border-white/20   ",
                children: [
                    "Удалить у себя?",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "prettyBtn",
                                autoFocus: true,
                                onClick: (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    confirmDelete();
                                },
                                children: "Да"
                            }, void 0, false, {
                                fileName: "[project]/app/contextMenu/messagePanel.tsx",
                                lineNumber: 174,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "prettyBtn",
                                onClick: ()=>{
                                    setConfirm(false);
                                    closeAnimated();
                                },
                                children: "Нет"
                            }, void 0, false, {
                                fileName: "[project]/app/contextMenu/messagePanel.tsx",
                                lineNumber: 185,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/contextMenu/messagePanel.tsx",
                        lineNumber: 173,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contextMenu/messagePanel.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/contextMenu/messagePanel.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(MobileCM, "8FOouKAbWuL13dP4VQD7Xbpi62g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClickOutside"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$useContextMenuBehavior$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContextMenuBehavior"]
    ];
});
_c1 = MobileCM;
function DesktopCM(props) {
    _s1();
    const { action, isChose, onChose, onDelete, onClose } = props;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMine = action?.isMine ?? false;
    const { visible, confirm, setConfirm, closeAnimated, confirmDelete, panelState, setPanelState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$useContextMenuBehavior$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContextMenuBehavior"])(action, onClose, onDelete, panelRef, isMine);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClickOutside"])(ref, closeAnimated);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: panelRef,
                className: `fixed z-50 transition-opacity duration-100 ease-in-out
                    flexC flex-col
                    bg-white/50 backdrop-blur-2xl 
                    border border-black/10 
                    rounded-lg shadow-lg
                    min-w-[140px]
                    select-none text-[12px]
                    ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `,
                style: {
                    top: panelState.t,
                    left: panelState.l,
                    transform: panelState.transform,
                    transformOrigin: panelState.transformOrigin,
                    height: action?.rect.height
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            setConfirm(true);
                        },
                        onContextMenu: (e)=>{
                            e.preventDefault();
                        },
                        disabled: !action?.message.id,
                        className: "w-full h-full p-2 hover:bg-black/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        children: "Удалить"
                    }, void 0, false, {
                        fileName: "[project]/app/contextMenu/messagePanel.tsx",
                        lineNumber: 245,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full h-full p-2 hover:bg-black/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        onClick: (e)=>{
                            e.preventDefault();
                            isChose?.(true);
                            onChose?.(action?.message.id);
                            closeAnimated();
                        },
                        children: "Выбрать"
                    }, void 0, false, {
                        fileName: "[project]/app/contextMenu/messagePanel.tsx",
                        lineNumber: 260,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contextMenu/messagePanel.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, this),
            confirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flexC flex-col   bg-linear-to-br from-white/20 to-white/40 z-50 w-90 h-30   backdrop-blur-2xl rounded-xl border border-white/20   ",
                children: [
                    "Удалить у себя?",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "prettyBtn",
                                autoFocus: true,
                                onClick: (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    confirmDelete();
                                },
                                children: "Да"
                            }, void 0, false, {
                                fileName: "[project]/app/contextMenu/messagePanel.tsx",
                                lineNumber: 283,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "prettyBtn",
                                onClick: ()=>{
                                    setConfirm(false);
                                    closeAnimated();
                                },
                                children: "Нет"
                            }, void 0, false, {
                                fileName: "[project]/app/contextMenu/messagePanel.tsx",
                                lineNumber: 294,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/contextMenu/messagePanel.tsx",
                        lineNumber: 282,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contextMenu/messagePanel.tsx",
                lineNumber: 275,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/contextMenu/messagePanel.tsx",
        lineNumber: 219,
        columnNumber: 8
    }, this);
}
_s1(DesktopCM, "x8fMLo9ftMkdboY2Nuye622/sAo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$useContextMenuBehavior$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContextMenuBehavior"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClickOutside"]
    ];
});
_c2 = DesktopCM;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MessageActionRoot");
__turbopack_context__.k.register(_c1, "MobileCM");
__turbopack_context__.k.register(_c2, "DesktopCM");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonMain/AnimatedButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedButton",
    ()=>AnimatedButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function AnimatedButton({ children, openModal }) {
    _s();
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
                fileName: "[project]/app/anonMain/AnimatedButton.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                onClick: ()=>openModal(),
                onMouseEnter: ()=>isHovering.current = true,
                onMouseLeave: ()=>isHovering.current = false,
                className: "relative flex items-center justify-center z-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/anonMain/AnimatedButton.tsx",
                lineNumber: 153,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/anonMain/AnimatedButton.tsx",
        lineNumber: 147,
        columnNumber: 9
    }, this);
}
_s(AnimatedButton, "1TcZ0lI20Me3TK4Zz7/zjkLn3SI=");
_c = AnimatedButton;
var _c;
__turbopack_context__.k.register(_c, "AnimatedButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/things/hooks/useCheckMsg.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMessageRead",
    ()=>useMessageRead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-client] (ecmascript)");
;
function useMessageRead() {
    const markAsRead = async (messageId, userId)=>{
        console.log("Trying to mark as read:", {
            messageId,
            userId
        });
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages").update({
            is_checked: true
        }).eq("id", messageId).eq("to_user", userId);
        if (error) {
            console.error("Error marking message as read:", error);
        }
    };
    const getReadStatus = async (messageId)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("messages").select('is_checked').eq('id', messageId).single();
            if (error) throw error;
            return data.is_checked;
        } catch (err) {
            console.error(err);
            return false;
        }
    };
    return {
        markAsRead,
        getReadStatus
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonMain/useDeleteMessage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeleteMessage",
    ()=>useDeleteMessage
]);
function useDeleteMessage(props) {
    const { setChoosenMsg, setAction, setIsChoose, choosenMsg, deleteMessage, refresh } = props;
    const handleDeleteMessage = async (ids)=>{
        try {
            if (!ids) {
                console.warn("No message ID provided");
                return;
            }
            await deleteMessage(ids);
            await refresh();
            setAction(null);
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    };
    return {
        handleDeleteMessage
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonMain/DialogResizehandler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogResizehandler",
    ()=>DialogResizehandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function DialogResizehandler(props) {
    _s();
    const color = 'bg-linear-to-br from-white/20 to-white/10';
    const handlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DialogResizehandler.useEffect": ()=>{
            if (!isDragging || !props.dialogPanelRef.current || !handlerRef.current) return;
            const panel = props.dialogPanelRef.current;
            const handle = handlerRef.current;
            const panelLeft = panel.getBoundingClientRect().left;
            const onMove = {
                "DialogResizehandler.useEffect.onMove": (e)=>{
                    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
                    const newWidth = Math.max(200, clientX - panelLeft);
                    panel.style.width = `${newWidth}px`;
                    handle.style.left = `${newWidth}px`;
                }
            }["DialogResizehandler.useEffect.onMove"];
            const onUp = {
                "DialogResizehandler.useEffect.onUp": ()=>{
                    setIsDragging(false);
                    setIsHovered(false);
                }
            }["DialogResizehandler.useEffect.onUp"];
            window.addEventListener('mousemove', onMove);
            window.addEventListener('mouseup', onUp);
            return ({
                "DialogResizehandler.useEffect": ()=>{
                    window.removeEventListener('mousemove', onMove);
                    window.removeEventListener('mouseup', onUp);
                }
            })["DialogResizehandler.useEffect"];
        }
    }["DialogResizehandler.useEffect"], [
        isDragging,
        props.dialogPanelRef
    ]);
    if (!props.dialogPanelRef.current) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: handlerRef,
        className: `fixed top-0 h-full w-1 ${color} z-20 cursor-ew-resize
            ${isHovered || isDragging ? 'opacity-100' : 'opacity-0'}
            `,
        style: {
            left: props.dialogPanelRef.current.clientWidth
        },
        onPointerEnter: (e)=>{
            setIsHovered(true);
        },
        onPointerLeave: (e)=>{
            !isDragging && setIsHovered(false);
        },
        onMouseDown: (e)=>{
            setIsDragging(true);
        }
    }, void 0, false, {
        fileName: "[project]/app/anonMain/DialogResizehandler.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_s(DialogResizehandler, "ZEqt8nvqL5Uw32XaPW1J86Y6bl8=");
_c = DialogResizehandler;
var _c;
__turbopack_context__.k.register(_c, "DialogResizehandler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonMain/useShatterMessage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useShatterMessage",
    ()=>useShatterMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useShatterMessage(options) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const systemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const PIXEL_SIZE = options?.pixelSize ?? 2;
    const GRAVITY = options?.gravity ?? 0.03;
    const FADE = options?.fade ?? 0.035;
    const shatterMessages = async (elements, onAllDone)=>{
        if (!canvasRef.current || elements.length === 0) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", {
            willReadFrequently: true
        });
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        for (const el of elements){
            const rect = el.getBoundingClientRect();
            const renderCanvas = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCanvas"](el, {
                width: rect.width,
                height: rect.height,
                style: {
                    transform: "none"
                }
            });
            const rctx = renderCanvas.getContext("2d");
            const { data } = rctx.getImageData(0, 0, renderCanvas.width, renderCanvas.height);
            const particles = [];
            for(let y = 0; y < renderCanvas.height; y += PIXEL_SIZE){
                for(let x = 0; x < renderCanvas.width; x += PIXEL_SIZE){
                    const i = (y * renderCanvas.width + x) * 4;
                    const a = data[i + 3];
                    if (a > 50) {
                        particles.push({
                            x: rect.left + x / renderCanvas.width * rect.width,
                            y: rect.top + y / renderCanvas.height * rect.height,
                            vx: Math.random() * 1.7,
                            vy: (Math.random() - 0.5) * -0.8,
                            alpha: 1,
                            r: data[i],
                            g: data[i + 1],
                            b: data[i + 2]
                        });
                    }
                }
            }
            el.style.visibility = "hidden";
            systemsRef.current.push({
                particles
            });
        }
        if (!animatingRef.current) {
            animatingRef.current = true;
            requestAnimationFrame(()=>animate(ctx, canvas, onAllDone));
        }
    };
    const animate = (ctx, canvas, onAllDone)=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        systemsRef.current = systemsRef.current.filter((system)=>{
            system.particles.forEach((p)=>{
                p.vy += GRAVITY;
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= FADE;
                if (p.alpha > 0) {
                    ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.alpha})`;
                    ctx.fillRect(p.x, p.y, PIXEL_SIZE, PIXEL_SIZE);
                }
            });
            system.particles = system.particles.filter((p)=>p.alpha > 0);
            return system.particles.length > 0;
        });
        if (systemsRef.current.length > 0) {
            requestAnimationFrame(()=>animate(ctx, canvas, onAllDone));
        } else {
            animatingRef.current = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            onAllDone();
        }
    };
    return {
        canvasRef,
        shatterMessages
    };
}
_s(useShatterMessage, "cJjmSn31aY72Te6WFvVWFZhBfcY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
"[project]/app/modal/modalProfile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalProfile",
    ()=>ModalProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSetAnon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useSetAnon.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function ModalProfile({ dialog, onClose, fromUser, refresh }) {
    _s();
    const [isAnon, setIsAnon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [anonUsedOnce, setAnonUsedOnce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setAnon, checkAnon, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSetAnon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAnon"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalProfile.useEffect": ()=>{
            if (!fromUser || !dialog) return;
            const load = {
                "ModalProfile.useEffect.load": async ()=>{
                    const data = await checkAnon(fromUser, dialog.userId);
                    if (!data) return;
                    setIsAnon(data.isAnon);
                    setAnonUsedOnce(data.anonUsedOnce);
                }
            }["ModalProfile.useEffect.load"];
            load();
        }
    }["ModalProfile.useEffect"], [
        dialog,
        fromUser
    ]);
    if (!dialog) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "   fixed inset-0 z-50   flex items-center justify-center   bg-black/60 backdrop-blur-sm   animate-fadeIn   ",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "   w-full max-w-md   rounded-2xl   bg-[#12080b]   border border-white/10   shadow-2xl   p-6   animate-scaleIn   text-white   ",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-lg font-bold",
                                    children: dialog.displayId.charAt(1).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: dialog.displayId
                                        }, void 0, false, {
                                            fileName: "[project]/app/modal/modalProfile.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-white/50",
                                            children: "Профиль пользователя"
                                        }, void 0, false, {
                                            fileName: "[project]/app/modal/modalProfile.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/modal/modalProfile.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-white/50 hover:text-white transition",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/app/modal/modalProfile.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/modal/modalProfile.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "flex flex-col gap-5",
                    onSubmit: async (e)=>{
                        e.preventDefault();
                        try {
                            await setAnon({
                                from_user_id: fromUser,
                                to_user_id: dialog.userId,
                                is_anon: isAnon
                            });
                            refresh();
                            onClose();
                        } catch  {}
                    },
                    children: [
                        !loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-start gap-3 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    className: "   mt-1   w-4 h-4   accent-red-500   ",
                                    checked: isAnon,
                                    disabled: loading || anonUsedOnce && !isAnon,
                                    onChange: (e)=>setIsAnon(e.target.checked)
                                }, void 0, false, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 107,
                                    columnNumber: 21
                                }, this),
                                anonUsedOnce && !isAnon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-white/80",
                                    children: [
                                        "Анонимность для этого пользователя отключена",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-white/40",
                                            children: "Применяется только один раз"
                                        }, void 0, false, {
                                            fileName: "[project]/app/modal/modalProfile.tsx",
                                            lineNumber: 122,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-white/80",
                                    children: [
                                        "Анонимность для пользователя",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-white/40",
                                            children: "Применяется только один раз"
                                        }, void 0, false, {
                                            fileName: "[project]/app/modal/modalProfile.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 128,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/modal/modalProfile.tsx",
                            lineNumber: 106,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-white/80",
                            children: "Загрузка..."
                        }, void 0, false, {
                            fileName: "[project]/app/modal/modalProfile.tsx",
                            lineNumber: 139,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "   px-4 py-2 rounded-lg   bg-white/5 hover:bg-white/10   text-sm transition   ",
                                    children: "Отмена"
                                }, void 0, false, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "   px-4 py-2 rounded-lg   bg-red-500 hover:bg-red-600   text-sm font-medium   transition   ",
                                    children: "Сохранить"
                                }, void 0, false, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/modal/modalProfile.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/modal/modalProfile.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/modal/modalProfile.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/modal/modalProfile.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(ModalProfile, "SZJ4NcbarstgMxsWU6iZGZxsuH0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSetAnon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetAnon"]
    ];
});
_c = ModalProfile;
var _c;
__turbopack_context__.k.register(_c, "ModalProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonMain/chat/HelperMsg.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnonLoveGuide",
    ()=>AnonLoveGuide,
    "HelperMsg",
    ()=>HelperMsg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function HelperMsg() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const idHelper = "helper";
    const avatar = idHelper.charAt(1).toUpperCase();
    const title = "Бот помощник";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "p-2 rounded-lg w-full ",
                onClick: ()=>{
                    setOpen(true);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col p-3 items-start relative gap-2 rounded-2xl transition-colors 
                    border border-white/5
                    bg-linear-to-r from-[#2d0715] via-[#1a040c] to-[#12080b]
                `,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flexC gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex w-8 h-8 items-center justify-center rounded-full text-lg font-bold transition-all
                            bg-linear-to-b from-[#502020] to-[#2d0715] backdrop-blur-md
                            hover:from-[#b90e0e] hover:to-[#502020] hover:border hover:border-white/40
                        `,
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                    // setOpenModalProfile(dialog);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: avatar
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                        lineNumber: 44,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                    lineNumber: 34,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                    lineNumber: 50,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                            lineNumber: 32,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white/50",
                            children: "Нажми на меня"
                        }, void 0, false, {
                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                            lineNumber: 53,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                    lineNumber: 26,
                    columnNumber: 13
                }, this)
            }, idHelper, false, {
                fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this),
            open && // <div className="fixed inset-0 bg-black/50 rounded-xl backdrop-blur-xs">
            //     <div className="fixed inset-10 bg-black">
            //         <div className="absolute top-2 right-2 rounded-2xl border border-white/40 prettyBtnChat">X</div>
            //     </div>
            // </div>
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnonLoveGuide, {
                onClose: ()=>setOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(HelperMsg, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = HelperMsg;
function AnonLoveGuide({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-fadeIn   overflow-y-auto    ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "   relative w-full max-w-lg    rounded-2xl   border border-white/10   bg-gradient-to-b from-[#14070c] via-[#0f0509] to-black   shadow-2xl   animate-scaleIn   ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "   absolute right-3 top-3   w-8 h-8   flex items-center justify-center   rounded-full   border border-white/20   text-white/70   hover:text-white   hover:border-white/40   hover:bg-white/10   transition-all   ",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:p-6 p-1 space-y-6 mt-10 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent",
                                    children: "💌 Добро пожаловать в AnonLove"
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/60 text-sm",
                                    children: "место для анонимных чувств и неожиданных сообщений"
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-white/90",
                                            children: "🆔 Уникальный ID"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/60 text-sm",
                                            children: "У каждого пользователя есть свой ID. Найди чей-то ID, чтобы написать ему. Это не всегда просто… и именно в этом интерес."
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-white/90",
                                            children: "✍️ Необычные сообщения"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/60 text-sm",
                                            children: "Используй текст и GIF, чтобы создать красивое сообщение. Добавь воображение и сделай его особенным."
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-white/90",
                                            children: "🎭 Анонимность — один шанс"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/60 text-sm",
                                            children: "Ты можешь быть анонимным. Но если отключишь анонимность — включить её снова уже не получится."
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-white/90",
                                            children: "⭐ Рейтинг"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/60 text-sm",
                                            children: "Чем больше уникальных сообщений ты получаешь — тем выше твой рейтинг."
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "   text-center   pt-4   border-t border-white/10   ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/50 text-sm",
                                children: "возможно, кто-то уже ищет твой ID"
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/anonMain/chat/HelperMsg.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c1 = AnonLoveGuide;
var _c, _c1;
__turbopack_context__.k.register(_c, "HelperMsg");
__turbopack_context__.k.register(_c1, "AnonLoveGuide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonMain/chat/Chat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManagerChat",
    ()=>ManagerChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/utils/parseDate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$ReadIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/createcard/components/ReadIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$Rating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/createcard/components/Rating.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$messagePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/contextMenu/messagePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$AnimatedButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/AnimatedButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useCheckMsg$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useCheckMsg.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$useDeleteMessage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/useDeleteMessage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useSwipe.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$DialogResizehandler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/DialogResizehandler.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$useShatterMessage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/useShatterMessage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$modal$2f$modalProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/modal/modalProfile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$chat$2f$HelperMsg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/chat/HelperMsg.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function ManagerChat(props) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { userId, dialogs, setOpenProfile, setOpenChat, openChat, isMobile, refresh } = props;
    const { markAsRead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useCheckMsg$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessageRead"])();
    const [activeChatUserId, setActiveChatUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDialogId, setActiveDialogId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDialog, setActiveDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // modalProfileUser
    const [openModalProfile, setOpenModalProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // state модалка профиля
    // messagePanel
    const msgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeMenu = ()=>{
        setAction(null);
        setSelectTouched(null);
    };
    const cancelTouch = ()=>{
        clearInterval(timer.current);
        setSelectTouched(null);
    };
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isChoose, setIsChoose] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [choosenMsg, setChoosenMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectTouched, setSelectTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    ////////
    // dialogResizeHandler (только для desktop)
    const dialogPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { canvasRef, shatterMessages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$useShatterMessage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShatterMessage"])({});
    // синхронизация activeDialog с dialogs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManagerChat.useEffect": ()=>{
            if (!activeDialogId) {
                setActiveDialog(null);
                return;
            }
            const found = dialogs.find({
                "ManagerChat.useEffect": (d)=>d.userId === activeDialogId
            }["ManagerChat.useEffect"]) || null;
            setActiveDialog(found);
        }
    }["ManagerChat.useEffect"], [
        dialogs,
        activeDialogId
    ]);
    const { handleDeleteMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$useDeleteMessage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteMessage"])({
        setChoosenMsg,
        setAction,
        setIsChoose,
        choosenMsg,
        deleteMessage: props.deleteMessage,
        refresh: props.refresh
    });
    const [deletingMsg, setDeletingMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const bubbleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const handleRemoveMsg = async (ids)=>{
        if (!ids.length) return;
        const bubbles = ids.map((id)=>bubbleRef.current[id]).filter((el)=>Boolean(el));
        const wrappers = ids.map((id)=>wrapperRef.current[id]).filter((el)=>Boolean(el));
        wrappers.forEach((el)=>{
            el.style.height = `${el.offsetHeight}px`;
        });
        shatterMessages(bubbles, async ()=>{
            requestAnimationFrame(()=>{
                setDeletingMsg([
                    ...ids
                ]);
            });
            await Promise.all(wrappers.map((el)=>new Promise((resolve)=>{
                    const onEnd = (e)=>{
                        if (e.propertyName !== 'height') return;
                        el.removeEventListener('transitionend', onEnd);
                        resolve();
                    };
                    el.addEventListener('transitionend', onEnd);
                })));
            await handleDeleteMessage(ids);
            setChoosenMsg([]);
            setIsChoose(false);
            setDeletingMsg([]);
        });
    };
    // swipe handlers для mobile
    const profileSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipe"])({
        onSwipeLeft: {
            "ManagerChat.useSwipe[profileSwipe]": ()=>{
                if (!isMobile) return;
                setOpenProfile(false);
            }
        }["ManagerChat.useSwipe[profileSwipe]"],
        onSwipeRight: {
            "ManagerChat.useSwipe[profileSwipe]": ()=>{
                if (!isMobile) return;
                setOpenProfile(true);
            }
        }["ManagerChat.useSwipe[profileSwipe]"]
    });
    const chatSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipe"])({
        onSwipeRight: {
            "ManagerChat.useSwipe[chatSwipe]": ()=>{
                if (!isMobile) return;
                setOpenChat(false);
            }
        }["ManagerChat.useSwipe[chatSwipe]"]
    });
    // при изменение разрешения автоматический ресайз
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ManagerChat.useLayoutEffect": ()=>{
            if (!isMobile) {
                dialogPanelRef.current.style.width = "50%";
                return;
            }
            ;
            if (isMobile) {
                dialogPanelRef.current.style.width = "100vw";
                return;
            }
        }
    }["ManagerChat.useLayoutEffect"], [
        isMobile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `flex overflow-hidden bg-[#12080b] select-none ${isMobile ? "" : "h-screen"}`,
        ...isMobile && !openChat ? profileSwipe : {},
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dialogPanelRef,
                className: `bg-[#12080b] overflow-y-auto overflow-x-hidden
                    ${isMobile ? `absolute inset-0 transition-transform duration-300 ease-out will-change-transform ${openChat ? "-translate-x-full" : "translate-x-0"}` : "relative w-1/2 border-r border-[#d91c558b]"}
                `,
                style: {
                    overscrollBehavior: "contain",
                    touchAction: "pan-y"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full relative backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenProfile(true),
                                className: "absolute left-2 top-1/2 -translate-y-1/2 prettyBtnChat",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 32 32",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M4 8h24M4 16h24M4 24h24"
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 197,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                    lineNumber: 191,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 187,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 rounded-md w-full text-center flex justify-center items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "medium font-semibold",
                                    children: "Чаты"
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                    lineNumber: 209,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 208,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-1/2 translate-y-1/2 right-2 prettyBtnChat",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$AnimatedButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedButton"], {
                                    openModal: ()=>{
                                        router.push(`createcard?type=send`);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 32 32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M2 4h28v18H16l-8 7v-7H2Z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                            lineNumber: 224,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 218,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                    lineNumber: 213,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 212,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                        lineNumber: 186,
                        columnNumber: 17
                    }, this),
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$DialogResizehandler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogResizehandler"], {
                        dialogPanelRef: dialogPanelRef
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                        lineNumber: 238,
                        columnNumber: 31
                    }, this),
                    dialogs.map((dialog)=>{
                        const avatar = dialog.displayId.charAt(1).toUpperCase();
                        const title = dialog.displayId;
                        const timeSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(dialog.lastMessage.created_at);
                        const unread = dialog.messages.filter((el)=>!el.is_checked && el.from_user !== userId).length;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-2 rounded-lg w-full",
                            onClick: ()=>{
                                setActiveDialogId(dialog.userId);
                                setActiveDialog(dialog);
                                setActiveChatUserId(dialog.displayId);
                                if (isMobile) setOpenChat(true);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex p-3 items-center relative gap-2 rounded-2xl transition-colors
                                    ${dialog.userId !== activeDialogId && !isMobile ? "bg-[#5b5b5ba2]" : "bg-[#949494a2]"}
                                `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex w-8 h-8 items-center justify-center rounded-full text-lg font-bold transition-all
                                        bg-linear-to-b from-red-500 to-red-700 backdrop-blur-md
                                        hover:from-red-600 hover:to-red-800 hover:border hover:border-white/40
                                    `,
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setOpenModalProfile(dialog);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: avatar
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                            lineNumber: 277,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 267,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 283,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "absolute right-2 top-3 flexC text-center text-gray-400 text-[10px]",
                                        children: timeSend
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 286,
                                        columnNumber: 33
                                    }, this),
                                    unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "absolute right-2 bottom-1 flexC text-center    unreadMsg   ",
                                        children: unread
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 291,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 257,
                                columnNumber: 29
                            }, this)
                        }, dialog.userId, false, {
                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                            lineNumber: 247,
                            columnNumber: 25
                        }, this);
                    }),
                    dialogs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$chat$2f$HelperMsg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelperMsg"], {}, void 0, false, {
                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                        lineNumber: 305,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                lineNumber: 169,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overflow-y-auto bg-[#0e0406]
                    ${isMobile ? `absolute inset-0 bg-[#12080b] transition-transform duration-300 ease-in-out will-change-transform 
                        ${openChat ? "translate-x-0" : "translate-x-full"}` : "flex-1 flex flex-col"}
                `,
                ...isMobile ? chatSwipe : {},
                children: [
                    activeChatUserId && !isChoose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 w-full flexC py-2 z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `flexC z-10 prettyBtnChat
                                ${isMobile ? '' : 'opacity-0 pointer-events-none'}`,
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
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 335,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                    lineNumber: 329,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 324,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flexC mx-auto text-[15px] prettyBtnChat",
                                children: [
                                    activeChatUserId,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$Rating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rating"], {
                                        value: activeDialog?.rating
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 344,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 342,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `flexC prettyBtnChat
                                ${isMobile ? "justify-self-center" : "justify-self-end w-20"}
                            `,
                                onClick: ()=>{
                                    router.push(`createcard?type=send&to=${encodeURIComponent(activeChatUserId ?? "")}`);
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
                                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                                lineNumber: 365,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m8.363 8.137l-3 .54l.5-3.04l4.73-4.71a.999.999 0 0 1 1.42 0l1.06 1.06a1.001 1.001 0 0 1 0 1.42z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                                lineNumber: 366,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 363,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                    lineNumber: 357,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 347,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                        lineNumber: 323,
                        columnNumber: 21
                    }, this),
                    isChoose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 w-full flex items-start justify-between z-20 text-[15px] p-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flexC prettyBtn",
                                onClick: ()=>{
                                    setIsChoose(false);
                                    setChoosenMsg([]);
                                },
                                children: "Назад"
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 375,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flexC prettyBtn",
                                onClick: ()=>{
                                    handleRemoveMsg(choosenMsg);
                                },
                                children: "Удалить"
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 385,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                        lineNumber: 374,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative p-2 space-y-2 ",
                        children: activeDialog?.messages.map((message, i)=>{
                            const avatar = message.from_display_id.charAt(1).toUpperCase();
                            const nameLabel = message.from_display_id;
                            const isMine = message.from_user === userId;
                            const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(message.created_at);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>{
                                    wrapperRef.current[message.id] = el;
                                },
                                className: `flex flex-col relative w-full transition hover:bg-white/10 select-none
                                    ${isMine ? "items-end" : "items-start"} 
                                    message-wrapper ${deletingMsg.includes(message.id) ? "message--collapsing" : ""}
                                `,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    // ref={msgRef}
                                    ref: (el)=>{
                                        bubbleRef.current[message.id] = el;
                                    },
                                    className: `relative flex flex-col items-center justify-center p-2 gap-2 w-1/2 rounded-2xl cursor-pointer transition-transform
                                        ${!isMine ? "bg-linear-to-b from-[#ff00666d] to-[#ec015f5d]" : "bg-linear-to-b from-white/60 to-white/40"}
                                        ${selectTouched === message.id && isMobile ? "scale-105" : ""}
                                        ${selectTouched === message.id && !isMobile ? isMine ? "border-l" : "border-r" : ""}
                                        message ${deletingMsg.includes(message.id) ? "message--deleting" : ""}
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
                                                markAsRead(message.id, userId).then(()=>{
                                                    setActiveDialog((d)=>d && {
                                                            ...d,
                                                            messages: d.messages.map((m)=>m.id === message.id ? {
                                                                    ...m,
                                                                    is_checked: true
                                                                } : m)
                                                        });
                                                });
                                            }
                                            router.push(`createcard?isMine=${isMine}&id=${encodeURIComponent(message.id)}&type=recieve&to=${encodeURIComponent(message?.from_display_id ?? "")}`);
                                        }
                                    },
                                    onContextMenu: (e)=>{
                                        if (isMobile) return;
                                        e.preventDefault();
                                        const target = e.currentTarget;
                                        const rect = target.getBoundingClientRect();
                                        setSelectTouched(message.id);
                                        setAction({
                                            message,
                                            rect,
                                            type: "desktop",
                                            isMine
                                        });
                                    },
                                    onPointerDown: (e)=>{
                                        if (!isMobile || isChoose) return;
                                        const target = e.currentTarget;
                                        if (e.pointerType === "touch") {
                                            setSelectTouched(message.id);
                                            timer.current = window.setTimeout(()=>{
                                                const rect = target.getBoundingClientRect();
                                                setAction({
                                                    message,
                                                    rect,
                                                    type: "mobile",
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
                                                    className: "md:w-6 md:h-6 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-md font-bold shrink-0",
                                                    children: avatar
                                                }, void 0, false, {
                                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold medium",
                                                            children: nameLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "small line-clamp-2",
                                                            children: ``
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                            lineNumber: 476,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] text-[#cdcdcd]",
                                            children: date
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                            lineNumber: 487,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$ReadIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadIndicator"], {
                                            isRead: message.is_checked,
                                            isMine: isMine
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                            lineNumber: 489,
                                            columnNumber: 37
                                        }, this),
                                        isChoose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute w-3 h-3 rounded-full border
                                                ${!isMine ? "-right-10" : "-left-10"}
                                                ${isChoose ? "opacity-100 " : "opacity-0"}
                                                ${choosenMsg.map((msg)=>msg).includes(message.id) ? "bg-white" : ""}
                                            `
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                            lineNumber: 492,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                    lineNumber: 413,
                                    columnNumber: 33
                                }, this)
                            }, message.id, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 404,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                        lineNumber: 396,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                lineNumber: 311,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute top-0 left-0 pointer-events-none overflow-visible w-screen h-screen"
            }, void 0, false, {
                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                lineNumber: 508,
                columnNumber: 13
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$messagePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageActionRoot"], {
                action: action,
                onClose: ()=>{
                    closeMenu();
                    setSelectTouched(null);
                },
                onDelete: (id)=>{
                    handleRemoveMsg([
                        ...choosenMsg,
                        id
                    ]);
                },
                isChose: setIsChoose,
                onChose: (id)=>setChoosenMsg((prev)=>[
                            ...prev,
                            id
                        ])
            }, void 0, false, {
                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                lineNumber: 517,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$modal$2f$modalProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalProfile"], {
                dialog: openModalProfile,
                onClose: ()=>{
                    setOpenModalProfile(null);
                },
                fromUser: userId,
                refresh: ()=>refresh()
            }, void 0, false, {
                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                lineNumber: 532,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/anonMain/chat/Chat.tsx",
        lineNumber: 163,
        columnNumber: 9
    }, this);
}
_s(ManagerChat, "Azjfrs91BU1K9sv907f2VHneQYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useCheckMsg$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessageRead"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$useShatterMessage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShatterMessage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$useDeleteMessage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteMessage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipe"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipe"]
    ];
});
_c = ManagerChat;
var _c;
__turbopack_context__.k.register(_c, "ManagerChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/things/hooks/useAccountChange.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAccountChange",
    ()=>useAccountChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-client] (ecmascript)");
;
function useAccountChange(p) {
    const changePassword = async (pass)=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.updateUser({
            password: pass
        });
        if (error) console.error(error);
        return data;
    };
    const changeLogin = async (newLogin)=>{
        try {
            const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!user) throw new Error("User not found");
            const { data: existingUser } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").select('id_user').eq("username", newLogin).maybeSingle();
            if (existingUser) {
                return {
                    succes: false,
                    message: "Пользователь с таким логином уже существует"
                };
            }
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("users").update({
                username: newLogin
            }).eq("id_user", user?.id);
            if (error) throw error;
            return {
                succes: true
            };
        } catch (err) {
            console.error(err);
            return {
                succes: false,
                message: err
            };
        }
    };
    return {
        changePassword,
        changeLogin
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/things/components/Notify.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Notify",
    ()=>Notify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Notify({ message }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [displayMsg, setDisplayMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notify.useEffect": ()=>{
            if (!message) return;
            setDisplayMsg(message);
            setVisible(true);
            const t = setTimeout({
                "Notify.useEffect.t": ()=>{
                    setVisible(false);
                    const hide = setTimeout({
                        "Notify.useEffect.t.hide": ()=>{
                            setDisplayMsg(null);
                        }
                    }["Notify.useEffect.t.hide"], 300);
                    return ({
                        "Notify.useEffect.t": ()=>{
                            clearTimeout(hide);
                        }
                    })["Notify.useEffect.t"];
                }
            }["Notify.useEffect.t"], 1000);
            return ({
                "Notify.useEffect": ()=>{
                    clearTimeout(t);
                }
            })["Notify.useEffect"];
        }
    }["Notify.useEffect"], [
        message
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `
            absolute top-4 right-4 z-50
            px-4 py-2 rounded-md shadow-lg
            border border-white/10 bg-black/60 backdrop-blur-md
            text-white
            transition-all duration-200 ease-in-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
        `,
        children: displayMsg
    }, void 0, false, {
        fileName: "[project]/app/things/components/Notify.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_s(Notify, "kDry9ynwcNC2V7/sMZNXZgbhElw=");
_c = Notify;
var _c;
__turbopack_context__.k.register(_c, "Notify");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PersonalMenu",
    ()=>PersonalMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PersonalMenu(p) {
    const btns = [
        {
            text: "Отмена",
            onClick: ()=>{
                p.actions.setIsChangePassword(false);
                p.actions.setIsChangeLogin(false);
                p.actions.setStartedChange(false);
            }
        },
        {
            text: "Применить",
            onClick: ()=>p.actions.submit()
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-start flex-col gap-3 px-4 py-3 relative flex-1
            animate-[menuIn_100ms_ease-out_forwards]
        `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flexC w-full relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btnWP absolute p-1 px-3 left-3 ",
                        onClick: ()=>p.actions.setNameMenuOpen(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                fill: "none",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m8 5l-5 5l5 5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                                        lineNumber: 48,
                                        columnNumber: 196
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 10h8c5.523 0 10 4.477 10 10v1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                                        lineNumber: 48,
                                        columnNumber: 221
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                                lineNumber: 48,
                                columnNumber: 98
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                            lineNumber: 48,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-md justify-self-center",
                        children: "Личная информация"
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                lineNumber: 45,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-4 -top-2 prettyLabelInput",
                        children: "Логин"
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white/80
              ${p.state.startedChange ? "hidden" : ""}`,
                        disabled: p.state.startedChange,
                        onClick: ()=>p.actions.toggleChange('login'),
                        children: "Изменить"
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: p.state.login,
                        disabled: !p.state.isChangeLogin,
                        ref: p.state.loginInputRef,
                        onChange: (e)=>{
                            p.actions.setLogin(e.target.value);
                        },
                        className: "prettyInput pt-4 px-4"
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                lineNumber: 56,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-4 -top-2 prettyLabelInput",
                        children: "Пароль"
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white/80
              ${p.state.startedChange ? "hidden" : ""}`,
                        disabled: p.state.startedChange,
                        onClick: ()=>p.actions.toggleChange('password'),
                        children: "Изменить"
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: p.state.password,
                        disabled: !p.state.isChangePassword,
                        ref: p.state.passwordInputRef,
                        onChange: (e)=>{
                            p.actions.setPassword(e.target.value);
                        },
                        className: `prettyInput pt-4 px-4 ${p.state.isChangePassword ? "" : ""}`
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                lineNumber: 73,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full gap-2",
                children: btns.map((btn, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `
                  ${p.state.isChangeLogin || p.state.isChangePassword ? "opacity-100" : "opacity-0"}
                  w-full p-3 rounded-2xl
                  bg-white/10 hover:bg-white/15
                  transition-all
                `,
                        onClick: btn.onClick,
                        children: btn.text
                    }, i, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                        lineNumber: 91,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
                lineNumber: 89,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_c = PersonalMenu;
var _c;
__turbopack_context__.k.register(_c, "PersonalMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfilePanel",
    ()=>ProfilePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useClickOutside.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useAccountChange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useAccountChange.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$components$2f$Notify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/components/Notify.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$ProfileMenu$2f$menus$2f$PersonalMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/ProfileMenu/menus/PersonalMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$chat$2f$HelperMsg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/chat/HelperMsg.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const ProfilePanel = ({ open, isMobile = false, swipeProps, profile, user, onClose, onSignOut, onTelegramLink, refreshProfile })=>{
    _s();
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const passwordInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loginInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const divPassRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [nameMenuOpen, setNameMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isChangePassword, setIsChangePassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [login, setLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isChangeLogin, setIsChangeLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [succesMessage, setSuccesMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [startedChange, setStartedChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { changePassword, changeLogin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useAccountChange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccountChange"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClickOutside"])(divPassRef, {
        "ProfilePanel.useClickOutside": ()=>{
            setIsChangePassword(false);
        }
    }["ProfilePanel.useClickOutside"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePanel.useEffect": ()=>{
            if (profile) {
                setLogin(profile.username);
            }
        }
    }["ProfilePanel.useEffect"], [
        profile
    ]);
    const toggleChange = (name)=>{
        setStartedChange(true);
        if (name === "login") setIsChangeLogin((prev)=>!prev);
        else setIsChangePassword((prev)=>!prev);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePanel.useEffect": ()=>{
            if (isChangePassword) {
                passwordInputRef.current?.focus();
                passwordInputRef.current?.select();
            }
            if (isChangeLogin) {
                loginInputRef.current?.focus();
                loginInputRef.current?.select();
            }
        }
    }["ProfilePanel.useEffect"], [
        isChangePassword,
        isChangeLogin
    ]);
    const submit = async ()=>{
        setSuccesMessage(null);
        if (isChangePassword) {
            await changePassword(password);
        }
        if (isChangeLogin) {
            const res = await changeLogin(login);
            if (res.succes) {
                refreshProfile();
                setSuccesMessage("Логин успешно изменен");
            } else {
                setSuccesMessage("Пользователь с таким логином уже существует");
            }
        }
        setIsChangePassword(false);
        setIsChangeLogin(false);
        setStartedChange(false);
    };
    const personalState = {
        startedChange,
        isChangeLogin,
        login,
        password,
        isChangePassword,
        loginInputRef,
        passwordInputRef
    };
    const personalActions = {
        setLogin,
        setPassword,
        setIsChangeLogin,
        setIsChangePassword,
        setStartedChange,
        toggleChange,
        submit,
        setNameMenuOpen
    };
    const btns_main = [
        {
            t: "Личные данные",
            value: "personal"
        },
        {
            t: "Настройки",
            value: "settings"
        },
        {
            t: "Помощь",
            value: "help"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...isMobile ? swipeProps : {},
        ref: divPassRef,
        className: `
        absolute flex flex-col
        bg-black/40 backdrop-blur-xl
        transition-transform duration-200 ease-out
        will-change-transform
        ${open ? "translate-x-0" : "-translate-x-full"}
        ${isMobile ? "inset-0" : "w-96 h-full rounded-r-2xl"}
      `,
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-4 pt-6 pb-4 flex flex-col gap-2 border-b border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl font-semibold",
                        children: profile?.public_id?.[0] ?? "?"
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-semibold",
                        children: "Профиль"
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-white/50 select-text",
                        children: [
                            "ID: ",
                            profile?.public_id ?? "—"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !nameMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col gap-3 p-4 flex-1 animate-[menuIn_100ms_ease-out_forwards]`,
                children: [
                    !profile?.telegram_username && user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onTelegramLink,
                        className: "   flex items-center gap-3   p-3 rounded-2xl   bg-white/10 hover:bg-white/15   transition-colors   text-left   active:scale-[0.98]   ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-[#229ED9]/20 flex items-center justify-center text-[#229ED9]",
                                children: "✈️"
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Привязать Telegram"
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-white/50",
                                        children: "Для уведомлений и входа"
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/30",
                                children: `>`
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : profile?.telegram_username ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "   flex items-center gap-3   p-3 rounded-2xl   bg-white/10   ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-[#229ED9]/30 flex items-center justify-center text-[#229ED9]",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            "@",
                                            profile.telegram_username
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-white/50",
                                        children: "Telegram привязан"
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                        lineNumber: 186,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start gap-2 w-full",
                        children: btns_main.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `border border-white/10 rounded-full px-1 py-1 w-full hover:bg-white/10 transition-colors`,
                                onClick: ()=>{
                                    setNameMenuOpen(item.value);
                                },
                                children: item.t
                            }, i, false, {
                                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                                lineNumber: 210,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            nameMenuOpen === "personal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$ProfileMenu$2f$menus$2f$PersonalMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersonalMenu"], {
                state: personalState,
                actions: personalActions
            }, void 0, false, {
                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            nameMenuOpen === "help" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$chat$2f$HelperMsg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnonLoveGuide"], {
                onClose: ()=>setNameMenuOpen(null)
            }, void 0, false, {
                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto p-4 border-t border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onSignOut,
                    className: "   w-full p-3 rounded-2xl   text-red-400 hover:bg-red-500/10   transition-colors   active:scale-[0.98]   ",
                    children: "Выйти"
                }, void 0, false, {
                    fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "   absolute top-5 right-2 -translate-y-1/2   px-3 py-2   bg-white/10 hover:bg-white/20   backdrop-blur-xl   rounded-full   transition   ",
                onClick: onClose,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "15",
                    height: "15",
                    viewBox: "0 0 32 32",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M2 30L30 2m0 28L2 2"
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                        lineNumber: 266,
                        columnNumber: 92
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$components$2f$Notify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notify"], {
                message: succesMessage
            }, void 0, false, {
                fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProfilePanel, "hwCnpXJ6aGn4KpYy9FgFHtrs24Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useAccountChange$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccountChange"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClickOutside"]
    ];
});
_c = ProfilePanel;
var _c;
__turbopack_context__.k.register(_c, "ProfilePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/main.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// export const dynamic = "force-dynamic";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useMessages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/utils/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useSwipe.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/checkMobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$chat$2f$Chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/chat/Chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$ProfileMenu$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/ProfileMenu/ProfileMenu.tsx [app-client] (ecmascript)");
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
function MainPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { user, profile, loading: authLoading, refreshProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { inbox, sent, sendMessage: send, loading: messageLoading, refresh, deleteMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])(user?.id || null);
    const dialogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogs"])(inbox, sent, user?.id || "", profile?.public_id || "");
    const [activeDialogId, setActiveDialogId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDialog, setActiveDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openChat, setOpenChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"])();
    const [openProfile, setOpenProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // profile слева
    const styleToNotSwipe = {
        overscrollBehavior: 'contain',
        touchAction: 'pan-y'
    };
    const startTelegramLink = async ()=>{
        const res = await fetch("/api/telegram/start", {
            method: "POST",
            headers: {
                "x-user-id": user?.id
            }
        });
        const { url } = await res.json();
        window.location.href = url;
    };
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
    const chatSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipe"])({
        onSwipeRight: {
            "MainPage.useSwipe[chatSwipe]": ()=>{
                if (!isMobile) return;
                setOpenChat(false);
            }
        }["MainPage.useSwipe[chatSwipe]"]
    });
    // swipe close profile mobile
    const profileSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipe"])({
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
    // useEffect(() => {
    //     if (authLoading) return;
    //     if (pathname === '/auth/callback') return; // не редиректим пока обрабатывается
    //     if(!user){
    //         router.replace('/auth')
    //     }
    // }, [user, authLoading, router, pathname])
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sighOut"])();
        router.push('/auth');
    };
    const [loadingText, setLoadingText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const indexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainPage.useEffect": ()=>{
            if (!authLoading) {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
                return;
            }
            const word = 'loading';
            indexRef.current = 0;
            setLoadingText('');
            intervalRef.current = window.setInterval({
                "MainPage.useEffect": ()=>{
                    setLoadingText({
                        "MainPage.useEffect": (prev)=>{
                            if (indexRef.current >= word.length) {
                                indexRef.current = 0;
                                return "";
                            }
                            const next = prev + word[indexRef.current];
                            indexRef.current += 1;
                            return next;
                        }
                    }["MainPage.useEffect"]);
                }
            }["MainPage.useEffect"], 100);
            return ({
                "MainPage.useEffect": ()=>{
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                }
            })["MainPage.useEffect"];
        }
    }["MainPage.useEffect"], [
        authLoading
    ]);
    if (authLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black min-h-screen flex items-center justify-center text-white ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse",
                children: "ЗагруОчка..."
            }, void 0, false, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 150,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/main.tsx",
            lineNumber: 149,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative bg-black min-h-screen max-h-screen flex flex-col overflow-hidden ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$chat$2f$Chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManagerChat"], {
                userId: user?.id,
                dialogs: dialogs,
                setOpenProfile: setOpenProfile,
                setOpenChat: setOpenChat,
                openChat: openChat,
                isMobile: isMobile,
                deleteMessage: deleteMessage,
                refresh: refresh
            }, void 0, false, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 160,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$ProfileMenu$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfilePanel"], {
                open: openProfile,
                isMobile: isMobile,
                swipeProps: profileSwipe,
                profile: profile,
                user: user,
                onClose: ()=>setOpenProfile(false),
                onSignOut: handleSignOut,
                onTelegramLink: startTelegramLink,
                refreshProfile: refreshProfile
            }, void 0, false, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/main.tsx",
        lineNumber: 157,
        columnNumber: 9
    }, this);
}
_s(MainPage, "XntysLA2bXpk0WEKs/bU5LXqQ8A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipe"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipe"]
    ];
});
_c = MainPage;
var _c;
__turbopack_context__.k.register(_c, "MainPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3eb706a6._.js.map