import React from "react";
import "./HowToReach.css";

const routes = [
  {
    id: "01",
    from: "Pune",
    title: "Pune to Om Agro Tourism",
    distance: "29.3 km",
    icon: "fa-solid fa-city",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d372397.5527153227!2d73.59541264448491!3d18.564130533941736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!3m2!1d18.520430299999997!2d73.8567437!4m5!1s0x3bc2cf123b0b01e9%3A0x2694a3df76f28422!2sPX6P%2B4FJ%2C%20Koyali%20Tarf%20Chakan%2C%20Maharashtra!3m2!1d18.710337499999998!2d73.9861406!5e0!3m2!1sen!2sin!4v1734354022644!5m2!1sen!2sin",
  },
  {
    id: "02",
    from: "Mumbai",
    title: "Mumbai to Om Agro Tourism",
    distance: "151 km",
    icon: "fa-solid fa-building",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1093999.3864571566!2d72.34186365562726!3d18.714892861741127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!3m2!1d19.0759837!2d72.8776559!4m5!1s0x3bc2cf123b0b01e9%3A0x2694a3df76f28422!2sPX6P%2B4FJ%2C%20Koyali%20Tarf%20Chakan%2C%20Maharashtra!3m2!1d18.710337499999998!2d73.9861406!5e0!3m2!1sen!2sin!4v1734354544570!5m2!1sen!2sin",
  },
  {
    id: "03",
    from: "Nashik",
    title: "Nashik to Om Agro Tourism",
    distance: "194 km",
    icon: "fa-solid fa-location-dot",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d963676.654293931!2d73.34220873960354!3d19.353475066279408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!3m2!1d19.9974533!2d73.78980229999999!4m5!1s0x3bc2cf123b0b01e9%3A0x2694a3df76f28422!2sPX6P%2B4FJ%2C%20Koyali%20Tarf%20Chakan%2C%20Maharashtra!3m2!1d18.710337499999998!2d73.9861406!5e0!3m2!1sen!2sin!4v1734354349449!5m2!1sen!2sin",
  },
  {
    id: "04",
    from: "Ahilya Nagar",
    title: "Ahilya Nagar to Om Agro Tourism",
    distance: "112 km",
    icon: "fa-solid fa-route",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d483274.5300553401!2d74.03347482384363!3d18.8612330441361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAhmednagar%2C%20Maharashtra!3m2!1d19.0948287!2d74.74797889999999!4m5!1s0x3bc2cf123b0b01e9%3A0x2694a3df76f28422!2sPX6P%2B4FJ%2C%20Koyali%20Tarf%20Chakan%2C%20Maharashtra!3m2!1d18.710337499999998!2d73.9861406!5e0!3m2!1sen!2sin!4v1734354656623!5m2!1sen!2sin",
  },
  {
    id: "05",
    from: "Chhatrapati Sambhaji Nagar",
    title: "Chhatrapati Sambhaji Nagar to Om Agro Tourism",
    distance: "295 km",
    icon: "fa-solid fa-map-location-dot",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d964064.5121397175!2d73.95781984308314!3d19.287714390829223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bdb9815a369bc63%3A0x712d538b29a2a73e!2sAurangabad%2C%20Maharashtra!3m2!1d19.875754!2d75.3393195!4m5!1s0x3bc2cf123b0b01e9%3A0x2694a3df76f28422!2sPX6P%2B4FJ%2C%20Koyali%20Tarf%20Chakan%2C%20Maharashtra!3m2!1d18.710337499999998!2d73.9861406!5e0!3m2!1sen!2sin!4v1734354740726!5m2!1sen!2sin",
  },
];

const HowToReach = () => {
  return (
    <>

      <section className="inner-banner-wrap">
      <div
        className="inner-baner-container"
        style={{
          backgroundImage: "url('/images/inner-banner.jpeg')",
        }}
      >
        <div className="container">
          <div className="inner-banner-content">
            <h1 className="inner-title">
                <h1>
              How to Reach <span>Om Agro Tourism</span>
            </h1> 
            </h1>
          </div>
        </div>
      </div>

      <div className="inner-shape"></div>
    </section>
      {/* =========================
          HERO
      ========================== */}
    

      {/* =========================
          ROUTES SECTION
      ========================== */}
      <section className="om-reach-section">
        <div className="container">

          {/* Heading */}
          <div className="om-reach-heading">

            <div>
              <span className="om-reach-heading-label">
                ROUTE GUIDE
              </span>

              <h2>
                Choose Your <span>Starting City</span>
              </h2>
            </div>

            <p>
              Finding your way to Om Agro Tourism is easy. Below are
              directions from various key locations. Simply follow the
              maps and reach us without any hassle.
            </p>

          </div>

          {/* =========================
              ROUTE CARDS
          ========================== */}
          <div className="om-reach-grid">

            {routes.map((route) => (
              <article className="om-reach-card" key={route.id}>

                {/* Card Header */}
                <div className="om-reach-card-header">

                  <div className="om-reach-city">

                    <div className="om-reach-icon">
                      <i className={route.icon}></i>
                    </div>

                    <div>
                      <span>
                        FROM {route.from.toUpperCase()}
                      </span>

                      <h3>{route.title}</h3>
                    </div>

                  </div>

                  <span className="om-reach-number">
                    {route.id}
                  </span>

                </div>

                {/* Distance */}
                <div className="om-reach-distance">

                  <div className="om-reach-distance-icon">
                    <i className="fa-solid fa-road"></i>
                  </div>

                  <div>
                    <span>APPROX. DISTANCE</span>
                    <strong>{route.distance}</strong>
                  </div>

                </div>

                {/* Map */}
                <div className="om-reach-map">

                  <iframe
                    src={route.map}
                    title={route.title}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                </div>

                {/* Bottom */}
                <div className="om-reach-card-bottom">

                  <span>
                    <i className="fa-solid fa-location-arrow"></i>
                    Follow the route to Om Agro Tourism
                  </span>

                  <div className="om-reach-end-icon">
                    <i className="fa-solid fa-flag-checkered"></i>
                  </div>

                </div>

              </article>
            ))}

          </div>

          {/* =========================
              HELP CTA
          ========================== */}
          <div className="om-reach-help">

            <div className="om-reach-help-icon">
              <i className="fa-solid fa-map-location-dot"></i>
            </div>

            <div className="om-reach-help-content">
              <span>NEED HELP FINDING US?</span>

              <h3>
                We're Happy to Guide You
              </h3>

              <p>
                Contact Om Agro Tourism for assistance with directions
                and planning your visit.
              </p>
            </div>

            <div className="om-reach-help-actions">

              <a
                href="tel:+917066665554"
                className="om-reach-call"
              >
                <i className="fa-solid fa-phone"></i>
                +91 70666 65554
              </a>

              <a
                href="https://wa.me/917066665554"
                target="_blank"
                rel="noreferrer"
                className="om-reach-whatsapp"
              >
                <i className="fa-brands fa-whatsapp"></i>
                WhatsApp
              </a>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default HowToReach;