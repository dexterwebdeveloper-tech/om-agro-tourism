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

function Picnicspotnearmaan() {

const cardData = {
    keyword: "Picnic Spot Near Maan Hinjewadi",
    headingDescription: "Looking for a peaceful picnic spot near Maan Hinjewadi for a family outing, one day trip, or refreshing weekend break? Om Agro Tourism offers a countryside setting where families, friends, and groups can enjoy nature, farm experiences, outdoor recreation, swimming, homemade food, and quality time together. Visitors from Maan, Hinjewadi, Marunji, Wakad, and nearby Pune areas can enjoy a convenient escape from the busy urban environment while spending a memorable day surrounded by rural landscapes.",
    topPlaces: [
        {
            title: "Family Countryside Escape",
            description: "Enjoy a relaxed family outing in peaceful rural surroundings with open spaces, farm experiences, recreational activities, homemade food, and opportunities for parents and children to spend quality time together."
        },
        {
            title: "Complete One Day Picnic",
            description: "Plan a convenient full-day outing from Maan Hinjewadi with a combination of nature, recreation, food, and countryside experiences, making it suitable for families and small groups."
        },
        {
            title: "Hinjewadi Weekend Refresh",
            description: "Take a break from the busy work and urban routine around Hinjewadi with a countryside outing featuring open surroundings, farm activities, recreation, and relaxed family time."
        },
        {
            title: "Kids Activity Day",
            description: "Families with children can enjoy an engaging day with swimming, outdoor games, farm experiences, and other recreational options that keep younger visitors entertained in a natural setting."
        },
        {
            title: "Friends Group Outing",
            description: "Friends and colleagues can spend quality time together through outdoor recreation, farm-based experiences, tasty food, and relaxed moments surrounded by peaceful countryside landscapes."
        },
        {
            title: "Affordable Family Break",
            description: "Families searching for a value-oriented outing can combine nature, recreation, food, and farm experiences in one destination while enjoying a memorable day away from the city."
        },
        {
            title: "Rural Farm Getaway",
            description: "Experience the charm of countryside living through agricultural surroundings, farm activities, rural experiences, and traditional food while enjoying a refreshing day with family or friends."
        },
        {
            title: "Marunji-Wakad Day Escape",
            description: "Visitors from Marunji, Wakad, and nearby Hinjewadi areas can plan a convenient countryside outing with family activities, open spaces, nature experiences, and recreational options."
        },
        {
            title: "Family Resort Day",
            description: "Enjoy a family-oriented resort atmosphere with recreational facilities, open areas, food options, and activities that make the outing comfortable for parents, children, relatives, and larger groups."
        },
        {
            title: "Activity-Filled Nature Outing",
            description: "Create an engaging picnic with swimming, boating, indoor and outdoor games, tractor rides, horse riding, farm tours, and other recreational experiences in peaceful rural surroundings."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Maan Hinjewadi",
            description: "Om Agro Tourism offers a peaceful countryside picnic environment near Maan Hinjewadi where families and groups can enjoy nature, farm experiences, outdoor recreation, homemade food, and quality time together."
        },
        {
            name: "One Day Picnic Spot Near Maan Hinjewadi",
            description: "Visitors can plan a convenient one day outing from Maan Hinjewadi with countryside relaxation, family activities, farm experiences, food, and recreational options in a comfortable rural atmosphere."
        },
        {
            name: "Best Picnic Spot Near Maan Hinjewadi",
            description: "Families searching for an enjoyable picnic destination near Maan Hinjewadi can experience a balanced combination of natural surroundings, recreational activities, farm experiences, open spaces, and tasty homemade meals."
        },
        {
            name: "Family Picnic Spot Near Maan Hinjewadi",
            description: "The family-friendly environment is suitable for parents, children, relatives, and groups who want to enjoy swimming, games, farm experiences, nature, and relaxed outdoor time together."
        },
        {
            name: "Picnic Resort Near Maan Hinjewadi",
            description: "Visitors can enjoy a resort-style countryside picnic with recreational facilities, farm activities, open surroundings, food options, and comfortable spaces for relaxing away from the busy urban environment."
        },
        {
            name: "One Day Picnic Resort Near Maan Hinjewadi",
            description: "Plan a complete one day resort outing with family or friends and enjoy swimming, outdoor recreation, farm experiences, homemade food, and peaceful surroundings without requiring an overnight stay."
        },
        {
            name: "Best Resort Near Maan Hinjewadi for Picnic",
            description: "For a memorable picnic near Maan Hinjewadi, Om Agro Tourism combines a natural rural atmosphere with family-friendly activities, farm experiences, food, and recreation suitable for different age groups."
        },
        {
            name: "Family Resort Near Maan Hinjewadi",
            description: "Families can spend a comfortable day in a countryside resort environment with options for relaxation and recreation, making the outing enjoyable for children, adults, and senior family members."
        },
        {
            name: "One Day Trip Near Maan Hinjewadi",
            description: "A practical choice for a short one day trip from Maan Hinjewadi, offering visitors nature, rural surroundings, farm experiences, food, recreation, and opportunities to spend meaningful time with companions."
        },
        {
            name: "Family One Day Trip Near Maan Hinjewadi",
            description: "Plan a family-focused day trip with outdoor games, swimming, farm exploration, traditional food, and countryside relaxation for a refreshing break from everyday routines."
        },
        {
            name: "Picnic Places Near Maan Hinjewadi",
            description: "Visitors comparing picnic places near Maan Hinjewadi can consider a countryside destination where natural surroundings, farm-based experiences, recreational activities, and family-friendly facilities come together."
        },
        {
            name: "Best Picnic Places Near Maan Hinjewadi",
            description: "Those searching for enjoyable picnic places near Maan Hinjewadi can experience a peaceful rural setting with engaging activities, open spaces, homemade meals, and opportunities for meaningful family or group recreation."
        },
        {
            name: "Affordable Picnic Spot Near Maan Hinjewadi",
            description: "An affordable picnic experience near Maan Hinjewadi can bring together nature, food, recreation, and family activities in one destination, helping visitors enjoy a rewarding day without unnecessary travel."
        },
        {
            name: "Budget Picnic Resort Near Maan Hinjewadi",
            description: "Families and groups looking for a budget picnic resort can enjoy a countryside atmosphere with recreational activities, farm experiences, meals, and suitable spaces for a full-day outing."
        },
        {
            name: "Picnic Spot Near Hinjewadi Pune",
            description: "Located within the wider Pune region, this countryside destination offers visitors from Hinjewadi and Maan a convenient setting for family picnics, group outings, nature breaks, and activity-filled day trips."
        },
        {
            name: "Resort Near Maan Hinjewadi for Family Outing",
            description: "Families can enjoy a relaxed outing with open rural surroundings, recreational activities, farm experiences, swimming, games, and homemade food in a comfortable and refreshing atmosphere."
        },
        {
            name: "One Day Resort Near Hinjewadi",
            description: "A one day resort experience near Hinjewadi allows visitors to relax, explore farm surroundings, enjoy countryside activities, and spend an entire day away from their regular work and city routine."
        },
        {
            name: "Nature Picnic Spot Near Maan Hinjewadi",
            description: "Nature lovers can enjoy a refreshing picnic surrounded by greenery and rural landscapes, along with opportunities for farm exploration, outdoor recreation, traditional food, and peaceful family time."
        },
        {
            name: "Picnic Spot Near Marunji Hinjewadi",
            description: "Visitors from Marunji and Hinjewadi can enjoy a convenient countryside picnic featuring family activities, farm experiences, open surroundings, homemade food, and recreational opportunities."
        },
        {
            name: "Picnic Spot Near Wakad Hinjewadi",
            description: "Families and groups from Wakad and Hinjewadi can plan a refreshing outing with nature, rural experiences, outdoor games, swimming, farm activities, and comfortable spaces for relaxation."
        },
        {
            name: "Family Picnic Resort Near Maan",
            description: "The family-oriented picnic environment combines countryside charm with recreational activities and food facilities, making it suitable for parents, children, relatives, and larger family gatherings."
        },
        {
            name: "Picnic Spot with Activities Near Hinjewadi",
            description: "Visitors can enjoy an activity-filled picnic with options such as swimming, boating, indoor and outdoor games, tractor rides, horse riding, farm tours, and other experiences suitable for families and groups."
        }
    ],
    tableData: [
        ["Picnic Spot Near Maan Hinjewadi"],
        ["One Day Picnic Spot Near Maan Hinjewadi"],
        ["Best Picnic Spot Near Maan Hinjewadi"],
        ["Family Picnic Spot Near Maan Hinjewadi"],
        ["Picnic Resort Near Maan Hinjewadi"],
        ["One Day Picnic Resort Near Maan Hinjewadi"],
        ["Best Resort Near Maan Hinjewadi for Picnic"],
        ["Family Resort Near Maan Hinjewadi"],
        ["One Day Trip Near Maan Hinjewadi"],
        ["Family One Day Trip Near Maan Hinjewadi"],
        ["Picnic Places Near Maan Hinjewadi"],
        ["Best Picnic Places Near Maan Hinjewadi"],
        ["Affordable Picnic Spot Near Maan Hinjewadi"],
        ["Budget Picnic Resort Near Maan Hinjewadi"],
        ["Picnic Spot Near Hinjewadi Pune"],
        ["Resort Near Maan Hinjewadi for Family Outing"],
        ["One Day Resort Near Hinjewadi"],
        ["Nature Picnic Spot Near Maan Hinjewadi"],
        ["Picnic Spot Near Marunji Hinjewadi"],
        ["Picnic Spot Near Wakad Hinjewadi"],
        ["Family Picnic Resort Near Maan"],
        ["Picnic Spot with Activities Near Hinjewadi"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Atmosphere",
            WhyChoosedescription: "The rural environment provides a refreshing change from the busy Maan-Hinjewadi surroundings, giving families and groups a comfortable place to relax, enjoy nature, and spend quality outdoor time."
        },
        {
            WhyChooseheading: "Designed for Family Enjoyment",
            WhyChoosedescription: "Parents, children, relatives, and senior family members can enjoy suitable options including games, swimming, farm experiences, open spaces, and relaxed recreational activities."
        },
        {
            WhyChooseheading: "Convenient for Hinjewadi Visitors",
            WhyChoosedescription: "People from Maan, Hinjewadi, Marunji, and Wakad can plan a practical day outing without committing to a lengthy journey, making the destination suitable for spontaneous family or group plans."
        },
        {
            WhyChooseheading: "Plenty of Recreation",
            WhyChoosedescription: "Swimming, boating, tractor rides, horse riding, indoor and outdoor games, and farm tours provide multiple ways to enjoy the day and keep visitors engaged throughout their outing."
        },
        {
            WhyChooseheading: "Genuine Agritourism Experience",
            WhyChoosedescription: "Guests can explore rural surroundings and agricultural activities while learning more about farm life and enjoying a slower, more natural atmosphere away from the urban work routine."
        },
        {
            WhyChooseheading: "Homemade Food Options",
            WhyChoosedescription: "Tasty homemade food adds a traditional touch to the picnic, allowing visitors to enjoy satisfying meals while experiencing the simple and welcoming atmosphere of a countryside destination."
        },
        {
            WhyChooseheading: "Good Choice for Groups",
            WhyChoosedescription: "Families, friends, colleagues, school groups, and other visitors can enjoy shared activities, informal gatherings, recreation, and memorable moments within the spacious rural surroundings."
        },
        {
            WhyChooseheading: "Refreshing Work-Life Break",
            WhyChoosedescription: "Green surroundings, open spaces, farm-based experiences, and outdoor activities provide an opportunity for Hinjewadi-area visitors to step away from busy schedules and enjoy a relaxed day in nature."
        }
    ]
};


const faqData = [
    {
        question: "What can visitors from Maan Hinjewadi enjoy at Om Agri Tourism?",
        answer: "Guests can take a break from the busy urban and IT surroundings and enjoy a countryside-oriented outing. Swimming, boating and horse riding offer active recreation, while tractor rides, bull cart rides, bird watching and homemade food add variety to the picnic."
    },
    {
        question: "How can families from Maan Hinjewadi plan a memorable picnic?",
        answer: "A family can combine a few energetic activities with unhurried time around the farm. Water activities can be followed by a meal, countryside rides and nature observation, giving children, parents and senior members opportunities to enjoy the day differently."
    },
    {
        question: "Which activities can be enjoyed at a picnic spot near Maan Hinjewadi?",
        answer: "Visitors can choose from swimming, boating, horse riding, tractor rides and bull cart rides during their outing. Bird watching provides a calmer experience, while homemade food can be enjoyed as part of the overall countryside picnic."
    },
    {
        question: "Can friends from Maan Hinjewadi visit Om Agri Tourism for a day trip?",
        answer: "A group of friends can plan a lively outdoor day by combining shared activities with relaxed breaks. Swimming and boating can be followed by horse riding or farm rides, while meals, photography and conversations can fill the quieter portions of the trip."
    },
    {
        question: "Why might a farm-based picnic appeal to people from Maan Hinjewadi?",
        answer: "For visitors accustomed to a fast-paced city and workplace routine, a farm setting provides a different atmosphere with outdoor recreation and rural experiences. Traditional rides, horse riding and bird watching can be enjoyed alongside swimming and boating for a more varied outing."
    },
    {
        question: "Is Om Agri Tourism suitable for children visiting from Maan Hinjewadi?",
        answer: "Young guests can enjoy age-appropriate outdoor activities such as swimming, boating and selected rides with responsible adult supervision. Bird watching can also introduce children to the natural surroundings and give the picnic an additional nature-focused element."
    },
    {
        question: "What can senior citizens enjoy during a picnic near Maan Hinjewadi?",
        answer: "Senior family members can follow a relaxed schedule without needing to participate in every activity. They can spend time enjoying homemade food, bird watching, greenery and family conversations while younger members explore swimming, boating and countryside rides."
    },
    {
        question: "How should a group from Maan Hinjewadi organize a one-day picnic?",
        answer: "A balanced schedule can start with swimming or boating and then move toward a meal and one of the farm-based rides. Leaving some unplanned time for bird watching, photography and relaxation can make the outing more comfortable for the entire group."
    },
    {
        question: "Can corporate teams from Maan Hinjewadi arrange a picnic at Om Agri Tourism?",
        answer: "The countryside setting can provide an informal environment for colleagues to spend time together away from office routines. Shared outdoor activities, traditional rides and meals can encourage interaction while giving the team a refreshing change of surroundings."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Maan Hinjewadi?",
        answer: "Those looking for a countryside escape can find recreation, rural experiences, nature and food in one destination. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching give families, friends and work groups multiple ways to enjoy their picnic."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Kunal Wagh",
        feedback:
            "After spending most of our weekdays around the Hinjewadi work environment, the countryside setting was a refreshing change for our group. We enjoyed the water activities, tried the farm rides and later had a relaxed meal together. The day felt active without becoming tiring.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Deepali Jagtap",
        feedback:
            "Our family appreciated having both fun activities and peaceful spaces during the visit. The children were excited about the outdoor experiences, while the elders enjoyed bird watching, homemade food and the greenery. It made our outing feel more complete than a regular city picnic.",
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
  "name": "Picnic Spot Near Maan Hinjewadi",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-maan-hinjewadi.webp",
  "description": "Searching for a convenient picnic spot near Maan Hinjewadi for a refreshing family or group outing? Om Agro Tourism offers a pleasant agro-tourism setting for families, friends, students and groups looking to spend quality time away from the regular city routine. A one day picnic near Maan Hinjewadi can be a simple way to enjoy a relaxed outdoor break, reconnect with loved ones and make the most of a planned day trip. Visitors looking for the best picnic spot near Maan Hinjewadi can plan family gatherings, friends' meetups and group outings in a peaceful environment. Families searching for a family picnic spot near Maan Hinjewadi can enjoy a comfortable destination for shared leisure time, while visitors considering a picnic resort near Maan Hinjewadi can plan a convenient day outing according to their group requirements. Whether it is a family picnic, weekend escape, school outing or friends' gathering, Om Agro Tourism provides a welcoming destination for an enjoyable picnic experience near Maan Hinjewadi.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-maan-hinjewadi"
  }
};



    return (
        <div>


<Helmet>
  <title>
    Picnic Spot Near Maan Hinjewadi | Corporate Break, Family Picnic & Outdoor Leisure | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a picnic spot near Maan Hinjewadi for families, friends and groups. Plan a one day picnic at Om Agro Tourism for a refreshing outdoor break and enjoyable family leisure time."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Maan Hinjewadi, One Day Picnic Spot Near Maan Hinjewadi, Best Picnic Spot Near Maan Hinjewadi, Family Picnic Spot Near Maan Hinjewadi, Picnic Resort Near Maan Hinjewadi, One Day Picnic Resort Near Maan Hinjewadi, Best Resort Near Maan Hinjewadi for Picnic, Family Resort Near Maan Hinjewadi, One Day Trip Near Maan Hinjewadi, Family One Day Trip Near Maan Hinjewadi, Picnic Places Near Maan Hinjewadi, Best Picnic Places Near Maan Hinjewadi, Family Outing Near Maan Hinjewadi, One Day Outing Near Maan Hinjewadi, Picnic Destination Near Maan Hinjewadi, Agro Tourism Near Maan Hinjewadi, Corporate Picnic Near Maan Hinjewadi"
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
                            <img src='/images/keyword/161.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearmaan;