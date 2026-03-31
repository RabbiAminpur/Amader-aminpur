/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, BookOpen, School, Search, Bell, Menu } from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200 mb-6">
                <GraduationCap size={48} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold text-blue-600 tracking-tight">আমাদের আমিনপুর</h1>
              <p className="text-slate-400 mt-2 font-medium">আপনার আমিনপুরের সাথী</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pb-20"
          >
            {/* Categories Section */}
            <section className="px-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-800">ক্যাটাগরি</h3>
                <button className="text-blue-600 text-sm font-semibold">সব দেখুন</button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Requested Category: শিক্ষা প্রতিষ্ঠান */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 group transition-all hover:shadow-md hover:border-blue-100"
                >
                  <motion.div 
                    animate={{ 
                      y: [0, -4, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  >
                    <School size={28} />
                  </motion.div>
                  <span className="font-bold text-slate-700">শিক্ষা প্রতিষ্ঠান</span>
                </motion.button>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
