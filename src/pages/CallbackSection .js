// import React from "react";

// const CallbackSection = () => {
//   return (
//     <section className="callback-section">
//       <div className="container">

//         <div className="row no-gutters align-items-center">

//           {/* Left Image / Video */}
//           <div className="col-lg-5">
//             <div
//               className="callback-img"
//               style={{
//                 backgroundImage: "url('/images/img8.jpg')",
//               }}
//             >
//               <div className="video-button">
//                 <a
//                   id="video-container"
//                   data-video-id="IUN664s7N-c"
//                   href="#"
//                   onClick={(e) => e.preventDefault()}
//                   aria-label="Watch Om Agro Tourism Video"
//                 >
//                   <i className="fas fa-play"></i>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="col-lg-7">
//             <div className="callback-inner">

//               {/* Heading */}
//               <div className="section-heading section-heading-white">
//                 <h5 className="dash-style">
//                   EXPERIENCE OM AGRO TOURISM
//                 </h5>

//                 <h2>
//                   RELAX. ENJOY. EXPLORE NATURE WITH US!
//                 </h2>

//                 <p>
//                   Spend a refreshing day close to nature at Om Agro Tourism.
//                   Enjoy water activities, farm experiences, outdoor fun,
//                   delicious food and memorable moments with your family,
//                   friends, students and corporate groups.
//                 </p>
//               </div>

//               {/* Counter Section */}
//               <div className="callback-counter-wrap">

//                 {/* Counter 1 */}
//                 <div className="counter-item">
//                   <div className="counter-icon">
//                     <img
//                       src="/images/icon1.png"
//                       alt="Fun Activities"
//                     />
//                   </div>

//                   <div className="counter-content">
//                     <span className="counter-no">
//                       <span className="counter">8</span>+
//                     </span>

//                     <span className="counter-text">
//                       Fun Activities
//                     </span>
//                   </div>
//                 </div>

//                 {/* Counter 2 */}
//                 <div className="counter-item">
//                   <div className="counter-icon">
//                     <img
//                       src="/images/icon2.png"
//                       alt="Event Experiences"
//                     />
//                   </div>

//                   <div className="counter-content">
//                     <span className="counter-no">
//                       <span className="counter">6</span>+
//                     </span>

//                     <span className="counter-text">
//                       Event Experiences
//                     </span>
//                   </div>
//                 </div>

//                 {/* Counter 3 */}
//                 <div className="counter-item">
//                   <div className="counter-icon">
//                     <img
//                       src="/images/icon3.png"
//                       alt="Nearby Attractions"
//                     />
//                   </div>

//                   <div className="counter-content">
//                     <span className="counter-no">
//                       <span className="counter">9</span>+
//                     </span>

//                     <span className="counter-text">
//                       Nearby Attractions
//                     </span>
//                   </div>
//                 </div>

//                 {/* Counter 4 */}
//                 <div className="counter-item">
//                   <div className="counter-icon">
//                     <img
//                       src="/images/icon4.png"
//                       alt="Farm Experience"
//                     />
//                   </div>

//                   <div className="counter-content">
//                     <span className="counter-no">
//                       <span className="counter">1</span>
//                     </span>

//                     <span className="counter-text">
//                       Complete Farm Experience
//                     </span>
//                   </div>
//                 </div>

//               </div>

//               {/* Support Area */}
//               <div className="support-area">

//                 <div className="support-icon">
//                   <img
//                     src="/images/icon5.png"
//                     alt="Contact Om Agro Tourism"
//                   />
//                 </div>

//                 <div className="support-content">
//                   <h4>
//                     Plan Your Visit to Om Agro Tourism
//                   </h4>

//                   <h3>
//                     <a href="tel:+917066665554">
//                       Call: +91 70666 65554
//                     </a>
//                   </h3>

//                   <h3>
//                     <a href="tel:+919145557771">
//                       Call: +91 91455 57771
//                     </a>
//                   </h3>
//                 </div>

//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallbackSection;










import React from "react";
import "./CallbackSection.css";

const CallbackSection = () => {
  const experiences = [
    {
      icon: "fas fa-swimmer",
      title: "Water Fun",
      text: "Pool & Water Activities",
    },
    {
      icon: "fas fa-tractor",
      title: "Farm Life",
      text: "Traditional Experiences",
    },
    {
      icon: "fas fa-horse",
      title: "Outdoor Fun",
      text: "Activities in Nature",
    },
    {
      icon: "fas fa-users",
      title: "Group Visits",
      text: "Family, School & Corporate",
    },
  ];

  return (
    <section className="om-experience-section">
      <div className="om-experience-bg-shape om-shape-one"></div>
      <div className="om-experience-bg-shape om-shape-two"></div>

      <div className="container">
        <div className="om-experience-box">

          <div className="row g-0 align-items-stretch">

            {/* ================= LEFT IMAGE ================= */}
            <div className="col-lg-5">
              <div
                className="om-experience-image"
                style={{
                  backgroundImage: "url('/images/img8.jpg')",
                }}
              >
                <div className="om-experience-image-overlay"></div>

                {/* Top Badge */}
                <div className="om-experience-image-badge">
                  <i className="fas fa-leaf"></i>

                  <div>
                    <span>Experience</span>
                    <strong>Nature & Farm Life</strong>
                  </div>
                </div>

                {/* Center Play */}
                {/* <button
                  type="button"
                  className="om-experience-play"
                  aria-label="Watch Om Agro Tourism video"
                >
                  <span>
                    <i className="fas fa-play"></i>
                  </span>
                </button> */}

                {/* Image Bottom */}
                <div className="om-experience-image-content">
                  <span className="om-experience-small-label">
                    OM AGRO TOURISM
                  </span>

                  <h3>
                    A Day Full of Fun,
                    <br />
                    Nature & Memories
                  </h3>

                  <p>
                    Escape from the city and experience the refreshing
                    countryside.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="col-lg-7">
              <div className="om-experience-content">

                {/* Heading */}
                <div className="om-experience-heading">

                  <div className="om-experience-label">
                    <span></span>
                    EXPERIENCE OM AGRO TOURISM
                  </div>

                  <h2>
                    More Than a Picnic,
                    <span> It's a Complete Experience</span>
                  </h2>

                  <p>
                    Spend quality time surrounded by greenery and enjoy
                    water activities, traditional farm experiences,
                    outdoor fun and memorable moments with your family,
                    friends, students or corporate team.
                  </p>

                </div>

                {/* ================= EXPERIENCE CARDS ================= */}
                <div className="om-experience-features">

                  {experiences.map((item, index) => (
                    <div
                      className="om-experience-feature"
                      key={index}
                    >
                      <div className="om-experience-feature-icon">
                        <i className={item.icon}></i>
                      </div>

                      <div className="om-experience-feature-text">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}

                </div>

                {/* ================= HIGHLIGHT ================= */}
                <div className="om-experience-highlight">

                  <div className="om-experience-highlight-icon">
                    <i className="fas fa-sun"></i>
                  </div>

                  <div>
                    <span>Perfect One-Day Escape</span>

                    <p>
                      Refresh • Reconnect • Celebrate • Enjoy Nature
                    </p>
                  </div>

                </div>

                {/* ================= CTA ================= */}
                <div className="om-experience-contact">

                  <div className="om-experience-contact-text">
                    <span>READY TO PLAN YOUR VISIT?</span>

                    <h4>
                      Connect with Om Agro Tourism
                    </h4>
                  </div>

                  <div className="om-experience-buttons">

                    <a
                      href="tel:+917066665554"
                      className="om-experience-call-btn"
                    >
                      <i className="fas fa-phone-alt"></i>

                      <div>
                        <small>CALL US</small>
                        <strong>+91 70666 65554</strong>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/917066665554"
                      target="_blank"
                      rel="noreferrer"
                      className="om-experience-whatsapp-btn"
                    >
                      <i className="fab fa-whatsapp"></i>

                      <span>WhatsApp</span>
                    </a>

                  </div>

                </div>

                {/* Second Number */}
                <div className="om-experience-second-number">
                  <i className="fas fa-phone-volume"></i>

                  Alternate Contact:

                  <a href="tel:+919145557771">
                    +91 91455 57771
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CallbackSection;