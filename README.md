# Frontend Todo APP

> This is a frontend of the Todo App, where we leverage the backend API to create a seamless user experience.

> This frontend is built using `React` and its accessories like `React DOM` and `React Router` etc. The API endpoints from the backend have been integrated into this frontend to provide you with full access to the Todo App's functionality.

## Check Live Website:

[https://todo-app-xi-teal.vercel.app](https://todo-app-xi-teal.vercel.app)

## Backend API used:

[https://github.com/nishu-saini/Todo-API-with-Auth](https://github.com/nishu-saini/Todo-API-with-Auth)

## Routes

- The frontend uses React Router to handle different routes and navigate between components. Below are the corresponding routes for the API endpoints:

### User API

- Get my profile: `/api/v1/user/me`
- Logout user: `/api/v1/user/logout`
- Register user: `/api/v1/user/new`
- Login user: `/api/v1/user/login`

### Task API

- Get my tasks: `/api/v1/task/mytasks`
- Create new task: `/api/v1/task/new`
- Update task: `/api/v1/task/id`
- Delete task: `/api/v1/task/id`

## Components

- The frontend is organized into different components, each serving specific purposes:

  `Header`: Displays the header of the application with navigation links.

  `LoginForm`: Allows users to log in to their accounts.

  `RegistrationForm`: Provides a form for new users to register.

  `TaskList`: Fetches and displays the list of tasks for the authenticated user.

  `TaskForm`: Allows users to create new tasks or update existing tasks.

  `UserProfile`: Displays user profile information and offers the option to delete the account.
