import React from "react";
import "./PackageSection.css";

const PackageSection = () => {
  const packages = [
    {
      id: 1,
      image: "/images/keyword/74.jpg",
      tag: "Family Favourite",
      tagIcon: "fas fa-heart",
      title: "Family Day Out",
      subtitle: "A refreshing countryside escape for the whole family",
      description:
        "Spend quality time together with water fun, farm experiences, outdoor activities and peaceful moments surrounded by nature.",
      features: [
        {
          icon: "fas fa-swimmer",
          text: "Water Activities",
        },
        {
          icon: "fas fa-tractor",
          text: "Farm Experience",
        },
        {
          icon: "fas fa-horse",
          text: "Outdoor Fun",
        },
        {
          icon: "fas fa-utensils",
          text: "Food Experience",
        },
      ],
      suitable: "Families & Friends",
    },

    {
      id: 2,
      image: "/images/keyword/10.jpg",
      tag: "Learning With Fun",
      tagIcon: "fas fa-graduation-cap",
      title: "School Picnic",
      subtitle: "Fun, nature and farm experiences for student groups",
      description:
        "Give students an enjoyable day outside the classroom with recreational activities, countryside experiences and time to explore together.",
      features: [
        {
          icon: "fas fa-users",
          text: "Group Activities",
        },
        {
          icon: "fas fa-seedling",
          text: "Farm Experience",
        },
        {
          icon: "fas fa-gamepad",
          text: "Fun & Games",
        },
        {
          icon: "fas fa-water",
          text: "Water Fun",
        },
      ],
      suitable: "Schools & Student Groups",
    },

    {
      id: 3,
      image: "/images/keyword/5.jpg",
      tag: "Team Day Out",
      tagIcon: "fas fa-briefcase",
      title: "Corporate Outing",
      subtitle: "Refresh, reconnect and enjoy a day away from the office",
      description:
        "Bring your team together in a refreshing natural setting with group activities, outdoor experiences and plenty of space to relax and reconnect.",
      features: [
        {
          icon: "fas fa-users",
          text: "Team Outing",
        },
        {
          icon: "fas fa-volleyball-ball",
          text: "Outdoor Games",
        },
        {
          icon: "fas fa-tree",
          text: "Nature Setting",
        },
        {
          icon: "fas fa-camera",
          text: "Group Memories",
        },
      ],
      suitable: "Corporate & Office Groups",
    },
  ];

  return (
    <section className="om-package-section">

      {/* Background Decorations */}
      <div className="om-package-shape om-package-shape-one"></div>
      <div className="om-package-shape om-package-shape-two"></div>

      <div className="container">

        {/* ================= HEADING ================= */}
        <div className="om-package-heading">

          <div className="om-package-label">
            <span></span>

             

            <span></span>
          </div>

          <h2>
            Choose Your Experience at
            <span> Om Agro Tourism</span>
          </h2>

          <p>
            Whether you are planning a family picnic, school outing or
            corporate day out, enjoy a refreshing countryside experience
            filled with nature, water fun, farm activities and memorable
            moments.
          </p>

        </div>

        {/* ================= PACKAGE CARDS ================= */}
        <div className="row g-4 justify-content-center">

          {packages.map((item) => (
            <div
              className="col-lg-4 col-md-6"
              key={item.id}
            >
              <article className="om-package-card">

                {/* Image */}
                <div className="om-package-image">

                  <img
                    src={item.image}
                    alt={`${item.title} at Om Agro Tourism`}
                  />

                  <div className="om-package-image-overlay"></div>

                  {/* Top Tag */}
                  <div className="om-package-tag">
                    <i className={item.tagIcon}></i>
                    {item.tag}
                  </div>

                  {/* Suitable For */}
                  <div className="om-package-suitable">
                    <i className="fas fa-users"></i>

                    <span>{item.suitable}</span>
                  </div>

                </div>

                {/* Content */}
                <div className="om-package-content">

                  <div className="om-package-title-area">

                    <span className="om-package-number">
                      0{item.id}
                    </span>

                    <div>
                      <h3>{item.title}</h3>

                      <p className="om-package-subtitle">
                        {item.subtitle}
                      </p>
                    </div>

                  </div>

                  <p className="om-package-description">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="om-package-features">

                    {item.features.map((feature, index) => (
                      <div
                        className="om-package-feature"
                        key={index}
                      >
                        <span>
                          <i className={feature.icon}></i>
                        </span>

                        <p>{feature.text}</p>
                      </div>
                    ))}

                  </div>

                  {/* Price / Enquiry */}
                  <div className="om-package-enquiry">

                    <div className="om-package-price">

                      <small>
                        PACKAGE DETAILS
                      </small>

                      <strong>
                        Contact for Package
                      </strong>

                    </div>

                    <a
                      href="tel:+917066665554"
                      className="om-package-phone"
                      aria-label={`Call for ${item.title}`}
                    >
                      <i className="fas fa-phone-alt"></i>
                    </a>

                  </div>

                  {/* Buttons */}
                  <div className="om-package-actions">

                    <a
                      href="tel:+917066665554"
                      className="om-package-primary-btn"
                    >
                      <i className="fas fa-phone-alt"></i>

                      Enquire Now

                      <span>
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </a>

                    <a
                      href={`https://wa.me/917066665554?text=${encodeURIComponent(
                        `Hello Om Agro Tourism, I would like to know more about the ${item.title} package.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="om-package-whatsapp"
                      aria-label={`WhatsApp about ${item.title}`}
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>

                  </div>

                </div>

              </article>
            </div>
          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="om-package-bottom">

          <div className="om-package-bottom-left">

            <div className="om-package-bottom-icon">
              <i className="fas fa-leaf"></i>
            </div>

            <div>
              <span>
                PLANNING SOMETHING SPECIAL?
              </span>

              <h4>
                Talk to us about your group visit.
              </h4>

              <p>
                Family • School • Corporate • Friends • Get-Together
              </p>
            </div>

          </div>

          <div className="om-package-bottom-actions">

            <a
              href="tel:+917066665554"
              className="om-package-bottom-call"
            >
              <i className="fas fa-phone-alt"></i>

              <div>
                <small>CALL FOR ENQUIRY</small>
                <strong>+91 70666 65554</strong>
              </div>
            </a>

            <a
              href="https://wa.me/917066665554"
              target="_blank"
              rel="noreferrer"
              className="om-package-bottom-whatsapp"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PackageSection;