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

function Picnicspotsnearaundhpune() {

const cardData = {
    keyword: "Picnic Spot Near Aundh Pune",
    headingDescription: "Discover a refreshing picnic experience at Om Agro Tourism, an ideal destination for families, friends, and groups looking for a peaceful one-day outing near Aundh Pune. The destination combines rural surroundings, enjoyable activities, homemade food, and outdoor experiences, making it suitable for family picnics, nature breaks, and group get-togethers away from the busy city environment.",
    topPlaces: [
        {
            title: "Bird Watching",
            description: "Bird Watching at Om Agro Tourism gives visitors an opportunity to enjoy peaceful natural surroundings while observing different birds in a relaxing farm environment. It is especially suitable for families and nature lovers seeking a calm picnic activity."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops introduce visitors to agricultural surroundings and rural experiences through engaging activities. This attraction adds an educational and refreshing element to a one-day picnic near Aundh."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide an enjoyable way for families and groups to spend quality time together during their picnic. The variety of recreational options makes the outing more engaging for visitors of different age groups."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride offers a traditional rural experience that connects visitors with the countryside lifestyle. Families can enjoy this distinctive activity while exploring the peaceful atmosphere of the agro tourism destination."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding brings an exciting outdoor element to the picnic experience and can be enjoyed by visitors looking for something different from regular resort activities. It adds an adventurous touch to a family outing near Aundh."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food makes the picnic experience more satisfying with traditional meals prepared in a homely style. It is a convenient choice for families and groups who want to enjoy flavorful food during their day outing."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride gives visitors a closer experience of rural farm life and is a fun activity for families and groups. The attraction adds a unique countryside element to a one-day picnic away from the city."
        },
        {
            title: "Swimming Pool",
            description: "Swimming Pool access provides a refreshing leisure option for visitors who want to relax and enjoy some water-based recreation. It can be a comfortable addition to a family picnic or resort-style day outing."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities offer additional entertainment for visitors looking for an active picnic experience. Families and groups can enjoy refreshing recreational moments while spending their day at the agro tourism destination."
        },
        {
            title: "Boating",
            description: "Boating offers a peaceful recreational experience for visitors who want to include a relaxing water activity in their picnic plan. It adds variety to the day's activities and creates an enjoyable experience for families and groups."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Aundh Pune",
            description: "Om Agro Tourism offers a refreshing picnic spot near Aundh Pune where families, friends, and groups can enjoy open surroundings, rural experiences, recreational activities, and tasty homemade food in a relaxed environment."
        },
        {
            name: "One Day Picnic Spot Near Aundh",
            description: "A convenient one-day picnic spot near Aundh for visitors planning a short break from the city, with farm experiences, outdoor activities, food, and leisure options suitable for a complete day outing."
        },
        {
            name: "Best Picnic Spot Near Aundh Pune",
            description: "Visitors searching for the best picnic spot near Aundh Pune can enjoy a combination of nature, traditional rural experiences, recreational activities, and comfortable spaces for spending quality time with family and friends."
        },
        {
            name: "Family Picnic Spot Near Aundh",
            description: "The family picnic spot near Aundh provides a pleasant setting for parents, children, and relatives to enjoy outdoor recreation, farm activities, homemade food, and memorable moments together."
        },
        {
            name: "Picnic Resort Near Aundh",
            description: "Om Agro Tourism serves as a picnic resort near Aundh where visitors can combine a peaceful rural atmosphere with enjoyable activities, refreshing surroundings, and food options for a comfortable day away from the city."
        },
        {
            name: "One Day Picnic Resort Near Aundh",
            description: "A one-day picnic resort near Aundh can provide families and groups with multiple activities within one destination, making it easier to plan a relaxed outing without requiring an overnight stay."
        },
        {
            name: "Best Resort Near Aundh for Picnic",
            description: "For visitors looking for the best resort near Aundh for picnic plans, Om Agro Tourism brings together farm experiences, recreational activities, traditional attractions, and a peaceful countryside environment."
        },
        {
            name: "Family Resort Near Aundh",
            description: "The family resort near Aundh offers an enjoyable environment for spending time with children and relatives through outdoor recreation, rural activities, food experiences, and relaxing surroundings."
        },
        {
            name: "One Day Trip Near Aundh",
            description: "A one-day trip near Aundh becomes more enjoyable with a destination that combines nature, farm activities, traditional experiences, recreational options, and food in one convenient outing."
        },
        {
            name: "Family One Day Trip Near Aundh",
            description: "Families planning a one-day trip near Aundh can enjoy a balanced outing featuring interactive farm experiences, games, horse riding, traditional rides, food, and relaxing outdoor surroundings."
        },
        {
            name: "Picnic Places Near Aundh",
            description: "Among picnic places near Aundh, Om Agro Tourism provides a countryside setting where visitors can enjoy recreational activities, agricultural experiences, traditional attractions, and homemade meals."
        },
        {
            name: "Best Picnic Places Near Aundh",
            description: "The best picnic places near Aundh should offer more than just open space, and Om Agro Tourism adds farm activities, nature experiences, games, rides, food, and leisure options for a fuller day outing."
        },
        {
            name: "Affordable Picnic Spot Near Aundh",
            description: "An affordable picnic spot near Aundh can make group and family outings easier to plan while still offering a variety of activities, natural surroundings, and enjoyable experiences throughout the day."
        },
        {
            name: "Budget Picnic Resort Near Aundh",
            description: "A budget picnic resort near Aundh is suitable for visitors seeking an enjoyable day outing with multiple recreational options, rural attractions, and food experiences without choosing an overly elaborate getaway."
        },
        {
            name: "Picnic Spot Near Baner Aundh",
            description: "Visitors searching for a picnic spot near Baner Aundh can choose Om Agro Tourism for a change of scenery, with farm-based experiences, outdoor activities, traditional rides, and peaceful countryside surroundings."
        },
        {
            name: "Resort Near Aundh for Family Outing",
            description: "A resort near Aundh for family outing plans should accommodate different age groups, and Om Agro Tourism offers games, farm experiences, rides, food, and leisure activities that families can enjoy together."
        },
        {
            name: "One Day Resort Near Aundh",
            description: "A one-day resort near Aundh provides a practical option for visitors who want a complete recreational break within a single day, combining outdoor experiences, activities, food, and peaceful surroundings."
        },
        {
            name: "Nature Picnic Spot Near Aundh",
            description: "The nature picnic spot near Aundh offers a refreshing escape into a rural environment where visitors can enjoy bird watching, farm surroundings, traditional activities, and open-air recreation."
        },
        {
            name: "Picnic Spot Near Pashan Aundh",
            description: "For visitors looking for a picnic spot near Pashan Aundh, Om Agro Tourism provides a countryside destination with nature-based experiences, recreational activities, farm attractions, and traditional rural entertainment."
        },
        {
            name: "Family Picnic Resort Near Aundh",
            description: "The family picnic resort near Aundh creates opportunities for relatives and children to spend quality time through games, outdoor activities, farm experiences, food, and relaxing recreational moments."
        },
        {
            name: "Picnic Spot Near Pune Aundh",
            description: "A picnic spot near Pune Aundh can be a convenient choice for a short city escape, while Om Agro Tourism adds rural charm, farm experiences, traditional activities, and leisure options to the outing."
        },
        {
            name: "Picnic Spot with Activities Near Aundh",
            description: "A picnic spot with activities near Aundh is ideal for visitors who want more than sightseeing, offering opportunities for games, rides, farm experiences, water recreation, bird watching, and traditional rural activities."
        }
    ],
    tableData: [
        ["Picnic Spot Near Aundh Pune"],
        ["One Day Picnic Spot Near Aundh"],
        ["Best Picnic Spot Near Aundh Pune"],
        ["Family Picnic Spot Near Aundh"],
        ["Picnic Resort Near Aundh"],
        ["One Day Picnic Resort Near Aundh"],
        ["Best Resort Near Aundh for Picnic"],
        ["Family Resort Near Aundh"],
        ["One Day Trip Near Aundh"],
        ["Family One Day Trip Near Aundh"],
        ["Picnic Places Near Aundh"],
        ["Best Picnic Places Near Aundh"],
        ["Affordable Picnic Spot Near Aundh"],
        ["Budget Picnic Resort Near Aundh"],
        ["Picnic Spot Near Baner Aundh"],
        ["Resort Near Aundh for Family Outing"],
        ["One Day Resort Near Aundh"],
        ["Nature Picnic Spot Near Aundh"],
        ["Picnic Spot Near Pashan Aundh"],
        ["Family Picnic Resort Near Aundh"],
        ["Picnic Spot Near Pune Aundh"],
        ["Picnic Spot with Activities Near Aundh"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Environment",
            WhyChoosedescription: "Away from the busy urban surroundings of Aundh, the agro tourism destination provides a refreshing rural atmosphere where families and groups can slow down, enjoy open spaces, and spend meaningful time together."
        },
        {
            WhyChooseheading: "Activities for Different Age Groups",
            WhyChoosedescription: "From indoor and outdoor games to horse riding, tractor rides, and farm experiences, the destination offers varied activities that can keep children, adults, and larger groups engaged throughout their picnic."
        },
        {
            WhyChooseheading: "Ideal for Family Outings",
            WhyChoosedescription: "Families can enjoy a balanced day with recreational activities, traditional rural experiences, food, and relaxing surroundings, making the destination suitable for birthdays, reunions, casual picnics, and weekend breaks."
        },
        {
            WhyChooseheading: "Authentic Farm Experiences",
            WhyChoosedescription: "Farm Tours and Workshops, tractor rides, and bull cart rides introduce visitors to rural life and agricultural surroundings, creating a picnic experience that feels different from a conventional city resort."
        },
        {
            WhyChooseheading: "Refreshing Water Activities",
            WhyChoosedescription: "Swimming Pool and Water Park Activities add a refreshing dimension to the outing, giving families and groups additional ways to relax and have fun during their one-day picnic."
        },
        {
            WhyChooseheading: "Traditional Food Experience",
            WhyChoosedescription: "Tasty Homemade Food adds a comforting culinary element to the visit, allowing guests to enjoy flavorful meals in a setting that complements the rural and agro tourism experience."
        },
        {
            WhyChooseheading: "Suitable for Group Picnics",
            WhyChoosedescription: "The combination of open surroundings, games, rides, farm activities, food, and leisure options makes the destination practical for family gatherings, friend groups, corporate outings, and other group picnic plans."
        },
        {
            WhyChooseheading: "Variety Within a One-Day Visit",
            WhyChoosedescription: "Visitors can build a complete day around nature exploration, recreational activities, traditional rides, water-based fun, and food without needing to travel between multiple destinations for different experiences."
        }
    ]
};





const faqData = [
    {
        question: "Where can Aundh residents enjoy a peaceful picnic away from Pune city?",
        answer: "People from Aundh looking for a refreshing countryside escape can visit Om Agri Tourism for a day surrounded by farm greenery and outdoor experiences. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide different ways to enjoy a relaxed picnic."
    },
    {
        question: "What experiences can visitors from Aundh have at Om Agri Tourism?",
        answer: "A visit can include a combination of recreational and traditional farm activities. Guests may spend time swimming or boating, try horse riding, and explore the countryside through tractor and bull cart rides. Bird watching also gives nature lovers a quieter way to enjoy the farm surroundings."
    },
    {
        question: "Is Om Agri Tourism suitable for families planning a picnic near Aundh Pune?",
        answer: "Families can build an enjoyable day around activities suitable for different age groups. Children can participate in appropriate experiences with adult supervision, while parents can relax around the greenery, enjoy homemade food and take part in activities such as boating, swimming and farm rides."
    },
    {
        question: "How can friends from Aundh spend their day at this picnic destination?",
        answer: "A group of friends can mix energetic activities with relaxed countryside moments throughout the visit. Swimming and boating can be followed by horse riding or traditional rides, while photography, food and bird watching can be added to the itinerary for a more varied day out."
    },
    {
        question: "What activities can children enjoy during a picnic near Aundh?",
        answer: "Children can experience outdoor recreation in a farm environment through activities such as swimming, boating and suitable rides. Bird watching can also encourage them to observe the natural surroundings. Parents and guardians can supervise activities based on the child's age, ability and comfort."
    },
    {
        question: "Does Om Agri Tourism offer traditional countryside activities near Aundh?",
        answer: "The destination gives city visitors an opportunity to enjoy rural experiences alongside regular recreation. Horse riding, tractor rides and bull cart rides bring a traditional touch to the outing, while farm greenery, bird watching and homemade food help create a more authentic countryside atmosphere."
    },
    {
        question: "Can office teams or large groups from Aundh visit Om Agri Tourism?",
        answer: "Large groups can enjoy a flexible day by dividing their time between activities, meals and relaxation. Swimming, boating, horse riding and farm rides can keep participants engaged, while bird watching and the open surroundings provide quieter opportunities for conversation and group bonding."
    },
    {
        question: "Can visitors enjoy homemade food during a picnic at Om Agri Tourism?",
        answer: "A relaxed meal can become an important part of the farm outing, especially after participating in outdoor activities. Guests can enjoy homemade food in the countryside atmosphere and then continue with boating, swimming, horse riding, traditional rides or bird watching."
    },
    {
        question: "What makes an agro tourism picnic different from ordinary picnic places near Aundh?",
        answer: "An agro tourism destination combines leisure with a closer connection to farm life and rural surroundings. Visitors can move between water-based recreation, traditional countryside rides and nature observation while enjoying homemade food, giving the outing more variety than a conventional day spent at a standard picnic location."
    },
    {
        question: "Why should people searching for a picnic spot near Aundh Pune consider Om Agri Tourism?",
        answer: "Om Agri Tourism offers families, friends and groups a chance to enjoy a countryside day with several activities in one setting. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide plenty of choices, while the greenery and homemade food add to the relaxing picnic experience."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Pranav Deshpande",
        feedback:
            "We visited Om Agri Tourism from Aundh with our family and enjoyed the variety of activities available. The children were excited about boating and swimming, while the horse riding and bull cart ride were equally enjoyable for us. The homemade food and calm farm surroundings made it a wonderful day away from the city.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss Anjali Gokhale",
        feedback:
            "Our friends planned a picnic at Om Agri Tourism and had a fun-filled countryside experience. We tried the tractor ride, boating and horse riding, followed by some peaceful time enjoying the greenery and bird watching. The different activities gave everyone something to enjoy throughout the day.",
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
  "name": "Picnic Spot Near Aundh Pune",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-aundh-pune.webp",
  "description": "Picnic Spot Near Aundh Pune is a convenient option for families, friends, couples, school groups, and corporate teams looking for a refreshing one-day escape from the busy city routine. Om Agro Tourism offers an agro-tourism-oriented countryside experience where visitors can enjoy relaxed outdoor time, open surroundings, group recreation, and meaningful moments with their loved ones. A One Day Picnic Spot Near Aundh can be suitable for people who want to enjoy a short outing without arranging an overnight stay. Those searching for the Best Picnic Spot Near Aundh Pune can plan a family day out, friends' gathering, weekend recreation, birthday celebration, or casual group picnic in a peaceful environment. The Family Picnic Spot Near Aundh is suitable for parents with children, extended families, and groups looking for a comfortable way to spend quality time away from the crowded urban atmosphere. Visitors looking for a Picnic Resort Near Aundh or One Day Picnic Resort Near Aundh can consider an agro-tourism destination that brings together countryside surroundings, leisure, outdoor experiences, and group-friendly picnic planning. The Best Resort Near Aundh for Picnic can also be considered by school groups, corporate teams, friends, couples, and families planning a relaxed day trip near Pune. The location is convenient for visitors from Aundh, Baner, Pashan, Wakad, Balewadi, Bavdhan, University Road, Shivajinagar, Kothrud, and nearby Pune areas. It can also be considered by visitors travelling from Pimple Saudagar, Sangvi, Hinjawadi, and surrounding PCMC locations. A visit to Om Agro Tourism offers an opportunity to step away from everyday schedules, enjoy a countryside atmosphere, spend time outdoors, and create memorable experiences with family and friends. Whether the plan is a simple weekend picnic, a school outing, corporate gathering, family get-together, or one-day trip, the agro-tourism setting provides a refreshing alternative to regular city-based recreation.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-aundh-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Picnic Spot Near Aundh Pune | Best One Day Picnic & Family Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a Picnic Spot Near Aundh Pune for families, friends, school groups and corporate outings with a peaceful one-day agro-tourism experience."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Aundh Pune, One Day Picnic Spot Near Aundh, Best Picnic Spot Near Aundh Pune, Family Picnic Spot Near Aundh, Picnic Resort Near Aundh, One Day Picnic Resort Near Aundh, Best Resort Near Aundh for Picnic, One Day Picnic Near Aundh, Picnic Places Near Aundh, Best Picnic Places Near Aundh, Family Picnic Near Aundh, One Day Outing Near Aundh, Best One Day Outing Near Aundh, Picnic Resorts Near Aundh, Family Resort Near Aundh, One Day Trip Near Aundh, Family One Day Trip Near Aundh, Family Outing Near Aundh, Weekend Picnic Near Aundh, School Picnic Spot Near Aundh, School Picnic Near Aundh, Corporate Outing Near Aundh, Agro Tourism Near Aundh, Agro Tourism Near Pune, Picnic Spot Near Baner, One Day Picnic Near Pashan, Picnic Places Near Balewadi, Family Picnic Near Bavdhan, One Day Picnic Near Wakad, Picnic Resort Near Shivajinagar, Family Picnic Near Kothrud, One Day Picnic Near University Road Pune, Picnic Spot Near Pimple Saudagar, Family Picnic Near Sangvi Pune, One Day Picnic Near Hinjawadi, Picnic Spot Near Pune, One Day Picnic Near Pune, Family Picnic Near Pune"
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
                            <img src='/images/keyword/115.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotsnearaundhpune;