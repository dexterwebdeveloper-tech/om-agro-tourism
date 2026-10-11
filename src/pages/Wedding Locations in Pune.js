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

function WeddingLocationsInPune() {


const cardData = {
    keyword: "Wedding Locations in Pune",
    headingDescription: "Om Agro Tourism offers a peaceful farm-based setting for couples searching for wedding locations in Pune and nearby areas. The green surroundings, countryside atmosphere, outdoor spaces, traditional experiences, and recreational attractions create a refreshing backdrop for destination weddings, pre-wedding gatherings, family functions, and photography sessions. Couples can enjoy a distinctive celebration away from the busy city environment while giving their guests an opportunity to experience the charm of an agro-tourism destination.",
    topPlaces: [
        {
            title: "Horse Riding",
            description: "Enjoy a memorable horse riding experience across the scenic farm surroundings. The activity adds a charming countryside touch to wedding celebrations and gives guests an enjoyable way to explore the destination."
        },
        {
            title: "Tasty home made food",
            description: "Savor authentic homemade meals prepared with fresh ingredients and traditional flavors. The farm setting makes the dining experience warm, relaxed, and suitable for wedding guests and family gatherings."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Explore the working farm through guided tours and workshops where visitors can learn about planting, harvesting, agricultural practices, and the everyday operations of a farm."
        },
        {
            title: "Boating",
            description: "Relax with a peaceful boating experience in tranquil surroundings and enjoy quality time with family and friends while taking in the natural scenery around the destination."
        },
        {
            title: "Birds Watching",
            description: "Spend quiet moments observing birds in their natural surroundings. The greenery and peaceful farm environment provide an enjoyable nature experience for wedding guests and families."
        },
        {
            title: "Bull Cart Ride",
            description: "Experience the charm of rural life with a traditional bull cart ride. This leisurely activity offers guests a unique way to explore the farm while enjoying the natural beauty of the countryside."
        },
        {
            title: "Swimming Pool",
            description: "Our spacious swimming pool provides a refreshing recreational space surrounded by greenery. Wedding guests can relax, cool off, and enjoy peaceful leisure time during their visit."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Guests can participate in a range of indoor and outdoor games that encourage friendly interaction and recreation, making the destination enjoyable for families and groups attending wedding functions."
        },
        {
            title: "Tractor Ride",
            description: "Hop on an enjoyable tractor ride and explore the farm from a different perspective. It offers wedding guests an interesting countryside experience while discovering the agricultural surroundings."
        },
        {
            title: "Jungle Safari",
            description: "Add an adventurous element to the visit with a nature-oriented safari experience, allowing guests to explore the surroundings and enjoy an exciting outdoor activity during their stay."
        }
    ],
    services: [
        {
            name: "Destination Wedding Venues in Pune",
            description: "Om Agro Tourism offers a nature-oriented destination for couples looking for wedding venues in Pune, with greenery, open surroundings, farm experiences, recreational attractions, and a peaceful countryside atmosphere."
        },
        {
            name: "Destination wedding places near pune",
            description: "Couples searching for a destination wedding place near Pune can consider a farm-based environment where wedding functions, family gatherings, outdoor events, and photography can be planned around natural surroundings."
        },
        {
            name: "Destination wedding places in pune",
            description: "The agro-tourism setting provides a distinctive alternative for couples who want their Pune wedding celebration to include open spaces, greenery, rural charm, outdoor experiences, and memorable guest activities."
        },
        {
            name: "Destination wedding locations in Pune",
            description: "A peaceful farm location can provide a refreshing backdrop for wedding ceremonies, celebrations, pre-wedding functions, family gatherings, and photography while keeping guests close to a natural environment."
        },
        {
            name: "Destination wedding in bhor pune",
            description: "Couples interested in a countryside-style destination wedding around Pune can enjoy a farm atmosphere featuring greenery, outdoor spaces, traditional experiences, homemade food, and recreational activities."
        },
        {
            name: "Pre wedding locations in pune",
            description: "The natural farm surroundings can provide attractive settings for pre-wedding photography, couple portraits, family photographs, and intimate celebrations with greenery and countryside landscapes in the background."
        },
        {
            name: "Pre wedding destination near pune",
            description: "Couples can choose a peaceful farm environment for pre-wedding moments, photography sessions, small gatherings, and relaxed outdoor experiences away from the crowded city surroundings."
        },
        {
            name: "Pre wedding destination in pune",
            description: "The combination of open farm landscapes, greenery, traditional rural surroundings, and recreational attractions creates a versatile setting for pre-wedding celebrations and photography."
        },
        {
            name: "Pre wedding locations near Pune",
            description: "A countryside destination near Pune can give couples multiple natural backdrops for photographs while also providing a relaxed environment for spending time with family and friends."
        },
        {
            name: "Pre wedding photoshoot destination in pune",
            description: "Farm landscapes, greenery, open spaces, and rural surroundings can create attractive visual backgrounds for couple portraits, candid photography, traditional-themed shoots, and pre-wedding photo sessions."
        },
        {
            name: "Pune resorts for wedding",
            description: "Om Agro Tourism provides a farm-oriented alternative to conventional resorts, combining natural surroundings, outdoor recreation, homemade food, and a peaceful environment for wedding celebrations."
        },
        {
            name: "Pune wedding destination",
            description: "Couples can create a memorable wedding experience by combining ceremonies and family celebrations with the greenery, countryside atmosphere, and recreational attractions available at the agro-tourism destination."
        },
        {
            name: "Resort for marriage in pune",
            description: "The farm setting provides an enjoyable environment for marriage celebrations, allowing families and guests to experience outdoor spaces, traditional rural surroundings, homemade food, and recreational activities."
        },
        {
            name: "Resort for pre wedding in pune",
            description: "Couples planning pre-wedding events can enjoy a peaceful farm atmosphere for photography, family gatherings, couple activities, and relaxed outdoor celebrations surrounded by greenery."
        },
        {
            name: "Resort near pune for wedding",
            description: "A countryside resort-style setting near Pune can provide couples with a refreshing venue for wedding functions, outdoor celebrations, family gatherings, photography, and guest recreation."
        },
        {
            name: "Resort wedding packages in pune",
            description: "Wedding arrangements can be customized according to the couple's event requirements, guest count, food preferences, decorations, functions, photography needs, and other celebration priorities."
        },
        {
            name: "Resorts for wedding near pune",
            description: "Couples comparing wedding resorts near Pune can explore a farm environment where greenery, open spaces, homemade food, outdoor activities, and rural charm come together for a memorable celebration."
        },
        {
            name: "Wedding locations in pune",
            description: "Om Agro Tourism offers a distinctive wedding location with natural surroundings, farm landscapes, open areas, recreational attractions, and a peaceful atmosphere suitable for different wedding functions."
        },
        {
            name: "Wedding venues around Pune",
            description: "Families searching around Pune can consider a countryside wedding venue where celebrations can be combined with greenery, outdoor activities, traditional experiences, homemade food, and family time."
        },
        {
            name: "Destination Wedding Places Near Pune",
            description: "The farm-based destination provides couples with a peaceful option near Pune for wedding ceremonies, pre-wedding events, family celebrations, photography sessions, and outdoor gatherings."
        },
        {
            name: "Wedding Venue with Accommodation Near Pimpri Chinchwad",
            description: "Couples planning wedding events near Pimpri Chinchwad can explore a destination-oriented farm environment and discuss suitable arrangements for guests, celebrations, meals, and event requirements."
        },
        {
            name: "Wedding Resort with Lawn Near Pimpri Chinchwad",
            description: "The open green surroundings can provide an attractive lawn-style setting for ceremonies, wedding decorations, family gatherings, photography, and outdoor celebrations near Pimpri Chinchwad."
        },
        {
            name: "One Day Wedding Resort Near Pimpri Chinchwad",
            description: "Families planning a compact wedding celebration can enjoy a one-day countryside event featuring wedding functions, homemade food, outdoor spaces, photography opportunities, and recreational experiences."
        },
        {
            name: "Farm Wedding Venue Near Pimpri Chinchwad",
            description: "A farm wedding setting offers couples a natural backdrop with greenery, open spaces, traditional countryside charm, and opportunities to create personalized outdoor wedding arrangements."
        },
        {
            name: "Nature Wedding Resort Near Pimpri Chinchwad",
            description: "The green farm environment provides a refreshing nature-focused setting for couples who want their wedding celebration to feature open surroundings, natural scenery, outdoor functions, and peaceful guest experiences."
        },
        {
            name: "Wedding Venue for 500 Guests Near Pimpri Chinchwad",
            description: "Couples planning larger celebrations can discuss guest requirements and event arrangements while using the farm destination's open surroundings for wedding functions, gatherings, meals, and guest activities."
        },
        {
            name: "Wedding Venue for 1000 Guests Near Pimpri Chinchwad",
            description: "For large wedding plans, families can discuss the required event setup, guest arrangements, food, functions, and space requirements to determine suitable arrangements for their celebration."
        },
        {
            name: "Best Destination Wedding Resort Near Pimpri Chinchwad",
            description: "The combination of greenery, farm experiences, outdoor recreation, homemade food, and countryside charm makes Om Agro Tourism a distinctive option for couples planning a destination-style wedding near Pimpri Chinchwad."
        }
    ],
    tableData: [
        ["Destination Wedding Venues in Pune"],
        ["Destination wedding places near pune"],
        ["Destination wedding places in pune"],
        ["Destination wedding locations in Pune"],
        ["Destination wedding in bhor pune"],
        ["Pre wedding locations in pune"],
        ["Pre wedding destination near pune"],
        ["Pre wedding destination in pune"],
        ["Pre wedding locations near Pune"],
        ["Pre wedding photoshoot destination in pune"],
        ["Pune resorts for wedding"],
        ["Pune wedding destination"],
        ["Resort for marriage in pune"],
        ["Resort for pre wedding in pune"],
        ["Resort near pune for wedding"],
        ["Resort wedding packages in pune"],
        ["Resorts for wedding near pune"],
        ["Wedding locations in pune"],
        ["Wedding venues around Pune"],
        ["Destination Wedding Places Near Pune"],
        ["Wedding Venue with Accommodation Near Pimpri Chinchwad"],
        ["Wedding Resort with Lawn Near Pimpri Chinchwad"],
        ["One Day Wedding Resort Near Pimpri Chinchwad"],
        ["Farm Wedding Venue Near Pimpri Chinchwad"],
        ["Nature Wedding Resort Near Pimpri Chinchwad"],
        ["Wedding Venue for 500 Guests Near Pimpri Chinchwad"],
        ["Wedding Venue for 1000 Guests Near Pimpri Chinchwad"],
        ["Best Destination Wedding Resort Near Pimpri Chinchwad"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Natural Wedding Surroundings",
            WhyChoosedescription: "Green farm landscapes and peaceful countryside surroundings create a refreshing backdrop for wedding celebrations and offer couples an alternative to crowded urban venues."
        },
        {
            WhyChooseheading: "Beautiful Pre-Wedding Backdrops",
            WhyChoosedescription: "The farm environment provides multiple natural settings for couple portraits, family photographs, candid moments, and pre-wedding photoshoots without relying entirely on artificial backgrounds."
        },
        {
            WhyChooseheading: "Outdoor Celebration Opportunities",
            WhyChoosedescription: "Open surroundings provide flexibility for wedding ceremonies, pre-wedding functions, family gatherings, photography sessions, and customized outdoor arrangements."
        },
        {
            WhyChooseheading: "Unique Agro-Tourism Experience",
            WhyChoosedescription: "Guests can experience more than a conventional wedding venue through farm tours, rural surroundings, recreational activities, traditional experiences, and opportunities to enjoy the countryside."
        },
        {
            WhyChooseheading: "Entertainment for Wedding Guests",
            WhyChoosedescription: "Activities such as swimming, horse riding, boating, tractor rides, bull cart rides, bird watching, games, and other attractions can keep guests engaged during their visit."
        },
        {
            WhyChooseheading: "Traditional Homemade Food",
            WhyChoosedescription: "Fresh homemade food adds an authentic touch to the celebration and gives families and guests an opportunity to enjoy traditional flavors in a peaceful farm environment."
        },
        {
            WhyChooseheading: "Suitable for Family Gatherings",
            WhyChoosedescription: "The destination offers a relaxed atmosphere where relatives and friends can spend quality time together around wedding functions, meals, recreational activities, and outdoor celebrations."
        },
        {
            WhyChooseheading: "Memorable Countryside Wedding",
            WhyChoosedescription: "Combining natural beauty, farm experiences, outdoor celebrations, photography opportunities, food, and guest activities can give couples a distinctive wedding experience that stands apart from standard city venues."
        }
    ]
};



const faqData = [
    {
        question: "What makes Om Agri Tourism one of the wedding locations in Pune to consider?",
        answer: "Couples searching for a wedding setting away from busy indoor venues can explore the peaceful farm atmosphere of Om Agri Tourism. Green surroundings, open spaces and a countryside feel can bring a relaxed and distinctive character to wedding celebrations and family gatherings."
    },
    {
        question: "Can Om Agri Tourism be considered for different wedding functions in Pune?",
        answer: "The natural setting can be suitable for intimate wedding celebrations, pre-wedding gatherings, family functions and other special occasions. Couples can discuss their requirements in advance to plan the functions according to their preferred arrangements and guest group."
    },
    {
        question: "Why might couples prefer a farm setting for their Pune wedding?",
        answer: "A farm environment offers a refreshing alternative to conventional banquet halls by bringing nature into the celebration. Guests can enjoy greenery and open surroundings while spending meaningful time together, creating a wedding atmosphere that feels more relaxed and personal."
    },
    {
        question: "Is Om Agri Tourism suitable for an intimate wedding celebration?",
        answer: "Couples planning a smaller celebration with close relatives and friends may find the countryside environment appealing. The peaceful surroundings encourage guests to interact comfortably and enjoy the occasion together rather than focusing only on the formal wedding ceremony."
    },
    {
        question: "What activities can wedding guests enjoy at Om Agri Tourism?",
        answer: "Guests can enjoy suitable countryside activities such as horse riding, boating, swimming, tractor rides, bull cart rides and bird watching. Including recreational experiences can give family members and friends additional ways to enjoy their time around the wedding celebrations."
    },
    {
        question: "Can families spend quality time together at this wedding location in Pune?",
        answer: "The open farm environment creates opportunities for relatives from different places to gather, relax and enjoy time together. Shared meals, conversations and suitable outdoor activities can make the wedding celebration feel more like a memorable family occasion."
    },
    {
        question: "How can couples make a farm wedding in Pune more memorable?",
        answer: "Using the natural character of the destination can help couples create a celebration with a relaxed countryside theme. Combining wedding functions with outdoor moments, family gatherings, shared food and recreational experiences can give guests a more distinctive experience."
    },
    {
        question: "What should couples check before selecting a wedding location in Pune?",
        answer: "It is useful to consider guest requirements, function arrangements, food preferences, activity options and the overall style of the wedding. Discussing these details beforehand can help couples understand how the destination can accommodate their planned celebration."
    },
    {
        question: "Can Om Agri Tourism provide a peaceful atmosphere for wedding celebrations?",
        answer: "Those who prefer a calmer environment can appreciate the farm's greenery and open countryside surroundings. The setting provides a pleasant contrast to the fast-paced city atmosphere and can help create a comfortable backdrop for spending time with loved ones."
    },
    {
        question: "Why can Om Agri Tourism be a memorable choice among wedding locations in Pune?",
        answer: "The combination of farm greenery, open surroundings and countryside recreation gives the destination a character that differs from standard urban wedding venues. Couples can celebrate important moments while their guests enjoy nature, family time and a variety of suitable outdoor experiences."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Nikhil Pawar",
        feedback:
            "We were looking for a wedding location in Pune that felt peaceful and different from a typical banquet hall. Om Agri Tourism gave our celebration a lovely countryside atmosphere, and our relatives enjoyed spending time together in the open surroundings. It made the occasion truly memorable.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Aarti Wagh",
        feedback:
            "Our wedding gathering at Om Agri Tourism was enjoyed by the entire family. The greenery created a beautiful relaxed setting, while the outdoor activities gave our guests something fun to experience between the functions. We were very happy with the overall countryside feel.",
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
  "name": "Wedding Locations in Pune",
  "image": "https://www.omagrotourism.com/assets/images/wedding-locations-in-pune.webp",
  "description": "Om Agro Tourism offers memorable Wedding Locations in Pune for couples and families looking for peaceful, scenic and distinctive settings for wedding celebrations. Destination Wedding Venues in Pune can provide an appealing alternative to conventional city halls by bringing ceremonies, receptions and family functions into a relaxed environment surrounded by greenery and open spaces. Couples exploring Destination Wedding Places Near Pune and Destination Wedding Places in Pune can consider an agro-tourism setting where wedding celebrations can be combined with nature, countryside scenery and comfortable outdoor surroundings. Destination Wedding Locations in Pune are suitable for intimate weddings, engagement ceremonies, haldi functions, mehendi celebrations, receptions, family gatherings and other pre-wedding events. Couples interested in a Destination Wedding in Bhor Pune can also consider a countryside-inspired location where guests can enjoy a peaceful atmosphere away from the busy urban routine. Pre Wedding Locations in Pune can provide attractive surroundings for couples planning photography sessions, small gatherings and memorable moments before the main wedding ceremony. A Pre Wedding Destination Near Pune can be convenient for couples who want a scenic location without travelling too far from the city, while a Pre Wedding Destination in Pune can offer a relaxed environment for photography and family activities. Pre Wedding Locations Near Pune can include nature-oriented and open settings where couples can create photographs with greenery, agricultural landscapes and countryside backdrops. Om Agro Tourism offers a distinctive atmosphere that combines agriculture, nature and leisure, making it suitable for couples who want their wedding celebrations to feel personal and different from conventional urban venues. Open spaces provide flexibility for decorations, seating arrangements, ceremonies and photography according to the scale and style of the event. Families can also use the destination for engagement parties, family get-togethers and pre-wedding celebrations, allowing relatives and friends to spend meaningful time together. Seasonal surroundings add variety to wedding and pre-wedding experiences, with monsoon bringing lush greenery and refreshing scenery, winter providing pleasant conditions for outdoor functions and summer events being planned around suitable timings. The destination can suit couples looking for a peaceful wedding environment while remaining accessible from Pune and surrounding areas. Guests can enjoy the countryside atmosphere and a refreshing change from crowded city venues. Wedding arrangements can be planned according to guest count, ceremony requirements, decoration preferences, catering needs and the overall style of the celebration. Om Agro Tourism can also be considered by couples who want a nature-inspired destination wedding or pre-wedding photography experience near Pune. With its open spaces, agricultural surroundings, greenery and relaxed agro-tourism character, the destination offers a memorable setting for wedding functions, pre-wedding events and family celebrations in and around Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/wedding-locations-in-pune"
  }
};



    return (
        <div>



<Helmet>
  <title>
    Wedding Locations in Pune | Destination Wedding & Pre Wedding Locations | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers wedding locations in Pune for destination weddings, pre-wedding photography, family celebrations and scenic wedding functions near Pune."
  />

  <meta
    name="keywords"
    content="Wedding Locations in Pune, Destination Wedding Venues in Pune, Destination wedding places near pune, Destination wedding places in pune, Destination wedding locations in Pune, Destination wedding in bhor pune, Pre wedding locations in pune, Pre wedding destination near pune, Pre wedding destination in pune, Pre wedding locations near Pune, Pre wedding locations in Pune, wedding locations near Pune, wedding venues in Pune, wedding venues near Pune, destination wedding venue Pune, destination wedding venues near Pune, best destination wedding places near Pune, best wedding locations in Pune, best wedding venues in Pune, wedding destination near Pune, wedding destination in Pune, destination marriage venues in Pune, destination wedding resort in Pune, wedding resorts near Pune, wedding resorts in Pune, marriage resorts near Pune, wedding venue near Pune with greenery, nature wedding venue in Pune, countryside wedding venue near Pune, outdoor wedding venue in Pune, farm wedding venue near Pune, agro tourism wedding venue near Pune, scenic wedding venue near Pune, peaceful wedding venue in Pune, intimate wedding venue near Pune, small wedding venue in Pune, luxury wedding venue near Pune, budget wedding venue near Pune, wedding location for couples in Pune, wedding celebration venue near Pune, wedding reception venue in Pune, wedding ceremony venue near Pune, engagement venue in Pune, engagement venue near Pune, haldi ceremony venue near Pune, mehendi venue near Pune, pre wedding shoot locations in Pune, pre wedding shoot location near Pune, pre wedding photography locations in Pune, pre wedding photo shoot near Pune, best pre wedding locations in Pune, best pre wedding locations near Pune, scenic pre wedding location near Pune, nature pre wedding location Pune, outdoor pre wedding location Pune, countryside pre wedding location Pune, pre wedding resort near Pune, pre wedding venue in Pune, pre wedding venue near Pune, couple photography location Pune, couple photoshoot location near Pune, wedding photoshoot location Pune, wedding photography location near Pune, destination wedding in Bhor, destination wedding near Bhor Pune, wedding venue in Bhor Pune, wedding locations in Bhor, pre wedding location in Bhor, pre wedding shoot in Bhor, destination wedding near Pune with budget, affordable destination wedding near Pune, family wedding venue near Pune, wedding venue for family function near Pune, wedding venue with outdoor space near Pune, wedding venue surrounded by nature near Pune, wedding destination for family near Pune, wedding venue for reception near Pune, wedding venue for engagement near Pune, wedding destination for couples near Pune"
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
                            <img src='/images/keyword/67.jpg' alt='img' className='img-fluid' />
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

export default WeddingLocationsInPune;