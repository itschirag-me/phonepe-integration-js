# PhonePe Payment Gateway Integration

This repository serves as a boilerplate for integrating the PhonePe payment gateway with a Node.js backend and a React frontend. The goal of this project is to provide a starting point for developers looking to implement PhonePe payment functionality into their applications. 

## Table of Contents

- [Overview](#overview)
- [Environment Variables](#environment-variables)
  - [.env.dev](#envdev)
  - [.env.prod](#envprod)
- [Running the Backend](#running-the-backend)
  - [For Development](#for-development)
  - [For Production](#for-production)
- [Running the Frontend](#running-the-frontend)

## Overview

The backend, located in the `server` directory, handles the integration with the PhonePe API and manages payment-related processes. On the other hand, the React frontend, situated in the `client` directory, offers a user interface for initiating and processing payments.

By using this boilerplate, developers can streamline the integration of PhonePe payments into their Node.js projects, reducing development time and effort while ensuring a robust payment processing system.

## Environment Variables

- `PORT=3001`
- `PHONEPE_KEY=YOUR_PHONEPE_KEY`
- `PHONEPE_KEY_INDEX=YOUR_PHONEPE_KEY_INDEX`
- `PHONEPE_MERCHANT_ID=YOUR_PHONEPE_MERCHANT_ID`
- `PHONEPE_FRONTEND_REDIRECT_URL=YOUR_FRONTEND_REDIRECT_URL`
- `PHONEPE_REDIRECT_URL=YOUR_BACKEND_REDIRECT_URL`
- `PHONEPE_BASE_URL=ENV_BASED_PHONEPE_BASE_URL`

**Note:** If you're using the dev environment, please use the following `PHONEPE_BASE_URL` value:

### .env.dev
```
PHONEPE_BASE_URL=https://api-preprod.phonepe.com/apis/hermes
```

For production, use the following `PHONEPE_BASE_URL` value:
### .env.prod

```
PHONEPE_BASE_URL=https://api.phonepe.com/apis/hermes
```

## Running the Backend

### For Development

To run the Node.js backend server for development purposes, navigate to the `server` directory and use the following commands:

```bash
# Install dependencies
npm install

# Start the server in development mode
npm run start:dev
```

### For Production

To run the Node.js backend server for production, navigate to the `server` directory and use the following command:

```bash
# Install dependencies
npm install

# Build the TypeScript backend (transpile to JavaScript) [Only for Production]
npm run build

# Start the server in production mode
npm start
```

## Running the Frontend

To run the React frontend, navigate to the `client` directory and use the following commands:

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Build the production-ready frontend [Only for Production]
npm run build
```