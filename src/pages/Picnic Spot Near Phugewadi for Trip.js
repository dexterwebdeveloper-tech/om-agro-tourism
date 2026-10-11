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

function Picnicspotnearphugewadi() {

const cardData = {
    keyword: "Picnic Spot Near Phugewadi for Trip",
    headingDescription: "Planning a refreshing picnic trip near Phugewadi for family, friends, or a one-day escape? Om Agro Tourism offers a peaceful countryside setting where visitors can enjoy nature, open spaces, farm experiences, recreational activities, and homemade food away from the busy city environment. It is a convenient option for people from Phugewadi, Dapodi, and Kasarwadi looking for an enjoyable and affordable picnic trip near Pune.",
    topPlaces: [
        {
            title: "Family Trip Experience",
            description: "Families travelling from Phugewadi can enjoy a relaxed countryside trip with plenty of opportunities for recreation and quality time together. The natural surroundings, open spaces, farm experiences, and food make the outing suitable for parents, children, and relatives."
        },
        {
            title: "One Day Countryside Escape",
            description: "Visitors can plan a complete one-day escape from Phugewadi without needing an overnight itinerary. A combination of nature, outdoor recreation, farm experiences, and meals provides a refreshing break from the city's routine."
        },
        {
            title: "Nature-Focused Outing",
            description: "People looking for a peaceful nature trip can enjoy greenery, open rural surroundings, and fresh air away from crowded urban areas. The setting provides a calm environment for families and friends to relax while enjoying outdoor experiences."
        },
        {
            title: "Kids Adventure Day",
            description: "Families with children can create an engaging day with outdoor games, recreational activities, and farm-based experiences. The countryside setting gives younger visitors space to stay active while adults enjoy a relaxed picnic atmosphere."
        },
        {
            title: "Weekend Family Getaway",
            description: "A weekend outing from Phugewadi can be planned around relaxation, recreation, and shared family time. Visitors can enjoy the peaceful environment and select suitable activities while spending a comfortable day away from the city."
        },
        {
            title: "Rural Farm Journey",
            description: "Visitors interested in rural life can explore the agricultural surroundings and participate in farm tours or workshops. This adds an educational and interactive element to the picnic trip, especially for children and families."
        },
        {
            title: "Affordable Group Trip",
            description: "Friends and families looking for a budget-friendly trip can enjoy multiple experiences at one countryside destination. The combination of nature, recreation, food, and open spaces helps make the outing practical and enjoyable."
        },
        {
            title: "Dapodi-Kasarwadi Day Escape",
            description: "Visitors from Phugewadi, Dapodi, and Kasarwadi can plan a convenient countryside trip without travelling to a distant destination. The rural setting provides a refreshing change from the surrounding residential and commercial areas."
        },
        {
            title: "Family Resort Outing",
            description: "Families can enjoy a resort-style picnic day with a balance of relaxation and recreation. The natural environment, farm surroundings, outdoor activities, and food create a comfortable setting for spending quality time together."
        },
        {
            title: "Activity-Filled Trip",
            description: "Visitors searching for a picnic spot with activities can enjoy more than a simple outdoor meal. Depending on the plan, games, farm experiences, rides, water recreation, and other family-friendly options can be included in the day's itinerary."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Phugewadi for Trip",
            description: "Om Agro Tourism provides a peaceful countryside setting for visitors searching for a picnic spot near Phugewadi for trip plans. Families and groups can enjoy nature, open spaces, farm experiences, recreation, and homemade food during a refreshing outing."
        },
        {
            name: "One Day Picnic Spot Near Phugewadi",
            description: "A one-day picnic near Phugewadi can combine nature, outdoor recreation, farm experiences, and food in a single destination. It is suitable for visitors who want a complete day trip without arranging overnight accommodation."
        },
        {
            name: "Best Picnic Spot Near Phugewadi",
            description: "Visitors comparing the best picnic spot near Phugewadi can consider a destination that combines peaceful surroundings with a range of recreational experiences. Families and groups can enjoy greenery, farm activities, outdoor recreation, and meals during their visit."
        },
        {
            name: "Family Picnic Spot Near Phugewadi",
            description: "Families can enjoy a comfortable picnic surrounded by open countryside and natural surroundings. Parents, children, and relatives can participate in suitable recreational activities while enjoying farm experiences and homemade food together."
        },
        {
            name: "Picnic Resort Near Phugewadi",
            description: "For visitors searching for a picnic resort near Phugewadi, Om Agro Tourism offers a rural environment suitable for family and group outings. The destination combines nature, recreation, farm experiences, and food for a complete day experience."
        },
        {
            name: "One Day Picnic Resort Near Phugewadi",
            description: "A one-day picnic resort experience near Phugewadi provides an opportunity to enjoy several experiences within a single visit. Visitors can plan their day around nature, outdoor recreation, farm activities, meals, and relaxation."
        },
        {
            name: "Best Resort Near Phugewadi for Trip",
            description: "People looking for the best resort near Phugewadi for trip plans can choose a destination where nature and recreation are available together. The countryside environment provides a comfortable setting for family outings, group trips, and weekend plans."
        },
        {
            name: "Family Resort Near Phugewadi",
            description: "A family-friendly resort environment gives parents and children an opportunity to relax and enjoy recreational experiences together. Open surroundings, farm-based activities, and food help create a comfortable family outing."
        },
        {
            name: "One Day Trip Near Phugewadi",
            description: "A one-day trip near Phugewadi can include nature exploration, outdoor recreation, farm experiences, and homemade food. It is a practical choice for visitors who want a refreshing change of surroundings while returning home the same day."
        },
        {
            name: "Family One Day Trip Near Phugewadi",
            description: "Families can plan a convenient one-day trip from Phugewadi with experiences suitable for both children and adults. The combination of countryside surroundings, recreation, farm activities, and food allows families to enjoy a balanced outing."
        },
        {
            name: "Picnic Places Near Phugewadi",
            description: "People searching for picnic places near Phugewadi can consider a countryside destination with greenery, open areas, farm experiences, recreational opportunities, and food. It provides a pleasant alternative to crowded urban entertainment spaces."
        },
        {
            name: "Best Picnic Places Near Phugewadi",
            description: "A good picnic destination should offer enough variety for visitors to enjoy the entire day. Nature, recreation, farm experiences, open spaces, and homemade meals can give families and groups a more complete outing."
        },
        {
            name: "Affordable Picnic Spot Near Phugewadi",
            description: "An affordable picnic spot near Phugewadi can be useful for families and groups looking for a refreshing day without an expensive travel plan. Visitors can combine several countryside experiences within one convenient destination."
        },
        {
            name: "Budget Picnic Resort Near Phugewadi",
            description: "Visitors planning a budget picnic can enjoy nature, recreation, farm surroundings, and food at one destination. This makes it easier for families and groups to organise an enjoyable day while keeping the outing practical."
        },
        {
            name: "Picnic Spot Near Phugewadi Pune",
            description: "For visitors searching specifically for a picnic spot near Phugewadi Pune, Om Agro Tourism offers a peaceful rural escape suitable for family and group trips. The destination combines natural surroundings with recreational and farm-based experiences."
        },
        {
            name: "Resort Near Phugewadi for Family Outing",
            description: "Families planning an outing from Phugewadi can enjoy a rural setting with space for relaxation and recreation. The destination provides a combination of nature, family-friendly activities, farm experiences, and food for a comfortable day."
        },
        {
            name: "One Day Resort Near Phugewadi",
            description: "A one-day resort experience near Phugewadi allows visitors to enjoy countryside surroundings without requiring an overnight stay. Families and groups can spend their available day combining recreation, farm experiences, relaxation, and meals."
        },
        {
            name: "Nature Picnic Spot Near Phugewadi",
            description: "Nature lovers can enjoy a picnic in a peaceful rural environment surrounded by greenery and open landscapes. The setting offers a refreshing break from urban congestion and provides opportunities for outdoor recreation and relaxation."
        },
        {
            name: "Picnic Spot Near Dapodi Phugewadi",
            description: "Visitors from Dapodi and Phugewadi can plan a convenient countryside picnic featuring nature, open spaces, recreational activities, farm experiences, and homemade food. It is suitable for families and groups seeking a refreshing local getaway."
        },
        {
            name: "Picnic Spot Near Kasarwadi Phugewadi",
            description: "Those travelling from Kasarwadi and Phugewadi can enjoy a peaceful day outing in a rural environment. Families and friends can combine recreation, farm experiences, outdoor activities, and meals to create a comfortable picnic itinerary."
        },
        {
            name: "Family Picnic Resort Near Phugewadi",
            description: "Families searching for a picnic resort experience near Phugewadi can enjoy a combination of natural surroundings, recreation, farm-based activities, and food. The environment is suitable for parents, children, relatives, and small family groups."
        },
        {
            name: "Picnic Spot with Activities Near Phugewadi",
            description: "Visitors wanting an activity-filled picnic near Phugewadi can enjoy a variety of experiences instead of spending the day only relaxing. Depending on the outing plan, games, rides, water recreation, farm tours, and other family-friendly activities can be included."
        }
    ],
    tableData: [
        ["Picnic Spot Near Phugewadi for Trip"],
        ["One Day Picnic Spot Near Phugewadi"],
        ["Best Picnic Spot Near Phugewadi"],
        ["Family Picnic Spot Near Phugewadi"],
        ["Picnic Resort Near Phugewadi"],
        ["One Day Picnic Resort Near Phugewadi"],
        ["Best Resort Near Phugewadi for Trip"],
        ["Family Resort Near Phugewadi"],
        ["One Day Trip Near Phugewadi"],
        ["Family One Day Trip Near Phugewadi"],
        ["Picnic Places Near Phugewadi"],
        ["Best Picnic Places Near Phugewadi"],
        ["Affordable Picnic Spot Near Phugewadi"],
        ["Budget Picnic Resort Near Phugewadi"],
        ["Picnic Spot Near Phugewadi Pune"],
        ["Resort Near Phugewadi for Family Outing"],
        ["One Day Resort Near Phugewadi"],
        ["Nature Picnic Spot Near Phugewadi"],
        ["Picnic Spot Near Dapodi Phugewadi"],
        ["Picnic Spot Near Kasarwadi Phugewadi"],
        ["Family Picnic Resort Near Phugewadi"],
        ["Picnic Spot with Activities Near Phugewadi"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Escape",
            WhyChoosedescription: "The rural environment provides a refreshing break from the busy surroundings of Phugewadi and nearby city areas. Visitors can enjoy greenery, open spaces, fresh air, and a calmer atmosphere while spending time with family or friends."
        },
        {
            WhyChooseheading: "Ideal for Family Trips",
            WhyChoosedescription: "Parents, children, relatives, and different age groups can enjoy the outing together. The variety of experiences allows families to balance relaxation, recreation, food, and countryside exploration according to their preferences."
        },
        {
            WhyChooseheading: "Complete One-Day Itinerary",
            WhyChoosedescription: "Visitors can combine several experiences within one trip instead of moving between multiple locations. Nature, farm activities, outdoor recreation, games, and food can all contribute to a satisfying full-day outing."
        },
        {
            WhyChooseheading: "Convenient Nearby Getaway",
            WhyChoosedescription: "People from Phugewadi, Dapodi, and Kasarwadi can plan a countryside escape without turning it into a long-distance journey. This makes the destination useful for weekend plans, family outings, and spontaneous day trips."
        },
        {
            WhyChooseheading: "Interactive Farm Experiences",
            WhyChoosedescription: "Farm tours and workshops provide visitors with an opportunity to experience rural surroundings and learn about agricultural life. These activities can make the outing more interesting and educational for children and families."
        },
        {
            WhyChooseheading: "Recreation for All Ages",
            WhyChoosedescription: "The destination provides different ways for children, adults, and groups to stay engaged during the visit. Visitors can choose suitable recreational experiences while still having plenty of time for relaxation and family conversations."
        },
        {
            WhyChooseheading: "Fresh Homemade Food",
            WhyChoosedescription: "Homemade food adds a traditional and comforting element to the countryside trip. Guests can enjoy their meals in a peaceful setting while taking a break from the regular food and entertainment options of the city."
        },
        {
            WhyChooseheading: "Nature and Activities Together",
            WhyChoosedescription: "The experience combines peaceful natural surroundings with opportunities for recreation and farm-based activities. This balance makes it suitable for visitors who want both relaxation and entertainment during their picnic trip near Phugewadi."
        }
    ]
};







const faqData = [
    {
        question: "What makes Om Agri Tourism a suitable trip destination for people from Phugewadi?",
        answer: "Visitors can enjoy a refreshing change from the urban routine by combining outdoor recreation with farm-based experiences. The destination includes swimming, boating, horse riding, tractor rides, bull cart rides and bird watching, along with homemade food for a relaxed countryside outing."
    },
    {
        question: "How can a group from Phugewadi plan an enjoyable picnic trip?",
        answer: "A balanced itinerary can begin with an active experience such as swimming or boating and continue with horse riding or a traditional farm ride. Keeping time for meals, photography and relaxation can make the trip comfortable rather than overly packed."
    },
    {
        question: "Which activities can families enjoy during a trip near Phugewadi?",
        answer: "Families can choose from several experiences depending on age and interest. Swimming, boating and horse riding offer recreation, while tractor rides, bull cart rides and bird watching provide opportunities to explore a different side of countryside life."
    },
    {
        question: "Can friends from Phugewadi visit Om Agri Tourism for a one-day trip?",
        answer: "A friends' group can spend the day participating in shared activities and enjoying informal time together. Boating, swimming and farm rides can provide the active part of the trip, followed by homemade food and peaceful moments around the green surroundings."
    },
    {
        question: "Are there rural experiences available at this picnic spot near Phugewadi?",
        answer: "Guests interested in countryside activities can experience tractor rides, bull cart rides and horse riding within the farm setting. Bird watching and farm exploration can further add a rural character to the trip beyond conventional picnic entertainment."
    },
    {
        question: "Would Om Agri Tourism work for a family trip with children from Phugewadi?",
        answer: "Children can enjoy suitable outdoor activities such as swimming, boating and selected riding experiences with proper adult supervision. The farm environment and bird watching can also make the outing more engaging by giving younger visitors an opportunity to experience nature outside the city."
    },
    {
        question: "What can senior members enjoy during a trip from Phugewadi?",
        answer: "Not every guest needs to participate in the more energetic activities. Senior family members can spend time enjoying homemade food, bird watching, greenery and conversations, while other members take part in swimming, boating or countryside rides."
    },
    {
        question: "How can visitors make a one-day picnic trip near Phugewadi more memorable?",
        answer: "Adding a mixture of recreation, food and nature-based activities can create a more varied experience. Groups may schedule water activities earlier, enjoy a meal afterward and reserve time for horse riding, farm rides, photography or simply relaxing in the open surroundings."
    },
    {
        question: "Can corporate groups from Phugewadi use Om Agri Tourism for an outdoor trip?",
        answer: "Corporate teams can use the farm setting for an informal outing that encourages colleagues to interact outside the workplace. Group activities, outdoor recreation, meals and time in the countryside can be combined to create a relaxed team experience."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Phugewadi for a trip?",
        answer: "Those wanting a convenient escape from city surroundings can choose a destination that combines recreation, rural experiences, nature and food. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching offer multiple ways for families and groups to enjoy their trip."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Akshay More",
        feedback:
            "Taking a break from Phugewadi and spending the day in the countryside was a great experience for our group. Boating and swimming gave us plenty of entertainment, while the farm rides and homemade meal added something different to our usual picnic plans.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Priyanka Jagtap",
        feedback:
            "The trip worked well for our mixed-age family because everyone could choose activities according to their comfort. The children enjoyed the outdoor experiences, while the elders liked the bird watching, food and peaceful surroundings. It felt like a complete day away from the city.",
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
  "name": "Picnic Spot Near Phugewadi for Trip",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-phugewadi-for-trip.webp",
  "description": "Planning a refreshing trip and searching for a picnic spot near Phugewadi? Om Agro Tourism offers a pleasant agro-tourism destination for families, friends, students and groups looking to spend quality time away from the regular city routine. A one day picnic spot near Phugewadi can be a convenient choice for a short trip where visitors can relax in an open and peaceful environment while enjoying time with their loved ones. Those searching for the best picnic spot near Phugewadi can plan a family outing, friends' gathering or group day trip, while families looking for a family picnic spot near Phugewadi can choose a comfortable setting for shared leisure moments. Visitors considering a picnic resort near Phugewadi or a one day picnic resort near Phugewadi can also plan their outing around a relaxed day-trip experience. Whether it is a weekend plan, family trip, school picnic or casual gathering, Om Agro Tourism provides a welcoming destination for an enjoyable picnic experience near Phugewadi.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-phugewadi-for-trip"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Phugewadi for Trip | Family Day Trip, Leisure Activities & Outdoor Fun | +91 7066665554
  </title>

  <meta
    name="description"
    content="Plan a memorable picnic trip near Phugewadi with Om Agro Tourism. Enjoy a one day picnic, family outing or group trip in a peaceful agro-tourism setting away from the busy city."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Phugewadi for Trip, One Day Picnic Spot Near Phugewadi, Best Picnic Spot Near Phugewadi, Family Picnic Spot Near Phugewadi, Picnic Resort Near Phugewadi, One Day Picnic Resort Near Phugewadi, Best Resort Near Phugewadi for Picnic, Family Resort Near Phugewadi, One Day Trip Near Phugewadi, Family One Day Trip Near Phugewadi, Picnic Places Near Phugewadi, Best Picnic Places Near Phugewadi, Family Outing Near Phugewadi, One Day Outing Near Phugewadi, Picnic Destination Near Phugewadi, Agro Tourism Near Phugewadi, Picnic Trip Near Phugewadi"
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
                            <img src='/images/keyword/155.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearphugewadi;