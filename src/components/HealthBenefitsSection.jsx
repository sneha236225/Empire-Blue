import { motion } from "framer-motion";
import React from "react";

const healthItems = [
    {
        title: "Anthoxanthin",
        subtitle: "Healthy Bone",
        description:
            "Antioxidant properties beneficial for cancer treatment and heart health. Improves blood flow and reduces oxidative stress.",
        image: "/images/capsule.webp",
        orbitClass: "animate-orbit-1",
        positionClass: "top-12 left-2",
        textPositionClass: "-left-64 top-12 w-72",
    },
    {
        title: "Chlorophyll",
        subtitle: "Healthy Lungs",
        description:
            "Strengthens the immune system and helps block cancer-causing chemicals. Aids in weight loss and lowers cholesterol levels.",
        image: "/images/leaf.webp",
        orbitClass: "animate-orbit-2",
        positionClass: "top-12 right-2",
        textPositionClass: "left-142 top-12 w-72",
    },
    {
        title: "Lycopene",
        subtitle: "Healthy Heart",
        description:
            "Powerful antioxidant that reduces oxidative damage and inflammation. Protects against various cancers and supports heart health.",
        image: "/images/heart.webp",
        orbitClass: "animate-orbit-3",
        positionClass: "bottom-[18rem] -right-2",
        textPositionClass: "left-142 bottom-[16rem] w-72",
    },
    {
        title: "Carotenoids",
        subtitle: "Immunity booster",
        description:
            "Essential for vitamin A production supporting immune health. Reduces inflammation and promotes eye health while aiding hair growth.",
        image: "/images/vitamin.webp",
        orbitClass: "animate-orbit-4",
        positionClass: "bottom-[18rem] -left-2",
        textPositionClass: "-left-64 bottom-[16rem] w-72",
    },
    {
        title: "Anthocyanin",
        subtitle: "Healthy Brains",
        description:
            "Lowers blood pressure and reduces the risk of heart disease. Protects brain function and may slow cancer growth.",
        image: "/images/brain.webp",
        orbitClass: "animate-orbit-5",
        positionClass: "bottom-40 left-1/2 transform -translate-x-1/2",
        textPositionClass: "left-38 bottom-10 w-72",
    },
];

const HealthBenefitsSection = () => {
    return (
        <section className="py-12 lg:py-25 bg-[#D7E0E7] relative">
            {/* Top Curve */}
            <div className="absolute -top-8 left-0 right-0 w-full z-20">
                <svg
                    className="w-full h-[140px] sm:h-[280px] transform scale-y-[-1] mt-12 sm:mt-0"
                    viewBox="0 0 1440 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C320,320 1120,320 1440,0"
                        stroke="#fff"
                        strokeWidth="16"
                        fill="none"
                    />
                    <path
                        d="M0,0 C320,320 1120,320 1440,0 L1440,480 L0,480 Z"
                        fill="#D7E0E7"
                        filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"
                    />
                </svg>
            </div>

            <div className="max-w-[84rem] mx-auto px-6 sm:px-6 lg:px-8">
                <div className="bg-[#E4E9ED] backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
                    {/* Heading */}
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="text-3xl mt-10 md:text-5xl font-bold text-[#03009B] mb-4"
                        >
                            Health{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
                                Benefits
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="lg:text-2xl text-[1.2rem] text-gray-900 font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            Discover the key nutrients and their powerful effects on your
                            health
                        </motion.p>
                    </div>

                    {/* Orbit System Large Screen */}
                    <div className="hidden lg:flex justify-center items-center">
                        <div className="relative w-[550px] min-h-[650px] lg:min-h-[750px]">
                            {/* Background Ring */}
                            <svg className="w-full h-full" viewBox="0 0 550 550">
                                <defs>
                                    <linearGradient
                                        id="ringGradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#f8fafc" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#e2e8f0" stopOpacity="1" />
                                    </linearGradient>
                                    <filter
                                        id="ringShadow"
                                        x="-20%"
                                        y="-10%"
                                        width="160%"
                                        height="180%"
                                    >
                                        <feDropShadow
                                            dx="-3"
                                            dy="-3"
                                            stdDeviation="3"
                                            floodColor="rgba(0,0,0,0.0)"
                                        />
                                        <feDropShadow
                                            dx="24"
                                            dy="32"
                                            stdDeviation="24"
                                            floodColor="rgba(0,0,0,0.14)"
                                        />
                                    </filter>
                                </defs>
                                <path
                                    d="M275 50 A225 225 0 0 1 500 275 A225 225 0 0 1 275 500 
                       A225 225 0 0 1 50 275 A225 225 0 0 1 275 50 Z 
                       M275 120 A155 155 0 0 0 120 275 
                       A155 155 0 0 0 275 430 
                       A155 155 0 0 0 430 275 
                       A155 155 0 0 0 275 120 Z"
                                    fill="url(#ringGradient)"
                                    stroke="#d1d5db"
                                    strokeWidth="1"
                                    filter="url(#ringShadow)"
                                />
                            </svg>

                            {/* Center Circle */}
                            <div className="absolute top-[17rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                              w-48 h-48 bg-white rounded-full shadow-[inset_4px_4px_12px_rgba(0,0,0,0.15),
                              inset_-4px_-4px_12px_rgba(255,255,255,0.9),8px_8px_24px_rgba(0,0,0,0.2),
                              -8px_-4px_24px_rgba(255,255,255,0.8)] flex items-center justify-center">
                                <div className="w-32 h-32">
                                    <img src="/images/lungs.webp" alt="Lungs" />
                                </div>
                            </div>

                            {/* Orbit Items */}
                            {healthItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div
                                        className={`absolute ${item.positionClass} w-20 h-20 rounded-full 
                               flex items-center justify-center ${item.orbitClass}`}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Large screen text */}
                                    <div
                                        className={`hidden lg:flex absolute ${item.textPositionClass} flex-col`}
                                    >
                                        <h1 className="text-2xl mb-2 text-[#03009B] font-medium">
                                            {item.title}
                                        </h1>
                                        <h3 className="text-[1rem] mb-1 text-blue-700 font-bold">
                                            {item.subtitle}
                                        </h3>
                                        <p className="text-[0.95rem] text-gray-900">
                                            {item.description}
                                        </p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Orbit System Mobile */}
                    <div className="lg:hidden relative w-72 h-72 mx-auto my-10">
                        {/* Background Ring (same as desktop but smaller, with shadow) */}
                        <svg className="w-full h-full" viewBox="0 0 550 550">
                            <defs>
                                <linearGradient id="ringGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#f8fafc" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#e2e8f0" stopOpacity="1" />
                                </linearGradient>
                                <filter id="ringShadowMobile" x="-20%" y="-10%" width="160%" height="180%">
                                    <feDropShadow dx="-3" dy="-3" stdDeviation="3" floodColor="rgba(0,0,0,0.0)" />
                                    <feDropShadow dx="12" dy="16" stdDeviation="18" floodColor="rgba(0,0,0,0.15)" />
                                </filter>
                            </defs>
                            <path
                                d="M275 50 A225 225 0 0 1 500 275 A225 225 0 0 1 275 500 
           A225 225 0 0 1 50 275 A225 225 0 0 1 275 50 Z 
           M275 120 A155 155 0 0 0 120 275 
           A155 155 0 0 0 275 430 
           A155 155 0 0 0 430 275 
           A155 155 0 0 0 275 120 Z"
                                fill="url(#ringGradientMobile)"
                                stroke="#d1d5db"
                                strokeWidth="1"
                                filter="url(#ringShadowMobile)"
                            />
                        </svg>

                        {/* Center Circle */}
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    w-28 h-28 bg-white rounded-full 
    shadow-[inset_4px_4px_12px_rgba(0,0,0,0.15),
    inset_-4px_-4px_12px_rgba(255,255,255,0.9),
    8px_8px_24px_rgba(0,0,0,0.2),
    -8px_-4px_24px_rgba(255,255,255,0.8)]
    flex items-center justify-center"
                        >
                            <img src="/images/lungs.webp" alt="Lungs" className="w-16 h-16" />
                        </div>

                        {/* Orbit Items fixed*/}
                        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-15 h-15">
                            <img src="/images/capsule.webp" alt="Anthoxanthin" className="w-full h-full object-contain" />
                        </div>
                        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-15 h-15">
                            <img src="/images/vitamin.webp" alt="Carotenoids" className="w-full h-full object-contain" />
                        </div>
                        <div className="absolute -right-7 top-1/2 transform -translate-y-1/2 w-15 h-15">
                            <img src="/images/leaf.webp" alt="Chlorophyll" className="w-full h-full object-contain" />
                        </div>
                        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 w-15 h-15">
                            <img src="/images/heart.webp" alt="Lycopene" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* Mobile stacked content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="lg:hidden flex mt-24 flex-col pl-5 pr-6 items-center space-y-10"
                    >
                        {healthItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-2 ${index === healthItems.length - 1 ? "mb-14" : ""
                                    }`}
                            >
                                <h1 className="text-[1.05rem] font-bold text-[#03009B]">
                                    {item.title}
                                </h1>
                                <h3 className="text-[0.9rem] font-medium text-blue-700">
                                    {item.subtitle}
                                </h3>
                                <p className="text-gray-900 text-[0.8rem] max-w-xs mx-auto">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HealthBenefitsSection;
