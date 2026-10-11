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

function PicnicSpotNearSanaswadi() {

const cardData = {
    keyword: "Picnic Spot Near Sanaswadi",
    headingDescription: "Om Agro Tourism is a refreshing choice for visitors searching for a picnic spot near Sanaswadi, offering a peaceful countryside setting with farm experiences, nature, traditional activities, homemade food, and recreational attractions. Families, friends, and groups can enjoy a convenient one-day outing away from the busy city environment while exploring the natural and rural side of the Pune region.",

    topPlaces: [
        {
            title: "Farm Tours and Workshops",
            description: "Explore the agricultural surroundings through farm tours and workshops, making the outing more meaningful for visitors interested in rural life, farming, and nature."
        },
        {
            title: "Tasty Homemade Food",
            description: "Enjoy traditional homemade food in a peaceful farm environment, adding a satisfying culinary experience to a relaxed family or group picnic."
        },
        {
            title: "Horse Riding",
            description: "Horse riding provides an enjoyable outdoor attraction for families and groups looking to add an active and memorable experience to their picnic."
        },
        {
            title: "Bird Watching",
            description: "Visitors can spend quiet time observing birds and enjoying the natural surroundings, making this a suitable attraction for a nature-focused picnic."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "A selection of indoor and outdoor games gives families, friends, and corporate groups an opportunity to stay active and entertained throughout their outing."
        },
        {
            title: "Bull Cart Ride",
            description: "Experience a traditional countryside activity with a bull cart ride, offering visitors a glimpse of rural culture while adding a unique element to the picnic."
        },
        {
            title: "Water Park Activities",
            description: "Water park activities provide a refreshing recreational option for visitors who want to include some fun and excitement during their one-day picnic."
        },
        {
            title: "Tractor Ride",
            description: "A tractor ride creates a distinctive farm experience and allows visitors to enjoy an activity closely connected with the agricultural surroundings."
        },
        {
            title: "Swimming Pool",
            description: "The swimming pool offers a relaxing water-based activity for guests who want to cool down and enjoy leisure time during their family or group outing."
        },
        {
            title: "Jungle Safari",
            description: "Jungle safari adds an adventurous attraction to the picnic experience, giving groups an opportunity to enjoy something different from a regular countryside outing."
        }
    ],

    services: [
        {
            name: "Picnic Spot Near Sanaswadi",
            description: "Om Agro Tourism offers a peaceful countryside environment for visitors searching for a picnic spot near Sanaswadi, with farm experiences, nature activities, traditional attractions, food, and recreation."
        },
        {
            name: "One Day Picnic Spot Near Sanaswadi",
            description: "Visitors can plan a complete one-day outing with farm activities, outdoor recreation, homemade food, nature exploration, and traditional rural experiences at one destination."
        },
        {
            name: "Best Picnic Spot Near Sanaswadi",
            description: "Those comparing picnic destinations can enjoy a varied experience at Om Agro Tourism, combining agricultural surroundings, family-friendly activities, food, and peaceful open spaces."
        },
        {
            name: "Family Picnic Spot Near Sanaswadi",
            description: "Families can spend quality time together through activities suited to different age groups, along with farm experiences, food, nature, and relaxing countryside surroundings."
        },
        {
            name: "Picnic Resort Near Sanaswadi",
            description: "Om Agro Tourism provides a rural picnic environment where visitors can enjoy recreational attractions, traditional activities, homemade meals, and a refreshing break from the city."
        },
        {
            name: "One Day Picnic Resort Near Sanaswadi",
            description: "A one-day visit can include several experiences such as farm tours, rides, games, nature activities, water recreation, and food for a well-rounded outing."
        },
        {
            name: "Best Resort Near Sanaswadi for Picnic",
            description: "Visitors looking for a countryside resort-style picnic experience can enjoy a combination of leisure, rural activities, nature, food, and group-friendly attractions."
        },
        {
            name: "Family Resort Near Sanaswadi",
            description: "The destination gives families multiple ways to enjoy their outing, including traditional rides, farm experiences, recreational activities, nature exploration, and homemade food."
        },
        {
            name: "One Day Trip Near Sanaswadi",
            description: "Om Agro Tourism is suitable for a short one-day trip where visitors can step away from their routine and enjoy countryside landscapes, activities, food, and rural experiences."
        },
        {
            name: "Family One Day Trip Near Sanaswadi",
            description: "Families can create an enjoyable day trip with age-friendly activities, open surroundings, farm attractions, traditional experiences, and opportunities for relaxation."
        },
        {
            name: "Picnic Places Near Sanaswadi",
            description: "Visitors searching for picnic places near Sanaswadi can enjoy an agricultural setting with multiple attractions that combine nature, recreation, food, and rural experiences."
        },
        {
            name: "Best Picnic Places Near Sanaswadi",
            description: "Om Agro Tourism offers a diverse picnic experience where families and groups can enjoy outdoor activities, farm tours, homemade food, and peaceful natural surroundings."
        },
        {
            name: "Affordable Picnic Spot Near Sanaswadi",
            description: "Visitors looking for an affordable outing can enjoy several activities and countryside attractions at one destination, making the day suitable for families and groups."
        },
        {
            name: "Budget Picnic Resort Near Sanaswadi",
            description: "The destination can suit budget-conscious visitors who want to combine a countryside atmosphere with recreational activities, farm experiences, food, and leisure."
        },
        {
            name: "Picnic Spot Near Shikrapur Sanaswadi",
            description: "Guests from the Shikrapur-Sanaswadi area can plan a refreshing countryside picnic featuring farm activities, traditional rides, nature experiences, and recreational attractions."
        },
        {
            name: "Resort Near Sanaswadi Pune",
            description: "Located in the Pune region, Om Agro Tourism offers a rural setting for families and groups looking for a relaxing outing with activities, food, and agricultural experiences."
        },
        {
            name: "One Day Resort Near Sanaswadi",
            description: "Visitors can spend a full day enjoying multiple attractions, including farm activities, games, rides, nature experiences, water recreation, and homemade food."
        },
        {
            name: "Family Outing Near Sanaswadi",
            description: "Families can enjoy a varied countryside outing with attractions that encourage recreation, exploration, relaxation, and quality time together in a natural environment."
        },
        {
            name: "Nature Picnic Spot Near Sanaswadi",
            description: "Bird watching, farm surroundings, open landscapes, and rural experiences make Om Agro Tourism suitable for visitors seeking a peaceful nature-oriented picnic."
        },
        {
            name: "Picnic Spot Near Pune Sanaswadi",
            description: "Visitors from the Pune-Sanaswadi side can enjoy a refreshing farm-based picnic with traditional activities, natural surroundings, homemade food, and recreational options."
        },
        {
            name: "Picnic Spot with Activities Near Sanaswadi",
            description: "Om Agro Tourism combines farm tours, rides, games, water activities, nature experiences, and other attractions so visitors can enjoy an active and varied picnic."
        },
        {
            name: "Corporate Picnic Spot Near Sanaswadi",
            description: "Corporate groups can use the open countryside setting for team outings and informal gatherings, with games, activities, food, and shared experiences creating opportunities for group interaction."
        }
    ],

    tableData: [
        ["Picnic Spot Near Sanaswadi"],
        ["One Day Picnic Spot Near Sanaswadi"],
        ["Best Picnic Spot Near Sanaswadi"],
        ["Family Picnic Spot Near Sanaswadi"],
        ["Picnic Resort Near Sanaswadi"],
        ["One Day Picnic Resort Near Sanaswadi"],
        ["Best Resort Near Sanaswadi for Picnic"],
        ["Family Resort Near Sanaswadi"],
        ["One Day Trip Near Sanaswadi"],
        ["Family One Day Trip Near Sanaswadi"],
        ["Picnic Places Near Sanaswadi"],
        ["Best Picnic Places Near Sanaswadi"],
        ["Affordable Picnic Spot Near Sanaswadi"],
        ["Budget Picnic Resort Near Sanaswadi"],
        ["Picnic Spot Near Shikrapur Sanaswadi"],
        ["Resort Near Sanaswadi Pune"],
        ["One Day Resort Near Sanaswadi"],
        ["Family Outing Near Sanaswadi"],
        ["Nature Picnic Spot Near Sanaswadi"],
        ["Picnic Spot Near Pune Sanaswadi"],
        ["Picnic Spot with Activities Near Sanaswadi"],
        ["Corporate Picnic Spot Near Sanaswadi"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Setting",
            WhyChoosedescription: "Om Agro Tourism provides a refreshing rural environment where visitors can take a break from busy city surroundings and enjoy open natural spaces."
        },
        {
            WhyChooseheading: "Activities for Every Group",
            WhyChoosedescription: "Families, friends, and corporate groups can choose from different attractions, allowing everyone to participate in activities that match their interests."
        },
        {
            WhyChooseheading: "Farm-Based Experiences",
            WhyChoosedescription: "Farm tours, workshops, tractor rides, and traditional rural activities give visitors an opportunity to experience the agricultural side of the countryside."
        },
        {
            WhyChooseheading: "Family-Friendly Attractions",
            WhyChoosedescription: "The destination offers a variety of experiences suitable for children and adults, helping families spend quality time together during their picnic."
        },
        {
            WhyChooseheading: "Traditional Rural Activities",
            WhyChoosedescription: "Bull cart rides and other countryside experiences bring a traditional touch to the outing and create memories beyond a regular resort visit."
        },
        {
            WhyChooseheading: "Nature and Recreation Together",
            WhyChoosedescription: "Visitors can combine bird watching and farm exploration with games, rides, water activities, and other recreational attractions during the same outing."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Traditional homemade food adds a comforting element to the picnic and complements the relaxed atmosphere of the agricultural surroundings."
        },
        {
            WhyChooseheading: "Ideal for Group Outings",
            WhyChoosedescription: "The combination of open spaces, activities, food, and shared experiences makes the destination suitable for family gatherings, friend groups, and corporate picnics."
        }
    ]
};







const faqData = [
    {
        question: "Is Om Agri Tourism a good picnic spot near Sanaswadi?",
        answer: "Visitors from Sanaswadi looking for a relaxing break from their regular routine can consider Om Agri Tourism for a countryside picnic experience. The day can be enjoyed with swimming, boating, horse riding, tractor rides, bull cart rides and bird watching, along with peaceful time in the farm surroundings."
    },
    {
        question: "What activities can visitors enjoy at Om Agri Tourism near Sanaswadi?",
        answer: "A visit can include several types of outdoor recreation instead of a single picnic activity. Guests can enjoy swimming and boating, try horse riding, and experience tractor and bull cart rides. Bird watching also gives nature lovers an opportunity to spend some quiet time around the farm."
    },
    {
        question: "Can families from Sanaswadi plan a picnic at Om Agri Tourism?",
        answer: "Families can create a comfortable day outing by combining active recreation with relaxed moments together. Children can enjoy suitable activities such as swimming, boating and farm rides under appropriate supervision, while parents can spend time around the greenery and enjoy homemade food."
    },
    {
        question: "How can friends from Sanaswadi spend a day at Om Agri Tourism?",
        answer: "Friends can make the outing more engaging by combining swimming, boating and horse riding with traditional tractor and bull cart rides. They can also include food, photography, conversations and bird watching between activities, creating a relaxed full-day countryside experience."
    },
    {
        question: "What makes Om Agri Tourism different from regular picnic places near Sanaswadi?",
        answer: "A farm-based destination gives visitors the opportunity to enjoy recreation together with traditional countryside experiences. Rather than limiting the outing to sightseeing or sitting in a park, guests can participate in swimming, boating, horse riding, tractor rides, bull cart rides and bird watching."
    },
    {
        question: "What can children enjoy during a picnic near Sanaswadi?",
        answer: "Children can experience suitable outdoor activities such as swimming, boating, tractor rides and bull cart rides depending on their age and comfort. Bird watching can add a nature-based element to the outing, while adult supervision can help them participate safely and comfortably."
    },
    {
        question: "Can visitors enjoy homemade food during a picnic at Om Agri Tourism?",
        answer: "Homemade food can add a traditional touch to the countryside outing and provide a comfortable break between activities. Families and groups can enjoy their meal while taking in the peaceful farm atmosphere before continuing with swimming, boating, rides or nature observation."
    },
    {
        question: "Is Om Agri Tourism suitable for group outings near Sanaswadi?",
        answer: "Groups can plan a varied day by combining several activities according to their interests. Swimming, boating and horse riding can be followed by tractor or bull cart rides, while food and relaxation can be included throughout the outing for friends, families and other groups."
    },
    {
        question: "Why choose an agro tourism experience for a picnic near Sanaswadi?",
        answer: "An agro tourism setting provides a change from the everyday urban environment and allows visitors to spend more time around nature and rural activities. Farm greenery, swimming, boating, traditional rides, bird watching and homemade food can make the outing more engaging and memorable."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Sanaswadi?",
        answer: "Om Agri Tourism combines farm surroundings, outdoor recreation and traditional countryside experiences in one destination. Visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching along with homemade food, making it a refreshing option for families, friends and groups planning a picnic near Sanaswadi."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohit Wagh",
        feedback:
            "Our family from Sanaswadi wanted a peaceful picnic with enough activities for everyone, and Om Agri Tourism turned out to be a wonderful choice. The children enjoyed boating and the farm rides, while we liked the greenery and bird watching. Having homemade food during the outing made the experience even better.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Sneha Gaikwad",
        feedback:
            "We visited Om Agri Tourism with friends for a full-day countryside outing. Swimming and horse riding were enjoyable, and the tractor and bull cart rides gave us a fun traditional experience. The relaxed farm atmosphere made it easy to spend quality time together away from our usual Sanaswadi routine.",
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
  "name": "Picnic Spot Near Sanaswadi",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-sanaswadi.webp",
  "description": "Picnic Spot Near Sanaswadi is a convenient option for families, friends, couples, school groups, and corporate teams searching for a refreshing outdoor escape near Pune. Om Agro Tourism offers an agro-tourism-oriented countryside environment where visitors can step away from their daily routine and spend quality time together through outdoor recreation, open surroundings, picnic activities, and relaxed group experiences. A One Day Picnic Spot Near Sanaswadi can be considered for families planning a short day trip with children, friends arranging a weekend outing, or groups looking for a comfortable destination away from busy urban surroundings. Visitors searching for the Best Picnic Spot Near Sanaswadi can enjoy the appeal of an open and peaceful setting where nature, recreation, and social time come together. The Family Picnic Spot Near Sanaswadi is suitable for family gatherings, birthdays, seasonal outings, children's activities, and casual get-togethers. Those looking for a Picnic Resort Near Sanaswadi or a One Day Picnic Resort Near Sanaswadi can plan a relaxed outing with the added appeal of an agro-tourism atmosphere and countryside surroundings. Visitors searching for the Best Resort Near Sanaswadi can consider a destination that provides an enjoyable setting for families, friends, school excursions, office groups, and couples. The location is also convenient for people travelling from Sanaswadi, Shikrapur, Ranjangaon, Koregaon Bhima, Shirur, Wagholi, Kharadi, Chandan Nagar, Hadapsar, and nearby Pune areas. A day spent in a countryside environment can offer a welcome change from regular city schedules while creating opportunities for group recreation, nature appreciation, and memorable conversations. Om Agro Tourism provides a welcoming setting for anyone planning a family picnic, school outing, corporate gathering, friends' day trip, or simple weekend break near Sanaswadi.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-sanaswadi"
  }
};






    return (
        <div>


<Helmet>
  <title>
    Picnic Spot Near Sanaswadi | Best One Day Picnic Resort & Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a Picnic Spot Near Sanaswadi for families, friends, couples, school groups and corporate outings with outdoor recreation in a peaceful agro-tourism setting."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Sanaswadi, One Day Picnic Spot Near Sanaswadi, Best Picnic Spot Near Sanaswadi, Family Picnic Spot Near Sanaswadi, Picnic Resort Near Sanaswadi, One Day Picnic Resort Near Sanaswadi, Best Resort Near Sanaswadi, Picnic Places Near Sanaswadi, One Day Picnic Near Sanaswadi, Best Picnic Places Near Sanaswadi, Family Picnic Near Sanaswadi, One Day Outing Near Sanaswadi, Family Outing Near Sanaswadi, Picnic Resorts Near Sanaswadi, One Day Picnic Resort Near Sanaswadi Pune, Family Resort Near Sanaswadi, Resorts Near Sanaswadi, One Day Trip Near Sanaswadi, School Picnic Spot Near Sanaswadi, School Picnic Near Sanaswadi, Corporate Outing Near Sanaswadi, Weekend Picnic Near Sanaswadi, Agro Tourism Near Sanaswadi, Agro Tourism Near Pune, Picnic Spot Near Shikrapur, One Day Picnic Near Shikrapur, Picnic Places Near Ranjangaon, Family Picnic Near Shirur, One Day Picnic Near Koregaon Bhima, Picnic Resort Near Wagholi, Picnic Places Near Kharadi, One Day Picnic Near Pune"
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
                            <img src='/images/keyword/106.jpg' alt='img' className='img-fluid' />
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

export default PicnicSpotNearSanaswadi;