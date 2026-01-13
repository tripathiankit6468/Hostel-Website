import { useState } from 'react';
import { Upload, Play, X, Grid, List } from 'lucide-react';

export default function Memories() {
  const [selectedYear, setSelectedYear] = useState('1st');
  const [viewMode, setViewMode] = useState('grid');
  const [galleryItems, setGalleryItems] = useState({
    '1st': [
      { id: 1, type: 'image', title: 'Freshman Welcome', thumb: '🎓', date: '2024-01-15' },
      { id: 2, type: 'image', title: 'Hostel Tour', thumb: '🏠', date: '2024-01-20' },
      { id: 3, type: 'video', title: 'First Orientation', thumb: '🎬', date: '2024-01-22' },
      { id: 4, type: 'image', title: 'Study Group', thumb: '📚', date: '2024-02-10' }
    ],
    '2nd': [
      { id: 5, type: 'image', title: 'Project Showcase', thumb: '💻', date: '2024-03-15' },
      { id: 6, type: 'video', title: 'Hackathon', thumb: '🎯', date: '2024-03-20' }
    ],
    '3rd': [
      { id: 7, type: 'image', title: 'Internship Stories', thumb: '💼', date: '2024-04-10' }
    ],
    '4th': [
      { id: 8, type: 'image', title: 'Farewell Dinner', thumb: '🎉', date: '2024-05-20' }
    ]
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    type: 'image'
  });

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const newItem = {
        id: Date.now() + Math.random(),
        type: file.type.startsWith('video') ? 'video' : 'image',
        title: uploadForm.title || file.name,
        description: uploadForm.description,
        thumb: file.type.startsWith('video') ? '🎬' : '📸',
        date: new Date().toISOString().split('T')[0],
        file: URL.createObjectURL(file)
      };
      setGalleryItems(prev => ({
        ...prev,
        [selectedYear]: [...prev[selectedYear], newItem]
      }));
    });

    setUploadForm({ title: '', description: '', type: 'image' });
    setShowUploadModal(false);
  };

  const deleteItem = (itemId) => {
    setGalleryItems(prev => ({
      ...prev,
      [selectedYear]: prev[selectedYear].filter(item => item.id !== itemId)
    }));
    setSelectedItem(null);
  };

  const currentYearItems = galleryItems[selectedYear] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">📸 Hostel Memories</h1>
          <p className="text-lg opacity-90">Capture and share your beautiful hostel memories year by year</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Year Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Select Academic Year</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['1st', '2nd', '3rd', '4th'].map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`p-4 rounded-lg font-bold text-lg transition-all ${
                  selectedYear === year
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {year} Year
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="text-white">
            <h3 className="text-xl font-bold">{currentYearItems.length} memories</h3>
          </div>

          <div className="flex gap-2">
            {/* View Toggle */}
            <div className="flex gap-2 bg-slate-800 rounded-lg p-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all ${
                  viewMode === 'grid'
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-all ${
                  viewMode === 'list'
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <List size={20} />
              </button>
            </div>

            {/* Upload Button */}
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:shadow-lg transition-all"
            >
              <Upload size={20} /> Upload Memory
            </button>
          </div>
        </div>

        {/* Gallery */}
        {currentYearItems.length === 0 ? (
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-dashed border-slate-600 rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-white mb-2">No memories yet</h3>
            <p className="text-slate-400 mb-6">Start uploading your hostel memories!</p>
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
            >
              Upload First Memory
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentYearItems.map(item => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-slate-800 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all h-48"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 text-5xl group-hover:scale-110 transition-transform">
                  {item.thumb}
                </div>
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={48} className="text-white fill-white" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                  <p className="text-white font-bold truncate">{item.title}</p>
                  <p className="text-xs text-slate-300">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {currentYearItems.map(item => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-slate-800 rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-700 transition-all group"
              >
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 rounded text-4xl group-hover:scale-110 transition-transform">
                  {item.thumb}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  {item.description && (
                    <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                  )}
                  <p className="text-xs text-slate-500 mt-2">
                    {item.type === 'video' ? '🎬 Video' : '🖼️ Photo'} • {item.date}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteItem(item.id);
                  }}
                  className="text-red-400 hover:text-red-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-pink-900/50 to-rose-900/50 border border-pink-700/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-pink-300">
              {currentYearItems.filter(i => i.type === 'image').length}
            </div>
            <div className="text-sm text-slate-300 mt-2">📸 Photos</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-700/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-300">
              {currentYearItems.filter(i => i.type === 'video').length}
            </div>
            <div className="text-sm text-slate-300 mt-2">🎬 Videos</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-700/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-300">
              {Object.values(galleryItems).flat().length}
            </div>
            <div className="text-sm text-slate-300 mt-2">Total Memories</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border border-yellow-700/50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-300">4</div>
            <div className="text-sm text-slate-300 mt-2">Years to Capture</div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-lg max-w-md w-full p-6 border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-white">Upload Memory</h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Title</label>
                <input
                  type="text"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({...uploadForm, title: e.target.value})}
                  placeholder="e.g., Freshman Welcome"
                  className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Description (Optional)</label>
                <textarea
                  value={uploadForm.description}
                  onChange={(e) => setUploadForm({...uploadForm, description: e.target.value})}
                  placeholder="Add a memory to this photo/video..."
                  rows="3"
                  className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-3">Upload Media</label>
                <label className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500 hover:bg-slate-700/50 transition-all">
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div className="text-4xl mb-2">📤</div>
                  <p className="text-white font-bold">Click to upload</p>
                  <p className="text-xs text-slate-400 mt-1">Images or Videos</p>
                </label>
              </div>

              <button
                onClick={() => setShowUploadModal(false)}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded font-bold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-lg max-w-2xl w-full overflow-hidden border border-slate-700">
            <div className="relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
              >
                <X size={24} />
              </button>

              <div className="bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center py-32 text-9xl">
                {selectedItem.thumb}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
              {selectedItem.description && (
                <p className="text-slate-300 mb-4">{selectedItem.description}</p>
              )}
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>{selectedItem.type === 'video' ? '🎬 Video' : '📸 Photo'}</span>
                <span>{selectedItem.date}</span>
              </div>

              <button
                onClick={() => deleteItem(selectedItem.id)}
                className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded font-bold transition-colors"
              >
                Delete Memory
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
