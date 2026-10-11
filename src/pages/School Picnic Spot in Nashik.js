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

function SchoolPicnicSpotInNashik() {


const cardData = {
    keyword: "School Picnic Spot in Nashik",
    headingDescription: "Om Agro Tourism offers a refreshing school picnic experience for groups looking beyond the usual Nashik outing. Its farm setting combines educational farm experiences, nature, water activities, traditional rides, outdoor recreation, and wholesome food, making it suitable for one-day school picnics, student outings, field trips, and educational group visits.",
    topPlaces: [
        {
            title: "Horse Riding",
            description: "Horse riding adds an exciting outdoor experience to a school picnic at Om Agro Tourism. Students can enjoy interacting with horses and experiencing a supervised ride through the scenic farm surroundings, creating an enjoyable activity that combines recreation, confidence building, and outdoor exploration."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty homemade food gives school groups an opportunity to enjoy fresh and comforting meals during their picnic. The farm-style dining experience can complement a full day of activities while introducing students to traditional food and the connection between farming and everyday meals."
        },
        {
            title: "Jungle Safari",
            description: "The jungle safari allows students to explore the greener areas of Om Agro Tourism and observe the natural surroundings more closely. It can make the outing more adventurous while encouraging children to notice plants, wildlife, habitats, and the importance of protecting natural environments."
        },
        {
            title: "Tractor Ride",
            description: "A tractor ride gives students a fun introduction to farm life and agricultural surroundings. The ride takes children through farmland while offering an interesting perspective of cultivation areas and rural activities, making it a memorable combination of recreation and practical learning."
        },
        {
            title: "Swimming Pool",
            description: "The swimming pool provides a refreshing recreational option during a school picnic, giving students time to enjoy water-based fun within the farm environment. It can be included alongside games, educational activities, meals, and other experiences as part of a balanced day itinerary."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm tours and workshops help students understand how a working farm operates through exposure to planting, harvesting, animal care, and agricultural practices. These experiences make a school outing more meaningful by connecting classroom concepts with real-world farming."
        },
        {
            title: "Boating",
            description: "Boating offers students a peaceful yet enjoyable activity within the natural surroundings of Om Agro Tourism. A boat ride can provide a relaxing break between other picnic activities while encouraging students to appreciate the water environment and spend quality time with their group."
        },
        {
            title: "Water Park Activities",
            description: "Water park activities bring an energetic element to school picnics with water-based entertainment suitable for group recreation. Students can enjoy an exciting activity session while teachers and coordinators arrange the day's schedule around meals, games, educational experiences, and supervised participation."
        },
        {
            title: "Bull Cart Ride",
            description: "The traditional bull cart ride introduces students to an authentic rural experience at Om Agro Tourism. This leisurely activity allows children to experience a traditional form of transportation while exploring the farm and learning about aspects of village life and rural culture."
        },
        {
            title: "Bird Watching",
            description: "Bird watching gives students an opportunity to observe different birds in their natural surroundings and develop greater curiosity about biodiversity. Teachers can connect the activity with lessons about habitats, food chains, environmental conservation, and the importance of protecting local ecosystems."
        }
    ],
    services: [
        {
            name: "School Picnic Spot in Nashik",
            description: "School picnic spot in Nashik searches can lead groups toward enjoyable outdoor destinations where students can experience nature, recreation, educational activities, food, and memorable group experiences away from the classroom."
        },
        {
            name: "School Picnic Spots Near Nashik",
            description: "School picnic spots near Nashik can provide student groups with a refreshing environment for outdoor games, nature exploration, educational activities, group entertainment, and a well-planned day outing."
        },
        {
            name: "Best School Picnic Spot in Nashik",
            description: "A best school picnic spot in Nashik can combine educational learning with recreation through farm experiences, nature activities, water-based fun, group games, traditional activities, and comfortable meal arrangements."
        },
        {
            name: "One-Day School Picnic Near Nashik",
            description: "A one-day school picnic near Nashik can be planned with a balanced schedule covering arrival, refreshments, educational activities, outdoor recreation, water activities, lunch, group entertainment, and departure."
        },
        {
            name: "Educational Picnic Spots in Nashik",
            description: "Educational picnic spots in Nashik allow students to learn outside traditional classrooms through practical experiences involving agriculture, nature, rural surroundings, environmental awareness, and interactive group activities."
        },
        {
            name: "School Trip Places in Nashik",
            description: "School trip places in Nashik give teachers opportunities to create meaningful excursions that combine sightseeing, outdoor recreation, educational discussions, nature observation, group activities, and student-friendly experiences."
        },
        {
            name: "Kids’ Picnic Spots in Nashik",
            description: "Kids’ picnic spots in Nashik can offer children open spaces and engaging activities where they can enjoy outdoor games, nature experiences, water recreation, and supervised group entertainment with classmates."
        },
        {
            name: "School Outing Places Near Nashik",
            description: "School outing places near Nashik provide a refreshing change from regular school surroundings, allowing students to participate in nature exploration, group games, farm activities, food breaks, and recreational experiences."
        },
        {
            name: "Adventure Picnic Spot in Nashik",
            description: "An adventure picnic spot in Nashik can make a student outing more exciting through active recreation, outdoor challenges, nature exploration, traditional rides, water activities, and team-oriented experiences."
        },
        {
            name: "Nature Picnic Spot Near Nashik",
            description: "A nature picnic spot near Nashik gives students opportunities to observe greenery, farmland, birds, plants, open landscapes, and natural surroundings while developing curiosity and awareness about the environment."
        },
        {
            name: "School Picnic Resort in Nashik",
            description: "A school picnic resort in Nashik can provide organized spaces for student groups along with recreational activities, food arrangements, nature experiences, and facilities that support a comfortable full-day school outing."
        },
        {
            name: "School Picnic Spot With Activities in Nashik",
            description: "A school picnic spot with activities in Nashik gives students multiple ways to stay engaged through water recreation, farm tours, outdoor games, traditional rides, nature experiences, and interactive group activities."
        },
        {
            name: "School Picnic Spot With Food Near Nashik",
            description: "A school picnic spot with food near Nashik can make group planning easier by combining recreational activities with convenient meal arrangements, allowing students to enjoy a complete outing without separating food and entertainment plans."
        },
        {
            name: "Affordable School Picnic Packages in Nashik",
            description: "Affordable school picnic packages in Nashik can help educational institutions organize enjoyable group outings with practical arrangements for activities, meals, recreation, and educational experiences suitable for student groups."
        },
        {
            name: "School Picnic Spot Near Nashik Road",
            description: "A school picnic spot near Nashik Road can be considered by schools looking for an outdoor destination where students can enjoy nature, group recreation, farm activities, meals, and educational experiences during a planned day trip."
        },
        {
            name: "School Picnic Spots Near Trimbakeshwar",
            description: "School picnic spots near Trimbakeshwar can provide students with opportunities to enjoy nature-based surroundings, outdoor activities, educational experiences, group games, and a refreshing excursion away from their regular classroom environment."
        },
        {
            name: "School Picnic Places Near Igatpuri",
            description: "School picnic places near Igatpuri can be suitable for educational groups looking for greenery, outdoor recreation, nature observation, group activities, and a peaceful environment for a memorable student outing."
        },
        {
            name: "School Picnic Spot Near Sinnar",
            description: "A school picnic spot near Sinnar can offer educational institutions an opportunity to organize a structured day outing involving nature, recreation, farm experiences, food, group games, and interactive activities for students."
        },
        {
            name: "School Picnic Spot Near Gangapur Road",
            description: "A school picnic spot near Gangapur Road can be considered for student groups seeking an outdoor experience with nature, recreational activities, food, group entertainment, and practical learning opportunities."
        },
        {
            name: "Best One-Day Picnic Resort for Students in Nashik",
            description: "The best one-day picnic resort for students in Nashik can offer a combination of educational activities, nature experiences, water recreation, outdoor games, traditional farm activities, and meal arrangements for a complete day outing."
        },
        {
            name: "School Picnic Spot Near Nashik",
            description: "A school picnic spot near Nashik can give student groups a convenient setting for outdoor recreation, educational activities, nature exploration, food, teamwork, and memorable experiences with classmates."
        },
        {
            name: "Best School Picnic Spots Near Nashik",
            description: "The best school picnic spots near Nashik can provide a balanced combination of student-friendly recreation, nature, educational activities, water-based entertainment, group games, and organized picnic facilities."
        },
        {
            name: "One-Day School Picnic Near Nashik",
            description: "One-day school picnic near Nashik experiences can be planned around educational sessions, farm exploration, outdoor games, water activities, meals, traditional rides, and supervised group recreation."
        },
        {
            name: "Educational Picnic Spots Near Nashik",
            description: "Educational picnic spots near Nashik help students gain practical knowledge through farm tours, nature observation, rural experiences, environmental learning, and interactive activities outside the conventional classroom."
        },
        {
            name: "School Trip Places Near Nashik",
            description: "School trip places near Nashik offer opportunities for teachers to combine learning and recreation through nature exploration, outdoor activities, group games, agricultural experiences, and educational interactions."
        },
        {
            name: "Kids’ Picnic Spot Near Nashik",
            description: "A kids’ picnic spot near Nashik can provide children with enjoyable outdoor experiences through games, water activities, farm exploration, traditional rides, nature observation, and supervised group entertainment."
        },
        {
            name: "School Outing Places Near Nashik",
            description: "School outing places near Nashik can provide students with a refreshing day away from school through outdoor recreation, educational activities, nature experiences, food, and opportunities for teamwork."
        },
        {
            name: "Adventure Picnic Spots Near Nashik",
            description: "Adventure picnic spots near Nashik can keep students actively involved through outdoor activities, water recreation, farm-based experiences, traditional rides, nature exploration, and group challenges."
        },
        {
            name: "Nature Picnic Spot Near Nashik",
            description: "A nature picnic spot near Nashik provides students with opportunities to appreciate greenery, farmland, birds, plants, open spaces, and peaceful surroundings while developing greater interest in environmental awareness."
        },
        {
            name: "School Picnic Resort Near Nashik",
            description: "A school picnic resort near Nashik can provide a structured environment for student groups with recreational facilities, nature-based activities, food arrangements, and spaces for organized educational and entertainment sessions."
        },
        {
            name: "School Picnic Spot With Activities Near Nashik",
            description: "A school picnic spot with activities near Nashik can keep students engaged with farm tours, water activities, outdoor games, traditional rides, nature experiences, and other group-friendly recreational options."
        },
        {
            name: "School Picnic Spot With Food Near Nashik",
            description: "A school picnic spot with food near Nashik allows schools to combine student recreation with convenient meal arrangements, making it easier to organize a complete outing involving activities, educational sessions, and group breaks."
        },
        {
            name: "Affordable School Picnic Packages Near Nashik",
            description: "Affordable school picnic packages near Nashik can help schools arrange practical group outings with activities, meals, recreation, nature experiences, and educational sessions while maintaining a suitable structure for students."
        }
    ],
    tableData: [
        ["School Picnic Spot in Nashik "],
        ["School Picnic Spots Near Nashik "],
        ["Best School Picnic Spot in Nashik "],
        ["One-Day School Picnic Near Nashik "],
        ["Educational Picnic Spots in Nashik "],
        ["School Trip Places in Nashik"],
        ["Kids’ Picnic Spots in Nashik"],
        ["School Outing Places Near Nashik"],
        ["Adventure Picnic Spot in Nashik "],
        ["Nature Picnic Spot Near Nashik"],
        ["School Picnic Resort in Nashik"],
        ["School Picnic Spot With Activities in Nashik"],
        ["School Picnic Spot With Food Near Nashik"],
        ["Affordable School Picnic Packages in Nashik"],
        ["School Picnic Spot Near Nashik Road"],
        ["School Picnic Spots Near Trimbakeshwar "],
        ["School Picnic Places Near Igatpuri"],
        ["School Picnic Spot Near Sinnar"],
        ["School Picnic Spot Near Gangapur Road"],
        ["Best One-Day Picnic Resort for Students in Nashik"],
        ["School Picnic Spot Near Nashik "],
        ["Best School Picnic Spots Near Nashik "],
        ["One-Day School Picnic Near Nashik"],
        ["Educational Picnic Spots Near Nashik"],
        ["School Trip Places Near Nashik"],
        ["Kids’ Picnic Spot Near Nashik"],
        ["School Outing Places Near Nashik"],
        ["Adventure Picnic Spots Near Nashik"],
        ["Nature Picnic Spot Near Nashik"],
        ["School Picnic Resort Near Nashik"],
        ["School Picnic Spot With Activities Near Nashik"],
        ["School Picnic Spot With Food Near Nashik "],
        ["Affordable School Picnic Packages Near Nashik"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Educational Farm Experience",
            WhyChoosedescription: "Students can move beyond textbook learning through farm tours and workshops that introduce them to agriculture, planting, harvesting, animal care, rural life, and practical farming concepts."
        },
        {
            WhyChooseheading: "Variety of Student Activities",
            WhyChoosedescription: "Water park activities, swimming, boating, horse riding, tractor rides, bull cart rides, and games give school groups several options for creating an engaging and varied picnic schedule."
        },
        {
            WhyChooseheading: "Nature-Based Learning",
            WhyChoosedescription: "The farm environment encourages children to observe greenery, birds, plants, water surroundings, and rural landscapes while developing curiosity about biodiversity and environmental conservation."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Activities such as bull cart rides and tractor rides allow students to experience aspects of rural life that may be very different from their everyday urban surroundings, making the outing both entertaining and educational."
        },
        {
            WhyChooseheading: "Suitable for School Groups",
            WhyChoosedescription: "The combination of activity areas, farm experiences, recreational options, and meal arrangements gives teachers flexibility when organizing schedules for students of different ages and group sizes."
        },
        {
            WhyChooseheading: "Fun Alongside Learning",
            WhyChoosedescription: "Students can enjoy recreational activities while gaining practical knowledge about farming, nature, rural culture, animals, food, and environmental surroundings, creating a balanced educational outing."
        },
        {
            WhyChooseheading: "Memorable Outdoor Experience",
            WhyChoosedescription: "A day filled with farm exploration, water activities, games, rides, nature observation, and group interaction can create enjoyable memories while giving classmates an opportunity to spend meaningful time together."
        },
        {
            WhyChooseheading: "Complete Picnic Environment",
            WhyChoosedescription: "With recreational activities, natural surroundings, farm experiences, and homemade food available within the same destination, schools can plan a more convenient and varied day picnic experience for students."
        }
    ]
};










const faqData = [
    {
        question: "What makes Om Agri Tourism a worthwhile school picnic spot in Nashik?",
        answer: "For schools planning a day filled with outdoor experiences, Om Agri Tourism provides a farm-based setting surrounded by greenery and open spaces. Students can enjoy recreational activities along with traditional countryside experiences, creating a refreshing break from their everyday classroom routine."
    },
    {
        question: "Which activities can children participate in during a school picnic at Om Agri Tourism?",
        answer: "The outing can include enjoyable experiences such as horse riding, boating, swimming, tractor rides, bull cart rides and bird watching. This variety allows students to move between active recreation and quieter nature-based activities throughout their picnic."
    },
    {
        question: "Can schools from Nashik plan a group picnic at Om Agri Tourism?",
        answer: "A school from Nashik can consider Om Agri Tourism when arranging a countryside day trip for students and teachers. With advance planning, the group can create an itinerary around suitable outdoor activities, farm experiences and leisure time in the natural surroundings."
    },
    {
        question: "How can a farm picnic provide students with a different experience?",
        answer: "A farm outing introduces children to an environment that is different from urban schools and conventional entertainment venues. At Om Agri Tourism, activities such as bull cart rides and tractor rides can give students a glimpse of rural life while the greenery provides plenty of opportunities for outdoor enjoyment."
    },
    {
        question: "Is Om Agri Tourism suitable for an educational and recreational school outing?",
        answer: "The destination can combine learning through observation with recreational experiences. Students can explore the farm surroundings, watch birds, experience countryside activities and enjoy outdoor recreation, making the picnic both entertaining and connected with nature."
    },
    {
        question: "Can students experience horse riding during a school picnic near Nashik?",
        answer: "Horse riding can add an exciting element to the students' visit at Om Agri Tourism. Participation can be planned according to the age and suitability of the students, with teachers or accompanying adults maintaining appropriate supervision during the activity."
    },
    {
        question: "What nature-based experiences can students enjoy at Om Agri Tourism?",
        answer: "Bird watching and exploring the surrounding greenery can give students a chance to observe nature more closely. Alongside these quieter experiences, the farm environment allows children to enjoy open-air recreation and discover a countryside setting away from their normal routine."
    },
    {
        question: "Are water activities available for school groups visiting Om Agri Tourism?",
        answer: "Swimming and boating can add a lively recreational component to the school outing. Students should take part only when the activity is appropriate for their age and abilities and should follow the relevant safety instructions under proper supervision."
    },
    {
        question: "Can a school picnic at Om Agri Tourism include traditional food?",
        answer: "A meal featuring homemade food can complement the countryside atmosphere and give students a chance to enjoy a relaxed break during the day's activities. Sharing a traditional meal can also make the overall farm visit feel more distinctive and memorable."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a school picnic spot in Nashik?",
        answer: "Students can experience much more than a standard day out at Om Agri Tourism, with opportunities for swimming, boating, horse riding, bird watching and traditional farm activities. The combination of greenery, recreation and rural experiences makes it a promising choice for a fun-filled school picnic in Nashik."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Vivek More",
        feedback:
            "Our students were delighted with the variety of experiences at Om Agri Tourism. The horse riding and bird watching were especially enjoyable, while the tractor and bull cart rides gave the children something completely different to experience. It turned into a very engaging school outing.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Manisha Patil",
        feedback:
            "The Nashik school group had a lovely day at Om Agri Tourism. The children enjoyed being outdoors, taking part in the boating activity and exploring the farm surroundings. The relaxed atmosphere and homemade food made the picnic feel comfortable, enjoyable and memorable for everyone.",
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
  "name": "School Picnic Spot in Nashik",
  "image": "https://www.omagrotourism.com/assets/images/school-picnic-spot-in-nashik.webp",
  "description": "Om Agro Tourism offers a refreshing School Picnic Spot in Nashik for schools planning enjoyable, educational and nature-oriented outings for students. School Picnic Spots Near Nashik can provide children with a welcome break from regular classroom routines while giving them opportunities to enjoy open spaces, greenery, agricultural surroundings and outdoor recreation. Schools searching for the Best School Picnic Spot in Nashik can consider an agro-tourism environment where students can spend quality time with classmates while participating in group activities, nature experiences and recreational programs. A One-Day School Picnic Near Nashik is suitable for schools that want to organize a memorable day outing without requiring an overnight stay. Educational Picnic Spots in Nashik can make a student excursion more meaningful by allowing children to experience agricultural landscapes, rural surroundings and nature through direct observation outside the classroom. School Trip Places in Nashik can therefore combine entertainment with experiential learning, encouraging curiosity, teamwork and social interaction among students. Kids’ Picnic Spots in Nashik should offer an atmosphere where children can enjoy age-appropriate outdoor activities, open surroundings and group recreation under suitable supervision. School Outing Places Near Nashik are also useful for annual picnics, class trips, student recreation days and school excursions. For schools interested in active experiences, an Adventure Picnic Spot in Nashik can add excitement to the outing through suitable outdoor recreation and group participation. A Nature Picnic Spot Near Nashik can provide students with an opportunity to observe greenery, agricultural landscapes and countryside surroundings while enjoying fresh air away from busy urban areas. Om Agro Tourism combines agriculture, nature, recreation and countryside experiences in one destination, creating a different kind of school outing for children and teachers. School coordinators can plan activities according to the age group, group size and educational or recreational purpose of the visit. Students can participate in group games, outdoor recreation, nature observation and shared activities that encourage communication and teamwork. Monsoon visits offer lush greenery and refreshing countryside scenery, winter provides pleasant conditions for outdoor activities and summer outings can be planned around suitable timings. The destination can suit school annual picnics, educational excursions, class outings, children's group trips and nature-oriented student visits. Schools from Nashik and surrounding areas can consider Om Agro Tourism when looking for a one-day destination that balances fun, learning, adventure and nature exposure. The peaceful agro-tourism setting gives students a chance to experience a rural environment while creating memorable moments with classmates. With its combination of outdoor recreation, agricultural surroundings and nature-based experiences, Om Agro Tourism can be a suitable choice for schools planning a meaningful picnic near Nashik.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/school-picnic-spot-in-nashik"
  }
};






    return (
        <div>

<Helmet>
  <title>
    School Picnic Spot in Nashik | Adventure, Nature, Kids & Educational Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers school picnic spots in Nashik and nearby areas for one-day student outings, educational trips, kids activities, adventure and nature experiences."
  />

  <meta
    name="keywords"
    content="School Picnic Spot in Nashik, School Picnic Spots Near Nashik, Best School Picnic Spot in Nashik, One-Day School Picnic Near Nashik, Educational Picnic Spots in Nashik, School Trip Places in Nashik, Kids Picnic Spots in Nashik, School Outing Places Near Nashik, Adventure Picnic Spot in Nashik, Nature Picnic Spot Near Nashik, school picnic places in Nashik, best school picnic places near Nashik, school picnic spots around Nashik, one day school picnic in Nashik, one day school trip near Nashik, school picnic destination in Nashik, school picnic resort near Nashik, school group outing in Nashik, educational picnic places near Nashik, educational outing in Nashik, educational trip near Nashik, student picnic spot in Nashik, student outing places near Nashik, picnic places for school students near Nashik, school picnic venue in Nashik, school picnic location near Nashik, school excursion in Nashik, school excursion places near Nashik, school nature trip near Nashik, nature picnic spot for students near Nashik, school group picnic in Nashik, one day picnic for school students near Nashik, one day outing for students in Nashik, school activity resort near Nashik, school picnic with activities in Nashik, school picnic place with activities near Nashik, agro tourism for school students near Nashik, agro tourism school picnic near Nashik, agri tourism for students near Nashik, educational agro tourism near Nashik, farm visit for school students near Nashik, agricultural educational tour near Nashik, rural educational trip near Nashik, nature education outing near Nashik, school picnic for children in Nashik, kids picnic places near Nashik, kids outing places in Nashik, school annual picnic in Nashik, school class picnic in Nashik, school picnic venue with activities near Nashik, student day outing near Nashik, school tour destination in Nashik, school recreational outing near Nashik, school picnic resort with activities near Nashik, best educational picnic spot near Nashik, school picnic destination with nature near Nashik, student nature outing near Nashik, school day trip near Nashik, school picnic resort for students near Nashik, school group picnic destination near Nashik, adventure picnic places near Nashik, adventure school picnic near Nashik, nature school picnic near Nashik"
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
                            <img src='/images/keyword/52.jpg' alt='img' className='img-fluid' />
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

export default SchoolPicnicSpotInNashik;