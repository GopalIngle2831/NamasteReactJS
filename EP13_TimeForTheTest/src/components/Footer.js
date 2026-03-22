const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Gopal Ingle. All Rights Reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
                    <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer">Terms</span>
                    <span className="hover:text-white cursor-pointer">Contact</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;