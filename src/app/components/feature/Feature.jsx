import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import feature from "../../assets/images/feature-banner.png";

export default function Feature() {
  const features = [
    "Aenean quam ornare. Curabitur blandit.",
    "Nullam quis risus eget urna mollis ornare.",
    "Etiam porta euismod malesuada mollis.",
    "Vivamus sagittis lacus vel augue rutrum.",
  ];

  return (
    <section className="section feature" aria-labelledby="feature-label">
      <div className="container">
        <figure className="feature-banner">
          <Image
            src={feature}
            width={800}
            height={531}
            loading="lazy"
            alt="feature banner"
            className="w-100"
          />
        </figure>

        <div className="feature-content">
          <p className="section-subtitle" id="feature-label">
            Our Solutions
          </p>

          <h2 className="h2 section-title">
            We make your spending stress-free for you to have the perfect
            control.
          </h2>

          <p className="section-text">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus.
          </p>

          <ul className="feature-list">
            {features.map((feature, index) => (
              <li key={index}>
                <div className="feature-card">
                  <div className="card-icon">
                    <IoCheckmark aria-hidden="true" />
                  </div>
                  <span className="span">{feature}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
