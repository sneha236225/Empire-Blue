import React from "react";
import { motion } from "framer-motion";

const MilestonesSection = ({ milestones }) => {
    return (
        <section className="lg:pt-30 pt-25 pb-20 bg-[#D7E0E7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center mb-4"
                >
                    <div className="lg:text-6xl mb-8 lg:mb-0 lg:mr-4 text-5xl">🏆</div>
                    <h2 className="text-[2rem] mb-8 lg:mb-0 ml-4 md:text-5xl font-bold">
                        <span className="text-[#03009B]">Our </span>
                        <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
                            Milestone
                        </span>
                    </h2>
                </motion.div>

                {/* ---- Desktop View ---- */}
                <div className="hidden md:block">
                    {/* First Row - 2 Milestones (aligned right side) */}
                    <div className="flex flex-col md:flex-row justify-end mb-12">
                        {milestones.slice(0, 2).map((milestone, index) => (
                            <div key={index} className="pt-6 pb-6 max-w-md">
                                <h3 className="text-xl font-bold mb-2">
                                    <span className="text-[#03009B]">{milestone.title.split(" ")[0]}</span>
                                    <span className="text-gray-800">
                                        {" "}
                                        {milestone.title.split(" ").slice(1).join(" ")}
                                    </span>
                                </h3>
                                <p className="text-gray-900 text-[1.05rem] leading-relaxed">
                                    {milestone.description}
                                </p>
                                <p className="text-gray-900 text-[1.05rem] leading-relaxed">
                                    {milestone.description2}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Years Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="hidden md:flex justify-center items-center mb-14"
                    >
                        {milestones.map((milestone, index) => (
                            <React.Fragment key={index}>
                                <div className="relative">
                                    <div className="w-28 h-28 lg:w-44 lg:h-44 flex items-center justify-center p-2">
                                        <img
                                            src={milestone.year}
                                            alt={`Year ${milestone.year.match(/\d{4}/)?.[0]}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                                {index < milestones.length - 1 && (
                                    <div className="mx-4 w-10">
                                        <img src="images/arrow.webp" alt="arrow" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </motion.div>

                    {/* Last Row - 3 Milestones */}
                    <div className="grid md:grid-cols-3 gap-2">
                        {milestones.slice(2, 5).map((milestone, index) => (
                            <div key={index} className="p-2">
                                <h3 className="text-xl font-bold mb-2">
                                    <span className="text-[#03009B]">{milestone.title.split(" ")[0]}</span>
                                    <span className="text-gray-800">
                                        {" "}
                                        {milestone.title.split(" ").slice(1).join(" ")}
                                    </span>
                                </h3>
                                <p className="text-gray-900 text-[1.05rem] leading-relaxed">
                                    {milestone.description}
                                </p>
                                <p className="text-gray-900 text-[1.05rem] leading-relaxed">
                                    {milestone.description2}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---- Mobile View ---- */}
                <div className="md:hidden flex flex-col space-y-10 mt-8">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex items-start gap-5">
                                {/* Year (Left) */}
                                <div className="flex-shrink-0 bg-white rounded-xl border-2 border-blue-950 w-16 h-16 flex items-center justify-center">
                                    <img
                                        src={milestone.year}
                                        alt={`Year ${milestone.year.match(/\d{4}/)?.[0]}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Content (Right) */}
                                <div className="flex-1">
                                    <h3 className="text-base text-[1.2rem] font-bold mb-4">
                                        <span className="text-[#03009B]">
                                            {milestone.title.split(" ")[0]}
                                        </span>{" "}
                                        <span className="text-gray-800">
                                            {milestone.title.split(" ").slice(1).join(" ")}
                                        </span>
                                    </h3>
                                    <p className="text-gray-800 text-[0.91rem] mb-1 leading-relaxed">
                                        {milestone.description}
                                    </p>
                                    <p className="text-gray-800 mb-8 text-[0.91rem] leading-relaxed">
                                        {milestone.description2}
                                    </p>
                                </div>
                            </div>

                            {/* Separator Line */}
                            {index < milestones.length - 1 && (
                                <div className="border-b border-gray-200 mt-4" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MilestonesSection;
