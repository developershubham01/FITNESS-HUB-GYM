import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Facilities', href: '#facilities' },
        { name: 'Plans', href: '#plans' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-2 group">
                    <div className="bg-gym-accent p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-gym-accent/30">
                        <Dumbbell className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-outfit font-extrabold tracking-tight">FITNESS <span className="text-gym-accent">HUB</span></span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold tracking-wide hover:text-gym-accent transition-colors uppercase"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#plans" className="btn-primary text-xs py-2 px-6">JOIN NOW</a>
                </div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-gym-dark border-b border-white/10 glass-card lg:hidden flex flex-col p-6 gap-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-bold py-2 border-b border-white/5"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#plans" className="btn-primary mt-4" onClick={() => setIsMobileMenuOpen(false)}>JOIN NOW</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
