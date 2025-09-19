const FooterBottom = () => (
    <div className="border-t border-gray-200 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2025 Empire Blue. All rights reserved.</p>
            <div className="flex items-center gap-6">
                <a href="/privacy-policy" className="text-gray-600 hover:text-blue-700 transition-colors text-sm">Privacy Policy</a>
                <a href="/terms" className="text-gray-600 hover:text-blue-700 transition-colors text-sm">Terms of Service</a>
            </div>
        </div>
    </div>
);

export default FooterBottom;
