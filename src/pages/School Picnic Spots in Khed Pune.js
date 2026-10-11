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

function SchoolPicnicSpotsInKhedPune() {


const cardData = {
    keyword: "School Picnic Spots in Khed Pune",
    headingDescription: "Om Agro Tourism is a suitable choice for schools searching for enjoyable and educational picnic experiences around Khed Pune. The farm-based setting combines nature, agriculture, outdoor recreation, water activities, group games, and food, creating a balanced environment for school groups, field trips, educational outings, and memorable one-day student picnics.",
    topPlaces: [
        {
            title: "Farm Tours and Workshops",
            description: "Farm tours and workshops at Om Agro Tourism give students an opportunity to understand farming, planting, harvesting, animal care, and rural life through direct observation. These interactive experiences can make school trips more educational while allowing children to explore the working farm environment."
        },
        {
            title: "Bull Cart Ride",
            description: "The traditional bull cart ride introduces students to an enjoyable aspect of rural Maharashtra while allowing them to experience a slower, traditional way of travelling through the farm. It can be an engaging group activity that connects recreation with cultural and rural learning."
        },
        {
            title: "Water Park Activities",
            description: "Water park activities provide an energetic recreation option for school groups looking to add fun and excitement to their picnic schedule. Students can enjoy water-based entertainment as part of a supervised outing while teachers organize the day around activities, meals, and group sessions."
        },
        {
            title: "Bird Watching",
            description: "Bird watching at Om Agro Tourism gives students a chance to observe birds in a natural farm environment and develop greater interest in biodiversity. Teachers can use the experience to discuss birds, habitats, nature conservation, and the importance of protecting local ecosystems."
        },
        {
            title: "Tractor Ride",
            description: "A tractor ride offers students a memorable introduction to agricultural surroundings and farm operations. The ride allows children to experience the farmland from a different perspective while learning about rural transportation, cultivation areas, and everyday activities associated with farming."
        },
        {
            title: "Horse Riding",
            description: "Horse riding adds an adventurous and interactive element to a school picnic at Om Agro Tourism. Students can enjoy an exciting outdoor experience while becoming familiar with horses and developing confidence through a supervised activity in the scenic farm surroundings."
        },
        {
            title: "Boating",
            description: "Boating provides students with a relaxing recreational experience surrounded by the natural setting of Om Agro Tourism. It can be included as part of a balanced school itinerary, giving children an opportunity to enjoy the water, observe their surroundings, and spend time together."
        },
        {
            title: "Swimming Pool",
            description: "The swimming pool offers a refreshing activity for school groups during a day picnic, especially when students want a break from outdoor games and farm exploration. The pool can add variety to the outing while teachers and coordinators manage activities according to the group schedule."
        },
        {
            title: "Jungle Safari",
            description: "The jungle safari provides students with an opportunity to explore the property's greenery and observe the natural environment more closely. It can support informal learning about plants, wildlife, habitats, and biodiversity while making the school outing more adventurous and engaging."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and outdoor games give school groups plenty of opportunities for teamwork, friendly competition, physical activity, and entertainment. Students can participate in suitable games such as cricket, badminton, volleyball, and other group activities during their picnic."
        }
    ],
    services: [
        {
            name: "School Picnic Spots in Khed Pune",
            description: "School picnic spots in Khed Pune provide students with opportunities to enjoy nature, outdoor games, educational activities, group recreation, and a refreshing break from their regular classroom environment."
        },
        {
            name: "Best School Picnic Spots in Khed Pune",
            description: "The best school picnic spots in Khed Pune can combine open surroundings, student-friendly activities, nature experiences, educational learning, food, and recreation to create an enjoyable day for school groups."
        },
        {
            name: "School Trip Places in Khed Pune",
            description: "School trip places in Khed Pune offer teachers options for creating meaningful excursions that bring together outdoor recreation, nature observation, practical learning, sightseeing, group activities, and memorable student experiences."
        },
        {
            name: "Educational Picnic Spots in Khed Pune",
            description: "Educational picnic spots in Khed Pune help students learn beyond textbooks through direct exposure to agriculture, nature, rural surroundings, environmental concepts, and interactive activities that make lessons more engaging."
        },
        {
            name: "One Day School Picnic Near Khed",
            description: "A one-day school picnic near Khed can be organized around a practical schedule including arrival, refreshments, nature activities, group games, educational sessions, water recreation, lunch, and supervised entertainment."
        },
        {
            name: "School Picnic Resorts Near Khed Pune",
            description: "School picnic resorts near Khed Pune can provide spacious environments for student groups, with opportunities to participate in outdoor activities, enjoy meals, explore nature, and spend quality time together under organized supervision."
        },
        {
            name: "School Picnic Places Near Rajgurunagar",
            description: "School picnic places near Rajgurunagar give educational institutions convenient options for planning student outings that combine nature, recreation, group games, educational experiences, food breaks, and outdoor exploration."
        },
        {
            name: "Educational Trip Places Near Rajgurunagar",
            description: "Educational trip places near Rajgurunagar can help schools connect classroom subjects with practical experiences involving nature, agriculture, geography, history, rural life, and environmental awareness."
        },
        {
            name: "Kids Picnic Spots in Khed Pune",
            description: "Kids picnic spots in Khed Pune offer children an enjoyable outdoor environment where they can participate in age-appropriate games, nature activities, group entertainment, and supervised recreational experiences with classmates."
        },
        {
            name: "School Outing Places Near Khed",
            description: "School outing places near Khed can provide students with a refreshing change of environment through outdoor recreation, nature exploration, group activities, educational interaction, and enjoyable meal breaks."
        },
        {
            name: "Adventure Picnic Spots Near Khed Pune",
            description: "Adventure picnic spots near Khed Pune can keep students actively involved through outdoor challenges, group games, nature exploration, recreational activities, and age-appropriate experiences designed around teamwork and participation."
        },
        {
            name: "Nature Picnic Spots Near Khed Pune",
            description: "Nature picnic spots near Khed Pune allow students to observe greenery, open landscapes, farmland, birds, plants, and seasonal surroundings while developing curiosity about the natural world and environmental conservation."
        },
        {
            name: "School Picnic Places Near Chakan",
            description: "School picnic places near Chakan provide convenient options for educational institutions looking for student-friendly outdoor destinations with nature, group activities, recreation, food, and opportunities for experiential learning."
        },
        {
            name: "School Picnic Places Near Pune Nashik Highway",
            description: "School picnic places near Pune Nashik Highway can be useful for schools planning accessible group outings, offering opportunities to combine educational activities, nature experiences, outdoor games, meals, and student entertainment."
        },
        {
            name: "Best Resorts for School Picnic Near Khed",
            description: "The best resorts for school picnic near Khed can offer a combination of spacious surroundings, recreational facilities, food arrangements, nature-based experiences, and group activities suitable for organized student outings."
        },
        {
            name: "School Picnic with Activities Near Khed Pune",
            description: "A school picnic with activities near Khed Pune gives students more ways to stay engaged through outdoor games, water recreation, farm experiences, nature walks, group challenges, and interactive educational sessions."
        },
        {
            name: "School Field Trip Places Near Khed",
            description: "School field trip places near Khed can turn academic concepts into practical learning by exposing students to agriculture, nature, rural environments, environmental topics, heritage, and interactive outdoor experiences."
        },
        {
            name: "Affordable School Picnic Packages in Khed Pune",
            description: "Affordable school picnic packages in Khed Pune help educational institutions plan organized outings with practical arrangements for meals, recreation, activities, and educational experiences while keeping the program suitable for larger student groups."
        },
        {
            name: "School Picnic Destination Near Rajgurunagar",
            description: "A school picnic destination near Rajgurunagar can provide students with a balanced day of learning and recreation, including nature observation, group games, outdoor activities, food, and opportunities to interact with their classmates."
        },
        {
            name: "One Day Educational Trip Near Khed Pune",
            description: "A one-day educational trip near Khed Pune can combine practical learning with recreation through agro-tourism, nature exploration, environmental awareness, outdoor games, group activities, and supervised student participation."
        },
        {
            name: "School Group Picnic Places Near Khed",
            description: "School group picnic places near Khed are suitable for larger student groups that need spacious areas for organized games, educational sessions, meals, nature activities, and group entertainment throughout a planned day outing."
        },
        {
            name: "School Picnic Spots Near Pimpri Chinchwad",
            description: "School picnic spots near Pimpri Chinchwad can provide educational institutions with convenient outdoor options where students can enjoy nature, farm-based experiences, recreational activities, group games, and a refreshing break from school."
        },
        {
            name: "School Picnic Places Near Talegaon Dabhade",
            description: "School picnic places near Talegaon Dabhade offer a mix of countryside surroundings and recreational opportunities that can support educational trips, student games, nature exploration, outdoor learning, and organized group entertainment."
        },
        {
            name: "School Picnic Spots Near Lonavala",
            description: "School picnic spots near Lonavala provide access to scenic hills, greenery, nature experiences, and recreational destinations that can make student excursions more interesting while allowing teachers to combine sightseeing with educational and group activities."
        },
        {
            name: "Agro Tourism for School Picnic Near Khed Pune",
            description: "Agro tourism for school picnic near Khed Pune gives students practical exposure to farming, rural life, food production, nature, traditional activities, and sustainable practices while creating an enjoyable learning experience outside the classroom."
        }
    ],
    tableData: [
        ["School Picnic Spots in Khed Pune"],
        ["Best School Picnic Spots in Khed Pune"],
        ["School Trip Places in Khed Pune"],
        ["Educational Picnic Spots in Khed Pune"],
        ["One Day School Picnic Near Khed"],
        ["School Picnic Resorts Near Khed Pune"],
        ["School Picnic Places Near Rajgurunagar"],
        ["Educational Trip Places Near Rajgurunagar"],
        ["Kids Picnic Spots in Khed Pune"],
        ["School Outing Places Near Khed"],
        ["Adventure Picnic Spots Near Khed Pune"],
        ["Nature Picnic Spots Near Khed Pune"],
        ["School Picnic Places Near Chakan"],
        ["School Picnic Places Near Pune Nashik Highway"],
        ["Best Resorts for School Picnic Near Khed"],
        ["School Picnic with Activities Near Khed Pune"],
        ["School Field Trip Places Near Khed"],
        ["Affordable School Picnic Packages in Khed Pune"],
        ["School Picnic Destination Near Rajgurunagar"],
        ["One Day Educational Trip Near Khed Pune"],
        ["School Group Picnic Places Near Khed"],
        ["School Picnic Spots Near Pimpri Chinchwad"],
        ["School Picnic Places Near Talegaon Dabhade"],
        ["School Picnic Spots Near Lonavala"],
        ["Agro Tourism for School Picnic Near Khed Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Convenient Khed Region Location",
            WhyChoosedescription: "A destination around the Khed region gives schools a practical setting for planning student outings while offering a refreshing rural environment where children can participate in recreation, nature activities, and educational experiences."
        },
        {
            WhyChooseheading: "Experiential Learning Opportunities",
            WhyChoosedescription: "Students can understand farming, nature, rural life, and environmental concepts through direct observation and participation, making the outing more meaningful than a conventional recreational trip."
        },
        {
            WhyChooseheading: "Wide Range of Student Activities",
            WhyChoosedescription: "Outdoor games, water recreation, farm experiences, group challenges, nature exploration, and traditional activities provide multiple ways for students to remain active, entertained, and involved throughout the picnic."
        },
        {
            WhyChooseheading: "Ideal for Educational Groups",
            WhyChoosedescription: "The setting can accommodate a structured school itinerary where teachers coordinate learning sessions, activity periods, meal breaks, recreation, and group movement according to the needs of their students."
        },
        {
            WhyChooseheading: "Farm-Based Learning Experience",
            WhyChoosedescription: "Agro-tourism introduces students to agriculture and rural traditions through practical experiences, helping them understand farming processes, food sources, natural resources, and sustainable practices in an engaging manner."
        },
        {
            WhyChooseheading: "Nature and Recreation Combined",
            WhyChoosedescription: "Green surroundings and open spaces create a balanced environment where students can explore nature, participate in outdoor games, relax with classmates, and enjoy recreational activities during the same outing."
        },
        {
            WhyChooseheading: "Suitable for Group Picnics",
            WhyChoosedescription: "Spacious activity areas and a variety of experiences make the destination suitable for school groups, allowing teachers and coordinators to divide students into manageable groups for different activities and sessions."
        },
        {
            WhyChooseheading: "Memorable School Excursion",
            WhyChoosedescription: "Combining practical education with games, food, nature, teamwork, and outdoor recreation gives students an opportunity to enjoy a memorable excursion while building friendships and learning through real-world experiences."
        }
    ]
};










const faqData = [
    {
        question: "Is Om Agri Tourism a suitable choice among school picnic spots in Khed Pune?",
        answer: "Om Agri Tourism offers a peaceful farm setting where students can enjoy open greenery, outdoor recreation and countryside experiences. The combination of nature and activities makes it an appealing option for schools looking for a refreshing picnic destination in Khed Pune."
    },
    {
        question: "What activities are available for students at Om Agri Tourism?",
        answer: "School groups visiting Om Agri Tourism can enjoy activities such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These options allow students to experience a mix of adventure, recreation and nature during their outing."
    },
    {
        question: "Can schools in Khed Pune organize a picnic at Om Agri Tourism?",
        answer: "Schools in Khed Pune and surrounding areas can consider Om Agri Tourism for a planned outdoor group outing. The farm environment provides students with a change of scenery where they can participate in suitable activities while spending quality time with classmates and teachers."
    },
    {
        question: "Why is Om Agri Tourism an interesting destination for a school outing?",
        answer: "The farm-based atmosphere gives students more than a conventional recreational experience. Tractor rides, bull cart rides, horse riding and bird watching introduce children to countryside surroundings, while activities such as swimming and boating provide additional opportunities for outdoor enjoyment."
    },
    {
        question: "Can students learn about rural experiences during a picnic at Om Agri Tourism?",
        answer: "A visit to Om Agri Tourism can give students an opportunity to experience aspects of rural life through farm surroundings and traditional activities. Bull cart rides and tractor rides can make the outing more engaging while giving children a different perspective on countryside living."
    },
    {
        question: "Is bird watching a good activity for school students at Om Agri Tourism?",
        answer: "Bird watching can be a calm and engaging activity for students visiting Om Agri Tourism. Observing birds in the natural surroundings encourages children to explore their environment and can add a simple educational element to an otherwise recreational school picnic."
    },
    {
        question: "Are swimming and boating available for school picnic groups?",
        answer: "Students can enjoy recreational experiences such as swimming and boating at Om Agri Tourism, subject to applicable guidelines and suitability. Schools should ensure that students follow safety instructions and remain appropriately supervised throughout water-related activities."
    },
    {
        question: "Can younger students also enjoy a picnic at Om Agri Tourism?",
        answer: "Younger students can enjoy suitable outdoor and nature-based experiences at Om Agri Tourism when activities are selected according to their age and abilities. Teachers and accompanying adults can help maintain proper supervision while students explore the farm and participate in appropriate activities."
    },
    {
        question: "Does Om Agri Tourism offer homemade food for school picnic visitors?",
        answer: "Homemade food can add a traditional touch to the outing at Om Agri Tourism, allowing students and teachers to enjoy a meal in a relaxed farm environment. Sharing food together can also provide a comfortable break between different activities during the picnic."
    },
    {
        question: "Why choose Om Agri Tourism for school picnic spots in Khed Pune?",
        answer: "Om Agri Tourism brings together greenery, farm surroundings, outdoor recreation and traditional countryside activities in one destination. With experiences including horse riding, swimming, boating, tractor rides, bull cart rides and bird watching, it can offer students a fun and varied school picnic experience in Khed Pune."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rahul Gaikwad",
        feedback:
            "Our school group enjoyed a memorable day at Om Agri Tourism. The students were excited about the boating and bull cart ride, and they also enjoyed spending time around the farm greenery. The countryside atmosphere made the outing feel fresh and different from a regular picnic.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Rutuja Pawar",
        feedback:
            "The school picnic at Om Agri Tourism was a wonderful experience for our students. They enjoyed the tractor ride, bird watching and other outdoor activities, while the homemade food added a nice traditional touch to the day. It was an enjoyable outing for our entire group.",
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
  "name": "School Picnic Spots in Khed Pune",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spots-in-khed-pune.webp",
  "description": "Om Agro Tourism offers School Picnic Spots in Khed Pune for schools planning enjoyable, educational and refreshing outings for students in a peaceful countryside environment. Schools searching for the Best School Picnic Spots in Khed Pune can choose an agro-tourism setting where children can take a break from their classroom routine and enjoy greenery, open spaces, agricultural surroundings and outdoor recreation. A school picnic provides students with an opportunity to spend quality time with classmates while developing teamwork, social interaction and memorable group experiences. School groups from Khed and surrounding areas can consider the destination for annual picnics, class outings, educational excursions and student activity days. The countryside atmosphere creates a refreshing alternative to crowded urban entertainment and allows children to experience a natural environment away from their everyday routine. Om Agro Tourism combines agricultural landscapes, greenery, open areas and recreational possibilities, giving students opportunities to enjoy nature while participating in suitable group activities. Teachers and school coordinators can plan the outing according to student age groups, group size and the objectives of the visit. Students can enjoy outdoor games, group recreation, nature observation and informal interaction with classmates while teachers supervise the planned schedule. The agro-tourism environment can also support experiential learning by introducing students to rural surroundings, farming-related landscapes, plants and aspects of agriculture that are difficult to experience inside a conventional classroom. Seasonal visits offer different countryside experiences, with monsoon bringing fresh greenery, winter providing pleasant weather for outdoor activities and summer outings benefiting from carefully selected timings. The destination can suit school annual picnics, educational trips, nature outings, class-level excursions and children's group recreation. Schools looking for a convenient one-day picnic destination can use the setting to combine learning, leisure and group bonding in a relaxed environment. Om Agro Tourism provides an alternative to conventional school outing locations by bringing agriculture, nature and outdoor recreation together. Students can create memorable moments with friends while experiencing a peaceful rural atmosphere, and teachers can organize activities suited to the educational and recreational goals of their school group. For schools searching for a student-friendly picnic destination in Khed Pune, the destination offers a balanced environment for fun, nature exposure and meaningful outdoor experiences.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spots-in-khed-pune"
  }
};




    return (
        <div>


<Helmet>
  <title>
    School Picnic Spots in Khed Pune | Best Student, Educational & Nature Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots in Khed Pune for student outings, educational trips, nature experiences, outdoor activities and memorable one-day school picnics."
  />

  <meta
    name="keywords"
    content="School Picnic Spots in Khed Pune, Best School Picnic Spots in Khed Pune, School Picnic Places in Khed Pune, One Day School Picnic in Khed Pune, School Picnic Resorts in Khed Pune, Educational Picnic Spot in Khed Pune, school picnic places near Khed Pune, best school picnic places in Khed Pune, school outing places in Khed Pune, school trip in Khed Pune, one day school trip in Khed Pune, school picnic destination in Khed Pune, school picnic resort in Khed Pune, school group outing in Khed Pune, educational picnic places in Khed Pune, educational outing in Khed Pune, educational trip in Khed Pune, student picnic spot in Khed Pune, student outing places in Khed Pune, picnic places for school students in Khed Pune, school picnic venue in Khed Pune, school picnic location in Khed Pune, school excursion in Khed Pune, school excursion places in Khed Pune, school nature trip in Khed Pune, nature picnic spot for students in Khed Pune, school group picnic in Khed Pune, one day picnic for school students in Khed Pune, one day outing for students in Khed Pune, school activity resort in Khed Pune, school picnic with activities in Khed Pune, school picnic place with activities in Khed Pune, agro tourism for school students in Khed Pune, agro tourism school picnic in Khed Pune, agri tourism for students in Khed Pune, educational agro tourism in Khed Pune, farm visit for school students in Khed Pune, agricultural educational tour in Khed Pune, rural educational trip in Khed Pune, nature education outing in Khed Pune, school picnic for children in Khed Pune, kids picnic places in Khed Pune, kids outing places in Khed Pune, school annual picnic in Khed Pune, school class picnic in Khed Pune, school picnic venue with activities in Khed Pune, student day outing in Khed Pune, school tour destination in Khed Pune, school recreational outing in Khed Pune, school picnic resort with activities in Khed Pune, best educational picnic spot in Khed Pune, school picnic destination with nature in Khed Pune, student nature outing in Khed Pune, school day trip in Khed Pune, school picnic resort for students in Khed Pune, school group picnic destination in Khed Pune"
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
                            <img src='/images/keyword/51.jpg' alt='img' className='img-fluid' />
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

export default SchoolPicnicSpotsInKhedPune;