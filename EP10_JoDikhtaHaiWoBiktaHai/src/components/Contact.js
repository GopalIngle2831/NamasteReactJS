const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-4xl bg-gray-100 rounded-3xl shadow-lg p-10">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Contact Us 📞
                </h1>
                <div className="w-20 h-1 bg-pink-500 mx-auto mb-8 rounded-full"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">        
                    <div className="space-y-4 text-gray-700">
                        <p className="text-lg">
                            <span className="font-semibold">👨‍💻 Developer:</span> Gopal Ingle
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">📞 Mobile:</span> 7666140152
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">📧 Email:</span> gopalingle31102002@gmail.com
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold">🏠 Address :</span> Buldhana, Maharashtra
                        </p>
                    </div>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white font-semibold py-2 rounded-xl hover:bg-pink-600 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;