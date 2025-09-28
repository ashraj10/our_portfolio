import React from "react";

export default function page() {
  const apps = [
    {
      name: "Transition Health",
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.transition.health",
        },
      ],
    },
    {
      name: "LinkEase App",
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.linkease.app",
        },
        {
          label: "App Store",
          url: "https://apps.apple.com/in/app/linkease-app/id6744399764",
        },
      ],
    },
    {
      name: "Zigg App (Home Automation)",
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.ziggapp.homeautomationapp.ziggapp",
        },
      ],
    },
    {
      name: "Precious Jubilee",
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.precious.jubilee",
        },
      ],
    },
    {
      name: "The Omnipreneur",
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/in/app/the-omnipreneur/id1284216098",
        },
      ],
    },
    {
      name: "Sangathan",
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/in/app/sangathan/id1672389576",
        },
      ],
    },
    {
      name: "EyeMastr",
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/in/app/eyemastr/id6740474014",
        },
      ],
    },
    {
      name: "Acrim Film TV",
      links: [
        {
          label: "App Store",
          url: "https://apps.apple.com/in/app/acrim-film-tv/id6742450472",
        },
      ],
    },
  ];
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28 px-6 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Projects
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          
          Explore the mobile applications we have designed and developed —
          delivering high-quality solutions across Android and iOS platforms.
        </p>
      </section>
      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {apps.map((app, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-lg p-6 transition flex flex-col justify-between"
            >
              
              <div>
                
                <h2 className="text-xl font-semibold text-blue-600 mb-3">
                  
                  {app.name}
                </h2>
                <ul className="space-y-2">
                  
                  {app.links.map((link, i) => (
                    <li key={i}>
                      
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 font-medium hover:underline"
                      >
                        
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
