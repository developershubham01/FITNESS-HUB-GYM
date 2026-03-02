import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions: React.FC = () => {
    return (
        <div className="fixed bottom-0 right-0 w-full lg:w-auto lg:bottom-12 lg:right-12 z-[60] p-6 pointer-events-none">
            <div className="flex lg:flex-col items-center justify-center gap-4 w-full pointer-events-auto">
                <motion.a
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    href="tel:+91987090900"
                    className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-gym-accent px-8 py-4 rounded-full text-white font-bold shadow-2xl hover:scale-105 transition-all lg:hidden"
                >
                    <Phone size={20} /> CALL HUB
                </motion.a>

                <motion.a
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    href="https://wa.me/9184500000?text=Hi%20Fitness%20Hub!%20I%20want%20to%20know%20more%20about%20membership%20plans%20and%20free%20trial."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 w-16 h-16 rounded-full text-white font-bold shadow-2xl hover:scale-110 transition-all hover:bg-green-600 group relative"
                >
                    <MessageCircle size={28} />

                    <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block whitespace-nowrap">
                        WhatsApp Us
                    </span>
                </motion.a>

                {/* Call button for desktop */}
                <motion.a
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    href="tel:+919876543210"
                    className="hidden lg:flex items-center justify-center gap-2 bg-gym-accent w-16 h-16 rounded-full text-white font-bold shadow-2xl hover:scale-110 transition-all hover:bg-gym-accentHover overflow-hidden group relative"
                >
                    <Phone size={24} />
                    <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block whitespace-nowrap">
                        Call Now
                    </span>
                </motion.a>
            </div>
        </div>
    );
};

export default FloatingActions;
