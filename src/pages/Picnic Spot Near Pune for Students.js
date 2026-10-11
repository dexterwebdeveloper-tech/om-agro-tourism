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

function Picnicspotnearpuneforstudent() {

const cardData = {
    keyword: "Picnic Spot Near Pune for Students",
    headingDescription: "Om Agro Tourism is a student-friendly picnic destination near Pune where school and college groups can enjoy an active one day outing in a countryside environment. The destination combines adventure, group recreation, traditional rural experiences, water activities, food, and educational farm experiences, making it suitable for students looking for an affordable and activity-filled picnic.",
    topPlaces: [
        {
            title: "Jungle Safari",
            description: "Jungle Safari adds an adventurous dimension to a student picnic and gives groups an opportunity to enjoy an outdoor experience together. It can make the outing more exciting for students who prefer exploration and adventure over a conventional picnic."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride introduces students to a traditional countryside experience and provides an enjoyable group activity in a rural setting. It offers something distinctive for school and college groups looking for a different kind of day outing."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride gives student groups a glimpse into traditional rural life while creating an enjoyable shared experience. The activity can add cultural and countryside interest to a school or college picnic itinerary."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games are useful for group recreation, encouraging students to participate together and enjoy friendly activities throughout the day. They provide variety and help keep a large school or college group engaged."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding provides an exciting outdoor activity for students who want to include adventure in their picnic plans. The experience adds energy to the outing while allowing groups to enjoy the destination's rural surroundings."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities bring refreshing entertainment to the student outing and can be a lively addition to a one day picnic. They offer students an opportunity to relax, have fun, and enjoy water-based recreation with their group."
        },
        {
            title: "Boating",
            description: "Boating provides a relaxed group activity where students can enjoy time together around the water. It adds another type of experience to the itinerary and provides a pleasant break between more energetic activities."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops make the picnic more meaningful by introducing students to agriculture, rural surroundings, and practical countryside experiences. The activity can complement educational school and college outings."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food gives student groups a convenient traditional dining experience during their outing. Enjoying food at the destination helps make the picnic more comfortable while adding a local and homely touch to the day."
        },
        {
            title: "Swimming Pool",
            description: "Swimming Pool access gives students a refreshing recreational option during the picnic. It can be included as part of an active itinerary alongside games, water activities, adventure experiences, and group recreation."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Pune for Students",
            description: "Om Agro Tourism offers a student-friendly countryside picnic experience near Pune with group activities, adventure attractions, rural experiences, water recreation, food, and outdoor entertainment."
        },
        {
            name: "Best Picnic Spot Near Pune for Students",
            description: "Students looking for a varied picnic destination can enjoy multiple attractions at Om Agro Tourism, making it suitable for school groups, college groups, friends, and organized student outings."
        },
        {
            name: "One Day Picnic Spot Near Pune for Students",
            description: "A one day student picnic can include adventure, games, water recreation, food, traditional rides, and educational farm experiences without requiring students to travel between different attractions."
        },
        {
            name: "Student Picnic Places Near Pune",
            description: "Om Agro Tourism provides an alternative to conventional student picnic places by combining countryside surroundings with group activities, adventure experiences, food, and rural attractions."
        },
        {
            name: "Picnic Places Near Pune for College Students",
            description: "College students can enjoy an activity-filled outing featuring adventure, games, water activities, traditional rural experiences, and group recreation in an open countryside environment."
        },
        {
            name: "Budget Picnic Spot Near Pune for Students",
            description: "For students planning a budget-friendly outing, having several recreational experiences at one destination can make the day convenient while providing plenty of activities for the entire group."
        },
        {
            name: "Affordable Picnic Places Near Pune for Students",
            description: "An affordable student picnic can combine food, games, adventure, rural activities, and water-based entertainment at one location, helping groups enjoy a fuller day without multiple travel stops."
        },
        {
            name: "One Day Trip Near Pune for Students",
            description: "A one day trip from Pune gives students an opportunity to step away from their regular academic routine and enjoy outdoor activities, adventure, group recreation, and countryside experiences."
        },
        {
            name: "Student One Day Outing Near Pune",
            description: "Students can plan a memorable one day outing with a combination of games, traditional rides, water recreation, food, adventure, and farm-based experiences suitable for group participation."
        },
        {
            name: "Best One Day Trip Near Pune for Students",
            description: "Om Agro Tourism offers a varied itinerary for students who want their one day trip to include more than sightseeing, with opportunities for active recreation, adventure, food, and educational rural experiences."
        },
        {
            name: "Adventure Picnic Spot Near Pune for Students",
            description: "Students interested in adventure can enjoy activities such as Jungle Safari and Horse Riding along with other outdoor experiences, creating a more energetic alternative to a standard picnic."
        },
        {
            name: "Picnic Resort Near Pune for Students",
            description: "A countryside picnic resort experience near Pune gives student groups access to multiple activities and recreational options within one destination, making group planning easier."
        },
        {
            name: "Student Friendly Resorts Near Pune",
            description: "Om Agro Tourism offers an environment where students can participate in group games, water activities, adventure experiences, traditional rides, food, and countryside activities during their outing."
        },
        {
            name: "Picnic Places Near Pune with Activities for Students",
            description: "Students can enjoy a wide range of activities including games, water recreation, traditional rural rides, adventure attractions, and farm experiences, making the outing more engaging for groups."
        },
        {
            name: "Group Picnic Spot Near Pune for Students",
            description: "The destination is suitable for student groups because multiple activities can be enjoyed at the same location, allowing classmates and friends to spend the day participating together."
        },
        {
            name: "School Picnic Spot Near Pune",
            description: "Schools can plan an engaging picnic with Farm Tours and Workshops, games, rural activities, water recreation, food, and outdoor experiences that combine entertainment with educational value."
        },
        {
            name: "College Picnic Spot Near Pune",
            description: "College groups can enjoy an active day featuring adventure, water activities, games, traditional rides, food, and open-air recreation, making the destination suitable for student group outings."
        },
        {
            name: "Nature Picnic Spot Near Pune for Students",
            description: "The countryside environment gives students a refreshing change from classrooms and city surroundings, providing opportunities to enjoy open spaces, rural activities, and outdoor recreation."
        },
        {
            name: "Picnic Resort Near Pune with Activities",
            description: "Om Agro Tourism combines the convenience of a picnic destination with multiple activities, including games, water recreation, adventure experiences, rural rides, and farm-based attractions."
        },
        {
            name: "Picnic Spot Near Pune with Food and Activities",
            description: "Students can enjoy a complete outing with Tasty Homemade Food alongside games, adventure, water activities, traditional rural experiences, and other attractions available at the destination."
        },
        {
            name: "Best Student Outing Places Near Pune",
            description: "For students comparing outing destinations near Pune, Om Agro Tourism provides a broad selection of group-friendly activities that can keep a school or college group engaged throughout the day."
        },
        {
            name: "Group Outing Places Near Pune for Students",
            description: "Student groups can enjoy shared experiences through games, adventure activities, traditional rides, water recreation, farm experiences, and food, making the destination suitable for organized group outings."
        }
    ],
    tableData: [
        ["Picnic Spot Near Pune for Students"],
        ["Best Picnic Spot Near Pune for Students"],
        ["One Day Picnic Spot Near Pune for Students"],
        ["Student Picnic Places Near Pune"],
        ["Picnic Places Near Pune for College Students"],
        ["Budget Picnic Spot Near Pune for Students"],
        ["Affordable Picnic Places Near Pune for Students"],
        ["One Day Trip Near Pune for Students"],
        ["Student One Day Outing Near Pune"],
        ["Best One Day Trip Near Pune for Students"],
        ["Adventure Picnic Spot Near Pune for Students"],
        ["Picnic Resort Near Pune for Students"],
        ["Student Friendly Resorts Near Pune"],
        ["Picnic Places Near Pune with Activities for Students"],
        ["Group Picnic Spot Near Pune for Students"],
        ["School Picnic Spot Near Pune"],
        ["College Picnic Spot Near Pune"],
        ["Nature Picnic Spot Near Pune for Students"],
        ["Picnic Resort Near Pune with Activities"],
        ["Picnic Spot Near Pune with Food and Activities"],
        ["Best Student Outing Places Near Pune"],
        ["Group Outing Places Near Pune for Students"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Designed for Group Outings",
            WhyChoosedescription: "The destination brings several group-friendly attractions together, making it easier for school and college groups to spend the day participating in shared activities rather than splitting into different locations."
        },
        {
            WhyChooseheading: "Adventure for Students",
            WhyChoosedescription: "Jungle Safari and Horse Riding add excitement to the outing and provide students with outdoor experiences that can make a one day picnic more memorable and energetic."
        },
        {
            WhyChooseheading: "Educational Farm Experience",
            WhyChoosedescription: "Farm Tours and Workshops give students an opportunity to explore rural surroundings and understand agricultural activities, adding educational value to an otherwise recreational picnic."
        },
        {
            WhyChooseheading: "Traditional Rural Activities",
            WhyChoosedescription: "Bull Cart Ride and Tractor Ride allow students to experience countryside activities that are different from the entertainment usually available in urban areas, adding cultural interest to the trip."
        },
        {
            WhyChooseheading: "Plenty of Recreation",
            WhyChoosedescription: "Indoor and Outdoor Games offer group-friendly entertainment where students can participate together, enjoy friendly competition, and keep the picnic active throughout the day."
        },
        {
            WhyChooseheading: "Refreshing Water Fun",
            WhyChoosedescription: "Swimming Pool and Water Park Activities provide students with refreshing recreation and create opportunities to relax and have fun together during the picnic."
        },
        {
            WhyChooseheading: "Food at the Destination",
            WhyChoosedescription: "Tasty Homemade Food adds convenience for school and college groups by providing a traditional dining experience as part of the overall picnic rather than requiring students to arrange food separately."
        },
        {
            WhyChooseheading: "Countryside Environment",
            WhyChoosedescription: "The open rural setting provides students with a welcome break from classrooms, traffic, and city routines, creating a refreshing atmosphere for a school picnic, college outing, or student group trip."
        }
    ]
};



const faqData = [
    {
        question: "What makes Om Agri Tourism a good picnic spot near Pune for students?",
        answer: "Students can enjoy a break from the classroom while experiencing outdoor recreation and rural surroundings at Om Agri Tourism. Swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and farm-based experiences can make the outing both enjoyable and different from a regular city picnic."
    },
    {
        question: "Which activities can students enjoy during a picnic at Om Agri Tourism?",
        answer: "A student group can participate in activities such as swimming, boating, horse riding, tractor rides and bull cart rides, subject to the applicable group arrangements and supervision. Bird watching and exploring the farm environment can add a nature-focused element to the educational outing."
    },
    {
        question: "Can schools organize a one day student picnic at Om Agri Tourism near Pune?",
        answer: "Schools can plan an educational day trip around the farm setting, outdoor activities and rural experiences available at the destination. Teachers can structure the schedule with activity sessions, meal breaks and supervised nature-based experiences so students get time for both recreation and learning."
    },
    {
        question: "How can a student group make the most of an agro tourism picnic near Pune?",
        answer: "A well-planned school outing can combine recreational activities with opportunities to understand rural surroundings. Students can participate in farm experiences, observe birds and learn about countryside life while also enjoying selected outdoor activities and sharing meals with classmates."
    },
    {
        question: "Is Om Agri Tourism suitable for educational trips and school groups?",
        answer: "The farm environment can provide students with experiences beyond the classroom by introducing them to agriculture, nature and traditional rural activities. Guided farm experiences, bird watching, tractor rides and bull cart rides can complement recreational activities and encourage students to observe and learn through direct experience."
    },
    {
        question: "What should teachers consider when planning a student picnic at Om Agri Tourism?",
        answer: "Teachers and coordinators should consider the students' age groups, group size, activity requirements, meal arrangements and supervision needs before finalizing the itinerary. Water-based and adventure activities should always follow the venue's safety instructions and appropriate adult supervision."
    },
    {
        question: "Can younger students enjoy a picnic at Om Agri Tourism near Pune?",
        answer: "Younger students can experience age-appropriate activities and enjoy the open farm environment while learning about rural life. Nature observation, bird watching, farm experiences and suitable rides can provide engaging alternatives to classroom learning, with teachers and guardians maintaining close supervision."
    },
    {
        question: "What learning opportunities can students get from an agro tourism visit?",
        answer: "An agro tourism visit can introduce students to farming practices, rural culture, natural surroundings and traditional ways of life. Observing the farm, learning about agricultural activities and experiencing countryside rides can turn the picnic into a combination of recreation, environmental awareness and experiential learning."
    },
    {
        question: "Are meals available for students during a picnic at Om Agri Tourism?",
        answer: "Food arrangements can be included as part of the school's picnic planning, with the destination offering homemade food and school picnic packages. Coordinators should confirm the latest package details, meal timings and requirements with Om Agri Tourism before the group's visit."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Pune for students?",
        answer: "Om Agri Tourism combines educational farm experiences, nature and outdoor recreation in a countryside environment. Students can enjoy activities such as swimming, boating, horse riding, tractor rides and bull cart rides while also exploring agriculture and rural surroundings, making the outing suitable for schools seeking both fun and experiential learning."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Dinesh Pawar",
        feedback:
            "The students were excited from the moment they reached Om Agri Tourism because the outing was very different from their usual school activities. Farm experiences, tractor rides and bird watching gave them something educational to explore, while the outdoor activities kept the group entertained. The teachers also appreciated having a countryside setting for the trip.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Kavya Deshmukh",
        feedback:
            "Seeing the students interact with the farm environment was the highlight of our educational picnic. They enjoyed the traditional bull cart ride and horse riding, and several students were particularly interested in observing birds and learning about rural surroundings. The combination of learning, recreation and group time made the day worthwhile.",
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
  "name": "Picnic Spot Near Pune for Students",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-pune-for-students.webp",
  "description": "Picnic Spot Near Pune for Students is a practical choice for schools, colleges, student groups, educational institutions, and youth groups looking for a refreshing one-day outing away from the regular classroom or campus environment. Om Agro Tourism offers an agro-tourism setting where students can spend quality time together in a peaceful outdoor atmosphere while enjoying a change from their everyday academic routine. A Best Picnic Spot Near Pune for Students can be considered for school picnics, college outings, educational group visits, student gatherings, and recreational day trips. The One Day Picnic Spot Near Pune for Students is especially suitable for groups that want to enjoy a full-day experience without arranging an overnight stay. Students searching for Student Picnic Places Near Pune can consider an outdoor destination where classmates can interact, relax, participate in group activities, and create memorable experiences together. Picnic Places Near Pune for College Students can also be useful for college departments, student associations, youth groups, and faculty-organized outings. A Budget Picnic Spot Near Pune can be considered by institutions and student groups looking for a more practical outing option while planning their trip according to their group size and requirements. Om Agro Tourism provides a countryside-inspired environment that offers students a refreshing break from city surroundings and routine academic schedules. The destination can be considered by groups travelling from Pune city, Pimpri Chinchwad, Kalyani Nagar, Viman Nagar, Kharadi, Hadapsar, Wagholi, Baner, Aundh, Kothrud, Wakad, Hinjawadi, Chakan, Talegaon, and other nearby areas. School teachers and coordinators can plan a group picnic where students have opportunities to spend time together in an open and relaxed environment. College students can also select the destination for department outings, fresher gatherings, farewell outings, annual group trips, or casual student picnics. A One Day Picnic Resort Near Pune for Students can be a convenient option when the group wants a dedicated day-outing destination rather than visiting multiple crowded city locations. Student groups can organize their visit based on their schedule, group size, and preferred picnic requirements. The agro-tourism atmosphere also gives students a chance to experience a different setting from urban campuses while spending valuable time with classmates and friends. Whether the requirement is a school picnic, college picnic, budget student outing, educational group visit, or recreational day trip, Om Agro Tourism offers a suitable countryside concept for student groups looking for an enjoyable one-day experience near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-pune-for-students"
  }
};







    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Pune for Students | Best Student Picnic & One Day Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Find a Picnic Spot Near Pune for Students for school picnics, college outings, student groups and budget-friendly one-day trips in a peaceful agro-tourism setting."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Pune for Students, Best Picnic Spot Near Pune for Students, One Day Picnic Spot Near Pune for Students, Student Picnic Places Near Pune, Picnic Places Near Pune for College Students, Budget Picnic Spot Near Pune, Budget Picnic Places Near Pune for Students, Student Picnic Spot Near Pune, School Picnic Spot Near Pune, School Picnic Places Near Pune, College Picnic Spot Near Pune, College Picnic Places Near Pune, One Day Picnic Near Pune for Students, One Day Picnic Places Near Pune for Students, Best Student Picnic Places Near Pune, Affordable Picnic Spot Near Pune, Affordable Picnic Places Near Pune, Picnic Resort Near Pune for Students, One Day Picnic Resort Near Pune for Students, Student Outing Places Near Pune, Student Group Outing Near Pune, School Outing Places Near Pune, College Outing Places Near Pune, Educational Picnic Spot Near Pune, Educational Outing Near Pune, Group Picnic Spot Near Pune, Student Day Trip Near Pune, One Day Trip Near Pune for Students, Weekend Picnic Near Pune for Students, Picnic Places Around Pune for Students, Family and Student Picnic Near Pune, Agro Tourism Near Pune for Students, Agro Tourism Picnic Near Pune, Best One Day Outing Near Pune, Budget One Day Trip Near Pune, Picnic Destination Near Pune, Student Picnic Resort Near Pune"
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
                            <img src='/images/keyword/130.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearpuneforstudent;