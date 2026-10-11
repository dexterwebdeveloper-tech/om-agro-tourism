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

function Picnicspotnearpiragut() {

const cardData = {
    keyword: "Picnic Spot Near Pirangut",
    headingDescription: "Looking for a peaceful picnic spot near Pirangut for a family outing, one day trip, or refreshing weekend escape? Om Agro Tourism offers a countryside environment where families, friends, and groups can enjoy nature, farm experiences, outdoor recreation, swimming, homemade food, and quality time together. Visitors from Pirangut, Paud, Mulshi, and nearby Pune areas can enjoy a convenient break from the busy city routine while experiencing a relaxing day surrounded by rural landscapes.",
    topPlaces: [
        {
            title: "Family Countryside Escape",
            description: "Spend a relaxed family day in peaceful rural surroundings with open spaces, farm experiences, recreational activities, homemade food, and opportunities for parents and children to enjoy meaningful time together."
        },
        {
            title: "Complete One Day Getaway",
            description: "Plan a convenient full-day outing from Pirangut with a combination of nature, recreation, food, and countryside experiences, making it suitable for families and small groups."
        },
        {
            title: "Nature-Focused Family Break",
            description: "Take a refreshing break from city life with greenery, open rural landscapes, farm experiences, and outdoor recreation that create a calm environment for families seeking quality time together."
        },
        {
            title: "Kids Recreation Day",
            description: "Families with children can enjoy an engaging outing with swimming, outdoor games, farm experiences, and other recreational options that provide entertainment while adults relax in the countryside."
        },
        {
            title: "Friends Weekend Outing",
            description: "Friends and groups can spend a memorable day together through outdoor activities, farm-based experiences, tasty food, and relaxed moments surrounded by peaceful rural scenery."
        },
        {
            title: "Affordable Family Picnic",
            description: "Families looking for a value-oriented day out can combine nature, food, recreation, and farm experiences in one destination while enjoying a rewarding break near Pirangut."
        },
        {
            title: "Rural Farm Experience",
            description: "Discover countryside life through agricultural surroundings, farm activities, rural experiences, and traditional food while enjoying a refreshing outing with family or friends."
        },
        {
            title: "Paud-Mulshi Day Escape",
            description: "Visitors from Paud, Mulshi, and nearby Pirangut areas can plan a convenient countryside outing featuring family activities, open spaces, nature experiences, and recreational options."
        },
        {
            title: "Family Resort Day",
            description: "Enjoy a family-oriented resort atmosphere with recreational facilities, open areas, food options, and activities that make the outing comfortable for children, parents, relatives, and larger groups."
        },
        {
            title: "Activity-Filled Nature Outing",
            description: "Create an engaging picnic with swimming, boating, indoor and outdoor games, tractor rides, horse riding, farm tours, and other recreational experiences in peaceful rural surroundings."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Pirangut",
            description: "Om Agro Tourism offers a peaceful countryside picnic environment near Pirangut where families and groups can enjoy nature, farm experiences, outdoor recreation, homemade food, and quality time together."
        },
        {
            name: "One Day Picnic Spot Near Pirangut",
            description: "Visitors can plan a convenient one day outing from Pirangut with countryside relaxation, family activities, farm experiences, food, and recreational options in a comfortable rural atmosphere."
        },
        {
            name: "Best Picnic Spot Near Pirangut",
            description: "Families searching for an enjoyable picnic destination near Pirangut can experience a balanced combination of natural surroundings, recreational activities, farm experiences, open spaces, and tasty homemade meals."
        },
        {
            name: "Family Picnic Spot Near Pirangut",
            description: "The family-friendly environment is suitable for parents, children, relatives, and groups who want to enjoy swimming, games, farm experiences, nature, and relaxed outdoor time together."
        },
        {
            name: "Picnic Resort Near Pirangut",
            description: "Visitors can enjoy a resort-style countryside picnic with recreational facilities, farm activities, open surroundings, food options, and comfortable spaces for relaxing away from the busy urban environment."
        },
        {
            name: "One Day Picnic Resort Near Pirangut",
            description: "Plan a complete one day resort outing with family or friends and enjoy swimming, outdoor recreation, farm experiences, homemade food, and peaceful surroundings without requiring an overnight stay."
        },
        {
            name: "Best Resort Near Pirangut for Picnic",
            description: "For a memorable picnic near Pirangut, Om Agro Tourism combines a natural rural atmosphere with family-friendly activities, farm experiences, food, and recreation suitable for different age groups."
        },
        {
            name: "Family Resort Near Pirangut",
            description: "Families can spend a comfortable day in a countryside resort environment with options for relaxation and recreation, making the outing enjoyable for children, adults, and senior family members."
        },
        {
            name: "One Day Trip Near Pirangut",
            description: "A practical choice for a short one day trip from Pirangut, offering visitors nature, rural surroundings, farm experiences, food, recreation, and opportunities to spend meaningful time with companions."
        },
        {
            name: "Family One Day Trip Near Pirangut",
            description: "Plan a family-focused day trip with outdoor games, swimming, farm exploration, traditional food, and countryside relaxation for a refreshing break from everyday routines."
        },
        {
            name: "Picnic Places Near Pirangut",
            description: "Visitors comparing picnic places near Pirangut can consider a countryside destination where natural surroundings, farm-based experiences, recreational activities, and family-friendly facilities come together."
        },
        {
            name: "Best Picnic Places Near Pirangut",
            description: "Those searching for enjoyable picnic places near Pirangut can experience a peaceful rural setting with engaging activities, open spaces, homemade meals, and opportunities for meaningful family or group recreation."
        },
        {
            name: "Affordable Picnic Spot Near Pirangut",
            description: "An affordable picnic experience near Pirangut can bring together nature, food, recreation, and family activities in one destination, helping visitors enjoy a rewarding day without unnecessary travel."
        },
        {
            name: "Budget Picnic Resort Near Pirangut",
            description: "Families and groups looking for a budget picnic resort can enjoy a countryside atmosphere with recreational activities, farm experiences, meals, and suitable spaces for a full-day outing."
        },
        {
            name: "Picnic Spot Near Pirangut Pune",
            description: "Located within the wider Pune region, this countryside destination offers visitors from Pirangut a convenient setting for family picnics, group outings, nature breaks, and activity-filled day trips."
        },
        {
            name: "Resort Near Pirangut for Family Outing",
            description: "Families can enjoy a relaxed outing with open rural surroundings, recreational activities, farm experiences, swimming, games, and homemade food in a comfortable and refreshing atmosphere."
        },
        {
            name: "One Day Resort Near Pirangut",
            description: "A one day resort experience near Pirangut allows visitors to relax, explore farm surroundings, enjoy countryside activities, and spend an entire day away from their regular schedule."
        },
        {
            name: "Nature Picnic Spot Near Pirangut",
            description: "Nature lovers can enjoy a refreshing picnic surrounded by greenery and rural landscapes, along with opportunities for farm exploration, outdoor recreation, traditional food, and peaceful family time."
        },
        {
            name: "Picnic Spot Near Paud Pirangut",
            description: "Visitors from Paud and Pirangut can enjoy a convenient countryside picnic featuring family activities, farm experiences, open surroundings, homemade food, and recreational opportunities."
        },
        {
            name: "Picnic Spot Near Mulshi Pirangut",
            description: "Families and groups from Mulshi and Pirangut can plan a refreshing outing with nature, rural experiences, outdoor games, swimming, farm activities, and comfortable spaces for relaxation."
        },
        {
            name: "Family Picnic Resort Near Pirangut",
            description: "The family-oriented picnic environment combines countryside charm with recreational activities and food facilities, making it suitable for parents, children, relatives, and larger family gatherings."
        },
        {
            name: "Picnic Spot with Activities Near Pirangut",
            description: "Visitors can enjoy an activity-filled picnic with options such as swimming, boating, indoor and outdoor games, tractor rides, horse riding, farm tours, and other experiences suitable for families and groups."
        }
    ],
    tableData: [
        ["Picnic Spot Near Pirangut"],
        ["One Day Picnic Spot Near Pirangut"],
        ["Best Picnic Spot Near Pirangut"],
        ["Family Picnic Spot Near Pirangut"],
        ["Picnic Resort Near Pirangut"],
        ["One Day Picnic Resort Near Pirangut"],
        ["Best Resort Near Pirangut for Picnic"],
        ["Family Resort Near Pirangut"],
        ["One Day Trip Near Pirangut"],
        ["Family One Day Trip Near Pirangut"],
        ["Picnic Places Near Pirangut"],
        ["Best Picnic Places Near Pirangut"],
        ["Affordable Picnic Spot Near Pirangut"],
        ["Budget Picnic Resort Near Pirangut"],
        ["Picnic Spot Near Pirangut Pune"],
        ["Resort Near Pirangut for Family Outing"],
        ["One Day Resort Near Pirangut"],
        ["Nature Picnic Spot Near Pirangut"],
        ["Picnic Spot Near Paud Pirangut"],
        ["Picnic Spot Near Mulshi Pirangut"],
        ["Family Picnic Resort Near Pirangut"],
        ["Picnic Spot with Activities Near Pirangut"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Environment",
            WhyChoosedescription: "The rural surroundings provide a refreshing change from busy urban areas, giving families and groups a comfortable place to relax, explore nature, and spend meaningful outdoor time together."
        },
        {
            WhyChooseheading: "Family-Friendly Experience",
            WhyChoosedescription: "Parents, children, relatives, and senior family members can enjoy suitable options including games, swimming, farm experiences, open spaces, and relaxed recreational activities."
        },
        {
            WhyChooseheading: "Convenient for Pirangut Visitors",
            WhyChoosedescription: "People from Pirangut and nearby Paud and Mulshi areas can plan a practical day outing without committing to a lengthy journey, making the destination suitable for family and group plans."
        },
        {
            WhyChooseheading: "Variety of Recreation",
            WhyChoosedescription: "Swimming, boating, tractor rides, horse riding, indoor and outdoor games, and farm tours provide multiple ways to enjoy the day and keep visitors engaged throughout their picnic."
        },
        {
            WhyChooseheading: "Authentic Agritourism Setting",
            WhyChoosedescription: "Guests can experience rural surroundings and agricultural activities while learning about farm life and enjoying a slower, more natural atmosphere away from regular city routines."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty homemade food adds a traditional touch to the outing, allowing visitors to enjoy satisfying meals while experiencing the simple and welcoming atmosphere of a countryside destination."
        },
        {
            WhyChooseheading: "Suitable for Groups",
            WhyChoosedescription: "Families, friends, school groups, and other visitors can enjoy shared activities, informal gatherings, recreation, and memorable moments within the spacious rural surroundings."
        },
        {
            WhyChooseheading: "Refreshing Break from Routine",
            WhyChoosedescription: "Green surroundings, open spaces, farm experiences, and recreational activities create an opportunity to disconnect from daily schedules and enjoy a relaxed outdoor day in nature."
        }
    ]
};


const faqData = [
    {
        question: "What can visitors from Pirangut enjoy at Om Agri Tourism?",
        answer: "A picnic at Om Agri Tourism can bring together outdoor recreation, farm experiences and time in a natural countryside setting. Guests from Pirangut can enjoy swimming, boating and horse riding, while tractor rides, bull cart rides, bird watching and homemade food add more variety to the outing."
    },
    {
        question: "How can families from Pirangut make the most of a picnic day?",
        answer: "Families can create a flexible plan that balances energetic activities with peaceful breaks. Swimming or boating can be followed by a meal and a countryside ride, while bird watching and time around the farm allow everyone to enjoy the outing according to their comfort."
    },
    {
        question: "Which activities are available at a picnic spot near Pirangut Pune?",
        answer: "The outing can include several recreational and rural experiences, such as swimming, boating, horse riding, tractor rides and bull cart rides. Guests looking for a quieter experience can also spend time bird watching and enjoying homemade food in the farm surroundings."
    },
    {
        question: "Can friends from Pirangut plan a group outing at Om Agri Tourism?",
        answer: "Friends can enjoy a group picnic by combining activities that encourage everyone to participate. Boating, swimming and horse riding can keep the day active, while tractor rides, bull cart rides, food and relaxed conversations can make the remaining time enjoyable."
    },
    {
        question: "What makes a countryside picnic different from regular outing places near Pirangut?",
        answer: "The farm environment allows visitors to experience rural activities alongside conventional outdoor recreation. Horse riding, tractor rides and bull cart rides give the outing a traditional character, while swimming, boating and bird watching provide additional ways to spend the day."
    },
    {
        question: "Is Om Agri Tourism suitable for children visiting from Pirangut?",
        answer: "Children can enjoy suitable outdoor activities such as swimming, boating and selected riding experiences under responsible adult supervision. Bird watching can also make the trip more interesting by giving young visitors an opportunity to observe nature and experience a farm environment."
    },
    {
        question: "Can senior citizens comfortably join a family picnic near Pirangut?",
        answer: "Senior guests can enjoy the visit without needing to participate in every active experience. Homemade food, bird watching, greenery and family conversations can provide a comfortable part of the day while younger members explore swimming, boating and countryside rides."
    },
    {
        question: "What is a practical itinerary for a one-day picnic from Pirangut?",
        answer: "Groups can begin with swimming or boating and then keep time for a meal and relaxation. Horse riding, tractor rides or bull cart rides can be added later, with the remaining schedule reserved for bird watching, photography and enjoying the peaceful farm surroundings."
    },
    {
        question: "Can office groups from Pirangut use Om Agri Tourism for an outdoor outing?",
        answer: "A countryside outing can give colleagues an opportunity to interact away from their regular office environment. Shared recreational activities, farm rides and meals can create a relaxed setting for team conversations and informal bonding during the day."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Pirangut?",
        answer: "People seeking a refreshing break from the usual routine can find recreation, rural experiences, nature and food in one farm setting. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching offer different ways for families, friends and groups to enjoy a memorable picnic."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Amol Shinde",
        feedback:
            "Our Pirangut group wanted an outing that offered more than simply sitting together, and the variety of activities worked perfectly. Boating and swimming kept us active, while the tractor and bull cart rides gave us an enjoyable countryside experience. The homemade meal was a pleasant addition.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Vaishali More",
        feedback:
            "A peaceful farm environment made our family picnic feel very different from our usual plans. The children enjoyed the activities and rides, while the elders spent more time with bird watching, food and conversations. Having choices for every age group made the visit comfortable and enjoyable.",
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
  "name": "Picnic Spot Near Pirangut",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-pirangut.webp",
  "description": "Planning a refreshing day away from the busy city routine? Om Agro Tourism is a welcoming destination for anyone searching for a picnic spot near Pirangut for family time, friends' gatherings and relaxed group outings. A one day picnic near Pirangut can be an enjoyable option for families and groups who want to spend quality time together in a peaceful outdoor setting. Visitors searching for the best picnic spot near Pirangut can consider a convenient destination for casual leisure, family recreation and memorable day trips. Those looking for a family picnic spot near Pirangut can plan a comfortable outing with loved ones, while a picnic resort near Pirangut can be suitable for groups wanting a dedicated destination for their picnic plans. From family gatherings and friends' get-togethers to school outings and weekend recreation, Om Agro Tourism offers an agro-tourism environment where visitors can relax, enjoy outdoor surroundings and make their day more memorable. It is also a suitable option for those comparing one day picnic resorts and family outing destinations around Pirangut.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-pirangut"
  }
};










    return (
        <div>
<Helmet>
  <title>
    Picnic Spot Near Pirangut | Nature Escape, Family Recreation & One Day Leisure | +91 7066665554
  </title>

  <meta
    name="description"
    content="Explore a picnic spot near Pirangut for family outings, friends' gatherings and one day trips. Enjoy a peaceful outdoor leisure experience at Om Agro Tourism with a refreshing agro-tourism setting."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Pirangut, One Day Picnic Spot Near Pirangut, Best Picnic Spot Near Pirangut, Family Picnic Spot Near Pirangut, Picnic Resort Near Pirangut, One Day Picnic Resort Near Pirangut, Best Resort Near Pirangut for Picnic, Family Resort Near Pirangut, One Day Trip Near Pirangut, Family One Day Trip Near Pirangut, Picnic Places Near Pirangut, Best Picnic Places Near Pirangut, Family Outing Near Pirangut, One Day Outing Near Pirangut, Picnic Destination Near Pirangut, Agro Tourism Near Pirangut, Best Family Picnic Near Pirangut"
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
                            <img src='/images/keyword/162.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearpiragut;