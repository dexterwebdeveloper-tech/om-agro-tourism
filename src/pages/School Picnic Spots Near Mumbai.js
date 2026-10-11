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

function SchoolPicnicSpotsNearMumbai() {


const cardData = {
    keyword: "School Picnic Spots Near Mumbai",
    headingDescription: "Om Agro Tourism offers schools from Mumbai a refreshing countryside destination where students can combine learning, recreation, nature, and group activities in one memorable outing. Farm experiences, water recreation, outdoor games, traditional rural activities, and planned school picnic packages make it suitable for educational trips and enjoyable day excursions.",
    topPlaces: [
        {
            title: "Farm-Based Learning Experience",
            description: "Students can explore agricultural surroundings and discover how farming connects with everyday life. Practical exposure to crops, farm activities, and rural practices can turn a regular school excursion into an interactive learning experience."
        },
        {
            title: "Water Recreation Experience",
            description: "Water-based activities add excitement and refreshment to a school picnic itinerary. Students can enjoy recreational time while teachers combine the experience with farm exploration, outdoor games, and educational activities."
        },
        {
            title: "Nature Exploration Area",
            description: "The green countryside environment gives students opportunities to observe plants, farmland, birds, and natural surroundings. Nature exploration provides a welcome break from Mumbai's busy urban atmosphere."
        },
        {
            title: "Traditional Bullock Cart Ride",
            description: "A bullock cart ride offers students an interesting introduction to rural transportation and traditional village life. It creates a memorable cultural experience while allowing groups to enjoy the peaceful farm surroundings."
        },
        {
            title: "Outdoor Sports & Group Games",
            description: "Students can participate in outdoor games and recreational activities that encourage movement, communication, teamwork, and friendly competition. These experiences make the school outing energetic and socially engaging."
        },
        {
            title: "Tractor Ride Through Farmland",
            description: "A tractor ride gives students a fun perspective of agricultural landscapes and farm operations. The experience combines entertainment with an opportunity to observe rural surroundings more closely."
        },
        {
            title: "Educational Nature Session",
            description: "Teachers can use the natural setting for observation-based activities and discussions about agriculture, plants, animals, and the environment. Learning outdoors can make concepts more relatable and memorable for students."
        },
        {
            title: "Farm-Fresh Meal Break",
            description: "A comfortable meal break allows students and teachers to recharge between activities. Enjoying food in a countryside environment adds to the overall picnic experience while keeping the day's schedule balanced."
        },
        {
            title: "Adventure & Recreation Zone",
            description: "Adventure-oriented outdoor activities give students opportunities to stay active and participate in shared challenges. Group recreation can encourage confidence, coordination, cooperation, and enthusiastic participation."
        },
        {
            title: "One Day School Excursion",
            description: "Schools can organize a complete one-day excursion with farm learning, nature activities, water recreation, games, traditional rides, meals, and leisure time, giving students a varied experience away from the classroom."
        }
    ],
    services: [
        {
            name: "School Picnic Spots Near Mumbai",
            description: "Schools can plan a refreshing outing featuring farm exploration, outdoor recreation, nature activities, water fun, group games, and educational experiences in a peaceful countryside setting."
        },
        {
            name: "Best School Picnic Spots Near Mumbai",
            description: "A well-planned school picnic can combine practical farm learning with recreational activities, traditional rural experiences, outdoor games, meals, and nature exploration for a memorable student outing."
        },
        {
            name: "One Day School Picnic Near Mumbai",
            description: "A one-day school excursion can include educational activities, farm experiences, water recreation, group games, food, and leisure time within a convenient day-trip itinerary."
        },
        {
            name: "School Picnic Resorts Near Mumbai",
            description: "The agro-tourism resort provides schools with a combination of countryside surroundings, activity-based entertainment, farm experiences, food options, and recreational facilities suitable for student groups."
        },
        {
            name: "Educational Picnic Spots Near Mumbai",
            description: "Students can learn through direct exposure to farming, nature, rural traditions, and outdoor environments while enjoying an educational excursion that goes beyond conventional classroom learning."
        },
        {
            name: "School Trip Places Near Mumbai",
            description: "Schools searching for a destination outside the city can plan a trip around farm activities, nature exploration, outdoor games, traditional rides, water recreation, and shared group experiences."
        },
        {
            name: "Kids Picnic Spots Near Mumbai",
            description: "Children can enjoy an active school outing with age-friendly outdoor recreation, farm exploration, water activities, traditional rides, nature experiences, and open spaces for group entertainment."
        },
        {
            name: "School Outing Places Near Mumbai",
            description: "The countryside setting provides schools with a refreshing alternative to urban outings, offering opportunities for educational activities, outdoor games, nature exploration, food, and group recreation."
        },
        {
            name: "School Picnic Spots Near Mumbai With Activities",
            description: "Students can experience a varied picnic itinerary with farm activities, water recreation, outdoor games, traditional rides, nature exploration, and other group-friendly entertainment."
        },
        {
            name: "Water Park for School Picnic Near Mumbai",
            description: "Water-based recreation can make a school picnic more exciting while students also enjoy farm experiences, nature activities, games, and a refreshing countryside environment."
        },
        {
            name: "School Picnic Resort With Swimming Pool Near Mumbai",
            description: "Schools can include swimming and water recreation alongside outdoor activities, farm exploration, group games, and meal breaks for a more complete and enjoyable student outing."
        },
        {
            name: "Adventure Picnic Spots Near Mumbai for Students",
            description: "Adventure and outdoor recreation provide students with opportunities to participate in active group experiences that can develop coordination, confidence, communication, and teamwork."
        },
        {
            name: "Agro Tourism for School Picnic Near Mumbai",
            description: "Agro-tourism introduces students to farming, rural life, nature, traditional activities, and sustainable practices while keeping the school picnic interactive and enjoyable."
        },
        {
            name: "Nature Picnic Spots Near Mumbai for Students",
            description: "Green surroundings and agricultural landscapes give students a chance to observe nature, explore open spaces, participate in outdoor activities, and enjoy a refreshing educational trip."
        },
        {
            name: "Affordable School Picnic Spots Near Mumbai",
            description: "Schools can plan a practical day outing that brings together educational experiences, recreation, meals, and outdoor activities without requiring an extended travel schedule."
        },
        {
            name: "School Picnic Packages Near Mumbai",
            description: "A structured school picnic package can simplify group planning by bringing together activities, food, educational experiences, and recreation within a convenient school excursion schedule."
        },
        {
            name: "School Field Trip Places Near Mumbai",
            description: "A field trip to an agro-tourism environment allows students to observe farming, nature, rural surroundings, and outdoor activities while gaining practical knowledge beyond the classroom."
        },
        {
            name: "One Day Educational Trip Near Mumbai",
            description: "Schools can create a balanced one-day educational itinerary featuring farm learning, environmental exploration, group activities, outdoor recreation, meals, and enjoyable leisure time."
        },
        {
            name: "School Picnic Spots Near Mumbai Within 50 KM",
            description: "Schools looking for a convenient picnic destination within a practical travel range can consider an organized countryside experience combining education, recreation, food, and outdoor activities."
        },
        {
            name: "Safe School Picnic Spots Near Mumbai for Students",
            description: "Schools can plan their outing around organized group activities, structured schedules, open surroundings, supervised recreation, and planned meal breaks to create a comfortable experience for students and teachers."
        },
        {
            name: "School Picnic Spots in Mumbai",
            description: "For schools searching for picnic experiences connected with Mumbai, an agro-tourism outing offers a refreshing alternative with farm learning, nature exploration, outdoor games, water recreation, and rural experiences."
        },
        {
            name: "Best School Picnic Spots in Mumbai",
            description: "A combination of educational farm activities, nature, water recreation, traditional rides, outdoor games, and food makes the experience suitable for schools seeking a varied and memorable picnic."
        },
        {
            name: "School Picnic Places in Mumbai",
            description: "School groups can enjoy an outing that combines educational experiences and recreation, helping students spend quality time with classmates while discovering agriculture and rural surroundings."
        },
        {
            name: "One Day School Picnic in Mumbai",
            description: "A one-day school picnic can bring together farm exploration, nature activities, outdoor games, water recreation, meals, and group entertainment within a convenient schedule."
        },
        {
            name: "Educational Picnic Spots in Mumbai",
            description: "Students can experience practical learning through agriculture, nature observation, rural activities, and outdoor exploration while enjoying a refreshing break from regular classroom lessons."
        },
        {
            name: "School Trip Places in Mumbai",
            description: "Schools can choose a destination that provides opportunities for farm learning, outdoor games, nature exploration, traditional experiences, and recreational activities for a well-rounded student trip."
        },
        {
            name: "Kids Picnic Spots in Mumbai",
            description: "Children can enjoy an energetic outing with recreational activities, nature exploration, farm experiences, water fun, and group games designed to make their school trip enjoyable and memorable."
        },
        {
            name: "School Outing Places in Mumbai",
            description: "A countryside school outing offers a change from the city's busy environment and gives students space for group activities, educational exploration, recreation, meals, and shared experiences."
        }
    ],
    tableData: [
        ["School Picnic Spots Near Mumbai"],
        ["Best School Picnic Spots Near Mumbai"],
        ["One Day School Picnic Near Mumbai"],
        ["School Picnic Resorts Near Mumbai"],
        ["Educational Picnic Spots Near Mumbai"],
        ["School Trip Places Near Mumbai"],
        ["Kids Picnic Spots Near Mumbai"],
        ["School Outing Places Near Mumbai"],
        ["School Picnic Spots Near Mumbai With Activities"],
        ["Water Park for School Picnic Near Mumbai"],
        ["School Picnic Resort With Swimming Pool Near Mumbai"],
        ["Adventure Picnic Spots Near Mumbai for Students"],
        ["Agro Tourism for School Picnic Near Mumbai"],
        ["Nature Picnic Spots Near Mumbai for Students"],
        ["Affordable School Picnic Spots Near Mumbai"],
        ["School Picnic Packages Near Mumbai"],
        ["School Field Trip Places Near Mumbai"],
        ["One Day Educational Trip Near Mumbai"],
        ["School Picnic Spots Near Mumbai Within 50 KM"],
        ["Safe School Picnic Spots Near Mumbai for Students"],
        ["School Picnic Spots in Mumbai"],
        ["Best School Picnic Spots in Mumbai"],
        ["School Picnic Places in Mumbai"],
        ["One Day School Picnic in Mumbai"],
        ["Educational Picnic Spots in Mumbai"],
        ["School Trip Places in Mumbai"],
        ["Kids Picnic Spots in Mumbai"],
        ["School Outing Places in Mumbai"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Practical Learning in a Farm Environment",
            WhyChoosedescription: "Students can connect classroom concepts with real agricultural surroundings by observing crops, farm activities, rural practices, and nature. This creates a more interactive learning experience during the school excursion."
        },
        {
            WhyChooseheading: "Variety of Student Activities",
            WhyChoosedescription: "Water recreation, outdoor games, traditional rides, farm exploration, and nature-based activities give students multiple ways to stay engaged and make the most of their picnic day."
        },
        {
            WhyChooseheading: "A Refreshing Break from Mumbai",
            WhyChoosedescription: "The countryside setting offers students a change from the crowded urban environment, providing open spaces, greenery, fresh surroundings, and opportunities for outdoor exploration."
        },
        {
            WhyChooseheading: "Ideal for Educational Field Trips",
            WhyChoosedescription: "The combination of agriculture, nature, rural culture, and recreation makes the destination useful for field trips where teachers want students to learn through observation and practical experiences."
        },
        {
            WhyChooseheading: "Water Fun and Outdoor Recreation",
            WhyChoosedescription: "Water activities add an exciting recreational element to the itinerary, while outdoor games and farm experiences provide additional ways for students to stay active and enjoy their time together."
        },
        {
            WhyChooseheading: "Encourages Teamwork & Interaction",
            WhyChoosedescription: "Group games and shared activities encourage students to communicate, cooperate, participate in friendly challenges, and strengthen relationships with classmates outside the classroom."
        },
        {
            WhyChooseheading: "Convenient Day Picnic Planning",
            WhyChoosedescription: "Schools can organize educational activities, recreation, meal breaks, and leisure time within a single-day schedule, making the outing easier to coordinate for students, teachers, and accompanying staff."
        },
        {
            WhyChooseheading: "Complete Learning and Leisure Experience",
            WhyChoosedescription: "Farm education, nature exploration, water recreation, outdoor entertainment, traditional rural experiences, and food can come together in one itinerary, giving students a balanced and memorable school picnic."
        }
    ]
};


const faqData = [
    {
        question: "Is Om Agri Tourism suitable among school picnic spots near Mumbai?",
        answer: "Om Agri Tourism offers a peaceful farm setting where students can enjoy greenery, open spaces and countryside experiences away from the busy city environment. The combination of outdoor recreation and rural activities can make it a refreshing option for schools planning a picnic near Mumbai."
    },
    {
        question: "What activities can students enjoy at Om Agri Tourism?",
        answer: "Students visiting Om Agri Tourism can enjoy experiences such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These activities provide variety throughout the picnic and give students an opportunity to enjoy an outdoor environment."
    },
    {
        question: "Can schools from Mumbai plan a picnic at Om Agri Tourism?",
        answer: "Schools from Mumbai can consider Om Agri Tourism for a planned group outing in a countryside setting. Students can spend time around the farm, participate in suitable activities and enjoy a change from their regular classroom and urban surroundings."
    },
    {
        question: "Is Om Agri Tourism suitable for a large school picnic group?",
        answer: "Om Agri Tourism provides an open farm environment that can offer a different experience for school groups. Teachers and coordinators can organize the day around suitable activities, food breaks and supervised recreation according to the students' age and group requirements."
    },
    {
        question: "Can students experience rural life during a school picnic at Om Agri Tourism?",
        answer: "A visit to Om Agri Tourism allows students to explore a countryside environment and experience traditional rural activities. Tractor rides and bull cart rides can introduce students to a different side of outdoor life while making the school picnic more memorable."
    },
    {
        question: "Is bird watching available for students at Om Agri Tourism?",
        answer: "Bird watching offers students a nature-focused activity at Om Agri Tourism. Exploring the farm greenery and observing birds can add an educational and engaging element to the picnic while encouraging students to spend time observing their natural surroundings."
    },
    {
        question: "Can students enjoy swimming and boating at Om Agri Tourism?",
        answer: "Swimming and boating can provide recreational options for students visiting Om Agri Tourism. Participation should always follow applicable safety guidelines, age suitability and proper supervision so that students can enjoy these activities responsibly."
    },
    {
        question: "Are traditional farm rides available for school groups?",
        answer: "Students can experience traditional countryside activities at Om Agri Tourism through tractor rides and bull cart rides. These experiences add a rural character to the outing and give students something different from the usual activities available at urban picnic locations."
    },
    {
        question: "Does Om Agri Tourism provide homemade food for school picnic groups?",
        answer: "Homemade food can complement the countryside experience at Om Agri Tourism and provide students and teachers with a traditional meal during the outing. Food breaks can be planned between activities, giving the group time to relax and enjoy the farm surroundings."
    },
    {
        question: "Why choose Om Agri Tourism when searching for school picnic spots near Mumbai?",
        answer: "Om Agri Tourism brings together farm greenery, open spaces, outdoor recreation and traditional rural experiences in one destination. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching can give students a varied day outside the classroom and create a memorable school picnic experience."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Dinesh Sawant",
        feedback:
            "Our school group visited Om Agri Tourism for a picnic and the students were excited from the beginning. They enjoyed boating, the tractor ride and bird watching, while the farm surroundings gave them a welcome break from the city. The variety of activities made the day engaging for everyone.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Vaishali Deshmukh",
        feedback:
            "Om Agri Tourism gave our students a different kind of picnic experience. The bull cart ride was especially popular, and the children also enjoyed exploring the greenery and participating in outdoor activities. It was a pleasant combination of recreation, nature and countryside experiences.",
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
  "name": "School Picnic Spots Near Mumbai",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spots-near-mumbai.webp",
  "description": "Om Agro Tourism offers School Picnic Spots Near Mumbai for schools planning enjoyable, refreshing and educational day outings for students away from the crowded urban environment. Schools searching for the Best School Picnic Spots Near Mumbai can consider a peaceful countryside destination where students can enjoy open spaces, greenery, outdoor recreation and shared group experiences. A school picnic provides children with an opportunity to take a break from their regular classroom routine while developing stronger social connections through activities, games and interaction with classmates. One Day School Picnic Near Mumbai is a convenient option for schools that want to organize a memorable group outing without requiring an extended travel schedule or overnight stay. The agro-tourism environment gives students an opportunity to experience agricultural surroundings, observe nature and enjoy a relaxed rural atmosphere that is different from everyday city life. School Picnic Resorts Near Mumbai can be particularly useful for teachers and coordinators looking for a destination where student groups can spend several hours enjoying recreation, nature and organized activities in a comfortable setting. Om Agro Tourism combines countryside landscapes with leisure and nature-based experiences, making the outing suitable for school groups, annual picnics, class trips, student recreation days and educational excursions. An Educational Picnic experience can add value to the outing by allowing students to gain practical exposure to farming, rural surroundings, plants, open landscapes and aspects of agro-tourism beyond what they normally see in a classroom. Teachers can plan suitable activities according to the age group, group size and educational objectives of the visit. Students can participate in group recreation, enjoy fresh surroundings and create memorable moments with friends while exploring a more natural environment. Seasonal visits offer different experiences, with monsoon bringing lush greenery and refreshing scenery, winter providing comfortable conditions for outdoor activities and summer outings being planned around suitable timings. The destination can suit schools from Mumbai and surrounding areas looking for a convenient one-day picnic experience that balances fun, nature, learning and group bonding. Om Agro Tourism provides an alternative to conventional urban entertainment by bringing agriculture, outdoor recreation and countryside experiences together. Schools looking for a student-friendly picnic destination near Mumbai can consider the location for annual school outings, educational visits, class picnics and nature-oriented day trips.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spots-near-mumbai"
  }
};






    return (
        <div>
<Helmet>
  <title>
    School Picnic Spots Near Mumbai | Educational, Student & One Day Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots near Mumbai for one-day student outings, educational trips, nature experiences, group activities and memorable school picnics."
  />

  <meta
    name="keywords"
    content="School Picnic Spots Near Mumbai, Best School Picnic Spots Near Mumbai, One Day School Picnic Near Mumbai, School Picnic Resorts Near Mumbai, Educational Picnic Spot Near Mumbai, school picnic places near Mumbai, school picnic spots around Mumbai, best school picnic places near Mumbai, school outing places near Mumbai, school trip near Mumbai, one day school trip near Mumbai, school picnic destination near Mumbai, school picnic resort near Mumbai, school group outing near Mumbai, educational picnic places near Mumbai, educational outing near Mumbai, educational trip near Mumbai, student picnic spot near Mumbai, student outing places near Mumbai, picnic places for school students near Mumbai, school picnic venue near Mumbai, school picnic location near Mumbai, school excursion near Mumbai, school excursion places near Mumbai, school nature trip near Mumbai, nature picnic spot for students near Mumbai, school group picnic near Mumbai, one day picnic for school students near Mumbai, one day outing for students near Mumbai, school activity resort near Mumbai, school picnic with activities near Mumbai, school picnic place with activities near Mumbai, agro tourism for school students near Mumbai, agro tourism school picnic near Mumbai, agri tourism for students near Mumbai, educational agro tourism near Mumbai, farm visit for school students near Mumbai, agricultural educational tour near Mumbai, rural educational trip near Mumbai, nature education outing near Mumbai, school picnic for children near Mumbai, school picnic for kids near Mumbai, school annual picnic near Mumbai, school class picnic near Mumbai, school picnic venue with activities near Mumbai, student day outing near Mumbai, school tour destination near Mumbai, school recreational outing near Mumbai, school picnic resort with activities near Mumbai, best educational picnic spot near Mumbai, school picnic destination with nature near Mumbai, student nature outing near Mumbai, school day trip near Mumbai"
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
                            <img src='/images/keyword/45.jpg' alt='img' className='img-fluid' />
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

export default SchoolPicnicSpotsNearMumbai;