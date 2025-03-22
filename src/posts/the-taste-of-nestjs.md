---
title: The Taste of Nest.JS
summary: This article is about my honest option on Nest.JS
tag: Web Development
keywords: ["Nest.JS", "Experience of Nest.JS"]
publishedDate: 2025-03-22
---

# The Taste of NestJS

I was developing an API for one of my projects using NestJS. If you don't know NestJS, it's a TypeScript-based backend framework that heavily relies on Object-Oriented Programming (OOP) concepts like `class` and `interface`.

## Things I Like About NestJS

### Everything is Typed

Since NestJS uses TypeScript, it allows me to write type-safe code for my API endpoints. I don't have to worry about unexpected data structures or runtime type errors.

### Modular Architecture

NestJS follows a modular architecture, breaking down the code into smaller modules. This allows me to follow **THE SOLID PRINCIPLES**, making it easier to maintain and write clean code.

### Good Ecosystem

First, let's talk about the platform in NestJS. It uses the `ExpressJS` platform by default, meaning it runs the server powered by `ExpressJS`. However, if you don’t want to use `ExpressJS`, there’s an alternative called `Fastify`, which is much faster. You can even create your own platform.

NestJS also has a rich ecosystem with tools like `JsonWebToken`, `Config`, and support for `Microservices`.

## Things I Don’t Like

For developers new to TypeScript or object-oriented programming, NestJS can have a steep learning curve. The framework's reliance on decorators and dependency injection can be a bit overwhelming at first.

Module pain in NestJS refers to the difficulties developers face when managing dependencies, structuring modules, and ensuring proper module imports and exports. As projects grow, handling these aspects can become cumbersome and lead to issues like circular dependencies, unnecessary module bloat, and difficult debugging and maintenance.