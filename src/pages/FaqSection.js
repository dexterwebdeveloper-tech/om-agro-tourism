import React, { useState } from "react";
import "./FaqSection.css";

const faqData = [
  {
    id: 1,
    question: "What is Om Agro Tourism?",
    answer:
      "Om Agro Tourism is an agro-tourism destination near Pune where families, students, groups and corporate visitors can enjoy farm experiences, nature, recreational activities, homemade food and a relaxing countryside environment.",
  },
  {
    id: 2,
    question: "Where is Om Agro Tourism located?",
    answer:
      "Om Agro Tourism is located at Bhivare Vadi Road, Ranmala, Koyali Tarf Chakan, Taluka Khed, Pune, Maharashtra - 410501.",
  },
  {
    id: 3,
    question: "What activities are available at Om Agro Tourism?",
    answer:
      "Visitors can enjoy Water Park activities, Swimming Pool, Bull Cart Ride, Horse Riding, Tractor Ride, Jungle Safari, Indoor and Outdoor Games, Boating and other farm-based experiences.",
  },
  {
    id: 4,
    question: "Is Om Agro Tourism suitable for a family picnic?",
    answer:
      "Yes. Om Agro Tourism offers activities and open spaces suitable for families looking for a one-day picnic, weekend outing or relaxing day surrounded by nature.",
  },
  {
    id: 5,
    question: "Do you arrange school and student picnics?",
    answer:
      "Om Agro Tourism can be considered for school and student group outings, with farm experiences, outdoor activities, games and opportunities to spend time close to nature. Contact our team for group arrangements.",
  },
  {
    id: 6,
    question: "Is Om Agro Tourism suitable for corporate outings?",
    answer:
      "Yes. Corporate groups can contact Om Agro Tourism for outings, get-togethers, team activities, corporate events and corporate party requirements.",
  },
  {
    id: 7,
    question: "Can I organize a birthday party at Om Agro Tourism?",
    answer:
      "Yes. Om Agro Tourism welcomes enquiries for birthday celebrations. You can contact our team with your preferred date, number of guests and requirements for further details.",
  },
  {
    id: 8,
    question: "Can I plan a destination wedding or pre-wedding photoshoot?",
    answer:
      "You can contact Om Agro Tourism regarding destination wedding events, pre-wedding photoshoots, get-togethers and other celebrations. Availability and arrangements should be confirmed with our team.",
  },
  {
    id: 9,
    question: "What type of food is available at Om Agro Tourism?",
    answer:
      "Visitors can enjoy tasty homemade food and authentic farm-style meals. For menu options, group meals or special requirements, please confirm the available choices while making your enquiry.",
  },
  {
    id: 10,
    question: "Is a swimming pool available?",
    answer:
      "Yes. A swimming pool is one of the attractions at Om Agro Tourism, providing visitors with a refreshing recreational activity during their visit.",
  },
  {
    id: 11,
    question: "Is boating available at Om Agro Tourism?",
    answer:
      "Yes. Boating is included among the activities offered at Om Agro Tourism, allowing visitors to enjoy a relaxing experience during their outing.",
  },
  {
    id: 12,
    question: "Are horse riding, tractor rides and bull cart rides available?",
    answer:
      "Yes. Horse Riding, Tractor Ride and Bull Cart Ride are among the farm and recreational experiences listed at Om Agro Tourism.",
  },
  {
    id: 13,
    question: "Which nearby places can we visit?",
    answer:
      "Nearby places include Alandi Devachi, Sambhaji Maharaj Samadhi, Chakan Fort, Morachi Chincholi, Pabal Vigyan Ashram, Pabal Mastani Mahal, Mahaganpati Ranjangaon and Rajgurunagar.",
  },
  {
    id: 14,
    question: "How can I make an enquiry or plan my visit?",
    answer:
      "You can contact Om Agro Tourism on +91 70666 65554 or +91 91455 57771. You can also use the website enquiry form or WhatsApp option to send your visit details.",
  },
];

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
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
              Faqs 
            </h1>
          </div>
        </div>
      </div>

      <div className="inner-shape"></div>
    </section>
   

    <section className="om-faq-section">
      <div className="container">

        {/* =========================
            TOP HEADING
        ========================== */}
        <div className="om-faq-header">

          <div className="om-faq-heading-left">
            <span className="om-faq-subtitle">
              QUESTIONS & ANSWERS
            </span>

            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>
          </div>

          <div className="om-faq-heading-right">
            <p>
              Find helpful information about activities, family picnics,
              corporate outings, events, food, nearby places and planning
              your visit to Om Agro Tourism.
            </p>
          </div>

        </div>


        {/* =========================
            MAIN FAQ AREA
        ========================== */}
        <div className="row g-4 align-items-start">

          {/* LEFT INFO CARD */}
          <div className="col-lg-4">

            <div className="om-faq-info-card">

              <span className="om-faq-small-title">
                PLAN YOUR DAY
              </span>

              <h3>
                Looking for a Fun Day Close to Nature?
              </h3>

              <p>
                Explore farm experiences, water activities, games,
                rides and relaxing outdoor experiences at Om Agro Tourism.
              </p>


              <div className="om-faq-feature">
                <div className="om-faq-feature-icon">
                  <i className="fa-solid fa-water-ladder"></i>
                </div>

                <div>
                  <strong>Water & Pool Activities</strong>
                  <span>Fun and refreshing experiences</span>
                </div>
              </div>


              <div className="om-faq-feature">
                <div className="om-faq-feature-icon">
                  <i className="fa-solid fa-tractor"></i>
                </div>

                <div>
                  <strong>Farm Experiences</strong>
                  <span>Enjoy the countryside atmosphere</span>
                </div>
              </div>


              <div className="om-faq-feature">
                <div className="om-faq-feature-icon">
                  <i className="fa-solid fa-people-group"></i>
                </div>

                <div>
                  <strong>Family & Group Outings</strong>
                  <span>Plan memorable time together</span>
                </div>
              </div>


              <a
                href="https://wa.me/917066665554"
                target="_blank"
                rel="noreferrer"
                className="om-faq-whatsapp-btn"
              >
                <i className="fa-brands fa-whatsapp"></i>
                Enquire on WhatsApp
              </a>

            </div>

          </div>


          {/* RIGHT FAQ */}
          <div className="col-lg-8">

            <div className="om-faq-list">

              {faqData.map((faq, index) => {

                const isOpen = activeFaq === index;

                return (
                  <div
                    className={`om-faq-item ${
                      isOpen ? "om-faq-active" : ""
                    }`}
                    key={faq.id}
                  >

                    <button
                      type="button"
                      className="om-faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >

                      <span className="om-faq-question-number">
                        {String(faq.id).padStart(2, "0")}
                      </span>

                      <span className="om-faq-question-text">
                        {faq.question}
                      </span>

                      <span className="om-faq-toggle">
                        <i
                          className={
                            isOpen
                              ? "fa-solid fa-minus"
                              : "fa-solid fa-plus"
                          }
                        ></i>
                      </span>

                    </button>


                    <div
                      className={`om-faq-answer ${
                        isOpen ? "show" : ""
                      }`}
                    >
                      <div className="om-faq-answer-inner">

                        <div className="om-faq-answer-line"></div>

                        <p>{faq.answer}</p>

                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM HELP BAR
        ========================== */}
        <div className="om-faq-bottom">

          <div className="om-faq-bottom-icon">
            <i className="fa-solid fa-circle-question"></i>
          </div>

          <div className="om-faq-bottom-content">
            <span>STILL HAVE A QUESTION?</span>

            <h4>
              Talk to the Om Agro Tourism Team
            </h4>

            <p>
              Contact us for visit enquiries, group bookings,
              events and other information.
            </p>
          </div>

          <div className="om-faq-bottom-contact">

            <a href="tel:+917066665554">
              <i className="fa-solid fa-phone"></i>

              <div>
                <span>Call Us</span>
                <strong>+91 70666 65554</strong>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
</>
  );
};

export default FaqSection;