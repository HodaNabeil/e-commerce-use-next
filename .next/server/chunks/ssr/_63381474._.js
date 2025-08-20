module.exports = {

"[project]/src/app/cart/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>cartPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const steps = [
    {
        id: 1,
        title: "Shopping Cart"
    },
    {
        id: 2,
        title: "Shipping address"
    },
    {
        id: 3,
        title: "Payment Method"
    }
];
const cartItems = [
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
        },
        quantity: 1,
        selectedSize: "s",
        selectedColor: "gray"
    },
    {
        id: 2,
        name: "Levi's Classic Denim",
        shortDescription: "بنطلون جينز كلاسيكي يناسب كل الأوقات.",
        description: "جينز Levi's Classic Denim مصنوع من خامة متينة وجودة عالية، مناسب للخروج الكاجوال أو العمل مع تصميم أنيق ومريح.",
        price: 59.9,
        sizes: [
            "s",
            "m",
            "l"
        ],
        colors: [
            "blue",
            "green"
        ],
        images: {
            blue: "/products/2g.png",
            green: "/products/2gr.png"
        },
        quantity: 9,
        selectedSize: "m",
        selectedColor: " blue"
    },
    {
        id: 3,
        name: "Adidas Running Tee",
        shortDescription: "تيشيرت رياضي خفيف ومريح.",
        description: "تيشيرت Adidas مصنوع من قماش مرن وخفيف، يساعدك على الجري أو التمرين براحة تامة مع تهوية ممتازة.",
        price: 29.9,
        sizes: [
            "s",
            "m",
            "l",
            "xl"
        ],
        colors: [
            "black",
            "white"
        ],
        images: {
            black: "/products/3b.png",
            white: "/products/3bl.png"
        },
        quantity: 9,
        selectedSize: "xl",
        selectedColor: "black"
    }
];
function cartPage() {
    const searchPaaram = useSearchParams();
    const router = useRouter();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8 items-center justify-center mt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-medium",
                children: "Your Shopping Cart"
            }, void 0, false, {
                fileName: "[project]/src/app/cart/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 lg:flex-row  items-center",
                children: steps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 items-center ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: step.id
                            }, void 0, false, {
                                fileName: "[project]/src/app/cart/page.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: step.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/cart/page.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, step.id, true, {
                        fileName: "[project]/src/app/cart/page.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/cart/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/cart/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_63381474._.js.map