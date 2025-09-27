import statsBgImage from "../../assets/images/stats-bg.jpg";

export default function Stats() {
  const statsData = [
    { number: "7518", label: "Completed Projects" },
    { number: "3472", label: "Happy Customers" },
    { number: "2184", label: "Expert Employees" },
    { number: "4523", label: "Awards Won" },
  ];

  return (
    <section className="stats" aria-label="our stats">
      <div className="container">
        <ul
          className="stats-card has-bg-image"
          style={{ backgroundImage: `url(${statsBgImage.src})` }}
        >
          {statsData.map((stat, index) => (
            <li key={index}>
              <p className="card-text">
                <span className="h1">{stat.number}</span>
                <span className="span">{stat.label}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
