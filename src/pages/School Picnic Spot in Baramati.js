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

function Schoolpicnicspotinbaramati() {


const cardData = {
    keyword: "School Picnic Spot in Baramati",
    headingDescription: "Om Agro Tourism is a suitable destination for schools looking for an enjoyable and educational picnic experience near Baramati. Students can explore farm-based learning, rural surroundings, outdoor activities, traditional experiences, and fresh homemade food while spending quality time in a peaceful natural environment. The destination is well suited for school groups seeking learning, recreation, and memorable outdoor experiences in one place.",
    topPlaces: [
        {
            title: "Interactive Farming Experience",
            description: "Students can get closer to agricultural practices through an interactive farm environment where they can understand how crops are grown and learn about traditional and modern farming methods."
        },
        {
            title: "Traditional Village Life Experience",
            description: "The rural setting gives school groups an opportunity to discover village traditions, local lifestyle, farming culture, and simple countryside living through engaging experiences."
        },
        {
            title: "Student Farm Learning Zone",
            description: "This learning-focused farm experience allows students to observe agricultural activities, understand food production, and gain practical knowledge beyond the classroom."
        },
        {
            title: "Nature Exploration Area",
            description: "School groups can spend relaxing time surrounded by greenery while observing the natural environment and learning about the importance of plants, farms, and sustainable living."
        },
        {
            title: "Agricultural Activity Experience",
            description: "Students can participate in farm-oriented experiences that introduce them to agricultural work and provide an interesting combination of practical learning and outdoor recreation."
        },
        {
            title: "Rural Culture Discovery",
            description: "The countryside atmosphere provides a memorable opportunity for children to understand local traditions, rural occupations, farming practices, and the cultural importance of village life."
        },
        {
            title: "Outdoor Student Activity Zone",
            description: "A spacious outdoor environment gives school groups room to enjoy recreational activities, group interactions, games, and other engaging experiences during their picnic."
        },
        {
            title: "Farm-to-Table Food Experience",
            description: "Students and teachers can enjoy fresh homemade meals in a farm setting while learning about the connection between agricultural produce, traditional cooking, and everyday food."
        },
        {
            title: "Family and Group Recreation Area",
            description: "The destination offers a comfortable setting where large school groups can relax, interact, enjoy outdoor recreation, and make the most of their one-day picnic schedule."
        },
        {
            title: "Green Farm Picnic Experience",
            description: "The combination of open green surroundings, agricultural landscapes, fresh food, and outdoor experiences creates a refreshing environment for students to enjoy a memorable school outing."
        }
    ],
    services: [
        {
            name: "School Picnic Spots in Baramati",
            description: "Om Agro Tourism provides a refreshing setting for school groups looking for a picnic experience that combines outdoor recreation, agricultural learning, greenery, and enjoyable group activities."
        },
        {
            name: "Best School Picnic Spot in Baramati",
            description: "Students can enjoy an engaging day surrounded by farm landscapes, rural experiences, recreational opportunities, and educational activities designed to make school outings more meaningful."
        },
        {
            name: "School Picnic Places in Baramati",
            description: "A farm-based environment gives schools an alternative to conventional picnic destinations, offering students opportunities for nature exploration, practical learning, group activities, and relaxation."
        },
        {
            name: "Best School Picnic Places in Baramati",
            description: "Om Agro Tourism brings together educational farm experiences, open surroundings, homemade food, and recreational activities to create a well-rounded destination for school groups."
        },
        {
            name: "School Picnic Spot Near Baramati",
            description: "Schools searching for a peaceful picnic destination near Baramati can consider a countryside experience where students can enjoy nature, farming activities, outdoor recreation, and group time."
        },
        {
            name: "School Picnic Resorts in Baramati",
            description: "The agro-tourism setting provides a comfortable environment for school groups seeking a day of recreation and learning with farm-based activities, food, greenery, and engaging outdoor experiences."
        },
        {
            name: "School Picnic Resort Near Baramati",
            description: "Students can spend their picnic day in a natural farm environment while enjoying educational activities, traditional rural experiences, recreational opportunities, and fresh homemade meals."
        },
        {
            name: "One Day School Picnic in Baramati",
            description: "A one-day school outing can include farming experiences, nature exploration, group recreation, traditional activities, and food, helping students enjoy a balanced and memorable day."
        },
        {
            name: "One Day Picnic Spot in Baramati",
            description: "Om Agro Tourism offers an outdoor environment where school groups can combine recreation and learning during a planned one-day picnic surrounded by agricultural landscapes and greenery."
        },
        {
            name: "Educational Picnic Spot in Baramati",
            description: "Students can learn outside the classroom through practical exposure to farming, rural life, nature, food production, and traditional agricultural practices in an engaging environment."
        },
        {
            name: "Educational Trip Places in Baramati",
            description: "An agro-tourism visit gives students useful knowledge about agriculture, sustainability, village culture, farm activities, and the relationship between food and farming."
        },
        {
            name: "School Trip Places in Baramati",
            description: "School groups can enjoy a combination of educational exposure and recreation through farm visits, outdoor activities, rural experiences, and time spent in a peaceful countryside setting."
        },
        {
            name: "Best Place for School Trip in Baramati",
            description: "The farm-based destination offers students a different kind of school trip where practical learning, nature, rural culture, group recreation, and traditional food come together."
        },
        {
            name: "School Outing Places in Baramati",
            description: "Schools can plan an enjoyable outing with students through open farm surroundings, interactive experiences, outdoor recreation, educational activities, and a relaxed picnic atmosphere."
        },
        {
            name: "School Picnic Packages in Baramati",
            description: "School groups can plan a structured picnic experience around educational farm activities, recreation, meals, nature exploration, and other suitable experiences for students and teachers."
        },
        {
            name: "Agro Tourism in Baramati for School Picnic",
            description: "Om Agro Tourism introduces students to agriculture and rural life through farm-based learning, traditional experiences, nature exploration, recreational activities, and fresh homemade food."
        },
        {
            name: "Agro Tourism Near Baramati for Students",
            description: "Students can discover farming and rural culture through practical experiences that encourage curiosity, environmental awareness, teamwork, and appreciation for agricultural life."
        },
        {
            name: "School Picnic Farm in Baramati",
            description: "A farm environment creates opportunities for students to understand crops, agricultural work, village traditions, food production, and nature while enjoying a recreational school picnic."
        },
        {
            name: "Adventure School Picnic Spot in Baramati",
            description: "Students can add excitement to their outing through outdoor recreation, group activities, farm experiences, and exploration of the open countryside in a safe and engaging setting."
        },
        {
            name: "Nature Picnic Spot for Students in Baramati",
            description: "The green farm surroundings offer students a refreshing break from classroom routines where they can observe nature, enjoy outdoor spaces, and participate in engaging group experiences."
        },
        {
            name: "Kids Picnic Spot in Baramati",
            description: "Children can enjoy an entertaining day with age-friendly outdoor experiences, farm exploration, recreational activities, traditional food, and plenty of opportunities for group interaction."
        },
        {
            name: "School Group Picnic Spot in Baramati",
            description: "Large student groups can enjoy a well-organized farm outing featuring educational experiences, outdoor recreation, nature exploration, food, and opportunities for students to socialize."
        },
        {
            name: "One Day Educational Trip Near Baramati",
            description: "Schools can plan a meaningful one-day educational visit where students gain practical exposure to farming, rural culture, nature, food production, and sustainable agricultural practices."
        },
        {
            name: "Best Agro Tourism for School Picnic in Baramati",
            description: "Om Agro Tourism offers a combination of farm learning, rural experiences, outdoor recreation, natural surroundings, and homemade food, making the outing both educational and enjoyable for students."
        }
    ],
    tableData: [
        ["School Picnic Spots in Baramati"],
        ["Best School Picnic Spot in Baramati"],
        ["School Picnic Places in Baramati"],
        ["Best School Picnic Places in Baramati"],
        ["School Picnic Spot Near Baramati"],
        ["School Picnic Resorts in Baramati"],
        ["School Picnic Resort Near Baramati"],
        ["One Day School Picnic in Baramati"],
        ["One Day Picnic Spot in Baramati"],
        ["Educational Picnic Spot in Baramati"],
        ["Educational Trip Places in Baramati"],
        ["School Trip Places in Baramati"],
        ["Best Place for School Trip in Baramati"],
        ["School Outing Places in Baramati"],
        ["School Picnic Packages in Baramati"],
        ["Agro Tourism in Baramati for School Picnic"],
        ["Agro Tourism Near Baramati for Students"],
        ["School Picnic Farm in Baramati"],
        ["Adventure School Picnic Spot in Baramati"],
        ["Nature Picnic Spot for Students in Baramati"],
        ["Kids Picnic Spot in Baramati"],
        ["School Group Picnic Spot in Baramati"],
        ["One Day Educational Trip Near Baramati"],
        ["Best Agro Tourism for School Picnic in Baramati"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Learning Through Real Farm Experiences",
            WhyChoosedescription: "Students can understand agriculture through practical exposure to farming, crops, food production, and rural activities, making the picnic more educational than a conventional outing."
        },
        {
            WhyChooseheading: "A Refreshing Countryside Environment",
            WhyChoosedescription: "Green farm surroundings provide students with a welcome break from classrooms and busy city environments while encouraging them to spend quality time outdoors."
        },
        {
            WhyChooseheading: "Activities for Different Age Groups",
            WhyChoosedescription: "The range of educational and recreational experiences can help schools plan an engaging outing for students while keeping the day active, enjoyable, and informative."
        },
        {
            WhyChooseheading: "Practical Agricultural Knowledge",
            WhyChoosedescription: "Farm-based activities help children discover how agriculture works and develop a better understanding of where food comes from and why sustainable farming matters."
        },
        {
            WhyChooseheading: "Suitable for School Groups",
            WhyChoosedescription: "The spacious agro-tourism environment allows student groups and teachers to spend their day together through organized learning, recreation, outdoor experiences, and shared meals."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Students get an opportunity to observe village culture and traditional lifestyles, helping them connect classroom concepts with real-world rural practices and local traditions."
        },
        {
            WhyChooseheading: "Food and Farm Connection",
            WhyChoosedescription: "Fresh homemade food adds value to the school outing while giving students an opportunity to understand the connection between agricultural produce, cooking, and everyday meals."
        },
        {
            WhyChooseheading: "Memorable Educational Outing",
            WhyChoosedescription: "Combining learning, nature, recreation, farming, food, and group activities creates an experience that students can enjoy while taking back practical knowledge and lasting memories."
        }
    ]
};



const faqData = [
    {
        question: "Why is Om Agri Tourism a good option for a school picnic in Baramati?",
        answer: "A school outing at Om Agri Tourism gives students a refreshing opportunity to spend time in a green farm environment away from their regular classroom routine. The combination of outdoor recreation, countryside experiences and open surroundings can make the day enjoyable for both students and teachers."
    },
    {
        question: "Which activities can students enjoy at Om Agri Tourism?",
        answer: "Children can take part in a variety of experiences such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. Having different activity choices allows schools to create an engaging picnic experience with a balance of fun, exploration and relaxation."
    },
    {
        question: "Can schools from Baramati arrange a picnic visit to Om Agri Tourism?",
        answer: "Schools around Baramati can plan a group visit to Om Agri Tourism for a countryside-based day outing. Advance coordination is useful for arranging the preferred activities, meal timings and other requirements while keeping the students' age groups and supervision needs in mind."
    },
    {
        question: "How can a school picnic at Om Agri Tourism provide a rural experience?",
        answer: "The farm setting gives students an opportunity to experience activities associated with countryside life. Tractor rides and bull cart rides can introduce children to traditional and agricultural surroundings, while bird watching encourages them to notice the natural environment more closely."
    },
    {
        question: "Is Om Agri Tourism suitable for students who enjoy adventure and outdoor activities?",
        answer: "Students looking for active entertainment can explore options such as horse riding, swimming and boating during their visit. These activities can add excitement to the school picnic while the spacious farm surroundings provide opportunities for students to unwind between different activities."
    },
    {
        question: "Can bird watching be part of a school picnic near Baramati?",
        answer: "Bird watching can add a peaceful nature-oriented element to the school excursion. Students can spend some time observing birds and their surroundings, making the activity useful for encouraging curiosity and appreciation for nature alongside the more energetic picnic experiences."
    },
    {
        question: "What can students learn from tractor and bull cart rides?",
        answer: "Traditional rides can give students a closer look at aspects of rural and agricultural life that they may not regularly encounter. Tractor rides and bull cart rides are also enjoyable group experiences that can make the picnic more memorable while introducing children to countryside transportation."
    },
    {
        question: "Are swimming and boating suitable activities for a school group at Om Agri Tourism?",
        answer: "Swimming and boating can provide enjoyable water-based recreation for eligible students during the outing. Schools should consider age suitability, follow the destination's safety instructions and ensure appropriate adult supervision whenever students participate in water activities."
    },
    {
        question: "Can students enjoy homemade food during their Baramati school picnic?",
        answer: "A homemade meal can complement the rural atmosphere and give students a comfortable break after participating in outdoor activities. Sharing food together can also add a pleasant social element to the picnic and make the overall farm visit feel more traditional and relaxed."
    },
    {
        question: "What can make a school picnic at Om Agri Tourism memorable for Baramati students?",
        answer: "A mix of nature, recreation and countryside activities can give students a varied experience throughout the day. From horse riding and boating to bird watching, tractor rides and bull cart rides, Om Agri Tourism provides several ways for a school group to enjoy time together outside the classroom."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sandeep More",
        feedback:
            "Our students had a fantastic day at Om Agri Tourism during our Baramati school picnic. They were excited about the horse riding and bull cart ride and enjoyed exploring the peaceful farm surroundings. The different activities kept the group engaged throughout the outing.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Kavita Deshmukh",
        feedback:
            "The school visit to Om Agri Tourism was a refreshing experience for our students. Boating and bird watching were particular favorites, while the homemade food was appreciated by everyone. It was a pleasant combination of outdoor fun and countryside experiences.",
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
  "name": "School Picnic Spot in Baramati",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spot-in-baramati.webp",
  "description": "Om Agro Tourism offers a refreshing School Picnic Spot in Baramati for schools planning enjoyable, educational and nature-oriented outings for students. School Picnic Spots in Baramati can provide children with a welcome break from their regular classroom routine, allowing them to spend meaningful time in open spaces, greenery, agricultural surroundings and a peaceful countryside atmosphere. Schools searching for the Best School Picnic Spot in Baramati can consider an agro-tourism destination where recreation, nature exposure and experiential learning can be combined into a memorable group outing. School Picnic Places in Baramati and the Best School Picnic Places in Baramati can suit annual school picnics, class outings, educational excursions, student activity days and nature-based school trips. A School Picnic Spot Near Baramati can be a convenient choice for schools and coordinators looking to arrange a day excursion without requiring students to travel to a distant destination. School Picnic Resorts in Baramati can provide a structured setting for children, teachers and coordinators to spend quality time together while enjoying suitable outdoor recreation. A School Picnic Resort Near Baramati can also be considered by institutions looking for a comfortable group destination that combines open surroundings, leisure and nature experiences. Students can participate in suitable group games, outdoor activities, nature observation and shared experiences that encourage teamwork, communication and social interaction. The agricultural environment can give children an opportunity to observe plants, greenery and rural surroundings through direct experiences beyond conventional classroom learning. Om Agro Tourism combines agriculture, countryside scenery, open spaces and recreation to create an environment suitable for students of different age groups. Teachers and school coordinators can organize the outing according to student strength, age group and the educational or recreational purpose of the visit. A one-day school picnic can provide a complete day of fun and learning without requiring an overnight stay, making it practical for class groups and school activity programs. Monsoon visits can offer lush greenery and refreshing countryside scenery, while winter provides pleasant conditions for outdoor recreation and summer outings can be planned around suitable timings. The destination can suit school annual picnics, educational tours, children's group outings, nature excursions and student recreation days. Schools from Baramati and nearby areas can consider Om Agro Tourism when looking for a destination that balances entertainment, learning and peaceful rural surroundings. Students can spend meaningful time with classmates while developing teamwork and a greater appreciation for nature and agriculture. The agro-tourism setting offers an alternative to conventional city-based picnic locations by bringing rural experiences and outdoor leisure together. With its open environment, agricultural surroundings and group-friendly recreational possibilities, Om Agro Tourism can be a suitable destination for schools planning a memorable picnic and educational outing in and around Baramati.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spot-in-baramati"
  }
};




    return (
        <div>



<Helmet>
  <title>
    School Picnic Spot in Baramati | Best School Picnic, Resort & Educational Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots and resorts in Baramati for student outings, educational experiences, nature activities, group recreation and memorable school trips."
  />

  <meta
    name="keywords"
    content="School Picnic Spot in Baramati, School Picnic Spots in Baramati, Best School Picnic Spot in Baramati, School Picnic Places in Baramati, Best School Picnic Places in Baramati, School Picnic Spot Near Baramati, School Picnic Resorts in Baramati, School Picnic Resort Near Baramati, school picnic places near Baramati, best school picnic spots near Baramati, school picnic destinations in Baramati, school outing places in Baramati, school trip places in Baramati, one day school picnic in Baramati, one day school trip near Baramati, one day picnic spot near Baramati, educational picnic spot in Baramati, educational picnic places near Baramati, educational outing in Baramati, educational trip near Baramati, student picnic spot in Baramati, student outing places near Baramati, picnic places for school students in Baramati, school picnic venue in Baramati, school picnic location near Baramati, school excursion in Baramati, school excursion places near Baramati, school nature trip near Baramati, nature picnic spot for students near Baramati, school group picnic in Baramati, school group outing near Baramati, one day picnic for school students near Baramati, one day outing for students in Baramati, school activity resort near Baramati, school picnic with activities in Baramati, school picnic place with activities near Baramati, school picnic package in Baramati, school picnic packages near Baramati, school picnic resort with activities near Baramati, agro tourism for school students near Baramati, agro tourism school picnic near Baramati, agro tourism for school picnic in Baramati, agri tourism for students near Baramati, educational agro tourism near Baramati, farm visit for school students near Baramati, agricultural educational tour near Baramati, rural educational trip near Baramati, nature education outing near Baramati, school picnic for children in Baramati, kids picnic places near Baramati, kids outing places in Baramati, school annual picnic in Baramati, school class picnic near Baramati, school picnic venue with activities in Baramati, student day outing near Baramati, school tour destination in Baramati, school recreational outing near Baramati, best educational picnic spot near Baramati, school picnic destination with nature near Baramati, student nature outing near Baramati, school day trip near Baramati, school picnic resort for students near Baramati, school group picnic destination near Baramati, nature school picnic near Baramati, school educational tour near Baramati"
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
                            <img src='/images/keyword/62.jpg' alt='img' className='img-fluid' />
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

export default Schoolpicnicspotinbaramati;;