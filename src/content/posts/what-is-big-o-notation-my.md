---
title: Big O Notation ဆိုတာဘာလဲ? (Beginner Guide)
description: Algorithm ရဲ့ speed နဲ့ memory usage ကိုရှင်းပြတဲ့ Big O Notation ကို အလွယ်တကူနားလည်နိုင်အောင် ရေးသားထားပါတယ်။
categories: ["what-is", "algorithms"]
publishedDate: 2025-05-09T03:21:22.646Z
---

![Big O Notation Cheat Sheet](https://www.bigocheatsheet.com/img/big-o-complexity-chart.png)

Big O Notation ဆိုတာက algorithm selection နှင့် performance tuning လုပ်တဲ့အခါမှာ သုံးပါတယ်။ Big O Notation မှာ Time Complexity နဲ့  Space Complexity ဆိုပြီး နှစ်ခုရှိပါတယ်။

Time Complexity ဆိုတာက algorithms တစ်ခုက input size ပေါ် မှာမူတည်ပြီး algorithm ကို run estimated duration ကိုပြောတာပါ။

Space complexity ဆိုတာ algorithm တစ်ခုကို run တဲ့အခါမှာ required memory amount (bytes, kilobytes, etc.) ကို input size (n) ပေါ် မှာမူတည်ပြီး ခန့်မှုန်းတဲ့နေရာမှာသုံး ပါတယ်။

Big O Notation ဆိုတာကဟာ Programmer တိုင်းသိထားသင့်တဲ့ mathematical notation တစ်ခုဖြစ်ပါတယ်။ Code ရေးတတ်တာ alone နဲ့ မလုံလောက်ဘူး။ Algorithm ရဲ့ performance နားလည်ဖို့ Big O Notation သိထားသင့်တယ်။

## Time Complexity တွက်ခြင်း

Time Complexity ဆိုတာက Algorithm တစ်ခုပြုလုပ်တဲ့အချိန် ကြာချိန်ကို input အရွယ်အစားပေါ် မူတည်ပြီး ခန့်မှန်းဖော်ပြတဲ့အရာပဲ။

### ဉပမာများ
1. **Example 1: Constant Space Complexity (O(1))**

```python
def get_first_element(n: list[any]):
    return n[0]
```

ဒီမှာကတော့ `get_first_element` ဆိုတဲ့ function တစ်ခုပါ။ သူက တခြား linear loop တွေလည်းမသုံးရသလို တစ်ခါတည်းနဲ့ပြီး (အချိန်မပြောင်း) တာမလို့ Access Time လို့လည်းခေါ်လို့ရတဲ့ Time Complexity တစ်ခုလည်းဖြစ်ပါတယ်။ သူက Time Complexity တွေထဲမှာအမြန်ဆုံးဖြစ်ပါတယ်။

2. **Logarithmic Time Complexity (O(log n))**

```python
def binary_search(arr: list[any], target: any) -> int:
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

ဒါကတော့ binary search algorithm တစ်ခုဖြစ်ပြီးတော့ logarithmic time complexity `O(log n)` ရှိပါတယ်။ သူက Linear Time Complexity `O(n)` ထက်မြန်ပါတယ်။
ပြောရမယ်ဆိုရင်တော့ input size `n` က grow လာသမျှတိုင်း steps တွေကလည်း logarithmically အရ problem ရဲ့ size `n` ကို တစ်၀က်ဖျက်သွားမှာပါ။

ဉပမာပြောရမယ်ဆိုရင်

* Step 1 → 16 items
* Step 2 → 8
* Step 3 → 4
* Step 4 → 2
* Step 5 → 1

3. **Linear Space Complexity** (O(n))

```python
def add_all(arr: list[int]) -> int:
    result = 0
    for i in arr:
        result = i + result
    return result
```

ဒီ function မှာဆိုရင် `add_all` ဆိုတဲ့ problem ကို solve ဖို့အတွက် `n` မှာပါသမျှကို သုံးရပါမယ် အဲ့တာကြောင့် arr ကိုတစ်ခါတည်း loop ရတာဖြစ်တဲ့အပြင် တခြား additional loop တွေမသုံးရတာကြောင့် Linear Time (O(n)) input size အတိုင်းသာ loop ဖြစ်ပါတယ်။

## Space Complexity တွက်ခြင်း

### ဥပမာများ

1. **Constant Space Complexity** (O(1))

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

`create_list` ဆိုတဲ့ function မှာ input size n က `arr` ဆိုတဲ့ variable ကို n-size (input size) အဖြစ် memory size grow ဖြစ်တာကြောင့် linear space complexity, `O(n)` ဖြစ်ပါတယ်။.

3. **Recursive Space Complexity**

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
```

recursive function က recursion depth (n) အထိ stack call memory ထဲမှာ result တွေကိုသိမ်းတာ ကြောင့်မလို့ O(n) space complexity ဖြစ်ပါတယ်။

Big O Notation က algorithms ရဲ့ efficiency ဖို့ရည်ရွယ်ပါတယ်။ Big O Notation က algorithm တွေရဲ့ performance ကို input size နဲ့တူ duration နဲ့ memory (storage) ကို estimate လုပ်တဲ့ နေရာမှာ အရေးပါပါတယ်။

Learn More: [Big O Cheat Sheet](https://www.bigocheatsheet.com/)