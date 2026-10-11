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

function SchoolPicnicSpotInShirur() {


const cardData = {
    keyword: "School Picnic Spot in Shirur",
    headingDescription: "Om Agro Tourism is a refreshing destination for schools planning a memorable picnic from Shirur and nearby areas. Students can enjoy farm-based learning, nature exploration, water activities, traditional rural experiences, outdoor recreation, and tasty homemade food, making the outing suitable for educational trips, school groups, and one-day student picnics.",

    topPlaces: [
        {
            title: "Tractor Ride",
            description: "A tractor ride gives students an enjoyable introduction to farm life and agricultural surroundings. This simple yet exciting experience can make the school picnic more interactive while allowing children to explore the rural environment."
        },
        {
            title: "Bird Watching",
            description: "Bird watching encourages students to observe birds and natural surroundings in a peaceful farm environment. It can add an educational nature-based activity to the picnic while developing curiosity about local wildlife."
        },
        {
            title: "Swimming Pool",
            description: "The swimming pool offers students a refreshing recreational experience during their school outing. It can provide an enjoyable break between other activities and add a lively water-based element to the day's schedule."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm tours and workshops provide practical exposure to agriculture, farming practices, and rural lifestyles. Students can learn through direct observation and participation while enjoying an informative experience away from the classroom."
        },
        {
            title: "Bull Cart Ride",
            description: "The bull cart ride gives students a glimpse into traditional rural transportation and village culture. This unique activity can make the outing more interesting while introducing children to a different aspect of countryside life."
        },
        {
            title: "Boating",
            description: "Boating adds a pleasant recreational experience to the school picnic. Students can enjoy time around the water while participating in a different outdoor activity that complements farm tours, games, and other attractions."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty homemade food makes the school picnic more comfortable and enjoyable for students and teachers. Sharing meals in a peaceful farm environment can become another memorable part of the full-day outing."
        },
        {
            title: "Horse Riding",
            description: "Horse riding brings an adventurous element to the picnic and gives students an opportunity to experience a traditional farm activity. It can make the school outing more exciting and memorable for children."
        },
        {
            title: "Jungle Safari",
            description: "The jungle safari experience allows students to explore greenery and natural surroundings in an exciting way. It adds adventure to the picnic while encouraging children to observe and appreciate the environment."
        },
        {
            title: "Water Park Activities",
            description: "Water park activities give students an energetic way to enjoy their picnic and add variety to the day's itinerary. Water-based recreation can make the outing more lively and enjoyable for school groups."
        }
    ],

    services: [
        {
            name: "Best School Picnic Spots in Shirur",
            description: "Om Agro Tourism provides schools with a farm-based picnic environment where students can enjoy educational activities, nature exploration, traditional rural experiences, water recreation, and group-friendly entertainment."
        },
        {
            name: "School Picnic Spot Near Shirur",
            description: "Schools around Shirur can plan an engaging outdoor outing featuring farm tours, swimming, tractor rides, horse riding, nature observation, games, and other experiences that keep students involved throughout the day."
        },
        {
            name: "One-Day School Picnic in Shirur",
            description: "A one-day school picnic can combine agricultural learning with outdoor recreation, water activities, traditional rides, nature exploration, and meals, giving students a balanced and enjoyable break from their regular routine."
        },
        {
            name: "Educational Picnic Spots in Shirur",
            description: "Farm tours and workshops offer students practical exposure to agriculture and rural life. These experiences can complement classroom lessons by allowing children to observe farming and nature in a real outdoor setting."
        },
        {
            name: "School Trip Places in Shirur",
            description: "Om Agro Tourism offers a varied environment for school trips with farm activities, nature experiences, recreational facilities, traditional rural activities, and food, making the visit both informative and entertaining."
        },
        {
            name: "Kids’ Picnic Spots in Shirur",
            description: "Children can enjoy activities such as swimming, boating, horse riding, tractor rides, games, nature observation, and other outdoor experiences. The variety helps create an engaging itinerary for different student groups."
        },
        {
            name: "School Outing Places in Shirur",
            description: "For schools seeking a refreshing break from classrooms, Om Agro Tourism combines greenery, farm experiences, outdoor recreation, rural activities, and food into a convenient destination for a memorable student outing."
        },
        {
            name: "Adventure Picnic Spot in Shirur",
            description: "Students looking for an adventurous outing can participate in horse riding, tractor rides, jungle safari experiences, water activities, boating, and other outdoor recreation that add excitement to the school picnic."
        },
        {
            name: "Nature Picnic Spot Near Shirur",
            description: "The farm's natural surroundings give students an opportunity to spend time around greenery while enjoying bird watching, farm exploration, outdoor activities, and peaceful surroundings that encourage appreciation for nature."
        },
        {
            name: "School Picnic Resort in Shirur",
            description: "Om Agro Tourism brings together natural surroundings, recreational activities, farm experiences, and food, making it suitable for schools that want to organize a full-day picnic with multiple activities in one destination."
        },
        {
            name: "School Picnic Spot With Activities in Shirur",
            description: "A variety of activities including swimming, boating, horse riding, tractor rides, bull cart rides, farm tours, games, and nature experiences gives schools flexibility to create an enjoyable and engaging picnic schedule."
        },
        {
            name: "School Picnic Spot With Food in Shirur",
            description: "School groups can enjoy outdoor activities along with tasty homemade food in a peaceful farm environment. Combining meals and recreation at one destination makes planning a comfortable day outing easier."
        },
        {
            name: "Affordable School Picnic Packages in Shirur",
            description: "Schools can plan a value-focused outing by combining several educational and recreational experiences with food and natural surroundings. The variety of activities helps students enjoy a complete picnic experience."
        },
        {
            name: "School Picnic Spots for Students in Shirur",
            description: "Om Agro Tourism offers students a combination of agricultural learning, outdoor entertainment, traditional rural experiences, nature observation, and recreational activities for an enjoyable and meaningful school picnic."
        },
        {
            name: "School Picnic Spot Near Ranjangaon",
            description: "Schools around Ranjangaon can plan a refreshing student outing at Om Agro Tourism with farm tours, nature activities, water recreation, traditional rural experiences, and food in a relaxed outdoor environment."
        },
        {
            name: "School Picnic Spot Near Shikrapur",
            description: "Students from schools around Shikrapur can enjoy an engaging picnic featuring agricultural experiences, outdoor recreation, swimming, traditional rides, nature observation, and group activities suitable for a one-day trip."
        },
        {
            name: "School Picnic Spot Near Sanaswadi",
            description: "Om Agro Tourism offers school groups from around Sanaswadi an opportunity to combine farm-based learning with recreation. Students can experience nature, outdoor activities, rural culture, and enjoyable group entertainment."
        },
        {
            name: "School Picnic Spot Near Koregaon Bhima",
            description: "Schools near Koregaon Bhima can organize a varied outing with farm exploration, water activities, tractor rides, horse riding, nature observation, traditional experiences, and food for an enjoyable student picnic."
        },
        {
            name: "One-Day Picnic Resort for Students in Shirur",
            description: "A one-day student picnic can include farm tours, agricultural learning, water recreation, outdoor activities, traditional rural rides, nature experiences, and homemade food, creating a balanced itinerary for children."
        }
    ],

    tableData: [
        ["Best School Picnic Spots in Shirur"],
        ["School Picnic Spot Near Shirur"],
        ["One-Day School Picnic in Shirur"],
        ["Educational Picnic Spots in Shirur"],
        ["School Trip Places in Shirur"],
        ["Kids’ Picnic Spots in Shirur"],
        ["School Outing Places in Shirur"],
        ["Adventure Picnic Spot in Shirur"],
        ["Nature Picnic Spot Near Shirur"],
        ["School Picnic Resort in Shirur"],
        ["School Picnic Spot With Activities in Shirur"],
        ["School Picnic Spot With Food in Shirur"],
        ["Affordable School Picnic Packages in Shirur"],
        ["School Picnic Spots for Students in Shirur"],
        ["School Picnic Spot Near Ranjangaon"],
        ["School Picnic Spot Near Shikrapur"],
        ["School Picnic Spot Near Sanaswadi"],
        ["School Picnic Spot Near Koregaon Bhima"],
        ["One-Day Picnic Resort for Students in Shirur"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Hands-On Farm Learning",
            WhyChoosedescription: "Students can understand agriculture and rural life through farm tours and practical experiences. This direct exposure makes the outing more educational while giving children an opportunity to learn outside the traditional classroom."
        },
        {
            WhyChooseheading: "Wide Range of Activities",
            WhyChoosedescription: "The destination offers different experiences such as swimming, boating, horse riding, tractor rides, games, and nature activities. Schools can build a varied itinerary according to the interests and age groups of their students."
        },
        {
            WhyChooseheading: "Close to Nature",
            WhyChoosedescription: "The farm setting provides a refreshing environment surrounded by greenery and natural elements. Bird watching and outdoor exploration can encourage students to observe their surroundings and develop greater appreciation for nature."
        },
        {
            WhyChooseheading: "Rural Culture Experience",
            WhyChoosedescription: "Traditional activities such as bull cart rides give children a glimpse into rural culture and village life. These experiences make the school trip different from conventional city-based outings."
        },
        {
            WhyChooseheading: "Fun with Learning",
            WhyChoosedescription: "Educational farm activities can be combined with recreational experiences, allowing students to learn while having fun. This balance helps make the picnic useful, engaging, and memorable for the entire school group."
        },
        {
            WhyChooseheading: "Ideal for Student Groups",
            WhyChoosedescription: "A selection of outdoor and farm-based experiences allows teachers to organize the day into different activity sessions. Students can enjoy group recreation while spending meaningful time together in an open environment."
        },
        {
            WhyChooseheading: "Comfortable Food Experience",
            WhyChoosedescription: "Tasty homemade food adds convenience to the picnic and gives students an opportunity to enjoy meals together in a peaceful farm setting. It can comfortably fit into a full-day school outing schedule."
        },
        {
            WhyChooseheading: "Memories Beyond the Classroom",
            WhyChoosedescription: "Farm exploration, water activities, nature observation, rural rides, games, and outdoor recreation provide students with experiences they can remember long after the picnic. The outing combines friendship, learning, and entertainment in one day."
        }
    ]
};







const faqData = [
    {
        question: "Why is Om Agri Tourism worth considering as a school picnic spot in Shirur?",
        answer: "A farm-based outing can give students a refreshing opportunity to spend time outdoors, and Om Agri Tourism brings together greenery, open surroundings and countryside activities in one setting. The destination can provide a lively change from the normal school environment while offering students several experiences to enjoy."
    },
    {
        question: "What can students experience during a school visit to Om Agri Tourism?",
        answer: "The picnic can include a combination of recreational and rural activities such as horse riding, swimming, boating, tractor rides, bull cart rides and bird watching. This range makes it possible for students to enjoy different experiences throughout their day at the farm."
    },
    {
        question: "Can schools in Shirur plan an outdoor picnic at Om Agri Tourism?",
        answer: "Schools from Shirur can consider arranging a group visit to Om Agri Tourism for a farm-based day outing. With suitable planning, teachers can organize an itinerary that combines recreation, nature observation, meal breaks and supervised activities for the students."
    },
    {
        question: "What makes a farm outing interesting for school children?",
        answer: "Children often enjoy experiences that allow them to explore something outside their regular surroundings. At Om Agri Tourism, rural activities such as tractor rides and bull cart rides, along with bird watching and open farm spaces, can introduce students to a different side of countryside life."
    },
    {
        question: "Can Om Agri Tourism provide both fun and nature experiences for students?",
        answer: "The setting supports a combination of energetic recreation and relaxed nature exploration. Students can participate in activities such as boating and horse riding while also enjoying bird watching and the greenery around the farm, giving the school picnic a varied character."
    },
    {
        question: "Is horse riding an option for students visiting Om Agri Tourism?",
        answer: "Horse riding can be one of the memorable experiences for students during their visit. Participation should be planned with consideration for age and individual suitability, while teachers and accompanying adults can ensure that students follow the necessary instructions during the activity."
    },
    {
        question: "How can bird watching add value to a school picnic?",
        answer: "Bird watching encourages students to observe their surroundings instead of spending the entire outing on active recreation. At Om Agri Tourism, this nature-oriented experience can help children notice birds and greenery while adding a simple educational aspect to their picnic."
    },
    {
        question: "Are swimming and boating suitable activities for a school outing?",
        answer: "Swimming and boating can bring extra excitement to a school picnic when the activities are appropriate for the students. Schools should consider age suitability, follow applicable safety instructions and maintain proper supervision during participation in water-related activities."
    },
    {
        question: "Can students enjoy traditional homemade food at Om Agri Tourism?",
        answer: "A homemade meal can complement the farm atmosphere by giving students and teachers a chance to enjoy traditional food in a relaxed setting. Taking a meal break together can also help the group rest and recharge before continuing with the day's activities."
    },
    {
        question: "How can Om Agri Tourism make a Shirur school picnic more memorable?",
        answer: "The combination of open farm surroundings and varied outdoor experiences gives students plenty to explore during their visit. Swimming, boating, horse riding, bird watching, tractor rides and bull cart rides can turn an ordinary school outing into a lively countryside experience filled with memorable moments."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Mahesh Chavan",
        feedback:
            "Our students enjoyed the change of atmosphere at Om Agri Tourism. They were excited to try the horse riding and boating, while the greenery around the farm made the outing feel peaceful as well. The variety of activities kept the children engaged throughout the picnic.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Kavita Gaikwad",
        feedback:
            "We had a pleasant school outing at Om Agri Tourism with our students. The tractor ride and bird watching gave them experiences they do not normally get during school activities, and everyone enjoyed the traditional food as well. It was a cheerful and memorable day for our group.",
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
  "name": "School Picnic Spot in Shirur",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spot-in-shirur.webp",
  "description": "Om Agro Tourism offers a refreshing School Picnic Spot in Shirur for schools planning enjoyable, educational and activity-oriented outings for students. Schools searching for the Best School Picnic Spots in Shirur can consider a peaceful agro-tourism environment where children can take a break from classroom routines and enjoy open spaces, greenery, agricultural surroundings and outdoor recreation. A School Picnic Spot Near Shirur provides a convenient option for school groups looking to organize a memorable outing without travelling to a distant destination. One-Day School Picnic in Shirur is suitable for students who want a complete day of recreation, group interaction and nature exposure without requiring an overnight stay. Educational Picnic Spots in Shirur can make school outings more meaningful by allowing children to observe agricultural landscapes, plants, natural surroundings and rural life through direct experiences outside the classroom. School Trip Places in Shirur can therefore combine entertainment with experiential learning while encouraging curiosity, teamwork and social interaction among students. Kids’ Picnic Spots in Shirur can provide children with an open and refreshing setting where they can participate in suitable group games, outdoor activities and nature-based experiences under teacher supervision. School Outing Places in Shirur are also useful for annual picnics, class trips, student recreation days and school excursions. For schools seeking more active experiences, an Adventure Picnic Spot in Shirur can add excitement to the outing through suitable outdoor recreation, group participation and engaging activities. Om Agro Tourism combines agriculture, countryside scenery, greenery and leisure experiences, creating an environment where students can enjoy time away from the busy urban routine. Teachers and coordinators can select activities according to the age group, student strength and purpose of the visit. Students can enjoy group games, nature observation, outdoor recreation and shared experiences that help strengthen communication and teamwork. Seasonal visits provide different surroundings, with monsoon offering lush greenery and refreshing scenery, winter providing pleasant conditions for outdoor activities and summer outings being planned around suitable timings. The destination can suit school annual picnics, educational excursions, children's group outings, nature trips and student activity days. Schools from Shirur and surrounding areas can consider Om Agro Tourism when looking for a destination that balances fun, learning, adventure and nature exposure. The agro-tourism setting offers an alternative to conventional city-based picnic locations by allowing children to experience agricultural and countryside surroundings. Students can create memorable moments with classmates while teachers organize a structured day outing focused on recreation and experiential learning. With its peaceful setting, outdoor possibilities and nature-oriented atmosphere, Om Agro Tourism can be a suitable choice for schools planning a memorable picnic experience in and around Shirur.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spot-in-shirur"
  }
};



    return (
        <div>



<Helmet>
  <title>
    School Picnic Spot in Shirur | Adventure, Kids, Nature & Educational Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots in Shirur for one-day student outings, educational trips, kids activities, adventure experiences and nature-based school picnics."
  />

  <meta
    name="keywords"
    content="Best School Picnic Spots in Shirur, School Picnic Spot Near Shirur, One-Day School Picnic in Shirur, Educational Picnic Spots in Shirur, School Trip Places in Shirur, Kids Picnic Spots in Shirur, School Outing Places in Shirur, Adventure Picnic Spot in Shirur, School Picnic Spot in Shirur, school picnic places in Shirur, school picnic spots near Shirur, best school picnic places near Shirur, school outing places near Shirur, school trip near Shirur, one day school trip near Shirur, school picnic destination in Shirur, school picnic resort near Shirur, school group outing in Shirur, educational picnic places near Shirur, educational outing in Shirur, educational trip near Shirur, student picnic spot in Shirur, student outing places near Shirur, picnic places for school students in Shirur, school picnic venue in Shirur, school picnic location near Shirur, school excursion in Shirur, school excursion places near Shirur, school nature trip near Shirur, nature picnic spot for students near Shirur, school group picnic in Shirur, one day picnic for school students near Shirur, one day outing for students in Shirur, school activity resort near Shirur, school picnic with activities in Shirur, school picnic place with activities near Shirur, agro tourism for school students near Shirur, agro tourism school picnic near Shirur, agri tourism for students near Shirur, educational agro tourism near Shirur, farm visit for school students near Shirur, agricultural educational tour near Shirur, rural educational trip near Shirur, nature education outing near Shirur, school picnic for children in Shirur, kids picnic places near Shirur, kids outing places in Shirur, school annual picnic in Shirur, school class picnic near Shirur, school picnic venue with activities in Shirur, student day outing near Shirur, school tour destination in Shirur, school recreational outing near Shirur, school picnic resort with activities near Shirur, best educational picnic spot near Shirur, school picnic destination with nature near Shirur, student nature outing near Shirur, school day trip near Shirur, school picnic resort for students near Shirur, school group picnic destination near Shirur, adventure picnic places near Shirur, adventure school picnic near Shirur, nature school picnic near Shirur"
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
                            <img src='/images/keyword/172.jpeg' alt='img' className='img-fluid' />
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

export default SchoolPicnicSpotInShirur;