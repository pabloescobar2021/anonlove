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
"[project]/app/anonlove/things/types/type.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "itemDtoListToItems",
    ()=>itemDtoListToItems,
    "itemDtoToItem",
    ()=>itemDtoToItem
]);
function itemDtoToItem(dto) {
    return {
        ...dto,
        isEditing: 'none',
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/types/type.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/parseDate.ts [app-client] (ecmascript)");
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
function useDialogs(inboxMessages, sentMessages, myUserId) {
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
"[project]/app/anonlove/things/hooks/useSwipe.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/anonlove/anonlovemain/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/useMessages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/useSwipe.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/checkMobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/parseDate.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
const dynamic = "force-dynamic";
;
;
;
;
;
;
;
;
function Page() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, profile, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { inbox, sent, sendMessage: send, loading: messageLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])(user?.id || null);
    const dialogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogs"])(inbox, sent, user?.id || "");
    const [activeDialogId, setActiveDialogId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeDialog = dialogs.find((d)=>d.userId === activeDialogId);
    const [openChat, setOpenChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const idRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ответ на сообщение
    const [replyToUserId, setreplyToUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); //id
    const [openProfile, setOpenProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //открыл чат и записал
    const [activeChatUserId, setActiveChatUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // свайп для мобилки
    const chatSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipe"])({
        onSwipeRight: {
            "Page.useSwipe[chatSwipe]": ()=>{
                if (!isMobile) return;
                setOpenChat(false);
            }
        }["Page.useSwipe[chatSwipe]"]
    });
    // swipe close profile mobile
    const profileSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipe"])({
        onSwipeLeft: {
            "Page.useSwipe[profileSwipe]": ()=>{
                if (!isMobile) return;
                setOpenProfile(false);
            }
        }["Page.useSwipe[profileSwipe]"],
        onSwipeRight: {
            "Page.useSwipe[profileSwipe]": ()=>{
                if (!isMobile) return;
                setOpenProfile(true);
            }
        }["Page.useSwipe[profileSwipe]"]
    });
    // автовставка id
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (isOpen && idRef.current) {
                idRef.current.value = replyToUserId?.id || '';
            }
        }
    }["Page.useEffect"], [
        isOpen,
        replyToUserId
    ]);
    // редирект если неавторизован
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (authLoading) return;
            if (!user) {
                router.replace('/anonlove/auth');
            }
        }
    }["Page.useEffect"], [
        user,
        authLoading,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!isMobile) {
                setOpenChat(false);
            }
        }
    }["Page.useEffect"], [
        isMobile
    ]);
    const handleSignOut = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sighOut"])();
        router.push('/anonlove/auth');
    };
    if (authLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black min-h-screen flex items-center justify-center text-white",
            children: "ЗагрузОчка..."
        }, void 0, false, {
            fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
            lineNumber: 100,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative bg-black min-h-screen max-h-screen flex flex-col overflow-hidden",
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
                                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                        lineNumber: 139,
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
                                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 144
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-2 rounded-md w-full text-center flex justify-center items-center ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "medium",
                                            children: "Чаты"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                        lineNumber: 143,
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
                                                    fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 116
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this),
                            dialogs.map((dialog)=>{
                                const avatar = dialog.displayId.charAt(1).toUpperCase();
                                const title = dialog.displayId;
                                const timeSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(dialog.lastMessage.created_at);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: " p-2 rounded-lg w-full",
                                    onClick: ()=>{
                                        setActiveDialogId(dialog.userId), setOpenChat(true), setActiveChatUserId(dialog.displayId);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex p-3 items-center relative gap-2  rounded-2xl transition-colors
                                    ${dialog.userId === activeDialogId ? "bg-[#5b5b5ba2]" : "bg-[#949494a2]"}
                                    `,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex bg-red-500 w-8 h-8 items-center justify-center rounded-full text-lg font-bold",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                },
                                                children: avatar
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] flexC text-center text-gray-400 h-10   absolute bottom-1/2 translate-y-1/2  right-2 ",
                                                children: timeSend
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 33
                                    }, this)
                                }, dialog.userId, false, {
                                    fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 29
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                        lineNumber: 118,
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
                            isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-0 w-full grid grid-cols-3 items-center z-20",
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
                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-white/10 backdrop-blur-2xl m-2  h-8 rounded-full",
                                        children: activeChatUserId
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                        lineNumber: 232,
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
                                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "m8.363 8.137l-3 .54l.5-3.04l4.73-4.71a.999.999 0 0 1 1.42 0l1.06 1.06a1.001 1.001 0 0 1 0 1.42z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                lineNumber: 222,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-full  p-2 rounded-b-2xl bg-[#7959631c]
                                ${activeDialog ? "flexC" : "hidden"} 
                        `,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flexC bg-white/10 rounded-full w-28 select-none",
                                    children: activeChatUserId
                                }, void 0, false, {
                                    fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                lineNumber: 255,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 space-y-2",
                                children: activeDialog?.messages.map((message)=>{
                                    const avatar = message.from_display_id.charAt(1).toUpperCase();
                                    const nameLabel = message.from_display_id;
                                    const bodyText = "тебе тут что то пришло, малышка";
                                    const isMine = message.from_user === user?.id;
                                    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDate"])(message.created_at);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex flex-col relative w-full transition hover:bg-white/10
                                        ${isMine ? "items-end" : "items-start"}
                                    `,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex flex-col items-center justify-center p-2 gap-2 w-1/2 rounded-2xl cursor-pointer 
                                            ${isMine ? "bg-[#ff00666d]" : "bg-white/50"}
                                        `,
                                                onClick: ()=>{
                                                    router.push(`createcard?isMine=${isMine}&id=${encodeURIComponent(message.id)}&type=recieve&to=${encodeURIComponent(message?.from_display_id ?? '')}`);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flexC gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "md:w-6 md:h-6 w-8 h-8   rounded-full bg-red-500   flex items-center justify-center   text-md font-bold shrink-0",
                                                                children: avatar
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold medium",
                                                                        children: nameLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                                        lineNumber: 303,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "small line-clamp-2",
                                                                        children: ``
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                                lineNumber: 302,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-[#cdcdcd] ",
                                                        children: date
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 37
                                            }, this),
                                            !isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "absolute top-1/2 right-1 -translate-y-1/2",
                                                onClick: ()=>{
                                                    router.push(`createcard?isMine=${isMine}&type=send&to=${encodeURIComponent(message?.from_display_id ?? '')}`);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "18",
                                                    height: "18",
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
                                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m8.363 8.137l-3 .54l.5-3.04l4.73-4.71a.999.999 0 0 1 1.42 0l1.06 1.06a1.001 1.001 0 0 1 0 1.42z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, message.id, true, {
                                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                                lineNumber: 267,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                        lineNumber: 210,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                lineNumber: 110,
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
                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                        lineNumber: 361,
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
                            fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                            lineNumber: 368,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                        lineNumber: 367,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute h-40 top-1/2 -translate-y-1/2 right-0 bg-white/20 backdrop-blur-2xl flexC p-1    animate-pulse rounded-l-2xl   ",
                        onClick: ()=>setOpenProfile(false),
                        children: `>`
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                        lineNumber: 378,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                lineNumber: 351,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
        lineNumber: 107,
        columnNumber: 9
    }, this);
}
_s(Page, "L/UcYRKJIm9PPJj+U4jdDnbnALU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipe"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useSwipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipe"]
    ];
});
_c = Page;
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
                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                lineNumber: 539,
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
                fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
                lineNumber: 544,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/anonlove/anonlovemain/page.tsx",
        lineNumber: 538,
        columnNumber: 9
    }, this);
}
_s1(AnimatedButton, "1TcZ0lI20Me3TK4Zz7/zjkLn3SI=");
_c1 = AnimatedButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "Page");
__turbopack_context__.k.register(_c1, "AnimatedButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_38b1cebd._.js.map