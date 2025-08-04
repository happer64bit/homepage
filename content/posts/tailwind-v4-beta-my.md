---
title: What's new in Tailwind V4 beta.
summary: Tailwind CSS just drop a messive update
categories: ["tailwindcss", "css", "update"]
publishedDate: 2024-11-28T03:21:02.577Z
---

Tailwind CSS ရဲ့ v4.0 Beta 1 version ဟာ release လုပ်ခဲ့ပြီဖြစ်ပါတယ်။
Oxide လို့ခေါ်တဲ့ Tailwind CSS Engine တစ်ခုလုံးကို Rust နဲ့ Rewrite လုပ်ထားပါတယ်။ TailwindCSS ရဲ့ performance က 2x ပိုမြန်လာပါတယ်။

Oxide Engine ဟာဆိုရင် Lightning CSS ကိုသုံးထားတာမလို့ Performance ရော, Build Size ရောပိုကောင်းလာပါတယ်။

![Lightning CSS Comparison](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Il4X5gZ2aa082CN6Rk8kUQ.png)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

လို့ import လုပ်စရာမလိုတော့ပါဘူး

```css
@import 'tailwindcss';
```

ဆိုပြီး single-line နဲ့ Tailwind CSS ကို import လုပ်လို့ရပါပြီ

Tailwind config မှာဆိုရင်လည်း content ဆိုပြီး declare လုပ်စရာမလိုတော့ပါဘူး Tailwind CSS Team က automatic content detection algorithm ကိုထည့်ပေးထားပါတယ်။

Tailwind CSS Team က CSS-based configuration ကို prototyping လုပ်နေပါတယ်။ နောက်ပိုင်းကျရင် CSS ထဲမှာ configuration တွေထည့်လို့ရတော့မှာပါ။

```css
/* app.css */
/* experimental */
@import 'tailwindcss';

@import "./fonts" layer(base)

@theme {
  --font-family-sans: 'Roboto', 'sans-serif';
  --font-family-monument: 'Monument', 'sans-serif';

  --color-primary: #0D6EFD;
  --color-secondary: #6D28D9;
}
```

Tailwind CSS Beta မှာဆိုရင် Oxide Engine ကို သိသိသာသာ improvement အနေနဲ့ update ပေးသွားပါတယ်။

[Get Started With Tailwind v4 Beta](https://tailwindcss.com/docs/v4-beta)

## Reference

1. [What’s Tailwind Oxide Engine? The Next Evolution of Tailwind CSS (Marek Bombera, 2023)](https://medium.com/@bomber.marek/whats-tailwind-oxide-engine-the-next-evolution-of-tailwind-css-32e7ef8e19a1)