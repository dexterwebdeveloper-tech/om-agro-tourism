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

function SchoolPicnicSpotInAmbegaon() {


const cardData = {
    keyword: "School Picnic Spot in Ambegaon",
    headingDescription: "Om Agro Tourism offers a refreshing school picnic experience for students from Ambegaon and nearby areas, combining farm-based learning, nature exploration, outdoor recreation, traditional rural experiences, and homemade food. The peaceful agricultural setting gives schools an opportunity to plan educational trips, one-day picnics, and activity-filled outings where students can learn and enjoy together.",

    topPlaces: [
        {
            title: "Interactive Farming Experience",
            description: "Students can experience the atmosphere of a working agricultural setting and understand how farming connects with everyday life. This hands-on exposure can make a school picnic more informative while giving children a memorable rural experience."
        },
        {
            title: "Traditional Village Life Experience",
            description: "The rural environment allows students to discover traditional ways of living and understand aspects of countryside culture. It provides an interesting learning opportunity that is different from their usual classroom surroundings."
        },
        {
            title: "Student Farm Learning Zone",
            description: "A dedicated farm-focused experience can help students observe agricultural surroundings and learn about farming through direct exposure. It creates an engaging combination of education, exploration, and outdoor enjoyment."
        },
        {
            title: "Nature Exploration Area",
            description: "Students can spend quality time exploring greenery and observing the natural environment around the farm. The peaceful surroundings encourage curiosity, observation, and appreciation for nature during the school outing."
        },
        {
            title: "Agricultural Activity Experience",
            description: "Agricultural activities introduce children to the practical side of farming and rural work. These experiences can support educational objectives while making the school picnic more interactive and enjoyable."
        },
        {
            title: "Rural Culture Discovery",
            description: "Students get an opportunity to discover traditional rural surroundings and understand elements of village culture. Such experiences add educational and cultural value to a school picnic away from the city environment."
        },
        {
            title: "Outdoor Student Activity Zone",
            description: "Open outdoor spaces provide students with opportunities to participate in group recreation and enjoy the natural surroundings. The setting can help schools organize an active and engaging itinerary for their picnic."
        },
        {
            title: "Farm-to-Table Food Experience",
            description: "Students can enjoy tasty homemade food in a peaceful agricultural environment. Sharing meals together adds comfort to the outing and gives children an opportunity to experience food and hospitality in a rural setting."
        },
        {
            title: "Group Recreation Experience",
            description: "The destination provides an environment where students can spend quality time together through outdoor recreation and group activities. It encourages interaction, teamwork, and enjoyable moments during the school picnic."
        },
        {
            title: "Green Farm Picnic Experience",
            description: "The greenery and open agricultural surroundings create a pleasant atmosphere for students to relax and explore. Spending the day in such an environment provides a refreshing break from regular classroom routines."
        }
    ],

    services: [
        {
            name: "School Picnic Spots in Ambegaon",
            description: "Om Agro Tourism offers school groups a combination of farm-based learning, nature exploration, outdoor recreation, traditional rural experiences, and food, creating a varied environment for an enjoyable student picnic."
        },
        {
            name: "Best School Picnic Spot in Ambegaon",
            description: "Schools searching for an engaging picnic destination can enjoy a farm setting with agricultural experiences, nature exploration, student activities, traditional rural experiences, and homemade food."
        },
        {
            name: "School Picnic Spot Near Ambegaon",
            description: "Students from Ambegaon can enjoy a refreshing outing surrounded by agricultural landscapes, greenery, and recreational experiences. The destination provides opportunities for both practical learning and group entertainment."
        },
        {
            name: "School Picnic Spots Near Ambegaon",
            description: "A school picnic at Om Agro Tourism can combine practical farm learning with nature activities, rural experiences, outdoor recreation, and meals for a memorable day away from regular studies."
        },
        {
            name: "School Picnic Places in Ambegaon",
            description: "Om Agro Tourism provides an attractive combination of farm surroundings, educational experiences, outdoor activities, traditional rural attractions, and food, making it suitable for schools planning student outings."
        },
        {
            name: "School Trip Places in Ambegaon",
            description: "Students can explore farming and rural life through farm experiences while enjoying outdoor recreation, group activities, nature observation, and traditional experiences during their school trip."
        },
        {
            name: "Best School Picnic Spots Near Ambegaon",
            description: "Schools looking for a destination near Ambegaon can plan an activity-filled outing where students experience agriculture, nature, rural culture, and group entertainment in one peaceful setting."
        },
        {
            name: "One Day School Picnic in Ambegaon",
            description: "A one-day school picnic can include farm learning, educational activities, nature exploration, outdoor recreation, rural experiences, and meals, giving students a balanced schedule for the entire day."
        },
        {
            name: "Educational Picnic Spot in Ambegaon",
            description: "Farm experiences provide students with practical knowledge about agriculture and rural lifestyles. Nature observation and outdoor activities can further support environmental learning beyond the classroom."
        },
        {
            name: "School Picnic Resort in Ambegaon",
            description: "Om Agro Tourism combines natural surroundings with recreational activities, farm experiences, and food, giving schools a convenient destination for organizing a full-day student picnic with multiple experiences."
        },
        {
            name: "School Picnic Resort Near Ambegaon",
            description: "Schools around Ambegaon can plan a refreshing group outing with agricultural experiences, nature exploration, rural activities, outdoor recreation, and homemade food in a relaxed farm environment."
        },
        {
            name: "School Picnic with Activities in Ambegaon",
            description: "Students can participate in agricultural experiences, outdoor recreation, nature exploration, traditional rural activities, group games, and other engaging experiences, giving schools several options for an enjoyable picnic schedule."
        },
        {
            name: "School Picnic Package in Ambegaon",
            description: "A school picnic package can bring together farm-based education, outdoor recreation, nature experiences, traditional activities, group entertainment, and food, helping schools organize a convenient and memorable outing."
        },
        {
            name: "Kids Picnic Spot in Ambegaon",
            description: "Children can enjoy a selection of recreational experiences including outdoor activities, nature exploration, farm experiences, group recreation, and rural activities. The variety helps keep students active throughout the visit."
        },
        {
            name: "School Outing Places in Ambegaon",
            description: "Om Agro Tourism gives students a refreshing break from their classroom routine through farm exploration, nature activities, outdoor recreation, rural experiences, and group entertainment in a peaceful setting."
        },
        {
            name: "Agro Tourism for School Picnic in Ambegaon",
            description: "The agricultural setting allows students to experience farming, rural life, nature, and traditional activities while also enjoying recreational facilities. It creates a useful combination of practical education and outdoor fun."
        },
        {
            name: "Educational Trip Places in Ambegaon",
            description: "Students can gain practical knowledge through farm experiences, agricultural learning, nature observation, and exposure to rural surroundings. These experiences can make an educational trip more interactive and memorable."
        },
        {
            name: "School Picnic Spot Near Ambegaon Pune",
            description: "Om Agro Tourism offers school groups a farm-based destination where students can enjoy agricultural learning, outdoor recreation, nature experiences, traditional activities, and food while planning a picnic around Ambegaon and Pune."
        },
        {
            name: "Best Places for School Picnic Near Ambegaon",
            description: "A school picnic at Om Agro Tourism can include farm experiences, nature exploration, traditional rural activities, outdoor recreation, group entertainment, and meals, giving students multiple experiences to enjoy during one organized visit."
        },
        {
            name: "One Day School Picnic Near Ambegaon",
            description: "Schools can plan a complete one-day outing with educational farm experiences, recreational activities, traditional rural experiences, nature exploration, group activities, and homemade food for students to enjoy throughout the day."
        },
        {
            name: "School Educational Trip in Ambegaon",
            description: "Farm experiences give students an opportunity to understand farming and rural life through direct exposure. Outdoor recreation and nature activities can make the educational trip more engaging and enjoyable."
        },
        {
            name: "School Picnic Places for Students in Ambegaon",
            description: "Om Agro Tourism provides students with a combination of farm learning, nature exploration, traditional rural activities, outdoor recreation, and group entertainment, making it suitable for an enjoyable school outing."
        },
        {
            name: "Best Agro Tourism Near Ambegaon for School Picnic",
            description: "An agro-tourism visit allows students to experience agriculture and rural surroundings while enjoying recreational activities. Farm experiences, traditional activities, nature exploration, and food create a varied educational picnic."
        },
        {
            name: "School Picnic Near Ambegaon with Food and Activities",
            description: "School groups can enjoy tasty homemade food along with farm experiences, nature exploration, outdoor recreation, traditional rural activities, and group entertainment, creating a convenient full-day picnic experience."
        }
    ],

    tableData: [
        ["School Picnic Spots in Ambegaon"],
        ["Best School Picnic Spot in Ambegaon"],
        ["School Picnic Spot Near Ambegaon"],
        ["School Picnic Spots Near Ambegaon"],
        ["School Picnic Places in Ambegaon"],
        ["School Trip Places in Ambegaon"],
        ["Best School Picnic Spots Near Ambegaon"],
        ["One Day School Picnic in Ambegaon"],
        ["Educational Picnic Spot in Ambegaon"],
        ["School Picnic Resort in Ambegaon"],
        ["School Picnic Resort Near Ambegaon"],
        ["School Picnic with Activities in Ambegaon"],
        ["School Picnic Package in Ambegaon"],
        ["Kids Picnic Spot in Ambegaon"],
        ["School Outing Places in Ambegaon"],
        ["Agro Tourism for School Picnic in Ambegaon"],
        ["Educational Trip Places in Ambegaon"],
        ["School Picnic Spot Near Ambegaon Pune"],
        ["Best Places for School Picnic Near Ambegaon"],
        ["One Day School Picnic Near Ambegaon"],
        ["School Educational Trip in Ambegaon"],
        ["School Picnic Places for Students in Ambegaon"],
        ["Best Agro Tourism Near Ambegaon for School Picnic"],
        ["School Picnic Near Ambegaon with Food and Activities"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Practical Farm Education",
            WhyChoosedescription: "Students can learn about agriculture and rural lifestyles through direct farm experiences. This practical exposure can make classroom concepts easier to understand while keeping the picnic interactive and enjoyable."
        },
        {
            WhyChooseheading: "Engaging Outdoor Environment",
            WhyChoosedescription: "The open agricultural surroundings provide students with a refreshing break from classrooms and busy urban areas. Nature exploration and outdoor group activities can make the school outing more energetic."
        },
        {
            WhyChooseheading: "Learning Beyond Textbooks",
            WhyChoosedescription: "Farm-based experiences allow children to observe agriculture, rural surroundings, and traditional practices directly. Such exposure can support lessons related to environment, farming, and rural life."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Students can discover aspects of village culture and traditional lifestyles through the rural setting. These experiences add cultural interest to the picnic while giving children something different to explore."
        },
        {
            WhyChooseheading: "Fun and Education Together",
            WhyChoosedescription: "Educational farm experiences can be balanced with outdoor recreation, group activities, nature exploration, and relaxation. This combination allows students to learn while enjoying quality time with their classmates."
        },
        {
            WhyChooseheading: "Suitable for School Groups",
            WhyChoosedescription: "The variety of available experiences gives teachers flexibility when preparing the day's itinerary. Different activities can be arranged for students according to their age groups, interests, and educational objectives."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty homemade food adds comfort and convenience to a full-day school picnic. Students can enjoy meals together in a peaceful farm environment while taking a break between different outdoor experiences."
        },
        {
            WhyChooseheading: "Memorable Farm Outing",
            WhyChoosedescription: "Agricultural exploration, nature observation, rural culture, outdoor recreation, group activities, and shared meals create several memorable moments for students. The outing can become a meaningful experience beyond regular classroom learning."
        }
    ]
};






const faqData = [
    {
        question: "What makes Om Agri Tourism a memorable school picnic spot in Ambegaon?",
        answer: "A school picnic at Om Agri Tourism gives children a chance to enjoy a farm atmosphere filled with greenery, open spaces and outdoor experiences. The combination of recreational activities and countryside encounters creates a refreshing setting where students can relax, explore and enjoy time together outside the classroom."
    },
    {
        question: "Which attractions can students enjoy at Om Agri Tourism?",
        answer: "Students can discover a range of experiences during their visit, including swimming, boating, horse riding, bird watching, tractor rides and bull cart rides. The different activities can keep a school group engaged while also giving children opportunities to experience the natural and rural surroundings."
    },
    {
        question: "Can schools from Ambegaon organize a group outing at Om Agri Tourism?",
        answer: "Schools in Ambegaon can consider Om Agri Tourism for a planned farm outing where students and teachers can spend the day in an open countryside environment. Advance coordination can help the school arrange a suitable activity schedule based on the students and the group's requirements."
    },
    {
        question: "What type of outdoor experience can students get at Om Agri Tourism?",
        answer: "The destination provides opportunities to combine active recreation with exploration of the farm surroundings. Students can try horse riding or boating, enjoy swimming, observe birds and experience traditional rides, giving them a broader outdoor experience than a standard indoor school activity."
    },
    {
        question: "Can a school picnic at Om Agri Tourism be both educational and entertaining?",
        answer: "The farm setting naturally creates opportunities for students to observe their surroundings and learn through experience while having fun. Bird watching and rural activities can encourage curiosity about nature and countryside life, while swimming, boating and horse riding provide additional recreational enjoyment."
    },
    {
        question: "Are tractor rides and bull cart rides available for students?",
        answer: "Tractor rides and bull cart rides can introduce children to traditional countryside experiences in an enjoyable way. These activities can become memorable parts of the school outing, particularly for students who have had limited exposure to farm life and rural transportation."
    },
    {
        question: "Can students enjoy bird watching during their Ambegaon school picnic?",
        answer: "Bird watching offers students a quieter way to explore the natural side of Om Agri Tourism. Observing birds around the farm can encourage children to pay attention to their surroundings and adds a nature-focused activity to the day's recreational schedule."
    },
    {
        question: "Does Om Agri Tourism have water activities for school groups?",
        answer: "Swimming and boating can provide an exciting part of the school picnic for students when suitable for their age and abilities. Schools should ensure that children follow applicable safety instructions and remain under proper adult supervision during water-based activities."
    },
    {
        question: "Can students have homemade food while visiting Om Agri Tourism?",
        answer: "A homemade meal can add a traditional touch to the countryside outing and give students a comfortable break between activities. Enjoying food together in a farm environment can also make the overall picnic feel more relaxed and connected to the rural setting."
    },
    {
        question: "Why select Om Agri Tourism when searching for a school picnic spot in Ambegaon?",
        answer: "Om Agri Tourism combines farm greenery with a wide range of outdoor experiences, giving students several ways to enjoy their day. Horse riding, swimming, boating, bird watching, tractor rides and bull cart rides can make the outing varied, engaging and memorable for a school group in Ambegaon."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Yogesh Shinde",
        feedback:
            "The students thoroughly enjoyed their day at Om Agri Tourism. They were excited to experience the bull cart and tractor rides, and many of them also enjoyed watching birds around the farm. The open surroundings created a pleasant atmosphere for our entire school group.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Pooja More",
        feedback:
            "Our Ambegaon school outing at Om Agri Tourism was full of fun and new experiences. The children enjoyed horse riding and boating, and they appreciated having plenty of greenery around them. It was a cheerful day that gave students a wonderful break from their normal routine.",
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
  "name": "School Picnic Spot in Ambegaon",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spot-in-ambegaon.webp",
  "description": "Om Agro Tourism offers a refreshing School Picnic Spot in Ambegaon for schools planning enjoyable, educational and nature-oriented outings for students. School Picnic Spots in Ambegaon can provide children with a welcome break from their classroom routine, giving them opportunities to enjoy open spaces, greenery, agricultural surroundings and supervised outdoor recreation. Schools searching for the Best School Picnic Spot in Ambegaon can consider a peaceful agro-tourism environment where recreation and experiential learning can be brought together in one memorable outing. A School Picnic Spot Near Ambegaon and School Picnic Spots Near Ambegaon can be convenient choices for schools and coordinators looking for a day excursion without travelling to a distant destination. School Picnic Places in Ambegaon and School Trip Places in Ambegaon can suit annual school picnics, class outings, educational excursions, student activity days and group recreation programs. Schools comparing the Best School Picnic Spots Near Ambegaon can also look for destinations that provide suitable activities, natural surroundings and a comfortable environment for children and teachers. A One Day School Picnic in Ambegaon is a practical option for student groups that want a complete day of fun, learning and interaction without requiring an overnight stay. An Educational Picnic Spot in Ambegaon can make the trip more meaningful by introducing students to agricultural landscapes, plants, nature and rural surroundings through direct observation and age-appropriate experiences. A School Picnic Resort in Ambegaon or School Picnic Resort Near Ambegaon can provide a convenient setting for schools that prefer a structured recreational destination. School Picnic with Activities in Ambegaon can include suitable group games, outdoor recreation, nature observation and engaging experiences that encourage teamwork and communication. Schools planning a School Picnic Package in Ambegaon can organize the outing according to student age, group size, available activities and the overall purpose of the visit. A Kids Picnic Spot in Ambegaon can give younger students a refreshing open environment where they can enjoy supervised outdoor experiences with classmates. School Outing Places in Ambegaon are also suitable for annual celebrations, class trips and student recreation days. Agro Tourism for School Picnic in Ambegaon adds an educational dimension by allowing children to experience agricultural surroundings and understand aspects of rural life beyond conventional classroom learning. Educational Trip Places in Ambegaon can therefore combine nature exposure, recreation and experiential learning in a relaxed countryside setting. Om Agro Tourism provides an alternative to busy urban picnic locations by bringing greenery, agriculture, open spaces and leisure together. Monsoon visits can offer lush countryside scenery, winter provides comfortable conditions for outdoor activities and summer outings can be planned around suitable timings. Teachers and coordinators can structure the day according to the students' age groups and educational or recreational goals. Children can enjoy shared moments with classmates while developing social interaction, teamwork and greater awareness of nature. Schools from Ambegaon and nearby areas can consider Om Agro Tourism for school picnics, educational excursions, agro-tourism visits and memorable one-day outings. With its nature-focused setting and group-friendly recreational possibilities, the destination can create a balanced experience where students enjoy both entertainment and learning during their school trip.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spot-in-ambegaon"
  }
};




    return (
        <div>
<Helmet>
  <title>
    School Picnic Spot in Ambegaon | Activities, Agro Tourism & Educational Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots in Ambegaon with activities, agro-tourism experiences, educational outings, kids recreation and one-day picnic options."
  />

  <meta
    name="keywords"
    content="School Picnic Spot in Ambegaon, School Picnic Spots in Ambegaon, Best School Picnic Spot in Ambegaon, School Picnic Spot Near Ambegaon, School Picnic Spots Near Ambegaon, School Picnic Places in Ambegaon, School Trip Places in Ambegaon, Best School Picnic Spots Near Ambegaon, One Day School Picnic in Ambegaon, Educational Picnic Spot in Ambegaon, School Picnic Resort in Ambegaon, School Picnic Resort Near Ambegaon, School Picnic with Activities in Ambegaon, School Picnic Package in Ambegaon, Kids Picnic Spot in Ambegaon, School Outing Places in Ambegaon, Agro Tourism for School Picnic in Ambegaon, Educational Trip Places in Ambegaon, school picnic places near Ambegaon, best school picnic places near Ambegaon, school outing places near Ambegaon, school trip near Ambegaon, one day school trip near Ambegaon, school picnic destination in Ambegaon, school group outing in Ambegaon, school excursion in Ambegaon, school excursion places near Ambegaon, student picnic spot in Ambegaon, student outing places near Ambegaon, picnic places for school students in Ambegaon, school picnic venue in Ambegaon, school picnic location near Ambegaon, school nature trip near Ambegaon, nature picnic spot for students near Ambegaon, school group picnic in Ambegaon, one day picnic for school students near Ambegaon, one day outing for students in Ambegaon, school activity resort near Ambegaon, school picnic place with activities near Ambegaon, school picnic packages near Ambegaon, school picnic resort with activities near Ambegaon, school picnic activities near Ambegaon, kids picnic places near Ambegaon, kids outing places in Ambegaon, school annual picnic in Ambegaon, school class picnic near Ambegaon, school picnic venue with activities in Ambegaon, student day outing near Ambegaon, school tour destination in Ambegaon, school recreational outing near Ambegaon, best educational picnic spot near Ambegaon, educational picnic places near Ambegaon, educational outing in Ambegaon, educational trip near Ambegaon, school educational tour near Ambegaon, student nature outing near Ambegaon, school day trip near Ambegaon, school picnic resort for students near Ambegaon, school group picnic destination near Ambegaon, agro tourism school picnic near Ambegaon, agri tourism for students near Ambegaon, educational agro tourism near Ambegaon, farm visit for school students near Ambegaon, agricultural educational tour near Ambegaon, rural educational trip near Ambegaon, nature education outing near Ambegaon, nature school picnic near Ambegaon"
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
                            <img src='/images/keyword/56.jpg' alt='img' className='img-fluid' />
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

export default SchoolPicnicSpotInAmbegaon;