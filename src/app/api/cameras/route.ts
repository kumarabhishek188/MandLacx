import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for cameras
  const cameras = [
    {
      id: 'Camera-01',
      name: 'Shop Floor Camera A',
      streamUrl: '/cameras/camera1.jpg',
    },
    {
      id: 'Camera-02',
      name: 'Shop Floor Camera B',
      streamUrl: '/cameras/camera2.jpg',
    },
    {
      id: 'Camera-03',
      name: 'Shop Floor Camera C',
      streamUrl: '/cameras/camera3.jpg',
    },
  ];
  return NextResponse.json(cameras);
} 