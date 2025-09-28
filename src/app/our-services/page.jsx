import { Zap, Code, Server, Globe, Cpu, Cloud } from "lucide-react";

const services = [
  {
    title: "Web & Mobile Development",
    desc: "We build responsive websites and mobile applications that engage users and drive business growth.",
    icon: Code,
    features: [
      "React & Next.js",
      "Tailwind CSS",
      "Flutter & React Native",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & API Development",
    desc: "Robust backend solutions and APIs that are secure, fast, and scalable for modern applications.",
    icon: Server,
    features: [
      "Node.js & Express",
      "MongoDB & PostgreSQL",
      "REST & GraphQL",
      "JWT Authentication",
    ],
  },
  {
    title: "Cloud & DevOps Solutions",
    desc: "Automated deployments, cloud infrastructure setup, and continuous integration for hassle-free operations.",
    icon: Cloud,
    features: [
      "AWS & Azure",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Serverless Architecture",
    ],
  },
  {
    title: "UI/UX Design",
    desc: "User-friendly interfaces and engaging experiences designed to keep users coming back.",
    icon: Zap,
    features: [
      "Wireframing & Prototyping",
      "Figma & Adobe XD",
      "Responsive Design",
      "User Testing",
    ],
  },
  {
    title: "Cybersecurity & IT Support",
    desc: "Protecting your digital assets and providing ongoing IT support for uninterrupted operations.",
    icon: Cpu,
    features: [
      "Network Security",
      "Data Protection",
      "24/7 Monitoring",
      "IT Consulting",
    ],
  },
  {
    title: "Digital Marketing & SEO",
    desc: "Enhancing your online presence and driving more leads with proven digital marketing strategies.",
    icon: Globe,
    features: [
      "SEO Optimization",
      "Social Media Campaigns",
      "Content Strategy",
      "Analytics & Reporting",
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

export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-br  my-24  from-purple-900 via-blue-900 to-indigo-900 text-white py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Build Something
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 py-3 ">
              Transform your ideas into powerful mobile apps, web applications,
              and custom dashboards. We deliver cutting-edge IT solutions that
              drive business growth and user engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
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
      <section className="py-14 bg-gray-50 my-4">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Our IT Services
            </h3>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge IT solutions tailored to your business
              needs, ensuring high performance, security, and user satisfaction.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 mb-4 text-lg md:text-xl leading-relaxed py-2">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Zap className="h-6 w-6 text-purple-600" />
                          <span className="text-gray-700 text-lg md:text-xl">
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
    </>
  );
}
