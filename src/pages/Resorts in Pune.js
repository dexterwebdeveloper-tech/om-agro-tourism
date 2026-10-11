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

function Resortinpune() {


const cardData = {
    keyword: "Resorts in Pune",
    headingDescription: "Searching for Resorts in Pune for a family holiday, couple getaway, weekend break, one-day picnic, or activity-filled stay? Om Agro Tourism offers a refreshing countryside resort experience where visitors can enjoy nature, farm surroundings, outdoor recreation, traditional food, water-based leisure, and quality time away from the busy city routine. The destination can suit families, couples, children, friends, and groups looking for a peaceful resort near Pune with activities, food, and options for both short day outings and longer stays.",

    topPlaces: [
        {
            title: "Countryside Resort Experience",
            description: "Enjoy a peaceful getaway surrounded by open farmland, greenery, fresh air, and natural landscapes that provide a refreshing change from the busy city environment."
        },
        {
            title: "Family Recreation Zone",
            description: "Families can spend quality time together through outdoor games, nature activities, farm experiences, and recreational options suitable for children and adults."
        },
        {
            title: "Swimming and Water Fun",
            description: "Add refreshing water-based recreation to your resort visit and enjoy a fun-filled experience that works well for families, friends, and group outings."
        },
        {
            title: "Weekend Nature Retreat",
            description: "Escape the regular routine with a relaxing weekend surrounded by greenery, open spaces, farm landscapes, and peaceful countryside surroundings."
        },
        {
            title: "Adventure Activity Experience",
            description: "Make your outing more energetic with outdoor recreation, adventure-oriented activities, group games, and engaging experiences for active visitors."
        },
        {
            title: "Agro Tourism Farm Visit",
            description: "Explore the agricultural side of the destination through farm walks, rural surroundings, traditional activities, and experiences connected with countryside life."
        },
        {
            title: "Couples Countryside Escape",
            description: "Couples can enjoy a quieter environment with nature, open landscapes, relaxed leisure, and quality time away from the city's everyday schedule."
        },
        {
            title: "Traditional Maharashtrian Dining",
            description: "Enjoy traditional food experiences in a peaceful farm environment, adding a local culinary touch to a family outing, weekend stay, or group picnic."
        },
        {
            title: "Kids Fun and Recreation",
            description: "Children can enjoy age-appropriate outdoor recreation, open spaces, farm surroundings, and engaging activities while families spend relaxing time together."
        },
        {
            title: "One-Day Picnic Experience",
            description: "Plan a complete day outing with nature, food, recreation, farm exploration, and relaxing countryside experiences without needing a long vacation."
        }
    ],

    services: [
        {
            name: "Resorts near pune",
            description: "Enjoy a refreshing resort getaway near Pune with peaceful surroundings, outdoor recreation, farm experiences, traditional food, and quality time with family or friends."
        },
        {
            name: "Resorts in pune",
            description: "Explore a comfortable resort-style experience around Pune that combines nature, leisure, recreational activities, and countryside relaxation."
        },
        {
            name: "Best resorts near pune",
            description: "Choose a refreshing destination for family outings, weekend breaks, group gatherings, nature experiences, and enjoyable day picnics near Pune."
        },
        {
            name: "Resorts near pune with activities",
            description: "Enjoy a resort experience with outdoor games, farm exploration, water recreation, nature activities, and other engaging experiences for different age groups."
        },
        {
            name: "One day resort near pune",
            description: "Plan a convenient one-day getaway with outdoor activities, farm experiences, traditional food, nature, and relaxing time away from the city."
        },
        {
            name: "Resorts near pune for weekend",
            description: "Spend your weekend in a peaceful countryside environment with recreation, nature exploration, food experiences, and relaxing leisure activities."
        },
        {
            name: "Resorts near pune for couples",
            description: "Couples can enjoy a calm countryside escape with nature, outdoor leisure, open surroundings, and quality time together away from daily routines."
        },
        {
            name: "Wellness resorts near pune",
            description: "Take a refreshing break from busy schedules through peaceful surroundings, nature experiences, outdoor leisure, and a slower countryside atmosphere."
        },
        {
            name: "Resort in pune for couples",
            description: "A countryside resort setting can provide couples with peaceful surroundings, nature activities, relaxed leisure, and memorable time together."
        },
        {
            name: "Best resorts near pune for couples",
            description: "Enjoy a relaxing couple getaway with greenery, open landscapes, outdoor recreation, nature experiences, and a peaceful environment."
        },
        {
            name: "One day picnic resorts near pune",
            description: "Plan a complete one-day picnic with family or friends featuring outdoor recreation, farm activities, food, nature, and refreshing countryside leisure."
        },
        {
            name: "One day stay resort near Pune",
            description: "Enjoy a day-long resort experience with activities, meals, farm exploration, water recreation, and comfortable time spent in natural surroundings."
        },
        {
            name: "One night stay near pune",
            description: "Extend your getaway with an overnight stay and enjoy additional time for nature exploration, group activities, meals, and peaceful countryside relaxation."
        },
        {
            name: "Jungle resorts near pune",
            description: "Visitors seeking a nature-focused escape can enjoy greenery, open landscapes, farm surroundings, outdoor activities, and a refreshing rural atmosphere."
        },
        {
            name: "best resorts near pune for family",
            description: "Families can enjoy outdoor games, nature experiences, food, farm activities, water recreation, and group-friendly spaces designed for shared leisure."
        },
        {
            name: "Resorts in Pune",
            description: "Enjoy a refreshing resort experience near Pune that combines natural surroundings, outdoor recreation, farm activities, food, and peaceful leisure."
        },
        {
            name: "Resorts Near Pune",
            description: "Plan a short escape from the city with countryside scenery, recreational activities, nature experiences, traditional food, and quality time with loved ones."
        },
        {
            name: "Best Resorts in Pune",
            description: "Choose a destination suitable for family outings, couple getaways, weekend plans, group picnics, and relaxing nature-based experiences."
        },
        {
            name: "Best Resorts Near Pune",
            description: "Enjoy a well-rounded getaway with open surroundings, outdoor activities, farm experiences, traditional food, and refreshing countryside leisure."
        },
        {
            name: "Luxury Resorts in Pune",
            description: "Experience a comfortable leisure break with peaceful surroundings, recreational options, nature, food experiences, and a refreshing change from city life."
        },
        {
            name: "Resorts Near Pune for Family",
            description: "Families can spend meaningful time together through outdoor recreation, nature exploration, farm activities, food, and enjoyable group experiences."
        },
        {
            name: "Resorts Near Pune for Couples",
            description: "Couples can enjoy a peaceful countryside environment with open spaces, nature, leisure activities, and a relaxing break from everyday schedules."
        },
        {
            name: "One Day Picnic Resorts Near Pune",
            description: "Make the most of a single day with outdoor games, farm experiences, traditional food, nature activities, and relaxing group time."
        },
        {
            name: "Resorts Near Pune for One Day Trip",
            description: "A one-day trip can combine nature, recreation, farm exploration, food, water activities, and peaceful leisure in one convenient outing."
        },
        {
            name: "Resorts Near Pune with Swimming Pool",
            description: "Enjoy a resort outing that combines swimming and water recreation with open surroundings, family activities, nature, and relaxing leisure."
        },
        {
            name: "Water Park Resorts Near Pune",
            description: "Combine refreshing water recreation with countryside leisure, outdoor activities, family entertainment, farm experiences, and group relaxation."
        },
        {
            name: "Family Resorts in Pune",
            description: "Families can enjoy a combination of nature, outdoor games, farm activities, food experiences, water recreation, and shared leisure time."
        },
        {
            name: "Weekend Resorts Near Pune",
            description: "Escape the weekly routine with a refreshing weekend surrounded by greenery, open landscapes, outdoor recreation, farm experiences, and peaceful relaxation."
        },
        {
            name: "Affordable Resorts Near Pune",
            description: "Enjoy a practical getaway with nature experiences, outdoor recreation, food, group activities, and peaceful surroundings for a memorable short break."
        },
        {
            name: "Budget Resorts Near Pune",
            description: "Plan a value-focused outing with enjoyable activities, farm surroundings, nature, food, and recreational experiences without making the trip unnecessarily complicated."
        },
        {
            name: "Resorts Near Pune with Activities",
            description: "Choose an activity-filled resort experience featuring outdoor games, farm exploration, nature activities, water recreation, and group-friendly entertainment."
        },
        {
            name: "Agro Tourism Resort Near Pune",
            description: "Experience the charm of rural Maharashtra through farm exploration, agricultural surroundings, traditional activities, nature, and countryside recreation."
        },
        {
            name: "Kids-Friendly Resorts Near Pune",
            description: "Families with children can enjoy open spaces, recreational activities, nature experiences, outdoor games, and engaging farm-based experiences."
        },
        {
            name: "Resorts Near Pune with Food and Stay",
            description: "Enjoy a convenient getaway combining accommodation, meals, outdoor activities, farm experiences, and peaceful countryside surroundings."
        },
        {
            name: "One Day Picnic Spot Near Pune for Family",
            description: "Families can plan a complete one-day outing with nature, food, outdoor recreation, farm activities, and relaxing time together in a countryside environment."
        }
    ],

    tableData: [
        ["Resorts near pune"],
        ["Resorts in pune"],
        ["Best resorts near pune"],
        ["Resorts near pune with activities"],
        ["One day resort near pune"],
        ["Resorts near pune for weekend"],
        ["Resorts near pune for couples"],
        ["Wellness resorts near pune"],
        ["Resort in pune for couples"],
        ["Best resorts near pune for couples"],
        ["One day picnic resorts near pune"],
        ["One day stay resort near Pune"],
        ["One night stay near pune"],
        ["Jungle resorts near pune"],
        ["best resorts near pune for family"],
        ["Resorts in Pune"],
        ["Resorts Near Pune"],
        ["Best Resorts in Pune"],
        ["Best Resorts Near Pune"],
        ["Luxury Resorts in Pune"],
        ["Resorts Near Pune for Family"],
        ["Resorts Near Pune for Couples"],
        ["One Day Picnic Resorts Near Pune"],
        ["Resorts Near Pune for One Day Trip"],
        ["Resorts Near Pune with Swimming Pool"],
        ["Water Park Resorts Near Pune"],
        ["Family Resorts in Pune"],
        ["Weekend Resorts Near Pune"],
        ["Affordable Resorts Near Pune"],
        ["Budget Resorts Near Pune"],
        ["Resorts Near Pune with Activities"],
        ["Agro Tourism Resort Near Pune"],
        ["Kids-Friendly Resorts Near Pune"],
        ["Resorts Near Pune with Food and Stay"],
        ["One Day Picnic Spot Near Pune for Family"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Setting",
            WhyChoosedescription: "The farm-oriented environment provides a refreshing alternative to busy city life, giving visitors greenery, open spaces, fresh air, and a relaxed atmosphere."
        },
        {
            WhyChooseheading: "Suitable for Family Getaways",
            WhyChoosedescription: "Families can enjoy outdoor recreation, farm experiences, nature activities, food, and group-friendly entertainment that makes the outing enjoyable for children and adults."
        },
        {
            WhyChooseheading: "Enjoyable Couple Retreat",
            WhyChoosedescription: "Couples can spend quality time together in a calm natural environment with peaceful surroundings, outdoor leisure, nature experiences, and relaxing activities."
        },
        {
            WhyChooseheading: "Activities for Different Age Groups",
            WhyChoosedescription: "A variety of outdoor and recreational experiences allows children, adults, families, and groups to enjoy different aspects of the resort according to their interests."
        },
        {
            WhyChooseheading: "Refreshing Water Recreation",
            WhyChoosedescription: "Water-based leisure adds another dimension to the outing, making the destination appealing for families and groups looking for both relaxation and fun."
        },
        {
            WhyChooseheading: "Authentic Agro Tourism Experience",
            WhyChoosedescription: "Farm surroundings, agricultural activities, traditional rural experiences, and countryside landscapes provide visitors with something beyond a conventional resort stay."
        },
        {
            WhyChooseheading: "One-Day and Stay Options",
            WhyChoosedescription: "The destination can work for quick one-day picnics as well as longer plans, giving visitors flexibility when arranging family holidays, weekend breaks, or overnight stays."
        },
        {
            WhyChooseheading: "Food and Recreation Together",
            WhyChoosedescription: "Combining traditional food experiences with nature, outdoor activities, farm exploration, and leisure makes it easier to plan a complete outing without relying on a single type of entertainment."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good option among resorts in Pune?",
        answer: "Om Agri Tourism offers a peaceful farm-based environment for visitors looking for a refreshing resort-style experience in and around Pune. Its greenery, countryside atmosphere, outdoor activities and homemade food make it suitable for families, friends and groups planning a relaxed day outing."
    },
    {
        question: "What activities can visitors enjoy at Om Agri Tourism?",
        answer: "Guests at Om Agri Tourism can enjoy a variety of recreational and countryside activities, including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These experiences provide plenty of options for visitors who want an active and enjoyable outing."
    },
    {
        question: "Is Om Agri Tourism suitable for a family outing in Pune?",
        answer: "Families can enjoy spending quality time at Om Agri Tourism in a peaceful farm environment. Children and adults can explore the greenery, participate in suitable outdoor activities and relax together away from the usual city routine."
    },
    {
        question: "Can friends plan a day outing at Om Agri Tourism?",
        answer: "Friends can enjoy a refreshing group outing at Om Agri Tourism by combining recreation with countryside relaxation. Boating, swimming, horse riding and traditional farm rides offer enjoyable ways to spend time together in a natural and open environment."
    },
    {
        question: "Does Om Agri Tourism offer a nature-oriented resort experience?",
        answer: "The farm surroundings at Om Agri Tourism provide visitors with greenery, open spaces and a calm countryside atmosphere. Bird watching and outdoor activities allow guests to enjoy a nature-focused experience while taking a break from the busy urban environment."
    },
    {
        question: "Can children enjoy activities at Om Agri Tourism?",
        answer: "Children can enjoy several outdoor experiences at Om Agri Tourism, including boating, tractor rides and bird watching. Exploring the farm surroundings and experiencing traditional rural activities can make the outing interesting and enjoyable for younger visitors."
    },
    {
        question: "Is Om Agri Tourism suitable for couples in Pune?",
        answer: "Couples can enjoy a relaxed countryside outing at Om Agri Tourism surrounded by greenery and farm landscapes. Horse riding, boating and bird watching can add variety to the visit, while the peaceful atmosphere provides an opportunity to spend quality time together."
    },
    {
        question: "Can groups enjoy homemade food at Om Agri Tourism?",
        answer: "Homemade food adds a traditional touch to the experience at Om Agri Tourism. Groups can enjoy a satisfying meal between activities and continue relaxing in the farm surroundings, making the outing more comfortable and connected to the countryside setting."
    },
    {
        question: "Is Om Agri Tourism suitable for a weekend getaway in Pune?",
        answer: "Visitors looking for a short break can enjoy the peaceful atmosphere of Om Agri Tourism as a countryside getaway. The combination of greenery, farm experiences and outdoor recreation provides a refreshing alternative to spending the weekend in a busy urban setting."
    },
    {
        question: "Why choose Om Agri Tourism when searching for resorts in Pune?",
        answer: "Om Agri Tourism combines farm experiences, greenery, traditional rural activities and outdoor recreation in a peaceful destination. Visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food while creating memorable moments with family or friends."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Harshad Jagtap",
        feedback:
            "Our family spent a wonderful day at Om Agri Tourism. The children enjoyed boating and the tractor ride, while we appreciated the greenery and quiet farm surroundings. The homemade food and traditional activities made the experience feel much more personal than a regular city outing.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Komal Deshpande",
        feedback:
            "We visited Om Agri Tourism with a group of friends and had a very enjoyable experience. Horse riding, bird watching and the bull cart ride gave us plenty to explore, while the peaceful environment helped everyone relax. It was a refreshing countryside break close to Pune.",
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
  "name": "Resorts in Pune",
  "image": "https://www.omagrotourism.com/assets/images/resorts-in-pune.webp",
  "description": "Om Agro Tourism offers a refreshing Resorts in Pune experience for families, couples, friends, corporate groups and visitors looking for a peaceful escape from the city's busy routine. People searching for Resorts near Pune can consider a countryside destination where greenery, open spaces, agro-tourism surroundings and recreational experiences create a relaxing environment for short and extended leisure plans. Visitors comparing Resorts in Pune and Best resorts near Pune can choose a nature-oriented setting that provides an alternative to conventional city accommodation and crowded entertainment spaces. Resorts near Pune with activities are suitable for guests who want to combine relaxation with outdoor recreation, group entertainment and nature-based experiences. A One day resort near Pune can be ideal for families, friends and corporate teams planning a convenient day outing without arranging a long-distance holiday. Resorts near Pune for weekend can provide a refreshing change of scenery for guests who want to spend more time in a peaceful countryside environment. Couples searching for Resorts near Pune for couples or a Resort in Pune for couples can enjoy a relaxed setting suitable for quality time, celebrations and short romantic getaways. Visitors looking for Best resorts near Pune for couples can consider a destination surrounded by nature where leisure and outdoor experiences can be enjoyed at a comfortable pace. Wellness resorts near Pune are preferred by visitors who want to disconnect from their routine, spend time in natural surroundings and enjoy a slower, more refreshing experience. One day picnic resorts near Pune can suit family outings, group picnics, school visits, corporate gatherings and weekend recreation. Guests planning a One day stay resort near Pune can enjoy a convenient short break with access to open spaces and countryside surroundings. For visitors searching for a One night stay near Pune, the destination can also provide an option for a short overnight escape, subject to available stay packages and facilities. Jungle resorts near Pune appeal to nature lovers who enjoy greenery, rural landscapes and an atmosphere away from busy urban areas. Families searching for best resorts near Pune for family can enjoy a group-friendly environment where children and adults can spend quality time together. Om Agro Tourism combines agriculture, nature, open spaces and recreational possibilities to create a distinctive resort-style experience near Pune. Seasonal visits offer different attractions, including lush monsoon greenery, pleasant winter weather and refreshing countryside surroundings during suitable summer timings. The destination can accommodate family outings, couple getaways, corporate activities, friends' gatherings, school picnics, celebrations and weekend leisure plans. For visitors comparing Resorts in Pune, Resorts Near Pune and Best Resorts in Pune, Om Agro Tourism offers a memorable countryside alternative focused on nature, recreation and agro-tourism experiences.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/resorts-in-pune"
  }
};








    return (
        <div>


<Helmet>
  <title>
    Resorts in Pune | Best Family, Couple, Weekend & Activity Resorts | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism is a nature-focused resort near Pune for families, couples and groups, offering one-day outings, activities, picnics and short stays."
  />

  <meta
    name="keywords"
    content="Resorts in Pune, Resorts near Pune, Best Resorts near Pune, Resorts in Pune, Best resorts in Pune, Resorts near Pune with activities, One day resort near Pune, Resorts near Pune for weekend, Resorts near Pune for couples, Wellness resorts near Pune, Resort in Pune for couples, Best resorts near Pune for couples, One day picnic resorts near Pune, One day stay resort near Pune, One night stay near Pune, Jungle resorts near Pune, best resorts near Pune for family, Resorts in Pune, Resorts Near Pune, Best Resorts in Pune, best resort near Pune, best resorts around Pune, resorts around Pune, top resorts near Pune, family resorts near Pune, family friendly resorts near Pune, best family resorts near Pune, resorts near Pune for family outing, resorts near Pune for family get together, resorts near Pune with activities, activity resorts near Pune, adventure resorts near Pune, adventure resort near Pune, nature resorts near Pune, nature resort near Pune, jungle resort near Pune, forest resorts near Pune, forest stay near Pune, wellness resort near Pune, wellness retreats near Pune, relaxing resorts near Pune, luxury resorts near Pune, budget resorts near Pune, affordable resorts near Pune, weekend resorts near Pune, weekend getaway resorts near Pune, resorts near Pune for weekend stay, one day resorts near Pune, one day resort near Pune, one day picnic resort near Pune, one day picnic resorts near Pune, one day outing resort near Pune, day outing resorts near Pune, picnic resorts near Pune, picnic resort near Pune, resorts for day outing near Pune, resorts for couples near Pune, couple resorts near Pune, romantic resorts near Pune, best couple resorts near Pune, resort for couples near Pune, couple getaway near Pune, resorts for family near Pune, family outing resort near Pune, resorts for friends near Pune, friends outing resort near Pune, group resorts near Pune, group outing resorts near Pune, corporate resorts near Pune, corporate outing resorts near Pune, team outing resorts near Pune, resorts for corporate outing near Pune, school picnic resorts near Pune, school outing resorts near Pune, one night resort near Pune, overnight resort near Pune, one night stay resort near Pune, resort for overnight stay near Pune, short stay resort near Pune, resort near Pune for stay, resort near Pune for one day stay, resort near Pune for two days, weekend stay near Pune, nature stay near Pune, countryside resort near Pune, agro tourism resort near Pune, agro tourism near Pune, agri tourism resort near Pune, farm resort near Pune, farm stay near Pune, resorts near Pune with swimming pool, resorts near Pune with outdoor activities, best activity resort near Pune, best nature resort near Pune, best weekend resort near Pune, best resort for family near Pune, best resort for couples near Pune, best one day resort near Pune, best picnic resort near Pune"
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
                            <img src='/images/keyword/28.jpg' alt='img' className='img-fluid' />
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

export default Resortinpune;