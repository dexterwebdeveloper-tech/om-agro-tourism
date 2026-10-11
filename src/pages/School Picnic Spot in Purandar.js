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

function Schoolpicnicspotinpurandar() {


const cardData = {
    keyword: "School Picnic Spot in Purandar",
    headingDescription: "Om Agro Tourism offers a refreshing school picnic experience for students from Purandar, Saswad, and nearby areas, combining agricultural learning, nature exploration, rural experiences, outdoor recreation, and homemade food. The peaceful farm environment provides schools with a practical and enjoyable setting for educational trips, one-day picnics, and group outings where students can learn beyond the classroom.",

    topPlaces: [
        {
            title: "Interactive Farm Learning Experience",
            description: "Students can explore an agricultural environment and understand how farming activities connect with everyday life. Direct exposure to the farm creates a practical learning opportunity while keeping the school outing engaging."
        },
        {
            title: "Rural Lifestyle Discovery Experience",
            description: "The countryside setting allows students to discover traditional rural lifestyles and understand the connection between agriculture and everyday living. It adds cultural and educational value to the school picnic."
        },
        {
            title: "Student Nature Observation Zone",
            description: "The green surroundings provide students with an opportunity to observe plants, farmland, and natural landscapes. Nature-based exploration encourages curiosity and gives children a refreshing learning experience outdoors."
        },
        {
            title: "Agricultural Learning Experience",
            description: "Students can gain practical awareness of farming through direct exposure to agricultural surroundings. The experience can support classroom lessons related to agriculture, food production, environment, and sustainability."
        },
        {
            title: "Traditional Farm Experience",
            description: "Children can experience the atmosphere of countryside life and discover traditional aspects of farming and rural culture. This provides a meaningful alternative to conventional school picnic destinations."
        },
        {
            title: "Outdoor Student Recreation Area",
            description: "Open farm surroundings give school groups space for outdoor recreation, interaction, and group activities. Students can participate together while enjoying a peaceful environment away from their regular classroom routine."
        },
        {
            title: "Farm-Based Educational Experience",
            description: "Students can learn through direct observation and exploration of agricultural surroundings. Combining farm education with outdoor recreation makes the school trip more interactive and memorable."
        },
        {
            title: "Homemade Food Experience",
            description: "Students can enjoy tasty homemade food in a peaceful agricultural setting during their outing. Sharing meals together provides a comfortable break while adding a pleasant rural food experience to the picnic."
        },
        {
            title: "Green Countryside Exploration",
            description: "The natural greenery and open farm surroundings give students an opportunity to explore and appreciate the countryside. The peaceful environment provides a refreshing break from busy school and city surroundings."
        },
        {
            title: "School Group Farm Recreation Experience",
            description: "The farm environment offers opportunities for students to explore, interact, participate in outdoor recreation, and spend quality time together. Teachers can plan the day's experiences according to the group's age and interests."
        }
    ],

    services: [
        {
            name: "School Picnic Spot in Saswad",
            description: "Om Agro Tourism provides school groups with a combination of farm learning, nature exploration, rural experiences, outdoor recreation, group activities, and homemade food for an enjoyable and educational outing."
        },
        {
            name: "School Picnic Spots in Purandar",
            description: "Students can enjoy a peaceful agricultural environment where practical learning and recreation come together. Farm experiences, nature exploration, rural surroundings, and outdoor activities create a varied picnic experience."
        },
        {
            name: "School Picnic Spots in Saswad",
            description: "A school group can explore agricultural surroundings while enjoying nature, rural culture, outdoor recreation, and shared meals. The combination provides students with both educational and recreational experiences."
        },
        {
            name: "Best School Picnic Spot in Purandar",
            description: "Om Agro Tourism offers students opportunities to experience agriculture, nature, rural life, group recreation, and homemade food in one peaceful setting, making the outing suitable for schools planning a meaningful picnic."
        },
        {
            name: "Best School Picnic Spot in Saswad",
            description: "Schools can plan an engaging outing with farm-based learning, nature exploration, rural experiences, outdoor recreation, and group activities, giving students a refreshing break from regular classroom routines."
        },
        {
            name: "School Picnic Spot Near Saswad",
            description: "Students can spend their day surrounded by agricultural landscapes and greenery while enjoying educational farm experiences, nature exploration, outdoor activities, and rural experiences."
        },
        {
            name: "School Picnic Places in Saswad",
            description: "Om Agro Tourism combines agricultural learning with nature experiences, rural surroundings, group recreation, and food, providing schools with a varied destination for a student picnic."
        },
        {
            name: "School Picnic Places in Purandar",
            description: "The farm setting provides students with practical exposure to agriculture along with nature exploration, outdoor recreation, rural experiences, and group activities for an engaging school outing."
        },
        {
            name: "One Day School Picnic in Saswad",
            description: "A one-day school picnic can include farm learning, nature exploration, rural culture, outdoor recreation, group activities, and homemade food, allowing teachers to create a balanced itinerary."
        },
        {
            name: "One Day Picnic Spot Near Saswad",
            description: "Schools can organize a complete day of educational and recreational experiences where students explore the farm, enjoy nature, participate in outdoor activities, and share meals with their classmates."
        },
        {
            name: "Educational Picnic Spot in Saswad",
            description: "The agricultural environment gives students practical opportunities to learn about farming, nature, and rural life. Direct observation and outdoor exploration can make the educational outing more engaging."
        },
        {
            name: "Educational Trip Places in Purandar",
            description: "Farm-based learning gives students direct exposure to agricultural surroundings and rural lifestyles. Nature exploration and group activities can add an enjoyable dimension to the educational trip."
        },
        {
            name: "School Trip Places in Saswad",
            description: "Students can explore agriculture, rural culture, greenery, and outdoor surroundings while enjoying group recreation. The varied experiences can add educational and recreational value to a school trip."
        },
        {
            name: "Best Place for School Trip in Saswad",
            description: "Om Agro Tourism brings together farm experiences, nature exploration, rural surroundings, outdoor recreation, and food, giving schools several options for creating an engaging and memorable student trip."
        },
        {
            name: "School Outing Places in Saswad",
            description: "The farm environment provides students with a refreshing break from classroom routines through agricultural experiences, nature exploration, outdoor recreation, rural activities, and group interaction."
        },
        {
            name: "School Picnic Resort in Saswad",
            description: "Students can spend quality time in a peaceful agricultural environment with opportunities for farm learning, nature exploration, group recreation, rural experiences, and homemade food."
        },
        {
            name: "School Picnic Packages in Saswad",
            description: "School picnic packages can bring together farm learning, nature experiences, outdoor recreation, rural activities, group entertainment, and food, helping schools organize a convenient outing for students."
        },
        {
            name: "Agro Tourism in Saswad for School Picnic",
            description: "An agro-tourism experience introduces students to agriculture, rural lifestyles, natural surroundings, and traditional experiences. Combining practical learning with recreation makes the school outing more meaningful."
        },
        {
            name: "Agro Tourism Near Saswad for Students",
            description: "Students can gain direct exposure to farming and rural surroundings while enjoying nature and outdoor recreation. The experience provides learning opportunities that extend beyond the regular classroom environment."
        },
        {
            name: "School Picnic Farm Near Saswad",
            description: "A farm-based picnic gives students an opportunity to observe agriculture, explore nature, participate in outdoor activities, and understand rural surroundings while spending quality time with their school group."
        },
        {
            name: "Adventure School Picnic Spot in Saswad",
            description: "Students can enjoy an active outdoor outing with farm exploration, nature experiences, group recreation, and engaging activities. The open surroundings provide opportunities for participation and adventurous experiences."
        },
        {
            name: "Nature Picnic Spot for Students in Saswad",
            description: "The green agricultural surroundings offer students a peaceful place to explore nature and spend time outdoors. Combining nature observation with farm experiences makes the picnic refreshing and educational."
        },
        {
            name: "Kids Picnic Spot Near Saswad ",
            description: "Children can enjoy an open farm environment with nature exploration, group recreation, agricultural experiences, and rural activities. The variety of experiences helps keep students active and interested throughout the outing."
        },
        {
            name: "School Group Picnic Spot in Purandar Saswad",
            description: "Om Agro Tourism provides a suitable environment for school groups to explore, participate in outdoor activities, enjoy farm experiences, and share meals while spending quality time together in a peaceful rural setting."
        }
    ],

    tableData: [
        ["School Picnic Spot in Saswad"],
        ["School Picnic Spots in Purandar"],
        ["School Picnic Spots in Saswad"],
        ["Best School Picnic Spot in Purandar"],
        ["Best School Picnic Spot in Saswad"],
        ["School Picnic Spot Near Saswad"],
        ["School Picnic Places in Saswad"],
        ["School Picnic Places in Purandar"],
        ["One Day School Picnic in Saswad"],
        ["One Day Picnic Spot Near Saswad"],
        ["Educational Picnic Spot in Saswad"],
        ["Educational Trip Places in Purandar"],
        ["School Trip Places in Saswad"],
        ["Best Place for School Trip in Saswad"],
        ["School Outing Places in Saswad"],
        ["School Picnic Resort in Saswad"],
        ["School Picnic Packages in Saswad"],
        ["Agro Tourism in Saswad for School Picnic"],
        ["Agro Tourism Near Saswad for Students"],
        ["School Picnic Farm Near Saswad"],
        ["Adventure School Picnic Spot in Saswad"],
        ["Nature Picnic Spot for Students in Saswad"],
        ["Kids Picnic Spot Near Saswad "],
        ["School Group Picnic Spot in Purandar Saswad"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Hands-On Agricultural Learning",
            WhyChoosedescription: "Students can understand farming through direct exposure to an agricultural environment. This practical learning experience can make classroom concepts more relatable while keeping the school outing interesting."
        },
        {
            WhyChooseheading: "Refreshing Green Surroundings",
            WhyChoosedescription: "The peaceful farm setting provides students with a welcome break from busy school and urban environments. Open spaces and greenery create a comfortable atmosphere for exploration and recreation."
        },
        {
            WhyChooseheading: "Education Beyond Textbooks",
            WhyChoosedescription: "Farm experiences allow children to learn through observation and participation instead of depending only on textbooks. Nature and rural experiences can add practical value to educational trips."
        },
        {
            WhyChooseheading: "Rural Culture Exposure",
            WhyChoosedescription: "Students can discover traditional aspects of countryside life and understand the connection between farming and rural communities. This cultural exposure gives the picnic additional educational value."
        },
        {
            WhyChooseheading: "Balanced Picnic Experience",
            WhyChoosedescription: "Agricultural learning can be combined with nature exploration, outdoor recreation, group activities, and relaxation. This balance allows students to learn while enjoying quality time with their classmates."
        },
        {
            WhyChooseheading: "Ideal for School Groups",
            WhyChoosedescription: "The range of farm and outdoor experiences gives teachers flexibility when preparing their itinerary. Activities can be planned according to the age group, interests, and educational objectives of the students."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty homemade food provides a comfortable and enjoyable meal experience during the school outing. Students can relax and interact with their classmates while sharing meals in the farm environment."
        },
        {
            WhyChooseheading: "Memorable Student Outing",
            WhyChoosedescription: "Farm learning, nature exploration, rural culture, outdoor recreation, group interaction, and shared meals can create meaningful memories for students while giving them an enriching experience outside the classroom."
        }
    ]
};



const faqData = [
    {
        question: "Why can Om Agri Tourism be considered for a school picnic in Purandar?",
        answer: "Om Agri Tourism gives school groups a chance to enjoy a farm environment with greenery, open spaces and countryside experiences. The change of surroundings can help students relax, interact with classmates and enjoy a day that combines outdoor recreation with nature-based activities."
    },
    {
        question: "What activities can students experience at Om Agri Tourism?",
        answer: "Students can explore several outdoor options including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. The selection provides a good mix of energetic activities and slower nature experiences for a diverse school group."
    },
    {
        question: "Can schools from Purandar plan their picnic at Om Agri Tourism?",
        answer: "Schools in Purandar can consider Om Agri Tourism for a planned group excursion into a farm and countryside setting. Coordinating the visit in advance can help teachers arrange appropriate activities, food breaks and supervision according to the students participating."
    },
    {
        question: "How can students experience rural life during a visit to Om Agri Tourism?",
        answer: "The farm surroundings allow children to encounter traditional rural activities that may be unfamiliar in their everyday lives. Bull cart rides and tractor rides can provide an interesting glimpse into countryside practices, while bird watching lets students observe the natural environment."
    },
    {
        question: "Is Om Agri Tourism suitable for a school group that wants outdoor recreation?",
        answer: "Students with an interest in outdoor activities can find several options at Om Agri Tourism. Swimming, boating and horse riding can provide active entertainment, while bird watching and time spent around the farm greenery offer opportunities for a calmer experience."
    },
    {
        question: "Can bird watching be included in a Purandar school picnic?",
        answer: "Bird watching can be a simple and engaging nature activity for students visiting Om Agri Tourism. It encourages children to observe birds and their surroundings, providing a quieter experience that can complement the more energetic activities planned during the picnic."
    },
    {
        question: "What makes tractor and bull cart rides interesting for students?",
        answer: "These rides allow children to experience traditional farm transportation in a practical and enjoyable way. Tractor rides and bull cart rides can become memorable parts of the outing while giving students a glimpse into the everyday experiences associated with rural life."
    },
    {
        question: "Can students enjoy water activities during the school outing?",
        answer: "Boating and swimming can provide additional recreation at Om Agri Tourism when the activities are suitable for the students. Schools should follow applicable safety practices, consider age suitability and maintain proper adult supervision during participation in water-based activities."
    },
    {
        question: "Can a school group enjoy homemade food at Om Agri Tourism?",
        answer: "Homemade food can make the farm outing feel more traditional and comfortable for students and teachers. A shared meal provides an opportunity for the group to rest between activities while enjoying food in the relaxed atmosphere of the countryside."
    },
    {
        question: "What makes Om Agri Tourism a memorable school picnic spot in Purandar?",
        answer: "The destination combines farm greenery with recreational and traditional countryside experiences, giving students different ways to enjoy their day. Horse riding, swimming, boating, bird watching, tractor rides and bull cart rides can create a varied outing that students are likely to remember."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Ganesh Shinde",
        feedback:
            "Our school group had a very enjoyable visit to Om Agri Tourism. The students were enthusiastic about the horse riding and tractor ride and loved spending time in the open farm surroundings. The outing gave them a refreshing break and plenty of new experiences.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Rupali Jagtap",
        feedback:
            "The Purandar school picnic at Om Agri Tourism was a wonderful experience for our students. They enjoyed boating and bird watching and were especially excited about the bull cart ride. The peaceful farm environment made the entire day comfortable and enjoyable for everyone.",
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
  "name": "School Picnic Spot in Purandar",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spot-in-purandar.webp",
  "description": "Om Agro Tourism offers a refreshing School Picnic Spot in Purandar for schools planning enjoyable, educational and nature-oriented outings for students. School Picnic Spot in Saswad and School Picnic Spots in Purandar can provide children with a welcome change from their regular classroom routine, giving them opportunities to enjoy open spaces, greenery, agricultural surroundings and peaceful countryside scenery. Schools searching for School Picnic Spots in Saswad or the Best School Picnic Spot in Purandar can consider an agro-tourism environment where recreation, nature exposure and experiential learning can be combined in one memorable school outing. The Best School Picnic Spot in Saswad can also be considered by schools looking for a destination that supports student interaction, outdoor recreation and meaningful group experiences. A School Picnic Spot Near Saswad can provide a convenient option for schools and coordinators planning a day excursion without requiring students to travel to a distant destination. School Picnic Places in Saswad and School Picnic Places in Purandar can suit annual school picnics, class outings, educational excursions, student activity days and nature-based school trips. The agricultural surroundings provide an opportunity for children to observe plants, greenery and aspects of rural life beyond conventional classroom learning. Om Agro Tourism creates a relaxed setting where students can participate in suitable group games, nature observation, outdoor recreation and shared activities that encourage teamwork and communication. Teachers and school coordinators can organize the outing according to student age groups, group size and the educational or recreational purpose of the visit. A one-day school picnic can provide a complete experience without requiring an overnight stay, making it practical for school groups and class-level outings. Monsoon visits can bring lush greenery and refreshing countryside views, while winter offers comfortable conditions for outdoor recreation and summer outings can be planned around suitable timings. The destination can be considered for school annual picnics, educational tours, children's group outings, nature excursions and student recreation programs from Purandar, Saswad and nearby areas. An agro-tourism visit can also introduce students to agricultural surroundings and rural environments through direct observation, helping make the outing both enjoyable and educational. Children can spend quality time with classmates while developing social interaction, teamwork and greater appreciation for nature. Om Agro Tourism provides an alternative to busy urban picnic locations by combining agriculture, greenery, open spaces and outdoor leisure in a peaceful countryside environment. Schools looking for School Picnic Places in Purandar or School Picnic Places in Saswad can consider the destination for a balanced outing focused on recreation and experiential learning. With its nature-oriented atmosphere, agricultural setting and group-friendly possibilities, Om Agro Tourism can be a suitable choice for schools planning a memorable picnic experience in and around Purandar and Saswad.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spot-in-purandar"
  }
};







    return (
        <div>

<Helmet>
  <title>
    School Picnic Spot in Purandar | Saswad, Nature & Educational School Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots in Purandar and Saswad for student outings, educational trips, nature experiences, outdoor recreation and memorable school picnics."
  />

  <meta
    name="keywords"
    content="School Picnic Spot in Purandar, School Picnic Spot in Saswad, School Picnic Spots in Purandar, School Picnic Spots in Saswad, Best School Picnic Spot in Purandar, Best School Picnic Spot in Saswad, School Picnic Spot Near Saswad, School Picnic Places in Saswad, School Picnic Places in Purandar, school picnic spots near Purandar, best school picnic spots near Purandar, school picnic places near Purandar, school picnic spot near Purandar, school outing places in Purandar, school trip places in Purandar, school picnic spots near Saswad, best school picnic places near Saswad, school outing places in Saswad, school trip places in Saswad, one day school picnic in Purandar, one day school picnic in Saswad, one day picnic spot near Purandar, one day picnic spot near Saswad, educational picnic spot in Purandar, educational picnic spot in Saswad, educational picnic places near Purandar, educational outing in Saswad, educational trip near Saswad, school picnic resort in Purandar, school picnic resort near Saswad, school group outing in Purandar, student picnic spot in Purandar, student outing places near Saswad, picnic places for school students in Purandar, picnic places for school students near Saswad, school picnic venue in Purandar, school picnic location near Saswad, school excursion in Purandar, school excursion places near Saswad, school nature trip near Purandar, nature picnic spot for students near Saswad, school group picnic in Purandar, school group picnic in Saswad, one day picnic for school students near Purandar, one day outing for students near Saswad, school activity resort near Purandar, school picnic with activities in Purandar, school picnic place with activities near Saswad, agro tourism for school students near Purandar, agro tourism school picnic near Saswad, agro tourism for school picnic in Purandar, agri tourism for students near Saswad, educational agro tourism near Purandar, farm visit for school students near Saswad, agricultural educational tour near Purandar, rural educational trip near Saswad, nature education outing near Purandar, school picnic for children in Purandar, kids picnic places near Saswad, kids outing places in Purandar, school annual picnic in Purandar, school class picnic near Saswad, school picnic venue with activities in Purandar, student day outing near Saswad, school tour destination in Purandar, school recreational outing near Saswad, school picnic resort with activities near Purandar, best educational picnic spot near Saswad, school picnic destination with nature near Purandar, student nature outing near Saswad, school day trip near Purandar, school picnic resort for students near Saswad, school group picnic destination near Purandar, nature school picnic near Saswad, school educational tour near Purandar"
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
                            <img src='/images/keyword/61.jpg' alt='img' className='img-fluid' />
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

export default Schoolpicnicspotinpurandar;;