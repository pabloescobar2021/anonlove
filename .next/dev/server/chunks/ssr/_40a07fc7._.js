module.exports = [
"[project]/utils/supabase/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])(("TURBOPACK compile-time value", "https://mungyvxudhncvxjqtjeo.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11bmd5dnh1ZGhuY3Z4anF0amVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMTg5OTIsImV4cCI6MjA3ODY5NDk5Mn0.iNayNX_cNsAwJ0N_c69JdLJmoTL7WAt0B5CWItF_tLw"));
}),
"[project]/app/admin/ProductImageUpload.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductImageUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/supabase.ts [app-ssr] (ecmascript)");
"use client";
;
;
function ProductImageUpload({ product_id, slug = "asd" }) {
    async function handleUpload(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        const filePath = `valves/product-${product_id}.webp`;
        const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from("products").upload(filePath, file, {
            upsert: true
        });
        if (uploadError) {
            console.error("Error uploading image:", uploadError);
            return;
        }
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from("products").getPublicUrl(filePath);
        const publicUrl = data.publicUrl;
        const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("products").update({
            main_image: publicUrl
        }).eq("id", product_id);
        if (updateError) {
            console.error("Error updating product image URL:", updateError);
            return;
        }
        alert("Image uploaded and product updated successfully!");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 p-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "cursor-pointer",
            type: "file",
            accept: "image/*",
            onChange: handleUpload
        }, void 0, false, {
            fileName: "[project]/app/admin/ProductImageUpload.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/ProductImageUpload.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_40a07fc7._.js.map