---
title: "Ｎext.js 的環境變數"
date: "2024-10-6"
cate: "next.js"
tag: ["next.js", ".env", "secret"]
minsToRead: 5
---

Next 也支援將環境變數存放在 `.env` 檔案中，並在不同環境中引入使用。

用一個案例來說說為何需要這樣做

為了**避免測試資料或開發中的功能影響產品的使用者體驗**，通常產品的 API 會分做兩個版本 (stage & prod)，一個做開發及測試使用，一個正式產品使用，這時我們就會將 API url 宣告成變數並存放在 `.env` 中，讓框架或打包工具自動地幫我們替換這些環境變數。

e.g. 我有一個關於使用者資料的 API，依照前面的說明 API 實際可能會像這樣

-   測試 https://stage.company/api/info
-   正式 https://company/api/info

那在使用時會將 https://stage.company/api、https://company/api 宣告成環境變數(BASE_URL)，並在 call API 時使用

```js
fetch(`${BASE_URL}/info`).then((response) => {
    // do something with response
});
```

接下來幫大家快速介紹環境變數的使用方式及優先順序

### 引入環境變數

在專案的根目錄中新增 `.env` 檔案，就可以開始在裡面宣告環境變數

![環境變數](/images/env_1.png "環境變數")

```js
// .env
NEXT_PUBLIC_API_BASE_URL = "http://localhost:3000/";
NEXT_PUBLIC_TEST_VAR = "這是一個環境變數";
```

```js
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// 我自己是習慣再將環境變數放到一個變數中，直接引入也可

fetch(`${BASE_URL}/info`).then((response) => {
    // do something with response
});
```

### 不同環境變數的使用時機

除了有所有環境通用的 `.env` 外，Next 還提供 **development**、**test** 及 **production** 三種環境，這樣就可以順利在不同環境下使用不同邊變數

![環境變數2](/images/env_2.png "環境變數2")

依照 Next 官方文件說明，在起 dev server 時會載入 `.env.development`
![環境變數3](/images/env_3.png "環境變數3")

而在打包時會使用 `.env.production`

![環境變數4](/images/env_4.png "環境變數4")

### 優先順序

環境變數除了會依照當前環境外，另外也會有順序性，排序如下

1. process.env
2. .env.$(NODE_ENV).local
3. .env.local (Not checked when NODE_ENV is test.)
4. .env.$(NODE_ENV)
5. .env

今天的介紹大概到這邊，透過環境變數，可以讓我們更方便管理不同環境下需帶入的值或參數。希望今天的介紹能幫助到大家～

更多詳細說明可以到 Next.js 的[官方文件](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)中閱讀

<!-- <TestButton>測試環境變數</TestButton> -->
