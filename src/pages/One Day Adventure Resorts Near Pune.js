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

function OnedayAdventureResortsNearPune() {


const cardData = {
    keyword: "One Day Adventure Resorts Near Pune",
    headingDescription: "Looking for one day adventure resorts near Pune for a refreshing escape? Om Agro Tourism combines countryside surroundings with exciting outdoor activities, farm experiences, recreational fun, and relaxing spaces, making it a suitable choice for families, friends, corporate groups, and one-day outings near Pune.",

    topPlaces: [
        {
            title: "Adventure Activity Zone",
            description: "Enjoy an exciting collection of outdoor recreational activities that add energy and fun to a one-day outing. The adventure-focused setting gives families, friends, and groups opportunities to participate together while enjoying the open countryside atmosphere."
        },
        {
            title: "Farm Exploration Experience",
            description: "Discover the charm of rural surroundings through a relaxing farm exploration experience. Visitors can spend time around agricultural spaces, observe countryside life, and enjoy a refreshing break from the busy city environment."
        },
        {
            title: "Swimming and Water Recreation",
            description: "Cool down after outdoor activities with refreshing water-based recreation. The combination of swimming and countryside surroundings creates a balanced day where visitors can switch between energetic activities and relaxed leisure time."
        },
        {
            title: "Bullock Cart Village Ride",
            description: "Experience a traditional rural activity with a memorable bullock cart ride through the farm environment. It adds a cultural and countryside element to an adventure day and can be enjoyed by families and group visitors."
        },
        {
            title: "Outdoor Group Games",
            description: "Make the outing more engaging with outdoor games designed around group participation and friendly competition. These activities are especially useful for families, friends, school groups, and corporate teams looking for shared entertainment."
        },
        {
            title: "Nature Walk and Countryside Trail",
            description: "Take a leisurely walk through the natural surroundings and enjoy fresh air, open landscapes, and peaceful farm views. A nature-focused activity provides a relaxing contrast to the more energetic adventure experiences."
        },
        {
            title: "Traditional Maharashtrian Food Experience",
            description: "Complete the day with delicious traditional food in a peaceful rural setting. Enjoying regional flavours after outdoor activities adds a warm local touch to the overall one-day adventure resort experience."
        },
        {
            title: "Family Adventure Recreation",
            description: "Families can enjoy a combination of outdoor recreation, farm activities, water fun, and open spaces in one destination. The varied experiences make it easier for different age groups to find something enjoyable during the outing."
        },
        {
            title: "Corporate Team Activity Experience",
            description: "Corporate groups can use the open environment for team interaction, recreational games, and informal bonding. A change from the regular office setting helps employees relax while participating in activities together."
        },
        {
            title: "Countryside Relaxation Area",
            description: "After an active day, visitors can slow down and enjoy the calm surroundings of the farm. Open spaces, greenery, and a peaceful rural atmosphere provide a comfortable way to finish a fun-filled one-day outing."
        }
    ],

    services: [
        {
            name: "One day adventure resorts near pune",
            description: "Enjoy a memorable one-day adventure experience near Pune with outdoor recreation, farm activities, water fun, traditional experiences, and peaceful countryside surroundings suitable for different types of groups."
        },
        {
            name: "Adventure resort pune day out",
            description: "Plan an enjoyable Pune day out with a mix of adventure activities, nature experiences, group recreation, traditional food, and relaxing farm surroundings for a refreshing break from the city."
        },
        {
            name: "One Day Adventure Resort Near Pune",
            description: "A convenient option for visitors searching for a one-day adventure resort near Pune where outdoor activities, rural experiences, water recreation, and leisure can be combined into a single outing."
        },
        {
            name: "One day adventure resorts near pune",
            description: "Experience an activity-filled day near Pune with adventure recreation, farm exploration, group games, water activities, and a peaceful countryside environment suitable for families and groups."
        },
        {
            name: "1 Day Adventure Resort Near Pune",
            description: "Enjoy a short adventure getaway with exciting outdoor activities, farm-based experiences, traditional food, and relaxing open spaces without requiring a long vacation away from Pune."
        },
        {
            name: "Best adventure resorts near pune for day outing",
            description: "Choose a countryside destination for an engaging day outing featuring adventure activities, nature exploration, group entertainment, water recreation, and traditional rural experiences."
        },
        {
            name: "Adventure resorts near Pune for corporate outing",
            description: "Create an enjoyable corporate outing with outdoor group activities, team recreation, farm surroundings, informal interaction, and opportunities for employees to relax away from their regular office routine."
        },
        {
            name: "Resorts near Pune for family one day trip",
            description: "Families can enjoy a balanced one-day trip with outdoor recreation, water activities, countryside exploration, traditional food, and relaxing spaces that accommodate different age groups."
        },
        {
            name: "One day picnic resorts with activities near Pune",
            description: "Make a one-day picnic more engaging with a combination of adventure recreation, farm experiences, outdoor games, water fun, food, and peaceful surroundings for families and groups."
        },
        {
            name: "adventure park in pune for family",
            description: "Families looking for adventure-focused recreation can enjoy outdoor activities, group games, nature experiences, and refreshing countryside surroundings in a setting designed for shared enjoyment."
        },
        {
            name: "best adventure resort in pune",
            description: "Discover an adventure-oriented countryside destination that brings together recreational activities, farm experiences, traditional food, water fun, and relaxing outdoor spaces for a complete day experience."
        },
        {
            name: "adventure resorts near pune for family",
            description: "Enjoy family time through a combination of adventure activities, farm exploration, water recreation, outdoor games, and traditional rural experiences in a peaceful environment."
        },
        {
            name: "one day picnic resorts with activities near pune",
            description: "Turn a regular picnic into an activity-filled getaway with outdoor recreation, countryside exploration, group games, water-based fun, and traditional food experiences in one destination."
        },
        {
            name: "Om Agro Tourism Adventure Resort",
            description: "Om Agro Tourism brings adventure, farm experiences, outdoor recreation, traditional rural activities, and countryside relaxation together for families, friends, and corporate groups planning a memorable outing near Pune."
        }
    ],

    tableData: [
        ["One day adventure resorts near pune", "Enjoy a complete one-day getaway with adventure activities, farm experiences, outdoor recreation, water fun, and peaceful countryside surroundings near Pune."],
        ["Adventure resort pune day out", "Plan an energetic Pune day out with outdoor activities, nature experiences, group games, traditional food, and relaxing farm surroundings."],
        ["One Day Adventure Resort Near Pune", "Experience an activity-filled one-day resort outing combining adventure recreation, farm exploration, water activities, and rural leisure."],
        ["One day adventure resorts near pune", "Spend a refreshing day away from the city with adventure activities, countryside exploration, group entertainment, and relaxing open spaces."],
        ["1 Day Adventure Resort Near Pune", "Enjoy a short adventure escape featuring outdoor recreation, farm activities, water fun, traditional experiences, and peaceful natural surroundings."],
        ["Best adventure resorts near pune for day outing", "Make the most of a day outing with adventure activities, nature exploration, outdoor games, family recreation, and traditional countryside experiences."],
        ["Adventure resorts near Pune for corporate outing", "Give corporate teams a refreshing break with group activities, team recreation, open spaces, farm experiences, and opportunities for informal employee interaction."],
        ["Resorts near Pune for family one day trip", "Families can enjoy outdoor activities, water recreation, farm exploration, traditional food, and peaceful leisure during a convenient one-day trip."],
        ["One day picnic resorts with activities near Pune", "Combine picnic relaxation with adventure recreation, group games, nature activities, farm experiences, and water fun for an engaging day."],
        ["adventure park in pune for family", "Enjoy family-friendly outdoor recreation with adventure activities, nature experiences, group games, and refreshing countryside surroundings."],
        ["best adventure resort in pune", "Explore a complete adventure-focused outing with farm activities, outdoor recreation, water fun, traditional food, and peaceful rural surroundings."],
        ["adventure resorts near pune for family", "Create memorable family time through adventure activities, farm exploration, water recreation, outdoor games, and traditional rural experiences."],
        ["one day picnic resorts with activities near pune", "Enjoy an activity-packed picnic with outdoor games, adventure recreation, countryside exploration, water activities, and delicious traditional food."],
        ["Om Agro Tourism Adventure Resort", "Om Agro Tourism offers a countryside adventure experience with farm activities, outdoor recreation, water fun, traditional experiences, and relaxing spaces for day visitors."]
    ],

    whychoose: [
        {
            WhyChooseheading: "Adventure and Countryside Experience",
            WhyChoosedescription: "Om Agro Tourism combines active outdoor recreation with peaceful farm surroundings, allowing visitors to enjoy adventure while still having plenty of opportunities to relax and connect with nature."
        },
        {
            WhyChooseheading: "Suitable for Family Outings",
            WhyChoosedescription: "Families can enjoy a varied day with outdoor activities, water recreation, farm experiences, traditional food, and open spaces that make the outing engaging for different age groups."
        },
        {
            WhyChooseheading: "Fun for Corporate Groups",
            WhyChoosedescription: "The open countryside environment provides a refreshing setting for corporate teams to participate in group activities, enjoy informal interaction, and take a meaningful break from the workplace."
        },
        {
            WhyChooseheading: "Variety of Outdoor Activities",
            WhyChoosedescription: "A combination of adventure recreation, group games, farm exploration, nature activities, and rural experiences gives visitors multiple ways to spend their day instead of depending on a single attraction."
        },
        {
            WhyChooseheading: "Refreshing Break from City Life",
            WhyChoosedescription: "The peaceful farm environment offers a welcome change from traffic, crowded urban spaces, and daily routines, creating a refreshing atmosphere for a short getaway near Pune."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Along with adventure and recreation, visitors can experience elements of rural Maharashtra through farm surroundings, traditional activities, countryside exploration, and regional food."
        },
        {
            WhyChooseheading: "Good Choice for One-Day Plans",
            WhyChoosedescription: "The combination of activities and leisure experiences makes it practical for visitors who want an enjoyable one-day outing without planning an extended vacation or overnight itinerary."
        },
        {
            WhyChooseheading: "Memorable Group Recreation",
            WhyChoosedescription: "Shared adventure activities, outdoor games, food, nature experiences, and relaxed conversations create opportunities for families, friends, and colleagues to spend meaningful time together."
        }
    ]
};





const faqData = [
    {
        question: "Is Om Agri Tourism a good one day adventure resort near Pune?",
        answer: "Om Agri Tourism is a refreshing option for people looking for a one day adventure resort near Pune with a mix of outdoor recreation and countryside experiences. Visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching while spending a full day in a peaceful farm environment."
    },
    {
        question: "What adventure activities can we enjoy at Om Agri Tourism?",
        answer: "Guests at Om Agri Tourism can enjoy a variety of outdoor experiences, including swimming, boating, horse riding, tractor rides and bull cart rides. Bird watching and exploring the farm surroundings add a nature-oriented element to the day, making the outing enjoyable for families and groups."
    },
    {
        question: "Is Om Agri Tourism suitable for a one day adventure outing near Pune?",
        answer: "Those planning a one day adventure outing near Pune can enjoy a combination of recreational and farm-based experiences at Om Agri Tourism. The destination allows visitors to spend the day outdoors, participate in different activities and relax in a natural setting without planning an overnight trip."
    },
    {
        question: "Can families visit Om Agri Tourism for an adventure day near Pune?",
        answer: "Families can enjoy an active day at Om Agri Tourism with experiences suitable for both children and adults. Swimming, boating, tractor rides, bird watching and other outdoor activities provide opportunities for family members to have fun together while exploring the countryside."
    },
    {
        question: "Is Om Agri Tourism suitable for friends looking for adventure resorts near Pune?",
        answer: "Friends can choose Om Agri Tourism for a lively day away from the city, with several activities that encourage shared experiences. Boating, swimming, horse riding, tractor rides and bull cart rides give groups different ways to enjoy their outing and create memorable moments together."
    },
    {
        question: "Can children enjoy outdoor adventure activities at Om Agri Tourism?",
        answer: "Children can enjoy several outdoor experiences at Om Agri Tourism depending on their age and comfort. Activities such as boating, swimming, tractor rides and bird watching can keep younger visitors engaged, while parents or accompanying adults can supervise them appropriately."
    },
    {
        question: "Does Om Agri Tourism offer swimming and boating?",
        answer: "Yes, Om Agri Tourism offers both swimming and boating as part of its recreational experiences. These water-based activities can add excitement to a one day outing, while visitors can also participate in horse riding, farm rides and nature-based activities during the same visit."
    },
    {
        question: "Can visitors experience rural activities at Om Agri Tourism?",
        answer: "Along with recreational activities, Om Agri Tourism provides opportunities to experience traditional countryside activities. Bull cart rides, tractor rides and horse riding allow visitors to enjoy a different type of outdoor experience while surrounded by farmland and greenery."
    },
    {
        question: "Is homemade food available during an adventure day at Om Agri Tourism?",
        answer: "Visitors can enjoy homemade food during their day at Om Agri Tourism. A traditional meal complements the outdoor activities and gives guests a chance to relax and recharge while enjoying the farm atmosphere and spending time with family or friends."
    },
    {
        question: "Why choose Om Agri Tourism among one day adventure resorts near Pune?",
        answer: "Om Agri Tourism combines adventure-style recreation with nature and authentic farm experiences. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide plenty of activities for a one day outing, while the peaceful surroundings and homemade food create a complete countryside experience."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohan Babar",
        feedback:
            "Our friends planned a one day adventure outing at Om Agri Tourism and the experience was full of fun. We enjoyed boating, swimming and the tractor ride, and everyone had something interesting to try. The peaceful farm surroundings made the outing even better than we expected.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Shreya More",
        feedback:
            "Om Agri Tourism was a great choice for our family adventure day near Pune. We enjoyed horse riding and the bull cart ride, while the children loved swimming and exploring the farm. The homemade food and greenery made the entire day feel relaxed as well as exciting.",
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
        { place: "/images/keyword/10.jpg", text: "School Picnic Spots Near Pune for Students", link: "school-picnic-spots-near-pune-for-students" },
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
  "name": "One Day Adventure Resorts Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/one-day-adventure-resorts-near-pune.webp",
  "description": "Om Agro Tourism offers an exciting countryside destination for visitors searching for One Day Adventure Resorts Near Pune and planning an active outdoor escape with family, friends, colleagues or groups. One day adventure resorts near Pune can be an excellent option for people who want to combine recreation, nature and group activities without spending multiple days away from the city. Visitors searching for an Adventure resort Pune day out can enjoy a refreshing change from their regular routine while spending quality time in open and natural surroundings. A One Day Adventure Resort Near Pune can suit families, friends, school groups and corporate teams looking for a convenient day outing filled with outdoor experiences and group interaction. For visitors comparing a 1 Day Adventure Resort Near Pune, Om Agro Tourism provides an agro-tourism atmosphere where recreation can be combined with countryside exploration and leisure. People looking for the Best adventure resorts near Pune for day outing can consider a destination that offers a relaxed setting for group recreation, outdoor fun and memorable shared experiences. Corporate teams searching for Adventure resorts near Pune for corporate outing can plan employee outings, team bonding activities, informal gatherings and recreational programs in a peaceful environment away from the office. Resorts near Pune for family outings can also provide an enjoyable setting for parents and children to spend quality time together while experiencing nature and outdoor activities. Om Agro Tourism can accommodate different types of groups planning weekend outings, family picnics, corporate day trips, friends' gatherings and recreational visits. The countryside atmosphere creates opportunities for visitors to disconnect from the busy urban environment and enjoy a more engaging outdoor experience. Families can explore open surroundings, while teams and groups can participate in activities that encourage interaction and togetherness. With its combination of agro-tourism, nature and adventure-oriented recreation, Om Agro Tourism offers a memorable choice for people searching for one-day adventure resorts and day outing destinations near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/one-day-adventure-resorts-near-pune"
  }
};








    return (
        <div>


<Helmet>
  <title>
    One Day Adventure Resorts Near Pune | Adventure Day Out & Family Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers an exciting one-day adventure resort experience near Pune for families, corporate teams, friends and groups seeking outdoor recreation."
  />

  <meta
    name="keywords"
    content="One Day Adventure Resorts Near Pune, One day adventure resorts near Pune, Adventure resort Pune day out, One Day Adventure Resort Near Pune, 1 Day Adventure Resort Near Pune, Best adventure resorts near Pune for day outing, Adventure resorts near Pune for corporate outing, Resorts near Pune for family, adventure resorts near Pune, adventure resort near Pune, adventure places near Pune, adventure outing near Pune, one day adventure outing near Pune, adventure day outing near Pune, best adventure resort near Pune, best adventure resorts near Pune, adventure resort for family near Pune, family adventure resort near Pune, adventure resort for corporate outing near Pune, corporate adventure resort near Pune, corporate day outing near Pune, adventure team outing near Pune, team outing adventure resort near Pune, adventure activities near Pune, outdoor adventure near Pune, outdoor activities near Pune, adventure picnic near Pune, adventure picnic spot near Pune, one day adventure picnic near Pune, weekend adventure resort near Pune, adventure destination near Pune, adventure destination for family near Pune, adventure resort for friends near Pune, friends adventure outing near Pune, group adventure resort near Pune, group outing near Pune, family day outing near Pune, family resorts near Pune, resorts for family outing near Pune, one day resort near Pune, one day resort for family near Pune, day outing resort near Pune, day outing places near Pune, best day outing near Pune, corporate outing places near Pune, corporate team outing near Pune, employee outing resort near Pune, team building resort near Pune, team building activities near Pune, nature adventure resort near Pune, agro tourism adventure near Pune, agro tourism resort near Pune, countryside adventure near Pune, outdoor recreation near Pune, recreational resort near Pune, adventure picnic resort near Pune"
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
                            <img src='/images/keyword/11.jpg' alt='img' className='img-fluid' />
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

export default OnedayAdventureResortsNearPune;