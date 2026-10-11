import React, { useState } from "react";
import "./EnquiryForm.css";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
    guests: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917066665554";

    const whatsappMessage = `Hello Om Agro Tourism,

I would like to make an enquiry.

*Name:* ${formData.name}
*Mobile Number:* ${formData.phone}
*Email:* ${formData.email || "Not Provided"}
*Visit / Event Date:* ${formData.visitDate}
*Number of Guests:* ${formData.guests}
*Enquiry For:* ${formData.enquiryType}

*Message:*
${formData.message || "No additional message"}

Please share availability, package details and booking information.

Thank You.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

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
              ENQUIRY 
            </h1>
          </div>
        </div>
      </div>

      <div className="inner-shape"></div>
    </section>
   
    <section className="om-enquiry-section">

      {/* BACKGROUND DECORATION */}
      <div className="om-enquiry-circle om-enquiry-circle-one"></div>
      <div className="om-enquiry-circle om-enquiry-circle-two"></div>

      <div className="container">

        <div className="om-enquiry-wrapper">

          <div className="row g-0">

            {/* =====================================
                LEFT INFORMATION
            ====================================== */}

            <div className="col-lg-5">

              <div className="om-enquiry-info">

                <div className="om-enquiry-info-content">

                  <span
                    className="om-enquiry-small-title"
                    data-aos="fade-up"
                  >
                    PLAN YOUR VISIT
                  </span>

                  <h2 data-aos="fade-up" data-aos-delay="100">
                    Make Your Day
                    <span> Memorable With Us</span>
                  </h2>

                  <p
                    className="om-enquiry-intro"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Planning a family outing, school picnic, corporate
                    event or special celebration? Send us your details
                    and connect with Om Agro Tourism directly on
                    WhatsApp.
                  </p>


                  {/* FEATURES */}

                  <div className="om-enquiry-features">

                    <div className="om-enquiry-feature">

                      <div className="om-enquiry-feature-icon">
                        <i className="fa-solid fa-tree"></i>
                      </div>

                      <div>
                        <h4>Nature & Farm Experience</h4>
                        <p>
                          Enjoy a refreshing day surrounded by nature.
                        </p>
                      </div>

                    </div>


                    <div className="om-enquiry-feature">

                      <div className="om-enquiry-feature-icon">
                        <i className="fa-solid fa-person-swimming"></i>
                      </div>

                      <div>
                        <h4>Activities & Water Fun</h4>
                        <p>
                          Enjoy exciting activities for family and groups.
                        </p>
                      </div>

                    </div>


                    <div className="om-enquiry-feature">

                      <div className="om-enquiry-feature-icon">
                        <i className="fa-solid fa-people-group"></i>
                      </div>

                      <div>
                        <h4>Groups & Events</h4>
                        <p>
                          Enquire for picnics, events and group visits.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>


                {/* PHONE */}

                <div className="om-enquiry-contact">

                  <div className="om-enquiry-contact-icon">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>

                  <div>
                    <span>WhatsApp Enquiry</span>

                    <a href="https://wa.me/917066665554">
                      +91 70666 65554
                    </a>
                  </div>

                </div>

              </div>

            </div>


            {/* =====================================
                RIGHT FORM
            ====================================== */}

            <div className="col-lg-7">

              <div className="om-enquiry-form-area">

                <div className="om-enquiry-form-heading">

                  <span>QUICK ENQUIRY</span>

                  <h3>
                    Tell Us About Your Plan
                  </h3>

                  <p>
                    Fill in the details below and submit your enquiry
                    directly through WhatsApp.
                  </p>

                </div>


                <form onSubmit={handleSubmit}>

                  <div className="row g-3">

                    {/* NAME */}

                    <div className="col-md-6">

                      <div className="om-enquiry-field">

                        <label>
                          Your Name
                          <span>*</span>
                        </label>

                        <div className="om-enquiry-input">

                          <i className="fa-regular fa-user"></i>

                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                          />

                        </div>

                      </div>

                    </div>


                    {/* PHONE */}

                    <div className="col-md-6">

                      <div className="om-enquiry-field">

                        <label>
                          Mobile Number
                          <span>*</span>
                        </label>

                        <div className="om-enquiry-input">

                          <i className="fa-solid fa-phone"></i>

                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter mobile number"
                            required
                          />

                        </div>

                      </div>

                    </div>


                    {/* EMAIL */}

                    <div className="col-md-6">

                      <div className="om-enquiry-field">

                        <label>
                          Email Address
                        </label>

                        <div className="om-enquiry-input">

                          <i className="fa-regular fa-envelope"></i>

                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                          />

                        </div>

                      </div>

                    </div>


                    {/* DATE */}

                    <div className="col-md-6">

                      <div className="om-enquiry-field">

                        <label>
                          Visit / Event Date
                          <span>*</span>
                        </label>

                        <div className="om-enquiry-input">

                          <i className="fa-regular fa-calendar"></i>

                          <input
                            type="date"
                            name="visitDate"
                            value={formData.visitDate}
                            onChange={handleChange}
                            required
                          />

                        </div>

                      </div>

                    </div>


                    {/* GUESTS */}

                    <div className="col-md-6">

                      <div className="om-enquiry-field">

                        <label>
                          Number of Guests
                          <span>*</span>
                        </label>

                        <div className="om-enquiry-input">

                          <i className="fa-solid fa-users"></i>

                          <input
                            type="number"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            placeholder="Number of guests"
                            min="1"
                            required
                          />

                        </div>

                      </div>

                    </div>


                    {/* ENQUIRY TYPE */}

                    <div className="col-md-6">

                      <div className="om-enquiry-field">

                        <label>
                          Enquiry For
                          <span>*</span>
                        </label>

                        <div className="om-enquiry-input">

                          <i className="fa-solid fa-list-check"></i>

                          <select
                            name="enquiryType"
                            value={formData.enquiryType}
                            onChange={handleChange}
                            required
                          >
                            <option value="">
                              Select Enquiry Type
                            </option>

                            <option value="One Day Picnic">
                              One Day Picnic
                            </option>

                            <option value="Family Picnic">
                              Family Picnic
                            </option>

                            <option value="School Picnic">
                              School Picnic
                            </option>

                            <option value="Corporate Outing">
                              Corporate Outing
                            </option>

                            <option value="Corporate Event">
                              Corporate Event
                            </option>

                            <option value="Birthday Celebration">
                              Birthday Celebration
                            </option>

                            <option value="Destination Wedding">
                              Destination Wedding
                            </option>

                            <option value="Pre Wedding Photoshoot">
                              Pre Wedding Photoshoot
                            </option>

                            <option value="Get Together">
                              Get Together
                            </option>

                            <option value="Activities">
                              Activities
                            </option>

                            <option value="Other">
                              Other
                            </option>

                          </select>

                        </div>

                      </div>

                    </div>


                    {/* MESSAGE */}

                    <div className="col-12">

                      <div className="om-enquiry-field">

                        <label>
                          Your Message
                        </label>

                        <div className="om-enquiry-input om-enquiry-textarea">

                          <i className="fa-regular fa-message"></i>

                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us anything else about your visit, event or requirements..."
                            rows="5"
                          ></textarea>

                        </div>

                      </div>

                    </div>


                    {/* SUBMIT */}

                    <div className="col-12">

                      <button
                        type="submit"
                        className="om-enquiry-submit"
                      >
                        <span className="om-enquiry-submit-whatsapp">
                          <i className="fa-brands fa-whatsapp"></i>
                        </span>

                        Send Enquiry on WhatsApp

                        <i className="fa-solid fa-arrow-right-long"></i>
                      </button>

                    </div>

                  </div>

                </form>


                <div className="om-enquiry-note">

                  <i className="fa-solid fa-shield-heart"></i>

                  <span>
                    Your enquiry details will be sent directly to
                    Om Agro Tourism through WhatsApp.
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
</>
  );
};

export default EnquiryForm;