import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';
import ActivitiesSection from '../components/ActivitiesSection';
import VideoSection from '../components/VideoSection';
import OurServices from '../components/OurServices';

function PicnicSpotNearAlandi() {

const cardData = {
keyword: "Picnic Spot Near Alandi",
headingDescription: "Looking for a relaxing picnic spot near Alandi for a family outing, one day trip, or affordable weekend escape? Om Agro Tourism offers a refreshing countryside experience with nature, traditional activities, outdoor recreation, homemade food, and engaging experiences for visitors of different age groups. Its peaceful farm environment makes it a suitable choice for families, friends, and groups searching for a convenient picnic resort near Alandi, Dighi, and Charholi.",
topPlaces: [
{
title: "Bird Watching",
description: "Bird Watching adds a peaceful nature experience to a picnic near Alandi, allowing visitors to enjoy the farm surroundings, observe different birds, and spend quiet outdoor time away from busy city areas."
},
{
title: "Farm Tours and Workshops",
description: "Farm Tours and Workshops offer an informative rural experience where families and groups can explore agricultural surroundings, understand farming activities, and enjoy a meaningful countryside outing."
},
{
title: "Bull Cart Ride",
description: "Bull Cart Ride brings a traditional village experience to a one day picnic near Alandi, giving families an opportunity to enjoy a memorable rural activity while experiencing the charm of Maharashtra's countryside."
},
{
title: "Water Park Activities",
description: "Water Park Activities provide an energetic option for families and groups looking for a picnic resort with activities near Alandi, adding fun and refreshing moments to a full-day outing."
},
{
title: "Tasty Homemade Food",
description: "Tasty Homemade Food makes the picnic experience more enjoyable with comforting meals that complement a day spent in the countryside, making it suitable for family outings and group gatherings."
},
{
title: "Tractor Ride",
description: "Tractor Ride offers a distinctive farm-based activity for visitors who want something different from a regular picnic, especially families and children interested in experiencing rural life."
},
{
title: "Boating",
description: "Boating adds a calm recreational experience to the day, giving visitors another way to enjoy outdoor surroundings while spending quality time with family or friends during their Alandi-side picnic trip."
},
{
title: "Indoor and Outdoor Games",
description: "Indoor and Outdoor Games create opportunities for children, adults, and groups to stay engaged throughout the outing, making the destination practical for family picnics and group recreation."
},
{
title: "Jungle Safari",
description: "Jungle Safari brings an adventurous element to a one day trip near Alandi, offering visitors an exciting outdoor experience that can make a family picnic more memorable."
},
{
title: "Swimming Pool",
description: "Swimming Pool access gives families another refreshing activity during their day out, making the destination a suitable choice for visitors comparing resorts near Alandi for a fun-filled family outing."
}
],
services: [
{
name: "Picnic Spot Near Alandi",
description: "Om Agro Tourism provides a peaceful countryside setting for visitors searching for a picnic spot near Alandi, with recreational activities, farm experiences, food, and open surroundings suitable for relaxed day outings."
},
{
name: "One Day Picnic Spot Near Alandi",
description: "A well-rounded selection of outdoor activities, traditional experiences, food, and leisure options makes Om Agro Tourism a convenient one day picnic spot near Alandi for families and groups."
},
{
name: "Best Picnic Spot Near Alandi",
description: "For visitors comparing the best picnic spot near Alandi, Om Agro Tourism combines rural surroundings with recreation, family activities, farm experiences, and homemade food for a complete countryside outing."
},
{
name: "Family Picnic Spot Near Alandi",
description: "Families can enjoy a comfortable picnic experience with activities suited to children and adults, making Om Agro Tourism a practical family picnic spot near Alandi for spending quality time together."
},
{
name: "Picnic Resort Near Alandi",
description: "Om Agro Tourism brings together a resort-style day outing with nature, recreation, traditional rural activities, food, and refreshing experiences for visitors looking for a picnic resort near Alandi."
},
{
name: "One Day Picnic Resort Near Alandi",
description: "Visitors planning a full-day outing can enjoy multiple activities and countryside experiences at Om Agro Tourism, making it a suitable one day picnic resort near Alandi for families and groups."
},
{
name: "Best Resort Near Alandi for Picnic",
description: "With farm-based experiences, outdoor recreation, food, and activities for different age groups, Om Agro Tourism offers a strong option for visitors looking for the best resort near Alandi for picnic plans."
},
{
name: "Family Resort Near Alandi",
description: "The combination of family-friendly recreation, open natural surroundings, food, and traditional activities makes Om Agro Tourism a convenient family resort near Alandi for relaxed day visits."
},
{
name: "One Day Trip Near Alandi",
description: "Om Agro Tourism offers enough variety for visitors to enjoy a complete one day trip near Alandi, combining nature, farm experiences, recreational activities, and enjoyable food in one destination."
},
{
name: "Family One Day Trip Near Alandi",
description: "Families planning a one day trip near Alandi can enjoy a balanced schedule of outdoor games, farm activities, traditional rides, water-based recreation, and homemade meals at Om Agro Tourism."
},
{
name: "Picnic Places Near Alandi",
description: "For people exploring picnic places near Alandi, Om Agro Tourism provides a countryside atmosphere with varied activities and open spaces that work well for family outings, friends' gatherings, and group picnics."
},
{
name: "Best Picnic Places Near Alandi",
description: "Om Agro Tourism stands out among options for the best picnic places near Alandi by bringing together nature-based experiences, rural activities, recreation, food, and opportunities for relaxed group time."
},
{
name: "Affordable Picnic Spot Near Alandi",
description: "Visitors searching for an affordable picnic spot near Alandi can enjoy a variety of experiences at one destination, helping families and groups plan an engaging day outing without needing multiple activity locations."
},
{
name: "Budget Picnic Resort Near Alandi",
description: "Om Agro Tourism provides a practical setting for visitors comparing a budget picnic resort near Alandi, with several recreational and countryside experiences available as part of a convenient day visit."
},
{
name: "Picnic Spot Near Alandi Pune",
description: "Located in the Pune region, Om Agro Tourism offers a countryside escape for people searching for a picnic spot near Alandi Pune, combining rural surroundings with food, recreation, and family activities."
},
{
name: "Resort Near Alandi for Family Outing",
description: "Families looking for a resort near Alandi for family outing can enjoy a mix of traditional village activities, farm experiences, games, water recreation, and food in a relaxed outdoor environment."
},
{
name: "One Day Resort Near Alandi",
description: "Om Agro Tourism works well for visitors searching for a one day resort near Alandi, offering enough activities and experiences to create a varied itinerary without requiring an extended stay."
},
{
name: "Nature Picnic Spot Near Alandi",
description: "The farm environment and open countryside surroundings make Om Agro Tourism a suitable nature picnic spot near Alandi for visitors who want to combine outdoor recreation with a peaceful rural atmosphere."
},
{
name: "Picnic Spot Near Dighi Alandi",
description: "Visitors from the Dighi-Alandi side can choose Om Agro Tourism for a countryside picnic featuring farm experiences, traditional activities, games, food, and recreational options for a complete day outing."
},
{
name: "Picnic Spot Near Charholi Alandi",
description: "For families and groups searching around the Charholi-Alandi area, Om Agro Tourism provides a varied picnic experience with nature, rural activities, food, and recreation suitable for different age groups."
},
{
name: "Family Picnic Resort Near Alandi",
description: "Om Agro Tourism creates a family-friendly picnic environment with activities, food, open surroundings, and traditional experiences, making it a useful choice for families planning a relaxed resort-style outing."
},
{
name: "Picnic Spot with Activities Near Alandi",
description: "Visitors wanting a picnic spot with activities near Alandi can enjoy options such as farm tours, traditional rides, games, boating, water activities, swimming, and other outdoor experiences at Om Agro Tourism."
}
],
tableData: [
["Picnic Spot Near Alandi"],
["One Day Picnic Spot Near Alandi"],
["Best Picnic Spot Near Alandi"],
["Family Picnic Spot Near Alandi"],
["Picnic Resort Near Alandi"],
["One Day Picnic Resort Near Alandi"],
["Best Resort Near Alandi for Picnic"],
["Family Resort Near Alandi"],
["One Day Trip Near Alandi"],
["Family One Day Trip Near Alandi"],
["Picnic Places Near Alandi"],
["Best Picnic Places Near Alandi"],
["Affordable Picnic Spot Near Alandi"],
["Budget Picnic Resort Near Alandi"],
["Picnic Spot Near Alandi Pune"],
["Resort Near Alandi for Family Outing"],
["One Day Resort Near Alandi"],
["Nature Picnic Spot Near Alandi"],
["Picnic Spot Near Dighi Alandi"],
["Picnic Spot Near Charholi Alandi"],
["Family Picnic Resort Near Alandi"],
["Picnic Spot with Activities Near Alandi"]
],
whychoose: [
{
WhyChooseheading: "Peaceful Countryside Setting",
WhyChoosedescription: "Om Agro Tourism offers a refreshing rural atmosphere away from the congestion of the city, giving families and groups a comfortable environment for enjoying a relaxed picnic near Alandi."
},
{
WhyChooseheading: "Activities for Different Age Groups",
WhyChoosedescription: "Children, adults, and senior family members can find suitable ways to enjoy the outing through games, farm experiences, traditional rides, water activities, and other recreational options."
},
{
WhyChooseheading: "Traditional Rural Experiences",
WhyChoosedescription: "Bull Cart Ride, Tractor Ride, and farm-based experiences bring visitors closer to village life and add an authentic countryside character to a regular one day picnic."
},
{
WhyChooseheading: "Nature and Farm Experiences",
WhyChoosedescription: "Bird Watching and Farm Tours and Workshops allow visitors to spend time around natural and agricultural surroundings, making the destination appealing for people who prefer a nature-oriented picnic."
},
{
WhyChooseheading: "Family-Friendly Recreation",
WhyChoosedescription: "Indoor and Outdoor Games, swimming, boating, and other activities help families create an enjoyable itinerary where both children and adults can participate throughout the day."
},
{
WhyChooseheading: "Homemade Food Experience",
WhyChoosedescription: "Tasty Homemade Food adds a comforting dining element to the outing, allowing visitors to enjoy traditional-style meals while spending their day in a peaceful farm environment."
},
{
WhyChooseheading: "Convenient Full-Day Experience",
WhyChoosedescription: "A broad range of activities at one destination makes it easier to plan a complete day out without travelling between multiple picnic locations, which is useful for families and larger groups."
},
{
WhyChooseheading: "Suitable for Alandi-Side Visitors",
WhyChoosedescription: "The destination is relevant for people exploring picnic options around Alandi, Dighi, and Charholi who want a countryside outing with recreation, food, nature, and family-oriented experiences."
}
]
};



const faqData = [
    {
        question: "What can visitors from Alandi look forward to during a picnic at Om Agri Tourism?",
        answer: "A visit offers a chance to step into a countryside setting while enjoying a mix of recreation and farm-based experiences. Guests can spend time swimming and boating, try horse riding, tractor rides and bull cart rides, and include bird watching and homemade food in their day."
    },
    {
        question: "How can families from Alandi make their picnic day more enjoyable?",
        answer: "A family outing can be planned with a comfortable mix of active experiences and downtime. Children may enjoy swimming and rides, while adults can spend time boating, watching birds, enjoying homemade food and relaxing among the farm greenery."
    },
    {
        question: "Which activities can be enjoyed at a picnic spot near Alandi Pune?",
        answer: "The destination provides several ways to enjoy an outdoor day, including swimming, boating, horse riding, tractor rides and bull cart rides. Visitors can also spend quieter moments with bird watching and nature observation around the countryside surroundings."
    },
    {
        question: "Is Om Agri Tourism a suitable choice for friends visiting from Alandi?",
        answer: "Friends can create a lively day by participating in shared outdoor activities and leaving time for socializing. Swimming, boating and horse riding can be combined with tractor or bull cart rides, followed by homemade food, photography and relaxed conversations."
    },
    {
        question: "What type of countryside experiences can visitors discover near Alandi?",
        answer: "Guests can experience a rural side of the outing through horse riding, tractor rides and bull cart rides. Bird watching, greenery and homemade food further complement these traditional experiences and create a setting that feels different from a typical city picnic."
    },
    {
        question: "Can children enjoy a one-day picnic at Om Agri Tourism near Alandi?",
        answer: "Young visitors can explore different outdoor activities depending on their age and comfort. Swimming, boating, horse riding and countryside rides can keep them interested, while bird watching offers a quieter nature experience. Adults should provide suitable supervision during activities."
    },
    {
        question: "What can senior family members do during a picnic near Alandi?",
        answer: "Senior citizens can enjoy the visit at a relaxed pace without participating in every activity. They can spend time bird watching, enjoying homemade food, sitting amid the greenery and sharing moments with family while younger visitors take part in rides or water activities."
    },
    {
        question: "How can a group from Alandi organize a comfortable full-day picnic itinerary?",
        answer: "A practical schedule can begin with swimming or boating, followed by horse riding or a traditional farm ride. After taking a meal break, visitors can leave time for photography, bird watching and relaxation, allowing the group to enjoy the surroundings without rushing."
    },
    {
        question: "Can visitors combine recreational activities with traditional farm rides at Om Agri Tourism?",
        answer: "The outing can include both modern recreation and countryside experiences. Guests may enjoy swimming and boating before trying horse riding, tractor rides or bull cart rides, creating a varied itinerary that can work well for families and groups."
    },
    {
        question: "Why consider Om Agri Tourism while searching for a picnic spot near Alandi?",
        answer: "Om Agri Tourism brings outdoor recreation, rural activities, nature and food together in a farm-oriented setting. Visitors from Alandi can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching while taking a refreshing break from their regular surroundings."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Tejas More",
        feedback:
            "Our outing from Alandi became much more enjoyable because there were several different experiences to try. Swimming and boating kept us active, while the horse riding and traditional bull cart ride gave us something memorable to talk about later. The homemade food and open farm surroundings were perfect for relaxing between activities.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss Riya Shinde",
        feedback:
            "The peaceful countryside atmosphere was the highlight of our family visit. Children had fun exploring the outdoor activities and rides, whereas the adults enjoyed bird watching, food and spending time in the greenery. Everyone was able to choose activities according to their comfort, which made the day enjoyable for the whole family.",
        rating: 5
    }
];












    const Images = [
        { place: "/images/keyword/1.jpg", text: "One Day Picnic Spot Near Pune for Family", link: "one-day-picnic-spot-near-pune-for-family" },
        { place: "/images/keyword/2.jpg", text: "One Day Trip Near Pune", link: "one-day-trip-near-pune" },
        { place: "/images/keyword/3.jpg", text: "Picnic Spot Near Pune", link: "picnic-spot-near-pune" },
        { place: "/images/keyword/4.jpg", text: "Picnic Destination Near Pune", link: "picnic-destination-near-pune" },
        { place: "/images/keyword/5.jpg", text: "Corporate Outing Resorts Near Pune", link: "corporate-outing-resorts-near-pune" },
        { place: "/images/keyword/6.jpg", text: "Agri Tourism Near Pune", link: "agri-tourism-near-pune" },
        { place: "/images/keyword/7.jpg", text: "Destination Wedding Near Pune", link: "destination-wedding-near-pune" },
        { place: "/images/keyword/8.jpg", text: "Hurda Party Places Near Pune", link: "hurda-party-places-near-pune" },
        { place: "/images/keyword/9.jpg", text: "Water Park Near Pune", link: "water-park-near-pune" },
        { place: "/images/keyword/10.jpg", text: "School Picnic Spots Near Pune for Students", link: "School-Picnic-Spots-Near-Pune-for-Students" },
        { place: "/images/keyword/11.jpg", text: "One Day Adventure Resorts Near Pune", link: "one-day-adventure-resorts-near-pune" },
        { place: "/images/keyword/12.jpg", text: "Resort Near Pune", link: "resort-near-pune" },
        { place: "/images/keyword/13.jpg", text: "Forest Resorts Near Pune", link: "forest-resorts-near-pune" },
        { place: "/images/keyword/14.jpg", text: "Nature Resorts Near Pune for Weekend", link: "nature-resorts-near-pune-for-weekend" },
        { place: "/images/keyword/15.jpg", text: "Mango Mahotsav in Pune", link: "mango-mahotsav-in-pune" },
        { place: "/images/keyword/16.jpg", text: "Krushi Paryatan Kendra Near Pune", link: "krushi-paryatan-kendra-near-pune" },
        { place: "/images/keyword/17.jpg", text: "Camping Places Near Pune", link: "camping-places-near-pune" },
        { place: "/images/keyword/18.jpg", text: "Activities Resort Near Pune", link: "activities-resort-near-pune" },
        { place: "/images/keyword/19.jpg", text: "Agro Tourism Near Mumbai for Family", link: "agro-tourism-near-mumbai-for-family" },
        { place: "/images/keyword/20.jpg", text: "One Day Picnic Spot From Mumbai", link: "one-day-picnic-spot-from-mumbai" },
    ];













const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Picnic Spot Near Alandi",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-alandi.webp",
  "description": "Planning a relaxing day outing and searching for a picnic spot near Alandi? Om Agro Tourism offers a pleasant agro-tourism setting for families, friends, students and groups who want to spend quality time away from the usual city routine. A one day picnic near Alandi provides an opportunity to enjoy an open and peaceful environment while connecting with family and friends. For visitors comparing the best picnic spot near Alandi, the destination can suit different types of day-outing plans, from casual family gatherings and friends' get-togethers to school picnics and group celebrations. Families looking for a picnic resort near Alandi or a one day picnic resort near Alandi can also consider Om Agro Tourism for a comfortable and enjoyable outdoor experience. The natural surroundings and relaxed atmosphere make it a convenient choice for planning a memorable picnic destination near Alandi.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-alandi"
  }
};


    return (
        <div>


<Helmet>
  <title>
    Picnic Spot Near Alandi | Best Picnic Resort & One Day Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Looking for a picnic spot near Alandi? Plan a one day picnic near Alandi with Om Agro Tourism, a peaceful agro-tourism destination suitable for families, friends and group outings."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Alandi, One Day Picnic Spot Near Alandi, Best Picnic Spot Near Alandi, Family Picnic Spot Near Alandi, Picnic Resort Near Alandi, One Day Picnic Resort Near Alandi, Best Resort Near Alandi for Picnic, Family Resort Near Alandi, One Day Trip Near Alandi, Picnic Places Near Alandi, Family Outing Near Alandi, One Day Outing Near Alandi, Agro Tourism Near Alandi, Picnic Destination Near Alandi, Best Picnic Resort Near Alandi"
  />

  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>





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
                                {cardData.keyword}
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="inner-shape"></div>
            </section>


            <ActivitiesSection />


            <VideoSection />












            <section>
                <div className="container-fluid p-0" >
                    <div className="row container-fluid px-md-2">
                        <div className="col-12 col-md-7 bg-foootr">
                            <img src='/images/keyword/145.jpg' alt='img' className='img-fluid' />
                            <h3 className="py-1"
                                style={{
                                    color: '#183765', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >Om Agri Tourism: {cardData.keyword} </h3><p className='fw-bold '>{cardData.headingDescription}</p>

                            <div className="topPlaces">

                                <p className="sectionLead">Top Attractions at Om Agri Tourism</p>
                                {cardData.topPlaces.map((place, index) => (
                                    <article key={index} className="placeCard borderr" tabIndex="0">
                                        <span className="placeBadge">{String(index + 1).padStart(2, "0")}</span>

                                        <div className="placeBody">
                                            <h4 className="placeTitle">{place.title}</h4>
                                            <p className="placeDesc">{place.description}</p>

                                        </div>

                                        <span className="placeArrow" aria-hidden>›</span>
                                    </article>
                                ))}
                            </div>





                            <div className="services-section">
                                {cardData.services.map((service, index) => (
                                    <div className="service-card" key={index}>
                                        <div className="service-content">
                                            <h4>{service.name}</h4>
                                            <span className="line"></span>
                                            <p>{service.description}</p>
                                        </div>

                                        <div className="service-icon">
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                ))}
                            </div>






                        </div>

                        <div className='col-12 col-md-4' >
                            <OurServices />

                            <div className="routeList">
                                {Images.map((e, i) => {
                                    const isExternal = typeof e.link === "string" && /^https?:\/\//i.test(e.link);
                                    const href = isExternal ? e.link : `/${String(e.link || "").replace(/^\/+/, "")}`;

                                    return (
                                        <a
                                            key={e.link || i}
                                            href={href}
                                            className="routeItem"
                                            aria-label={e.text}
                                            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            <div className="routeThumb">
                                                <img src={e.place} alt="" loading="lazy" />
                                            </div>

                                            <div className="routeMeta">
                                                <h6 className="routeTitle">{e.text}</h6>
                                                <span className="routeUnderline" />
                                            </div>

                                            <span className="routeArrow" aria-hidden>›</span>
                                        </a>
                                    );
                                })}
                            </div>





                            <div className="pc-contact">
                                <h4 className="pc-title">Contact Information</h4>

                                <div className="pc-grid">
                                    {/* Phones */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fas fa-phone-alt"></i>
                                            <span>Phone Numbers</span>
                                        </header>

                                        <div className="pc-list">
                                            <a href="tel:+917066665554" className="pc-call">+91 7066665554 </a>
                                        </div>

                                        <div className="pc-list">
                                            <a href="tel:+919145557771" className="pc-call">+91 9145557771 </a>
                                        </div>
                                        <div className="pc-cta">
                                            <a
                                                href="https://wa.me/917066665554
"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="pc-whats"
                                            >
                                                <i className="bi bi-whatsapp"></i> WhatsApp
                                            </a>
                                            <a href="tel:+917066665554" className="pc-primary">
                                                Call Now
                                            </a>
                                        </div>
                                    </section>

                                    {/* Email */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fa-solid fa-envelope"></i>
                                            <span>Email</span>
                                        </header>

                                        <a href="mailto:omagrotourism.com@gmail.com" className="pc-email">
                                            omagrotourism.com@gmail.com
                                        </a>
                                    </section>

                                    {/* Address */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <span>Address</span>
                                        </header>

                                        <address className="pc-address">
                                            <strong>Om Agro Tourism</strong>

                                            bhivare Vadi Road, Ranmala, Koyali Tarf Chakan,
                                            Tel khed , Pune, Maharashtra, 410501



                                        </address>
                                    </section>
                                </div>
                            </div>


                            <TestimonialSectionKeyword
                                testimonials={testimonials}
                            />

                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid row p-0" >

                <div className="py-2 pb-5">


                    <div className="keyword-grid">
                        {cardData.tableData.flat().map((keyword, index) => (
                            <div key={index} className="keyword-item">
                                <span className="keyword-bullet">-</span>
                                {keyword}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div id="why-choose-section" className="why-choose-section">

                        <h2 className="section-title text-dark">
                            Why Choose <span>Om Agri Tourism</span>
                        </h2>

                        <div className="bento-grid">
                            {cardData.whychoose.map((item, index) => (
                                <div className="bento-card" key={index}>

                                    <div className="bento-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <h4>{item.WhyChooseheading}</h4>

                                    <p>{item.WhyChoosedescription}</p>

                                </div>
                            ))}
                        </div>

                    </div>




                </div>
                <div className="col-12 col-md-6 p-0">

                    <div className="row twm-faq-section-1 m-b30">


                        <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                            <div className="twm-faq-info-wrap">

                                <div className="section-head left">
                                    <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Om Agri Tourism</h2>
                                </div>


                                <div className="twm-faq-info">
                                    <div className="accordion twm-acdn" id="sf-faq-accordion">

                                        <FaqSection
                                            title=""
                                            subtitle=""
                                            items={faqData}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PicnicSpotNearAlandi;