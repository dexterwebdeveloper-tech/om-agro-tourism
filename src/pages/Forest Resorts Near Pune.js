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

function ForestResortsNearPune() {


const cardData = {
    keyword: "Forest Resorts Near Pune",

    headingDescription: "Searching for Forest Resorts Near Pune for a peaceful weekend, nature stay, family outing, couple getaway, or refreshing break from city life? Om Agri Tourism offers a countryside nature experience surrounded by open farm landscapes, greenery, fresh air, and a calm rural atmosphere, making it an appealing destination for visitors who enjoy spending time close to nature. Instead of a typical urban resort experience, guests can explore farm surroundings, enjoy nature walks, participate in traditional rural activities, relax in open spaces, enjoy outdoor recreation, and experience refreshing water-based activities. Whether you are looking for jungle resorts near Pune, nature resorts near Pune for weekend plans, an eco-friendly countryside stay experience, a nature stay near Pune, or resorts in nature near Pune, Om Agri Tourism provides a combination of natural surroundings, outdoor recreation, farm experiences, traditional food, and peaceful leisure. The destination is suitable for families, couples, friends, corporate groups, and nature enthusiasts looking for a relaxing escape where they can enjoy quality time away from the noise and routine of the city.",

    topPlaces: [
        {
            title: "Green Farm Nature Walk",
            description: "Explore peaceful farm surroundings through a refreshing nature walk surrounded by greenery, open landscapes, and fresh countryside air. It is a relaxing experience for visitors who want to slow down and reconnect with nature during their getaway."
        },
        {
            title: "Countryside Farm Exploration",
            description: "Discover the natural character of the agricultural surroundings through a leisurely farm exploration experience. Visitors can observe rural landscapes, enjoy open spaces, and experience a refreshing environment away from crowded urban areas."
        },
        {
            title: "Mango Orchard Experience",
            description: "Spend time around natural orchard surroundings and enjoy the seasonal charm of mango-growing landscapes. The peaceful environment offers opportunities for nature appreciation, photography, leisurely walks, and relaxed countryside moments."
        },
        {
            title: "Natural Outdoor Recreation",
            description: "Enjoy outdoor recreational activities in an open natural environment where greenery and countryside surroundings become part of the experience. The setting provides a refreshing balance between active entertainment and peaceful leisure."
        },
        {
            title: "Traditional Village Experience",
            description: "Experience the charm of rural Maharashtra through traditional countryside activities and farm surroundings. Visitors can enjoy a slower pace of life while discovering cultural elements that make a rural getaway more memorable."
        },
        {
            title: "Bullock Cart Countryside Ride",
            description: "Enjoy a traditional bullock cart ride and experience a unique form of rural recreation through the farm environment. The activity offers families and groups an enjoyable opportunity to experience countryside traditions."
        },
        {
            title: "Nature Photography Spots",
            description: "Capture memorable photographs around greenery, farm landscapes, open countryside areas, and natural surroundings. The peaceful environment provides several opportunities for families, couples, and photography enthusiasts to create lasting memories."
        },
        {
            title: "Swimming and Nature Leisure",
            description: "Combine refreshing water recreation with the calm atmosphere of the countryside. Visitors can enjoy water activities before relaxing in the surrounding natural environment, creating a balanced day of entertainment and leisure."
        },
        {
            title: "Traditional Farm Dining",
            description: "Enjoy traditional Maharashtrian food in a peaceful rural setting surrounded by countryside scenery. Regional dining adds a cultural and local element to the overall nature-focused resort experience."
        },
        {
            title: "Peaceful Countryside Relaxation",
            description: "Take a break from busy schedules and enjoy quiet moments in the open farm surroundings. The calm atmosphere is suitable for conversations, family time, couple outings, meditation, photography, and relaxed nature appreciation."
        }
    ],

    services: [
        {
            name: "Jungle resorts near pune",
            description: "Enjoy a peaceful nature-focused getaway near Pune with greenery, open countryside surroundings, farm experiences, outdoor activities, traditional food, and relaxing rural experiences."
        },
        {
            name: "Best forest resorts near pune",
            description: "Experience a refreshing countryside escape with natural surroundings, farm exploration, outdoor recreation, nature walks, traditional activities, and peaceful leisure."
        },
        {
            name: "Best jungle resorts near pune",
            description: "Plan a nature-oriented getaway where visitors can enjoy greenery, outdoor activities, farm experiences, countryside exploration, traditional food, and refreshing surroundings."
        },
        {
            name: "Forest stay near pune",
            description: "Enjoy a peaceful nature stay experience near Pune with open landscapes, farm surroundings, outdoor recreation, traditional rural activities, and fresh countryside air."
        },
        {
            name: "mango forest resort pune",
            description: "Experience the seasonal charm of mango-growing countryside surroundings with nature walks, farm exploration, outdoor leisure, traditional activities, and peaceful rural views."
        },
        {
            name: "pune forest resort",
            description: "Discover a refreshing countryside resort atmosphere near Pune with greenery, farm activities, nature experiences, outdoor recreation, and traditional rural experiences."
        },
        {
            name: "Nature Resorts near Pune",
            description: "Enjoy a nature-focused resort experience featuring peaceful farm surroundings, greenery, nature walks, outdoor recreation, traditional food, and relaxing countryside leisure."
        },
        {
            name: "Nature resorts near pune for weekend",
            description: "Spend a refreshing weekend surrounded by nature with farm exploration, outdoor activities, traditional experiences, water recreation, and peaceful open spaces."
        },
        {
            name: "best nature resorts in pune",
            description: "Experience a relaxing nature getaway with farm landscapes, outdoor recreation, countryside activities, traditional food, and refreshing surroundings away from city life."
        },
        {
            name: "Eco resorts near pune",
            description: "Enjoy a countryside experience focused on nature, open farm landscapes, outdoor activities, traditional rural experiences, and a peaceful environment away from urban congestion."
        },
        {
            name: "best nature resorts near pune",
            description: "Plan a refreshing escape with greenery, farm exploration, nature walks, outdoor recreation, water activities, and traditional countryside experiences."
        },
        {
            name: "jungle resort near pune",
            description: "Enjoy a nature-oriented day or getaway with peaceful greenery, countryside exploration, farm activities, outdoor recreation, and traditional rural experiences."
        },
        {
            name: "nature friendly resorts near pune",
            description: "Spend quality time close to nature with open farm surroundings, greenery, nature walks, outdoor activities, traditional food, and peaceful countryside relaxation."
        },
        {
            name: "nature stay near pune",
            description: "Experience a refreshing nature stay surrounded by farm landscapes, open spaces, fresh air, outdoor recreation, traditional activities, and relaxing rural scenery."
        },
        {
            name: "resorts in nature near pune",
            description: "Enjoy a countryside resort environment where nature, farm activities, outdoor recreation, water fun, traditional food, and peaceful leisure come together."
        },
        {
            name: "top nature resorts near pune",
            description: "Discover a nature-focused getaway offering farm exploration, greenery, outdoor activities, traditional rural experiences, water recreation, and peaceful countryside surroundings."
        }
    ],

    tableData: [
        ["Jungle resorts near pune"],
        ["Best forest resorts near pune"],
        ["Best jungle resorts near pune"],
        ["Forest stay near pune"],
        ["mango forest resort pune"],
        ["pune forest resort"],
        ["Nature Resorts near Pune"],
        ["Nature resorts near pune for weekend"],
        ["best nature resorts in pune"],
        ["Eco resorts near pune"],
        ["best nature resorts near pune"],
        ["jungle resort near pune"],
        ["nature friendly resorts near pune"],
        ["nature stay near pune"],
        ["resorts in nature near pune"],
        ["top nature resorts near pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Natural Surroundings",
            WhyChoosedescription: "Om Agri Tourism offers a refreshing countryside environment where visitors can enjoy greenery, open farm landscapes, fresh air, and a quieter atmosphere away from the busy pace of Pune city."
        },
        {
            WhyChooseheading: "Refreshing Nature Experience",
            WhyChoosedescription: "Nature walks, farm exploration, open landscapes, and outdoor recreation allow guests to spend meaningful time outside while enjoying the natural character of the countryside."
        },
        {
            WhyChooseheading: "Ideal for Weekend Escapes",
            WhyChoosedescription: "The peaceful surroundings and variety of outdoor experiences make the destination suitable for visitors planning a short weekend break, family outing, couple getaway, or relaxing escape from daily routines."
        },
        {
            WhyChooseheading: "Authentic Farm Environment",
            WhyChoosedescription: "The agricultural surroundings provide a different kind of leisure experience where visitors can explore farm landscapes, enjoy traditional activities, and experience the charm of rural life."
        },
        {
            WhyChooseheading: "Suitable for Nature Lovers",
            WhyChoosedescription: "Visitors who appreciate greenery, open spaces, countryside landscapes, photography, and fresh outdoor environments can enjoy a more natural and relaxed experience away from crowded city destinations."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Along with nature and recreation, guests can experience elements of rural Maharashtra through traditional activities, bullock cart experiences, farm surroundings, and regional food."
        },
        {
            WhyChooseheading: "Nature and Recreation Together",
            WhyChoosedescription: "The destination combines peaceful natural surroundings with outdoor recreation and water activities, giving visitors opportunities to stay active while also having enough time to relax."
        },
        {
            WhyChooseheading: "Suitable for Different Groups",
            WhyChoosedescription: "Families, couples, friends, corporate teams, and nature enthusiasts can plan their outing around activities such as nature walks, farm exploration, outdoor recreation, traditional dining, and countryside relaxation."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good option among forest resorts near Pune?",
        answer: "Om Agri Tourism can be a refreshing choice for visitors searching for a forest-style nature getaway near Pune. Its peaceful farm surroundings, greenery and outdoor activities provide an opportunity to enjoy a break from the city while experiencing a calm countryside atmosphere."
    },
    {
        question: "What makes Om Agri Tourism suitable for a nature getaway near Pune?",
        answer: "The open greenery and quiet farm environment at Om Agri Tourism create a relaxing setting for visitors who enjoy being close to nature. Guests can combine their time outdoors with swimming, boating, horse riding, tractor rides, bull cart rides and bird watching."
    },
    {
        question: "Can families visit Om Agri Tourism for a nature outing near Pune?",
        answer: "Families can enjoy a peaceful nature outing at Om Agri Tourism with activities suitable for different age groups. Children can explore the outdoor environment and participate in suitable recreational activities, while adults can relax amid the greenery and enjoy the farm atmosphere."
    },
    {
        question: "What activities can visitors enjoy at Om Agri Tourism?",
        answer: "Visitors can enjoy a variety of outdoor experiences at Om Agri Tourism, including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These activities allow guests to experience nature while adding recreation and variety to their day outing."
    },
    {
        question: "Is Om Agri Tourism suitable for couples looking for a peaceful resort near Pune?",
        answer: "Couples who prefer a quiet natural setting can consider Om Agri Tourism for a relaxing day away from Pune. The greenery, farm surroundings, bird watching and leisurely outdoor activities provide a pleasant environment for spending quality time together."
    },
    {
        question: "Can visitors enjoy bird watching at Om Agri Tourism?",
        answer: "Bird watching is one of the nature-focused experiences available at Om Agri Tourism. Guests can spend time observing birds around the farm surroundings while enjoying the peaceful outdoor environment, making the activity suitable for families, nature lovers and groups."
    },
    {
        question: "Does Om Agri Tourism offer activities similar to a forest resort experience?",
        answer: "Om Agri Tourism offers a nature-oriented experience through its greenery, open farm setting and outdoor activities. While it is an agri tourism destination rather than a forest resort, guests can enjoy the peaceful surroundings along with bird watching, boating, horse riding and traditional farm experiences."
    },
    {
        question: "Can children enjoy a nature outing at Om Agri Tourism?",
        answer: "Children can have an enjoyable outdoor experience at Om Agri Tourism by exploring the farm surroundings and participating in suitable activities. Bird watching, boating, tractor rides and swimming can add variety to their day while giving them time away from indoor routines."
    },
    {
        question: "Can guests enjoy homemade food at Om Agri Tourism?",
        answer: "Guests can enjoy homemade food during their visit to Om Agri Tourism. Traditional meals complement the peaceful farm environment and make the day outing more satisfying, especially for families and groups who want to combine nature, recreation and local-style food."
    },
    {
        question: "Why choose Om Agri Tourism instead of a regular forest resort near Pune?",
        answer: "Om Agri Tourism offers a distinctive combination of nature, farm experiences and outdoor recreation. Along with greenery and bird watching, visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and homemade food, creating a countryside experience with plenty to explore."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sameer Korde",
        feedback:
            "We wanted a peaceful nature getaway near Pune and decided to visit Om Agri Tourism. The greenery and quiet farm atmosphere were exactly what we needed, and we also enjoyed bird watching, boating and the bull cart ride. It was a relaxing change from our usual weekend plans.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Meenal Thakur",
        feedback:
            "Our family spent a wonderful day at Om Agri Tourism surrounded by greenery. The children enjoyed the outdoor activities while we appreciated the calm surroundings and farm atmosphere. Horse riding, tractor rides and the homemade food made the outing feel different from a regular resort visit.",
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
  "name": "Forest Resorts Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/forest-resorts-near-pune.webp",
  "description": "Om Agro Tourism offers a peaceful nature-focused escape for visitors searching for Forest Resorts Near Pune and looking to spend quality time surrounded by greenery, open countryside and a refreshing rural atmosphere. Jungle resorts near Pune can be an appealing choice for families, couples, friends and groups who want to take a break from the busy city environment and enjoy a more natural setting. Visitors comparing the Best forest resorts near Pune can consider an agro-tourism destination that brings together countryside leisure, greenery, outdoor recreation and a calm atmosphere. Those searching for the Best jungle resorts near Pune can enjoy a nature-oriented outing where the surrounding landscape creates a refreshing backdrop for relaxation and group activities. A Forest stay near Pune can be suitable for visitors who want to experience peaceful surroundings, fresh air and a slower pace away from urban congestion. People searching for a mango forest resort Pune or Pune forest resort can explore destinations where agricultural landscapes, seasonal greenery and rural experiences create a distinctive outdoor environment. Om Agro Tourism provides an inviting setting for families planning weekend escapes, couples seeking quiet surroundings, friends organizing group outings and corporate teams looking for a nature-based retreat. Visitors can spend time in open surroundings, enjoy outdoor recreation and experience the charm of countryside life while remaining within convenient reach of Pune. Nature lovers searching for a Nature resort near Pune can consider an environment that combines agro-tourism with greenery and outdoor leisure. The destination can also suit one-day outings, family picnics, school visits, corporate gatherings and weekend recreational plans. Instead of a conventional urban resort experience, Om Agro Tourism provides a rural atmosphere where visitors can enjoy nature, open spaces and group togetherness. With its peaceful surroundings and agriculture-oriented setting, it offers a memorable option for people searching for forest-style, jungle-style and nature resort experiences near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/forest-resorts-near-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Forest Resorts Near Pune | Jungle, Nature & Forest Stay Experience | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers a peaceful forest-style and nature resort experience near Pune with greenery, countryside surroundings, outdoor recreation and relaxing stays."
  />

  <meta
    name="keywords"
    content="Forest Resorts Near Pune, Jungle resorts near Pune, Best forest resorts near Pune, Best jungle resorts near Pune, Forest stay near Pune, mango forest resort Pune, Pune forest resort, Nature resort near Pune, forest resort near Pune, forest resorts in Pune, jungle resort near Pune, jungle resorts in Pune, best jungle resort near Pune, best forest resort near Pune, nature resorts near Pune, nature stay near Pune, nature resort Pune, nature stay Pune, forest stay Pune, jungle stay near Pune, jungle stay Pune, forest getaway near Pune, nature getaway near Pune, forest retreat near Pune, nature retreat near Pune, countryside resort near Pune, countryside stay near Pune, greenery resort near Pune, resort surrounded by nature near Pune, resort in nature near Pune, agro tourism forest resort near Pune, agro tourism resort near Pune, farm resort near Pune, farm stay near Pune, rural resort near Pune, peaceful resort near Pune, peaceful nature resort near Pune, weekend forest resort near Pune, weekend jungle resort near Pune, weekend nature resort near Pune, one day forest resort near Pune, one day nature resort near Pune, forest picnic spot near Pune, jungle picnic near Pune, nature picnic spot near Pune, family forest resort near Pune, family nature resort near Pune, forest resort for couples near Pune, jungle resort for couples near Pune, forest resort for family near Pune, nature resort for family near Pune, forest resort for corporate outing near Pune, jungle resort for corporate outing near Pune, nature retreat for corporate near Pune, school nature outing near Pune, nature outing near Pune, outdoor resort near Pune, forest destination near Pune, jungle destination near Pune, nature destination near Pune, best nature places near Pune, mango orchard resort near Pune, mango farm resort near Pune, mango forest near Pune"
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
                            <img src='/images/keyword/13.jpg' alt='img' className='img-fluid' />
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

export default ForestResortsNearPune;