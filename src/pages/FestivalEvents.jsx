import { useState } from 'react';
import { Calendar, MapPin, Sparkles, Users, Clock, ChevronDown, Zap } from 'lucide-react';

export default function FestivalEvents() {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const festivalEvents = [
    {
      id: 1,
      name: 'Holi Celebration',
      festival: 'Holi',
      date: '2024-03-25',
      duration: '9:00 AM - 6:00 PM',
      location: 'Hostel Ground & Common Areas',
      description: 'Colors, music, games, and traditional food. Rangoli making, water balloon fights, and festive meals.',
      highlights: ['🎨 Rangoli Competition', '🎵 DJ Night', '🍛 Traditional Feast', '🎁 Prize Distribution'],
      expectedCrowd: '200+ students',
      coordinator: 'Cultural Committee',
      speciality: 'Water play area, bonfire at night'
    },
    {
      id: 2,
      name: 'Diwali Extravaganza',
      festival: 'Diwali',
      date: '2024-11-01',
      duration: '10:00 AM - 10:00 PM',
      location: 'Entire Hostel Campus',
      description: 'Festival of lights with decorations, diyas, rangoli, sweets, and celebrations.',
      highlights: ['💡 Diya Making', '🎆 Fireworks Display', '🍬 Sweet Distribution', '🛍️ Market Stall'],
      expectedCrowd: '300+ students',
      coordinator: 'Hostel Management',
      speciality: '🏮 Entire campus decorated with lights'
    },
    {
      id: 3,
      name: 'Navratri Festival',
      festival: 'Navratri',
      date: '2024-09-25',
      duration: '6:00 PM - 11:00 PM',
      location: 'Hostel Auditorium & Ground',
      description: 'Nine nights of celebrations with Garba and Dandiya raas, cultural programs.',
      highlights: ['💃 Garba Night', '🎭 Cultural Programs', '👗 Traditional Dress Contest', '🎪 Food Stalls'],
      expectedCrowd: '250+ students',
      coordinator: 'Arts & Culture Wing',
      speciality: '🎸 Live Band Performances'
    },
    {
      id: 4,
      name: 'Independence Day Celebration',
      festival: 'Independence Day',
      date: '2024-08-15',
      duration: '7:00 AM - 2:00 PM',
      location: 'Main Hostel Ground',
      description: 'Flag hoisting ceremony, patriotic performances, and national celebration.',
      highlights: ['🇮🇳 Flag Hoisting', '🎤 Patriotic Songs', '🏃 Races', '🎖️ Awards Ceremony'],
      expectedCrowd: '300+ students',
      coordinator: 'Student Council',
      speciality: '🚀 Quad copter parade'
    },
    {
      id: 5,
      name: 'Republic Day Celebration',
      festival: 'Republic Day',
      date: '2024-01-26',
      duration: '8:00 AM - 1:00 PM',
      location: 'Main Ground',
      description: 'Celebration of Indian Constitution with cultural performances.',
      highlights: ['🇮🇳 National Anthem', '📢 Important Speeches', '🎭 Skits', '🏅 Recognition Awards'],
      expectedCrowd: '280+ students',
      coordinator: 'Management Committee',
      speciality: '📺 Live streaming across hostel'
    },
    {
      id: 6,
      name: 'New Year Bash',
      festival: 'New Year',
      date: '2024-01-01',
      duration: '8:00 PM - 2:00 AM',
      location: 'Hostel Common Area & Rooftop',
      description: 'Countdown party with DJ, dance, food, and celebrations.',
      highlights: ['🎉 Countdown Party', '🎵 DJ Night', '🍕 Midnight Feast', '🎈 Party Games'],
      expectedCrowd: '250+ students',
      coordinator: 'Entertainment Committee',
      speciality: '🎆 Midnight fireworks & champagne toast'
    },
    {
      id: 7,
      name: 'Founder\'s Day',
      festival: 'Founder\'s Day',
      date: '2024-05-10',
      duration: '9:00 AM - 5:00 PM',
      location: 'Hostel Auditorium',
      description: 'Celebrating hostel\'s founding with cultural programs and felicitation.',
      highlights: ['🎖️ Felicitation Ceremony', '🎭 Cultural Night', '📚 Talent Showcase', '🍰 Cake Cutting'],
      expectedCrowd: '200+ students & staff',
      coordinator: 'Hostel Director',
      speciality: '🏆 Annual awards distribution'
    },
    {
      id: 8,
      name: 'Eid-ul-Fitr Celebration',
      festival: 'Eid',
      date: '2024-04-11',
      duration: '10:00 AM - 7:00 PM',
      location: 'Prayer Hall & Common Areas',
      description: 'Celebration with prayers, feasting, and community togetherness.',
      highlights: ['🕌 Special Prayers', '🍛 Traditional Feast', '👫 Family Time', '🎁 Gift Exchange'],
      expectedCrowd: '150+ students',
      coordinator: 'Student Religious Committee',
      speciality: '🤝 Inter-faith celebrations'
    },
    {
      id: 9,
      name: 'Christmas Carnival',
      festival: 'Christmas',
      date: '2024-12-25',
      duration: '11:00 AM - 9:00 PM',
      location: 'Entire Hostel Premises',
      description: 'Christmas festivities with decorations, carol singing, and celebrations.',
      highlights: ['🎄 Tree Lighting', '🎵 Carol Singing', '🎅 Santa Photo Op', '🎁 Gift Exchange'],
      expectedCrowd: '200+ students',
      coordinator: 'Diversity & Inclusion Team',
      speciality: '🔔 White Christmas Theme'
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Sparkles className="text-pink-400 animate-pulse" size={40} />
            Festival & Special Events
          </h1>
          <p className="text-xl text-slate-300">Celebrate diversity and joy at Vimal Sadan Hostel</p>
        </div>

        {/* Calendar Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {festivalEvents.map(event => (
            <div
              key={event.id}
              onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-pink-500 overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:shadow-pink-500/20"
            >
              {/* Festival Header */}
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{event.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    isUpcoming(event.date)
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-gray-500/20 text-gray-300'
                  }`}>
                    {isUpcoming(event.date) ? '📅 Soon' : '✓'}
                  </span>
                </div>
                <p className="text-pink-100 text-sm">🎉 {event.festival}</p>
              </div>

              {/* Event Details */}
              <div className="p-5 space-y-3">
                {/* Date & Time */}
                <div className="flex gap-3 items-start">
                  <Calendar className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-slate-400 text-sm">Date & Time</p>
                    <p className="text-white font-bold text-sm">{formatDate(event.date)}</p>
                    <p className="text-slate-300 text-xs">{event.duration}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-3 items-start">
                  <MapPin className="text-red-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white font-bold text-sm">{event.location}</p>
                  </div>
                </div>

                {/* Crowd */}
                <div className="flex gap-3 items-start">
                  <Users className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-slate-400 text-sm">Expected Crowd</p>
                    <p className="text-white font-bold text-sm">{event.expectedCrowd}</p>
                  </div>
                </div>

                {/* Highlights Preview */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {event.highlights.slice(0, 2).map((highlight, idx) => (
                    <span key={idx} className="text-xs bg-slate-700/50 text-slate-200 px-2 py-1 rounded">
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Expandable Section */}
                <div className={`transition-all overflow-hidden ${expandedEvent === event.id ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="border-t border-slate-700 pt-3 mt-3 space-y-3">
                    <p className="text-slate-300 text-sm">{event.description}</p>
                    
                    <div className="bg-slate-700/50 p-3 rounded-lg">
                      <p className="text-slate-400 text-xs font-bold mb-2">✨ All Highlights</p>
                      <div className="grid grid-cols-2 gap-1">
                        {event.highlights.map((highlight, idx) => (
                          <p key={idx} className="text-slate-300 text-xs">{highlight}</p>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1 bg-slate-700/50 p-2 rounded text-center">
                        <p className="text-slate-400 text-xs">Coordinator</p>
                        <p className="text-white font-bold text-xs">{event.coordinator}</p>
                      </div>
                      <div className="flex-1 bg-yellow-500/10 p-2 rounded text-center">
                        <Zap size={14} className="mx-auto text-yellow-400 mb-1" />
                        <p className="text-yellow-300 text-xs font-bold">{event.speciality}</p>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-2 rounded-lg transition-all text-sm">
                      ✅ Mark Attending
                    </button>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="flex justify-center">
                  <ChevronDown 
                    size={18}
                    className={`text-slate-400 transition-transform ${expandedEvent === event.id ? 'rotate-180' : ''}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Festival Calendar */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📅 Festival Calendar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {festivalEvents.map(event => (
              <div key={event.id} className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-pink-500 transition">
                <div className="text-3xl">{event.name.split(' ')[0] === 'Holi' ? '🎨' : event.name.includes('Diwali') ? '💡' : event.name.includes('Navratri') ? '💃' : event.name.includes('Independence') ? '🇮🇳' : event.name.includes('Republic') ? '🇮🇳' : event.name.includes('New Year') ? '🎉' : event.name.includes('Founder') ? '🏆' : event.name.includes('Eid') ? '🕌' : '🎄'}</div>
                <div className="flex-1">
                  <p className="font-bold text-white">{event.name}</p>
                  <p className="text-sm text-slate-400">{formatDate(event.date)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Announcement */}
        <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 border-l-4 border-pink-500 rounded-r-lg p-6 text-slate-200">
          <h3 className="font-bold text-white mb-2">🎊 Special Announcement</h3>
          <p>All festivals and celebrations at Vimal Sadan are inclusive and respect the diverse cultural backgrounds of our residents. Every festival is celebrated with enthusiasm and everyone is welcome to participate!</p>
        </div>
      </div>
    </div>
  );
}
