import React from "react";
import "./Packages.css";

const Packages = () => {
  const packages = [
    {
      id: 1,
      icon: "fas fa-sun",
      type: "Day Experience",
      title: "One Day Return Package",
      timing: "9:30 AM to 5:30 PM",
      adultPrice: "₹900",
      childPrice: "₹550",
      childNote: "Child (4–10 Years)",
      description:
        "Spend a refreshing full day at Om Agro Tourism with delicious food, exciting activities and relaxing countryside experiences.",
      includes: [
        "Breakfast",
        "Lunch",
        "High Tea",
        "All Activities",
      ],
      buttonText: "Book Day Package",
    },

    {
      id: 2,
      icon: "fas fa-moon",
      type: "24 Hours Stay",
      title: "Night Stay Package - 24 Hrs",
      timing: "12:00 Noon to 10:00 AM OR 5:00 PM to 3:00 PM",
      adultPrice: "₹2,200",
      childPrice: "₹1,200",
      childNote: "Child (4–10 Years)",
      description:
        "Enjoy an extended countryside break with meals, activities and a relaxing overnight experience at Om Agro Tourism.",
      includes: [
        "Breakfast",
        "Lunch",
        "Dinner",
        "All Activities",
      ],
      buttonText: "Book Night Stay",
      featured: true,
    },

    {
      id: 3,
      icon: "fas fa-cloud-moon",
      type: "Overnight Experience",
      title: "Night Stay Half Package",
      timing: "5:00 PM to 10:00 AM",
      adultPrice: "₹1,500",
      childPrice: "₹1,000",
      childNote: "Child (4–10 Years)",
      description:
        "Perfect for guests looking for a shorter overnight getaway with evening activities, dinner and a refreshing morning.",
      includes: [
        "Evening Experience",
        "Dinner",
        "Morning Breakfast",
        "All Activities",
      ],
      buttonText: "Book Half Stay",
    },
  ];

  const schoolPrices = [
    {
      className: "Nursery to Sr. Kg",
      price: "₹400",
    },
    {
      className: "1st to 4th Std",
      price: "₹450",
    },
    {
      className: "5th to 7th Std",
      price: "₹500",
    },
    {
      className: "8th to 10th Std",
      price: "₹600",
    },
    {
      className: "11th & Above",
      price: "₹650",
    },
  ];

  const sendWhatsApp = (packageName) => {
    const message = `Hello Om Agro Tourism, I would like to know more about the ${packageName}.`;

    window.open(
      `https://wa.me/917066665554?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="om-pkg-page">

      {/* ==================================================
          HERO
      ================================================== */}
      <section className="om-pkg-hero">

        <div className="om-pkg-hero-circle om-pkg-circle-one"></div>
        <div className="om-pkg-hero-circle om-pkg-circle-two"></div>

        <div className="container">
          <div className="om-pkg-hero-content">

            <div className="om-pkg-eyebrow">
              <span></span>
              OM AGRO TOURISM
              <span></span>
            </div>

            <h1>
              Choose Your Perfect
              <span> Picnic Package</span>
            </h1>

            <p>
              From a refreshing one-day picnic to overnight stays, school
              outings and special celebrations, choose an experience that
              suits your perfect countryside getaway.
            </p>

            <div className="om-pkg-hero-highlights">

              <div>
                <i className="fas fa-water"></i>
                <span>Water Fun</span>
              </div>

              <div>
                <i className="fas fa-tractor"></i>
                <span>Farm Activities</span>
              </div>

              <div>
                <i className="fas fa-utensils"></i>
                <span>Food Packages</span>
              </div>

              <div>
                <i className="fas fa-leaf"></i>
                <span>Nature Experience</span>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          MAIN PACKAGES
      ================================================== */}
      <section className="om-pkg-main">
        <div className="container">

          <div className="om-pkg-section-heading">

            <div className="om-pkg-heading-label">
              OUR PACKAGES
            </div>

            <h2>
              Pick the Experience
              <span> That Suits You</span>
            </h2>

            <p>
              Simple package options for spending a memorable day or
              overnight experience at Om Agro Tourism.
            </p>

          </div>


          <div className="row g-4">

            {packages.map((item) => (
              <div
                className="col-lg-4 col-md-6"
                key={item.id}
              >
                <article
                  className={`om-pkg-card ${
                    item.featured ? "om-pkg-featured" : ""
                  }`}
                >

                  {item.featured && (
                    <div className="om-pkg-popular">
                      <i className="fas fa-star"></i>
                      Overnight Experience
                    </div>
                  )}

                  {/* Card Header */}
                  <div className="om-pkg-card-top">

                    <div className="om-pkg-card-icon">
                      <i className={item.icon}></i>
                    </div>

                    <div className="om-pkg-card-type">
                      {item.type}
                    </div>

                    <h3>{item.title}</h3>

                  </div>


                  {/* Timing */}
                  <div className="om-pkg-time">

                    <div className="om-pkg-time-icon">
                      <i className="far fa-clock"></i>
                    </div>

                    <div>
                      <span>PACKAGE TIMING</span>
                      <strong>{item.timing}</strong>
                    </div>

                  </div>


                  {/* Description */}
                  <p className="om-pkg-description">
                    {item.description}
                  </p>


                  {/* Pricing */}
                  <div className="om-pkg-pricing">

                    <div className="om-pkg-price-item">

                      <span>ADULT</span>

                      <strong>
                        {item.adultPrice}
                      </strong>

                      <small>per adult</small>

                    </div>

                    <div className="om-pkg-price-divider"></div>

                    <div className="om-pkg-price-item">

                      <span>CHILD</span>

                      <strong>
                        {item.childPrice}
                      </strong>

                      <small>{item.childNote}</small>

                    </div>

                  </div>


                  {/* Includes */}
                  <div className="om-pkg-includes">

                    <h4>
                      <i className="fas fa-check-circle"></i>
                      Package Includes
                    </h4>

                    <div className="om-pkg-includes-grid">

                      {item.includes.map((include, index) => (
                        <div key={index}>
                          <i className="fas fa-check"></i>
                          {include}
                        </div>
                      ))}

                    </div>

                  </div>


                  {/* Buttons */}
                  <div className="om-pkg-card-actions">

                    <button
                      type="button"
                      className="om-pkg-book-btn"
                      onClick={() => sendWhatsApp(item.title)}
                    >
                      {item.buttonText}

                      <span>
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </button>

                    <a
                      href="tel:+917066665554"
                      className="om-pkg-call-btn"
                      aria-label="Call Om Agro Tourism"
                    >
                      <i className="fas fa-phone-alt"></i>
                    </a>

                  </div>

                </article>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ==================================================
          SCHOOL + CORPORATE
      ================================================== */}
      <section className="om-pkg-special">
        <div className="container">

          <div className="row g-4 align-items-stretch">

            {/* SCHOOL PICNIC */}
            <div className="col-lg-7">

              <div className="om-pkg-school-card">

                <div className="om-pkg-special-head">

                  <div className="om-pkg-special-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>

                  <div>
                    <span>FOR STUDENTS</span>
                    <h2>School Picnic Packages</h2>

                    <p>
                      Age-wise package options for school groups and
                      educational outings.
                    </p>
                  </div>

                </div>


                <div className="om-pkg-school-prices">

                  {schoolPrices.map((item, index) => (
                    <div
                      className="om-pkg-school-row"
                      key={index}
                    >
                      <div className="om-pkg-school-left">

                        <span className="om-pkg-school-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{item.className}</span>

                      </div>

                      <strong>{item.price}</strong>
                    </div>
                  ))}

                </div>


                <button
                  type="button"
                  className="om-pkg-school-button"
                  onClick={() =>
                    sendWhatsApp("School Picnic Package")
                  }
                >
                  <i className="fab fa-whatsapp"></i>

                  Enquire for School Picnic

                  <i className="fas fa-arrow-right"></i>
                </button>

              </div>

            </div>


            {/* CORPORATE */}
            <div className="col-lg-5">

              <div className="om-pkg-corporate-card">

                <div className="om-pkg-corporate-pattern"></div>

                <div className="om-pkg-corporate-icon">
                  <i className="fas fa-users"></i>
                </div>

                <span className="om-pkg-corporate-label">
                  TEAM DAY OUT
                </span>

                <h2>
                  Corporate Picnic Packages
                </h2>

                <p>
                  Plan a refreshing team outing, corporate picnic or group
                  event surrounded by nature and countryside experiences.
                </p>

                <div className="om-pkg-custom-price">

                  <small>PACKAGE CHARGES</small>

                  <strong>
                    As Per Event
                  </strong>

                  <span>
                    Contact us for group requirements and package details.
                  </span>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    sendWhatsApp("Corporate Picnic Package")
                  }
                  className="om-pkg-corporate-button"
                >
                  <i className="fab fa-whatsapp"></i>
                  Get Corporate Package
                </button>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          EVENT PACKAGES
      ================================================== */}
      <section className="om-pkg-events">
        <div className="container">

          <div className="om-pkg-section-heading">

            <div className="om-pkg-heading-label">
              CELEBRATE WITH US
            </div>

            <h2>
              Packages for Your
              <span> Special Moments</span>
            </h2>

          </div>


          <div className="row g-4">

            {/* Wedding */}
            <div className="col-lg-6">

              <div className="om-pkg-event-card">

                <div className="om-pkg-event-icon">
                  <i className="fas fa-heart"></i>
                </div>

                <div className="om-pkg-event-content">

                  <span>CELEBRATIONS</span>

                  <h3>
                    Wedding Destination Package
                  </h3>

                  <p>
                    Celebrate your special occasion in a refreshing
                    countryside setting at Om Agro Tourism.
                  </p>

                  <div className="om-pkg-event-price">
                    <small>PACKAGE DETAILS</small>
                    <strong>Provided on Call</strong>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    sendWhatsApp("Wedding Destination Package")
                  }
                  className="om-pkg-event-arrow"
                  aria-label="Enquire for wedding destination package"
                >
                  <i className="fas fa-arrow-right"></i>
                </button>

              </div>

            </div>


            {/* Pre Wedding */}
            <div className="col-lg-6">

              <div className="om-pkg-event-card">

                <div className="om-pkg-event-icon">
                  <i className="fas fa-camera"></i>
                </div>

                <div className="om-pkg-event-content">

                  <span>PHOTOSHOOT</span>

                  <h3>
                    Pre Wedding Shoot Package
                  </h3>

                  <p>
                    Capture memorable pre-wedding moments in the natural
                    surroundings of Om Agro Tourism.
                  </p>

                  <div className="om-pkg-event-details">

                    <div>
                      <small>DURATION</small>
                      <strong>2 Hours</strong>
                    </div>

                    <div>
                      <small>PACKAGE</small>
                      <strong>₹2,000</strong>
                    </div>

                  </div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    sendWhatsApp("Pre Wedding Shoot Package")
                  }
                  className="om-pkg-event-arrow"
                  aria-label="Enquire for pre wedding shoot package"
                >
                  <i className="fas fa-arrow-right"></i>
                </button>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}
      <section className="om-pkg-final">
        <div className="container">

          <div className="om-pkg-final-box">

            <div className="om-pkg-final-icon">
              <i className="fas fa-leaf"></i>
            </div>

            <div className="om-pkg-final-content">

              <span>
                NEED HELP CHOOSING A PACKAGE?
              </span>

              <h2>
                Plan Your Day at Om Agro Tourism
              </h2>

              <p>
                Connect with us for package details, group enquiries and
                visit planning.
              </p>

            </div>


            <div className="om-pkg-final-actions">

              <a
                href="tel:+917066665554"
                className="om-pkg-final-call"
              >
                <i className="fas fa-phone-alt"></i>

                <div>
                  <small>CALL US</small>
                  <strong>+91 70666 65554</strong>
                </div>
              </a>

              <a
                href="https://wa.me/917066665554"
                target="_blank"
                rel="noreferrer"
                className="om-pkg-final-whatsapp"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Packages;