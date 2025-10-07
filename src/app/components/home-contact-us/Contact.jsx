"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send("your_service_id", "your_template_id", formData, "your_public_key")
      .then(
        () => setStatus("✅ Message sent successfully!"),
        () => setStatus("❌ Failed to send message")
      );
  };

  return (
    <section className="min-h-screen mb-10 flex flex-col md:flex-row bg-gradient-to-r from-indigo-50 via-white to-indigo-100">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-[#3f0e78] via-[#4b1c9b] to-[#5b31b0] text-white flex flex-col justify-center p-10 md:p-16 rounded-r-3xl shadow-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to bring your idea <br /> to life?
        </h2>

        <p className="text-gray-200 mb-10 max-w-md text-2xl leading-relaxed">
          Let’s build something amazing together. Our expert IT team helps you
          design, develop, and deliver innovative solutions tailored to your
          business needs.
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-1">Chat With Us</h4>
            <p className="text-gray-300 mb-1">
              Reach out and discuss your next big idea.
            </p>
            <a
              href="mailto:queuespaceit@gmail.com"
              className="text-yellow-400 font-medium hover:underline"
            >
              queuespaceit@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-1">Our Expertise</h4>
            <ul className="text-gray-300 space-y-1">
              <li>💻 Web & App Development</li>
              <li>🎨 UI/UX Design</li>
              <li>☁️ Cloud Solutions</li>
              <li>⚙️ IT Consultation</li>
              <li>🚀 Digital Transformation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-10 md:p-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          Let’s start your project
        </h3>
        <p className="text-gray-600 mb-8">
          You can reach us anytime via{" "}
          <a
            href="mailto:queuespaceit@gmail.com"
            className="text-indigo-600 font-medium hover:underline"
          >
            queuespaceit@gmail.com
          </a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm hover:shadow-md transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm hover:shadow-md transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm hover:shadow-md transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm hover:shadow-md transition"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Budget
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm hover:shadow-md transition"
            >
              <option value="">– Select your budget –</option>
              <option value="Under $1000">💰 Under $1000</option>
              <option value="$1000 – $5000">💼 $1000 – $5000</option>
              <option value="$5000 – $10000">🚀 $5000 – $10000</option>
              <option value="$10000+">🏢 $10000+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expected Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm hover:shadow-md transition"
            >
              <option value="">– Select timeline –</option>
              <option value="1-3 months">1–3 Months</option>
              <option value="3-6 months">3–6 Months</option>
              <option value="6+ months">6+ Months</option>
            </select>
          </div>

          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              id="agree"
              required
              className="mt-1 h-4 w-4"
            />
            <label htmlFor="agree" className="leading-snug">
              I have read and agree to the{" "}
              <a href="#" className="underline text-indigo-600">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-indigo-600">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
          >
            Submit Form
          </button>

          {status && (
            <p className="text-center text-gray-700 mt-3 font-medium">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
