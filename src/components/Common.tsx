/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

// Floating Golden/Tricolor Ambient Particles
export function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const items = Array.from({ length: 24 }).map((_, i) => {
      const colors = [
        'rgba(212, 160, 23, 0.45)', // Premium Gold
        'rgba(255, 122, 0, 0.35)',  // Saffron
        'rgba(0, 146, 69, 0.35)',   // India Green
        'rgba(255, 255, 255, 0.4)'  // Pure White
      ];
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100 + 100, // Starts off-screen
        size: Math.random() * 5 + 2, // 2px to 7px
        duration: Math.random() * 12 + 8, // 8s to 20s
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    });
    setParticles(items);
  }, []);

  return (
    <div id="floating-atmosphere" className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `100%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: ['0px', `${Math.random() * 80 - 40}px`],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Cinematic Tricolor Glowing Light Rays / Smoke sweeps
export function CinematicSmoke() {
  return (
    <div id="cinematic-smoke-layer" className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Saffron Glow - Top Left */}
      <motion.div
        className="absolute -top-[20%] -left-[20%] w-[60%] h-[60%] rounded-full opacity-40 mix-blend-screen filter blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 122, 0, 0.28) 0%, rgba(255,122,0,0) 70%)'
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Gold Center Beam */}
      <motion.div
        className="absolute top-[30%] left-[20%] right-[20%] h-[40%] rounded-full opacity-25 mix-blend-screen filter blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(212, 160, 23, 0.22) 0%, rgba(212,160,23,0) 75%)'
        }}
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Indian Green Glow - Bottom Right */}
      <motion.div
        className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] rounded-full opacity-40 mix-blend-screen filter blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(0, 146, 69, 0.25) 0%, rgba(0,146,69,0) 70%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

// Section Divider utilizing the golden tricolor theme cleanly
export function MetallicDivider() {
  return (
    <div className="relative w-full h-8 flex items-center justify-center pointer-events-none overflow-hidden select-none my-6">
      {/* Saffron, Gold, Green premium border stroke line */}
      <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-party-saffron via-party-gold via-party-green to-transparent opacity-85" />
      
      {/* Center Golden Star Emblem decoration */}
      <div className="relative z-10 px-4 bg-[#080808] flex items-center gap-1.5">
        <span className="w-1 h-1 rounded-full bg-orange-500" />
        <svg className="w-4 h-4 text-[#d4a017] drop-shadow-[0_0_4px_#d4a017]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.4h7.8l-6.3 4.6 2.4 7.4-6.3-4.6-6.3 4.6 2.4-7.4-6.3-4.6h7.8z" />
        </svg>
        <span className="w-1 h-1 rounded-full bg-green-500" />
      </div>
    </div>
  );
}
