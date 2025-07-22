import Navbar from '@/components/Navbar';
import IncidentPlayer from '@/components/IncidentPlayer';
import IncidentList from '@/components/IncidentList';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#181818] flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-row overflow-hidden">
        <IncidentPlayer />
        <IncidentList />
      </main>
      <Timeline />
    </div>
  );
}
