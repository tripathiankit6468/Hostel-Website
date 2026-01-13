#!/bin/bash

# Vimal Sadan Hostel Management System - Setup Script

echo "🏠 Welcome to Vimal Sadan Setup!"
echo "=================================="

# Check Node.js
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Create .env file
echo ""
echo "🔧 Setting up environment file..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ .env file created. Please update it with your Firebase credentials."
else
    echo "⚠️  .env file already exists"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Update .env file with your Firebase credentials"
echo "2. Run: npm run dev"
echo "3. Visit: http://localhost:3000"
echo ""
echo "🔐 For admin access:"
echo "   Email: admin@vimalsadan.com"
echo "   Password: Admin@123"
