import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    { name: 'Rahul Sharma', text: "The 24/7 access is a game changer. The equipment here is better than any other gym in Mumbai.", rating: 5 },
    { name: 'Priya Patel', text: "20,000 sq ft and I never have to wait for a machine. The group classes are exceptionally motivating.", rating: 5 },
    { name: 'Ankit Mehta', text: "Certified trainers who actually care about your progress. Highly recommended for transformation.", rating: 4 },
    { name: 'Sameer Khan', text: "Best value for money. Premium atmosphere, very clean and spacious. Elite membership is worth it.", rating: 5 },
    { name: 'Sneha Rao', text: "The cardio zone is massive. Great vibe and energy in the gym. My favorite place to train.", rating: 4 },
];

const Reviews: React.FC = () => {
    return (
        <section id="reviews" className="py-24 bg-gym-dark relative overflow-hidden">
            <div className="container mx-auto px-6 mb-20 text-center">
                <div className="flex items-center justify-center gap-2 mb-8 bg-gym-accent/10 px-6 py-2 rounded-full w-max mx-auto border border-gym-accent/30">
                    <Star className="text-gym-accent fill-gym-accent" size={18} />
                    <span className="text-xl font-bold font-outfit">4.6 RATING</span>
                    <span className="text-gray-500 font-bold ml-2">(524 REVIEWS)</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-outfit font-extrabold mb-8 uppercase tracking-tight">HEAR FROM OUR <br /> <span className="text-gym-accent italic italic">WARRIORS</span></h2>
            </div>

            <div className="relative">
                {/* Marquee effect using Framer Motion */}
                <div className="flex gap-8 px-4 overflow-hidden">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                        className="flex gap-8 whitespace-nowrap"
                    >
                        {[...testimonials, ...testimonials].map((review, i) => (
                            <div key={review.name + i} className="glass-card p-10 rounded-[32px] min-w-[350px] sm:min-w-[450px] relative">
                                <Quote className="absolute top-6 right-6 text-gym-accent/20" size={48} />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} size={16} className={`${j < review.rating ? 'text-gym-accent fill-gym-accent' : 'text-gray-600'}`} />
                                    ))}
                                </div>
                                <p className="text-lg text-gray-300 leading-relaxed italic mb-8 whitespace-normal break-words">"{review.text}"</p>
                                <div>
                                    <h4 className="font-bold font-outfit tracking-wider text-white uppercase">{review.name}</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Gym Member</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
