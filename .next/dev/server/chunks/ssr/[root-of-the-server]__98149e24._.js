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
async function getCurrentMessage(messageId, userId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages_safe").select("*").eq("id", messageId).eq("to_user", userId).single();
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
"use client";
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
function useCurrentMessage(userId, messageId) {
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!userId || !messageId) return;
        const loadMessage = async ()=>{
            setLoading(true);
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentMessage"])(messageId, userId);
                setMessage(data);
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
                displayId = msg.to_display_id;
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
const userItemInteractions = (items, setItems, fieldRef, viewport)=>{
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
    return {
        startDrag,
        startResize,
        deleteItem
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
"[project]/app/anonlove/createcard/CreateCardClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateCardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$useRandColor$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/createcard/useRandColor.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/useAuth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/useMessages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$btnFunction$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/createcard/btnFunction.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$useItemInteractions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/createcard/useItemInteractions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/hooks/checkMobile.ts [app-ssr] (ecmascript)");
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
function CreateCardPage({ initialData }) {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const rawTo = searchParams.get("to");
    const to = rawTo ? decodeURIComponent(rawTo) : null;
    const [messageId, setMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null) // получаем из url
    ;
    const [isReply, setIsReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // тип перехода send или recieve
    const type = searchParams.get("type");
    const [messageType, setMessageType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const isRecieve = type === "recieve";
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCheckMobile"])();
    const { user, profile, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { sendMessage: send, loading: messageLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMessages"])(user?.id || null);
    const { message, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentMessage"])(isRecieve ? user?.id || null : null, isRecieve ? messageId : null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData?.items || []);
    const fieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        scale: 1,
        offsetX: 0,
        offsetY: 0
    });
    const [rightPanelOpen, setRightPanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const idRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const anonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isAnon, setIsAnon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ismenuTextOpen, setMenuTextOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const touchDistanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { startDrag, startResize, deleteItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$useItemInteractions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userItemInteractions"])(items, setItems, fieldRef, viewport);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (to) {
            setMessageId(to);
            setIsReply(true);
        }
        ;
        if (type) {
            setMessageType({
                type
            });
        }
        ;
    }, [
        to,
        type
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isRecieve) return;
        if (!message) return;
        setItems(itemDtoToItem(message.body));
    }, [
        isRecieve,
        message
    ]);
    // рандомный фон
    const { bg } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$useRandColor$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRandColor"])();
    const bgStyle = `rgba(${Math.floor(bg.r)}, ${Math.floor(bg.g)}, ${Math.floor(bg.b)}, ${bg.a})`;
    const handleSendMessage = async ()=>{
        const id = idRef.current?.value || "";
        const anonCheckbox = anonRef.current?.checked || false;
        if (!id) {
            alert('Введи ID, сладкий!');
            return;
        }
        const cleanItems = items.map(({ isSelected, isEditing, ...rest })=>rest);
        console.log("SEND PAYLOAD", cleanItems);
        try {
            await send({
                publicId: id
            }, cleanItems, isAnon);
            idRef.current.value = "";
            setRightPanelOpen(false);
        } catch (error) {
            console.log(error.message || 'Error sending message');
        }
    };
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
    if (messageType?.type === "send") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative flex flex-col justify-center items-center h-full overflow-hidden`,
            style: {
                backgroundColor: bgStyle
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative border  rounded-md bg-white overflow-hidden z-10
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
                    },
                    onWheel: handleZoom,
                    onTouchStart: handleTouchStart,
                    onTouchMove: handleTouchMove,
                    onTouchEnd: handleTouchEnd,
                    style: {
                        transform: `
                        translate(${viewport.offsetX}px, ${viewport.offsetY}px)
                        scale(${viewport.scale})
                        `,
                        transformOrigin: "center center"
                    },
                    children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex 
                                    text-black select-none relative 
                                    ${item.isSelected && item.isEditing !== 'text' ? "border" : ""}
                                    `,
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
                            onTouchStart: (e)=>{
                                startDrag(e, item);
                                setItems((prev)=>prev.map((it)=>({
                                            ...it,
                                            isSelected: it.id === item.id
                                        })));
                            },
                            children: item.isEditing === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                lineNumber: 215,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative w-full h-full text-wrap wrap-break-word flex 
                                                ${item.isSelected ? " " : "overflow-hidden"}`,
                                children: [
                                    item.content,
                                    item.isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-1.5 -right-2.5 ",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            onClick: (e)=>{
                                                                if (ismenuTextOpen) setMenuTextOpen(false);
                                                                else setMenuTextOpen(true);
                                                                e.stopPropagation();
                                                            },
                                                            className: "hover:scale-110 transition-transform cursor-pointer",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "10",
                                                            height: "10",
                                                            viewBox: "0 0 32 32",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M4 8h24M4 16h24M4 24h24"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 135
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `absolute top-1 left-full text-[9px] bg-black/20 rounded-md w-15 h-15 flex flex-col
                                                            ${ismenuTextOpen ? "opacity-100" : "opacity-0"} transition-opacity`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "hover:bg-black/10 transition-colors",
                                                                onClick: ()=>{
                                                                    deleteItem(item);
                                                                },
                                                                children: "Удалить"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                                lineNumber: 245,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onMouseDown: (e)=>{
                                                    e.stopPropagation();
                                                    startResize(e, item, "horizontal");
                                                },
                                                onTouchStart: (e)=>{
                                                    e.stopPropagation();
                                                    startResize(e, item, "horizontal");
                                                },
                                                className: "absolute -right-1 bottom-1/2 translate-y-1/2 w-1 h-3 bg-white    border cursor-w-resize"
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                                lineNumber: 271,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onMouseDown: (e)=>{
                                                    e.stopPropagation();
                                                    startResize(e, item, "top");
                                                },
                                                onTouchStart: (e)=>{
                                                    e.stopPropagation();
                                                    startResize(e, item, "top");
                                                },
                                                className: "absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-white    border cursor-s-resize"
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                                lineNumber: 285,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onMouseDown: (e)=>{
                                                    e.stopPropagation();
                                                    startResize(e, item, "bottom");
                                                },
                                                onTouchStart: (e)=>{
                                                    e.stopPropagation();
                                                    startResize(e, item, "bottom");
                                                },
                                                className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-white    border cursor-s-resize"
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                                lineNumber: 299,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onMouseDown: (e)=>{
                                                    e.stopPropagation();
                                                    startResize(e, item, "diagonal");
                                                },
                                                onTouchStart: (e)=>{
                                                    e.stopPropagation();
                                                    startResize(e, item, "diagonal");
                                                },
                                                className: "absolute -bottom-1.5 -right-1.5  w-2 h-2 bg-white    border cursor-se-resize"
                                            }, void 0, false, {
                                                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                                lineNumber: 313,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                        lineNumber: 242,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                lineNumber: 237,
                                columnNumber: 33
                            }, this)
                        }, item.id, false, {
                            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                            lineNumber: 185,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 163,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex p-2 mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 border rounded-2xl",
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$btnFunction$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createText"])(setItems),
                        children: "Text"
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                        lineNumber: 337,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 335,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute left-0  flex justify-center items-center 
                    w-7 rounded-r-full backdrop-blur-md hover:bg-white/20 transition-cursor
                    md:inset-y-0
                    inset-y-60
                    z-20
                    ${isMobile ? "bg-black/50" : "bg-white/10"}
                    `,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("anonlovemain"),
                        className: "w-full h-full ",
                        children: `<`
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                        lineNumber: 359,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 349,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute right-0  flex justify-center items-center overflow-hidden
                    w-7 rounded-l-full bg-black/50 backdrop-blur-md hover:bg-white/20 transition-cursor
                    md:inset-y-0
                    inset-y-60
                    z-20
                    ${isMobile ? "bg-black/50" : "bg-white/10"}
                    `,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setRightPanelOpen(true);
                        },
                        className: "w-full h-full",
                        children: `...`
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                        lineNumber: 379,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 369,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `fixed inset-0 z-20 bg-black/50 transition-all duration-300 overflow-hidden 
                            ${rightPanelOpen ? "backdrop-blur-lg translate-x-0" : "backdrop-blur-none translate-x-full"}
                        `,
                    onMouseDown: (e)=>setRightPanelOpen(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 inset-y-0 flex justify-center items-center    md:w-[400px] w-full bg-black/90 z-20",
                        onMouseDown: (e)=>{
                            e.stopPropagation();
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "relative flex flex-col w-full justify-center items-center",
                            onSubmit: (e)=>{
                                e.preventDefault();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: idRef,
                                    value: messageId || '',
                                    onChange: (e)=>setMessageId(e.target.value),
                                    disabled: isReply,
                                    type: "text",
                                    placeholder: "ID кисы",
                                    className: `p-2 mb-4 w-1/2 bg-white/10 border rounded-md text-white
                                        ${isReply && "opacity-50"}
                                `
                                }, void 0, false, {
                                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                    lineNumber: 407,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            ref: anonRef,
                                            checked: isAnon,
                                            onChange: (e)=>{
                                                setIsAnon;
                                            },
                                            className: "bg-white/10 border rounded-md text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                            lineNumber: 419,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px]",
                                            children: `Будешь анонимен? (потом можно изменить)`
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                            lineNumber: 426,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                    lineNumber: 418,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "p-2 mt-4 border rounded-2xl hover:bg-white/20 transition-all duration-200",
                                    onClick: handleSendMessage,
                                    children: "Отправить"
                                }, void 0, false, {
                                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                    lineNumber: 429,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "absolute left-0 w-10 h-20 bg-white/20 rounded-r-full top-1/2 -translate-y-1/2   hover:bg-white/40 transition-all duration-200   ",
                                    onClick: ()=>setRightPanelOpen(false),
                                    children: `>`
                                }, void 0, false, {
                                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                    lineNumber: 437,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                            lineNumber: 401,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                        lineNumber: 394,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 388,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
            lineNumber: 156,
            columnNumber: 13
        }, this);
    }
    if (messageType?.type === "recieve") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative flex flex-col justify-center items-center h-full overflow-hidden`,
            style: {
                backgroundColor: bgStyle
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative border  rounded-md bg-white overflow-hidden z-10
                        ${isMobile ? "w-full h-1/2" : "w-1/2 h-1/2"}
                        `,
                    ref: fieldRef,
                    onWheel: handleZoom,
                    onTouchStart: handleTouchStart,
                    onTouchMove: handleTouchMove,
                    onTouchEnd: handleTouchEnd,
                    style: {
                        transform: `
                        translate(${viewport.offsetX}px, ${viewport.offsetY}px)
                        scale(${viewport.scale})
                        `,
                        transformOrigin: "center center"
                    },
                    children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex 
                                    text-black select-none relative 
                                    `,
                            style: {
                                position: "absolute",
                                left: item.x,
                                top: item.y,
                                width: item.w,
                                height: item.h,
                                fontSize: item.fontSize,
                                cursor: item.isSelected ? "move" : "pointer"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative w-full h-full text-wrap wrap-break-word flex 
                                            ${item.isSelected ? " " : "overflow-hidden"}`,
                                children: item.content
                            }, void 0, false, {
                                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                lineNumber: 496,
                                columnNumber: 29
                            }, this)
                        }, item.id, false, {
                            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                            lineNumber: 481,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 462,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute left-0  flex justify-center items-center 
                    w-7 rounded-r-full backdrop-blur-md hover:bg-white/20 transition-cursor
                    md:inset-y-0
                    inset-y-60
                    z-20
                    ${isMobile ? "bg-black/50" : "bg-white/10"}
                    `,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("anonlovemain"),
                        className: "w-full h-full ",
                        children: `<`
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                        lineNumber: 518,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 508,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute right-0  flex justify-center items-center overflow-hidden
                    w-7 rounded-l-full bg-black/50 backdrop-blur-md hover:bg-white/20 transition-cursor
                    md:inset-y-0
                    inset-y-60
                    z-20
                    ${isMobile ? "bg-black/50" : "bg-white/10"}
                    `,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setRightPanelOpen(true);
                        },
                        className: "w-full h-full",
                        children: `...`
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                        lineNumber: 538,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 528,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `fixed inset-0 z-20 bg-black/50 transition-all duration-300 overflow-hidden 
                            ${rightPanelOpen ? "backdrop-blur-lg translate-x-0" : "backdrop-blur-none translate-x-full"}
                        `,
                    onMouseDown: (e)=>setRightPanelOpen(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 inset-y-0 flex justify-center items-center    md:w-[400px] w-full bg-black/90 z-20",
                        onMouseDown: (e)=>{
                            e.stopPropagation();
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "relative flex flex-col w-full justify-center items-center",
                            onSubmit: (e)=>{
                                e.preventDefault();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: idRef,
                                    value: messageId || '',
                                    onChange: (e)=>setMessageId(e.target.value),
                                    disabled: isReply,
                                    type: "text",
                                    placeholder: "ID кисы",
                                    className: `p-2 mb-4 w-1/2 bg-white/10 border rounded-md text-white
                                        ${isReply && "opacity-50"}
                                `
                                }, void 0, false, {
                                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                    lineNumber: 566,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            ref: anonRef,
                                            checked: isAnon,
                                            onChange: (e)=>{
                                                setIsAnon;
                                            },
                                            className: "bg-white/10 border rounded-md text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                            lineNumber: 578,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px]",
                                            children: `Будешь анонимен? (потом можно изменить)`
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                            lineNumber: 585,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                    lineNumber: 577,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "p-2 mt-4 border rounded-2xl hover:bg-white/20 transition-all duration-200",
                                    onClick: handleSendMessage,
                                    children: "Отправить"
                                }, void 0, false, {
                                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                    lineNumber: 588,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "absolute left-0 w-10 h-20 bg-white/20 rounded-r-full top-1/2 -translate-y-1/2   hover:bg-white/40 transition-all duration-200   ",
                                    onClick: ()=>setRightPanelOpen(false),
                                    children: `>`
                                }, void 0, false, {
                                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                                    lineNumber: 596,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                            lineNumber: 560,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                        lineNumber: 553,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 547,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
            lineNumber: 455,
            columnNumber: 13
        }, this);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__98149e24._.js.map