/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Eye, Compass, Zap, GraduationCap, Plane, Award, Landmark, CheckCircle, Cross, HeartPulse, Sparkles, X, ChevronRight, Scale, Search } from 'lucide-react';
import { PromiseItem } from '../types';

const PROMISES_DATA: PromiseItem[] = [
  {
    id: 1,
    title: "Corruption-Free Governance",
    shortDesc: "Complete elimination of administrative termites with direct accountability, transparent oversight, and immediate action.",
    fullDesc: "Our primary pledge is a swift and absolute end to bureaucratic bribery and system corruption. ADJP will institute independent oversight commissions, expand dynamic citizen reporting apps, mandate immediate asset disclosure, and ensure absolute accountability for all government officials.",
    category: "Governance",
    icon: "ShieldCheck"
  },
  {
    id: 2,
    title: "Transparent Public Systems",
    shortDesc: "Real-time tracking of public schemes, allocation of citizen taxes, and complete fiscal transparency of state operations.",
    fullDesc: "We pledge to make public operations 100% visible to citizens. Follow every single rupee of taxpayer funds. Through permanent decentralized digital ledger tracking, public tenders, construction budgets, and state expenditures will be open for inspection by any citizen in real time.",
    category: "Services"
  },
  {
    id: 3,
    title: "Youth Employment Support",
    shortDesc: "Comprehensive assistance Programs, structural guidance hubs, and direct micro-grants for innovative startups.",
    fullDesc: "Empowering our nation's youth is paramount. We promise structured micro-grant resources, technical skill incubation academies in each district, and a highly streamlined state support network for job creation and venture-building.",
    category: "Youth"
  },
  {
    id: 4,
    title: "Fast Digital Services",
    shortDesc: "Instant, barrier-free access to documentation, licensing, certificates, and citizen resources in under 48 hours.",
    fullDesc: "No more waiting in long office lines or paying brokers. ADJP pledges a single administrative direct portal where birth/caste/income certificates, licenses, and permits are granted electronically within 48 hours or delivered directly with zero delays.",
    category: "Services"
  },
  {
    id: 5,
    title: "Better Education Access",
    shortDesc: "State-of-the-art classroom upgrades, specialized digital resource networks, and practical tech-skills focus.",
    fullDesc: "Bridging the literacy and technical skill gaps. Real-world vocational training, updated digital laboratories in public schools, modern curricula matching global requirements, and accessible state sponsorship/scholarships for bright minds.",
    category: "Development"
  },
  {
    id: 6,
    title: "Rural Development",
    shortDesc: "Robust rural cold storages, local digital mandis, sustainable water conservation, and premium solar grids.",
    fullDesc: "Revitalizing rural villages. Establishing state-backed storage houses to shield agricultural produce, transparent localized e-mandis to eliminate mid-brokers, advanced drip irrigation canals, and dedicated clean solar power plants.",
    category: "Development"
  },
  {
    id: 7,
    title: "Women Safety Initiatives",
    shortDesc: "District-level fast action response units, surveillance corridors, and premium emergency helpline networks.",
    fullDesc: "Uncompromising physical and mental safety environments. Forming fully-equipped quick response brigades, lighting dark traffic paths, implementing dynamic SOS emergency mobile alerts, and providing free professional self-defense classes.",
    category: "Governance"
  },
  {
    id: 8,
    title: "Healthcare Improvements",
    shortDesc: "Fully operational local health clinics, state-funded diagnostics, and affordable high-end medicine supplies.",
    fullDesc: "Universal health security. ADJP promises modular local healthcare nodes in every sector with diagnostic centers, complete generic medicine availability at no cost, and upgraded district emergency units.",
    category: "Governance"
  }
];

export default function Promises() {
  const [selectedPromise, setSelectedPromise] = useState<PromiseItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Governance' | 'Development' | 'Youth' | 'Services'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPromises = PROMISES_DATA.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.fullDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Helper to render lucide icons beautifully
  const renderIcon = (title: string) => {
    const props = { className: "w-7 h-7 text-[#d4a017] group-hover:scale-110 transition-transform duration-300" };
    switch (title) {
      case "Corruption-Free Governance":
        return <ShieldCheck {...props} />;
      case "Transparent Public Systems":
        return <Eye {...props} />;
      case "Youth Employment Support":
        return <Award {...props} />;
      case "Fast Digital Services":
        return <Zap {...props} />;
      case "Better Education Access":
        return <GraduationCap {...props} />;
      case "Rural Development":
        return <Compass {...props} />;
      case "Women Safety Initiatives":
        return <Scale {...props} />;
      case "Healthcare Improvements":
        return <HeartPulse {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <div className="relative w-full z-10 py-4 max-w-6xl mx-auto">
      
      {/* Search and Category Filter Container */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        
        {/* Modern Live Search Bar */}
        <div className="relative w-full md:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[#d4a017] opacity-60" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="SEARCH PLEDGES (e.g. SAFETY, WATER, SERVICES)..."
            className="w-full bg-white/5 border border-white/10 focus:border-[#d4a017] rounded-none pl-10 pr-10 py-3 text-xs uppercase tracking-wider text-white placeholder-gray-600 outline-none transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category Navigation filter Bar */}
        <div className="flex flex-wrap items-center gap-2 select-none">
          {(['All', 'Governance', 'Development', 'Youth', 'Services'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-none text-[10px] uppercase tracking-[0.15em] font-sans font-black transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#d4a017] text-black border border-transparent shadow-[0_4px_20px_rgba(212,160,23,0.2)]'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-[#d4a017]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Promises Cards Grid */}
      {filteredPromises.length === 0 ? (
        <div className="text-center py-16 border border-white/10 bg-white/5 rounded-none">
          <p className="text-sm text-gray-400 font-mono uppercase tracking-widest">No promises match your search criteria</p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="mt-4 text-xs tracking-[0.2em] text-[#d4a017] hover:text-white transition-colors uppercase font-black"
          >
            &mdash; RESET SEARCH &mdash;
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPromises.map((promise, index) => (
          <motion.div
            key={promise.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onClick={() => setSelectedPromise(promise)}
            className="group relative bg-[#090909] rounded-none border border-white/10 p-6 cursor-pointer overflow-hidden flex flex-col justify-between hover:border-[#d4a017] transition-all"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-[#ff7a00] via-[#d4a017] to-[#009245] opacity-0 group-hover:opacity-10 filter blur-xl rounded-none transition-opacity duration-500 pointer-events-none" />
            
            {/* Top Side tricolor small outline notch accent */}
            <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#ff7a00] via-[#ffffff] to-[#009245] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              {/* Dynamic Icon with Sharp border Frame */}
              <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 group-hover:border-[#d4a017] flex items-center justify-center mb-6 shadow-md transition-all">
                {renderIcon(promise.title)}
              </div>

              {/* Title & category */}
              <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-[#ff7a00] font-bold mb-1.5 block">
                {promise.category}
              </span>
              <h4 className="text-base font-bold text-white tracking-tight leading-tight uppercase group-hover:text-[#d4a017] transition-colors duration-300 font-sans">
                {promise.title}
              </h4>

              {/* Description */}
              <p className="text-xs text-gray-400 mt-3 line-clamp-3 font-normal leading-relaxed">
                {promise.shortDesc}
              </p>
            </div>

            {/* Read more footer visual cue */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest font-mono font-bold group-hover:text-white transition-colors">
              <span>View Policy</span>
              <ChevronRight className="w-3.5 h-3.5 text-party-gold group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
        </div>
      )}

      {/* Detail Blueprint policy Modal Dialog */}
      <AnimatePresence>
        {selectedPromise && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto"
            onClick={() => setSelectedPromise(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative bg-[#0d0d0d] rounded-none border border-white/20 shadow-[0_0_50px_rgba(212,160,23,0.15)] max-w-xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tricolor edge top */}
              <div className="h-[3px] w-full bg-gradient-to-r from-[#ff7a00] via-[#ffffff] to-[#009245]" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedPromise(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-none p-2 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shrink-0">
                    {renderIcon(selectedPromise.title)}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#ff7a00] font-black">
                      POLICY BRIEFING &bull; {selectedPromise.category}
                    </span>
                    <h3 className="text-xl font-bold font-sans text-white uppercase tracking-tight mt-1 leading-tight">
                      {selectedPromise.title}
                    </h3>
                  </div>
                </div>

                {/* Subheading of commitment */}
                <div className="bg-white/5 border-l-2 border-[#ff7a00] p-4 rounded-none mb-6">
                  <p className="text-xs text-gray-300 font-mono italic leading-relaxed">
                    "{selectedPromise.shortDesc}"
                  </p>
                </div>

                {/* Body Details */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-[#d4a017] font-black">
                    Implementation Blueprint
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {selectedPromise.fullDesc}
                  </p>

                  {/* Bullet pledge guarantees */}
                  <div className="border-t border-white/10 pt-5 mt-5 space-y-3">
                    <h5 className="text-[10px] uppercase font-mono tracking-widest text-[#009245] font-black flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-[#009245]" />
                      Our Non-Negotiable Pledges
                    </h5>
                    <ul className="grid grid-cols-1 gap-2 text-xs text-gray-400 font-normal">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#d4a017] rounded-none" />
                        <span>100% Transparency in administration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#d4a017] rounded-none" />
                        <span>Accountability & audits from civil audits</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#d4a017] rounded-none" />
                        <span>Zero tolerance for red tape/bribes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Action button */}
                <div className="mt-8 pt-5 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setSelectedPromise(null)}
                    className="bg-[#d4a017] hover:bg-white text-black font-mono font-black uppercase text-xs tracking-widest px-8 py-3 rounded-none cursor-pointer transition-all duration-300"
                  >
                    CONFIRM POLICY
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
