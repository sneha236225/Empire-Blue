import { useEffect, useRef, useState } from "react";

const StatsSection = ({ stats }) => {
    const [progress, setProgress] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);

                    const duration = 1600;
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const rawProgress = Math.min(elapsed / duration, 1);
                        const easedProgress = 1 - Math.pow(1 - rawProgress, 4);
                        setProgress(easedProgress);

                        if (rawProgress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setProgress(1);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    const AnimatedCounter = ({ end, progress, suffix = "", prefix = "" }) => {
        const currentValue = progress * end;
        const displayValue = Math.round(currentValue).toLocaleString();

        return (
            <span className="font-bold text-4xl sm:text-3xl md:text-4xl">
                {prefix}{displayValue}{suffix}
            </span>
        );
    };

    return (
        <section ref={sectionRef} className="lg:pt-12 pt-22 pb-12 bg-[#D7E0E7] relative overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#03009B] mb-4">
                        Our <span className="bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">Success</span> Story
                    </h2>
                    <p className="text-[1.2rem] text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Trusted by thousands of customers across India, delivering pure and healthy water solutions
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-3xl 
                                       p-8 sm:p-6 shadow-lg hover:shadow-2xl 
                                       transition-all duration-500 transform hover:-translate-y-3 
                                       border border-white/20 w-full max-w-md mx-auto"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                opacity: progress > 0 ? 1 : 0,
                                transform: progress > 0 ? "translateY(0)" : "translateY(20px)",
                                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                            }}
                        >
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-[#C440CE] flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                                    <stat.icon className="text-white" size={28} />
                                </div>
                                <div className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 min-h-[3rem] flex items-center justify-center">
                                    <AnimatedCounter
                                        end={stat.numericValue}
                                        progress={progress}
                                        suffix={stat.suffix || ""}
                                    />
                                </div>
                                <h3 className="text-base font-semibold text-gray-700 mb-3 leading-tight">{stat.label}</h3>
                                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-32 h-1 rounded bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-16 mb-4"></div>
        </section>
    );
};

export default StatsSection;
