"use client";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-4 px-6 relative z-50 shadow-md">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          {/* GitHub */}
          <a
            href="https://github.com/MuqaddasFatima24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition duration-300"
            aria-label="GitHub"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24" 
              >
                <path d="M12 0a12 12 0 00-3.79 23.392c.6.111.82-.26.82-.577v-2.025c-3.338.725-4.042-1.609-4.042-1.609a3.181 3.181 0 00-1.333-1.757c-1.091-.744.083-.729.083-.729a2.518 2.518 0 011.834 1.232 2.558 2.558 0 003.498.998 2.563 2.563 0 01.764-1.612c-2.666-.307-5.467-1.33-5.467-5.916a4.63 4.63 0 011.232-3.212 4.296 4.296 0 01.117-3.17s1.005-.322 3.294 1.232a11.33 11.33 0 015.996 0c2.29-1.555 3.293-1.232 3.293-1.232a4.3 4.3 0 01.118 3.17 4.63 4.63 0 011.231 3.212c0 4.596-2.805 5.605-5.475 5.902a2.885 2.885 0 01.83 2.229v3.314c0 .319.217.694.828.577A12 12 0 0012 0z" />
              </svg>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muqaddas-fatima-6aaa0a2b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24" 
              >
                <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 19H4.56V9h2.56v10zm-1.28-11.38c-.93 0-1.69-.76-1.69-1.69 0-.93.76-1.69 1.69-1.69s1.69.76 1.69 1.69c0 .93-.76 1.69-1.69 1.69zM20 19h-2.56v-4.66c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46V19h-2.56V9h2.46v1.37h.04c.34-.65 1.15-1.33 2.37-1.33 2.54 0 3.01 1.67 3.01 3.84V19z" />
              </svg>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:muqaddasfatima576@gmail.com"
            className="text-gray-600 hover:text-blue-500 transition duration-300"
            aria-label="Email"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24" 
              >
                <path d="M12 12.713L0 5.25V3l12 7.8L24 3v2.25l-12 7.463zM24 6.75v12c0 1.378-1.122 2.5-2.5 2.5h-19C1.122 21.25 0 20.128 0 18.75v-12l12 7.464L24 6.75z" />
              </svg>
            </div>
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Muqaddas Fatima. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
