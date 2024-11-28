# Login-Register System

A user authentication and profile management system built with **Laravel** (backend) and **React** (frontend) using **Ant Design** for UI components and **Laravel Passport** for API authentication, and **Redux** for state management. This app includes features such as user registration, login, and profile photo upload.


## Technologies Used

- **Backend**: PHP, Laravel
- **Frontend**: JavaScript, React, React-Redux, React Router, Ant Design
- **API Authentication**: Laravel Passport
- **Database**: SQLite
- **Other**: Git



## Setup Instructions

### Prerequisites

- **Node.js** and **npm** for the frontend.
- **PHP**, **Composer** for the backend.
- **Git** for version control.


### Backend Setup

1. **Clone and Install**:
   ```bash
   git clone https://https://github.com/LedBajrami/login-register.git
   cd login-register/backend
   composer install


2. **Configure Environment**
    rename .env.example to .env

3. **Set Up Database**
    ```bash
    touch /absolute/path/to/your/database.sqlite


4. **Run these commands**
    ```bash
    php artisan key:generate
    php artisan passport:install
    php artisan migrate
    php artisan storage:link

5. **Run server**
    ```bash
    php artisan serve    




### **Frontend Setup**

1. **Install Dependencies**
    ```bash
    cd frontend
    npm install

2. **Set up the enviroment**
    Create a .env file in the frontend directory with the following
    REACT_APP_BASE_URL=http://127.0.0.1:8000

3. **Start the React development server**
    ```bash
    npm start



### **Usage**

1. Register at http://localhost:3000/register
2. Login at http://localhost:3000/login
3. Dashboard (/user): View profile, upload/update profile photo.
4. Logout: Use the logout button in the dashboard.    



### **Available endpoints** 

1. POST /api/register: Register a new user.
2. POST /api/login: Login and receive access token.
3. GET /api/user: Get authenticated user’s info.
4. POST /api/user/upload: Upload profile photo.

Note: All authenticated routes require an Authorization: Bearer token header.