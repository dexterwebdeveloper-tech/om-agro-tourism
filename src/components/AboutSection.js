import React from "react";
import Slider from "react-slick";
import {
  FaTractor,
  FaTree,
  FaLeaf,
  FaUsers,
  FaGraduationCap,
  FaCampground,
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSection = () => {
  // Client slider settings
  const clientSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* =========================
          INNER BANNER
      ========================== */}
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
                About Om Agro Tourism
              </h1>
            </div>
          </div>
        </div>

        <div className="inner-shape"></div>
      </section>

      <section className="about-section about-page-section">

        {/* =========================
            ABOUT SERVICE SECTION
        ========================== */}
        <div className="about-service-wrap">
          <div className="container">

            {/* Section Heading */}
            <div className="section-heading">
              <div className="row align-items-end">

                <div className="col-lg-6">
                  <h5 className="dash-style">
                    ABOUT OM AGRO TOURISM
                  </h5>

                  <h2>
                    EXPERIENCE NATURE, FARM LIFE & FUN NEAR PUNE
                  </h2>
                </div>

                <div className="col-lg-6">
                  <div className="section-disc">

                    <p>
                      Om Agro Tourism offers a refreshing countryside
                      experience where families, friends, students and
                      groups can spend quality time close to nature.
                      Enjoy a relaxing environment along with exciting
                      farm and recreational activities.
                    </p>

                    <p>
                      From swimming, boating and water park activities
                      to tractor rides, bull cart rides, horse riding
                      and outdoor games, there are plenty of ways to
                      make your visit enjoyable and memorable.
                    </p>

                  </div>
                </div>

              </div>
            </div>

            {/* =========================
                SERVICES
            ========================== */}
            <div className="about-service-container">
              <div className="row">

                {/* Service 1 */}
                <div className="col-lg-4">
                  <div className="about-service">

                    <div className="about-service-icon">
                      <img
                        src="/images/icon15.png"
                        alt="Nature Experience"
                      />
                    </div>

                    <div className="about-service-content">
                      <h4>
                        NATURE EXPERIENCE
                      </h4>

                      <p>
                        Relax in a peaceful countryside atmosphere
                        surrounded by greenery, fresh air and natural
                        surroundings.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Service 2 */}
                <div className="col-lg-4">
                  <div className="about-service">

                    <div className="about-service-icon">
                      <img
                        src="/images/icon16.png"
                        alt="Fun Activities"
                      />
                    </div>

                    <div className="about-service-content">
                      <h4>
                        FUN ACTIVITIES
                      </h4>

                      <p>
                        Enjoy water activities, swimming, boating,
                        tractor rides, bull cart rides, horse riding
                        and indoor-outdoor games.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Service 3 */}
                <div className="col-lg-4">
                  <div className="about-service">

                    <div className="about-service-icon">
                      <img
                        src="/images/icon17.png"
                        alt="Group Experiences"
                      />
                    </div>

                    <div className="about-service-content">
                      <h4>
                        MEMORABLE GROUP EXPERIENCES
                      </h4>

                      <p>
                        A refreshing setting for family outings,
                        school picnics, corporate gatherings,
                        celebrations and group get-togethers.
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* =========================
                VIDEO
            ========================== */}
            <div
              className="about-video-wrap"
              style={{
                backgroundImage: "url('/images/img25.jpg')",
              }}
            >
              {/* <div className="video-button">
                <a
                  id="video-container"
                  href="https://www.youtube.com/watch?v=IUN664s7N-c"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Watch Om Agro Tourism Video"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div> */}
            </div>

          </div>
        </div>

        {/* =========================
            CLIENT / EXPERIENCE SECTION
        ========================== */}
       <div className="client-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="section-heading text-center">
          <h5 className="dash-style">OUR EXPERIENCES</h5>
          <h2>FUN, NATURE & MEMORABLE MOMENTS</h2>
          <p>
            Discover different experiences at Om Agro Tourism
            designed for families, friends, students, corporate
            groups and visitors looking to enjoy a refreshing
            break away from busy city life.
          </p>
        </div>
      </div>
    </div>

    <div className="client-wrap client-slider">
      <Slider {...clientSettings}>
        <div className="client-item">
          <FaTractor className="agro-icon" />
          <h5>Farm Activities</h5>
        </div>

        <div className="client-item">
          <FaTree className="agro-icon" />
          <h5>Nature Experience</h5>
        </div>

        <div className="client-item">
          <FaLeaf className="agro-icon" />
          <h5>Agro Tourism</h5>
        </div>

        <div className="client-item">
          <FaUsers className="agro-icon" />
          <h5>Family Outings</h5>
        </div>

        <div className="client-item">
          <FaGraduationCap className="agro-icon" />
          <h5>Educational Trips</h5>
        </div>

        <div className="client-item">
          <FaCampground className="agro-icon" />
          <h5>Outdoor Adventures</h5>
        </div>
      </Slider>
    </div>
  </div>
</div>

        {/* =========================
            CALLBACK SECTION
        ========================== */}
      <div
  className="fullwidth-callback"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/img3.jpg')",
  }}
>
          <div className="container">

            {/* Callback Heading */}
            <div className="section-heading section-heading-white text-center">

              <div className="row">
                <div className="col-lg-8 offset-lg-2">

                  <h5 className="dash-style">
                    PLAN YOUR VISIT
                  </h5>

                  <h2>
                    RELAX. ENJOY. EXPLORE OM AGRO TOURISM!
                  </h2>

                  <p>
                    Plan a refreshing day with your family, friends,
                    students or colleagues. Experience farm life,
                    exciting activities, delicious homemade food and
                    memorable moments surrounded by nature.
                  </p>

                </div>
              </div>

            </div>

            {/* =========================
                COUNTERS
            ========================== */}
            <div className="callback-counter-wrap">

              {/* Counter 1 */}
              <div className="counter-item">
                <div className="counter-item-inner">

                  <div className="counter-icon">
                    <img
                      src="/images/icon1.png"
                      alt="Fun Activities"
                    />
                  </div>

                  <div className="counter-content">

                    <span className="counter-no">
                      <span className="counter">
                        8
                      </span>
                      +
                    </span>

                    <span className="counter-text">
                      Fun Activities
                    </span>

                  </div>

                </div>
              </div>

              {/* Counter 2 */}
              <div className="counter-item">
                <div className="counter-item-inner">

                  <div className="counter-icon">
                    <img
                      src="/images/icon2.png"
                      alt="Event Experiences"
                    />
                  </div>

                  <div className="counter-content">

                    <span className="counter-no">
                      <span className="counter">
                        6
                      </span>
                      +
                    </span>

                    <span className="counter-text">
                      Event Experiences
                    </span>

                  </div>

                </div>
              </div>

              {/* Counter 3 */}
              <div className="counter-item">
                <div className="counter-item-inner">

                  <div className="counter-icon">
                    <img
                      src="/images/icon3.png"
                      alt="Nearby Attractions"
                    />
                  </div>

                  <div className="counter-content">

                    <span className="counter-no">
                      <span className="counter">
                        9
                      </span>
                      +
                    </span>

                    <span className="counter-text">
                      Nearby Attractions
                    </span>

                  </div>

                </div>
              </div>

              {/* Counter 4 */}
              <div className="counter-item">
                <div className="counter-item-inner">

                  <div className="counter-icon">
                    <img
                      src="/images/icon4.png"
                      alt="Farm Experience"
                    />
                  </div>

                  <div className="counter-content">

                    <span className="counter-no">
                      <span className="counter">
                        1
                      </span>
                    </span>

                    <span className="counter-text">
                      Complete Farm Experience
                    </span>

                  </div>

                </div>
              </div>

            </div>

            {/* =========================
                CONTACT / CALL AREA
            ========================== */}
            <div className="support-area">

              <div className="support-icon">
                <img
                  src="/images/icon5.png"
                  alt="Contact Om Agro Tourism"
                />
              </div>

              <div className="support-content">

                <h4>
                  Plan Your Visit to Om Agro Tourism
                </h4>

                <h3>
                  <a href="tel:+917066665554">
                    Call: +91 70666 65554
                  </a>
                </h3>

                <h3>
                  <a href="tel:+919145557771">
                    Call: +91 91455 57771
                  </a>
                </h3>

              </div>

            </div>

          </div>
        </div>

      </section>
    </>
  );
};

export default AboutSection;