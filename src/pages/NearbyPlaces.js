import React from "react";
import "./NearbyPlaces.css";

const nearbyPlaces = [
  {
    id: "01",
    name: "Alandi Devachi",
    image: "/images/NearbyPlaces/Alandi-Devachi.png",
    category: "Pilgrimage",
    icon: "fa-solid fa-place-of-worship",
    description:
      "Alandi is a prominent pilgrimage destination near Pune, known for the Samadhi of Sant Dnyaneshwar Maharaj. Its spiritual atmosphere and peaceful surroundings make it a meaningful place to visit.",
  },

  {
    id: "02",
    name: "Sambhaji Maharaj Samadhi, Pune",
    image: "/images/NearbyPlaces/Sambhaji-Maharaj-Samadhi-Pune.png",
    category: "Historical Place",
    icon: "fa-solid fa-landmark",
    description:
      "Sambhaji Maharaj Samadhi is an important historical and cultural destination connected with Chhatrapati Sambhaji Maharaj and the rich heritage of Maharashtra.",
  },

  {
    id: "03",
    name: "Chakan Fort",
    image: "/images/NearbyPlaces/Chakan-Fort.png",
    category: "Historic Fort",
    icon: "fa-solid fa-fort-awesome",
    description:
      "Explore the historic Chakan Fort and discover a destination associated with Maharashtra's rich history, old fortifications and the heritage of the region.",
  },

  {
    id: "04",
    name: "Morachi Chincholi",
    image: "/images/NearbyPlaces/Morachi-Chincholi.png",
    category: "Nature & Wildlife",
    icon: "fa-solid fa-feather",
    description:
      "Morachi Chincholi is known for its beautiful natural surroundings and peacocks. It is an enjoyable destination for nature lovers, families and birdwatching enthusiasts.",
  },

  {
    id: "05",
    name: "Pabal Vigyan Ashram",
    image: "/images/NearbyPlaces/Pabal-Vigyan-Ashram.png",
    category: "Educational",
    icon: "fa-solid fa-flask",
    description:
      "Pabal Vigyan Ashram offers an educational experience focused on rural innovation, practical learning, sustainable living, farming and technology.",
  },

  {
    id: "06",
    name: "Pabal Mastani Mahal",
    image: "/images/NearbyPlaces/Pabal-Mastani-Mahal.png",
    category: "Heritage",
    icon: "fa-solid fa-monument",
    description:
      "Pabal Mastani Mahal is associated with the historic story of Mastani and Bajirao I. The heritage site offers visitors an opportunity to explore an interesting chapter of Maratha history.",
  },

  {
    id: "07",
    name: "Mahaganpati Ranjangaon Darshan",
    image: "/images/NearbyPlaces/mahaganpati-ranjangaon-Darshan.png",
    category: "Ashtavinayak",
    icon: "fa-solid fa-om",
    description:
      "Mahaganpati Temple at Ranjangaon is one of the revered Ashtavinayak temples of Lord Ganesha and is a popular spiritual destination for devotees visiting the region.",
  },

  {
    id: "08",
    name: "Rajgurunagar",
    image: "/images/NearbyPlaces/rajgurunagar.png",
    category: "Heritage Town",
    icon: "fa-solid fa-location-dot",
    description:
      "Rajgurunagar, also known as Khed, is a historically significant town near Pune and offers visitors an opportunity to explore the culture and heritage of the region.",
  },

  {
    id: "09",
    name: "Malanga Kund Nighoj",
    image: "/images/NearbyPlaces/malganga-kund-nighoj.png",
    category: "Natural Attraction",
    icon: "fa-solid fa-water",
    description:
      "Malganga Kund at Nighoj is a distinctive natural attraction known for its fascinating rock formations and scenic surroundings.",
  },
];

const NearbyPlaces = () => {
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
              Nearby Places 
            </h1>
          </div>
        </div>
      </div>

      <div className="inner-shape"></div>
    </section>
    
    <section className="om-nearby-section">

      <div className="container">

        {/* =========================
            HEADING
        ========================== */}

        <div className="om-nearby-heading">

          <div
            className="om-nearby-heading-left"
            data-aos="fade-right"
          >
            <span className="om-nearby-subtitle">
              EXPLORE AROUND US
            </span>

            <h2>
              Nearby Places to
              <span> Explore</span>
            </h2>
          </div>


          <div
            className="om-nearby-heading-right"
            data-aos="fade-left"
          >
            <p>
              Make your visit to Om Agro Tourism even more memorable
              by exploring nearby pilgrimage destinations, historical
              landmarks, heritage places and natural attractions.
            </p>
          </div>

        </div>


        {/* =========================
            PLACES GRID
        ========================== */}

        <div className="row g-4 justify-content-center">

          {nearbyPlaces.map((place, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={place.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >

              <div className="om-nearby-card">

                {/* IMAGE */}

                <div className="om-nearby-image">

                  <img
                    src={place.image}
                    alt={`${place.name} near Om Agro Tourism`}
                  />


                  {/* NUMBER */}

                  <span className="om-nearby-number">
                    {place.id}
                  </span>


                  {/* CATEGORY */}

                  <span className="om-nearby-category">
                    {place.category}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="om-nearby-content">

                  <div className="om-nearby-title-row">

                    <div className="om-nearby-icon">
                      <i className={place.icon}></i>
                    </div>

                    <h3>
                      {place.name}
                    </h3>

                  </div>


                  <p>
                    {place.description}
                  </p>


                  <div className="om-nearby-bottom">

                    <a
                      href="/contact"
                      className="om-nearby-link"
                    >
                      Plan Your Visit

                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>


                    <div className="om-nearby-leaf">
                      <i className="fa-solid fa-leaf"></i>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* =========================
            BOTTOM CTA
        ========================== */}

        <div
          className="om-nearby-cta"
          data-aos="fade-up"
        >

          <div className="om-nearby-cta-icon">
            <i className="fa-solid fa-map-location-dot"></i>
          </div>


          <div className="om-nearby-cta-content">

            <span>
              DISCOVER MORE AROUND PUNE
            </span>

            <h3>
              Make Your Om Agro Tourism Visit More Memorable
            </h3>

            <p>
              Combine your farm experience with nearby spiritual,
              historical, cultural and nature destinations.
            </p>

          </div>


          <a
            href="/contact"
            className="om-nearby-cta-btn"
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

export default NearbyPlaces;