---
title: "Next.js 的 routing"
date: "2024-09-30"
cate: "next.js"
tag: ["next.js", "App router", "routing"]
minsToRead: 3
desc: "這是一段描述"
---

Next.js 的路由系統是基於專案的資料夾結構

建立一個包含 `page.js` 的新資料夾即代表新增一個新路由，路徑名稱等於資料夾名稱

Next 和 React 在靜態路由和動態路由方面的差異:

**Next**

-   靜態路由: 直接透過檔案系統創建
-   動態路由: 將資料夾名稱使用方括號 `[]` 包起來，即可創造動態路由，下方範例的 [id] 即為動態路由

```md
├── about
│ └── page.jsx
└── post
├── [id]
│ └── page.jsx
├── layout.jsx
└── page.jsx
```

**React**

-   靜態路由: 通常使用第三方函式庫如 React Router 手動定義
-   動態路由: 在路由設定中明確指定參數，下方範例的:productId 即為動態

```jsx
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:productId" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
};
```

## 補充

由於 Next.js 是依靠專案資料夾來建立路由，所以[官方文件](https://nextjs.org/docs/getting-started/project-structure)提供關於資料夾命名的規範，更方便我們管理專案，最後記得依照自己需求選擇 App router 或 Page router 。
