import { motion } from "framer-motion";

const EmpireBlueTechnology = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="pt-18 pb-10 relative z-10 -mt-2"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#E4E9ED] rounded-3xl shadow-xl p-6 sm:p-10 border-2 border-white relative">
                    <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 items-start">
                        {/* Water Technology Illustration */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="md:col-span-2 w-full relative z-20 flex items-center justify-center"
                        >
                            <div className="w-full max-w-md">
                                <img
                                    src="images/detail.webp"
                                    alt="Empire Blue Water Can"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="md:col-span-3 w-full relative z-20 mb-16 md:mb-0"
                        >
                            <h3 className="text-[1.6rem] sm:text-2xl md:text-4xl font-bold text-[#03009B] mb-2 sm:mb-3">
                                Empire Blue Pvt. Ltd.
                            </h3>
                            <p className="text-gray-900 text-[0.98rem] sm:text-[1rem] md:text-[1.196rem] leading-snug sm:leading-relaxed">
                                Our revolutionary water technology is a groundbreaking invention that eliminates the expiration date on bottled water. By using a unique combination of innovative ingredients, we prevent reactions in bottled water—especially when exposed to sunlight—that produce microplastics and harmful bacteria. This addresses major health risks associated with bottled water, including diseases like cancer and heart disease. Our innovation not only maintains water purity and freshness for life, but also provides health benefits such as cancer prevention, heart attack protection, and boosted immunity. With a global reach, we aim to transform the water industry and provide safe drinking water to the billions of people who currently lack access.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default EmpireBlueTechnology;
