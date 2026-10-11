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

function Marriagehallinpune() {


const cardData = {
    keyword: "Marriage Hall in Pune",
    headingDescription: "Om Agro Tourism offers a peaceful farm-based alternative for families searching for a marriage hall or wedding venue in Pune. The natural greenery, open surroundings, countryside atmosphere, homemade food, and recreational attractions provide a refreshing setting for marriage functions, wedding gatherings, family celebrations, and photography. Couples and families can enjoy a distinctive celebration away from the crowded city environment while creating memorable experiences for their guests.",
    topPlaces: [
        {
            title: "Swimming Pool",
            description: "Our spacious swimming pool provides guests with a refreshing place to relax and unwind during wedding celebrations. Surrounded by greenery, it adds a pleasant recreational option for families and groups."
        },
        {
            title: "Tasty home made food",
            description: "Enjoy authentic homemade food prepared with fresh ingredients and traditional flavors. The farm setting creates a warm and relaxed dining experience for wedding guests and family gatherings."
        },
        {
            title: "Bull Cart Ride",
            description: "Experience the charm of traditional rural life with a leisurely bull cart ride around the farm. It offers wedding guests a unique countryside activity and an enjoyable way to explore the surroundings."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Explore the working farm through guided tours and workshops where visitors can learn about planting, harvesting, agricultural practices, and the daily activities involved in farm life."
        },
        {
            title: "Boating",
            description: "Relax with a peaceful boating experience in tranquil surroundings and enjoy quality time with family and friends while appreciating the natural scenery around the destination."
        },
        {
            title: "Tractor Ride",
            description: "Hop on a tractor ride and explore the farm in a unique way. The experience gives wedding guests an opportunity to discover the agricultural surroundings while enjoying a fun countryside activity."
        },
        {
            title: "Horse Riding",
            description: "Enjoy a pleasant horse riding experience through the scenic farm landscape. It adds a charming outdoor activity for guests looking to experience the countryside during their visit."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Guests can enjoy different indoor and outdoor games that encourage friendly interaction, recreation, and entertainment, making the destination suitable for families and groups."
        },
        {
            title: "Birds Watching",
            description: "Spend peaceful moments observing birds in their natural surroundings. The greenery and quiet farm environment provide a relaxing nature experience for wedding guests."
        },
        {
            title: "Water Park Activities",
            description: "Guests can enjoy refreshing water-based recreational experiences that add fun and entertainment to family celebrations and extended wedding gatherings at the destination."
        }
    ],
    services: [
        {
            name: "Marriage hall in pune",
            description: "Om Agro Tourism offers a peaceful farm-based alternative for marriage celebrations, providing greenery, open surroundings, homemade food, recreational attractions, and a refreshing countryside atmosphere."
        },
        {
            name: "Banquet halls in pune",
            description: "Families comparing banquet halls in Pune can consider a natural farm environment where marriage functions, family gatherings, meals, outdoor activities, and photography can be planned in a relaxed setting."
        },
        {
            name: "Wedding venues in pune",
            description: "The farm-based destination provides a distinctive wedding venue experience with green surroundings, open spaces, traditional charm, recreational attractions, and opportunities for memorable celebrations."
        },
        {
            name: "Wedding halls in pune",
            description: "Couples looking for wedding halls in Pune can explore an alternative countryside setting where celebrations can be combined with natural beauty, outdoor experiences, homemade food, and family gatherings."
        },
        {
            name: "Low budget wedding halls in pune",
            description: "Families planning a budget-conscious wedding can consider a farm setting where natural scenery and open surroundings can reduce the need for excessive decoration while maintaining an attractive celebration atmosphere."
        },
        {
            name: "Banquet halls in pune with price",
            description: "Wedding arrangements can be customized according to guest count, functions, food, decorations, and other event requirements, allowing families to plan their celebration around their preferred budget."
        },
        {
            name: "Best banquet halls in pune",
            description: "For families comparing banquet-style wedding venues, Om Agro Tourism offers a distinctive farm environment with greenery, outdoor spaces, homemade food, and recreational experiences for guests."
        },
        {
            name: "Wedding venues in pune with price",
            description: "The overall wedding arrangement can be planned according to the selected functions, guest requirements, food preferences, decorations, and other services needed for the celebration."
        },
        {
            name: "Budget wedding venues in pune",
            description: "A farm-based venue can be suitable for families looking to manage wedding expenses while making use of natural greenery, open spaces, countryside scenery, and personalized arrangements."
        },
        {
            name: "Wedding lawns in pune",
            description: "The open green farm surroundings can provide a pleasant lawn-style setting for ceremonies, wedding decorations, family gatherings, photography, and outdoor celebrations."
        },
        {
            name: "Wedding banquet halls pune",
            description: "Couples can consider the agro-tourism setting as an alternative to conventional banquet halls, especially when they prefer natural surroundings, open spaces, recreational activities, and a relaxed atmosphere."
        },
        {
            name: "Best wedding venues in pune",
            description: "Om Agro Tourism provides a distinctive wedding setting where couples can combine their celebration with greenery, farm experiences, outdoor functions, traditional food, and memorable guest activities."
        },
        {
            name: "Wedding halls in pune with rates",
            description: "Families can discuss their specific wedding requirements, guest numbers, food arrangements, functions, and other facilities to plan an event that matches their expected spending range."
        },
        {
            name: "Wedding venues near pune",
            description: "A peaceful countryside venue near Pune provides an opportunity to celebrate away from busy city surroundings while enjoying greenery, open spaces, farm experiences, and family-oriented recreation."
        },
        {
            name: "5 Star wedding venues in pune",
            description: "Couples seeking an elegant celebration can create a refined wedding atmosphere through thoughtful decorations, personalized arrangements, natural scenery, comfortable guest experiences, and well-planned outdoor functions."
        },
        {
            name: "Banquet hall in baner",
            description: "For families comparing wedding venues around Baner and Pune, a farm destination provides an alternative celebration concept centered on greenery, open surroundings, traditional experiences, and recreational activities."
        },
        {
            name: "Banquet halls in pune city",
            description: "Families looking beyond city banquet halls can explore a peaceful agro-tourism setting where wedding celebrations can include outdoor functions, natural scenery, food, photography, and guest activities."
        },
        {
            name: "Banquet halls in pune for wedding",
            description: "The farm environment provides a distinctive option for wedding celebrations, offering open spaces, greenery, homemade food, recreational attractions, and a relaxed atmosphere for family and friends."
        },
        {
            name: "Banquet halls in pune with rates",
            description: "Wedding planning can be tailored around the number of guests, selected functions, food requirements, decorations, and other event priorities to help families organize their celebration within their planned budget."
        },
        {
            name: "Marriage Hall in Pune",
            description: "Om Agro Tourism offers a refreshing alternative for marriage celebrations, combining natural surroundings, open spaces, traditional countryside charm, homemade food, and recreational opportunities for guests."
        },
        {
            name: "Best Marriage Hall in Pune",
            description: "Families can enjoy a memorable marriage celebration in a peaceful farm setting where wedding functions, family gatherings, meals, photography, and recreational activities can be brought together."
        },
        {
            name: "Marriage Halls in Pune",
            description: "The destination provides an alternative to conventional marriage halls for families who want a wedding celebration surrounded by greenery, open spaces, natural beauty, and a relaxed countryside atmosphere."
        },
        {
            name: "Wedding Hall in Pune",
            description: "Couples looking for a wedding hall alternative can consider the farm-based setting for ceremonies, receptions, family functions, outdoor arrangements, and memorable photography."
        },
        {
            name: "Best Wedding Hall in Pune",
            description: "A natural farm environment can give wedding celebrations a distinctive character, allowing couples to combine traditional functions with greenery, outdoor experiences, homemade food, and family time."
        },
        {
            name: "Wedding Halls in Pune",
            description: "Families comparing wedding halls can explore a countryside celebration environment where guests can enjoy wedding functions along with recreational activities and peaceful natural surroundings."
        },
        {
            name: "Marriage Hall Near Me in Pune",
            description: "Families searching for a convenient marriage celebration option around Pune can consider a farm-based destination that provides a peaceful environment for functions, meals, gatherings, and guest recreation."
        },
        {
            name: "Wedding Hall Near Me in Pune",
            description: "Couples looking for a wedding venue around Pune can explore the countryside setting for ceremonies, family celebrations, photography, outdoor activities, and a relaxed wedding atmosphere."
        },
        {
            name: "Affordable Marriage Hall in Pune",
            description: "The farm setting can support practical wedding planning by allowing families to use natural surroundings, open spaces, and personalized arrangements while managing their overall celebration requirements."
        },
        {
            name: "Budget Marriage Hall in Pune",
            description: "Couples and families planning a budget-friendly marriage can customize their functions, food, decorations, and guest arrangements while enjoying the natural charm of a farm-based destination."
        }
    ],
    tableData: [
        ["Marriage hall in pune"],
        ["Banquet halls in pune"],
        ["Wedding venues in pune"],
        ["Wedding halls in pune"],
        ["Low budget wedding halls in pune"],
        ["Banquet halls in pune with price"],
        ["Best banquet halls in pune"],
        ["Wedding venues in pune with price"],
        ["Budget wedding venues in pune"],
        ["Wedding lawns in pune"],
        ["Wedding banquet halls pune"],
        ["Best wedding venues in pune"],
        ["Wedding halls in pune with rates"],
        ["Wedding venues near pune"],
        ["5 Star wedding venues in pune"],
        ["Banquet hall in baner"],
        ["Banquet halls in pune city"],
        ["Banquet halls in pune for wedding"],
        ["Banquet halls in pune with rates"],
        ["Marriage Hall in Pune"],
        ["Best Marriage Hall in Pune"],
        ["Marriage Halls in Pune"],
        ["Wedding Hall in Pune"],
        ["Best Wedding Hall in Pune"],
        ["Wedding Halls in Pune"],
        ["Marriage Hall Near Me in Pune"],
        ["Wedding Hall Near Me in Pune"],
        ["Affordable Marriage Hall in Pune"],
        ["Budget Marriage Hall in Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Farm-Based Setting",
            WhyChoosedescription: "The natural farm environment provides a refreshing alternative to crowded city marriage halls, giving couples and their guests a calm and enjoyable atmosphere for the celebration."
        },
        {
            WhyChooseheading: "Beautiful Green Surroundings",
            WhyChoosedescription: "Greenery and open landscapes create an attractive backdrop for ceremonies, family gatherings, wedding photography, outdoor arrangements, and memorable moments throughout the event."
        },
        {
            WhyChooseheading: "Outdoor Wedding Flexibility",
            WhyChoosedescription: "Open spaces allow families to plan ceremonies, gatherings, photography sessions, decorative setups, and other wedding functions according to their preferred celebration style."
        },
        {
            WhyChooseheading: "Entertainment for Guests",
            WhyChoosedescription: "Wedding guests can enjoy attractions such as swimming, boating, horse riding, tractor rides, bull cart rides, bird watching, games, and other recreational experiences during their visit."
        },
        {
            WhyChooseheading: "Traditional Homemade Food",
            WhyChoosedescription: "Fresh homemade food brings an authentic touch to the celebration and gives families an opportunity to enjoy traditional flavors in a peaceful countryside environment."
        },
        {
            WhyChooseheading: "Suitable for Family Functions",
            WhyChoosedescription: "The destination provides a relaxed environment where relatives and friends can spend quality time together through wedding functions, meals, recreation, photography, and outdoor gatherings."
        },
        {
            WhyChooseheading: "Natural Photography Backdrops",
            WhyChoosedescription: "Farm landscapes, greenery, open areas, and countryside surroundings provide attractive settings for couple portraits, family photographs, candid moments, and pre-wedding shoots."
        },
        {
            WhyChooseheading: "Flexible Budget Planning",
            WhyChoosedescription: "Families can plan their celebration around guest numbers, selected functions, food, decorations, photography, and other requirements, helping them organize a wedding according to their priorities."
        }
    ]
};



const faqData = [
    {
        question: "Can Om Agri Tourism be considered as an alternative to a marriage hall in Pune?",
        answer: "Couples who want to move away from conventional indoor wedding halls can explore the farm atmosphere of Om Agri Tourism. Its greenery, open surroundings and peaceful countryside character can provide a refreshing setting for wedding functions, family gatherings and intimate celebrations."
    },
    {
        question: "What type of marriage functions can be planned at Om Agri Tourism?",
        answer: "The destination can be considered for intimate wedding celebrations, pre-wedding gatherings, family functions and other marriage-related occasions. Planning the requirements in advance allows couples to discuss their preferred arrangements and create an experience suited to their celebration."
    },
    {
        question: "Why choose a farm setting instead of a traditional marriage hall in Pune?",
        answer: "A farm setting brings natural surroundings into the wedding experience, offering greenery and open spaces rather than a fully enclosed venue. This can appeal to couples who want their guests to relax, interact and enjoy a more informal countryside atmosphere."
    },
    {
        question: "Is Om Agri Tourism suitable for a small wedding with close family and friends?",
        answer: "For couples planning an intimate gathering, the relaxed farm environment can provide a comfortable alternative to a large formal venue. Close relatives and friends can spend quality time together while enjoying the wedding celebrations and suitable outdoor experiences."
    },
    {
        question: "What recreational experiences can guests enjoy during a wedding at Om Agri Tourism?",
        answer: "Guests can explore activities such as horse riding, boating, swimming, tractor rides, bull cart rides and bird watching, depending on suitability and arrangements. These options can add an enjoyable countryside element to the time guests spend around the wedding functions."
    },
    {
        question: "Can families enjoy a peaceful wedding environment at Om Agri Tourism?",
        answer: "The farm surroundings offer a quieter atmosphere where families can gather and celebrate without the busy feel of a city venue. Open spaces and greenery can make conversations, shared meals and family interactions more relaxed throughout the occasion."
    },
    {
        question: "How can couples plan a memorable marriage celebration at Om Agri Tourism?",
        answer: "Couples can build their celebration around the natural character of the destination by combining wedding functions with family time and suitable outdoor activities. A countryside atmosphere, shared food and recreational experiences can give guests memories beyond the main ceremony."
    },
    {
        question: "What should couples consider when looking for a marriage hall alternative in Pune?",
        answer: "Guest requirements, preferred wedding functions, food arrangements, activity choices and the desired atmosphere are important factors to discuss before finalizing a venue. Couples should coordinate these details in advance so the destination matches the scale and style of their celebration."
    },
    {
        question: "Can Om Agri Tourism be suitable for pre-wedding family gatherings?",
        answer: "The relaxed farm environment can work well for families who want to spend time together before the main wedding day. A gathering can include conversations, shared meals and suitable recreational experiences, helping relatives and friends connect in a comfortable countryside setting."
    },
    {
        question: "What makes Om Agri Tourism different from a conventional marriage hall in Pune?",
        answer: "Instead of an enclosed urban venue, Om Agri Tourism provides a farm-oriented atmosphere with greenery, open surroundings and countryside experiences. This combination can give couples a distinctive way to celebrate their marriage while offering guests opportunities to enjoy nature and family time."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Vivek Jadhav",
        feedback:
            "We wanted something different from a regular marriage hall for our family celebration, and Om Agri Tourism was a wonderful choice. The open farm surroundings created a relaxed atmosphere, and our guests enjoyed spending time together and exploring the outdoor activities.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Meenal Chavan",
        feedback:
            "Our wedding function at Om Agri Tourism had a lovely countryside feel. The greenery made the celebration peaceful, and our relatives appreciated having space to relax and enjoy the occasion together. The entire experience felt personal and memorable.",
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
  "name": "Marriage Hall in Pune",
  "image": "https://www.omagrotourism.com/assets/images/marriage-hall-in-pune.webp",
  "description": "Om Agro Tourism offers a welcoming Marriage Hall in Pune experience for families and couples planning weddings, receptions, engagement functions and other important celebrations in a peaceful countryside setting. A Marriage Hall in Pune can be a practical choice for families looking for an organized venue where traditional ceremonies, family gatherings and wedding functions can be conducted comfortably. Couples comparing Banquet Halls in Pune can also consider a nature-oriented destination that provides open surroundings, greenery and an atmosphere away from the congestion of the city. Wedding Venues in Pune are suitable for different types of celebrations, while Wedding Halls in Pune are commonly preferred for ceremonies and receptions requiring structured arrangements for guests. Families searching for Low Budget Wedding Halls in Pune can explore practical celebration options based on guest count, event requirements, food preferences, decoration and other essential arrangements. For those comparing Banquet Halls in Pune With Price, the overall cost can vary depending on the number of guests, function type, catering, decoration, seating arrangements and additional facilities, allowing requirements to be discussed according to the planned event. Om Agro Tourism provides an alternative to conventional urban banquet spaces by combining event-friendly surroundings with the relaxed character of agro-tourism. The destination can suit wedding ceremonies, receptions, engagement parties, haldi functions, mehendi celebrations, anniversary events and family get-togethers. Open areas can offer flexibility for seating, decoration, photography and different ceremony formats, while the surrounding greenery creates a pleasant backdrop for memorable photographs. Guests can enjoy a refreshing countryside atmosphere while spending quality time with relatives and friends. Monsoon visits can bring lush green surroundings and a fresh natural appearance, winter provides comfortable conditions for outdoor celebrations and summer functions can be planned around suitable timings. Families can select arrangements according to the size and style of their celebration, whether they are organizing an intimate wedding or a larger family gathering. The location can also be considered by people searching for wedding halls near Pune who want a destination-style environment without travelling excessively far from the city. Couples can plan multiple wedding-related functions at the same destination for greater convenience, including engagement, haldi, mehendi and reception events. The peaceful setting can help create a more relaxed experience for guests compared with crowded urban venues. Om Agro Tourism is suitable for families seeking a combination of natural surroundings, open spaces and celebration-friendly possibilities. With its countryside atmosphere and agro-tourism character, it can be considered by couples and families searching for a Marriage Hall in Pune, banquet venue or wedding celebration destination near the city.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/marriage-hall-in-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Marriage Hall in Pune | Banquet Hall, Wedding Venue & Budget Marriage Hall | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers a peaceful marriage hall and wedding venue near Pune for weddings, receptions, engagements, family functions and budget-friendly celebrations."
  />

  <meta
    name="keywords"
    content="Marriage hall in pune, Banquet halls in pune, Wedding venues in pune, Wedding halls in pune, Low budget wedding halls in pune, Banquet halls in pune with price, Best banquet halls in Pune, marriage halls near Pune, best marriage halls in Pune, affordable marriage halls in Pune, budget marriage hall in Pune, low budget marriage hall near Pune, wedding hall near Pune, best wedding halls in Pune, wedding venues near Pune, best wedding venues in Pune, banquet hall near Pune, best banquet halls near Pune, affordable banquet halls in Pune, banquet halls near Pune with price, banquet hall price in Pune, banquet hall cost in Pune, marriage hall price in Pune, marriage hall cost in Pune, wedding hall price in Pune, wedding venue price in Pune, budget wedding venue in Pune, affordable wedding venue near Pune, low cost wedding halls in Pune, low budget wedding venue near Pune, marriage function hall in Pune, marriage function hall near Pune, wedding function hall in Pune, wedding function venue near Pune, wedding reception hall in Pune, wedding reception venue near Pune, wedding ceremony hall in Pune, wedding ceremony venue near Pune, engagement hall in Pune, engagement venue in Pune, engagement hall near Pune, haldi ceremony venue in Pune, haldi function hall near Pune, mehendi venue in Pune, mehendi function hall near Pune, family function hall in Pune, family celebration venue near Pune, wedding resort in Pune, wedding resort near Pune, marriage resort near Pune, wedding venues near Pune with price, wedding venues near Pune for family, marriage halls near Pune for wedding, banquet halls near Pune for marriage, wedding venue for reception in Pune, wedding venue for engagement in Pune, wedding venue for family function in Pune, wedding venue with catering in Pune, wedding venue with decoration in Pune, wedding hall with outdoor space in Pune, outdoor wedding venue near Pune, countryside wedding venue near Pune, nature wedding venue near Pune, farm wedding venue near Pune, agro tourism wedding venue near Pune, peaceful wedding venue near Pune, intimate wedding hall in Pune, small wedding hall near Pune, destination wedding venue near Pune, destination wedding hall in Pune, wedding destination near Pune, best marriage venue near Pune, best wedding place in Pune, marriage celebration venue near Pune, wedding celebration venue near Pune, marriage hall for family gathering near Pune, banquet hall for family function near Pune"
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
                            <img src='/images/keyword/68.jpg' alt='img' className='img-fluid' />
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

export default Marriagehallinpune;