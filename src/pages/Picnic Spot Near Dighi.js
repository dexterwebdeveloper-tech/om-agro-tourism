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

function Picnicspotneardighi() {

const cardData = {
    keyword: "Picnic Spot Near Dighi",
    headingDescription: "Om Agro Tourism is a refreshing countryside destination for visitors searching for a picnic spot near Dighi, offering a peaceful setting with nature, rural experiences, recreational activities, and tasty homemade food. Families, friends, and groups from Dighi, Alandi, Bhosari, and nearby Pimpri Chinchwad areas can plan a convenient one-day outing away from the city's busy routine. The destination offers a varied mix of attractions suitable for family picnics, nature outings, group gatherings, and activity-filled day trips.",
    topPlaces: [
        {
            title: "Bird Watching",
            description: "Bird Watching offers a peaceful nature-focused experience for visitors searching for a nature picnic spot near Dighi. The countryside environment gives families and groups an opportunity to observe birds and enjoy a quieter outdoor activity away from the city's busy surroundings."
        },
        {
            title: "Boating",
            description: "Boating provides a relaxing shared activity for families and friends planning a one-day outing near Dighi. Visitors can enjoy time together on the water while adding a refreshing outdoor experience to their picnic schedule."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops introduce visitors to agricultural surroundings and rural activities in an interactive way. Families and groups from Dighi and nearby areas can include this experience when looking for an educational and enjoyable countryside picnic."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding adds an active countryside experience for visitors who want more variety during their picnic. Families, children, and friends can enjoy this attraction as part of an engaging one-day trip near Dighi."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food gives visitors an opportunity to enjoy comforting meals during their day out. Families and groups can take a relaxed food break while experiencing the traditional and welcoming atmosphere of the countryside."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride provides an authentic rural experience that gives families and children a glimpse of traditional countryside life. It adds a distinctive element to the outing for visitors looking for something different from regular city recreation."
        },
        {
            title: "Jungle Safari",
            description: "Jungle Safari brings an adventurous touch to a family picnic near Dighi. Visitors can include this outdoor experience in their itinerary when they want to combine relaxation with exploration and create a more exciting day trip."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities provide energetic recreation for families and groups looking for a picnic spot with activities near Dighi. Visitors can add water-based fun to their itinerary along with nature, food, and countryside attractions."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride gives visitors an authentic farm-style experience and is especially enjoyable for children and families. The activity complements the rural surroundings and adds a memorable countryside element to a one-day picnic."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide flexible entertainment for children, adults, families, and groups. Visitors can enjoy shared activities throughout the day, making the destination suitable for both relaxed picnics and more active outings."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Dighi",
            description: "Om Agro Tourism offers a peaceful countryside environment for visitors searching for a picnic spot near Dighi. Families, friends, and groups can enjoy nature, food, traditional activities, games, and outdoor recreation during a refreshing day away from the city."
        },
        {
            name: "One Day Picnic Spot Near Dighi",
            description: "A one day picnic spot near Dighi should provide enough variety to make the entire outing enjoyable. Om Agro Tourism combines nature, rural experiences, recreation, food, and activities so visitors can plan a complete day at one destination."
        },
        {
            name: "Best Picnic Spot Near Dighi",
            description: "Visitors looking for the best picnic spot near Dighi can consider Om Agro Tourism for its combination of open countryside surroundings, recreational attractions, rural experiences, and food. The destination is suitable for both relaxed family outings and activity-filled group plans."
        },
        {
            name: "Family Picnic Spot Near Dighi",
            description: "Om Agro Tourism is suitable as a family picnic spot near Dighi because it offers different experiences for children and adults. Families can spend quality time together through games, nature activities, rural attractions, food, and outdoor recreation."
        },
        {
            name: "Picnic Resort Near Dighi",
            description: "For visitors searching for a picnic resort near Dighi, Om Agro Tourism provides a peaceful rural atmosphere along with several recreational options. Families and groups can combine meals, relaxation, nature, and activities during their day outing."
        },
        {
            name: "One Day Picnic Resort Near Dighi",
            description: "A one day picnic resort near Dighi offers a practical option for visitors who want a full outing without planning an overnight stay. Om Agro Tourism brings together countryside experiences, recreational activities, food, and nature within one destination."
        },
        {
            name: "Best Resort Near Dighi for Picnic",
            description: "Those searching for the best resort near Dighi for picnic activities can choose Om Agro Tourism for its varied countryside attractions. Visitors can create a relaxed family itinerary or include multiple activities for a more energetic group experience."
        },
        {
            name: "Family Resort Near Dighi",
            description: "Om Agro Tourism provides a family resort experience near Dighi where children, parents, and relatives can enjoy different attractions together. Its open surroundings, food, games, and rural activities provide a comfortable setting for family time."
        },
        {
            name: "One Day Trip Near Dighi",
            description: "Planning a one day trip near Dighi becomes convenient when nature, recreation, food, and rural experiences are available in one place. Om Agro Tourism allows visitors to spend the day enjoying multiple activities without travelling between several destinations."
        },
        {
            name: "Family One Day Trip Near Dighi",
            description: "A family one day trip near Dighi can include a balanced combination of active recreation and relaxing experiences at Om Agro Tourism. Families can enjoy games, traditional activities, nature, food, and outdoor attractions according to their preferred pace."
        },
        {
            name: "Picnic Places Near Dighi",
            description: "Among picnic places near Dighi, Om Agro Tourism offers a distinctive rural environment with activities suitable for families, friends, and groups. Visitors can enjoy nature, traditional experiences, food, games, and outdoor recreation throughout their outing."
        },
        {
            name: "Best Picnic Places Near Dighi",
            description: "Visitors comparing the best picnic places near Dighi can consider Om Agro Tourism for its combination of peaceful surroundings and varied activities. The destination allows groups to include recreation, nature, meals, and countryside experiences in one day plan."
        },
        {
            name: "Affordable Picnic Spot Near Dighi",
            description: "An affordable picnic spot near Dighi should offer enough experiences to make the day worthwhile for families and groups. Om Agro Tourism brings together food, nature, rural activities, games, and recreation within one countryside destination."
        },
        {
            name: "Budget Picnic Resort Near Dighi",
            description: "For visitors searching for a budget picnic resort near Dighi, Om Agro Tourism offers multiple experiences in a single location. Families and groups can enjoy meals, nature, games, traditional activities, and outdoor recreation as part of their day outing."
        },
        {
            name: "Picnic Spot Near Dighi Pune",
            description: "Om Agro Tourism provides a refreshing picnic spot near Dighi Pune for people looking to take a break from urban surroundings. Its countryside environment, food, traditional activities, and recreational attractions make it suitable for a comfortable one-day outing."
        },
        {
            name: "Resort Near Dighi for Family Outing",
            description: "A resort near Dighi for family outing should have options that appeal to different age groups. Om Agro Tourism combines games, outdoor recreation, rural activities, food, and nature experiences so families can enjoy the day together."
        },
        {
            name: "One Day Resort Near Dighi",
            description: "Om Agro Tourism is a convenient choice for a one day resort near Dighi when visitors want recreation without staying overnight. Families and groups can spend the day enjoying activities, meals, nature, and a peaceful countryside environment."
        },
        {
            name: "Nature Picnic Spot Near Dighi",
            description: "Nature lovers searching for a nature picnic spot near Dighi can enjoy the open rural surroundings at Om Agro Tourism. Bird Watching, farm experiences, and outdoor attractions allow visitors to include nature appreciation in their relaxing day trip."
        },
        {
            name: "Picnic Spot Near Alandi Dighi",
            description: "Visitors from the Alandi-Dighi area can choose Om Agro Tourism for a refreshing countryside picnic experience. Families and groups can enjoy food, rural activities, games, nature, and recreation while spending quality time away from their everyday routine."
        },
        {
            name: "Picnic Spot Near Bhosari Dighi",
            description: "Om Agro Tourism offers a suitable countryside option for people searching for a picnic spot near Bhosari Dighi. Families and friends can combine outdoor recreation, traditional rural activities, food, and nature experiences during a convenient day outing."
        },
        {
            name: "Family Picnic Resort Near Dighi",
            description: "A family picnic resort near Dighi can provide a better outing when children and adults have several experiences to choose from. Om Agro Tourism combines rural attractions, games, food, nature, and outdoor activities for a flexible family picnic."
        },
        {
            name: "Picnic Spot with Activities Near Dighi",
            description: "Visitors searching for a picnic spot with activities near Dighi can enjoy a varied experience at Om Agro Tourism. Water activities, rural rides, games, nature experiences, farm activities, and food provide several ways for families and groups to stay engaged."
        }
    ],
    tableData: [
        ["Picnic Spot Near Dighi"],
        ["One Day Picnic Spot Near Dighi"],
        ["Best Picnic Spot Near Dighi"],
        ["Family Picnic Spot Near Dighi"],
        ["Picnic Resort Near Dighi"],
        ["One Day Picnic Resort Near Dighi"],
        ["Best Resort Near Dighi for Picnic"],
        ["Family Resort Near Dighi"],
        ["One Day Trip Near Dighi"],
        ["Family One Day Trip Near Dighi"],
        ["Picnic Places Near Dighi"],
        ["Best Picnic Places Near Dighi"],
        ["Affordable Picnic Spot Near Dighi"],
        ["Budget Picnic Resort Near Dighi"],
        ["Picnic Spot Near Dighi Pune"],
        ["Resort Near Dighi for Family Outing"],
        ["One Day Resort Near Dighi"],
        ["Nature Picnic Spot Near Dighi"],
        ["Picnic Spot Near Alandi Dighi"],
        ["Picnic Spot Near Bhosari Dighi"],
        ["Family Picnic Resort Near Dighi"],
        ["Picnic Spot with Activities Near Dighi"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Escape",
            WhyChoosedescription: "Om Agro Tourism gives visitors from Dighi, Alandi, Bhosari, and nearby areas a refreshing opportunity to leave behind the busy urban routine and enjoy a calmer rural environment."
        },
        {
            WhyChooseheading: "Varied Family Activities",
            WhyChoosedescription: "Families can choose from games, rural rides, water recreation, nature experiences, and outdoor attractions, allowing children and adults to enjoy different parts of the outing."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Bull Cart Ride and Tractor Ride add an authentic countryside touch, giving visitors memorable experiences connected with rural life and agricultural surroundings."
        },
        {
            WhyChooseheading: "Nature-Based Recreation",
            WhyChoosedescription: "Bird Watching and farm experiences allow guests to include nature appreciation in their itinerary, making the destination suitable for people seeking a more peaceful outdoor picnic."
        },
        {
            WhyChooseheading: "Entertainment for Groups",
            WhyChoosedescription: "Indoor and Outdoor Games, boating, water activities, and other attractions give families, friends, and larger groups plenty of options to keep their day engaging."
        },
        {
            WhyChooseheading: "Suitable for One-Day Outings",
            WhyChoosedescription: "Multiple attractions are available at the same destination, helping visitors organize a complete picnic without needing to travel between separate locations for activities and food."
        },
        {
            WhyChooseheading: "Comfortable Family Time",
            WhyChoosedescription: "The combination of open surroundings, shared activities, meals, and relaxed outdoor experiences creates an environment where families can spend meaningful time together."
        },
        {
            WhyChooseheading: "A Complete Dighi Day Trip",
            WhyChoosedescription: "Nature, recreation, traditional activities, food, and group entertainment come together at Om Agro Tourism, making it possible to turn a simple trip from Dighi into a memorable countryside experience."
        }
    ]
};


const faqData = [
    {
        question: "How can visitors from Dighi enjoy a refreshing picnic at Om Agri Tourism?",
        answer: "A trip from Dighi can be planned around recreation, rural experiences and peaceful time outdoors. Guests can enjoy swimming and boating, try horse riding, tractor rides and bull cart rides, and take breaks for bird watching, homemade food and relaxation in the farm surroundings."
    },
    {
        question: "What activities can families enjoy at a picnic spot near Dighi Pune?",
        answer: "Families can choose from several experiences to keep the day varied and enjoyable. Swimming, boating and horse riding provide active recreation, while tractor rides, bull cart rides and bird watching offer different ways to explore the countryside together."
    },
    {
        question: "Is Om Agri Tourism suitable for children visiting from Dighi?",
        answer: "Children can experience a new outdoor environment through age-appropriate recreational and farm activities. Swimming, boating, horse riding and countryside rides can keep them engaged, while bird watching offers a quieter experience. Adults should provide proper supervision during activities."
    },
    {
        question: "Can friends from Dighi plan a one-day picnic at Om Agri Tourism?",
        answer: "A friends' group can combine energetic activities with plenty of social time during the visit. The day may include swimming, boating and horse riding, followed by tractor or bull cart rides, a relaxed meal, photography and conversations around the farm."
    },
    {
        question: "What kind of rural experiences are available near Dighi for a picnic?",
        answer: "Visitors can experience elements of countryside life through horse riding, tractor rides and bull cart rides. These traditional activities can be combined with nature observation, greenery, homemade food, swimming and boating for a more diverse farm-based outing."
    },
    {
        question: "Does Om Agri Tourism offer a peaceful environment along with picnic activities?",
        answer: "The farm surroundings allow guests to slow down between different activities and enjoy the natural setting. Bird watching, spending time among the greenery, sharing homemade food and taking photographs can provide relaxing moments away from the regular city routine."
    },
    {
        question: "What can senior citizens enjoy during a family picnic near Dighi?",
        answer: "Senior members can follow a comfortable itinerary without needing to participate in every active experience. Boating, bird watching, enjoying homemade food and sitting in the peaceful surroundings can be suitable ways to spend time while younger family members enjoy rides and swimming."
    },
    {
        question: "How should a group from Dighi organize a full-day picnic itinerary?",
        answer: "A balanced schedule could begin with swimming or boating, followed by horse riding or one of the traditional farm rides. After a meal break, the group can keep the remaining hours flexible for bird watching, photography, conversations and relaxation instead of rushing through every activity."
    },
    {
        question: "Can visitors enjoy both water activities and traditional farm rides at Om Agri Tourism?",
        answer: "The outing can include different types of experiences within the same visit. Guests can enjoy swimming and boating before trying horse riding, tractor rides or bull cart rides, creating a combination of recreation and countryside activities for families and groups."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Dighi?",
        answer: "For visitors looking to step away from the usual urban surroundings, Om Agri Tourism brings outdoor recreation, rural experiences, nature and food together in a farm setting. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching give guests several ways to enjoy a memorable day with family or friends."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sameer Dhanawade",
        feedback:
            "A countryside picnic gave our Dighi group a welcome change from our normal weekend plans. We enjoyed starting the day with swimming and boating, and the tractor and bull cart rides added a fun rural experience. The homemade food and relaxed atmosphere made it easy for everyone to spend quality time together.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss Aarti Shinde",
        feedback:
            "The peaceful surroundings were one of the best parts of our family visit. Children had plenty of activities to keep them interested, while the adults enjoyed bird watching, food and sitting among the greenery. Having both recreation and quiet moments in the same outing made the experience enjoyable for the whole family.",
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
  "name": "Picnic Spot Near Dighi",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-dighi.webp",
  "description": "If you are searching for a relaxing picnic spot near Dighi, Om Agro Tourism offers a pleasant option for families, friends, students and groups planning a refreshing day outing. A one day picnic near Dighi can be a convenient way to take a break from the regular urban routine while enjoying an open and peaceful agro-tourism environment. Visitors looking for the best picnic spot near Dighi can plan quality time with family and friends, while those searching for a picnic resort near Dighi or a one day picnic resort near Dighi can consider a comfortable destination for group gatherings and casual celebrations. From family outings and friends' get-togethers to school picnics and weekend day trips, Om Agro Tourism provides a welcoming setting for creating enjoyable outdoor memories near Dighi.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-dighi"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Dighi | Best Picnic Resort & One Day Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Explore a refreshing picnic spot near Dighi for families, friends and groups. Plan a one day picnic near Dighi at Om Agro Tourism with a peaceful agro-tourism setting for a memorable outing."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Dighi, One Day Picnic Spot Near Dighi, Best Picnic Spot Near Dighi, Family Picnic Spot Near Dighi, Picnic Resort Near Dighi, One Day Picnic Resort Near Dighi, Best Resort Near Dighi for Picnic, Family Resort Near Dighi, One Day Trip Near Dighi, Picnic Places Near Dighi, Family Outing Near Dighi, One Day Outing Near Dighi, Agro Tourism Near Dighi, Picnic Destination Near Dighi, Best Picnic Resort Near Dighi"
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
                            <img src='/images/keyword/143.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotneardighi;