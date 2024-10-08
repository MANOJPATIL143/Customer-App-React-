# Customer App (React)

A feature-rich React-based customer application offering service listings, bookings, payments, reviews, and customer support. The app is designed with a focus on seamless user experience, providing functionalities like OTP authentication, service search, real-time booking, and more.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Customization](#customization)
- [License](#license)

## Features

### Splash Screen & Authentication
- **Splash Screen**: Displays the app logo on startup.
- **Authentication**: Sign-up/login with mobile number (OTP authentication) or Google login for seamless onboarding.

### Search & Filters
- **Search Bar**: Enables users to search services with filters for location, service type, and date.
- **Category-based Navigation**: Browse services through predefined categories.
- **Map Integration**: Provides location-based search functionality using maps.

### Service Listings & Details
- **Service Listings**: Display popular services, trending locations, and current promotions.
- **Service Details**: Detailed service pages with images, descriptions, prices, availability, reviews, and a booking calendar.

### Bookings
- **Real-time Availability**: Check service availability in real-time during booking.
- **Booking Management**: Users can confirm, edit, or cancel their bookings.
- **Booking History**: Users can view and manage their past bookings.

### Payments Integration
- **Secure Payments**: Integrated with Stripe/PayPal for secure transactions.
- **Payment Receipts**: Automatically generate and provide payment confirmation receipts to users.

### User Profile & Notifications
- **User Profile**: Manage personal information, booking history, and saved services.
- **Push Notifications**: Receive real-time notifications for booking confirmations, reminders, and promotional offers.

### Reviews and Ratings
- **Review Services**: Users can rate and review services post-booking.
- **Aggregate Ratings**: Display aggregate ratings and allow users to report inappropriate reviews.

### Customer Support
- **In-App Chat Support**: Chat with customer support directly within the app.
- **Help Section**: Access FAQs for quick answers to common questions.

## Project Structure

```bash
├── public
│   ├── index.html               # Entry point of the application
│   └── logo.png                 # App logo used in splash screen
├── src
│   ├── assets                   # Static images and icons
│   ├── components               # Reusable components (buttons, modals, etc.)
│   ├── layouts                  # Main layouts (e.g., Authentication, Dashboard)
│   ├── services                 # API calls and integrations (authentication, booking, etc.)
│   ├── views                    # Pages (Service Listings, Profile, Bookings)
│   ├── App.js                   # Main app component
│   ├── index.js                 # ReactDOM entry point
│   ├── routes.js                # App routing and navigation
│   └── theme                    # Custom Material UI themes and styling

```

### Installation

### front-end
Clone the Repository
```
git clone https://github.com/your-repo/customer-app.git
cd customer-app
```
### Install Dependencies
```
npm install
# or
yarn install

```
PORT=3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id

### Backend-end
```
cd backend
npm install
```

PORT=5000
NODE_ENV=development

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id

# Payment
PAYPAL_CLIENT_ID=your_paypal_client_id



