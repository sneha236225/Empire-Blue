import { motion } from "framer-motion";

const TeamSection = ({ teamMembers }) => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center text-4xl md:text-6xl font-bold text-[#03009B] mb-20"
                >
                    Meet Our{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
                        Expert
                    </span>{" "}
                    Team
                </motion.h2>

                {/* Founder Section */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-20">
                    {/* Founder Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full md:w-1/3 flex justify-center"
                    >
                        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                            <div className="bg-white rounded-3xl px-2 shadow-xl relative">
                                <div className="aspect-[3/4] overflow-hidden rounded-2xl flex items-center justify-center">
                                    <img
                                        src={teamMembers[0].image}
                                        alt={teamMembers[0].name}
                                        className="w-full h-full object-cover rounded-3xl"
                                    />
                                </div>
                                <div className="absolute -bottom-10 left-0 right-0 mx-8 bg-white rounded-xl p-4 shadow-lg">
                                    <p className="text-center font-bold text-xl text-[#03009B]">
                                        {teamMembers[0].name.split(" ").map((part, index) => (
                                            <span
                                                key={index}
                                                className={`${index <= 1 ? "inline" : "block sm:inline"}`}
                                            >
                                                {part}{" "}
                                            </span>
                                        ))}
                                    </p>
                                    <p className="text-center text-gray-500 text-sm">
                                        {teamMembers[0].role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Founder Bio + Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
                    >
                        <div className="max-w-lg">
                            <h3 className="text-3xl font-semibold text-[#03009B] mb-6">
                                About the Founder
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-xl mb-8">
                                {teamMembers[0].bio}
                            </p>
                            <div className="flex gap-4">
                                {/* LinkedIn */}
                                <a
                                    href="#"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>

                                {/* Twitter */}
                                <a
                                    href="#"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Leadership Team */}
                <div className="mt-20 pt-16 border-t border-gray-200">
                    <h3 className="text-3xl font-semibold text-[#03009B] mb-12 text-center">
                        Leadership Team
                    </h3>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center"
                    >
                        {teamMembers.slice(1).map((member, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center w-full max-w-[200px]"
                            >
                                <div className="bg-white rounded-3xl p-2 shadow-xl relative w-full">
                                    <div className="aspect-[3/4] overflow-hidden rounded-2xl flex items-center justify-center">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="object-cover rounded-2xl"
                                        />
                                    </div>
                                    <div className="absolute -bottom-6 left-0 right-0 mx-3 bg-white rounded-xl p-2 shadow-lg">
                                        <p className="text-center font-bold text-xs text-[#03009B]">
                                            {member.name}
                                        </p>
                                        <p className="text-center text-gray-500 text-xs">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
