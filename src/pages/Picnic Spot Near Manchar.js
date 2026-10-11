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

function Picnicsportnearmanchar() {

const cardData = {
    keyword: "Picnic Spot Near Manchar",
    headingDescription: "Om Agro Tourism is a refreshing destination for visitors searching for a picnic spot near Manchar, offering a peaceful farm environment with nature, rural experiences, homemade food, and enjoyable activities. Families, friends, and groups can plan a convenient one-day outing while experiencing the countryside atmosphere and a variety of attractions away from the regular city routine.",

    topPlaces: [
        {
            title: "Bird Watching",
            description: "Bird watching offers a peaceful nature experience for visitors who want to enjoy the countryside surroundings and spend relaxing time observing the local birdlife."
        },
        {
            title: "Bull Cart Ride",
            description: "A traditional bull cart ride gives families and groups an opportunity to experience rural transportation while adding a memorable countryside activity to their picnic."
        },
        {
            title: "Tasty Homemade Food",
            description: "Visitors can enjoy tasty homemade food during their outing, bringing traditional flavours and a comforting meal experience to a relaxed family picnic."
        },
        {
            title: "Tractor Ride",
            description: "The tractor ride provides a distinctive farm-based experience and allows visitors to enjoy an activity connected with the agricultural surroundings."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm tours and workshops introduce visitors to agricultural surroundings and rural experiences, making the outing more engaging for families and groups."
        },
        {
            title: "Jungle Safari",
            description: "Jungle safari adds an adventurous element to the picnic, giving visitors an opportunity to enjoy something different while spending the day in a countryside environment."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and outdoor games provide active entertainment for children, adults, families, and groups looking for fun activities during their one-day outing."
        },
        {
            title: "Water Park Activities",
            description: "Water park activities offer a refreshing recreation option for visitors who want to include water-based fun while enjoying a picnic with family and friends."
        },
        {
            title: "Horse Riding",
            description: "Horse riding adds an exciting outdoor experience to the visit and can be a fun attraction for families and groups exploring the destination."
        },
        {
            title: "Swimming Pool",
            description: "The swimming pool provides a relaxing water-based attraction for guests who want to cool down and enjoy leisure time during their family picnic."
        }
    ],

    services: [
        {
            name: "Picnic Spot Near Manchar",
            description: "Om Agro Tourism provides a peaceful countryside setting for visitors searching for a picnic spot near Manchar, with farm experiences, nature attractions, food, and recreational activities."
        },
        {
            name: "One Day Picnic Spot Near Manchar",
            description: "Visitors can enjoy a complete one-day outing with farm activities, traditional experiences, games, food, nature exploration, and leisure attractions at one destination."
        },
        {
            name: "Best Picnic Spot Near Manchar",
            description: "For visitors comparing picnic destinations, Om Agro Tourism offers a varied countryside experience combining natural surroundings, family activities, rural attractions, and homemade food."
        },
        {
            name: "Family Picnic Spot Near Manchar",
            description: "Families can spend quality time together through a range of activities suitable for different age groups, along with farm experiences and peaceful outdoor surroundings."
        },
        {
            name: "Picnic Resort Near Manchar",
            description: "The destination offers a relaxing picnic environment where visitors can combine countryside scenery with recreational activities, traditional experiences, food, and nature."
        },
        {
            name: "One Day Picnic Resort Near Manchar",
            description: "A one-day visit can include multiple attractions such as farm tours, rides, games, water activities, homemade food, and nature experiences without requiring an extended trip."
        },
        {
            name: "Best Resort Near Manchar for Picnic",
            description: "Visitors looking for a resort-style picnic experience can enjoy a combination of open spaces, rural activities, family recreation, traditional experiences, and food."
        },
        {
            name: "Family Resort Near Manchar",
            description: "Om Agro Tourism gives families several ways to enjoy their outing, including farm activities, traditional rides, nature exploration, games, and relaxing leisure experiences."
        },
        {
            name: "One Day Trip Near Manchar",
            description: "A visit to Om Agro Tourism can make a refreshing one-day trip with countryside exploration, recreational activities, traditional attractions, homemade food, and natural surroundings."
        },
        {
            name: "Family One Day Trip Near Manchar",
            description: "Families can plan an enjoyable day trip featuring child-friendly recreation, farm experiences, open spaces, traditional activities, and opportunities to relax together."
        },
        {
            name: "Picnic Places Near Manchar",
            description: "Visitors searching for picnic places near Manchar can experience an agricultural setting with a mix of nature, recreation, rural activities, and traditional food."
        },
        {
            name: "Best Picnic Places Near Manchar",
            description: "Om Agro Tourism offers a diverse outing experience where visitors can enjoy farm surroundings, activities, food, nature exploration, and shared time with family or friends."
        },
        {
            name: "Affordable Picnic Spot Near Manchar",
            description: "Visitors looking for an affordable picnic experience can enjoy several attractions and activities at one countryside destination, making it suitable for families and groups."
        },
        {
            name: "Budget Picnic Resort Near Manchar",
            description: "The destination is suitable for visitors seeking a budget-friendly countryside outing with recreational activities, farm experiences, food, and natural surroundings."
        },
        {
            name: "Picnic Spot Near Manchar Pune",
            description: "Visitors from the Manchar and Pune region can enjoy a refreshing farm-based picnic with traditional activities, nature experiences, homemade food, and recreational attractions."
        },
        {
            name: "Resort Near Manchar for Family Outing",
            description: "Families can enjoy a varied outing with farm tours, traditional rides, games, nature-based activities, food, and open surroundings that encourage quality time together."
        },
        {
            name: "One Day Resort Near Manchar",
            description: "Om Agro Tourism provides multiple experiences for a full-day visit, allowing guests to combine relaxation with farm activities, recreation, food, and countryside exploration."
        },
        {
            name: "Nature Picnic Spot Near Manchar",
            description: "Bird watching, agricultural surroundings, open landscapes, and peaceful rural experiences make the destination suitable for visitors looking for a nature-focused picnic."
        },
        {
            name: "Picnic Spot Near Narayangaon Manchar",
            description: "Visitors from the Narayangaon-Manchar area can plan a countryside picnic featuring farm experiences, traditional activities, nature attractions, homemade food, and recreation."
        },
        {
            name: "Family Picnic Resort Near Manchar",
            description: "The combination of family-friendly activities, open surroundings, farm experiences, food, and traditional attractions makes the destination suitable for a relaxed family picnic."
        },
        {
            name: "Picnic Spot with Activities Near Manchar",
            description: "Visitors can enjoy a varied outing with farm tours, rides, games, water activities, nature experiences, and other attractions instead of a routine picnic experience."
        },
        {
            name: "Corporate Picnic Spot Near Manchar",
            description: "Corporate teams can enjoy an informal countryside outing with group activities, games, food, open surroundings, and shared experiences that encourage team interaction."
        }
    ],

    tableData: [
        ["Picnic Spot Near Manchar"],
        ["One Day Picnic Spot Near Manchar"],
        ["Best Picnic Spot Near Manchar"],
        ["Family Picnic Spot Near Manchar"],
        ["Picnic Resort Near Manchar"],
        ["One Day Picnic Resort Near Manchar"],
        ["Best Resort Near Manchar for Picnic"],
        ["Family Resort Near Manchar"],
        ["One Day Trip Near Manchar"],
        ["Family One Day Trip Near Manchar"],
        ["Picnic Places Near Manchar"],
        ["Best Picnic Places Near Manchar"],
        ["Affordable Picnic Spot Near Manchar"],
        ["Budget Picnic Resort Near Manchar"],
        ["Picnic Spot Near Manchar Pune"],
        ["Resort Near Manchar for Family Outing"],
        ["One Day Resort Near Manchar"],
        ["Nature Picnic Spot Near Manchar"],
        ["Picnic Spot Near Narayangaon Manchar"],
        ["Family Picnic Resort Near Manchar"],
        ["Picnic Spot with Activities Near Manchar"],
        ["Corporate Picnic Spot Near Manchar"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Farm Environment",
            WhyChoosedescription: "Om Agro Tourism offers a refreshing countryside atmosphere where visitors can relax in open surroundings and enjoy a break from the usual urban routine."
        },
        {
            WhyChooseheading: "Wide Range of Experiences",
            WhyChoosedescription: "Guests can combine nature exploration, farm activities, traditional rides, games, water recreation, and food to create a varied picnic experience."
        },
        {
            WhyChooseheading: "Family-Friendly Outing",
            WhyChoosedescription: "The different attractions make the destination suitable for families, allowing children and adults to participate in activities and spend quality time together."
        },
        {
            WhyChooseheading: "Authentic Rural Activities",
            WhyChoosedescription: "Bull cart rides, tractor rides, farm tours, and other countryside experiences provide visitors with an opportunity to enjoy traditional rural activities."
        },
        {
            WhyChooseheading: "Nature Connection",
            WhyChoosedescription: "Bird watching, agricultural landscapes, and open natural surroundings create opportunities for visitors to slow down and enjoy a peaceful nature-based outing."
        },
        {
            WhyChooseheading: "Homemade Food",
            WhyChoosedescription: "Tasty homemade food adds a traditional touch to the picnic and gives families and groups a satisfying meal experience during their visit."
        },
        {
            WhyChooseheading: "Suitable for Groups",
            WhyChoosedescription: "The combination of group activities, open spaces, food, and shared experiences makes the destination suitable for friends, families, corporate teams, and other groups."
        },
        {
            WhyChooseheading: "Complete One Day Picnic",
            WhyChoosedescription: "Visitors can enjoy multiple attractions within one destination, making it convenient to plan a complete day of recreation, relaxation, food, and countryside experiences."
        }
    ]
};







const faqData = [
    {
        question: "Is Om Agri Tourism a good picnic spot near Manchar?",
        answer: "Visitors from Manchar looking for a peaceful countryside outing can consider Om Agri Tourism for a day filled with recreation and farm experiences. The destination provides activities such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching, along with a green and relaxing environment."
    },
    {
        question: "What activities can visitors enjoy at Om Agri Tourism near Manchar?",
        answer: "Guests can make their picnic more engaging by choosing from several outdoor experiences. Swimming and boating offer water-based recreation, while horse riding, tractor rides and bull cart rides provide a traditional countryside touch. Bird watching is also available for visitors who enjoy spending time close to nature."
    },
    {
        question: "Can families from Manchar visit Om Agri Tourism for a picnic?",
        answer: "Families can enjoy a varied day by combining activities with relaxed time around the farm. Children can take part in suitable experiences such as swimming, boating and farm rides with proper adult supervision, while parents can enjoy the greenery, homemade food and peaceful surroundings."
    },
    {
        question: "How can friends from Manchar spend a day at Om Agri Tourism?",
        answer: "A friends' group can plan an active outing with swimming, boating and horse riding, followed by tractor or bull cart rides. Time for photography, conversations, meals and bird watching can be included between activities, allowing everyone to enjoy both recreation and relaxation."
    },
    {
        question: "What makes Om Agri Tourism different from regular picnic places near Manchar?",
        answer: "The farm setting combines leisure with traditional rural experiences, giving visitors more variety than a simple park outing. Guests can enjoy water activities, horse riding and countryside rides while also observing birds and spending time amid greenery, creating a more immersive picnic experience."
    },
    {
        question: "What can children enjoy during a picnic at Om Agri Tourism near Manchar?",
        answer: "Children can explore suitable outdoor experiences such as swimming, boating, tractor rides and bull cart rides according to their age and comfort. Bird watching can also introduce them to the natural surroundings, while appropriate supervision helps make the activities enjoyable and comfortable."
    },
    {
        question: "Can visitors enjoy homemade food during a picnic near Manchar?",
        answer: "Homemade food can add a traditional and comforting element to the countryside outing. Families and groups can take a relaxed meal break between activities and enjoy their food in the farm atmosphere before returning to swimming, boating, rides or nature observation."
    },
    {
        question: "Is Om Agri Tourism suitable for group picnics near Manchar?",
        answer: "Groups can create a flexible schedule by combining multiple activities during their visit. Swimming, boating and horse riding can be paired with tractor and bull cart rides, while food and relaxation can be included throughout the day, making the destination suitable for family groups, friends and organized outings."
    },
    {
        question: "Why choose an agro tourism experience for a picnic near Manchar?",
        answer: "An agro tourism destination offers a chance to step away from routine city surroundings and spend quality time in a nature-oriented setting. Farm greenery, outdoor activities, traditional rides, bird watching and homemade food can turn an ordinary day trip into a more memorable countryside experience."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Manchar?",
        answer: "Om Agri Tourism combines farm surroundings, outdoor recreation and rural experiences in one destination. Visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching along with homemade food, making it a refreshing option for families, friends and groups planning a picnic near Manchar."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Swapnil Shinde",
        feedback:
            "Our family from Manchar visited Om Agri Tourism for a day picnic and enjoyed the variety of activities. The children were excited about boating and the traditional rides, while we enjoyed the greenery and peaceful farm atmosphere. The homemade food was also a pleasant part of our outing.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Megha Bansode",
        feedback:
            "We planned a friends' outing at Om Agri Tourism and had a wonderful countryside experience. Swimming, horse riding and boating kept us busy, while the tractor and bull cart rides added something different to the day. It was a refreshing way to spend time together away from our regular routine.",
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
  "name": "Picnic Spot Near Manchar",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-manchar.webp",
  "description": "Picnic Spot Near Manchar is a refreshing choice for families, friends, couples, school groups, and corporate teams planning a memorable outdoor break in the Pune region. Om Agro Tourism offers an agro-tourism-oriented countryside environment where visitors can enjoy quality time together through outdoor recreation, open surroundings, picnic activities, and relaxed group experiences. A One Day Picnic Spot Near Manchar can be suitable for families with children, friends arranging a short getaway, and groups looking for a peaceful destination away from their everyday routine. Visitors searching for the Best Picnic Spot Near Manchar can choose a countryside setting that combines leisure, nature-oriented surroundings, and shared group time. The Family Picnic Spot Near Manchar is well suited for family gatherings, birthdays, weekend outings, seasonal visits, and casual celebrations. People looking for a Picnic Resort Near Manchar or One Day Picnic Resort Near Manchar can enjoy the appeal of a comfortable day outing combined with an agro-tourism atmosphere and open rural surroundings. Those searching for the Best Resort Near Manchar for Picnic can consider a destination suitable for families, friends, school excursions, corporate groups, and other visitors wanting an enjoyable outdoor experience. A Family Resort Near Manchar can also provide a convenient setting for spending quality time with children and relatives without planning a long-distance trip. A One Day Trip Near Manchar can be planned by visitors from Manchar, Narayangaon, Rajgurunagar, Khed, Ambegaon, Chakan, Talegaon Dabhade, Moshi, Bhosari, Pimpri Chinchwad, and nearby Pune areas. For anyone planning a Family One Day Trip Near Manchar, Om Agro Tourism provides a welcoming countryside environment where families and groups can relax, enjoy outdoor recreation, and create memorable moments together away from the regular city schedule.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-manchar"
  }
};








    return (
        <div>
<Helmet>
  <title>
    Picnic Spot Near Manchar | Best One Day Picnic Resort & Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Explore a Picnic Spot Near Manchar for families, friends, couples, school groups and corporate outings with outdoor recreation and a peaceful agro-tourism atmosphere."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Manchar, One Day Picnic Spot Near Manchar, Best Picnic Spot Near Manchar, Family Picnic Spot Near Manchar, Picnic Resort Near Manchar, One Day Picnic Resort Near Manchar, Best Resort Near Manchar for Picnic, Family Resort Near Manchar, One Day Trip Near Manchar, Family One Day Trip Near Manchar, One Day Picnic Near Manchar, Picnic Places Near Manchar, Best Picnic Places Near Manchar, Family Picnic Near Manchar, One Day Outing Near Manchar, Best One Day Outing Near Manchar, Picnic Resorts Near Manchar, One Day Picnic Resort Near Manchar Pune, Family Outing Near Manchar, Weekend Picnic Near Manchar, School Picnic Spot Near Manchar, School Picnic Near Manchar, Corporate Outing Near Manchar, Agro Tourism Near Manchar, Agro Tourism Near Pune, Picnic Spot Near Ambegaon, One Day Picnic Near Ambegaon, Picnic Places Near Narayangaon, Family Picnic Near Khed, One Day Picnic Near Rajgurunagar, Picnic Resort Near Chakan, One Day Picnic Near Talegaon Dabhade, Picnic Places Near Moshi, Family Picnic Near Pune"
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
                            <img src='/images/keyword/107.jpg' alt='img' className='img-fluid' />
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

export default Picnicsportnearmanchar;