import {
  IoCall,
  IoShieldCheckmark,
  IoCloudDownload,
  IoPieChart,
  IoArrowForward,
} from "react-icons/io5";

export default function Service() {
  return (
    <section className="section service " aria-labelledby="service-label">
      <div className="container">
        <p className="section-subtitle text-[#373669]" id="service-label">
          What We Do?
        </p>
        <h2 className="h2 section-title">
          The service we offer is specifically designed to meet your needs.
        </h2>
        <ul className="grid-list">
          <li>
            <div className="service-card ">
              <div className="card-icon bg-custom-gradient">
                <IoCall aria-hidden="true" />
              </div>
              <h3 className="h4 card-title">24/7 Support</h3>
              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget metus cras justo.
              </p>
              <a href="#" className="btn-text">
                <span className="span">Learn More</span>
                <IoArrowForward aria-hidden="true" />
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon bg-custom-gradient">
                <IoShieldCheckmark aria-hidden="true" />
              </div>
              <h3 className="h4 card-title">Secure Payments</h3>
              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget metus cras justo.
              </p>
              <a href="#" className="btn-text">
                <span className="span">Learn More</span>
                <IoArrowForward aria-hidden="true" />
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon bg-custom-gradient">
                <IoCloudDownload aria-hidden="true" />
              </div>
              <h3 className="h4 card-title">Daily Updates</h3>
              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget metus cras justo.
              </p>
              <a href="#" className="btn-text">
                <span className="span">Learn More</span>
                <IoArrowForward aria-hidden="true" />
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon bg-custom-gradient">
                <IoPieChart aria-hidden="true" />
              </div>
              <h3 className="h4 card-title">Market Research</h3>
              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget metus cras justo.
              </p>
              <a href="#" className="btn-text">
                <span className="span">Learn More</span>
                <IoArrowForward aria-hidden="true" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
