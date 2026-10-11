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

function SchoolPicnicSpotInJunnar() {


const cardData = {
    keyword: "School Picnic Spot in Junnar",
    headingDescription: "Om Agro Tourism offers a refreshing school picnic experience where students can combine outdoor enjoyment with farm-based learning, nature exploration, traditional rural activities, and delicious food. With a variety of engaging experiences in a peaceful agricultural setting, it is suitable for school groups planning educational trips, one-day outings, and activity-filled picnics from Junnar and nearby areas.",

    topPlaces: [
        {
            title: "Jungle Safari",
            description: "The jungle safari gives students an exciting opportunity to explore greenery and natural surroundings while enjoying an adventurous outdoor experience. It can add curiosity, observation, and excitement to a school picnic itinerary."
        },
        {
            title: "Horse Riding",
            description: "Horse riding introduces students to an enjoyable farm-based activity while giving them a memorable experience in the countryside. It adds an adventurous touch to the school outing and can be included as part of a supervised activity schedule."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm tours and workshops provide students with practical exposure to agriculture, farming activities, and rural lifestyles. These experiences can complement classroom education by allowing children to learn through direct observation."
        },
        {
            title: "Boating",
            description: "Boating gives students a refreshing recreational experience and adds variety to a full-day school picnic. Spending time around the water can create enjoyable group memories while complementing other outdoor activities."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty homemade food gives school groups an opportunity to relax and enjoy a satisfying meal in a peaceful farm environment. Sharing food together can also become a pleasant part of the overall picnic experience."
        },
        {
            title: "Bull Cart Ride",
            description: "The bull cart ride offers students a glimpse into traditional rural transportation and village culture. This distinctive activity can make the picnic more interesting while introducing children to an aspect of countryside life."
        },
        {
            title: "Water Park Activities",
            description: "Water park activities provide students with an energetic and refreshing form of recreation. They can add excitement to the school picnic and give children an opportunity to enjoy water-based fun during their outing."
        },
        {
            title: "Bird Watching",
            description: "Bird watching encourages students to observe birds and their natural surroundings in a calm farm environment. It creates an educational nature experience while helping children develop curiosity about local wildlife."
        },
        {
            title: "Tractor Ride",
            description: "A tractor ride gives students an entertaining introduction to farm life and agricultural surroundings. The activity can make the outing more interactive while providing children with a memorable rural experience."
        },
        {
            title: "Swimming Pool",
            description: "The swimming pool offers a refreshing recreational activity for students during their school picnic. It provides an enjoyable break between other experiences and adds variety to a full-day outing."
        }
    ],

    services: [
        {
            name: "School Picnic Spot in Junna",
            description: "Om Agro Tourism offers a nature-oriented environment where school groups can enjoy farm experiences, outdoor recreation, traditional rural activities, and food while spending meaningful time away from their regular classroom routine."
        },
        {
            name: "School Picnic Spots in Junnar",
            description: "Students can enjoy a combination of agricultural experiences, nature exploration, recreational activities, and rural culture at Om Agro Tourism, making it a suitable destination for an engaging school picnic."
        },
        {
            name: "Best School Picnic Spot in Junnar",
            description: "Schools looking for an enjoyable destination can experience a varied outing featuring farm tours, water activities, traditional rides, nature observation, outdoor recreation, and homemade food in a peaceful setting."
        },
        {
            name: "School Picnic Spot Near Junnar",
            description: "Om Agro Tourism provides school groups from Junnar with opportunities to explore farming, enjoy outdoor activities, experience rural culture, and spend quality time together in a refreshing natural environment."
        },
        {
            name: "School Picnic Spots Near Junnar",
            description: "A school outing can become more memorable when students have access to farm-based learning, nature experiences, traditional activities, recreational options, and food. Om Agro Tourism brings these experiences together for school groups."
        },
        {
            name: "School Picnic Places in Junnar",
            description: "Om Agro Tourism offers an engaging combination of agricultural surroundings, recreational experiences, nature activities, and traditional rural attractions, giving schools a varied setting for student picnics and outings."
        },
        {
            name: "School Trip Places in Junnar",
            description: "For a school trip, students can experience farm tours, agricultural learning, outdoor recreation, nature observation, rural activities, and group entertainment. This combination makes the outing both educational and enjoyable."
        },
        {
            name: "Best School Picnic Spots Near Junnar",
            description: "Schools searching for an outdoor destination near Junnar can choose a farm-based experience that combines learning with recreation. Students can enjoy activities while discovering more about agriculture and rural surroundings."
        },
        {
            name: "One Day School Picnic in Junnar",
            description: "A one-day picnic itinerary can include farm tours, swimming, boating, traditional rides, nature activities, games, and meals, giving students a balanced experience filled with education, recreation, and group fun."
        },
        {
            name: "Educational Picnic Spot in Junnar",
            description: "Farm tours and workshops provide practical learning opportunities for students by introducing them to agriculture, farming, and rural lifestyles. The educational experience can be combined with recreational activities for a complete outing."
        },
        {
            name: "School Picnic Resort in Junnar",
            description: "Om Agro Tourism combines natural surroundings with recreational activities, farm experiences, and food, making it suitable for schools looking for a destination where students can spend an enjoyable and activity-filled day."
        },
        {
            name: "School Picnic Resort Near Junnar",
            description: "Schools around Junnar can plan a refreshing group outing with agricultural experiences, nature exploration, traditional rural activities, water recreation, and meals in a peaceful farm environment."
        },
        {
            name: "School Picnic with Activities in Junnar",
            description: "Students can participate in swimming, boating, horse riding, tractor rides, bull cart rides, farm tours, nature activities, and other recreational experiences, allowing schools to create a varied and engaging picnic schedule."
        },
        {
            name: "School Picnic Package in Junnar",
            description: "A school picnic package can bring together educational farm experiences, outdoor recreation, water activities, traditional rural rides, nature observation, and food, helping schools organize a convenient and memorable student outing."
        },
        {
            name: "Kids Picnic Spot in Junnar",
            description: "Children can enjoy a variety of activities including water recreation, horse riding, tractor rides, boating, games, nature observation, and farm experiences. The range of options helps keep students active and entertained."
        },
        {
            name: "School Outing Places in Junnar",
            description: "Om Agro Tourism provides a refreshing change from the classroom through farm exploration, nature activities, outdoor recreation, rural experiences, and group entertainment, making it suitable for school outings."
        },
        {
            name: "Agro Tourism for School Picnic in Junnar",
            description: "The agricultural setting allows students to experience farming, rural life, nature, and traditional activities while enjoying recreational facilities. It creates an opportunity to combine practical education with an enjoyable school picnic."
        },
        {
            name: "Educational Trip Places in Junnar",
            description: "Students can gain practical knowledge through farm tours, workshops, nature observation, and exposure to rural surroundings. These activities can make an educational trip more interactive than conventional classroom learning."
        },
        {
            name: "School Picnic Spot Near Junnar Pune",
            description: "Om Agro Tourism offers a farm-based setting where school groups can enjoy agricultural learning, outdoor recreation, nature experiences, traditional activities, and food while planning a student outing around Junnar and Pune."
        },
        {
            name: "Best Places for School Picnic Near Junnar",
            description: "A school picnic at Om Agro Tourism can include a combination of farm tours, water activities, rural rides, nature observation, games, and food, giving students several experiences to enjoy during one planned visit."
        },
        {
            name: "One Day School Picnic Near Junnar",
            description: "Schools can plan a complete one-day outing with educational farm activities, recreational experiences, traditional rural rides, water-based fun, nature exploration, and meals for students to enjoy throughout the day."
        },
        {
            name: "School Educational Trip in Junnar",
            description: "Farm tours and agricultural workshops give students a practical opportunity to understand farming and rural life. Adding outdoor activities and nature experiences can make the educational trip more engaging and memorable."
        },
        {
            name: "School Picnic Places for Students in Junnar",
            description: "Om Agro Tourism provides students with a combination of learning and entertainment through farm experiences, nature exploration, traditional activities, water recreation, and group-friendly outdoor experiences."
        },
        {
            name: "Best Agro, Tourism Near Junnar for School Picnic",
            description: "An agro-tourism outing allows students to experience agriculture and rural surroundings while enjoying recreational activities. Farm tours, traditional rides, nature experiences, and food create a varied school picnic environment."
        },
        {
            name: "School Picnic Near Junnar with Food and Activities",
            description: "School groups can enjoy tasty homemade food along with farm tours, swimming, boating, horse riding, tractor rides, traditional rural activities, and nature experiences, creating a convenient and memorable full-day outing."
        }
    ],

    tableData: [
        ["School Picnic Spot in Junna"],
        ["School Picnic Spots in Junnar"],
        ["Best School Picnic Spot in Junnar"],
        ["School Picnic Spot Near Junnar"],
        ["School Picnic Spots Near Junnar"],
        ["School Picnic Places in Junnar"],
        ["School Trip Places in Junnar"],
        ["Best School Picnic Spots Near Junnar"],
        ["One Day School Picnic in Junnar"],
        ["Educational Picnic Spot in Junnar"],
        ["School Picnic Resort in Junnar"],
        ["School Picnic Resort Near Junnar"],
        ["School Picnic with Activities in Junnar"],
        ["School Picnic Package in Junnar"],
        ["Kids Picnic Spot in Junnar"],
        ["School Outing Places in Junnar"],
        ["Agro Tourism for School Picnic in Junnar"],
        ["Educational Trip Places in Junnar"],
        ["School Picnic Spot Near Junnar Pune"],
        ["Best Places for School Picnic Near Junnar"],
        ["One Day School Picnic Near Junnar"],
        ["School Educational Trip in Junnar"],
        ["School Picnic Places for Students in Junnar"],
        ["Best Agro, Tourism Near Junnar for School Picnic"],
        ["School Picnic Near Junnar with Food and Activities"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Interactive Agricultural Learning",
            WhyChoosedescription: "Students can discover agriculture and rural lifestyles through farm tours and workshops rather than only learning about them from books. Direct exposure can make the school trip informative, practical, and engaging."
        },
        {
            WhyChooseheading: "Learning Meets Recreation",
            WhyChoosedescription: "Educational experiences can be combined with swimming, boating, horse riding, games, and other outdoor activities. This balance allows students to enjoy their picnic while gaining practical knowledge."
        },
        {
            WhyChooseheading: "Peaceful Farm Environment",
            WhyChoosedescription: "The natural farm surroundings provide a refreshing setting away from busy urban spaces. Students can enjoy greenery, outdoor activities, and nature observation while spending quality time with classmates."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Bull cart rides and tractor rides introduce students to traditional and agricultural aspects of rural life. These experiences add cultural value to the picnic while giving children something different to explore."
        },
        {
            WhyChooseheading: "Variety for Different Age Groups",
            WhyChoosedescription: "A mix of water activities, farm experiences, nature exploration, traditional rides, and outdoor recreation gives schools flexibility when planning activities for students of different ages and interests."
        },
        {
            WhyChooseheading: "Ideal Educational Outing",
            WhyChoosedescription: "Farm tours, workshops, bird watching, and nature-based activities can support lessons related to agriculture, environment, and rural life. Students get an opportunity to learn through direct observation outside school."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty homemade food adds comfort and convenience to a full-day school picnic. Students can enjoy meals together in a relaxed farm setting while taking a break between different activities."
        },
        {
            WhyChooseheading: "Memorable School Picnic",
            WhyChoosedescription: "From exploring farms and observing nature to enjoying water activities and traditional rides, students have multiple opportunities to create lasting memories. The combination of education, recreation, and group time makes the outing special."
        }
    ]
};






const faqData = [
    {
        question: "What can schools expect from a picnic at Om Agri Tourism in Junnar?",
        answer: "Om Agri Tourism provides students with a farm-centered environment where they can enjoy open greenery, outdoor recreation and traditional countryside experiences. The peaceful surroundings combined with a selection of activities can make a Junnar school picnic both enjoyable and different from a routine school day."
    },
    {
        question: "Which activities make Om Agri Tourism interesting for student groups?",
        answer: "There are several experiences that can be included in a student outing, such as horse riding, boating, swimming, bird watching, tractor rides and bull cart rides. These activities offer students opportunities for active fun as well as relaxed interaction with the natural surroundings."
    },
    {
        question: "Can schools from Junnar arrange a picnic at Om Agri Tourism?",
        answer: "Schools in Junnar can consider Om Agri Tourism when planning a group excursion into a farm and countryside setting. With suitable prior planning, the school can structure the visit around age-appropriate activities, rest periods, food and proper supervision."
    },
    {
        question: "How does a visit to Om Agri Tourism introduce students to rural life?",
        answer: "The farm environment allows children to experience countryside activities that may be unfamiliar to them. Tractor rides and bull cart rides can offer a glimpse into traditional rural transportation, while the surrounding greenery and bird watching provide opportunities to observe nature more closely."
    },
    {
        question: "Can a school picnic at Om Agri Tourism include both recreation and nature exploration?",
        answer: "Yes, the experience can combine energetic activities with quieter moments in nature. Students may enjoy swimming, boating or horse riding and then spend time bird watching or exploring the farm surroundings, giving the outing a well-rounded mix of recreation and outdoor discovery."
    },
    {
        question: "Is bird watching an enjoyable activity for children visiting Om Agri Tourism?",
        answer: "Bird watching can give students a chance to observe birds within a natural farm environment. It is a simple activity that encourages curiosity and attention to nature, making it a useful addition to a school picnic alongside the more active recreational experiences."
    },
    {
        question: "Can students experience horse riding during their Junnar school picnic?",
        answer: "Horse riding can add excitement to the visit and give students an opportunity to try a different outdoor activity. Participation should be based on age and suitability, with teachers and accompanying adults ensuring that students follow the appropriate instructions."
    },
    {
        question: "Are swimming and boating available for school groups at Om Agri Tourism?",
        answer: "Students can enjoy water-based recreation such as swimming and boating when these activities are appropriate for their group. Schools should prioritize applicable safety practices, age suitability and continuous supervision while students participate in water activities."
    },
    {
        question: "Can students enjoy a homemade meal during the Om Agri Tourism outing?",
        answer: "Homemade food can add a traditional and comforting element to the picnic experience. Students and teachers can take a relaxed meal break in the farm surroundings, giving the group time to recharge before moving on to other activities."
    },
    {
        question: "Why choose Om Agri Tourism when looking for a school picnic spot in Junnar?",
        answer: "Om Agri Tourism offers a combination of farm greenery, countryside experiences and outdoor recreation that can keep students engaged throughout their outing. From tractor and bull cart rides to boating, swimming, horse riding and bird watching, the destination can create a diverse and memorable school picnic in Junnar."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Dinesh Thorat",
        feedback:
            "Our students had an excellent time exploring Om Agri Tourism. The bull cart ride was something many of them had never experienced before, and they also enjoyed bird watching and the open farm surroundings. The outing gave the children plenty of happy moments to remember.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Sonali Pawar",
        feedback:
            "The visit to Om Agri Tourism was a refreshing experience for our school group. Students enjoyed the swimming and boating activities and were equally interested in the countryside environment. The combination of outdoor fun and farm experiences made the picnic enjoyable for both students and teachers.",
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
  "name": "School Picnic Spot in Junnar",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spot-in-junnar.webp",
  "description": "Om Agro Tourism offers a refreshing School Picnic Spot in Junnar for schools looking to organize enjoyable, educational and nature-focused outings for students. A School Picnic Spot in Junnar can give children an opportunity to step away from their regular classroom environment and experience open spaces, greenery, agricultural surroundings and outdoor recreation. Schools comparing School Picnic Spots in Junnar and the Best School Picnic Spot in Junnar can consider a peaceful agro-tourism setting where learning and recreation can be combined within a memorable group outing. A School Picnic Spot Near Junnar and School Picnic Spots Near Junnar are convenient options for institutions planning a day excursion without requiring students to travel to a distant destination. School Picnic Places in Junnar can support annual picnics, class outings, educational excursions and student activity programs, while School Trip Places in Junnar can provide opportunities for children to interact with classmates in a relaxed countryside atmosphere. Schools searching for the Best School Picnic Spots Near Junnar can also consider destinations that provide nature exposure, outdoor recreation and suitable group activities. A One Day School Picnic in Junnar allows students to enjoy a complete day away from their usual routine without the need for an overnight stay. An Educational Picnic Spot in Junnar can add learning value to the outing by introducing students to agricultural landscapes, plants, nature and rural surroundings through direct observation and experiential activities. For schools preferring organized recreational facilities, a School Picnic Resort in Junnar can offer a comfortable setting where students, teachers and coordinators can spend quality time together. Om Agro Tourism brings together agriculture, greenery, countryside scenery and outdoor leisure, creating an environment suitable for different student age groups. Children can participate in suitable group games, nature observation, outdoor activities and shared experiences that encourage teamwork, communication and social interaction. Teachers can structure the outing according to student age, group size and the educational or recreational objective of the trip. Monsoon visits can provide lush greenery and refreshing countryside views, while winter is suitable for comfortable outdoor recreation and summer outings can be planned around appropriate timings. The destination can be considered for school annual picnics, educational tours, class trips, children's outings, nature-based excursions and student recreation days. Schools from Junnar and nearby areas can choose an agro-tourism environment when they want to create a balance between entertainment, experiential learning and peaceful surroundings. Om Agro Tourism offers an alternative to conventional urban picnic locations by giving students the opportunity to experience agricultural surroundings and the relaxed atmosphere of the countryside. A school outing here can help students create memorable moments with classmates while gaining greater appreciation for nature and rural life. With its combination of open surroundings, agriculture, recreation and nature-oriented experiences, Om Agro Tourism can be a suitable destination for schools looking for a memorable picnic and educational outing in and around Junnar.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spot-in-junnar"
  }
};









    return (
        <div>


<Helmet>
  <title>
    School Picnic Spot in Junnar | Best Educational, Nature & One Day School Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots in Junnar for one-day student outings, educational experiences, nature activities, school trips and memorable group picnics."
  />

  <meta
    name="keywords"
    content="School Picnic Spot in Junna, School Picnic Spots in Junnar, Best School Picnic Spot in Junnar, School Picnic Spot Near Junnar, School Picnic Spots Near Junnar, School Picnic Places in Junnar, School Trip Places in Junnar, Best School Picnic Spots Near Junnar, One Day School Picnic in Junnar, Educational Picnic Spot in Junnar, School Picnic Resort in Junnar, School Picnic Places Near Junnar, best school picnic places in Junnar, school picnic destinations near Junnar, school outing places in Junnar, school trip destinations in Junnar, one day school trip near Junnar, school picnic resort near Junnar, school group outing in Junnar, educational picnic places near Junnar, educational outing in Junnar, educational trip near Junnar, student picnic spot in Junnar, student outing places near Junnar, picnic places for school students in Junnar, school picnic venue in Junnar, school picnic location near Junnar, school excursion in Junnar, school excursion places near Junnar, school nature trip near Junnar, nature picnic spot for students near Junnar, school group picnic in Junnar, one day picnic for school students near Junnar, one day outing for students in Junnar, school activity resort near Junnar, school picnic with activities in Junnar, school picnic place with activities near Junnar, agro tourism for school students near Junnar, agro tourism school picnic near Junnar, agri tourism for students near Junnar, educational agro tourism near Junnar, farm visit for school students near Junnar, agricultural educational tour near Junnar, rural educational trip near Junnar, nature education outing near Junnar, school picnic for children in Junnar, kids picnic places near Junnar, kids outing places in Junnar, school annual picnic in Junnar, school class picnic near Junnar, school picnic venue with activities in Junnar, student day outing near Junnar, school tour destination in Junnar, school recreational outing near Junnar, school picnic resort with activities near Junnar, best educational picnic spot near Junnar, school picnic destination with nature near Junnar, student nature outing near Junnar, school day trip near Junnar, school picnic resort for students near Junnar, school group picnic destination near Junnar, nature school picnic near Junnar, school educational tour near Junnar"
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
                            <img src='/images/keyword/55.jpg' alt='img' className='img-fluid' />
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

export default SchoolPicnicSpotInJunnar;