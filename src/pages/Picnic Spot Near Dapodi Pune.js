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

function Picnicspotneardapodi() {

const cardData = {
    keyword: "Picnic Spot Near Dapodi Pune",
    headingDescription: "Looking for a peaceful picnic spot near Dapodi Pune for a family outing, one day trip, or weekend break? Om Agro Tourism offers a refreshing countryside environment where visitors can enjoy greenery, open spaces, farm experiences, outdoor recreation, and homemade food. It is a convenient choice for families, friends, and groups from Dapodi, Phugewadi, Pimple Gurav, and nearby Pimpri Chinchwad areas who want to spend quality time away from the busy city surroundings.",
    topPlaces: [
        {
            title: "Family Countryside Day",
            description: "Families from Dapodi can enjoy a relaxed day surrounded by greenery and open countryside. The peaceful setting, family-friendly recreation, farm experiences, and food options create a comfortable outing for parents, children, and relatives."
        },
        {
            title: "Refreshing Nature Escape",
            description: "Visitors can take a break from the busy urban environment and spend quality time in a quieter rural setting. Fresh air, greenery, open spaces, and countryside surroundings provide a refreshing experience for families and friends."
        },
        {
            title: "Kids Recreation Day",
            description: "Families travelling with children can enjoy an active outing with suitable outdoor recreation and engaging experiences. Farm surroundings, games, and other activities can keep younger visitors entertained while adults relax."
        },
        {
            title: "Complete One Day Outing",
            description: "A full-day trip from Dapodi can combine nature, recreation, farm experiences, meals, and family time at one destination. This makes it suitable for visitors who want a complete outing without planning an overnight stay."
        },
        {
            title: "Rural Farm Experience",
            description: "Visitors interested in rural surroundings can explore farm-based experiences and learn more about agricultural life. Farm tours and workshops can add an educational element to a family picnic while keeping the day enjoyable."
        },
        {
            title: "Affordable Family Break",
            description: "Families looking for a budget-friendly outing can enjoy multiple experiences within the same countryside destination. Nature, recreation, farm activities, and food help create a satisfying day without an elaborate travel plan."
        },
        {
            title: "Friends Group Getaway",
            description: "Friends and groups can spend quality time together in a spacious rural environment. Shared meals, outdoor recreation, games, and countryside experiences can be combined to create a relaxed group outing."
        },
        {
            title: "Family Resort Experience",
            description: "A family-oriented resort day can combine relaxation and recreation in a peaceful natural environment. Visitors can enjoy the open surroundings, farm experiences, activities, and food while spending uninterrupted time together."
        },
        {
            title: "Phugewadi-Pimple Gurav Escape",
            description: "People from Dapodi and nearby Phugewadi or Pimple Gurav can plan a convenient countryside break without travelling to a distant destination. The rural atmosphere offers a welcome change from the surrounding urban environment."
        },
        {
            title: "Activity-Filled Picnic",
            description: "Visitors searching for a picnic with activities can enjoy more than a simple outdoor meal. Depending on the outing plan, games, rides, water recreation, farm experiences, and other family-friendly activities can make the day more engaging."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Dapodi Pune",
            description: "Om Agro Tourism offers a peaceful countryside setting for visitors searching for a picnic spot near Dapodi Pune. Families and groups can enjoy greenery, open spaces, farm experiences, recreational activities, and homemade food during a refreshing day outing."
        },
        {
            name: "One Day Picnic Spot Near Dapodi",
            description: "A one-day picnic near Dapodi can combine nature, recreation, farm experiences, and food within one convenient destination. It is suitable for visitors who want to enjoy a complete day away from the regular city routine."
        },
        {
            name: "Best Picnic Spot Near Dapodi Pune",
            description: "Visitors comparing the best picnic spot near Dapodi Pune can consider a destination that offers a balanced combination of natural surroundings and recreation. Families can enjoy farm experiences, outdoor activities, open spaces, and meals during the same visit."
        },
        {
            name: "Family Picnic Spot Near Dapodi",
            description: "Families can spend quality time together in a peaceful countryside environment with options for relaxation and recreation. Parents, children, and relatives can enjoy suitable activities while exploring the farm surroundings and sharing homemade food."
        },
        {
            name: "Picnic Resort Near Dapodi",
            description: "For visitors searching for a picnic resort near Dapodi, Om Agro Tourism provides a rural setting suitable for families and groups. The combination of nature, recreation, farm experiences, and food makes it suitable for a complete day outing."
        },
        {
            name: "One Day Picnic Resort Near Dapodi",
            description: "A one-day picnic resort experience near Dapodi allows visitors to enjoy several countryside experiences within a single visit. Nature, outdoor recreation, farm activities, meals, and relaxation can all be included in the day's itinerary."
        },
        {
            name: "Best Resort Near Dapodi for Picnic",
            description: "People looking for the best resort near Dapodi for picnic plans can enjoy a destination where nature and recreation are available together. The open environment, farm experiences, activities, and food provide options for a varied family or group outing."
        },
        {
            name: "Family Resort Near Dapodi",
            description: "A family-friendly resort environment gives parents and children an opportunity to relax and enjoy suitable recreational experiences together. The natural surroundings and spacious setting make it comfortable for family gatherings and weekend plans."
        },
        {
            name: "One Day Trip Near Dapodi",
            description: "A one-day trip near Dapodi can be planned around nature, farm experiences, outdoor recreation, and homemade food. Visitors can enjoy a refreshing change of surroundings while keeping the trip convenient enough to return home the same day."
        },
        {
            name: "Family One Day Trip Near Dapodi",
            description: "Families can plan a convenient one-day trip from Dapodi with experiences suitable for both children and adults. The combination of countryside surroundings, recreation, farm activities, and food helps create a balanced family itinerary."
        },
        {
            name: "Picnic Places Near Dapodi",
            description: "Those searching for picnic places near Dapodi can consider a countryside destination offering greenery, open spaces, farm experiences, recreational activities, and food. It provides a pleasant alternative to crowded urban entertainment areas."
        },
        {
            name: "Best Picnic Places Near Dapodi",
            description: "A good picnic destination should provide enough variety to keep families and groups engaged throughout the day. Visitors can combine nature, outdoor recreation, farm-based activities, and meals for a more complete outing."
        },
        {
            name: "Affordable Picnic Spot Near Dapodi",
            description: "An affordable picnic spot near Dapodi can be a practical choice for families and groups seeking a refreshing break without an expensive travel plan. Several countryside experiences can be enjoyed within the same destination."
        },
        {
            name: "Budget Picnic Resort Near Dapodi",
            description: "Visitors planning a budget-friendly picnic can enjoy nature, recreation, farm surroundings, and food at one destination. This helps families and groups organise an enjoyable outing while keeping the overall plan convenient."
        },
        {
            name: "Picnic Spot Near Dapodi Pune",
            description: "For visitors specifically searching for a picnic spot near Dapodi Pune, Om Agro Tourism offers a countryside escape suitable for family and group outings. The destination combines natural surroundings with recreational and farm-based experiences."
        },
        {
            name: "Resort Near Dapodi for Family Outing",
            description: "Families planning an outing from Dapodi can enjoy a peaceful rural environment with space for relaxation and recreation. Farm experiences, outdoor activities, open surroundings, and homemade food can be combined into a comfortable day plan."
        },
        {
            name: "One Day Resort Near Dapodi",
            description: "A one-day resort experience near Dapodi allows visitors to enjoy countryside surroundings without requiring an overnight stay. Families and groups can spend the day combining recreation, farm experiences, relaxation, and meals."
        },
        {
            name: "Nature Picnic Spot Near Dapodi",
            description: "Nature lovers can enjoy a picnic in a peaceful rural setting surrounded by greenery and open landscapes. The environment provides a welcome break from urban congestion while allowing visitors to relax and enjoy outdoor experiences."
        },
        {
            name: "Picnic Spot Near Phugewadi Dapodi",
            description: "Visitors from Phugewadi and Dapodi can plan a convenient countryside picnic with greenery, open areas, farm experiences, recreation, and homemade food. It is suitable for families and groups looking for a refreshing nearby getaway."
        },
        {
            name: "Picnic Spot Near Pimple Gurav Dapodi",
            description: "Those travelling from Pimple Gurav and Dapodi can enjoy a peaceful rural outing with opportunities for relaxation and recreation. Families and friends can combine farm experiences, outdoor activities, and meals during their visit."
        },
        {
            name: "Family Picnic Resort Near Dapodi",
            description: "Families searching for a picnic resort experience near Dapodi can enjoy a combination of countryside surroundings, recreational options, farm activities, and food. The setting is suitable for parents, children, relatives, and small family groups."
        },
        {
            name: "Picnic Spot with Activities Near Dapodi",
            description: "Visitors wanting an activity-filled picnic near Dapodi can enjoy several recreational experiences during their outing. Depending on the plan, games, water-based recreation, rides, farm tours, and other family-friendly activities can be included."
        }
    ],
    tableData: [
        ["Picnic Spot Near Dapodi Pune"],
        ["One Day Picnic Spot Near Dapodi"],
        ["Best Picnic Spot Near Dapodi Pune"],
        ["Family Picnic Spot Near Dapodi"],
        ["Picnic Resort Near Dapodi"],
        ["One Day Picnic Resort Near Dapodi"],
        ["Best Resort Near Dapodi for Picnic"],
        ["Family Resort Near Dapodi"],
        ["One Day Trip Near Dapodi"],
        ["Family One Day Trip Near Dapodi"],
        ["Picnic Places Near Dapodi"],
        ["Best Picnic Places Near Dapodi"],
        ["Affordable Picnic Spot Near Dapodi"],
        ["Budget Picnic Resort Near Dapodi"],
        ["Picnic Spot Near Dapodi Pune"],
        ["Resort Near Dapodi for Family Outing"],
        ["One Day Resort Near Dapodi"],
        ["Nature Picnic Spot Near Dapodi"],
        ["Picnic Spot Near Phugewadi Dapodi"],
        ["Picnic Spot Near Pimple Gurav Dapodi"],
        ["Family Picnic Resort Near Dapodi"],
        ["Picnic Spot with Activities Near Dapodi"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Setting",
            WhyChoosedescription: "The rural surroundings provide a refreshing change from the busy residential and commercial areas around Dapodi. Visitors can enjoy greenery, open spaces, fresh air, and a calmer environment during their picnic."
        },
        {
            WhyChooseheading: "Comfortable Family Outing",
            WhyChoosedescription: "Parents, children, relatives, and different age groups can enjoy the destination together. The variety of experiences makes it easier to balance relaxation, recreation, food, and family time throughout the day."
        },
        {
            WhyChooseheading: "Complete Day Picnic Experience",
            WhyChoosedescription: "Nature, outdoor recreation, farm activities, games, and meals can be combined into one outing. This gives families and groups enough variety to enjoy a full day without visiting multiple destinations."
        },
        {
            WhyChooseheading: "Convenient Nearby Escape",
            WhyChoosedescription: "Visitors from Dapodi, Phugewadi, and Pimple Gurav can plan a countryside break without making the trip unnecessarily long. It is suitable for weekend outings, family plans, and short recreational getaways."
        },
        {
            WhyChooseheading: "Interactive Farm Experiences",
            WhyChoosedescription: "Farm tours and workshops allow visitors to experience rural surroundings and learn more about agricultural life. These experiences can add educational value to a family picnic while keeping children and adults engaged."
        },
        {
            WhyChooseheading: "Recreation for Different Ages",
            WhyChoosedescription: "The destination offers different ways for children, adults, and groups to enjoy their time. Visitors can select activities according to their interests while still having space for relaxation and shared family moments."
        },
        {
            WhyChooseheading: "Homemade Food in a Rural Setting",
            WhyChoosedescription: "Tasty homemade food adds a traditional touch to the picnic experience. Guests can enjoy their meals in a peaceful countryside environment, providing a welcome change from regular city dining."
        },
        {
            WhyChooseheading: "Nature Alongside Activities",
            WhyChoosedescription: "The combination of natural surroundings and recreational experiences makes the outing more engaging than a simple picnic. Visitors can enjoy peaceful scenery while also participating in activities that suit their family or group."
        }
    ]
};






const faqData = [
    {
        question: "What can people from Dapodi Pune experience at Om Agri Tourism?",
        answer: "A visit gives guests an opportunity to combine outdoor recreation with a countryside atmosphere. Swimming, boating and horse riding can be enjoyed alongside tractor rides, bull cart rides, bird watching and homemade food for a varied picnic experience."
    },
    {
        question: "How can families from Dapodi plan a refreshing picnic day?",
        answer: "Families can keep the schedule flexible by choosing a few active experiences and leaving enough time for meals and relaxation. Water activities can be followed by farm rides or nature observation, allowing both children and adults to enjoy the outing without feeling rushed."
    },
    {
        question: "Which activities are available for visitors searching for a picnic spot near Dapodi Pune?",
        answer: "Visitors can explore swimming, boating, horse riding, tractor rides and bull cart rides as part of their outing. Bird watching provides a quieter alternative, while homemade food can be included as a relaxing part of the picnic."
    },
    {
        question: "Can friends from Dapodi visit Om Agri Tourism for a group outing?",
        answer: "A group of friends can create a lively day by participating in activities together and keeping time aside for conversations. Swimming and boating can be followed by horse riding or traditional farm rides, with food and photography adding relaxed moments to the trip."
    },
    {
        question: "What kind of countryside experiences can guests enjoy near Dapodi?",
        answer: "The farm setting allows visitors to experience activities connected with rural surroundings rather than only conventional recreation. Horse riding, tractor rides and bull cart rides can be combined with bird watching, swimming and boating for a distinctive countryside outing."
    },
    {
        question: "Is Om Agri Tourism suitable for a children's picnic from Dapodi Pune?",
        answer: "Children can enjoy age-appropriate outdoor activities such as swimming, boating and selected riding experiences with adult supervision. Bird watching can also make the trip interesting for young visitors by giving them time to observe nature and the farm environment."
    },
    {
        question: "Can senior citizens comfortably join a family picnic near Dapodi?",
        answer: "Senior guests can enjoy the outing without participating in every active experience. Homemade food, bird watching, greenery and family conversations can provide a comfortable part of the day while younger members take part in swimming, boating or rides."
    },
    {
        question: "What would be a practical itinerary for a one-day trip from Dapodi?",
        answer: "Groups can begin with swimming or boating when they want to be more active, followed by a meal and a slower portion of the day. Horse riding, tractor rides, bull cart rides, photography and bird watching can then be added according to the group's interests."
    },
    {
        question: "Can office teams from Dapodi Pune plan an outdoor picnic at Om Agri Tourism?",
        answer: "An office group can use the countryside setting for informal interaction away from the workplace. Shared recreational activities, farm rides and a meal can create opportunities for colleagues to spend quality time together while enjoying a change from their regular routine."
    },
    {
        question: "Why consider Om Agri Tourism when looking for a picnic spot near Dapodi Pune?",
        answer: "Visitors seeking a break from the city can find several types of experiences within one farm-oriented destination. Swimming, boating, horse riding, traditional rides, bird watching and homemade food make it a versatile option for family picnics, friend groups and casual day trips."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Tejas Pawar",
        feedback:
            "Getting away from the busy Dapodi routine for a countryside picnic was a great decision for our group. The combination of boating, swimming and traditional rides gave us plenty of entertainment, while the homemade food and open surroundings made the day feel relaxed.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Aarti Shinde",
        feedback:
            "Our family enjoyed having different choices throughout the visit. The younger members were interested in the activities and rides, while the elders preferred bird watching, food and quiet time around the farm. It was a comfortable outing for everyone.",
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
  "name": "Picnic Spot Near Dapodi Pune",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-dapodi-pune.webp",
  "description": "Looking for a refreshing picnic spot near Dapodi Pune for a family outing or a short break from the city? Om Agro Tourism offers a pleasant agro-tourism environment for families, friends, students and groups planning a relaxed day trip. A one day picnic near Dapodi can be a convenient way to spend quality time together while enjoying a peaceful outdoor atmosphere. Visitors searching for the best picnic spot near Dapodi Pune can plan family gatherings, friends' meetups or group outings, while families looking for a family picnic spot near Dapodi can enjoy a comfortable setting for shared leisure time. Those considering a picnic resort near Dapodi or a one day picnic resort near Dapodi can plan their outing around a convenient day-trip experience. Whether you are arranging a family one day trip near Dapodi, a weekend picnic, school outing or friends' gathering, Om Agro Tourism provides a welcoming destination for an enjoyable picnic experience.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-dapodi-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Dapodi Pune | Family Day Retreat, Group Recreation & Outdoor Relaxation | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a picnic spot near Dapodi Pune for families, friends and groups. Plan a one day picnic or family trip at Om Agro Tourism and enjoy a peaceful outdoor retreat."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Dapodi Pune, One Day Picnic Spot Near Dapodi, Best Picnic Spot Near Dapodi Pune, Family Picnic Spot Near Dapodi, Picnic Resort Near Dapodi, One Day Picnic Resort Near Dapodi, Best Resort Near Dapodi for Picnic, Family Resort Near Dapodi, One Day Trip Near Dapodi, Family One Day Trip Near Dapodi, Picnic Places Near Dapodi, Best Picnic Places Near Dapodi, Family Outing Near Dapodi, One Day Outing Near Dapodi, Picnic Destination Near Dapodi, Agro Tourism Near Dapodi, Best Family Picnic Near Dapodi"
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
                            <img src='/images/keyword/156.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotneardapodi;