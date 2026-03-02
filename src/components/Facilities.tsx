import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Target, UserCheck, Users, Dumbbell } from 'lucide-react';

const facilities = [
    { icon: Heart, title: 'Cardio Zone', desc: '50+ cardio machines from world-class brands.' },
    { icon: Activity, title: 'Strength Training', desc: 'Free weights and plate loaded machines.' },
    { icon: Target, title: 'Functional Zone', desc: 'Turf, kettlebells, and bodyweight area.' },
    { icon: UserCheck, title: 'Personal Training', desc: 'Customized plans for guaranteed results.' },
    { icon: Users, title: 'Group Classes', desc: 'Yoga, Zumba, HIIT, and more.' },
    { icon: Dumbbell, title: 'Olympic Lifting', desc: 'Heavy duty racks and wood platforms.' },
];

const Facilities: React.FC = () => {
    return (
        <section id="facilities" className="py-24 bg-gym-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <span className="text-gym-accent font-bold uppercase tracking-widest block mb-4">What we offer</span>
                    <h2 className="text-4xl md:text-5xl font-outfit font-extrabold mb-8 leading-tight uppercase">WORLD-CLASS <br /> FITNESS ZONES</h2>
                    <p className="text-gray-400">Maximize your performance with our state-of-the-art facilities across 20,000 square feet.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((fac, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card glass-card-hover p-12 rounded-3xl group relative overflow-hidden h-[300px] flex flex-col justify-end"
                        >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gym-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative z-10">
                                <div className="bg-gym-accent/10 border border-gym-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gym-accent group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gym-accent/40 transition-all duration-300">
                                    <fac.icon size={32} className="text-gym-accent group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold font-outfit uppercase mb-4 tracking-wide group-hover:text-gym-accent transition-colors">{fac.title}</h3>
                                <p className="text-gray-500 group-hover:text-gray-300 transition-colors">{fac.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
