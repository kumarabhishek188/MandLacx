"use client";

import React, { useEffect, useState } from 'react';
import EventTag from './EventTag';

const CAMERA_IDS = ['Camera-01', 'Camera-02', 'Camera-03'];
const CAMERA_LABELS: Record<string, string> = {
  'Camera-01': 'Camera - 01',
  'Camera-02': 'Camera - 02',
  'Camera-03': 'Camera - 03',
};
const TIMELINE_MINUTES = 960; // 16 hours (00:00 to 16:00)
const TIMELINE_WIDTH = 1200; // px

const CameraIcon = () => (
  <svg className="w-5 h-5 text-[#ffe082] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
  </svg>
);

type TimelineEvent = {
  id: string;
  cameraId: string;
  type: string;
  startTime: number;
  endTime: number;
  label: string;
};

function minutesToTimeLabel(min: number) {
  const h = Math.floor(min / 60).toString().padStart(2, '0');
  const m = (min % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
}

const Timeline = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    setEvents([
      { id: '1', cameraId: 'Camera-01', type: 'Unauthorized Access', startTime: 0, endTime: 120, label: 'Unauthorized Access' },
      { id: '2', cameraId: 'Camera-01', type: 'Face Recognized', startTime: 130, endTime: 180, label: 'Face Recognized 14:45' },
      { id: '3', cameraId: 'Camera-01', type: 'Multiple Events', startTime: 600, endTime: 660, label: '4 Multiple Events' },
      { id: '5', cameraId: 'Camera-01', type: 'Gun Threat', startTime: 900, endTime: 960, label: 'Gun Threat' },
      { id: '6', cameraId: 'Camera-02', type: 'Unauthorized Access', startTime: 0, endTime: 120, label: 'Unauthorized Access' },
      { id: '7', cameraId: 'Camera-02', type: 'Face Recognized', startTime: 130, endTime: 180, label: 'Face Recognized' },
      { id: '8', cameraId: 'Camera-02', type: 'Unauthorized Access', startTime: 840, endTime: 900, label: 'Unauthorized Access' },
      { id: '9', cameraId: 'Camera-03', type: 'Traffic Congestion', startTime: 300, endTime: 360, label: 'Traffic congestion' },
    ]);
  }, []);

  const timeLabels = Array.from({ length: 17 }, (_, i) => i * 60);
  const currentTime = 192 + 12; // 03:12
  const currentTimeLeft = (currentTime / TIMELINE_MINUTES) * TIMELINE_WIDTH;

  return (
    <div className="w-full bg-[#181818] px-0 py-0 border-t border-[#333]">
      {/* Enhanced Video Control Bar */}
      <div className="flex items-center gap-4 px-8 py-4 bg-[#232323] border-b border-[#333] shadow-md rounded-t-lg">
        <button className="p-2 rounded-full bg-[#181818] hover:bg-[#333] transition" onClick={() => {}}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#ffe082]">
            <path d="M8 17l8-5-8-5v10z" />
          </svg>
        </button>
        <button className="p-2 rounded-full bg-[#181818] hover:bg-[#333] transition" onClick={() => {}}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#ffe082]">
            <path d="M10 9v6m4-6v6" />
          </svg>
        </button>
        <button className="p-2 rounded-full bg-[#ffe082] hover:bg-[#ffd54f] transition" onClick={() => setIsPlaying(p => !p)}>
          {isPlaying ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-black">
              <rect x="6" y="6" width="4" height="12" rx="1" />
              <rect x="14" y="6" width="4" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-black">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>
        <button className="p-2 rounded-full bg-[#181818] hover:bg-[#333] transition" onClick={() => {}}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#ffe082]">
            <path d="M10 9v6m4-6v6" />
          </svg>
        </button>
        <button className="p-2 rounded-full bg-[#181818] hover:bg-[#333] transition" onClick={() => {}}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#ffe082]">
            <path d="M16 17l-8-5 8-5v10z" />
          </svg>
        </button>
        <span className="ml-8 text-[#ffe082] font-bold text-lg bg-[#181818] px-4 py-2 rounded shadow">03:12:37 (15-Jun-2025)</span>
        {/* Remove duplicate speed label, keep only one */}
        <span className="ml-6 text-gray-400 text-sm cursor-pointer px-3 py-1 rounded bg-[#232323] hover:bg-[#333] transition font-bold" onClick={() => setSpeed(s => s === 1 ? 2 : 1)}>{speed}x</span>
      </div>

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#181818]">
        <div className="flex flex-col items-center min-w-full relative" style={{ width: TIMELINE_WIDTH + 128 }}>
          {/* Yellow vertical line from "Camera List" section only */}
          <div
            className="absolute z-20"
            style={{
              left: 160 + currentTimeLeft,
              top: 40, // start after Camera List heading
              bottom: 0,
              width: '2px',
              backgroundColor: '#facc15',
            }}
          />
          {/* Timestamp Label */}
          <div
            className="absolute z-30 text-black text-xs font-bold px-2 py-0.5 rounded shadow bg-yellow-400"
            style={{
              left: 160 + currentTimeLeft,
              top: 8,
              transform: 'translateX(-50%)',
            }}
          >
            03:12:37s
          </div>

          {/* Time Axis */}
          <div className="relative w-full pt-4 pb-2">
            <div className="flex items-center w-full bg-[#181818] px-4 py-2 border-b border-[#222]">
              <span className="text-white text-lg font-semibold mr-8">Camera List</span>
              <div className="flex-1 flex text-xs text-gray-400 items-center">
                {timeLabels.map((min) => (
                  <div key={min} style={{ width: TIMELINE_WIDTH / 16 }} className="text-center">
                    {minutesToTimeLabel(min)}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full" style={{ height: '100%' }}>
              <div className="absolute left-40 top-0 h-0.5 bg-[#333] z-0" style={{ width: TIMELINE_WIDTH }} />
            </div>
          </div>

          {/* Camera Rows */}
          <div className="flex flex-col w-full">
            {CAMERA_IDS.map((cid, idx) => (
              <div
                key={cid}
                className={`flex items-center h-16 relative w-full ${idx < CAMERA_IDS.length - 1 ? 'border-b border-[#222]' : ''} bg-[#181818]`}
                style={{ boxShadow: '0 1px 0 0 #222' }}
              >
                {/* Camera Icon and Label */}
                <div className="flex items-center w-48 pl-6 gap-3">
                  <CameraIcon />
                  <span className="text-white font-bold text-lg tracking-wide">{CAMERA_LABELS[cid]}</span>
                </div>
                {/* Timeline Events */}
                <div className="relative flex-1 h-full">
                  {/* Horizontal axis line (for each row, subtle) */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#333] z-0" />
                  {/* Event tags */}
                  {events.filter(e => e.cameraId === cid).map(e => {
                    const left = (e.startTime / TIMELINE_MINUTES) * TIMELINE_WIDTH;
                    const width = Math.max(32, ((e.endTime - e.startTime) / TIMELINE_MINUTES) * TIMELINE_WIDTH);
                    return (
                      <div
                        key={e.id}
                        className="absolute top-2 h-8 flex items-center"
                        style={{ left, width }}
                      >
                        <EventTag type={e.type} label={e.label} />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
