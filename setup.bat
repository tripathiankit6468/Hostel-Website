@echo off
REM Vimal Sadan Hostel Management System - Setup Script (Windows)

echo 🏠 Welcome to Vimal Sadan Setup!
echo ==================================

REM Check Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo ✅ Node.js found: 
node --version

REM Install dependencies
echo.
echo 📦 Installing dependencies...
call npm install

REM Create .env file
echo.
echo 🔧 Setting up environment file...
if not exist .env (
    copy .env.example .env
    echo ✅ .env file created. Please update it with your Firebase credentials.
) else (
    echo ⚠️  .env file already exists
)

echo.
echo ✅ Setup complete!
echo.
echo 📝 Next steps:
echo 1. Update .env file with your Firebase credentials
echo 2. Run: npm run dev
echo 3. Visit: http://localhost:3000
echo.
echo 🔐 For admin access:
echo    Email: admin@vimalsadan.com
echo    Password: Admin@123
echo.
pause
