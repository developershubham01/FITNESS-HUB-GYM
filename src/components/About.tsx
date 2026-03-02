import React from 'react';
import { Shield, Zap, Target, Star, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const highlights = [
        { icon: Shield, title: 'Certified Trainers', desc: 'Expert guidance every step of your journey.' },
        { icon: Zap, title: 'Modern Equipment', desc: 'Top-tier machines from global brands.' },
        { icon: Target, title: 'Result Focused', desc: 'Customized plans to hit your fitness goals.' },
        { icon: Star, title: 'Open 24/7', desc: 'Train on your own schedule, anytime.' },
        { icon: Trophy, title: 'Award Winning', desc: 'Regarded as the best gym in Mumbai.' },
        { icon: Users, title: 'Community', desc: 'Join a group of like-minded fitness fans.' },
    ];

    return (
        <section id="about" className="py-24 bg-gym-dark relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass-card accent-glow">
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" alt="Gym Interior" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gym-dark via-transparent to-transparent opacity-60"></div>
                        </div>
                        {/* Stats Badge */}
                        <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-2xl flex flex-col items-center border-gym-accent/30 shadow-2xl">
                            <span className="text-5xl font-extrabold text-gym-accent font-outfit">20k</span>
                            <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Sq Ft Space</span>
                        </div>
                    </motion.div>

                    <div>
                        <span className="text-gym-accent font-bold uppercase tracking-widest block mb-4">About Our Gym</span>
                        <h2 className="text-4xl md:text-5xl font-outfit font-extrabold mb-8 leading-tight">MUMBAI'S LARGEST <br /> FITNESS DESTINATION</h2>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            Founded with the vision of providing a world-class training environment for every fitness level,
                            Fitness Hub offers 20,000 square feet of high-performance space. Whether you're a pro athlete or
                            just starting out, our premium facilities and 24/7 access ensure you never miss a beat.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {highlights.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="bg-gym-accent/10 p-2 rounded-lg">
                                        <item.icon size={20} className="text-gym-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1 uppercase tracking-wide">{item.title}</h4>
                                        <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
