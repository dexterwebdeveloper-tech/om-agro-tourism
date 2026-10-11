import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <><section className="inner-banner-wrap">
      <div
        className="inner-baner-container"
        style={{
          backgroundImage: "url('/images/inner-banner.jpeg')",
        }}
      >
        <div className="container">
          <div className="inner-banner-content">
            <h1 className="inner-title">
              Contact 
            </h1>
          </div>
        </div>
      </div>

      <div className="inner-shape"></div>
    </section>
   
    
    <section className="om-contact-section">

      <div className="container">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div
          className="om-contact-heading text-center"
          data-aos="fade-up"
        >
          <span className="om-contact-subtitle">
            GET IN TOUCH
          </span>

          <h2>
            Contact <span>Om Agro Tourism</span>
          </h2>

          <p>
            Planning a family picnic, school trip, corporate outing,
            event or relaxing day surrounded by nature? Get in touch
            with Om Agro Tourism for enquiries and booking information.
          </p>
        </div>


        {/* =========================
            CONTACT CARDS
        ========================== */}
        <div className="row g-4">

          {/* PHONE */}
          <div
            className="col-md-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="om-contact-card">

              <div className="om-contact-card-top">
                <span>01</span>

                <div className="om-contact-icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
              </div>

              <div className="om-contact-card-content">
                <span className="om-contact-card-label">
                  CALL US
                </span>

                <h3>Contact Number</h3>

                <div className="om-contact-phone-list">

                  <a href="tel:+917066665554">
                    +91 70666 65554
                  </a>

                  <span>/</span>

                  <a href="tel:+919145557771">
                    +91 91455 57771
                  </a>

                </div>

                <p>
                  Call us for booking and general enquiries.
                </p>
              </div>

            </div>
          </div>


          {/* EMAIL */}
          <div
            className="col-md-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="om-contact-card">

              <div className="om-contact-card-top">
                <span>02</span>

                <div className="om-contact-icon">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </div>
              </div>

              <div className="om-contact-card-content">
                <span className="om-contact-card-label">
                  EMAIL US
                </span>

                <h3>Email Address</h3>

                <a
                  href="mailto:omagrotourism.com@gmail.com"
                  className="om-contact-email"
                >
                  omagrotourism.com@gmail.com
                </a>

                <p>
                  Send your visit, event or booking enquiry by email.
                </p>
              </div>

            </div>
          </div>


          {/* ADDRESS */}
          <div
            className="col-md-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="om-contact-card">

              <div className="om-contact-card-top">
                <span>03</span>

                <div className="om-contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
              </div>

              <div className="om-contact-card-content">
                <span className="om-contact-card-label">
                  VISIT US
                </span>

                <h3>Our Address</h3>

                <address>
                  <strong>Om Agro Tourism</strong>
                  <br />
                  Bhivare Vadi Road, Ranmala,
                  <br />
                  Koyali Tarf Chakan, Tel Khed,
                  <br />
                  Pune, Maharashtra - 410501
                </address>
              </div>

            </div>
          </div>

        </div>


        {/* =========================
            MAP
        ========================== */}
        <div
          className="om-contact-map-wrapper"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <div className="om-contact-map-heading">

            <div>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                FIND US
              </span>

              <h3>
                Visit Om Agro Tourism
              </h3>

              <p>
                Bhivare Vadi Road, Ranmala, Koyali Tarf Chakan,
                Tel Khed, Pune, Maharashtra - 410501
              </p>
            </div>

            <div className="om-contact-map-pin">
              <i className="fa-solid fa-map-location-dot"></i>
            </div>

          </div>


          <div className="om-contact-map">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2878.510402877696!2d73.984824!3d18.710273!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQyJzM3LjIiTiA3M8KwNTknMTAuMSJF!5e1!3m2!1sen!2sin!4v1791214114872!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Om Agro Tourism Location"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
    </>
  );
};

export default ContactUs;