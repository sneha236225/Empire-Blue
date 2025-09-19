import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section id="home" className="pt-14 lg:pt-20 min-h-screen bg-[#D7E0E7] relative overflow-hidden">
            <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: -14, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
            >
                <div
                    className="bg-[#E4E9ED] backdrop-blur-sm rounded-3xl p-6 lg:p-12"
                    style={{ boxShadow: "0px 20px 40px rgba(0, 88, 184, 0.25)" }}
                >
                    <div className="grid lg:grid-cols-2 items-center">
                        {/* Product Image */}
                        <div className="flex justify-center order-1 lg:order-1">
                            <div className="relative">
                                <img
                                    src="images/can1.webp"
                                    alt="NEWTRO-X Water Bottles"
                                    className="w-auto lg:h-85 h-50 lg:m-0 mt-8 mb-8 object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-1 order-2 lg:order-2">
                            {/* Product Logo */}
                            <div className="flex justify-center lg:justify-start mb-3 lg:mb-6">
                                <img
                                    src="images/image.webp"
                                    alt="NEWTRO-X Logo"
                                    className="h-15 lg:h-21 w-auto object-contain"
                                />
                            </div>

                            <h1 className="text-3xl sm:text-4xl mb-3 lg:text-5xl font-bold text-gray-800 leading-tight text-center lg:text-left">
                                <span className="text-gray-800">World's</span>{" "}
                                <span className="text-[#03009B]">First Non-Expiry</span>{" "}
                                <span className="text-gray-800">Water</span>
                            </h1>

                            <p className="text-[0.93rem] sm:text-lg text-gray-900 mb-5 lg:mb-12 leading-relaxed text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                                Empire Blue Pvt. Ltd. We prioritize health, innovation, and sustainability. We are
                                committed to setting new industry standards and providing a safe, reliable, and
                                beneficial hydration solution for people worldwide.
                            </p>

                            <div className="flex flex-col items-center lg:items-start">
                                <button className="bg-[#03009B] hover:bg-blue-600 mb-4 lg:ml-40 text-white text-[0.9rem] lg:text-xl px-4 py-2 lg:px-6 lg:py-3 rounded-full font-medium transition-colors flex items-center space-x-2 group shadow-lg">
                                    <span>Contact Us</span>
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* SVG Wave */}
            <div className="absolute top-[90%] lg:top-[80%] lg:left-0 w-full">
                <svg
                    className="w-full h-[120px] sm:h-[200px] lg:h-[220px]"
                    viewBox="0 0 1440 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0"
                        stroke="#fff"
                        strokeWidth="16"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0  L1440,500 L0,500 Z"
                        fill="#D7E0E7"
                        filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
