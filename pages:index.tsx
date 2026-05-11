pages/index.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { Search, ExternalLink, Edit } from 'lucide-react';

const golfCourses = [
  { id: 1, name: "Pine Valley Golf Club", address: "Pine Valley, NJ", cost: "$$$", condition: "Pristine", state: "New Jersey", isPrivate: true, website: "https://www.pinevalleygolfclub.com", imageUrl: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800", personalReview: "" },
  { id: 2, name: "Augusta National", address: "Augusta, GA", cost: "$$$", condition: "Pristine", state: "Georgia", isPrivate: true, website: "https://www.augustanational.com", imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800", personalReview: "" },
  { id: 3, name: "Pebble Beach", address: "Pebble Beach, CA", cost: "$$$", condition: "Above Average", state: "California", isPrivate: false, website: "https://www.pebblebeach.com", imageUrl: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&q=80&w=800", personalReview: "" },
];

export default function HonestYardage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [courses, setCourses] = useState(golfCourses);

  const states = useMemo(() => [...new Set(golfCourses.map(c => c.state))], []);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedState === '' || course.state === selectedState)
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-10">
        <h1 className="text-4xl font-bold" style={{ color: 'var(--twilight-navy)' }}>Honest Yardage</h1>
        <p className="text-gray-600">The True Player's Intel</p>
      </header>
      
      <div className="flex gap-4 mb-8">
        <input 
          className="flex-grow p-3 border rounded-lg"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className="p-3 border rounded-lg"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">All States</option>
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="card">
            <img src={course.imageUrl} className="w-full h-48 object-cover" alt={course.name} />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{course.name}</h3>
                <span className="text-xs font-bold px-2 py-1 bg-blue-100 rounded text-blue-800">
                  {course.isPrivate ? 'PRIVATE' : 'PUBLIC'}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{course.address}</p>
              <div className="space-y-1 text-sm mb-4">
                <p><strong>Cost:</strong> {course.cost}</p>
                <p><strong>Condition:</strong> {course.condition}</p>
              </div>
              <div className="flex justify-between mt-6">
                <a href={course.website} target="_blank" className="text-blue-600 flex items-center gap-1">
                  Website <ExternalLink size={14} />
                </a>
                <button className="btn-outline flex items-center gap-2">
                  <Edit size={14} /> Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
