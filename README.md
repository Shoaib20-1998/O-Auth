# XeroCodee Authentication

Welcome to the README file for XeroCodee Authentication. This project focuses on providing secure authentication using various methods such as credentials, Git authentication, and Google authentication. The project encompasses both frontend and backend components to achieve this functionality.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Backend Routes](#backend-routes)
- [Frontend Routes](#frontend-routes)
- [Project URLs](#project-urls)
- [Screenshots of Userflow](#project-urls)
  

## Introduction

The primary goal of this project is to establish a robust and secure authentication system that caters to different methods of user verification. Users can sign up and log in using traditional credentials, as well as authenticate through their GitHub and Google accounts. Additionally, the project features a "Developer" section, where users can view repositories of other users by providing a username.

## Features

- User registration and login using credentials
- Secure authentication via GitHub and Google accounts
- Developer section to explore repositories of other users
- Utilization of **React.js**, **Chakra UI**, **React Router**, and **Styled Components** for the frontend
- Integration of **DynamoDB** and **Redis** for backend data storage
- Implementation of **Express.js** and **Node.js** for backend server functionality
- Seamless authentication flow managed by **Passport.js**
- fetch  **Github reposistory** by providing username
## Tech Stack

- **Frontend:**
  - React.js
  - Chakra UI
  - React Router
  - Styled Components

- **Backend:**
  - DynamoDB
  - Redis
  - Express.js
  - Node.js
  - Passport.js

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd <project_directory>`
3. Install dependencies: `npm install`
4. Start the frontend: `npm start`

Make sure you have the necessary environment variables and configurations set up for the backend components.

## Backend Routes

- `/signup`: Register a new user
- `/signin`: Authenticate user login
- `/auth/google`: Initiate Google authentication
- `/auth/google/callback`: Google authentication callback
- `/auth/github`: Initiate GitHub authentication
- `/auth/github/callback`: GitHub authentication callback

## Frontend Routes

- `/`: Sign up page
- `/login`: Login page
- `/dashboard`: User dashboard
- `/deploy`: Deployment section
- `/selfhost`: Self-hosting information ( fetch all users repository using his/her username )
- `/githubdeploy`: GitHub deployment information

## Project URLs

- **Backend Base URL:** [https://xero-x8k9.onrender.com](https://xero-x8k9.onrender.com)
- **Frontend Base URL:** [https://xerocodee-mauve.vercel.app/](https://xerocodee-mauve.vercel.app)
- **Backend Base URL Localally:** [http://localhost:8080](http://localhost:8080)
- **Frontend Base URL Locally:**  [http://localhost:3000](http://localhost:3000)




## Some of the Frontend Screenshots with userflow:

◼ Signup Page : 

![Signup Page ](https://github.com/Shoaib20-1998/XeroCodee/assets/112754545/01519250-3afd-4fe9-98ef-51d61efad7a7)
***  
◼ Login Page :

![Login Page ](https://github.com/Shoaib20-1998/XeroCodee/assets/112754545/80e2271c-3400-4a0f-a028-db223bbc9d7c)
***  
◼ Dashboard page Selected by Company option :

![Dashboard page Selected by Company option](https://github.com/Shoaib20-1998/XeroCodee/assets/112754545/f7d1fd12-663a-4c8a-b2da-33bf35f65238)

***  
◼ Dashboard page Selected by Organization option :

![ Dashboard page Selected by Organization option ](https://github.com/Shoaib20-1998/XeroCodee/assets/112754545/02561b4c-b355-4bc8-aeeb-5f5527f16342)

***  
◼ Dashboard page Selected by Developer option :

![After Selecting the developer option](https://github.com/Shoaib20-1998/XeroCodee/assets/112754545/b401c055-1547-4ad3-9a2e-e218222b660e)
***  
◼ Dashboard page Selected by Selfhosting option :

![After Selecting the Selfhosting option](https://github.com/Shoaib20-1998/XeroCodee/assets/112754545/dc5a0692-7c69-43c3-87d4-81297cbacd3d)
***  
◼ After Submitting user's github username :

![After Submitting your github username ](https://github.com/Shoaib20-1998/XeroCodee/assets/112754545/05034049-7238-443f-a15d-8a1ca492987c)
***  
◼ Google Auth :

![Google Auth](https://github.com/Shoaib20-1998/XeroCodee/assets/112754545/3911d5b5-839c-4729-8194-1414c1942da0)
***  
◼ Github Auth :

![Github Auth](https://github.com/Shoaib20-1998/XeroCodee/assets/112754545/6b5bfdc7-5cc3-4092-9f14-1247f0cf8da3)

---
Feel free to explore, contribute, and make use of this project for your authentication needs. If you encounter any issues or have suggestions for improvements, please don't hesitate to reach out.

This README serves as a comprehensive guide to the eroCodee Authentication. For any further questions or assistance, please contact Shoaib Mansuri at [shoaibmansuri235@email.com].
