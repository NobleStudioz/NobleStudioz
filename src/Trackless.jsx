import React, { useState } from 'react';

function TrackList() {
  const [tracks, setTracks] = useState([]);

  const addTrack = (url) => {
    setTracks(prev => [...prev, { url, id: Date.now() }]);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">🎵 Track List</h2>
      {tracks.length === 0 ? (
        <p>No tracks yet. Record something above!</p>
      ) : (
        <ul className="space-y-2">
          {tracks.map(track => (
            <li key={track.id}>
              <audio controls src={track.url} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TrackList;
