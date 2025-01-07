# BSRTC - Bihar State Bus Booking Portal

Official bus booking application for Bihar State Road Transport Corporation (BSRTC). This web application allows users to book government bus tickets across Bihar easily and securely.

## Project Overview

This project is a Node.js application using Express.js as the server framework and MongoDB as the database. It provides various API endpoints for managing resources such as contact information, policies, and more.

## 🚀 Features

### Bus Operations
- Depot information and management
- Division-wise bus operations
- Popular route tracking
- Tourist destination services
- Real-time bus tracking

### User Management
- User authentication and authorization
- Profile management
- Multi-language support (English & Hindi)
- Personalized user dashboard

### News & Information
- Latest news and announcements
- Flash news updates
- Photo gallery
- Event galleries
- Tender notifications

### Policy Management
- Comprehensive booking policies
- Cancellation policies
- Privacy policy
- Terms and conditions
- FAQ support

### Support Services
- Contact form submission
- Directory information
- Phone directory access
- Customer support

### Administrative Features
- Admin panel for content management
- Document upload and management
- News and event management
- Policy updates
- User management
- Gallery management

### Technical Features
- Secure JWT authentication
- File upload capabilities
- Multi-language content
- Mobile responsive design
- Real-time updates

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js/Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Styling**: Bootstrap & Custom CSS
- **State Management**: Context API

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB Atlas account or local MongoDB server

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/amanjoshi2002/bsrtc.git
   cd bsrtc
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   PORT=5000
   CORS_ORIGIN=http://localhost:3000
   ```

   - Replace `<username>`, `<password>`, `<cluster-url>`, and `<dbname>` with your MongoDB credentials.
   - Replace `your_jwt_secret` with a secure secret key for JWT authentication.

4. **Connect to MongoDB:**

   Ensure your MongoDB URI is correct and that your MongoDB server is running. If using MongoDB Atlas, ensure your IP is whitelisted and credentials are correct.

## Running the Application

1. **Start the server:**

   ```bash
   npm start
   ```

   The server will start on the port specified in the `.env` file (default is 5000).

2. **Access the API:**

   You can access the API endpoints at `http://localhost:5000/api`.

## 🔑 API Endpoints

### Authentication
- `/api/auth/*` - Authentication and user management

### Bus Operations
- `/api/depots/*` - Depot management and information
- `/api/divisions/*` - Division management
- `/api/popular-routes/*` - Popular bus routes information
- `/api/tourist-destinations/*` - Tourist destination routes

### Content Management
- `/api/about-us/*` - About BSRTC information
- `/api/about-profile/*` - Profile management
- `/api/news/*` - News and announcements
- `/api/flash-news/*` - Flash news updates
- `/api/gallery/*` - Photo gallery
- `/api/gallery-events/*` - Event gallery
- `/api/tenders/*` - Tender notices

### Policies and Information
- `/api/policies/*` - General policies
- `/api/booking-policy/*` - Booking related policies
- `/api/cancellation-policy/*` - Cancellation related policies
- `/api/privacy/*` - Privacy policy
- `/api/terms/*` - Terms and conditions
- `/api/faq/*` - Frequently asked questions

### Contact and Support
- `/api/contact/*` - Contact form submissions
- `/api/contact-info/*` - Contact information
- `/api/phone-directory/*` - Phone directory

### File Management
- `/uploads/*` - Static file serving for uploaded content

## Middleware

- **CORS**: Configured to allow specific origins.
- **Morgan**: Used for logging HTTP requests.
- **Body-Parser**: Parses incoming request bodies in a middleware before your handlers.

## Error Handling

The application includes basic error handling middleware that logs errors and returns a 500 status code with a message.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
