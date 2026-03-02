import React from 'react';
import { motion } from 'framer-motion';

const images = [
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&q=80&w=800',
];

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-24 bg-gym-dark overflow-hidden">
            <div className="container mx-auto px-6 mb-20 text-center">
                <span className="text-gym-accent font-bold uppercase tracking-widest block mb-4">Inside our space</span>
                <h2 className="text-4xl md:text-5xl font-outfit font-extrabold mb-8 uppercase tracking-tight italic">THE HUB <span className="text-gym-accent opacity-50 not-italic">GALLERY</span></h2>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative aspect-square overflow-hidden rounded-3xl cursor-pointer group glass-card"
                        >
                            <img
                                src={src}
                                alt="Gym Gallery"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gym-accent/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-8">
                                <div className="text-white">
                                    <h4 className="font-bold uppercase tracking-widest text-sm">Fitness Hub</h4>
                                    <p className="text-xs font-medium text-white/70 uppercase">Mumbai, India</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
