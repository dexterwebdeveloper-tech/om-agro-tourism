import React from "react";
import "./ActivitiesSection.css";

const activities = [
  {
    title: "Boating",
    image: "/images/Activities/Boating.png",
  },
  {
    title: "Bull Cart",
    image: "/images/Activities/Bull-Cart.png",
  },
  {
    title: "Horse Riding",
    image: "/images/Activities/Horse-Riding.png",
  },
  {
    title: "Indoor Outdoor Game",
    image: "/images/Activities/Indore-Outdoor-Game.png",
  },
  {
    title: "Jungle Safari",
    image: "/images/Activities/Jungle-Safari.png",
  },
  {
    title: "Swimming Pool",
    image: "/images/Activities/Swimming-Pool.png",
  },
  {
    title: "Tractor Ride",
    image: "/images/Activities/Tractor-Ride.png",
  },
  {
    title: "Water Park Activities",
    image: "/images/Activities/Water-Park-Activities.png",
  },
];

const ActivitiesSection = () => {
    return (
        <section className="omActivities">
            <div className="omActivitiesContainer">

                {/* Heading */}
                <div className="omActivitiesHead">

                    <div className="omActivitiesTag">
                        <span className="omActivitiesTagIcon">
                            <i className="fas fa-leaf"></i>
                        </span>

                        Things To Do
                    </div>

                    <h2 className="omActivitiesTitle">
                        Activities <span>We Offer</span>
                    </h2>

                    <p className="omActivitiesIntro">
                        Enjoy exciting outdoor, water and traditional farm
                        activities at Om Agro Tourism. Spend a fun-filled day
                        with family, friends, students and groups surrounded
                        by nature.
                    </p>

                </div>


                {/* Activity Grid */}
                <div className="omActivitiesGrid">

                    {activities.map((activity, index) => (
                        <article
                            className="omActivityCard"
                            key={index}
                        >

                            <div className="omActivityImage">
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    loading="lazy"
                                />
                            </div>


                            {/* Number */}
                            <span className="omActivityNumber">
                                {String(index + 1).padStart(2, "0")}
                            </span>


                            {/* Bottom Content */}
                            <div className="omActivityContent">

                                <div className="omActivitySmall">
                                    Om Agro Tourism
                                </div>

                                <h3>{activity.title}</h3>

                                <span className="omActivityLine"></span>

                            </div>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default ActivitiesSection;