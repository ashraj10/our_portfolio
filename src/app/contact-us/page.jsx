"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Smartphone,
  Globe,
  BarChart3,
  Code2,
  Zap,
  Star,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(
      "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "iOS & Android native apps, React Native, Flutter development",
      features: [
        "Native iOS/Android",
        "Cross-platform",
        "UI/UX Design",
        "App Store Publishing",
      ],
    },
    {
      icon: Globe,
      title: "Web Application Development",
      desc: "Modern web apps using React, Next.js, Vue.js and latest technologies",
      features: [
        "React/Next.js",
        "Vue.js/Nuxt",
        "Full-stack Development",
        "Progressive Web Apps",
      ],
    },
    {
      icon: BarChart3,
      title: "Dashboard & Analytics",
      desc: "Custom dashboards, data visualization, and business intelligence solutions",
      features: [
        "Real-time Analytics",
        "Custom Charts",
        "Data Integration",
        "Business Intelligence",
      ],
    },
    {
      icon: Code2,
      title: "Custom Software Solutions",
      desc: "Tailored software development for your unique business requirements",
      features: [
        "API Development",
        "System Integration",
        "Cloud Solutions",
        "DevOps & Deployment",
      ],
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Python",
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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

      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Build Something
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your ideas into powerful mobile apps, web applications,
              and custom dashboards. We deliver cutting-edge IT solutions that
              drive business growth and user engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating digital solutions that transform
              businesses and delight users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    {/* Increased font size for service title */}
                    <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                      {service.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Zap className="h-5 w-5 text-purple-600" />
                          <span className="text-base text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form - Left Side */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-10 lg:p-14">
                <div className="mb-8">
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">
                    Start Your Project
                  </h3>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    Ready to bring your ideas to life? Fill out the form below
                    and let's discuss your project requirements.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 text-lg"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Project Details *
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 text-lg"
                    />
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-xl text-xl hover:scale-105 transition-all">
                    Start My Project
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side Info */}
            <div className="lg:col-span-2 space-y-10">
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Phone: +1 (555) 123-4567 <br />
                  Email: hello@techsolutions.com <br />
                  Address: 123 Tech Hub Street, San Francisco, CA
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4 text-xl">
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
