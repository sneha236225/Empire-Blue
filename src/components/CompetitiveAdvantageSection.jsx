import React from "react";
import { motion } from "framer-motion";

const CompetitiveAdvantageSection = ({ advantages }) => {
    return (
        <section className="py-20 bg-[#D7E0E7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-3xl md:text-5xl font-bold text-[#03009B] mb-4"
                    >
                        Competitive{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
                            Advantage
                        </span>{" "}
                        Beyond The Ordinary
                    </motion.h2>
                </div>

                {/* Top 3 Boxes */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
                >
                    {advantages.slice(0, 3).map((adv, i) => (
                        <div key={i} className="flex pl-2 pr-2 flex-col items-center text-center backdrop-blur-sm rounded-3xl">
                            <img className="w-20 h-20 object-contain mb-4" src={adv.icon} alt={adv.title} />
                            <h3 className="text-xl font-medium mb-4 text-[#03009B]">{adv.title}</h3>
                            <p className="text-black leading-tight text-[0.96rem]">{adv.description}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Process Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="hidden md:flex justify-between items-center my-2 px-8"
                >
                    {[1, 2, 3, 4, 5, 6].map((step, idx) => (
                        <React.Fragment key={step}>
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#03009B] font-bold border-2 border-blue-700 shadow-lg">
                                {step}
                            </div>
                            {idx < 5 && <div className="flex-1 h-1 bg-[#03009B] mx-2"></div>}
                        </React.Fragment>
                    ))}
                </motion.div>

                {/* Bottom 3 Boxes */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6"
                >
                    {advantages.slice(3, 6).map((adv, i) => (
                        <div key={i} className="flex flex-col items-center text-center backdrop-blur-sm rounded-3xl p-6">
                            <img className="w-20 h-20 object-contain mb-4" src={adv.icon} alt={adv.title} />
                            <h3 className="text-xl font-medium mb-4 text-[#03009B]">{adv.title}</h3>
                            <p className="text-black leading-tight text-[0.96rem]">{adv.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CompetitiveAdvantageSection;
