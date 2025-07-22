"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Camera = {
  id: string;
  name: string;
  streamUrl: string;
};

const IncidentPlayer = () => {
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    fetch('/api/cameras')
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);

  const camera = cameras[selected];
  const isImage = camera && /\.(jpg|jpeg|png)$/i.test(camera.streamUrl);

  return (
    <section className="flex-1 min-w-[60%] bg-[#232323] p-6 flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        {cameras.map((cam, idx) => (
          <button
            key={cam.id}
            className={`px-4 py-1 rounded font-medium text-sm border ${selected === idx ? 'bg-[#ffe082] text-black border-[#ffe082]' : 'bg-[#181818] text-white border-[#333]'} transition`}
            onClick={() => setSelected(idx)}
          >
            {cam.name}
          </button>
        ))}
      </div>
      {camera ? (
        <div className="flex-1 flex flex-col">
          <div className="bg-black rounded-lg flex-1 flex items-center justify-center overflow-hidden h-[420px]">
            {isImage ? (
              <Image
                src={camera.streamUrl}
                alt={camera.name}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg border-4 border-[#ffe082]"
              />
            ) : (
              <video
                src={camera.streamUrl}
                controls
                className="w-full h-full object-cover rounded-lg border-4 border-[#ffe082]"
              >
                Sorry, your browser does not support embedded videos.
              </video>
            )}
          </div>
          <div className="mt-4 text-white text-lg font-semibold">{camera.name}</div>
          <div className="text-gray-400 text-sm">{camera.id}</div>
        </div>
      ) : (
        <div className="bg-black rounded-lg h-full flex items-center justify-center text-white text-2xl font-semibold">
          Loading camera feed...
        </div>
      )}
    </section>
  );
};

export default IncidentPlayer;