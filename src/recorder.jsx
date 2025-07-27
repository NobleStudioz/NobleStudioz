import React, { useState, useRef } from 'react';

function Recorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (e) => {
      chunks.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks.current, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      chunks.current = [];
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">🎙️ Recorder</h2>
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className="px-4 py-2 bg-blue-600 rounded text-white"
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>

      {audioUrl && (
        <div className="mt-4">
          <h3 className="font-medium mb-1">🎧 Playback</h3>
          <audio src={audioUrl} controls />
        </div>
      )}
    </div>
  );
}

export default Recorder;
