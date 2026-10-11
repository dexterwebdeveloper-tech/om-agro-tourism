import React, { useEffect, useState } from "react";
import "./GallerySection.css";

const galleryImages = [
  {
    id: 1,
    image: "/images/gallery/1.jpg",
    title: "Om Agro Tourism",
    category: "Agro Tourism",
  },
  {
    id: 2,
    image: "/images/gallery/2.jpg",
    title: "Water Park Activities",
    category: "Water Activities",
  },
  {
    id: 3,
    image: "/images/gallery/3.jpg",
    title: "Swimming Pool",
    category: "Swimming",
  },
  {
    id: 4,
    image: "/images/gallery/4.jpg",
    // title: "Horse Riding",
    category: "Farm Activities",
  },
  {
    id: 5,
    image: "/images/gallery/5.jpg",
    // title: "Tractor Ride",
    category: "Farm Experience",
  },
  {
    id: 6,
    image: "/images/gallery/6.jpg",
    // title: "Bull Cart Ride",
    category: "Rural Experience",
  },
  {
    id: 7,
    image: "/images/gallery/7.jpg",
    // title: "Boating",
    category: "Outdoor Activities",
  },
  {
    id: 8,
    image: "/images/gallery/8.jpg",
    // title: "Indoor & Outdoor Games",
    category: "Games",
  },
  {
    id: 9,
    image: "/images/gallery/9.jpg",
    // title: "Family Picnic",
    category: "Family Fun",
  },
  {
    id: 10,
    image: "/images/gallery/10.jpg",
    // title: "Corporate Events",
    category: "Events",
  },
  {
    id: 11,
    image: "/images/gallery/11.jpg",
    // title: "Birthday Celebration",
    category: "Celebrations",
  },
  {
    id: 12,
    image: "/images/gallery/12.jpg",
    // title: "Nature Experience",
    category: "Nature",
  },

  {
  id: 13,
  image: "/images/gallery/13.jpg",
  category: "Nature",
},
{
  id: 14,
  image: "/images/gallery/14.jpg",
  category: "Nature",
},
{
  id: 15,
  image: "/images/gallery/15.jpg",
  category: "Nature",
},
{
  id: 16,
  image: "/images/gallery/16.jpg",
  category: "Nature",
},
{
  id: 17,
  image: "/images/gallery/17.jpg",
  category: "Nature",
},
{
  id: 18,
  image: "/images/gallery/18.jpg",
  category: "Nature",
},
{
  id: 19,
  image: "/images/gallery/19.jpg",
  category: "Nature",
},
{
  id: 20,
  image: "/images/gallery/20.jpg",
  category: "Nature",
},
{
  id: 21,
  image: "/images/gallery/21.jpg",
  category: "Nature",
},
{
  id: 22,
  image: "/images/gallery/22.jpg",
  category: "Nature",
},
{
  id: 23,
  image: "/images/gallery/23.jpg",
  category: "Nature",
},
{
  id: 24,
  image: "/images/gallery/24.jpg",
  category: "Nature",
},
{
  id: 25,
  image: "/images/gallery/25.jpg",
  category: "Nature",
},
{
  id: 26,
  image: "/images/gallery/26.jpg",
  category: "Nature",
},
{
  id: 27,
  image: "/images/gallery/27.jpg",
  category: "Nature",
},
// {
//   id: 28,
//   image: "/images/gallery/28.jpg",
//   category: "Nature",
// },
];

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;

  const openGallery = (index) => {
    setActiveIndex(index);
  };

  const closeGallery = () => {
    setActiveIndex(null);
  };

  const nextImage = (event) => {
    if (event) event.stopPropagation();

    setActiveIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  };

  const prevImage = (event) => {
    if (event) event.stopPropagation();

    setActiveIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const activeImage =
    activeIndex !== null ? galleryImages[activeIndex] : null;

  return (
    <>
    <section className="inner-banner-wrap">
      <div
        className="inner-baner-container"
        style={{
          backgroundImage: "url('/images/inner-banner.jpeg')",
        }}
      >
        <div className="container">
          <div className="inner-banner-content">
            <h1 className="inner-title">
              OUR GALLERY 
            </h1>
          </div>
        </div>
      </div>

      <div className="inner-shape"></div>
    </section>
   

      <section className="om-gallery-section">
        <div className="container">

          {/* HEADING */}
          <div className="om-gallery-heading">
            <span className="om-gallery-subtitle">
              OUR GALLERY
            </span>

            <h2>
              Moments at <span>Om Agro Tourism</span>
            </h2>

            <p>
              Take a look at the activities, farm experiences,
              celebrations and memorable moments visitors can enjoy
              at Om Agro Tourism.
            </p>
          </div>


          {/* GALLERY */}
          <div className="row g-4">

            {galleryImages.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <button
                  type="button"
                  className="om-gallery-card"
                  onClick={() => openGallery(index)}
                  aria-label={`Open ${item.title}`}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="om-gallery-overlay">

                    <div className="om-gallery-card-text">
                      <span>{item.category}</span>

                      <h3>{item.title}</h3>
                    </div>

                    <div className="om-gallery-view-icon">
                      <i className="fa-solid fa-expand"></i>
                    </div>

                  </div>

                  <span className="om-gallery-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </button>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ==========================================
          LIGHTBOX / SLIDER
      =========================================== */}

      {isOpen && activeImage && (
        <div
          className="om-gallery-lightbox"
          onClick={closeGallery}
        >

          {/* TOP BAR */}
          <div className="om-gallery-lightbox-top">

            <div className="om-gallery-lightbox-brand">
              <span>OM AGRO TOURISM</span>

              <strong>
                {activeIndex + 1} / {galleryImages.length}
              </strong>
            </div>


            <button
              type="button"
              className="om-gallery-close"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

          </div>


          {/* PREVIOUS */}
          <button
            type="button"
            className="om-gallery-arrow om-gallery-prev"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>


          {/* MAIN IMAGE */}
          <div
            className="om-gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="om-gallery-main-image">

              <img
                src={activeImage.image}
                alt={activeImage.title}
              />

            </div>


            <div className="om-gallery-image-info">

              <span>
                {activeImage.category}
              </span>

              <h3>
                {activeImage.title}
              </h3>

            </div>

          </div>


          {/* NEXT */}
          <button
            type="button"
            className="om-gallery-arrow om-gallery-next"
            onClick={nextImage}
            aria-label="Next image"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>


          {/* THUMBNAILS */}
          <div
            className="om-gallery-thumbnails"
            onClick={(event) => event.stopPropagation()}
          >

            {galleryImages.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`om-gallery-thumbnail ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt=""
                />
              </button>
            ))}

          </div>

        </div>
      )}
    </>
  );
};

export default GallerySection;