# NestJS To-Do API

A robust RESTful API for a To-Do list application, built with NestJS, PostgreSQL, and JWT for authentication.

## Features

- **User Authentication**: Secure user registration and login using JWT (JSON Web Tokens).
- **Role-Based Access Control **: Differentiated access for `User` and `Admin` roles.
- **Task Management**: Full CRUD (Create, Read, Update, Delete) operations for tasks.
- **Task Ownership**: Tasks are private to the user who created them.
- **Task Labels**: Ability to add and remove labels from tasks.
- **Pagination & Filtering**: Efficiently query and navigate large sets of tasks.
- **Database**: Uses PostgreSQL for persistent data storage.
- **Validation**: DTOs (Data Transfer Objects) for request validation.

## Technologies Used

- [NestJS](https://nestjs.com/ 'null')
- [TypeScript](https://www.typescriptlang.org/ 'null')
- [PostgreSQL](https://www.postgresql.org/ 'null')
- [TypeORM](https://typeorm.io/ 'null')
- [Docker](https://www.docker.com/ 'null')
- [JWT](https://jwt.io/ 'null') (for authentication)

## Prerequisites

- [Node.js](https://nodejs.org/en/ 'null') (v18 or later recommended)
- [npm](https://www.npmjs.com/ 'null') or [yarn](https://yarnpkg.com/ 'null')
- [Docker](https://www.docker.com/products/docker-desktop/ 'null') and [Docker Compose](https://docs.docker.com/compose/ 'null')
- A running PostgreSQL instance (or use the provided Docker setup)

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/Matviidev/NestjsTodoApi
cd NestjsTodoApi

```

### 2. Install Dependencies

```
npm install

```

### 3. Configure Environment

Create a `.env` file in the root of the project by copying the example.

```
cp .env.example .env

```

### 5. Run Migrations

The configuration `DB_SYNC=false` is set, which is excellent for production. This means you must run database migrations to create your tables.

_(Assuming you have a TypeORM migration script set up in your `package.json`)_

```
npm run migration:run

```

### 6. Start the Application

```
# Development mode with hot-reload
npm run start:dev

# Production mode
npm run start:prod

```

The API will be running at `http://localhost:3000`.

## API Endpoints

### Authentication Endpoints

| Method | Endpoint         | Description                 | Authentication | Access              |
| ------ | ---------------- | --------------------------- | -------------- | ------------------- |
| POST   | `/auth/register` | Register a new user         | Public         | All                 |
| POST   | `/auth/login`    | Login and receive JWT token | Public         | All                 |
| GET    | `/auth/profile`  | Get current user profile    | Required       | Authenticated Users |
| GET    | `/auth/admin`    | Admin-only endpoint         | Required       | Admin Only          |

### Task Endpoints

| Method | Endpoint            | Description                               | Authentication | Access              |
| ------ | ------------------- | ----------------------------------------- | -------------- | ------------------- |
| GET    | `/tasks`            | Get all tasks (with filters & pagination) | Required       | Own Tasks Only      |
| GET    | `/tasks/:id`        | Get a specific task by ID                 | Required       | Own Tasks Only      |
| POST   | `/tasks`            | Create a new task                         | Required       | Authenticated Users |
| PATCH  | `/tasks/:id`        | Update a task                             | Required       | Own Tasks Only      |
| DELETE | `/tasks/:id`        | Delete a task                             | Required       | Own Tasks Only      |
| POST   | `/tasks/:id/labels` | Add labels to a task                      | Required       | Own Tasks Only      |
| DELETE | `/tasks/:id/labels` | Remove labels from a task                 | Required       | Own Tasks Only      |
