import React from "react";
import "./VideoSection.css";

const videos = [
    {
        title: "Family Picnic Experience",
        subtitle: "Fun-filled moments at Om Agro Tourism",
        videoId: "Ge33EHQBuO0",
    },
    {
        title: "School Picnic Experience",
        subtitle: "Learning, activities & outdoor fun",
        videoId: "wi5ITJyd2oU",
    },
    {
        title: "Farm Activities",
        subtitle: "Experience authentic rural adventures",
        videoId: "5QPS3QzUa4w",
    },
    {
        title: "Guest Experience",
        subtitle: "Memorable moments shared by our visitors",
        videoId: "ph_8NQ4s4so",
    },
];

const VideoSection = () => {
    return (
        <section className="omVideoSection">
            <div className="omVideoContainer">

                {/* Heading */}
                <div className="omVideoHeading">
                    <div className="omVideoTag">
                        <span>
                            <i className="fab fa-youtube"></i>
                        </span>
                        Watch & Explore
                    </div>

                    <h2>
                        Experience <span>Om Agro Tourism</span>
                    </h2>

                    <p>
                        Take a glimpse at the fun, nature, activities and
                        memorable experiences enjoyed by our visitors.
                    </p>
                </div>

                {/* Videos */}
                <div className="omVideoGrid">
                    {videos.map((video, index) => (
                        <article
                            className="omVideoCard"
                            key={index}
                        >
                            {/* YouTube Video */}
                            <div className="omVideoFrame">
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${video.videoId}`}
                                    title={video.title}
                                    loading="lazy"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Video Details */}
                            <div className="omVideoContent">
                                <div className="omVideoTop">
                                    <span className="omVideoNumber">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="omYoutubeBadge">
                                        <i className="fab fa-youtube"></i>
                                        YouTube
                                    </span>
                                </div>

                                <h3>{video.title}</h3>

                                <p>{video.subtitle}</p>

                                <span className="omVideoLine"></span>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Button */}
                {/* <div className="omVideoButtonWrap">
                    <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="omVideoButton"
                    >
                        <span className="omVideoButtonIcon">
                            <i className="fab fa-youtube"></i>
                        </span>

                        View More Videos

                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div> */}

            </div>
        </section>
    );
};

export default VideoSection;