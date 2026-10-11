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

function Farmhouseonrentinpune() {


const cardData = {
    keyword: "Farm House On Rent in Pune",
    headingDescription: "Looking for a Farm House On Rent in Pune for a family gathering, weekend party, one-night stay, couple getaway, or relaxing break with friends? Om Agro Tourism provides a peaceful farm-based setting where visitors can enjoy open spaces, nature, outdoor recreation, comfortable leisure, and quality time away from the busy city routine. A farmhouse-style getaway can be suitable for day outings, private celebrations, weekend plans, family gatherings, and overnight stays, with the natural surroundings adding a refreshing countryside feel to the experience.",

    topPlaces: [
        {
            title: "Private Farmhouse Getaway",
            description: "Enjoy a peaceful break in a spacious countryside environment where family members, friends, or small groups can relax, spend time together, and enjoy the natural surroundings."
        },
        {
            title: "Farmhouse Party Experience",
            description: "Create a memorable celebration with open spaces, outdoor recreation, group activities, food, and a relaxed farm atmosphere suitable for birthdays, gatherings, and weekend parties."
        },
        {
            title: "Swimming Pool Leisure",
            description: "Add refreshing water recreation to your farmhouse experience and enjoy relaxed poolside time with family and friends during a private day outing or weekend break."
        },
        {
            title: "Weekend Countryside Retreat",
            description: "Escape the city's routine with a peaceful weekend surrounded by greenery, fresh air, open landscapes, and enjoyable outdoor experiences."
        },
        {
            title: "Couples Farm Stay",
            description: "Couples can enjoy a quieter countryside setting with nature, private leisure time, scenic surroundings, and a refreshing change from everyday urban life."
        },
        {
            title: "Family Farmhouse Gathering",
            description: "Bring family members together for a comfortable outdoor gathering with recreational activities, shared meals, nature experiences, and plenty of opportunities for quality time."
        },
        {
            title: "One-Day Farmhouse Experience",
            description: "Plan a convenient day outing with outdoor games, farm exploration, food, nature, and relaxing moments without needing an extended vacation."
        },
        {
            title: "Lakeside Nature Escape",
            description: "Enjoy a calm countryside atmosphere with scenic natural surroundings, open landscapes, peaceful leisure, and opportunities to spend time close to nature."
        },
        {
            title: "Group Outdoor Recreation",
            description: "Friends and larger groups can enjoy open-air games, recreational activities, farm experiences, and informal gatherings in a relaxed countryside environment."
        },
        {
            title: "Overnight Farmhouse Stay",
            description: "Extend your visit with an overnight experience that provides more time for relaxation, outdoor activities, shared meals, nature exploration, and peaceful countryside leisure."
        }
    ],

    services: [
        {
            name: "Farm house for rent near pune",
            description: "Find a peaceful farmhouse-style getaway near Pune for family gatherings, weekend relaxation, group outings, private celebrations, and quality time surrounded by nature."
        },
        {
            name: "farm house in pune for rent",
            description: "A farmhouse rental experience can provide open spaces, countryside surroundings, outdoor recreation, and a comfortable setting for families, friends, and groups."
        },
        {
            name: "farm house near pune on rent",
            description: "Enjoy a refreshing farm environment away from the city's busy routine with opportunities for outdoor activities, relaxation, group gatherings, and nature experiences."
        },
        {
            name: "farm house on rent pune",
            description: "Plan a convenient farmhouse outing in Pune for a family gathering, private celebration, weekend plan, or relaxing day surrounded by open countryside."
        },
        {
            name: "farm house pune rent",
            description: "Choose a farm-based rental experience for a comfortable getaway featuring natural surroundings, outdoor recreation, group activities, and peaceful leisure."
        },
        {
            name: "farmhouse for rent in pune",
            description: "A farmhouse for rent in Pune can be a practical choice for family outings, friends' gatherings, weekend breaks, celebrations, and relaxing stays in a natural setting."
        },
        {
            name: "farmhouse on rent near pune for party",
            description: "Plan a private party near Pune with spacious outdoor surroundings, group recreation, food, entertainment, and a relaxed farmhouse atmosphere."
        },
        {
            name: "farmhouse on rent pune",
            description: "Enjoy a farmhouse rental experience with open spaces, nature, outdoor activities, and a comfortable environment for groups looking for a short getaway."
        },
        {
            name: "pune farm house rent",
            description: "Explore a convenient farm stay option for day outings, family gatherings, weekend plans, private celebrations, and peaceful countryside relaxation."
        },
        {
            name: "farmhouse with swimming pool on rent near pune",
            description: "Combine farmhouse relaxation with refreshing poolside recreation for a fun-filled family outing, friends' gathering, weekend stay, or private celebration."
        },
        {
            name: "Farm House for Rent in Pune",
            description: "Enjoy a countryside farmhouse experience suitable for family gatherings, group outings, weekend stays, private events, and relaxing time away from the city."
        },
        {
            name: "farmhouse in pune with swimming pool",
            description: "A farmhouse with swimming pool can provide a combination of outdoor leisure, refreshing water activities, open surroundings, and quality time with family or friends."
        },
        {
            name: "farmhouse near pune for couples",
            description: "Couples can enjoy a peaceful countryside getaway with nature, open spaces, private leisure, and a relaxed atmosphere away from everyday city routines."
        },
        {
            name: "farmhouse near pune for weekend party",
            description: "Make your weekend more enjoyable with a farmhouse setting suitable for group celebrations, outdoor activities, food, music, and relaxed time with friends or family."
        },
        {
            name: "farmhouse near pune for one night stay",
            description: "An overnight farmhouse stay allows visitors to enjoy additional time for relaxation, outdoor recreation, shared meals, nature experiences, and peaceful countryside surroundings."
        },
        {
            name: "farm house near pune for one day",
            description: "Plan a convenient one-day farmhouse outing with nature, outdoor games, food, group recreation, and relaxing moments without requiring a long trip."
        },
        {
            name: "budget farmhouse near pune",
            description: "A budget-friendly farmhouse getaway can provide an enjoyable combination of countryside surroundings, outdoor recreation, group time, and relaxing experiences."
        },
        {
            name: "lakeside farmhouse near pune",
            description: "Enjoy a scenic countryside getaway with peaceful natural surroundings, open landscapes, relaxing views, and a refreshing atmosphere for a short stay."
        },
        {
            name: "farmhouse near pune for weekend",
            description: "Spend your weekend away from the city's routine with a comfortable farmhouse experience featuring nature, outdoor recreation, group activities, and peaceful leisure."
        }
    ],

    tableData: [
        ["Farm house for rent near pune"],
        ["farm house in pune for rent"],
        ["farm house near pune on rent"],
        ["farm house on rent pune"],
        ["farm house pune rent"],
        ["farmhouse for rent in pune"],
        ["farmhouse on rent near pune for party"],
        ["farmhouse on rent pune"],
        ["pune farm house rent"],
        ["farmhouse with swimming pool on rent near pune"],
        ["Farm House for Rent in Pune"],
        ["farmhouse in pune with swimming pool"],
        ["farmhouse near pune for couples"],
        ["farmhouse near pune for weekend party"],
        ["farmhouse near pune for one night stay"],
        ["farm house near pune for one day"],
        [" budget farmhouse near pune"],
        ["lakeside farmhouse near pune"],
        ["farmhouse near pune for weekend"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Farm Environment",
            WhyChoosedescription: "The countryside setting provides a refreshing escape from Pune's busy urban routine, giving visitors open surroundings for relaxation, recreation, and quality time together."
        },
        {
            WhyChooseheading: "Suitable for Private Gatherings",
            WhyChoosedescription: "Families, friends, and small groups can use the relaxed farmhouse environment for celebrations, get-togethers, weekend plans, and memorable shared experiences."
        },
        {
            WhyChooseheading: "Great for Weekend Breaks",
            WhyChoosedescription: "A farmhouse getaway offers a simple way to spend the weekend surrounded by nature while enjoying outdoor activities, food, relaxation, and informal group time."
        },
        {
            WhyChooseheading: "Family-Friendly Experience",
            WhyChoosedescription: "Families can enjoy open spaces, outdoor recreation, nature experiences, shared meals, and activities that make the outing enjoyable for different age groups."
        },
        {
            WhyChooseheading: "Refreshing Water Recreation",
            WhyChoosedescription: "Farmhouse experiences with water-based leisure can add another level of enjoyment, particularly for families and groups planning a fun-filled day or weekend."
        },
        {
            WhyChooseheading: "Ideal for Couples",
            WhyChoosedescription: "Couples can enjoy a quieter countryside atmosphere with natural surroundings, relaxed leisure, outdoor experiences, and quality time away from the city's daily schedule."
        },
        {
            WhyChooseheading: "Day and Overnight Flexibility",
            WhyChoosedescription: "Whether the plan is for a single day or an overnight getaway, a farmhouse setting provides flexibility for different types of short vacations, gatherings, and celebrations."
        },
        {
            WhyChooseheading: "Nature-Focused Getaway",
            WhyChoosedescription: "Green surroundings, open landscapes, farm experiences, and fresh outdoor spaces create a refreshing environment for visitors who want to reconnect with nature."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good picnic spot near Nashik?",
        answer: "Om Agri Tourism offers a peaceful farm environment for visitors looking for a refreshing picnic experience near Nashik. The greenery, open countryside surroundings and range of outdoor activities make it a suitable destination for families, friends and groups seeking a relaxing day away from their regular routine."
    },
    {
        question: "What activities can visitors enjoy at Om Agri Tourism?",
        answer: "Guests visiting Om Agri Tourism can enjoy several recreational and countryside activities, including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These experiences give visitors different ways to enjoy their picnic while spending time in a natural farm setting."
    },
    {
        question: "Is Om Agri Tourism suitable for a family picnic near Nashik?",
        answer: "Families can enjoy a relaxed day at Om Agri Tourism with activities that can appeal to children as well as adults. The farm surroundings provide space for family time, while boating, swimming, bird watching and traditional rides add variety to the picnic experience."
    },
    {
        question: "Can children enjoy a picnic at Om Agri Tourism?",
        answer: "Children can experience a fun outdoor outing at Om Agri Tourism by exploring the farm surroundings and participating in suitable activities. Tractor rides, boating and bird watching can keep younger visitors engaged while giving them an opportunity to enjoy a countryside environment."
    },
    {
        question: "Can friends plan a picnic at Om Agri Tourism near Nashik?",
        answer: "Friends can enjoy a group picnic at Om Agri Tourism by combining outdoor recreation with time spent in the peaceful countryside. Swimming, boating, horse riding and bull cart rides provide enjoyable options for groups looking to spend a memorable day together."
    },
    {
        question: "Does Om Agri Tourism offer homemade food during a picnic?",
        answer: "Homemade food adds a traditional touch to the picnic experience at Om Agri Tourism. Visitors can enjoy a satisfying meal during their outing and relax in the farm surroundings before continuing with activities and exploring the peaceful countryside."
    },
    {
        question: "Is Om Agri Tourism suitable for a weekend picnic near Nashik?",
        answer: "Those planning a weekend break can consider Om Agri Tourism for a nature-oriented picnic experience. The combination of greenery, farm surroundings and outdoor activities provides a refreshing alternative to spending the weekend in a busy urban environment."
    },
    {
        question: "Can couples enjoy a picnic at Om Agri Tourism?",
        answer: "Couples can spend a peaceful day at Om Agri Tourism surrounded by greenery and open farm landscapes. Boating, horse riding and bird watching can add enjoyable moments to the outing, while the calm countryside atmosphere offers a pleasant change from everyday routines."
    },
    {
        question: "What makes Om Agri Tourism different from a regular picnic spot near Nashik?",
        answer: "Om Agri Tourism combines the relaxed feel of a picnic with traditional farm experiences and outdoor recreation. Visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching while also experiencing greenery, homemade food and a peaceful rural atmosphere."
    },
    {
        question: "Why choose Om Agri Tourism when looking for a picnic spot near Nashik?",
        answer: "Om Agri Tourism provides a countryside setting where visitors can combine relaxation, farm experiences and outdoor activities in one outing. Families, friends and groups can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food while spending quality time together."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Prasad Shinde",
        feedback:
            "Our family visited Om Agri Tourism for a picnic and had a wonderful time. The children enjoyed the tractor ride and boating, while we loved the greenery and peaceful farm atmosphere. The homemade food was delicious and made the day even more enjoyable.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Tanvi More",
        feedback:
            "We went to Om Agri Tourism with our friends for a relaxing picnic and really enjoyed the countryside experience. Horse riding, bird watching and the bull cart ride gave us plenty to do, while the calm surroundings helped everyone unwind. It was a refreshing day out.",
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
  "name": "Farm House On Rent in Pune",
  "image": "https://www.omagrotourism.com/assets/images/farm-house-on-rent-in-pune.webp",
  "description": "Om Agro Tourism offers a peaceful Farm House On Rent in Pune experience for families, couples, friends, small groups and visitors looking for a private countryside setting for celebrations, gatherings and leisure time. People searching for a Farm house for rent near Pune can consider a nature-oriented destination away from the busy city environment, where open surroundings and rural landscapes create a relaxed atmosphere. A farm house in Pune for rent can be suitable for birthday celebrations, family get-togethers, private gatherings, weekend plans and group recreation. Visitors looking for a Farm house near Pune on rent can enjoy the convenience of spending quality time in a countryside setting without planning a long-distance trip. Those searching for a Farm house on rent Pune or Farm house Pune rent can choose a destination that combines the charm of agricultural surroundings with comfortable leisure spaces and outdoor experiences. A farmhouse for rent in Pune can be useful for families and friends who want a change from conventional indoor venues and prefer a more open environment. Visitors searching for a farmhouse on rent near Pune for party can consider an agro-tourism setting for birthdays, reunions, pre-wedding gatherings, small celebrations and private group events, subject to applicable venue guidelines. A farmhouse on rent Pune can also suit visitors planning a relaxed day outing, family gathering or short countryside escape. People comparing Pune farm house rent options can look for a destination that offers natural surroundings, recreational possibilities and convenient access from the city. A farmhouse with swimming pool on rent near Pune can be an appealing choice for groups who want to combine outdoor leisure with a refreshing poolside experience, subject to package and facility availability. Farm House for Rent in Pune options can also appeal to couples looking for a peaceful break away from crowded urban locations. Visitors searching for a farmhouse in Pune with swimming pool can enjoy a more relaxed setting where leisure, nature and outdoor recreation come together. A farmhouse near Pune for couples can provide an intimate countryside atmosphere suitable for a short getaway, celebration or quality time together. Om Agro Tourism offers an agro-tourism environment where guests can enjoy greenery, agricultural surroundings and open spaces while spending time with their preferred group. The destination can be suitable for birthday parties, family functions, friends' gatherings, corporate get-togethers and weekend leisure plans. With its rural charm and recreation-focused setting, Om Agro Tourism provides a distinctive option for visitors searching for farmhouses on rent near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/farm-house-on-rent-in-pune"
  }
};





    return (
        <div>
<Helmet>
  <title>
    Farm House On Rent in Pune | Party, Pool & Couple Farmhouse Rental | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers a countryside farmhouse rental experience near Pune for parties, family gatherings, couples, friends and leisure outings."
  />

  <meta
    name="keywords"
    content="Farm House On Rent in Pune, Farm house for rent near Pune, farm house in Pune for rent, farm house near Pune on rent, farm house on rent Pune, farm house Pune rent, farmhouse for rent in Pune, farmhouse on rent near Pune for party, farmhouse on rent Pune, Pune farm house rent, farmhouse with swimming pool on rent near Pune, Farm House for Rent in Pune, farmhouse in Pune with swimming pool, farmhouse near Pune for couples, farmhouse rental near Pune, farmhouse for rent near Pune, farmhouse on rent near Pune, farm house rental Pune, farm house rent Pune, farm stay near Pune, farmhouse stay near Pune, private farmhouse near Pune, private farm house on rent near Pune, farmhouse for party near Pune, farmhouse party venue near Pune, farmhouse for birthday party near Pune, farmhouse for family gathering near Pune, farmhouse for friends near Pune, farmhouse for weekend near Pune, farmhouse for one day near Pune, one day farmhouse near Pune, farmhouse for day outing near Pune, farmhouse for corporate outing near Pune, farmhouse for group outing near Pune, farmhouse for wedding function near Pune, farmhouse for celebration near Pune, farmhouse for events near Pune, farmhouse venue near Pune, farm party place near Pune, farm party venue Pune, party farmhouse Pune, birthday farmhouse Pune, private party farmhouse near Pune, farmhouse with pool near Pune, farmhouse with swimming pool near Pune, farmhouse swimming pool rental Pune, farmhouse with pool on rent Pune, farmhouse with swimming pool on rent Pune, swimming pool farmhouse near Pune, pool farmhouse near Pune, farmhouse for couples near Pune, couple farmhouse near Pune, romantic farmhouse near Pune, farmhouse stay for couples near Pune, farmhouse for family near Pune, family farmhouse near Pune, farmhouse for friends near Pune, friends farmhouse near Pune, farmhouse near Pune for weekend, weekend farmhouse near Pune, luxury farmhouse near Pune, affordable farmhouse near Pune, budget farmhouse near Pune, best farmhouse near Pune, best farmhouse for rent near Pune, best farmhouse on rent near Pune, farm house near Pune for picnic, farmhouse picnic near Pune, agro tourism farmhouse near Pune, agro tourism near Pune, agri tourism near Pune, farm tourism near Pune, countryside farmhouse near Pune, nature farmhouse near Pune, farm resort near Pune, private farm resort near Pune, farmhouse near Pune for one night stay, overnight farmhouse near Pune, farmhouse for short stay near Pune, farmhouse for group stay near Pune"
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
                            <img src='/images/keyword/27.jpg' alt='img' className='img-fluid' />
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

export default Farmhouseonrentinpune;