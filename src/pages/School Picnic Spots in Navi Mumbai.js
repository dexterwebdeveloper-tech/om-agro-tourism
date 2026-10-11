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

function SchoolPicnicSpotsInNaviMumbai() {


const cardData = {
    keyword: "School Picnic Spots in Navi Mumbai",
    headingDescription: "Om Agro Tourism provides a refreshing countryside destination for schools planning an educational and enjoyable outing from Navi Mumbai. Students can experience farm-based learning, nature exploration, outdoor games, water recreation, traditional rural activities, and group entertainment while teachers can organize a balanced day of learning and fun.",
    topPlaces: [
        {
            title: "Agricultural Discovery Experience",
            description: "Students can explore the farm environment and learn about crops, farming practices, rural activities, and the connection between agriculture and everyday food. Direct exposure makes the learning experience more practical and engaging."
        },
        {
            title: "Nature Learning Walk",
            description: "The surrounding greenery and farmland provide an excellent setting for students to observe plants, birds, open landscapes, and natural features. A nature-focused activity can make environmental learning more interactive."
        },
        {
            title: "Water Recreation Zone",
            description: "Water-based recreation gives students a refreshing and energetic activity during their school picnic. It can be combined with farm exploration, outdoor games, and educational sessions to create a varied itinerary."
        },
        {
            title: "Outdoor Team Games",
            description: "Students can participate in outdoor games and group challenges that encourage teamwork, communication, coordination, and friendly competition. Open spaces provide a comfortable environment for active school groups."
        },
        {
            title: "Traditional Bullock Cart Experience",
            description: "A bullock cart ride introduces students to traditional rural transportation and village life. The experience provides an enjoyable cultural activity while allowing children to explore the peaceful countryside surroundings."
        },
        {
            title: "Tractor Farm Ride",
            description: "Students can experience an interesting aspect of farm life through a tractor ride around the agricultural surroundings. It combines entertainment with an opportunity to observe farmland and rural landscapes."
        },
        {
            title: "Farm Exploration Session",
            description: "A guided farm exploration can help students understand agriculture, crops, rural practices, and the importance of farming. The experience gives teachers an opportunity to connect classroom topics with real-world surroundings."
        },
        {
            title: "Group Picnic & Meal Area",
            description: "Students and teachers can take a comfortable break for meals between activities. Sharing food in a natural countryside setting adds a relaxed and social element to the overall school outing."
        },
        {
            title: "Adventure Recreation Experience",
            description: "Outdoor recreational activities provide students with opportunities to stay active and participate in group experiences. Such activities can build confidence, coordination, cooperation, and enthusiasm among classmates."
        },
        {
            title: "One Day Educational Outing",
            description: "Schools can plan a complete one-day outing featuring farm learning, nature observation, water recreation, outdoor games, traditional experiences, food, and leisure for a well-balanced student excursion."
        }
    ],
    services: [
        {
            name: "Best School Picnic Spots in Navi Mumbai",
            description: "Schools can enjoy a varied picnic experience combining farm learning, nature exploration, outdoor games, water recreation, traditional rural activities, and group entertainment in a peaceful setting."
        },
        {
            name: "School Picnic Places in Navi Mumbai",
            description: "A countryside school picnic provides students with opportunities for agricultural exploration, nature activities, outdoor recreation, group games, and shared experiences away from the usual classroom environment."
        },
        {
            name: "One Day School Picnic in Navi Mumbai",
            description: "A one-day school picnic can include educational farm activities, outdoor games, water recreation, nature exploration, meals, and leisure time within a convenient excursion schedule."
        },
        {
            name: "School Picnic Resorts in Navi Mumbai",
            description: "An agro-tourism resort offers schools a combination of countryside surroundings, recreational activities, farm experiences, food arrangements, and group-friendly facilities for organized student outings."
        },
        {
            name: "Educational Picnic Spots in Navi Mumbai",
            description: "Students can learn through practical exposure to agriculture, farming, nature, rural traditions, and environmental surroundings while enjoying an educational excursion outside the regular classroom."
        },
        {
            name: "School Trip Places in Navi Mumbai",
            description: "Schools can organize trips featuring farm exploration, nature observation, traditional rural experiences, outdoor games, water activities, and group recreation for students."
        },
        {
            name: "Kids Picnic Spots in Navi Mumbai",
            description: "Children can enjoy an active outdoor outing with farm experiences, nature exploration, games, water recreation, traditional rides, and open spaces that encourage group participation."
        },
        {
            name: "School Outing Places in Navi Mumbai",
            description: "The countryside environment provides schools with a refreshing alternative to city-based outings, offering educational activities, outdoor recreation, group games, meals, and nature-based experiences."
        },
        {
            name: "School Picnic Spots With Activities in Navi Mumbai",
            description: "Students can enjoy a diverse itinerary that combines farm exploration, outdoor games, water recreation, nature activities, traditional rides, and other group-friendly entertainment."
        },
        {
            name: "Water Parks in Navi Mumbai for School Picnic",
            description: "Water recreation can add excitement to a school outing while students also experience farm activities, nature exploration, outdoor games, and other educational and recreational experiences."
        },
        {
            name: "School Picnic Resort With Swimming Pool in Navi Mumbai",
            description: "Schools can include swimming and water recreation along with farm exploration, group games, outdoor activities, food, and educational experiences for a more complete student picnic."
        },
        {
            name: "Adventure Picnic Spots in Navi Mumbai for Students",
            description: "Adventure-oriented outdoor activities provide students with opportunities to stay active, participate in group challenges, develop coordination, and enjoy an energetic day with classmates."
        },
        {
            name: "Nature Picnic Spots in Navi Mumbai for Students",
            description: "Students can explore green surroundings, farmland, plants, birds, and natural landscapes while enjoying a refreshing break from Navi Mumbai's busy urban environment."
        },
        {
            name: "Affordable School Picnic Spots in Navi Mumbai",
            description: "Schools can plan a practical outing combining education, recreation, meals, outdoor activities, and group entertainment without requiring a lengthy multi-day travel arrangement."
        },
        {
            name: "School Picnic Packages in Navi Mumbai",
            description: "A structured school picnic package can simplify planning by combining activities, food, educational experiences, recreation, and group arrangements into an organized outing schedule."
        },
        {
            name: "School Field Trip Places in Navi Mumbai",
            description: "An agro-tourism field trip allows students to observe agriculture, nature, rural surroundings, and outdoor activities while gaining practical knowledge beyond traditional classroom lessons."
        },
        {
            name: "Educational Trip Places in Navi Mumbai",
            description: "Students can experience learning through farm exploration, nature observation, rural activities, and environmental experiences while enjoying a refreshing and interactive educational excursion."
        },
        {
            name: "Safe School Picnic Spots in Navi Mumbai",
            description: "Schools can organize their outing around planned schedules, coordinated group activities, open surroundings, meal breaks, and supervised recreation to create a comfortable experience for students and teachers."
        },
        {
            name: "One Day Educational Outing in Navi Mumbai for Students",
            description: "A complete one-day educational outing can combine agricultural learning, nature exploration, outdoor recreation, water activities, group games, meals, and leisure into one memorable school experience."
        }
    ],
    tableData: [
        ["Best School Picnic Spots in Navi Mumbai"],
        ["School Picnic Places in Navi Mumbai"],
        ["One Day School Picnic in Navi Mumbai"],
        ["School Picnic Resorts in Navi Mumbai"],
        ["Educational Picnic Spots in Navi Mumbai"],
        ["School Trip Places in Navi Mumbai"],
        ["Kids Picnic Spots in Navi Mumbai"],
        ["School Outing Places in Navi Mumbai"],
        ["School Picnic Spots With Activities in Navi Mumbai"],
        ["Water Parks in Navi Mumbai for School Picnic"],
        ["School Picnic Resort With Swimming Pool in Navi Mumbai"],
        ["Adventure Picnic Spots in Navi Mumbai for Students"],
        ["Nature Picnic Spots in Navi Mumbai for Students"],
        ["Affordable School Picnic Spots in Navi Mumbai"],
        ["School Picnic Packages in Navi Mumbai"],
        ["School Field Trip Places in Navi Mumbai"],
        ["Educational Trip Places in Navi Mumbai"],
        ["Safe School Picnic Spots in Navi Mumbai"],
        ["One Day Educational Outing in Navi Mumbai for Students"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Learning Through Farm Experiences",
            WhyChoosedescription: "Students can understand agriculture through direct exposure to farmland, crops, rural activities, and farming surroundings. Practical experiences can make classroom lessons more meaningful and easier to remember."
        },
        {
            WhyChooseheading: "Refreshing Natural Setting",
            WhyChoosedescription: "The countryside atmosphere provides a pleasant change from Navi Mumbai's urban surroundings, giving students open spaces, greenery, and opportunities for nature observation and outdoor exploration."
        },
        {
            WhyChooseheading: "Engaging Activities for Groups",
            WhyChoosedescription: "Outdoor games, water recreation, farm activities, and traditional rural experiences provide several opportunities for students to stay active, interact with classmates, and enjoy shared group experiences."
        },
        {
            WhyChooseheading: "Useful for Educational Trips",
            WhyChoosedescription: "Agriculture, nature, rural culture, and environmental surroundings create useful opportunities for teachers to conduct observation-based learning and connect academic topics with real-world experiences."
        },
        {
            WhyChooseheading: "Water Recreation & Outdoor Fun",
            WhyChoosedescription: "Water activities add a refreshing recreational element to the itinerary, while outdoor games and farm experiences ensure students have a varied selection of activities throughout the day."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Bullock cart rides, tractor rides, and farm exploration give students an opportunity to discover aspects of rural life and traditional activities that are different from their everyday urban surroundings."
        },
        {
            WhyChooseheading: "Convenient One Day Planning",
            WhyChoosedescription: "Schools can organize educational activities, recreation, meal breaks, and leisure within one day, making the excursion easier to coordinate for students, teachers, and accompanying staff."
        },
        {
            WhyChooseheading: "Balanced Student Outing",
            WhyChoosedescription: "Farm learning, nature exploration, water recreation, outdoor games, traditional activities, and food can be combined into a single itinerary, creating a balanced experience that blends education with enjoyment."
        }
    ]
};

















const faqData = [
    {
        question: "Is Om Agri Tourism a good option among school picnic spots in Navi Mumbai?",
        answer: "Om Agri Tourism offers students a peaceful farm environment with greenery, open spaces and a variety of outdoor experiences. Schools searching for an alternative to conventional city picnic locations can consider this countryside setting for an enjoyable and refreshing group outing."
    },
    {
        question: "What activities are available for students at Om Agri Tourism?",
        answer: "Students can enjoy several activities and experiences at Om Agri Tourism, including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. The variety can help schools create an engaging picnic schedule with both recreation and nature-based experiences."
    },
    {
        question: "Can schools in Navi Mumbai organize a picnic at Om Agri Tourism?",
        answer: "Schools from Navi Mumbai can plan a countryside outing at Om Agri Tourism where students can take a break from their regular urban surroundings. Activities can be selected according to the group's requirements, student age and appropriate supervision arrangements."
    },
    {
        question: "Is Om Agri Tourism suitable for a school group with many students?",
        answer: "The open farm surroundings at Om Agri Tourism provide a different environment for school groups to spend time together. Teachers and coordinators can structure the visit around suitable activities, food breaks and supervised recreation to keep the outing organized and enjoyable."
    },
    {
        question: "Can students learn about rural surroundings during a picnic at Om Agri Tourism?",
        answer: "A visit to Om Agri Tourism can give students an opportunity to experience a farm-based countryside environment. Tractor rides and bull cart rides provide traditional rural experiences, while the greenery and open surroundings offer students a different setting from their everyday city life."
    },
    {
        question: "Can bird watching be included in a school picnic at Om Agri Tourism?",
        answer: "Bird watching can be a pleasant nature-oriented activity for students visiting Om Agri Tourism. Observing birds around the farm allows children to spend time outdoors and can add an educational dimension to a recreational school picnic."
    },
    {
        question: "Are swimming and boating available for students at Om Agri Tourism?",
        answer: "Swimming and boating can add an active element to the school picnic experience at Om Agri Tourism. Students should participate according to age suitability, safety requirements and proper supervision so that the activities remain comfortable and responsible."
    },
    {
        question: "What traditional activities can students experience at Om Agri Tourism?",
        answer: "Students can experience traditional countryside activities such as tractor rides and bull cart rides at Om Agri Tourism. These experiences can make the picnic more distinctive by allowing students to enjoy rural activities that they may not regularly encounter in an urban environment."
    },
    {
        question: "Does Om Agri Tourism offer food for school picnic visitors?",
        answer: "Homemade food can complement a school group's visit to Om Agri Tourism and provide a traditional meal experience during the outing. Students and teachers can use the food break to relax before continuing with the planned outdoor activities."
    },
    {
        question: "Why choose Om Agri Tourism when searching for school picnic spots in Navi Mumbai?",
        answer: "Om Agri Tourism combines a farm setting, greenery, outdoor recreation and traditional countryside experiences in one destination. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide students with a varied day outside the classroom and make the picnic more engaging and memorable."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sameer Naik",
        feedback:
            "Our school group had a fantastic outing at Om Agri Tourism. The students enjoyed the boating and tractor ride, and bird watching gave them something interesting to explore in the natural surroundings. The peaceful farm atmosphere made the entire picnic feel refreshing and well away from the usual city routine.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Richa Patil",
        feedback:
            "Om Agri Tourism provided our students with a memorable school picnic experience. The bull cart ride was a favourite among the children, and they also enjoyed spending time around the greenery and participating in outdoor activities. It was a nice combination of fun, nature and countryside experiences.",
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
  "name": "School Picnic Spots in Navi Mumbai",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spots-in-navi-mumbai.webp",
  "description": "Om Agro Tourism offers School Picnic Spots in Navi Mumbai for schools, teachers and student groups looking for a refreshing combination of outdoor recreation, nature exposure and enjoyable learning experiences. Schools searching for the Best School Picnic Spots in Navi Mumbai can consider an agro-tourism environment where children can step away from their regular classroom routine and spend quality time with classmates in open, green surroundings. School Picnic Places in Navi Mumbai are ideal for planning group outings that encourage social interaction, teamwork, recreation and memorable experiences beyond the urban setting. A One Day School Picnic in Navi Mumbai can be planned for students who want an engaging day outing without the need for an extended stay. The destination provides opportunities for students to enjoy outdoor activities, observe agricultural surroundings, experience nature and participate in group recreation under suitable supervision. School Picnic Resorts in Navi Mumbai can offer a comfortable setting for annual picnics, class outings, student activity days and school group visits. Educational Picnic Spots in Navi Mumbai can make a school outing more meaningful by giving children practical exposure to rural surroundings, agriculture, plants, natural landscapes and the basic idea of agro-tourism. School Trip Places in Navi Mumbai can therefore be selected not only for entertainment but also for experiential learning and opportunities to discover a different environment from everyday city life. Kids Picnic Spots should provide an atmosphere where children can enjoy age-appropriate recreation, open spaces and group activities while teachers and coordinators manage the planned schedule. Om Agro Tourism brings together countryside scenery, agriculture, greenery and leisure experiences in a setting that can suit different student age groups. Teachers can organize activities according to the purpose of the visit, group size and age of the children, while students can enjoy time with friends through outdoor recreation, games and nature-based experiences. Seasonal visits provide different surroundings, with monsoon bringing vibrant greenery, winter offering comfortable outdoor conditions and summer visits being planned around suitable timings. The destination can be considered for annual school picnics, educational excursions, class trips, student outings, children's group recreation and nature-oriented school visits. Om Agro Tourism provides an alternative to conventional urban picnic locations by allowing children to experience a more open and natural countryside environment. Schools planning a memorable student outing can consider the destination for a one-day experience that balances recreation, group bonding, nature awareness and educational exposure.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spots-in-navi-mumbai"
  }
};






    return (
        <div>

<Helmet>
  <title>
    School Picnic Spots in Navi Mumbai | Kids, Educational & One Day School Trip | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots in Navi Mumbai for one-day school trips, kids' outings, educational experiences, nature activities and student group picnics."
  />

  <meta
    name="keywords"
    content="School Picnic Spots in Navi Mumbai, Best School Picnic Spots in Navi Mumbai, School Picnic Places in Navi Mumbai, One Day School Picnic in Navi Mumbai, School Picnic Resorts in Navi Mumbai, Educational Picnic Spots in Navi Mumbai, School Trip Places in Navi Mumbai, Kids Picnic Spots in Navi Mumbai, school picnic places near Navi Mumbai, best school picnic places in Navi Mumbai, school outing places in Navi Mumbai, school trip in Navi Mumbai, one day school trip in Navi Mumbai, school picnic destination in Navi Mumbai, school picnic resort in Navi Mumbai, school group outing in Navi Mumbai, educational picnic places in Navi Mumbai, educational outing in Navi Mumbai, educational trip in Navi Mumbai, student picnic spot in Navi Mumbai, student outing places in Navi Mumbai, picnic places for school students in Navi Mumbai, school picnic venue in Navi Mumbai, school picnic location in Navi Mumbai, school excursion in Navi Mumbai, school excursion places in Navi Mumbai, school nature trip in Navi Mumbai, nature picnic spot for students in Navi Mumbai, school group picnic in Navi Mumbai, one day picnic for school students in Navi Mumbai, one day outing for students in Navi Mumbai, school activity resort in Navi Mumbai, school picnic with activities in Navi Mumbai, school picnic place with activities in Navi Mumbai, agro tourism for school students in Navi Mumbai, agro tourism school picnic in Navi Mumbai, agri tourism for students in Navi Mumbai, educational agro tourism in Navi Mumbai, farm visit for school students in Navi Mumbai, agricultural educational tour in Navi Mumbai, rural educational trip in Navi Mumbai, nature education outing in Navi Mumbai, school picnic for children in Navi Mumbai, kids picnic places in Navi Mumbai, kids outing places in Navi Mumbai, kids picnic spot in Navi Mumbai, school annual picnic in Navi Mumbai, school class picnic in Navi Mumbai, school picnic venue with activities in Navi Mumbai, student day outing in Navi Mumbai, school tour destination in Navi Mumbai, school recreational outing in Navi Mumbai, school picnic resort with activities in Navi Mumbai, best educational picnic spot in Navi Mumbai, school picnic destination with nature in Navi Mumbai, student nature outing in Navi Mumbai, school day trip in Navi Mumbai, school picnic resort for students in Navi Mumbai, school group picnic destination in Navi Mumbai, children's picnic spot in Navi Mumbai, kids day outing in Navi Mumbai"
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
                            <img src='/images/keyword/47.jpg' alt='img' className='img-fluid' />
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

export default SchoolPicnicSpotsInNaviMumbai;