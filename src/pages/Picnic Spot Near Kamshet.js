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

function Picnicspotnearkamshetu() {

const cardData = {
    keyword: "Picnic Spot Near Kamshet",
    headingDescription: "Looking for a refreshing picnic destination near Kamshet, Pune? Om Agro Tourism offers a peaceful countryside setting where families, friends, students, and groups can enjoy farm experiences, outdoor activities, homemade food, and relaxing leisure time. The destination combines natural surroundings with enjoyable recreational facilities, making it a convenient choice for a memorable day outing near Kamshet and nearby areas.",
    topPlaces: [
        {
            title: "Explore the Working Farm",
            description: "Experience the charm of countryside living through agricultural farm exploration at Om Agro Tourism. Visitors can spend time understanding farming activities, enjoying open surroundings, and discovering a peaceful rural environment away from busy city life."
        },
        {
            title: "Relax Around the Swimming Pool",
            description: "The swimming pool provides a refreshing way to unwind during a day outing. Families and groups can enjoy relaxed poolside moments while adding a fun and refreshing element to their visit to Om Agro Tourism."
        },
        {
            title: "Traditional Bull Cart Experience",
            description: "Take a memorable bull cart ride and experience a traditional mode of rural transportation. This activity offers children and adults an enjoyable glimpse into village life while creating a distinctive countryside experience."
        },
        {
            title: "Enjoy an Exciting Tractor Ride",
            description: "A tractor ride adds a fun agricultural touch to the day. Guests can enjoy the experience of travelling through the farm surroundings and make their visit more engaging with an activity connected to everyday rural life."
        },
        {
            title: "Horse Riding Adventure",
            description: "Horse riding gives visitors an opportunity to enjoy an outdoor activity in a natural farm setting. It can be an exciting addition to a family or group outing, especially for guests looking for something active and different."
        },
        {
            title: "Enjoy Traditional Homemade Food",
            description: "Savour tasty homemade food prepared in a countryside-inspired setting at Om Agro Tourism. Sharing a fresh and satisfying meal with family or friends makes the picnic experience more comfortable, enjoyable, and memorable."
        },
        {
            title: "Bird Watching and Nature Time",
            description: "Spend quiet moments observing birds and enjoying the surrounding natural environment. Bird watching offers a relaxing break from urban routines and gives visitors a chance to connect with the peaceful atmosphere of the farm."
        },
        {
            title: "Indoor and Outdoor Game Zone",
            description: "Guests can make their outing more entertaining with indoor and outdoor games suitable for different types of groups. These activities encourage friendly interaction and keep families, friends, and children engaged throughout the visit."
        },
        {
            title: "Experience Rural Life and Farming",
            description: "Discover the simplicity of rural culture through farming experiences and open countryside surroundings. The combination of agricultural activities and traditional experiences allows visitors to enjoy a meaningful break while learning more about village life."
        },
        {
            title: "Water and Outdoor Recreation",
            description: "Enjoy a variety of outdoor and water-based recreational activities during your visit. From refreshing water activities to open-air experiences, Om Agro Tourism provides opportunities to make a day near Kamshet active, relaxing, and enjoyable."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Kamshet",
            description: "Om Agro Tourism offers a peaceful countryside environment for visitors searching for a picnic spot near Kamshet, with farm experiences, outdoor recreation, homemade food, and relaxing natural surroundings."
        },
        {
            name: "One Day Picnic Spot Near Kamshet",
            description: "Plan a convenient one day outing near Kamshet with access to enjoyable farm activities, swimming, games, traditional rural experiences, and tasty homemade meals at Om Agro Tourism."
        },
        {
            name: "Best Picnic Spot Near Kamshet",
            description: "Families and groups looking for a memorable picnic destination near Kamshet can enjoy a combination of nature, farming experiences, recreational activities, and countryside hospitality at Om Agro Tourism."
        },
        {
            name: "Family Picnic Spot Near Kamshet",
            description: "Om Agro Tourism creates a family-friendly environment where children and adults can enjoy swimming, games, farm exploration, bull cart rides, tractor rides, and quality time together."
        },
        {
            name: "Picnic Resort Near Kamshet",
            description: "For visitors searching for a picnic resort near Kamshet, Om Agro Tourism brings together rural surroundings, recreational facilities, farm activities, homemade food, and opportunities to relax away from city congestion."
        },
        {
            name: "One Day Picnic Resort Near Kamshet",
            description: "A one day picnic experience at Om Agro Tourism can include refreshing water activities, farm exploration, outdoor games, traditional rides, and delicious homemade food for an enjoyable group outing."
        },
        {
            name: "Best Resort Near Kamshet for Picnic",
            description: "Om Agro Tourism provides an engaging countryside setting for a picnic day, combining agricultural experiences, recreational activities, food, and peaceful surroundings for families and groups."
        },
        {
            name: "Family Resort Near Kamshet",
            description: "Families can enjoy a relaxed rural atmosphere along with activities such as horse riding, swimming, games, farm visits, and traditional countryside experiences at Om Agro Tourism."
        },
        {
            name: "One Day Trip Near Kamshet",
            description: "Om Agro Tourism is suitable for a refreshing one day trip where visitors can step away from routine schedules and enjoy nature, farm activities, homemade food, and outdoor recreation."
        },
        {
            name: "Family One Day Trip Near Kamshet",
            description: "A family day trip can become more enjoyable with activities for different age groups, including farm exploration, swimming, games, bull cart rides, tractor rides, and relaxed dining."
        },
        {
            name: "Picnic Places Near Kamshet",
            description: "Visitors exploring picnic places near Kamshet can consider Om Agro Tourism for its combination of open farm surroundings, rural experiences, recreational activities, and family-friendly facilities."
        },
        {
            name: "Best Picnic Places Near Kamshet",
            description: "Om Agro Tourism provides a countryside setting where groups can enjoy nature, agricultural experiences, traditional activities, homemade food, and recreational options during their picnic."
        },
        {
            name: "Affordable Picnic Spot Near Kamshet",
            description: "Guests seeking an affordable picnic experience near Kamshet can enjoy several activities and countryside experiences at one destination, making it suitable for families, friends, and group outings."
        },
        {
            name: "Budget Picnic Resort Near Kamshet",
            description: "Om Agro Tourism offers a practical choice for visitors planning a budget-friendly countryside outing with access to farm experiences, games, water recreation, and homemade meals."
        },
        {
            name: "Picnic Spot Near Kamshet Pune",
            description: "Located in the Pune region, Om Agro Tourism provides a peaceful agricultural setting for visitors searching for a picnic destination near Kamshet with nature-based activities and rural experiences."
        },
        {
            name: "Resort Near Kamshet for Family Outing",
            description: "Families can spend quality time together through swimming, horse riding, farm exploration, games, traditional rides, bird watching, and homemade food in the relaxed setting of Om Agro Tourism."
        },
        {
            name: "One Day Resort Near Kamshet",
            description: "A one day visit to Om Agro Tourism can include multiple activities without requiring a long itinerary, allowing guests to combine relaxation, recreation, farm experiences, and countryside dining."
        },
        {
            name: "Nature Picnic Spot Near Kamshet",
            description: "Nature lovers can enjoy the agricultural landscape, bird watching, open spaces, and peaceful rural atmosphere at Om Agro Tourism while spending quality time away from the urban environment."
        },
        {
            name: "Picnic Spot Near Pawna Lake Kamshet",
            description: "Visitors exploring the Kamshet and Pawna Lake region can choose Om Agro Tourism for a different countryside experience featuring farm activities, traditional rural attractions, recreation, and homemade food."
        },
        {
            name: "Picnic Spot Near Lonavala Kamshet",
            description: "For those travelling around the Kamshet-Lonavala region, Om Agro Tourism offers an alternative countryside outing with agricultural experiences, outdoor activities, water recreation, games, and rural dining."
        },
        {
            name: "Family Picnic Resort Near Kamshet",
            description: "Om Agro Tourism brings together family-friendly recreation and peaceful farm surroundings, allowing visitors to enjoy activities such as swimming, horse riding, games, tractor rides, and traditional bull cart experiences."
        },
        {
            name: "Picnic Spot with Activities Near Kamshet",
            description: "Guests looking for a picnic destination with activities can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, games, farm exploration, bird watching, and other outdoor experiences at Om Agro Tourism."
        }
    ],
    tableData: [
        ["Picnic Spot Near Kamshet"],
        ["One Day Picnic Spot Near Kamshet"],
        ["Best Picnic Spot Near Kamshet"],
        ["Family Picnic Spot Near Kamshet"],
        ["Picnic Resort Near Kamshet"],
        ["One Day Picnic Resort Near Kamshet"],
        ["Best Resort Near Kamshet for Picnic"],
        ["Family Resort Near Kamshet"],
        ["One Day Trip Near Kamshet"],
        ["Family One Day Trip Near Kamshet"],
        ["Picnic Places Near Kamshet"],
        ["Best Picnic Places Near Kamshet"],
        ["Affordable Picnic Spot Near Kamshet"],
        ["Budget Picnic Resort Near Kamshet"],
        ["Picnic Spot Near Kamshet Pune"],
        ["Resort Near Kamshet for Family Outing"],
        ["One Day Resort Near Kamshet"],
        ["Nature Picnic Spot Near Kamshet"],
        ["Picnic Spot Near Pawna Lake Kamshet"],
        ["Picnic Spot Near Lonavala Kamshet"],
        ["Family Picnic Resort Near Kamshet"],
        ["Picnic Spot with Activities Near Kamshet"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Environment",
            WhyChoosedescription: "Om Agro Tourism provides a calm agricultural setting where visitors can take a break from crowded city surroundings and enjoy open spaces, greenery, and the natural character of rural Maharashtra."
        },
        {
            WhyChooseheading: "Activities for Different Age Groups",
            WhyChoosedescription: "Children, adults, families, and groups can find enjoyable ways to spend their time through swimming, games, horse riding, tractor rides, bull cart rides, and other recreational experiences."
        },
        {
            WhyChooseheading: "Authentic Farm Experiences",
            WhyChoosedescription: "The destination allows guests to experience agricultural surroundings and rural activities rather than spending the entire outing indoors, creating a more engaging countryside visit."
        },
        {
            WhyChooseheading: "Refreshing Water Recreation",
            WhyChoosedescription: "Swimming and other water-based activities add a refreshing element to the outing, giving families and groups an enjoyable way to relax and have fun during their visit."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Bull cart rides, tractor rides, farm activities, and rural surroundings provide visitors with opportunities to experience traditional countryside life while creating memorable moments with family and friends."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty homemade food complements the outdoor experience and gives guests the opportunity to enjoy satisfying countryside-style meals during their picnic or day outing."
        },
        {
            WhyChooseheading: "Suitable for Family and Group Outings",
            WhyChoosedescription: "The combination of nature, activities, food, and open spaces makes Om Agro Tourism suitable for family gatherings, friend groups, educational visits, and casual day trips."
        },
        {
            WhyChooseheading: "Nature and Rural Culture Together",
            WhyChoosedescription: "Visitors can combine nature exploration with rural culture, bird watching, farming experiences, and recreational activities, creating a well-rounded countryside experience near the Kamshet region."
        }
    ]
};


const faqData = [
    {
        question: "What kind of experience can travelers from Kamshet expect at Om Agri Tourism?",
        answer: "A visit to Om Agri Tourism brings together farm life, outdoor recreation and relaxed countryside time in one setting. Guests can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food during their picnic."
    },
    {
        question: "How can a Kamshet group spend a full day at Om Agri Tourism?",
        answer: "Groups can build their schedule around a mix of energetic and leisurely activities. Water-based recreation can be followed by horse riding or traditional bull cart and tractor rides, while meals, nature observation and conversations provide comfortable breaks throughout the day."
    },
    {
        question: "Which farm activities are available for visitors looking for a picnic near Kamshet?",
        answer: "The outing can include several experiences connected with rural surroundings, such as tractor rides, bull cart rides and horse riding. Visitors can also add swimming, boating and bird watching to create a varied day rather than spending the entire visit on a single activity."
    },
    {
        question: "Is Om Agri Tourism suitable for families planning a picnic from Kamshet?",
        answer: "Families can find options for different age groups, allowing children and adults to enjoy the day at their own pace. Swimming, boating and selected rides keep the outing active, while homemade food, bird watching and the open farm environment offer quieter moments."
    },
    {
        question: "What can children do during a picnic trip near Kamshet?",
        answer: "Young visitors can take part in enjoyable outdoor experiences such as swimming, boating and supervised horse riding or farm rides. Bird watching can add a simple nature-learning element, giving children an opportunity to experience activities beyond the usual urban picnic routine."
    },
    {
        question: "Can friends from Kamshet enjoy traditional village-style experiences at Om Agri Tourism?",
        answer: "Groups looking for something different can explore countryside activities including bull cart rides and tractor rides. These traditional experiences can be combined with horse riding, boating, swimming and a homemade meal for a more engaging day with friends."
    },
    {
        question: "How does bird watching add value to a picnic near Kamshet?",
        answer: "Bird watching creates a slower and more nature-focused part of the outing, especially for guests who prefer peaceful activities between recreational sessions. Observing birds around the farm can also make the picnic more interesting for families, children and photography enthusiasts."
    },
    {
        question: "What food option can guests enjoy during their picnic at Om Agri Tourism?",
        answer: "Homemade food adds a traditional touch to the countryside visit and gives guests a chance to take a relaxed meal break during the day. It can complement the outdoor activities while allowing families and groups to spend time together around a farm-style setting."
    },
    {
        question: "Would Om Agri Tourism work for a one-day outing from Kamshet?",
        answer: "A one-day visit can be planned without making the schedule overly complicated. Guests may select a few preferred activities such as swimming, boating and farm rides, then keep time for food, bird watching and relaxation so the day remains comfortable and enjoyable."
    },
    {
        question: "Why might travelers searching for a picnic spot near Kamshet consider Om Agri Tourism?",
        answer: "Those wanting a countryside alternative can combine recreation, rural activities, nature and food in one outing. The availability of swimming, boating, horse riding, tractor rides, bull cart rides and bird watching gives families, friends and groups several ways to enjoy their picnic."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Nikhil Jagtap",
        feedback:
            "Leaving behind the usual Kamshet outing ideas, our friends chose a farm-based picnic and enjoyed having so many activities together. The tractor ride and bull cart experience were especially fun, while boating and swimming kept everyone involved. It felt like a refreshing group day.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Rutuja Deshmukh",
        feedback:
            "The combination of recreation and rural surroundings worked beautifully for our family. The children enjoyed the outdoor activities, and the grandparents preferred bird watching and relaxing before the homemade meal. Everyone found something enjoyable without the day feeling rushed.",
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
  "name": "Picnic Spot Near Kamshet",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-kamshet.webp",
  "description": "Planning a refreshing family outing or group day trip? Om Agro Tourism is a welcoming choice for visitors searching for a picnic spot near Kamshet where families, friends, students and groups can enjoy quality time in a relaxed agro-tourism environment. A one day picnic near Kamshet can be a convenient option for those looking to take a short break from their regular routine and spend the day with loved ones. Visitors searching for the best picnic spot near Kamshet can plan a memorable outdoor outing, while families looking for a family picnic spot near Kamshet can enjoy a comfortable setting for recreation and shared moments. A picnic resort near Kamshet or one day picnic resort near Kamshet can suit family gatherings, friends' get-togethers, school outings and group recreation. Those comparing a family resort near Kamshet can also consider an agro-tourism destination for a peaceful day away. Om Agro Tourism brings together a pleasant outdoor atmosphere and family-friendly leisure, making it a suitable destination for picnics, one day trips and group outings around Kamshet.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-kamshet"
  }
};





    return (
        <div>


<Helmet>
  <title>
    Picnic Spot Near Kamshet | Scenic Day Escape, Family Fun & Group Recreation | +91 7066665554
  </title>

  <meta
    name="description"
    content="Find a picnic spot near Kamshet for families, friends and groups. Plan a one day picnic at Om Agro Tourism for outdoor leisure, family recreation and a refreshing day escape."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Kamshet, One Day Picnic Spot Near Kamshet, Best Picnic Spot Near Kamshet, Family Picnic Spot Near Kamshet, Picnic Resort Near Kamshet, One Day Picnic Resort Near Kamshet, Best Resort Near Kamshet for Picnic, Family Resort Near Kamshet, One Day Trip Near Kamshet, Family One Day Trip Near Kamshet, Picnic Places Near Kamshet, Best Picnic Places Near Kamshet, Family Outing Near Kamshet, One Day Outing Near Kamshet, Picnic Destination Near Kamshet, Agro Tourism Near Kamshet, Best Family Picnic Near Kamshet, Weekend Picnic Near Kamshet"
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
                            <img src='/images/keyword/167.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearkamshetu;