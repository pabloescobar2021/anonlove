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
"[project]/app/anonlove/things/utils/parseDate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/alSupabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$messages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/messages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$types$2f$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/types/type.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/things/utils/parseDate.ts [app-ssr] (ecmascript)");
"use client";
;
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
        const { error: errorMsg } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$alSupabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("messages_safe").insert({
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
function useCurrentMessage(userId, messageId, isMine) {
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
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
        ].map((msg)=>({
                ...msg,
                created_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$utils$2f$parseDate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseBackendDate"])(msg.created_at)
            }));
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
        return Array.from(map.values()).sort((a, b)=>b.lastMessage.created_at.getTime() - a.lastMessage.created_at.getTime());
    }, [
        inboxMessages,
        sentMessages,
        myUserId
    ]);
    return dialogs;
}
}),
"[project]/app/anonlove/createcard/components/all.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasItem",
    ()=>CanvasItem,
    "RightField",
    ()=>RightField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CanvasItem({ item, canEdit, onSelect, onUpdate, onDelete, startDrag, startResize, ismenuTextOpen, setMenuTextOpen, isLoading }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex text-black select-none relative
        ${item.isSelected && item.isEditing !== "text" ? "border" : ""}
      `,
        style: {
            position: "absolute",
            left: item.x,
            top: item.y,
            width: item.w,
            height: item.h,
            fontSize: item.fontSize,
            cursor: canEdit ? item.isSelected ? "move" : "pointer" : "cursor-allow",
            transform: `rotate(${item.rotation || 0}rad)`,
            transformOrigin: "center center"
        },
        onDoubleClick: ()=>onUpdate(item.id, {
                isEditing: "text"
            }),
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
        children: item.isEditing === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            lineNumber: 62,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative w-full h-full flex ${item.isSelected ? "" : "overflow-hidden"}`,
            children: [
                item.content,
                item.isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-1.5 -right-2.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setMenuTextOpen(!ismenuTextOpen);
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
                                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                            lineNumber: 95,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                        lineNumber: 84,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute top-1 left-full text-[9px] bg-black/20 rounded-md
                      flex flex-col transition-opacity ${ismenuTextOpen ? "opacity-100" : "opacity-0"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "hover:bg-black/10",
                                            onClick: ()=>onDelete(item),
                                            children: "Удалить"
                                        }, void 0, false, {
                                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                            lineNumber: 111,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 82,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                            className: "-right-1 bottom-1/2 translate-y-1/2 w-1 h-3 cursor-w-resize",
                            onStart: (e)=>startResize(e, item, "horizontal")
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 122,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                            className: "-top-1 left-1/2 -translate-x-1/2 w-3 h-1 cursor-s-resize",
                            onStart: (e)=>startResize(e, item, "top")
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 126,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                            className: "-bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 cursor-s-resize",
                            onStart: (e)=>startResize(e, item, "bottom")
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 130,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                            className: "-bottom-1.5 -right-1.5 w-2 h-2 cursor-se-resize",
                            onStart: (e)=>startResize(e, item, "diagonal")
                        }, void 0, false, {
                            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                            lineNumber: 134,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
            lineNumber: 72,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function ResizeHandle({ className, onStart }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function RightField({ rightPanelOpen, setRightPanelOpen, userId, setUserId, isReply, isAnon, setIsAnon, handleSendMessage, idRef, anonRef, isRecieve, routeTo }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-20 bg-black/50 transition-all duration-300 overflow-hidden 
                    ${rightPanelOpen ? "backdrop-blur-lg translate-x-0" : "backdrop-blur-none translate-x-full"}
                `,
        onMouseDown: (e)=>setRightPanelOpen(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-0 inset-y-0 flex justify-center items-center    md:w-[400px] w-full bg-black/90 z-20",
            onMouseDown: (e)=>{
                e.stopPropagation();
            },
            children: isRecieve ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " bg-white/10 rounded-xl p-3   ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>routeTo(userId),
                    children: [
                        "Ответить, ",
                        `${userId}`
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                    lineNumber: 214,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                lineNumber: 211,
                columnNumber: 21
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "relative flex flex-col w-full justify-center items-center",
                onSubmit: (e)=>{
                    e.preventDefault();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: idRef,
                        value: userId || "",
                        onChange: (e)=>setUserId(e.target.value),
                        disabled: isReply,
                        type: "text",
                        placeholder: "ID кисы",
                        className: `p-2 mb-4 w-1/2 bg-white/10 border rounded-md text-white
                                    ${isReply && "opacity-50"}
                            `
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                        lineNumber: 227,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full justify-center items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                ref: anonRef,
                                checked: isAnon,
                                onChange: (e)=>{
                                    setIsAnon(e.target.checked);
                                },
                                className: "bg-white/10 border rounded-md text-white"
                            }, void 0, false, {
                                fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                lineNumber: 239,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px]",
                                children: `Будешь анонимен? (потом можно изменить)`
                            }, void 0, false, {
                                fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                                lineNumber: 246,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                        lineNumber: 238,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "p-2 mt-4 border rounded-2xl hover:bg-white/20 transition-all duration-200",
                        onClick: handleSendMessage,
                        children: "Отправить"
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                        lineNumber: 249,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute left-0 w-10 h-20 bg-white/20 rounded-r-full top-1/2 -translate-y-1/2   hover:bg-white/40 transition-all duration-200   ",
                        onClick: ()=>setRightPanelOpen(false),
                        children: `>`
                    }, void 0, false, {
                        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                        lineNumber: 257,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/anonlove/createcard/components/all.tsx",
                lineNumber: 221,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/anonlove/createcard/components/all.tsx",
            lineNumber: 202,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/anonlove/createcard/components/all.tsx",
        lineNumber: 196,
        columnNumber: 9
    }, this);
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
        rotate: 0,
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
            fontSize: item.fontSize,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$components$2f$all$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/anonlove/createcard/components/all.tsx [app-ssr] (ecmascript)");
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
;
function CreateCardPage({ initialData }) {
    const { user, profile, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    //messageId
    const messageIdRaw = searchParams.get("id");
    const messageId = messageIdRaw ? decodeURIComponent(messageIdRaw) : null;
    //userId
    const rawTo = searchParams.get("to");
    const to = rawTo ? decodeURIComponent(rawTo) : null;
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null) // получаем из url
    ;
    const [isReply, setIsReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // чье сообщение isMine = true || false
    const isMine = searchParams.get("isMine");
    // тип перехода send или recieve
    const type = searchParams.get("type");
    const [messageType, setMessageType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const isRecieve = type === "recieve";
    const isSend = type === "send";
    const canEdit = isSend;
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$checkMobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCheckMobile"])();
    const { sendMessage: send, loading: messageLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMessages"])(user?.id || null);
    const { message, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$things$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentMessage"])(isRecieve ? user?.id || null : null, isRecieve ? messageId : null, isMine);
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
    // const [isAnon, setIsAnon] = useState(false)
    const [anonState, setAnonState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        isAnon: false,
        anonUsedOnce: false,
        canToggle: true
    });
    const [ismenuTextOpen, setMenuTextOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const touchDistanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { startDrag, startResize, deleteItem, zoomHandlers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$useItemInteractions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userItemInteractions"])(items, setItems, fieldRef, setViewport, viewport);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        to,
        type
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isRecieve) return;
        if (!message) return;
        if (loading) return;
        setItems(message.body);
    }, [
        isRecieve,
        message
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!userId) return;
        checkAnon();
    });
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
            router.push('anonlovemain');
        } catch (error) {
            console.log(error.message || 'Error sending message');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex flex-col justify-center items-center h-full overflow-hidden`,
        style: {
            backgroundColor: bgStyle
        },
        children: [
            (isSend || isRecieve && !loading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative border  rounded-md bg-white overflow-hidden z-10
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
                },
                ...zoomHandlers,
                style: {
                    transform: `
                            translate(${viewport.offsetX}px, ${viewport.offsetY}px)
                            scale(${viewport.scale})
                            `,
                    transformOrigin: "center center"
                },
                children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$components$2f$all$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasItem"], {
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
                        isLoading: loading
                    }, item.id, false, {
                        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                        lineNumber: 179,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                lineNumber: 159,
                columnNumber: 21
            }, this),
            !isRecieve && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex p-2 mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "p-2 border rounded-2xl",
                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$btnFunction$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createText"])(setItems),
                    children: "Text"
                }, void 0, false, {
                    fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                    lineNumber: 203,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                lineNumber: 201,
                columnNumber: 21
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
                    lineNumber: 226,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                lineNumber: 216,
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
                    lineNumber: 246,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                lineNumber: 236,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$anonlove$2f$createcard$2f$components$2f$all$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RightField"], {
                rightPanelOpen: rightPanelOpen,
                setRightPanelOpen: setRightPanelOpen,
                userId: userId,
                setUserId: setUserId,
                isReply: isReply,
                isAnon: isAnon,
                setIsAnon: setIsAnon,
                handleSendMessage: handleSendMessage,
                idRef: idRef,
                anonRef: anonRef,
                isRecieve: isRecieve,
                routeTo: (id)=>{
                    // router.push(`createcard?type=send&id=${encodeURIComponent(id ?? '')}`)
                    router.push(`createcard?type=send&to=${encodeURIComponent(id ?? '')}`);
                }
            }, void 0, false, {
                fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
                lineNumber: 255,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/anonlove/createcard/CreateCardClient.tsx",
        lineNumber: 151,
        columnNumber: 13
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f32cb8df._.js.map