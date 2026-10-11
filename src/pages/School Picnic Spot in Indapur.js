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

function Schoolpicnicspotinindapur() {


const cardData = {
    keyword: "School Picnic Spot in Indapur",
    headingDescription: "Om Agro Tourism offers school groups a refreshing destination near Indapur where students can combine outdoor recreation with practical learning. The farm environment, rural surroundings, agricultural experiences, group activities, and homemade food create a balanced setting for educational trips, school outings, and memorable one-day picnics away from the regular classroom environment.",
    topPlaces: [
        {
            title: "Interactive Farming Experience",
            description: "Students can explore a working farm environment and gain practical knowledge about crops, farming methods, agricultural activities, and the importance of agriculture in everyday life."
        },
        {
            title: "Rural Lifestyle Learning Experience",
            description: "The countryside setting allows students to discover traditional village life, local customs, farming culture, and rural activities while enjoying an informative and engaging school outing."
        },
        {
            title: "Student Farm Learning Zone",
            description: "This farm-focused experience encourages children to understand how agricultural activities take place and how different farming practices contribute to food production."
        },
        {
            title: "Nature and Greenery Experience",
            description: "Students can spend time in open green surroundings, observe the natural environment, and enjoy a peaceful outdoor atmosphere that provides a refreshing change from classroom routines."
        },
        {
            title: "Agricultural Workshop Experience",
            description: "Farm-based learning activities give school groups an opportunity to understand agriculture through practical observation, demonstrations, and interactive experiences connected with rural life."
        },
        {
            title: "Traditional Farm Experience",
            description: "Children can learn about traditional farming practices and rural lifestyles while experiencing the simple atmosphere of a countryside farm and understanding its cultural importance."
        },
        {
            title: "Outdoor Student Activity Zone",
            description: "The open environment gives school groups space for recreation, interaction, games, and other engaging activities that can make a school picnic more enjoyable and energetic."
        },
        {
            title: "Homemade Food Experience",
            description: "Students and teachers can enjoy fresh homemade food in a farm setting while understanding the connection between agricultural produce, traditional cooking, and everyday meals."
        },
        {
            title: "School Group Recreation Area",
            description: "The spacious surroundings provide an appropriate setting for student groups to relax, interact, enjoy outdoor experiences, and spend meaningful time together during their picnic."
        },
        {
            title: "Farm-Based Educational Experience",
            description: "Students can combine fun with learning by exploring agriculture, rural culture, natural surroundings, food production, and practical farm activities during their school visit."
        }
    ],
    services: [
        {
            name: "School Picnic Spot in Indapur",
            description: "Om Agro Tourism provides a farm-based environment where students can enjoy educational activities, outdoor recreation, agricultural learning, nature exploration, and quality group time."
        },
        {
            name: "School Picnic Spots in Indapur",
            description: "School groups can experience a refreshing countryside outing with farm activities, rural experiences, open spaces, homemade food, and opportunities for practical learning."
        },
        {
            name: "Best School Picnic Spot in Indapur",
            description: "A combination of agriculture, nature, recreation, traditional experiences, and educational activities makes Om Agro Tourism a meaningful choice for schools planning a memorable picnic."
        },
        {
            name: "School Picnic Places in Indapur",
            description: "Students can spend their outing in a natural farm environment where learning and recreation come together through agricultural experiences, group activities, and rural exploration."
        },
        {
            name: "Best, School Picnic Places in Indapur",
            description: "The agro-tourism setting offers schools an alternative to conventional picnic destinations by combining practical farm learning, outdoor enjoyment, greenery, and traditional food experiences."
        },
        {
            name: "School Picnic Spot Near Indapur",
            description: "Schools searching for a peaceful picnic destination near Indapur can choose a countryside experience where students can explore farming, nature, rural culture, and outdoor activities."
        },
        {
            name: "School Picnic Resort in Indapur",
            description: "Om Agro Tourism offers a comfortable farm environment for school groups looking to spend a full day with educational experiences, recreational activities, food, and nature."
        },
        {
            name: "School Picnic Resorts Near Indapur",
            description: "Students can enjoy an engaging school outing surrounded by agricultural landscapes, open spaces, rural experiences, group recreation, and farm-oriented learning activities."
        },
        {
            name: "One Day School Picnic in Indapur",
            description: "A one-day visit can combine farming experiences, nature exploration, outdoor recreation, traditional rural activities, and homemade food to create an enjoyable and educational student outing."
        },
        {
            name: "One Day Picnic Spot in Indapur",
            description: "School groups can make the most of a single-day visit through a combination of farm learning, outdoor activities, countryside exploration, group interaction, and relaxing picnic time."
        },
        {
            name: "Educational Picnic Spot in Indapur",
            description: "Students can learn outside the classroom through practical exposure to agriculture, rural lifestyles, food production, nature, and sustainable farming practices in an engaging environment."
        },
        {
            name: "Educational Trip Places in Indapur",
            description: "An agro-tourism visit gives students an opportunity to understand farming, village culture, environmental awareness, food production, and agricultural practices through direct observation."
        },
        {
            name: "School Trip Places in Indapur",
            description: "The farm setting provides a balanced school trip experience where students can participate in educational activities while enjoying outdoor recreation and quality time with classmates."
        },
        {
            name: "Best Place for School Trip in Indapur",
            description: "Om Agro Tourism brings together farm-based learning, natural surroundings, rural culture, recreational opportunities, and food experiences for a distinctive school trip."
        },
        {
            name: "School Outing Places in Indapur",
            description: "Schools can plan an enjoyable outing featuring open farm spaces, interactive agricultural experiences, nature exploration, group recreation, and opportunities for students to learn together."
        },
        {
            name: "School Picnic Packages in Indapur",
            description: "School groups can organize their visit around suitable educational activities, farm experiences, recreation, meals, and outdoor time to create a structured and enjoyable picnic schedule."
        },
        {
            name: "Agro Tourism in Indapur for School Picnic",
            description: "The agro-tourism experience introduces students to farming and rural life through interactive activities, nature exploration, traditional experiences, outdoor recreation, and fresh homemade food."
        },
        {
            name: "Agro Tourism Near Indapur for Students",
            description: "Students can discover agriculture and countryside life through practical experiences that encourage curiosity, environmental awareness, teamwork, and appreciation for farming communities."
        },
        {
            name: "School Picnic Farm in Indapur",
            description: "A farm-based school outing gives children an opportunity to observe agricultural activities, understand food production, explore rural surroundings, and enjoy educational recreation."
        },
        {
            name: "Adventure School Picnic Spot in Indapur",
            description: "Students can add excitement to their outing through outdoor recreation, group activities, farm exploration, and engaging experiences within a natural countryside environment."
        },
        {
            name: "Nature Picnic Spot for Students in Indapur",
            description: "The green surroundings provide students with a refreshing outdoor experience where they can observe nature, enjoy open spaces, participate in group activities, and relax away from the classroom."
        },
        {
            name: "Kids Picnic Spot in Indapur",
            description: "Children can enjoy an engaging day with farm exploration, outdoor recreation, educational experiences, traditional activities, homemade food, and opportunities for group interaction."
        },
        {
            name: "School Group Picnic Spot in Indapur",
            description: "Large student groups can enjoy a farm-based outing that combines educational exposure, outdoor recreation, nature exploration, food, and shared experiences in a spacious environment."
        },
        {
            name: "One Day Educational Trip Near Indapur",
            description: "Schools can plan a meaningful one-day educational visit where students gain practical exposure to agriculture, rural culture, nature, food production, and sustainable farming."
        },
        {
            name: "Best Agro Tourism for School Picnic in Indapur",
            description: "Om Agro Tourism combines farm learning, rural experiences, natural surroundings, recreation, and homemade food to give students an educational outing that is also enjoyable and memorable."
        }
    ],
    tableData: [
        ["School Picnic Spot in Indapur"],
        ["School Picnic Spots in Indapur"],
        ["Best School Picnic Spot in Indapur"],
        ["School Picnic Places in Indapur"],
        ["Best, School Picnic Places in Indapur"],
        ["School Picnic Spot Near Indapur"],
        ["School Picnic Resort in Indapur"],
        ["School Picnic Resorts Near Indapur"],
        ["One Day School Picnic in Indapur"],
        ["One Day Picnic Spot in Indapur"],
        ["Educational Picnic Spot in Indapur"],
        ["Educational Trip Places in Indapur"],
        ["School Trip Places in Indapur"],
        ["Best Place for School Trip in Indapur"],
        ["School Outing Places in Indapur"],
        ["School Picnic Packages in Indapur"],
        ["Agro Tourism in Indapur for School Picnic"],
        ["Agro Tourism Near Indapur for Students"],
        ["School Picnic Farm in Indapur"],
        ["Adventure School Picnic Spot in Indapur"],
        ["Nature Picnic Spot for Students in Indapur"],
        ["Kids Picnic Spot in Indapur"],
        ["School Group Picnic Spot in Indapur"],
        ["One Day Educational Trip Near Indapur"],
        ["Best Agro Tourism for School Picnic in Indapur"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Practical Agricultural Learning",
            WhyChoosedescription: "Students can understand farming through direct exposure to agricultural activities, crops, food production, and rural practices, helping them connect classroom lessons with real-world experiences."
        },
        {
            WhyChooseheading: "Peaceful Farm Surroundings",
            WhyChoosedescription: "The green countryside environment gives students a refreshing break from busy school and city surroundings while providing plenty of opportunities to enjoy outdoor experiences."
        },
        {
            WhyChooseheading: "Educational and Recreational Balance",
            WhyChoosedescription: "A visit can combine practical learning with recreation, allowing students to gain useful knowledge while enjoying an active and memorable day with classmates."
        },
        {
            WhyChooseheading: "Exposure to Rural Culture",
            WhyChoosedescription: "Children can discover traditional village lifestyles, farming culture, local practices, and rural activities, giving them a broader understanding of life beyond urban surroundings."
        },
        {
            WhyChooseheading: "Suitable for School Groups",
            WhyChoosedescription: "The farm environment provides space for teachers and students to participate in shared activities, group learning, outdoor recreation, meals, and social interaction."
        },
        {
            WhyChooseheading: "Interactive Farm Experiences",
            WhyChoosedescription: "Instead of only observing the surroundings, students can engage with farm-oriented experiences that make agricultural learning more interesting, practical, and memorable."
        },
        {
            WhyChooseheading: "Fresh Homemade Food",
            WhyChoosedescription: "Farm-based meals add a traditional touch to the school picnic while helping students appreciate the relationship between fresh agricultural produce and everyday food."
        },
        {
            WhyChooseheading: "Memorable One-Day Outing",
            WhyChoosedescription: "The combination of nature, farming, rural culture, recreation, food, and educational exposure gives school groups an opportunity to create meaningful memories during their visit."
        }
    ]
};



const faqData = [
    {
        question: "What makes Om Agri Tourism suitable for a school picnic in Indapur?",
        answer: "Om Agri Tourism creates a pleasant setting for students to step away from their usual classroom environment and enjoy a day surrounded by farm greenery. Outdoor activities, rural experiences and time spent together can make the excursion both entertaining and refreshing for school groups."
    },
    {
        question: "What can students do during a school picnic at Om Agri Tourism?",
        answer: "The outing can include enjoyable experiences such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. Schools can select activities according to the students' interests and age groups to create a balanced day of recreation and nature exploration."
    },
    {
        question: "Can schools in Indapur plan an educational and recreational outing at Om Agri Tourism?",
        answer: "Schools from Indapur can consider Om Agri Tourism for a countryside excursion that combines recreation with exposure to farm surroundings. Students can enjoy outdoor activities while also observing aspects of rural life, making the visit different from a conventional indoor school event."
    },
    {
        question: "How does a visit to Om Agri Tourism introduce children to village life?",
        answer: "Children can experience elements of rural life through activities such as tractor rides and bull cart rides. These experiences give students a chance to see traditional countryside transportation and spend time in a farm environment while enjoying an interactive day away from school."
    },
    {
        question: "Which outdoor activities are popular with students at Om Agri Tourism?",
        answer: "Horse riding, swimming and boating can be exciting choices for students who enjoy active recreation. Bird watching provides a quieter alternative, while tractor and bull cart rides add a distinctive rural touch to the school picnic and help keep the overall experience varied."
    },
    {
        question: "Can a school group include nature observation in its Indapur picnic plan?",
        answer: "Nature observation can be easily incorporated through bird watching and time spent around the farm's open surroundings. Students can observe birds and the natural setting, encouraging them to appreciate the environment while taking a break from more energetic picnic activities."
    },
    {
        question: "What should teachers consider when planning a school picnic at Om Agri Tourism?",
        answer: "Teachers can plan the schedule around the students' age groups, preferred activities, meal breaks and supervision requirements. Discussing the visit in advance can also help the school coordinate activities and create a smoother experience for students, teachers and accompanying staff."
    },
    {
        question: "Can students enjoy water-based recreation at Om Agri Tourism?",
        answer: "Swimming and boating can add an exciting dimension to the school outing for students who are suitable for these activities. Proper supervision, adherence to safety instructions and consideration of individual comfort levels are important whenever children participate in water-based recreation."
    },
    {
        question: "Is homemade food available as part of the Om Agri Tourism experience?",
        answer: "Homemade food can complement the relaxed farm atmosphere and provide students with a satisfying break during their outing. Enjoying a shared meal with classmates and teachers can also become a memorable part of the countryside picnic experience."
    },
    {
        question: "Why might schools choose Om Agri Tourism for a memorable picnic in Indapur?",
        answer: "The combination of greenery, farm surroundings, traditional rides and outdoor recreation gives students several ways to enjoy their day. Activities such as boating, horse riding, swimming, bird watching, tractor rides and bull cart rides can turn a regular school excursion into a more engaging countryside experience."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Pravin Kadam",
        feedback:
            "Our Indapur school group had an enjoyable and well-rounded outing at Om Agri Tourism. The children were thrilled with the tractor ride and boating, and many of them enjoyed watching the birds around the farm. The open surroundings gave everyone a refreshing change from the classroom.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Neha Patil",
        feedback:
            "The visit to Om Agri Tourism gave our students plenty of opportunities to have fun together. Horse riding and swimming were especially exciting for the children, while the peaceful farm setting made the picnic comfortable for teachers as well. It was a memorable countryside experience for our group.",
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
  "name": "School Picnic Spot in Indapur",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spot-in-indapur.webp",
  "description": "Om Agro Tourism offers a refreshing School Picnic Spot in Indapur for schools planning enjoyable, educational and nature-oriented outings for students. School Picnic Spot in Indapur and School Picnic Spots in Indapur can provide children with a welcome break from their regular classroom routine, allowing them to enjoy open spaces, greenery, agricultural surroundings and peaceful countryside scenery. Schools searching for the Best School Picnic Spot in Indapur can consider an agro-tourism destination where recreation, nature exposure and experiential learning can be combined into a memorable school outing. School Picnic Places in Indapur and the Best School Picnic Places in Indapur can suit annual school picnics, class outings, educational excursions, student activity days and group recreation programs. A School Picnic Spot Near Indapur provides a convenient option for schools and coordinators looking to organize a day excursion without requiring students to travel to a distant destination. A School Picnic Resort in Indapur can offer a structured environment where children, teachers and coordinators can spend quality time together while enjoying suitable outdoor experiences. School Picnic Resorts Near Indapur can also be considered by institutions looking for a comfortable destination with open surroundings, recreational possibilities and a peaceful atmosphere. One Day School Picnic in Indapur is suitable for student groups that want to enjoy a complete day of recreation, nature exposure and group interaction without an overnight stay. A One Day Picnic Spot in Indapur can give students opportunities to participate in suitable group games, outdoor recreation, nature observation and shared activities that encourage teamwork and communication. An Educational Picnic experience can become more meaningful when children can directly observe agricultural landscapes, plants, rural surroundings and natural elements beyond their regular classroom environment. Om Agro Tourism combines agriculture, greenery, open areas and countryside leisure, creating an environment suitable for students of different age groups. Teachers and school coordinators can organize activities according to student strength, age group and the educational or recreational purpose of the outing. The agro-tourism environment provides an opportunity for children to learn about rural surroundings and agriculture while enjoying a refreshing day away from the busy urban routine. Monsoon visits can offer lush greenery and refreshing scenery, winter provides comfortable conditions for outdoor activities and summer outings can be planned around suitable timings. The destination can suit school annual picnics, educational tours, nature excursions, children's group outings, class trips and student recreation days. Schools from Indapur and surrounding areas can consider Om Agro Tourism when looking for a destination that balances entertainment, learning and peaceful countryside surroundings. Students can spend meaningful time with classmates while developing teamwork, communication and greater appreciation for nature and agriculture. The destination provides an alternative to conventional urban picnic locations by bringing rural experiences, outdoor recreation and agricultural surroundings together. With its open environment, nature-focused atmosphere and group-friendly possibilities, Om Agro Tourism can be a suitable choice for schools planning a memorable one-day picnic and educational outing in and around Indapur.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spot-in-indapur"
  }
};







    return (
        <div>

<Helmet>
  <title>
    School Picnic Spot in Indapur | Best Educational, Resort & One Day Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots and resorts in Indapur for one-day student outings, educational experiences, nature activities and memorable school picnics."
  />

  <meta
    name="keywords"
    content="School Picnic Spot in Indapur, School Picnic Spots in Indapur, Best School Picnic Spot in Indapur, School Picnic Places in Indapur, Best School Picnic Places in Indapur, School Picnic Spot Near Indapur, School Picnic Resort in Indapur, School Picnic Resorts Near Indapur, One Day School Picnic in Indapur, One Day Picnic Spot in Indapur, Educational Picnic Spot in Indapur, Educational Picnic Places in Indapur, school picnic places near Indapur, best school picnic spots near Indapur, best school picnic places near Indapur, school picnic destination in Indapur, school outing places in Indapur, school trip places in Indapur, one day school trip near Indapur, school picnic resort near Indapur, school group outing in Indapur, educational picnic near Indapur, educational outing in Indapur, educational trip near Indapur, student picnic spot in Indapur, student outing places near Indapur, picnic places for school students in Indapur, school picnic venue in Indapur, school picnic location near Indapur, school excursion in Indapur, school excursion places near Indapur, school nature trip near Indapur, nature picnic spot for students near Indapur, school group picnic in Indapur, one day picnic for school students near Indapur, one day outing for students in Indapur, school activity resort near Indapur, school picnic with activities in Indapur, school picnic place with activities near Indapur, school picnic package in Indapur, school picnic packages near Indapur, school picnic resort with activities near Indapur, agro tourism for school students near Indapur, agro tourism school picnic near Indapur, agro tourism for school picnic in Indapur, agri tourism for students near Indapur, educational agro tourism near Indapur, farm visit for school students near Indapur, agricultural educational tour near Indapur, rural educational trip near Indapur, nature education outing near Indapur, school picnic for children in Indapur, kids picnic places near Indapur, kids outing places in Indapur, school annual picnic in Indapur, school class picnic near Indapur, school picnic venue with activities in Indapur, student day outing near Indapur, school tour destination in Indapur, school recreational outing near Indapur, school picnic resort with activities near Indapur, best educational picnic spot near Indapur, school picnic destination with nature near Indapur, student nature outing near Indapur, school day trip near Indapur, school picnic resort for students near Indapur, school group picnic destination near Indapur, nature school picnic near Indapur, school educational tour near Indapur"
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
                            <img src='/images/keyword/64.jpg' alt='img' className='img-fluid' />
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

export default Schoolpicnicspotinindapur;;