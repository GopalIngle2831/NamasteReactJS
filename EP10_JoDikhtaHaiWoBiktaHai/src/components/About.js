const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    About Our Food App 🍽️
                </h1>
                <div className="w-24 h-1 bg-pink-500 mx-auto mb-8 rounded-full"></div>
                <p className="text-gray-600 text-lg leading-relaxed text-center mb-6">
                    This Restaurant Finder App helps users discover the best restaurants 
                    with ratings, pricing details, and location information.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">  
                    <div className="bg-gray-100 p-6 rounded-2xl text-center hover:shadow-md transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">🔍 Smart Search</h3>
                        <p className="text-gray-600 text-sm">
                            Quickly find restaurants using search functionality.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-2xl text-center hover:shadow-md transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">⭐ Top Ratings</h3>
                        <p className="text-gray-600 text-sm">
                            Filter restaurants based on ratings and popularity.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-2xl text-center hover:shadow-md transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">⚡ Fast & Responsive</h3>
                        <p className="text-gray-600 text-sm">
                            Built using React, Tailwind CSS, and Express.
                        </p>
                    </div>
                </div>
                <div className="mt-14 border-t pt-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        👨‍💻 Developer Information
                    </h2>
                    <p className="text-gray-600 text-lg">
                        <span className="font-semibold text-gray-800">Name:</span> Gopal Ingle
                    </p>
                    <p className="text-gray-600 text-lg">
                        Passionate about Web Development and building modern full-stack applications 🚀
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;