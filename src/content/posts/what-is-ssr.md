---
title: What is Server Side Rendering
summery: Server-Side Rendering (SSR) is a web development technique where web pages are generated on the server side and sent to the client
tags: ["what-is"]
publishedDate: 2023-08-12T17:30:00.000Z
---

# Server-Side Rendering (SSR)

Server-side rendering is a cool web development trick where the server creates the whole webpage and sends it to your browser. Unlike when your browser does all the work in client-side rendering, here, the server does the heavy lifting, sending a complete webpage for a smoother, faster user experience.

## Pros

- SEO-Friendly: SSR helps improve search engine optimization as search engines can easily crawl and index content from server-rendered pages.
- Improved Initial Load Time: Users experience faster initial page loads because the server sends a fully rendered HTML page, reducing the need for client-side rendering.
- Social Media Sharing: When users share links on social media, the shared content is already present in the HTML, ensuring a rich preview without requiring additional client-side rendering.
- Accessibility: SSR provides better support for users with disabilities or slower network connections, as the server delivers a fully formed page.

## Cons

- Server Load: Server-side rendering can put more load on the server compared to client-side rendering, especially in scenarios with a high volume of requests.
- Complexity: Implementing SSR can be more complex than client-side rendering, requiring additional server-side logic and infrastructure.
- Limited Interactivity: Initial page loads may be faster, but subsequent interactions might still require client-side rendering, impacting the overall user experience.

## Some Popular Frameworks used as SSR

- Next
- Nuxt
- Svelte Kit
- Gatsby

### [Next](https://nextjs.org)

![Next_Website](https://i.ibb.co/093Q58w/Screenshot-2023-12-16-161232.png)

Next.js is a handy framework based on React, making SSR setup a breeze. It also comes with neat features like automatic code splitting and easy routing.

#### Pros

- Easy Setup: Next.js simplifies the setup of SSR, making it accessible for developers without extensive configuration.
- Automatic Code Splitting: It offers automatic code splitting, improving performance by only sending the necessary JavaScript to the client.
- Routing: Next.js includes a straightforward routing system, making navigation between pages seamless.

#### Cons

- Learning Curve: While it's user-friendly, there might still be a learning curve, especially for beginners.

### [Nuxt](https://nuxt.com)

![Nuxt_Website](https://i.ibb.co/cCjXxcY/Screenshot-2023-12-16-161435.png)

Nuxt.js, built on Vue.js, is perfect for creating Vue applications with SSR. It's easy to use, following a "less setup, more magic" approach.

#### Pros

- Vue Integration: Nuxt.js seamlessly integrates with Vue.js, offering a familiar development experience for Vue developers.
Convention over Configuration: It follows the convention over configuration principle, reducing the need for explicit configuration.
- Automatic Routing: Similar to Next.js, Nuxt.js provides automatic routing based on the project's file structure.

#### Cons

- Limited Flexibility: The convention over configuration approach might limit flexibility in certain scenarios where more customization is needed.

### [Svelte Kit](https://kit.svelte.dev)

![SvelteKit_Website](https://i.ibb.co/J75J6cc/Screenshot-2023-12-16-161640.png)

Svelte Kit is a framework for making web apps with Svelte. It's got built-in SSR support and other cool features.

#### Pros

- Svelte Integration: Svelte Kit is tailored for Svelte developers, offering a smooth integration with the Svelte framework.
- Built-in SSR Support: It comes with built-in support for server-side rendering, making it easy to implement SSR in Svelte applications.
- File System-Based Routing: Svelte Kit uses a file system-based routing approach for simplicity and ease of use.

#### Cons

- Community Size: As a newer framework, Svelte Kit may have a smaller community compared to more established frameworks.

### [Gatsby](https://gatsbyjs.com)

![Gatsby](https://i.ibb.co/tJMYHPY/Screenshot-2023-12-16-161700.png)

Gatsby, known for super-fast performance, is often linked with static site generation but also supports SSR. It's built on React and uses GraphQL.

#### Pros

- Static Site Generation: Gatsby is known for its static site generation capabilities, leading to fast loading times.
- React and GraphQL: Built on React and using GraphQL, Gatsby leverages these technologies for efficient development.
- Rich Plugin Ecosystem: Gatsby has a rich ecosystem of plugins, providing additional functionality and flexibility.

#### Cons

- Complexity for Larger Sites: While great for static sites, Gatsby's complexity may increase for larger and more dynamic projects.

---

That's SSR and some fantastic frameworks to explore—enjoy making your web experience smoother! 🚀