"use client";

import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center py-20">
        <h1
          className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 animate-fadeIn"
        >
          Welcome to <span className="underline decoration-wavy">Attractive App 🚀</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover dynamic content, explore posts, and enjoy a sleek, modern design. Whether you're here to fetch posts,
          browse features, or admire a user-friendly interface, you're in the right place!
        </p>
        <Link href="/fetch-posts">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-8 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
            View Posts 📄
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          What We Offer <span className="text-yellow-500">🌟</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold mb-2 flex items-center">
              Dynamic Posts <span className="ml-2 text-pink-500 text-2xl">📑</span>
            </h3>
            <p className="text-gray-700">
              Fetch and display dynamic posts from our API with clean, responsive designs. Perfect for developers looking to
              integrate real-world API data.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold mb-2 flex items-center">
              Interactive Features <span className="ml-2 text-purple-500 text-2xl">🎨</span>
            </h3>
            <p className="text-gray-700">
              Enjoy smooth animations, seamless transitions, and an intuitive interface for the best user experience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold mb-2 flex items-center">
              Easy Navigation <span className="ml-2 text-yellow-500 text-2xl">🧭</span>
            </h3>
            <p className="text-gray-700">
              Quickly navigate to various sections, explore posts in detail, and interact with ease.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold mb-2 flex items-center">
              Built for Scalability <span className="ml-2 text-red-500 text-2xl">📈</span>
            </h3>
            <p className="text-gray-700">
              Designed with Next.js and Tailwind CSS, this app is optimized for speed, scalability, and performance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold mb-2 flex items-center">
              Beautiful Design <span className="ml-2 text-blue-500 text-2xl">💎</span>
            </h3>
            <p className="text-gray-700">
              From typography to colors, every element is crafted for aesthetics and functionality.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold mb-2 flex items-center">
              Open Source <span className="ml-2 text-green-500 text-2xl">🔓</span>
            </h3>
            <p className="text-gray-700">
              Explore the codebase, contribute to the project, or use it as a resource for your next app.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8">
        <p className="text-lg mb-4 font-semibold">
          © {new Date().getFullYear()} Attractive App. Built with ❤️ using:
        </p>
        <div className="flex justify-center space-x-6 text-3xl mb-4">
          <a
            href="mailto:muqaddasfatima576@gmail.com"
            className="hover:text-yellow-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/muqaddas-fatima-6aaa0a2b3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/muqaddas_fatima25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
            aria-label="Next.js"
          >
            <SiNextdotjs />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
            aria-label="Tailwind CSS"
          >
            <SiTailwindcss />
          </a>
        </div>
        <p className="text-sm">
          <span className="font-semibold">Email:</span> muqaddasfatima576@gmail.com |{" "}
          <span className="font-semibold">LinkedIn:</span> linkedin.com/in/muqaddas-fatima-6aaa0a2b3
        </p>
      </footer>
    </main>
  );
};

export default HomePage;
