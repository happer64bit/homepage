---
title: Best Pratices of Express.JS
summary: A guide to maintaining clean code and scalable architecture in Express.JS and similar frameworks
tag: Software Design
keywords: ["Express.JS", "Express.JS Clean Code"]
publishedDate: 2025-
---

# Best Practices of Maintaining Express.JS or Other Similar Frameworks

Imagine, you are writing your own API Gateway in Express.JS or other similar frameworks like Fastify, Koa.JS, you might write the play-doh code that will be harder to maintain.

In this article, we will deep-dive into maintaining and writing clean code and good architecture in Express.JS.

## Layered Architecture

Instead of throwing every business logic and controller into router files, consider separating them into dedicated folders:

```
/src
  /controllers  --> (Handles HTTP requests)
  /services     --> (Pure business logic)
  /repositories --> (Database interactions)
  /routes       --> (Framework-specific routing)
  /models       --> (Data structures)
  /config       --> (Environment, framework config)
```

## Keep Framework Code Out of Business Logic

You might combine business logic with controllers in one file, which can lead to maintainability issues.

```js
const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};
```

Instead, separate business logic:

```js
// services/userService.js (Pure function)
const getUserById = async (id) => {
    return await User.findById(id);
};
```

```js
// controllers/userController.js (Express-specific)
const getUser = async (req, res) => {
    const user = await getUserById(req.params.id);
    res.json(user);
};
```

## TypeScript (Optional)

Using TypeScript in Express.JS might be quite painful, but it is worth considering. If you are developing an API with your team, type-safe code will help you and your team understand the code better, allowing you to maintain your application easily.

## Standardizing API Responses

Every API response must be consistent.

### Example:

```json
{
    "type": "error",
    "message": "Authentication Required",
    "statusCode": 403
}
```

```json
{
    "type": "success",
    "message": "Post Created Successfully",
    "statusCode": 201
}
```

To enforce standardization, create a response handler:

```js
// utils/responseHandler.js
const createResponse = (type, message, statusCode, data = null) => {
    return { type, message, statusCode, data };
};

module.exports = { createResponse };
```

```js
// controllers/userController.js
const { createResponse } = require('../utils/responseHandler');

const getUser = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            return res.status(404).json(createResponse("error", "User not found", 404));
        }
        res.json(createResponse("success", "User fetched successfully", 200, user));
    } catch (error) {
        res.status(500).json(createResponse("error", "Internal Server Error", 500));
    }
};
```

## Environment Variables and Config Management

Never hardcode sensitive credentials in your code. Use `.env` files and a config management system.

```toml
PORT=3000
DB_URI=mongodb://localhost:27017/mydatabase
JWT_SECRET=mysecretkey
```

Use `dotenv` to load environment variables:

```js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## Error Handling Middleware

Instead of writing repetitive `try-catch` blocks, centralize error handling in a middleware:

```js
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        type: "error",
        message: err.message || "Internal Server Error",
        statusCode: err.status || 500
    });
};

module.exports = errorHandler;
```

Use it in the main `app.js`:

```js
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const app = express();

// Routes here

app.use(errorHandler);
```

## Use Async/Await and Avoid Callback Hell

Using `async/await` improves readability over deeply nested callbacks.

```js
// Bad practice
app.get('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) return res.status(500).send(err);
        res.json(user);
    });
});
```

Better approach:

```js
// Good practice
app.get('/users/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        next(error);
    }
});
```

## Logging and Monitoring

Use logging tools like Winston or Pino to log errors, API requests, and system performance.

```js
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.Console({ format: winston.format.simple() })
    ]
});

logger.info("Server started");
```

## Conclusion

Maintaining an Express.JS application requires a structured approach. By following best practices such as layered architecture, proper error handling, standardizing responses, and using environment variables, you can create a scalable and maintainable backend. Keep your business logic separate from the framework code and ensure consistent logging and monitoring for better debugging. Happy coding!

