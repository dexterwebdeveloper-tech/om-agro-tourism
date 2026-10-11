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

function Picnicspotnearpashanpune() {

const cardData = {
    keyword: "Picnic Spot Near Pashan Pune",
    headingDescription: "Om Agro Tourism is a refreshing choice for families, friends, and groups searching for a picnic spot near Pashan Pune. The destination combines peaceful rural surroundings with farm experiences, recreational activities, traditional rides, water-based entertainment, and homemade food, making it suitable for one-day picnics, family outings, nature breaks, and group get-togethers away from the city's busy routine.",
    topPlaces: [
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops give visitors an opportunity to experience agricultural surroundings and learn more about rural activities. This engaging attraction makes the outing educational as well as enjoyable for families and groups."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching provides a peaceful way to explore the natural environment around the destination. Families and nature lovers can enjoy a quiet outdoor experience while observing birds and spending time away from the urban atmosphere."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride adds a distinctive countryside experience to the picnic. Visitors can enjoy a fun farm-based activity that gives children and adults a different perspective of rural life."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride introduces visitors to a traditional rural mode of transportation and creates a memorable countryside experience. It is particularly enjoyable for families looking to include something different in their one-day outing."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding brings an exciting outdoor activity to the picnic experience. It gives visitors an opportunity to enjoy a traditional recreational activity while spending quality time in the open surroundings."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games offer flexible entertainment for families, friends, and groups. The variety of recreational activities helps keep visitors engaged throughout their picnic and makes the destination suitable for different age groups."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food complements the rural picnic experience with comforting meals prepared in a homely style. Families and groups can enjoy satisfying food while spending their day in the peaceful agro tourism environment."
        },
        {
            title: "Swimming Pool",
            description: "Swimming Pool access provides a refreshing leisure option during a one-day picnic. Visitors can relax and enjoy water-based recreation as part of their family or group outing."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities bring additional fun to the day for visitors who enjoy refreshing recreational experiences. These activities make the destination more appealing for families planning an active picnic."
        },
        {
            title: "Jungle Safari",
            description: "Jungle Safari adds an adventurous element to the outing and gives visitors another way to enjoy the natural surroundings. It can be an interesting addition for families and groups seeking more variety during their picnic."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Pashan Pune",
            description: "Om Agro Tourism provides a refreshing picnic spot near Pashan Pune where families, friends, and groups can enjoy rural surroundings, farm experiences, recreational activities, traditional rides, and homemade food."
        },
        {
            name: "One Day Picnic Spot Near Pashan",
            description: "A one-day picnic spot near Pashan is ideal for visitors looking for a convenient day outing with activities, nature experiences, food, and leisure options available within one destination."
        },
        {
            name: "Best Picnic Spot Near Pashan Pune",
            description: "Visitors searching for the best picnic spot near Pashan Pune can enjoy a combination of countryside atmosphere, farm activities, traditional experiences, games, water recreation, and food."
        },
        {
            name: "Family Picnic Spot Near Pashan",
            description: "The family picnic spot near Pashan offers activities suitable for different age groups, allowing parents, children, and relatives to enjoy games, rides, farm experiences, water activities, and quality time together."
        },
        {
            name: "Picnic Resort Near Pashan",
            description: "Om Agro Tourism works well as a picnic resort near Pashan for visitors who want to exchange the city's busy surroundings for a relaxed countryside setting filled with recreational and farm-based experiences."
        },
        {
            name: "One Day Picnic Resort Near Pashan",
            description: "A one-day picnic resort near Pashan gives families and groups the convenience of enjoying multiple activities at one destination, including farm experiences, outdoor recreation, water activities, and food."
        },
        {
            name: "Best Resort Near Pashan for Picnic",
            description: "For visitors looking for the best resort near Pashan for picnic plans, Om Agro Tourism combines a peaceful rural environment with activities, traditional attractions, recreational options, and homemade meals."
        },
        {
            name: "Family Resort Near Pashan",
            description: "The family resort near Pashan provides a comfortable environment for families to spend time together through games, farm activities, rides, water recreation, and relaxing outdoor experiences."
        },
        {
            name: "One Day Trip Near Pashan",
            description: "A one-day trip near Pashan can become more enjoyable at a destination offering farm tours, nature experiences, recreational activities, traditional rides, water-based entertainment, and food."
        },
        {
            name: "Family One Day Trip Near Pashan",
            description: "Families planning a one-day trip near Pashan can enjoy a varied outing with child-friendly activities, outdoor recreation, rural experiences, traditional rides, swimming, and homemade food."
        },
        {
            name: "Picnic Places Near Pashan",
            description: "Among picnic places near Pashan, Om Agro Tourism offers a distinctive countryside setting where visitors can enjoy agricultural experiences, games, rides, water activities, nature, and food."
        },
        {
            name: "Best Picnic Places Near Pashan",
            description: "The best picnic places near Pashan can offer more than a simple open space, and Om Agro Tourism adds farm experiences, recreational activities, traditional attractions, and refreshing leisure options."
        },
        {
            name: "Affordable Picnic Spot Near Pashan",
            description: "An affordable picnic spot near Pashan can make a family or group outing easier to plan while providing access to varied activities, natural surroundings, food experiences, and enjoyable recreational moments."
        },
        {
            name: "Budget Picnic Resort Near Pashan",
            description: "A budget picnic resort near Pashan is suitable for visitors seeking a complete day outing with countryside surroundings, farm-based activities, traditional experiences, games, and leisure options."
        },
        {
            name: "Picnic Spot Near Pashan Lake",
            description: "Visitors searching for a picnic spot near Pashan Lake can choose Om Agro Tourism for a change of scenery, with rural surroundings, farm experiences, outdoor activities, traditional rides, and recreational attractions."
        },
        {
            name: "Resort Near Pashan for Family Outing",
            description: "A resort near Pashan for family outing plans should provide activities for different age groups, and Om Agro Tourism brings together games, rides, farm experiences, water recreation, and food in one destination."
        },
        {
            name: "One Day Resort Near Pashan",
            description: "A one-day resort near Pashan provides a practical option for people who want a refreshing break without planning an overnight stay, with activities and leisure experiences available throughout the day."
        },
        {
            name: "Nature Picnic Spot Near Pashan",
            description: "The nature picnic spot near Pashan offers a peaceful rural environment where visitors can enjoy bird watching, farm surroundings, outdoor experiences, and traditional activities away from the city's crowded atmosphere."
        },
        {
            name: "Picnic Spot Near Baner Pashan",
            description: "For visitors looking for a picnic spot near Baner Pashan, Om Agro Tourism offers a countryside escape with farm activities, recreational options, traditional rides, water entertainment, and homemade food."
        },
        {
            name: "Family Picnic Resort Near Pashan",
            description: "The family picnic resort near Pashan creates opportunities for relatives and children to enjoy meaningful time together through games, farm experiences, rides, water activities, and relaxing outdoor surroundings."
        },
        {
            name: "Picnic Spot Near Pune Pashan",
            description: "A picnic spot near Pune Pashan can be a convenient choice for a short escape, while Om Agro Tourism adds rural charm through farm experiences, nature activities, traditional attractions, recreation, and food."
        },
        {
            name: "Picnic Spot with Activities Near Pashan",
            description: "A picnic spot with activities near Pashan is suitable for visitors who want more than sightseeing, with options such as farm tours, games, horse riding, tractor rides, water activities, bird watching, and traditional experiences."
        }
    ],
    tableData: [
        ["Picnic Spot Near Pashan Pune"],
        ["One Day Picnic Spot Near Pashan"],
        ["Best Picnic Spot Near Pashan Pune"],
        ["Family Picnic Spot Near Pashan"],
        ["Picnic Resort Near Pashan"],
        ["One Day Picnic Resort Near Pashan"],
        ["Best Resort Near Pashan for Picnic"],
        ["Family Resort Near Pashan"],
        ["One Day Trip Near Pashan"],
        ["Family One Day Trip Near Pashan"],
        ["Picnic Places Near Pashan"],
        ["Best Picnic Places Near Pashan"],
        ["Affordable Picnic Spot Near Pashan"],
        ["Budget Picnic Resort Near Pashan"],
        ["Picnic Spot Near Pashan Lake"],
        ["Resort Near Pashan for Family Outing"],
        ["One Day Resort Near Pashan"],
        ["Nature Picnic Spot Near Pashan"],
        ["Picnic Spot Near Baner Pashan"],
        ["Family Picnic Resort Near Pashan"],
        ["Picnic Spot Near Pune Pashan"],
        ["Picnic Spot with Activities Near Pashan"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Refreshing Rural Surroundings",
            WhyChoosedescription: "The countryside environment creates a welcome change from the busy Pashan and Pune city routine, allowing families and groups to enjoy open surroundings and a more relaxed picnic atmosphere."
        },
        {
            WhyChooseheading: "Varied Picnic Experiences",
            WhyChoosedescription: "Visitors can combine nature exploration, farm activities, traditional rides, games, water recreation, and food during the same visit, making the outing more engaging than a simple picnic in an open area."
        },
        {
            WhyChooseheading: "Family-Friendly Activities",
            WhyChoosedescription: "Activities such as indoor and outdoor games, horse riding, tractor rides, farm experiences, and water recreation give children and adults several ways to enjoy their time together."
        },
        {
            WhyChooseheading: "Connection With Farm Life",
            WhyChoosedescription: "Farm Tours and Workshops provide an opportunity to experience agricultural surroundings and rural activities, making the visit both entertaining and informative for families and groups."
        },
        {
            WhyChooseheading: "Traditional Rural Attractions",
            WhyChoosedescription: "Bull Cart Ride and Tractor Ride bring an authentic countryside character to the outing, giving visitors memorable experiences that are different from conventional city recreation."
        },
        {
            WhyChooseheading: "Water-Based Recreation",
            WhyChoosedescription: "Swimming Pool and Water Park Activities provide refreshing entertainment for visitors who prefer adding water-based fun to their one-day picnic itinerary."
        },
        {
            WhyChooseheading: "Comforting Food Experience",
            WhyChoosedescription: "Tasty Homemade Food complements the day with flavorful, homely meals and adds a traditional culinary element to the overall agro tourism experience."
        },
        {
            WhyChooseheading: "Convenient One-Day Getaway",
            WhyChoosedescription: "The combination of multiple attractions in one destination makes it practical for families, friends, school groups, and other visitors planning a complete picnic without needing to visit several different places."
        }
    ]
};




const faqData = [
    {
        question: "Where can people from Pashan Pune enjoy a peaceful day picnic?",
        answer: "Visitors from Pashan who want to step away from the city's busy routine can consider Om Agri Tourism for a countryside outing. The farm environment combines greenery with swimming, boating, horse riding, tractor rides, bull cart rides and bird watching, along with homemade food for a comfortable day trip."
    },
    {
        question: "What activities can be enjoyed at Om Agri Tourism near Pashan?",
        answer: "Guests can build their picnic around several outdoor experiences. Swimming and boating are suitable for those seeking active recreation, while horse riding, tractor rides and bull cart rides provide a traditional rural touch. Bird watching is another option for visitors who enjoy spending time in nature."
    },
    {
        question: "Is Om Agri Tourism a suitable family picnic spot near Pashan Pune?",
        answer: "Families can enjoy a flexible outing by choosing activities suitable for both children and adults. Younger visitors can participate in appropriate experiences with supervision, while parents can relax in the green surroundings, enjoy homemade food and take part in boating, swimming or countryside rides."
    },
    {
        question: "How can friends from Pashan spend their picnic day at Om Agri Tourism?",
        answer: "Friends can keep the outing lively with swimming, boating and horse riding before exploring tractor or bull cart rides. The group can also include photography, meals and bird watching in the schedule, creating a combination of fun activities and relaxed moments in the countryside."
    },
    {
        question: "What can children experience at a picnic spot near Pashan?",
        answer: "A visit to Om Agri Tourism can introduce children to outdoor experiences such as swimming, boating and suitable farm rides. Bird watching can add a nature-based activity to the day, while the open farm surroundings provide a change from typical urban recreational spaces. Adult supervision is recommended during activities."
    },
    {
        question: "Does Om Agri Tourism provide a rural experience for visitors from Pashan?",
        answer: "The farm setting gives city visitors an opportunity to enjoy activities associated with countryside life. Horse riding, tractor rides and bull cart rides can be combined with bird watching and farm surroundings, while homemade food adds another traditional element to the overall rural outing."
    },
    {
        question: "Can groups from Pashan plan a full day outing at Om Agri Tourism?",
        answer: "Groups can spread different experiences throughout the day instead of following a fixed activity schedule. Swimming and boating can be followed by horse riding or traditional farm rides, with time reserved for food, photography, bird watching and relaxation so everyone can enjoy the visit comfortably."
    },
    {
        question: "Is homemade food available during a picnic at Om Agri Tourism near Pashan?",
        answer: "Homemade food can be enjoyed as part of the relaxed farm experience and gives visitors a chance to take a comfortable break during their outing. After the meal, guests can return to activities such as swimming, boating, horse riding, tractor rides, bull cart rides or bird watching."
    },
    {
        question: "Why choose an agro tourism picnic instead of a regular picnic place near Pashan?",
        answer: "An agro tourism destination combines leisure with farm-based and rural experiences, giving visitors more variety than a simple outdoor gathering. Guests can enjoy water activities, traditional rides, nature observation and homemade food while spending quality time in a green countryside environment."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Pashan Pune?",
        answer: "Om Agri Tourism provides families, friends and groups with several ways to enjoy a countryside day away from the city. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching create a varied itinerary, while homemade food and peaceful farm surroundings make the picnic more enjoyable."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Tejas Mahajan",
        feedback:
            "We travelled from Pashan with our family and spent a wonderful day at Om Agri Tourism. The children enjoyed swimming and boating, while the horse riding and tractor ride were fun for the adults too. We liked the peaceful greenery and homemade food, which made the outing feel completely different from a regular city picnic.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Shweta Nair",
        feedback:
            "Our friends' group visited Om Agri Tourism for a day away from Pune's busy routine. We enjoyed the bull cart ride, boating and horse riding, and later spent some quiet time bird watching and taking photographs. The variety of activities and pleasant farm atmosphere made it a memorable picnic near Pashan.",
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
  "name": "Picnic Spot Near Pashan Pune",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-pashan-pune.webp",
  "description": "Picnic Spot Near Pashan Pune is a convenient choice for families, friends, couples, school groups, and corporate teams looking for a refreshing one-day escape from the city's busy routine. Om Agro Tourism offers an agro-tourism-oriented countryside experience where visitors can enjoy open surroundings, outdoor leisure, group recreation, and meaningful time with their loved ones. A One Day Picnic Spot Near Pashan can be suitable for people who want a short break without planning an overnight trip. Those searching for the Best Picnic Spot Near Pashan Pune can plan family outings, weekend recreation, birthdays, casual celebrations, friends' get-togethers, or group picnics in a peaceful outdoor setting. The Family Picnic Spot Near Pashan is suitable for parents with children, extended families, and groups who want to enjoy quality time away from crowded urban spaces. Visitors looking for a Picnic Resort Near Pashan or One Day Picnic Resort Near Pashan can consider an agro-tourism destination that combines a countryside atmosphere with opportunities for relaxation and outdoor experiences. The Best Resort Near Pashan for Picnic can be considered by school groups, corporate teams, families, friends, and couples planning a convenient day outing near Pune. The location can be suitable for visitors from Pashan, Baner, Aundh, Bavdhan, Kothrud, Wakad, Balewadi, Sus, University Road, Shivajinagar, and nearby Pune areas. It can also be considered by people travelling from Hinjawadi, Pimple Saudagar, Sangvi, and surrounding PCMC locations. An outing at Om Agro Tourism gives visitors an opportunity to step away from everyday schedules, enjoy a countryside environment, spend time outdoors, and create memorable moments together. Whether the plan involves a family picnic, school excursion, corporate gathering, friends' trip, birthday celebration, or relaxed weekend outing, the agro-tourism setting offers a refreshing alternative to regular city recreation. Visitors can plan their day according to their group requirements and enjoy a comfortable outdoor experience near Pashan Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-pashan-pune"
  }
};





    return (
        <div>
<Helmet>
  <title>
    Picnic Spot Near Pashan Pune | Best One Day Picnic & Family Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a Picnic Spot Near Pashan Pune for families, friends, school groups and corporate outings with a peaceful one-day agro-tourism experience."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Pashan Pune, One Day Picnic Spot Near Pashan, Best Picnic Spot Near Pashan Pune, Family Picnic Spot Near Pashan, Picnic Resort Near Pashan, One Day Picnic Resort Near Pashan, Best Resort Near Pashan for Picnic, One Day Picnic Near Pashan, Picnic Places Near Pashan, Best Picnic Places Near Pashan, Family Picnic Near Pashan, One Day Outing Near Pashan, Best One Day Outing Near Pashan, Picnic Resorts Near Pashan, Family Resort Near Pashan, One Day Trip Near Pashan, Family One Day Trip Near Pashan, Family Outing Near Pashan, Weekend Picnic Near Pashan, School Picnic Spot Near Pashan, School Picnic Near Pashan, Corporate Outing Near Pashan, Agro Tourism Near Pashan, Agro Tourism Near Pune, Picnic Spot Near Baner, One Day Picnic Near Aundh, Picnic Places Near Bavdhan, Family Picnic Near Kothrud, One Day Picnic Near Wakad, Picnic Resort Near Balewadi, Family Picnic Near Sus Pune, One Day Picnic Near University Road Pune, Picnic Spot Near Shivajinagar, Family Picnic Near Hinjawadi, One Day Picnic Near Pimple Saudagar, Picnic Spot Near Sangvi Pune, One Day Picnic Near Pune, Family Picnic Near Pune"
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
                            <img src='/images/keyword/117.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearpashanpune;