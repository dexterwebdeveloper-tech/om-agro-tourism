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

function Omagotourismresort() {

const cardData = {
    keyword: "Om Agro Tourism Resort",
    headingDescription: "Om Agro Tourism Resort offers a peaceful countryside destination near Pune where families, friends, corporate groups, and students can enjoy farm experiences, outdoor recreation, water activities, homemade food, and traditional rural attractions. Located in the Koyali area of Khed, the destination combines agricultural surroundings with enjoyable facilities for picnics, group outings, family gatherings, and memorable leisure experiences.",
    topPlaces: [
        {
            title: "Agricultural Farm Exploration",
            description: "Explore the agricultural surroundings of Om Agro Tourism and experience the charm of rural farming. Guests can spend time understanding farm activities, enjoying open spaces, and connecting with the peaceful countryside environment."
        },
        {
            title: "Refreshing Swimming Pool",
            description: "Enjoy a refreshing swimming experience during your visit to the resort. The pool provides families and groups with an opportunity to cool down, relax, and add enjoyable water recreation to their countryside outing."
        },
        {
            title: "Traditional Bull Cart Ride",
            description: "Experience a traditional bull cart ride and discover an enjoyable aspect of rural transportation. This activity offers children and adults a memorable way to experience countryside culture during their visit."
        },
        {
            title: "Exciting Tractor Ride",
            description: "Take an enjoyable tractor ride around the agricultural surroundings and experience a fun side of farm life. It adds an active and distinctive rural experience to a family picnic or group outing."
        },
        {
            title: "Horse Riding Adventure",
            description: "Horse riding offers visitors an engaging outdoor activity in the peaceful farm environment. Families, friends, and groups can enjoy spending time outdoors while adding an adventurous element to their resort visit."
        },
        {
            title: "Homemade Countryside Food",
            description: "Savour tasty homemade food in a relaxed agricultural setting at Om Agro Tourism. A satisfying countryside meal provides the perfect opportunity for families and groups to sit together and enjoy their time away from city routines."
        },
        {
            title: "Bird Watching and Nature",
            description: "Spend peaceful moments observing birds and appreciating the natural surroundings of the farm. Bird watching provides a relaxing activity for guests who enjoy nature, open landscapes, and quiet countryside experiences."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Enjoy indoor and outdoor games that encourage friendly interaction and entertainment for visitors of different age groups. These activities make family picnics, school outings, and group visits more engaging."
        },
        {
            title: "Rural Culture Experience",
            description: "Discover the simplicity of rural life through farming experiences, traditional activities, and the natural farm environment. Guests can enjoy a closer connection with countryside culture during their stay or day visit."
        },
        {
            title: "Water and Outdoor Recreation",
            description: "Combine refreshing water activities with outdoor recreation for a varied resort experience. Guests can balance relaxation, games, farm exploration, and active experiences while spending quality time at Om Agro Tourism."
        }
    ],
    services: [
        {
            name: "Om Agro Tourism Resort",
            description: "Om Agro Tourism Resort provides a peaceful countryside destination with farm experiences, recreational activities, swimming, traditional rural attractions, homemade food, and open agricultural surroundings."
        },
        {
            name: "Om Agro Tourism Resort Pune",
            description: "Located in the Pune region, Om Agro Tourism Resort offers families and groups a refreshing rural getaway featuring farming experiences, outdoor activities, water recreation, games, and countryside dining."
        },
        {
            name: "Om Agro Tourism Koyali",
            description: "Om Agro Tourism Koyali provides visitors with an opportunity to experience agricultural surroundings, rural culture, recreational activities, traditional rides, homemade food, and peaceful countryside settings."
        },
        {
            name: "Om Agro Tourism Resort Koyali Pune",
            description: "The Koyali Pune destination combines a farm-based environment with enjoyable activities such as swimming, horse riding, tractor rides, bull cart rides, games, nature experiences, and homemade food."
        },
        {
            name: "Om Agro Tourism Near Pune",
            description: "Visitors searching for an agro tourism destination near Pune can enjoy a relaxing countryside experience with farm exploration, outdoor recreation, water activities, traditional rural experiences, and homemade meals."
        },
        {
            name: "Best Agro Tourism Resort Near Pune",
            description: "Om Agro Tourism offers an engaging agricultural getaway near Pune where guests can experience farming, rural culture, nature, recreational activities, and tasty countryside food in one destination."
        },
        {
            name: "Agro Tourism Resort Near Khed Pune",
            description: "Located in the Khed region, Om Agro Tourism provides an agricultural setting where visitors can enjoy farm experiences, swimming, games, traditional rides, nature activities, and relaxing countryside surroundings."
        },
        {
            name: "Family Agro Tourism Resort Near Pune",
            description: "Families can enjoy a variety of activities including swimming, horse riding, farm exploration, games, bird watching, tractor rides, bull cart experiences, and homemade food at Om Agro Tourism."
        },
        {
            name: "One Day Picnic at Om Agro Tourism",
            description: "A one day picnic at Om Agro Tourism can include farm exploration, swimming, outdoor games, traditional rural rides, horse riding, nature activities, and enjoyable homemade meals."
        },
        {
            name: "Om Agro Tourism One Day Picnic",
            description: "Plan a memorable one day outing at Om Agro Tourism with activities suitable for families and groups, including water recreation, farming experiences, games, rural rides, and countryside dining."
        },
        {
            name: "Om Agro Tourism Resort for Family",
            description: "The resort offers a family-friendly environment where children and adults can spend quality time together through swimming, games, farm activities, horse riding, traditional experiences, and homemade food."
        },
        {
            name: "Om Agro Tourism Picnic Spot",
            description: "Om Agro Tourism serves as a peaceful picnic destination where guests can combine natural surroundings with agricultural experiences, outdoor activities, water recreation, games, and tasty homemade food."
        },
        {
            name: "Om Agro Tourism Resort with Activities",
            description: "Visitors can enjoy a variety of activities including swimming, horse riding, tractor rides, bull cart rides, indoor and outdoor games, farm exploration, bird watching, and other outdoor experiences."
        },
        {
            name: "Om Agro Tourism Resort with Food",
            description: "Guests can enjoy tasty homemade food alongside farm activities and recreational experiences. The combination of countryside dining and outdoor leisure makes the resort suitable for family and group outings."
        },
        {
            name: "Om Agro Tourism Resort for Corporate Outing",
            description: "Corporate teams can use the peaceful farm environment for a refreshing group outing featuring outdoor activities, games, nature experiences, food, and opportunities for colleagues to interact away from the office."
        },
        {
            name: "Om Agro Tourism Resort for School Picnic",
            description: "School groups can enjoy educational and recreational experiences through farm exploration, bird watching, games, rural activities, nature observation, and other engaging experiences suitable for student outings."
        },
        {
            name: "Om Agro Tourism Resort for Family Picnic",
            description: "Families can create memorable picnic moments through swimming, games, horse riding, farm exploration, traditional bull cart and tractor rides, homemade food, and relaxing countryside surroundings."
        },
        {
            name: "Om Agro Tourism Resort Near Chakan",
            description: "Visitors travelling from the Chakan area can enjoy a countryside resort experience featuring agricultural activities, water recreation, traditional rural attractions, outdoor games, nature experiences, and homemade meals."
        },
        {
            name: "Om Agro Tourism Resort Near Alandi",
            description: "For visitors around Alandi and nearby Pune areas, Om Agro Tourism offers a refreshing rural destination where guests can enjoy farming experiences, swimming, games, horse riding, traditional activities, and countryside dining."
        },
        {
            name: "Om Agro Tourism Resort Near Rajgurunagar",
            description: "Guests travelling from Rajgurunagar can experience a peaceful agricultural getaway with farm exploration, swimming, outdoor games, bird watching, traditional rides, horse riding, and homemade food."
        },
        {
            name: "Om Agro Tourism Resort with Water Park",
            description: "Water-based recreation adds a refreshing element to the Om Agro Tourism experience. Guests can enjoy swimming and other water activities along with farm exploration, games, traditional rural experiences, and outdoor leisure."
        },
        {
            name: "Om Agro Tourism Resort Wedding Venue",
            description: "The peaceful countryside surroundings can provide a distinctive setting for celebrations and gatherings, with open spaces, natural surroundings, food, and recreational facilities adding character to special occasions."
        },
        {
            name: "Om Agro Tourism Resort Price",
            description: "Visitors planning a trip to Om Agro Tourism can enquire about the latest applicable pricing based on their chosen activities, group requirements, picnic arrangements, food options, and other facilities."
        }
    ],
    tableData: [
        ["Om Agro Tourism Resort"],
        ["Om Agro Tourism Resort Pune"],
        ["Om Agro Tourism Koyali"],
        ["Om Agro Tourism Resort Koyali Pune"],
        ["Om Agro Tourism Near Pune"],
        ["Best Agro Tourism Resort Near Pune"],
        ["Agro Tourism Resort Near Khed Pune"],
        ["Family Agro Tourism Resort Near Pune"],
        ["One Day Picnic at Om Agro Tourism"],
        ["Om Agro Tourism One Day Picnic"],
        ["Om Agro Tourism Resort for Family"],
        ["Om Agro Tourism Picnic Spot"],
        ["Om Agro Tourism Resort with Activities"],
        ["Om Agro Tourism Resort with Food"],
        ["Om Agro Tourism Resort for Corporate Outing"],
        ["Om Agro Tourism Resort for School Picnic"],
        ["Om Agro Tourism Resort for Family Picnic"],
        ["Om Agro Tourism Resort Near Chakan"],
        ["Om Agro Tourism Resort Near Alandi"],
        ["Om Agro Tourism Resort Near Rajgurunagar"],
        ["Om Agro Tourism Resort with Water Park"],
        ["Om Agro Tourism Resort Wedding Venue"],
        ["Om Agro Tourism Resort Price"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Authentic Agricultural Setting",
            WhyChoosedescription: "Om Agro Tourism gives visitors the opportunity to experience an actual farm environment, agricultural surroundings, and rural activities while enjoying a relaxing break from busy urban routines."
        },
        {
            WhyChooseheading: "Activities for Every Group",
            WhyChoosedescription: "Families, friends, students, and corporate groups can find enjoyable experiences through swimming, horse riding, games, tractor rides, bull cart rides, farm exploration, and nature activities."
        },
        {
            WhyChooseheading: "Refreshing Water Recreation",
            WhyChoosedescription: "Swimming and water-based recreation provide a refreshing option for guests who want to combine countryside relaxation with fun activities during their picnic or day outing."
        },
        {
            WhyChooseheading: "Family-Friendly Atmosphere",
            WhyChoosedescription: "The peaceful environment and variety of activities make the resort suitable for families looking to spend meaningful time together while allowing children and adults to enjoy different experiences."
        },
        {
            WhyChooseheading: "Suitable for Corporate Outings",
            WhyChoosedescription: "The open farm environment gives corporate groups an opportunity to step away from office routines, participate in recreational activities, enjoy meals together, and strengthen informal team interaction."
        },
        {
            WhyChooseheading: "Educational Rural Experiences",
            WhyChoosedescription: "Farm exploration, bird watching, and rural activities can provide students with an engaging opportunity to learn about agriculture, nature, and countryside life beyond a traditional classroom environment."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty homemade food complements the farm-based experience, giving guests the opportunity to enjoy satisfying meals in a relaxed rural atmosphere with family, friends, or colleagues."
        },
        {
            WhyChooseheading: "Nature and Rural Culture",
            WhyChoosedescription: "Visitors can experience bird watching, farming, traditional rides, open landscapes, and rural culture together, creating a balanced outing that combines recreation with a genuine countryside atmosphere."
        }
    ]
};


const faqData = [
    {
        question: "What kind of stay and recreation can guests experience at Om Agro Tourism Resort?",
        answer: "The resort brings together a farm atmosphere, outdoor recreation and opportunities to experience rural surroundings. Depending on the visit plan, guests can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food."
    },
    {
        question: "How is Om Agro Tourism Resort suitable for a family getaway?",
        answer: "Families can create an itinerary that balances recreation with relaxed time together. Children and adults can participate in suitable outdoor activities, while bird watching, farm surroundings and a homemade meal provide quieter moments for parents and senior family members."
    },
    {
        question: "Which activities are available at Om Agro Tourism Resort?",
        answer: "Visitors can choose from a range of farm and outdoor experiences rather than relying on a single attraction. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching can be included to make the visit engaging for different types of guests."
    },
    {
        question: "Can Om Agro Tourism Resort be considered for a one-day picnic?",
        answer: "Guests who prefer a day outing can plan a practical schedule around selected recreational and farm activities. Water activities, countryside rides, nature observation and homemade food can be arranged across the day without making the experience feel limited to one type of entertainment."
    },
    {
        question: "What makes an agro tourism resort different from a regular resort outing?",
        answer: "An agro tourism experience adds rural surroundings and traditional farm activities to the usual leisure itinerary. Along with recreation such as swimming and boating, guests can explore horse riding, tractor rides, bull cart rides and bird watching in a countryside environment."
    },
    {
        question: "Is Om Agro Tourism Resort suitable for children and young visitors?",
        answer: "Young guests can enjoy several outdoor experiences with suitable adult supervision. Swimming, boating and selected rides can keep children active, while bird watching and the farm environment offer an opportunity to observe nature and discover a different side of rural life."
    },
    {
        question: "What can couples or friends do during a visit to Om Agro Tourism Resort?",
        answer: "Couples and friend groups can combine recreational activities with slower countryside experiences. Boating, swimming and horse riding can be followed by tractor or bull cart rides, nature observation and a relaxed homemade meal for a varied day together."
    },
    {
        question: "Does Om Agro Tourism Resort offer traditional rural experiences?",
        answer: "Traditional activities form an important part of the countryside experience, with options such as tractor rides and bull cart rides adding a village-inspired touch. Horse riding and bird watching can further complement the outdoor recreation available during the visit."
    },
    {
        question: "How can visitors plan a comfortable day at Om Agro Tourism Resort?",
        answer: "A well-paced schedule can begin with the activities guests are most interested in and leave sufficient time for food and relaxation. Mixing swimming or boating with farm rides, bird watching and breaks around the property can help different age groups enjoy the outing comfortably."
    },
    {
        question: "Why consider Om Agro Tourism Resort for a countryside holiday experience?",
        answer: "People looking for more than a conventional leisure destination can explore a setting where farm experiences, outdoor recreation, nature and food come together. The combination of swimming, boating, horse riding, tractor rides, bull cart rides and bird watching creates multiple ways to enjoy time away from the city."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Kunal Bhosale",
        feedback:
            "The biggest attraction for our group was being able to combine recreation with genuine countryside activities. Swimming and boating kept the day energetic, while the tractor ride and bull cart experience added something we had not tried at a regular resort. The overall atmosphere felt refreshing.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss Anjali Chavan",
        feedback:
            "A peaceful farm environment made our family outing feel different from an ordinary resort visit. The younger members enjoyed the activities and rides, whereas the elders preferred bird watching and taking their time over the homemade food. It was a comfortable experience for everyone.",
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
  "name": "Om Agro Tourism Resort",
  "image": "https://www.omagrotourism.com/assets/images/om-agro-tourism-resort.webp",
  "description": "Om Agro Tourism Resort is a family-friendly agro-tourism destination for visitors searching for an enjoyable resort experience near Pune. Located in the Koyali and Khed Pune search area, the destination is suited to families, friends, groups and visitors planning a relaxed day outing surrounded by an agro-tourism atmosphere. Those looking for Om Agro Tourism Resort Pune, Om Agro Tourism Koyali or Om Agro Tourism Resort Koyali Pune can explore a convenient destination for family recreation, picnics and outdoor leisure. Visitors searching for Om Agro Tourism Near Pune or the best agro tourism resort near Pune can consider the property for a refreshing break from the city's regular routine. It is also relevant for people comparing an agro tourism resort near Khed Pune, family agro tourism resort near Pune and one day outing destinations around the region. From family picnics and friends' gatherings to group recreation and peaceful day escapes, Om Agro Tourism Resort provides an inviting setting for spending quality time together and enjoying the charm of agro-tourism.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/om-agro-tourism-resort"
  }
};



    return (
        <div>


<Helmet>
  <title>
    Om Agro Tourism Resort | Koyali Pune, Family Retreat & Agro Tourism Experience | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover Om Agro Tourism Resort near Pune at Koyali, Khed. Enjoy a family-friendly agro-tourism experience with a relaxing setting for picnics, day outings, group recreation and leisure."
  />

  <meta
    name="keywords"
    content="Om Agro Tourism Resort, Om Agro Tourism Resort Pune, Om Agro Tourism Koyali, Om Agro Tourism Resort Koyali Pune, Om Agro Tourism Near Pune, Best Agro Tourism Resort Near Pune, Agro Tourism Resort Near Khed Pune, Family Agro Tourism Resort Near Pune, One Day Agro Tourism Resort Near Pune, Family Resort Near Khed Pune, Agro Tourism Near Koyali, Resort Near Koyali Pune, Family Picnic Resort Near Pune, One Day Picnic Resort Near Pune, Best Family Resort Near Pune, Agro Tourism Places Near Pune, Family Outing Near Pune, One Day Outing Near Pune"
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
                            <img src='/images/keyword/170.jpg' alt='img' className='img-fluid' />
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

export default Omagotourismresort;