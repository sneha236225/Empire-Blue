import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about" className="pt-20 lg:pt-40 pb-12 bg-[#D7E0E7] sm:pl-4 sm:pr-4">
            <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-6 w-full order-1 lg:ml-20"
                    >
                        <h2 className="text-6xl sm:text-6xl lg:text-6xl font-bold text-left">
                            <span className="text-[#03009B] pl-5">About</span>{" "}
                            <span className="text-cyan-500 pr-5">Us</span>
                        </h2>

                        <div className="space-y-4 text-left">
                            <p className="text-[1.15rem] pl-5 pr-5 sm:text-[1.2rem] text-gray-900 leading-relaxed">
                                Empire Blue Pvt. Ltd. Established July 2025, based in Chhindwara, Madhya Pradesh, is a pioneering company in the bottled water industry recognized as the world's first manufacturer of non-expiry, bacteria-free water bottles.
                            </p>

                            <p className="text-[1.15rem] pl-5 pr-5 sm:text-[1.2rem] text-gray-900 leading-relaxed">
                                Our mission is to revolutionize the way people consume water by ensuring purity, longevity, and health benefits in every drop.
                            </p>
                        </div>

                        <div className="flex pl-5 pr-5 flex-col items-start">
                            <button className="bg-[#03009B] text-white text-lg sm:text-xl px-6 py-2 sm:py-3 rounded-full font-medium transition-colors flex items-center space-x-2 group shadow-lg">
                                <span>Learn More</span>
                                <ArrowRight
                                    size={20}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </button>
                        </div>
                    </motion.div>

                    {/* Building Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex justify-center w-full lg:justify-end order-2 mt-6 lg:mt-0"
                    >
                        <div className="relative border-8 border-white rounded-4xl w-full lg:w-[480px] h-[620px] sm:h-[350px] md:h-[400px] lg:h-[440px]">
                            <img
                                src="images/about.webp"
                                alt="Empire Blue Building"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
