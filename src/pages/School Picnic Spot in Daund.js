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

function Schoolpicnicspotindaund() {


const cardData = {
    keyword: "School Picnic Spot in Daund",
    headingDescription: "Om Agro Tourism offers schools a refreshing destination for a memorable picnic experience with farm-based learning, nature, recreational activities, and tasty homemade food. Students can enjoy a balanced day of educational exploration and outdoor entertainment through activities such as farm tours, swimming, traditional rural rides, games, and nature experiences.",

    topPlaces: [
        {
            title: "Farm Tours and Workshops",
            description: "Farm tours and workshops give students a practical opportunity to understand agriculture, farming methods, and rural life. These interactive experiences can make a school picnic more educational while keeping children connected with nature."
        },
        {
            title: "Horse Riding",
            description: "Horse riding adds an exciting outdoor element to the school picnic and gives students an opportunity to experience a traditional farm activity. It can be included as an enjoyable supervised activity during the day's itinerary."
        },
        {
            title: "Water Park Activities",
            description: "Water park activities provide students with an energetic recreational experience during their school outing. They add variety to the picnic schedule and give children an opportunity to enjoy refreshing water-based fun."
        },
        {
            title: "Bird Watching",
            description: "Bird watching encourages students to observe birds and natural surroundings in a peaceful farm environment. It can turn a simple picnic into an interesting nature-learning experience while developing curiosity about local wildlife."
        },
        {
            title: "Bull Cart Ride",
            description: "The bull cart ride introduces students to a traditional form of rural transportation and offers a glimpse into village culture. This distinctive experience can make the school trip more memorable and enjoyable."
        },
        {
            title: "Swimming Pool",
            description: "The swimming pool offers students a refreshing recreational activity during their picnic. It provides an enjoyable break between other activities and can add an energetic water-based experience to the school outing."
        },
        {
            title: "Jungle Safari",
            description: "The jungle safari experience allows students to explore greenery and natural surroundings in an exciting way. It adds an adventurous element to the picnic while encouraging children to observe the environment around them."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty homemade food complements the outdoor picnic experience with a comforting meal in a peaceful farm setting. It gives school groups a convenient opportunity to relax and enjoy food together during the day."
        },
        {
            title: "Tractor Ride",
            description: "A tractor ride gives students a fun introduction to an important part of farm life. The activity allows children to experience the agricultural surroundings in an entertaining and memorable way."
        },
        {
            title: "Boating",
            description: "Boating adds a calm yet enjoyable recreational experience to the school picnic. Students can spend time around the water while enjoying a different outdoor activity within the natural surroundings of the destination."
        }
    ],

    services: [
        {
            name: "School Picnic Spot in Daund",
            description: "Om Agro Tourism offers schools from Daund an engaging picnic environment combining farm experiences, nature, recreational activities, traditional rural rides, and food for an enjoyable day away from the classroom."
        },
        {
            name: "Best School Picnic Spots in Daund",
            description: "Schools searching for an enjoyable picnic destination around Daund can choose a farm-based setting where students can experience outdoor activities, agricultural learning, nature exploration, and group recreation."
        },
        {
            name: "School Picnic Spot Near Daund",
            description: "Students can enjoy a refreshing outing surrounded by farm greenery with activities such as swimming, tractor rides, horse riding, boating, games, and farm-based experiences that make the school trip engaging."
        },
        {
            name: "One-Day School Picnic in Daund",
            description: "A well-planned one-day school picnic can include educational farm activities, outdoor recreation, nature observation, traditional rural experiences, water activities, and meals for a varied and enjoyable student outing."
        },
        {
            name: "Educational Picnic Spots in Daund",
            description: "Om Agro Tourism combines recreation with practical learning through farm tours, agricultural workshops, nature observation, and rural experiences. Students can gain useful exposure outside the conventional classroom environment."
        },
        {
            name: "School Trip Places in Daund",
            description: "The destination provides a mix of farm surroundings, outdoor activities, traditional experiences, and recreational options that can make a school trip from Daund both informative and enjoyable for students."
        },
        {
            name: "Kids’ Picnic Spots in Daund",
            description: "Children can enjoy a selection of activities including swimming, boating, tractor rides, horse riding, games, and nature experiences. The variety helps keep different student groups active and entertained throughout the visit."
        },
        {
            name: "School Outing Places in Daund",
            description: "For schools planning an outdoor break from regular studies, Om Agro Tourism offers a combination of greenery, farm experiences, recreational activities, rural culture, and food in a group-friendly environment."
        },
        {
            name: "Adventure Picnic Spot in Daund  ",
            description: "Adventure-loving students can enjoy horse riding, tractor rides, jungle safari experiences, water activities, boating, and other outdoor recreation. These options add excitement and variety to a school picnic itinerary."
        },
        {
            name: "Nature Picnic Spot Near Daund",
            description: "The natural farm surroundings provide students with an opportunity to spend time around greenery while enjoying bird watching, farm exploration, outdoor activities, and peaceful surroundings that encourage appreciation for nature."
        },
        {
            name: "School Picnic Resort in Daund",
            description: "Om Agro Tourism combines recreational activities, agricultural experiences, natural surroundings, and food, making it a practical option for schools looking for a destination where students can spend an entire day together."
        },
        {
            name: "School Picnic Spot With Activities in Daund",
            description: "Students can participate in several activities such as swimming, boating, horse riding, tractor rides, bull cart rides, games, farm tours, and nature-based experiences, allowing schools to create a varied outing schedule."
        },
        {
            name: "School Picnic Spot With Food in Daund ",
            description: "School groups can combine outdoor activities with tasty homemade food in a peaceful farm environment. Having food as part of the picnic experience makes it easier to plan a comfortable full-day student outing."
        },
        {
            name: "Affordable School Picnic Packages in Daund",
            description: "Schools looking for a practical picnic experience can combine multiple recreational and educational activities with food and natural surroundings. This variety allows students to enjoy several experiences during one planned visit."
        },
        {
            name: "School Picnic Spots for Students in Daund",
            description: "Om Agro Tourism offers students an opportunity to enjoy farm-based learning, outdoor recreation, traditional rural activities, nature observation, and group entertainment in one refreshing picnic environment."
        },
        {
            name: "School Picnic Spot Near Daund Railway Station",
            description: "Schools planning an outing around Daund Railway Station can consider a destination offering farm experiences, recreational activities, nature exploration, traditional rides, and food for a memorable student picnic."
        },
        {
            name: "School Picnic Spot Near Patas",
            description: "Students from schools around Patas can enjoy a day of agricultural exposure, outdoor recreation, nature activities, traditional rural experiences, and group entertainment at Om Agro Tourism."
        },
        {
            name: "School Picnic Spot Near Yavat",
            description: "Om Agro Tourism provides school groups from around Yavat with a combination of farm learning, nature exploration, water activities, outdoor recreation, and rural experiences suitable for a one-day outing."
        },
        {
            name: "School Picnic Spot Near Kedgaon",
            description: "Schools near Kedgaon can plan an engaging picnic featuring farm tours, games, swimming, tractor rides, horse riding, nature observation, and other activities designed to make the student outing enjoyable."
        },
        {
            name: "One-Day Picnic Resort for Students in Daund",
            description: "A one-day student picnic at Om Agro Tourism can bring together agricultural learning, outdoor recreation, water activities, traditional rides, nature experiences, and homemade food for a balanced and memorable day."
        }
    ],

    tableData: [
        ["School Picnic Spot in Daund"],
        ["Best School Picnic Spots in Daund"],
        ["School Picnic Spot Near Daund"],
        ["One-Day School Picnic in Daund"],
        ["Educational Picnic Spots in Daund"],
        ["School Trip Places in Daund"],
        ["Kids’ Picnic Spots in Daund"],
        ["School Outing Places in Daund"],
        ["Adventure Picnic Spot in Daund  "],
        ["Nature Picnic Spot Near Daund"],
        ["School Picnic Resort in Daund"],
        ["School Picnic Spot With Activities in Daund"],
        ["School Picnic Spot With Food in Daund "],
        ["Affordable School Picnic Packages in Daund"],
        ["School Picnic Spots for Students in Daund"],
        ["School Picnic Spot Near Daund Railway Station"],
        ["School Picnic Spot Near Patas"],
        ["School Picnic Spot Near Yavat"],
        ["School Picnic Spot Near Kedgaon"],
        ["One-Day Picnic Resort for Students in Daund"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Practical Agricultural Learning",
            WhyChoosedescription: "Students can understand farming and rural life through direct exposure to farm surroundings, tours, and workshops. This practical approach can make a school outing educational while remaining enjoyable and interactive."
        },
        {
            WhyChooseheading: "Multiple Outdoor Experiences",
            WhyChoosedescription: "The destination offers several ways for students to stay engaged throughout the day, from water-based recreation and traditional rides to nature activities and farm experiences."
        },
        {
            WhyChooseheading: "Refreshing Natural Surroundings",
            WhyChoosedescription: "Green farm surroundings provide a pleasant change from classrooms and busy urban spaces. Students can spend time outdoors while observing nature, enjoying fresh surroundings, and participating in group activities."
        },
        {
            WhyChooseheading: "Traditional Village Activities",
            WhyChoosedescription: "Experiences such as bull cart rides and tractor rides allow children to discover aspects of rural life in an enjoyable way. These activities can add cultural interest to the school picnic."
        },
        {
            WhyChooseheading: "Balanced Learning and Fun",
            WhyChoosedescription: "Educational farm activities can be combined with swimming, boating, games, horse riding, and other recreational experiences, helping schools create a picnic schedule that offers both learning and entertainment."
        },
        {
            WhyChooseheading: "Suitable for School Groups",
            WhyChoosedescription: "The variety of attractions makes it possible for teachers and organizers to plan different activities throughout the day. Students can participate in group experiences while enjoying a relaxed outdoor environment."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty homemade food adds convenience and comfort to the school outing. Students can enjoy meals together in a peaceful farm setting while taking a break between different activities."
        },
        {
            WhyChooseheading: "Memorable Student Outing",
            WhyChoosedescription: "Farm exploration, nature observation, water activities, rural experiences, games, and outdoor recreation create plenty of opportunities for students to enjoy a memorable day with classmates and teachers."
        }
    ]
};









const faqData = [
    {
        question: "What makes Om Agri Tourism an attractive school picnic spot in Daund?",
        answer: "Om Agri Tourism creates a countryside setting where students can step away from their usual classroom surroundings and enjoy outdoor experiences. Farm greenery, open areas, recreational activities and traditional rural experiences together provide a distinctive environment for a school day trip."
    },
    {
        question: "Which activities can be included in a student picnic at Om Agri Tourism?",
        answer: "A school group can explore several activities such as boating, swimming, horse riding, bird watching, tractor rides and bull cart rides. The mix of energetic and nature-focused experiences gives teachers flexibility when planning a balanced picnic itinerary."
    },
    {
        question: "Is Om Agri Tourism suitable for schools planning an outing from Daund?",
        answer: "Schools looking for a different setting for their students can consider Om Agri Tourism for a planned farm excursion from Daund. Advance arrangements can help organize appropriate activities, meal breaks and group supervision according to the school's picnic plan."
    },
    {
        question: "How can students benefit from a countryside school picnic?",
        answer: "Spending time in a farm environment gives children an opportunity to observe nature and experience rural activities beyond their everyday surroundings. Experiences such as bird watching, tractor rides and bull cart rides can make the outing both enjoyable and informative."
    },
    {
        question: "Does Om Agri Tourism offer activities for an active school group?",
        answer: "Students who enjoy outdoor recreation can take part in options such as horse riding, boating and swimming at Om Agri Tourism. Activity selection can be based on age, suitability and the school's schedule, allowing the group to enjoy recreation while maintaining appropriate supervision."
    },
    {
        question: "Can children explore nature during a school picnic at Om Agri Tourism?",
        answer: "The farm surroundings provide an opportunity for students to spend time amid greenery and observe the natural environment. Bird watching can be particularly engaging for children, encouraging them to notice local birds and enjoy a quieter part of their picnic."
    },
    {
        question: "Are tractor rides and bull cart rides available for students?",
        answer: "Traditional experiences such as tractor rides and bull cart rides can add a unique rural element to the students' visit. These activities can help children experience countryside traditions firsthand while making the school picnic more interesting and memorable."
    },
    {
        question: "Can school groups enjoy water-based activities at Om Agri Tourism?",
        answer: "Boating and swimming can provide an exciting part of the outing for students when these activities are suitable for the group. Schools should follow relevant safety practices and ensure proper adult supervision so children can participate responsibly."
    },
    {
        question: "Can students have homemade food during their Om Agri Tourism visit?",
        answer: "Homemade food can make the picnic feel more traditional and comfortable, giving students and teachers a chance to enjoy a meal during their farm visit. A shared food break also offers the group some relaxed time before continuing with other activities."
    },
    {
        question: "Why choose Om Agri Tourism for a school picnic spot in Daund?",
        answer: "From outdoor recreation to farm-based experiences, Om Agri Tourism provides several ways for students to enjoy their day away from school. Horse riding, swimming, boating, bird watching, tractor rides and bull cart rides can collectively create a varied and memorable school picnic experience in Daund."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sachin Jagtap",
        feedback:
            "The students had an exciting time at Om Agri Tourism and enjoyed having so many outdoor experiences in one place. The bull cart ride and bird watching were memorable for them, while the farm surroundings gave everyone a peaceful space to relax. It was a successful school outing.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Neha Shinde",
        feedback:
            "Our school picnic at Om Agri Tourism was full of enjoyable moments. The children were enthusiastic about swimming and horse riding, and they also loved exploring the greenery around the farm. The combination of recreation and countryside activities made the day special for our group.",
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
  "name": "School Picnic Spot in Daund",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spot-in-daund.webp",
  "description": "Om Agro Tourism offers a refreshing School Picnic Spot in Daund for schools planning enjoyable, educational and nature-oriented outings for students. Schools searching for the Best School Picnic Spots in Daund can consider a peaceful agro-tourism environment where children can take a break from their regular classroom routine and enjoy open spaces, greenery, agricultural surroundings and outdoor recreation. A School Picnic Spot Near Daund can provide a convenient destination for schools and coordinators looking to arrange a memorable group outing without travelling to a distant location. One-Day School Picnic in Daund is suitable for student groups that want a complete day of recreation, nature exposure and group interaction without requiring an overnight stay. Educational Picnic Spots in Daund can make a school outing more meaningful by giving students opportunities to observe agricultural landscapes, plants, rural surroundings and nature through direct experiences beyond classroom lessons. School Trip Places in Daund can therefore combine fun with experiential learning, helping children develop curiosity, teamwork and awareness of their surroundings. Kids’ Picnic Spots in Daund can provide an open and refreshing environment where children can participate in age-appropriate activities, group games and outdoor recreation under suitable supervision. School Outing Places near Daund are also useful for annual picnics, class trips, student activity days and school excursions. Om Agro Tourism combines agriculture, greenery, countryside scenery and leisure experiences in a setting that can suit different student age groups. Teachers and school coordinators can plan activities according to the size of the group, age of the students and purpose of the visit. Students can enjoy nature observation, outdoor games, group recreation and shared moments with classmates while developing social interaction and teamwork. Seasonal visits provide changing countryside experiences, with monsoon bringing lush green surroundings, winter offering pleasant weather for outdoor activities and summer outings being planned around suitable timings. The destination can be considered for school annual picnics, educational excursions, children's group outings, nature trips and student recreation days. Schools from Daund and nearby areas can choose an agro-tourism destination when they want to combine entertainment, learning and a peaceful rural atmosphere. Om Agro Tourism provides an alternative to conventional urban picnic locations by bringing agricultural surroundings and outdoor leisure together. Students can enjoy a refreshing change from their daily routine while teachers can organize a structured outing that supports both recreation and experiential learning. With its nature-oriented setting and group-friendly possibilities, Om Agro Tourism can be a suitable choice for schools looking for a memorable picnic experience in and around Daund.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spot-in-daund"
  }
};






    return (
        <div>



<Helmet>
  <title>
    School Picnic Spot in Daund | Best Educational, Kids & One Day Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots in Daund for one-day student outings, educational trips, kids activities, nature experiences and memorable school group picnics."
  />

  <meta
    name="keywords"
    content="School Picnic Spot in Daund, Best School Picnic Spots in Daund, School Picnic Spot Near Daund, One-Day School Picnic in Daund, Educational Picnic Spots in Daund, School Trip Places in Daund, Kids Picnic Spots in Daund, School Outing Places Near Daund, school picnic places in Daund, school picnic spots near Daund, best school picnic places near Daund, school outing places in Daund, school trip near Daund, one day school trip near Daund, school picnic destination in Daund, school picnic resort near Daund, school group outing in Daund, educational picnic places near Daund, educational outing in Daund, educational trip near Daund, student picnic spot in Daund, student outing places near Daund, picnic places for school students in Daund, school picnic venue in Daund, school picnic location near Daund, school excursion in Daund, school excursion places near Daund, school nature trip near Daund, nature picnic spot for students near Daund, school group picnic in Daund, one day picnic for school students near Daund, one day outing for students in Daund, school activity resort near Daund, school picnic with activities in Daund, school picnic place with activities near Daund, agro tourism for school students near Daund, agro tourism school picnic near Daund, agri tourism for students near Daund, educational agro tourism near Daund, farm visit for school students near Daund, agricultural educational tour near Daund, rural educational trip near Daund, nature education outing near Daund, school picnic for children in Daund, kids picnic places near Daund, kids outing places in Daund, school annual picnic in Daund, school class picnic near Daund, school picnic venue with activities in Daund, student day outing near Daund, school tour destination in Daund, school recreational outing near Daund, school picnic resort with activities near Daund, best educational picnic spot near Daund, school picnic destination with nature near Daund, student nature outing near Daund, school day trip near Daund, school picnic resort for students near Daund, school group picnic destination near Daund, nature school picnic near Daund"
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
                            <img src='/images/keyword/54.jpg' alt='img' className='img-fluid' />
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

export default Schoolpicnicspotindaund;