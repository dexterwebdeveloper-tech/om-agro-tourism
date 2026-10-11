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

function Schoolpicnicspotinbhor() {


const cardData = {
    keyword: "School Picnic Spot in Bhor",
    headingDescription: "Om Agro Tourism offers a refreshing school picnic experience for students from Bhor and nearby areas, combining farm-based learning, nature exploration, rural experiences, outdoor recreation, and homemade food. The peaceful agricultural setting gives school groups an opportunity to enjoy an educational and entertaining day outside the regular classroom environment.",

    topPlaces: [
        {
            title: "Interactive Agricultural Learning Experience",
            description: "Students can explore the farm environment and gain practical knowledge about agriculture and rural surroundings. Direct exposure to farming makes the learning experience more interesting while giving children time to enjoy the outdoors."
        },
        {
            title: "Traditional Village Life Experience",
            description: "The rural setting allows students to discover traditional countryside lifestyles and understand the connection between farming and daily life. It adds cultural and educational value to the school picnic."
        },
        {
            title: "Farm-Based Student Learning Zone",
            description: "Children can observe agricultural surroundings and learn about the importance of farming through direct experience. This practical approach can complement classroom lessons related to agriculture and the environment."
        },
        {
            title: "Green Nature Exploration Experience",
            description: "The greenery around the farm provides students with opportunities to observe plants, open landscapes, and natural surroundings. Exploring the environment encourages curiosity and makes the school outing more engaging."
        },
        {
            title: "Rural Culture Discovery Experience",
            description: "Students can gain exposure to rural traditions and countryside life while spending time in an agricultural environment. The experience gives children an opportunity to discover something different from their everyday surroundings."
        },
        {
            title: "Outdoor Group Recreation Area",
            description: "Open farm surroundings provide students with space for group recreation, interaction, and outdoor enjoyment. The environment encourages participation and gives classmates opportunities to spend quality time together."
        },
        {
            title: "Educational Farm Visit Experience",
            description: "A farm visit can introduce students to practical aspects of agriculture and rural life through observation and exploration. The educational experience becomes more memorable when combined with outdoor recreation."
        },
        {
            title: "Farm-to-Table Food Experience",
            description: "Students can enjoy tasty homemade food in a peaceful agricultural environment. Sharing meals together provides a relaxing part of the picnic while adding a traditional rural food experience to the visit."
        },
        {
            title: "Student Nature and Farm Exploration",
            description: "Children can explore the natural surroundings while also experiencing an agricultural environment. The combination of nature observation and farm learning provides an enjoyable break from regular classroom routines."
        },
        {
            title: "School Group Farm Recreation Experience",
            description: "The farm environment gives school groups opportunities for exploration, interaction, outdoor recreation, and shared experiences. Teachers can plan the visit according to student age groups and educational objectives."
        }
    ],

    services: [
        {
            name: "School Picnic Spots in Bhor",
            description: "Om Agro Tourism provides school groups with farm-based learning, nature exploration, rural experiences, outdoor recreation, group activities, and homemade food for an enjoyable and educational picnic experience."
        },
        {
            name: "Best School Picnic Spot in Bhor",
            description: "Students can enjoy a peaceful agricultural environment where education and recreation come together. Farm experiences, nature exploration, rural surroundings, and food create a varied outing for school groups."
        },
        {
            name: "School Picnic Spot Near Bhor ",
            description: "Schools can plan a refreshing outing where students experience agricultural surroundings, explore nature, learn about rural life, and enjoy outdoor recreation away from their regular classroom environment."
        },
        {
            name: "School Picnic Places in Bhor",
            description: "Om Agro Tourism combines farm learning with nature experiences, rural activities, outdoor recreation, and group engagement, giving schools a destination where students can learn and enjoy together."
        },
        {
            name: "Best School Picnic Places in Bhor",
            description: "The farm setting offers students a combination of agricultural learning, nature exploration, rural culture, outdoor activities, and food, helping schools create a meaningful and enjoyable picnic itinerary."
        },
        {
            name: "School Picnic Resort in Bhor",
            description: "Students can spend quality time in a peaceful agricultural environment with opportunities for farm learning, nature exploration, group recreation, rural experiences, and homemade food during their school outing."
        },
        {
            name: "School Picnic Resorts Near Bhor",
            description: "Schools looking for an outdoor destination near Bhor can plan a farm-based outing where students experience agriculture, greenery, rural surroundings, recreation, and group activities in one visit."
        },
        {
            name: "One Day School Picnic in Bhor",
            description: "A one-day school picnic can include agricultural learning, nature exploration, rural experiences, outdoor recreation, group activities, and meals, creating a balanced schedule for students and teachers."
        },
        {
            name: "One Day Picnic Spot in Bhor ",
            description: "Students can spend an entire day exploring the farm environment, enjoying nature, participating in outdoor recreation, discovering rural culture, and sharing meals with their classmates."
        },
        {
            name: "Educational Picnic Spot in Bhor",
            description: "The agricultural environment provides practical learning opportunities related to farming, nature, and rural life. Students can learn through direct observation while enjoying an outdoor educational experience."
        },
        {
            name: "Educational Trip Places in Bhor",
            description: "Farm-based learning gives students direct exposure to agriculture and countryside surroundings. Nature exploration and outdoor recreation can make the educational trip more engaging and enjoyable."
        },
        {
            name: "School Trip Places in Bhor",
            description: "Om Agro Tourism gives students opportunities to explore farming, rural culture, nature, and outdoor recreation. The varied experiences can add educational and recreational value to a school trip."
        },
        {
            name: "Best Place for School Trip in Bhor ",
            description: "Students can experience agriculture, nature, rural surroundings, outdoor activities, and homemade food at one destination. The combination provides schools with several options for creating a memorable trip."
        },
        {
            name: "School Outing Places in Bhor ",
            description: "The farm environment gives students a refreshing break from classroom routines through agricultural experiences, nature exploration, outdoor recreation, rural activities, and group interaction."
        },
        {
            name: "School Picnic Packages in Bhor",
            description: "School picnic packages can bring together farm learning, nature experiences, outdoor recreation, rural activities, group entertainment, and food, helping schools organize a convenient outing for students."
        },
        {
            name: "School Picnic Destination in Bhor",
            description: "Om Agro Tourism offers a peaceful farm environment where students can combine educational experiences with nature exploration, rural culture, outdoor recreation, group activities, and homemade food."
        },
        {
            name: "Agro Tourism in Bhor for School Picnic",
            description: "An agro-tourism experience introduces students to farming, rural lifestyles, natural surroundings, and traditional activities. The combination of practical learning and recreation creates a meaningful school outing."
        },
        {
            name: "Agro Tourism Near Bhor for Students",
            description: "Students can gain direct exposure to agricultural surroundings and rural life while enjoying nature and outdoor recreation. The experience provides learning opportunities beyond the regular classroom setting."
        },
        {
            name: "School Picnic Farm in Bhor",
            description: "A farm-based school picnic gives children an opportunity to observe agriculture, explore nature, enjoy outdoor activities, and learn about rural surroundings in a peaceful environment."
        },
        {
            name: "Adventure School Picnic Spot in Bhor",
            description: "Students can enjoy an active outdoor outing featuring farm exploration, nature experiences, group recreation, and engaging activities. The open surroundings provide opportunities for participation and adventure."
        },
        {
            name: "Nature Picnic Spot for Students in Bhor",
            description: "The green agricultural surroundings provide students with a refreshing place to explore nature and spend time outdoors. Combining nature observation with farm experiences makes the picnic both educational and enjoyable."
        },
        {
            name: "Kids Picnic Spot in Bhor",
            description: "Children can enjoy a farm environment with nature exploration, group recreation, agricultural experiences, and rural activities. The varied surroundings help keep students active and interested throughout the outing."
        },
        {
            name: "School Group Picnic Spot in Bhor",
            description: "Om Agro Tourism provides a suitable environment for school groups to explore, participate in outdoor activities, enjoy farm experiences, and share meals while spending quality time together."
        },
        {
            name: "School Picnic Spot Near Bhor Pune",
            description: "Schools around Bhor and Pune can plan a refreshing farm-based outing where students experience agriculture, nature, rural culture, outdoor recreation, group activities, and homemade food."
        }
    ],

    tableData: [
        ["School Picnic Spots in Bhor"],
        ["Best School Picnic Spot in Bhor"],
        ["School Picnic Spot Near Bhor "],
        ["School Picnic Places in Bhor"],
        ["Best School Picnic Places in Bhor"],
        ["School Picnic Resort in Bhor"],
        ["School Picnic Resorts Near Bhor"],
        ["One Day School Picnic in Bhor"],
        ["One Day Picnic Spot in Bhor "],
        ["Educational Picnic Spot in Bhor"],
        ["Educational Trip Places in Bhor"],
        ["School Trip Places in Bhor"],
        ["Best Place for School Trip in Bhor "],
        ["School Outing Places in Bhor "],
        ["School Picnic Packages in Bhor"],
        ["School Picnic Destination in Bhor"],
        ["Agro Tourism in Bhor for School Picnic"],
        ["Agro Tourism Near Bhor for Students"],
        ["School Picnic Farm in Bhor"],
        ["Adventure School Picnic Spot in Bhor"],
        ["Nature Picnic Spot for Students in Bhor"],
        ["Kids Picnic Spot in Bhor"],
        ["School Group Picnic Spot in Bhor"],
        ["School Picnic Spot Near Bhor Pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Practical Farm Education",
            WhyChoosedescription: "Students can understand agriculture through direct exposure to a real farm environment. This hands-on experience can make classroom concepts more relatable while keeping the picnic informative and enjoyable."
        },
        {
            WhyChooseheading: "Peaceful Natural Setting",
            WhyChoosedescription: "The agricultural surroundings offer students a calm and refreshing place to spend time outdoors. Greenery and open spaces provide a welcome change from regular school and urban environments."
        },
        {
            WhyChooseheading: "Learning Through Direct Experience",
            WhyChoosedescription: "Children can observe farming, nature, and rural surroundings directly instead of learning only through textbooks. This practical approach encourages curiosity and makes the educational outing more memorable."
        },
        {
            WhyChooseheading: "Rural Culture Exposure",
            WhyChoosedescription: "The farm setting gives students an opportunity to discover traditional countryside life and understand the relationship between agriculture and rural communities. This adds cultural value to the school picnic."
        },
        {
            WhyChooseheading: "Balanced Educational Outing",
            WhyChoosedescription: "Farm learning can be combined with nature exploration, outdoor recreation, group activities, and relaxation. This balance allows students to gain knowledge while enjoying their time with classmates."
        },
        {
            WhyChooseheading: "Suitable for School Groups",
            WhyChoosedescription: "The variety of available experiences gives teachers flexibility when planning their school itinerary. Activities can be selected according to student age, interests, and educational objectives."
        },
        {
            WhyChooseheading: "Comfortable Homemade Food",
            WhyChoosedescription: "Tasty homemade food provides students with a comfortable meal experience during their outing. Sharing food together in a peaceful farm environment also creates an enjoyable social experience for the group."
        },
        {
            WhyChooseheading: "Memorable Farm Picnic",
            WhyChoosedescription: "Agricultural experiences, nature exploration, rural culture, outdoor recreation, group interaction, and shared meals can create lasting memories for students while giving them a meaningful break from their regular classroom routine."
        }
    ]
};



const faqData = [
    {
        question: "What kind of school outing can students enjoy at Om Agri Tourism in Bhor?",
        answer: "Om Agri Tourism offers a farm-based setting where students can enjoy open surroundings, greenery and outdoor recreation away from their regular classroom environment. The combination of countryside experiences and fun activities can make a school outing in Bhor refreshing and memorable."
    },
    {
        question: "Which activities can be planned for students at Om Agri Tourism?",
        answer: "A student group can enjoy experiences such as horse riding, boating, swimming, bird watching, tractor rides and bull cart rides. The variety gives schools the flexibility to include both active recreation and nature-oriented experiences in their picnic schedule."
    },
    {
        question: "Can schools in Bhor arrange a picnic at Om Agri Tourism?",
        answer: "Schools from Bhor can consider Om Agri Tourism for an organized farm outing with students and teachers. Advance planning can help the group coordinate suitable activities, meal breaks and supervision based on the age group and needs of the students."
    },
    {
        question: "What rural experiences can students discover during the picnic?",
        answer: "A visit to Om Agri Tourism can introduce children to traditional countryside activities that are different from their everyday surroundings. Tractor rides and bull cart rides provide a closer look at rural experiences, while the farm setting allows students to spend time around greenery and nature."
    },
    {
        question: "Can Om Agri Tourism accommodate different types of student interests?",
        answer: "The range of outdoor experiences gives students different ways to enjoy their day. Those who prefer active recreation can explore swimming, boating or horse riding, while students interested in nature can spend time bird watching and observing the farm surroundings."
    },
    {
        question: "How can bird watching make a school picnic more engaging?",
        answer: "Bird watching encourages students to observe their surroundings and notice wildlife in a natural setting. At Om Agri Tourism, this activity can provide a peaceful break between recreational activities while helping children develop greater curiosity about the environment."
    },
    {
        question: "Are tractor rides and bull cart rides suitable for a school group?",
        answer: "Tractor rides and bull cart rides can be enjoyable additions to a school picnic, especially for students interested in experiencing traditional farm activities. Schools should consider the age and suitability of participants and ensure appropriate guidance during these experiences."
    },
    {
        question: "Can students enjoy boating and swimming at Om Agri Tourism?",
        answer: "Water-based activities such as boating and swimming can add excitement to the school outing when they are suitable for the participating students. Proper supervision, age-appropriate participation and adherence to applicable safety instructions should be maintained during these activities."
    },
    {
        question: "Is homemade food part of the Om Agri Tourism picnic experience?",
        answer: "Homemade food can add a familiar and traditional touch to the farm visit. Students and teachers can enjoy a relaxed meal together, giving the group a comfortable pause between activities and enhancing the overall countryside picnic experience."
    },
    {
        question: "Why choose Om Agri Tourism as a school picnic spot in Bhor?",
        answer: "Om Agri Tourism offers students an opportunity to enjoy recreation while experiencing a green farm environment and traditional countryside activities. With swimming, boating, horse riding, bird watching, tractor rides and bull cart rides available as experiences, the destination can make a school picnic in Bhor diverse and enjoyable."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Kiran Mane",
        feedback:
            "Our students enjoyed the farm atmosphere at Om Agri Tourism from the moment we arrived. The boating and bull cart ride were highlights of the day, and the children also enjoyed observing the greenery around them. It was a refreshing school outing with plenty of enjoyable moments.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Anjali Shirole",
        feedback:
            "We had a very pleasant school picnic experience at Om Agri Tourism. The students loved trying horse riding and were fascinated by the tractor ride and bird watching. The countryside setting gave them a welcome break from their daily routine and made the outing memorable.",
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
  "name": "School Picnic Spot in Bhor",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spot-in-bhor.webp",
  "description": "Om Agro Tourism offers a refreshing School Picnic Spot in Bhor for schools planning enjoyable, educational and nature-oriented outings for students. School Picnic Spots in Bhor can give children a welcome break from their regular classroom routine while allowing them to spend time in open spaces, greenery, agricultural surroundings and a peaceful countryside environment. Schools searching for the Best School Picnic Spot in Bhor can consider an agro-tourism destination where recreation, nature exposure and experiential learning can be combined into a memorable school outing. A School Picnic Spot Near Bhor can be a convenient option for schools and coordinators looking to organize a day excursion without requiring students to travel to a distant destination. School Picnic Places in Bhor and the Best School Picnic Places in Bhor can suit annual school picnics, class outings, educational excursions, student activity days and group recreation programs. A School Picnic Resort in Bhor can provide a structured setting where students and teachers can spend quality time together while enjoying suitable outdoor experiences. School Picnic Resorts Near Bhor can also be considered by institutions looking for a destination that combines open surroundings, recreation and a comfortable environment for group visits. One Day School Picnic in Bhor is a practical choice for schools that want to plan a complete day of fun, learning and student interaction without requiring an overnight stay. A One Day Picnic Spot in Bhor can provide opportunities for children to enjoy nature observation, group games, outdoor recreation and shared activities under appropriate supervision. Om Agro Tourism brings agriculture, greenery, open areas and countryside experiences together, creating a setting suitable for students of different age groups. Teachers and school coordinators can plan activities according to student age, group size and the educational or recreational purpose of the visit. The agro-tourism environment can also introduce children to agricultural landscapes, plants and rural surroundings through direct observation and experiential learning outside the classroom. Monsoon visits can provide lush greenery and refreshing scenery, winter offers pleasant conditions for outdoor activities and summer outings can be planned around suitable timings. The destination can suit school annual picnics, class trips, nature excursions, educational outings, children's group visits and student recreation days. Schools from Bhor and surrounding areas can consider Om Agro Tourism when looking for an outing that balances entertainment, learning and peaceful countryside surroundings. Students can enjoy meaningful time with classmates while developing teamwork, communication and greater appreciation for nature and rural life. The destination provides an alternative to conventional urban picnic locations by creating a relaxed environment where children can experience agriculture and outdoor leisure together. With its open spaces, nature-focused atmosphere and group-friendly possibilities, Om Agro Tourism can be a suitable choice for schools planning a memorable one-day picnic and educational outing in and around Bhor.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spot-in-bhor"
  }
};






    return (
        <div>

<Helmet>
  <title>
    School Picnic Spot in Bhor | Best School Picnic, Resort & One Day Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots and resorts in Bhor for one-day school outings, nature experiences, student recreation and memorable educational picnics."
  />

  <meta
    name="keywords"
    content="School Picnic Spot in Bhor, School Picnic Spots in Bhor, Best School Picnic Spot in Bhor, School Picnic Spot Near Bhor, School Picnic Places in Bhor, Best School Picnic Places in Bhor, School Picnic Resort in Bhor, School Picnic Resorts Near Bhor, One Day School Picnic in Bhor, One Day Picnic Spot in Bhor, school picnic places near Bhor, best school picnic places near Bhor, school picnic spots near Bhor, best school picnic spots near Bhor, school outing places in Bhor, school trip places in Bhor, one day school trip near Bhor, school picnic destination in Bhor, school picnic resort near Bhor, school group outing in Bhor, educational picnic spot in Bhor, educational picnic places near Bhor, educational outing in Bhor, educational trip near Bhor, student picnic spot in Bhor, student outing places near Bhor, picnic places for school students in Bhor, school picnic venue in Bhor, school picnic location near Bhor, school excursion in Bhor, school excursion places near Bhor, school nature trip near Bhor, nature picnic spot for students near Bhor, school group picnic in Bhor, one day picnic for school students near Bhor, one day outing for students in Bhor, school activity resort near Bhor, school picnic with activities in Bhor, school picnic place with activities near Bhor, school picnic package in Bhor, school picnic packages near Bhor, school picnic resort with activities near Bhor, agro tourism for school students near Bhor, agro tourism school picnic near Bhor, agro tourism for school picnic in Bhor, agri tourism for students near Bhor, educational agro tourism near Bhor, farm visit for school students near Bhor, agricultural educational tour near Bhor, rural educational trip near Bhor, nature education outing near Bhor, school picnic for children in Bhor, kids picnic places near Bhor, kids outing places in Bhor, school annual picnic in Bhor, school class picnic near Bhor, school picnic venue with activities in Bhor, student day outing near Bhor, school tour destination in Bhor, school recreational outing near Bhor, best educational picnic spot near Bhor, school picnic destination with nature near Bhor, student nature outing near Bhor, school day trip near Bhor, school picnic resort for students near Bhor, school group picnic destination near Bhor, nature school picnic near Bhor, school educational tour near Bhor"
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
                            <img src='/images/keyword/60.jpg' alt='img' className='img-fluid' />
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

export default Schoolpicnicspotinbhor;;