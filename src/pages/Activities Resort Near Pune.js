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

function ActivitiesResortnearpune() {


const cardData = {
    keyword: "Activities Resort Near Pune",
    headingDescription: "Looking for an Activities Resort Near Pune where adventure, family recreation, nature, and relaxation can be enjoyed together? Om Agri Tourism provides a countryside destination with a wide range of farm-based, outdoor, water, recreational, and group activities, making it suitable for families, friends, corporate teams, couples, and visitors planning a one-day outing. The destination offers experiences such as farm tours, tractor rides, bullock cart rides, horse riding, swimming, boating, indoor and outdoor games, nature exploration, and other recreational activities in a peaceful agricultural environment. Visitors searching for Resorts near Pune with activities, adventure resorts near Pune, one day picnic resorts with activities near Pune, or Best resorts near Pune with activities can enjoy a combination of entertainment and rural experiences instead of a conventional resort visit. Corporate groups can also plan team outings with group games and outdoor recreation, while families can spend quality time together through nature walks, farm activities, water recreation, and traditional countryside experiences. Located around Koyali Tarf Chakan, Om Agri Tourism is a convenient option for people looking for an activity-focused resort near Pune that offers opportunities for both energetic recreation and relaxed countryside leisure. The variety of experiences makes it suitable for day trips, one-day adventure plans, family outings, corporate gatherings, and weekend-style escapes. ([omagrotourism.com](https://omagrotourism.com/Activities-Resort-Near-Pune?utm_source=chatgpt.com))",

    topPlaces: [
        {
            title: "Adventure Activity Zone",
            description: "Enjoy an energetic day with outdoor recreational activities designed for visitors who want more than a conventional resort experience. The open surroundings provide space for adventure, group participation, and memorable outdoor fun."
        },
        {
            title: "Farm Exploration Experience",
            description: "Explore the agricultural surroundings through farm walks and interactive rural experiences. Visitors can discover the farming environment while enjoying a peaceful break surrounded by greenery and open countryside."
        },
        {
            title: "Swimming and Water Recreation",
            description: "Cool down with swimming and water-based recreation during a family or group outing. Water activities add an enjoyable element to the day while providing a refreshing break between outdoor experiences."
        },
        {
            title: "Traditional Bullock Cart Ride",
            description: "Experience a traditional rural activity through a bullock cart ride around the farm environment. This activity offers visitors a closer connection with village culture while creating an enjoyable experience for families and groups."
        },
        {
            title: "Horse Riding Experience",
            description: "Horse riding provides an exciting outdoor activity for visitors who enjoy animals and countryside recreation. The farm surroundings make the experience more engaging while adding variety to a day at the resort."
        },
        {
            title: "Tractor Farm Ride",
            description: "Experience the agricultural side of the destination through a fun tractor ride around the farmland. It offers families and children an entertaining way to explore the farm and understand rural life."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Make the outing more energetic with indoor and outdoor games suitable for groups and different age categories. Team games and recreational sports can create opportunities for interaction, laughter, and friendly competition."
        },
        {
            title: "Boating and Countryside Leisure",
            description: "Enjoy a relaxed boating experience surrounded by the peaceful farm environment. It provides a slower-paced activity for visitors who want to balance adventure and recreation with moments of calm."
        },
        {
            title: "Nature and Bird Watching",
            description: "Spend time observing the natural surroundings and discovering birds and greenery around the property. Nature-focused activities provide a refreshing alternative for visitors who prefer peaceful outdoor experiences."
        },
        {
            title: "Corporate Team Recreation",
            description: "Corporate groups can combine team-building, outdoor games, recreational activities, and relaxation into a productive yet enjoyable outing. The spacious countryside environment encourages communication and group participation."
        }
    ],

    services: [
        {
            name: "Resorts near pune with activities",
            description: "Resorts near Pune with activities are ideal for visitors who want to combine relaxation with farm exploration, outdoor games, water recreation, adventure experiences, and group entertainment."
        },
        {
            name: "adventure resorts near pune",
            description: "Adventure resorts near Pune provide an exciting alternative to ordinary weekend trips by combining outdoor recreation, nature experiences, farm activities, and adventure-oriented entertainment."
        },
        {
            name: "one day picnic resorts with activities near pune",
            description: "One day picnic resorts with activities near Pune are suitable for families, friends, and groups who want to enjoy a complete day of recreation without planning a lengthy trip."
        },
        {
            name: "resorts near pune for corporate outing",
            description: "Resorts near Pune for corporate outing can provide team games, outdoor recreation, nature experiences, group dining, and relaxation, helping employees enjoy meaningful time away from their regular workplace."
        },
        {
            name: "Resort with activities near pune",
            description: "A Resort with activities near Pune gives visitors the flexibility to enjoy adventure, farm experiences, recreational games, water activities, and peaceful leisure within one destination."
        },
        {
            name: "Resorts with adventure activities near pune",
            description: "Resorts with adventure activities near Pune are a good choice for visitors seeking outdoor excitement along with the comfort and relaxing atmosphere of a countryside resort."
        },
        {
            name: "Resorts for corporate outing near pune",
            description: "Resorts for corporate outing near Pune can support team engagement through outdoor games, group activities, nature exploration, and recreational experiences that encourage employee interaction."
        },
        {
            name: "Resort near pune with activities",
            description: "A Resort near Pune with activities can make a day trip more engaging by bringing together farm tours, outdoor games, water recreation, traditional rural experiences, and nature-focused leisure."
        },
        {
            name: "resorts in pune with activities",
            description: "Visitors searching for resorts in Pune with activities can explore a destination offering recreational experiences for families, friends, corporate groups, and adventure enthusiasts."
        },
        {
            name: "Resorts near pune for family with activities",
            description: "Resorts near Pune for family with activities allow children and adults to enjoy farm visits, swimming, outdoor games, nature exploration, and traditional countryside experiences together."
        },
        {
            name: "One day adventure resort near pune",
            description: "A One day adventure resort near Pune is suitable for visitors who want a quick escape filled with outdoor activities, farm exploration, group games, and refreshing countryside recreation."
        },
        {
            name: "activity resorts in pune",
            description: "Activity resorts in Pune provide opportunities to combine leisure and recreation through outdoor games, adventure experiences, farm activities, swimming, and nature-based entertainment."
        },
        {
            name: "adventure activities resort near pune",
            description: "An adventure activities resort near Pune can give visitors access to exciting outdoor experiences while allowing them to relax in a peaceful agricultural and natural setting."
        },
        {
            name: "adventure games resort near pune",
            description: "An adventure games resort near Pune is an enjoyable choice for groups looking for friendly challenges, outdoor recreation, team games, and active entertainment during a day out."
        },
        {
            name: "Adventure resort pune day out",
            description: "An Adventure resort Pune day out can include outdoor recreation, farm exploration, traditional activities, water fun, and group entertainment for a memorable short getaway."
        },
        {
            name: "adventure resorts in pune",
            description: "Adventure resorts in Pune are suitable for people who want to experience outdoor activities and countryside recreation while taking a break from their usual urban routine."
        },
        {
            name: "Adventure sports resort near pune",
            description: "An Adventure sports resort near Pune can provide an active getaway for visitors interested in outdoor recreation, group challenges, nature experiences, and exciting activities."
        },
        {
            name: "Best activity resorts near Pune",
            description: "The Best activity resorts near Pune should offer variety, and Om Agri Tourism combines farm experiences, outdoor recreation, water activities, traditional rides, and group entertainment."
        },
        {
            name: "best resort with activities near pune",
            description: "A best resort with activities near Pune can make a family or group outing more enjoyable by offering several experiences within the same countryside destination."
        },
        {
            name: "Best resorts near pune with activities",
            description: "The Best resorts near Pune with activities provide more than accommodation by giving visitors opportunities for adventure, recreation, nature exploration, family entertainment, and group activities."
        },
        {
            name: "day outing resorts near pune",
            description: "Day outing resorts near Pune are convenient for families, friends, and corporate teams seeking a complete day of activities, food, recreation, and relaxation without an extended stay."
        },
        {
            name: "day trip resorts near pune",
            description: "Day trip resorts near Pune offer a practical way to enjoy outdoor recreation and countryside experiences while returning home the same day."
        },
        {
            name: "one day outing resort near pune",
            description: "A one day outing resort near Pune is ideal for short breaks where visitors can participate in farm activities, games, water recreation, and nature-based experiences."
        },
        {
            name: "one day activity resort near pune",
            description: "A one day activity resort near Pune gives visitors the opportunity to enjoy multiple recreational experiences within a single day, making it suitable for family outings, friends, and corporate groups."
        }
    ],

    tableData: [
        ["Resorts near pune with activities"],
        ["adventure resorts near pune"],
        ["one day picnic resorts with activities near pune"],
        ["resorts near pune for corporate outing"],
        ["Resort with activities near pune"],
        ["Resorts with adventure activities near pune"],
        ["Resorts for corporate outing near pune"],
        ["Resort near pune with activities"],
        ["resorts in pune with activities"],
        ["Resorts near pune for family with activities"],
        ["One day adventure resort near pune"],
        ["activity resorts in pune"],
        ["adventure activities resort near pune"],
        ["adventure games resort near pune"],
        ["Adventure resort pune day out"],
        ["adventure resorts in pune"],
        ["Adventure sports resort near pune"],
        ["Best activity resorts near Pune"],
        ["best resort with activities near pune"],
        ["Best resorts near pune with activities"],
        ["day outing resorts near pune"],
        ["day trip resorts near pune"],
        ["one day outing resort near pune"],
        ["one day activity resort near pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Wide Variety of Activities",
            WhyChoosedescription: "Om Agri Tourism brings together farm experiences, outdoor games, water recreation, traditional rides, nature activities, and other leisure options, allowing visitors to enjoy several experiences during one outing."
        },
        {
            WhyChooseheading: "Ideal for Family Outings",
            WhyChoosedescription: "Families can choose from activities suited to different interests and age groups, making it easier for children and adults to enjoy their time together in an open and refreshing environment."
        },
        {
            WhyChooseheading: "Suitable for Corporate Groups",
            WhyChoosedescription: "Corporate teams can use the activity-focused environment for team games, outdoor recreation, group interaction, and relaxation, creating a useful break from the regular office routine."
        },
        {
            WhyChooseheading: "Adventure and Relaxation Together",
            WhyChoosedescription: "Visitors do not have to choose between an active outing and a peaceful getaway. Adventure activities, farm exploration, water recreation, and quiet countryside surroundings can all be experienced in the same destination."
        },
        {
            WhyChooseheading: "Authentic Agro-Tourism Experience",
            WhyChoosedescription: "The agricultural setting adds a distinctive rural element to the resort experience through farm tours, tractor rides, bullock cart rides, nature exploration, and other countryside activities."
        },
        {
            WhyChooseheading: "Excellent One-Day Getaway",
            WhyChoosedescription: "The destination is suitable for people who want to make the most of a single day with activities, recreation, food, nature, and group entertainment without needing to plan a long-distance journey."
        },
        {
            WhyChooseheading: "Outdoor Recreation in Nature",
            WhyChoosedescription: "Open farm surroundings provide a refreshing backdrop for outdoor activities and group recreation, giving visitors a chance to enjoy fresh air, greenery, and a break from crowded urban spaces."
        },
        {
            WhyChooseheading: "Multiple Group Experiences",
            WhyChoosedescription: "Friends, families, corporate teams, and other groups can select activities according to their interests, making the destination flexible for celebrations, day outings, team gatherings, and casual getaways."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good activities resort near Pune?",
        answer: "Om Agri Tourism offers a refreshing countryside setting where visitors can enjoy a variety of recreational and farm-based activities. The combination of greenery, outdoor experiences and a peaceful atmosphere makes it a suitable choice for families, friends and groups looking for an activity-focused day outing near Pune."
    },
    {
        question: "What activities can visitors enjoy at Om Agri Tourism near Pune?",
        answer: "Guests at Om Agri Tourism can take part in several outdoor experiences, including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These activities provide different ways for visitors to enjoy the farm surroundings and make their outing more engaging."
    },
    {
        question: "Is Om Agri Tourism suitable for a family activity outing near Pune?",
        answer: "Families can enjoy a fun-filled outing at Om Agri Tourism with activities suitable for different age groups. Children and adults can explore the farm environment, enjoy recreational experiences and spend relaxed time together surrounded by greenery."
    },
    {
        question: "Can friends visit Om Agri Tourism for an activity-based weekend near Pune?",
        answer: "Friends looking for an active weekend break can enjoy the variety of experiences available at Om Agri Tourism. Boating, swimming, horse riding and traditional farm rides provide opportunities for groups to have fun while enjoying a peaceful countryside atmosphere."
    },
    {
        question: "Does Om Agri Tourism offer traditional rural activities?",
        answer: "Traditional countryside experiences are an important part of the atmosphere at Om Agri Tourism. Visitors can enjoy tractor rides and bull cart rides while exploring the farm surroundings, giving the outing a rural character that is different from conventional recreational destinations."
    },
    {
        question: "Are there activities for children at Om Agri Tourism?",
        answer: "Children can enjoy several engaging experiences during a visit to Om Agri Tourism. Bird watching, tractor rides, boating and exploring the farm surroundings can give younger visitors an enjoyable opportunity to spend time outdoors and experience a rural environment."
    },
    {
        question: "Can couples enjoy activities at Om Agri Tourism near Pune?",
        answer: "Couples can spend a relaxed and enjoyable day at Om Agri Tourism by combining outdoor recreation with quiet time in the countryside. Horse riding, boating, bird watching and walks around the greenery can add variety to a peaceful outing together."
    },
    {
        question: "Is homemade food available during an outing at Om Agri Tourism?",
        answer: "Homemade food complements the activity-based experience at Om Agri Tourism by adding a traditional touch to the visit. Guests can take a break from outdoor activities, enjoy a satisfying meal and continue relaxing in the farm's peaceful surroundings."
    },
    {
        question: "Can groups plan a day outing at Om Agri Tourism near Pune?",
        answer: "Groups can plan a countryside day outing at Om Agri Tourism and combine multiple activities according to their interests. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching offer plenty of ways for friends, families and other groups to enjoy their time together."
    },
    {
        question: "Why choose Om Agri Tourism when searching for an activities resort near Pune?",
        answer: "Om Agri Tourism brings together recreational activities, farm experiences, greenery and traditional countryside hospitality in one destination. Visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food while taking a refreshing break from city life."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Kunal Bhosale",
        feedback:
            "Our friends' group had a fantastic day at Om Agri Tourism. We tried boating and horse riding, enjoyed the tractor ride and spent plenty of time exploring the green surroundings. The different activities kept everyone entertained, and the peaceful farm atmosphere made the outing even more enjoyable.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Neha Wagh",
        feedback:
            "Om Agri Tourism was a wonderful choice for our family outing. The children enjoyed bird watching and boating, while the adults loved the traditional bull cart ride and relaxing farm environment. We also enjoyed the homemade food and returned home with some lovely memories.",
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
  "name": "Activities Resort Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/activities-resort-near-pune.webp",
  "description": "Om Agro Tourism offers an engaging Activities Resort Near Pune experience for families, couples, friends, corporate teams, school groups and visitors looking for a refreshing day away from the city's busy routine. Resorts near Pune with activities can be an excellent choice for people who want to combine relaxation, outdoor recreation and group entertainment in a countryside environment. Visitors searching for adventure resorts near Pune can enjoy a nature-oriented setting where recreational activities and open surroundings create opportunities for fun and interaction. A one day picnic resorts with activities near Pune can be suitable for families and groups planning a complete day of recreation without the need for a long-distance journey. People looking for resorts near Pune for corporate outing can consider Om Agro Tourism for team gatherings, employee engagement, informal corporate events and outdoor group activities. The destination can also suit visitors searching for a Resort with activities near Pune where family members and friends of different age groups can spend quality time together. Families can enjoy a relaxed outing while children and adults participate in suitable recreational experiences, and corporate groups can use the setting for team bonding and informal interaction. Couples and friends can also plan a weekend or one-day escape surrounded by greenery and countryside scenery. Om Agro Tourism combines an agro-tourism atmosphere with open spaces, nature experiences and activity-oriented recreation, creating a distinctive alternative to conventional city resorts. The destination can be considered for family picnics, school outings, corporate gatherings, birthday celebrations, weekend trips and group get-togethers. Visitors looking for an adventure-filled day can enjoy the outdoor environment, while those seeking relaxation can spend time in peaceful natural surroundings. With its group-friendly setting and variety of recreational possibilities, Om Agro Tourism provides a memorable option for people searching for activity resorts, adventure resorts and one-day picnic destinations near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/activities-resort-near-pune"
  }
};



    return (
        <div>



<Helmet>
  <title>
    Activities Resort Near Pune | Adventure, Picnic & Corporate Outing Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism is an activity resort near Pune for families, corporate teams and groups, offering outdoor recreation, adventure experiences and one-day picnic options."
  />

  <meta
    name="keywords"
    content="Activities Resort Near Pune, Resorts near Pune with activities, adventure resorts near Pune, one day picnic resorts with activities near Pune, resorts near Pune for corporate outing, Resort with activities near Pune, activity resort near Pune, activities resorts near Pune, best activity resort near Pune, resorts with activities near Pune, resorts with outdoor activities near Pune, adventure resort near Pune, best adventure resorts near Pune, adventure activities near Pune, outdoor activities near Pune, one day picnic resort near Pune, one day picnic resorts near Pune, one day resorts with activities near Pune, picnic resort with activities near Pune, family resorts with activities near Pune, family activity resort near Pune, resorts near Pune for family outing, resorts near Pune for corporate outing, corporate outing resort near Pune, corporate activity resort near Pune, team outing resort near Pune, team building resort near Pune, corporate team outing places near Pune, employee outing resort near Pune, adventure resort for corporate outing near Pune, group activity resort near Pune, group outing resort near Pune, friends outing resort near Pune, weekend activity resort near Pune, weekend resorts with activities near Pune, family weekend resort near Pune, one day outing resort near Pune, day outing places with activities near Pune, day outing resort near Pune, adventure picnic near Pune, adventure picnic resort near Pune, family picnic resort near Pune, picnic places with activities near Pune, picnic destination near Pune with activities, outdoor recreation resort near Pune, recreational resort near Pune, nature resort with activities near Pune, nature adventure resort near Pune, agro tourism resort with activities near Pune, agro tourism near Pune with activities, farm resort with activities near Pune, countryside resort with activities near Pune, school outing resort near Pune, school picnic resort with activities near Pune, student outing near Pune, resort for group activities near Pune, resort for birthday outing near Pune, resort for family gathering near Pune, resort for weekend outing near Pune, best resort with activities near Pune, best day outing resort near Pune"
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
                            <img src='/images/keyword/18.jpg' alt='img' className='img-fluid' />
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

export default ActivitiesResortnearpune;