# 🚲 Bike Store Express Application

_A robust TypeScript-based Express.js application for managing bikes, customer orders, and revenue tracking, seamlessly integrated with MongoDB._

![Node.js](https://img.shields.io/badge/node.js-v16-green) ![MongoDB](https://img.shields.io/badge/mongodb-atlas-brightgreen) ![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue) ![Express](https://img.shields.io/badge/Express-4.x-orange) ![Mongoose](https://img.shields.io/badge/Mongoose-5.x-blueviolet)

_`Node.js`, `TypeScript`, `Express`, `MongoDB`, `Mongoose`_

## Features

- **🚲 Bike Management (CRUD):** Perform Create, Read, Update, and Delete operations for bike products.
- **📦 Order Management:** Customers can place orders, and stock is updated in real time.
- **💰 Revenue Calculation:** Aggregate total revenue from orders using MongoDB's powerful aggregation framework.
- **✅ Data Validation:** Enforce data integrity with Mongoose schema validation.
- **🔒 Environment Security:** Use `.env` files to securely manage sensitive credentials.

---

## Table of Contents

1. [Project Setup](#project-setup)  
   1.1 [Clone the Repository](#1-clone-the-repository)  
   1.2 [Install Dependencies](#2-installation)  
   1.3 [Set Up Environment Variables](#3-set-up-environment-variables)  
   1.4 [Configure MongoDB](#4-set-up-mongodb)
2. [Running the Application](#running-the-application)
3. [Endpoints](#endpoints)  
   3.1 [Create a Bike](#1-create-a-bike)  
   3.2 [Get All Bikes](#2-get-all-bikes)  
   3.3 [Get a Specific Bike](#3-get-a-specific-bike)  
   3.4 [Update a Bike](#4-update-a-bike)  
   3.5 [Delete a Bike](#5-delete-a-bike)  
   3.6 [Order a Bike](#6-order-a-bike)  
   3.7 [Calculate Revenue](#7-calculate-revenue)
4. [Live: Application Hosting](#application-hosting)

---

## Project Setup

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/eh-munna/bike-store-eh-munna.git
```

```bash
cd bike-store-eh-munna
```

### 2. Installation

Install the required dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and configure the following:

```env
NODE_ENV=development
PORT=3000
DB_URL=mongodb+srv://<db_username>:<db_password>@cluster0.mongodb.net/<db_name>?retryWrites=true&w=majority&appName=Cluster0
```

> **Note:** Keep sensitive credentials secure and never commit your `.env` file to version control.

### 4. Set Up MongoDB

- Use either a local MongoDB instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud hosting.
- Ensure your database is running and accessible.

---

## Running the Application

Start the application in development mode:

```bash
npm run start:dev
```

Start the application in production mode:

```bash
npm run start:prod
```

---

## Endpoints

### 1. Create a Bike

- **Endpoint:** `/api/products`
- **Method:** `POST`
- **Request Body Example:**

```json
{
  "name": "Rock Rider 3000",
  "brand": "Decathlon",
  "price": 800,
  "category": "Mountain",
  "description": "A durable mountain bike designed for off-road adventures.",
  "quantity": 35,
  "inStock": true
}
```

---

### 2. Get All Bikes

- **Endpoint:** `/api/products`
- **Method:** `GET`
- **Query Parameters:** A list of all bikes from the same category, accessed via `/api/products?searchTerm=category`.

  - `searchTerm` can be `name`, `brand`, or `category`
  - For example: `/api/products?category=Road`

- **Response Example:**

```json
{
  "message": "Bikes retrieved successfully",
  "status": true,
  "data": [
    {
      "_id": "674ca015dde6f6dd34d67a67",
      "name": "Sprint Carbon",
      "brand": "Bianchi",
      "price": 2200,
      "category": "Road",
      "description": "A carbon fiber road bike designed for maximum performance.",
      "quantity": 3,
      "inStock": true,
      "createdAt": "2024-12-01T17:42:45.167Z",
      "updatedAt": "2024-12-01T20:23:53.836Z",
      "__v": 0
    }
  ]
}
```

---

### 3. Get a Specific Bike

- **Endpoint:** `/api/products/:productId`
- **Method:** `GET`

---

### 4. Update a Bike

- **Endpoint:** `/api/products/:productId`
- **Method:** `PUT`
- **Request Body Example:**

```json
{
  "price": 1300,
  "quantity": 30
}
```

---

### 5. Delete a Bike

- **Endpoint:** `/api/products/:productId`
- **Method:** `DELETE`

---

### 6. Order a Bike

- **Endpoint:** `/api/orders`
- **Method:** `POST`
- **Request Body Example:**

```json
{
  "email": "customer@example.com",
  "product": "674ca015dde6f6dd34d67a67",
  "quantity": 2,
  "totalPrice": 2400
}
```

---

### 7. Calculate Revenue

- **Endpoint:** `/api/orders/revenue`
- **Method:** `GET`
- **Response Example:**

```json
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 1599.94
  }
}
```

---

## Application Hosting

<a href="https://bike-store-eh-munna.vercel.app/" target="_blank">Bike Store Express Application Live On...</a>

---
