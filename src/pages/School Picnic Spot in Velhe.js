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

function Schoolpicnicspotinvelhe() {


const cardData = {
    keyword: "School Picnic Spot in Velhe",
    headingDescription: "Om Agro Tourism provides a refreshing school picnic experience for students from Velhe and nearby areas, combining agricultural learning, rural experiences, nature exploration, outdoor recreation, and homemade food. The peaceful farm environment gives school groups an opportunity to spend a meaningful day outside the classroom while enjoying educational and entertaining experiences together.",

    topPlaces: [
        {
            title: "Interactive Farm Learning Experience",
            description: "Students can explore an agricultural environment and understand the basic connection between farming, food, and everyday life. Direct exposure to the farm makes the learning experience more practical and engaging."
        },
        {
            title: "Rural Life Discovery Experience",
            description: "The countryside setting gives students an opportunity to discover traditional rural lifestyles and understand how agricultural communities interact with their surroundings. It adds cultural value to the school outing."
        },
        {
            title: "Student Nature Exploration Zone",
            description: "The green farm surroundings provide an enjoyable environment for students to observe plants, farmland, and natural landscapes. Such exploration encourages curiosity and learning through direct observation."
        },
        {
            title: "Agricultural Learning Experience",
            description: "Students can gain practical awareness of farming and agricultural surroundings through a direct farm visit. This experience can complement classroom lessons while making the school picnic more interactive."
        },
        {
            title: "Traditional Farm Lifestyle Experience",
            description: "Children can experience the atmosphere of rural life and discover traditional aspects of farming and countryside culture. It offers a different educational experience from a regular urban school outing."
        },
        {
            title: "Outdoor Student Recreation Area",
            description: "Open farm surroundings give students space for outdoor recreation, group interaction, and enjoyable activities. The environment encourages participation and creates opportunities for students to spend quality time together."
        },
        {
            title: "Farm-Based Educational Zone",
            description: "Students can learn through direct observation of agricultural surroundings and understand practical aspects of farm life. Combining educational experiences with outdoor exploration makes the visit more memorable."
        },
        {
            title: "Homemade Food Experience",
            description: "Students can enjoy tasty homemade food in a peaceful agricultural setting during their picnic. Sharing meals together provides a relaxing break and adds a pleasant rural food experience to the outing."
        },
        {
            title: "Green Farm Exploration Experience",
            description: "The natural greenery and open agricultural surroundings provide students with a refreshing place to explore and appreciate the countryside. The setting offers a welcome break from regular classroom routines."
        },
        {
            title: "School Group Farm Experience",
            description: "The farm environment provides opportunities for students to explore, interact, and enjoy group recreation together. Teachers can organize the day's experiences according to the age and interests of their school group."
        }
    ],

    services: [
        {
            name: "School Picnic Places in Velhe",
            description: "Om Agro Tourism offers school groups a combination of farm-based learning, nature exploration, rural experiences, outdoor recreation, group activities, and homemade food for a balanced and enjoyable school outing."
        },
        {
            name: "Best School Picnic Spot in Velhe",
            description: "Students can enjoy a peaceful agricultural environment where education and recreation come together. Farm experiences, nature exploration, rural surroundings, outdoor activities, and food make the outing suitable for school groups."
        },
        {
            name: "School Picnic Spots Near Velhe Pune",
            description: "Schools can plan an engaging outing where students explore agricultural surroundings, discover rural lifestyles, enjoy nature, and participate in outdoor recreation while spending quality time with their classmates."
        },
        {
            name: "One Day School Picnic Spot in Velhe",
            description: "A one-day school picnic can include agricultural learning, nature exploration, rural experiences, group recreation, outdoor activities, and homemade food, giving students a varied itinerary for the entire day."
        },
        {
            name: "Educational Picnic Spot in Velhe",
            description: "The farm environment gives students practical opportunities to understand agriculture and rural life. Nature observation and outdoor exploration can make lessons more engaging outside the classroom."
        },
        {
            name: "School Trip Places in Velhe",
            description: "Om Agro Tourism provides students with opportunities to explore farming and countryside surroundings while enjoying group recreation and nature experiences. The visit can add both educational and cultural value to a school trip."
        },
        {
            name: "School Picnic Resort in Velhe",
            description: "The peaceful agricultural setting allows schools to combine farm learning, outdoor recreation, nature exploration, rural experiences, and food into an enjoyable full-day picnic itinerary."
        },
        {
            name: "Agro Tourism for School Picnic in Velhe",
            description: "An agro-tourism visit gives students direct exposure to agriculture, rural lifestyles, natural surroundings, and traditional experiences. This combination of learning and recreation makes the school outing more meaningful."
        },
        {
            name: "School Picnic Farm in Velhe",
            description: "Students can experience a real farm environment while learning about agriculture, exploring nature, and enjoying outdoor recreation. The farm setting provides a practical and refreshing alternative to conventional picnic destinations."
        },
        {
            name: "Kids Picnic Spot in Velhe",
            description: "Children can enjoy an open agricultural environment with nature exploration, group recreation, farm experiences, and rural activities. The variety helps keep students engaged and active during their outing."
        },
        {
            name: "School Educational Trip in Velhe",
            description: "Farm-based experiences can make an educational trip more interactive by allowing students to observe agriculture and rural surroundings directly. Outdoor recreation provides an enjoyable balance to the learning experience."
        },
        {
            name: "School Outing Places in Velhe",
            description: "Om Agro Tourism gives students a refreshing break from their classroom routine through agricultural experiences, nature exploration, rural surroundings, outdoor recreation, and group activities."
        },
        {
            name: "School Picnic Packages in Velhe",
            description: "School picnic packages can bring together farm learning, nature experiences, outdoor recreation, rural activities, group entertainment, and food, helping schools organize a convenient and memorable outing."
        },
        {
            name: "One Day Picnic for School Students in Velhe",
            description: "Schools can plan a complete one-day experience featuring agricultural learning, nature exploration, rural culture, outdoor recreation, group activities, and homemade food for students to enjoy together."
        },
        {
            name: "Adventure School Picnic Spot in Velhe",
            description: "Students can enjoy an active outdoor outing with farm exploration, nature experiences, group recreation, and engaging activities. The open surroundings provide opportunities for participation and adventure in a rural setting."
        },
        {
            name: "Nature Picnic Spot for Students in Velhe",
            description: "The green agricultural surroundings offer students a peaceful place to explore nature and spend time outdoors. Nature observation combined with farm experiences makes the picnic both refreshing and educational."
        },
        {
            name: "School Group Picnic Spot in Velhe",
            description: "Om Agro Tourism provides an environment suitable for school groups to explore, participate in activities, enjoy outdoor recreation, and share meals together while experiencing a peaceful rural setting."
        },
        {
            name: "Best Place for School Trip in Velhe",
            description: "Students can experience agriculture, rural culture, nature, outdoor recreation, and homemade food in one destination. The variety allows schools to create an engaging itinerary for their educational trip."
        },
        {
            name: "Educational Farm Visit in Velhe",
            description: "A farm visit gives students practical exposure to agriculture and rural surroundings. Observing the farm environment can help children understand concepts related to farming, food production, nature, and sustainability."
        },
        {
            name: "School Picnic Near Torna Fort Velhe",
            description: "Schools looking for an outing around the Velhe region can choose a farm-based experience where students enjoy agricultural learning, nature exploration, rural activities, outdoor recreation, and homemade food."
        },
        {
            name: "School Picnic Near Madhe Ghat Velhe",
            description: "Students can enjoy a refreshing farm outing around the Velhe area with opportunities for nature exploration, rural learning, group recreation, agricultural experiences, and shared meals."
        },
        {
            name: "Agro Tourism Near Velhe for Students",
            description: "An agro-tourism visit can introduce students to farming, rural lifestyles, natural surroundings, and traditional experiences. It provides an educational environment while giving children time for outdoor recreation."
        },
        {
            name: "School Picnic with Activities in Velhe",
            description: "The outing can include agricultural experiences, nature exploration, outdoor recreation, rural activities, and group engagement. The variety helps schools keep students involved throughout the picnic."
        },
        {
            name: "School Picnic Destination in Velhe",
            description: "Om Agro Tourism combines a peaceful farm environment with educational experiences, nature exploration, rural culture, outdoor recreation, and food, making it suitable for schools planning a memorable student outing."
        }
    ],

    tableData: [
        ["School Picnic Places in Velhe"],
        ["Best School Picnic Spot in Velhe"],
        ["School Picnic Spots Near Velhe Pune"],
        ["One Day School Picnic Spot in Velhe"],
        ["Educational Picnic Spot in Velhe"],
        ["School Trip Places in Velhe"],
        ["School Picnic Resort in Velhe"],
        ["Agro Tourism for School Picnic in Velhe"],
        ["School Picnic Farm in Velhe"],
        ["Kids Picnic Spot in Velhe"],
        ["School Educational Trip in Velhe"],
        ["School Outing Places in Velhe"],
        ["School Picnic Packages in Velhe"],
        ["One Day Picnic for School Students in Velhe"],
        ["Adventure School Picnic Spot in Velhe"],
        ["Nature Picnic Spot for Students in Velhe"],
        ["School Group Picnic Spot in Velhe"],
        ["Best Place for School Trip in Velhe"],
        ["Educational Farm Visit in Velhe"],
        ["School Picnic Near Torna Fort Velhe"],
        ["School Picnic Near Madhe Ghat Velhe"],
        ["Agro Tourism Near Velhe for Students"],
        ["School Picnic with Activities in Velhe"],
        ["School Picnic Destination in Velhe"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Hands-On Farm Learning",
            WhyChoosedescription: "Students can learn about agriculture through direct exposure to a farm environment rather than relying only on classroom lessons. This practical approach makes the educational experience more engaging and memorable."
        },
        {
            WhyChooseheading: "Peaceful Countryside Setting",
            WhyChoosedescription: "The agricultural surroundings provide a calm and refreshing environment where students can spend time outdoors. The greenery offers a welcome change from busy school and city environments."
        },
        {
            WhyChooseheading: "Learning Through Nature",
            WhyChoosedescription: "Children can observe plants, farmland, greenery, and natural surroundings while exploring the destination. Such experiences encourage curiosity and help students develop greater awareness of their environment."
        },
        {
            WhyChooseheading: "Rural Culture Experience",
            WhyChoosedescription: "Students can discover traditional aspects of rural life and understand the connection between agriculture and countryside communities. This adds cultural and educational value to the picnic."
        },
        {
            WhyChooseheading: "Suitable for School Groups",
            WhyChoosedescription: "The variety of farm, nature, and recreational experiences gives teachers flexibility when planning a school itinerary. Activities can be selected according to the age and interests of the students."
        },
        {
            WhyChooseheading: "Education and Recreation Together",
            WhyChoosedescription: "Farm learning can be combined with outdoor recreation, nature exploration, group activities, and relaxation. This balance helps students enjoy the outing while gaining useful practical knowledge."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty homemade food provides a comfortable and enjoyable meal experience during the school outing. Students can share meals together in a peaceful farm setting and take a relaxing break between activities."
        },
        {
            WhyChooseheading: "Meaningful One-Day Picnic",
            WhyChoosedescription: "Agricultural experiences, nature exploration, rural culture, outdoor recreation, group interaction, and shared meals can turn the school picnic into a memorable learning experience that students can enjoy beyond the classroom."
        }
    ]
};




const faqData = [
    {
        question: "What makes Om Agri Tourism an appealing school picnic spot in Velhe?",
        answer: "Om Agri Tourism creates a countryside atmosphere where students can enjoy greenery, open farm spaces and a variety of outdoor experiences. The setting gives children a refreshing opportunity to step away from their usual school routine and spend quality time exploring nature and rural activities."
    },
    {
        question: "What activities are available for school students at Om Agri Tourism?",
        answer: "Students can choose from experiences such as boating, swimming, horse riding, bird watching, tractor rides and bull cart rides. These activities offer a mixture of recreation, exploration and traditional farm experiences that can keep a school group engaged during the outing."
    },
    {
        question: "Can schools from Velhe plan a picnic visit to Om Agri Tourism?",
        answer: "Schools in Velhe can consider Om Agri Tourism for a planned countryside excursion with students and teachers. Advance arrangements can help the group select suitable activities, organize breaks and maintain an itinerary that matches the students' ages and interests."
    },
    {
        question: "How can a school picnic at Om Agri Tourism give children a rural experience?",
        answer: "The farm setting provides children with opportunities to experience activities connected with traditional countryside life. Tractor rides and bull cart rides can introduce students to rural transportation, while the surrounding greenery gives them a chance to observe a more natural environment."
    },
    {
        question: "Can students enjoy both active and relaxing activities during the picnic?",
        answer: "The range of experiences at Om Agri Tourism allows students to enjoy different types of activities during one outing. Horse riding, swimming and boating can provide active recreation, while bird watching and exploring the farm surroundings offer quieter ways to enjoy the day."
    },
    {
        question: "Is bird watching a suitable activity for school groups at Om Agri Tourism?",
        answer: "Bird watching can be an interesting addition to a school picnic because it encourages students to observe nature closely. Children can spend some time noticing birds and greenery around the farm, creating a calm and educational experience alongside the day's recreational activities."
    },
    {
        question: "Can students experience tractor rides and bull cart rides at Om Agri Tourism?",
        answer: "Tractor rides and bull cart rides can give students a memorable taste of traditional farm life. These experiences can be planned according to age suitability and can add a distinctive rural element to the school group's outing."
    },
    {
        question: "Does Om Agri Tourism have water-based activities for school picnics?",
        answer: "Swimming and boating can provide an exciting part of the outing for students when the activities are appropriate for their age and abilities. Schools should follow applicable safety guidelines and maintain responsible supervision whenever students participate in water-based recreation."
    },
    {
        question: "Can school groups enjoy homemade food at Om Agri Tourism?",
        answer: "A homemade meal can enhance the countryside experience by giving students and teachers an opportunity to enjoy traditional food during their visit. Taking a relaxed meal break together can also give the group time to rest before continuing with other outdoor activities."
    },
    {
        question: "Why select Om Agri Tourism when searching for a school picnic spot in Velhe?",
        answer: "Om Agri Tourism combines farm greenery, open surroundings and varied outdoor experiences in a single destination. Swimming, boating, horse riding, bird watching, tractor rides and bull cart rides can give students a balanced day of recreation and countryside exploration, making the Velhe school picnic more memorable."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohan Deshmukh",
        feedback:
            "The students were excited throughout our visit to Om Agri Tourism. They enjoyed the horse riding and tractor ride and also spent time exploring the farm surroundings. The combination of outdoor activities and peaceful greenery made the school picnic a wonderful experience.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Meenal Jadhav",
        feedback:
            "Our Velhe school group had a memorable day at Om Agri Tourism. The children especially enjoyed the boating and bird watching, and the bull cart ride gave them a fun glimpse of rural life. It was a refreshing outing that the students continued talking about after returning.",
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
  "name": "School Picnic Spot in Velhe",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spot-in-velhe.webp",
  "description": "Om Agro Tourism offers a refreshing School Picnic Spot in Velhe for schools looking to organize enjoyable, educational and nature-oriented outings for students. School Picnic Places in Velhe can provide children with a welcome break from their classroom routine, allowing them to experience open spaces, greenery, agricultural surroundings and peaceful countryside landscapes. Schools searching for the Best School Picnic Spot in Velhe can consider an agro-tourism environment where recreation and experiential learning come together in a memorable group outing. School Picnic Spots Near Velhe Pune can be convenient for schools and coordinators planning a day excursion without requiring students to travel to a distant destination. A One Day School Picnic Spot in Velhe is suitable for class groups and school teams that want to enjoy a complete day of outdoor recreation, group interaction and nature exposure without an overnight stay. An Educational Picnic Spot in Velhe can make the outing more meaningful by giving students opportunities to observe plants, agricultural landscapes, rural surroundings and natural elements through direct experiences beyond the classroom. School Trip Places in Velhe can support annual picnics, educational excursions, class outings and student recreation programs while encouraging communication and teamwork. A School Picnic Resort in Velhe can also provide a structured environment for schools looking for a comfortable setting where students and teachers can spend quality time together. Agro Tourism for School Picnic in Velhe introduces children to agricultural surroundings and rural life, giving them an opportunity to understand farming and nature through observation and experiential activities. Om Agro Tourism combines agriculture, greenery, open spaces and outdoor leisure to create an environment suitable for different student age groups. Children can participate in appropriate group games, nature observation, outdoor recreation and shared activities that encourage social interaction and teamwork. Teachers and school coordinators can plan the outing according to the age of the students, group size and the educational or recreational objectives of the visit. Monsoon can bring lush greenery and refreshing countryside scenery, while winter offers pleasant conditions for outdoor activities and summer outings can be planned around suitable timings. The destination can be considered for school annual picnics, student day trips, educational tours, nature excursions and children's group outings. Schools from Velhe, Pune and nearby areas can choose an agro-tourism setting when they want to combine entertainment, learning and peaceful surroundings. Students can enjoy a refreshing change from their everyday routine while spending meaningful time with classmates and teachers. The rural environment can also help children develop greater appreciation for agriculture, nature and countryside life. Om Agro Tourism provides an alternative to conventional urban picnic locations by bringing natural surroundings and agricultural experiences into a school outing. With its open setting, nature-focused atmosphere and group-friendly recreational possibilities, it can be a suitable destination for schools planning a memorable one-day picnic and educational experience in and around Velhe.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spot-in-velhe"
  }
};





    return (
        <div>


<Helmet>
  <title>
    School Picnic Spot in Velhe | Best Educational, Agro Tourism & One Day Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic places in Velhe with educational experiences, agro-tourism activities, nature exposure and one-day school outing options."
  />

  <meta
    name="keywords"
    content="School Picnic Spot in Velhe, School Picnic Places in Velhe, Best School Picnic Spot in Velhe, School Picnic Spots Near Velhe Pune, One Day School Picnic Spot in Velhe, Educational Picnic Spot in Velhe, School Trip Places in Velhe, School Picnic Resort in Velhe, Agro Tourism for School Picnic in Velhe, school picnic spots in Velhe, best school picnic places near Velhe, school picnic places near Velhe Pune, school outing places in Velhe, school trip near Velhe, one day school picnic in Velhe, one day school trip near Velhe, school picnic destination in Velhe, school picnic resort near Velhe, school group outing in Velhe, educational picnic places near Velhe, educational outing in Velhe, educational trip near Velhe, student picnic spot in Velhe, student outing places near Velhe, picnic places for school students in Velhe, school picnic venue in Velhe, school picnic location near Velhe, school excursion in Velhe, school excursion places near Velhe, school nature trip near Velhe, nature picnic spot for students near Velhe, school group picnic in Velhe, one day picnic for school students near Velhe, one day outing for students in Velhe, school activity resort near Velhe, school picnic with activities in Velhe, school picnic place with activities near Velhe, agro tourism school picnic near Velhe, agro tourism for students near Velhe, agri tourism for school students near Velhe, educational agro tourism near Velhe, farm visit for school students near Velhe, agricultural educational tour near Velhe, rural educational trip near Velhe, nature education outing near Velhe, school picnic for children in Velhe, kids picnic places near Velhe, kids outing places in Velhe, school annual picnic in Velhe, school class picnic near Velhe, school picnic venue with activities in Velhe, student day outing near Velhe, school tour destination in Velhe, school recreational outing near Velhe, school picnic resort with activities near Velhe, best educational picnic spot near Velhe, school picnic destination with nature near Velhe, student nature outing near Velhe, school day trip near Velhe Pune, school picnic resort for students near Velhe, school group picnic destination near Velhe, nature school picnic near Velhe, school educational tour near Velhe Pune"
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
                            <img src='/images/keyword/59.jpg' alt='img' className='img-fluid' />
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

export default Schoolpicnicspotinvelhe;;