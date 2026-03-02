import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, Clock, MapPin } from 'lucide-react';
import heroImage from '../image/hero.png';
const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gym-dark">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3 mb-6 bg-gym-accent/10 border border-gym-accent/20 w-max px-4 py-2 rounded-full"
                        >
                            <div className="w-2 h-2 rounded-full bg-gym-accent animate-pulse"></div>
                            <span className="text-gym-accent text-sm font-bold uppercase tracking-widest">Mumbai's Biggest 24/7 Gym</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-outfit font-extrabold leading-[1.1] mb-8"
                        >
                            20,000 SQ FT OF <br />
                            <span className="text-gym-accent italic">PURE FITNESS</span> POWER
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
                        >
                            Transform your body with world-class equipment and expert trainers.
                            Everything you need for cardio, strength, and transformation under one massive roof.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <a href="#plans" className="btn-primary group">
                                JOIN NOW <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="btn-outline">
                                BOOK FREE TRIAL
                            </a>
                            <a href="tel:+919876543210" className="flex items-center gap-3 text-lg font-bold hover:text-gym-accent transition-colors md:ml-4">
                                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-gym-accent">
                                    <Phone size={20} className="text-gym-accent" />
                                </div>
                                CALL NOW
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 pt-12 border-t border-white/10"
                        >
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-gym-accent font-bold">
                                    <Clock size={18} /> OPEN 24/7
                                </div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Ttrain anytime</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-gym-accent font-bold">
                                    <MapPin size={18} /> MALAD, MUMBAI
                                </div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Convenient location</p>
                            </div>
                            <div className="hidden md:flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-gym-accent font-bold">
                                    ⭐ 4.6 (500+ REVIEWS)
                                </div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Top rated gym</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 glass-card p-4 rounded-[40px] border-gym-accent/20 accent-glow overflow-hidden">
                            <img
                                src={heroImage}
                                alt="Fitness Hub Interior"
                                className="w-full h-[600px] object-cover rounded-[32px] shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Decorative background circle */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-gym-accent/20 blur-[80px] -z-10 rounded-full"></div>
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gym-accent/10 blur-[80px] -z-10 rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

