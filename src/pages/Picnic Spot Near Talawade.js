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

function PicnicSpotNeartalawade() {

const cardData = {
    keyword: "Picnic Spot Near Talawade",
    headingDescription: "Om Agro Tourism is a refreshing destination for visitors searching for a picnic spot near Talawade, offering a peaceful rural setting with nature, traditional experiences, homemade food, and recreational activities. Families, friends, and groups from Talawade, Chikhali, Moshi, and nearby Pimpri Chinchwad areas can plan a convenient one-day outing away from the busy city environment. With a varied selection of activities and open countryside surroundings, it is suitable for family picnics, nature outings, and enjoyable day trips.",
    topPlaces: [
        {
            title: "Water Park Activities",
            description: "Water Park Activities bring an energetic element to a one-day picnic near Talawade, especially for families with children. Visitors can enjoy water-based recreation as part of a varied day filled with outdoor entertainment and countryside experiences."
        },
        {
            title: "Jungle Safari",
            description: "Jungle Safari adds an adventurous experience to the picnic and can be an appealing choice for families and groups looking for something beyond a conventional outing. It gives visitors an opportunity to include exploration and outdoor excitement in their day."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding offers an engaging countryside activity for visitors planning a family picnic near Talawade. Children and adults can enjoy this experience while adding an active and memorable attraction to their one-day trip."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching provides a peaceful nature experience for people looking for a nature picnic spot near Talawade. The rural surroundings allow visitors to slow down, observe birds, and enjoy a quieter side of the countryside."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride introduces visitors to a traditional rural experience and gives families a chance to enjoy the charm of village life. It is a distinctive activity for groups who want their picnic to include something different from regular city recreation."
        },
        {
            title: "Boating",
            description: "Boating offers a relaxing outdoor experience that can be included in a family one-day trip from Talawade. It provides a pleasant shared activity for families and friends while adding variety to a full-day picnic itinerary."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food gives visitors an opportunity to enjoy comforting meals during their countryside outing. Families and groups can include a relaxed meal in their picnic schedule while experiencing the traditional and welcoming character of the destination."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride provides an authentic farm-style experience that can be especially enjoyable for children and families. The activity adds a rural touch to the picnic and lets visitors experience a different aspect of countryside life."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games offer flexible entertainment for families, friends, and groups spending the day together. The variety makes it easy for visitors of different ages to stay engaged while enjoying their picnic at a relaxed pace."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops allow visitors to explore agricultural surroundings and experience rural activities in a more interactive way. Families and groups from Talawade can include this attraction when planning an educational, relaxing, and activity-filled picnic."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Talawade",
            description: "Om Agro Tourism offers a peaceful countryside environment for visitors searching for a picnic spot near Talawade. Families and groups can enjoy nature, food, traditional rural experiences, and recreational activities while taking a refreshing break from the city."
        },
        {
            name: "One Day Picnic Spot Near Talawade",
            description: "For a one day picnic spot near Talawade, Om Agro Tourism provides several experiences within one destination. Visitors can combine outdoor activities, nature, rural attractions, games, and food to create a complete and enjoyable day outing."
        },
        {
            name: "Best Picnic Spot Near Talawade",
            description: "Visitors looking for the best picnic spot near Talawade can consider Om Agro Tourism for its combination of countryside surroundings, recreational activities, traditional experiences, and food. The destination offers flexibility for both relaxed family plans and active group outings."
        },
        {
            name: "Family Picnic Spot Near Talawade",
            description: "A family picnic spot near Talawade should have attractions that suit children as well as adults. Om Agro Tourism brings together games, rural activities, nature experiences, food, and outdoor recreation so families can spend meaningful time together."
        },
        {
            name: "Picnic Resort Near Talawade",
            description: "Om Agro Tourism is a suitable picnic resort near Talawade for visitors who want to combine relaxation with enjoyable countryside experiences. Families and groups can spend the day exploring activities, enjoying food, and taking a break in a peaceful outdoor setting."
        },
        {
            name: "One Day Picnic Resort Near Talawade",
            description: "A one day picnic resort near Talawade provides a convenient option for families and groups who want a full outing without an overnight stay. Om Agro Tourism offers multiple activities, nature experiences, rural attractions, and food within the same destination."
        },
        {
            name: "Best Resort Near Talawade for Picnic",
            description: "Those searching for the best resort near Talawade for picnic activities can choose Om Agro Tourism for its varied recreational and countryside experiences. Visitors can plan a relaxed family day or include several activities for a more energetic group outing."
        },
        {
            name: "Family Resort Near Talawade",
            description: "Om Agro Tourism provides a family resort experience near Talawade where parents, children, and relatives can enjoy different activities together. Its open surroundings, food options, games, and rural attractions create a comfortable setting for family time."
        },
        {
            name: "One Day Trip Near Talawade",
            description: "Planning a one day trip near Talawade becomes convenient when nature, recreation, food, and rural experiences are available together. Om Agro Tourism allows visitors to enjoy a varied day itinerary without travelling between multiple destinations."
        },
        {
            name: "Family One Day Trip Near Talawade",
            description: "A family one day trip near Talawade can be planned around a mixture of active and relaxing experiences at Om Agro Tourism. Families can enjoy games, countryside activities, meals, and nature while spending quality time away from their everyday routine."
        },
        {
            name: "Picnic Places Near Talawade",
            description: "Among picnic places near Talawade, Om Agro Tourism offers a distinctive rural setting with a variety of attractions. It is suitable for families, friends, and groups who want to enjoy outdoor activities, traditional experiences, food, and peaceful surroundings."
        },
        {
            name: "Best Picnic Places Near Talawade",
            description: "Visitors comparing the best picnic places near Talawade can consider Om Agro Tourism for its combination of nature, recreation, food, and rural experiences. The destination allows visitors to build a picnic schedule according to the interests of their group."
        },
        {
            name: "Affordable Picnic Spot Near Talawade",
            description: "An affordable picnic spot near Talawade should offer enough experiences to make a day outing worthwhile. Om Agro Tourism combines several recreational attractions, food, and countryside activities within one destination for families and groups planning a practical picnic."
        },
        {
            name: "Budget Picnic Resort Near Talawade",
            description: "For visitors searching for a budget picnic resort near Talawade, Om Agro Tourism offers a range of experiences without requiring a separate destination for every activity. Families and groups can enjoy food, nature, games, and rural attractions during the same day."
        },
        {
            name: "Picnic Spot Near Talawade Pune",
            description: "Om Agro Tourism provides a refreshing picnic spot near Talawade Pune for people looking to escape the busy urban environment. The countryside atmosphere, recreational activities, traditional experiences, and food make it suitable for a comfortable one-day outing."
        },
        {
            name: "Resort Near Talawade for Family Outing",
            description: "A resort near Talawade for family outing should provide options for different age groups and interests. Om Agro Tourism combines nature, games, food, traditional rural experiences, and outdoor recreation to help families enjoy a varied day together."
        },
        {
            name: "One Day Resort Near Talawade",
            description: "Om Agro Tourism is a convenient option for a one day resort near Talawade when visitors want recreation without staying overnight. Families and groups can spend the day enjoying multiple activities, meals, and the peaceful atmosphere of the countryside."
        },
        {
            name: "Nature Picnic Spot Near Talawade",
            description: "Nature lovers searching for a nature picnic spot near Talawade can enjoy the open countryside environment at Om Agro Tourism. Bird Watching, farm experiences, and outdoor activities provide opportunities to connect with nature while enjoying a relaxed day away from the city."
        },
        {
            name: "Picnic Spot Near Chikhali Talawade",
            description: "Visitors from Chikhali and Talawade can choose Om Agro Tourism for a refreshing countryside picnic experience. Families and groups can combine traditional rural activities, food, nature, and recreation to make their day outing more enjoyable."
        },
        {
            name: "Picnic Spot Near Moshi Talawade",
            description: "Om Agro Tourism offers a suitable option for people searching for a picnic spot near Moshi Talawade. The destination provides a rural atmosphere where families and friends can enjoy activities, meals, nature, and shared experiences during a one-day visit."
        },
        {
            name: "Family Picnic Resort Near Talawade",
            description: "A family picnic resort near Talawade can be more enjoyable when it provides activities for both children and adults. Om Agro Tourism offers a varied combination of rural attractions, games, outdoor recreation, food, and nature for a flexible family outing."
        },
        {
            name: "Picnic Spot with Activities Near Talawade",
            description: "Visitors looking for a picnic spot with activities near Talawade can enjoy a varied day at Om Agro Tourism. Water activities, rural rides, games, nature experiences, farm activities, and food provide several ways for families and groups to stay engaged throughout their outing."
        }
    ],
    tableData: [
        ["Picnic Spot Near Talawade"],
        ["One Day Picnic Spot Near Talawade"],
        ["Best Picnic Spot Near Talawade"],
        ["Family Picnic Spot Near Talawade"],
        ["Picnic Resort Near Talawade"],
        ["One Day Picnic Resort Near Talawade"],
        ["Best Resort Near Talawade for Picnic"],
        ["Family Resort Near Talawade"],
        ["One Day Trip Near Talawade"],
        ["Family One Day Trip Near Talawade"],
        ["Picnic Places Near Talawade"],
        ["Best Picnic Places Near Talawade"],
        ["Affordable Picnic Spot Near Talawade"],
        ["Budget Picnic Resort Near Talawade"],
        ["Picnic Spot Near Talawade Pune"],
        ["Resort Near Talawade for Family Outing"],
        ["One Day Resort Near Talawade"],
        ["Nature Picnic Spot Near Talawade"],
        ["Picnic Spot Near Chikhali Talawade"],
        ["Picnic Spot Near Moshi Talawade"],
        ["Family Picnic Resort Near Talawade"],
        ["Picnic Spot with Activities Near Talawade"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Refreshing Rural Atmosphere",
            WhyChoosedescription: "Om Agro Tourism gives visitors from Talawade, Chikhali, Moshi, and nearby areas a peaceful countryside environment where they can step away from traffic, noise, and the routine of city life."
        },
        {
            WhyChooseheading: "Activities Beyond a Regular Picnic",
            WhyChoosedescription: "The destination brings together water recreation, games, rural rides, nature experiences, and farm activities, allowing visitors to create a picnic schedule that matches their group's interests."
        },
        {
            WhyChooseheading: "Family-Friendly Experiences",
            WhyChoosedescription: "Children, parents, and senior family members can find different ways to enjoy the day, whether they prefer active recreation, countryside exploration, shared meals, or relaxed outdoor time."
        },
        {
            WhyChooseheading: "Authentic Countryside Activities",
            WhyChoosedescription: "Bull Cart Ride, Tractor Ride, and Farm Tours and Workshops provide an authentic rural touch and make the outing more distinctive than a conventional urban recreation destination."
        },
        {
            WhyChooseheading: "Nature-Oriented Day Out",
            WhyChoosedescription: "Open surroundings and activities such as Bird Watching allow visitors to include nature appreciation in their itinerary, making the experience suitable for people who want a calmer outdoor break."
        },
        {
            WhyChooseheading: "Variety for Groups",
            WhyChoosedescription: "Friends, families, and larger groups can choose different attractions throughout the day instead of relying on a single activity, making the destination adaptable to different preferences."
        },
        {
            WhyChooseheading: "Convenient One-Day Planning",
            WhyChoosedescription: "Because multiple experiences are available at one location, visitors can plan a complete day outing without spending additional time moving between separate picnic, food, and activity destinations."
        },
        {
            WhyChooseheading: "Memorable Talawade Outing",
            WhyChoosedescription: "The blend of rural experiences, outdoor recreation, nature, homemade food, and shared family activities creates an enjoyable way to turn a simple day trip from Talawade into a memorable countryside experience."
        }
    ]
};


const faqData = [
    {
        question: "How can visitors from Talawade enjoy a different kind of picnic at Om Agri Tourism?",
        answer: "A visit can bring together outdoor recreation, rural activities and peaceful time in a farm setting. Guests from Talawade can enjoy swimming, boating, horse riding, tractor rides and bull cart rides, while bird watching and homemade food offer quieter parts of the day."
    },
    {
        question: "What experiences are available for families looking for a picnic near Talawade?",
        answer: "Families can choose from a range of activities rather than following a single type of outing. Water-based recreation, countryside rides and nature observation can be combined with a relaxed meal, giving children, parents and senior members opportunities to enjoy the day at their own pace."
    },
    {
        question: "Can a group from Talawade spend an entire day at Om Agri Tourism?",
        answer: "Yes, the activities and farm surroundings allow groups to create a flexible full-day plan. Swimming or boating can be followed by horse riding and traditional farm rides, with time for homemade food, bird watching, photography and relaxation between activities."
    },
    {
        question: "Which rural activities can visitors experience at a picnic spot near Talawade Pune?",
        answer: "Those interested in countryside experiences can try horse riding, tractor rides and bull cart rides during their visit. These traditional activities can be paired with swimming and boating, while the greenery and bird watching provide a closer connection with the rural environment."
    },
    {
        question: "Is Om Agri Tourism suitable for a friends' outing from Talawade?",
        answer: "Friends can make the trip lively by choosing activities that encourage shared participation. Swimming, boating and horse riding can form the active part of the outing, followed by farm rides, food, photographs and relaxed conversations in the open surroundings."
    },
    {
        question: "What can children do during a family picnic near Talawade?",
        answer: "Young visitors can explore outdoor activities according to their age and comfort. Swimming, boating, horse riding, tractor rides and bull cart rides can provide entertainment, while bird watching offers a calmer activity. Adults should provide suitable supervision during recreational experiences."
    },
    {
        question: "Does the picnic experience near Talawade include opportunities to enjoy nature?",
        answer: "Nature remains an important part of the farm atmosphere, allowing guests to take breaks from activities and appreciate the surroundings. Bird watching, spending time among the greenery, enjoying homemade food and taking photographs can make the outing more relaxing."
    },
    {
        question: "What is a comfortable itinerary for a one-day picnic from Talawade?",
        answer: "A balanced schedule could start with swimming or boating, followed by horse riding or a traditional countryside ride. After a food break, visitors can keep the remaining time flexible for bird watching, photography and family conversations instead of rushing through every activity."
    },
    {
        question: "Can senior citizens from Talawade enjoy a picnic at Om Agri Tourism?",
        answer: "Senior members can choose a slower-paced experience without participating in every active attraction. Sitting in the greenery, enjoying homemade food, watching birds and spending time with family can be pleasant alternatives while younger visitors take part in swimming or rides."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Talawade?",
        answer: "For people wanting a break from the industrial and urban routine around Talawade, Om Agri Tourism offers a countryside setting with several forms of recreation. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching create a varied day for families, friends and groups."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Akshay Kadam",
        feedback:
            "Our Talawade group was looking for something more refreshing than a regular city outing, and the farm environment was a great change. Boating and swimming gave us plenty of fun, while the horse riding and bull cart ride added a memorable rural touch. We also appreciated having time to enjoy food and relax together.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Vaishali Patil",
        feedback:
            "The children stayed engaged throughout the visit because there were different experiences to explore, while the adults could take things at a comfortable pace. Bird watching and the greenery were especially enjoyable for the elders in our family. It was a pleasant day away from our usual Talawade routine.",
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
  "name": "One Day Picnic Spot Near Talawade",
  "image": "https://www.omagrotourism.com/assets/images/one-day-picnic-spot-near-talawade.webp",
  "description": "One Day Picnic Spot Near Talawade is a practical choice for families, friends, couples, school groups, and corporate teams searching for a refreshing outdoor break close to the Pune and Pimpri Chinchwad region. Om Agro Tourism creates an enjoyable agro-tourism environment where visitors can step away from their regular routine and spend quality time together amid open spaces, countryside surroundings, outdoor recreation, and engaging picnic experiences. People looking for the Best One Day Picnic Spot Near Talawade or the Best Picnic Spots Near Talawade can plan a relaxed day filled with family time, group activities, nature-oriented recreation, and memorable moments. Picnic Places Near Talawade Pune can be especially useful for families with children, friends arranging a short weekend outing, companies planning team gatherings, and schools organizing educational or recreational trips. A One Day Picnic Near Talawade can also suit birthdays, family get-togethers, seasonal outings, casual celebrations, and group recreation. Visitors searching for a One Day Picnic Resort Near Talawade or the Best One Day Picnic Resort Near Talawade can enjoy the combination of a resort-style day outing and an agro-tourism atmosphere away from the busy urban environment. The destination can be conveniently considered by visitors from Talawade, Tathawade, Chikhali, Moshi, Nigdi, Akurdi, Chinchwad, Pimpri, Ravet, Wakad, Bhosari, and other nearby PCMC areas. Picnic Resorts Near Talawade Pune are suitable for different types of groups looking for a comfortable setting where relaxation and outdoor fun can be enjoyed together. With its countryside appeal and recreational atmosphere, Om Agro Tourism offers a refreshing option for planning a memorable one-day picnic near Talawade.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/one-day-picnic-spot-near-talawade"
  }
};






    return (
        <div>
<Helmet>
  <title>
    One Day Picnic Spot Near Talawade | Best Picnic Resort & Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Explore a One Day Picnic Spot Near Talawade for families, friends, couples, school groups and corporate outings with outdoor recreation and an agro-tourism setting near Pune."
  />

  <meta
    name="keywords"
    content="One Day Picnic Spot Near Talawade, Best One Day Picnic Spot Near Talawade, One Day Picnic Spots Near Talawade, Best Picnic Spots Near Talawade, Picnic Places Near Talawade Pune, One Day Picnic Near Talawade, One Day Picnic Resort Near Talawade, Best One Day Picnic Resort Near Talawade, Picnic Resorts Near Talawade Pune, Picnic Resort Near Talawade, Picnic Places Near Talawade, Family Picnic Near Talawade, One Day Outing Near Talawade, Best Picnic Resort Near Talawade, Family Resorts Near Talawade, One Day Picnic Near Talawade Pune, Picnic Spot Near Talawade Pune, Resorts Near Talawade, One Day Trip Near Talawade, Family Outing Near Talawade, School Picnic Spot Near Talawade, School Picnic Near Talawade, Corporate Outing Near Talawade, Agro Tourism Near Talawade, Agro Tourism Near Pune, Picnic Spots Near Tathawade, Picnic Places Near Chikhali, Picnic Spots Near Moshi, Picnic Places Near Nigdi, One Day Picnic Near Pimpri Chinchwad, Picnic Spots Near Pimpri Chinchwad, One Day Picnic Near Pune"
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
                            <img src='/images/keyword/141.jpg' alt='img' className='img-fluid' />
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

export default PicnicSpotNeartalawade;