import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-gym-dark relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-12"
                    >
                        <div>
                            <span className="text-gym-accent font-bold uppercase tracking-widest block mb-4">Location & Hours</span>
                            <h2 className="text-4xl md:text-5xl font-outfit font-extrabold mb-8 uppercase tracking-tight">VISIT <br /> THE HUB</h2>
                            <div className="flex items-center gap-3 bg-gym-accent/10 border border-gym-accent/30 w-max px-6 py-3 rounded-2xl mb-8">
                                <Shield size={24} className="text-gym-accent animate-pulse" />
                                <span className="text-xl font-bold font-outfit text-white tracking-widest italic uppercase">OPEN 24/7</span>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-12">
                                We are located in the heart of Mumbai. Over 20,000 square feet of fitness power
                                waiting for you. Come visit us for a free orientation and a walk-through.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="bg-gym-accent/10 p-4 rounded-xl border border-gym-accent/10 group-hover:border-gym-accent transition-colors">
                                    <MapPin className="text-gym-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase tracking-wide">Our Location</h4>
                                    <p className="text-gray-500 leading-relaxed font-medium transition-colors group-hover:text-gray-300">
                                        12, Floor 2, Global Hub, <br /> Malad West, Mumbai, MH - 400064
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="bg-gym-accent/10 p-4 rounded-xl border border-gym-accent/10 group-hover:border-gym-accent transition-colors">
                                    <Phone className="text-gym-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase tracking-wide">Phone Number</h4>
                                    <p className="text-gray-500 leading-relaxed font-medium transition-colors group-hover:text-gray-300">
                                        +91 98765 00000 <br /> +91 99999 00000
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group cursor-pointer">
                                <div className="bg-gym-accent/10 p-4 rounded-xl border border-gym-accent/10 group-hover:border-gym-accent transition-colors">
                                    <Mail className="text-gym-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 uppercase tracking-wide">Contact Email</h4>
                                    <p className="text-gray-500 leading-relaxed font-medium transition-colors group-hover:text-gray-300">
                                        info@fitnesshub.com <br /> support@fitnesshub.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-gym-accent hover:border-gym-accent group transition-all duration-300 group">
                                    <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-4 rounded-[40px] overflow-hidden min-h-[500px] border-white/5 accent-glow relative group"
                    >
                        {/* Embedded Google Map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120562.19324503794!2d72.77663365820311!3d19.214041160000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b96f3cf0ad3f%3A0xe54e2f38a53102a0!2sMalad%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                            className="w-full h-[500px] rounded-[32px] border-none grayscale-[0.8] brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                            loading="lazy"
                            title="Google Map Location"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <a href="#home" className="inline-flex items-center gap-3 group mb-12">
                    <span className="text-4xl font-outfit font-extrabold tracking-tighter">FITNESS <span className="text-gym-accent italic uppercase text-glow">HUB</span></span>
                </a>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
                    <a href="#about" className="text-gray-500 font-bold hover:text-white transition-colors uppercase text-sm tracking-widest">About</a>
                    <a href="#facilities" className="text-gray-500 font-bold hover:text-white transition-colors uppercase text-sm tracking-widest">Facilities</a>
                    <a href="#plans" className="text-gray-500 font-bold hover:text-white transition-colors uppercase text-sm tracking-widest">Plans</a>
                    <a href="#reviews" className="text-gray-500 font-bold hover:text-white transition-colors uppercase text-sm tracking-widest">Reviews</a>
                    <a href="#contact" className="text-gray-500 font-bold hover:text-white transition-colors uppercase text-sm tracking-widest">Contact</a>
                </div>

                <div className="max-w-2xl mx-auto p-12 glass-card rounded-[40px] border-gym-accent/30 mb-20 bg-gym-accent/5 backdrop-blur-3xl">
                    <h3 className="text-3xl font-bold font-outfit uppercase mb-4 italic">Ready to transform?</h3>
                    <p className="text-gray-400 mb-8 uppercase tracking-widest text-xs font-bold font-inter">Join the community of 5,000+ athletes who trains at the hub.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+919876543210" className="btn-primary group tracking-wider">
                            GET A FREE TRIAL <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                <p className="text-gray-600 text-sm tracking-widest font-bold font-inter mt-12">
                    &copy; {new Date().getFullYear()} FITNESS HUB MUMBAI. ALL RIGHTS RESERVED. <br />
                    MADE WITH PASSION FOR ELITE FITNESS.
                </p>
                {/* Developer Credit */}
<div className="mt-8 flex flex-col items-center gap-4">
    <p className="text-gray-500 text-sm tracking-wider">
        Built with ❤️ by 
        <span className="text-gym-accent font-semibold ml-1">
            Shubham Sharma
        </span>
    </p>

    <div className="flex gap-4">
        <a 
            href="https://github.com/developershubham01" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-gym-accent hover:border-gym-accent transition-all group"
        >
            <Github size={18} className="text-gray-400 group-hover:text-white transition-colors" />
        </a>

        <a 
            href="https://www.linkedin.com/in/shubham-sharma395/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-gym-accent hover:border-gym-accent transition-all group"
        >
            <Linkedin size={18} className="text-gray-400 group-hover:text-white transition-colors" />
        </a>
    </div>
</div>
            </div>
        </footer>
    );
};

export { Contact, Footer };
