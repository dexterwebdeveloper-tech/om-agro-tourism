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

function CampningPlacesNearPune() {


const cardData = {
    keyword: "Camping Places Near Pune",
    headingDescription: "Searching for the best Camping Places Near Pune for a peaceful overnight escape, family outing, couples getaway, or adventure-filled weekend? Om Agri Tourism provides a refreshing countryside environment where visitors can experience camping close to nature while enjoying the charm of farmland and rural surroundings. Camping near Pune is popular for people who want to take a break from busy city routines, spend an evening under the open sky, enjoy outdoor activities, and experience a different kind of weekend getaway. Om Agri Tourism combines the appeal of an agricultural destination with opportunities for nature walks, farm exploration, outdoor recreation, traditional food, group activities, and relaxing countryside experiences. Whether you are searching for Camping sites near Pune, 1 day camping near Pune, overnight camping near Pune, camping near Pune for family, or camping near Pune for couples, the destination can provide a memorable rural escape. Its natural farm setting also makes it suitable for visitors from Pune and Pimpri Chinchwad who want to enjoy camping, outdoor leisure, photography, and a peaceful environment away from the city's crowded surroundings. ",

    topPlaces: [
        {
            title: "Countryside Camping Experience",
            description: "Enjoy a peaceful camping experience surrounded by open farmland and natural countryside landscapes. The rural atmosphere creates a refreshing setting for visitors who want to spend quality time outdoors away from the noise and routine of the city."
        },
        {
            title: "Overnight Farm Camping",
            description: "Experience the charm of staying overnight in a farm environment where the slower pace of rural life adds a unique character to the trip. It is a suitable choice for visitors looking for a simple nature-focused getaway near Pune."
        },
        {
            title: "Family Camping Getaway",
            description: "Families can enjoy an outdoor escape with opportunities to explore the farm, participate in recreational activities, enjoy fresh air, and spend uninterrupted time together in a peaceful countryside setting."
        },
        {
            title: "Couples Camping Experience",
            description: "Couples looking for a relaxed break can enjoy quiet countryside surroundings, nature views, open spaces, and an unhurried atmosphere. The rural setting offers a refreshing alternative to conventional city outings."
        },
        {
            title: "Farm Nature Walk",
            description: "Explore the agricultural surroundings through a leisurely nature walk and discover the greenery, open farm areas, and peaceful rural landscape. It is also an enjoyable opportunity for nature photography and relaxation."
        },
        {
            title: "Outdoor Adventure Activities",
            description: "Add more excitement to a camping trip with outdoor recreation and farm-based activities. The open environment provides space for group games, exploration, and enjoyable activities for friends and family."
        },
        {
            title: "Campfire and Evening Leisure",
            description: "Spend the evening relaxing in a countryside environment and enjoying conversations, group time, and the peaceful surroundings. An outdoor evening experience can make an overnight camping trip more memorable."
        },
        {
            title: "Traditional Farm Food Experience",
            description: "Enjoy the distinctive taste of traditional food while spending time in a rural farm setting. A wholesome meal surrounded by nature adds a cultural and local element to the overall camping experience."
        },
        {
            title: "Photography and Stargazing",
            description: "The open countryside provides an appealing backdrop for photographs, sunset moments, and peaceful evening observation. Visitors can capture memorable moments while enjoying the natural atmosphere around the camping area."
        },
        {
            title: "Camping and Agro Tourism",
            description: "Combine outdoor camping with an authentic agricultural experience by exploring the farm and learning more about rural surroundings. This makes the outing more meaningful than a standard camping trip."
        }
    ],

    services: [
        {
            name: "Camping sites near pune",
            description: "Camping sites near Pune are ideal for visitors who want to experience nature, open countryside, outdoor recreation, and peaceful surroundings while taking a break from everyday city life."
        },
        {
            name: "best camping places near pune",
            description: "Those searching for the best camping places near Pune can enjoy a countryside camping experience combined with farm exploration, outdoor activities, traditional food, and relaxing natural surroundings."
        },
        {
            name: "Pune camping places",
            description: "Pune camping places provide opportunities for short outdoor getaways, overnight stays, group recreation, nature exploration, and memorable experiences away from the urban environment."
        },
        {
            name: "Best place for camping near pune",
            description: "Visitors looking for the Best place for camping near Pune can choose a farm-based environment where nature, outdoor recreation, rural experiences, and comfortable leisure come together."
        },
        {
            name: "camping location near pune",
            description: "A peaceful camping location near Pune can be a refreshing option for families, friends, couples, and groups who want to enjoy open spaces and a natural countryside atmosphere."
        },
        {
            name: "Camping spots near pune",
            description: "Camping spots near Pune are suitable for people who enjoy nature-based recreation, outdoor activities, evening relaxation, photography, and spending time in a quieter environment."
        },
        {
            name: "places for camping in pune",
            description: "People exploring places for camping in Pune can consider an agro-tourism setting for a distinctive experience that combines camping with farmland, rural activities, and traditional countryside surroundings."
        },
        {
            name: "Best camping spots near pune",
            description: "The Best camping spots near Pune can offer more than a tent stay by combining outdoor recreation, farm exploration, nature experiences, and opportunities for groups to relax together."
        },
        {
            name: "camping places near pimpri chinchwad",
            description: "Visitors searching for camping places near Pimpri Chinchwad can plan a refreshing countryside outing where they can escape urban surroundings and enjoy nature, outdoor activities, and rural experiences."
        },
        {
            name: "Indoor camping places near pimpri chinchwad",
            description: "Indoor camping places near Pimpri Chinchwad are useful for visitors who prefer a more comfortable camping-style experience while still enjoying the atmosphere and activities associated with an outdoor getaway."
        },
        {
            name: "Best indoor camping places near pimpri chinchwad",
            description: "Those looking for the Best indoor camping places near Pimpri Chinchwad can explore options that provide a balance between camping-style recreation, comfortable surroundings, and convenient access from the city."
        },
        {
            name: "1 day camping near pune",
            description: "A 1 day camping near Pune experience is a convenient option for visitors who want outdoor recreation, nature exploration, farm activities, and countryside relaxation without planning a long trip."
        },
        {
            name: "best camping places near pune",
            description: "Visitors comparing the best camping places near Pune can enjoy a nature-focused farm environment with opportunities for group activities, outdoor leisure, traditional food, and peaceful countryside experiences."
        },
        {
            name: "overnight camping near pune",
            description: "Overnight camping near Pune gives travellers the opportunity to extend their countryside experience into the evening and enjoy a slower, more immersive break surrounded by nature."
        },
        {
            name: "trekking and camping near pune",
            description: "Trekking and camping near Pune are popular choices for adventure lovers who want to combine outdoor exploration with a relaxing stay in a natural environment. Farm trails and countryside walks can add an active element to the experience."
        },
        {
            name: "camping near pune for family",
            description: "Camping near Pune for family can be an enjoyable way to spend quality time together through nature walks, outdoor recreation, farm exploration, group activities, and peaceful countryside leisure."
        },
        {
            name: "camping near pune for couples",
            description: "Camping near Pune for couples offers an opportunity to step away from busy routines and enjoy quiet natural surroundings, outdoor leisure, scenic moments, and a relaxed countryside atmosphere together."
        }
    ],

    tableData: [
        ["Camping sites near pune"],
        ["best camping places near pune"],
        ["Pune camping places"],
        ["Best place for camping near pune"],
        ["camping location near pune"],
        ["Camping spots near pune"],
        ["places for camping in pune"],
        ["Best camping spots near pune"],
        ["camping places near pimpri chinchwad"],
        ["Indoor camping places near pimpri chinchwad"],
        ["Best indoor camping places near pimpri chinchwad"],
        ["1 day camping near pune"],
        ["best camping places near pune"],
        ["overnight camping near pune"],
        ["trekking and camping near pune"],
        ["camping near pune for family"],
        ["camping near pune for couples"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Camping",
            WhyChoosedescription: "The farm environment provides a refreshing alternative to crowded urban destinations, allowing visitors to relax in open surroundings and enjoy a slower pace during their camping getaway."
        },
        {
            WhyChooseheading: "Suitable for Families",
            WhyChoosedescription: "Families can combine camping with nature exploration, outdoor recreation, farm activities, and shared meals, creating an enjoyable experience for both children and adults."
        },
        {
            WhyChooseheading: "Relaxing Couple Getaway",
            WhyChoosedescription: "Couples can enjoy a quieter outdoor experience surrounded by nature, making the countryside setting suitable for conversations, photography, evening leisure, and quality time together."
        },
        {
            WhyChooseheading: "Day and Overnight Experiences",
            WhyChoosedescription: "Visitors can plan a shorter outdoor outing or extend their experience into an overnight camping stay depending on their travel plans, making the destination suitable for different types of getaways."
        },
        {
            WhyChooseheading: "Camping with Farm Experiences",
            WhyChoosedescription: "The combination of camping and agro-tourism creates a more engaging experience where visitors can explore agricultural surroundings and rural activities instead of simply staying at a conventional campsite."
        },
        {
            WhyChooseheading: "Outdoor Recreation for Groups",
            WhyChoosedescription: "Friends, families, and groups can enjoy open spaces for recreation, games, exploration, photography, and shared activities, making the countryside environment suitable for group camping plans."
        },
        {
            WhyChooseheading: "Nature-Focused Experience",
            WhyChoosedescription: "Fresh air, greenery, open farm landscapes, and peaceful surroundings make the experience attractive to visitors who want to reconnect with nature while taking a break from their regular routine."
        },
        {
            WhyChooseheading: "Memorable Weekend Escape",
            WhyChoosedescription: "Camping, farm exploration, traditional food, outdoor activities, and countryside relaxation can be combined into a memorable short getaway for visitors travelling from Pune and nearby areas."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good option among camping places near Pune?",
        answer: "Om Agri Tourism offers a peaceful farm environment that can be suitable for visitors looking for a nature-oriented camping experience near Pune. The open surroundings, greenery and countryside atmosphere provide a refreshing setting for spending quality time away from the city."
    },
    {
        question: "What can visitors do at Om Agri Tourism during a camping trip?",
        answer: "A visit to Om Agri Tourism can include several outdoor experiences along with time spent in the natural surroundings. Guests can enjoy activities such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching during their countryside outing."
    },
    {
        question: "Is Om Agri Tourism suitable for a family camping outing near Pune?",
        answer: "Families can enjoy a relaxed outdoor experience at Om Agri Tourism with activities that appeal to both children and adults. The farm surroundings, greenery, bird watching and recreational options create opportunities for families to spend meaningful time together in a peaceful setting."
    },
    {
        question: "Can friends visit Om Agri Tourism for a camping experience near Pune?",
        answer: "Friends looking for an outdoor getaway can consider Om Agri Tourism for a countryside experience filled with recreational activities. Boating, swimming, horse riding and traditional farm rides allow groups to stay active while enjoying the calm atmosphere away from Pune's busy surroundings."
    },
    {
        question: "What makes Om Agri Tourism different from regular camping places near Pune?",
        answer: "Om Agri Tourism combines the feel of a rural farm visit with nature-based recreation and traditional countryside activities. Instead of focusing only on outdoor stays, visitors can also experience farm surroundings, bird watching, boating, bull cart rides, tractor rides and homemade food."
    },
    {
        question: "Can children enjoy an outdoor camping-style outing at Om Agri Tourism?",
        answer: "Children can enjoy the open farm surroundings and a variety of suitable outdoor activities at Om Agri Tourism. Tractor rides, bird watching, boating and other countryside experiences can make the outing interesting while giving young visitors a chance to explore a setting different from their usual city environment."
    },
    {
        question: "Is Om Agri Tourism suitable for a weekend nature getaway near Pune?",
        answer: "Those planning a weekend break can enjoy the peaceful countryside atmosphere at Om Agri Tourism. Green surroundings, outdoor recreation and traditional farm experiences offer a refreshing change from everyday routines and provide a comfortable setting for families and groups."
    },
    {
        question: "Can visitors enjoy homemade food during an outing at Om Agri Tourism?",
        answer: "Homemade food adds a traditional touch to the countryside experience at Om Agri Tourism. Guests can relax after enjoying outdoor activities and experience farm-style hospitality while spending time in the peaceful surroundings."
    },
    {
        question: "Is Om Agri Tourism suitable for couples looking for a peaceful outdoor getaway near Pune?",
        answer: "Couples can enjoy a relaxed day surrounded by greenery at Om Agri Tourism. Bird watching, boating, horse riding and quiet time in the farm environment provide opportunities to enjoy a slower countryside experience away from the city's usual pace."
    },
    {
        question: "Why consider Om Agri Tourism when searching for camping places near Pune?",
        answer: "Om Agri Tourism offers a nature-focused countryside experience with greenery, farm surroundings, outdoor activities and traditional rural experiences. Visitors can combine relaxation with swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food for a memorable outing."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Akshay Deshmukh",
        feedback:
            "Our group wanted an outdoor break near Pune, and Om Agri Tourism gave us a refreshing countryside experience. We enjoyed boating, swimming and the tractor ride, while the peaceful farm surroundings made the day even better. It was a great change from our usual weekend plans.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Riya Joshi",
        feedback:
            "Om Agri Tourism was a lovely choice for our nature outing. The greenery, bird watching and horse riding made the visit enjoyable, and we also liked the traditional farm atmosphere. The homemade food was a nice addition and made our day feel complete.",
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
  "name": "Camping Places Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/camping-places-near-pune.webp",
  "description": "Om Agro Tourism offers a refreshing countryside setting for visitors searching for Camping Places Near Pune and looking for an outdoor experience surrounded by nature, open spaces and peaceful rural surroundings. Camping sites near Pune can be an enjoyable choice for families, couples, friends, students, corporate groups and adventure enthusiasts who want to spend quality time away from the busy city environment. Visitors comparing the best camping places near Pune can consider a destination that combines agro-tourism, nature and outdoor recreation in a relaxed atmosphere. People searching for Pune camping places or the Best place for camping near Pune can enjoy a memorable outdoor outing where fresh surroundings and countryside landscapes create a refreshing experience. A camping location near Pune can be suitable for weekend plans, group gatherings, family outings and nature-focused recreational activities. Visitors looking for Camping spots near Pune can also experience the charm of rural surroundings while spending time with friends or family. People searching for places for camping in Pune and the Best camping spots near Pune can consider Om Agro Tourism as an alternative to conventional city recreation, especially for those who want an open and peaceful environment. For visitors from Pimpri-Chinchwad, camping places near Pimpri Chinchwad can provide a convenient option for a short outdoor escape. Indoor camping places near Pimpri Chinchwad and people searching for the Best indoor camping experience can also consider a comfortable agro-tourism environment where camping-style recreation can be combined with safety, group interaction and countryside leisure. Om Agro Tourism can suit families with children, couples seeking a relaxed nature outing, friends planning a weekend gathering and corporate teams organizing informal outdoor activities. The destination can also be considered for school groups and organized recreational visits. With its greenery, agricultural surroundings and open spaces, Om Agro Tourism provides a memorable setting for camping, nature experiences, group recreation and weekend outings near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/camping-places-near-pune"
  }
};



    return (
        <div>


<Helmet>
  <title>
    Camping Places Near Pune | Best Camping Spots, Sites & Outdoor Experience | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers a peaceful camping experience near Pune with countryside surroundings, outdoor recreation and group-friendly camping spots for families and friends."
  />

  <meta
    name="keywords"
    content="Camping Places Near Pune, Camping sites near Pune, best camping places near Pune, Pune camping places, Best place for camping near Pune, camping location near Pune, Camping spots near Pune, places for camping in Pune, Best camping spots near Pune, camping places near Pimpri Chinchwad, Indoor camping places near Pimpri Chinchwad, Best indoor camping near Pimpri Chinchwad, camping near Pune, camping site near Pune, camping spots in Pune, camping destinations near Pune, camping location in Pune, best camping site near Pune, best camping location near Pune, outdoor camping near Pune, nature camping near Pune, nature camping sites near Pune, family camping near Pune, family camping places near Pune, camping for couples near Pune, couple camping near Pune, friends camping near Pune, group camping near Pune, corporate camping near Pune, corporate camping places near Pune, team camping near Pune, school camping near Pune, student camping near Pune, one day camping near Pune, weekend camping near Pune, weekend camping places near Pune, overnight camping near Pune, camping resort near Pune, camping resort near Pimpri Chinchwad, camping destination near Pimpri Chinchwad, camping near Pimpri Chinchwad, camping spots near Pimpri Chinchwad, camping places near Pune city, camping near Hadapsar Pune, camping near Kharadi Pune, camping near Wagholi Pune, camping near Nagar Road Pune, camping near Alandi Pune, indoor camping near Pune, indoor camping places near Pune, best indoor camping near Pune, indoor camping near Pimpri Chinchwad, indoor camping destination near Pune, safe camping near Pune, camping with family near Pune, camping for groups near Pune, adventure camping near Pune, agro tourism camping near Pune, farm camping near Pune, countryside camping near Pune, nature stay camping near Pune, peaceful camping near Pune, camping picnic near Pune, camping and picnic near Pune, outdoor adventure near Pune, best place for camping near Pune"
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
                            <img src='/images/keyword/17.jpg' alt='img' className='img-fluid' />
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

export default CampningPlacesNearPune;