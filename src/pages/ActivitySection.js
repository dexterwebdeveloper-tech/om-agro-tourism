import React from "react";
import "./ActivitySection.css";

const ActivitySection = () => {
  const activities = [
    {
      title: "Water Park",
      subtitle: "Splash, Play & Enjoy",
      icon: "fas fa-swimming-pool",
    },
    {
      title: "Swimming Pool",
      subtitle: "Refresh & Relax",
      icon: "fas fa-swimmer",
    },
    {
      title: "Horse Riding",
      subtitle: "Ride & Explore",
      icon: "fas fa-horse",
    },
    {
      title: "Tractor Ride",
      subtitle: "Explore Farm Life",
      icon: "fas fa-tractor",
    },
    {
      title: "Bull Cart Ride",
      subtitle: "Traditional Village Fun",
      icon: "fas fa-shopping-cart",
    },
    {
      title: "Boating",
      subtitle: "Peaceful Water Ride",
      icon: "fas fa-ship",
    },
  ];

  return (
    <section className="om-activity-section">
      <div className="om-activity-circle circle-one"></div>
      <div className="om-activity-circle circle-two"></div>

      <div className="container position-relative">

        {/* Heading */}
        <div className="om-activity-heading text-center">

          <div className="om-activity-small-title">
            <span></span>
            FUN • NATURE • FARM LIFE
            <span></span>
          </div>

          <h2>
            Activities at <span>Om Agro Tourism</span>
          </h2>

          <p>
            Step away from the busy city and enjoy a day filled with
            refreshing water fun, traditional farm experiences and outdoor
            activities surrounded by nature.
          </p>

        </div>

        {/* Activity Cards */}
        <div className="row g-4 justify-content-center om-activity-row">

          {activities.map((activity, index) => (
            <div
              className="col-xl-2 col-lg-4 col-md-4 col-sm-6"
              key={index}
            >
              <div className="om-activity-card">

                {/* Number */}
                <span className="om-activity-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="om-activity-icon-wrap">
                  <div className="om-activity-icon">
                    <i className={activity.icon}></i>
                  </div>
                </div>

                {/* Content */}
                <div className="om-activity-content">
                  <h4>{activity.title}</h4>
                  <p>{activity.subtitle}</p>
                </div>

                <div className="om-activity-line"></div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom */}
        <div className="om-activity-bottom">

          <div className="om-activity-bottom-icon">
            <i className="fas fa-leaf"></i>
          </div>

          <div>
            <span>Perfect For</span>

            <p>
              Family Picnics • School Picnics • Corporate Outings •
              Friends & Group Get-Togethers
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ActivitySection;