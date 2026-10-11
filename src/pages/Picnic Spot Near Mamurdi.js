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

function Picnicspotnearmamurdi() {

const cardData = {
    keyword: "Picnic Spot Near Mamurdi",
    headingDescription: "Looking for a peaceful picnic spot near Mamurdi for a family outing, one day trip, or refreshing weekend break? Om Agro Tourism offers a countryside environment where visitors can enjoy nature, farm experiences, outdoor recreation, swimming, homemade food, and quality time with family or friends. It is a convenient choice for people from Mamurdi, Dehu Road, Talegaon, and nearby Pune areas who want a relaxing day away from the busy urban routine.",
    topPlaces: [
        {
            title: "Family Countryside Day",
            description: "Enjoy a relaxed family outing in peaceful rural surroundings near Mamurdi, with open spaces, farm experiences, recreational activities, homemade food, and opportunities for everyone to spend quality time together."
        },
        {
            title: "Complete One Day Outing",
            description: "Plan a convenient full-day escape from Mamurdi with a combination of nature, recreation, food, and countryside experiences, making it suitable for families and small groups."
        },
        {
            title: "Nature & Family Escape",
            description: "Take a refreshing break from city life by spending time around greenery and rural landscapes while enjoying farm experiences, outdoor recreation, and peaceful moments with loved ones."
        },
        {
            title: "Kids Recreation Experience",
            description: "Children can enjoy an engaging outing with swimming, outdoor games, farm activities, and other recreational experiences that provide entertainment while families relax in the countryside."
        },
        {
            title: "Friends Group Getaway",
            description: "Friends and groups can spend a memorable day together with outdoor activities, farm-based experiences, tasty food, open surroundings, and plenty of opportunities for casual relaxation."
        },
        {
            title: "Affordable Family Break",
            description: "Families looking for a value-oriented outing can enjoy nature, food, recreation, and farm experiences together, creating a rewarding day trip without unnecessary long-distance travel."
        },
        {
            title: "Rural Farm Experience",
            description: "Discover the charm of countryside living through agricultural surroundings, farm activities, rural experiences, and traditional food while enjoying a peaceful outing with family or friends."
        },
        {
            title: "Dehu Road-Talegaon Escape",
            description: "Visitors from Mamurdi, Dehu Road, and Talegaon can plan a convenient countryside day with family activities, farm experiences, open spaces, and recreational options in a relaxed setting."
        },
        {
            title: "Family Resort Outing",
            description: "Enjoy a family-oriented resort atmosphere with recreational facilities, open areas, food options, and activities that make the outing comfortable for children, parents, relatives, and larger groups."
        },
        {
            title: "Activity-Filled Picnic Day",
            description: "Create an engaging day with swimming, boating, indoor and outdoor games, tractor rides, horse riding, farm tours, and other recreational experiences surrounded by peaceful countryside."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Mamurdi",
            description: "Om Agro Tourism provides a peaceful countryside picnic environment near Mamurdi where families and groups can enjoy nature, farm experiences, recreational activities, homemade food, and quality time together."
        },
        {
            name: "One Day Picnic Spot Near Mamurdi",
            description: "Visitors can plan a complete one day outing from Mamurdi with countryside relaxation, family activities, farm experiences, food, and outdoor recreation in a comfortable rural environment."
        },
        {
            name: "Best Picnic Spot Near Mamurdi",
            description: "Families searching for an enjoyable picnic destination near Mamurdi can experience a balanced combination of natural surroundings, recreational activities, farm experiences, open spaces, and tasty homemade meals."
        },
        {
            name: "Family Picnic Spot Near Mamurdi",
            description: "The family-friendly setting is suitable for parents, children, relatives, and groups who want to enjoy swimming, games, farm experiences, nature, and relaxed outdoor time together."
        },
        {
            name: "Picnic Resort Near Mamurdi",
            description: "Visitors can enjoy a resort-style countryside picnic with recreational facilities, farm activities, open surroundings, food options, and comfortable spaces for relaxing away from the busy city environment."
        },
        {
            name: "One Day Picnic Resort Near Mamurdi",
            description: "Plan a full-day resort outing with family or friends and enjoy swimming, outdoor recreation, farm experiences, homemade food, and peaceful surroundings without needing to arrange an overnight stay."
        },
        {
            name: "Best Resort Near Mamurdi for Picnic",
            description: "For a memorable picnic near Mamurdi, Om Agro Tourism combines a natural rural atmosphere with family-friendly activities, farm experiences, food, and recreation suitable for different age groups."
        },
        {
            name: "Family Resort Near Mamurdi",
            description: "Families can spend a comfortable day in a countryside resort environment with options for relaxation and recreation, making the outing enjoyable for children, adults, and senior family members."
        },
        {
            name: "One Day Trip Near Mamurdi",
            description: "A practical choice for a short one day trip from Mamurdi, offering visitors nature, rural surroundings, farm experiences, food, recreation, and opportunities to spend meaningful time with companions."
        },
        {
            name: "Family One Day Trip Near Mamurdi",
            description: "Plan a family-focused day trip with outdoor games, swimming, farm exploration, traditional food, and countryside relaxation for a refreshing break from everyday routines."
        },
        {
            name: "Picnic Places Near Mamurdi",
            description: "Visitors comparing picnic places near Mamurdi can consider a countryside destination where natural surroundings, farm-based experiences, recreational activities, and family-friendly facilities come together."
        },
        {
            name: "Best Picnic Places Near Mamurdi",
            description: "Those searching for enjoyable picnic places near Mamurdi can experience a peaceful rural setting with engaging activities, open spaces, homemade meals, and opportunities for meaningful family or group recreation."
        },
        {
            name: "Affordable Picnic Spot Near Mamurdi",
            description: "An affordable picnic experience near Mamurdi can bring together nature, food, recreation, and family activities in one destination, helping visitors enjoy a memorable day without excessive travel."
        },
        {
            name: "Budget Picnic Resort Near Mamurdi",
            description: "Families and groups looking for a budget picnic resort can enjoy a countryside atmosphere with recreational activities, farm experiences, meals, and suitable spaces for a full-day outing."
        },
        {
            name: "Picnic Spot Near Mamurdi Pune",
            description: "Located within the wider Pune region, this countryside destination offers visitors from Mamurdi a convenient setting for family picnics, group outings, nature breaks, and activity-filled day trips."
        },
        {
            name: "Resort Near Mamurdi for Family Outing",
            description: "Families can enjoy a relaxed outing with open rural surroundings, recreational activities, farm experiences, swimming, games, and homemade food in a comfortable and refreshing atmosphere."
        },
        {
            name: "One Day Resort Near Mamurdi",
            description: "A one day resort experience near Mamurdi allows visitors to relax, explore farm surroundings, enjoy countryside activities, and spend an entire day away from their regular schedule."
        },
        {
            name: "Nature Picnic Spot Near Mamurdi",
            description: "Nature lovers can enjoy a refreshing picnic surrounded by greenery and rural landscapes, along with opportunities for farm exploration, outdoor recreation, traditional food, and peaceful family time."
        },
        {
            name: "Picnic Spot Near Dehu Road Mamurdi",
            description: "Visitors from Dehu Road and Mamurdi can enjoy a convenient countryside picnic featuring family activities, farm experiences, open surroundings, homemade food, and recreational opportunities."
        },
        {
            name: "Picnic Spot Near Talegaon Mamurdi",
            description: "Families and groups from Talegaon and Mamurdi can plan a refreshing outing with nature, rural experiences, outdoor games, swimming, farm activities, and comfortable spaces for relaxation."
        },
        {
            name: "Family Picnic Resort Near Mamurdi",
            description: "The family-oriented picnic environment combines countryside charm with recreational activities and food facilities, making it suitable for parents, children, relatives, and larger family gatherings."
        },
        {
            name: "Picnic Spot with Activities Near Mamurdi",
            description: "Visitors can enjoy an activity-filled picnic with options such as swimming, boating, indoor and outdoor games, tractor rides, horse riding, farm tours, and other experiences suitable for families and groups."
        }
    ],
    tableData: [
        ["Picnic Spot Near Mamurdi"],
        ["One Day Picnic Spot Near Mamurdi"],
        ["Best Picnic Spot Near Mamurdi"],
        ["Family Picnic Spot Near Mamurdi"],
        ["Picnic Resort Near Mamurdi"],
        ["One Day Picnic Resort Near Mamurdi"],
        ["Best Resort Near Mamurdi for Picnic"],
        ["Family Resort Near Mamurdi"],
        ["One Day Trip Near Mamurdi"],
        ["Family One Day Trip Near Mamurdi"],
        ["Picnic Places Near Mamurdi"],
        ["Best Picnic Places Near Mamurdi"],
        ["Affordable Picnic Spot Near Mamurdi"],
        ["Budget Picnic Resort Near Mamurdi"],
        ["Picnic Spot Near Mamurdi Pune"],
        ["Resort Near Mamurdi for Family Outing"],
        ["One Day Resort Near Mamurdi"],
        ["Nature Picnic Spot Near Mamurdi"],
        ["Picnic Spot Near Dehu Road Mamurdi"],
        ["Picnic Spot Near Talegaon Mamurdi"],
        ["Family Picnic Resort Near Mamurdi"],
        ["Picnic Spot with Activities Near Mamurdi"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Surroundings",
            WhyChoosedescription: "The rural setting provides a refreshing change from busy urban surroundings, giving families and groups a comfortable place to relax, enjoy nature, and spend uninterrupted quality time together."
        },
        {
            WhyChooseheading: "Comfortable for Families",
            WhyChoosedescription: "Parents, children, relatives, and senior family members can find suitable ways to enjoy the outing through games, swimming, farm experiences, open spaces, and relaxed recreational activities."
        },
        {
            WhyChooseheading: "Convenient Mamurdi Location",
            WhyChoosedescription: "Visitors from Mamurdi and nearby Dehu Road and Talegaon areas can plan a practical day outing without committing to a lengthy journey, making it suitable for family and group plans."
        },
        {
            WhyChooseheading: "Wide Range of Activities",
            WhyChoosedescription: "Swimming, boating, tractor rides, horse riding, indoor and outdoor games, and farm tours provide multiple ways to enjoy the day and create a more engaging picnic experience."
        },
        {
            WhyChooseheading: "Authentic Agritourism Experience",
            WhyChoosedescription: "Guests can experience rural surroundings and agricultural activities while learning about farm life and enjoying a slower, more natural environment away from the usual city routine."
        },
        {
            WhyChooseheading: "Homemade Food & Rural Flavours",
            WhyChoosedescription: "Tasty homemade food adds a traditional touch to the outing, allowing visitors to enjoy satisfying meals while experiencing the simple and welcoming atmosphere of a countryside destination."
        },
        {
            WhyChooseheading: "Good for Groups & Gatherings",
            WhyChoosedescription: "Families, friends, school groups, and other visitors can use the spacious surroundings for shared activities, informal gatherings, recreation, and memorable group experiences."
        },
        {
            WhyChooseheading: "A Refreshing Break from Routine",
            WhyChoosedescription: "Green surroundings, open spaces, farm-based experiences, and recreational activities make the destination suitable for anyone wanting to disconnect from daily schedules and enjoy a relaxed outdoor day."
        }
    ]
};





const faqData = [
    {
        question: "What makes Om Agri Tourism an interesting picnic option for people from Mamurdi?",
        answer: "The destination combines outdoor recreation with a farm-based atmosphere, giving visitors several ways to spend their day. Guests can enjoy swimming, boating and horse riding, along with tractor rides, bull cart rides, bird watching and homemade food."
    },
    {
        question: "How can families from Mamurdi organize a relaxed picnic at Om Agri Tourism?",
        answer: "A comfortable family itinerary can mix active experiences with plenty of breaks. Swimming or boating can be followed by a meal and countryside rides, while bird watching and time around the greenery allow elders and children to enjoy quieter parts of the outing."
    },
    {
        question: "Which experiences are available at a picnic spot near Mamurdi Pune?",
        answer: "Visitors can choose from water-based recreation, riding activities and rural experiences. Swimming, boating, horse riding, tractor rides and bull cart rides offer active options, while bird watching and homemade food provide a slower way to enjoy the farm setting."
    },
    {
        question: "Can friends from Mamurdi plan a group picnic at Om Agri Tourism?",
        answer: "Friends can turn the visit into a shared outdoor experience by selecting activities that encourage everyone to participate. Boating, swimming and riding experiences can be combined with food, photography and relaxed conversations throughout the day."
    },
    {
        question: "What can children enjoy during a picnic near Mamurdi?",
        answer: "Young visitors can explore suitable outdoor activities such as swimming, boating and selected riding experiences under proper adult supervision. Bird watching can also introduce children to the natural surroundings and make the picnic more engaging beyond recreational activities."
    },
    {
        question: "Is a farm picnic near Mamurdi suitable for senior family members?",
        answer: "Senior guests can enjoy the destination without needing to participate in every energetic activity. Homemade food, bird watching, open greenery and family time can form a comfortable part of their visit while younger members enjoy swimming, boating or farm rides."
    },
    {
        question: "Are traditional rural rides part of the picnic experience near Mamurdi?",
        answer: "Guests interested in countryside activities can include tractor rides and bull cart rides along with horse riding. These experiences add a traditional rural element to the outing and can be combined with swimming, boating and nature observation."
    },
    {
        question: "How should visitors from Mamurdi plan a one-day picnic itinerary?",
        answer: "Groups can avoid an overly packed schedule by selecting a few main activities and leaving time for meals and relaxation. Water activities can be followed by horse riding or farm rides, with the remaining time reserved for bird watching, photography and enjoying the surroundings."
    },
    {
        question: "Can office teams from Mamurdi use Om Agri Tourism for a team outing?",
        answer: "An outdoor visit can give colleagues an opportunity to interact in a setting away from their regular workplace. Shared activities such as boating, swimming and farm rides can be combined with meals and informal conversations to create a relaxed team outing."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Mamurdi?",
        answer: "Those looking for a break from the urban environment can experience recreation, countryside activities, nature and food at one destination. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching give families and groups several options for enjoying their picnic."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sameer Gaikwad",
        feedback:
            "Our Mamurdi group wanted something different from a regular city outing, and the farm setting worked very well. Boating and swimming kept the day lively, while the traditional rides and homemade food gave us a memorable countryside experience.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Sonali Babar",
        feedback:
            "The peaceful surroundings were one of the best parts of our family picnic. The children stayed busy with the outdoor activities, while the elders enjoyed bird watching, food and relaxing in the greenery. Everyone could follow their own pace during the visit.",
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
  "name": "Picnic Spot Near Mamurdi",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-mamurdi.webp",
  "description": "Planning a refreshing outing and searching for a picnic spot near Mamurdi? Om Agro Tourism offers a pleasant agro-tourism setting for families, friends, students and groups looking to enjoy a relaxed day away from the regular urban routine. A one day picnic near Mamurdi can be an easy way to spend quality time with loved ones while enjoying an open and peaceful atmosphere. Visitors searching for the best picnic spot near Mamurdi can plan a family gathering, friends' meetup or group outing, while families looking for a family picnic spot near Mamurdi can choose a comfortable setting for shared leisure and outdoor recreation. Those considering a picnic resort near Mamurdi or a one day picnic resort near Mamurdi can also plan a convenient day outing for their preferred group. Whether it is a weekend family picnic, school outing, friends' gathering or casual celebration, Om Agro Tourism provides a welcoming destination for an enjoyable picnic experience near Mamurdi.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-mamurdi"
  }
};








    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Mamurdi | Peaceful Day Escape, Family Recreation & Group Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a picnic spot near Mamurdi for families, friends and groups. Plan a one day picnic at Om Agro Tourism and enjoy a peaceful day escape with family recreation and outdoor leisure."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Mamurdi, One Day Picnic Spot Near Mamurdi, Best Picnic Spot Near Mamurdi, Family Picnic Spot Near Mamurdi, Picnic Resort Near Mamurdi, One Day Picnic Resort Near Mamurdi, Best Resort Near Mamurdi for Picnic, Family Resort Near Mamurdi, One Day Trip Near Mamurdi, Family One Day Trip Near Mamurdi, Picnic Places Near Mamurdi, Best Picnic Places Near Mamurdi, Family Outing Near Mamurdi, One Day Outing Near Mamurdi, Picnic Destination Near Mamurdi, Agro Tourism Near Mamurdi, Best Family Picnic Near Mamurdi"
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
                            <img src='/images/keyword/159.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearmamurdi;