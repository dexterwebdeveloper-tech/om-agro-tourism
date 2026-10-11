// import React from "react";

// const SubscribeSection = () => {
//   return (
//     <section
//       className="subscribe-section"
//       style={{
//         backgroundImage: "url('/images/img16.jpeg')",
//       }}
//     >
//       <div className="container">
//         <div className="row">

//           <div className="col-lg-7">
//             <div className="section-heading section-heading-white">

//               <h5 className="dash-style">
//                 HOLIDAY PACKAGE OFFER
//               </h5>

//               <h2>
//                 HOLIDAY SPECIAL 25% OFF !
//               </h2>

//               <h4>
//                 Sign up now to recieve hot special offers and information
//                 about the best tour packages, updates and discounts !!
//               </h4>

//               {/* Newsletter Form */}
//               <div className="newsletter-form">
//                 <form
//                   onSubmit={(e) => e.preventDefault()}
//                 >
//                   <input
//                     type="email"
//                     name="s"
//                     placeholder="Your Email Address"
//                   />

//                   <input
//                     type="submit"
//                     name="signup"
//                     value="SIGN UP NOW!"
//                   />
//                 </form>
//               </div>

//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
//                 dapibus leo. Eaque adipiscing, luctus eleifend temporibus
//                 occaecat luctus eleifend temporibus.
//               </p>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default SubscribeSection;


import React from "react";

const SubscribeSection = () => {
  return (
  <section
  className="subscribe-section"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/img16.jpeg')",
  }}
>
      <div className="container">
        <div className="row">

          <div className="col-lg-7">
            <div className="section-heading section-heading-white">

              <h5 className="dash-style">
                PLAN YOUR DAY WITH US
              </h5>

              <h2>
                ESCAPE THE CITY. EXPERIENCE NATURE.
              </h2>

              <h4>
                Spend a refreshing day at Om Agro Tourism with family,
                friends, students or your corporate team.
              </h4>

              <p>
                Enjoy water park activities, swimming, boating, horse
                riding, tractor rides, bull cart rides, outdoor games
                and the peaceful atmosphere of the countryside.
              </p>

              {/* Action Buttons */}
              <div className="om-subscribe-actions">

                <a
                  href="tel:+917066665554"
                  className="om-subscribe-call"
                >
                  <i className="fas fa-phone-alt"></i>
                  <span>
                    <small>CALL FOR ENQUIRY</small>
                    +91 70666 65554
                  </span>
                </a>

                <a
                  href="https://wa.me/917066665554"
                  target="_blank"
                  rel="noreferrer"
                  className="om-subscribe-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>
                    <small>QUICK ENQUIRY</small>
                    WhatsApp Us
                  </span>
                </a>

              </div>

              {/* Visit Types */}
              <div className="om-subscribe-types">

                <span>
                  <i className="fas fa-check-circle"></i>
                  Family Picnic
                </span>

                <span>
                  <i className="fas fa-check-circle"></i>
                  School Picnic
                </span>

                <span>
                  <i className="fas fa-check-circle"></i>
                  Corporate Outing
                </span>

                <span>
                  <i className="fas fa-check-circle"></i>
                  Group Get-Together
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;