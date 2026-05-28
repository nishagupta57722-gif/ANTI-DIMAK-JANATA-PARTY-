/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  // Dimensions based on size
  const dims = {
    sm: { svg: 'w-10 h-10', text: 'text-sm' },
    md: { svg: 'w-16 h-16', text: 'text-lg' },
    lg: { svg: 'w-28 h-28', text: 'text-2xl' },
    xl: { svg: 'w-44 h-44', text: 'text-4xl' },
  }[size];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Premium Metallic SVG Icon */}
      <div className="relative group select-none">
        {/* Glow behind the logo */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 opacity-40 blur-md group-hover:opacity-75 transition-opacity duration-500 duration-1000" />
        
        <svg
          className={`${dims.svg} relative z-10 filter drop-shadow-[0_4px_10px_rgba(212,160,23,0.3)] transition-transform duration-500 group-hover:scale-105`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          fill="none"
        >
          {/* Definitions for Premium Linear Gradients */}
          <defs>
            {/* Metallic Gold Gradient */}
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff2cc" />
              <stop offset="15%" stopColor="#e2b13c" />
              <stop offset="50%" stopColor="#bc8f1f" />
              <stop offset="65%" stopColor="#f7d070" />
              <stop offset="85%" stopColor="#9c7213" />
              <stop offset="100%" stopColor="#fcdbb0" />
            </linearGradient>

            {/* Saffron, White, Green Tricolor Gradient */}
            <linearGradient id="tricolor-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff7a00" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#009245" />
            </linearGradient>

            {/* Inner Shield Radial Shadow */}
            <radialGradient id="inner-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="#080808" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.85" />
            </radialGradient>
          </defs>

          {/* Exterior Double Ring Gold Border */}
          <circle cx="100" cy="100" r="92" stroke="url(#gold-grad)" strokeWidth="4" />
          <circle cx="100" cy="100" r="86" stroke="url(#gold-grad)" strokeWidth="1.5" strokeDasharray="4 3" />

          {/* Tricolor Ring Segment Accent */}
          <path
            d="M 13 100 A 87 87 0 0 1 187 100"
            stroke="#ff7a00"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 187 100 A 87 87 0 0 1 13 100"
            stroke="#009245"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Core Dark Glass Shield background */}
          <circle cx="100" cy="100" r="82" fill="#080808" />
          <circle cx="100" cy="100" r="82" fill="url(#inner-shadow)" />

          {/* Background Radial Light Rays (Sunset style) */}
          <g opacity="0.15">
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * 360) / 16;
              const rad = (angle * Math.PI) / 180;
              const x2 = 100 + 80 * Math.cos(rad);
              const y2 = 100 + 80 * Math.sin(rad);
              return (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={x2}
                  y2={y2}
                  stroke="url(#gold-grad)"
                  strokeWidth="1"
                />
              );
            })}
          </g>

          {/* Central Crest Artwork: A Majestic Vajra/Scepter Shattering a Termite (representing cracking down on corruption) */}
          {/* Symbolic Golden Star for Premium Luxury Aura */}
          <g transform="translate(100, 100)">
            {/* Saffron, White, Green Glow Paths */}
            <path d="M-60,-5 C-20,-25 20,-25 60,-5" stroke="#ff7a00" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
            <path d="M-65,5 C-20,25 20,25 65,5" stroke="#009245" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />

            {/* Crest Emblem - A Golden Shield containing a massive stylized gear with an in-built roaring lion emblem plus a lightning bolt */}
            {/* The Outer Gear of Action */}
            <circle cx="0" cy="-5" r="30" stroke="url(#gold-grad)" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.8" />

            {/* Center Golden Fist of Unity / Crushing Force */}
            <path
              d="M-15,10 L-10,-10 L10,-10 L15,10 Z"
              fill="url(#gold-grad)"
              stroke="#080808"
              strokeWidth="1.5"
            />
            {/* Lightning bolt crushing the black bugs (termite) of administrative failure */}
            <path
              d="M-4,-20 L4,-20 L0,-38 L5,-38 L-4,-55 L-2,-32 L-8,-32 Z"
              fill="url(#gold-grad)"
              filter="drop-shadow(0 0 6px rgba(255,122,0,0.8))"
            />

            {/* Debris symbolizing a Termite (Dimak) being blown to pieces */}
            <g opacity="0.9">
              {/* Cracked pieces flying away representing broken administrative obstacles */}
              <path d="M -30,-30 L -40,-35 L -35,-25 Z" fill="#4a3e3d" stroke="url(#gold-grad)" strokeWidth="0.5" />
              <path d="M 30,-30 L 40,-38 L 32,-25 Z" fill="#4a3e3d" stroke="url(#gold-grad)" strokeWidth="0.5" strokeLinecap="round" />
              {/* Little termite silhouette falling representing failure of corruption */}
              <circle cx="-32" cy="18" r="3.5" fill="#1f1412" stroke="#ff5555" strokeWidth="0.5" />
              <line x1="-35" y1="18" x2="-29" y2="18" stroke="#ff5555" strokeWidth="0.5" />
              <line x1="-32" y1="15" x2="-32" y2="21" stroke="#ff5555" strokeWidth="0.5" />

              <circle cx="34" cy="16" r="3" fill="#1f1412" stroke="#ff5555" strokeWidth="0.5" />
              <line x1="31" y1="16" x2="37" y2="16" stroke="#ff5555" strokeWidth="0.5" />
            </g>

            {/* Ashoka Chakra-inspired Spikes inside */}
            <circle cx="0" cy="-5" r="12" fill="#080808" stroke="url(#gold-grad)" strokeWidth="2" />
            
            {/* Central Diamond Star */}
            <path d="M0,-11 L3,-5 L9,-5 L4,-2 L6,4 L0,0 L-6,4 L-4,-2 L-9,-5 L-3,-5 Z" fill="#ffffff" />
          </g>

          {/* Premium banner curved text space at the bottom (stylized text) */}
          <path
            id="textPath"
            d="M 32 153 A 72 72 0 0 0 168 153"
            fill="none"
          />
          <text fontStyle="normal" fontWeight="bold" fill="url(#gold-grad)" fontSize="10" letterSpacing="2.8">
            <textPath href="#textPath" startOffset="50%" textAnchor="middle">
              ANTI DIMAK JANATA
            </textPath>
          </text>
        </svg>
      </div>

      {showText && (
        <div className="text-center mt-3 select-none">
          <h1 className="font-sans font-bold tracking-widest text-[#d4a017] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center justify-center gap-1">
            <span className="text-orange-500">A</span>
            <span className="text-white">.D.</span>
            <span className="text-green-500">J.P.</span>
          </h1>
          <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-gray-400 mt-0.5">
            Anti Dimak Janata Party
          </p>
        </div>
      )}
    </div>
  );
}
