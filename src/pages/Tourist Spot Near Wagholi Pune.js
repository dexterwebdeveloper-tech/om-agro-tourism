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

function TouristSpotNearWagholiPune() {

const cardData = {
    keyword: "Tourist Spot Near Wagholi Pune",
    headingDescription: "Looking for a Tourist Spot Near Wagholi Pune for a refreshing day out? Om Agro Tourism offers a peaceful countryside experience where visitors can explore farm surroundings, enjoy nature, discover traditional rural activities, and spend quality time with family or friends. With attractions ranging from bird watching and farm experiences to traditional rides, outdoor recreation, and nature-focused activities, it provides a different kind of getaway from the busy city environment.",
    topPlaces: [
        {
            title: "Bird Watching",
            description: "Bird watching is a peaceful way to explore the natural side of Om Agro Tourism and enjoy the surrounding greenery. Visitors can spend quiet time observing birds while taking a break from the busy urban environment."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Explore the agricultural surroundings through farm tours and workshops that offer an insight into rural life and farming activities. This experience is well suited to visitors looking for an informative and nature-oriented place to visit."
        },
        {
            title: "Jungle Safari",
            description: "Add an adventurous touch to the day with a jungle safari experience surrounded by natural landscapes. It gives families and groups an opportunity to enjoy something different from conventional city sightseeing."
        },
        {
            title: "Bull Cart Ride",
            description: "Experience a traditional rural activity with a bull cart ride through the countryside setting. The ride introduces visitors to the charm of village life and creates a memorable addition to a one day trip."
        },
        {
            title: "Tractor Ride",
            description: "A tractor ride offers visitors a genuine farm experience while allowing them to explore the agricultural atmosphere in an enjoyable way. It is especially appealing for families and visitors interested in rural experiences."
        },
        {
            title: "Horse Riding",
            description: "Horse riding provides an active outdoor experience within the peaceful countryside surroundings. Visitors looking for recreational activities during their tourist or weekend outing can add this experience to their day."
        },
        {
            title: "Boating",
            description: "Enjoy a relaxing boating experience that adds variety to a countryside day trip. It provides visitors with an opportunity to slow down, enjoy the surroundings, and spend pleasant time with family or friends."
        },
        {
            title: "Tasty Homemade Food",
            description: "Enjoy freshly prepared homemade food in a traditional farm atmosphere. The dining experience complements the nature and rural activities and gives visitors a chance to enjoy authentic flavors during their outing."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Families and groups can spend recreational time with indoor and outdoor games during their visit. These activities make the destination suitable not only for sightseeing but also for a relaxed family outing."
        },
        {
            title: "Water Park Activities",
            description: "Visitors seeking additional recreation can enjoy water-based activities as part of their day. These options add an entertaining element to a one day trip while giving families and groups more ways to enjoy their visit."
        }
    ],
    services: [
        {
            name: "Tourist Spot Near Wagholi Pune",
            description: "Om Agro Tourism offers a refreshing tourist experience near Wagholi with farm exploration, nature activities, traditional rural experiences, recreation, and homemade food in a peaceful countryside setting."
        },
        {
            name: "Best Tourist Spot Near Wagholi",
            description: "Visitors can enjoy a varied countryside experience with nature exploration, farm activities, traditional rides, recreational options, and food, making the destination suitable for a memorable day trip."
        },
        {
            name: "Tourist Places Near Wagholi Pune",
            description: "For visitors exploring tourist places near Wagholi, Om Agro Tourism provides a rural alternative where families and groups can experience agriculture, nature, traditional activities, and outdoor recreation."
        },
        {
            name: "Places to Visit Near Wagholi",
            description: "Those searching for places to visit near Wagholi can enjoy farm tours, bird watching, traditional rides, nature experiences, games, and other activities within a peaceful agricultural environment."
        },
        {
            name: "Best Places to Visit Near Wagholi",
            description: "Om Agro Tourism offers multiple experiences in one destination, allowing visitors to combine sightseeing, rural exploration, nature activities, recreation, and traditional experiences during their outing."
        },
        {
            name: "One Day Trip Near Wagholi",
            description: "Plan a refreshing one day trip from Wagholi with opportunities for farm exploration, bird watching, rural rides, outdoor activities, boating, and traditional homemade food."
        },
        {
            name: "Family Tourist Places Near Wagholi",
            description: "Families can enjoy a countryside tourist experience with activities suited to children and adults, including nature exploration, farm experiences, games, traditional rides, and food."
        },
        {
            name: "Picnic Spot Near Wagholi",
            description: "Om Agro Tourism provides a peaceful picnic environment where visitors can enjoy open surroundings, farm activities, nature experiences, traditional attractions, recreation, and freshly prepared food."
        },
        {
            name: "One Day Picnic Spot Near Wagholi",
            description: "A one day picnic near Wagholi can include several experiences such as farm tours, bird watching, traditional rides, games, boating, water activities, and relaxed dining."
        },
        {
            name: "Best Picnic Spot Near Wagholi",
            description: "Visitors looking for a memorable picnic destination can enjoy a combination of rural activities, nature, recreation, traditional experiences, and food without having to visit multiple locations."
        },
        {
            name: "Weekend Getaway Near Wagholi",
            description: "Om Agro Tourism provides a refreshing countryside escape for weekends, giving visitors an opportunity to leave behind the urban routine and enjoy nature, farm experiences, recreation, and traditional activities."
        },
        {
            name: "Tourist Attractions Near Wagholi",
            description: "The destination brings together several tourist attractions including farm experiences, bird watching, rural rides, boating, games, water activities, and other recreational options for a varied outing."
        },
        {
            name: "Nature Places Near Wagholi",
            description: "Nature lovers can explore greenery, agricultural surroundings, bird watching, and outdoor experiences at Om Agro Tourism for a peaceful break from the city's crowded environment."
        },
        {
            name: "Family Outing Places Near Wagholi",
            description: "Families can enjoy shared time through nature activities, farm exploration, traditional rides, games, food, and other recreational experiences designed to make a countryside outing more engaging."
        },
        {
            name: "Places to Visit Near Wagholi for Family",
            description: "Families visiting from Wagholi can experience rural Maharashtra through farm tours, bird watching, traditional rides, games, boating, and homemade food in a relaxed setting."
        },
        {
            name: "Best Weekend Places Near Wagholi",
            description: "A weekend visit to Om Agro Tourism offers a mix of nature, rural culture, recreation, and food, making it suitable for families, friends, and groups seeking a change from city surroundings."
        },
        {
            name: "Tourist Places Near Kharadi Wagholi",
            description: "Visitors from Kharadi and Wagholi can plan a countryside outing featuring agricultural experiences, traditional rides, nature exploration, recreational activities, and homemade food."
        },
        {
            name: "Tourist Places Near Viman Nagar Wagholi",
            description: "For visitors travelling from Viman Nagar towards Wagholi, Om Agro Tourism offers a rural destination where families and groups can combine nature exploration with traditional and recreational experiences."
        },
        {
            name: "One Day Trip Near Pune Wagholi",
            description: "A one day trip from Pune through the Wagholi side can include a refreshing visit to the countryside with farm tours, bird watching, rural rides, recreation, boating, and food."
        },
        {
            name: "Best Tourist Places Near Pune Wagholi",
            description: "Om Agro Tourism gives Pune visitors a distinctive tourist experience focused on agriculture, nature, rural culture, outdoor activities, and traditional experiences away from typical urban attractions."
        },
        {
            name: "Nature Picnic Spot Near Wagholi",
            description: "Visitors looking for a nature-focused picnic can enjoy bird watching, farm surroundings, rural landscapes, outdoor activities, and a peaceful atmosphere suitable for families and small groups."
        },
        {
            name: "Resorts Near Wagholi for One Day Trip",
            description: "For a one day resort-style outing near Wagholi, visitors can enjoy countryside surroundings along with farm activities, traditional rides, recreational options, boating, and homemade food."
        }
    ],
    tableData: [
        ["Tourist Spot Near Wagholi Pune"],
        ["Best Tourist Spot Near Wagholi"],
        ["Tourist Places Near Wagholi Pune"],
        ["Places to Visit Near Wagholi"],
        ["Best Places to Visit Near Wagholi"],
        ["One Day Trip Near Wagholi"],
        ["Family Tourist Places Near Wagholi"],
        ["Picnic Spot Near Wagholi"],
        ["One Day Picnic Spot Near Wagholi"],
        ["Best Picnic Spot Near Wagholi"],
        ["Weekend Getaway Near Wagholi"],
        ["Tourist Attractions Near Wagholi"],
        ["Nature Places Near Wagholi"],
        ["Family Outing Places Near Wagholi"],
        ["Places to Visit Near Wagholi for Family"],
        ["Best Weekend Places Near Wagholi"],
        ["Tourist Places Near Kharadi Wagholi"],
        ["Tourist Places Near Viman Nagar Wagholi"],
        ["One Day Trip Near Pune Wagholi"],
        ["Best Tourist Places Near Pune Wagholi"],
        ["Nature Picnic Spot Near Wagholi"],
        ["Resorts Near Wagholi for One Day Trip"]
    ],
    whychoose: [
        {
            WhyChooseheading: "A Different Kind of Tourist Experience",
            WhyChoosedescription: "Instead of a conventional urban attraction, visitors can experience agriculture, rural surroundings, nature, traditional activities, and outdoor recreation at one countryside destination."
        },
        {
            WhyChooseheading: "Nature and Rural Surroundings",
            WhyChoosedescription: "The farm environment provides a refreshing setting for visitors who want greenery, open spaces, bird watching, and a quieter atmosphere away from busy city locations."
        },
        {
            WhyChooseheading: "Activities for Families and Groups",
            WhyChoosedescription: "Families and groups can choose from nature experiences, traditional rides, games, boating, water activities, and farm-based attractions according to their interests."
        },
        {
            WhyChooseheading: "Traditional Maharashtra Experiences",
            WhyChoosedescription: "Bull cart rides, tractor rides, farm activities, and homemade food allow visitors to experience elements of rural Maharashtra while enjoying a relaxed day outside the city."
        },
        {
            WhyChooseheading: "Suitable for a One Day Trip",
            WhyChoosedescription: "The variety of activities available at the destination makes it possible to create a complete day itinerary without needing to travel between several different tourist locations."
        },
        {
            WhyChooseheading: "Refreshing Weekend Escape",
            WhyChoosedescription: "Visitors can use the countryside setting as a short weekend getaway where nature, recreation, food, and rural experiences provide a welcome break from their regular routine."
        },
        {
            WhyChooseheading: "Family-Friendly Recreation",
            WhyChoosedescription: "The combination of relaxed nature activities and recreational attractions gives children, adults, and groups different ways to enjoy their time together during the visit."
        },
        {
            WhyChooseheading: "Convenient for Pune-Side Visitors",
            WhyChoosedescription: "Visitors from Wagholi, Kharadi, Viman Nagar, and other parts of Pune can consider the destination for a countryside day trip, family outing, picnic, or nature-focused escape."
        }
    ]
};



const faqData = [
    {
        question: "What kind of experience can visitors from Wagholi enjoy at Om Agri Tourism?",
        answer: "A trip from Wagholi can turn into a refreshing countryside experience with a combination of outdoor recreation and traditional farm activities. Visitors can spend time swimming, boating, riding horses, enjoying tractor and bull cart rides, watching birds and relaxing around the green farm surroundings."
    },
    {
        question: "Is Om Agri Tourism a good option for people searching for a tourist spot near Wagholi Pune?",
        answer: "Those looking for a different outing from the usual urban attractions can consider an agro tourism destination where leisure and rural experiences come together. The farm setting provides opportunities for recreation, nature observation, traditional rides and enjoying homemade food during a day visit."
    },
    {
        question: "Which attractions and activities can be enjoyed at this tourist spot near Wagholi?",
        answer: "Visitors have several experiences to choose from, including swimming, boating, horse riding, tractor rides and bull cart rides. Bird watching and spending quiet time amid the farm greenery can complement the more active parts of the outing."
    },
    {
        question: "Can families from Wagholi visit Om Agri Tourism for a day trip?",
        answer: "Families can plan a relaxed day where different members choose activities according to their interests. Children can enjoy suitable outdoor recreation, while adults may prefer boating, horse riding, traditional rides, nature observation and a leisurely meal in the countryside."
    },
    {
        question: "How is an agro tourism visit different from regular tourist places near Wagholi?",
        answer: "An agro tourism destination provides more than sightseeing by allowing guests to experience aspects of rural life and outdoor recreation. Farm surroundings, traditional bull cart and tractor rides, bird watching, homemade food and recreational activities create a more hands-on countryside outing."
    },
    {
        question: "Can friends from Wagholi plan a fun outing at Om Agri Tourism?",
        answer: "Groups of friends can create an activity-filled day by combining swimming, boating, horse riding and countryside rides. Time between activities can be used for photography, conversations, food and exploring the peaceful farm environment, making the outing suitable for casual group get-togethers."
    },
    {
        question: "What should visitors include in a one day visit to Om Agri Tourism from Wagholi?",
        answer: "A practical day plan can include a few active experiences along with enough time for meals and relaxation. Visitors may begin with swimming or boating, continue with horse riding or farm rides and reserve some time for bird watching, photography and enjoying the natural surroundings."
    },
    {
        question: "Does Om Agri Tourism offer a nature-oriented experience for visitors near Wagholi Pune?",
        answer: "The countryside atmosphere gives guests an opportunity to spend time around greenery while observing birds and experiencing farm life. Combining these quieter moments with boating, swimming and traditional rides creates a balanced outing for visitors who want both nature and recreation."
    },
    {
        question: "Is this tourist spot near Wagholi suitable for different age groups?",
        answer: "The range of available experiences allows families and groups to select activities based on age, comfort and personal preference. Younger visitors can enjoy suitable recreational options, while adults and seniors can appreciate bird watching, greenery, homemade food and slower-paced farm experiences."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a tourist spot near Wagholi Pune?",
        answer: "For visitors wanting something beyond a conventional city attraction, Om Agri Tourism combines countryside scenery, farm experiences, outdoor activities and traditional elements in one destination. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching give visitors multiple ways to enjoy a memorable day away from the urban routine."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohan Kamat",
        feedback:
            "A countryside outing at Om Agri Tourism turned out to be a refreshing change for our group from Wagholi. The boating and horse riding were enjoyable, while the bull cart ride gave us a glimpse of traditional rural life. Spending time around the greenery and enjoying homemade food made the visit feel relaxed and unhurried.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Snehal Joshi",
        feedback:
            "The farm atmosphere was the main reason we enjoyed our visit so much. Instead of simply sightseeing, we could participate in activities, watch birds and experience the rural surroundings. Swimming, the tractor ride and a peaceful meal added variety to the day and made Om Agri Tourism a memorable outing near Wagholi.",
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
  "name": "Tourist Spot Near Wagholi Pune",
  "image": "https://www.omagrotourism.com/assets/images/tourist-spot-near-wagholi-pune.webp",
  "description": "Tourist Spot Near Wagholi Pune is a suitable search destination for families, friends, couples, school groups, and visitors looking for a refreshing day experience around Pune. Om Agro Tourism offers an agro-tourism-oriented countryside environment where visitors can take a break from busy urban surroundings and spend quality time in a relaxed outdoor setting. Those searching for the Best Tourist Spot Near Wagholi can consider an easy day-outing option where leisure, countryside surroundings, and recreational experiences can be enjoyed together. Tourist Places Near Wagholi Pune can be explored by families planning a weekend outing, friends looking for a casual day trip, couples seeking a peaceful outdoor experience, and groups wanting a change from the usual city routine. Visitors searching for Places to Visit Near Wagholi can consider an agro-tourism experience as an alternative to crowded urban attractions, particularly when the plan is to spend quality time outdoors with family or friends. The Best Places to Visit Near Wagholi can include destinations suited to different types of day-trip plans, from family recreation and group outings to relaxed countryside experiences. Om Agro Tourism can be considered by visitors from Wagholi, Kharadi, Viman Nagar, Kalyani Nagar, Hadapsar, Magarpatta, Mundhwa, Chandan Nagar, Dhanori, Lohegaon, and nearby Pune areas. The surrounding region is convenient for people looking to combine a short local trip with a refreshing outdoor experience. Families can plan a relaxed day together, while friends and corporate groups can use the destination for informal gatherings and group recreation. School groups can also consider an agro-tourism-focused outing as a way to introduce students to a countryside environment and outdoor experiences. A visit to Om Agro Tourism provides an opportunity to step away from regular schedules, enjoy open surroundings, and create memorable moments with loved ones. For visitors searching for a Tourist Spot Near Wagholi Pune, the destination offers a peaceful alternative for a one-day outing and a refreshing break from the everyday city environment.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/tourist-spot-near-wagholi-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Tourist Spot Near Wagholi Pune | Best Tourist Places & One Day Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Explore a Tourist Spot Near Wagholi Pune for family outings, friends, couples and groups looking for peaceful places to visit and a refreshing agro-tourism experience."
  />

  <meta
    name="keywords"
    content="Tourist Spot Near Wagholi Pune, Best Tourist Spot Near Wagholi, Tourist Places Near Wagholi Pune, Places to Visit Near Wagholi, Best Places to Visit Near Wagholi, Tourist Places Near Wagholi, Best Tourist Places Near Wagholi, One Day Trip Near Wagholi, One Day Outing Near Wagholi, Places to Visit Near Wagholi Pune, Best Places to Visit Near Wagholi Pune, Family Places to Visit Near Wagholi, Family Outing Near Wagholi, Weekend Places Near Wagholi, Weekend Trip Near Wagholi, Tourist Attractions Near Wagholi, Tourist Destination Near Wagholi, Picnic Spot Near Wagholi, One Day Picnic Near Wagholi, Best Picnic Spot Near Wagholi, Family Picnic Near Wagholi, Picnic Resort Near Wagholi, Agro Tourism Near Wagholi, Agro Tourism Near Pune, Places to Visit Near Kharadi, Tourist Places Near Viman Nagar, One Day Trip Near Kalyani Nagar, Places to Visit Near Hadapsar, Tourist Spot Near Magarpatta, Weekend Outing Near Mundhwa, Places to Visit Near Chandan Nagar, Family Outing Near Dhanori, Tourist Places Near Lohegaon, One Day Trip Near Pune, Family Tourist Places Near Pune"
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
                            <img src='/images/keyword/125.jpg' alt='img' className='img-fluid' />
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

export default TouristSpotNearWagholiPune;