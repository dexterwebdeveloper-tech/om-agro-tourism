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

function Picnicspotnearravet() {

const cardData = {
    keyword: "Picnic Spot Near Ravet",
    headingDescription: "Om Agro Tourism is a relaxing countryside destination for visitors searching for a picnic spot near Ravet. The destination combines rural surroundings with nature experiences, traditional activities, recreation, and homemade food, making it suitable for families, friends, and groups planning a one day picnic or short getaway. Visitors from Ravet, Kiwale, Dehu Road, and nearby Pune areas can enjoy a refreshing break with multiple experiences available during the same outing.",
    topPlaces: [
        {
            title: "Jungle Safari",
            description: "Jungle Safari is a suitable attraction for visitors searching for a nature picnic spot near Ravet who want to add outdoor exploration to their day. The experience gives families and groups an opportunity to enjoy a more adventurous side of the countryside while spending time away from the urban environment."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching creates a peaceful nature experience for guests who prefer a quieter picnic environment. It complements a relaxed family outing near Ravet by allowing visitors to observe the surrounding natural setting while taking a break from more active recreational activities."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride connects the picnic experience with the agricultural character of the destination and offers an enjoyable rural activity for families and children. It is particularly relevant for visitors looking for something different from conventional city entertainment."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride provides a traditional village experience that can make a one day trip near Ravet more distinctive. Families can enjoy this rural activity together while experiencing an aspect of countryside life that is rarely available in an urban picnic setting."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops are ideal for visitors who want their picnic to include an interactive rural experience. Guests can explore the farm environment and learn more about agricultural surroundings, making this attraction useful for families and groups seeking both recreation and exploration."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding brings an active outdoor element to the picnic and can be an enjoyable choice for families and groups looking for recreation during their day out. The activity adds variety to a family resort-style outing near Ravet without making the experience entirely water-focused."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food complements a family picnic by providing freshly prepared meals in the peaceful countryside setting. For visitors planning an affordable or budget-friendly day outing, having a satisfying food experience alongside recreational activities makes the visit more convenient."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide flexible entertainment for families, friends, and groups, particularly when visitors want an activity-based picnic near Ravet. Different game options allow children and adults to enjoy shared recreational time throughout the day."
        },
        {
            title: "Boating",
            description: "Boating offers a calmer recreational experience within the picnic itinerary and gives visitors an opportunity to enjoy time together around the water. It works well for families looking to balance active attractions with relaxed moments during their one day outing."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities add refreshing entertainment to the picnic experience and provide another option for families wanting more variety during their day. The water-based recreation can be combined with farm, nature, and outdoor activities for a fuller family outing."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Ravet",
            description: "Om Agro Tourism provides a peaceful countryside setting for visitors searching for a picnic spot near Ravet, combining nature, traditional rural activities, games, outdoor recreation, water-based entertainment, and homemade food."
        },
        {
            name: "One Day Picnic Spot Near Ravet",
            description: "A one day picnic spot near Ravet should provide enough variety to keep visitors engaged throughout the day. Farm experiences, rides, games, nature activities, water recreation, and food allow families and groups to create a complete day outing."
        },
        {
            name: "Best Picnic Spot Near Ravet",
            description: "Visitors comparing the best picnic spot near Ravet can consider a destination that offers more than an open picnic area. Om Agro Tourism combines rural surroundings with activities and experiences suitable for families, friends, and groups."
        },
        {
            name: "Family Picnic Spot Near Ravet",
            description: "A family picnic spot near Ravet can be more enjoyable when children and adults have different experiences to choose from. Games, rides, farm activities, nature exploration, water recreation, and food provide variety for the entire family."
        },
        {
            name: "Picnic Resort Near Ravet",
            description: "Om Agro Tourism is suitable for visitors searching for a picnic resort near Ravet where relaxation and recreation can be enjoyed together. The countryside setting provides a comfortable change from the busy urban surroundings."
        },
        {
            name: "One Day Picnic Resort Near Ravet",
            description: "A one day picnic resort near Ravet offers a convenient option for visitors who want a countryside escape without staying overnight. Guests can spend the day enjoying multiple activities, rural experiences, food, and leisure time."
        },
        {
            name: "Best Resort Near Ravet for Picnic",
            description: "Those looking for the best resort near Ravet for picnic plans can consider a destination that combines natural surroundings with entertainment and traditional experiences. Multiple activities help make the day more engaging for families and groups."
        },
        {
            name: "Family Resort Near Ravet",
            description: "A family resort near Ravet should offer experiences suitable for different age groups. Visitors can enjoy farm activities, traditional rides, games, outdoor recreation, water activities, and homemade meals during a shared family outing."
        },
        {
            name: "One Day Trip Near Ravet",
            description: "Planning a one day trip near Ravet becomes easier when several attractions are available at one destination. Families and friends can enjoy rural surroundings, activities, nature exploration, games, and food without needing to arrange a long-distance holiday."
        },
        {
            name: "Family One Day Trip Near Ravet",
            description: "A family one day trip near Ravet can combine relaxation with interactive experiences such as farm tours, traditional rides, games, nature activities, and water recreation, giving every member of the family something enjoyable to explore."
        },
        {
            name: "Picnic Places Near Ravet",
            description: "Visitors exploring picnic places near Ravet can choose Om Agro Tourism for its combination of rural surroundings, recreation, nature activities, traditional experiences, and dining options suitable for a complete day outing."
        },
        {
            name: "Best Picnic Places Near Ravet",
            description: "The best picnic places near Ravet can provide a broader experience than simply sitting outdoors. Om Agro Tourism brings together farm-based attractions, games, rides, nature exploration, water activities, and homemade food."
        },
        {
            name: "Affordable Picnic Spot Near Ravet",
            description: "An affordable picnic spot near Ravet can be a practical choice for families and groups who want multiple experiences within one day. Having several activities at one destination helps make a short outing convenient and worthwhile."
        },
        {
            name: "Budget Picnic Resort Near Ravet",
            description: "A budget picnic resort near Ravet provides a useful option for visitors seeking a countryside break without planning an expensive long-distance trip. Recreation, food, and natural surroundings can all be included within the day plan."
        },
        {
            name: "Picnic Spot Near Ravet Pune",
            description: "For visitors searching for a picnic spot near Ravet Pune, Om Agro Tourism offers a rural escape with traditional activities, nature-based experiences, games, water recreation, and homemade food suitable for families and groups."
        },
        {
            name: "Resort Near Ravet for Family Outing",
            description: "A resort near Ravet for family outing plans should provide activities that appeal to children and adults alike. Farm experiences, games, rides, nature activities, water recreation, and food help create a balanced family day."
        },
        {
            name: "One Day Resort Near Ravet",
            description: "A one day resort near Ravet is suitable for visitors who want to relax outside the city without arranging an overnight stay. The combination of outdoor experiences, recreational activities, and food provides enough variety for a full-day plan."
        },
        {
            name: "Nature Picnic Spot Near Ravet",
            description: "A nature picnic spot near Ravet gives visitors an opportunity to spend time around rural landscapes and outdoor surroundings. Bird Watching, Jungle Safari, and Farm Tours and Workshops make the outing more suitable for guests who enjoy nature and exploration."
        },
        {
            name: "Picnic Spot Near Kiwale Ravet",
            description: "Visitors looking for a picnic spot near Kiwale Ravet can consider a countryside destination offering multiple experiences in one place. Families and groups can combine rural activities, nature exploration, games, water recreation, and meals during their outing."
        },
        {
            name: "Picnic Spot Near Dehu Road Ravet",
            description: "A picnic spot near Dehu Road Ravet can provide a convenient escape for families and groups seeking a relaxing day outside the urban environment. The variety of activities allows visitors to build an outing around both recreation and relaxation."
        },
        {
            name: "Family Picnic Resort Near Ravet",
            description: "A family picnic resort near Ravet can provide a balanced day through rural activities, outdoor games, nature experiences, traditional rides, water recreation, and food. This variety helps families plan a shared outing without relying on a single attraction."
        },
        {
            name: "Picnic Spot with Activities Near Ravet",
            description: "A picnic spot with activities near Ravet offers visitors several ways to enjoy their day, including farm experiences, traditional rides, games, nature activities, boating, water recreation, and homemade food. This makes the destination suitable for active family and group outings."
        }
    ],
    tableData: [
        ["Picnic Spot Near Ravet"],
        ["One Day Picnic Spot Near Ravet"],
        ["Best Picnic Spot Near Ravet"],
        ["Family Picnic Spot Near Ravet"],
        ["Picnic Resort Near Ravet"],
        ["One Day Picnic Resort Near Ravet"],
        ["Best Resort Near Ravet for Picnic"],
        ["Family Resort Near Ravet"],
        ["One Day Trip Near Ravet"],
        ["Family One Day Trip Near Ravet"],
        ["Picnic Places Near Ravet"],
        ["Best Picnic Places Near Ravet"],
        ["Affordable Picnic Spot Near Ravet"],
        ["Budget Picnic Resort Near Ravet"],
        ["Picnic Spot Near Ravet Pune"],
        ["Resort Near Ravet for Family Outing"],
        ["One Day Resort Near Ravet"],
        ["Nature Picnic Spot Near Ravet"],
        ["Picnic Spot Near Kiwale Ravet"],
        ["Picnic Spot Near Dehu Road Ravet"],
        ["Family Picnic Resort Near Ravet"],
        ["Picnic Spot with Activities Near Ravet"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Rural Surroundings",
            WhyChoosedescription: "The countryside atmosphere provides a refreshing change from the busy urban environment around Ravet, giving visitors a comfortable setting to relax, explore nature, and spend uninterrupted time with family or friends."
        },
        {
            WhyChooseheading: "Adventure and Exploration",
            WhyChoosedescription: "Jungle Safari, Horse Riding, and outdoor experiences bring an adventurous side to the outing, making the destination suitable for groups that want more than a simple sit-down picnic."
        },
        {
            WhyChooseheading: "Authentic Farm Experiences",
            WhyChoosedescription: "Farm Tours and Workshops, Tractor Ride, and Bull Cart Ride introduce visitors to traditional rural activities and make the day more distinctive for families and children."
        },
        {
            WhyChooseheading: "Options for Family Groups",
            WhyChoosedescription: "Different activities allow children, adults, and larger groups to participate according to their interests. Games, rides, nature activities, and water recreation can all be included in the same family outing."
        },
        {
            WhyChooseheading: "Nature-Focused Recreation",
            WhyChoosedescription: "Bird Watching and Jungle Safari provide opportunities to appreciate the natural surroundings, making the destination suitable for visitors from Ravet who want a quieter outdoor experience alongside recreational activities."
        },
        {
            WhyChooseheading: "Water-Based Entertainment",
            WhyChoosedescription: "Water Park Activities and Boating introduce refreshing options to the picnic itinerary, giving families another way to enjoy their day beyond farm activities and outdoor games."
        },
        {
            WhyChooseheading: "Fresh Homemade Meals",
            WhyChoosedescription: "Tasty Homemade Food adds a comfortable dining experience to the outing and makes it easier for families and groups to spend more of their day at one destination rather than arranging separate meal stops."
        },
        {
            WhyChooseheading: "Convenient Day-Trip Experience",
            WhyChoosedescription: "Visitors from Ravet, Kiwale, Dehu Road, and nearby Pune areas can plan a countryside day out without turning it into a lengthy holiday. The range of attractions supports short trips, family outings, and one day picnic plans."
        }
    ]
};


const faqData = [
    {
        question: "What can visitors from Ravet experience at Om Agri Tourism?",
        answer: "A countryside visit to Om Agri Tourism can include a varied mix of recreation and rural experiences. Guests can spend time swimming and boating, try horse riding, tractor rides and bull cart rides, and enjoy bird watching and homemade food in a peaceful farm environment."
    },
    {
        question: "How is Om Agri Tourism different from a regular picnic place near Ravet?",
        answer: "The experience goes beyond sitting together for a meal by adding activities connected with farm and village life. Traditional rides, nature observation, water-based recreation and homemade food give visitors a more diverse way to spend their picnic day."
    },
    {
        question: "Can families from Ravet plan a full-day picnic at Om Agri Tourism?",
        answer: "Families can comfortably combine energetic activities with periods of rest throughout the day. Children may enjoy swimming and rides, while parents and senior members can choose boating, bird watching, food and relaxed time around the greenery according to their comfort."
    },
    {
        question: "Which activities can friends enjoy during a picnic near Ravet Pune?",
        answer: "A friends' outing can include group-friendly experiences such as swimming, boating and horse riding, followed by tractor or bull cart rides for something different. Sharing food, taking photographs and relaxing around the farm can complete the day without making the schedule feel rushed."
    },
    {
        question: "Is there a rural experience available for visitors searching for a picnic spot near Ravet?",
        answer: "Visitors can get a glimpse of countryside recreation through horse riding, tractor rides and bull cart rides. The surrounding farm atmosphere, greenery and bird watching create additional opportunities to experience a quieter rural environment away from the busy city."
    },
    {
        question: "What can children enjoy at Om Agri Tourism during a Ravet family outing?",
        answer: "Young guests can explore several outdoor experiences based on their age and comfort. Swimming, boating, horse riding, tractor rides and bull cart rides can add excitement, while bird watching introduces children to a calmer nature-based activity. Adult supervision is recommended during recreational activities."
    },
    {
        question: "Does Om Agri Tourism suit groups looking for both fun and relaxation near Ravet?",
        answer: "Different members of a group can follow different interests during the same visit. Active guests can choose swimming, boating or rides, whereas others may prefer homemade food, bird watching and sitting amid the farm greenery, making the destination suitable for mixed-age groups."
    },
    {
        question: "How should visitors from Ravet plan their one-day picnic itinerary?",
        answer: "An enjoyable plan can begin with swimming or boating, followed by horse riding or one of the traditional farm rides. After a meal break, visitors can keep the later part of the day flexible for bird watching, photography and relaxing rather than filling every hour with activities."
    },
    {
        question: "Can visitors enjoy homemade food along with outdoor activities at Om Agri Tourism?",
        answer: "Food can become a relaxing part of the picnic between different activities. Guests can take a break from swimming, boating and countryside rides to enjoy homemade food before returning to nature observation, conversations and other experiences around the farm."
    },
    {
        question: "Why might Om Agri Tourism be considered when looking for a picnic spot near Ravet?",
        answer: "For visitors wanting something beyond a typical urban outing, Om Agri Tourism combines recreational activities with a countryside atmosphere. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide variety, while the greenery and homemade food help create a relaxed day with family or friends."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohit Khedekar",
        feedback:
            "A change from our usual Ravet weekend plans was exactly what our group needed. The boating and swimming were enjoyable, but the tractor ride and bull cart experience made the outing feel completely different. We also liked having enough time to sit together, enjoy homemade food and take photographs around the farm.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Priyanka More",
        feedback:
            "The peaceful atmosphere made this family outing especially pleasant. My children were excited to try the outdoor activities and rides, while the grandparents enjoyed watching the birds and relaxing among the greenery. Having recreation and quiet family time in the same place made the whole day memorable.",
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
  "name": "Picnic Spot Near Ravet",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-ravet.webp",
  "description": "Picnic Spot Near Ravet is a suitable choice for families, friends, students, school groups, corporate teams, and visitors looking for a refreshing one-day escape from the busy urban routine. Om Agro Tourism offers a countryside-oriented agro-tourism environment where guests can spend quality time together and enjoy a peaceful change of surroundings away from the usual city schedule. A One Day Picnic Spot Near Ravet can be considered by people who want to enjoy a complete day outing without arranging an overnight stay. Those searching for the Best Picnic Spot Near Ravet can consider an outdoor destination for family gatherings, weekend recreation, friends' get-togethers, school picnics, college outings, corporate day trips, and special celebrations. The Family Picnic Spot Near Ravet is suitable for parents, children, relatives, and larger groups who want to relax and spend meaningful time together. Visitors looking for a Picnic Resort Near Ravet can consider an agro-tourism destination for a dedicated and comfortable day-outing experience in a countryside-inspired setting. A One Day Picnic Resort Near Ravet can be useful for groups that prefer spending their entire outing at one destination instead of travelling between multiple city attractions. Those searching for the Best Resort Near Ravet for Picnic can consider an outdoor environment for family recreation, friends' gatherings, student outings, and group activities. The Family Resort Near Ravet concept is suitable for visitors planning a relaxed day with children, parents, relatives, or close friends. The destination can be considered by people travelling from Ravet, Kiwale, Mamurdi, Dehu Road, Nigdi, Akurdi, Punawale, Tathawade, Wakad, Chinchwad, Pimpri, Pimple Saudagar, Pimple Nilakh, Thergaon, Hinjawadi, Mahalunge, Talegaon Dabhade, and other nearby Pune areas. Families can enjoy a refreshing change from regular city entertainment, while friends can plan a casual picnic or weekend outing away from their usual schedules. Schools and colleges may also consider the destination for recreational student trips, while corporate teams can plan informal employee gatherings and team outings in a different environment. Om Agro Tourism provides a rural-inspired atmosphere that can make a one-day outing feel different from spending time in crowded commercial areas. A One Day Picnic Near Ravet can be a practical option for visitors who want to enjoy an outdoor break and return home on the same day. People searching for Family One Day Trip Near Ravet, Picnic Places Near Ravet, Best Picnic Places Near Ravet, One Day Outing Near Ravet, or Weekend Picnic Near Ravet can consider an agro-tourism experience for a peaceful break near Pune. The open surroundings create an opportunity to step away from the fast pace of city life and spend uninterrupted time with family, friends, classmates, or colleagues. Whether the requirement is a family picnic, school outing, college trip, corporate gathering, friends' day out, or weekend recreation, Om Agro Tourism offers a suitable countryside-oriented concept for an enjoyable one-day experience near Ravet and Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-ravet"
  }
};





    return (
        <div>
<Helmet>
  <title>
    Picnic Spot Near Ravet | Best One Day Picnic & Family Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a Picnic Spot Near Ravet for families, friends, students and corporate groups looking for a peaceful one-day picnic, family outing and agro-tourism experience."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Ravet, One Day Picnic Spot Near Ravet, Best Picnic Spot Near Ravet, Family Picnic Spot Near Ravet, Picnic Resort Near Ravet, One Day Picnic Resort Near Ravet, Best Resort Near Ravet for Picnic, Family Resort Near Ravet, One Day Trip Near Ravet, Family One Day Trip Near Ravet, One Day Picnic Near Ravet, Picnic Places Near Ravet, Best Picnic Places Near Ravet, Family Picnic Near Ravet, One Day Outing Near Ravet, Best One Day Outing Near Ravet, Picnic Destination Near Ravet, Weekend Picnic Near Ravet, Weekend Outing Near Ravet, Family Outing Near Ravet, School Picnic Spot Near Ravet, School Picnic Places Near Ravet, College Picnic Near Ravet, Student Picnic Spot Near Ravet, Corporate Picnic Near Ravet, Corporate Outing Near Ravet, Agro Tourism Near Ravet, Agro Tourism Near Pune, Budget Picnic Spot Near Ravet, Picnic Resort Near Kiwale, One Day Picnic Near Mamurdi, Family Picnic Near Dehu Road, Picnic Places Near Nigdi, One Day Picnic Near Akurdi, Family Picnic Near Punawale, Picnic Spot Near Tathawade, One Day Picnic Near Wakad, Family Picnic Near Chinchwad, Picnic Resort Near Pimpri, One Day Picnic Near Pimple Saudagar, Family Picnic Near Hinjawadi, Picnic Spot Near Mahalunge, One Day Picnic Near Talegaon Dabhade, Family Picnic Near Pune"
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
                            <img src='/images/keyword/137.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearravet;