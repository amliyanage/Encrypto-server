# Encrypto Server 🔐

Welcome to **Encrypto Server**! This is the backend server for the **Encrypto** application, which handles encryption and decryption of sensitive data. It uses modern encryption techniques to ensure that your data is securely processed and stored.

## Overview 🛠️

**Encrypto Server** provides a backend API for encrypting and decrypting sensitive information. Built using **Node.js**, **Express**, and **Prisma**, this server allows you to integrate encryption capabilities into your application easily.

### Features

- **Encryption**: Securely encrypt sensitive data using AES and other cryptographic algorithms.
- **Decryption**: Easily decrypt data when required.
- **JWT Authentication**: Secure API endpoints with JSON Web Tokens (JWT).
- **Database Integration**: Store encrypted data securely in a MySQL database using Prisma.
- **Dev Environment**: Supports live-reload during development with **nodemon**.

## Tech Stack ⚙️

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for creating RESTful APIs.
- **Prisma**: ORM for working with MySQL databases.
- **bcryptjs & bcrypt**: For securely hashing passwords.
- **jsonwebtoken**: For managing authentication with JWT.
- **dotenv**: For environment variable management.
- **MySQL2**: MySQL database connector for Node.js.

## Installation 🚀

Follow these steps to set up the Encrypto Server on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amliyanage/Encrypto-server.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd Encrypto-server
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   - Copy `.env.example` to `.env`.
   - Set up your database connection and other sensitive environment variables in the `.env` file.

5. **Run the server:**
   For development mode with automatic reloading:
   ```bash
   npm run dev
   ```
   The server should now be running on `http://localhost:3000`.

## Scripts 📜

- **Development Mode**:  
  `npm run dev`  
  Starts the server with live reloading using **nodemon**. Changes to your code will automatically restart the server.
  
- **Test**:  
  `npm test`  
  A placeholder command for running tests (currently, no tests are defined).

## Dependencies 🛠️

The project includes the following dependencies:

- **@prisma/client**: Prisma client for working with the database.
- **bcrypt** & **bcryptjs**: Libraries for hashing passwords securely.
- **cors**: Middleware for enabling cross-origin requests.
- **dotenv**: Loads environment variables from a `.env` file.
- **express**: Framework for building the REST API.
- **jsonwebtoken**: For handling JWT authentication.
- **mysql2**: MySQL client for database connections.

### Development Dependencies

- **@types/***: TypeScript type definitions for various libraries.
- **nodemon**: Utility for automatically restarting the server during development.
- **prisma**: Prisma ORM for interacting with MySQL databases.
- **ts-node** & **typescript**: TypeScript runtime and compiler.

## Database Configuration 🗃️

1. **Prisma Setup**:  
   Prisma is used to interact with the MySQL database. To generate the Prisma client, run:
   ```bash
   npx prisma generate
   ```

2. **Migrate Database**:  
   Run the Prisma migrations to set up your database schema:
   ```bash
   npx prisma migrate dev
   ```

3. **Database Connection**:  
   Set up your MySQL database connection string in the `.env` file:
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/database_name"
   ```

## License 📜

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.
