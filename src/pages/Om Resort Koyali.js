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

function Omresortkoyali() {

const cardData = {
    keyword: "Om Resort Koyali",
    headingDescription: "Om Resort Koyali offers a peaceful countryside destination near Pune for families, friends, students, corporate teams, and groups looking for a refreshing day outing. Guests can enjoy farm experiences, swimming, traditional rural activities, outdoor games, horse riding, homemade food, nature exploration, and water-based recreation in a relaxed agricultural environment. The resort is suitable for picnics, family gatherings, group outings, and special occasions.",
    topPlaces: [
        {
            title: "Explore the Agricultural Farm",
            description: "Discover the agricultural surroundings of Om Resort Koyali and experience the charm of rural farming. Guests can explore the farm environment, observe agricultural activities, and enjoy peaceful open spaces away from the busy city routine."
        },
        {
            title: "Refreshing Swimming Pool",
            description: "Enjoy relaxing water time at the swimming pool with family and friends. The pool provides a refreshing recreational experience and gives guests an enjoyable way to cool down during a countryside day outing."
        },
        {
            title: "Traditional Bull Cart Ride",
            description: "Experience the charm of rural transportation with a traditional bull cart ride. This activity offers children and adults an opportunity to enjoy a memorable countryside experience connected with village culture."
        },
        {
            title: "Fun Tractor Ride",
            description: "Take an exciting tractor ride around the agricultural surroundings and experience a fun part of farm life. It adds an interesting outdoor activity to family picnics, school outings, and group visits."
        },
        {
            title: "Horse Riding Experience",
            description: "Horse riding gives guests an active way to enjoy the peaceful outdoor environment. Families and groups can add this enjoyable experience to their visit while spending more time in the natural surroundings."
        },
        {
            title: "Homemade Food Experience",
            description: "Enjoy tasty homemade food in a relaxed countryside setting. Sharing meals with family, friends, or colleagues adds a comfortable dining experience to a day filled with outdoor recreation and farm activities."
        },
        {
            title: "Bird Watching and Nature",
            description: "Spend quiet moments observing birds and appreciating the natural surroundings of the farm. Nature lovers can enjoy the peaceful landscape while taking a break from crowded urban environments."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Keep the outing entertaining with indoor and outdoor games suitable for families, students, friends, and groups. These activities encourage interaction and provide enjoyable recreation throughout the visit."
        },
        {
            title: "Rural Life Experience",
            description: "Experience the simplicity of countryside life through farming activities, traditional rural attractions, and open agricultural surroundings. The setting provides visitors with a closer connection to rural culture."
        },
        {
            title: "Water and Outdoor Recreation",
            description: "Combine water-based activities with outdoor recreation for a varied day at Om Resort Koyali. Guests can enjoy relaxation, games, farm experiences, and active entertainment during their countryside visit."
        }
    ],
    services: [
        {
            name: "Om Resort Koyali",
            description: "Om Resort Koyali provides a peaceful countryside destination with farm experiences, swimming, outdoor recreation, traditional rural activities, homemade food, and open agricultural surroundings for families and groups."
        },
        {
            name: "Om Resort Koyali Pune",
            description: "Located in the Pune region, Om Resort Koyali offers visitors a refreshing rural getaway with swimming, farm exploration, games, horse riding, traditional rides, nature experiences, and countryside dining."
        },
        {
            name: "Om Resort Near Koyali",
            description: "Visitors searching for a resort near Koyali can enjoy a relaxed agricultural setting with recreational activities, water experiences, traditional rural attractions, homemade food, and peaceful open surroundings."
        },
        {
            name: "Om Resort Koyali Maharashtra",
            description: "Om Resort Koyali Maharashtra provides a countryside experience where guests can enjoy farm activities, swimming, horse riding, games, traditional rides, nature exploration, and homemade meals."
        },
        {
            name: "Best Resort in Koyali Pune",
            description: "Om Resort Koyali offers a combination of rural surroundings, agricultural experiences, recreational facilities, traditional activities, water recreation, and countryside food for an enjoyable day outing."
        },
        {
            name: "Om Resort for One Day Picnic",
            description: "A one day picnic at Om Resort can include swimming, farm exploration, games, horse riding, traditional bull cart and tractor rides, bird watching, and tasty homemade food."
        },
        {
            name: "Om Resort One Day Picnic Koyali",
            description: "Plan an enjoyable one day picnic at Koyali with a mix of water activities, outdoor games, farm experiences, rural attractions, nature exploration, and relaxed countryside dining."
        },
        {
            name: "Om Resort for Family Picnic",
            description: "Families can enjoy quality time together through swimming, games, horse riding, farm exploration, traditional rides, nature activities, and homemade food in the peaceful setting of Om Resort Koyali."
        },
        {
            name: "Om Resort Koyali for Family Outing",
            description: "The resort provides a family-friendly environment where children and adults can enjoy recreational activities, farming experiences, water recreation, traditional rural activities, and relaxed time together."
        },
        {
            name: "Om Resort Koyali Picnic Spot",
            description: "Om Resort Koyali serves as a peaceful picnic destination where guests can combine natural surroundings with farm exploration, games, swimming, traditional rides, horse riding, and homemade food."
        },
        {
            name: "Om Resort Koyali with Activities",
            description: "Guests can enjoy several activities including swimming, horse riding, tractor rides, bull cart rides, indoor and outdoor games, farm exploration, bird watching, and other outdoor experiences."
        },
        {
            name: "Om Resort Koyali with Food",
            description: "Tasty homemade food complements the recreational experience at Om Resort Koyali, allowing families and groups to enjoy satisfying countryside meals during their picnic or day outing."
        },
        {
            name: "Om Resort Koyali Water Park",
            description: "Water-based recreation provides a refreshing element to the resort experience, with swimming and other outdoor activities giving visitors opportunities to relax and have fun with family and friends."
        },
        {
            name: "Om Resort Koyali Wedding Venue",
            description: "The peaceful countryside surroundings can provide a distinctive setting for celebrations and gatherings, with open spaces, natural scenery, food options, and recreational facilities adding character to special occasions."
        },
        {
            name: "Om Resort Koyali for Corporate Outing",
            description: "Corporate teams can enjoy a refreshing break from office routines through outdoor games, nature experiences, farm activities, swimming, group recreation, and shared meals in the countryside."
        },
        {
            name: "Om Resort Koyali for School Picnic",
            description: "School groups can combine recreation with educational farm experiences through agricultural exploration, bird watching, nature observation, games, traditional activities, and other engaging countryside experiences."
        },
        {
            name: "Om Resort Koyali for Group Picnic",
            description: "Groups can enjoy a complete picnic experience with activities such as swimming, games, horse riding, tractor rides, bull cart rides, farm exploration, nature activities, and homemade food."
        },
        {
            name: "Om Resort Koyali Price",
            description: "Visitors planning a trip to Om Resort Koyali can enquire about the latest applicable pricing according to their selected activities, food requirements, group size, picnic arrangements, and other facilities."
        },
        {
            name: "Om Resort Koyali Booking",
            description: "Guests planning a family picnic, group outing, school visit, corporate event, or special gathering can contact Om Resort Koyali to enquire about booking availability, arrangements, activities, and applicable packages."
        },
        {
            name: "Resort Near Koyali Pune",
            description: "Visitors searching for a resort near Koyali Pune can enjoy a peaceful agricultural environment with recreational activities, water experiences, farm exploration, traditional rural attractions, and homemade food."
        },
        {
            name: "Family Resort Near Koyali",
            description: "Families can enjoy a comfortable countryside outing with swimming, games, horse riding, farming experiences, traditional rides, bird watching, and homemade meals at Om Resort Koyali."
        },
        {
            name: "One Day Resort Near Koyali Pune",
            description: "Om Resort Koyali is suitable for a one day outing where guests can combine relaxation with swimming, games, farm activities, nature experiences, traditional rides, and countryside dining."
        },
        {
            name: "Picnic Resort Near Koyali",
            description: "Guests looking for a picnic resort near Koyali can enjoy open agricultural surroundings, water recreation, outdoor games, farm exploration, traditional activities, horse riding, and homemade food."
        }
    ],
    tableData: [
        ["Om Resort Koyali"],
        ["Om Resort Koyali Pune"],
        ["Om Resort Near Koyali"],
        ["Om Resort Koyali Maharashtra"],
        ["Best Resort in Koyali Pune"],
        ["Om Resort for One Day Picnic"],
        ["Om Resort One Day Picnic Koyali"],
        ["Om Resort for Family Picnic"],
        ["Om Resort Koyali for Family Outing"],
        ["Om Resort Koyali Picnic Spot"],
        ["Om Resort Koyali with Activities"],
        ["Om Resort Koyali with Food"],
        ["Om Resort Koyali Water Park"],
        ["Om Resort Koyali Wedding Venue"],
        ["Om Resort Koyali for Corporate Outing"],
        ["Om Resort Koyali for School Picnic"],
        ["Om Resort Koyali for Group Picnic"],
        ["Om Resort Koyali Price"],
        ["Om Resort Koyali Booking"],
        ["Resort Near Koyali Pune"],
        ["Family Resort Near Koyali"],
        ["One Day Resort Near Koyali Pune"],
        ["Picnic Resort Near Koyali"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Location",
            WhyChoosedescription: "Om Resort Koyali provides a relaxed agricultural environment where families, groups, and visitors can enjoy open spaces and peaceful surroundings away from the congestion of city life."
        },
        {
            WhyChooseheading: "Variety of Recreational Activities",
            WhyChoosedescription: "Guests can choose from swimming, horse riding, games, tractor rides, bull cart rides, farm exploration, bird watching, and other activities to make their outing more engaging."
        },
        {
            WhyChooseheading: "Comfortable for Family Outings",
            WhyChoosedescription: "The combination of family-friendly activities, open spaces, food, and recreational facilities makes the resort suitable for families looking to spend quality time together."
        },
        {
            WhyChooseheading: "Authentic Farm Experiences",
            WhyChoosedescription: "Visitors can explore agricultural surroundings and experience aspects of rural life through farm activities, traditional rides, and countryside experiences that create a distinctive outing."
        },
        {
            WhyChooseheading: "Refreshing Water Recreation",
            WhyChoosedescription: "Swimming and water-based activities offer a refreshing way to enjoy the day, allowing guests to combine countryside relaxation with enjoyable recreational experiences."
        },
        {
            WhyChooseheading: "Suitable for Schools and Groups",
            WhyChoosedescription: "School groups and larger gatherings can enjoy farm exploration, nature observation, games, traditional activities, and outdoor recreation in an environment that encourages participation and interaction."
        },
        {
            WhyChooseheading: "Corporate Outing Experience",
            WhyChoosedescription: "Corporate teams can step away from their usual office environment and enjoy group games, outdoor activities, farm experiences, shared meals, and relaxed interaction in the countryside."
        },
        {
            WhyChooseheading: "Homemade Food and Rural Hospitality",
            WhyChoosedescription: "Tasty homemade food adds comfort to the resort experience, giving guests an opportunity to enjoy satisfying meals while spending quality time with family, friends, colleagues, or groups."
        }
    ]
};


const faqData = [
    {
        question: "What can guests expect when visiting Om Resort Koyali for a countryside getaway?",
        answer: "Visitors can enjoy a combination of rural experiences, recreation and peaceful time surrounded by farm landscapes. The property features activities such as swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food."
    },
    {
        question: "How can families make the most of their visit to Om Resort Koyali?",
        answer: "Families can build a flexible itinerary that includes both energetic activities and slower moments together. Children can enjoy swimming and selected rides, while parents and elders can spend time with boating, bird watching, farm experiences and a relaxed homemade meal."
    },
    {
        question: "Which attractions are available at Om Resort Koyali?",
        answer: "The destination provides several ways to enjoy a farm-based outing, including a swimming pool, boating, horse riding, tractor rides and traditional bull cart rides. Bird watching and homemade food add nature and local countryside elements to the overall experience."
    },
    {
        question: "Can Om Resort Koyali be planned for a one-day family outing?",
        answer: "A day visit can be structured around a few preferred activities without making the schedule too busy. Guests may combine water recreation with farm rides, nature observation and meal breaks, creating enough time for both entertainment and relaxation."
    },
    {
        question: "What makes Om Resort Koyali different from a regular leisure resort?",
        answer: "The property combines resort-style recreation with an authentic agro-tourism atmosphere. Instead of focusing only on conventional leisure facilities, guests can experience rural activities such as tractor rides, bull cart rides and horse riding alongside swimming, boating and nature-based experiences."
    },
    {
        question: "Is Om Resort Koyali suitable for children and students?",
        answer: "Young visitors can find several engaging outdoor activities when accompanied by responsible adults and appropriate supervision. Swimming, boating, farm rides and bird watching can make the outing enjoyable while also giving children exposure to a countryside environment."
    },
    {
        question: "What traditional activities can guests experience at Om Resort Koyali?",
        answer: "Guests interested in rural culture can try experiences such as bull cart rides and tractor rides through the farm surroundings. Horse riding can provide another outdoor option, making the visit more distinctive than a standard resort-based day trip."
    },
    {
        question: "Can visitors enjoy nature and relaxation at Om Resort Koyali?",
        answer: "The farm surroundings provide opportunities to slow down between recreational activities. Bird watching, open greenery, boating and spending time over homemade food can give visitors a peaceful side of the experience along with the more active attractions."
    },
    {
        question: "How can friends or corporate groups plan activities at Om Resort Koyali?",
        answer: "Groups can select activities according to their interests and divide the day between recreation and shared downtime. Swimming, boating, horse riding and traditional farm rides can encourage group interaction, while meals and nature-focused breaks allow everyone to unwind."
    },
    {
        question: "Why consider Om Resort Koyali for an agro tourism experience near Pune?",
        answer: "Travelers looking for a combination of farm life, outdoor recreation and countryside relaxation can find several experiences in one destination. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching make it suitable for families, friends and organized groups."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Saurabh Wagh",
        feedback:
            "The rural setting gave our group a welcome break from the usual resort routine. We spent time swimming and boating before trying the tractor and bull cart rides, which were completely new for some of us. The relaxed farm atmosphere made the entire outing enjoyable.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Kavita Jadhav",
        feedback:
            "Our family appreciated having activities for both children and older members. The youngsters were excited about the outdoor recreation, while the elders preferred bird watching, boating and enjoying homemade food. The mix of fun and peaceful countryside time worked very well for us.",
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
  "name": "Om Resort Koyali",
  "image": "https://www.omagrotourism.com/assets/images/om-resort-koyali.webp",
  "description": "Om Resort Koyali is a convenient destination for visitors searching for a family-friendly resort and picnic experience around Koyali, Pune. Om Agro Tourism provides a welcoming setting for families, friends and groups planning a one day picnic, family outing or relaxed day away from the regular city routine. Visitors searching for Om Resort Koyali Pune, Om Resort Near Koyali or Om Resort Koyali Maharashtra can explore a destination suited to leisure, group recreation and memorable gatherings. Those planning an Om Resort one day picnic Koyali or looking for an Om Resort for family picnic can consider the destination for spending quality time with loved ones. Searchers interested in an Om Resort Koyali picnic spot, Om Resort Koyali with activities, Om Resort Koyali with food or Om Resort Koyali water park can use these terms when exploring suitable picnic and recreation options. The destination can also appeal to visitors researching an Om Resort Koyali wedding venue for family functions, celebrations and group occasions. With its agro-tourism character and leisure-focused environment, Om Resort Koyali is suited to family outings, picnics, group gatherings and recreational day plans.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/om-resort-koyali"
  }
};



    return (
        <div>


<Helmet>
  <title>
    Om Resort Koyali | Family Picnic, Activities & Leisure Resort Near Pune | +91 7066665554
  </title>

  <meta
    name="description"
    content="Explore Om Resort Koyali near Pune for family picnics, one day outings, group recreation and leisure. Discover Om Agro Tourism as a convenient Koyali destination for family gatherings and outdoor experiences."
  />

  <meta
    name="keywords"
    content="Om Resort Koyali, Om Resort Koyali Pune, Om Resort Near Koyali, Om Resort Koyali Maharashtra, Best Resort in Koyali Pune, Om Resort for One Day Picnic, Om Resort One Day Picnic Koyali, Om Resort for Family Picnic, Om Resort Koyali for Family Outing, Om Resort Koyali Picnic Spot, Om Resort Koyali with Activities, Om Resort Koyali with Food, Om Resort Koyali Water Park, Om Resort Koyali Wedding Venue, Om Resort Koyali for Group Outing, Om Resort Koyali Family Resort, One Day Picnic Resort Koyali, Family Picnic Resort Near Koyali, Resort Near Koyali Pune, Best Family Resort Near Pune, Agro Tourism Resort Koyali, Picnic Spot Near Koyali, One Day Outing Near Koyali"
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
                            <img src='/images/keyword/171.jpg' alt='img' className='img-fluid' />
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

export default Omresortkoyali;