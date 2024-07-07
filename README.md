# IBA Chat Assistant (Frontend)

## Steps to Build the Project

### 1. Install NodeJs version 20.11.0

Ensure NodeJs version 20.11.0 is installed on your system. You can install it using a Node version manager (nvm) or by downloading it from the Node.js website.

### 2. Install Dependencies in package.json

Install the necessary dependencies listed in `package.json` using npm (Node Package Manager).

```bash
npm install
```

### Configure Environment Variables

Rename .env.example to .env and update the environment variables if needed. This file typically contains configuration settings such as API keys, base URLs, etc.

```bash
cp .env.example .env
```

### 4. Build the Project

Run the following command to build the project using npm.

```bash
npm run start
```

This command typically compiles the frontend code and starts a development server. Adjust the command based on your specific setup.

### 5. Use as Chrome Extension

If your project is intended to be used as a Chrome extension, follow these steps:
- Open "Manage Extensions" from Chrome's settings menu.
- Enable "Developer mode" if not already enabled.
- Click on "Load unpacked" and select your project's build folder.

This will load your frontend project as an unpacked extension in Chrome, allowing you to test and use it locally.
