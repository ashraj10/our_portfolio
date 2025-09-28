"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Code2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      );
      alert(
        "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours."
      );
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      alert("Oops! Something went wrong. Please try again later.");
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  TechSolutions Pro
                </h1>
                <p className="text-sm text-gray-600">
                  Mobile Apps • Web Apps • Dashboards
                </p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-600" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-600" />
                <span className="font-medium">hello@techsolutions.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get In Touch With Us
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let’s Discuss Your Project
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 py-3">
              Have an idea, a project, or a question? Reach out to our team and
              we'll help you turn your vision into reality. Whether it’s web
              development, mobile apps, or custom software, we are here to
              provide solutions tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                Phone: +1 (555) 123-4567
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                Email: hello@techsolutions.com
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                Address: 123 Tech Hub Street, San Francisco, CA
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                24/7 Support Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-2xl p-10 lg:p-14 space-y-8"
              >
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  Start Your Project
                </h3>
                <p className="text-gray-600 text-2xl leading-relaxed">
                  Fill out the form below and let's discuss your project.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-600 text-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-600 text-lg"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-600 text-lg"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-600 text-lg"
                />
                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Project Details..."
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-600 text-lg"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-xl text-xl hover:scale-105 transition-all"
                >
                  {isSubmitting ? "Sending..." : "Start My Project"}
                </button>
              </form>
            </div>

            {/* Right Info */}
            <div className="lg:col-span-2 space-y-10">
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Info
                </h3>
                <p className="text-gray-700 text-2xl leading-relaxed space-y-2">
                  <span className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-purple-600" />
                    <span>+1 (555) 123-4567</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <span>hello@techsolutions.com</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <span>123 Tech Hub Street, San Francisco, CA</span>
                  </span>
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4 text-2xl">
                  <li>✔ 500+ Projects Delivered</li>
                  <li>✔ 98% Client Satisfaction</li>
                  <li>✔ 2 Hours Response Time</li>
                  <li>✔ 8+ Years Experience</li>
                  <li>✔ 25+ Experts Team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
