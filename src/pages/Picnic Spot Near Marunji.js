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

function Picnicspotnearmarunji() {

const cardData = {
    keyword: "Picnic Spot Near Marunji",
    headingDescription: "Looking for a peaceful picnic spot near Marunji for a family outing, one day trip, or relaxing weekend break? Om Agro Tourism offers a refreshing countryside setting where families, friends, and groups can enjoy nature, farm experiences, outdoor recreation, swimming, homemade food, and quality time together. Visitors from Marunji, Hinjewadi, Maan, and nearby Pune areas can enjoy a convenient escape from the busy urban routine while experiencing a memorable day surrounded by rural landscapes.",
    topPlaces: [
        {
            title: "Family Nature Day",
            description: "Enjoy a relaxed family outing surrounded by peaceful countryside landscapes, open spaces, farm experiences, recreational activities, and homemade food for a comfortable day away from the busy Marunji area."
        },
        {
            title: "Complete One Day Escape",
            description: "Plan a convenient full-day outing with family or friends, combining nature, recreation, food, and rural experiences without needing to travel to a distant destination."
        },
        {
            title: "Hinjewadi Weekend Break",
            description: "Visitors from the Hinjewadi area can take a refreshing break from work and city routines with a countryside outing featuring open surroundings, farm activities, recreation, and relaxed family time."
        },
        {
            title: "Kids Fun-Filled Outing",
            description: "Families with children can enjoy an engaging day with swimming, outdoor games, farm experiences, and other recreational activities that provide entertainment for younger visitors."
        },
        {
            title: "Friends Countryside Getaway",
            description: "Friends and small groups can spend quality time together through outdoor recreation, farm-based experiences, tasty food, and relaxed moments in a peaceful rural environment."
        },
        {
            title: "Affordable Family Picnic",
            description: "Families looking for a value-oriented day out can combine nature, recreation, food, and farm experiences in one destination while enjoying a memorable break near Marunji."
        },
        {
            title: "Rural Farm Adventure",
            description: "Experience countryside life through agricultural surroundings, farm activities, rural experiences, and traditional food while enjoying a refreshing day with family or friends."
        },
        {
            title: "Maan-Marunji Day Escape",
            description: "Visitors from Maan and Marunji can plan a convenient countryside outing with family activities, nature experiences, open spaces, and recreational options suited to a relaxed day trip."
        },
        {
            title: "Family Resort Experience",
            description: "Enjoy a family-oriented resort atmosphere with recreational facilities, open areas, food options, and activities that make the outing comfortable for parents, children, relatives, and larger groups."
        },
        {
            title: "Activity-Rich Countryside Day",
            description: "Create an engaging picnic with swimming, boating, indoor and outdoor games, tractor rides, horse riding, farm tours, and other activities while enjoying peaceful rural surroundings."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Marunji",
            description: "Om Agro Tourism offers a peaceful countryside picnic environment near Marunji where families and groups can enjoy nature, farm experiences, outdoor recreation, homemade food, and quality time together."
        },
        {
            name: "One Day Picnic Spot Near Marunji",
            description: "Visitors can plan a convenient one day outing from Marunji with countryside relaxation, family activities, farm experiences, food, and recreational options in a comfortable rural atmosphere."
        },
        {
            name: "Best Picnic Spot Near Marunji",
            description: "Families searching for an enjoyable picnic destination near Marunji can experience a balanced combination of natural surroundings, recreational activities, farm experiences, open spaces, and tasty homemade meals."
        },
        {
            name: "Family Picnic Spot Near Marunji",
            description: "The family-friendly environment is suitable for parents, children, relatives, and groups who want to enjoy swimming, games, farm experiences, nature, and relaxed outdoor time together."
        },
        {
            name: "Picnic Resort Near Marunji",
            description: "Visitors can enjoy a resort-style countryside picnic with recreational facilities, farm activities, open surroundings, food options, and comfortable spaces for relaxing away from the busy urban environment."
        },
        {
            name: "One Day Picnic Resort Near Marunji",
            description: "Plan a complete one day resort outing with family or friends and enjoy swimming, outdoor recreation, farm experiences, homemade food, and peaceful surroundings without requiring an overnight stay."
        },
        {
            name: "Best Resort Near Marunji for Picnic",
            description: "For a memorable picnic near Marunji, Om Agro Tourism combines a natural rural atmosphere with family-friendly activities, farm experiences, food, and recreation suitable for different age groups."
        },
        {
            name: "Family Resort Near Marunji",
            description: "Families can spend a comfortable day in a countryside resort environment with options for relaxation and recreation, making the outing enjoyable for children, adults, and senior family members."
        },
        {
            name: "One Day Trip Near Marunji",
            description: "A practical choice for a short one day trip from Marunji, offering visitors nature, rural surroundings, farm experiences, food, recreation, and opportunities to spend meaningful time with companions."
        },
        {
            name: "Family One Day Trip Near Marunji",
            description: "Plan a family-focused day trip with outdoor games, swimming, farm exploration, traditional food, and countryside relaxation for a refreshing break from everyday routines."
        },
        {
            name: "Picnic Places Near Marunji",
            description: "Visitors comparing picnic places near Marunji can consider a countryside destination where natural surroundings, farm-based experiences, recreational activities, and family-friendly facilities come together."
        },
        {
            name: "Best Picnic Places Near Marunji",
            description: "Those searching for enjoyable picnic places near Marunji can experience a peaceful rural setting with engaging activities, open spaces, homemade meals, and opportunities for meaningful family or group recreation."
        },
        {
            name: "Affordable Picnic Spot Near Marunji",
            description: "An affordable picnic experience near Marunji can bring together nature, food, recreation, and family activities in one destination, helping visitors enjoy a rewarding day without unnecessary travel."
        },
        {
            name: "Budget Picnic Resort Near Marunji",
            description: "Families and groups looking for a budget picnic resort can enjoy a countryside atmosphere with recreational activities, farm experiences, meals, and suitable spaces for a full-day outing."
        },
        {
            name: "Picnic Spot Near Marunji Pune",
            description: "Located within the wider Pune region, this countryside destination offers visitors from Marunji a convenient setting for family picnics, group outings, nature breaks, and activity-filled day trips."
        },
        {
            name: "Resort Near Marunji for Family Outing",
            description: "Families can enjoy a relaxed outing with open rural surroundings, recreational activities, farm experiences, swimming, games, and homemade food in a comfortable and refreshing atmosphere."
        },
        {
            name: "One Day Resort Near Marunji",
            description: "A one day resort experience near Marunji allows visitors to relax, explore farm surroundings, enjoy countryside activities, and spend an entire day away from their regular schedule."
        },
        {
            name: "Nature Picnic Spot Near Marunji",
            description: "Nature lovers can enjoy a refreshing picnic surrounded by greenery and rural landscapes, along with opportunities for farm exploration, outdoor recreation, traditional food, and peaceful family time."
        },
        {
            name: "Picnic Spot Near Hinjewadi Marunji",
            description: "Visitors from Hinjewadi and Marunji can enjoy a convenient countryside picnic featuring family activities, farm experiences, open surroundings, homemade food, and recreational opportunities."
        },
        {
            name: "Picnic Spot Near Maan Marunji",
            description: "Families and groups from Maan and Marunji can plan a refreshing outing with nature, rural experiences, outdoor games, swimming, farm activities, and comfortable spaces for relaxation."
        },
        {
            name: "Family Picnic Resort Near Marunji",
            description: "The family-oriented picnic environment combines countryside charm with recreational activities and food facilities, making it suitable for parents, children, relatives, and larger family gatherings."
        },
        {
            name: "Picnic Spot with Activities Near Marunji",
            description: "Visitors can enjoy an activity-filled picnic with options such as swimming, boating, indoor and outdoor games, tractor rides, horse riding, farm tours, and other experiences suitable for families and groups."
        }
    ],
    tableData: [
        ["Picnic Spot Near Marunji"],
        ["One Day Picnic Spot Near Marunji"],
        ["Best Picnic Spot Near Marunji"],
        ["Family Picnic Spot Near Marunji"],
        ["Picnic Resort Near Marunji"],
        ["One Day Picnic Resort Near Marunji"],
        ["Best Resort Near Marunji for Picnic"],
        ["Family Resort Near Marunji"],
        ["One Day Trip Near Marunji"],
        ["Family One Day Trip Near Marunji"],
        ["Picnic Places Near Marunji"],
        ["Best Picnic Places Near Marunji"],
        ["Affordable Picnic Spot Near Marunji"],
        ["Budget Picnic Resort Near Marunji"],
        ["Picnic Spot Near Marunji Pune"],
        ["Resort Near Marunji for Family Outing"],
        ["One Day Resort Near Marunji"],
        ["Nature Picnic Spot Near Marunji"],
        ["Picnic Spot Near Hinjewadi Marunji"],
        ["Picnic Spot Near Maan Marunji"],
        ["Family Picnic Resort Near Marunji"],
        ["Picnic Spot with Activities Near Marunji"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Atmosphere",
            WhyChoosedescription: "The rural setting offers a refreshing change from the busy Hinjewadi-Marunji surroundings, giving families and groups a comfortable place to relax and enjoy meaningful outdoor time."
        },
        {
            WhyChooseheading: "Family-Oriented Environment",
            WhyChoosedescription: "Parents, children, relatives, and senior family members can enjoy suitable recreational options including games, swimming, farm experiences, open spaces, and relaxed outdoor activities."
        },
        {
            WhyChooseheading: "Convenient from Marunji",
            WhyChoosedescription: "Visitors from Marunji and nearby Maan and Hinjewadi areas can plan a practical day outing without committing to a long journey, making it suitable for quick family or group plans."
        },
        {
            WhyChooseheading: "Variety of Outdoor Activities",
            WhyChoosedescription: "Swimming, boating, tractor rides, horse riding, indoor and outdoor games, and farm tours provide multiple ways to enjoy the day and keep the outing engaging for different age groups."
        },
        {
            WhyChooseheading: "Authentic Farm-Based Experience",
            WhyChoosedescription: "Guests can explore rural surroundings and agricultural activities while getting closer to farm life and enjoying a slower, more natural environment away from regular city routines."
        },
        {
            WhyChooseheading: "Fresh Homemade Food",
            WhyChoosedescription: "Tasty homemade food brings a traditional touch to the picnic, allowing visitors to enjoy satisfying meals while experiencing the welcoming atmosphere of a countryside destination."
        },
        {
            WhyChooseheading: "Suitable for Groups",
            WhyChoosedescription: "Families, friends, school groups, and other visitors can enjoy shared activities, informal gatherings, recreation, and memorable moments within the spacious rural surroundings."
        },
        {
            WhyChooseheading: "Break from Urban Routine",
            WhyChoosedescription: "Green surroundings, open spaces, farm experiences, and recreational activities create a refreshing opportunity to disconnect from daily schedules and enjoy a relaxed outdoor day."
        }
    ]
};




const faqData = [
    {
        question: "What can visitors from Marunji experience at Om Agri Tourism?",
        answer: "A visit to Om Agri Tourism brings together outdoor recreation, farm activities and a peaceful countryside setting. Guests from Marunji can enjoy swimming, boating and horse riding, along with tractor rides, bull cart rides, bird watching and homemade food."
    },
    {
        question: "Which activities can families from Marunji include in a picnic?",
        answer: "Families can build their outing around a combination of active and relaxed experiences. Swimming and boating can provide recreation, while horse riding, tractor rides and bull cart rides add a rural touch. Bird watching and homemade food can be enjoyed during quieter parts of the day."
    },
    {
        question: "How is Om Agri Tourism different from a regular picnic place near Marunji?",
        answer: "The farm environment gives visitors an opportunity to experience more than conventional leisure activities. Along with swimming and boating, guests can explore horse riding and traditional farm rides while spending time around nature and enjoying homemade food."
    },
    {
        question: "Can friends from Marunji plan a full-day outing at Om Agri Tourism?",
        answer: "A friends' group can make the most of the day by combining shared recreational activities with relaxed time together. Boating, swimming and riding experiences can keep the group engaged, while meals, photography and conversations can fill the breaks between activities."
    },
    {
        question: "Is Om Agri Tourism suitable for a children's picnic near Marunji?",
        answer: "Children can enjoy suitable outdoor activities such as swimming, boating and selected riding experiences when accompanied by responsible adults. Bird watching also gives younger visitors a chance to observe the natural surroundings and experience something different from regular city recreation."
    },
    {
        question: "What can senior citizens do during a family picnic near Marunji?",
        answer: "Senior members can choose a slower itinerary and enjoy the aspects of the destination that do not require strenuous activity. Bird watching, homemade food, greenery and family conversations can make their visit enjoyable while younger guests participate in swimming, boating or rides."
    },
    {
        question: "Can visitors near Marunji experience traditional countryside rides?",
        answer: "Those interested in rural-style experiences can try tractor rides and bull cart rides along with horse riding. These activities can be combined with swimming and boating to create a picnic that includes both modern recreation and traditional farm experiences."
    },
    {
        question: "What would be a comfortable one-day picnic plan from Marunji?",
        answer: "Groups can begin with activities such as boating or swimming, followed by a meal and a break. Horse riding, tractor rides or bull cart rides can be scheduled later, with some time reserved for bird watching, photography and simply enjoying the open surroundings."
    },
    {
        question: "Can corporate groups from Marunji arrange an outdoor picnic at Om Agri Tourism?",
        answer: "Corporate teams can use the farm setting for an informal day away from their usual workplace. Outdoor activities, group rides and meals can create opportunities for colleagues to interact naturally while enjoying a change of environment."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Marunji?",
        answer: "Visitors seeking a countryside escape can find several experiences within one destination, from swimming and boating to horse riding and traditional farm rides. Bird watching, homemade food and open surroundings further contribute to a varied outing for families, friends and groups."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Harshad Patil",
        feedback:
            "A weekend outing from Marunji felt much more enjoyable in the open farm environment. Our group had fun with swimming and boating before trying the traditional rides. The homemade food and relaxed setting gave us plenty of time to enjoy conversations without rushing through the day.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Mitali Kulkarni",
        feedback:
            "The variety of experiences made our family visit memorable. The kids were excited about the activities and rides, while the elders preferred bird watching and spending time around the greenery. Having both energetic and peaceful options worked perfectly for our group.",
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
  "name": "Picnic Spot Near Marunji",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-marunji.webp",
  "description": "Looking for a relaxing picnic spot near Marunji for a refreshing family or group outing? Om Agro Tourism offers a welcoming agro-tourism setting where families, friends, students and groups can take a break from the regular city routine and enjoy quality time together. A one day picnic near Marunji can be a convenient choice for a short leisure escape, with an open and peaceful atmosphere suited to family gatherings and casual group plans. Visitors searching for the best picnic spot near Marunji can plan a day trip with friends or loved ones, while families looking for a family picnic spot near Marunji can enjoy a comfortable environment for shared outdoor moments. Those considering a picnic resort near Marunji or a one day picnic resort near Marunji can also plan a convenient destination for a family outing, friends' gathering or weekend picnic. Om Agro Tourism provides a pleasant setting for creating memorable experiences during a relaxed picnic near Marunji.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-marunji"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Marunji | Family Leisure, Nature Break & Memorable Day Out | +91 7066665554
  </title>

  <meta
    name="description"
    content="Find a picnic spot near Marunji for families, friends and groups. Plan a one day picnic at Om Agro Tourism and enjoy a peaceful nature break with family leisure and outdoor recreation."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Marunji, One Day Picnic Spot Near Marunji, Best Picnic Spot Near Marunji, Family Picnic Spot Near Marunji, Picnic Resort Near Marunji, One Day Picnic Resort Near Marunji, Best Resort Near Marunji for Picnic, Family Resort Near Marunji, One Day Trip Near Marunji, Family One Day Trip Near Marunji, Picnic Places Near Marunji, Best Picnic Places Near Marunji, Family Outing Near Marunji, One Day Outing Near Marunji, Picnic Destination Near Marunji, Agro Tourism Near Marunji, Best Family Picnic Near Marunji"
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
                            <img src='/images/keyword/160.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearmarunji;