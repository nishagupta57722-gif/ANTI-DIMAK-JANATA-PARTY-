/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Mail, Map, Award, CheckCircle, Info, ChevronRight, Share2, Clipboard, Download } from 'lucide-react';
import { JoinFormData } from '../types';

interface FormProps {
  onSetTab: (tab: 'join' | 'promises') => void;
}

const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export default function JoinForm({ onSetTab }: FormProps) {
  const [formData, setFormData] = useState<JoinFormData>({
    fullName: '',
    email: '',
    state: '',
    district: '',
    age: 25,
    whyJoin: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof JoinFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ id: string; name: string; state: string; date: string } | null>(null);

  const validate = () => {
    const newErrors: Partial<Record<keyof JoinFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.state) {
      newErrors.state = "Please select your state";
    }

    if (!formData.district.trim()) {
      newErrors.district = "District is required";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age < 12 || formData.age > 110) {
      newErrors.age = "Please enter a valid age (12 - 110)";
    }

    if (!formData.whyJoin.trim()) {
      newErrors.whyJoin = "Please let us know why you wish to join";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 0 : value
    }));
    // Clear field-specific error
    if (errors[name as keyof JoinFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate database lookup/creation delay
    setTimeout(() => {
      // Generate unique Supporter ID
      const randomId = 'ADJP-' + Math.floor(100000 + Math.random() * 900000);
      const today = new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      setSuccessData({
        id: randomId,
        name: formData.fullName,
        state: formData.state,
        date: today
      });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto z-10">
      
      {/* Absolute subtle gold shadow glow behind form */}
      <div className="absolute -inset-1 bg-[#d4a017]/10 blur-xl pointer-events-none" />

      {/* Main Glassmorphism Form container */}
      <div className="relative bg-black/80 border border-white/10 shadow-2xl overflow-hidden rounded-none">
        
        {/* Tricolor top border accent strip */}
        <div id="tricolor-form-accent" className="h-[3px] w-full bg-gradient-to-r from-[#ff7a00] via-[#ffffff] to-[#009245]" />

        <div className="p-8 sm:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase font-sans">
              JOIN THE <span className="text-[#d4a017]">SEVA</span>
            </h2>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest font-mono">
              Sankalp Patra: Clean India, Corruption-Free Future
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name input */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-black uppercase tracking-widest text-[#ff7a00] mb-2 flex items-center justify-between">
                <span>Full Name</span>
                {errors.fullName && <span className="text-red-500 font-mono italic normal-case text-[10px] font-normal tracking-normal">{errors.fullName}</span>}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-party-gold opacity-50" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. ARJUN MEHTA"
                  className={`w-full bg-white/5 border ${errors.fullName ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#d4a017]'} rounded-none pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all`}
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-[#ff7a00] mb-2 flex items-center justify-between">
                <span>Email Address</span>
                {errors.email && <span className="text-red-500 font-mono italic normal-case text-[10px] font-normal tracking-normal">{errors.email}</span>}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-party-gold opacity-50" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. arjun@domain.com"
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#d4a017]'} rounded-none pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all`}
                />
              </div>
            </div>

            {/* Grid for State & District */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* State Choice */}
              <div>
                <label htmlFor="state" className="block text-xs font-black uppercase tracking-widest text-[#ff7a00] mb-2 flex items-center justify-between">
                  <span>State</span>
                  {errors.state && <span className="text-red-500 font-mono italic normal-case text-[10px] font-normal tracking-normal">{errors.state}</span>}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Map className="h-4 w-4 text-party-gold opacity-50" />
                  </div>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full bg-white/5 border ${errors.state ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#d4a017]'} rounded-none pl-10 pr-4 py-3 text-sm text-white outline-none transition-all appearance-none cursor-pointer`}
                  >
                    <option value="" className="bg-[#121212] text-gray-500">Select State</option>
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st} className="bg-[#121212] text-white">
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* District Input */}
              <div>
                <label htmlFor="district" className="block text-xs font-black uppercase tracking-widest text-[#ff7a00] mb-2 flex items-center justify-between">
                  <span>District</span>
                  {errors.district && <span className="text-red-500 font-mono italic normal-case text-[10px] font-normal tracking-normal">{errors.district}</span>}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Map className="h-4 w-4 text-party-gold opacity-50" />
                  </div>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    placeholder="e.g. LUCKNOW"
                    className={`w-full bg-white/5 border ${errors.district ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#d4a017]'} rounded-none pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all`}
                  />
                </div>
              </div>
            </div>

            {/* Age input */}
            <div>
              <label htmlFor="age" className="block text-xs font-black uppercase tracking-widest text-[#ff7a00] mb-2 flex items-center justify-between">
                <span>Age</span>
                {errors.age && <span className="text-red-500 font-mono italic normal-case text-[10px] font-normal tracking-normal">{errors.age}</span>}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Calendar className="h-4 w-4 text-party-gold opacity-50" />
                </div>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="12"
                  max="110"
                  value={formData.age || ''}
                  onChange={handleInputChange}
                  placeholder="e.g. 25"
                  className={`w-full bg-white/5 border ${errors.age ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#d4a017]'} rounded-none pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all`}
                />
              </div>

              {/* Age Note Indicator */}
              {formData.age > 0 && formData.age < 18 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3 text-xs text-orange-400 flex items-start gap-1.5 bg-orange-950/20 border border-orange-500/20 rounded-none p-3"
                >
                  <Info className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>Young supporters are welcome to participate in awareness activities.</span>
                </motion.div>
              )}
            </div>

            {/* Why Join textarea */}
            <div>
              <label htmlFor="whyJoin" className="block text-xs font-black uppercase tracking-widest text-[#ff7a00] mb-2 flex items-center justify-between">
                <span>Why do you want to join?</span>
                {errors.whyJoin && <span className="text-red-500 font-mono italic normal-case text-[10px] font-normal tracking-normal">{errors.whyJoin}</span>}
              </label>
              <textarea
                id="whyJoin"
                name="whyJoin"
                rows={3}
                value={formData.whyJoin}
                onChange={handleInputChange}
                placeholder="Share your goals and vision for anti-corruption and strong governance in India..."
                className={`w-full bg-white/5 border ${errors.whyJoin ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#d4a017]'} rounded-none px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all resize-none`}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              id="submit-form-button"
              className="w-full bg-[#d4a017] hover:bg-white text-black font-black uppercase tracking-[0.2em] py-4 transition-all duration-300 relative overflow-hidden group rounded-none cursor-pointer flex items-center justify-center"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span className="uppercase text-xs tracking-widest font-mono text-black">Verifying...</span>
                </>
              ) : (
                <>
                  <span className="relative z-10 text-xs font-mono font-bold">PLEDGE ON MY NATION</span>
                  <ChevronRight className="w-4 h-4 ml-1 relative z-10 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </motion.button>

          </form>
        </div>
      </div>

      {/* Dynamic Supporter Card & Success Popup Dialog */}
      <AnimatePresence>
        {successData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-[#0b0b0b] rounded-2xl border border-party-gold/30 shadow-[0_0_50px_rgba(212,160,23,0.25)] max-w-lg w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Festive Tricolor Banner */}
              <div className="h-1.5 w-full bg-gradient-to-r from-party-saffron via-white to-party-green" />

              <div className="p-6 sm:p-8 text-center">
                {/* Check Shield Icon */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 15, -10, 0] }}
                    transition={{ type: "spring", damping: 10, delay: 0.2 }}
                    className="w-16 h-16 rounded-full bg-[#121212] border-2 border-party-gold/40 flex items-center justify-center text-party-gold shadow-[0_0_20px_rgba(212,160,23,0.3)]"
                  >
                    <CheckCircle className="w-10 h-10 text-party-gold fill-green-950/20" />
                  </motion.div>
                </div>

                {/* Main Heading as requested */}
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-white uppercase tracking-tight">
                  Welcome To <span className="text-[#d4a017]">Anti Dimak Janata Party</span> Movement
                </h3>
                
                <p className="text-xs text-gray-400 mt-2 font-mono uppercase tracking-wider">
                  Desh ke liye sankalp patra grahan kiya gaya hai
                </p>

                {/* DYNAMIC DIGITAL IDENTITY CARD */}
                <div className="mt-6 mb-6">
                  <p className="text-[10px] uppercase font-mono tracking-widest text-[#d4a017] mb-2 font-bold flex items-center justify-center gap-1.5">
                    <Award className="w-3 h-3 text-party-gold" />
                    <span>Your Digital Supporter ID Card</span>
                  </p>

                  {/* ID Card Wrapper */}
                  <div className="relative bg-gradient-to-br from-[#161616] via-[#0c0c0c] to-[#161616] p-5 rounded-xl border border-party-gold/25 shadow-2xl overflow-hidden text-left mx-auto max-w-sm">
                    {/* Tiny Light sweep on ID card */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-party-saffron to-[#d4a017] opacity-10 filter blur-xl rounded-full" />
                    
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-850 pb-3 mb-3">
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans leading-none">
                          ANTI DIMAK JANATA PARTY
                        </h4>
                        <span className="text-[8px] uppercase font-mono tracking-widest text-party-gold mt-1 block">
                          Official Supporter
                        </span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[8px] text-gray-500 font-mono">CODE: SEV-01</span>
                        <div className="h-1.5 w-8 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full mt-1" />
                      </div>
                    </div>

                    {/* Card Content & Meta */}
                    <div className="space-y-2.5">
                      <div>
                        <span className="text-[8px] text-gray-500 uppercase tracking-widest font-mono block">SUPPORTER NAME</span>
                        <span className="text-sm font-bold text-white uppercase font-sans tracking-wide block">
                          {successData.name}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-[8px] text-gray-500 uppercase tracking-widest font-mono block">STATE LOCATION</span>
                          <span className="text-xs font-medium text-gray-300 uppercase block">
                            {successData.state}
                          </span>
                        </div>
                        <div>
                          <span className="text-[8px] text-gray-500 uppercase tracking-widest font-mono block">MEMBER ID</span>
                          <span className="text-xs font-mono font-bold text-party-gold tracking-wider block">
                            {successData.id}
                          </span>
                        </div>
                      </div>

                      <div className="border-t border-gray-850/60 pt-2.5 flex items-center justify-between">
                        <div>
                          <span className="text-[8px] text-gray-500 uppercase tracking-widest font-mono block">DATE OF JOINING</span>
                          <span className="text-[10px] text-gray-400 font-mono block">{successData.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[8px] text-green-400 uppercase tracking-wider font-mono font-semibold">Verified Member</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtitle emotional touch */}
                <p className="text-xs text-gray-400 italic font-medium px-4">
                  "Desh ko khokla karne wale dimak ko hatane mein aapka yogdaan amar rahega."
                </p>

                {/* Action Buttons as requested */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSuccessData(null);
                      // Clear form data
                      setFormData({
                        fullName: '',
                        email: '',
                        state: '',
                        district: '',
                        age: 25,
                        whyJoin: ''
                      });
                    }}
                    className="w-full bg-gray-900 border border-gray-800 text-white rounded-lg py-2.5 text-xs uppercase tracking-widest font-mono hover:bg-black transition-colors"
                  >
                    Continue
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSuccessData(null);
                      onSetTab('promises');
                    }}
                    className="w-full bg-gradient-to-r from-party-gold to-amber-600 text-black hover:brightness-110 rounded-lg py-2.5 text-xs uppercase tracking-widest font-mono font-bold shadow-[0_4px_10px_rgba(212,160,23,0.25)] transition-all"
                  >
                    View Promises
                  </motion.button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
