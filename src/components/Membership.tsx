import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Star } from 'lucide-react';

const plans = [
    {
        name: 'BASIC',
        price: '1,999',
        features: ['Access during peak hours', 'Basic equipment access', '2 Free classes per month', 'Mobile App access']
    },
    {
        name: 'PRO',
        price: '3,499',
        features: ['24/7 Access Included', 'All cardio & strength areas', 'Unlimited Group Classes', '1 PT Session per month', 'Sauna and Steam Access'],
        popular: true
    },
    {
        name: 'ELITE',
        price: '5,999',
        features: ['Personalized Nutrition Plan', '4 PT Sessions per month', 'Recovery Zone access', 'VIP Lounge & Locker room', 'Body Composition Analysis']
    }
];

const Membership: React.FC = () => {
    return (
        <section id="plans" className="py-24 bg-gym-dark relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gym-accent/5 blur-[150px] -z-10 rounded-full"></div>

            <div className="container mx-auto px-6 text-center">
                <div className="max-w-2xl mx-auto mb-20 text-center">
                    <span className="text-gym-accent font-bold uppercase tracking-widest block mb-4">Membership Plans</span>
                    <h2 className="text-4xl md:text-5xl font-outfit font-extrabold mb-8 leading-tight">INVEST IN <br /> YOUR FUTURE SELF</h2>
                    <p className="text-gray-400">Choose the plan that fits your lifestyle. Flexible memberships for everyone.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`glass-card p-12 rounded-[40px] relative transition-all duration-300 group hover:scale-[1.02] ${plan.popular ? 'border-gym-accent/50 scale-105 z-10 accent-glow bg-white/5' : 'hover:border-white/20'}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gym-accent text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest flex items-center gap-2">
                                    <Star size={14} fill="white" /> MOST POPULAR
                                </div>
                            )}

                            <h3 className="text-gray-400 font-bold mb-4 tracking-widest uppercase italic">{plan.name}</h3>
                            <div className="mb-10 flex items-baseline justify-center gap-1">
                                <span className="text-sm text-gray-400">₹</span>
                                <span className="text-6xl font-outfit font-extrabold">{plan.price}</span>
                                <span className="text-gray-400 font-medium lowercase">/Mo</span>
                            </div>

                            <div className="space-y-6 mb-12 text-left">
                                {plan.features.map((feat) => (
                                    <div key={feat} className="flex items-center gap-4 text-gray-300">
                                        <div className="bg-gym-accent/10 p-1 rounded-full group-hover:bg-gym-accent/20 transition-colors">
                                            <Check className="text-gym-accent" size={16} />
                                        </div>
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <a
                                    href="tel:+919876543210"
                                    className={`btn-primary group py-4 h-auto ${!plan.popular ? 'bg-white/10 text-white border border-white/10 hover:bg-gym-accent transition-all' : ''}`}
                                >
                                    CALL FOR PRICING
                                </a>
                                <a href="https://wa.me/+919876543210" className="btn-outline border-white/5 hover:border-green-500 hover:text-green-500 py-3 text-sm flex items-center justify-center gap-2 group">
                                    WHATSAPP NOW
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Membership;
