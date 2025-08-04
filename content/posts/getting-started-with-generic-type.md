---
title: Getting Started With Generic Type
summary: Let's Master Typing in With Generic Type for Type Safe Code
categories: ["typescript", "generic-type", "types"]
publishedDate: 2025-02-25T07:08:55.133Z
---

Generic Type is a feature in programming that allows you to create classes, functions, and data structures that can operate on any data type without sacrificing type safety.

Without knowing generic type, you might use `any` in Typescript.

```typescript
function returnWhatIsPassed(value: any) {
    return value
}
```

However, using any sacrifices type safety.

```typescript
function returnWhatIsPassed<T>(value: T): T {
    return value
}
```

This function works with any data type while ensuring that the input and output are of the same type.

## Example of Generic Type in Action

```typescript
function getFirstElement<T>(arr: T[]): T {
    return arr[0]
}

let firstNumber = getFirstElement<number>([1, 2, 3]) // 1
let firstString = getFirstElement<string>(["a", "b", "c"]) // "a"
```

In this example, getFirstElement works with both numbers and strings while maintaining type safety.

Using generic types enhances the flexibility, safety, and readability of your code. Instead of relying on any, generics ensure that your functions and classes work correctly with different data types while maintaining clear and predictable behavior.