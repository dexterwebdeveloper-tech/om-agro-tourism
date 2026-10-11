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

function Picnicspotnearcharholi() {

const cardData = {
    keyword: "Picnic Spot Near Charholi",
    headingDescription: "Om Agro Tourism is a refreshing countryside destination for visitors searching for a picnic spot near Charholi, offering a peaceful environment with rural experiences, nature, homemade food, and recreational activities. Families, friends, and groups from Charholi, Alandi, Dighi, and nearby Pune areas can plan a convenient one-day outing away from the busy city routine. The destination provides a varied setting for family picnics, nature outings, relaxed day trips, and activity-filled gatherings.",
    topPlaces: [
        {
            title: "Jungle Safari",
            description: "Jungle Safari adds an adventurous element to a one-day outing near Charholi and can be especially enjoyable for families and groups. Visitors can include outdoor exploration in their picnic schedule for a more exciting countryside experience."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride provides an authentic farm-style experience for visitors who want to experience the rural side of the destination. Children and adults can enjoy this activity while adding something distinctive to their family picnic."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food gives families and groups an opportunity to enjoy comforting meals during their countryside outing. A relaxed meal can complement the day's outdoor activities and make the picnic experience more satisfying."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding offers an active countryside experience for families, children, and friends looking for a picnic with varied activities. It adds excitement to the day while giving visitors another way to enjoy the open rural surroundings."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops provide an interactive introduction to agricultural surroundings and rural activities. Families visiting from Charholi and nearby areas can include this experience when they want their picnic to combine recreation with learning."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities bring energetic recreation to a family outing near Charholi. Visitors can include water-based fun alongside other countryside attractions, creating a varied itinerary for children and adults."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride gives visitors a traditional rural experience and introduces children and families to the charm of countryside transportation. It provides a memorable activity for groups looking for something different from regular urban recreation."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching offers a quieter nature-focused activity for people searching for a nature picnic spot near Charholi. Visitors can observe birds and enjoy the peaceful outdoor surroundings while taking a break from the city's busy atmosphere."
        },
        {
            title: "Boating",
            description: "Boating provides a relaxing shared activity for families and friends during a full-day picnic. It adds another outdoor experience to the itinerary and gives groups an opportunity to enjoy time together in a refreshing setting."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide flexible entertainment for children, families, and groups. The variety of games makes it easier for visitors to keep everyone engaged while enjoying a relaxed and enjoyable picnic schedule."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Charholi",
            description: "Om Agro Tourism offers a peaceful countryside environment for visitors searching for a picnic spot near Charholi. Families, friends, and groups can enjoy nature, food, traditional activities, games, and outdoor recreation during a refreshing day away from the city."
        },
        {
            name: "One Day Picnic Spot Near Charholi",
            description: "A one day picnic spot near Charholi should provide enough variety for visitors to enjoy a complete day outing. Om Agro Tourism brings together nature, rural experiences, recreational activities, food, and group entertainment in one destination."
        },
        {
            name: "Best Picnic Spot Near Charholi",
            description: "Visitors looking for the best picnic spot near Charholi can consider Om Agro Tourism for its combination of countryside surroundings, family activities, traditional experiences, and food. The destination works well for both relaxed and activity-focused outings."
        },
        {
            name: "Family Picnic Spot Near Charholi",
            description: "Om Agro Tourism is a suitable family picnic spot near Charholi because children and adults can choose from several different experiences. Families can enjoy games, nature, rural activities, food, and outdoor recreation while spending quality time together."
        },
        {
            name: "Picnic Resort Near Charholi",
            description: "For visitors searching for a picnic resort near Charholi, Om Agro Tourism provides a refreshing rural atmosphere with multiple recreational options. Families and groups can combine relaxation, meals, nature experiences, and activities during their day visit."
        },
        {
            name: "One Day Picnic Resort Near Charholi",
            description: "A one day picnic resort near Charholi offers a convenient choice for people who want a complete outing without planning an overnight stay. Om Agro Tourism provides countryside experiences, recreational attractions, food, and nature activities within one destination."
        },
        {
            name: "Best Resort Near Charholi for Picnic",
            description: "Those searching for the best resort near Charholi for picnic activities can choose Om Agro Tourism for its varied countryside experiences. Visitors can create a relaxed family itinerary or include several attractions for a more energetic group outing."
        },
        {
            name: "Family Resort Near Charholi",
            description: "Om Agro Tourism provides a family resort experience near Charholi where children, parents, and relatives can enjoy different attractions together. Open surroundings, games, food, and rural activities create a comfortable environment for family gatherings."
        },
        {
            name: "One Day Trip Near Charholi",
            description: "Planning a one day trip near Charholi becomes convenient when nature, recreation, food, and rural experiences are available together. Om Agro Tourism allows visitors to enjoy a varied itinerary without spending the day travelling between different destinations."
        },
        {
            name: "Family One Day Trip Near Charholi",
            description: "A family one day trip near Charholi can include a balanced mix of active recreation and relaxed outdoor experiences. Families can enjoy games, traditional activities, food, nature, and countryside attractions according to their preferred pace."
        },
        {
            name: "Picnic Places Near Charholi",
            description: "Among picnic places near Charholi, Om Agro Tourism offers a distinctive rural environment with attractions suitable for families, friends, and groups. Visitors can enjoy nature, traditional activities, food, games, and outdoor recreation during their outing."
        },
        {
            name: "Best Picnic Places Near Charholi",
            description: "Visitors comparing the best picnic places near Charholi can consider Om Agro Tourism for its peaceful surroundings and variety of experiences. The destination gives groups the flexibility to combine recreation, nature, meals, and rural activities in one day."
        },
        {
            name: "Affordable Picnic Spot Near Charholi",
            description: "An affordable picnic spot near Charholi should provide enough activities and experiences to make the day worthwhile. Om Agro Tourism combines food, nature, rural attractions, games, and recreation within one countryside destination for families and groups."
        },
        {
            name: "Budget Picnic Resort Near Charholi",
            description: "For visitors searching for a budget picnic resort near Charholi, Om Agro Tourism offers several experiences within one location. Families and groups can enjoy meals, nature, games, traditional activities, and outdoor recreation as part of their day plan."
        },
        {
            name: "Picnic Spot Near Charholi Pune",
            description: "Om Agro Tourism provides a refreshing picnic spot near Charholi Pune for people looking to escape the busy urban surroundings. Its countryside environment, recreational activities, rural experiences, and food make it suitable for a comfortable one-day outing."
        },
        {
            name: "Resort Near Charholi for Family Outing",
            description: "A resort near Charholi for family outing should offer options that suit children and adults alike. Om Agro Tourism combines games, outdoor recreation, rural activities, food, and nature experiences so families can enjoy a varied day together."
        },
        {
            name: "One Day Resort Near Charholi",
            description: "Om Agro Tourism is a convenient option for a one day resort near Charholi when visitors want recreation without staying overnight. Families and groups can spend the day enjoying multiple activities, meals, nature, and a peaceful countryside atmosphere."
        },
        {
            name: "Nature Picnic Spot Near Charholi",
            description: "Nature lovers searching for a nature picnic spot near Charholi can enjoy the open rural surroundings at Om Agro Tourism. Bird Watching, farm experiences, and outdoor attractions allow visitors to include nature appreciation in their relaxing day trip."
        },
        {
            name: "Picnic Spot Near Alandi Charholi",
            description: "Visitors from the Alandi-Charholi area can choose Om Agro Tourism for a refreshing countryside picnic experience. Families and groups can enjoy food, rural activities, nature, games, and recreation while spending quality time away from their everyday routine."
        },
        {
            name: "Picnic Spot Near Dighi Charholi",
            description: "Om Agro Tourism offers a suitable countryside option for people searching for a picnic spot near Dighi Charholi. Families and friends can combine outdoor recreation, traditional rural activities, food, and nature experiences during a convenient one-day outing."
        },
        {
            name: "Family Picnic Resort Near Charholi",
            description: "A family picnic resort near Charholi becomes more enjoyable when children and adults have several experiences to choose from. Om Agro Tourism combines rural attractions, games, food, nature, and outdoor activities for a flexible family picnic."
        },
        {
            name: "Picnic Spot with Activities Near Charholi",
            description: "Visitors searching for a picnic spot with activities near Charholi can enjoy a varied experience at Om Agro Tourism. Water activities, rural rides, games, farm experiences, nature attractions, and food provide several ways for families and groups to stay engaged."
        }
    ],
    tableData: [
        ["Picnic Spot Near Charholi"],
        ["One Day Picnic Spot Near Charholi"],
        ["Best Picnic Spot Near Charholi"],
        ["Family Picnic Spot Near Charholi"],
        ["Picnic Resort Near Charholi"],
        ["One Day Picnic Resort Near Charholi"],
        ["Best Resort Near Charholi for Picnic"],
        ["Family Resort Near Charholi"],
        ["One Day Trip Near Charholi"],
        ["Family One Day Trip Near Charholi"],
        ["Picnic Places Near Charholi"],
        ["Best Picnic Places Near Charholi"],
        ["Affordable Picnic Spot Near Charholi"],
        ["Budget Picnic Resort Near Charholi"],
        ["Picnic Spot Near Charholi Pune"],
        ["Resort Near Charholi for Family Outing"],
        ["One Day Resort Near Charholi"],
        ["Nature Picnic Spot Near Charholi"],
        ["Picnic Spot Near Alandi Charholi"],
        ["Picnic Spot Near Dighi Charholi"],
        ["Family Picnic Resort Near Charholi"],
        ["Picnic Spot with Activities Near Charholi"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Getaway",
            WhyChoosedescription: "Om Agro Tourism gives visitors from Charholi, Alandi, Dighi, and nearby Pune areas a refreshing opportunity to step away from urban routines and spend quality time in a calm rural environment."
        },
        {
            WhyChooseheading: "Experiences for the Whole Family",
            WhyChoosedescription: "Children, parents, and other family members can choose from games, rural activities, nature experiences, food, and outdoor recreation, making the outing suitable for different age groups."
        },
        {
            WhyChooseheading: "Adventure and Recreation",
            WhyChoosedescription: "Jungle Safari, Horse Riding, Water Park Activities, and other attractions add variety to the day, allowing visitors to make their picnic as active and entertaining as they prefer."
        },
        {
            WhyChooseheading: "Authentic Rural Activities",
            WhyChoosedescription: "Bull Cart Ride, Tractor Ride, and Farm Tours and Workshops provide a traditional countryside experience and help visitors discover aspects of rural life that are different from regular city outings."
        },
        {
            WhyChooseheading: "Nature Appreciation",
            WhyChoosedescription: "Bird Watching and the surrounding open countryside create opportunities for visitors to enjoy a quieter side of the outing while spending time closer to nature."
        },
        {
            WhyChooseheading: "Good for Group Outings",
            WhyChoosedescription: "Families, friends, and larger groups can select different activities throughout the day, making the destination flexible for gatherings where everyone may have different interests."
        },
        {
            WhyChooseheading: "Convenient One-Day Experience",
            WhyChoosedescription: "With food, nature, recreation, games, and rural attractions available together, visitors can plan a complete day without needing to move between several separate picnic and activity destinations."
        },
        {
            WhyChooseheading: "Memorable Charholi Day Trip",
            WhyChoosedescription: "The combination of countryside scenery, shared activities, traditional experiences, homemade food, and outdoor recreation creates a memorable way to enjoy a day trip from Charholi and surrounding areas."
        }
    ]
};


const faqData = [
    {
        question: "What kind of picnic experience can visitors from Charholi enjoy at Om Agri Tourism?",
        answer: "A visit to Om Agri Tourism can bring together farm experiences, outdoor recreation and time in a peaceful countryside setting. Guests from Charholi can enjoy swimming, boating, horse riding, tractor rides and bull cart rides, while bird watching and homemade food add a more relaxed side to the outing."
    },
    {
        question: "How can families from Charholi plan a fun one-day picnic?",
        answer: "Families can build their itinerary around a combination of activities and rest periods. Swimming or boating can be followed by horse riding and traditional farm rides, with homemade food, nature observation and time in the greenery providing comfortable breaks for different age groups."
    },
    {
        question: "Which activities are available at a picnic spot near Charholi Pune?",
        answer: "Visitors can choose from several outdoor experiences, including swimming, boating, horse riding, tractor rides and bull cart rides. Bird watching and farm surroundings provide additional options for guests who prefer nature-focused activities between the more energetic parts of the day."
    },
    {
        question: "Can friends from Charholi visit Om Agri Tourism for a group outing?",
        answer: "A group of friends can enjoy the destination by combining shared activities with casual time together. Boating, swimming and horse riding can keep the outing lively, while tractor rides, bull cart rides, food and photography offer opportunities to enjoy the countryside at a slower pace."
    },
    {
        question: "What makes Om Agri Tourism different from a regular picnic location near Charholi?",
        answer: "The farm-based setting adds a rural dimension to the outing through traditional rides and agricultural surroundings. Along with recreation such as swimming and boating, guests can experience horse riding, tractor rides, bull cart rides, bird watching and homemade food in a natural environment."
    },
    {
        question: "Are there activities at Om Agri Tourism that children can enjoy?",
        answer: "Children can explore a variety of outdoor experiences based on their age and comfort. Swimming, boating, horse riding and farm rides can keep them engaged, while bird watching provides a quieter opportunity to observe nature. Adults should maintain appropriate supervision during recreational activities."
    },
    {
        question: "Can senior citizens from Charholi enjoy a family picnic at Om Agri Tourism?",
        answer: "Senior members can choose a relaxed itinerary without taking part in every active experience. Bird watching, enjoying homemade food, sitting among the greenery and spending time with family can be pleasant alternatives while younger visitors participate in swimming, boating or rides."
    },
    {
        question: "What would be a balanced picnic schedule for a group coming from Charholi?",
        answer: "An easy-going plan could start with swimming or boating, followed by horse riding or one of the countryside rides. After a meal break, the group can keep some time for bird watching, photography and conversations so the day remains enjoyable without feeling overcrowded."
    },
    {
        question: "Can visitors experience traditional farm rides during a picnic near Charholi?",
        answer: "Yes, tractor rides and bull cart rides can add a distinctive countryside element to the visit. Guests can combine these experiences with horse riding, swimming and boating to create a varied itinerary that suits families, friends and other groups."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Charholi?",
        answer: "For visitors seeking a break from the city's regular routine, Om Agri Tourism combines outdoor activities, rural experiences, nature and food in one destination. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching give groups several ways to enjoy a refreshing day together."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Harshad Jagtap",
        feedback:
            "A day at Om Agri Tourism was a refreshing change for our group from Charholi. We enjoyed the swimming and boating, while the tractor ride and bull cart experience gave us a memorable taste of countryside life. The homemade food and relaxed surroundings made it easy to spend the entire day together without feeling rushed.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Pooja Gaikwad",
        feedback:
            "The mix of activities made the outing enjoyable for every member of our family. The children were excited about the rides and outdoor experiences, while the elders preferred bird watching, homemade food and sitting in the greenery. It was a pleasant break from our usual Charholi routine and a day everyone enjoyed.",
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
  "name": "Picnic Spot Near Charholi",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-charholi.webp",
  "description": "Searching for a peaceful picnic spot near Charholi for a refreshing break from the city routine? Om Agro Tourism offers a welcoming setting for families, friends, students and groups planning a memorable day outing. A one day picnic near Charholi can be a convenient choice for spending quality time together in an open and relaxed agro-tourism environment. Visitors looking for the best picnic spot near Charholi can enjoy a day focused on nature, leisure and group bonding, while families searching for a picnic resort near Charholi or a one day picnic resort near Charholi can plan a comfortable outing for different occasions. Whether it is a family gathering, friends' get-together, school picnic or casual weekend escape, Om Agro Tourism provides a pleasant destination for an enjoyable day trip near Charholi.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-charholi"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Charholi | Best Picnic Resort & One Day Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a refreshing picnic spot near Charholi for families, friends and groups. Plan a one day picnic near Charholi at Om Agro Tourism with a peaceful setting for a relaxing day outing."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Charholi, One Day Picnic Spot Near Charholi, Best Picnic Spot Near Charholi, Family Picnic Spot Near Charholi, Picnic Resort Near Charholi, One Day Picnic Resort Near Charholi, Best Resort Near Charholi for Picnic, Family Resort Near Charholi, One Day Trip Near Charholi, Picnic Places Near Charholi, Family Outing Near Charholi, One Day Outing Near Charholi, Agro Tourism Near Charholi, Picnic Destination Near Charholi, Best Picnic Resort Near Charholi"
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
                            <img src='/images/keyword/144.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearcharholi;