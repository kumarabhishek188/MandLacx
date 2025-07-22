import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for incidents
  const incidents = [
    {
      id: '1',
      type: 'Unauthorized Access',
      cameraId: 'Camera-01',
      timeRange: '14:35 - 14:37',
      date: '7-Jul-2025',
      thumbnail: '/incidents/incident1.jpg',
      resolved: false,
    },
    {
      id: '2',
      type: 'Gun Threat',
      cameraId: 'Camera-02',
      timeRange: '14:35 - 14:37',
      date: '7-Jul-2025',
      thumbnail: '/incidents/incident2.jpg',
      resolved: false,
    },
    {
      id: '3',
      type: 'Unauthorized Access',
      cameraId: 'Camera-03',
      timeRange: '14:35 - 14:37',
      date: '7-Jul-2025',
      thumbnail: '/incidents/incident3.jpg',
      resolved: false,
    },
  ];
  return NextResponse.json(incidents);
} 