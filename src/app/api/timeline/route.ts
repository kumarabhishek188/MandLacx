import { NextResponse } from 'next/server';

export async function GET() {
  // Mock timeline events for 3 cameras
  const timeline = [
    // Camera 01
    { id: 'e1', cameraId: 'Camera-01', type: 'Unauthorized Access', startTime: 192, endTime: 193, label: 'Unauthorized Access' },
    { id: 'e2', cameraId: 'Camera-01', type: 'Face Recognized', startTime: 205, endTime: 205, label: 'Face Recognized' },
    { id: 'e3', cameraId: 'Camera-01', type: 'Multiple Events', startTime: 240, endTime: 241, label: '4 Multiple Events' },
    { id: 'e4', cameraId: 'Camera-01', type: 'Unauthorized Access', startTime: 260, endTime: 261, label: 'Unauthorized Access' },
    { id: 'e5', cameraId: 'Camera-01', type: 'Gun Threat', startTime: 261, endTime: 262, label: 'Gun Threat' },
    // Camera 02
    { id: 'e6', cameraId: 'Camera-02', type: 'Unauthorized Access', startTime: 192, endTime: 193, label: 'Unauthorized Access' },
    { id: 'e7', cameraId: 'Camera-02', type: 'Face Recognized', startTime: 205, endTime: 205, label: 'Face Recognized' },
    // Camera 03
    { id: 'e8', cameraId: 'Camera-03', type: 'Traffic Congestion', startTime: 210, endTime: 211, label: 'Traffic congestion' },
    { id: 'e9', cameraId: 'Camera-03', type: 'Unauthorized Access', startTime: 260, endTime: 261, label: 'Unauthorized Access' },
  ];
  return NextResponse.json(timeline);
} 