import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Star, Users, Truck, Package, TrendingUp, Award, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import StatsSection from './StatsSection'
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './About';
import CurrentSituationSection from './currentSituation';
import EmpireBlueTechnology from './EmpireBlueTechnology';
import FeaturesSection from './FeatureSection';
import WaterTechnologyInnovationSection from './WaterTechnologyInnovationSection';
import CallToActionSection from './CallToActionSection';
import FooterMain from './FooterMain';
import FooterBottom from './FooterBottom';
import MilestonesSection from './MileStonesSection';
import CompetitiveAdvantageSection from './CompetitiveAdvantageSection';
import HealthBenefitsSection from './HealthBenefitsSection';
import TeamSection from './TeamSection';
import TestimonialsSection from './TestimonialsSection';
import FloatingSocialMenu from './FloatingSocialMenu';


const EmpireBlueHomepage = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Health Coach",
            location: "Mumbai",
            rating: 5,
            text: "Newtro-X water has completely transformed my daily routine. The non-expiry feature is a game-changer, and I can taste the difference in purity. My clients love it too!"
        },
        {
            name: "Dr. Rajesh Kumar",
            role: "Physician",
            location: "Delhi",
            rating: 5,
            text: "As a restaurant owner, I need reliable water suppliers. Newtro-X has been exceptional - consistent quality, great pricing, and excellent customer service. Highly recommended!"
        },
        {
            name: "Dr. Meera Patel",
            role: "Pediatrician",
            location: "Bangalore",
            rating: 5,
            text: "I recommend Newtro-X to all my patients' families. The bacteria-free technology gives me peace of mind, and the health benefits are remarkable. A must-have for every household."
        },
        {
            name: "Amit Singh",
            role: "Fitness Trainer",
            location: "Pune",
            rating: 5,
            text: "Since switching to Newtro-X, my energy levels have improved significantly. The mineral content is perfect for post-workout hydration. My gym members love it!"
        },
        {
            name: "Kavita Reddy",
            role: "Yoga Instructor",
            location: "Hyderabad",
            rating: 5,
            text: "Pure water is essential for my yoga practice. Newtro-X delivers exactly what it promises - pure, healthy water that supports my wellness journey. Absolutely love it!"
        }
    ];

    const stats = [
        {
            icon: Users,
            numericValue: 50000,
            suffix: "+",
            value: "50K+",
            label: "Happy Customers"
        },
        {
            icon: Truck,
            numericValue: 100000,
            suffix: "+",
            value: "100K+",
            label: "Orders Delivered"
        },
        {
            icon: Package,
            numericValue: 15,
            suffix: "+",
            value: "15+",
            label: "Products Launched"
        },
        {
            icon: TrendingUp,
            numericValue: 98,
            suffix: "%",
            value: "98%",
            label: "Satisfaction Rate"
        },
        {
            icon: Award,
            numericValue: 25,
            suffix: "+",
            value: "25+",
            label: "Industry Awards"
        }
    ];

    const advantages = [
        {
            icon: "images/earth.webp",
            title: "World's first non-expiry water",
            description: "Our revolutionary water that never expires, ensuring unmatched quality and freshness for decades, making it a unique choice in the modern world today."
        },
        {
            icon: "images/heart.webp",
            title: "Health benefits",
            description: "Unique water formulation helps prevent major health risks such as cancer and heart attacks while boosting the immune system for long-term vitality and daily wellness."
        },
        {
            icon: "images/star1.webp",
            title: "Premium mineral enrichment",
            description: "Infused with essential minerals Newtro-X provides superior nourishment compared to regular bottled water, promoting overall health and energy all day long every day."
        },
        {
            icon: "images/right1.webp",
            title: "Bacteria free",
            description: "Ensure that never release microplastic or harmful bacteria, keeping the water clean and perfectly safe for everyone, anywhere, with consistent purity at every single sip."
        },
        {
            icon: "images/setting1.webp",
            title: "Technology",
            description: "Utilization of cutting edge - ultra purification and preservation methods to maintain water qualities, offering unmatched performance and innovation in safe hydration."
        },
        {
            icon: "images/beaker1.webp",
            title: "Preservation",
            description: "With no expiry date consumers can store the product indefinitely without the risk of contamination or quality degradation reducing frequent repurchasing cost."
        }
    ];

    const milestones = [
        {
            year: "images/2026.webp",
            title: "Black Plum Premium Segment",
            description: "Launch of Colin, Dish Wash, Toilet Cleaner, and Floor Cleaner."
        },
        {
            year: "images/2027.webp",
            title: "Black Plum Premium Segment",
            description: "Launch of our premium brand with enhanced minerals and benefits.",
            description2: "Premium glass bottle packaging, professional branding."
        },
        {
            year: "images/2028.webp",
            title: "Newtro-X Project Kickoff",
            description: "Launch of Newtro-X, our base segment brand.",
            description2: "Introducing the world's first non-expiry water bottle."
        },
        {
            year: "images/2029.webp",
            title: "Our Vehicle Care Segment Launch",
            description: "Introduction of DM Water (battery), Coolant, and DEF Water."
        },
        {
            year: "images/2030.webp",
            title: "Java-X Major Achievement",
            description: "Launch of our highest premium segment brand with top enhancements.",
            description2: "Super premium glass bottle, elite branding."
        }
    ];

    const teamMembers = [
        {
            name: "Dr. Gagan Mahalwanshi",
            role: "Founder & CEO",
            image: "/images/gagan.webp",
            bio: "With over 15 years of experience in the water industry, Dr. Gagan Mahalwanshi has pioneered revolutionary water purification technologies. His vision for Newtro-X is to create water solutions that are both sustainable and beneficial for health."
        },
        {
            name: "Sandhya Mahalwanshi",
            role: "Managing Director",
            image: "/images/sandhya.webp"
        },
        {
            name: "U. S. Khobariya",
            role: "Sub-Director",
            image: "/images/1.webp"
        },
        {
            name: "Mukesh Dixit",
            role: "CFO",
            image: "/images/2.webp"
        }
    ];


    return (
        <div className="min-h-screen bg-[#D7E0E7]">
            {/* CSS Animations */}
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <CurrentSituationSection />
            <EmpireBlueTechnology />
            <FeaturesSection />
            <HealthBenefitsSection />
            <CompetitiveAdvantageSection advantages={advantages} />
            <WaterTechnologyInnovationSection />
            <MilestonesSection milestones={milestones} />
            <StatsSection stats={stats} />
            <TeamSection teamMembers={teamMembers} />
            <TestimonialsSection testimonials={testimonials} />
            <CallToActionSection />
            <footer className="bg-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FooterMain />
                    <FooterBottom />
                </div>
            </footer>
            <FloatingSocialMenu />
        </div>
    );
};

export default EmpireBlueHomepage