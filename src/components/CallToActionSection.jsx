import { motion } from "framer-motion";

const DecorativeDots = ({ className }) => (
    <div className={`space-y-1 md:space-y-2 ${className}`}>
        <div className="flex gap-1 ml-0">
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-red-500"></div>
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-500"></div>
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-500"></div>
        </div>
        <div className="flex gap-1 ml-3">
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-red-500"></div>
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-500"></div>
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-500"></div>
        </div>
        <div className="flex gap-1 ml-6">
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-red-500"></div>
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-500"></div>
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-500"></div>
        </div>
    </div>
);

const CallToActionSection = () => (
    <section className="py-20 bg-[#D7E0E7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#F3F9FF] rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                {/* Top Dots */}
                <DecorativeDots className="absolute top-4 left-4 md:top-8 md:left-8" />
                <DecorativeDots className="absolute top-4 right-4 md:top-8 md:right-8" />

                {/* Content */}
                <div className="text-center mb-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-3xl md:text-5xl font-bold mb-4 mt-6 md:mt-0"
                    >
                        <span className="text-[#03009B]">Take the </span>
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
                            Next Step
                        </span>
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-2xl md:text-4xl font-bold text-gray-800 mb-6"
                    >
                        Towards Better Health
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-gray-500 text-[1rem] md:text-[1.09rem] leading-snug md:leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        Empire Blue Operates in the growing health and wellness market health conscious individuals seeking natural solutions for disease prevention and immune support with increasing awareness of health risks like cancer and heart disease demand for mineral based supplements in mineral water Ready to experience our exceptional innovative water? book your first can today and discover how we can help you live your healthiest life.
                    </motion.p>
                    <button className="bg-[#03009B] hover:scale-[1.04] text-[1.1rem] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                        Book Now
                    </button>
                </div>

                {/* Bottom Dots */}
                <DecorativeDots className="absolute bottom-4 left-4 md:bottom-8 md:left-8" />
                <DecorativeDots className="absolute bottom-4 right-4 md:bottom-8 md:right-8" />
            </div>
        </div>
    </section>
);

export default CallToActionSection;
