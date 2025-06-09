# Admin Panel Project

## Project Overview
This Admin Panel project allows an admin to manage users and products efficiently. It includes authentication, user and product management, profile updates, and email notifications.

## Tech Stack
- **Backend:** Node.js, Express.js  
- **Frontend:** EJS, Bootstrap (optional)  
- **Database:** MongoDB with Mongoose ODM  
- **Authentication:** Passport.js, bcrypt  
- **Session Management:** express-session  
- **Middleware:** cookie-parser, body-parser  
- **File Uploads:** Multer  
- **Email:** Nodemailer (for welcome emails and password reset)

---

## Features

### 1. User Authentication
- Admin registration and login/logout functionality  
- Password hashing using bcrypt  

### 2. User Management
- CRUD operations on users (add, edit, delete, view)  

### 3. Product Management
- CRUD operations on products (add, edit, delete, view)  
- Product fields: Name, Description, Price, Category, Stock Quantity, Image  
- Search products by name or category  
- Image upload support with Multer  

### 4. Dashboard
- Overview of total products  
- Recent activity log  
- Product listing with Edit/Delete actions  

### 5. Profile Management
- Users can update their profile (name, email, password)  
- Profile picture upload functionality  

### 6. Email Notifications
- Send welcome emails to new users  
- Password reset functionality with email verification  

---

## Routes

| Method | Route                  | Description              |
|--------|------------------------|--------------------------|
| GET    | /                      | Home Page                |
| GET    | /login                 | Login Page               |
| POST   | /login                 | Handle Login             |
| GET    | /logout                | Logout User              |
| GET    | /user/dashboard        | User Dashboard           |
| POST   | /user/add              | Add New User             |
| POST   | /user/edit/:id         | Edit User                |
| GET    | /user/delete/:id       | Delete User              |
| GET    | /user/profile          | View User Profile        |
| POST   | /user/profile/update   | Update User Profile      |
| GET    | /products              | List All Products        |
| POST   | /product/add           | Add New Product          |
| POST   | /product/edit/:id      | Edit Product             |
| GET    | /product/delete/:id    | Delete Product           |

---


