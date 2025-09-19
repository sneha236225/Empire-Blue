import { useState } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

const socialLinks = [
    {
        href: "https://wa.me/+918867268719",
        bg: "bg-green-500 hover:bg-green-600",
        icon: <MessageCircle size={24} />,
        external: true,
    },
    {
        href: "tel:+918867268719",
        bg: "bg-blue-600 hover:bg-blue-700",
        icon: <Phone size={24} />,
    },
    {
        href: "https://instagram.com/",
        bg: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
        ),
        external: true,
    },
    {
        href: "https://www.facebook.com/profile.php?id=61580030567585",
        bg: "bg-blue-500 hover:bg-blue-600",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
        ),
        external: true,
    },
];

const FloatingSocialMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    // Show ScrollTop button after scrolling 300px
    window.addEventListener("scroll", () => {
        setShowScrollTop(window.scrollY > 300);
    });

    return (
        <>
            {/* Floating Social Menu */}
            <div className="fixed bottom-24 right-6 z-50">
                <div
                    className={`flex flex-col-reverse gap-3 mb-3 transition-all duration-300 ${menuOpen ? "opacity-100 transform translate-y-0 pointer-events-auto" : "opacity-0 transform translate-y-10 pointer-events-none"
                        }`}
                >
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target={link.external ? "_blank" : "_self"}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className={`flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg transition-all hover:scale-110 ${link.bg}`}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                {/* Toggle Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-[#03009B] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none"
                >
                    {menuOpen ? (
                        // Cross icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>
                    ) : (
                        // Message icon with ping
                        <div className="relative">
                            <span className="absolute -top-1 -right-1 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <MessageCircle className="animate-pulse" size={24} />
                        </div>
                    )}
                </button>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-[#03009B] hover:bg-blue-800 text-white p-3 flex items-center justify-center w-14 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none z-40"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </>
    );
};

export default FloatingSocialMenu;
