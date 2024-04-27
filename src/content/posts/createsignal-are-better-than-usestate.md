---
title: Why createSignal Is Better Than useState
summery: createSignal, found in libraries like Solid.js, offers automatic state updates, simplifying React development. Unlike useState, it streamlines data management and enhances app performance.
tags: ["compare"]
publishedDate: 2023-12-1T17:30:00.000Z
---
# Why `createSignal` Is Better Than `useState`

In the world of modern web development, managing state is crucial. Two popular tools for this are SolidJS and React. They use `createSignal` and `useState`, respectively. In this post, let's explore these tools to understand their syntax, usage, reactivity, and performance.

## Getting Started

### SolidJS

Here's a simple example showing how to manage state with `createSignal`.

```typescript
import { createSignal } from "solid-js";
import OtherComponent from './OtherComponent';

export default function Counter() {
  const [count, setCount] = createSignal(0);
  
  const handleOnClick = () => {
    setCount(count() + 1);
    console.log("(Clicked): current count: " + count());
  };

  return (
    <div>
      <OtherComponent />
      <p>Count: {count()}</p>
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
}
```

### React

```typescript
import { useState } from 'react';
import OtherComponent from './OtherComponent';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <OtherComponent />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
} 
```

## What's the Difference?

In SolidJS, components don't automatically update when the state changes. React, on the other hand, updates all components when the state changes, potentially impacting performance.

### SolidJS

SolidJS updates only the components affected by state changes, making it efficient.

![Solidjs_console](https://i.ibb.co/Kh4FZSf/Screenshot-2024-01-10-134716.png)

### React

React updates all components that depend on the state change. While simple, this may impact app responsiveness.

![React_Console](https://i.ibb.co/CMFZ7f4/Screenshot-2024-01-10-135210.png)

### Considerations

- **SolidJS**: Efficient updates only affect components linked to state changes.
  
- **React**: Updates may be broader, but React offers tools (e.g., `React.memo`, `shouldComponentUpdate`) for more control over rendering.