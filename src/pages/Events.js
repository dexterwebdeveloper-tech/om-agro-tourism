import React from "react";
import "./Events.css";

const events = [
  {
    id: "01",
    title: "Destination Wedding Near Pune",
    image: "/images/Events/Destination-Wedding-Near-Pune.png",
    icon: "fa-solid fa-heart",
    category: "Wedding Celebration",
    description:
      "Celebrate your special day surrounded by peaceful greenery and a refreshing countryside atmosphere at Om Agro Tourism near Pune.",
  },
  {
    id: "02",
    title: "Corporate Events in Pune",
    image: "/images/Events/Corporate-Events-in-Pune.png",
    icon: "fa-solid fa-briefcase",
    category: "Corporate Event",
    description:
      "Plan corporate gatherings, team outings, meetings and group activities in a refreshing environment away from the busy city.",
  },
  {
    id: "03",
    title: "Birthday Party Celebration Near Pune",
    image: "/images/Events/Birthday-Party-Celebration-Near-Pune.png",
    icon: "fa-solid fa-cake-candles",
    category: "Birthday Celebration",
    description:
      "Make birthdays more memorable with outdoor fun, farm activities, delicious food and quality time with family and friends.",
  },
  {
    id: "04",
    title: "Pre Wedding Photoshoot Places in Pune",
    image: "/images/Events/Pre-Wedding-Photoshoot-Places-in-Pune.png",
    icon: "fa-solid fa-camera",
    category: "Pre Wedding",
    description:
      "Capture beautiful pre-wedding moments surrounded by greenery, natural landscapes and charming countryside settings.",
  },
  {
    id: "05",
    title: "Get Together Near Pune",
    image: "/images/Events/Get-Together-Near-Pune.png",
    icon: "fa-solid fa-people-group",
    category: "Family & Friends",
    description:
      "Reconnect with family and friends in a peaceful setting with food, activities, open spaces and enjoyable group experiences.",
  },
  {
    id: "06",
    title: "Corporate Party Places in Pune",
    image: "/images/Events/Corporate-Party-Places-in-Pune.png",
    icon: "fa-solid fa-champagne-glasses",
    category: "Corporate Party",
    description:
      "Bring your team together for corporate parties, celebrations and outings with activities, food and relaxing outdoor surroundings.",
  },
];

const Events = () => {
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
              Events 
            </h1>
          </div>
        </div>
      </div>

      <div className="inner-shape"></div>
    </section>
   
    <section className="om-events-section">

      <div className="container">

        {/* ============================
            SECTION HEADING
        ============================ */}

        <div className="om-events-heading">

          <div
            className="om-events-heading-left"
            data-aos="fade-right"
          >
            <span className="om-events-subtitle">
              CELEBRATE WITH US
            </span>

            <h2>
              Events at
              <span> Om Agro Tourism</span>
            </h2>
          </div>


          <div
            className="om-events-heading-right"
            data-aos="fade-left"
          >
            <p>
              From weddings and birthdays to corporate events and
              family get-togethers, celebrate your special moments
              surrounded by nature at Om Agro Tourism.
            </p>
          </div>

        </div>


        {/* ============================
            EVENT CARDS
        ============================ */}

        <div className="row g-4">

          {events.map((event, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={event.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >

              <div className="om-event-card">

                {/* IMAGE */}
                <div className="om-event-image">

                  <img
                    src={event.image}
                    alt={`${event.title} - Om Agro Tourism`}
                  />

                  {/* NUMBER */}
                  <div className="om-event-number">
                    {event.id}
                  </div>


                  {/* CATEGORY */}
                  <div className="om-event-category">
                    {event.category}
                  </div>

                </div>


                {/* CONTENT */}
                <div className="om-event-content">

                  {/* ICON */}
                  <div className="om-event-icon">
                    <i className={event.icon}></i>
                  </div>


                  <h3>
                    {event.title}
                  </h3>


                  <p>
                    {event.description}
                  </p>


                  {/* BOTTOM */}
                  <div className="om-event-bottom">

                    <a
                      href="/contact-us"
                      className="om-event-link"
                    >
                      Plan This Event
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>

                    <span className="om-event-leaf">
                      <i className="fa-solid fa-leaf"></i>
                    </span>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ============================
            BOTTOM CTA
        ============================ */}

        <div
          className="om-events-cta"
          data-aos="fade-up"
        >

          <div className="om-events-cta-left">

            <span className="om-events-cta-small">
              MAKE YOUR OCCASION SPECIAL
            </span>

            <h3>
              Planning an Event Near Pune?
            </h3>

            <p>
              Celebrate weddings, birthdays, corporate gatherings,
              get-togethers and special occasions at Om Agro Tourism.
            </p>

          </div>


          <a
            href="/contact"
            className="om-events-cta-btn"
          >
            Enquire for Events

            <i className="fa-solid fa-arrow-right-long"></i>
          </a>

        </div>

      </div>

    </section>
    </>
  );
};

export default Events;