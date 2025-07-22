"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const navItems = [
	{
		label: 'Dashboard',
		href: '#',
		icon: (
			<svg
				width="20"
				height="20"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="text-[#ffe082]"
			>
				<rect x="3" y="3" width="7" height="7" rx="2" />
				<rect x="14" y="3" width="7" height="7" rx="2" />
				<rect x="14" y="14" width="7" height="7" rx="2" />
				<rect x="3" y="14" width="7" height="7" rx="2" />
			</svg>
		),
	},
	{
		label: 'Cameras',
		href: '#',
		icon: (
			<svg
				width="20"
			height="20"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="text-[#ffe082]"
			>
				<rect x="3" y="7" width="18" height="10" rx="2" />
				<circle cx="12" cy="12" r="3" />
				<rect x="16" y="4" width="2" height="3" rx="1" />
			</svg>
		),
	},
	{
		label: 'Scenes',
		href: '#',
		icon: (
			<svg
				width="20"
				height="20"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="text-[#ffe082]"
			>
				<circle cx="12" cy="12" r="8" />
				<path d="M2 12h20" />
				<path d="M12 2v20" />
			</svg>
		),
	},
	{
		label: 'Incidents',
		href: '#',
		icon: (
			<svg
				width="20"
				height="20"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="text-[#ffe082]"
			>
				<path d="M12 9v4" strokeWidth="2" strokeLinecap="round" />
				<circle cx="12" cy="17" r="1" />
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
			</svg>
		),
	},
	{
		label: 'Users',
		href: '#',
		icon: (
			<svg
				width="20"
				height="20"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="text-[#ffe082]"
			>
				<circle cx="12" cy="8" r="4" />
				<path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
			</svg>
		),
	},
];

const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<header className="w-full h-16 bg-gradient-to-r from-[#181818] to-[#2c2100] flex items-center px-6 shadow-md">
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2">
					<Image src="/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
					<span className="text-2xl font-bold text-white tracking-wide">
						MANDLACX
					</span>
				</div>
				<nav className="ml-10 flex gap-6 text-[#ffe082] font-medium">
					{navItems.map((item, index) => (
						<a
							key={index}
							href={item.href}
							className="hover:text-white flex items-center gap-2"
						>
							{item.icon}
							{item.label}
						</a>
					))}
				</nav>
			</div>
			<div className="ml-auto flex items-center gap-3 relative">
				<div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold">
					M
				</div>
				<div className="text-white text-sm text-left">
					Mohammed Ajhas
					<br />
					<span className="text-xs text-gray-400">
						ajhas@mandlac.com
					</span>
				</div>
				<button
					className="ml-2 p-1 rounded hover:bg-gray-700"
					onClick={() => setDropdownOpen((open) => !open)}
					aria-label="Show more options"
				>
					{/* Chevron icon */}
					<svg
						width="20"
						height="20"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="text-[#ffe082]"
					>
						<path
							d="M6 9l6 6 6-6"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
				{dropdownOpen && (
					<div className="absolute right-0 top-14 bg-[#232323] border border-gray-700 rounded shadow-lg min-w-[160px] z-10">
						<ul className="py-2">
							<li className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-[#ffe082]">
								Profile
							</li>
							<li className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-[#ffe082]">
								Settings
							</li>
							<li className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-[#ffe082]">
								Logout
							</li>
						</ul>
					</div>
				)}
			</div>
		</header>
	);
};

export default Navbar;