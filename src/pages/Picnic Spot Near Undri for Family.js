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

function Picnicspotnearundri() {

const cardData = {
    keyword: "Picnic Spot Near Undri for Family",
    headingDescription: "Searching for a Picnic Spot Near Undri for Family? Om Agro Tourism provides a peaceful countryside setting where families can enjoy farm experiences, nature, traditional activities, homemade food, and recreational options away from the city's busy routine. It is suitable for families planning a relaxed one day outing with children, parents, and friends while experiencing the natural and rural atmosphere of Pune.",
    topPlaces: [
        {
            title: "Bird Watching",
            description: "Enjoy peaceful moments surrounded by nature while observing different birds in the countryside environment. This activity gives families a relaxing way to connect with nature and makes the outing more enjoyable for children and adults."
        },
        {
            title: "Bull Cart Ride",
            description: "Experience a traditional village activity with a bull cart ride through the farm surroundings. It offers families a glimpse of rural life and creates a memorable experience that is different from typical city picnic activities."
        },
        {
            title: "Tasty Homemade Food",
            description: "Families can enjoy freshly prepared homemade food in a natural farm setting. The traditional dining experience adds a comforting touch to the outing and gives everyone an opportunity to relax and enjoy authentic flavors together."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Explore the agricultural environment through farm tours and workshops that introduce visitors to farming, rural activities, and the natural surroundings. These experiences are particularly enjoyable for families who want an educational element during their picnic."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Spend quality family time with recreational games suitable for different age groups. The combination of indoor and outdoor activities gives children and adults opportunities to stay active and enjoy friendly group entertainment."
        },
        {
            title: "Tractor Ride",
            description: "Add a genuine countryside experience to the family outing with a tractor ride around the agricultural surroundings. It provides children and adults with an enjoyable opportunity to experience a traditional farm environment."
        },
        {
            title: "Water Park Activities",
            description: "Families looking for more active entertainment can enjoy water-based recreational activities during their visit. These options bring variety to the day and help create an energetic and enjoyable picnic experience."
        },
        {
            title: "Jungle Safari",
            description: "Discover a more adventurous side of the destination with a jungle safari experience amid natural surroundings. It can add excitement to a family day trip and give visitors an experience beyond conventional picnic activities."
        },
        {
            title: "Boating",
            description: "Enjoy a calm boating experience while spending time with family in a natural setting. It provides a pleasant break between other activities and adds another memorable element to a complete one day picnic."
        },
        {
            title: "Horse Riding",
            description: "Horse riding offers families an engaging outdoor activity within the countryside environment. It can be an exciting experience for visitors who want to include something active and different in their family outing."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Undri for Family",
            description: "Om Agro Tourism offers families a refreshing countryside picnic experience with nature, farm activities, traditional rides, homemade food, games, and recreational options suitable for a complete family outing."
        },
        {
            name: "One Day Picnic Spot Near Undri",
            description: "Plan a complete one day picnic from Undri with opportunities to enjoy farm experiences, traditional activities, outdoor recreation, nature exploration, and freshly prepared food in a peaceful setting."
        },
        {
            name: "Best Picnic Spot Near Undri",
            description: "Families and groups can enjoy a varied picnic experience with rural surroundings, engaging activities, nature-based experiences, traditional rides, and food at one convenient destination."
        },
        {
            name: "Family Picnic Spot Near Undri",
            description: "The destination provides a family-friendly atmosphere where children and adults can enjoy shared activities, explore the countryside, taste homemade food, and spend relaxed time together."
        },
        {
            name: "Picnic Resort Near Undri",
            description: "Visitors searching for a picnic resort near Undri can enjoy a peaceful farm environment combined with recreational activities, countryside experiences, food, and opportunities for relaxation."
        },
        {
            name: "One Day Picnic Resort Near Undri",
            description: "A one day picnic resort experience can bring together nature, rural activities, traditional experiences, games, and dining, allowing families to enjoy a complete day without planning multiple destinations."
        },
        {
            name: "Best Resort Near Undri for Family",
            description: "Families can choose a countryside resort experience where different age groups have access to activities ranging from farm exploration and games to traditional rides, food, and nature experiences."
        },
        {
            name: "Family Resort Near Undri",
            description: "A family-focused rural setting provides opportunities for parents, children, and extended family members to relax together while participating in activities suited to different interests and age groups."
        },
        {
            name: "One Day Trip Near Undri",
            description: "Enjoy a refreshing one day trip from Undri with farm tours, nature experiences, traditional activities, recreational options, and homemade food in a relaxed countryside atmosphere."
        },
        {
            name: "Family One Day Trip Near Undri",
            description: "Families can plan an enjoyable day away from the city by combining outdoor activities, rural experiences, games, food, and nature exploration into one convenient itinerary."
        },
        {
            name: "Picnic Places Near Undri",
            description: "For visitors exploring picnic places near Undri, Om Agro Tourism provides a distinctive rural experience with agricultural activities, traditional countryside attractions, recreation, and food."
        },
        {
            name: "Best Picnic Places Near Undri",
            description: "A visit to Om Agro Tourism allows families and groups to enjoy several types of experiences in one location, from farm exploration and nature activities to games, rides, and dining."
        },
        {
            name: "Affordable Picnic Spot Near Undri",
            description: "Visitors looking for an affordable family outing can enjoy a range of countryside activities, nature experiences, traditional rides, games, and food without needing to visit several separate attractions."
        },
        {
            name: "Budget Picnic Resort Near Undri",
            description: "Om Agro Tourism can be considered for a budget-friendly day outing where families and groups can enjoy multiple activities and a peaceful farm atmosphere within one destination."
        },
        {
            name: "Picnic Spot Near Undri Pune",
            description: "Families from Undri and surrounding Pune areas can visit Om Agro Tourism for a countryside picnic featuring farm activities, traditional experiences, recreation, nature, and homemade food."
        },
        {
            name: "Resort Near Undri for Family Outing",
            description: "Families planning an outing can spend quality time in a rural setting with shared activities, open surroundings, farm experiences, traditional rides, and dining opportunities."
        },
        {
            name: "One Day Resort Near Undri",
            description: "A one day resort outing near Undri can include nature exploration, farm activities, recreational games, traditional countryside experiences, and food for a varied and relaxing day."
        },
        {
            name: "Nature Picnic Spot Near Undri",
            description: "Nature-focused visitors can enjoy bird watching, agricultural surroundings, greenery, and outdoor activities that provide a refreshing alternative to crowded urban picnic locations."
        },
        {
            name: "Picnic Spot Near Mohammadwadi Undri",
            description: "Visitors from Mohammadwadi and Undri can plan a countryside day outing featuring farm tours, traditional activities, nature experiences, games, food, and other recreational options."
        },
        {
            name: "Family Picnic Resort Near Undri",
            description: "A family picnic at Om Agro Tourism combines relaxing surroundings with activities that encourage shared experiences, making it suitable for children, parents, and larger family groups."
        },
        {
            name: "Picnic Spot Near Pune Undri",
            description: "Om Agro Tourism gives families from Undri and Pune access to a varied countryside experience with agricultural activities, traditional rides, recreation, nature, and homemade food."
        },
        {
            name: "Picnic Spot with Activities Near Undri",
            description: "Families searching for a picnic destination with activities can enjoy farm tours, traditional rides, games, water-based recreation, nature experiences, and other engaging options during their visit."
        }
    ],
    tableData: [
        ["Picnic Spot Near Undri for Family"],
        ["One Day Picnic Spot Near Undri"],
        ["Best Picnic Spot Near Undri"],
        ["Family Picnic Spot Near Undri"],
        ["Picnic Resort Near Undri"],
        ["One Day Picnic Resort Near Undri"],
        ["Best Resort Near Undri for Family"],
        ["Family Resort Near Undri"],
        ["One Day Trip Near Undri"],
        ["Family One Day Trip Near Undri"],
        ["Picnic Places Near Undri"],
        ["Best Picnic Places Near Undri"],
        ["Affordable Picnic Spot Near Undri"],
        ["Budget Picnic Resort Near Undri"],
        ["Picnic Spot Near Undri Pune"],
        ["Resort Near Undri for Family Outing"],
        ["One Day Resort Near Undri"],
        ["Nature Picnic Spot Near Undri"],
        ["Picnic Spot Near Mohammadwadi Undri"],
        ["Family Picnic Resort Near Undri"],
        ["Picnic Spot Near Pune Undri"],
        ["Picnic Spot with Activities Near Undri"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Family-Friendly Countryside Setting",
            WhyChoosedescription: "The peaceful farm environment gives families a comfortable place to step away from city routines and enjoy meaningful time together in a greener and more open atmosphere."
        },
        {
            WhyChooseheading: "Experiences Beyond a Regular Picnic",
            WhyChoosedescription: "Farm tours, traditional rides, nature activities, games, and recreational options make the outing more varied than simply spending a few hours at a conventional picnic location."
        },
        {
            WhyChooseheading: "Enjoyable for Children and Adults",
            WhyChoosedescription: "A mix of active and relaxed experiences allows children, parents, and senior family members to choose activities according to their interests and enjoy the day together."
        },
        {
            WhyChooseheading: "Authentic Farm Activities",
            WhyChoosedescription: "Visitors can experience elements of rural life through farm tours, tractor rides, bull cart rides, and other agricultural experiences that introduce families to the countryside."
        },
        {
            WhyChooseheading: "Nature-Oriented Day Out",
            WhyChoosedescription: "Bird watching, greenery, farm surroundings, and outdoor experiences create a refreshing environment for families who want to spend their day closer to nature."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Freshly prepared homemade food adds a traditional and satisfying element to the picnic, allowing families to enjoy meals together in a relaxed farm atmosphere."
        },
        {
            WhyChooseheading: "Multiple Activities in One Place",
            WhyChoosedescription: "Families can enjoy different experiences without travelling between several destinations, making it easier to plan a complete one day outing with varied activities."
        },
        {
            WhyChooseheading: "Convenient for Family Outings",
            WhyChoosedescription: "For visitors from Undri, Mohammadwadi, and nearby Pune areas, the destination offers an alternative countryside experience for family picnics, day trips, and group outings."
        }
    ]
};




const faqData = [
    {
        question: "What can families from Undri expect from a picnic at Om Agri Tourism?",
        answer: "Families travelling from Undri can enjoy a countryside escape filled with outdoor recreation and traditional farm experiences. Swimming, boating, horse riding, tractor rides and bull cart rides can be combined with bird watching, homemade food and relaxed time around the greenery for a pleasant family day out."
    },
    {
        question: "Which activities make Om Agri Tourism a family-friendly picnic spot near Undri?",
        answer: "The variety of experiences makes it possible for family members with different interests to enjoy the same outing. Children can take part in suitable recreational activities, while adults can enjoy boating, horse riding, countryside rides and peaceful time around the farm environment."
    },
    {
        question: "How should a family from Undri plan a one day picnic at Om Agri Tourism?",
        answer: "A balanced itinerary can begin with outdoor activities such as swimming or boating, followed by horse riding and traditional farm rides. Families can keep a comfortable break for homemade food and later spend time bird watching, taking photographs or simply relaxing in the natural surroundings."
    },
    {
        question: "Is Om Agri Tourism suitable for a family outing with children near Undri?",
        answer: "Parents can introduce children to a different kind of day trip through farm-based and outdoor experiences. Swimming, boating, tractor rides and horse riding can keep younger visitors engaged, while bird watching and rural surroundings add an educational and nature-oriented element to the outing. Adult supervision should be maintained during activities."
    },
    {
        question: "Can grandparents also enjoy a family picnic at Om Agri Tourism?",
        answer: "A multigenerational family can choose activities according to everyone's comfort level. While younger members enjoy swimming, boating or rides, grandparents can spend their time appreciating the greenery, observing birds, enjoying a traditional meal and experiencing the calm atmosphere of the countryside."
    },
    {
        question: "What kind of rural experience can families from Undri enjoy during their picnic?",
        answer: "Instead of a conventional city outing, families can experience elements of countryside life through tractor rides, bull cart rides, horse riding and farm surroundings. These activities, along with homemade food and nature observation, give the family an opportunity to spend quality time together in a rural setting."
    },
    {
        question: "Does Om Agri Tourism provide relaxing activities for families visiting from Undri?",
        answer: "Not every family member needs to follow an activity-packed schedule. Guests can alternate swimming or boating with quieter moments around the farm, bird watching and enjoying a homemade meal. The open surroundings allow families to create a relaxed itinerary that suits both active and leisure-oriented visitors."
    },
    {
        question: "Why is a farm picnic a good option for families looking for a break from Undri?",
        answer: "A farm outing provides a change from the familiar urban environment by bringing families closer to greenery, outdoor recreation and traditional rural activities. Spending the day together through boating, swimming, farm rides, nature observation and shared meals can make the experience more refreshing than an ordinary city outing."
    },
    {
        question: "Can families from Undri enjoy food and activities together at Om Agri Tourism?",
        answer: "Yes, a family can combine its activity schedule with a comfortable meal break featuring homemade food. After eating, members can continue with experiences such as bird watching, horse riding, boating, tractor rides or bull cart rides, allowing the picnic to include both recreation and shared family time."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Undri for family?",
        answer: "For families seeking a memorable day outside the city, Om Agri Tourism brings together swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food within a countryside setting. The combination of recreation, nature and rural experiences makes it a suitable option for a family-focused picnic from Undri."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Nitin Jadhav",
        feedback:
            "Our family travelled from Undri for a day at Om Agri Tourism and really enjoyed having different activities in one place. The children were excited about swimming and the tractor ride, while the bull cart ride and boating gave all of us something fun to experience together. The homemade food and greenery made the outing feel relaxed.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Rutuja Sawant",
        feedback:
            "We wanted a family picnic away from the busy surroundings of Pune, and Om Agri Tourism gave us exactly that kind of change. Horse riding and boating were enjoyed by the younger members, while the elders preferred bird watching and relaxing around the farm. It was a refreshing day with good family time and memorable rural experiences.",
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
  "name": "Picnic Spot Near Undri for Family",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-undri-for-family.webp",
  "description": "Picnic Spot Near Undri for Family is a suitable choice for parents, children, extended families, friends, and groups looking for a refreshing one-day escape near Pune. Om Agro Tourism offers an agro-tourism-oriented countryside setting where visitors can step away from their everyday routine and spend quality time together through outdoor leisure, relaxed recreation, and shared group experiences. A One Day Picnic Spot Near Undri can be convenient for families who want to enjoy a short outing without arranging an overnight stay. Those searching for the Best Picnic Spot Near Undri can plan family gatherings, weekend picnics, birthday celebrations, friends' get-togethers, school outings, or casual day trips in a peaceful outdoor environment. The Family Picnic Spot Near Undri is particularly suitable for groups with children and extended family members who want to enjoy meaningful time together away from crowded city surroundings. Visitors looking for a Picnic Resort Near Undri or One Day Picnic Resort Near Undri can consider an agro-tourism destination where the countryside atmosphere adds a refreshing touch to a regular day outing. The location can be convenient for visitors from Undri, Mohammadwadi, NIBM, Kondhwa, Wanowrie, Handewadi, Pisoli, Hadapsar, Magarpatta, Katraj, and nearby Pune areas. It can also be considered by families travelling from Fursungi, Manjari, Kharadi, Viman Nagar, and other surrounding neighbourhoods. Om Agro Tourism provides a relaxed setting for family picnics, school excursions, corporate outings, friends' trips, birthdays, and weekend recreation. Visitors can plan their outing according to their group requirements and enjoy open surroundings, outdoor time, and an agro-tourism experience. For families searching for a Picnic Spot Near Undri for Family, this type of countryside destination offers a simple way to take a break from regular schedules and create enjoyable memories together.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-undri-for-family"
  }
};






    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Undri for Family | Best One Day Picnic Resort & Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Find a Picnic Spot Near Undri for Family with a peaceful agro-tourism setting suitable for one-day family outings, friends, school groups and corporate picnics."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Undri for Family, One Day Picnic Spot Near Undri, Best Picnic Spot Near Undri, Family Picnic Spot Near Undri, Picnic Resort Near Undri, One Day Picnic Resort Near Undri, Best Resort Near Undri, Best Resort Near Undri for Picnic, Family Resort Near Undri, One Day Picnic Near Undri, Picnic Places Near Undri, Best Picnic Places Near Undri, Family Picnic Near Undri, One Day Outing Near Undri, Best One Day Outing Near Undri, Picnic Resorts Near Undri, One Day Trip Near Undri, Family One Day Trip Near Undri, Family Outing Near Undri, Weekend Picnic Near Undri, School Picnic Spot Near Undri, School Picnic Near Undri, Corporate Outing Near Undri, Agro Tourism Near Undri, Agro Tourism Near Pune, Picnic Spot Near Mohammadwadi, One Day Picnic Near NIBM Pune, Picnic Places Near Kondhwa, Family Picnic Near Wanowrie, One Day Picnic Near Handewadi, Picnic Resort Near Pisoli, Family Picnic Near Hadapsar, One Day Picnic Near Magarpatta, Picnic Spot Near Katraj, Family Picnic Near Fursungi, One Day Picnic Near Manjari, Picnic Places Near Kharadi, Family Picnic Near Viman Nagar, One Day Picnic Near Pune, Family Picnic Near Pune"
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
                            <img src='/images/keyword/123.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearundri;