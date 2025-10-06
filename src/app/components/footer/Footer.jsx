import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCode,
  FaMobile,
  FaPalette,
  FaRocket,
} from "react-icons/fa";
import Image from "next/image";
import logo from "../../assets/images/footerlogo.png";

const Footer = () => {
  // ---------- SOCIAL ICONS ----------
  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaDribbble />, href: "#", label: "Dribbble" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" },
  ];

  // ---------- SERVICES ----------
  const services = [
    { icon: <FaCode className="text-[#373669]" />, title: "Web Development" },
    {
      icon: <FaMobile className="text-[#373669]" />,
      title: "Mobile App Development",
    },
    { icon: <FaPalette className="text-[#373669]" />, title: "UI/UX Design" },
    {
      icon: <FaRocket className="text-[#373669]" />,
      title: "Digital Marketing",
    },
  ];

  // ---------- COMPANY LINKS ----------
  const companyLinks = [
    { title: "About Us" },
    { title: "Our Story" },
    { title: "Projects" },
    { title: "Careers" },
  ];

  // ---------- POLICIES ----------
  const policies = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="footer bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="#" className="logo inline-block">
              <Image
                src={logo}
                alt="QueueSpaceIT Logo"
                width={140}
                height={140}
                priority
                className="w-auto object-contain "
              />
            </Link>

            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for innovative web development, mobile apps,
              and digital solutions that drive business growth.
            </p>

            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">
                Follow Us
              </h4>
              <ul className="flex gap-4">
                {socialLinks.map(({ icon, href, label }, i) => (
                  <li key={i}>
                    <Link
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#373669] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      {icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-1 after:bg-[#373669]">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map(({ icon, title }, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {React.cloneElement(icon, {
                      className:
                        icon.props.className +
                        " group-hover:scale-110 transition-transform",
                    })}
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-1 after:bg-[#373669]">
              Company
            </h4>
            <ul className="space-y-3 mb-8">
              {companyLinks.map(({ title }, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 block hover:translate-x-2 transform transition-transform"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <FaMapMarkerAlt className="text-[#373669] mt-1 flex-shrink-0" />
                  <address className="not-italic leading-relaxed">
                    Noida, Sector 62, Uttar Pradesh, India
                  </address>
                </div>
              </li>
              <li>
                <a
                  href="mailto:queuespaceit@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <FaEnvelope className="text-[#373669] group-hover:scale-110 transition-transform" />
                  queuespaceit@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-1 after:bg-[#373669]">
              Newsletter
            </h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Subscribe to our newsletter to get the latest updates, exclusive
              deals, and industry insights delivered to your inbox.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#373669] focus:outline-none focus:ring-2 focus:ring-[#373669] transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#373669] to-[#4a4385] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#4a4385] hover:to-[#373669] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} QueueSpaceIT. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              {policies.map(({ title, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
