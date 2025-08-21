module.exports = {

"[project]/.next-internal/server/app/products/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/store/cart.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-rsc] (ecmascript)");
;
;
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        cart: [],
        hasHydrated: false,
        addToCart: (product)=>set((state)=>{
                const existingIndex = state.cart.findIndex((item)=>item.id === product.id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor);
                if (existingIndex !== -1) {
                    const updatedCart = [
                        ...state.cart
                    ];
                    updatedCart[existingIndex].quantity += product.quantity || 1;
                    return {
                        cart: updatedCart
                    };
                }
                return {
                    cart: [
                        ...state.cart,
                        {
                            ...product,
                            quantity: 1,
                            // هيتم الحصول عليهم من المنتج
                            selectedColor: product.selectedColor,
                            selectedSize: product.selectedSize
                        }
                    ]
                };
            }),
        removeFromCart: (product)=>set((state)=>({
                    cart: state.cart.filter((item)=>!(item.id === product.id && item.selectedColor === product.selectedColor && item.selectedSize === product.selectedSize))
                })),
        clearCart: ()=>set({
                cart: []
            })
    }), {
    name: "cart-storage",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    onRehydrateStorage: ()=>(state)=>{
            if (state) {
                state.hasHydrated = true;
            }
        }
}));
const __TURBOPACK__default__export__ = useCartStore;
}),
"[project]/src/app/products/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ProductDetails
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/cart.ts [app-rsc] (ecmascript)");
;
;
const products = [
    {
        id: 1,
        name: "Nike Ultraboost Pulse",
        shortDescription: "راحة وأناقة بأحدث تكنولوجيا الجري.",
        description: "حذاء Nike Ultraboost Pulse مصمم بأحدث تقنيات الراحة والدعم. خامات عالية الجودة مع تهوية مثالية لجعل خطواتك أكثر خفة.",
        price: 69.9,
        sizes: [
            "s",
            "m",
            "l",
            "xl",
            "xxl"
        ],
        colors: [
            "gray",
            "pink"
        ],
        images: {
            gray: "/products/7g.png",
            pink: "/products/7p.png"
        }
    }
];
async function ProductDetails() {
    const { cart } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].getState();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: cart.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: product.name
            }, product.id, false, {
                fileName: "[project]/src/app/products/[id]/page.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/products/[id]/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/products/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/products/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9ef0c7a0._.js.map