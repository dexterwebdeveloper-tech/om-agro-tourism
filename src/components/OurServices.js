const services = [
    {
        title: "School Picnic",
        link: "/school-picnic",
        icon: "fas fa-school",
    },
    {
        title: "One Day Picnic",
        link: "/one-day-picnic",
        icon: "fas fa-sun",
    },
    {
        title: "Corporate Outing",
        link: "/corporate-outing",
        icon: "fas fa-users",
    },
    {
        title: "Family Picnic",
        link: "/family-picnic",
        icon: "fas fa-people-roof",
    },
    {
        title: "Birthday Celebration",
        link: "/birthday-party",
        icon: "fas fa-cake-candles",
    },
    {
        title: "Destination Wedding",
        link: "/destination-wedding",
        icon: "fas fa-heart",
    },
];

const OurServices = () => {
    return (
        <div className="omServiceBox">

            {/* Heading */}
            <div className="omServiceHeader">
                <div className="omServiceHeaderIcon">
                    <i className="fas fa-leaf"></i>
                </div>

                <div>
                    <span>Explore With Us</span>
                    <h3>Our Services</h3>
                </div>
            </div>


            {/* Services */}
            <div className="omServiceList">

                {services.map((service, index) => (

                    <a
                        // href={service.link}
                        className="omServiceItem"
                        key={index}
                    >

                        <div className="omServiceIcon">
                            <i className={service.icon}></i>
                        </div>

                        <div className="omServiceText">
                            <span>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h4>{service.title}</h4>
                        </div>

                        <div className="omServiceArrow">
                            <i className="fas fa-arrow-right"></i>
                        </div>

                    </a>

                ))}

            </div>


            {/* Bottom CTA */}
            <div className="omServiceBottom">

                <span>Planning a day at the farm?</span>

                <h4>
                    Make Your Visit
                    <br />
                    Memorable
                </h4>

                <a
                    href="https://wa.me/917066665554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="omServiceEnquiry"
                >
                    Enquire Now

                    <i className="fas fa-arrow-right"></i>
                </a>

            </div>

        </div>
    );
};

export default OurServices;