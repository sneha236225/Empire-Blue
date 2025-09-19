import { Phone } from "lucide-react";

const FooterMain = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Logo & Description */}
        <div className="space-y-6">
            <div>
                <img src="images/logo1.webp" alt="Empire Blue" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-600 text-[0.9rem] leading-relaxed">
                Providing clean and safe water solutions for a healthier tomorrow. Our commitment to quality and innovation makes us the trusted choice in water treatment.
            </p>
            <div className="flex items-center gap-4">
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61580030567585" className="text-gray-400 hover:text-blue-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                </a>
                {/* Twitter */}
                <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/empire-blue/?viewAsMember=true" className="text-gray-400 hover:text-blue-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
            </div>
        </div>

        {/* Quick Links */}
        <div>
            <h3 className="text-gray-900 font-semibold mb-6 text-xl">Quick Links</h3>
            <ul className="space-y-4">
                <li><a href="/about" className="text-gray-600 hover:text-blue-700 transition-colors">About Us</a></li>
                <li><a href="/services" className="text-gray-600 hover:text-blue-700 transition-colors">Our Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">Latest News</a></li>
            </ul>
        </div>

        {/* Our Services */}
        <div>
            <h3 className="text-gray-900 font-semibold mb-6 text-xl">Our Services</h3>
            <ul className="space-y-4">
                <li><a href="/services/water-testing" className="text-gray-600 hover:text-blue-700 transition-colors">Water Testing</a></li>
                <li><a href="/services/purification" className="text-gray-600 hover:text-blue-700 transition-colors">Water Purification</a></li>
                <li><a href="/services/treatment" className="text-gray-600 hover:text-blue-700 transition-colors">Water Treatment</a></li>
                <li><a href="/services/consultation" className="text-gray-600 hover:text-blue-700 transition-colors">Expert Consultation</a></li>
            </ul>
        </div>

        {/* Contact */}
        <div>
            <h3 className="text-gray-900 font-semibold mb-6 text-xl">Contact Us</h3>
            <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-gray-600">
                        Empire Blue Pvt. Ltd.<br />
                        Chhindwara, Madhya Pradesh<br />
                        India
                    </span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-700" />
                    <a href="tel:+918867268719" className="text-gray-600 hover:text-blue-700 transition-colors">+91 8867268719</a>
                </li>
                <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a href="mailto:info@empireblue.in" className="text-gray-600 hover:text-blue-700 transition-colors">info@empireblue.in</a>
                </li>
            </ul>
        </div>
    </div>
);

export default FooterMain;
