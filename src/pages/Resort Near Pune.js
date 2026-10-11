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

function ResortNearPune() {


const cardData = {
    keyword: "Resort Near Pune",

    headingDescription: "Looking for a Resort Near Pune for a relaxing family outing, romantic escape, corporate gathering, weekend break, or fun-filled one-day picnic? Om Agri Tourism offers a refreshing countryside experience where visitors can enjoy peaceful farm surroundings along with outdoor recreation, water activities, traditional rural experiences, group entertainment, and quality time with family and friends. Whether you are searching for the best resorts near Pune, a one day resort near Pune for family, an adventure resort near Pune, a resort with activities, a resort for team outing, or a water park resort near Pune, Om Agri Tourism provides a versatile destination for different types of day trips and leisure plans. The combination of nature, farm experiences, recreational activities, traditional food, and open spaces makes it a convenient choice for families, couples, friends, corporate teams, and groups looking to take a refreshing break from the busy city routine.",

    topPlaces: [
        {
            title: "Farm Experience and Exploration",
            description: "Explore the peaceful farm surroundings and experience the charm of rural life through agricultural spaces, nature, and open countryside landscapes. This experience gives visitors a refreshing opportunity to spend time outdoors and enjoy a break from the busy urban environment."
        },
        {
            title: "Swimming and Water Recreation",
            description: "Enjoy refreshing water-based recreation during your resort visit and add a fun element to your family picnic or group outing. Water activities provide an enjoyable way to relax, cool down, and make the day more entertaining for visitors."
        },
        {
            title: "Adventure and Outdoor Recreation",
            description: "Add excitement to your day with outdoor recreational activities designed for energetic visitors and groups. Adventure-focused experiences can make a regular resort visit more engaging while providing opportunities for friends, families, and colleagues to participate together."
        },
        {
            title: "Traditional Bullock Cart Experience",
            description: "Discover a traditional side of rural Maharashtra with a memorable bullock cart experience. The activity brings visitors closer to countryside culture and offers a slower, enjoyable way to appreciate the farm environment."
        },
        {
            title: "Nature Walk Around the Farm",
            description: "Take a peaceful walk through the natural surroundings and enjoy fresh air, greenery, open landscapes, and the calm atmosphere of the countryside. Nature walks are ideal for guests who want to relax between other recreational activities."
        },
        {
            title: "Family Picnic and Recreation",
            description: "Families can spend quality time together through outdoor recreation, water activities, farm exploration, traditional food, and open spaces. The variety of experiences makes the destination suitable for family members across different age groups."
        },
        {
            title: "Corporate Team Activities",
            description: "Corporate groups can step away from their regular office routine and enjoy an informal environment for team activities, outdoor games, shared meals, and group recreation. The countryside setting creates a refreshing atmosphere for employee interaction."
        },
        {
            title: "Traditional Maharashtrian Food",
            description: "Enjoy the flavours of traditional Maharashtrian cuisine in a peaceful rural environment. Regional food adds a cultural element to the resort experience and gives visitors an opportunity to enjoy a satisfying meal after outdoor activities."
        },
        {
            title: "Open Countryside Leisure",
            description: "Relax in the spacious countryside surroundings after participating in activities and exploring the farm. The calm environment is suitable for conversations, photography, family time, and simply enjoying a slower pace away from city life."
        },
        {
            title: "Group Day-Out Experience",
            description: "Plan a memorable outing with friends, family members, colleagues, or larger groups by combining recreation, nature, food, farm activities, and water-based entertainment. The varied setting makes it suitable for different types of gatherings."
        }
    ],

    services: [
        {
            name: "Best Resorts near Pune",
            description: "Enjoy a refreshing resort experience near Pune with peaceful farm surroundings, outdoor recreation, water activities, traditional food, and group-friendly experiences for families and visitors."
        },
        {
            name: "Pet friendly resorts near pune",
            description: "Plan a relaxed countryside outing with open surroundings, nature experiences, farm activities, and comfortable spaces for visitors searching for a pet-friendly resort experience."
        },
        {
            name: "Pune Resorts",
            description: "Experience a countryside resort atmosphere near Pune with outdoor activities, farm exploration, water recreation, traditional experiences, and peaceful spaces for leisure."
        },
        {
            name: "Resorts near pune for family",
            description: "Families can enjoy outdoor games, farm activities, water recreation, traditional dining, and relaxing countryside surroundings during a memorable day outing."
        },
        {
            name: "Adventure resorts near pune",
            description: "Combine a peaceful resort environment with outdoor adventure, group recreation, farm experiences, and water activities for an energetic getaway near Pune."
        },
        {
            name: "Resorts near pune with activities",
            description: "Enjoy a varied resort outing featuring farm exploration, outdoor recreation, nature activities, group games, water fun, and traditional rural experiences."
        },
        {
            name: "Resorts near pune for weekend",
            description: "Make your weekend refreshing with countryside relaxation, farm experiences, outdoor activities, traditional food, water recreation, and quality time with loved ones."
        },
        {
            name: "One day resort near pune",
            description: "Plan a convenient one-day outing with farm experiences, outdoor recreation, water activities, traditional food, and peaceful countryside surroundings."
        },
        {
            name: "Resorts near pune for couples",
            description: "Couples can enjoy a peaceful countryside escape with nature, outdoor recreation, traditional dining, relaxing surroundings, and quality time together."
        },
        {
            name: "resorts near pune for family get together",
            description: "Bring family members together for a memorable gathering with group activities, farm experiences, water recreation, traditional food, and open countryside spaces."
        },
        {
            name: "luxury resorts near pune",
            description: "Enjoy a comfortable countryside resort experience with recreational activities, nature, traditional food, water fun, and peaceful surroundings for a relaxing escape."
        },
        {
            name: "resorts near pune for family one day trip",
            description: "Make a family one-day trip enjoyable with outdoor games, farm exploration, water recreation, traditional food, and relaxing open spaces."
        },
        {
            name: "resort in pune for couples",
            description: "Enjoy a relaxing couple-oriented outing with peaceful countryside surroundings, nature experiences, traditional food, outdoor recreation, and quality leisure time."
        },
        {
            name: "one day resort near pune for family",
            description: "Families can enjoy a complete day with outdoor activities, farm experiences, water recreation, traditional dining, and peaceful rural surroundings."
        },
        {
            name: "good resorts near pune",
            description: "Discover a well-rounded resort experience combining nature, farm activities, outdoor recreation, water fun, traditional food, and relaxing surroundings."
        },
        {
            name: "resorts in pune for family",
            description: "Enjoy family time through outdoor games, farm exploration, water activities, traditional dining, and countryside recreation suitable for different age groups."
        },
        {
            name: "resorts around pune",
            description: "Experience a refreshing countryside getaway around Pune with farm activities, nature, outdoor recreation, traditional food, water fun, and group leisure."
        },
        {
            name: "one day picnic resorts near pune",
            description: "Turn a regular picnic into a complete day outing with outdoor games, farm exploration, water recreation, traditional food, and peaceful countryside surroundings."
        },
        {
            name: "resort with activities near pune",
            description: "Enjoy multiple recreational experiences including outdoor activities, farm exploration, nature walks, group games, water recreation, and traditional rural activities."
        },
        {
            name: "resort near by pune",
            description: "Plan a convenient countryside break near Pune with farm experiences, outdoor recreation, water activities, traditional food, and relaxing natural surroundings."
        },
        {
            name: "best resorts around pune",
            description: "Enjoy a complete countryside outing combining recreational activities, farm experiences, water fun, traditional food, nature, and peaceful open spaces."
        },
        {
            name: "weekend resorts near pune for family",
            description: "Families can enjoy a refreshing weekend with nature, outdoor recreation, farm experiences, water activities, traditional food, and relaxed countryside leisure."
        },
        {
            name: " resort and adventure park near pune",
            description: "Combine a resort-style countryside experience with adventure-oriented outdoor recreation, group activities, farm experiences, and refreshing water-based entertainment."
        },
        {
            name: "resort near pune for team outing",
            description: "Give teams a refreshing break with group games, outdoor recreation, farm activities, traditional food, and peaceful countryside surroundings."
        },
        {
            name: "resort with activities in pune",
            description: "Enjoy outdoor recreation, farm experiences, nature activities, group entertainment, water fun, and traditional food during a complete resort outing."
        },
        {
            name: "resort with water park near pune",
            description: "Add refreshing water-based recreation to your countryside outing while enjoying farm activities, outdoor games, traditional food, and peaceful surroundings."
        },
        {
            name: "resorts for team outing near pune",
            description: "Plan an engaging team outing with shared outdoor activities, farm exploration, group recreation, traditional food, water activities, and informal interaction."
        },
        {
            name: "resorts near pune for team outing",
            description: "Create a memorable team gathering through outdoor games, countryside experiences, farm activities, water recreation, and opportunities for employees to spend time together."
        },
        {
            name: "water park resort near pune",
            description: "Enjoy water-based recreation along with outdoor activities, farm experiences, traditional food, and relaxing countryside surroundings for an entertaining group outing."
        }
    ],

    tableData: [
        ["Best Resorts near Pune"],
        ["Pet friendly resorts near pune"],
        ["Pune Resorts"],
        ["Resorts near pune for family"],
        ["Adventure resorts near pune"],
        ["Resorts near pune with activities"],
        ["Resorts near pune for weekend"],
        ["One day resort near pune"],
        ["Resorts near pune for couples"],
        ["resorts near pune for family get together"],
        ["luxury resorts near pune"],
        ["resorts near pune for family one day trip"],
        ["resort in pune for couples"],
        ["one day resort near pune for family"],
        ["good resorts near pune"],
        ["resorts in pune for family"],
        ["resorts around pune"],
        ["one day picnic resorts near pune"],
        ["resort with activities near pune"],
        ["resort near by pune"],
        ["best resorts around pune"],
        ["weekend resorts near pune for family"],
        [" resort and adventure park near pune"],
        ["resort near pune for team outing"],
        ["resort with activities in pune"],
        ["resort with water park near pune"],
        ["resorts for team outing near pune"],
        ["resorts near pune for team outing"],
        ["water park resort near pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Environment",
            WhyChoosedescription: "Om Agri Tourism provides a refreshing change from the busy urban atmosphere, allowing visitors to spend quality time surrounded by open farm spaces, greenery, fresh air, and a calm rural setting."
        },
        {
            WhyChooseheading: "Family-Friendly Resort Experience",
            WhyChoosedescription: "Families can enjoy a balanced outing with outdoor recreation, farm exploration, water activities, traditional food, and relaxing spaces that make the experience enjoyable for different age groups."
        },
        {
            WhyChooseheading: "Activities for Groups",
            WhyChoosedescription: "Friends, colleagues, and larger groups can participate in outdoor games, farm activities, water recreation, and shared dining, creating opportunities for interaction and memorable group experiences."
        },
        {
            WhyChooseheading: "Refreshing Water Recreation",
            WhyChoosedescription: "Water-based entertainment adds a refreshing dimension to the resort visit and gives families and groups an enjoyable way to cool down and relax during their day outing."
        },
        {
            WhyChooseheading: "Authentic Rural Experience",
            WhyChoosedescription: "The farm environment allows visitors to experience a more natural side of leisure through countryside surroundings, agricultural spaces, traditional activities, nature exploration, and rural experiences."
        },
        {
            WhyChooseheading: "Ideal for One-Day Outings",
            WhyChoosedescription: "A combination of recreation, food, nature, farm activities, and water fun makes the destination suitable for visitors planning a convenient one-day picnic or short getaway near Pune."
        },
        {
            WhyChooseheading: "Suitable for Corporate Team Outings",
            WhyChoosedescription: "Corporate groups can move away from the usual office environment and enjoy outdoor activities, informal conversations, shared meals, and group recreation in a relaxed countryside setting."
        },
        {
            WhyChooseheading: "Different Experiences in One Destination",
            WhyChoosedescription: "Visitors can combine relaxation, nature, food, farm exploration, water recreation, outdoor activities, and group entertainment according to their plans, making the resort experience suitable for families, couples, friends, and teams."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good one day adventure resort near Pune?",
        answer: "Om Agri Tourism is a refreshing option for people looking for a one day adventure resort near Pune with a mix of outdoor recreation and countryside experiences. Visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching while spending a full day in a peaceful farm environment."
    },
    {
        question: "What adventure activities can we enjoy at Om Agri Tourism?",
        answer: "Guests at Om Agri Tourism can enjoy a variety of outdoor experiences, including swimming, boating, horse riding, tractor rides and bull cart rides. Bird watching and exploring the farm surroundings add a nature-oriented element to the day, making the outing enjoyable for families and groups."
    },
    {
        question: "Is Om Agri Tourism suitable for a one day adventure outing near Pune?",
        answer: "Those planning a one day adventure outing near Pune can enjoy a combination of recreational and farm-based experiences at Om Agri Tourism. The destination allows visitors to spend the day outdoors, participate in different activities and relax in a natural setting without planning an overnight trip."
    },
    {
        question: "Can families visit Om Agri Tourism for an adventure day near Pune?",
        answer: "Families can enjoy an active day at Om Agri Tourism with experiences suitable for both children and adults. Swimming, boating, tractor rides, bird watching and other outdoor activities provide opportunities for family members to have fun together while exploring the countryside."
    },
    {
        question: "Is Om Agri Tourism suitable for friends looking for adventure resorts near Pune?",
        answer: "Friends can choose Om Agri Tourism for a lively day away from the city, with several activities that encourage shared experiences. Boating, swimming, horse riding, tractor rides and bull cart rides give groups different ways to enjoy their outing and create memorable moments together."
    },
    {
        question: "Can children enjoy outdoor adventure activities at Om Agri Tourism?",
        answer: "Children can enjoy several outdoor experiences at Om Agri Tourism depending on their age and comfort. Activities such as boating, swimming, tractor rides and bird watching can keep younger visitors engaged, while parents or accompanying adults can supervise them appropriately."
    },
    {
        question: "Does Om Agri Tourism offer swimming and boating?",
        answer: "Yes, Om Agri Tourism offers both swimming and boating as part of its recreational experiences. These water-based activities can add excitement to a one day outing, while visitors can also participate in horse riding, farm rides and nature-based activities during the same visit."
    },
    {
        question: "Can visitors experience rural activities at Om Agri Tourism?",
        answer: "Along with recreational activities, Om Agri Tourism provides opportunities to experience traditional countryside activities. Bull cart rides, tractor rides and horse riding allow visitors to enjoy a different type of outdoor experience while surrounded by farmland and greenery."
    },
    {
        question: "Is homemade food available during an adventure day at Om Agri Tourism?",
        answer: "Visitors can enjoy homemade food during their day at Om Agri Tourism. A traditional meal complements the outdoor activities and gives guests a chance to relax and recharge while enjoying the farm atmosphere and spending time with family or friends."
    },
    {
        question: "Why choose Om Agri Tourism among one day adventure resorts near Pune?",
        answer: "Om Agri Tourism combines adventure-style recreation with nature and authentic farm experiences. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide plenty of activities for a one day outing, while the peaceful surroundings and homemade food create a complete countryside experience."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohan Babar",
        feedback:
            "Our friends planned a one day adventure outing at Om Agri Tourism and the experience was full of fun. We enjoyed boating, swimming and the tractor ride, and everyone had something interesting to try. The peaceful farm surroundings made the outing even better than we expected.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Shreya More",
        feedback:
            "Om Agri Tourism was a great choice for our family adventure day near Pune. We enjoyed horse riding and the bull cart ride, while the children loved swimming and exploring the farm. The homemade food and greenery made the entire day feel relaxed as well as exciting.",
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
  "name": "Resort Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/resort-near-pune.webp",
  "description": "Om Agro Tourism offers a refreshing Resort Near Pune experience for families, couples, friends, corporate groups and visitors looking for a peaceful break surrounded by countryside and natural surroundings. People searching for the Best Resorts near Pune can consider a destination that combines leisure, open spaces, agro-tourism experiences and outdoor recreation in a relaxed environment. Pet owners looking for Pet friendly resorts near Pune can also explore destinations where families can spend quality time together while enjoying a more open and nature-oriented setting. Visitors searching for Pune Resorts can choose an alternative to busy city properties by planning a day outing or recreational visit in a countryside atmosphere. Resorts near Pune for family are suitable for parents, children and extended family groups who want to enjoy shared time away from their regular routine. Adventure resorts near Pune can provide opportunities for outdoor recreation, group activities and nature-based experiences, making them suitable for active visitors and weekend planners. Guests comparing Resorts near Pune with activities can look for destinations that combine relaxation with engaging experiences for different age groups. Resorts near Pune for weekend plans can be an ideal choice for visitors who want a short escape from the city without undertaking a long journey. For people searching for a One day resort near Pune, Om Agro Tourism provides an option for spending a complete day with family, friends or colleagues in a refreshing countryside environment. Couples looking for Resorts near Pune for couples can enjoy a peaceful setting for quality time and a change from the busy urban atmosphere. Families planning resorts near Pune for family get together can use the destination for reunions, celebrations, picnics and informal gatherings. Visitors interested in luxury resorts near Pune can also explore a nature-focused experience that emphasizes peaceful surroundings, group comfort and memorable outdoor leisure. Om Agro Tourism is suitable for families, couples, corporate teams, school groups and friends planning day outings, weekend visits, celebrations and nature-based recreation. Its agro-tourism setting offers a pleasant combination of countryside charm, open spaces and leisure activities, making it a versatile resort destination near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/resort-near-pune"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Resort Near Pune | Family, Weekend, Adventure & Activity Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism is a refreshing resort near Pune for families, couples and groups, offering activities, outdoor recreation, weekend outings and peaceful countryside experiences."
  />

  <meta
    name="keywords"
    content="Resort Near Pune, Best Resorts near Pune, Pet friendly resorts near Pune, Pune Resorts, Resorts near Pune for family, Adventure resorts near Pune, Resorts near Pune with activities, Resorts near Pune for weekend, One day resort near Pune, Resorts near Pune for couples, resorts near Pune for family get together, luxury resorts near Pune, resorts near Pune for family, best resort near Pune, resorts near Pune for day outing, day outing resort near Pune, one day picnic resort near Pune, weekend resorts near Pune, weekend resort near Pune, family resorts near Pune, family resort near Pune, family outing resort near Pune, family get together resort near Pune, resort for family gathering near Pune, resorts for couples near Pune, couple resort near Pune, romantic resort near Pune, luxury resort near Pune, premium resorts near Pune, affordable resorts near Pune, best family resort near Pune, best weekend resort near Pune, adventure resort near Pune, activity resort near Pune, resorts with activities near Pune, resorts with outdoor activities near Pune, resorts near Pune with adventure activities, nature resort near Pune, nature resorts near Pune, countryside resort near Pune, agro tourism resort near Pune, agro tourism near Pune, farm resort near Pune, farm stay near Pune, picnic resort near Pune, picnic places near Pune, one day outing near Pune, one day trip resort near Pune, weekend getaway near Pune, weekend getaway resort near Pune, resorts near Pune for friends, group resorts near Pune, corporate resort near Pune, corporate outing resort near Pune, team outing resort near Pune, school outing resort near Pune, resorts near Pune for groups, resorts near Pune for celebrations, resort for birthday celebration near Pune, resort for family function near Pune, resort for reunion near Pune, pet friendly resort near Pune, pet friendly family resort near Pune, best resort for weekend near Pune, best resort for family outing near Pune, best resort for couples near Pune"
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
                            <img src='/images/keyword/12.jpg' alt='img' className='img-fluid' />
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

export default ResortNearPune;