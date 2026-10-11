import React from "react";
import "./BlogSection.css";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "One Day Trip Near Pune",
      image: "/images/keyword/2.jpg",
      link: "/one-day-trip-near-pune",
      category: "One Day Picnic",
      icon: "fas fa-sun",
      description:
        "Plan a refreshing one day trip near Pune and enjoy nature, water activities, farm experiences and quality time with your family and friends.",
    },
    {
      id: 2,
      title: "Hurda Party Places Near Pune",
      image: "/images/keyword/8.jpg",
      link: "/hurda-party-places-near-pune",
      category: "Seasonal Experience",
      icon: "fas fa-seedling",
      description:
        "Experience a traditional Hurda Party near Pune with countryside surroundings, seasonal food, farm activities and a relaxing day with your group.",
    },
    {
      id: 3,
      title: "Mango Mahotsav in Pune",
      image: "/images/keyword/15.jpg",
      link: "/mango-mahotsav-in-pune",
      category: "Mango Festival",
      icon: "fas fa-tree",
      description:
        "Celebrate the mango season at Om Agro Tourism with countryside experiences, seasonal flavours, activities and memorable moments with family and friends.",
    },
  ];

  return (
    <section className="om-blog-section">

      {/* Decorative Shapes */}
      <div className="om-blog-shape om-blog-shape-left"></div>
      <div className="om-blog-shape om-blog-shape-right"></div>

      <div className="container">

        {/* ================= HEADING ================= */}
        <div className="om-blog-heading">

          <div className="om-blog-label">
            <span></span>
            FROM OUR BLOG
            <span></span>
          </div>

          <h2>
            Discover More About
            <span> Om Agro Tourism</span>
          </h2>

          <p>
            Explore helpful ideas for one-day trips, seasonal celebrations
            and countryside experiences near Pune. Find inspiration for your
            next memorable day with family, friends and groups.
          </p>

        </div>

        {/* ================= BLOG CARDS ================= */}
        <div className="row g-4 justify-content-center">

          {blogs.map((blog) => (
            <div
              className="col-lg-4 col-md-6"
              key={blog.id}
            >
              <article className="om-blog-card">

                {/* Image */}
                <a
                  href={blog.link}
                  className="om-blog-image"
                  aria-label={blog.title}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                  />

                  <div className="om-blog-image-overlay"></div>

                  {/* Category */}
                  <div className="om-blog-category">
                    <i className={blog.icon}></i>
                    <span>{blog.category}</span>
                  </div>

                  {/* Arrow */}
                  <div className="om-blog-image-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </a>

                {/* Content */}
                <div className="om-blog-content">

                  {/* Brand */}
                  <div className="om-blog-brand">
                    <span className="om-blog-brand-icon">
                      <i className="fas fa-leaf"></i>
                    </span>

                    <span>Om Agro Tourism</span>
                  </div>

                  {/* Title */}
                  <h3>
                    <a href={blog.link}>
                      {blog.title}
                    </a>
                  </h3>

                  {/* Description */}
                  <p className="om-blog-description">
                    {blog.description}
                  </p>

                  {/* Footer */}
                  <div className="om-blog-footer">

                    <a
                      href={blog.link}
                      className="om-blog-readmore"
                    >
                      Read More

                      <span>
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </a>

                    <div className="om-blog-leaf">
                      <i className="fas fa-leaf"></i>
                    </div>

                  </div>

                </div>

              </article>
            </div>
          ))}

        </div>

        {/* ================= BOTTOM NOTE ================= */}
        <div className="om-blog-bottom">

          <div className="om-blog-bottom-icon">
            <i className="fas fa-map-marked-alt"></i>
          </div>

          <div>
            <span>Planning your next outing?</span>

            <p>
              Explore our experiences and plan a refreshing day at
              Om Agro Tourism near Pune.
            </p>
          </div>

          <a
            href="tel:+917066665554"
            className="om-blog-enquiry-btn"
          >
            <i className="fas fa-phone-alt"></i>
            Enquire Now
          </a>

        </div>

      </div>
    </section>
  );
};

export default BlogSection;