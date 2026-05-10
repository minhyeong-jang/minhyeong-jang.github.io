---
title: "Typescript Enum Key to String Type"
date: 2021-03-20 23:55
tags: ["develop", "javascript"]
image: /covers/typescript.png
published: false
---

```typescript
export enum GoodsFilterMarketLabel {
  all = "전체",
  brand = "브랜드",
  premium = "프리미엄",
  soho = "쇼핑몰·마켓 상품",
}
export type GoodsFilterMarketType = keyof typeof GoodsFilterMarketLabel;
```
