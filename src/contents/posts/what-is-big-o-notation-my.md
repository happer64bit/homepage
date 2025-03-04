---
title: Big O Notation ဆိုတာဘာလဲ
summery: Data Structure နဲ့ Algorithms တွေ့နေကျဖြစ်တဲ့ Big O Notation အကြောင်း
tags: ["what-is", "algorithms"]
keywords: ["algorithms", "algorithm", "big-o", "big o notation"]
publishedDate: 2024-11-13T09:48:49.744Z
---

# Big O Notation ဆိုတာဘာလဲ

Big O Notation ဆိုတာက algorithm selection နှင့် performance tuning လုပ်တဲ့အခါမှာ သုံးပါတယ်။ Big O Notation မှာ Time Complexity နဲ့  Space Complexity ဆိုပြီး နှစ်ခုရှိပါတယ်။

Time Complexity ဆိုတာက algorithms တစ်ခုက input size ပေါ် မှာမူတည်ပြီး algorithm ကို run estimated duration ကိုပြောတာပါ။

Space complexity ဆိုတာ algorithm တစ်ခုကို run တဲ့အခါမှာ required memory amount (bytes, kilobytes, etc.) ကို input size (n) ပေါ် မှာမူတည်ပြီး ခန့်မှုန်းတဲ့နေရာမှာသုံး ပါတယ်။

## Space Complexity တွက်ခြင်းနည်းလမ်း

Space Complexity ကို အောက်ကအတိုင်း တွက်ချက်နိုင့်ပါတယ်။

$$
\text{Space Complexity} = \text{Fixed Space} + \text{Variable Space}
$$

### ဥပမာများ
1. **Example 1: Constant Space Complexity** (O(1))

```python
def add_numbers(a, b):
    return a + b
```

`add_numbers` ဆိုတဲ့ function က input size (a, b) ဘယ်လောက်ပဲ ကြီးနေပါစေ additional memory ကိုထပ်မသုံးတာကြောင့် constant space complexity (`O(1)`) ဖြစ်ပါတယ်။


2. **Example 2: Linear Space Complexity** (O(n))

```python
def create_list(n):
    arr = []
    for i in range(n):
        arr.append(i)
    return arr
```

`create_list` ဆိုတဲ့ function မှာ input size n က `arr` ဆိုတဲ့ variable memory ကို affects ဖြစ်တာကြောင့် linear space complexity, `O(n)` ဖြစ်ပါတယ်။.

3. **Example 3: Recursive Space Complexity**

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
```

recursive function သည် recursion depth (n) အထိ stack memory တာကြောင့်မလို့ O(n) space complexity ဖြစ်ပါတယ်။

Big O Notation က algorithms ရဲ့ efficiency ဖို့ရည်ရွယ်ပါတယ်။ Big O Notation က algorithm တွေရဲ့ performance ကို input size နဲ့တူ duration နဲ့ memory (storage) ကို estimate လုပ်တဲ့ နေရာမှာ အရေးပါပါတယ်။

Learn More: [Big O Cheat Sheet](https://www.bigocheatsheet.com/)