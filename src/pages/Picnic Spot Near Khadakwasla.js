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

function Picnicspotnearkhadakwasla() {

const cardData = {
    keyword: "Picnic Spot Near Khadakwasla",

    headingDescription: "Om Agro Tourism is a refreshing countryside destination for visitors looking for a picnic spot near Khadakwasla. The property combines agricultural surroundings with traditional rural experiences, homemade food, nature and recreational activities, making it suitable for families, friends and groups planning a relaxed one day outing. Visitors can enjoy a mix of farm experiences, swimming, games and traditional activities in a peaceful environment.",

    topPlaces: [
        {
            title: "Agricultural Farm Exploration",
            description: "Guests can explore the agricultural environment at Om Agro Tourism and experience the charm of rural farming. Farm tours and workshops provide an opportunity to understand agricultural activities while enjoying a peaceful break surrounded by greenery."
        },
        {
            title: "Refreshing Swimming Pool Time",
            description: "The swimming pool gives visitors a chance to relax and cool down during their picnic. Families can enjoy pool time alongside other activities, making it a refreshing addition to a full day of countryside recreation."
        },
        {
            title: "Traditional Bull Cart Experience",
            description: "A bull cart ride introduces visitors to a traditional rural experience that is quite different from regular resort entertainment. Children and families can enjoy this activity while getting a glimpse of the lifestyle and transportation traditions associated with village areas."
        },
        {
            title: "Fun-Filled Tractor Ride",
            description: "The tractor ride provides an enjoyable way to experience the agricultural surroundings of the property. It can be particularly interesting for children and families who want to combine recreation with an authentic farm environment."
        },
        {
            title: "Horse Riding Adventure",
            description: "Horse riding adds an exciting outdoor element to the Om Agro Tourism experience. Visitors can enjoy time in the open countryside while participating in an activity that appeals to both children and adults looking for something different during their picnic."
        },
        {
            title: "Homestyle Countryside Dining",
            description: "Tasty homemade food is an important part of the Om Agro Tourism experience. Guests can enjoy traditional flavours in a peaceful rural setting, turning their meal into a relaxing part of the day's countryside experience."
        },
        {
            title: "Bird Watching and Nature Time",
            description: "The natural surroundings create opportunities for bird watching and quiet observation of the countryside. Visitors who prefer peaceful activities can spend time appreciating birds, greenery and the rural atmosphere away from the noise of the city."
        },
        {
            title: "Indoor and Outdoor Game Zone",
            description: "Families and groups can keep themselves entertained with indoor and outdoor games available at the destination. Shared games provide an enjoyable way for children, friends and family members to participate together during their picnic."
        },
        {
            title: "Rural Culture Experience",
            description: "Om Agro Tourism gives visitors an opportunity to experience rural culture through farming, traditional activities, countryside surroundings and homemade food. The experience offers city visitors a closer look at everyday village life."
        },
        {
            title: "Water and Outdoor Recreation",
            description: "Visitors can combine water-based recreation with outdoor activities for a lively day at Om Agro Tourism. Swimming and other recreational experiences allow families and groups to balance relaxation with entertainment during their countryside visit."
        }
    ],

    services: [
        {
            name: "Picnic Spot Near Khadakwasla",
            description: "Om Agro Tourism offers a peaceful countryside picnic experience near Khadakwasla with farm surroundings, homemade food, nature and multiple recreational activities suitable for families and groups."
        },
        {
            name: "One Day Picnic Spot Near Khadakwasla",
            description: "Visitors can spend an entire day enjoying farming experiences, traditional activities, games, food and relaxation without needing to plan an overnight stay."
        },
        {
            name: "Best Picnic Spot Near Khadakwasla",
            description: "The destination combines agriculture, nature, homemade food and recreation to create a complete picnic experience for families, friends and groups."
        },
        {
            name: "Family Picnic Spot Near Khadakwasla",
            description: "Families can enjoy swimming, games, farm activities, traditional rides and peaceful open surroundings while spending quality time together."
        },
        {
            name: "Picnic Resort Near Khadakwasla",
            description: "Om Agro Tourism provides a resort-style day outing combined with authentic farm surroundings, traditional rural experiences, homemade food and recreational activities."
        },
        {
            name: "One Day Picnic Resort Near Khadakwasla",
            description: "Guests can enjoy a complete one day resort-style outing with food, recreation, nature and farm activities before returning home the same day."
        },
        {
            name: "Best Resort Near Khadakwasla for Picnic",
            description: "Visitors can enjoy multiple experiences at one destination, including swimming, games, farm exploration, bull cart rides, tractor rides and homemade meals."
        },
        {
            name: "Family Resort Near Khadakwasla",
            description: "The family-friendly environment provides activities for children and adults along with open spaces, rural surroundings and opportunities for relaxation."
        },
        {
            name: "One Day Trip Near Khadakwasla",
            description: "A one day trip can include farm exploration, traditional rural experiences, homemade food, nature observation and recreational activities in one countryside destination."
        },
        {
            name: "Family One Day Trip Near Khadakwasla",
            description: "Families can create a varied day itinerary with swimming, games, farm experiences, traditional rides and meals suitable for different age groups."
        },
        {
            name: "Picnic Places Near Khadakwasla",
            description: "Om Agro Tourism offers a combination of agricultural surroundings, rural experiences, food and recreation for visitors comparing picnic places around Khadakwasla."
        },
        {
            name: "Best Picnic Places Near Khadakwasla",
            description: "The destination provides a distinctive picnic experience by combining traditional countryside activities with nature, food and family-oriented recreation."
        },
        {
            name: "Affordable Picnic Spot Near Khadakwasla",
            description: "Families and groups can enjoy several experiences during one visit, including food, games, farm activities and outdoor recreation, making the day practical and enjoyable."
        },
        {
            name: "Budget Picnic Resort Near Khadakwasla",
            description: "Visitors looking for a budget-friendly outing can experience rural surroundings, homemade food and recreational activities without planning an extended holiday."
        },
        {
            name: "Picnic Spot Near Khadakwasla Dam",
            description: "Visitors planning a Khadakwasla Dam outing can also experience the rural atmosphere of Om Agro Tourism through farm activities, traditional rides, nature and family recreation."
        },
        {
            name: "Resort Near Khadakwasla for Family Outing",
            description: "Families can enjoy a complete countryside outing with swimming, games, farm exploration, traditional rides and homemade food in a relaxed environment."
        },
        {
            name: "One Day Resort Near Khadakwasla",
            description: "A one day resort experience can include recreation, food, farm activities and nature experiences while allowing guests to return home after their day visit."
        },
        {
            name: "Nature Picnic Spot Near Khadakwasla",
            description: "Visitors can enjoy greenery, agricultural surroundings, bird watching and peaceful outdoor spaces while experiencing the natural side of Om Agro Tourism."
        },
        {
            name: "Picnic Spot Near Sinhagad Road Khadakwasla",
            description: "Guests travelling from the Sinhagad Road and Khadakwasla area can enjoy a countryside outing featuring farm experiences, food, traditional activities and family recreation."
        },
        {
            name: "Picnic Spot Near Panshet Khadakwasla",
            description: "Visitors around Panshet and Khadakwasla can plan a rural day outing with agricultural experiences, homemade food, nature activities and traditional countryside recreation."
        },
        {
            name: "Family Picnic Resort Near Khadakwasla",
            description: "The combination of family activities, farm experiences, traditional rides, swimming and homemade food makes the destination suitable for families planning a complete picnic."
        },
        {
            name: "Picnic Spot with Activities Near Khadakwasla",
            description: "Visitors can enjoy swimming, indoor and outdoor games, bull cart rides, horse riding, tractor rides, farm activities and nature experiences during one visit."
        }
    ],

    tableData: [
        ["Picnic Spot Near Khadakwasla"],
        ["One Day Picnic Spot Near Khadakwasla"],
        ["Best Picnic Spot Near Khadakwasla"],
        ["Family Picnic Spot Near Khadakwasla"],
        ["Picnic Resort Near Khadakwasla"],
        ["One Day Picnic Resort Near Khadakwasla"],
        ["Best Resort Near Khadakwasla for Picnic"],
        ["Family Resort Near Khadakwasla"],
        ["One Day Trip Near Khadakwasla"],
        ["Family One Day Trip Near Khadakwasla"],
        ["Picnic Places Near Khadakwasla"],
        ["Best Picnic Places Near Khadakwasla"],
        ["Affordable Picnic Spot Near Khadakwasla"],
        ["Budget Picnic Resort Near Khadakwasla"],
        ["Picnic Spot Near Khadakwasla Dam"],
        ["Resort Near Khadakwasla for Family Outing"],
        ["One Day Resort Near Khadakwasla"],
        ["Nature Picnic Spot Near Khadakwasla"],
        ["Picnic Spot Near Sinhagad Road Khadakwasla"],
        ["Picnic Spot Near Panshet Khadakwasla"],
        ["Family Picnic Resort Near Khadakwasla"],
        ["Picnic Spot with Activities Near Khadakwasla"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Authentic Agricultural Environment",
            WhyChoosedescription: "Om Agro Tourism gives visitors the opportunity to experience an actual rural and agricultural setting rather than a conventional city-based picnic environment."
        },
        {
            WhyChooseheading: "Traditional Activities for Visitors",
            WhyChoosedescription: "Bull cart rides and tractor rides introduce guests to traditional and farm-related experiences that make the outing more distinctive and memorable."
        },
        {
            WhyChooseheading: "Swimming and Recreation",
            WhyChoosedescription: "The swimming pool provides a refreshing leisure option, while indoor and outdoor games give families and groups additional ways to stay entertained."
        },
        {
            WhyChooseheading: "Interesting for Children",
            WhyChoosedescription: "Children can discover farm life, enjoy traditional rides, participate in games and experience outdoor recreation, making the destination engaging beyond ordinary sightseeing."
        },
        {
            WhyChooseheading: "Peaceful Nature Experience",
            WhyChoosedescription: "Green agricultural surroundings and opportunities for bird watching provide a quieter side to the picnic for visitors who enjoy nature and open spaces."
        },
        {
            WhyChooseheading: "Traditional Homemade Food",
            WhyChoosedescription: "Tasty homemade food allows guests to enjoy traditional flavours while relaxing in a rural atmosphere, adding a local touch to the overall experience."
        },
        {
            WhyChooseheading: "Multiple Experiences in One Destination",
            WhyChoosedescription: "Visitors can combine farming, swimming, games, horse riding, traditional rides, food and nature activities without having to travel between several different attractions."
        },
        {
            WhyChooseheading: "Suitable for Families and Groups",
            WhyChoosedescription: "The variety of activities and open surroundings makes Om Agro Tourism suitable for family outings, friend groups, educational visits and other planned day picnics."
        }
    ]
};


const faqData = [
    {
        question: "What kind of picnic experience can people from Khadakwasla enjoy at Om Agri Tourism?",
        answer: "Visitors can enjoy a countryside escape that combines recreation, farm activities and nature. Swimming and boating offer active entertainment, while horse riding, tractor rides, bull cart rides, bird watching and homemade food provide different ways to experience the day."
    },
    {
        question: "How can families from Khadakwasla make their picnic more enjoyable?",
        answer: "A family can keep the itinerary varied by combining outdoor activities with relaxed breaks. After swimming or boating, guests can enjoy a meal and choose horse riding or traditional farm rides, while bird watching and photography can be reserved for quieter moments."
    },
    {
        question: "Which activities are available at a picnic spot near Khadakwasla Pune?",
        answer: "The outing can include swimming, boating, horse riding, tractor rides and bull cart rides for guests seeking active experiences. Bird watching and homemade food offer a slower pace, making the destination suitable for families and groups with different interests."
    },
    {
        question: "Can friends from Khadakwasla plan a one-day group picnic?",
        answer: "Friends can create a lively itinerary around shared outdoor activities. Boating and swimming can be followed by horse riding or countryside rides, with meals, photography and conversations providing time to relax between the more active experiences."
    },
    {
        question: "Why might a farm picnic appeal to visitors from Khadakwasla?",
        answer: "A farm-based outing offers a change from the usual urban recreation by combining leisure with rural experiences. Guests can try traditional bull cart and tractor rides, enjoy horse riding and observe birds while also taking part in swimming and boating."
    },
    {
        question: "Is Om Agri Tourism suitable for children coming from Khadakwasla?",
        answer: "Children can enjoy age-appropriate activities such as swimming, boating and selected riding experiences when accompanied by adults. Bird watching can add a nature-oriented element to the visit, giving younger guests another way to explore the farm surroundings."
    },
    {
        question: "What can senior citizens do during a picnic near Khadakwasla?",
        answer: "Senior members can choose a comfortable schedule without participating in every active activity. Homemade food, bird watching, greenery and time with family can make their visit enjoyable while younger members take part in swimming, boating or countryside rides."
    },
    {
        question: "How should a group from Khadakwasla plan a full-day picnic itinerary?",
        answer: "Starting with one or two outdoor activities can help make the day productive without becoming tiring. Groups can choose swimming or boating first, enjoy a meal afterward, and use the remaining time for horse riding, farm rides, bird watching and relaxation."
    },
    {
        question: "Can corporate groups from Khadakwasla organize a team outing at Om Agri Tourism?",
        answer: "Teams can use the countryside environment for informal interaction away from the workplace. Group activities, farm rides and shared meals can encourage colleagues to spend time together while enjoying a relaxed outdoor setting and a break from their usual routine."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Khadakwasla?",
        answer: "Those looking for a countryside day out can find several experiences within one destination. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching offer a mix of recreation and nature, while homemade food adds to the overall picnic experience."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohit Jagtap",
        feedback:
            "Our Khadakwasla group enjoyed having so many different activities available in one place. We started with boating and swimming, then explored the traditional rides and finished with a relaxed meal. The countryside atmosphere made the outing feel like a genuine break from our regular routine.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Smita Pawar",
        feedback:
            "The family outing was enjoyable because every age group could choose something suitable. The children were interested in the activities and rides, while the elders appreciated the bird watching, homemade food and peaceful greenery. It was a refreshing full-day experience for us.",
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
  "name": "Picnic Spot Near Khadakwasla",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-khadakwasla.webp",
  "description": "Planning a refreshing outdoor break with family or friends? Om Agro Tourism is a welcoming choice for visitors searching for a picnic spot near Khadakwasla where they can spend quality time away from the regular city routine. A one day picnic near Khadakwasla can be suitable for families, friends, students and groups looking for a convenient day outing with a relaxed agro-tourism atmosphere. Visitors comparing the best picnic spot near Khadakwasla can plan an enjoyable family day, friends' gathering or group recreation, while those searching for a family picnic spot near Khadakwasla can enjoy a setting suited to shared leisure and memorable moments. A picnic resort near Khadakwasla or one day picnic resort near Khadakwasla can also be considered for planned family outings, school groups, casual celebrations and weekend recreation. With its focus on outdoor leisure and agro-tourism experiences, Om Agro Tourism provides a pleasant destination for anyone planning a picnic, one day trip or family outing around Khadakwasla.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-khadakwasla"
  }
};





    return (
        <div>
<Helmet>
  <title>
    Picnic Spot Near Khadakwasla | Scenic Family Escape, Outdoor Recreation & Day Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Find a picnic spot near Khadakwasla for families, friends and groups. Plan a one day picnic at Om Agro Tourism for outdoor recreation, family leisure and a refreshing day escape."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Khadakwasla, One Day Picnic Spot Near Khadakwasla, Best Picnic Spot Near Khadakwasla, Family Picnic Spot Near Khadakwasla, Picnic Resort Near Khadakwasla, One Day Picnic Resort Near Khadakwasla, Best Resort Near Khadakwasla for Picnic, Family Resort Near Khadakwasla, One Day Trip Near Khadakwasla, Family One Day Trip Near Khadakwasla, Picnic Places Near Khadakwasla, Best Picnic Places Near Khadakwasla, Family Outing Near Khadakwasla, One Day Outing Near Khadakwasla, Picnic Destination Near Khadakwasla, Agro Tourism Near Khadakwasla, Best Family Picnic Near Khadakwasla, Weekend Picnic Near Khadakwasla"
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
                            <img src='/images/keyword/165.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearkhadakwasla;