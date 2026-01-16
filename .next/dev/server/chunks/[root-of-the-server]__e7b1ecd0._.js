module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/api/lots/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "broadcastToClients",
    ()=>broadcastToClients,
    "clients",
    ()=>clients,
    "lots",
    ()=>lots
]);
let lots = [];
const clients = new Set();
async function GET(req) {
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
        start (controller) {
            clients.add(controller);
            console.log('✅ Клиент подключился. Всего:', clients.size);
            const initialMessage = `data: ${JSON.stringify({
                type: 'INITIAL_LOTS',
                data: lots
            })}\n\n`;
            controller.enqueue(encoder.encode(initialMessage));
            const keepAlive = setInterval(()=>{
                try {
                    controller.enqueue(encoder.encode(': keep-alive\n\n'));
                } catch  {
                    clearInterval(keepAlive);
                }
            }, 30000);
            req.signal.addEventListener('abort', ()=>{
                clearInterval(keepAlive);
                clients.delete(controller);
                console.log('❌ Клиент отключился. Всего:', clients.size);
            });
        }
    });
    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Contol': 'no-cache, no-transform',
            'Connection': 'keep-alive'
        }
    });
}
function broadcastToClients(message) {
    const encoder = new TextEncoder();
    const data = `data: ${JSON.stringify(message)}\n\n`;
    clients.forEach((controller)=>{
        try {
            controller.enqueue(encoder.encode(data));
        } catch (error) {
            console.error('Error broadcasting message to client:', error);
            clients.delete(controller);
        }
    });
}
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e7b1ecd0._.js.map