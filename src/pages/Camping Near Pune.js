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

function Campingnearpune() {


const cardData = {
    keyword: "Pune Camping Places",
    headingDescription: "Om Agro Tourism offers a peaceful countryside setting for visitors searching for camping places near Pune. Families, couples, friends, and groups can enjoy an outdoor getaway surrounded by greenery, along with activities such as boating, jungle safari, horse riding, tractor rides, bull cart rides, farm tours, games, water park activities, and homemade food. The destination is suitable for weekend outings, overnight experiences, group picnics, and visitors looking to spend quality time close to nature.",

    topPlaces: [
        {
            title: "Boating",
            description: "Boating offers a calm outdoor experience where visitors can enjoy tranquil surroundings and spend relaxing moments on the water. It adds a peaceful nature activity to a camping or countryside outing with family, friends, or a partner."
        },
        {
            title: "Jungle Safari",
            description: "Jungle Safari brings an adventurous element to the outdoor experience, allowing visitors to explore natural surroundings and enjoy time away from busy city life. It is an engaging activity for groups and nature-loving guests."
        },
        {
            title: "Tasty home made food",
            description: "Tasty home made food gives visitors an opportunity to enjoy fresh and comforting meals during their countryside stay. The traditional farm-style dining experience complements an outdoor getaway and makes the overall visit more enjoyable."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding provides an enjoyable way to experience the scenic farm landscape while spending time outdoors. Visitors can explore the surroundings at a relaxed pace and add a memorable rural activity to their camping experience."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops allow visitors to understand everyday agricultural activities while experiencing the countryside environment. Guests can learn about planting, harvesting, animal care, and other aspects of farm life during their visit."
        },
        {
            title: "Birds Watching",
            description: "Birds Watching is a peaceful activity for visitors who enjoy nature and wildlife. The green surroundings provide opportunities to observe beautiful birds and enjoy quiet moments away from the noise and routine of the city."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride provides an authentic rural experience where visitors can explore the farm surroundings in a traditional way. It is a relaxed and memorable activity for families, couples, friends, and groups."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games give camping groups additional entertainment throughout their visit. Families, friends, and children can participate in friendly activities together, making the outdoor getaway more interactive and enjoyable."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride offers visitors a distinctive way to explore the farm and experience rural surroundings. The activity adds variety to a camping trip and provides an enjoyable countryside experience for guests of different age groups."
        },
        {
            title: "Swimming Pool",
            description: "The Swimming Pool provides a refreshing option for guests who want to relax and cool down during their outdoor getaway. Surrounded by greenery, it adds a recreational element to a peaceful countryside camping experience."
        }
    ],

    services: [
        {
            name: "Camping Near Pune",
            description: "Camping Near Pune can be a refreshing way to spend time outdoors with family, friends, or groups. Om Agro Tourism provides a peaceful farm environment along with nature-based activities, games, food, and recreational attractions."
        },
        {
            name: "camping near pune",
            description: "Visitors searching for camping near pune can enjoy a countryside experience away from busy urban surroundings. Om Agro Tourism combines outdoor recreation with farm activities, boating, games, nature experiences, and homemade food."
        },
        {
            name: "Camping near pune for couples",
            description: "Camping near Pune for couples can provide an opportunity to spend quality time together in a peaceful outdoor environment. Om Agro Tourism offers boating, horse riding, nature experiences, homemade food, and relaxing farm surroundings."
        },
        {
            name: "Best camping near pune",
            description: "The Best camping near Pune can offer more than an outdoor stay by providing activities, food, nature, and comfortable recreational options. Om Agro Tourism combines countryside surroundings with several experiences for couples, families, and groups."
        },
        {
            name: "Night camping near pune",
            description: "Night camping near Pune can be an enjoyable way to experience the countryside after sunset and spend extended time outdoors. Om Agro Tourism provides a peaceful natural environment along with activities and attractions for visitors."
        },
        {
            name: "Tent stay near pune",
            description: "A Tent stay near Pune can be a memorable option for visitors who want to experience an outdoor getaway. Om Agro Tourism provides a countryside atmosphere where guests can enjoy nature, farm experiences, food, and recreational activities."
        },
        {
            name: "Lake camping near pune",
            description: "Lake camping near Pune can appeal to visitors who enjoy peaceful surroundings and outdoor experiences near water. Om Agro Tourism offers boating and other nature-oriented activities that complement a relaxing countryside visit."
        },
        {
            name: "Camping places near pune",
            description: "Camping places near Pune can provide a convenient escape for people looking to spend time close to nature. Om Agro Tourism offers farm surroundings, boating, games, horse riding, nature activities, and homemade food."
        },
        {
            name: "Luxury camping near pune",
            description: "Luxury camping near Pune can combine the charm of an outdoor experience with enjoyable recreational facilities and a peaceful environment. Om Agro Tourism offers a variety of activities, food options, and countryside experiences for visitors."
        },
        {
            name: "Overnight camping near pune",
            description: "Overnight camping near Pune allows visitors to extend their countryside experience beyond a daytime picnic. Om Agro Tourism provides a peaceful farm setting along with activities such as boating, games, farm tours, and outdoor recreation."
        },
        {
            name: "Camping near pune for family",
            description: "Camping near Pune for family can be a rewarding way to spend quality time together away from everyday routines. Om Agro Tourism offers family-friendly activities including games, boating, farm tours, horse riding, and nature experiences."
        },
        {
            name: "Camping in pune for couples",
            description: "Camping in Pune for couples can offer a relaxed outdoor experience surrounded by greenery and peaceful surroundings. Om Agro Tourism provides activities such as boating, horse riding, bird watching, and farm experiences for a memorable visit."
        },
        {
            name: "Best camping places near pune",
            description: "The Best camping places near Pune can provide a combination of nature, activities, food, and outdoor relaxation. Om Agro Tourism offers a varied countryside experience suitable for families, couples, friends, and groups."
        },
        {
            name: "Tent camping near pune",
            description: "Tent camping near Pune can be an enjoyable way to reconnect with nature and experience a peaceful outdoor environment. Om Agro Tourism complements the experience with farm activities, boating, games, food, and recreational attractions."
        },
        {
            name: "Couple camping near pune",
            description: "Couple camping near Pune can provide a quiet opportunity to spend quality time together away from the city. Om Agro Tourism offers scenic farm surroundings along with boating, horse riding, bird watching, and homemade food."
        },
        {
            name: "Camping near pune for friends",
            description: "Camping near Pune for friends can be a fun group experience filled with outdoor activities and shared moments. Om Agro Tourism provides games, boating, horse riding, tractor rides, farm tours, and other attractions suitable for groups."
        },
        {
            name: "new year camping near pune",
            description: "New year camping near Pune can be an exciting way to celebrate with friends or family in a countryside setting. Om Agro Tourism offers outdoor activities, games, nature experiences, food, and recreational attractions for group outings."
        },
        {
            name: "Camping for couples near pune",
            description: "Camping for couples near Pune can create a relaxed setting for spending meaningful time together. Om Agro Tourism provides peaceful surroundings with activities such as boating, horse riding, bird watching, and farm experiences."
        },
        {
            name: "Pune camping places",
            description: "Pune camping places can provide visitors with an outdoor escape without requiring a long journey. Om Agro Tourism combines a farm-based environment with boating, games, nature activities, food, and several countryside attractions."
        },
        {
            name: "Camping at pune",
            description: "Camping at Pune can be a refreshing option for visitors wanting to spend time outdoors and enjoy a break from city routines. Om Agro Tourism offers a peaceful setting supported by farm activities, recreational attractions, and homemade food."
        },
        {
            name: "Camping near pune maharashtra",
            description: "Camping near Pune Maharashtra can be suitable for families, couples, friends, and groups looking for a countryside getaway. Om Agro Tourism provides nature-based experiences, farm activities, boating, games, and traditional homemade food."
        },
        {
            name: "Camping sites in pune",
            description: "Camping sites in Pune can offer different outdoor experiences depending on activities and surroundings. Om Agro Tourism provides a farm-based setting where visitors can combine camping with boating, horse riding, games, farm tours, and nature activities."
        },
        {
            name: "Camping spot near pune",
            description: "A Camping spot near Pune can be an ideal choice for a short escape into peaceful surroundings. Om Agro Tourism offers greenery, open farm landscapes, recreational activities, homemade food, and opportunities to spend quality time outdoors."
        },
        {
            name: "Camping spots near pune",
            description: "Camping spots near Pune can provide families and groups with an opportunity to enjoy nature away from crowded city areas. Om Agro Tourism combines countryside relaxation with boating, games, farm experiences, horse riding, and homemade meals."
        },
        {
            name: "weekend camping near pune",
            description: "Weekend camping near Pune can be a convenient way to refresh and recharge after a busy week. Om Agro Tourism offers a peaceful farm environment with boating, nature activities, games, food, and rural experiences for a memorable weekend outing."
        }
    ],

    tableData: [
        ["Camping Near Pune"],
        ["camping near pune"],
        ["Camping near pune for couples"],
        ["Best camping near pune"],
        ["Night camping near pune"],
        ["Tent stay near pune"],
        ["Lake camping near pune"],
        ["Camping places near pune"],
        ["Luxury camping near pune"],
        ["Overnight camping near pune"],
        ["Camping near pune for family"],
        ["Camping in pune for couples"],
        ["Best camping places near pune"],
        ["Tent camping near pune"],
        ["Couple camping near pune"],
        ["Camping near pune for friends"],
        ["new year camping near pune"],
        ["Camping for couples near pune"],
        ["Pune camping places"],
        ["Camping at pune"],
        ["Camping near pune maharashtra"],
        ["Camping sites in pune"],
        ["Camping spot near pune"],
        ["Camping spots near pune"],
        ["weekend camping near pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Camping",
            WhyChoosedescription: "Om Agro Tourism provides a calm farm environment surrounded by greenery and open spaces, allowing visitors to step away from busy city routines and enjoy a more refreshing outdoor experience."
        },
        {
            WhyChooseheading: "Suitable for Couples and Families",
            WhyChoosedescription: "The destination offers activities and surroundings suitable for couples, families, friends, and groups, making it possible for different visitors to enjoy their own style of outdoor getaway."
        },
        {
            WhyChooseheading: "Wide Range of Activities",
            WhyChoosedescription: "Guests can complement their camping experience with boating, horse riding, tractor rides, bull cart rides, jungle safari, games, swimming, farm tours, and other recreational activities."
        },
        {
            WhyChooseheading: "Nature and Rural Experiences",
            WhyChoosedescription: "Farm tours, bird watching, traditional bull cart rides, tractor rides, and peaceful landscapes allow visitors to experience the natural and rural side of the destination while enjoying time outdoors."
        },
        {
            WhyChooseheading: "Ideal for Weekend Getaways",
            WhyChoosedescription: "A combination of outdoor relaxation, recreational activities, homemade food, and countryside surroundings makes Om Agro Tourism a suitable option for visitors planning a refreshing weekend break near Pune."
        },
        {
            WhyChooseheading: "Homemade Food",
            WhyChoosedescription: "Tasty homemade food adds a traditional farm-style dining experience to the outdoor visit. Guests can enjoy fresh and comforting meals after participating in camping activities and exploring the property."
        },
        {
            WhyChooseheading: "Fun for Groups",
            WhyChoosedescription: "Friends, family groups, school groups, and other visitors can participate in indoor and outdoor games, boating, farm activities, and recreational attractions together, making the destination suitable for shared outings."
        },
        {
            WhyChooseheading: "Complete Outdoor Experience",
            WhyChoosedescription: "Om Agro Tourism combines nature, recreation, food, rural activities, and water-based experiences, allowing visitors to enjoy more than a basic camping trip and create memorable moments in a peaceful setting."
        }
    ]
};



const faqData = [
    {
        question: "Can Om Agri Tourism be considered for camping near Pune?",
        answer: "People looking for a countryside escape near Pune can consider Om Agri Tourism for an outdoor-oriented experience surrounded by farm greenery. The peaceful setting provides an opportunity to spend quality time away from the city's routine while enjoying recreational and nature-based activities."
    },
    {
        question: "What activities can visitors enjoy during a camping-style outing at Om Agri Tourism?",
        answer: "Guests can make their countryside visit more engaging with activities such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These experiences provide a combination of recreation, rural exploration and time spent in an open farm environment."
    },
    {
        question: "Is Om Agri Tourism suitable for a weekend getaway near Pune?",
        answer: "A visit to Om Agri Tourism can be a refreshing option for families, friends and groups planning a break from their regular schedule. The farm surroundings, outdoor activities and relaxed atmosphere allow visitors to enjoy a nature-focused getaway without staying within the busy city environment."
    },
    {
        question: "What makes Om Agri Tourism different from regular camping places near Pune?",
        answer: "The experience at Om Agri Tourism is centered around a farm and rural setting rather than only traditional camping activities. Visitors can combine outdoor recreation with swimming, boating, traditional bull cart rides, tractor rides and opportunities to observe birds and nature."
    },
    {
        question: "Can families enjoy an outdoor stay experience at Om Agri Tourism?",
        answer: "Families can spend time together in the open surroundings while choosing activities according to their interests. Swimming, boating and horse riding can add recreation to the visit, while tractor rides, bull cart rides and bird watching provide children and adults with distinctive countryside experiences."
    },
    {
        question: "Are there nature activities available at Om Agri Tourism near Pune?",
        answer: "Bird watching is one of the nature-oriented activities visitors can enjoy during their time at the farm. The surrounding greenery also creates a pleasant backdrop for outdoor recreation, allowing guests to combine active experiences with peaceful moments in the countryside."
    },
    {
        question: "Can friends plan a camping trip to Om Agri Tourism near Pune?",
        answer: "Friends can plan an outdoor-focused visit by enjoying activities such as boating, swimming and horse riding together. Traditional experiences like tractor rides and bull cart rides can add variety, while the farm atmosphere provides a relaxed setting for group conversations and shared memories."
    },
    {
        question: "Is homemade food available as part of the Om Agri Tourism experience?",
        answer: "Homemade food can complement the countryside experience by giving visitors the opportunity to enjoy a traditional-style meal during their outing. Sharing food after outdoor activities can make the overall visit more comfortable and enjoyable for families and groups."
    },
    {
        question: "What should groups expect from an outdoor outing at Om Agri Tourism?",
        answer: "Groups can expect a mix of recreational and rural experiences rather than a single activity. Swimming, boating, horse riding, bird watching and traditional rides offer different ways to spend the day, making the destination suitable for friends, families and organized groups seeking a break near Pune."
    },
    {
        question: "Why can Om Agri Tourism be a memorable camping alternative near Pune?",
        answer: "The combination of farm greenery, outdoor recreation and rural experiences gives visitors several ways to enjoy their time together. From swimming and boating to horse riding, tractor rides, bull cart rides and bird watching, the varied activities can create a refreshing countryside experience near Pune."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohan Deshmukh",
        feedback:
            "Our friends' group wanted an outdoor experience near Pune where we could do more than simply sit around. Om Agri Tourism gave us plenty to enjoy, including boating, swimming and horse riding. The tractor ride and peaceful farm surroundings made the day feel completely different from our usual city outings.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Priyanka More",
        feedback:
            "We visited Om Agri Tourism for a relaxing countryside break and really enjoyed the atmosphere. Bird watching and the bull cart ride were especially memorable, while the homemade food added a nice traditional touch. It was a refreshing experience for our group and a great change from the regular weekend routine.",
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
  "name": "Pune Camping Places",
  "image": "https://www.omagrotourism.com/assets/images/pune-camping-places.webp",
  "description": "Om Agro Tourism offers a refreshing Pune Camping Places experience for couples, families, friends and groups who want to spend time outdoors surrounded by greenery, open spaces and peaceful countryside landscapes. Camping Near Pune can be an enjoyable way to take a break from the city's busy routine and experience nature through outdoor recreation, tent accommodation and relaxed evenings. Visitors searching for camping near Pune for couples can consider a peaceful setting where two people can enjoy quality time away from crowded urban areas. The Best Camping Near Pune can appeal to visitors looking for a combination of natural surroundings, comfortable arrangements and memorable outdoor experiences. Night Camping Near Pune provides an opportunity to experience the countryside after sunset, enjoy group conversations, outdoor leisure and a different atmosphere from a regular resort stay. Tent Stay Near Pune is suitable for visitors who want to experience a simple outdoor accommodation style while remaining connected to nature and open surroundings. People searching for Lake Camping Near Pune can explore camping destinations associated with peaceful water views and natural landscapes, subject to the specific location and available seasonal arrangements. Camping Places Near Pune can suit weekend plans, one-night getaways, family outings, couple trips, friend groups and corporate recreation. Luxury Camping Near Pune can be considered by visitors who prefer a more comfortable outdoor experience with suitable amenities while still enjoying the atmosphere of camping. Overnight Camping Near Pune is another option for travellers who want to spend more time in a countryside environment instead of returning to the city on the same day. Families looking for Camping Near Pune for Family can enjoy an outdoor setting where parents and children can spend quality time together through nature observation, group games and suitable recreational activities. Camping in Pune for Couples can provide a relaxed experience for couples interested in greenery, open surroundings and peaceful evenings. Om Agro Tourism combines camping with an agro-tourism environment, allowing visitors to experience agricultural landscapes, countryside scenery and nature-oriented recreation. Guests can enjoy outdoor activities, group interaction, fresh surroundings and leisure time according to available facilities, weather conditions and package arrangements. Monsoon camping can offer lush green scenery, while winter is generally suitable for comfortable outdoor activities and night stays. Summer camping can be planned around suitable timings and available arrangements. Families, couples, friends and corporate groups can discuss tent requirements, food preferences, group size and activity options while planning their visit. The destination can also work for short weekend getaways, birthday gatherings, group celebrations and nature-focused breaks. Visitors from Pune, Pimpri Chinchwad and nearby areas can consider Om Agro Tourism when searching for a convenient camping destination without planning a long-distance journey. The peaceful surroundings provide an alternative to conventional city accommodation and allow guests to experience a closer connection with nature. Om Agro Tourism can therefore be considered by people searching for Pune Camping Places, Camping Near Pune, Tent Stay Near Pune, Lake Camping Near Pune, Luxury Camping Near Pune and Best Camping Places Near Pune. With its countryside atmosphere, open spaces and outdoor possibilities, the destination offers a memorable setting for visitors planning a relaxing camping experience near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/pune-camping-places"
  }
};









    return (
        <div>



<Helmet>
  <title>
    Pune Camping Places | Best Camping, Tent Stay & Night Camping Near Pune | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers camping places near Pune with tent stays, night camping, family camping, couple getaways, outdoor recreation and peaceful countryside surroundings."
  />

  <meta
    name="keywords"
    content="Pune Camping Places, Camping Near Pune, camping near pune, Camping near pune for couples, Best camping near pune, Night camping near pune, Tent stay near pune, Lake camping near pune, Camping places near pune, Luxury camping near pune, Overnight camping near pune, Camping near pune for family, Camping in pune for couples, Best camping places near pune, camping places in Pune, best camping places in Pune, camping sites near Pune, best camping sites near Pune, camping spot near Pune, best camping spots near Pune, camping destination near Pune, camping locations near Pune, outdoor camping near Pune, nature camping near Pune, camping resort near Pune, camping resort near Pune for couples, camping resort near Pune for family, camping near Pune for friends, camping near Pune for groups, camping near Pune for weekend, weekend camping near Pune, weekend camping places near Pune, one day camping near Pune, one night camping near Pune, overnight camping places near Pune, overnight stay camping near Pune, night camping places near Pune, night camping in Pune, night camping places in Pune, tent camping near Pune, tent stay near Pune, tent stay places near Pune, tent accommodation near Pune, camping with tent near Pune, luxury camping near Pune, luxury tent stay near Pune, luxury camping resort near Pune, glamping near Pune, glamping places near Pune, best glamping near Pune, family camping near Pune, family camping places near Pune, family tent stay near Pune, camping for family near Pune, camping for couples near Pune, couple camping near Pune, couple camping places near Pune, romantic camping near Pune, romantic tent stay near Pune, camping for friends near Pune, group camping near Pune, group camping places near Pune, corporate camping near Pune, corporate camping near Pune for team outing, team camping near Pune, camping for corporate outing near Pune, school camping near Pune, school camping places near Pune, camping for students near Pune, lake camping near Pune, lakeside camping near Pune, lake side camping near Pune, lakeside tent stay near Pune, lake camping places near Pune, camping near lake Pune, nature camping near Pune, forest camping near Pune, jungle camping near Pune, farm camping near Pune, farm camping places near Pune, agro tourism camping near Pune, agro tourism camping places near Pune, camping resort near Pune with activities, camping with activities near Pune, adventure camping near Pune, adventure camping places near Pune, camping and adventure near Pune, camping near Pune with activities, camping with food near Pune, camping with dinner near Pune, camping with bonfire near Pune, camping with bonfire near Pune for couples, camping with bonfire near Pune for family, camping with music near Pune, camping weekend getaway near Pune, camping trip near Pune, camping getaway near Pune, peaceful camping near Pune, nature stay near Pune, weekend nature stay near Pune, outdoor stay near Pune, countryside camping near Pune, countryside tent stay near Pune, best overnight camping near Pune, best tent stay near Pune, best lake camping near Pune, best family camping near Pune, best couple camping near Pune, best luxury camping near Pune, camping near Pimpri Chinchwad, camping places near Pimpri Chinchwad, camping near PCMC, camping near Wakad, camping near Hinjewadi, camping near Chinchwad, camping near Bhosari, camping near Lonavala, camping near Mulshi, camping near Pune for weekend getaway"
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
                            <img src='/images/keyword/80.jpg' alt='img' className='img-fluid' />
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

export default Campingnearpune;