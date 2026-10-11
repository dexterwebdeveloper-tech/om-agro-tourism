import React from "react";

const BestSection = () => {
  return (
    <section className="best-section">
      <div className="container">
        <div className="row">

          {/* Left Column */}
          <div className="col-lg-5">
            <div className="section-heading">

              <h5 className="dash-style">
                OM AGRO TOURISM GALLERY
              </h5>

              <h2>
                MOMENTS FROM NATURE, FUN & FARM LIFE
              </h2>

              {/* <p>
                Take a glimpse at the memorable experiences waiting for you
                at Om Agro Tourism. Enjoy refreshing water activities,
                peaceful greenery, farm experiences and fun-filled moments
                with family, friends, students and groups.
              </p> */}

            </div>

            <figure className="gallery-img">
              <img
                src="/images/img12.jpeg"
                alt="Om Agro Tourism activities and nature"
              />
            </figure>
          </div>

          {/* Right Column */}
          <div className="col-lg-7">

            {/* Top Images */}
            <div className="row">

              <div className="col-sm-6">
                <figure className="gallery-img">
                  <img
                    src="/images/img13.jpeg"
                    alt="Family activities at Om Agro Tourism"
                  />
                </figure>
              </div>

              <div className="col-sm-6">
                <figure className="gallery-img">
                  <img
                    src="/images/img14.jpeg"
                    alt="Farm experience at Om Agro Tourism"
                  />
                </figure>
              </div>

            </div>

            {/* Bottom Image */}
            <div className="row">
              <div className="col-12">
                <figure className="gallery-img">
                  <img
                    src="/images/img15.jpeg"
                    alt="Nature and outdoor activities at Om Agro Tourism"
                  />
                </figure>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BestSection;