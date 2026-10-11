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

function Picnicspotnearlonavala() {

const cardData = {
    keyword: "Picnic Spot Near Lonavala",

    headingDescription: "Looking for a refreshing picnic destination near Lonavala for a family outing, one day trip or weekend break? Om Agro Tourism offers a peaceful rural environment where visitors can enjoy farm experiences, traditional food, recreational activities and time in nature. With family-friendly facilities and a variety of experiences available in one destination, it is suitable for families, friends, children and groups planning a memorable day away from their regular routine.",

    topPlaces: [
        {
            title: "Explore the Working Farm",
            description: "Om Agro Tourism gives visitors an opportunity to experience the charm of rural farming through its agricultural surroundings and farm-based activities. Families and children can observe the countryside environment, learn about farming practices and enjoy a closer connection with village life."
        },
        {
            title: "Enjoy Traditional Homemade Meals",
            description: "A visit to Om Agro Tourism can include tasty homemade food prepared in a traditional style. Guests can enjoy their meals in a peaceful rural atmosphere, making the dining experience an important part of a relaxed family picnic."
        },
        {
            title: "Relax Around the Swimming Pool",
            description: "The swimming pool provides a refreshing recreation option for visitors looking to cool down and enjoy their day at the property. Families can combine pool time with other activities and make their picnic more enjoyable and leisurely."
        },
        {
            title: "Experience a Traditional Bull Cart Ride",
            description: "The bull cart ride offers visitors a chance to experience a traditional form of rural transportation in an enjoyable setting. It can be especially interesting for children and families who want to discover a different side of village and agricultural life."
        },
        {
            title: "Try an Exciting Tractor Ride",
            description: "A tractor ride adds an authentic farm experience to the visit and allows guests to explore the rural surroundings in a fun way. It is an engaging activity for families and children who want something different from conventional resort entertainment."
        },
        {
            title: "Spend Time with Horse Riding",
            description: "Horse riding gives visitors an opportunity to enjoy an outdoor activity while experiencing the open countryside around the agro tourism property. It can add excitement to a family outing and create memorable moments for children and adults."
        },
        {
            title: "Discover Local Birds and Nature",
            description: "Bird watching at Om Agro Tourism provides a quieter experience for visitors who appreciate nature and wildlife. The rural surroundings offer an opportunity to observe birds and enjoy the natural atmosphere away from busy city environments."
        },
        {
            title: "Enjoy Indoor and Outdoor Games",
            description: "Visitors can keep their picnic lively with a selection of indoor and outdoor games available at the destination. These activities are useful for families, friends and groups looking to spend quality time together through shared recreation."
        },
        {
            title: "Experience Rural Life and Farming",
            description: "Om Agro Tourism allows guests to experience aspects of rural culture through farming, countryside surroundings and traditional activities. The experience can be particularly enjoyable for city families and children who want to understand village life in an interactive way."
        },
        {
            title: "Refresh with Water-Based Recreation",
            description: "Water-based recreation adds another entertaining element to a day at Om Agro Tourism. Families and groups can enjoy the available water activities along with the swimming pool and other experiences while spending a refreshing day in the countryside."
        }
    ],

    services: [
        {
            name: "Picnic Spot Near Lonavala",
            description: "Om Agro Tourism offers a refreshing picnic experience with peaceful rural surroundings, farm activities, homemade food and family-friendly recreation for visitors planning a day outing near Lonavala."
        },
        {
            name: "One Day Picnic Spot Near Lonavala",
            description: "Visitors can spend an entire day enjoying farm experiences, food, games, nature and recreational activities without needing to arrange an overnight stay."
        },
        {
            name: "Best Picnic Spot Near Lonavala",
            description: "Families and groups can enjoy a complete countryside outing with multiple experiences including farm activities, homemade meals, outdoor recreation and nature-based relaxation."
        },
        {
            name: "Family Picnic Spot Near Lonavala",
            description: "The destination provides family-friendly experiences where children and adults can enjoy games, farm activities, food and open surroundings together."
        },
        {
            name: "Picnic Resort Near Lonavala",
            description: "Om Agro Tourism combines the comfort of a recreational destination with the authentic atmosphere of a working rural environment, making it suitable for a relaxed picnic."
        },
        {
            name: "One Day Picnic Resort Near Lonavala",
            description: "Guests can enjoy a complete day of food, recreation, farm experiences and relaxation while returning home after their visit instead of planning an overnight stay."
        },
        {
            name: "Best Resort Near Lonavala for Picnic",
            description: "Visitors can enjoy a wide range of experiences at one destination, including a swimming pool, games, farm activities, traditional rides, homemade food and nature-based recreation."
        },
        {
            name: "Family Resort Near Lonavala",
            description: "Families can spend quality time together through child-friendly activities, outdoor recreation, farm experiences and comfortable spaces surrounded by the countryside."
        },
        {
            name: "One Day Trip Near Lonavala",
            description: "A day trip can include rural exploration, homemade food, recreational activities and opportunities to experience traditional farming and countryside life."
        },
        {
            name: "Family One Day Trip Near Lonavala",
            description: "Families can create a complete day itinerary with meals, games, farm experiences, water recreation and activities suitable for both children and adults."
        },
        {
            name: "Picnic Places Near Lonavala",
            description: "Om Agro Tourism provides a combination of nature, farming, recreation and traditional experiences for visitors comparing different picnic destinations around Lonavala."
        },
        {
            name: "Best Picnic Places Near Lonavala",
            description: "The destination stands out through its combination of agricultural experiences, homemade food, outdoor activities and family-oriented recreation in a peaceful rural setting."
        },
        {
            name: "Affordable Picnic Spot Near Lonavala",
            description: "Families and groups can enjoy several experiences during one visit, including food, games, farm activities and recreation, making it suitable for a practical day outing."
        },
        {
            name: "Budget Picnic Resort Near Lonavala",
            description: "Visitors looking for a budget-friendly day outing can enjoy countryside surroundings together with recreational facilities, traditional experiences and homemade meals."
        },
        {
            name: "Picnic Spot Near Lonavala Pune",
            description: "Om Agro Tourism provides a countryside escape for visitors from the Pune region, offering farm-based activities, nature experiences, food and recreation in one destination."
        },
        {
            name: "Resort Near Lonavala for Family Outing",
            description: "Families can enjoy a varied outing with swimming, games, farm exploration, traditional rides and homemade food while spending quality time together."
        },
        {
            name: "One Day Resort Near Lonavala",
            description: "Visitors can experience a full day of countryside recreation with farm activities, meals, games and nature-based experiences without requiring an overnight booking."
        },
        {
            name: "Nature Picnic Spot Near Lonavala",
            description: "The rural environment provides opportunities to enjoy greenery, bird watching, farm surroundings and peaceful outdoor spaces while taking a break from busy city life."
        },
        {
            name: "Picnic Spot Near Bhushi Dam Lonavala",
            description: "Visitors exploring the Lonavala region can combine their travel plans with a countryside experience at Om Agro Tourism featuring farm activities, food, recreation and family entertainment."
        },
        {
            name: "Picnic Spot Near Pawna Lake Lonavala",
            description: "Guests travelling around the Pawna Lake side can enjoy a different type of countryside outing with farming experiences, traditional activities, homemade food and recreational options."
        },
        {
            name: "Family Picnic Resort Near Lonavala",
            description: "The combination of family-friendly recreation, rural surroundings, traditional activities and food makes Om Agro Tourism suitable for families planning a complete picnic experience."
        },
        {
            name: "Picnic Spot with Activities Near Lonavala",
            description: "Visitors can enjoy several activities during one visit, including games, swimming, traditional rides, farm experiences, nature observation and other recreational options."
        }
    ],

    tableData: [
        ["Picnic Spot Near Lonavala"],
        ["One Day Picnic Spot Near Lonavala"],
        ["Best Picnic Spot Near Lonavala"],
        ["Family Picnic Spot Near Lonavala"],
        ["Picnic Resort Near Lonavala"],
        ["One Day Picnic Resort Near Lonavala"],
        ["Best Resort Near Lonavala for Picnic"],
        ["Family Resort Near Lonavala"],
        ["One Day Trip Near Lonavala"],
        ["Family One Day Trip Near Lonavala"],
        ["Picnic Places Near Lonavala"],
        ["Best Picnic Places Near Lonavala"],
        ["Affordable Picnic Spot Near Lonavala"],
        ["Budget Picnic Resort Near Lonavala"],
        ["Picnic Spot Near Lonavala Pune"],
        ["Resort Near Lonavala for Family Outing"],
        ["One Day Resort Near Lonavala"],
        ["Nature Picnic Spot Near Lonavala"],
        ["Picnic Spot Near Bhushi Dam Lonavala"],
        ["Picnic Spot Near Pawna Lake Lonavala"],
        ["Family Picnic Resort Near Lonavala"],
        ["Picnic Spot with Activities Near Lonavala"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Authentic Agro Tourism Experience",
            WhyChoosedescription: "Om Agro Tourism provides more than a regular picnic environment by allowing visitors to experience farming, rural surroundings and traditional countryside activities in an interactive setting."
        },
        {
            WhyChooseheading: "Wide Range of Family Activities",
            WhyChoosedescription: "Families can choose from swimming, games, traditional rides, farm experiences and nature activities, giving children and adults multiple ways to enjoy their visit."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Bull cart rides, tractor rides and farming activities allow guests to experience aspects of rural Maharashtra that are different from conventional city entertainment."
        },
        {
            WhyChooseheading: "Refreshing Natural Surroundings",
            WhyChoosedescription: "The open agricultural environment provides a peaceful setting where visitors can enjoy greenery, fresh surroundings and a relaxing break from crowded urban areas."
        },
        {
            WhyChooseheading: "Suitable for Children",
            WhyChoosedescription: "Children can enjoy engaging activities such as games, farm exploration, swimming and traditional rides while also discovering more about rural life and agriculture."
        },
        {
            WhyChooseheading: "Homemade Food",
            WhyChoosedescription: "Tasty homemade food adds a traditional touch to the visit and allows guests to enjoy their meals in a peaceful countryside atmosphere."
        },
        {
            WhyChooseheading: "Nature and Recreation Together",
            WhyChoosedescription: "Bird watching and farm surroundings provide peaceful nature experiences, while games, swimming and outdoor activities keep the overall outing entertaining."
        },
        {
            WhyChooseheading: "Ideal for Group Outings",
            WhyChoosedescription: "Families, friends, school groups and other visitors can enjoy shared activities and open spaces, making the destination suitable for planned group picnics and day outings."
        }
    ]
};


const faqData = [
    {
        question: "Can visitors from Lonavala consider Om Agri Tourism for a countryside picnic?",
        answer: "Guests looking for an alternative to the usual hill-station outing can enjoy a farm-based day filled with recreation and rural experiences. Swimming, boating and horse riding can be combined with tractor rides, bull cart rides, bird watching and homemade food."
    },
    {
        question: "How can families from Lonavala plan a memorable picnic at Om Agri Tourism?",
        answer: "Families can create a balanced schedule by combining active experiences with relaxed time around the farm. Swimming or boating can be followed by a meal and countryside rides, while bird watching and photography can provide quieter moments for parents and elders."
    },
    {
        question: "Which activities can visitors enjoy at a picnic spot near Lonavala?",
        answer: "Guests can choose from swimming, boating, horse riding, tractor rides and bull cart rides during their visit. Bird watching and homemade food provide additional options for those who want to enjoy the natural and rural atmosphere at a slower pace."
    },
    {
        question: "Is Om Agri Tourism an option for a one-day trip from Lonavala?",
        answer: "Visitors can consider the farm destination when they want a different type of day outing focused on countryside recreation. A practical plan can include outdoor activities, a meal break, traditional rides and time for relaxation rather than treating the visit as a rushed sightseeing schedule."
    },
    {
        question: "What makes a farm picnic different from regular Lonavala outing places?",
        answer: "A farm-based experience combines leisure with activities associated with rural life. Along with swimming and boating, guests can try horse riding, tractor rides and bull cart rides, while bird watching and the open surroundings provide a nature-focused side to the picnic."
    },
    {
        question: "Can children enjoy a picnic at Om Agri Tourism near Lonavala?",
        answer: "Children can participate in suitable outdoor experiences such as swimming, boating and selected rides with responsible adult supervision. Bird watching can also give younger visitors an opportunity to observe nature and explore a countryside environment beyond their regular surroundings."
    },
    {
        question: "What can senior citizens enjoy during a picnic trip from Lonavala?",
        answer: "Senior family members can follow a comfortable itinerary without joining every active experience. Homemade food, bird watching, greenery and family conversations can make their part of the outing enjoyable while younger guests take part in swimming, boating or countryside rides."
    },
    {
        question: "How should a group plan a picnic near Lonavala at Om Agri Tourism?",
        answer: "A group can select a few main activities and leave sufficient time for food and relaxation. Swimming or boating can be planned earlier, followed by horse riding or farm rides, with bird watching, photography and casual conversations filling the less active portions of the day."
    },
    {
        question: "Can friends from Lonavala enjoy traditional countryside rides during a picnic?",
        answer: "Groups interested in rural experiences can include tractor rides and bull cart rides along with horse riding. These activities add a traditional touch to the outing and can be combined with swimming, boating and nature observation for a varied picnic experience."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Lonavala?",
        answer: "People wanting a change from conventional hill-station plans can explore a destination that brings outdoor recreation, farm experiences, nature and food together. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide several ways to spend quality time with family or friends."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Siddhant Borkar",
        feedback:
            "Instead of following our usual Lonavala outing plan, our group decided to try a farm-based experience. The water activities were enjoyable, and the tractor and bull cart rides gave the day a completely different character. Sharing homemade food afterward made the trip even more memorable.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Megha Ranade",
        feedback:
            "The countryside atmosphere was a lovely change for our family. Children stayed interested in the outdoor activities, while the elders enjoyed bird watching, food and sitting in the greenery. Having both energetic and peaceful experiences made the picnic comfortable for everyone.",
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
  "name": "Picnic Spot Near Lonavala",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-lonavala.webp",
  "description": "Looking for a relaxing picnic spot near Lonavala for a memorable family or group outing? Om Agro Tourism provides a welcoming agro-tourism setting for families, friends, students and groups who want to enjoy a refreshing break from their everyday routine. A one day picnic near Lonavala can be a convenient option for visitors planning a short leisure escape, family gathering or friends' outing. Those searching for the best picnic spot near Lonavala can plan a day filled with outdoor relaxation and shared experiences, while families looking for a family picnic spot near Lonavala can enjoy a comfortable environment for quality time together. A picnic resort near Lonavala or one day picnic resort near Lonavala can be considered for family outings, group gatherings, school picnics and casual weekend recreation. Visitors planning a one day trip near Lonavala can also choose an agro-tourism destination that combines a relaxed outdoor atmosphere with opportunities to enjoy time with loved ones. Om Agro Tourism is suited to families and groups looking for a memorable picnic destination around Lonavala.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-lonavala"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Lonavala | Hill Escape, Family Recreation & Outdoor Day Out | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a picnic spot near Lonavala for families, friends and groups. Plan a one day picnic at Om Agro Tourism for outdoor leisure, family recreation and a refreshing day escape."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Lonavala, One Day Picnic Spot Near Lonavala, Best Picnic Spot Near Lonavala, Family Picnic Spot Near Lonavala, Picnic Resort Near Lonavala, One Day Picnic Resort Near Lonavala, Best Resort Near Lonavala for Picnic, Family Resort Near Lonavala, One Day Trip Near Lonavala, Family One Day Trip Near Lonavala, Picnic Places Near Lonavala, Best Picnic Places Near Lonavala, Family Outing Near Lonavala, One Day Outing Near Lonavala, Picnic Destination Near Lonavala, Agro Tourism Near Lonavala, Best Family Picnic Near Lonavala, Weekend Picnic Near Lonavala"
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
                            <img src='/images/keyword/166.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearlonavala;