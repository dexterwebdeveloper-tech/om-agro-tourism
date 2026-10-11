import React from "react";
import "./Attractions.css";

const attractions = [
  {
    id: "01",
    title: "Farm Tours and Workshops",
    image: "/images/Attraction/Farm-Tours-and-Workshops.jpg",
    icon: "fa-solid fa-seedling",
    description:
      "Offer guided tours where visitors can learn about the daily operations of a working farm. These could include explanations of planting, harvesting, and animal care.",
  },
  {
    id: "02",
    title: "Swimming Pool",
    image: "/images/Attraction/Swimming-Pool.jpg",
    icon: "fa-solid fa-person-swimming",
    description:
      "Our spacious swimming pool provides the perfect setting to relax and unwind. Surrounded by lush greenery, the pool is an ideal spot to cool off and enjoy a peaceful swim.",
  },
  {
    id: "03",
    title: "Birds Watching",
    image: "/images/Attraction/Birds-Watching.jpg",
    icon: "fa-solid fa-binoculars",
    description:
      "Experience the joy of bird watching at Om Agro Tourism! Spot beautiful birds in their natural habitat and reconnect with nature.",
  },
  {
    id: "04",
    title: "Horse Riding",
    image: "/images/Attraction/Horse-Riding.jpg",
    icon: "fa-solid fa-horse",
    description:
      "Enjoy a peaceful horse riding experience through the scenic farm landscapes.",
  },
  {
    id: "05",
    title: "Tractor Ride",
    image: "/images/Attraction/Tractor-Ride.jpg",
    icon: "fa-solid fa-tractor",
    description:
      "Hop on a tractor ride and explore the farm in a unique way while enjoying the fresh air, greenery and beautiful countryside atmosphere.",
  },
  {
    id: "06",
    title: "Bull Cart Ride",
    image: "/images/Attraction/Bull-Cart-Ride.jpg",
    icon: "fa-solid fa-cart-flatbed",
    description:
      "Experience the charm of rural life with a traditional bull cart ride. This leisurely ride offers a unique way to explore the farm and enjoy the natural surroundings.",
  },
  {
    id: "07",
    title: "Tasty Home Made Food",
    image: "/images/Attraction/Tasty-home-made-food.jpg",
    icon: "fa-solid fa-utensils",
    description:
      "Savor the flavors of tasty homemade food at Om Agro Tourism! Enjoy authentic, farm-fresh meals made with love.",
  },
  {
    id: "08",
    title: "Boating",
    image: "/images/Attraction/Boating.jpg",
    icon: "fa-solid fa-sailboat",
    description:
      "Relax on a boat ride in our tranquil waters and enjoy the peaceful atmosphere and serene natural surroundings.",
  },
];

const Attractions = () => {
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
              Attractions 
            </h1>
          </div>
        </div>
      </div>

      <div className="inner-shape"></div>
    </section>

    <section className="om-attraction-section">

      <div className="container">

        {/* ============================
            HEADING
        ============================ */}

        <div
          className="om-attraction-heading text-center"
          data-aos="fade-up"
        >

          <span className="om-attraction-heading-small">
            EXPLORE • EXPERIENCE • ENJOY
          </span>

          <h2>
            Attractions at <span>Om Agro Tourism</span>
          </h2>

          <p>
            Discover farm life, outdoor adventures, traditional
            activities and relaxing experiences surrounded by nature.
          </p>

        </div>


        {/* ============================
            ATTRACTIONS
        ============================ */}

        <div className="row g-4">

          {attractions.map((item, index) => (

            <div
              className="col-lg-6"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={(index % 2) * 100}
            >

              <div className="om-attraction-item">

                {/* IMAGE */}

                <div className="om-attraction-photo">

                  <img
                    src={item.image}
                    alt={`${item.title} at Om Agro Tourism`}
                  />

                  <span className="om-attraction-count">
                    {item.id}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="om-attraction-details">

                  <div className="om-attraction-icon">
                    <i className={item.icon}></i>
                  </div>

                  <span className="om-attraction-label">
                    OM AGRO TOURISM
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <div className="om-attraction-bottom">

                    <span className="om-attraction-nature">
                      <i className="fa-solid fa-leaf"></i>
                      Nature Experience
                    </span>

                    <a
                      href="/contact"
                      className="om-attraction-arrow"
                      aria-label={`Enquire about ${item.title}`}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>

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
          className="om-attraction-cta"
          data-aos="fade-up"
        >

          <div className="om-attraction-cta-icon">
            <i className="fa-solid fa-tree"></i>
          </div>

          <div className="om-attraction-cta-content">

            <span>
              A DAY CLOSE TO NATURE
            </span>

            <h3>
              Plan a Fun-Filled Day at Om Agro Tourism
            </h3>

            <p>
              Enjoy farm activities, outdoor experiences, delicious
              food and memorable moments with family and friends.
            </p>

          </div>

          <a
            href="/contact"
            className="om-attraction-cta-btn"
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

export default Attractions;