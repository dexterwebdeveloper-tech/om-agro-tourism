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

function PanshetPicnicSpot() {

const cardData = {
    keyword: "Panshet Picnic Spot",
    headingDescription: "Om Agro Tourism offers a refreshing countryside experience for visitors searching for a Panshet Picnic Spot. Families, friends, and groups can enjoy a peaceful day surrounded by nature, farm experiences, traditional rural activities, homemade food, and recreational attractions. It is a suitable option for visitors planning a one-day picnic or family outing while looking for a relaxed destination around the Panshet and Pune region.",

    topPlaces: [
        {
            title: "Water Park Activities",
            description: "Water park activities provide a refreshing recreational experience for visitors looking to add water-based fun to their Panshet picnic and family outing."
        },
        {
            title: "Bird Watching",
            description: "Bird watching creates a peaceful nature experience for visitors who enjoy observing birds and spending quiet time surrounded by open countryside."
        },
        {
            title: "Boating",
            description: "Boating adds a relaxing water-based activity to the outing, giving families and groups an enjoyable way to experience leisure during their picnic."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm tours and workshops allow visitors to explore agricultural surroundings and learn more about rural activities while enjoying a meaningful countryside experience."
        },
        {
            title: "Horse Riding",
            description: "Horse riding brings an exciting outdoor element to the picnic and gives families and groups another enjoyable activity to experience during their visit."
        },
        {
            title: "Tasty Homemade Food",
            description: "Traditional homemade food provides a satisfying culinary experience and complements the relaxed atmosphere of a countryside family picnic."
        },
        {
            title: "Bull Cart Ride",
            description: "A traditional bull cart ride gives visitors an opportunity to experience rural culture while adding a distinctive and memorable activity to their outing."
        },
        {
            title: "Swimming Pool",
            description: "The swimming pool offers a refreshing leisure option for guests who want to relax and enjoy water-based recreation during their family picnic."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and outdoor games provide active entertainment for families, friends, and groups looking to make their one-day outing more engaging."
        },
        {
            title: "Tractor Ride",
            description: "A tractor ride provides a unique farm experience and lets visitors enjoy an activity connected with the agricultural surroundings of the destination."
        }
    ],

    services: [
        {
            name: "Panshet Picnic Spot",
            description: "Om Agro Tourism provides a peaceful farm-based setting for visitors searching for a Panshet picnic spot, with nature experiences, rural activities, homemade food, and recreational attractions."
        },
        {
            name: "One Day Picnic Spot in Panshet",
            description: "Visitors can enjoy a complete one-day outing with farm experiences, traditional activities, games, food, nature exploration, and leisure attractions at one destination."
        },
        {
            name: "Best Picnic Spot in Panshet",
            description: "For visitors comparing picnic destinations, Om Agro Tourism offers a varied countryside experience combining natural surroundings, family activities, rural attractions, and traditional food."
        },
        {
            name: "Family Picnic Spot in Panshet",
            description: "Families can spend quality time together through activities suitable for different age groups, along with farm experiences, open surroundings, food, and nature-based recreation."
        },
        {
            name: "Panshet Picnic Resort",
            description: "The destination offers a relaxing picnic environment where visitors can combine countryside scenery with recreational activities, traditional experiences, homemade meals, and nature."
        },
        {
            name: "One Day Picnic Resort in Panshet",
            description: "A one-day visit can include farm tours, rides, games, water activities, food, and nature experiences, creating a convenient outing for families and groups."
        },
        {
            name: "Best Resort in Panshet for Picnic",
            description: "Visitors looking for a countryside resort-style picnic can enjoy open surroundings, rural activities, family recreation, traditional experiences, and homemade food."
        },
        {
            name: "Family Resort in Panshet",
            description: "Om Agro Tourism gives families multiple ways to enjoy their outing, including farm tours, traditional rides, nature activities, games, and relaxing leisure experiences."
        },
        {
            name: "One Day Trip to Panshet",
            description: "A visit to Om Agro Tourism can make a refreshing one-day trip where guests enjoy countryside landscapes, recreational activities, food, farm experiences, and rural attractions."
        },
        {
            name: "Family One Day Trip to Panshet",
            description: "Families can plan an enjoyable day trip featuring age-friendly activities, open spaces, traditional experiences, farm attractions, and opportunities to relax together."
        },
        {
            name: "Picnic Places in Panshet",
            description: "Visitors searching for picnic places in Panshet can enjoy an agricultural setting with a mix of nature, recreation, traditional activities, food, and peaceful surroundings."
        },
        {
            name: "Best Picnic Places in Panshet",
            description: "Om Agro Tourism offers a diverse countryside outing where visitors can enjoy farm experiences, outdoor activities, homemade food, nature exploration, and shared family time."
        },
        {
            name: "Affordable Picnic Spot in Panshet",
            description: "Visitors looking for an affordable picnic experience can enjoy several attractions at one destination, making the outing practical for families, friends, and groups."
        },
        {
            name: "Budget Picnic Resort in Panshet",
            description: "The destination is suitable for visitors seeking a budget-friendly countryside outing with recreational activities, farm experiences, food, and natural surroundings."
        },
        {
            name: "Panshet Dam Picnic Spot",
            description: "Visitors planning a picnic around Panshet Dam can enjoy a refreshing farm-based experience featuring nature, traditional activities, food, and family-friendly recreation."
        },
        {
            name: "Panshet Lake Picnic Spot",
            description: "Those interested in a lake-oriented outing can enjoy a countryside picnic atmosphere with nature experiences, farm activities, recreational attractions, and homemade food."
        },
        {
            name: "Resort Near Panshet Dam",
            description: "Om Agro Tourism provides a peaceful countryside option for visitors planning a family or group outing around the Panshet Dam region, with activities and rural experiences."
        },
        {
            name: "Family Outing Near Panshet",
            description: "Families can enjoy a varied day outing with farm tours, traditional rides, games, nature experiences, food, and open surroundings designed for quality time together."
        },
        {
            name: "Nature Picnic Spot in Panshet",
            description: "Bird watching, farm landscapes, open spaces, and peaceful rural surroundings make Om Agro Tourism suitable for visitors seeking a nature-focused picnic experience."
        },
        {
            name: "Panshet Water Activities",
            description: "Visitors can add refreshing water-based recreation to their outing through activities designed to make a family picnic or group visit more enjoyable."
        },
        {
            name: "Picnic Spot Near Pune Panshet",
            description: "Visitors from Pune planning an outing toward Panshet can enjoy a countryside picnic featuring farm experiences, nature, traditional activities, food, and recreation."
        },
        {
            name: "Picnic Resort with Activities in Panshet",
            description: "Om Agro Tourism combines farm tours, rides, games, water activities, nature experiences, and food, giving families and groups several options during their picnic."
        }
    ],

    tableData: [
        ["Panshet Picnic Spot"],
        ["One Day Picnic Spot in Panshet"],
        ["Best Picnic Spot in Panshet"],
        ["Family Picnic Spot in Panshet"],
        ["Panshet Picnic Resort"],
        ["One Day Picnic Resort in Panshet"],
        ["Best Resort in Panshet for Picnic"],
        ["Family Resort in Panshet"],
        ["One Day Trip to Panshet"],
        ["Family One Day Trip to Panshet"],
        ["Picnic Places in Panshet"],
        ["Best Picnic Places in Panshet"],
        ["Affordable Picnic Spot in Panshet"],
        ["Budget Picnic Resort in Panshet"],
        ["Panshet Dam Picnic Spot"],
        ["Panshet Lake Picnic Spot"],
        ["Resort Near Panshet Dam"],
        ["Family Outing Near Panshet"],
        ["Nature Picnic Spot in Panshet"],
        ["Panshet Water Activities"],
        ["Picnic Spot Near Pune Panshet"],
        ["Picnic Resort with Activities in Panshet"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Setting",
            WhyChoosedescription: "Om Agro Tourism offers a refreshing rural environment where visitors can step away from busy routines and enjoy open surroundings, fresh air, and relaxing farm landscapes."
        },
        {
            WhyChooseheading: "Nature and Farm Experiences",
            WhyChoosedescription: "Farm tours, workshops, bird watching, and agricultural surroundings give visitors meaningful ways to connect with nature and understand rural activities."
        },
        {
            WhyChooseheading: "Water-Based Recreation",
            WhyChoosedescription: "Water park activities, swimming, and other refreshing attractions provide additional entertainment for visitors who want more than a traditional picnic experience."
        },
        {
            WhyChooseheading: "Traditional Rural Activities",
            WhyChoosedescription: "Bull cart rides and tractor rides add a traditional countryside element, allowing families and groups to experience activities connected with rural life."
        },
        {
            WhyChooseheading: "Family-Friendly Attractions",
            WhyChoosedescription: "A variety of activities makes the destination suitable for children, adults, and senior family members, allowing everyone to find something enjoyable during the outing."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty homemade food brings traditional flavours to the picnic and complements the relaxed farm atmosphere, making the overall outing more satisfying."
        },
        {
            WhyChooseheading: "Ideal for Group Outings",
            WhyChoosedescription: "Families, friends, and organized groups can enjoy shared activities, games, food, and countryside experiences, making the destination suitable for different types of gatherings."
        },
        {
            WhyChooseheading: "Complete One Day Picnic",
            WhyChoosedescription: "The combination of recreation, nature, food, farm activities, and traditional experiences allows visitors to plan a complete one-day outing without needing to visit multiple destinations."
        }
    ]
};






const faqData = [
    {
        question: "Is Om Agri Tourism a good option for a Panshet picnic?",
        answer: "Visitors planning a Panshet picnic can choose Om Agri Tourism for a countryside experience that combines outdoor recreation, farm activities and a peaceful natural setting. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide different ways to enjoy a full day away from the usual city routine."
    },
    {
        question: "What activities can be enjoyed at Om Agri Tourism during a Panshet picnic?",
        answer: "There is plenty to include in a day itinerary, from swimming and boating to horse riding and traditional farm rides. Tractor rides and bull cart rides add a rural touch, while bird watching gives nature lovers an opportunity to spend quieter moments around the green surroundings."
    },
    {
        question: "Can families visit Om Agri Tourism while planning a picnic near Panshet?",
        answer: "Families can enjoy a relaxed outing by mixing recreational activities with time spent around the farm. Children can participate in suitable activities under adult supervision, while parents can enjoy the greenery, homemade food and peaceful atmosphere between swimming, boating and countryside rides."
    },
    {
        question: "How can friends make their Panshet picnic more enjoyable at Om Agri Tourism?",
        answer: "A friends' group can build an active day around swimming, boating and horse riding before exploring the traditional tractor and bull cart rides. Photography, food, bird watching and relaxed conversations can be added to the schedule, creating a balanced outing with both fun and downtime."
    },
    {
        question: "Does Om Agri Tourism provide a countryside experience for Panshet visitors?",
        answer: "The farm environment gives visitors a chance to experience rural surroundings beyond the usual sightseeing activities associated with Panshet. Horse riding, tractor rides, bull cart rides, bird watching and homemade food bring together several elements of traditional countryside recreation."
    },
    {
        question: "What can children do at Om Agri Tourism during a Panshet day picnic?",
        answer: "Children can explore age-appropriate experiences such as swimming, boating and farm rides while enjoying the open surroundings. Bird watching can also make the outing educational and engaging for young visitors, with parents or guardians providing proper supervision during activities."
    },
    {
        question: "Is homemade food available as part of a picnic experience at Om Agri Tourism?",
        answer: "Food can be an enjoyable part of the farm outing, especially after spending time on outdoor activities. Visitors can take a relaxed meal break and experience homemade food in a countryside atmosphere before continuing with swimming, boating, rides or nature-based activities."
    },
    {
        question: "Can groups plan a full-day outing at Om Agri Tourism near Panshet?",
        answer: "Groups can create a flexible schedule that starts with active recreation and gradually moves into relaxed farm experiences. Swimming, boating and horse riding can be combined with tractor and bull cart rides, while meals, photography and bird watching can be spaced throughout the day."
    },
    {
        question: "Why choose an agro tourism destination for a picnic near Panshet?",
        answer: "An agro tourism outing offers more than a short stop at a scenic location by bringing together recreation and rural experiences. Guests can enjoy outdoor activities, traditional rides, farm surroundings and homemade food while taking a refreshing break from crowded urban spaces."
    },
    {
        question: "Why consider Om Agri Tourism for a Panshet picnic with family and friends?",
        answer: "Om Agri Tourism offers a varied countryside outing where families and friends can choose from swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. The combination of farm experiences, homemade food and a calm green environment makes it a suitable choice for a memorable day picnic."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Aditya Deshmukh",
        feedback:
            "Our family planned a Panshet outing and included Om Agri Tourism in our day trip. The children enjoyed swimming and boating, while the tractor and bull cart rides gave everyone a fun rural experience. We also liked the peaceful surroundings and homemade food, which made the visit feel different from a regular picnic.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Neha Joshi",
        feedback:
            "A group of friends visited Om Agri Tourism for a countryside picnic and had a great time throughout the day. Horse riding and boating were our favorite activities, and the traditional farm rides added plenty of memorable moments. Bird watching and the green surroundings gave us a nice opportunity to relax between activities.",
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
  "name": "Panshet Picnic Spot",
  "image": "https://www.omagrotourism.com/assets/images/panshet-picnic-spot.webp",
  "description": "Panshet Picnic Spot is an appealing choice for families, friends, couples, school groups, and corporate teams looking for a refreshing outdoor escape surrounded by the natural charm of the Panshet region. Om Agro Tourism offers an agro-tourism-oriented environment where visitors can enjoy quality time together through outdoor recreation, open countryside surroundings, picnic activities, and relaxed group experiences. A One Day Picnic Spot in Panshet can be suitable for families with children, friends planning a short getaway, and visitors who want to spend a day away from the busy city routine. People searching for the Best Picnic Spot in Panshet can consider a destination where nature, leisure, and group recreation come together in a peaceful atmosphere. The Family Picnic Spot in Panshet is suitable for family gatherings, weekend outings, birthdays, seasonal visits, and casual get-togethers. Visitors looking for a Panshet Picnic Resort or One Day Picnic Resort in Panshet can enjoy the appeal of a comfortable outdoor destination combined with an agro-tourism atmosphere and countryside surroundings. Those searching for the Best Resort in Panshet for Picnic or a Family Resort in Panshet can plan an enjoyable day with children, relatives, friends, and other groups. A One Day Trip to Panshet can also be planned by visitors from Pune, Sinhagad Road, Katraj, Dhayari, Narhe, Warje, Kothrud, Bavdhan, Mulshi, and surrounding areas. The natural landscape around Panshet makes the region suitable for people who enjoy open spaces, outdoor recreation, peaceful surroundings, and memorable group experiences. A Family One Day Trip can be a convenient way to spend meaningful time together without requiring an extended holiday. Om Agro Tourism provides a welcoming setting for families, friends, schools, corporate teams, and couples looking to enjoy a relaxed picnic experience and create memorable moments in a countryside environment near Panshet.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/panshet-picnic-spot"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Panshet Picnic Spot | Best One Day Picnic Resort & Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Explore Panshet Picnic Spot for families, friends, couples, school groups and corporate outings with outdoor recreation, countryside surroundings and an agro-tourism atmosphere."
  />

  <meta
    name="keywords"
    content="Panshet Picnic Spot, One Day Picnic Spot in Panshet, Best Picnic Spot in Panshet, Family Picnic Spot in Panshet, Panshet Picnic Resort, One Day Picnic Resort in Panshet, Best Resort in Panshet for Picnic, Family Resort in Panshet, One Day Trip to Panshet, Family One Day Trip to Panshet, Picnic Places in Panshet, Best Picnic Places in Panshet, One Day Picnic in Panshet, Family Picnic in Panshet, One Day Outing in Panshet, Picnic Resort in Panshet, Family Outing in Panshet, Weekend Picnic in Panshet, School Picnic in Panshet, Corporate Outing in Panshet, Panshet One Day Picnic Resort, Best Picnic Resort in Panshet, Resorts in Panshet for Family, One Day Trip Near Panshet, Picnic Spot Near Panshet, Family Picnic Near Panshet, Agro Tourism Near Panshet, Agro Tourism Near Pune, One Day Picnic Near Pune, Family Picnic Near Pune, Picnic Resorts Near Pune"
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
                            <img src='/images/keyword/109.jpg' alt='img' className='img-fluid' />
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

export default PanshetPicnicSpot;