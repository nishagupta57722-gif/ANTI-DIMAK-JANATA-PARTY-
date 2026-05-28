/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Megaphone, Users, Landmark, Award, ShieldAlert, Sparkles, Compass } from 'lucide-react';
import { TimelineStep } from '../types';

const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Public Awareness Campaign",
    description: "Spreading truth and educating citizens on structural administrative issues, transparent governance rights, and highlighting red-tape corruption.",
    details: ["Establish transparent community forums", "Expose policy voids", "Publish comprehensive public diagnostic indexes"]
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Youth Participation Drive",
    description: "Activating colleges, local youth clubs, and tech incubation groups to join the movement, leveraging tech resources for nation-building.",
    details: ["Youth leadership seminars", "Voter awareness camps", "Digital administrative reporting channels"]
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Honest Governance Platform",
    description: "Empowering honest candidates of the general public and youth leaders to contest directly based on clear anti-corruption pledges.",
    details: ["Rigorous criminal and financial background reviews", "Mandatory asset declaration contracts", "Direct citizen mandate transparency"]
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Strong & United Nation",
    description: "Enforcing absolute transparency, delivering instant decentralized citizen services, and constructing thriving, clean self-governed states.",
    details: ["Decentralized direct administrative networks", "Rapid public service audits", "Sustainable infrastructure pipelines"]
  }
];

export default function Timeline() {
  // Helper to render icon based on step
  const renderStepIcon = (num: string) => {
    const props = { className: "w-5 h-5 text-party-gold" };
    switch (num) {
      case "01":
        return <Megaphone {...props} />;
      case "02":
        return <Users {...props} />;
      case "03":
        return <Landmark {...props} />;
      case "04":
        return <Award {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <div className="relative w-full z-10 py-8 max-w-4xl mx-auto px-4 sm:px-0">
      
      {/* Decorative vertical golden line down the middle for desktop */}
      <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#ff7a00] via-[#d4a017] to-[#009245] opacity-40 transform sm:-translate-x-1/2 hidden sm:block" />

      <div className="space-y-12 sm:space-y-16">
        {TIMELINE_STEPS.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between"
            >
              
              {/* Timeline Center Bullet Ball */}
              <div className="absolute left-6 sm:left-1/2 w-4 h-4 rounded-none bg-black border-2 border-[#d4a017] transform -translate-x-1.5 sm:-translate-x-2 z-20 flex items-center justify-center shadow-[0_0_12px_#d4a017] hidden sm:flex">
                <div className="w-1.5 h-1.5 bg-[#ff7a00]" />
              </div>

              {/* Left Content Side or Spacer */}
              <div className={`w-full sm:w-[45%] ${isEven ? 'sm:order-first text-left sm:text-right' : 'sm:order-last'}`}>
                
                {/* Visual Step Card */}
                <div className="relative bg-black/80 rounded-none border border-white/10 p-6 shadow-lg group hover:border-[#d4a017] transition-all">
                  
                  {/* Glowing Top line for mobile card edge */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff7a00] via-[#ffffff] to-[#009245]" />

                  {/* Header metadata */}
                  <div className={`flex items-center gap-2.5 mb-4 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                    {/* Step badge */}
                    <span className="text-3xl font-black font-sans tracking-widest text-[#d4a017]">
                      {step.stepNumber}
                    </span>
                    <div className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                      {renderStepIcon(step.stepNumber)}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tight font-sans group-hover:text-[#d4a017] transition-colors duration-300">
                    {step.title}
                  </h4>

                  {/* Step Description */}
                  <p className="text-xs text-gray-400 mt-3 font-normal leading-relaxed">
                    {step.description}
                  </p>

                  {/* Implementation bullets */}
                  <div className={`mt-4 pt-4 border-t border-white/5 flex flex-col gap-2 text-[10px] text-gray-500 font-mono ${isEven ? 'sm:items-end' : 'items-start'}`}>
                    {step.details.map((det, dIndex) => (
                      <div key={dIndex} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#d4a017] rounded-none" />
                        <span>{det}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

              {/* Center Margin/Gap to keep grid spacing balanced */}
              <div className="w-[10%] hidden sm:block" />

              {/* Right Spacer Side (empty for absolute alignment) */}
              <div className="w-full sm:w-[45%] pointer-events-none hidden sm:block" />

            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
