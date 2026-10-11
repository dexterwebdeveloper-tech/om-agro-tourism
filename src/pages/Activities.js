import React from "react";
import "./Activities.css";

const activities = [
  {
    id: 1,
    title: "Water Park Activities",
    image: "/images/Activities/Water-Park-Activities.png",
    icon: "fa-solid fa-water-ladder",
    tag: "Water Fun",
    description:
      "Enjoy refreshing water park activities with family and friends for a fun-filled and memorable day.",
  },
  {
    id: 2,
    title: "Swimming Pool",
    image: "/images/Activities/Swimming-Pool.png",
    icon: "fa-solid fa-person-swimming",
    tag: "Relax & Refresh",
    description:
      "Cool off and enjoy a refreshing swimming experience surrounded by the peaceful atmosphere of Om Agro Tourism.",
  },
  {
    id: 3,
    title: "Bull Cart Ride",
    image: "/images/Activities/Bull-Cart.png",
    icon: "fa-solid fa-cart-flatbed",
    tag: "Rural Experience",
    description:
      "Experience traditional village life with an enjoyable bull cart ride through the beautiful farm surroundings.",
  },
  {
    id: 4,
    title: "Horse Riding",
    image: "/images/Activities/Horse-Riding.png",
    icon: "fa-solid fa-horse",
    tag: "Adventure",
    description:
      "Enjoy horse riding through scenic surroundings and add a memorable countryside adventure to your visit.",
  },
  {
    id: 5,
    title: "Tractor Ride",
    image: "/images/Activities/Tractor-Ride.png",
    icon: "fa-solid fa-tractor",
    tag: "Farm Experience",
    description:
      "Explore the farm on a fun tractor ride and experience the charm of agriculture and countryside life.",
  },
  {
    id: 6,
    title: "Jungle Safari",
    image: "/images/Activities/Jungle-Safari.png",
    icon: "fa-solid fa-tree",
    tag: "Explore Nature",
    description:
      "Explore natural surroundings with an exciting jungle safari experience and enjoy a closer connection with nature.",
  },
  {
    id: 7,
    title: "Indoor & Outdoor Games",
    image: "/images/Activities/Indore-Outdoor-Game.png",
    icon: "fa-solid fa-volleyball",
    tag: "Play Together",
    description:
      "Spend quality time with family, friends and groups while enjoying entertaining indoor and outdoor games.",
  },
  {
    id: 8,
    title: "Boating",
    image: "/images/Activities/Boating.png",
    icon: "fa-solid fa-sailboat",
    tag: "Peaceful Moments",
    description:
      "Enjoy a relaxing boating experience surrounded by calm water, fresh air and beautiful natural scenery.",
  },
];

const Activities = () => {
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
              Activities 
            </h1>
          </div>
        </div>
      </div>

      <div className="inner-shape"></div>
    </section>
   
    <section className="om-activities-section">

      <div className="container">

        {/* HEADING */}
        <div
          className="om-activities-heading"
          data-aos="fade-up"
        >

          <div className="om-activities-heading-left">

            <span className="om-activities-small-title">
              FUN FOR EVERYONE
            </span>

            <h2>
              Activities at
              <span> Om Agro Tourism</span>
            </h2>

          </div>

          <div className="om-activities-heading-right">

            <p>
              Make your day more exciting with refreshing water
              activities, traditional farm experiences, adventure,
              games and relaxing outdoor activities for family and
              friends.
            </p>

          </div>

        </div>


        {/* ACTIVITIES */}
        <div className="row g-4 justify-content-center">

          {activities.map((activity, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={activity.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >

              <div className="om-activity-card">

                {/* IMAGE */}
                <div className="om-activity-card-image">

                  <img
                    src={activity.image}
                    alt={`${activity.title} at Om Agro Tourism`}
                  />

                  <span className="om-activity-number">
                    {String(activity.id).padStart(2, "0")}
                  </span>

                  <span className="om-activity-tag">
                    {activity.tag}
                  </span>

                </div>


                {/* FLOATING ICON */}
                <div className="om-activity-icon">
                  <i className={activity.icon}></i>
                </div>


                {/* CONTENT */}
                <div className="om-activity-card-content">

                  <h3>
                    {activity.title}
                  </h3>

                  <p>
                    {activity.description}
                  </p>


                  <div className="om-activity-card-footer">

                    <span>
                      <i className="fa-solid fa-leaf"></i>
                      Om Agro Tourism
                    </span>

                    <a
                      href="/contact-us"
                      aria-label={`Enquire about ${activity.title}`}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* BOTTOM CTA */}
        <div
          className="om-activities-cta"
          data-aos="fade-up"
        >

          <div className="om-activities-cta-left">

            <div className="om-activities-cta-icon">
              <i className="fa-solid fa-person-hiking"></i>
            </div>

            <div>

              <span>
                ENJOY • PLAY • EXPLORE
              </span>

              <h3>
                A Full Day of Fun, Adventure & Nature
              </h3>

              <p>
                Plan your visit and enjoy exciting activities with
                your family, friends, school group or corporate team.
              </p>

            </div>

          </div>


          <a
            href="/contact"
            className="om-activities-cta-button"
          >
            Plan Your Visit

            <i className="fa-solid fa-arrow-right-long"></i>
          </a>

        </div>

      </div>

    </section>
   </>
  );
};

export default Activities;