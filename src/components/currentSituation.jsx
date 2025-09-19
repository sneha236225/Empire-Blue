import { motion } from "framer-motion";

const CurrentSituationSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="py-14 pb-14 relative z-10 -mt-2"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#E4E9ED] rounded-3xl shadow-xl p-6 sm:p-10 border-2 border-white relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 xl:gap-32 items-center">
                        {/* Current Situation */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 text-center lg:text-left relative z-20 mb-8 lg:mb-0"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-[#03009B] mb-4">Current Situation</h3>
                            <p className="text-gray-900 text-md sm:text-lg mb-3 leading-tight sm:leading-relaxed">
                                Approximately 2.2 billion people do not have access to safe drinking water and 3.5 billion people do not have access to clean drinking water. This problem is increasing due to the rapidly increasing population. Poor water management has further aggravated the crisis.
                            </p>
                            <p className="text-gray-900 text-md sm:text-lg leading-tight sm:leading-relaxed">
                                The top countries facing severe water crisis include Lebanon, Pakistan, Afghanistan, Syria, Yemen, and Ethiopia.
                            </p>
                        </motion.div>

                        {/* Health Impact */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 text-center lg:text-right relative z-20"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-[#03009B] mb-4">
                                Health Impact of<br />contaminated water
                            </h3>
                            <p className="text-gray-900 text-md sm:text-lg mb-3 leading-tight sm:leading-relaxed">
                                Every 33 seconds a person dies from heart disease worldwide and around 26,300 people die from cancer every day.
                            </p>
                            <p className="text-gray-900 text-md sm:text-lg leading-tight sm:leading-relaxed">
                                Contaminated water releases harmful bacteria and microplastics which lead to health problems like cancer and can also cause high blood pressure and heart problems.
                            </p>
                        </motion.div>
                    </div>

                    {/* Center animated water droplet */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-70 hidden lg:block">
                        <div className="relative w-[180px] h-[180px] xl:w-[240px] xl:h-[240px]">
                            <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
                            <div className="w-full h-full animate-float">
                                <img
                                    className="opacity-[0.7] mx-auto"
                                    src="images/water-droplet.png"
                                    alt="Water Droplet"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Water Droplet */}
                    <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-70">
                        <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
                            <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
                            <div className="w-full h-full animate-float">
                                <svg width="100%" height="100%" viewBox="0 0 80 80" className="opacity-80">
                                    <circle cx="40" cy="40" r="40" fill="url(#waterGradientMobile1)" opacity="0.3" />
                                    <circle cx="40" cy="40" r="26" fill="url(#waterGradientMobile2)" opacity="0.5" />
                                    <path d="M40 20 C33 27, 30 33, 30 40 C30 47, 33 53, 40 53 C47 53, 50 47, 50 40 C50 33, 47 27, 40 20 Z" fill="url(#waterGradientMobile3)" opacity="0.8" />
                                    <path d="M40 27 C36 30, 35 33, 35 37 C35 40, 36 43, 40 43 C44 43, 45 40, 45 37 C45 33, 44 30, 40 27 Z" fill="white" opacity="0.6" />
                                    <defs>
                                        <linearGradient id="waterGradientMobile1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                                        </linearGradient>
                                        <linearGradient id="waterGradientMobile2" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#93C5FD', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#60A5FA', stopOpacity: 1 }} />
                                        </linearGradient>
                                        <linearGradient id="waterGradientMobile3" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#DBEAFE', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#93C5FD', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default CurrentSituationSection;
