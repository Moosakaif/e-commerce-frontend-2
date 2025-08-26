'use client';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  const socials = [
    { href: '#', label: 'Facebook', icon: <FaFacebookF /> },
    { href: '#', label: 'Twitter', icon: <FaTwitter /> },
    { href: '#', label: 'Google Plus', icon: <FaGooglePlusG /> },
    { href: '#', label: 'LinkedIn', icon: <FaLinkedinIn /> },
  ];

  const pages = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <footer className="bg-gray-900 text-white font-sans py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 mb-12">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-medium">Sign Up For Our Newsletter</h3>
            <p className="mt-2 text-gray-600">Subscribe to our newsletter to receive news and updates</p>
          </div>

          <form className="flex w-full max-w-md">
            <input
              type="email"
              name="EMAIL"
              required
              placeholder="Enter Your Email..."
              className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 bg-yellow-500 text-white font-medium rounded-r-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-200 pt-12">
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <a href="/">
              <img
                src="/images/DriveCheckr_Logo.png"
                alt="DriveCheckr"
                width={180}
                height={60}
              />
            </a>
            <p className="text-gray-600">
              DriveCheckr is a trusted vehicle inspection company providing reliable reports to help
              you make informed automotive decisions. We ensure transparency, safety, and peace of
              mind in every vehicle check.
            </p>
            <div className="flex space-x-6 text-xl">
              {socials.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="shake-hover hover:text-red-950 transition duration-200 ease-in-out"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Page Links */}
          <div className="mt-8 md:mt-0 text-gray-400 text-center md:text-left">
            <p className="font-semibold mb-2">Quick Links</p>
            <ul className="space-y-1">
              {pages.map((page, idx) => (
                <li key={idx}>
                  <Link href={page.href} className="hover:text-white transition">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} DriveCheckr. All rights reserved.
      </p>
    </footer>
  );
}
