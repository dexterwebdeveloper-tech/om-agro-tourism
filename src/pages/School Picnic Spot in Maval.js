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

function Schoolpicnicspotinmava() {


const cardData = {
    keyword: "School Picnic Spot in Maval",
    headingDescription: "Om Agro Tourism is a refreshing school picnic destination for students from Maval and Vadgaon Maval, offering a mix of farm-based learning, rural experiences, nature exploration, outdoor recreation, and homemade food. The peaceful agricultural environment gives school groups an opportunity to enjoy an educational and entertaining one-day outing away from the regular classroom setting.",

    topPlaces: [
        {
            title: "Interactive Farm Learning Experience",
            description: "Students can explore an agricultural environment and understand how farming activities connect with everyday life. This hands-on experience adds educational value to the picnic while allowing children to enjoy time outdoors."
        },
        {
            title: "Rural Lifestyle Discovery Area",
            description: "The farm surroundings introduce students to traditional rural life and countryside culture. Children can observe a different way of living and gain practical knowledge while spending quality time with their classmates."
        },
        {
            title: "Student Nature Observation Zone",
            description: "The green surroundings provide an enjoyable setting for students to observe plants, farmland, and natural landscapes. It encourages curiosity and gives children an opportunity to learn through direct observation."
        },
        {
            title: "Agricultural Learning Experience",
            description: "Students can gain a better understanding of farming and agricultural surroundings through a direct farm visit. The experience can complement classroom lessons while making the school trip more interactive."
        },
        {
            title: "Farm Recreation Experience",
            description: "Open farm surroundings provide students with space to relax, explore, and participate in group recreation. The combination of greenery and outdoor activities makes the outing enjoyable for different age groups."
        },
        {
            title: "Traditional Farm Experience",
            description: "Children can discover rural traditions and experience the atmosphere of countryside life. This cultural exposure gives the school picnic an additional learning dimension beyond ordinary recreational outings."
        },
        {
            title: "School Group Activity Area",
            description: "The spacious surroundings can support group-oriented recreation and outdoor engagement for visiting students. Teachers can include different experiences in the day's itinerary according to the age and interests of the group."
        },
        {
            title: "Homemade Food Experience",
            description: "Students can enjoy tasty homemade food in a peaceful farm environment during their outing. Sharing meals as a group provides a comfortable break and adds a memorable food experience to the picnic."
        },
        {
            title: "Farm-to-Nature Exploration",
            description: "Students can move beyond classroom learning by experiencing agricultural surroundings and natural greenery together. The combination of exploration and recreation creates an engaging environment for a school outing."
        },
        {
            title: "Green Countryside Picnic Experience",
            description: "The calm agricultural landscape offers students a refreshing setting for spending time with friends and teachers. Greenery, open surroundings, farm experiences, and recreation make the day more enjoyable and memorable."
        }
    ],

    services: [
        {
            name: "School Picnic Spots in Maval",
            description: "Om Agro Tourism offers school groups a combination of agricultural learning, nature exploration, rural experiences, outdoor recreation, group activities, and homemade food for a balanced picnic experience."
        },
        {
            name: "School Picnic Spot in Vadgaon Maval",
            description: "Students from Vadgaon Maval can enjoy a refreshing farm-based outing with educational experiences, natural surroundings, rural activities, outdoor recreation, and food in a peaceful environment."
        },
        {
            name: "School Picnic Spots in Vadgaon Maval",
            description: "School groups can explore the agricultural setting while enjoying nature, rural culture, group recreation, and farm-based activities. The varied experiences make the outing suitable for students of different age groups."
        },
        {
            name: "Best School Picnic Spot in Maval",
            description: "Om Agro Tourism provides an engaging combination of farm learning, nature exploration, rural experiences, recreation, and food, making it a suitable choice for schools planning an educational and enjoyable outing in the Maval region."
        },
        {
            name: "Best School Picnic Spot in Vadgaon Maval",
            description: "A school group can enjoy an activity-filled visit with agricultural experiences, outdoor recreation, nature observation, traditional rural surroundings, and homemade meals in a relaxed farm setting."
        },
        {
            name: "School Picnic Spot Near Maval",
            description: "Students can spend their day surrounded by greenery and agricultural landscapes while participating in educational and recreational experiences. The setting offers a refreshing alternative to conventional school outings."
        },
        {
            name: "School Picnic Spot Near Vadgaon Maval",
            description: "Om Agro Tourism gives schools an opportunity to plan a farm-based picnic with nature exploration, rural learning, outdoor recreation, group activities, and food for students and teachers."
        },
        {
            name: "School Picnic Places in Maval",
            description: "The destination combines agricultural surroundings with practical learning, nature experiences, outdoor recreation, and traditional rural activities, providing students with a varied and engaging school picnic itinerary."
        },
        {
            name: "School Picnic Places in Vadgaon Maval",
            description: "School groups can enjoy a peaceful agricultural environment where educational farm experiences can be combined with recreation, nature observation, group activities, and homemade food."
        },
        {
            name: "School Trip Places in Maval",
            description: "Om Agro Tourism provides students with opportunities to explore farming and rural surroundings while enjoying outdoor activities and group recreation. The experience can add educational and cultural value to a school trip."
        },
        {
            name: "School Trip Places Near Vadgaon Maval",
            description: "Students can enjoy an outdoor educational outing featuring farm experiences, rural surroundings, nature exploration, recreational activities, and shared meals in a comfortable environment."
        },
        {
            name: "One Day School Picnic in Maval",
            description: "A one-day visit can combine agricultural learning, nature exploration, rural experiences, outdoor recreation, group activities, and food, allowing schools to create a well-balanced itinerary for students."
        },
        {
            name: "One Day School Picnic Near Vadgaon Maval",
            description: "Schools can plan a complete day of educational and recreational experiences with students enjoying farm surroundings, nature, outdoor activities, rural culture, and homemade food."
        },
        {
            name: "Educational Picnic Spot in Maval",
            description: "The agricultural environment provides practical learning opportunities related to farming, nature, and rural life. Students can gain knowledge through direct observation while also enjoying outdoor recreation."
        },
        {
            name: "Educational Trip Places in Maval",
            description: "Farm-based learning and exposure to rural surroundings can make an educational trip more interactive. Students can observe agriculture, explore nature, and participate in recreational experiences during the visit."
        },
        {
            name: "School Picnic Resort in Maval",
            description: "Om Agro Tourism offers a peaceful setting where school groups can combine farm experiences, nature exploration, outdoor recreation, rural activities, and food for an enjoyable full-day outing."
        },
        {
            name: "School Picnic Resort Near Vadgaon Maval",
            description: "Schools can organize a refreshing group outing in a farm environment with agricultural learning, outdoor recreation, nature experiences, traditional rural activities, and homemade food."
        },
        {
            name: "School Picnic with Activities in Maval",
            description: "Students can enjoy a variety of experiences involving farming, nature, outdoor recreation, rural culture, and group activities. This variety helps schools create an engaging picnic schedule instead of a routine outing."
        },
        {
            name: "School Picnic Package in Maval",
            description: "A school picnic package can bring together educational farm experiences, outdoor recreation, nature exploration, rural activities, group entertainment, and food to create a convenient outing for students."
        },
        {
            name: "Kids Picnic Spot in Maval",
            description: "Children can enjoy an outdoor environment filled with farm experiences, nature exploration, group recreation, and rural activities. The varied surroundings help keep students engaged throughout their picnic."
        },
        {
            name: "Agro Tourism for School Picnic in Maval",
            description: "An agro-tourism visit gives students direct exposure to agriculture, rural lifestyles, natural surroundings, and traditional experiences. The combination of learning and recreation makes the school outing more meaningful."
        },
        {
            name: "School Outing Places Near Vadgaon Maval",
            description: "Om Agro Tourism provides an outdoor setting where students can take a break from classroom routines and enjoy farm learning, nature exploration, group recreation, rural experiences, and homemade food."
        },
        {
            name: "Best Agro Tourism Near Maval for School Picnic",
            description: "The agricultural environment creates opportunities for students to understand farming and rural life while enjoying nature and recreation. Farm experiences, outdoor activities, traditional surroundings, and food provide a complete picnic experience."
        },
        {
            name: "School Picnic Near Vadgaon Maval with Food and Activities",
            description: "School groups can enjoy tasty homemade food along with farm experiences, nature exploration, rural activities, outdoor recreation, and group entertainment, making the outing convenient and enjoyable for students."
        }
    ],

    tableData: [
        ["School Picnic Spots in Maval"],
        ["School Picnic Spot in Vadgaon Maval"],
        ["School Picnic Spots in Vadgaon Maval"],
        ["Best School Picnic Spot in Maval"],
        ["Best School Picnic Spot in Vadgaon Maval"],
        ["School Picnic Spot Near Maval"],
        ["School Picnic Spot Near Vadgaon Maval"],
        ["School Picnic Places in Maval"],
        ["School Picnic Places in Vadgaon Maval"],
        ["School Trip Places in Maval"],
        ["School Trip Places Near Vadgaon Maval"],
        ["One Day School Picnic in Maval"],
        ["One Day School Picnic Near Vadgaon Maval"],
        ["Educational Picnic Spot in Maval"],
        ["Educational Trip Places in Maval"],
        ["School Picnic Resort in Maval"],
        ["School Picnic Resort Near Vadgaon Maval"],
        ["School Picnic with Activities in Maval"],
        ["School Picnic Package in Maval"],
        ["Kids Picnic Spot in Maval"],
        ["Agro Tourism for School Picnic in Maval"],
        ["School Outing Places Near Vadgaon Maval"],
        ["Best Agro Tourism Near Maval for School Picnic"],
        ["School Picnic Near Vadgaon Maval with Food and Activities"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Farm-Based Learning",
            WhyChoosedescription: "Students can understand agriculture through direct exposure to a real farm environment. This practical experience can support classroom education while making the picnic more interesting and interactive."
        },
        {
            WhyChooseheading: "Refreshing Natural Surroundings",
            WhyChoosedescription: "The green agricultural setting gives students a peaceful place to spend time outdoors. Nature exploration and open spaces provide a welcome break from regular school routines."
        },
        {
            WhyChooseheading: "Educational and Recreational Balance",
            WhyChoosedescription: "The outing can combine learning with outdoor enjoyment, allowing students to gain knowledge while participating in group recreation and exploring the farm surroundings."
        },
        {
            WhyChooseheading: "Exposure to Rural Culture",
            WhyChoosedescription: "Children can discover traditional rural surroundings and learn about aspects of countryside life that they may not regularly encounter in an urban classroom environment."
        },
        {
            WhyChooseheading: "Variety of Experiences",
            WhyChoosedescription: "Farm learning, nature exploration, outdoor recreation, group activities, rural experiences, and food give schools several ways to structure the day's itinerary according to student interests."
        },
        {
            WhyChooseheading: "Ideal for Student Groups",
            WhyChoosedescription: "The farm environment is suitable for organized school groups and educational outings. Teachers can plan activities that encourage participation, observation, interaction, and teamwork among students."
        },
        {
            WhyChooseheading: "Comfortable Food Experience",
            WhyChoosedescription: "Tasty homemade food provides students with a convenient and enjoyable meal experience during the outing. Group dining also gives children time to relax and interact with their classmates."
        },
        {
            WhyChooseheading: "Memorable One-Day Outing",
            WhyChoosedescription: "A combination of agriculture, nature, rural culture, recreation, and shared experiences can make the school picnic more memorable. Students return with both enjoyable memories and practical learning from the visit."
        }
    ]
};






const faqData = [
    {
        question: "What can make Om Agri Tourism a good school picnic spot in Maval?",
        answer: "Om Agri Tourism brings students into a peaceful farm environment where open greenery, countryside surroundings and outdoor recreation come together. The change from a regular classroom setting can give children an opportunity to relax, explore and enjoy a day filled with different experiences."
    },
    {
        question: "What activities can students try at Om Agri Tourism?",
        answer: "A school group can enjoy several farm and outdoor experiences, including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. Having multiple options makes it easier to create an engaging picnic schedule for students with varied interests."
    },
    {
        question: "Can schools in Maval plan a picnic at Om Agri Tourism?",
        answer: "Schools from Maval can consider Om Agri Tourism for a countryside group outing with students and teachers. Planning the visit in advance can help the school organize suitable activities, meal breaks and supervision according to the age and requirements of the participating students."
    },
    {
        question: "How does Om Agri Tourism give students a rural experience?",
        answer: "The farm surroundings allow children to experience activities associated with countryside life rather than spending the entire day in a conventional recreational venue. Tractor rides, bull cart rides, bird watching and time among the greenery can help students discover a different environment."
    },
    {
        question: "Can a Maval school picnic include both adventure and nature activities?",
        answer: "Students can enjoy an assortment of active and nature-oriented experiences at Om Agri Tourism. Swimming, boating and horse riding offer recreational excitement, while bird watching and exploring the farm surroundings provide calmer opportunities to connect with nature."
    },
    {
        question: "Is Om Agri Tourism suitable for school groups with different age levels?",
        answer: "The variety of activities can allow schools to select experiences based on students' ages, abilities and interests. Teachers and accompanying adults can plan suitable participation and maintain proper supervision so that younger and older students can enjoy the outing responsibly."
    },
    {
        question: "Can students experience traditional farm rides during the picnic?",
        answer: "Tractor rides and bull cart rides can give students an enjoyable introduction to traditional rural experiences. These activities can be particularly memorable for children who are more familiar with urban surroundings and have limited opportunities to experience farm life."
    },
    {
        question: "What nature-based activity can students enjoy at Om Agri Tourism?",
        answer: "Bird watching can be included as a simple nature-focused activity during the school visit. Students can observe birds around the farm and spend time appreciating the greenery, adding an element of curiosity and outdoor learning to their recreational day."
    },
    {
        question: "Can school groups enjoy swimming and boating at Om Agri Tourism?",
        answer: "Swimming and boating can add excitement to the picnic when these activities are suitable for the participating students. Schools should follow applicable safety instructions, consider age suitability and ensure that students remain properly supervised during water activities."
    },
    {
        question: "Why choose Om Agri Tourism when looking for a school picnic spot in Maval?",
        answer: "The destination combines open farm surroundings with recreational and countryside experiences, giving students more variety during their outing. Horse riding, swimming, boating, tractor rides, bull cart rides and bird watching can collectively make a school picnic in Maval enjoyable, active and memorable."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sameer Kumbhar",
        feedback:
            "Our school group had a fantastic experience at Om Agri Tourism. The students were particularly enthusiastic about the boating and horse riding, while the peaceful farm surroundings gave everyone a chance to relax. The variety of activities made the entire picnic enjoyable.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Shweta Kale",
        feedback:
            "The Maval school picnic was a wonderful change from our usual outings. Students enjoyed the tractor ride and bird watching and were excited to explore the countryside environment. Om Agri Tourism gave our group a fun outdoor experience with plenty of memorable moments.",
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
  "name": "School Picnic Spot in Maval",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spot-in-maval.webp",
  "description": "Om Agro Tourism offers a refreshing School Picnic Spot in Maval for schools planning enjoyable, educational and nature-focused outings for students. School Picnic Spots in Maval provide an opportunity for children to step away from their regular classroom routine and spend meaningful time in open, green and peaceful surroundings. The countryside environment can support student recreation, group interaction, nature observation and age-appropriate outdoor activities while giving teachers a practical setting for a supervised school outing. Schools searching for a School Picnic Spot in Vadgaon Maval can also consider an agro-tourism destination where agriculture, greenery and outdoor leisure come together in a relaxed environment. A one-day school picnic can be planned without requiring an overnight stay, making it suitable for class groups, annual school picnics, educational excursions and student activity programs. Om Agro Tourism offers an alternative to conventional urban picnic locations by creating opportunities for children to experience agricultural surroundings and observe aspects of rural life beyond their classroom lessons. Students can enjoy group games, outdoor recreation, nature-based activities and shared experiences that encourage teamwork, communication and social interaction. Teachers and school coordinators can structure the visit according to student age groups, group size and the educational or recreational objectives of the trip. The natural surroundings can make the outing more engaging for children while providing opportunities to introduce simple concepts related to farming, plants, nature and countryside life. Monsoon visits can bring lush greenery and refreshing scenery, winter can provide comfortable conditions for outdoor recreation and summer outings can be scheduled around suitable timings. The destination can suit schools looking for a balanced combination of entertainment, experiential learning and peaceful surroundings. Students can spend quality time with classmates while developing greater appreciation for nature and rural environments. Om Agro Tourism can be considered for school annual picnics, class outings, student day trips, educational visits, nature excursions and group recreation programs from Maval, Vadgaon Maval and surrounding areas. A school outing in an agro-tourism setting can also help children experience a different environment from their everyday urban routine while creating memorable moments with classmates and teachers. With open surroundings, agricultural landscapes and recreational possibilities, Om Agro Tourism provides a suitable setting for schools seeking a memorable and educational picnic experience in and around Maval.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spot-in-maval"
  }
};




    return (
        <div>


<Helmet>
  <title>
    School Picnic Spot in Maval | Best School Picnic & Educational Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots in Maval and Vadgaon Maval for student outings, nature experiences, educational trips, outdoor recreation and memorable school picnics."
  />

  <meta
    name="keywords"
    content="School Picnic Spot in Maval, School Picnic Spots in Maval, School Picnic Spot in Vadgaon Maval, best school picnic spots in Maval, school picnic places in Maval, school picnic spot near Maval, school picnic spots near Maval, best school picnic spot near Maval, one day school picnic in Maval, educational picnic spot in Maval, school trip places in Maval, school outing places in Maval, school picnic resort in Maval, school picnic resort near Maval, school picnic with activities in Maval, school picnic package in Maval, kids picnic spot in Maval, school outing places near Maval, school picnic spots in Vadgaon Maval, school picnic place in Vadgaon Maval, school picnic spots near Vadgaon Maval, best school picnic near Vadgaon Maval, one day school picnic near Vadgaon Maval, educational picnic near Vadgaon Maval, school trip places near Vadgaon Maval, school outing places near Vadgaon Maval, school picnic resort near Vadgaon Maval, student picnic spot in Maval, student outing places near Maval, picnic places for school students in Maval, school picnic venue in Maval, school picnic location near Maval, school excursion in Maval, school excursion places near Maval, school nature trip near Maval, nature picnic spot for students near Maval, school group picnic in Maval, one day picnic for school students near Maval, one day outing for students in Maval, school activity resort near Maval, school picnic with activities near Maval, school picnic place with activities near Maval, agro tourism for school students near Maval, agro tourism school picnic near Maval, agri tourism for students near Maval, educational agro tourism near Maval, farm visit for school students near Maval, agricultural educational tour near Maval, rural educational trip near Maval, nature education outing near Maval, school picnic for children in Maval, kids picnic places near Maval, kids outing places in Maval, school annual picnic in Maval, school class picnic near Maval, school picnic venue with activities in Maval, student day outing near Maval, school tour destination in Maval, school recreational outing near Maval, school picnic resort with activities near Maval, best educational picnic spot near Maval, school picnic destination with nature near Maval, student nature outing near Maval, school day trip near Maval, school picnic resort for students near Maval, school group picnic destination near Maval, nature school picnic near Maval"
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
                            <img src='/images/keyword/57.jpg' alt='img' className='img-fluid' />
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

export default Schoolpicnicspotinmava;;