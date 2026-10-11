import React from "react";

const DestinationSection = () => {
  return (
    <section className="destination-section">
      <div className="container">

        <div className="section-heading">
          <div className="row align-items-end">

            <div className="col-lg-7">
              <h5 className="dash-style">OM AGRO TOURISM</h5>
              <h2>EXPLORE FUN & MEMORABLE EXPERIENCES</h2>
            </div>

            <div className="col-lg-5">
              <div className="section-disc">
                Enjoy a refreshing day close to nature with exciting
                activities, farm experiences, family fun and memorable
                moments at Om Agro Tourism near Pune.
              </div>
            </div>

          </div>
        </div>

        <div className="destination-inner destination-three-column">

          <div className="row">

            {/* Left Column */}
            <div className="col-lg-7">
              <div className="row">

                {/* Experience 1 */}
                <div className="col-sm-6">
                  <div className="desti-item overlay-desti-item">

                    <figure className="desti-image">
                      <img
                        src="/images/img1.jpg"
                        alt="Water Park Activities"
                      />
                    </figure>

                    <div className="meta-cat bg-meta-cat">
                      <a href="#">WATER FUN</a>
                    </div>

                    <div className="desti-content">
                      <h3>
                        <a href="#">Water Park Activities</a>
                      </h3>

                      <div
                        className="rating-start"
                        title="Om Agro Tourism"
                      >
                        <span style={{ width: "100%" }}></span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Experience 2 */}
                <div className="col-sm-6">
                  <div className="desti-item overlay-desti-item">

                    <figure className="desti-image">
                      <img
                        src="/images/img2.jpg"
                        alt="Farm Activities"
                      />
                    </figure>

                    <div className="meta-cat bg-meta-cat">
                      <a href="#">FARM FUN</a>
                    </div>

                    <div className="desti-content">
                      <h3>
                        <a href="#">Farm Activities</a>
                      </h3>

                      <div
                        className="rating-start"
                        title="Om Agro Tourism"
                      >
                        <span style={{ width: "100%" }}></span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-5">
              <div className="row">

                {/* Experience 3 */}
                <div className="col-md-6 col-xl-12">
                  <div className="desti-item overlay-desti-item">

                    <figure className="desti-image">
                      <img
                        src="/images/img3.jpg"
                        alt="Family Picnic"
                      />
                    </figure>

                    <div className="meta-cat bg-meta-cat">
                      <a href="#">FAMILY TIME</a>
                    </div>

                    <div className="desti-content">
                      <h3>
                        <a href="#">Family Picnic</a>
                      </h3>

                      <div
                        className="rating-start"
                        title="Om Agro Tourism"
                      >
                        <span style={{ width: "100%" }}></span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Experience 4 */}
                <div className="col-md-6 col-xl-12">
                  <div className="desti-item overlay-desti-item">

                    <figure className="desti-image">
                      <img
                        src="/images/img4.jpg"
                        alt="Nature Experience"
                      />
                    </figure>

                    <div className="meta-cat bg-meta-cat">
                      <a href="#">NATURE ESCAPE</a>
                    </div>

                    <div className="desti-content">
                      <h3>
                        <a href="#">Nature Experience</a>
                      </h3>

                      <div
                        className="rating-start"
                        title="Om Agro Tourism"
                      >
                        <span style={{ width: "100%" }}></span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Button */}
          {/* <div className="btn-wrap text-center">
            <a href="#" className="button-primary">
              EXPLORE MORE
            </a>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default DestinationSection;