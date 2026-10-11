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

function Picnicspotnearthegaon() {

const cardData = {
    keyword: "Picnic Spot Near Thergaon",
    headingDescription: "Searching for a peaceful picnic spot near Thergaon for a family outing, one day trip, or weekend break? Om Agro Tourism offers a refreshing countryside environment where families, friends, and groups can spend quality time away from the busy city surroundings. With greenery, open spaces, farm experiences, recreational options, and homemade food, it is a convenient choice for visitors looking for an enjoyable and affordable picnic experience near Thergaon, Pune.",
    topPlaces: [
        {
            title: "Family Picnic Escape",
            description: "Families travelling from Thergaon can enjoy a relaxed day surrounded by greenery and open countryside. The peaceful setting, recreational opportunities, farm experiences, and food options create a comfortable environment for parents, children, and relatives."
        },
        {
            title: "One Day Nature Break",
            description: "A short trip into the countryside gives visitors an opportunity to enjoy fresh air and a calmer environment away from the busy city. The natural surroundings make the destination suitable for a refreshing one-day outing from Thergaon."
        },
        {
            title: "Kids Outdoor Fun",
            description: "Children can enjoy an active and entertaining day with family in a spacious rural environment. Outdoor recreation, games, and engaging farm experiences can help make the outing enjoyable for younger visitors."
        },
        {
            title: "Weekend Family Retreat",
            description: "Families looking for a weekend escape near Thergaon can spend quality time together in a peaceful countryside setting. The combination of relaxation, recreation, food, and open surroundings makes the day more memorable."
        },
        {
            title: "Farm Life Experience",
            description: "Visitors can experience a different side of rural life through farm surroundings, tours, and workshops. This type of outing can be especially interesting for families and children who want to combine recreation with a simple educational experience."
        },
        {
            title: "Value-Friendly Day Out",
            description: "Those looking for an affordable picnic option near Thergaon can enjoy several experiences within one destination. Families and groups can spend the day enjoying nature, recreation, food, and countryside surroundings without planning an expensive outing."
        },
        {
            title: "Friends Group Outing",
            description: "Friends and larger groups can use the open countryside environment for a relaxed day together. The available recreational experiences and spacious surroundings provide opportunities for socialising, games, meals, and shared activities."
        },
        {
            title: "Family Resort Day",
            description: "A family-focused day at the destination can combine relaxation with recreation and countryside experiences. Visitors can enjoy a comfortable outing where different age groups have opportunities to stay engaged throughout the day."
        },
        {
            title: "Wakad-Thergaon Day Escape",
            description: "People from Thergaon and nearby Wakad can plan a convenient countryside break without turning it into a long-distance trip. The rural setting provides a refreshing change from residential and commercial surroundings."
        },
        {
            title: "Activity-Based Picnic",
            description: "Visitors searching for a picnic with activities can enjoy a variety of experiences instead of spending the entire day simply sitting outdoors. Farm activities, games, water-based recreation, and rides can be included according to the outing plan."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Thergaon",
            description: "Om Agro Tourism offers a peaceful countryside setting for visitors searching for a picnic spot near Thergaon. Families and groups can enjoy greenery, open spaces, farm experiences, recreational activities, and homemade food during a refreshing day away from the city."
        },
        {
            name: "One Day Picnic Spot Near Thergaon",
            description: "A one-day picnic near Thergaon can bring together nature, recreation, food, and family time in a single outing. The destination is suitable for visitors who want a complete day experience without arranging an overnight stay."
        },
        {
            name: "Best Picnic Spot Near Thergaon",
            description: "People comparing the best picnic spot near Thergaon can consider a destination that offers more than just open space. A combination of countryside surroundings, family-friendly experiences, farm activities, recreation, and food creates a well-rounded picnic day."
        },
        {
            name: "Family Picnic Spot Near Thergaon",
            description: "Families can enjoy a comfortable countryside outing with options for relaxation and recreation. Parents, children, and relatives can spend time together while exploring farm surroundings, enjoying activities, and sharing a meal in a peaceful environment."
        },
        {
            name: "Picnic Resort Near Thergaon",
            description: "For visitors searching for a picnic resort near Thergaon, Om Agro Tourism provides a rural environment where recreation and relaxation can be enjoyed together. The destination is suitable for families, friends, and groups planning a day outing."
        },
        {
            name: "One Day Picnic Resort Near Thergaon",
            description: "A one-day picnic resort experience near Thergaon allows visitors to enjoy countryside surroundings, food, recreation, and farm-based experiences within one visit. It is a practical option for those who prefer a complete day outing."
        },
        {
            name: "Best Resort Near Thergaon for Picnic",
            description: "Visitors looking for the best resort near Thergaon for picnic plans can enjoy a destination offering a mix of nature, open spaces, recreational activities, farm experiences, and food. This variety helps families create an enjoyable full-day itinerary."
        },
        {
            name: "Family Resort Near Thergaon",
            description: "A family-friendly resort experience gives parents and children a chance to relax and participate in suitable recreational activities together. The natural surroundings and spacious environment make the outing comfortable for family groups."
        },
        {
            name: "One Day Trip Near Thergaon",
            description: "A one-day trip near Thergaon can be planned around nature, farm experiences, outdoor recreation, and homemade food. Visitors can enjoy a change of surroundings while keeping the entire outing convenient and manageable within a day."
        },
        {
            name: "Family One Day Trip Near Thergaon",
            description: "Families can plan a convenient one-day trip from Thergaon and enjoy multiple experiences without travelling to a distant destination. The combination of open surroundings, recreation, farm activities, and food makes the outing suitable for different age groups."
        },
        {
            name: "Picnic Places Near Thergaon",
            description: "Those searching for picnic places near Thergaon can choose a countryside destination offering greenery, open areas, recreation, farm experiences, and food. It provides a pleasant alternative to crowded city-based entertainment options."
        },
        {
            name: "Best Picnic Places Near Thergaon",
            description: "A well-planned picnic destination can give families and groups a balance of relaxation, outdoor enjoyment, and engaging experiences. Visitors can spend their day exploring the rural environment, enjoying activities, and sharing meals together."
        },
        {
            name: "Affordable Picnic Spot Near Thergaon",
            description: "An affordable picnic spot near Thergaon can be a useful choice for families and groups seeking a complete day without excessive spending. The natural setting and range of experiences allow visitors to make the most of their outing."
        },
        {
            name: "Budget Picnic Resort Near Thergaon",
            description: "Visitors planning a budget-friendly picnic can enjoy several experiences within one countryside destination. Families and groups can combine recreation, farm surroundings, food, and relaxation to create a satisfying day outing."
        },
        {
            name: "Picnic Spot Near Thergaon Pune",
            description: "For visitors specifically searching for a picnic spot around Thergaon Pune, Om Agro Tourism provides a countryside escape suitable for family and group outings. The destination combines nature, recreation, farm experiences, and homemade food."
        },
        {
            name: "Resort Near Thergaon for Family Outing",
            description: "Families planning an outing from Thergaon can enjoy a rural setting designed for relaxation and recreation. The open surroundings and variety of experiences make it possible to create a comfortable itinerary for children and adults."
        },
        {
            name: "One Day Resort Near Thergaon",
            description: "A one-day resort outing near Thergaon provides an opportunity to enjoy nature, recreation, food, and farm-based experiences without requiring an overnight stay. It is suitable for families and groups looking for a short countryside break."
        },
        {
            name: "Nature Picnic Spot Near Thergaon",
            description: "Nature lovers can spend their picnic day in a peaceful rural environment surrounded by greenery and open landscapes. The destination provides a welcome break from urban congestion while allowing visitors to enjoy outdoor recreation and farm surroundings."
        },
        {
            name: "Picnic Spot Near Wakad Thergaon",
            description: "Visitors from Wakad and Thergaon can plan a convenient countryside picnic featuring nature, open spaces, recreational activities, and homemade food. The setting is suitable for families and groups wanting a refreshing break from their regular routine."
        },
        {
            name: "Picnic Spot Near Dange Chowk Thergaon",
            description: "Those travelling from the Dange Chowk and Thergaon area can enjoy a peaceful day outing in a rural environment. Families can combine relaxation with recreational experiences, farm activities, and meals for a complete picnic experience."
        },
        {
            name: "Family Picnic Resort Near Thergaon",
            description: "Families searching for a picnic resort experience near Thergaon can enjoy a combination of countryside surroundings, recreation, farm-based activities, and food. The destination offers a suitable environment for parents, children, relatives, and small groups."
        },
        {
            name: "Picnic Spot with Activities Near Thergaon",
            description: "Visitors who want an activity-filled picnic near Thergaon can choose from a range of recreational experiences. Depending on the plan, the outing can include water-based recreation, games, farm tours, rides, and other family-friendly activities."
        }
    ],
    tableData: [
        ["Picnic Spot Near Thergaon"],
        ["One Day Picnic Spot Near Thergaon"],
        ["Best Picnic Spot Near Thergaon"],
        ["Family Picnic Spot Near Thergaon"],
        ["Picnic Resort Near Thergaon"],
        ["One Day Picnic Resort Near Thergaon"],
        ["Best Resort Near Thergaon for Picnic"],
        ["Family Resort Near Thergaon"],
        ["One Day Trip Near Thergaon"],
        ["Family One Day Trip Near Thergaon"],
        ["Picnic Places Near Thergaon"],
        ["Best Picnic Places Near Thergaon"],
        ["Affordable Picnic Spot Near Thergaon"],
        ["Budget Picnic Resort Near Thergaon"],
        ["Picnic Spot Near Thergaon Pune"],
        ["Resort Near Thergaon for Family Outing"],
        ["One Day Resort Near Thergaon"],
        ["Nature Picnic Spot Near Thergaon"],
        ["Picnic Spot Near Wakad Thergaon"],
        ["Picnic Spot Near Dange Chowk Thergaon"],
        ["Family Picnic Resort Near Thergaon"],
        ["Picnic Spot with Activities Near Thergaon"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Relaxing Rural Environment",
            WhyChoosedescription: "The countryside setting provides a refreshing change from the busy residential and commercial surroundings of Thergaon. Families can spend their day in a quieter atmosphere with greenery, open areas, and plenty of space to relax."
        },
        {
            WhyChooseheading: "Family-Friendly Day Out",
            WhyChoosedescription: "The destination is suitable for families with children, parents, and relatives who want to enjoy an outing together. Different experiences can be selected according to age, interest, and the preferred pace of the picnic."
        },
        {
            WhyChooseheading: "Variety for a Complete Picnic",
            WhyChoosedescription: "Visitors can combine nature, farm experiences, outdoor recreation, games, and food during the same visit. Having multiple options in one location makes it easier to plan a complete and engaging picnic itinerary."
        },
        {
            WhyChooseheading: "Convenient One-Day Experience",
            WhyChoosedescription: "People from Thergaon, Wakad, and Dange Chowk can plan a full-day countryside break without needing an overnight stay. This makes the destination useful for weekend plans, family outings, and short recreational trips."
        },
        {
            WhyChooseheading: "Interactive Farm Experiences",
            WhyChoosedescription: "Farm tours and workshops can add an educational dimension to the outing while allowing visitors to experience rural surroundings. These experiences can be particularly engaging for children, students, and families."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Freshly prepared homemade food adds a traditional and comforting element to the picnic. Guests can enjoy their meals while taking a break from the usual city dining environment and spending time in the countryside."
        },
        {
            WhyChooseheading: "Suitable for Groups",
            WhyChoosedescription: "Friends, relatives, and larger groups can comfortably plan a shared outing in the open environment. The variety of activities allows different members of the group to enjoy the day without following only one type of recreation."
        },
        {
            WhyChooseheading: "Nature Plus Recreation",
            WhyChoosedescription: "The experience goes beyond a simple picnic by combining natural surroundings with recreational opportunities and farm-based activities. This balance makes it a useful choice for visitors who want both relaxation and entertainment near Thergaon."
        }
    ]
};







const faqData = [
    {
        question: "What can visitors from Thergaon expect from a picnic at Om Agri Tourism?",
        answer: "Guests can enjoy a combination of outdoor recreation and farm-based experiences in a countryside environment. Swimming, boating and horse riding provide active entertainment, while tractor rides, bull cart rides, bird watching and homemade food bring a more traditional touch to the outing."
    },
    {
        question: "How can a family from Thergaon spend a full day at Om Agri Tourism?",
        answer: "A family can divide the day between recreational activities and relaxed time around the farm. Water activities can be followed by horse riding or countryside rides, with a meal break and bird watching providing comfortable opportunities for parents, children and elders to enjoy the visit together."
    },
    {
        question: "Which activities are worth including in a picnic near Thergaon Pune?",
        answer: "Groups can choose from swimming, boating, horse riding, tractor rides and bull cart rides depending on their interests. Bird watching and enjoying homemade food can also be included for guests who prefer a slower pace during part of the picnic."
    },
    {
        question: "Can office teams from Thergaon arrange an outdoor group outing?",
        answer: "An office group can use the countryside setting for a relaxed team outing with activities that encourage interaction. Swimming, boating and group-friendly rides can be combined with meals and informal conversations, giving colleagues an opportunity to spend time together away from their regular workplace."
    },
    {
        question: "Is Om Agri Tourism suitable for children looking for a picnic near Thergaon?",
        answer: "Young visitors can find several engaging outdoor experiences, including swimming, boating and suitable riding activities. Bird watching can add a nature-focused element to the trip, while adult supervision should be maintained during swimming and other activities for children's safety."
    },
    {
        question: "What makes a farm picnic different from regular recreation places near Thergaon?",
        answer: "Instead of focusing only on conventional leisure, a farm picnic combines recreation with experiences associated with rural life. Tractor rides, bull cart rides and horse riding can be enjoyed alongside water activities, while the open surroundings and homemade food create a distinct countryside atmosphere."
    },
    {
        question: "Can senior citizens enjoy a picnic at Om Agri Tourism near Thergaon?",
        answer: "Senior guests can follow a relaxed schedule without taking part in every active experience. Bird watching, homemade food, greenery and family conversations can make up their day, while younger members of the group participate in swimming, boating or farm rides."
    },
    {
        question: "What is a good way to organize a one-day picnic from Thergaon?",
        answer: "Planning a few main activities rather than filling every hour can make the outing more comfortable. The group may begin with swimming or boating, continue with a countryside ride, take a meal break and reserve some time afterward for photography, bird watching and relaxation."
    },
    {
        question: "Are tractor rides and bull cart rides available for a rural-style picnic experience?",
        answer: "Visitors looking for traditional countryside activities can include tractor rides and bull cart rides in their outing, along with horse riding. These experiences can add variety to a picnic and work well when combined with swimming, boating and time spent exploring the farm surroundings."
    },
    {
        question: "Why choose Om Agri Tourism when searching for a picnic spot near Thergaon?",
        answer: "Those seeking a break from the urban routine can enjoy several experiences without limiting the day to one type of activity. Swimming, boating, horse riding, traditional farm rides, bird watching and homemade food create a varied setting for families, friends and group outings from Thergaon."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Aditya Bhosale",
        feedback:
            "A day away from the usual Thergaon routine was exactly what our friends group needed. The combination of boating, swimming and farm rides gave us plenty to do, while the meal and open surroundings made it easy to slow down and enjoy conversations between activities.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Manisha Gaikwad",
        feedback:
            "The children were excited to explore the different activities, and the older members of our family appreciated the quieter side of the visit. Bird watching, homemade food and time in the countryside balanced the more active parts of our picnic and made the day enjoyable for everyone.",
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
  "name": "Picnic Spot Near Thergaon",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-thergaon.webp",
  "description": "Searching for a peaceful picnic spot near Thergaon for a refreshing break with family or friends? Om Agro Tourism offers a welcoming agro-tourism setting for families, friends, students and groups planning a relaxed day outing. A one day picnic near Thergaon can be an enjoyable way to step away from the regular urban schedule and spend quality time together in a pleasant outdoor environment. Those looking for the best picnic spot near Thergaon can plan a family gathering, friends' meetup or group outing, while visitors searching for a family picnic spot near Thergaon can enjoy a destination suited to shared leisure time. The location can also be considered by those looking for a picnic resort near Thergaon or a one day picnic resort near Thergaon for a planned day trip. Whether it is a weekend picnic, family outing, school group visit or casual get-together, Om Agro Tourism offers a comfortable destination for an enjoyable picnic experience near Thergaon.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-thergaon"
  }
};






    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Thergaon | Nature Day Retreat, Family Time & Group Gathering | +91 7066665554
  </title>

  <meta
    name="description"
    content="Explore a picnic spot near Thergaon for families, friends and groups. Plan a one day picnic at Om Agro Tourism and enjoy a relaxed nature day retreat away from the busy city routine."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Thergaon, One Day Picnic Spot Near Thergaon, Best Picnic Spot Near Thergaon, Family Picnic Spot Near Thergaon, Picnic Resort Near Thergaon, One Day Picnic Resort Near Thergaon, Best Resort Near Thergaon for Picnic, Family Resort Near Thergaon, One Day Trip Near Thergaon, Family One Day Trip Near Thergaon, Picnic Places Near Thergaon, Best Picnic Places Near Thergaon, Family Outing Near Thergaon, One Day Outing Near Thergaon, Picnic Destination Near Thergaon, Agro Tourism Near Thergaon, Best Family Picnic Near Thergaon"
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
                            <img src='/images/keyword/152.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearthegaon;