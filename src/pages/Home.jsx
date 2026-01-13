import { Link } from 'react-router-dom';
import { BookOpen, Users, HomeIcon, Calendar, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            🏠 Welcome to Vimal Sadan
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300">
            Your Journey to Excellence Starts Here
          </p>
          <p className="text-lg md:text-xl mb-12 text-slate-400 max-w-3xl mx-auto">
            Premium boys hostel with personalized learning paths, modern facilities, and a vibrant community where you can learn, grow, and create unforgettable memories
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/learning" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-xl px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
              📚 Start Learning Path
            </Link>
            <Link to="/admission" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-xl px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
              📝 Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">✨ What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-700/50 rounded-xl p-8 hover:shadow-xl transition-all hover:scale-105">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3">Personalized Learning</h3>
              <p className="text-slate-300 mb-4">
                Structured 4-year learning roadmap covering Core Languages (C, C++, Java, Python), DSA, Web Development, and specializations
              </p>
              <Link to="/learning" className="text-blue-400 hover:text-blue-300 font-bold inline-flex items-center gap-2">
                Explore Roadmap → <Zap size={18} />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-pink-900/50 to-rose-900/50 border border-pink-700/50 rounded-xl p-8 hover:shadow-xl transition-all hover:scale-105">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-2xl font-bold mb-3">Capture Memories</h3>
              <p className="text-slate-300 mb-4">
                Year-wise photo and video gallery to share and relive your beautiful hostel experiences with friends
              </p>
              <Link to="/memories" className="text-pink-400 hover:text-pink-300 font-bold inline-flex items-center gap-2">
                View Gallery → <Zap size={18} />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border border-yellow-700/50 rounded-xl p-8 hover:shadow-xl transition-all hover:scale-105">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">Modern Facilities</h3>
              <p className="text-slate-300 mb-4">
                Fully equipped gym, sports complex, excellent food, WiFi, power backup, and 24/7 support
              </p>
              <button className="text-yellow-400 hover:text-yellow-300 font-bold inline-flex items-center gap-2">
                Learn More → <Zap size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">🎯 Complete Hostel Ecosystem</h2>

          {/* Learning Path Preview */}
          <div className="mb-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">📚</div>
              <div>
                <h3 className="text-3xl font-bold">4-Year Personalized Learning Path</h3>
                <p className="text-slate-400">Master programming, DSA, and development skills</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <div className="text-3xl mb-2">1️⃣</div>
                <h4 className="font-bold mb-2">1st Year</h4>
                <p className="text-sm text-slate-300">C Programming & DSA Basics</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <div className="text-3xl mb-2">2️⃣</div>
                <h4 className="font-bold mb-2">2nd Year</h4>
                <p className="text-sm text-slate-300">Java, Python & Full-Stack</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <div className="text-3xl mb-2">3️⃣</div>
                <h4 className="font-bold mb-2">3rd Year</h4>
                <p className="text-sm text-slate-300">Advanced DSA & System Design</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <div className="text-3xl mb-2">4️⃣</div>
                <h4 className="font-bold mb-2">4th Year</h4>
                <p className="text-sm text-slate-300">Interview Prep & Specialization</p>
              </div>
            </div>
            <Link to="/learning" className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-xl px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105">
              Start Your Learning Journey
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Admission */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">📝</div>
                <h3 className="text-2xl font-bold">Online Admission</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Easy and transparent online admission process. Fill out the form and get quick response from our management
              </p>
              <Link to="/admission" className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold transition-colors">
                Apply Now
              </Link>
            </div>

            {/* Room Booking */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🛏️</div>
                <h3 className="text-2xl font-bold">Room Booking</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Choose your preferred room type - Single, Double, or Triple occupancy. Book now and secure your spot!
              </p>
              <Link to="/rooms" className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-bold transition-colors">
                Book Room
              </Link>
            </div>

            {/* Memories */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">📸</div>
                <h3 className="text-2xl font-bold">Share Memories</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Upload photos and videos of your hostel life, organized by academic year. Capture and relive your moments
              </p>
              <Link to="/memories" className="inline-block bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-lg font-bold transition-colors">
                View Gallery
              </Link>
            </div>

            {/* Admin Portal */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🔐</div>
                <h3 className="text-2xl font-bold">Admin Portal</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Secure admin dashboard to manage admissions, rooms, bookings, and hostel operations efficiently
              </p>
              <Link to="/login" className="inline-block bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-bold transition-colors">
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">🏅 Premium Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🏋️', title: 'Modern Gym', desc: 'Fully equipped with latest machines and free weights' },
              { icon: '⚽', title: 'Sports Complex', desc: 'Cricket, football, badminton courts available' },
              { icon: '🍽️', title: 'Excellent Food', desc: 'Nutritious meals prepared by experienced chefs' },
              { icon: '📶', title: 'High-Speed WiFi', desc: '24/7 internet connectivity in all rooms' },
              { icon: '🔌', title: 'Power Backup', desc: '24-hour electricity with backup generators' },
              { icon: '👥', title: '24/7 Support', desc: 'Always available for student assistance' }
            ].map((facility, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 hover:shadow-lg transition-all text-center">
                <div className="text-5xl mb-3">{facility.icon}</div>
                <h4 className="text-xl font-bold mb-2">{facility.title}</h4>
                <p className="text-slate-400">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">📊 By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '100+', label: 'Students' },
              { number: '50+', label: 'Projects' },
              { number: '300+', label: 'Learning Hours' },
              { number: '4', label: 'Year Path' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg p-6 text-center border border-purple-700/50">
                <div className="text-4xl font-bold text-purple-300 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Vimal Sadan?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Start your learning journey today and become part of our vibrant community
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/learning" className="bg-white text-purple-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Explore Learning Path
            </Link>
            <Link to="/admission" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black/40 text-center py-8 px-4 text-slate-400">
        <p>🏠 Vimal Sadan Boys Hostel © 2025 | All rights reserved</p>
        <p className="mt-2">Empowering students to achieve excellence in learning and life</p>
      </footer>
    </div>
  );
}
