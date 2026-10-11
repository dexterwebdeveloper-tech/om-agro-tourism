// import React from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const TestimonialSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     arrows: false,
//     adaptiveHeight: true,
//   };

//   return (
//     <div
//       className="testimonial-section"
//       style={{
//         backgroundImage: "url('/images/img23.jpg')",
//       }}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-10 offset-lg-1">

//             <div className="testimonial-inner testimonial-slider">

//               <Slider {...settings}>

//                 {/* Testimonial 1 */}
//                 <div>
//                   <div className="testimonial-item text-center">

//                     <figure className="testimonial-img">
//                       <img
//                         src="/images/img20.jpg"
//                         alt="Johny English"
//                       />
//                     </figure>

//                     <div className="testimonial-content">
//                       <p>
//                         "Dolorum aenean dolorem minima! Voluptatum?
//                         Corporis condimentum ac primis fusce, atque!
//                         Vivamus. Non cupiditate natus excepturi, quod
//                         quo, aute facere? Deserunt aliquip, egestas
//                         ipsum, eu."
//                       </p>

//                       <cite>
//                         Johny English
//                         <span className="company">
//                           Travel Agent
//                         </span>
//                       </cite>
//                     </div>

//                   </div>
//                 </div>

//                 {/* Testimonial 2 */}
//                 <div>
//                   <div className="testimonial-item text-center">

//                     <figure className="testimonial-img">
//                       <img
//                         src="/images/img21.jpg"
//                         alt="William Housten"
//                       />
//                     </figure>

//                     <div className="testimonial-content">
//                       <p>
//                         "Dolorum aenean dolorem minima! Voluptatum?
//                         Corporis condimentum ac primis fusce, atque!
//                         Vivamus. Non cupiditate natus excepturi, quod
//                         quo, aute facere? Deserunt aliquip, egestas
//                         ipsum, eu."
//                       </p>

//                       <cite>
//                         William Housten
//                         <span className="company">
//                           Travel Agent
//                         </span>
//                       </cite>
//                     </div>

//                   </div>
//                 </div>

//                 {/* Testimonial 3 */}
//                 <div>
//                   <div className="testimonial-item text-center">

//                     <figure className="testimonial-img">
//                       <img
//                         src="/images/img22.jpg"
//                         alt="Alison Wright"
//                       />
//                     </figure>

//                     <div className="testimonial-content">
//                       <p>
//                         "Dolorum aenean dolorem minima! Voluptatum?
//                         Corporis condimentum ac primis fusce, atque!
//                         Vivamus. Non cupiditate natus excepturi, quod
//                         quo, aute facere? Deserunt aliquip, egestas
//                         ipsum, eu."
//                       </p>

//                       <cite>
//                         Alison Wright
//                         <span className="company">
//                           Travel Guide
//                         </span>
//                       </cite>
//                     </div>

//                   </div>
//                 </div>

//               </Slider>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;


import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div
      className="testimonial-section"
      style={{
        backgroundImage: "url('/images/img23.jpg')",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">

            <div className="testimonial-inner testimonial-slider">

              <Slider {...settings}>

                {/* Testimonial 1 */}
                <div>
                  <div className="testimonial-item text-center">

                    <figure className="testimonial-img">
                      <div className="testimonial-dummy-icon">
                        <i className="fas fa-user"></i>
                      </div>
                    </figure>

                    <div className="testimonial-content">
                      <p>
                        "We had a wonderful family day at Om Agro Tourism.
                        The swimming pool, water activities, tractor ride
                        and peaceful natural surroundings made our visit
                        enjoyable and memorable."
                      </p>

                      <cite>
                        Mr. Rahul Patil
                        <span className="company">
                          Family Visitor
                        </span>
                      </cite>
                    </div>

                  </div>
                </div>

                {/* Testimonial 2 */}
                <div>
                  <div className="testimonial-item text-center">

                    <figure className="testimonial-img">
                      <div className="testimonial-dummy-icon">
                        <i className="fas fa-user"></i>
                      </div>
                    </figure>

                    <div className="testimonial-content">
                      <p>
                        "Om Agro Tourism is a refreshing place to spend
                        quality time away from the city. We especially
                        enjoyed the greenery, boating, horse riding and
                        traditional countryside experience."
                      </p>

                      <cite>
                        Ms. Sneha Deshmukh
                        <span className="company">
                          Weekend Visitor
                        </span>
                      </cite>
                    </div>

                  </div>
                </div>

                {/* Testimonial 3 */}
                <div>
                  <div className="testimonial-item text-center">

                    <figure className="testimonial-img">
                      <div className="testimonial-dummy-icon">
                        <i className="fas fa-user-tie"></i>
                      </div>
                    </figure>

                    <div className="testimonial-content">
                      <p>
                        "Our group had a great time at Om Agro Tourism.
                        The open spaces, outdoor activities and relaxing
                        environment made it a good destination for spending
                        an enjoyable day together."
                      </p>

                      <cite>
                        Mr. Amit Kulkarni
                        <span className="company">
                          Group Visitor
                        </span>
                      </cite>
                    </div>

                  </div>
                </div>

                {/* Testimonial 4 */}
                <div>
                  <div className="testimonial-item text-center">

                    <figure className="testimonial-img">
                      <div className="testimonial-dummy-icon">
                        <i className="fas fa-user"></i>
                      </div>
                    </figure>

                    <div className="testimonial-content">
                      <p>
                        "A lovely place for families and children to enjoy
                        nature and outdoor activities. The farm atmosphere,
                        swimming pool and different activities made our
                        picnic experience special."
                      </p>

                      <cite>
                        Ms. Priya Shinde
                        <span className="company">
                          Family Picnic Visitor
                        </span>
                      </cite>
                    </div>

                  </div>
                </div>

              </Slider>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;