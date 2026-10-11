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

function Resortwithactivitiesnearpune() {


const cardData = {
    keyword: "Resort With Activities Near Pune",
    headingDescription: "Looking for a Resort With Activities Near Pune for a family outing, adventure day, corporate gathering, or weekend break? Om Agro Tourism offers a lively countryside setting with outdoor recreation, farm experiences, adventure activities, nature exploration, traditional food, and relaxing spaces. It is suitable for families, couples, friends, school groups, and corporate teams looking for an activity-filled escape from the city.",

    topPlaces: [
        {
            title: "Adventure Activity Zone",
            description: "Enjoy an energetic day with outdoor adventure activities designed to add excitement to family outings, friend groups, and team gatherings. The open countryside setting makes recreational time more enjoyable and engaging."
        },
        {
            title: "Family Recreation Area",
            description: "Families can spend quality time together with a combination of outdoor games, farm experiences, nature exploration, and relaxing spaces. Children and adults can participate in activities while enjoying the peaceful surroundings."
        },
        {
            title: "Corporate Team Outing Experience",
            description: "Corporate groups can use the spacious outdoor environment for team recreation, group activities, informal interactions, and a refreshing break from office routines. It provides an enjoyable setting for employee engagement."
        },
        {
            title: "One-Day Picnic Experience",
            description: "A one-day picnic can include outdoor games, farm exploration, food, nature experiences, and recreational activities. The combination allows visitors to enjoy a complete day without planning a lengthy trip."
        },
        {
            title: "Water Recreation Experience",
            description: "Visitors can add water-based recreation to their outing for a more refreshing and enjoyable experience. It is particularly suitable for families, children, and groups looking for a fun-filled day outdoors."
        },
        {
            title: "Farm Adventure Experience",
            description: "Explore the agricultural surroundings while experiencing the charm of rural life and open countryside. Farm-based activities provide an interesting alternative to conventional resort entertainment and city outings."
        },
        {
            title: "Group Outdoor Games",
            description: "Friends, families, and corporate teams can enjoy group-oriented outdoor games in an open environment. These activities encourage participation, interaction, friendly competition, and memorable moments."
        },
        {
            title: "Nature Exploration Area",
            description: "Take a break between activities with peaceful walks and nature exploration around the countryside. Green surroundings and fresh air provide a relaxing contrast to the energetic adventure experiences."
        },
        {
            title: "Traditional Food Experience",
            description: "Complete an activity-filled outing with traditional Maharashtrian food served in a relaxed countryside atmosphere. Local flavors add an authentic element to family picnics, group outings, and corporate gatherings."
        },
        {
            title: "Weekend Adventure Retreat",
            description: "A weekend adventure retreat offers the opportunity to combine outdoor recreation, farm experiences, nature, food, and relaxation in one destination. It works well for groups wanting both entertainment and a peaceful rural escape."
        }
    ],

    services: [
        {
            name: "Adventure resorts near pune",
            description: "Adventure resorts near Pune provide an exciting alternative to ordinary weekend outings, combining outdoor recreation, adventure activities, farm experiences, nature, and relaxing countryside surroundings."
        },
        {
            name: "Resorts near pune with activities",
            description: "Resorts near Pune with activities are ideal for visitors who want more than a relaxing stay, offering outdoor games, recreational experiences, farm activities, nature exploration, and group entertainment."
        },
        {
            name: "Team outing places near pune",
            description: "Team outing places near Pune can provide employees with opportunities for outdoor games, group activities, informal interaction, and refreshing time away from their regular workplace environment."
        },
        {
            name: "One day picnic resorts with activities near pune",
            description: "One day picnic resorts with activities near Pune are suitable for families and groups seeking a complete day of outdoor recreation, food, nature experiences, and enjoyable activities."
        },
        {
            name: "Resorts near pune for corporate outing",
            description: "Resorts near Pune for corporate outing offer an outdoor environment where teams can enjoy recreational activities, group games, informal bonding, meals, and a refreshing break from office routines."
        },
        {
            name: "Resorts in pune with activities",
            description: "Resorts in Pune with activities can make short breaks more engaging by combining recreation, outdoor games, nature experiences, farm activities, and relaxing spaces."
        },
        {
            name: "Resort near pune with activities",
            description: "A resort near Pune with activities is a convenient choice for families, friends, and groups looking for entertainment, outdoor recreation, food, and countryside relaxation in one destination."
        },
        {
            name: "Best adventure resorts near pune",
            description: "The best adventure resorts near Pune offer a mix of energetic outdoor activities, open surroundings, nature experiences, group recreation, and comfortable spaces for unwinding after an active day."
        },
        {
            name: "Resorts near pune for family with activities",
            description: "Resorts near Pune for family with activities give children and adults opportunities to enjoy outdoor recreation, farm experiences, nature exploration, food, and shared family time."
        },
        {
            name: "One day adventure resort near pune",
            description: "A one-day adventure resort near Pune provides a convenient escape where visitors can enjoy outdoor games, adventure recreation, nature, food, and leisure without requiring an extended holiday."
        },
        {
            name: "Activities resort near pune",
            description: "An activities resort near Pune is designed for visitors who prefer an active outing with outdoor games, recreational experiences, farm activities, and opportunities to explore the countryside."
        },
        {
            name: "Activity resorts in pune",
            description: "Activity resorts in Pune can turn a regular day out into a more engaging experience through outdoor recreation, adventure games, nature activities, group entertainment, and local food."
        },
        {
            name: "Adventure activities resort near pune",
            description: "An adventure activities resort near Pune offers opportunities to combine exciting outdoor recreation with farm surroundings, nature experiences, group activities, and relaxing countryside time."
        },
        {
            name: "Adventure games resort near pune",
            description: "Adventure games resort near Pune options are suitable for friends, families, and teams who want an energetic outing featuring group games, outdoor activities, and recreational experiences."
        },
        {
            name: "Adventure resort pune day out",
            description: "An adventure resort Pune day out can include outdoor games, farm exploration, nature experiences, traditional food, and recreational activities for a complete short getaway."
        },
        {
            name: "Adventure resorts in pune",
            description: "Adventure resorts in Pune provide a refreshing option for visitors seeking outdoor entertainment, group activities, farm experiences, nature exploration, and a break from everyday city life."
        },
        {
            name: "Best resort with activities near pune",
            description: "A best resort with activities near Pune should offer a balanced experience of recreation, nature, food, group entertainment, and relaxation for visitors with different interests."
        },
        {
            name: "Best resorts near pune with activities",
            description: "The best resorts near Pune with activities can accommodate families, couples, friends, and groups by combining outdoor fun, farm experiences, nature, meals, and peaceful leisure areas."
        },
        {
            name: "Corporate outing resorts near pune",
            description: "Corporate outing resorts near Pune provide teams with a relaxed environment for employee engagement, outdoor games, group activities, meals, and informal interaction outside the office."
        },
        {
            name: "Day outing resorts in pune",
            description: "Day outing resorts in Pune are suitable for visitors looking for recreation, food, nature, outdoor activities, and relaxation without booking a long vacation or overnight stay."
        },
        {
            name: "Day outing resorts near pune",
            description: "Day outing resorts near Pune offer a convenient countryside escape for families, friends, corporate groups, and other visitors who want a complete activity-filled day."
        },
        {
            name: "Day trip resorts near pune",
            description: "Day trip resorts near Pune can combine sightseeing-style exploration, outdoor recreation, farm activities, traditional food, and relaxing surroundings for an enjoyable short trip."
        },
        {
            name: "One day outing resort near pune",
            description: "A one day outing resort near Pune provides an easy option for enjoying outdoor activities, group games, nature, food, and countryside relaxation within a single-day schedule."
        },
        {
            name: "Resorts for team outing near pune",
            description: "Resorts for team outing near Pune can support group bonding through outdoor recreation, team games, informal conversations, shared meals, and enjoyable activities in an open environment."
        },
        {
            name: "Resorts near pune for team outing",
            description: "Resorts near Pune for team outing are useful for companies and groups seeking a combination of recreational activities, outdoor games, food, nature, and a refreshing change from office surroundings."
        },
        {
            name: "Resort With Activities Near Pune",
            description: "A Resort With Activities Near Pune offers a balanced day-out experience with adventure recreation, outdoor games, farm activities, nature exploration, food, and relaxing countryside surroundings."
        },
        {
            name: "Best Resort With Activities Near Pune",
            description: "The Best Resort With Activities Near Pune can provide families, friends, and corporate teams with varied recreational experiences, open spaces, nature activities, and opportunities to relax together."
        },
        {
            name: "Adventure Resort Near Pune",
            description: "An Adventure Resort Near Pune is a practical choice for visitors seeking an active day featuring outdoor games, adventure experiences, farm surroundings, group recreation, and countryside relaxation."
        },
        {
            name: "Resorts Near Pune With Adventure Activities",
            description: "Resorts Near Pune With Adventure Activities give visitors an opportunity to combine energetic outdoor recreation with nature, farm experiences, food, and relaxing time in a peaceful rural setting."
        },
        {
            name: "Family Resort With Activities Near Pune",
            description: "A Family Resort With Activities Near Pune can keep different age groups engaged through outdoor games, nature exploration, farm experiences, water recreation, food, and shared family activities."
        },
        {
            name: "One Day Picnic Resort With Activities Near Pune",
            description: "A One Day Picnic Resort With Activities Near Pune is suitable for families and groups who want to enjoy outdoor recreation, food, nature, games, and leisure without planning an overnight stay."
        },
        {
            name: "Resort With Water Park Near Pune",
            description: "A Resort With Water Park Near Pune can add refreshing water-based entertainment to a countryside outing, making it suitable for families, children, friends, and groups seeking an enjoyable day outdoors."
        },
        {
            name: "Resort With Swimming Pool Near Pune",
            description: "A Resort With Swimming Pool Near Pune offers visitors an opportunity to combine water-based leisure with outdoor recreation, farm experiences, food, nature, and relaxing countryside surroundings."
        }
    ],

    tableData: [
        ["Adventure resorts near pune"],
        ["Resorts near pune with activities"],
        ["Team outing places near pune"],
        ["One day picnic resorts with activities near pune"],
        ["Resorts near pune for corporate outing"],
        ["Resorts in pune with activities"],
        ["Resort near pune with activities"],
        ["Best adventure resorts near pune"],
        ["Resorts near pune for family with activities"],
        ["One day adventure resort near pune"],
        ["Activities resort near pune"],
        ["Activity resorts in pune"],
        ["Adventure activities resort near pune"],
        ["Adventure games resort near pune"],
        ["Adventure resort pune day out"],
        ["Adventure resorts in pune"],
        ["Best resort with activities near pune"],
        ["Best resorts near pune with activities"],
        ["Corporate outing resorts near pune"],
        ["Day outing resorts in pune"],
        ["Day outing resorts near pune"],
        ["Day trip resorts near pune"],
        ["One day outing resort near pune"],
        ["Resorts for team outing near pune"],
        ["Resorts near pune for team outing"],
        ["Resort With Activities Near Pune"],
        ["Best Resort With Activities Near Pune"],
        ["Adventure Resort Near Pune"],
        ["Resorts Near Pune With Adventure Activities"],
        ["Family Resort With Activities Near Pune"],
        ["One Day Picnic Resort With Activities Near Pune"],
        ["Resort With Water Park Near Pune"],
        ["Resort With Swimming Pool Near Pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Wide Range of Activities",
            WhyChoosedescription: "Visitors can enjoy more than a conventional resort stay with outdoor recreation, adventure games, farm experiences, nature exploration, and group-friendly activities designed to make the outing engaging."
        },
        {
            WhyChooseheading: "Ideal for Family Outings",
            WhyChoosedescription: "Families can spend quality time together with activities that appeal to both children and adults. Open spaces, recreation, nature, and food create a balanced experience for different age groups."
        },
        {
            WhyChooseheading: "Excellent for Team Gatherings",
            WhyChoosedescription: "Corporate teams and friend groups can participate in outdoor activities that encourage interaction, informal bonding, friendly competition, and a refreshing break from regular work routines."
        },
        {
            WhyChooseheading: "Adventure and Relaxation Together",
            WhyChoosedescription: "The experience is not limited to high-energy activities. Guests can move between adventure recreation, nature walks, farm exploration, traditional meals, and peaceful relaxation according to their preferences."
        },
        {
            WhyChooseheading: "Convenient One-Day Experience",
            WhyChoosedescription: "A complete outing can be planned within a single day, making the destination practical for families, corporate groups, couples, and friends who want entertainment without a lengthy travel schedule."
        },
        {
            WhyChooseheading: "Refreshing Countryside Setting",
            WhyChoosedescription: "The rural environment provides open surroundings, greenery, fresh air, and a peaceful atmosphere that creates a noticeable change from Pune's crowded urban routine."
        },
        {
            WhyChooseheading: "Food and Recreation",
            WhyChoosedescription: "Along with outdoor activities, guests can enjoy traditional food and relaxing moments in the countryside. This combination helps create a more complete and satisfying day-out experience."
        },
        {
            WhyChooseheading: "Suitable for Different Groups",
            WhyChoosedescription: "Families, couples, friends, corporate teams, and other groups can find suitable ways to enjoy the destination. The combination of activities, nature, food, and open spaces makes the experience versatile."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good resort with activities near Pune?",
        answer: "Om Agri Tourism offers a peaceful farm-based setting where visitors can combine relaxation with a variety of outdoor and countryside activities. The greenery, open surroundings and recreational experiences make it a suitable choice for families, friends and groups planning an active day outing near Pune."
    },
    {
        question: "What activities are available at Om Agri Tourism near Pune?",
        answer: "Visitors at Om Agri Tourism can enjoy several recreational experiences, including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. The range of activities allows guests to create a varied outing while enjoying the peaceful farm environment."
    },
    {
        question: "Is Om Agri Tourism suitable for a family outing with activities?",
        answer: "Families can enjoy a mix of relaxation and recreation at Om Agri Tourism. Children and adults can explore the farm surroundings, enjoy suitable outdoor activities and spend quality time together in a green countryside environment away from the usual city routine."
    },
    {
        question: "Can friends enjoy multiple activities at Om Agri Tourism?",
        answer: "Friends can enjoy an activity-filled outing at Om Agri Tourism with options such as boating, swimming, horse riding and traditional farm rides. The variety of experiences gives groups opportunities to have fun together while enjoying the calm surroundings."
    },
    {
        question: "Are there traditional farm activities at Om Agri Tourism?",
        answer: "Om Agri Tourism includes traditional countryside experiences such as tractor rides and bull cart rides. These activities provide visitors with a chance to experience a different side of rural life while enjoying the farm's open surroundings and greenery."
    },
    {
        question: "Can children enjoy the activities at Om Agri Tourism?",
        answer: "Children can enjoy several engaging outdoor experiences at Om Agri Tourism, including boating, tractor rides and bird watching. Exploring the farm surroundings and participating in suitable activities can make the visit both enjoyable and different from a regular city outing."
    },
    {
        question: "Is Om Agri Tourism suitable for couples looking for an activity resort near Pune?",
        answer: "Couples can enjoy a relaxed outing at Om Agri Tourism while choosing from activities such as horse riding, boating and bird watching. The peaceful farm setting and greenery provide a pleasant backdrop for spending quality time together."
    },
    {
        question: "Does Om Agri Tourism offer homemade food along with activities?",
        answer: "Homemade food adds a traditional element to the activity-based experience at Om Agri Tourism. Guests can take a break from outdoor recreation, enjoy a satisfying meal and continue relaxing in the peaceful countryside surroundings."
    },
    {
        question: "Can groups plan a one day activity outing at Om Agri Tourism?",
        answer: "Groups can plan a full day at Om Agri Tourism by combining several activities with time for relaxation. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide different experiences for friends, families and other groups."
    },
    {
        question: "Why choose Om Agri Tourism when searching for a resort with activities near Pune?",
        answer: "Om Agri Tourism brings together farm surroundings, greenery, recreational activities and traditional rural experiences in one destination. Visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching along with homemade food for a memorable countryside outing."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Siddhant Patil",
        feedback:
            "Our group had a fantastic time at Om Agri Tourism because there were plenty of activities to keep everyone involved. We enjoyed swimming and boating, followed by horse riding and the traditional bull cart ride. The peaceful farm surroundings made the entire day feel refreshing.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Aarti Bhosale",
        feedback:
            "Om Agri Tourism was a great choice for our family outing. The children enjoyed the tractor ride and bird watching, while we relaxed around the greenery and enjoyed the homemade food. Having different activities in the same countryside setting made the day very enjoyable.",
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
  "name": "Resort With Activities Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/resort-with-activities-near-pune.webp",
  "description": "Om Agro Tourism offers an engaging Resort With Activities Near Pune experience for families, couples, friends, corporate teams, school groups and visitors looking for a refreshing break with recreation and nature. People searching for Adventure resorts near Pune can enjoy a countryside environment where outdoor activities, open spaces, greenery and agro-tourism experiences create opportunities for fun and group participation. Resorts near Pune with activities are ideal for visitors who want more than a simple stay, combining relaxation with recreational experiences suitable for different age groups. For companies searching for Team outing places near Pune, Om Agro Tourism provides a group-friendly setting where colleagues can spend quality time together, participate in activities and enjoy informal team interaction away from the regular workplace. One day picnic resorts with activities near Pune can be suitable for families, friends, school groups and corporate teams planning a complete day of recreation without requiring a long holiday. Resorts near Pune for corporate outing can provide a relaxed environment for employee engagement, team bonding, informal gatherings and outdoor group programs. Visitors searching for Resorts in Pune with activities can consider a nature-oriented destination where agriculture, countryside surroundings and recreation come together. A Resort near Pune with activities can suit weekend outings, family gatherings, birthday celebrations, school picnics and friends' get-togethers. Guests looking for the Best activity resort near Pune can enjoy a combination of outdoor recreation and peaceful surroundings, making the destination suitable for both active visitors and those who prefer a relaxed pace. Families can spend time together in open surroundings while children enjoy suitable recreational experiences, and adults can participate in group activities or simply unwind in nature. Corporate groups can organize team games, informal discussions, employee outings and recreational sessions according to their plans. Couples and friends can also choose the destination for a refreshing one-day getaway surrounded by greenery and rural landscapes. Seasonal visits bring different countryside experiences, with monsoon creating lush green surroundings, winter providing comfortable outdoor conditions and summer outings being suitable with well-planned timings. Om Agro Tourism offers a distinctive alternative to conventional city resorts by combining agro-tourism, nature, open spaces and activity-based recreation. The destination is suitable for one-day picnics, weekend outings, team gatherings, family recreation, school trips and corporate events. With its combination of activities and countryside charm, Om Agro Tourism provides a memorable option for visitors searching for resorts with activities, adventure resorts and team outing destinations near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/resort-with-activities-near-pune"
  }
};








    return (
        <div>
<Helmet>
  <title>
    Resort With Activities Near Pune | Adventure, Picnic & Team Outing Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism is a resort with activities near Pune for families, teams and groups, offering adventure, one-day picnic and corporate outing experiences."
  />

  <meta
    name="keywords"
    content="Resort With Activities Near Pune, Adventure resorts near Pune, Resorts near Pune with activities, Team outing places near Pune, One day picnic resorts with activities near Pune, Resorts near Pune for corporate outing, Resorts in Pune with activities, Resort near Pune with activities, Best activity resort near Pune, best resorts near Pune with activities, activity resorts near Pune, adventure resort near Pune, best adventure resorts near Pune, adventure activities near Pune, outdoor activities near Pune, recreational resorts near Pune, recreation resort near Pune, resorts with outdoor activities near Pune, resorts with adventure activities near Pune, resorts for activities near Pune, one day picnic resort with activities near Pune, one day picnic resorts near Pune, one day resort with activities near Pune, one day outing resort near Pune, one day activity resort near Pune, day outing resort near Pune, picnic places with activities near Pune, picnic resort near Pune with activities, family resorts with activities near Pune, family activity resort near Pune, family outing resort near Pune, family picnic resort near Pune, family day outing near Pune, resorts near Pune for family outing, team outing places near Pune, team outing resort near Pune, team outing destination near Pune, best team outing places near Pune, team building resort near Pune, team building activities near Pune, corporate outing resorts near Pune, resorts for corporate outing near Pune, corporate team outing near Pune, corporate picnic resort near Pune, corporate picnic places near Pune, employee outing resort near Pune, office outing resort near Pune, office team outing near Pune, company outing resort near Pune, corporate activity resort near Pune, school picnic resort near Pune, school outing places near Pune, student outing near Pune, group outing resort near Pune, group activity resort near Pune, friends outing resort near Pune, friends activity resort near Pune, couple outing resort near Pune, couple resort with activities near Pune, weekend resorts near Pune with activities, weekend activity resort near Pune, nature resort with activities near Pune, nature adventure resort near Pune, agro tourism resort near Pune with activities, agro tourism near Pune with activities, agri tourism near Pune, farm resort with activities near Pune, countryside resort with activities near Pune, resort for birthday outing near Pune, resort for family gathering near Pune, resort for group activities near Pune, outdoor group activities near Pune, team activities near Pune, corporate team activities near Pune, best one day resort near Pune, best picnic resort near Pune, best adventure resort near Pune, best resort for team outing near Pune, best resort for corporate outing near Pune"
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
                            <img src='/images/keyword/31.jpg' alt='img' className='img-fluid' />
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

export default Resortwithactivitiesnearpune;