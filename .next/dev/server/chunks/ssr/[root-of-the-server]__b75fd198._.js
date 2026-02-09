module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/utils/supabase/alSupabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])(("TURBOPACK compile-time value", "https://obiquapxaofdgrftsysf.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iaXF1YXB4YW9mZGdyZnRzeXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMTk1NTIsImV4cCI6MjA4MzU5NTU1Mn0.qvqqjsnpQo_Ro4wK7cBqBabmWiof6DyD6-_rSan6uiY"));
}),
"[project]/app/things/utils/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-ssr] (ecmascript)");
;
async function getCurrentUser() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
    if (error) return;
    return data.user;
}
async function getUserProfile(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("users").select("public_id, username").eq("id_user", userId).single();
    if (error) return null;
    return data;
}
async function sighOut() {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
    if (error) throw error;
}
function onAuthStateChange(callback) {
    const { data: listener } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange((event, session)=>{
        callback(session?.user || null);
    });
    return listener.subscription;
}
}),
"[project]/app/things/hooks/useAuth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/utils/auth.ts [app-ssr] (ecmascript)");
"use client";
;
;
function useAuth() {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadUser = async ()=>{
            try {
                const userData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                setUser(userData);
                if (userData) {
                    const profileData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserProfile"])(userData.id);
                    setProfile(profileData);
                }
            } catch (error) {
                console.error("Error loading user:", error);
            } finally{
                setLoading(false);
            }
        };
        loadUser();
        const subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onAuthStateChange"])(async (newUser)=>{
            setUser(newUser);
            if (newUser) {
                const profileData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserProfile"])(newUser.id);
                setProfile(profileData);
            } else {
                setProfile(null);
            }
        });
        return ()=>{
            subscription.unsubscribe();
        };
    }, []);
    return {
        user,
        profile,
        loading
    };
}
}),
"[project]/app/things/utils/messages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-ssr] (ecmascript)");
;
async function getInboxMessages(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages_safe").select(`
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages_safe").select("*").eq("id", messageId).eq(isMine === "true" ? "from_user" : "to_user", userId).maybeSingle();
    console.log('Query result:', {
        data,
        error
    });
    if (error) throw error;
    return data || [];
}
async function getSentMessages(userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('messages_safe').select(`
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
        const { data: receiver, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("users").select("id_user").eq("public_id", toPublicId).single();
        if (userError || !receiver) {
            throw new Error("Пользователь не найден, кись");
        }
        receiverId = receiver.id_user;
    }
    const { data: toggle, error: toggleError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].rpc("toggle_anonymous", {
        p_from: fromUserId,
        p_to: receiverId,
        p_is_anon: isAnon
    });
    if (toggleError) throw toggleError;
    const { error: messageError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages").insert({
        from_user: fromUserId,
        to_user: receiverId,
        body
    });
    if (messageError) throw messageError;
    return toggle;
}
}),
"[project]/app/things/utils/parseDate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/things/types/type.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "itemDtoListToItems",
    ()=>itemDtoListToItems,
    "itemDtoToItem",
    ()=>itemDtoToItem,
    "messageDtoToUiMessage",
    ()=>messageDtoToUiMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/utils/parseDate.ts [app-ssr] (ecmascript)");
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
        created_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseBackendDate"])(dto.created_at)
    };
}
}),
"[project]/app/things/hooks/useMessages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrentMessage",
    ()=>useCurrentMessage,
    "useDialogs",
    ()=>useDialogs,
    "useMessages",
    ()=>useMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/utils/messages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/types/type.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function useMessages(userId) {
    const [inbox, setInbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const loadMessage = async ()=>{
        if (!userId) return;
        try {
            setLoading(true);
            const [inboxData, sentData] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInboxMessages"])(userId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSentMessages"])(userId)
            ]);
            setInbox(inboxData.map(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messageDtoToUiMessage"]));
            setSent(sentData.map(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messageDtoToUiMessage"]));
        } catch (error) {
            console.error("Error loading messages:", error);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadMessage();
    }, [
        userId
    ]);
    const send = async (to, body, isAnon)=>{
        if (!userId) throw new Error("User not logged in");
        let receiverId = to.userId;
        if (!receiverId) {
            if (!to.publicId) throw new Error("Не указан пользователь, малыш");
            const { data: receiver, error: userError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("users").select("id_user").eq("public_id", to.publicId).single();
            if (userError || !receiver) {
                throw new Error("Пользователь не найден, кись");
            }
            receiverId = receiver.id_user;
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].rpc("toggle_anonymous", {
            p_from: userId,
            p_to: receiverId,
            p_is_anon: isAnon
        });
        if (error) throw error;
        const { error: errorMsg } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages").insert({
            from_user: userId,
            to_user: receiverId,
            body
        });
        if (errorMsg) throw errorMsg;
        await loadMessage();
        return data;
    };
    const deleteMessage = async (messageId)=>{
        if (!messageId || Array.isArray(messageId) && messageId.length === 0) {
            console.warn("Message ID is required");
            return;
        }
        const query = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('messages').delete();
        const { error } = Array.isArray(messageId) ? await query.in('id', messageId) : await query.eq('id', messageId);
        if (error) {
            console.error("Failed to delete message:", error);
            throw error;
        }
        await loadMessage();
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
function useCurrentMessage(userId, messageId, isMine) {
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!userId || !messageId) return;
        const loadMessage = async ()=>{
            setLoading(true);
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentMessage"])(messageId, userId, isMine);
                setMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messageDtoToUiMessage"])(data));
            } catch (error) {
                console.error("Error loading messages:", error);
            } finally{
                setLoading(false);
            }
        };
        loadMessage();
    }, [
        userId,
        messageId
    ]);
    return {
        message,
        loading
    };
}
function useDialogs(inboxMessages, sentMessages, myUserId, myPublicId) {
    const dialogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
        return Array.from(map.values()).sort((a, b)=>b.lastMessage.created_at.getTime() - a.lastMessage.created_at.getTime());
    }, [
        inboxMessages,
        sentMessages,
        myUserId
    ]);
    return dialogs;
}
}),
"[project]/app/things/hooks/useSwipe.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSwipe",
    ()=>useSwipe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 50 }) {
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
}),
"[project]/app/things/hooks/checkMobile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCheckMobile",
    ()=>useCheckMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCheckMobile(breakPoint = 768) {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const check = ()=>{
            setIsMobile(window.innerWidth <= 768);
        };
        check();
        window.addEventListener('resize', check);
        return ()=>window.removeEventListener('resize', check);
    }, [
        breakPoint
    ]);
    return isMobile;
}
}),
"[project]/app/things/hooks/useSetAnon.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSetAnon",
    ()=>useSetAnon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function useSetAnon() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const setAnon = async ({ from_user_id, to_user_id, is_anon })=>{
        try {
            setLoading(true);
            setError(null);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].rpc("toggle_anonymous", {
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
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("user_anonymous_settings").select("is_anon, anon_used_once").eq("from_user_id", from_user_id).eq("to_user_id", to_user_id).maybeSingle();
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
}),
"[project]/app/modal/modalProfile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalProfile",
    ()=>ModalProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSetAnon$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useSetAnon.ts [app-ssr] (ecmascript)");
;
;
;
function ModalProfile({ isOpen, onClose, fromUser, toUser, refresh }) {
    const [isAnon, setIsAnon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [anonUsedOnce, setAnonUsedOnce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setAnon, checkAnon, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSetAnon$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSetAnon"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!toUser || !fromUser || !isOpen) return;
        const load = async ()=>{
            const data = await checkAnon(fromUser, toUser.userId);
            if (!data) return;
            setIsAnon(data.isAnon);
            setAnonUsedOnce(data.anonUsedOnce);
        };
        load();
    }, [
        isOpen,
        fromUser,
        toUser
    ]);
    if (!isOpen || !toUser) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "   fixed inset-0 z-50   flex items-center justify-center   bg-black/60 backdrop-blur-sm   animate-fadeIn   ",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "   w-full max-w-md   rounded-2xl   bg-[#12080b]   border border-white/10   shadow-2xl   p-6   animate-scaleIn   text-white   ",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-lg font-bold",
                                    children: toUser.displayId.charAt(1).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: toUser.displayId
                                        }, void 0, false, {
                                            fileName: "[project]/app/modal/modalProfile.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-white/50",
                                            children: "Профиль пользователя"
                                        }, void 0, false, {
                                            fileName: "[project]/app/modal/modalProfile.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/modal/modalProfile.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-white/50 hover:text-white transition",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/app/modal/modalProfile.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/modal/modalProfile.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "flex flex-col gap-5",
                    onSubmit: async (e)=>{
                        e.preventDefault();
                        try {
                            await setAnon({
                                from_user_id: fromUser,
                                to_user_id: toUser.userId,
                                is_anon: isAnon
                            });
                            refresh();
                            onClose();
                        } catch  {}
                    },
                    children: [
                        !loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-start gap-3 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    className: "   mt-1   w-4 h-4   accent-red-500   ",
                                    checked: isAnon,
                                    disabled: loading || anonUsedOnce && !isAnon,
                                    onChange: (e)=>setIsAnon(e.target.checked)
                                }, void 0, false, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 109,
                                    columnNumber: 21
                                }, this),
                                anonUsedOnce && !isAnon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-white/80",
                                    children: [
                                        "Анонимность для этого пользователя отключена",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-white/40",
                                            children: "Применяется только один раз"
                                        }, void 0, false, {
                                            fileName: "[project]/app/modal/modalProfile.tsx",
                                            lineNumber: 124,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-white/80",
                                    children: [
                                        "Анонимность для пользователя",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-white/40",
                                            children: "Применяется только один раз"
                                        }, void 0, false, {
                                            fileName: "[project]/app/modal/modalProfile.tsx",
                                            lineNumber: 132,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/modal/modalProfile.tsx",
                            lineNumber: 108,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-white/80",
                            children: "Загрузка..."
                        }, void 0, false, {
                            fileName: "[project]/app/modal/modalProfile.tsx",
                            lineNumber: 141,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "   px-4 py-2 rounded-lg   bg-white/5 hover:bg-white/10   text-sm transition   ",
                                    children: "Отмена"
                                }, void 0, false, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "   px-4 py-2 rounded-lg   bg-red-500 hover:bg-red-600   text-sm font-medium   transition   ",
                                    children: "Сохранить"
                                }, void 0, false, {
                                    fileName: "[project]/app/modal/modalProfile.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/modal/modalProfile.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/modal/modalProfile.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/modal/modalProfile.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/modal/modalProfile.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/things/hooks/useClickOutside.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClickOutside",
    ()=>useClickOutside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useClickOutside(ref, handler) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const listener = (e)=>{
            if (!ref.current) return;
            if (ref.current.contains(e.target)) return;
            handler();
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return ()=>{
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [
        ref,
        handler
    ]);
}
}),
"[project]/app/contextMenu/useContextMenuBehavior.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useContextMenuBehavior",
    ()=>useContextMenuBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useContextMenuBehavior(action, onClose, onDelete, panelRef, isMine) {
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirm, setConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [panelState, setPanelState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        t: action.rect.top,
        l: action.rect.left,
        transform: 'none',
        transformOrigin: 'center'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
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
        setPanelState((prev)=>({
                ...prev,
                t: top,
                l: left,
                transformOrigin
            }));
    }, [
        action,
        isMine
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (action) {
            requestAnimationFrame(()=>{
                setPanelState((prev)=>({
                        ...prev,
                        transform: 'translateX(0%)'
                    }));
                setVisible(true);
            });
        }
    }, [
        action
    ]);
    const closeAnimated = ()=>{
        setVisible(false);
        setPanelState((prev)=>({
                ...prev,
                transform: isMine ? 'translateX(100%)' : 'translateX(-100%)'
            }));
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
}),
"[project]/app/contextMenu/messagePanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageActionRoot",
    ()=>MessageActionRoot,
    "MobileCM",
    ()=>MobileCM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useClickOutside.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$useContextMenuBehavior$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/contextMenu/useContextMenuBehavior.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MessageActionRoot(props) {
    if (!props.action) return null;
    return props.action.type === 'desktop' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopCM, {
        ...props
    }, void 0, false, {
        fileName: "[project]/app/contextMenu/messagePanel.tsx",
        lineNumber: 24,
        columnNumber: 11
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileCM, {
        ...props
    }, void 0, false, {
        fileName: "[project]/app/contextMenu/messagePanel.tsx",
        lineNumber: 25,
        columnNumber: 11
    }, this);
}
function MobileCM({ action, onClose, onDelete, isChose, onChose }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cloneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [panelTop, setPanelTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickOutside"])(ref, onClose);
    const { visible, confirm, setConfirm, closeAnimated, confirmDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$useContextMenuBehavior$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextMenuBehavior"])(action, onClose, onDelete, panelRef);
    // положение панели
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!cloneRef.current) return;
        const rect = cloneRef.current.getBoundingClientRect();
        setPanelTop(rect.bottom + 8);
    }, [
        action
    ]);
    const [shiftyY, setShiftyY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
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
    }, [
        action
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            confirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flexC flex-col   bg-linear-to-br from-white/20 to-white/40 z-50 w-90 h-30   backdrop-blur-2xl rounded-xl border border-white/20   ",
                children: [
                    "Удалить у себя?",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
function DesktopCM(props) {
    const { action, isChose, onChose, onDelete, onClose } = props;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMine = action?.isMine ?? false;
    const { visible, confirm, setConfirm, closeAnimated, confirmDelete, panelState, setPanelState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$useContextMenuBehavior$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextMenuBehavior"])(action, onClose, onDelete, panelRef, isMine);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useClickOutside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickOutside"])(ref, closeAnimated);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: panelRef,
                className: `fixed z-50 transition-all duration-100 ease-out
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            confirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flexC flex-col   bg-linear-to-br from-white/20 to-white/40 z-50 w-90 h-30   backdrop-blur-2xl rounded-xl border border-white/20   ",
                children: [
                    "Удалить у себя?",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/app/createcard/components/ReadIndicator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadIndicator",
    ()=>ReadIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ReadIndicator({ isRead, isMine }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 text-xs",
                children: isRead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 text-blue-400",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 text-gray-400",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            !isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 text-md",
                children: isRead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "●"
                    }, void 0, false, {
                        fileName: "[project]/app/createcard/components/ReadIndicator.tsx",
                        lineNumber: 60,
                        columnNumber: 25
                    }, this)
                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/app/createcard/components/Rating.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rating",
    ()=>Rating,
    "numberToRating",
    ()=>numberToRating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Rating({ value, className }) {
    const rating = numberToRating(value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-1 text-sm select-none ${className ?? ''}`,
        title: rating.s,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/app/anonMain/AnimatedButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedButton",
    ()=>AnimatedButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function AnimatedButton({ children, openModal }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isHovering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const sizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        w: 0,
        h: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const button = buttonRef.current;
        if (!canvas || !button) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const updateSize = ()=>{
            const rect = canvas.parentElement.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            sizeRef.current.w = rect.width;
            sizeRef.current.h = rect.height;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = rect.width + "px";
            canvas.style.height = rect.height + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
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
        return ()=>{
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', updateSize);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex justify-center items-center h-full w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute w-full h-full pointer-events-none z-1"
            }, void 0, false, {
                fileName: "[project]/app/anonMain/AnimatedButton.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                onClick: ()=>openModal(),
                onMouseEnter: ()=>isHovering.current = true,
                onMouseLeave: ()=>isHovering.current = false,
                className: "relative flex items-center justify-center p-2 h-8 w-15 bg-white/10 rounded-full hover:bg-white/40 transition-colors z-2",
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
}),
"[project]/app/things/hooks/useCheckMsg.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMessageRead",
    ()=>useMessageRead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-ssr] (ecmascript)");
;
function useMessageRead() {
    const markAsRead = async (messageId, userId)=>{
        console.log("Trying to mark as read:", {
            messageId,
            userId
        });
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages").update({
            is_checked: true
        }).eq("id", messageId).eq("to_user", userId);
        if (error) {
            console.error("Error marking message as read:", error);
        }
    };
    const getReadStatus = async (messageId)=>{
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages").select('is_checked').eq('id', messageId).single();
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
}),
"[project]/app/anonMain/useDeleteMessage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeleteMessage",
    ()=>useDeleteMessage
]);
function useDeleteMessage(props) {
    const { setChoosenMsg, setAction, setIsChoose, choosenMsg, deleteMessage, refresh } = props;
    const handleDeleteMessage = async (id)=>{
        try {
            if (!id) {
                console.warn("No message ID provided");
                return;
            }
            await deleteMessage(id);
            await refresh();
            setAction(null);
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    };
    const handleDeleteManyMsg = async ()=>{
        try {
            await deleteMessage(choosenMsg);
            await refresh();
            setChoosenMsg([]);
            setIsChoose(false);
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    };
    return {
        handleDeleteMessage,
        handleDeleteManyMsg
    };
}
}),
"[project]/app/anonMain/DialogResizehandler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DialogResizehandler",
    ()=>DialogResizehandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function DialogResizehandler(props) {
    const color = 'bg-linear-to-br from-white/20 to-white/10';
    const handlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isDragging || !props.dialogPanelRef.current || !handlerRef.current) return;
        const panel = props.dialogPanelRef.current;
        const handle = handlerRef.current;
        const panelLeft = panel.getBoundingClientRect().left;
        const onMove = (e)=>{
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const newWidth = Math.max(200, clientX - panelLeft);
            panel.style.width = `${newWidth}px`;
            handle.style.left = `${newWidth}px`;
        };
        const onUp = ()=>{
            setIsDragging(false);
            setIsHovered(false);
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        return ()=>{
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
    }, [
        isDragging,
        props.dialogPanelRef
    ]);
    if (!props.dialogPanelRef.current) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/app/anonMain/chat/useFLIPList.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFLIPList",
    ()=>useFLIPList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useFLIPList(items, getId) {
    const refs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    // 1️⃣ сохраняем позиции до обновления
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        items.forEach((item)=>{
            const id = getId(item);
            const el = refs.current[id];
            if (el) {
                positions.current[id] = el.getBoundingClientRect();
            }
        });
    }, [
        items
    ]);
    // 2️⃣ после обновления: анимируем элементы
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        items.forEach((item)=>{
            const id = getId(item);
            const el = refs.current[id];
            const first = positions.current[id];
            if (!el || !first) return;
            const last = el.getBoundingClientRect();
            const dx = first.left - last.left;
            const dy = first.top - last.top;
            if (dx || dy) {
                el.animate([
                    {
                        transform: `translate(${dx}px, ${dy}px)`
                    },
                    {
                        transform: "translate(0, 0)"
                    }
                ], {
                    duration: 250,
                    easing: "ease-out"
                });
            }
        });
    }, [
        items
    ]);
    return refs;
}
}),
"[project]/app/anonMain/chat/Chat.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManagerChat",
    ()=>ManagerChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/utils/parseDate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$ReadIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/createcard/components/ReadIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$Rating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/createcard/components/Rating.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$messagePanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/contextMenu/messagePanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$AnimatedButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/AnimatedButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useCheckMsg$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useCheckMsg.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$useDeleteMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/useDeleteMessage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useSwipe.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$DialogResizehandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/DialogResizehandler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$chat$2f$useFLIPList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/chat/useFLIPList.ts [app-ssr] (ecmascript)");
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { userId, dialogs, setOpenProfile, setOpenModalProfile, setOpenChat, openChat, isMobile } = props;
    const [activeChatUserId, setActiveChatUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDialogId, setActiveDialogId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDialog, setActiveDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { markAsRead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useCheckMsg$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMessageRead"])();
    // messagePanel
    const msgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeMenu = ()=>{
        setAction(null);
        setSelectTouched(null);
    };
    const cancelTouch = ()=>{
        clearInterval(timer.current);
        setSelectTouched(null);
    };
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isChoose, setIsChoose] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [choosenMsg, setChoosenMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectTouched, setSelectTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // dialogResizeHandler (только для desktop)
    const dialogPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // синхронизация activeDialog с dialogs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeDialogId) {
            setActiveDialog(null);
            return;
        }
        const found = dialogs.find((d)=>d.userId === activeDialogId) || null;
        setActiveDialog(found);
    }, [
        dialogs,
        activeDialogId
    ]);
    const { handleDeleteMessage, handleDeleteManyMsg } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$useDeleteMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeleteMessage"])({
        setChoosenMsg,
        setAction,
        setIsChoose,
        choosenMsg,
        deleteMessage: props.deleteMessage,
        refresh: props.refresh
    });
    const [deletingMsg, setDeletingMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const refs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$chat$2f$useFLIPList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFLIPList"])(activeDialog?.messages || [], (m)=>m.id);
    const handleRemoveMsg = async (id)=>{
        const el = wrapperRef.current[id];
        if (!el) return;
        el.style.height = `${el.offsetHeight}px`;
        requestAnimationFrame(()=>{
            setDeletingMsg(id);
        });
        const onEnd = (e)=>{
            if (e.propertyName !== "height") return;
            el.removeEventListener("transitionend", onEnd);
            handleDeleteMessage(id);
        };
        el.addEventListener("transitionend", onEnd);
    };
    // swipe handlers для mobile
    const profileSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSwipe"])({
        onSwipeLeft: ()=>{
            if (!isMobile) return;
            setOpenProfile(false);
        },
        onSwipeRight: ()=>{
            if (!isMobile) return;
            setOpenProfile(true);
        }
    });
    const chatSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSwipe"])({
        onSwipeRight: ()=>{
            if (!isMobile) return;
            setOpenChat(false);
        }
    });
    // при изменение разрешения автоматический ресайз
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!isMobile) {
            dialogPanelRef.current.style.width = "50%";
            return;
        }
        ;
        if (isMobile) {
            dialogPanelRef.current.style.width = "100vw";
            return;
        }
    }, [
        isMobile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `flex overflow-hidden bg-[#12080b] select-none ${isMobile ? "" : "h-screen"}`,
        ...isMobile && !openChat ? profileSwipe : {},
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dialogPanelRef,
                className: `bg-[#12080b] overflow-y-auto overflow-x-hidden
                    ${isMobile ? `absolute inset-0 transition-transform duration-300 ease-out will-change-transform ${openChat ? "-translate-x-full" : "translate-x-0"}` : "relative w-1/2 border-r border-[#d91c558b]"}
                `,
                style: {
                    overscrollBehavior: "contain",
                    touchAction: "pan-y"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full relative bg-white/10 backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 h-8 w-15 flex justify-center items-center hover:bg-white/20 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenProfile(true),
                                    className: "w-8 h-8 rounded-full flex justify-center items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 32 32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M4 8h24M4 16h24M4 24h24"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                            lineNumber: 173,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                    lineNumber: 163,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 162,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 rounded-md w-full text-center flex justify-center items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "medium",
                                    children: "Чаты"
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                    lineNumber: 186,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 185,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-1/2 translate-y-1/2 right-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$AnimatedButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedButton"], {
                                    openModal: ()=>{
                                        router.push(`createcard?type=send`);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 32 32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M2 4h28v18H16l-8 7v-7H2Z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                            lineNumber: 201,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 195,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                    lineNumber: 190,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 189,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                        lineNumber: 161,
                        columnNumber: 17
                    }, this),
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$DialogResizehandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogResizehandler"], {
                        dialogPanelRef: dialogPanelRef
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                        lineNumber: 215,
                        columnNumber: 31
                    }, this),
                    dialogs.map((dialog)=>{
                        const avatar = dialog.displayId.charAt(1).toUpperCase();
                        const title = dialog.displayId;
                        const timeSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDate"])(dialog.lastMessage.created_at);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-2 rounded-lg w-full",
                            onClick: ()=>{
                                setActiveDialogId(dialog.userId);
                                setActiveDialog(dialog);
                                setActiveChatUserId(dialog.displayId);
                                if (isMobile) setOpenChat(true);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex p-3 items-center relative gap-2 rounded-2xl transition-colors
                                    ${dialog.userId !== activeDialogId && !isMobile ? "bg-[#5b5b5ba2]" : "bg-[#949494a2]"}
                                `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex bg-red-500 w-8 h-8 items-center justify-center rounded-full text-lg font-bold",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setOpenModalProfile(true);
                                        },
                                        children: avatar
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 242,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 252,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] flexC text-center text-gray-400 h-10 absolute bottom-1/2 translate-y-1/2 right-2",
                                        children: timeSend
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 254,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 233,
                                columnNumber: 29
                            }, this)
                        }, dialog.userId, false, {
                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                            lineNumber: 223,
                            columnNumber: 25
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                lineNumber: 144,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overflow-y-auto
                    ${isMobile ? `absolute inset-0 bg-[#12080b] transition-transform duration-300 ease-in-out will-change-transform ${openChat ? "translate-x-0" : "translate-x-full"}` : "flex-1 flex flex-col"}
                `,
                ...isMobile ? chatSwipe : {},
                children: [
                    activeChatUserId && !isChoose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 w-full grid grid-cols-3 items-center justify-center z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex justify-center items-center bg-white/10 backdrop-blur-2xl m-2 w-15 h-8 text-center rounded-full z-10",
                                onClick: ()=>setOpenChat(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fill: "currentColor",
                                        d: "M16.88 2.88a1.25 1.25 0 0 0-1.77 0L6.7 11.29a.996.996 0 0 0 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77"
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 289,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                    lineNumber: 283,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 279,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flexC mx-auto bg-white/10 backdrop-blur-2xl rounded-full p-1 select-none",
                                children: [
                                    activeChatUserId,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$Rating$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Rating"], {
                                        value: activeDialog?.rating
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 298,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 296,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex justify-center items-center justify-self-end bg-white/10 backdrop-blur-2xl m-2 w-15 h-8 text-center rounded-full z-10",
                                onClick: ()=>{
                                    router.push(`createcard?type=send&to=${encodeURIComponent(activeChatUserId ?? "")}`);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 14 14",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M7.5.5h-5a1 1 0 0 0-1 1v9l-1 3l4-1h8a1 1 0 0 0 1-1v-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                                lineNumber: 321,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m8.363 8.137l-3 .54l.5-3.04l4.73-4.71a.999.999 0 0 1 1.42 0l1.06 1.06a1.001 1.001 0 0 1 0 1.42z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                                lineNumber: 322,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                        lineNumber: 315,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                    lineNumber: 309,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 301,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                        lineNumber: 278,
                        columnNumber: 21
                    }, this),
                    isChoose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 w-full flex items-start justify-between z-20 text-[15px] p-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flexC prettyBtn",
                                onClick: ()=>{
                                    setIsChoose(false);
                                    setChoosenMsg([]);
                                },
                                children: "Назад"
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 331,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flexC prettyBtn",
                                onClick: ()=>handleDeleteManyMsg(),
                                children: "Удалить"
                            }, void 0, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 341,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                        lineNumber: 330,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative p-2 space-y-2",
                        children: activeDialog?.messages.map((message)=>{
                            const avatar = message.from_display_id.charAt(1).toUpperCase();
                            const nameLabel = message.from_display_id;
                            const isMine = message.from_user === userId;
                            const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseDate"])(message.created_at);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>{
                                    wrapperRef.current[message.id] = el;
                                },
                                className: `flex flex-col relative w-full transition hover:bg-white/10 select-none
                                    ${isMine ? "items-end" : "items-start"} 
                                    message-wrapper ${deletingMsg === message.id ? "message--collapsing" : ""}
                                `,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: msgRef,
                                    className: `relative flex flex-col items-center justify-center p-2 gap-2 w-1/2 rounded-2xl cursor-pointer transition-transform
                                        ${isMine ? "bg-[#ff00666d]" : "bg-white/50"}
                                        ${selectTouched === message.id && isMobile ? "scale-105" : ""}
                                        ${selectTouched === message.id && !isMobile ? isMine ? "border-l" : "border-r" : ""}
                                        message ${deletingMsg === message.id ? "message--deleting" : ""}
                                    `,
                                    // style={{
                                    //     transition: 'all 300ms ease-out',
                                    //     transform: deletingMsg === message.id ? 'translateX(100px) scale(0.8)' : 'none',
                                    //     opacity: deletingMsg === message.id ? 0 : 1,
                                    // }}
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flexC gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:w-6 md:h-6 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-md font-bold shrink-0",
                                                    children: avatar
                                                }, void 0, false, {
                                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold medium",
                                                            children: nameLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "small line-clamp-2",
                                                            children: ``
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                                            lineNumber: 437,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                            lineNumber: 430,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] text-[#cdcdcd]",
                                            children: date
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                            lineNumber: 441,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$createcard$2f$components$2f$ReadIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReadIndicator"], {
                                            isRead: message.is_checked,
                                            isMine: isMine
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                            lineNumber: 443,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute w-3 h-3 rounded-full border
                                            ${!isMine ? "-right-10" : "-left-10"}
                                            ${isChoose ? "opacity-100 " : "opacity-0"}
                                            ${choosenMsg.map((msg)=>msg).includes(message.id) ? "bg-white" : ""}
                                        `
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                            lineNumber: 445,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                    lineNumber: 365,
                                    columnNumber: 33
                                }, this)
                            }, message.id, false, {
                                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                                lineNumber: 356,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/anonMain/chat/Chat.tsx",
                        lineNumber: 348,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                lineNumber: 264,
                columnNumber: 13
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$messagePanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageActionRoot"], {
                action: action,
                onClose: ()=>{
                    closeMenu();
                    setSelectTouched(null);
                },
                onDelete: handleRemoveMsg,
                isChose: setIsChoose,
                onChose: (id)=>setChoosenMsg((prev)=>[
                            ...prev,
                            id
                        ])
            }, void 0, false, {
                fileName: "[project]/app/anonMain/chat/Chat.tsx",
                lineNumber: 461,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/anonMain/chat/Chat.tsx",
        lineNumber: 139,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/main.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// export const dynamic = "force-dynamic";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useAuth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useMessages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/utils/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/useSwipe.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/things/hooks/checkMobile.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$modal$2f$modalProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/modal/modalProfile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$messagePanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/contextMenu/messagePanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$chat$2f$Chat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonMain/chat/Chat.tsx [app-ssr] (ecmascript)");
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
function MainPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, profile, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { inbox, sent, sendMessage: send, loading: messageLoading, refresh, deleteMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMessages"])(user?.id || null);
    const dialogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogs"])(inbox, sent, user?.id || "", profile?.public_id || "");
    const [activeDialogId, setActiveDialogId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeDialog, setActiveDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openChat, setOpenChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCheckMobile"])();
    const [openProfile, setOpenProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // profile слева
    const [openModalProfile, setOpenModalProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // state модалка профиля
    const styleToNotSwipe = {
        overscrollBehavior: 'contain',
        touchAction: 'pan-y'
    };
    // messagePanel
    const msgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isChoose, setIsChoose] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false) // начало выбора
    ;
    const [choosenMsg, setChoosenMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]) // выбранные
    ;
    const [selectTouched, setSelectTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    //
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeDialogId) {
            setActiveDialog(null);
            return;
        }
        const found = dialogs.find((d)=>d.userId === activeDialogId) || null;
        setActiveDialog(found);
    }, [
        dialogs,
        activeDialogId
    ]);
    // свайп для мобилки
    const chatSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSwipe"])({
        onSwipeRight: ()=>{
            if (!isMobile) return;
            setOpenChat(false);
        }
    });
    // swipe close profile mobile
    const profileSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSwipe"])({
        onSwipeLeft: ()=>{
            if (!isMobile) return;
            setOpenProfile(false);
        },
        onSwipeRight: ()=>{
            if (!isMobile) return;
            setOpenProfile(true);
        }
    });
    // редирект если неавторизован
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (authLoading) return;
        if (!user) {
            router.replace('/auth');
        }
    }, [
        user,
        authLoading,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isMobile) {
            setOpenChat(false);
        }
    }, [
        isMobile
    ]);
    const handleSignOut = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sighOut"])();
        router.push('/auth');
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
    const [loadingText, setLoadingText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const indexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        intervalRef.current = window.setInterval(()=>{
            setLoadingText((prev)=>{
                if (indexRef.current >= word.length) {
                    indexRef.current = 0;
                    return "";
                }
                const next = prev + word[indexRef.current];
                indexRef.current += 1;
                return next;
            });
        }, 100);
        return ()=>{
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [
        authLoading
    ]);
    if (authLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black min-h-screen flex items-center justify-center text-white ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse",
                children: "ЗагруОчка..."
            }, void 0, false, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 179,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/main.tsx",
            lineNumber: 178,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative bg-black min-h-screen max-h-screen flex flex-col overflow-hidden ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonMain$2f$chat$2f$Chat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ManagerChat"], {
                userId: user?.id,
                dialogs: dialogs,
                setOpenProfile: setOpenProfile,
                setOpenModalProfile: setOpenModalProfile,
                setOpenChat: setOpenChat,
                openChat: openChat,
                isMobile: isMobile,
                deleteMessage: deleteMessage,
                refresh: refresh
            }, void 0, false, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 189,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...isMobile ? profileSwipe : {},
                className: `flex flex-1 flex-col items-center absolute bg-black/50 backdrop-blur-md transition-transform duration-150 ease-in-out will-change-transform
                    ${openProfile ? "translate-x-0" : "-translate-x-full "}
                    ${isMobile ? "inset-0" : "w-1/3 h-full"}
                    `,
                onClick: (e)=>{
                    e.stopPropagation();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/20 backdrop-blur-2xl w-full flexC p-2 rounded-b-2xl",
                        children: profile?.public_id
                    }, void 0, false, {
                        fileName: "[project]/app/main.tsx",
                        lineNumber: 213,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 bg-white/10 p-2 backdrop-blur-md w-full flexC rounded-t-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-red-500",
                            onClick: ()=>{
                                handleSignOut();
                            },
                            children: "Выйти"
                        }, void 0, false, {
                            fileName: "[project]/app/main.tsx",
                            lineNumber: 220,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/main.tsx",
                        lineNumber: 219,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute h-40 top-1/2 -translate-y-1/2 right-0 bg-white/20 backdrop-blur-2xl flexC p-1    animate-pulse rounded-l-2xl   ",
                        onClick: ()=>setOpenProfile(false),
                        children: `>`
                    }, void 0, false, {
                        fileName: "[project]/app/main.tsx",
                        lineNumber: 230,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 203,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$modal$2f$modalProfile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalProfile"], {
                isOpen: openModalProfile,
                onClose: ()=>{
                    setOpenModalProfile(false);
                },
                fromUser: user?.id,
                toUser: activeDialog || undefined,
                refresh: ()=>refresh()
            }, void 0, false, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 242,
                columnNumber: 13
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contextMenu$2f$messagePanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageActionRoot"], {
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
                lineNumber: 252,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/main.tsx",
        lineNumber: 186,
        columnNumber: 9
    }, this);
}
function AnimatedButton({ children, openModal }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isHovering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const sizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        w: 0,
        h: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const button = buttonRef.current;
        if (!canvas || !button) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const updateSize = ()=>{
            const rect = canvas.parentElement.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            sizeRef.current.w = rect.width;
            sizeRef.current.h = rect.height;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = rect.width + "px";
            canvas.style.height = rect.height + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
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
        return ()=>{
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', updateSize);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex justify-center items-center h-full w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "absolute w-full h-full pointer-events-none z-1"
            }, void 0, false, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 417,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                onClick: ()=>openModal(),
                onMouseEnter: ()=>isHovering.current = true,
                onMouseLeave: ()=>isHovering.current = false,
                className: "relative flex items-center justify-center p-2 h-8 w-15 bg-white/10 rounded-full hover:bg-white/40 transition-colors z-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/main.tsx",
                lineNumber: 422,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/main.tsx",
        lineNumber: 416,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b75fd198._.js.map