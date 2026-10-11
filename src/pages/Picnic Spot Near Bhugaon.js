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

function Picnicspotnearbhugaon() {

const cardData = {
    keyword: "Picnic Spot Near Bhugaon",

    headingDescription: "Looking for a relaxing picnic spot near Bhugaon for a family outing, one day trip, or weekend break? Om Agro Tourism offers a refreshing countryside experience where visitors can enjoy open surroundings, farm-based experiences, outdoor recreation, homemade food, and quality time with family and friends. It is a convenient choice for people searching for an affordable, nature-focused and activity-filled picnic experience near Bhugaon, Bavdhan and Mulshi.",

   topPlaces: [
    {
        title: "Bhugaon Family Picnic Experience",
        description: "Families searching for a picnic spot near Bhugaon can enjoy a relaxed day surrounded by greenery, open spaces, homemade food and engaging activities. The setting works well for parents and children looking for a comfortable break from Pune's busy routine."
    },
    {
        title: "Bhugaon One Day Family Retreat",
        description: "A one day picnic near Bhugaon gives families enough time to enjoy meals, recreation, countryside surroundings and shared activities without needing an overnight stay. It is a practical option for a simple and enjoyable family day out."
    },
    {
        title: "Affordable Bhugaon Picnic Day",
        description: "Visitors comparing affordable picnic spots near Bhugaon can plan a value-focused outing that combines relaxation, food and recreational experiences. The countryside atmosphere adds a refreshing touch while keeping the day convenient for families and groups."
    },
    {
        title: "Bhugaon Nature Escape",
        description: "Those interested in a nature picnic near Bhugaon can spend their day away from crowded city areas while enjoying greenery, fresh surroundings and rural experiences. The peaceful environment makes the outing suitable for visitors seeking relaxation alongside outdoor activities."
    },
    {
        title: "Bavdhan-Bhugaon Family Outing",
        description: "Families from Bavdhan and Bhugaon can choose a nearby countryside destination for a refreshing outing featuring food, games, farm experiences and open surroundings. It provides an easy way to turn a regular weekend into a memorable family day."
    },
    {
        title: "Mulshi Side Picnic Getaway",
        description: "Visitors travelling from the Mulshi side can enjoy a convenient picnic experience near Bhugaon with opportunities for countryside exploration, recreation and family time. The combination of natural surroundings and activities makes the day more engaging."
    },
    {
        title: "Bhugaon Budget Resort Day",
        description: "A budget-friendly resort-style outing near Bhugaon can bring together relaxation, homemade meals and recreational activities in one planned day. It suits families and friends who want a comfortable picnic without the expense of an overnight holiday."
    },
    {
        title: "Bhugaon Group Recreation Day",
        description: "Groups looking for picnic places near Bhugaon can enjoy a day designed around shared recreation, games, food and outdoor experiences. The open environment allows friends and larger groups to spend meaningful time together away from their usual surroundings."
    },
    {
        title: "Bhugaon Rural Farm Visit",
        description: "A farm-focused outing gives visitors searching for picnic places near Bhugaon an opportunity to experience rural surroundings and learn more about agricultural activities. The combination of farming, food and recreation creates a different kind of weekend experience."
    },
    {
        title: "Bhugaon Activity Picnic",
        description: "Visitors searching for a picnic spot with activities near Bhugaon can enjoy a more energetic day with games, outdoor recreation, farm experiences and other family-friendly entertainment. It is suitable for people who prefer an outing with plenty to do rather than simple sightseeing."
    }
],

    services: [
        {
            name: "Picnic Spot Near Bhugaon",
            description: "Om Agro Tourism offers a refreshing picnic experience near Bhugaon with natural surroundings, open spaces, food and recreational activities suitable for families and groups."
        },
        {
            name: "One Day Picnic Spot Near Bhugaon",
            description: "Enjoy a complete one day outing near Bhugaon with opportunities for relaxation, outdoor recreation, farm experiences and enjoyable time with family or friends."
        },
        {
            name: "Best Picnic Spot Near Bhugaon",
            description: "Visitors searching for the best picnic spot near Bhugaon can enjoy a balanced countryside experience combining nature, food, recreation and family-friendly activities."
        },
        {
            name: "Family Picnic Spot Near Bhugaon",
            description: "Families can spend quality time together in a peaceful setting with open surroundings, games, farm experiences and activities suitable for different age groups."
        },
        {
            name: "Picnic Resort Near Bhugaon",
            description: "A picnic resort experience near Bhugaon provides a convenient combination of relaxation, food, recreation and countryside surroundings for a comfortable day outing."
        },
        {
            name: "One Day Picnic Resort Near Bhugaon",
            description: "Plan a one day picnic resort experience near Bhugaon where families and groups can enjoy recreation, natural surroundings and a relaxed schedule without staying overnight."
        },
        {
            name: "Best Resort Near Bhugaon for Picnic",
            description: "Those looking for the best resort near Bhugaon for picnic can enjoy a well-rounded day with outdoor activities, farm experiences, homemade food and peaceful surroundings."
        },
        {
            name: "Family Resort Near Bhugaon",
            description: "The family-friendly setting provides space for parents and children to relax together while enjoying games, food, countryside views and engaging recreational experiences."
        },
        {
            name: "One Day Trip Near Bhugaon",
            description: "A one day trip near Bhugaon can be planned as a refreshing escape featuring countryside exploration, outdoor recreation, food and memorable moments with companions."
        },
        {
            name: "Family One Day Trip Near Bhugaon",
            description: "Families can enjoy a convenient one day trip near Bhugaon with activities, farm-based experiences, open spaces and opportunities to spend uninterrupted time together."
        },
        {
            name: "Picnic Places Near Bhugaon",
            description: "For visitors comparing picnic places near Bhugaon, Om Agro Tourism offers a rural environment where food, nature, recreation and family activities can be enjoyed during the same outing."
        },
        {
            name: "Best Picnic Places Near Bhugaon",
            description: "The experience combines natural surroundings with recreational options and farm activities, making it a practical choice for visitors exploring the best picnic places near Bhugaon."
        },
        {
            name: "Affordable Picnic Spot Near Bhugaon",
            description: "An affordable picnic experience near Bhugaon allows families and groups to enjoy a complete day of recreation, food and relaxation while maintaining a practical outing budget."
        },
        {
            name: "Budget Picnic Resort Near Bhugaon",
            description: "Visitors searching for a budget picnic resort near Bhugaon can enjoy countryside relaxation, family recreation and food in a comfortable setting designed for day visitors."
        },
        {
            name: "Picnic Spot Near Bhugaon Pune",
            description: "Located within the Pune region, this countryside destination gives visitors searching for a picnic spot near Bhugaon Pune an opportunity to enjoy nature, recreation and farm-based experiences."
        },
        {
            name: "Resort Near Bhugaon for Family Outing",
            description: "Families can choose a resort-style outing near Bhugaon for a relaxed day featuring open surroundings, food, games and activities that encourage everyone to participate."
        },
        {
            name: "One Day Resort Near Bhugaon",
            description: "A one day resort experience near Bhugaon is suitable for visitors who want a refreshing countryside break with recreational activities and food without booking an overnight stay."
        },
        {
            name: "Nature Picnic Spot Near Bhugaon",
            description: "Nature lovers can enjoy greenery, open surroundings and a peaceful rural atmosphere while spending time with family or friends at a nature-focused picnic destination."
        },
        {
            name: "Picnic Spot Near Bavdhan Bhugaon",
            description: "Visitors from Bavdhan and nearby Bhugaon can plan a convenient countryside picnic featuring farm surroundings, recreation, food and activities for a relaxed day away from the city."
        },
        {
            name: "Picnic Spot Near Mulshi Bhugaon",
            description: "People travelling from the Mulshi side can enjoy a refreshing picnic near Bhugaon with rural surroundings, outdoor recreation, farm experiences and family-friendly activities."
        },
        {
            name: "Family Picnic Resort Near Bhugaon",
            description: "A family picnic resort experience near Bhugaon brings together relaxation, food, open spaces and recreational activities to create an enjoyable day for parents, children and groups."
        },
        {
            name: "Picnic Spot with Activities Near Bhugaon",
            description: "Visitors can make their outing more engaging with a range of recreational experiences including games, farm activities and outdoor entertainment, making the destination suitable for an activity-filled picnic."
        }
    ],

    tableData: [
        ["Picnic Spot Near Bhugaon"],
        ["One Day Picnic Spot Near Bhugaon"],
        ["Best Picnic Spot Near Bhugaon"],
        ["Family Picnic Spot Near Bhugaon"],
        ["Picnic Resort Near Bhugaon"],
        ["One Day Picnic Resort Near Bhugaon"],
        ["Best Resort Near Bhugaon for Picnic"],
        ["Family Resort Near Bhugaon"],
        ["One Day Trip Near Bhugaon"],
        ["Family One Day Trip Near Bhugaon"],
        ["Picnic Places Near Bhugaon"],
        ["Best Picnic Places Near Bhugaon"],
        ["Affordable Picnic Spot Near Bhugaon"],
        ["Budget Picnic Resort Near Bhugaon"],
        ["Picnic Spot Near Bhugaon Pune"],
        ["Resort Near Bhugaon for Family Outing"],
        ["One Day Resort Near Bhugaon"],
        ["Nature Picnic Spot Near Bhugaon"],
        ["Picnic Spot Near Bavdhan Bhugaon"],
        ["Picnic Spot Near Mulshi Bhugaon"],
        ["Family Picnic Resort Near Bhugaon"],
        ["Picnic Spot with Activities Near Bhugaon"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Environment",
            WhyChoosedescription: "The rural setting near Bhugaon provides a refreshing change from crowded urban surroundings, giving families and groups a comfortable place to relax, reconnect and enjoy their day."
        },
        {
            WhyChooseheading: "Suitable for Different Age Groups",
            WhyChoosedescription: "Children, adults and senior family members can all find suitable ways to enjoy the outing through relaxed spaces, games, farm experiences and family-oriented recreation."
        },
        {
            WhyChooseheading: "Multiple Experiences in One Visit",
            WhyChoosedescription: "Instead of limiting the outing to a single attraction, visitors can combine food, nature exploration, farming experiences, games and outdoor recreation during the same visit."
        },
        {
            WhyChooseheading: "Convenient Day Outing Option",
            WhyChoosedescription: "A full-day visit makes it easier for families and groups to enjoy a countryside escape without the planning and additional expense associated with an overnight trip."
        },
        {
            WhyChooseheading: "Farm-Based Experiences",
            WhyChoosedescription: "Visitors get an opportunity to experience rural surroundings and understand aspects of farming and village life, adding an educational and authentic element to the picnic."
        },
        {
            WhyChooseheading: "Family-Friendly Recreation",
            WhyChoosedescription: "A variety of indoor and outdoor recreational options helps families keep different age groups engaged while creating opportunities for shared activities and memorable moments."
        },
        {
            WhyChooseheading: "Fresh Homemade Food",
            WhyChoosedescription: "Enjoying tasty homemade food in a peaceful countryside setting adds to the overall picnic experience and gives visitors a more traditional and comfortable dining option."
        },
        {
            WhyChooseheading: "Ideal for Groups and Families",
            WhyChoosedescription: "The destination works well for family gatherings, friend groups and planned outings where visitors want a combination of relaxation, recreation, food and open natural surroundings."
        }
    ]
};


const faqData = [
    {
        question: "What can visitors from Pirangut enjoy at Om Agri Tourism?",
        answer: "A picnic at Om Agri Tourism can bring together outdoor recreation, farm experiences and time in a natural countryside setting. Guests from Pirangut can enjoy swimming, boating and horse riding, while tractor rides, bull cart rides, bird watching and homemade food add more variety to the outing."
    },
    {
        question: "How can families from Pirangut make the most of a picnic day?",
        answer: "Families can create a flexible plan that balances energetic activities with peaceful breaks. Swimming or boating can be followed by a meal and a countryside ride, while bird watching and time around the farm allow everyone to enjoy the outing according to their comfort."
    },
    {
        question: "Which activities are available at a picnic spot near Pirangut Pune?",
        answer: "The outing can include several recreational and rural experiences, such as swimming, boating, horse riding, tractor rides and bull cart rides. Guests looking for a quieter experience can also spend time bird watching and enjoying homemade food in the farm surroundings."
    },
    {
        question: "Can friends from Pirangut plan a group outing at Om Agri Tourism?",
        answer: "Friends can enjoy a group picnic by combining activities that encourage everyone to participate. Boating, swimming and horse riding can keep the day active, while tractor rides, bull cart rides, food and relaxed conversations can make the remaining time enjoyable."
    },
    {
        question: "What makes a countryside picnic different from regular outing places near Pirangut?",
        answer: "The farm environment allows visitors to experience rural activities alongside conventional outdoor recreation. Horse riding, tractor rides and bull cart rides give the outing a traditional character, while swimming, boating and bird watching provide additional ways to spend the day."
    },
    {
        question: "Is Om Agri Tourism suitable for children visiting from Pirangut?",
        answer: "Children can enjoy suitable outdoor activities such as swimming, boating and selected riding experiences under responsible adult supervision. Bird watching can also make the trip more interesting by giving young visitors an opportunity to observe nature and experience a farm environment."
    },
    {
        question: "Can senior citizens comfortably join a family picnic near Pirangut?",
        answer: "Senior guests can enjoy the visit without needing to participate in every active experience. Homemade food, bird watching, greenery and family conversations can provide a comfortable part of the day while younger members explore swimming, boating and countryside rides."
    },
    {
        question: "What is a practical itinerary for a one-day picnic from Pirangut?",
        answer: "Groups can begin with swimming or boating and then keep time for a meal and relaxation. Horse riding, tractor rides or bull cart rides can be added later, with the remaining schedule reserved for bird watching, photography and enjoying the peaceful farm surroundings."
    },
    {
        question: "Can office groups from Pirangut use Om Agri Tourism for an outdoor outing?",
        answer: "A countryside outing can give colleagues an opportunity to interact away from their regular office environment. Shared recreational activities, farm rides and meals can create a relaxed setting for team conversations and informal bonding during the day."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Pirangut?",
        answer: "People seeking a refreshing break from the usual routine can find recreation, rural experiences, nature and food in one farm setting. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching offer different ways for families, friends and groups to enjoy a memorable picnic."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Amol Shinde",
        feedback:
            "Our Pirangut group wanted an outing that offered more than simply sitting together, and the variety of activities worked perfectly. Boating and swimming kept us active, while the tractor and bull cart rides gave us an enjoyable countryside experience. The homemade meal was a pleasant addition.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Vaishali More",
        feedback:
            "A peaceful farm environment made our family picnic feel very different from our usual plans. The children enjoyed the activities and rides, while the elders spent more time with bird watching, food and conversations. Having choices for every age group made the visit comfortable and enjoyable.",
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
  "name": "Picnic Spot Near Bhugaon",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-bhugaon.webp",
  "description": "Looking for a peaceful picnic spot near Bhugaon for a refreshing family or group outing? Om Agro Tourism offers a welcoming agro-tourism destination for families, friends, students and groups planning a relaxed day away from their regular routine. A one day picnic near Bhugaon can be a convenient option for spending quality time with loved ones, enjoying outdoor surroundings and creating memorable moments together. Families searching for the best picnic spot near Bhugaon can plan a comfortable family picnic with a relaxed atmosphere, while visitors comparing a picnic resort near Bhugaon can choose a destination suited to casual gatherings, weekend recreation and group leisure. The setting can also work well for friends' get-togethers, school outings, family celebrations and planned one day trips. Om Agro Tourism brings together the charm of an agro-tourism environment and the appeal of a simple outdoor day retreat, making it a suitable choice for those searching for a family resort near Bhugaon or an enjoyable picnic destination around the area.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-bhugaon"
  }
};




    return (
        <div>



<Helmet>
  <title>
    Picnic Spot Near Bhugaon | Family Day Retreat, Outdoor Fun & Weekend Recreation | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a picnic spot near Bhugaon for families, friends and groups. Plan a one day picnic at Om Agro Tourism for outdoor recreation, family leisure and a refreshing day retreat."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Bhugaon, One Day Picnic Spot Near Bhugaon, Best Picnic Spot Near Bhugaon, Family Picnic Spot Near Bhugaon, Picnic Resort Near Bhugaon, One Day Picnic Resort Near Bhugaon, Best Resort Near Bhugaon for Picnic, Family Resort Near Bhugaon, One Day Trip Near Bhugaon, Family One Day Trip Near Bhugaon, Picnic Places Near Bhugaon, Best Picnic Places Near Bhugaon, Family Outing Near Bhugaon, One Day Outing Near Bhugaon, Picnic Destination Near Bhugaon, Agro Tourism Near Bhugaon, Best Family Picnic Near Bhugaon, Weekend Picnic Near Bhugaon"
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
                            <img src='/images/keyword/163.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearbhugaon;