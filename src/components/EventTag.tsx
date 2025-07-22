import React from 'react';

const ICONS: Record<string, React.ReactElement> = {
  'Unauthorized Access': (
    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1.5"/></svg>
  ),
  'Face Recognized': (
    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M2 15v2a5 5 0 005 5h10a5 5 0 005-5v-2"/><path d="M15 11a3 3 0 01-6 0"/></svg>
  ),
  'Gun Threat': (
    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="10" width="20" height="4" rx="2"/><path d="M22 12v-2a2 2 0 00-2-2h-2"/><circle cx="7" cy="12" r="1.5"/></svg>
  ),
  'Multiple Events': (
    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
  ),
  'Traffic Congestion': (
    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="13" width="18" height="6" rx="2"/><circle cx="7" cy="16" r="1.5"/><circle cx="17" cy="16" r="1.5"/></svg>
  ),
};

const COLORS: Record<string, string> = {
  'Unauthorized Access': 'bg-[#ff7043] text-white',
  'Face Recognized': 'bg-[#1976d2] text-white',
  'Gun Threat': 'bg-[#d32f2f] text-white',
  'Multiple Events': 'bg-[#8e24aa] text-white', // purple for distinction
  'Traffic Congestion': 'bg-[#26a69a] text-white',
};

export default function EventTag({ type, label }: { type: string; label: string }) {
  return (
    <span className={`inline-flex items-center rounded px-2 py-1 text-xs font-semibold shadow ${COLORS[type] || 'bg-gray-500 text-white'}`}>
      {ICONS[type] || null}
      {label}
    </span>
  );
}