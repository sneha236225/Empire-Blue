import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = ({ testimonials }) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    return (
        <section className="py-20 bg-[#F3F9FF] relative overflow-hidden">
            {/* Background circles */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-[#03009B] mb-4 leading-tight md:leading-snug text-center">
                        What Our{" "}
                        <br className="block md:hidden" />
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
                            Customers
                        </span>{" "}
                        Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our valued customers have to say about their experience with Newtro-X.
                    </p>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-[#E4E9ED] backdrop-blur-sm rounded-3xl p-12 shadow-lg relative">
                        {/* Carousel Buttons */}
                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 z-10"
                            onClick={() =>
                                setCurrentTestimonial(currentTestimonial > 0 ? currentTestimonial - 1 : testimonials.length - 1)
                            }
                        >
                            <ChevronLeft className="text-[#03009B]" size={24} />
                        </button>

                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 z-10"
                            onClick={() =>
                                setCurrentTestimonial(currentTestimonial < testimonials.length - 1 ? currentTestimonial + 1 : 0)
                            }
                        >
                            <ChevronRight className="text-[#03009B]" size={24} />
                        </button>

                        <div className="text-center">
                            {/* Stars */}
                            <div className="flex items-center justify-center mb-6">
                                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-[1.35rem] text-gray-700 mb-8 leading-relaxed italic max-w-3xl mx-auto">
                                "{testimonials[currentTestimonial].text}"
                            </p>

                            {/* Customer Info */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 bg-[#03009B] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                                    {testimonials[currentTestimonial].name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-1">{testimonials[currentTestimonial].name}</h4>
                                <p className="text-gray-600 text-base md:text-2xl mb-1">
                                    {testimonials[currentTestimonial].role}
                                </p>
                                <p className="text-m text-gray-500">{testimonials[currentTestimonial].location}</p>
                            </div>

                            {/* Dots */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? "bg-[#03009B]" : "bg-gray-300 hover:bg-gray-400"
                                            }`}
                                        onClick={() => setCurrentTestimonial(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-4 shadow-lg">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-[#03009B]">4.9/5</div>
                            <div className="text-sm text-gray-600">Average Rating</div>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-[#03009B]">98%</div>
                            <div className="text-sm text-gray-600">Satisfaction Rate</div>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-[#03009B]">10K+</div>
                            <div className="text-sm text-gray-600">Happy Customers</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
