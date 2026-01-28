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
"[project]/app/anonlove/createcard/useRandColor.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRandColor",
    ()=>useRandColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    const [bg, setBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        r: 0,
        g: 0,
        b: 0,
        a: 0.1
    });
    const colorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(bg);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let start = null;
        let from = colorRef.current;
        let to = randomColor();
        const duration = 3000;
        const animate = (time)=>{
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
        };
        frameRef.current = requestAnimationFrame(animate);
        return ()=>{
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, []);
    return {
        bg
    };
}
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
"[project]/app/anonlove/things/utils/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/anonlove/things/hooks/useAuth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/auth.ts [app-ssr] (ecmascript)");
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
                const userData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
                setUser(userData);
                if (userData) {
                    const profileData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserProfile"])(userData.id);
                    setProfile(profileData);
                }
            } catch (error) {
                console.error("Error loading user:", error);
            } finally{
                setLoading(false);
            }
        };
        loadUser();
        const subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onAuthStateChange"])(async (newUser)=>{
            setUser(newUser);
            if (newUser) {
                const profileData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserProfile"])(newUser.id);
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
"[project]/app/anonlove/things/utils/messages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const { error: settingError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("user_anonymous_settings").upsert([
        {
            from_user_id: fromUserId,
            to_user_id: receiverId,
            is_anon: isAnon
        }
    ], {
        onConflict: 'from_user_id,to_user_id'
    });
    if (settingError) throw settingError;
    const { error: messageError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages").insert({
        from_user: fromUserId,
        to_user: receiverId,
        body
    });
    if (messageError) throw messageError;
}
}),
"[project]/app/anonlove/things/types/type.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/anonlove/things/hooks/useMessages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/messages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/types/type.ts [app-ssr] (ecmascript)");
"use client";
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInboxMessages"])(userId),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSentMessages"])(userId)
            ]);
            setInbox(inboxData);
            setSent(sentData);
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendMessage"])({
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
function useCurrentMessage(userId, messageId, isMine) {
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!userId || !messageId) return;
        const loadMessage = async ()=>{
            setLoading(true);
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentMessage"])(messageId, userId, isMine);
                setMessage({
                    ...data,
                    body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itemDtoListToItems"])(data.body)
                });
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
function useDialogs(inboxMessages, sentMessages, myUserId) {
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
        return Array.from(map.values()).sort((a, b)=>new Date(b.lastMessage.created_at).getTime() - new Date(a.lastMessage.created_at).getTime());
    }, [
        inboxMessages,
        sentMessages,
        myUserId
    ]);
    return dialogs;
}
}),
"[project]/app/anonlove/createcard/btnFunction.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createText",
    ()=>createText
]);
const createText = (setItems)=>{
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
}),
"[project]/app/anonlove/createcard/useItemInteractions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userItemInteractions",
    ()=>userItemInteractions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const userItemInteractions = (items, setItems, fieldRef, setViewport, viewport)=>{
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        id: null,
        offsetX: 0,
        offsetY: 0,
        w: 0,
        h: 0
    });
    const resizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        id: null,
        startX: 0,
        startY: 0,
        startW: 0,
        startH: 0,
        fontSize: 0,
        direction: "horizontal"
    });
    const touchDistanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
        resizeRef.current = {
            id: item.id,
            startX: clientX,
            startY: clientY,
            startW: item.w,
            startH: item.h,
            fontSize: item.fontSize,
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
            w = Math.max(50, r.startW + dx);
            h = Math.max(30, r.startH + dy);
            fontSize = Math.max(2, r.fontSize + (dx + dy) / 5);
        }
        // console.log("resize direction:", r.direction, "w:", w, "h:", h, "fontSize:", fontSize)
        setItems((prev)=>prev.map((it)=>it.id === r.id ? {
                    ...it,
                    w,
                    h,
                    fontSize
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
}),
"[project]/app/anonlove/things/hooks/checkMobile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/anonlove/createcard/CreateCardClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/anonlove/createcard/CreateCardClient.tsx'\n\nExpected '</', got ')'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6b3fbf5c._.js.map