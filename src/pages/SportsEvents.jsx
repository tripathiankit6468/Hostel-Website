import { useState } from 'react';
import { Calendar, MapPin, Users, Trophy, Clock, ChevronDown } from 'lucide-react';

export default function SportsEvents() {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sportsEvents = [
    {
      id: 1,
      name: 'Cricket Tournament',
      category: 'outdoor',
      date: '2024-02-15',
      startTime: '09:00 AM',
      endTime: '05:00 PM',
      location: 'Hostel Ground',
      participants: '60-80',
      description: 'Inter-house cricket competition with knockout rounds',
      teams: 8,
      prize: '₹5,000 + Trophies',
      registrationDeadline: '2024-02-10',
      coordinator: 'Sharma Sir'
    },
    {
      id: 2,
      name: 'Badminton Championship',
      category: 'indoor',
      date: '2024-02-20',
      startTime: '02:00 PM',
      endTime: '08:00 PM',
      location: 'Hostel Sports Hall',
      participants: '30-40',
      description: 'Singles and doubles badminton matches',
      teams: 4,
      prize: '₹3,000 + Trophies',
      registrationDeadline: '2024-02-18',
      coordinator: 'Coach Patel'
    },
    {
      id: 3,
      name: 'Football League',
      category: 'outdoor',
      date: '2024-03-05',
      startTime: '04:00 PM',
      endTime: '08:00 PM',
      location: 'Main Ground',
      participants: '100+',
      description: 'Round-robin football matches with finals',
      teams: 10,
      prize: '₹10,000 + Trophy',
      registrationDeadline: '2024-02-28',
      coordinator: 'Mr. Desai'
    },
    {
      id: 4,
      name: 'Table Tennis Tournament',
      category: 'indoor',
      date: '2024-03-12',
      startTime: '01:00 PM',
      endTime: '06:00 PM',
      location: 'Recreation Room',
      participants: '25-30',
      description: 'Singles and mixed doubles table tennis',
      teams: 3,
      prize: '₹2,000 + Trophies',
      registrationDeadline: '2024-03-10',
      coordinator: 'Sports Committee'
    },
    {
      id: 5,
      name: 'Kabaddi Championship',
      category: 'outdoor',
      date: '2024-03-20',
      startTime: '10:00 AM',
      endTime: '04:00 PM',
      location: 'Hostel Ground',
      participants: '80-100',
      description: 'Traditional kabaddi with modern rules',
      teams: 8,
      prize: '₹7,000 + Trophies',
      registrationDeadline: '2024-03-15',
      coordinator: 'Hostel Management'
    },
    {
      id: 6,
      name: 'Athletics Meet',
      category: 'outdoor',
      date: '2024-04-02',
      startTime: '07:00 AM',
      endTime: '12:00 PM',
      location: 'Main Track',
      participants: '50-70',
      description: '100m, 200m, 400m, 1500m, relay races',
      teams: 4,
      prize: '₹6,000 + Medals',
      registrationDeadline: '2024-03-28',
      coordinator: 'Athletics Club'
    },
    {
      id: 7,
      name: 'Basketball Tournament',
      category: 'indoor',
      date: '2024-04-10',
      startTime: '03:00 PM',
      endTime: '08:00 PM',
      location: 'Basketball Court',
      participants: '40-50',
      description: 'Full court basketball with qualification rounds',
      teams: 5,
      prize: '₹4,000 + Trophy',
      registrationDeadline: '2024-04-05',
      coordinator: 'Sports Coordinator'
    },
    {
      id: 8,
      name: 'Volleyball Finals',
      category: 'outdoor',
      date: '2024-04-18',
      startTime: '02:00 PM',
      endTime: '06:00 PM',
      location: 'Volleyball Court',
      participants: '30-40',
      description: 'Men and women volleyball championship',
      teams: 4,
      prize: '₹3,500 + Trophies',
      registrationDeadline: '2024-04-13',
      coordinator: 'Mr. Kumar'
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? sportsEvents 
    : sportsEvents.filter(event => event.category === selectedCategory);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isUpcoming = (dateStr) => {
    return new Date(dateStr) > new Date();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Trophy className="text-yellow-400" size={40} />
            Sports Events
          </h1>
          <p className="text-xl text-slate-300">Participate in thrilling sports competitions at Vimal Sadan</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          {['all', 'outdoor', 'indoor'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {cat === 'all' ? '🏆 All Events' : cat === 'outdoor' ? '🌳 Outdoor' : '🏢 Indoor'}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-purple-500 overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:shadow-purple-500/20"
            >
              {/* Event Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white">{event.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    isUpcoming(event.date)
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-gray-500/20 text-gray-300'
                  }`}>
                    {isUpcoming(event.date) ? '📅 Upcoming' : '✓ Past'}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 space-y-4">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex gap-3 items-start">
                    <Calendar className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-slate-400 text-sm">Date</p>
                      <p className="text-white font-bold">{formatDate(event.date)}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Clock className="text-green-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-slate-400 text-sm">Time</p>
                      <p className="text-white font-bold">{event.startTime} - {event.endTime}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <MapPin className="text-red-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <p className="text-white font-bold">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Users className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-slate-400 text-sm">Participants</p>
                      <p className="text-white font-bold">{event.participants}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="flex gap-2 flex-wrap text-sm">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                    💰 {event.prize}
                  </span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                    👥 {event.teams} Teams
                  </span>
                </div>

                {/* Expandable Section */}
                <div className={`transition-all overflow-hidden ${expandedEvent === event.id ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="border-t border-slate-700 pt-4 mt-4 space-y-3">
                    <p className="text-slate-300">{event.description}</p>
                    <div className="bg-slate-700/50 p-3 rounded-lg">
                      <p className="text-slate-400 text-sm">Registration Deadline</p>
                      <p className="text-yellow-300 font-bold">{formatDate(event.registrationDeadline)}</p>
                    </div>
                    <div className="bg-slate-700/50 p-3 rounded-lg">
                      <p className="text-slate-400 text-sm">Event Coordinator</p>
                      <p className="text-white font-bold">📞 {event.coordinator}</p>
                    </div>
                    <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-2 rounded-lg transition-all">
                      ✅ Register Now
                    </button>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="flex justify-center mt-2">
                  <ChevronDown 
                    size={20}
                    className={`text-slate-400 transition-transform ${expandedEvent === event.id ? 'rotate-180' : ''}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-center">
            <Trophy className="mx-auto mb-2 text-yellow-300" size={32} />
            <p className="text-3xl font-bold text-white">{sportsEvents.length}</p>
            <p className="text-blue-200">Total Events</p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg p-6 text-center">
            <Users className="mx-auto mb-2 text-white" size={32} />
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-green-200">Participants</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 text-center">
            <Trophy className="mx-auto mb-2 text-yellow-300" size={32} />
            <p className="text-3xl font-bold text-white">₹50K</p>
            <p className="text-purple-200">Total Prize</p>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg p-6 text-center">
            <Trophy className="mx-auto mb-2 text-yellow-300" size={32} />
            <p className="text-3xl font-bold text-white">12</p>
            <p className="text-orange-200">Upcoming</p>
          </div>
        </div>
      </div>
    </div>
  );
}
