"use client";

import React, { useEffect, useState } from 'react';
import EventTag from './EventTag';
import Image from 'next/image';

const FALLBACK_IMG = '/fallback_incident.jpg';

// Icon SVGs
const UnresolvedIcon = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 bg-[#d32f2f] text-white rounded-full mr-2">
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);
const ResolvedIcon = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 bg-[#43a047] text-white rounded-full mr-2">
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

type Incident = {
  id: string;
  type: string;
  cameraId: string;
  timeRange: string;
  date: string;
  thumbnail: string;
  resolved: boolean;
};

const IncidentList = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [modalIncident, setModalIncident] = useState<Incident | null>(null);

  useEffect(() => {
    // Mock incidents for demonstration
    setIncidents([
      {
        id: '1',
        type: 'Unauthorized Access',
        cameraId: 'Shop Floor Camera A',
        timeRange: '14:35 - 14:37',
        date: '7-Jul-2025',
        thumbnail: '/incidents/incident1.jpg',
        resolved: false,
      },
      {
        id: '2',
        type: 'Gun Threat',
        cameraId: 'Shop Floor Camera A',
        timeRange: '14:35 - 14:37',
        date: '7-Jul-2025',
        thumbnail: '/incidents/incident2.jpg',
        resolved: false,
      },
      {
        id: '3',
        type: 'Face Recognized',
        cameraId: 'Shop Floor Camera B',
        timeRange: '15:00 - 15:05',
        date: '7-Jul-2025',
        thumbnail: '/incidents/incident3.jpg',
        resolved: false,
      },
      {
        id: '4',
        type: 'Traffic Congestion',
        cameraId: 'Parking Lot Camera',
        timeRange: '16:10 - 16:20',
        date: '7-Jul-2025',
        thumbnail: '/incidents/incident4.jpg',
        resolved: false,
      },
      {
        id: '5',
        type: 'Multiple Events',
        cameraId: 'Entrance Camera',
        timeRange: '17:00 - 17:10',
        date: '7-Jul-2025',
        thumbnail: '/incidents/incident5.jpg',
        resolved: false,
      },
    ]);
    // Uncomment below to fetch from API
    // fetch('/api/incidents')
    //   .then((res) => res.json())
    //   .then(setIncidents);
  }, []);

  // Helper for fallback image
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_IMG;
  };

  const unresolved = incidents.filter(i => !i.resolved);
  // Mock resolved count (or you can fetch real resolved incidents if available)
  const resolvedCount = 4;

  return (
    <aside className="w-[420px] bg-[#1a1a1a] p-6 border-l border-[#333] overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-white text-xl font-bold">
          <UnresolvedIcon />
          {unresolved.length} Unresolved Incidents
        </div>
        <div className="flex items-center text-[#43a047] text-sm font-semibold bg-[#232323] px-3 py-1 rounded-full">
          <ResolvedIcon />
          {resolvedCount} resolved incidents
        </div>
      </div>
      <div className="space-y-4">
        {unresolved.map((incident) => (
          <div key={incident.id} className="bg-[#232323] rounded-lg p-3 flex items-center gap-3">
            <div className="w-24 h-16 bg-gray-700 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={incident.thumbnail}
                alt={incident.type}
                width={96}
                height={64}
                className="object-cover w-full h-full rounded-md"
                onError={handleImgError}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <EventTag type={incident.type} label={incident.type} />
              <div className="truncate text-gray-300 text-xs mt-1">{incident.cameraId}</div>
              <div className="truncate text-gray-400 text-xs">{incident.timeRange} on {incident.date}</div>
            </div>
            <button
              className="text-[#ffe082] hover:text-white font-bold ml-2 whitespace-nowrap"
              onClick={() => setModalIncident(incident)}
            >
              Resolve
            </button>
          </div>
        ))}
      </div>
      {/* Modal Popup */}
      {modalIncident && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#232323] rounded-lg p-6 w-[340px] shadow-lg border border-[#ffe082]">
            <div className="text-lg font-bold text-white mb-2">Resolve Incident</div>
            <div className="mb-4">
              <EventTag type={modalIncident.type} label={modalIncident.type} />
              <div className="text-gray-300 text-sm mt-2">{modalIncident.cameraId}</div>
              <div className="text-gray-400 text-xs">{modalIncident.timeRange} on {modalIncident.date}</div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-1 rounded bg-[#ffe082] text-black font-semibold hover:bg-[#ffecb3]"
                onClick={() => setModalIncident(null)}
              >
                Confirm
              </button>
              <button
                className="px-4 py-1 rounded bg-[#333] text-white font-semibold hover:bg-[#444] border border-[#555]"
                onClick={() => setModalIncident(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default IncidentList;