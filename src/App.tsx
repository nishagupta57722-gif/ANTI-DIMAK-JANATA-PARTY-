/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Users, 
  Scale, 
  Menu, 
  X, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube, 
  ChevronRight, 
  Heart, 
  Sparkles,
  Award
} from 'lucide-react';

import Logo from './components/Logo';
import { FloatingParticles, CinematicSmoke, MetallicDivider } from './components/Common';
import JoinForm from './components/Form';
import Promises from './components/Promises';
import Timeline from './components/Timeline';

export default function App() {
  const [activeTab, setActiveTab] = useState<'join' | 'promises'>('join');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scrolling to add frosted glass effects to navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll back to form or tab content
  const scrollToView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="website-root-layout" className="relative min-h-screen bg-[#080808] text-white flex flex-col selection:bg-party-gold/30 selection:text-white">
      
      {/* Background Ambience Layers */}
      <FloatingParticles />
      <CinematicSmoke />

      {/* STICKY NAVBAR */}
      <nav 
        id="premium-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-[#080808]/90 backdrop-blur-md border-party-gold/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo Brand area */}
          <div 
            onClick={() => { setActiveTab('join'); scrollToView('website-root-layout'); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 border-2 border-[#d4a017] rounded-full flex items-center justify-center bg-gradient-to-br from-[#d4a017] to-[#8a6a10] shadow-[0_0_15px_rgba(212,160,23,0.3)]">
              <span className="text-black font-black text-xl">A</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold tracking-[0.2em] text-[#d4a017] text-lg uppercase font-sans underline underline-offset-4 decoration-white/20 transition-all group-hover:text-white">
                ADJP
              </span>
              <span className="text-[8px] font-mono tracking-widest text-gray-500 uppercase leading-none mt-1">
                Anti Dimak Janata Party
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase font-bold">
            <button
              onClick={() => { setActiveTab('join'); scrollToView('website-root-layout'); }}
              className={`relative cursor-pointer pb-1 transition-all border-b-2 ${
                activeTab === 'join' ? 'text-party-gold font-black border-party-gold' : 'text-gray-400 hover:text-white border-transparent'
              }`}
            >
              <span>Join Party</span>
            </button>

            <button
              onClick={() => { setActiveTab('promises'); scrollToView('website-root-layout'); }}
              className={`relative cursor-pointer pb-1 transition-all border-b-2 ${
                activeTab === 'promises' ? 'text-party-gold font-black border-party-gold' : 'text-gray-400 hover:text-white border-transparent'
              }`}
            >
              <span>Party Promises</span>
            </button>
            
            {/* Call To Action button inside Navbar */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveTab('join');
                setTimeout(() => scrollToView('join-submission-section'), 100);
              }}
              className="px-6 py-2 border border-[#d4a017] hover:bg-[#d4a017] hover:text-black hover:shadow-[0_0_15px_rgba(212,160,23,0.3)] transition-all bg-black/50 text-[10px] uppercase tracking-widest font-bold tracking-widest text-party-gold font-mono rounded-none cursor-pointer"
            >
              JOIN MOVEMENT
            </motion.button>
          </div>

          {/* Mobile Hamburg Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white select-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* MOBILE DROP DOWN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[62px] left-0 right-0 bg-[#080808]/95 border-b border-party-gold/15 z-30 md:hidden backdrop-blur-lg"
          >
            <div className="px-5 py-6 flex flex-col gap-4 font-mono text-xs uppercase tracking-widest font-black">
              <button
                onClick={() => {
                  setActiveTab('join');
                  setMobileMenuOpen(false);
                  scrollToView('website-root-layout');
                }}
                className={`py-2 text-left border-b border-gray-900 ${activeTab === 'join' ? 'text-party-gold' : 'text-gray-400'}`}
              >
                Join Party
              </button>
              <button
                onClick={() => {
                  setActiveTab('promises');
                  setMobileMenuOpen(false);
                  scrollToView('website-root-layout');
                }}
                className={`py-2 text-left border-b border-gray-900 ${activeTab === 'promises' ? 'text-party-gold' : 'text-gray-400'}`}
              >
                Party Promises
              </button>
              <button
                onClick={() => {
                  setActiveTab('join');
                  setMobileMenuOpen(false);
                  setTimeout(() => scrollToView('join-submission-section'), 150);
                }}
                className="w-full bg-[#121212] border border-party-gold/30 gold-shine py-3 rounded text-center text-party-gold font-bold tracking-widest"
              >
                JOIN THE MOVEMENT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN LAYOUT WRAPPER */}
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          
          {/* ==================== PAGE 1: JOIN PARTY PAGE ==================== */}
          {activeTab === 'join' && (
            <motion.div
              key="join-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-16 sm:gap-24 pb-12"
            >
              {/* HERO SECTION WITH GENERATED BANNER BACKDROP & WATERMARK */}
              <section id="hero-campaign-banner" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16">
                
                {/* Background Waterman Text */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[10rem] sm:text-[18rem] font-black text-white/5 tracking-tighter select-none font-sans pointer-events-none uppercase z-0">
                  ADJP
                </div>

                {/* Generated Protest Background Image overlay with darkening gradient */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/src/assets/images/adjp_hero_bg_1779869965644.png"
                    alt="Anti Dimak Janata Party Protest Movement Crowd Banner Background"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center opacity-40 scale-105"
                  />
                  {/* Heavy luxury radial and bottom gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/50" />
                  <div className="absolute inset-0 bg-[#080808]/80" />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                  
                  {/* Tagline/Preheading styled precisely */}
                  <p className="text-[#ff7a00] font-black text-xs sm:text-sm tracking-[0.4em] uppercase mb-4">
                    — DESH KI PUKAAR
                  </p>

                  {/* Main Headings */}
                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-sans leading-[0.9] text-white uppercase tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)]">
                    ANTI <span className="text-[#d4a017] block my-2">DIMAK</span> JANATA PARTY
                  </h1>

                  <h2 className="text-lg sm:text-2xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-party-saffron via-white to-party-green mt-4 tracking-[0.2em] uppercase">
                    “Ekjut Janata, Majboot Desh”
                  </h2>

                  {/* Pledge Quote message */}
                  <div className="max-w-xl mx-auto mt-6">
                    <p className="text-lg sm:text-xl font-light text-gray-300 italic leading-relaxed font-sans px-4">
                      “Desh ko khokla karne wale dimak ko hatane ka sankalp.”
                    </p>
                  </div>

                  {/* Interactive Option buttons: Bold theme, sharp edges */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto px-4">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => scrollToView('join-submission-section')}
                      className="w-full bg-[#d4a017] hover:bg-white text-black py-4 font-mono font-black text-xs uppercase tracking-[0.2em] shadow-[0_5px_20px_rgba(212,160,23,0.35)] cursor-pointer rounded-none duration-300"
                    >
                      JOIN THE MOVEMENT
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setActiveTab('promises')}
                      className="w-full bg-black/50 border border-white/20 text-[#d4a017] hover:border-[#d4a017] hover:text-white py-4 font-mono font-black text-xs uppercase tracking-[0.2em] cursor-pointer rounded-none duration-350"
                    >
                      VIEW PROMISES
                    </motion.button>
                  </div>

                  {/* Accent Info Cards matching layout grid from Bold Theme */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 w-full max-w-2xl text-left">
                    <div className="bg-white/5 border-l-2 border-[#ff7a00] p-4 rounded-none">
                      <p className="text-[#d4a017] text-xs font-black uppercase tracking-widest mb-1 font-sans">Youth Power</p>
                      <p className="text-xs text-gray-400">Empowering 50M+ young leaders for a new India.</p>
                    </div>
                    <div className="bg-white/5 border-l-2 border-[#009245] p-4 rounded-none">
                      <p className="text-[#d4a017] text-xs font-black uppercase tracking-widest mb-1 font-sans">Transparency</p>
                      <p className="text-xs text-gray-400 font-sans">100% blockchain-based governance records.</p>
                    </div>
                  </div>

                </div>

                {/* Sub-hero sunset accent line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
              </section>

              {/* MOVEMENT VALUES SECTION with 3 animated cards */}
              <section id="movement-values-manifesto" className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
                
                <div className="text-center mb-12 select-none">
                  <h3 className="text-[#ff7a00] font-black text-xs sm:text-sm tracking-[0.4em] uppercase mb-1">
                    OUR PILLARS OF ACTION
                  </h3>
                  <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tighter uppercase mt-1 text-white">
                    MOVEMENT VALUES
                  </h2>
                </div>

                {/* Value Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Card 1: Anti Corruption - Saffron style */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="relative bg-black/40 border border-white/10 border-l-4 border-l-[#ff7a00] p-8 flex flex-col justify-between rounded-none shadow-xl group"
                  >
                    <div>
                      <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#d4a017] mb-6 group-hover:border-[#d4a017] transition-colors rounded-none">
                        <Shield className="w-6 h-6 text-[#d4a017]" />
                      </div>
                      <h4 className="text-lg font-black text-white tracking-widest uppercase font-sans group-hover:text-[#d4a017] transition-colors">
                        Anti Corruption
                      </h4>
                      <p className="text-xs text-gray-400 mt-3 font-normal leading-relaxed">
                        Total dismantling of illegal administrative brokers, speed payments, and nepotism. Zero tolerance for bureaucratic termites.
                      </p>
                    </div>
                  </motion.div>

                  {/* Card 2: Youth Power - White style */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="relative bg-black/40 border border-white/10 border-l-4 border-l-white p-8 flex flex-col justify-between rounded-none shadow-xl group"
                  >
                    <div>
                      <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#d4a017] mb-6 group-hover:border-[#d4a017] transition-colors rounded-none">
                        <Users className="w-6 h-6 text-[#d4a017]" />
                      </div>
                      <h4 className="text-lg font-black text-white tracking-widest uppercase font-sans group-hover:text-[#d4a017] transition-colors">
                        Youth Power
                      </h4>
                      <p className="text-xs text-gray-400 mt-3 font-normal leading-relaxed">
                        Channelling energy, technical intelligence and civic capability of emerging leaders directly into leadership roles for community progress.
                      </p>
                    </div>
                  </motion.div>

                  {/* Card 3: Transparent Governance - Green style */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="relative bg-black/40 border border-white/10 border-l-4 border-l-[#009245] p-8 flex flex-col justify-between rounded-none shadow-xl group"
                  >
                    <div>
                      <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#d4a017] mb-6 group-hover:border-[#d4a017] transition-colors rounded-none">
                        <Scale className="w-6 h-6 text-[#d4a017]" />
                      </div>
                      <h4 className="text-lg font-black text-white tracking-widest uppercase font-sans group-hover:text-[#d4a017] transition-colors">
                        Transparent Govt
                      </h4>
                      <p className="text-xs text-gray-400 mt-3 font-normal leading-relaxed">
                        Opening all public ledger allocations, real-time fiscal audit results, and budget expenditures directly to general public inspect.
                      </p>
                    </div>
                  </motion.div>

                </div>

              </section>

              {/* Metallic Section Separator */}
              <MetallicDivider />

              {/* FULLY WORKING JOIN FORM CONTAINER */}
              <section id="join-submission-section" className="max-w-5xl mx-auto px-4 sm:px-6 w-full scroll-mt-24">
                <div className="text-center mb-8 select-none">
                  <h3 className="text-xs uppercase font-mono tracking-[0.3em] text-[#d4a017] font-black">
                    Be The Change
                  </h3>
                  <h2 className="text-xl sm:text-3xl font-bold font-sans tracking-wide uppercase mt-1">
                    Take your pledge
                  </h2>
                </div>
                
                {/* Form Import */}
                <JoinForm onSetTab={(tab) => { setActiveTab(tab); scrollToView('website-root-layout'); }} />
              </section>

            </motion.div>
          )}

          {/* ==================== PAGE 2: PARTY PROMISES PAGE ==================== */}
          {activeTab === 'promises' && (
            <motion.div
              key="promises-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-12 sm:gap-16 pb-12"
            >
              
              {/* HERO SECTION DESIGNED SAME COLOR */}
              <section id="promises-hero" className="relative min-h-[55vh] flex items-center justify-center overflow-hidden py-10">
                {/* Background layout with heavy gradient overlays */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/src/assets/images/adjp_hero_bg_1779869965644.png"
                    alt="Anti Dimak Janata Party Manifesto Background"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center opacity-25 scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
                  <div className="absolute inset-0 bg-[#080808]/80" />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
                  
                  {/* Floating badge branding */}
                  <div className="inline-flex items-center gap-2 bg-[#121212]/80 border border-party-gold/30 px-3.5 py-1.5 rounded-full text-[9px] font-mono tracking-[0.25em] text-[#d4a017] uppercase mb-4 shadow-md shadow-black">
                    <Award className="w-3 C h-3 text-party-gold" />
                    <span>8 National Guarantees</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight uppercase leading-none drop-shadow-md text-white mt-2">
                    OUR PROMISES TO THE NATION
                  </h1>

                  <h2 className="text-sm sm:text-base font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-party-saffron via-white to-party-green mt-3 tracking-[0.2em] uppercase">
                    Sachchai. Transparency. Development.
                  </h2>

                  <p className="text-xs text-gray-400 mt-4 max-w-lg mx-auto font-normal leading-relaxed">
                    A concrete outline of systemic reforms to empower individual citizens, eliminate corruption, and build accessible state services throughout India.
                  </p>

                </div>
              </section>

              {/* PROMISE CARDS SECTION */}
              <section id="promises-list-cards" className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
                
                <div className="text-center mb-8 select-none">
                  <h3 className="text-xs uppercase font-mono tracking-[0.3em] text-[#d4a017] font-black">
                    Systemic Pledges
                  </h3>
                  <h2 className="text-xl sm:text-3xl font-bold font-sans tracking-wide uppercase mt-1">
                    What We Pledge
                  </h2>
                </div>

                {/* Promises Grid System */}
                <Promises />

              </section>

              {/* Section Separator */}
              <MetallicDivider />

              {/* TIMELINE SECTION (ANIMATED GOLD ROADMAP TIMELINE) */}
              <section id="movement-timeline-roadmap" className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
                
                <div className="text-center mb-10 select-none">
                  <h3 className="text-xs uppercase font-mono tracking-[0.3em] text-[#d4a017] font-black">
                    Action Plan
                  </h3>
                  <h2 className="text-xl sm:text-3xl font-bold font-sans tracking-wide uppercase mt-1">
                    Movement Timeline
                  </h2>
                  <p className="text-xs text-gray-400 mt-2 max-w-md mx-auto leading-relaxed">
                    Our sequential strategy to expand the voice, cultivate youth capacity, and install transparent systems nationwide.
                  </p>
                </div>

                {/* Timeline Component */}
                <Timeline />

              </section>

              {/* FINAL CAMPAIGN EMOTIONAL CTA SECTION */}
              <section id="final-campaign-cta" className="relative py-24 overflow-hidden">
                
                {/* Visual Crowd Silhouette and Tricolor background banner */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/src/assets/images/adjp_hero_bg_1779869965644.png"
                    alt="Anti Dimak Janata Party Final Campaign Backing"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center opacity-30 brightness-[0.4]"
                  />
                  {/* Glowing saffron and green corner shadows */}
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-party-saffron/15 to-transparent filter blur-3xl pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-party-green/15 to-transparent filter blur-3xl pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                  
                  {/* Subtle watermarked Logo */}
                  <div className="opacity-15 mb-4 flex justify-center scale-90">
                    <Logo size="lg" showText={false} />
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-black font-sans uppercase tracking-tight text-white leading-none">
                    THE CHANGE STARTS WITH YOU
                  </h2>
                  
                  <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mt-4 font-sans leading-relaxed">
                    Join millions of determined citizens ready to wipe out Administrative failure. Your involvement is the foundation of a clean and progressive India.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto px-4">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setActiveTab('join');
                        setTimeout(() => scrollToView('join-submission-section'), 100);
                      }}
                      className="w-full bg-gradient-to-r from-party-saffron to-party-gold hover:brightness-110 text-black py-3.5 rounded-lg font-mono font-bold text-xs uppercase tracking-widest shadow-[0_5px_20px_rgba(212,160,23,0.35)] cursor-pointer gold-shine"
                    >
                      JOIN PARTY
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setActiveTab('join');
                        setTimeout(() => scrollToView('join-submission-section'), 100);
                      }}
                      className="w-full bg-[#080808]/85 border-2 border-party-gold text-[#d4a017] hover:text-white py-3 rounded-lg font-mono font-bold text-xs uppercase tracking-widest shadow-lg cursor-pointer hover:bg-black transition-all"
                    >
                      SUPPORT THE MISSION
                    </motion.button>
                  </div>

                </div>
              </section>

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer id="premium-footer" className="relative bg-[#050505] border-t border-party-gold/15 pt-12 z-10 overflow-hidden select-none">
        
        {/* Tricolor Bottom border line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-party-saffron via-white to-party-green" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center justify-center text-center pb-8 gap-5">
            
            {/* Logo center */}
            <Logo size="md" showText={true} />

            {/* Quote slogan */}
            <p className="text-xs text-gray-500 italic max-w-sm mt-1 leading-relaxed">
              &ldquo;Desh ko khokla karne wale dimak ko hatane ka sankalp. Ekjut Janata, Majboot Desh.&rdquo;
            </p>

            {/* Social Media Vectors */}
            <div className="flex items-center gap-5 mt-2">
              <a href="#twitter" className="text-gray-500 hover:text-party-gold hover:scale-110 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#facebook" className="text-gray-500 hover:text-party-gold hover:scale-110 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#instagram" className="text-gray-500 hover:text-party-gold hover:scale-110 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#youtube" className="text-gray-500 hover:text-party-gold hover:scale-110 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Navigation links inside footer */}
            <div className="flex gap-6 font-mono text-[10px] uppercase font-bold tracking-widest text-gray-500 mt-2">
              <button 
                onClick={() => { setActiveTab('join'); scrollToView('website-root-layout'); }}
                className={`hover:text-party-gold transition-colors cursor-pointer ${activeTab === 'join' ? 'text-party-gold' : ''}`}
              >
                Join Movement
              </button>
              <span className="text-gray-800">|</span>
              <button 
                onClick={() => { setActiveTab('promises'); scrollToView('website-root-layout'); }}
                className={`hover:text-party-gold transition-colors cursor-pointer ${activeTab === 'promises' ? 'text-party-gold' : ''}`}
              >
                Our Promises
              </button>
            </div>

          </div>

          {/* Slogan metadata */}
          <div className="border-t border-gray-950 py-6 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">
              ANTI DIMAK JANATA PARTY — Voice Against Corruption
            </p>
            <p className="text-[9px] text-gray-600 font-mono flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500/10 inline" /> for a Stronger India &bull; &copy; 2026 ADJP.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
