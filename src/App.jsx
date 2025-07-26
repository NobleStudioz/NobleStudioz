import React from 'react';
import Recorder from './Recorder';
import TrackList from './TrackList';

function App() {
  return (
    <div className="p-4 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">🎶 NobleStudioz</h1>
      <Recorder />
      <TrackList />
    </div>
  );
}

export default App;
