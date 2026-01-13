# Vimal Sadan Boys Hostel - Online Management System

## 🏠 Overview
A complete hostel management system with React frontend, Firebase backend, admin dashboard, and features for student admission, room booking, and gallery management.

## ✨ Features

### 🌐 Public Features
- **Home Page**: Beautiful landing page with hostel information
- **Online Admission**: Complete admission form with validation
- **Room Booking**: Browse and book available rooms
- **Gallery**: View hostel memories (Year-wise)

### 👨‍💼 Admin Dashboard (Protected)
- **Dashboard**: Statistics and quick overview
- **Admission Management**: View, approve, reject applications
- **Room Management**: Add, edit, manage hostel rooms
- **Booking Management**: Handle room booking requests
- **Gallery Management**: Upload and manage hostel photos

## 🛠️ Tech Stack

```
Frontend: React 18 + Vite + Tailwind CSS
Backend: Firebase (Firestore + Storage)
Auth: Firebase Authentication
Hosting: Firebase Hosting / Netlify
```

## 📁 Project Structure

```
vimal-sadan-hostel/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── AdminSidebar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Admission.jsx
│   │   ├── RoomBooking.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminAdmissions.jsx
│   │   ├── AdminRooms.jsx
│   │   ├── AdminBookings.jsx
│   │   └── AdminGallery.jsx
│   ├── firebase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── firebase.json
└── README.md
```

## 🚀 Quick Start

### 1. Prerequisites
- Node.js (v16 or higher)
- Firebase account
- npm or yarn

### 2. Installation

```bash
# Clone or navigate to project
cd vimal-sadan-hostel

# Install dependencies
npm install

# Install Firebase CLI globally (for deployment)
npm install -g firebase-tools
```

### 3. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable these services:
   - **Authentication** (Email/Password)
   - **Firestore Database**
   - **Storage**
4. Get your Firebase config from Project Settings
5. Update `src/firebase.js` with your config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 4. Create Admin Account

1. Go to Firebase Console → Authentication
2. Add user manually:
   - Email: `admin@vimalsadan.com`
   - Password: `Admin@123`

### 5. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### 6. Login to Admin

- Go to http://localhost:3000/login
- Use credentials:
  - Email: `admin@vimalsadan.com`
  - Password: `Admin@123`

## 🌍 Deployment

### Option 1: Firebase Hosting (RECOMMENDED)

```bash
# Build the project
npm run build

# Initialize Firebase (one time)
firebase login
firebase init

# Deploy
firebase deploy
```

Your site will be live at: `https://your-project.firebaseapp.com`

### Option 2: Netlify

```bash
npm run build
# Upload 'dist' folder to Netlify via drag-and-drop
```

### Option 3: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 📊 Firestore Collections

### admissions
```javascript
{
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  college: string,
  year: string,
  course: string,
  parentName: string,
  parentPhone: string,
  address: string,
  city: string,
  state: string,
  pincode: string,
  aadhar: string,
  status: "Pending" | "Approved" | "Rejected",
  createdAt: timestamp
}
```

### bookings
```javascript
{
  studentName: string,
  email: string,
  phone: string,
  roomType: "single" | "double" | "triple",
  moveInDate: date,
  duration: string,
  address: string,
  status: "Pending" | "Approved" | "Rejected",
  createdAt: timestamp
}
```

### rooms
```javascript
{
  roomNumber: string,
  floor: string,
  capacity: number,
  availableBeds: number,
  price: number,
  createdAt: timestamp
}
```

## 🔐 Security Rules

### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Admissions: Anyone can read own, admin can read all
    match /admissions/{document=**} {
      allow read, write: if request.auth != null;
    }
    
    // Bookings: Anyone can read own, admin can read all
    match /bookings/{document=**} {
      allow read, write: if request.auth != null;
    }
    
    // Rooms: Anyone can read, only admin can write
    match /rooms/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /gallery/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 🎯 Usage Guide

### For Students
1. Visit home page
2. Click "Apply Now" for admission
3. Fill the form and submit
4. Click "Book a Room" to reserve accommodation
5. Wait for admin approval

### For Admin
1. Login with admin credentials
2. Access dashboard at `/admin`
3. **View Admissions**: Review and approve/reject student applications
4. **Manage Rooms**: Add new rooms and manage availability
5. **Room Bookings**: Approve booking requests
6. **Gallery**: Upload hostel event photos

## 🐛 Troubleshooting

### Firebase Connection Issues
- Check Firebase config in `src/firebase.js`
- Ensure Firebase project has Firestore enabled
- Check internet connection

### Login Not Working
- Verify admin user exists in Firebase Console
- Check password is correct
- Ensure Authentication is enabled

### Images Not Uploading
- Check Storage Rules in Firebase Console
- Ensure files are images (JPG, PNG, GIF)
- Check file size (max 25MB recommended)

## 📞 Support

For issues or questions:
1. Check Firebase Console logs
2. Verify all Firebase services are enabled
3. Check browser console for errors (F12)

## 📄 License

MIT License - Feel free to use for educational purposes

## 🙏 Credits

Built with ❤️ for Vimal Sadan Boys Hostel

---

**Version**: 1.0.0  
**Last Updated**: January 2024
