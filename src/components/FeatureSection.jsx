import { motion } from "framer-motion";

const FeaturesSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="pb-20 bg-[#D7E0E7]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Revolutionary Technology */}
                    <div className="bg-[#E4E9ED] backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#F0FDF4] rounded-2xl mb-4">
                            <img src="images/excellence.svg" alt="" />
                        </div>
                        <h3 className="text-xl font-medium text-[#03009B] mb-4">Revolutionary Technology</h3>
                        <p className="text-gray-900 leading-relaxed">
                            Groundbreaking invention that eliminates the expiration date on bottled water
                        </p>
                    </div>

                    {/* Safe & Pure */}
                    <div className="bg-[#E4E9ED] backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#F0FDF4] rounded-2xl mb-4">
                            <img src="images/pure.svg" alt="" />
                        </div>
                        <h3 className="text-xl font-medium text-[#03009B] mb-4">Safe & Pure</h3>
                        <p className="text-gray-900 leading-relaxed">
                            Ensuring lifelong freshness and health through advanced purification
                        </p>
                    </div>

                    {/* Sustainable Solution */}
                    <div className="bg-[#E4E9ED] backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#F0FDF4] rounded-2xl mb-4">
                            <img src="images/eco.svg" alt="" />
                        </div>
                        <h3 className="text-xl font-medium text-[#03009B] mb-4">Sustainable Solution</h3>
                        <p className="text-gray-900 leading-relaxed">
                            Eco-friendly approach to water preservation and distribution
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default FeaturesSection;
