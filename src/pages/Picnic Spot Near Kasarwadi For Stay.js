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

function Picnicspotnearkasarwadifor() {

const cardData = {
    keyword: "Picnic Spot Near Kasarwadi For Stay",
    headingDescription: "Looking for a picnic spot near Kasarwadi with stay for a family break, weekend escape, or relaxing outing? Om Agro Tourism offers a peaceful countryside environment where visitors can combine nature, recreation, farm experiences, homemade food, and a comfortable stay experience. It is suitable for families, friends, and groups from Kasarwadi, Dapodi, and Pimpri Chinchwad who want to spend quality time away from the busy city surroundings.",
    topPlaces: [
        {
            title: "Family Stay & Picnic",
            description: "Families from Kasarwadi can enjoy a countryside break that combines daytime recreation with a relaxing stay. The peaceful environment, greenery, farm surroundings, and family-friendly experiences make it suitable for parents, children, and relatives."
        },
        {
            title: "Weekend Nature Retreat",
            description: "Visitors planning a weekend escape can spend more time enjoying the natural surroundings instead of rushing through a single-day itinerary. The rural atmosphere provides a refreshing setting for relaxation, recreation, and quality time together."
        },
        {
            title: "Overnight Family Escape",
            description: "Families looking for an overnight break near Kasarwadi can enjoy a change of environment surrounded by open countryside. A stay combined with recreational experiences and homemade food can make the trip more comfortable and memorable."
        },
        {
            title: "One Day Picnic Experience",
            description: "Visitors who prefer a day outing can enjoy nature, recreation, farm experiences, and food without staying overnight. The destination provides enough variety for families and groups planning a complete one-day picnic."
        },
        {
            title: "Rural Farm Getaway",
            description: "A stay in the countryside gives visitors an opportunity to experience rural surroundings and agricultural life. Farm tours and workshops can add an educational and interactive element to a family weekend or group outing."
        },
        {
            title: "Budget Stay & Outing",
            description: "Families and groups searching for an affordable stay option can combine accommodation with a range of recreational experiences. The countryside setting allows visitors to enjoy a complete break without planning several separate activities."
        },
        {
            title: "Kids Family Retreat",
            description: "Families travelling with children can enjoy an outing that balances relaxation and engaging activities. Open surroundings, farm experiences, outdoor recreation, and family-friendly facilities help keep the day enjoyable for different age groups."
        },
        {
            title: "Pimpri Chinchwad Staycation",
            description: "Visitors from Kasarwadi and nearby Pimpri Chinchwad areas can plan a short staycation in a peaceful rural environment. The change from urban surroundings creates an opportunity to relax, explore nature, and spend uninterrupted time with family."
        },
        {
            title: "Friends Weekend Getaway",
            description: "Friends and small groups can plan a weekend getaway where they can enjoy shared meals, recreation, countryside surroundings, and a comfortable stay. The open environment provides space for socialising and enjoying a slower pace."
        },
        {
            title: "Activity-Filled Stay",
            description: "Visitors who want both accommodation and recreation can combine their stay with several engaging experiences. Depending on the plan, activities can include games, farm experiences, rides, water recreation, and nature-based exploration."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Kasarwadi for Stay",
            description: "Om Agro Tourism provides a peaceful countryside setting for visitors searching for a picnic spot near Kasarwadi for stay. Families and groups can combine accommodation, nature, recreation, farm experiences, and homemade food in one relaxing getaway."
        },
        {
            name: "Picnic Resort Near Kasarwadi with Stay",
            description: "Visitors looking for a picnic resort near Kasarwadi with stay can enjoy a countryside experience that extends beyond a single-day outing. The combination of accommodation, recreational opportunities, greenery, farm surroundings, and food makes it suitable for families and groups."
        },
        {
            name: "One Day Picnic Spot Near Kasarwadi",
            description: "A one-day picnic near Kasarwadi can be planned with nature, recreation, farm experiences, and homemade food. Visitors who do not require overnight accommodation can still enjoy a complete day outing in a peaceful rural environment."
        },
        {
            name: "Best Picnic Spot Near Kasarwadi",
            description: "Those comparing the best picnic spot near Kasarwadi can consider a destination that provides both relaxation and engaging experiences. The natural surroundings, farm activities, outdoor recreation, and food create a varied itinerary for families and groups."
        },
        {
            name: "Family Picnic Resort Near Kasarwadi",
            description: "Families can enjoy a comfortable resort-style outing with access to peaceful surroundings, recreational activities, farm experiences, and food. The environment is suitable for parents, children, relatives, and family groups planning a short break."
        },
        {
            name: "Resort Near Kasarwadi for Stay",
            description: "A resort near Kasarwadi for stay can provide a convenient change from the regular urban routine. Visitors can enjoy a rural atmosphere along with recreation, nature, farm experiences, and meals while spending additional time at the destination."
        },
        {
            name: "Picnic Spot Near Kasarwadi with Rooms",
            description: "Visitors searching for a picnic spot near Kasarwadi with rooms can plan a stay that combines relaxation and outdoor recreation. The countryside environment allows families and groups to enjoy their time at a slower and more comfortable pace."
        },
        {
            name: "Picnic Resort Near Kasarwadi with Accommodation",
            description: "A picnic resort near Kasarwadi with accommodation is suitable for visitors who want to extend their outing beyond one day. Guests can enjoy nature, farm surroundings, recreation, food, and a stay experience within the same destination."
        },
        {
            name: "Family Resort Near Kasarwadi",
            description: "Families looking for a peaceful resort near Kasarwadi can enjoy a rural setting with experiences suitable for different age groups. Recreation, nature, farm-based activities, food, and stay options can be combined for a convenient family break."
        },
        {
            name: "One Night Stay Near Kasarwadi",
            description: "An overnight stay near Kasarwadi offers families and groups more time to relax and explore the countryside. Visitors can enjoy recreational activities during the day and use the additional time for a comfortable and unhurried getaway."
        },
        {
            name: "Weekend Resort Near Kasarwadi",
            description: "A weekend resort experience near Kasarwadi can provide a refreshing break from the city's busy routine. Visitors can plan a relaxed schedule involving nature, recreation, farm experiences, meals, and overnight accommodation."
        },
        {
            name: "One Day Trip Near Kasarwadi",
            description: "For visitors who prefer not to stay overnight, a one-day trip near Kasarwadi can include nature, outdoor recreation, farm experiences, and homemade food. It provides a convenient option for a short family or group getaway."
        },
        {
            name: "Picnic Places Near Kasarwadi",
            description: "People searching for picnic places near Kasarwadi can consider a countryside destination where they can enjoy greenery, open surroundings, recreation, farm experiences, and food. The rural atmosphere provides a refreshing alternative to urban entertainment."
        },
        {
            name: "Best Picnic Places Near Kasarwadi",
            description: "A good picnic destination should offer enough variety to keep families and groups engaged throughout their visit. Nature, recreation, farm experiences, food, and optional stay facilities help create a more complete outing."
        },
        {
            name: "Affordable Resort Near Kasarwadi with Stay",
            description: "Visitors looking for an affordable resort near Kasarwadi with stay can combine accommodation with multiple experiences at one destination. This makes it easier for families and groups to enjoy a countryside break without arranging separate activities."
        },
        {
            name: "Budget Picnic Resort Near Kasarwadi",
            description: "A budget picnic resort near Kasarwadi can be useful for families and groups planning an economical getaway. Guests can enjoy nature, recreation, farm surroundings, food, and suitable stay arrangements according to their itinerary."
        },
        {
            name: "Nature Resort Near Kasarwadi",
            description: "Nature lovers can enjoy a peaceful resort experience surrounded by rural landscapes and greenery. The setting provides opportunities for outdoor recreation, farm exploration, relaxation, and spending quality time away from busy city surroundings."
        },
        {
            name: "Family Stay Near Kasarwadi Pune",
            description: "Families from Kasarwadi Pune can plan a convenient countryside stay where accommodation can be combined with recreation and farm-based experiences. The environment offers a refreshing break for parents, children, and relatives."
        },
        {
            name: "Picnic Resort Near Kasarwadi Pune",
            description: "Visitors searching for a picnic resort near Kasarwadi Pune can enjoy a rural destination suitable for day outings as well as longer stays. Nature, food, recreation, and farm experiences provide options for creating a flexible itinerary."
        },
        {
            name: "Resort Near Dapodi Kasarwadi",
            description: "People travelling from Dapodi and Kasarwadi can enjoy a peaceful countryside resort experience away from dense urban surroundings. Families and groups can combine relaxation, recreation, farm activities, and meals during their visit."
        },
        {
            name: "Picnic Spot Near Pimpri Chinchwad with Stay",
            description: "Visitors from Pimpri Chinchwad looking for a picnic spot with stay can enjoy a countryside getaway that combines daytime recreation with accommodation. The destination offers nature, farm experiences, outdoor activities, and food for a more complete break."
        },
        {
            name: "Picnic Resort with Activities Near Kasarwadi",
            description: "Visitors who want both accommodation and activities near Kasarwadi can enjoy a variety of experiences during their stay. Depending on the itinerary, guests can include games, farm tours, rides, water recreation, and other family-friendly activities."
        }
    ],
    tableData: [
        ["Picnic Spot Near Kasarwadi for Stay"],
        ["Picnic Resort Near Kasarwadi with Stay"],
        ["One Day Picnic Spot Near Kasarwadi"],
        ["Best Picnic Spot Near Kasarwadi"],
        ["Family Picnic Resort Near Kasarwadi"],
        ["Resort Near Kasarwadi for Stay"],
        ["Picnic Spot Near Kasarwadi with Rooms"],
        ["Picnic Resort Near Kasarwadi with Accommodation"],
        ["Family Resort Near Kasarwadi"],
        ["One Night Stay Near Kasarwadi"],
        ["Weekend Resort Near Kasarwadi"],
        ["One Day Trip Near Kasarwadi"],
        ["Picnic Places Near Kasarwadi"],
        ["Best Picnic Places Near Kasarwadi"],
        ["Affordable Resort Near Kasarwadi with Stay"],
        ["Budget Picnic Resort Near Kasarwadi"],
        ["Nature Resort Near Kasarwadi"],
        ["Family Stay Near Kasarwadi Pune"],
        ["Picnic Resort Near Kasarwadi Pune"],
        ["Resort Near Dapodi Kasarwadi"],
        ["Picnic Spot Near Pimpri Chinchwad with Stay"],
        ["Picnic Resort with Activities Near Kasarwadi"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Stay and Picnic in One Place",
            WhyChoosedescription: "Visitors can combine their picnic plans with a longer stay instead of arranging separate destinations for daytime activities and accommodation. This makes the outing convenient for families and groups planning an overnight or weekend break."
        },
        {
            WhyChooseheading: "Peaceful Countryside Surroundings",
            WhyChoosedescription: "The rural environment offers a refreshing change from the busy surroundings of Kasarwadi and Pimpri Chinchwad. Guests can enjoy greenery, open spaces, fresh air, and a quieter atmosphere during their stay."
        },
        {
            WhyChooseheading: "Suitable for Family Stays",
            WhyChoosedescription: "Parents, children, relatives, and different age groups can enjoy the destination together. The combination of accommodation, recreation, nature, and food makes it suitable for family holidays, weekend plans, and short breaks."
        },
        {
            WhyChooseheading: "Flexible Day or Overnight Plans",
            WhyChoosedescription: "Visitors can choose between a simple one-day picnic and an extended overnight experience according to their schedule. This flexibility makes the destination useful for both short outings and relaxed weekend getaways."
        },
        {
            WhyChooseheading: "Farm-Based Experiences",
            WhyChoosedescription: "Farm tours and workshops allow guests to experience rural surroundings and learn more about agricultural life. These activities can add an educational and interactive dimension to a family stay or group outing."
        },
        {
            WhyChooseheading: "Recreation for Different Interests",
            WhyChoosedescription: "The destination offers several ways to enjoy the day, allowing visitors to balance relaxation with outdoor recreation. Families and groups can choose experiences that suit their age groups, interests, and preferred pace."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Fresh homemade food adds a traditional touch to the countryside stay and picnic experience. Guests can enjoy meals in a peaceful environment while taking a break from the usual urban dining routine."
        },
        {
            WhyChooseheading: "Convenient Pimpri Chinchwad Getaway",
            WhyChoosedescription: "For visitors from Kasarwadi, Dapodi, and other parts of Pimpri Chinchwad, the destination provides an opportunity to plan a short countryside escape. Its combination of stay, nature, recreation, and food makes the getaway easier to organise."
        }
    ]
};







const faqData = [
    {
        question: "Can visitors from Kasarwadi plan a picnic with a stay at Om Agri Tourism?",
        answer: "Yes, visitors looking for more than a daytime outing can consider the destination for a countryside break with stay-related options. Guests can enjoy swimming, boating, horse riding and farm activities during the visit while also having time to relax in a natural setting."
    },
    {
        question: "What activities can guests enjoy during a stay near Kasarwadi?",
        answer: "A stay can be combined with several recreational experiences, including swimming, boating, horse riding, tractor rides and bull cart rides. Bird watching and homemade food provide additional ways to enjoy the slower pace of the farm environment."
    },
    {
        question: "Is Om Agri Tourism suitable for families looking for a picnic and stay near Kasarwadi?",
        answer: "Families can combine daytime recreation with a more relaxed countryside experience. Children can enjoy suitable outdoor activities, while parents and elders can spend time with food, nature observation and peaceful moments around the farm according to their preferred pace."
    },
    {
        question: "What should families from Kasarwadi consider when planning an overnight visit?",
        answer: "A comfortable plan can include the main outdoor activities during the day and leave sufficient time for meals and relaxation. Guests interested in staying should check the current accommodation availability, applicable timings and facilities in advance before finalizing their visit."
    },
    {
        question: "Which farm experiences are available for visitors staying near Kasarwadi?",
        answer: "Guests can add a rural touch to their visit through horse riding, tractor rides and bull cart rides. Swimming and boating provide recreational options, while bird watching and the surrounding greenery create quieter moments during the stay."
    },
    {
        question: "Can friends from Kasarwadi enjoy a picnic and stay together at Om Agri Tourism?",
        answer: "A group of friends can use the visit for both shared activities and downtime. Swimming, boating and countryside rides can form the active part of the itinerary, followed by homemade food, conversations and relaxed time in the farm surroundings."
    },
    {
        question: "Is a stay at a farm destination suitable for children and senior citizens?",
        answer: "A farm-based setting can work well for mixed-age groups when the itinerary is planned according to everyone's comfort. Younger guests can participate in suitable activities under supervision, while senior members can enjoy food, bird watching, greenery and quieter parts of the visit."
    },
    {
        question: "How can guests make the most of a one-day picnic with stay near Kasarwadi?",
        answer: "Starting with outdoor recreation allows visitors to make good use of the daytime, while keeping later hours for meals and relaxation creates a less rushed experience. Depending on the available stay arrangements, guests can also use the additional time to enjoy the farm atmosphere at a slower pace."
    },
    {
        question: "Does Om Agri Tourism offer a different experience from regular stays near Kasarwadi?",
        answer: "The countryside setting adds farm-oriented experiences that are not typically associated with a standard urban stay. Activities such as bull cart rides, tractor rides, horse riding and bird watching can be combined with swimming, boating and homemade food for a more experience-focused getaway."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Kasarwadi for stay?",
        answer: "Visitors who want to extend their outing beyond a few hours can explore a countryside destination where recreation, farm experiences, food and nature come together. Swimming, boating, horse riding and traditional rides offer daytime entertainment, while the peaceful surroundings can make the overall break feel more refreshing."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohan Chavan",
        feedback:
            "A short break from Kasarwadi turned into a refreshing countryside experience for our group. The daytime activities kept everyone occupied, especially boating and the farm rides, while the relaxed atmosphere and homemade food made the stay feel comfortable. Checking the stay arrangements beforehand was helpful for planning.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Pooja Kadam",
        feedback:
            "Spending extra time at a farm destination gave our family a different kind of getaway. The children enjoyed the outdoor activities, and the elders appreciated the greenery, bird watching and quiet surroundings. Having recreation and relaxation together made the visit more enjoyable than a quick picnic.",
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
  "name": "Picnic Spot Near Kasarwadi For Stay",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-kasarwadi-for-stay.webp",
  "description": "For visitors searching for a picnic spot near Kasarwadi for stay, Om Agro Tourism offers a welcoming agro-tourism setting suited to families, friends and groups planning a relaxing outing with more time to unwind. A picnic resort near Kasarwadi with stay can be a convenient choice for those who want to combine a refreshing picnic experience with a comfortable stay plan. Visitors looking for a one day picnic spot near Kasarwadi or the best picnic spot near Kasarwadi can also consider the destination for family gatherings, friends' outings and leisure breaks. Families searching for a family picnic destination near Kasarwadi can enjoy quality time together in a peaceful environment, while groups can plan their outing according to their preferred schedule. Whether you are planning a short picnic, an extended stay, a family getaway or a weekend leisure break, Om Agro Tourism provides a pleasant setting for an enjoyable agro-tourism experience near Kasarwadi.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-kasarwadi-for-stay"
  }
};





    return (
        <div>


<Helmet>
  <title>
    Picnic Spot Near Kasarwadi For Stay | Overnight Retreat, Family Leisure & Picnic Experience | +91 7066665554
  </title>

  <meta
    name="description"
    content="Looking for a picnic spot near Kasarwadi for stay? Om Agro Tourism offers a relaxing setting for picnics, family outings and stay plans, making it suitable for a refreshing leisure break."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Kasarwadi for Stay, Picnic Resort Near Kasarwadi with Stay, One Day Picnic Spot Near Kasarwadi, Best Picnic Spot Near Kasarwadi, Family Picnic Spot Near Kasarwadi, Picnic Resort Near Kasarwadi, One Day Picnic Resort Near Kasarwadi, Best Resort Near Kasarwadi for Picnic, Family Resort Near Kasarwadi, One Day Trip Near Kasarwadi, Family One Day Trip Near Kasarwadi, Picnic Places Near Kasarwadi, Best Picnic Places Near Kasarwadi, Stay Near Kasarwadi, Family Stay Near Kasarwadi, Picnic With Stay Near Kasarwadi, Weekend Stay Near Kasarwadi, Agro Tourism Near Kasarwadi"
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
                            <img src='/images/keyword/154.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearkasarwadifor;