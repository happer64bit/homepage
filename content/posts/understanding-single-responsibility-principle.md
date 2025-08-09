---
title: Understanding Single Responsibility Principle (SRP)
summary: Writing Clean and Manageable Code using single responsibility principle (SRP) from SOLID Principle
categories: ["clean code", "principle"]
publishedDate: 2025-08-09T12:05
---

In the world of software development, write codes should be clean so that other developer can contribute to the code easily with headache. One key reason to keep the code clean is to apply Single Responsibility Principle, or SRP. SRP is part of the SOLID principles.

SRP states that every module or class should have only one reason to change. It should ony have one job or one responsibility. This pricinple keeps the things simple.

```typescript [main.py]
class User {
    public name: string;
    public email: string;

    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
}

class EmailService {
    constructor() {}

    public sendEmail(user: User, message: string) {
        console.log("Sending email to " + user.email + ": " + message);
    }
}

let user = new User("Happa", "happa@example.com");
let service = new EmailService();

service.sendEmail(user, "Welcome aboard!");
```

In this code it mixed all class together in the simple file. This file hold many responsibilities in the a single file like `User`, `EmailService` and even main.

So We can seperate these classes into files. To follow SRP better, we should separate each class into its own file. This way:

* `User.ts` will handle user data only
* `EmailService.ts` will manage email sending only
* `main.ts` will handle application flow and use those classes

Separating like this improves maintainability. If you need to change email logic, you only update EmailService.ts. If user data changes, you update User.ts. Also, it makes your project cleaner and easier to navigate, especially when it grows.

```typescript
/src
  ├─ User.ts
  ├─ EmailService.ts
  └─ main.ts
```

So, I hope you all understand what SRP is and how to apply them in your code.