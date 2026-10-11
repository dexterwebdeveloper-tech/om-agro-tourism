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

function ResortNearPimpriChinchwad() {


const cardData = {
    keyword: "Resort Near Mumbai",
    headingDescription: "Looking for a Resort Near Mumbai for a peaceful family holiday, romantic couple getaway, overnight stay, one-day picnic, or activity-filled weekend break? Om Agro Tourism offers a refreshing countryside setting where visitors can enjoy nature, open farm surroundings, outdoor recreation, traditional rural experiences, and quality time away from the busy city environment. The destination is suitable for families, couples, friends, corporate groups, and visitors searching for a comfortable resort experience with activities and leisure options. Whether you are planning a one-day picnic resort near Mumbai, a one-night stay, a nature-focused escape, or an enjoyable weekend with family, the farm-based atmosphere provides a relaxed alternative to crowded city resorts. With opportunities for outdoor games, farm exploration, water recreation, traditional food experiences, and peaceful countryside relaxation, it can be considered for different types of short breaks from Mumbai.",

    topPlaces: [
        {
            title: "Farm Nature Retreat",
            description: "Enjoy a relaxing break surrounded by open farmland, greenery, fresh air, and peaceful countryside landscapes away from the busy atmosphere of Mumbai."
        },
        {
            title: "Family Picnic Experience",
            description: "Spend quality time with family through outdoor recreation, farm surroundings, group activities, and a comfortable day-out atmosphere suitable for different age groups."
        },
        {
            title: "Countryside Overnight Stay",
            description: "Experience a refreshing overnight getaway where visitors can slow down, enjoy the natural surroundings, and spend more time exploring the peaceful rural environment."
        },
        {
            title: "Outdoor Adventure Activities",
            description: "Add more excitement to your resort visit with outdoor games, recreational activities, and open-space experiences that are suitable for friends, families, and groups."
        },
        {
            title: "Traditional Village Experience",
            description: "Discover the charm of rural Maharashtra through farm surroundings, traditional lifestyle experiences, countryside activities, and a slower pace of holidaying."
        },
        {
            title: "Refreshing Water Recreation",
            description: "Combine your resort outing with refreshing water-based leisure and enjoy a fun-filled break that adds variety to a family or group picnic."
        },
        {
            title: "Nature Photography Walk",
            description: "Explore the scenic farm environment and capture greenery, open landscapes, rural settings, and memorable moments during a peaceful countryside walk."
        },
        {
            title: "Traditional Maharashtrian Food",
            description: "Make the getaway more memorable with traditional food experiences that complement the relaxed farm atmosphere and provide a taste of local culinary culture."
        },
        {
            title: "Couples Countryside Escape",
            description: "Enjoy a quieter setting with your partner, away from the city's daily routine, with nature, open spaces, leisure activities, and peaceful surroundings."
        },
        {
            title: "One-Day Group Outing",
            description: "Plan a convenient day outing for friends, relatives, office teams, or larger groups with a combination of recreation, food, nature, and countryside activities."
        }
    ],

    services: [
        {
            name: "Best Resorts near mumbai",
            description: "Enjoy a refreshing resort-style getaway near Mumbai with peaceful surroundings, recreational activities, family-friendly experiences, and a relaxed countryside atmosphere."
        },
        {
            name: "pet friendly resorts near mumbai",
            description: "Choose a nature-oriented getaway where visitors looking for pet-friendly resort experiences can enjoy open surroundings and a more relaxed environment away from the city."
        },
        {
            name: "luxury resorts near mumbai",
            description: "Experience a comfortable leisure break with attractive surroundings, recreational options, relaxing spaces, and a memorable countryside atmosphere near Mumbai."
        },
        {
            name: "Resort mumbai",
            description: "Plan a convenient resort getaway from Mumbai with opportunities for relaxation, outdoor recreation, nature experiences, and quality time with family or friends."
        },
        {
            name: "resorts near mumbai for family",
            description: "A family-oriented resort experience can bring together open spaces, outdoor activities, nature exploration, food experiences, and enjoyable moments for children and adults."
        },
        {
            name: "resort near mumbai for 1 night stay",
            description: "Plan a one-night escape from Mumbai and enjoy additional time for countryside exploration, leisure activities, evening relaxation, and a peaceful overnight experience."
        },
        {
            name: "Best resort in mumbai",
            description: "Explore a convenient resort-style destination for short breaks, family outings, group recreation, nature experiences, and relaxing time away from the city's busy routine."
        },
        {
            name: "resorts near mumbai for couples",
            description: "Couples can enjoy a peaceful change of surroundings with nature walks, quiet leisure spaces, outdoor experiences, and quality time together."
        },
        {
            name: "adventure resorts near mumbai",
            description: "Add excitement to your getaway through outdoor recreation, adventure-oriented activities, group games, and open countryside experiences suitable for active visitors."
        },
        {
            name: "Good resorts near mumbai",
            description: "Find a relaxing resort experience near Mumbai that combines nature, recreation, food, outdoor activities, and comfortable time away from the urban environment."
        },
        {
            name: "mumbai beach resort",
            description: "For visitors comparing leisure destinations around Mumbai, a countryside resort experience provides an alternative setting with greenery, farm activities, recreation, and peaceful surroundings."
        },
        {
            name: "Resorts in mumbai for couples",
            description: "Couples looking for a short escape can enjoy a slower countryside setting with outdoor leisure, nature experiences, and opportunities to spend uninterrupted quality time together."
        },
        {
            name: "best resorts near mumbai for family",
            description: "Families can enjoy a combination of nature, outdoor recreation, food, group activities, and spacious surroundings designed to make short getaways more enjoyable."
        },
        {
            name: "best nature resorts near mumbai",
            description: "Reconnect with nature through farm landscapes, fresh surroundings, countryside walks, outdoor recreation, and a peaceful break from Mumbai's fast-paced lifestyle."
        },
        {
            name: "nature resorts near mumbai",
            description: "Enjoy a nature-focused resort experience with greenery, open spaces, farm surroundings, outdoor activities, and a calm environment for relaxation."
        },
        {
            name: "best resorts near mumbai for couples",
            description: "A countryside setting offers couples an opportunity to relax together, enjoy nature, participate in leisure activities, and create memorable moments away from everyday routines."
        },
        {
            name: "One day picnic resorts near mumbai",
            description: "Plan a convenient one-day picnic with family, friends, or colleagues and combine food, outdoor recreation, nature exploration, and relaxing countryside experiences."
        },
        {
            name: "resorts near mumbai for overnight stay",
            description: "An overnight resort getaway gives visitors more time to experience the surroundings, enjoy evening leisure, participate in activities, and relax without rushing back to the city."
        },
        {
            name: "resort with activities near mumbai",
            description: "Choose an activity-focused resort experience with outdoor games, nature exploration, recreational options, and engaging activities suitable for families and groups."
        },
        {
            name: "private pool resorts near mumbai",
            description: "Visitors searching for a more private leisure experience can consider resort options where poolside relaxation and peaceful surroundings add comfort to a short getaway."
        },
        {
            name: "Luxury stay near mumbai",
            description: "Enjoy a premium-style countryside break with relaxing surroundings, recreational experiences, comfortable leisure time, and a memorable change from the city environment."
        },
        {
            name: "budget resorts near mumbai",
            description: "Plan a value-focused getaway near Mumbai with enjoyable outdoor activities, nature experiences, food options, and a peaceful resort atmosphere without making the trip unnecessarily complicated."
        }
    ],

    tableData: [
        [" Best Resorts near mumbai"],
        ["pet friendly resorts near mumbai"],
        ["luxury resorts near mumbai"],
        ["Resort mumbai"],
        ["resorts near mumbai for family"],
        ["resort near mumbai for 1 night stay"],
        ["Best resort in mumbai"],
        ["resorts near mumbai for couples"],
        ["adventure resorts near mumbai"],
        ["Good resorts near mumbai"],
        ["mumbai beach resort"],
        ["Resorts in mumbai for couples"],
        ["best resorts near mumbai for family"],
        ["best nature resorts near mumbai"],
        ["nature resorts near mumbai"],
        ["best resorts near mumbai for couples"],
        ["One day picnic resorts near mumbai"],
        ["resorts near mumbai for overnight stay"],
        ["resort with activities near mumbai"],
        ["private pool resorts near mumbai"],
        ["Luxury stay near mumbai"],
        ["budget resorts near mumbai"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Environment",
            WhyChoosedescription: "The farm-oriented surroundings create a refreshing atmosphere away from Mumbai's crowded urban landscape, making the destination suitable for relaxation, family time, and short breaks."
        },
        {
            WhyChooseheading: "Family-Friendly Resort Experience",
            WhyChoosedescription: "Families can enjoy open spaces, recreational activities, nature experiences, food, and group-friendly experiences that make the outing enjoyable for both children and adults."
        },
        {
            WhyChooseheading: "Suitable for Couples",
            WhyChoosedescription: "Couples can choose a quieter countryside setting for quality time together, nature walks, relaxed conversations, outdoor leisure, and a refreshing change from their regular routine."
        },
        {
            WhyChooseheading: "Day Picnic and Overnight Options",
            WhyChoosedescription: "The destination works for both quick one-day outings and longer stays, giving visitors flexibility when planning family picnics, weekend breaks, or overnight getaways."
        },
        {
            WhyChooseheading: "Activities Beyond a Typical Stay",
            WhyChoosedescription: "Visitors can combine relaxation with outdoor games, farm exploration, nature activities, water recreation, and other experiences instead of spending the entire getaway indoors."
        },
        {
            WhyChooseheading: "Nature and Rural Experiences",
            WhyChoosedescription: "Green farm surroundings and rural experiences provide an opportunity to reconnect with nature, discover countryside life, and enjoy a slower and more refreshing style of holiday."
        },
        {
            WhyChooseheading: "Good for Groups and Gatherings",
            WhyChoosedescription: "Families, friends, office teams, and other groups can use the open environment for shared activities, meals, recreation, celebrations, and memorable group outings."
        },
        {
            WhyChooseheading: "Convenient Short Getaway from Mumbai",
            WhyChoosedescription: "For people wanting to step away from Mumbai without planning a long vacation, a nearby countryside resort experience provides a practical way to enjoy nature, recreation, and relaxation in a shorter trip."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good resort near Mumbai?",
        answer: "Om Agri Tourism offers a peaceful countryside environment for visitors looking for a relaxing resort-style day outing near Mumbai. Surrounded by greenery and farm landscapes, the destination combines outdoor recreation, rural experiences and homemade food for families, friends and groups."
    },
    {
        question: "What activities can visitors enjoy at Om Agri Tourism near Mumbai?",
        answer: "Guests at Om Agri Tourism can enjoy a range of outdoor and farm-based activities during their visit. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide different ways to experience the countryside and make the outing more enjoyable."
    },
    {
        question: "Is Om Agri Tourism suitable for a family outing near Mumbai?",
        answer: "Families can spend quality time at Om Agri Tourism in a calm farm environment away from the city's busy routine. Children and adults can participate in suitable activities, explore the greenery and enjoy a relaxed day together in the countryside."
    },
    {
        question: "Can friends plan a weekend outing at Om Agri Tourism?",
        answer: "Friends looking for a refreshing break can enjoy an outdoor day at Om Agri Tourism. Activities such as boating, swimming, horse riding and traditional farm rides provide opportunities for groups to have fun while the peaceful surroundings create a comfortable setting for relaxation."
    },
    {
        question: "Does Om Agri Tourism offer a natural environment near Mumbai?",
        answer: "The farm setting at Om Agri Tourism provides visitors with greenery, open surroundings and a peaceful countryside atmosphere. Bird watching and outdoor activities allow guests to spend more time around nature while taking a break from the urban environment."
    },
    {
        question: "Can children enjoy a visit to Om Agri Tourism?",
        answer: "Children can enjoy several outdoor experiences at Om Agri Tourism, including boating, bird watching and tractor rides. Exploring the farm surroundings and experiencing traditional rural activities can make the visit engaging and different from a regular city outing."
    },
    {
        question: "Is Om Agri Tourism suitable for couples looking for a peaceful resort near Mumbai?",
        answer: "Couples can enjoy a relaxed countryside experience at Om Agri Tourism surrounded by greenery and farm landscapes. Horse riding, boating and bird watching can add enjoyable moments to the visit, while the peaceful environment provides a pleasant setting for spending time together."
    },
    {
        question: "Can groups enjoy homemade food at Om Agri Tourism?",
        answer: "Homemade food adds a traditional countryside touch to the experience at Om Agri Tourism. Groups can take a break between outdoor activities, enjoy a satisfying meal and continue spending time together in the peaceful farm surroundings."
    },
    {
        question: "Is Om Agri Tourism suitable for a one day trip from Mumbai?",
        answer: "Visitors planning a one day countryside escape can consider Om Agri Tourism for a combination of relaxation and outdoor recreation. The farm environment, greenery, traditional activities and homemade food provide plenty of opportunities to make a day away from Mumbai enjoyable."
    },
    {
        question: "Why choose Om Agri Tourism when searching for a resort near Mumbai?",
        answer: "Om Agri Tourism brings together farm experiences, greenery, outdoor recreation and traditional rural activities in a peaceful countryside setting. Visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food while spending quality time away from the city."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Amit Shinde",
        feedback:
            "Our family had a relaxing day at Om Agri Tourism. The children enjoyed boating and the tractor ride, while we spent time appreciating the greenery and peaceful farm surroundings. The homemade food and traditional activities made the outing feel different from a regular resort visit.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Snehal Patil",
        feedback:
            "We visited Om Agri Tourism with a group of friends and really enjoyed the outdoor activities. Horse riding, bird watching and the bull cart ride gave us plenty to do, and the calm countryside atmosphere was perfect for taking a break from Mumbai's busy routine.",
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
  "name": "Resort Near Mumbai",
  "image": "https://www.omagrotourism.com/assets/images/resort-near-mumbai.webp",
  "description": "Om Agro Tourism offers a peaceful Resort Near Mumbai experience for families, couples, friends, corporate groups and visitors looking for a refreshing escape from the city's fast-paced routine. People searching for Best Resorts near Mumbai can consider a countryside destination where greenery, open spaces, agro-tourism experiences and recreational opportunities create a relaxing atmosphere for short breaks and extended visits. Visitors looking for pet friendly resorts near Mumbai can also consider a spacious natural environment where families travelling with pets can enjoy a more open and comfortable outing, subject to applicable property guidelines. Luxury resorts near Mumbai are often preferred by guests who want a comfortable retreat away from crowded city surroundings, while Om Agro Tourism adds a distinctive rural and nature-oriented character to the overall experience. Those searching for Resort Mumbai or a resort destination around Mumbai can plan family outings, weekend escapes, celebrations and leisure trips in a peaceful countryside setting. Resorts near Mumbai for family can provide an enjoyable environment for parents, children and extended family members to spend quality time together. Guests planning a resort near Mumbai for 1 night stay can enjoy a short overnight break surrounded by nature, with time for relaxation and outdoor recreation. Visitors comparing the Best resort in Mumbai and nearby areas may prefer a destination outside the busy urban environment where they can experience a quieter atmosphere and more open surroundings. Resorts near Mumbai for couples can be suitable for partners looking for a relaxed getaway, private quality time and a change from everyday city life. Adventure resorts near Mumbai attract visitors who enjoy outdoor recreation, nature-based experiences and activity-oriented outings, while families can choose a more relaxed pace according to their preferences. People searching for Good resorts near Mumbai can consider Om Agro Tourism for its combination of countryside charm, agricultural surroundings, recreational possibilities and group-friendly spaces. The destination is suitable for weekend stays, one-night breaks, family picnics, couple outings, corporate gatherings, school groups and friends' get-togethers. Seasonal visits can bring different experiences, from lush monsoon greenery to pleasant winter weather and refreshing summer countryside mornings and evenings. Om Agro Tourism provides an alternative to conventional city resorts by bringing together agro-tourism, nature, leisure and rural experiences in one welcoming destination near Mumbai.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/resort-near-mumbai"
  }
};




    return (
        <div>


<Helmet>
  <title>
    Resort Near Mumbai | Family, Couple, Luxury & Adventure Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism is a peaceful resort near Mumbai for families, couples and groups, offering nature, agro-tourism, activities and relaxing stay experiences."
  />

  <meta
    name="keywords"
    content="Resort Near Mumbai, Best Resorts near Mumbai, pet friendly resorts near Mumbai, luxury resorts near Mumbai, Resort Mumbai, resorts near Mumbai for family, resort near Mumbai for 1 night stay, Best resort in Mumbai, resorts near Mumbai for couples, adventure resorts near Mumbai, Good resorts near Mumbai, best resort near Mumbai, resorts around Mumbai, resorts close to Mumbai, resorts near Mumbai city, best resorts around Mumbai, family resorts near Mumbai, family friendly resorts near Mumbai, resorts near Mumbai for weekend, weekend resorts near Mumbai, one day resort near Mumbai, one day resorts near Mumbai, resorts near Mumbai with activities, resorts near Mumbai for outing, resorts near Mumbai for family outing, resorts near Mumbai for group, group resorts near Mumbai, resorts near Mumbai for friends, couple resorts near Mumbai, romantic resorts near Mumbai, resort for couples near Mumbai, luxury resorts around Mumbai, luxury resort near Mumbai, premium resorts near Mumbai, nature resorts near Mumbai, nature resort near Mumbai, agro tourism resort near Mumbai, agro tourism near Mumbai, agri tourism resort near Mumbai, farm resort near Mumbai, countryside resort near Mumbai, rural resort near Mumbai, adventure resort near Mumbai, best adventure resorts near Mumbai, adventure resorts around Mumbai, activity resorts near Mumbai, resorts with activities near Mumbai, resorts for corporate outing near Mumbai, corporate resorts near Mumbai, team outing resorts near Mumbai, corporate team outing near Mumbai, pet friendly resort near Mumbai, pet friendly resorts around Mumbai, resort for 1 night stay near Mumbai, overnight resort near Mumbai, one night stay resort near Mumbai, resort for weekend stay near Mumbai, family weekend resort near Mumbai, best family resort near Mumbai, good family resorts near Mumbai, best luxury resort near Mumbai, best couple resort near Mumbai, best nature resort near Mumbai, best resort for weekend near Mumbai, picnic resort near Mumbai, picnic resorts near Mumbai, day outing resort near Mumbai, resort with outdoor activities near Mumbai, resort for birthday near Mumbai, resort for family gathering near Mumbai, best getaway near Mumbai, weekend getaway resort near Mumbai"
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
                            <img src='/images/keyword/23.jpg' alt='img' className='img-fluid' />
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

export default ResortNearPimpriChinchwad;