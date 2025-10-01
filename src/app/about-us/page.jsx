import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-50 text-gray-800">
       
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28 px-6">
          
          <div className="max-w-6xl mx-auto text-center">
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              
              About <span className="text-yellow-400">
                QueueSpace IT
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              
              We are a forward-thinking IT organization dedicated to delivering
              innovative software solutions, seamless digital experiences, and
              future-ready technology for businesses worldwide.
            </p>
          </div>
        </section>
        {/* Mission & Vision */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          
          <div>
            
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
             
              Our mission is to empower organizations with cutting-edge IT
              services and solutions that drive growth, efficiency, and digital
              transformation. We aim to simplify technology and make it
              accessible for every business.
            </p>
          </div>
          <div>
           
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed">
              
              We envision a connected world where technology fuels progress,
              innovation, and sustainable development. Our goal is to be a
              trusted global partner in the digital era.
            </p>
          </div>
        </section>
        {/* Core Values */}
        <section className="bg-white py-16 px-6">
         
          <div className="max-w-6xl mx-auto text-center">
           
            <h2 className="text-3xl font-bold text-gray-800 mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
             
              <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
               
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Innovation
                </h3>
                <p>
                  
                  We thrive on creativity and forward-thinking solutions,
                  ensuring our clients stay ahead in the digital landscape.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                  Integrity
                </h3>
                <p>
                  
                  Transparency and honesty are at the heart of everything we do.
                  We build long-lasting relationships based on trust.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                
                <h3 className="text-xl font-semibold mb-3 text-yellow-600">
                  Excellence
                </h3>
                <p>
                  
                  We strive for excellence in every project, delivering
                  reliable, scalable, and impactful IT solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            
            {[
              { name: "Yeshraj Singh", role: "Frontend Developer" },
              { name: "Vishal Sharma", role: "Backend Engineer" },
              { name: "Khushi Sahu", role: "Application Developer" },
              { name: "Manikant Tyagi", role: "DevOps Engineer" },
              { name: "Ankush Tanwar", role: "Project Manager" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
              >
                
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                 
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-10 px-6 text-center">
          
          <p>
            
            © {new Date().getFullYear()} TechNova Solutions. All rights
            reserved.
          </p>
        </footer>
      </div>
     </div>
  );
}
