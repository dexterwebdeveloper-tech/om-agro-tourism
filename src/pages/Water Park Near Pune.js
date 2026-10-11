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

function WaterParkNearPune() {



const cardData = {
    keyword: "Water Park Near Pune",

    headingDescription: "Looking for a refreshing water park near Pune for a family outing, friends' day trip, or summer getaway? Om Agri Tourism offers a countryside destination where visitors can enjoy water-based recreation along with farm experiences, outdoor activities, traditional food, and a peaceful natural atmosphere. It is a suitable choice for families and groups who want to combine water fun, relaxation, nature, and rural experiences in one memorable outing.",

    topPlaces: [
        {
            title: "Water Park Activities",
            description: "Enjoy an exciting water-based outing with activities designed to make a family or group day more entertaining. Water slides, splash areas, and other recreational experiences provide opportunities for children and adults to cool down and have fun together."
        },
        {
            title: "Swimming Pool Experience",
            description: "Spend relaxing time in the swimming pool while enjoying the greenery and peaceful surroundings of the farm. The pool provides a refreshing break for visitors who want to combine swimming with a wider countryside day-out experience."
        },
        {
            title: "Water Slides and Splash Fun",
            description: "Add excitement to your visit with water slides and splash-based activities suitable for an energetic day out. These attractions can make the destination enjoyable for families, friends, children, and groups looking for recreational entertainment."
        },
        {
            title: "Family Water Recreation",
            description: "Families can enjoy water-based activities together while also having access to outdoor recreation and farm experiences. The combination creates a varied outing where visitors can switch between active entertainment and relaxed countryside time."
        },
        {
            title: "Farm and Water Experience",
            description: "Experience the combination of water recreation and agricultural surroundings at one destination. Visitors can enjoy water activities before exploring the farm environment, making the day more diverse than a conventional water-only outing."
        },
        {
            title: "Countryside Picnic",
            description: "Turn your water park visit into a complete countryside picnic with traditional food, nature, farm activities, and outdoor recreation. The open surroundings provide a pleasant environment for families and groups spending an entire day together."
        },
        {
            title: "Outdoor Group Games",
            description: "Groups can add outdoor games and recreational activities to their water park outing. Friends, families, school groups, and corporate visitors can enjoy shared activities that encourage participation and make the day more engaging."
        },
        {
            title: "Farm Tour Experience",
            description: "Explore the agricultural side of the destination after enjoying water activities. Farm tours provide visitors with an opportunity to understand rural life, observe agricultural surroundings, and experience a different side of a countryside getaway."
        },
        {
            title: "Traditional Food Experience",
            description: "Enjoy a traditional food experience during your water park outing in a peaceful farm setting. Fresh and wholesome meals can complement the recreational activities while giving visitors an opportunity to relax and enjoy local flavors."
        },
        {
            title: "Nature-Filled Day Out",
            description: "Combine water-based entertainment with greenery, open landscapes, and a peaceful rural atmosphere. The combination of nature and recreation makes the destination suitable for visitors looking for a refreshing escape from the busy city environment."
        }
    ],

    services: [
        {
            name: "water park near pune",
            description: "Enjoy a refreshing water park experience near Pune with water activities, swimming, farm surroundings, outdoor recreation, traditional food, and a peaceful countryside atmosphere suitable for families and groups."
        },
        {
            name: "Best water park near pune",
            description: "Visitors searching for a memorable water outing can enjoy water-based recreation along with farm experiences, nature, outdoor activities, and traditional food for a more complete day-trip experience."
        },
        {
            name: "near water park pune",
            description: "Explore a countryside water recreation destination where visitors can combine swimming, water activities, farm exploration, outdoor entertainment, and relaxing time in nature."
        },
        {
            name: "pune city water park",
            description: "Families from Pune city can plan a refreshing escape with water recreation and additional countryside experiences. The destination provides an opportunity to enjoy water activities away from the busy urban environment."
        },
        {
            name: "pune mein water park",
            description: "Pune mein water park experience ke saath visitors swimming, water activities, farm experiences, nature, traditional food aur outdoor recreation ka bhi anand le sakte hain."
        },
        {
            name: "pune near water park",
            description: "Enjoy water-based recreation near Pune while experiencing open farm landscapes, outdoor activities, traditional food, and a peaceful countryside setting suitable for a complete day outing."
        },
        {
            name: "pune water park near me",
            description: "Visitors searching for a Pune water park near me can consider a countryside destination that combines water recreation with farm activities, nature exploration, food, and family-friendly entertainment."
        },
        {
            name: "Pune water resort",
            description: "Experience a water resort-style outing where swimming and water activities are combined with nature, farm experiences, outdoor recreation, and relaxing surroundings for families and groups."
        },
        {
            name: "Top 10 water park in Pune",
            description: "Visitors comparing water park destinations in Pune can consider factors such as water activities, family recreation, surroundings, food, and additional attractions when planning their day outing."
        },
        {
            name: "Top water park in Pune",
            description: "A complete water outing can include swimming, water slides, outdoor recreation, farm exploration, traditional food, and natural surroundings to provide visitors with a more varied experience."
        },
        {
            name: "water park and resort near pune",
            description: "Enjoy water recreation along with a resort-style countryside experience. Visitors can combine swimming, outdoor activities, farm exploration, food, and relaxation during their visit."
        },
        {
            name: "water park around pune",
            description: "Plan a refreshing outing around Pune with water-based entertainment, natural surroundings, farm experiences, outdoor activities, and traditional food suitable for families and groups."
        },
        {
            name: "water park in pune near me",
            description: "Visitors searching for a water park in Pune near me can enjoy a broader day-out experience combining water activities with farm recreation, nature, food, and outdoor entertainment."
        },
        {
            name: "water park in pune near hadapsar",
            description: "Visitors from Hadapsar looking for a water-focused outing can enjoy swimming and water recreation along with farm activities, traditional food, greenery, and countryside relaxation."
        },
        {
            name: "water park in pune near pimpri chinchwad",
            description: "Families and groups from Pimpri Chinchwad can plan a refreshing water outing that combines swimming, water activities, farm experiences, outdoor recreation, and a peaceful natural environment."
        },
        {
            name: "water park near by pune",
            description: "Enjoy a water-based day outing near Pune with additional opportunities for farm exploration, nature experiences, outdoor activities, traditional food, and family recreation."
        },
        {
            name: "water park near pune city",
            description: "Escape the busy city environment with a refreshing water outing surrounded by open farm landscapes. Visitors can enjoy water activities while also experiencing nature and rural recreation."
        },
        {
            name: "water park near wakad",
            description: "Visitors from Wakad can plan a refreshing countryside outing featuring water activities, swimming, farm experiences, outdoor entertainment, and traditional food in a peaceful setting."
        },
        {
            name: "water park near wakad pune",
            description: "Plan a day trip from Wakad Pune with water recreation and additional countryside experiences such as farm activities, nature exploration, outdoor games, and traditional food."
        },
        {
            name: "water park pune near me",
            description: "Visitors searching for a water park Pune near me can enjoy water-based entertainment along with farm experiences, natural surroundings, food, and outdoor recreational activities."
        },
        {
            name: "water parks in pune india",
            description: "Visitors exploring water parks in Pune India can consider a destination that combines water recreation with agro-tourism, nature, traditional food, and family-friendly outdoor experiences."
        },
        {
            name: "waterpark near pune maharashtra",
            description: "Enjoy a refreshing waterpark experience near Pune Maharashtra while also exploring farm surroundings, outdoor activities, traditional food, and peaceful countryside recreation."
        }
    ],

    tableData: [
        ["water park near pune", "Enjoy a refreshing water park experience near Pune with water activities, swimming, farm surroundings, outdoor recreation, and family-friendly entertainment."],
        ["Best water park near pune", "Experience water-based fun along with nature, farm activities, traditional food, and outdoor recreation for a complete day outing."],
        ["near water park pune", "Explore a countryside destination offering water recreation together with farm experiences, outdoor activities, food, and peaceful natural surroundings."],
        ["pune city water park", "Plan a refreshing escape from Pune city with water activities, swimming, farm surroundings, and additional outdoor recreation."],
        ["pune mein water park", "Pune mein water park experience ke saath visitors swimming, farm activities, nature, food aur outdoor entertainment ka anand le sakte hain."],
        ["pune near water park", "Enjoy water-based recreation near Pune while experiencing open agricultural landscapes, outdoor activities, and traditional countryside experiences."],
        ["pune water park near me", "Choose a countryside water recreation destination where families and groups can enjoy swimming, water activities, nature, and a complete day-out experience."],
        ["Pune water resort", "Experience water recreation and resort-style relaxation together with farm activities, traditional food, outdoor entertainment, and natural surroundings."],
        ["Top 10 water park in Pune", "Compare water park destinations based on water activities, family entertainment, surroundings, recreation, and overall day-out experience."],
        ["Top water park in Pune", "Enjoy water recreation along with swimming, farm exploration, outdoor activities, traditional food, and peaceful countryside surroundings."],
        ["water park and resort near pune", "Combine water activities with resort-style relaxation, farm experiences, food, outdoor recreation, and nature during one memorable outing."],
        ["water park around pune", "Explore a refreshing water recreation destination around Pune with farm activities, nature, traditional food, and group-friendly entertainment."],
        ["water park in pune near me", "Enjoy a water-focused outing with additional opportunities for farm exploration, outdoor recreation, traditional food, and relaxation."],
        ["water park in pune near hadapsar", "Visitors from Hadapsar can enjoy water recreation along with farm activities, nature, food, and family-friendly outdoor experiences."],
        ["water park in pune near pimpri chinchwad", "Plan a refreshing outing from Pimpri Chinchwad featuring swimming, water activities, farm experiences, food, and countryside relaxation."],
        ["water park near by pune", "Enjoy water-based recreation near Pune while spending quality time around greenery, farm landscapes, outdoor activities, and traditional food."],
        ["water park near pune city", "Escape the busy city environment with water activities surrounded by farm landscapes, nature, outdoor recreation, and peaceful countryside surroundings."],
        ["water park near wakad", "Visitors from Wakad can enjoy a countryside water outing with swimming, water activities, farm experiences, food, and outdoor entertainment."],
        ["water park near wakad pune", "Plan a refreshing outing from Wakad Pune featuring water recreation, farm activities, nature exploration, traditional food, and group entertainment."],
        ["water park pune near me", "Find a broader day-out experience combining water activities with swimming, farm exploration, nature, food, and outdoor recreation."],
        ["water parks in pune india", "Experience water recreation in Pune along with agro-tourism activities, natural surroundings, traditional food, and family-friendly entertainment."],
        ["waterpark near pune maharashtra", "Enjoy water-based recreation near Pune Maharashtra while experiencing farm surroundings, outdoor activities, traditional food, and countryside relaxation."]
    ],

    whychoose: [
        {
            WhyChooseheading: "Water Activities and Farm Experiences",
            WhyChoosedescription: "Om Agri Tourism combines water-based recreation with the charm of an agricultural destination. Visitors can enjoy water activities and then explore farm surroundings, rural experiences, and outdoor attractions during the same outing."
        },
        {
            WhyChooseheading: "Family-Friendly Day Out",
            WhyChoosedescription: "Families can plan a complete outing with swimming, water activities, outdoor recreation, food, and nature. The variety of experiences makes the destination suitable for children, adults, and mixed-age groups."
        },
        {
            WhyChooseheading: "Refreshing Countryside Setting",
            WhyChoosedescription: "The destination provides an alternative to crowded urban surroundings by combining water recreation with greenery and open farm landscapes. Visitors can enjoy active entertainment while still having opportunities to relax in nature."
        },
        {
            WhyChooseheading: "More Than a Water Outing",
            WhyChoosedescription: "Along with water activities, visitors can explore farm experiences, traditional food, outdoor games, nature, and rural attractions. This creates a more diverse day trip instead of limiting the experience to water-based entertainment."
        },
        {
            WhyChooseheading: "Ideal for Group Outings",
            WhyChoosedescription: "Friends, families, school groups, and corporate groups can enjoy shared water activities and outdoor recreation. Multiple experiences give groups more ways to spend quality time together during their visit."
        },
        {
            WhyChooseheading: "Swimming Pool Experience",
            WhyChoosedescription: "The swimming pool provides an additional way to cool down and relax during the outing. Visitors can combine pool time with water activities and other attractions available across the farm destination."
        },
        {
            WhyChooseheading: "Traditional Food Experience",
            WhyChoosedescription: "A day of recreation becomes more enjoyable when visitors can take comfortable breaks for traditional food in a peaceful farm setting. The food experience complements the water activities and countryside atmosphere."
        },
        {
            WhyChooseheading: "Complete One-Day Experience",
            WhyChoosedescription: "Visitors can combine water recreation, swimming, farm exploration, outdoor activities, food, and nature into one convenient outing. This makes the destination suitable for people looking for a complete day away from Pune."
        }
    ]
};






const faqData = [
    {
        question: "Is Om Agri Tourism a good alternative to a water park near Pune?",
        answer: "Om Agri Tourism can be a refreshing day-out option for visitors searching for a water park near Pune but also wanting nature and farm experiences. Guests can enjoy swimming along with boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food in a peaceful countryside setting."
    },
    {
        question: "Does Om Agri Tourism have a swimming pool?",
        answer: "Yes, Om Agri Tourism features a swimming pool where visitors can cool off and enjoy a refreshing outdoor experience. Swimming can be combined with other farm activities, making the visit suitable for families, friends and groups looking for an enjoyable day outing."
    },
    {
        question: "Is Om Agri Tourism suitable for a family water-based outing near Pune?",
        answer: "Families can enjoy a water-based day outing at Om Agri Tourism along with several countryside activities. The swimming facility gives visitors an opportunity to relax in the water, while boating and other outdoor experiences provide additional ways for family members to enjoy their time together."
    },
    {
        question: "What activities can we enjoy at Om Agri Tourism besides swimming?",
        answer: "A visit to Om Agri Tourism offers much more than swimming. Guests can enjoy boating, horse riding, tractor rides, bull cart rides and bird watching while exploring the farm surroundings, giving families and groups a combination of recreation and rural experiences."
    },
    {
        question: "Can children enjoy swimming at Om Agri Tourism?",
        answer: "Children can enjoy the swimming facility at Om Agri Tourism along with other age-appropriate outdoor activities. Parents can choose experiences according to their children's comfort and supervise them appropriately while enjoying a relaxed day at the farm."
    },
    {
        question: "Is Om Agri Tourism suitable for friends looking for a water park near Pune?",
        answer: "Friends who want a refreshing outing involving water and outdoor activities can consider Om Agri Tourism. Swimming and boating provide water-based recreation, while horse riding, tractor rides and other farm experiences offer additional entertainment throughout the day."
    },
    {
        question: "Can couples visit Om Agri Tourism for a swimming and picnic day?",
        answer: "Couples can spend a relaxed day at Om Agri Tourism by combining swimming with the peaceful farm environment. Boating, bird watching and other countryside experiences provide additional ways to enjoy quality time together away from the busy city surroundings."
    },
    {
        question: "Does Om Agri Tourism offer boating along with swimming?",
        answer: "Yes, visitors at Om Agri Tourism can enjoy boating along with swimming as part of their outdoor recreation. Having both activities available adds variety to the outing and allows guests to enjoy water-based experiences while also exploring the surrounding farm atmosphere."
    },
    {
        question: "Can we enjoy homemade food during a day outing at Om Agri Tourism?",
        answer: "Guests can enjoy homemade food during their visit to Om Agri Tourism. A traditional meal adds to the overall farm experience and gives families and groups a chance to relax and enjoy food after participating in swimming, boating and other outdoor activities."
    },
    {
        question: "Why choose Om Agri Tourism for a water park-style day outing near Pune?",
        answer: "Om Agri Tourism is a good option for visitors who want swimming and water-based recreation along with nature and countryside activities. Instead of focusing only on water attractions, guests can enjoy swimming, boating, farm experiences, traditional rides, bird watching and homemade food in one peaceful destination."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Kunal Pawar",
        feedback:
            "We were looking for a place with swimming near Pune for a family day out and chose Om Agri Tourism. The children enjoyed the pool and boating, while the adults had fun with the tractor and bull cart rides. The farm atmosphere and homemade food made the whole day enjoyable.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Aarti Jagtap",
        feedback:
            "Our friends suggested Om Agri Tourism when we were planning a water-based outing. Swimming was refreshing, and we also enjoyed boating and horse riding. The greenery and peaceful surroundings made it feel more relaxing than a regular crowded water park experience.",
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
  "name": "Water Park Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/water-park-near-pune.webp",
  "description": "Om Agro Tourism offers a refreshing water-based recreation experience for visitors searching for a Water Park Near Pune and looking for a fun outdoor destination for families, friends, children and groups. A water park near Pune can be an enjoyable choice for people who want to spend a relaxed day away from the city's busy routine while combining water activities, open surroundings and leisure time. Visitors searching for the Best water park near Pune can consider an agro-tourism destination that provides a refreshing environment for family outings, weekend plans and group recreation. People using searches such as near water park Pune, Pune city water park, Pune mein water park and Pune near water park can explore destinations outside the crowded city environment for a more spacious recreational experience. Families looking for a Pune water park near me can plan a convenient day outing with children, while groups searching for a Pune Water Resort can enjoy a combination of water-based recreation and countryside surroundings. Visitors comparing the Top 10 water park in Pune or Top water park in Pune can also consider destinations that provide a broader outdoor experience rather than focusing only on urban water attractions. Om Agro Tourism can be suitable for visitors searching for a water park and resort near Pune, water park around Pune or a water park in Pune near me. Guests from eastern Pune areas searching for a water park in Pune near Hadapsar can consider a countryside destination for a refreshing group or family outing. The environment can suit children, families, friends, school groups and corporate teams looking for an enjoyable day filled with recreation and relaxation. With its open surroundings, agro-tourism atmosphere and water-oriented leisure experience, Om Agro Tourism provides an appealing option for people planning a fun-filled day near Pune. Visitors can combine outdoor recreation with nature, countryside views and quality time with their group, making the destination suitable for weekend outings and family day trips.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/water-park-near-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Water Park Near Pune | Water Recreation, Family Outing & Picnic Destination | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers a refreshing water recreation experience near Pune for families, children and groups looking for a fun-filled day outing surrounded by nature."
  />

  <meta
    name="keywords"
    content="Water Park Near Pune, water park near Pune, Best water park near Pune, near water park Pune, Pune city water park, Pune mein water park, Pune near water park, Pune water park near me, Pune Water Resort, Top 10 water park in Pune, Top water park in Pune, water park and resort near Pune, water park around Pune, water park in Pune near me, water park in Pune near Hadapsar, best water park in Pune, water park places near Pune, water park destination near Pune, water park resort near Pune, water resort near Pune, family water park near Pune, water park for family near Pune, water park for kids near Pune, water park for children near Pune, water park picnic near Pune, water park outing near Pune, one day water park near Pune, weekend water park near Pune, water recreation near Pune, water activities near Pune, water fun park near Pune, water amusement park near Pune, water park near Pimpri Chinchwad, water park near Alandi, water park near Wagholi, water park near Kharadi, water park near Viman Nagar, water park near Nagar Road Pune, water park near Hadapsar Pune, water park near Lonavala from Pune, water park around Pune city, Pune water resort near me, water resort in Pune, water park and resort in Pune, best water resort near Pune, family water resort near Pune, water park picnic spot near Pune, nature water park near Pune, agro tourism water park near Pune, water park with picnic near Pune, outdoor water park near Pune, Pune water attraction, Pune family outing water park, water park day outing near Pune, water park for group outing near Pune, corporate water park outing near Pune"
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
                            <img src='/images/keyword/9.jpg' alt='img' className='img-fluid' />
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

export default WaterParkNearPune;