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

function Picnicspotnearsaswad() {

const cardData = {
    keyword: "Picnic Spot Near Saswad",
    headingDescription: "Om Agro Tourism offers a peaceful countryside setting for families, friends, students, and groups planning a picnic or one day outing near Saswad, Pune. Visitors can enjoy farm exploration, swimming, traditional rural activities, outdoor games, bird watching, horse riding, homemade food, and other recreational experiences in a relaxed agricultural environment. The destination provides a refreshing way to spend quality time away from the city's busy routine.",
    topPlaces: [
        {
            title: "Agricultural Farm Exploration",
            description: "Discover the working farm environment at Om Agro Tourism and experience the charm of rural surroundings. Guests can explore agricultural spaces, learn about farming activities, and enjoy a peaceful countryside atmosphere during their visit."
        },
        {
            title: "Refreshing Swimming Pool Time",
            description: "The swimming pool offers a refreshing recreational option for families and groups. Guests can cool down, relax, and enjoy quality time together while adding a fun water activity to their countryside outing."
        },
        {
            title: "Traditional Bull Cart Experience",
            description: "Enjoy a traditional bull cart ride and experience an authentic aspect of rural life. This activity gives children and adults an opportunity to enjoy countryside transportation while creating memorable moments during their picnic."
        },
        {
            title: "Exciting Tractor Ride",
            description: "A tractor ride provides a fun introduction to the agricultural side of countryside life. Visitors can enjoy the experience around the farm surroundings and add an interesting outdoor activity to their day."
        },
        {
            title: "Horse Riding Adventure",
            description: "Horse riding offers an engaging outdoor experience for visitors who enjoy active recreation. The peaceful farm environment provides a pleasant setting for families and groups to spend time outdoors and try something different."
        },
        {
            title: "Tasty Homemade Food",
            description: "Guests can enjoy tasty homemade food in a comfortable rural setting. Sharing satisfying meals with family or friends adds a warm and enjoyable dining experience to a full day of farm activities and recreation."
        },
        {
            title: "Bird Watching and Nature Time",
            description: "Spend quiet moments observing birds and enjoying the natural surroundings of the farm. Bird watching provides a relaxing activity for visitors who want to slow down and appreciate the peaceful countryside environment."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and outdoor games give families and groups several ways to stay entertained throughout their visit. These activities encourage interaction, friendly competition, and enjoyable participation for different age groups."
        },
        {
            title: "Rural Life and Farming Experience",
            description: "Experience the simplicity of rural culture through farming activities and traditional countryside surroundings. The combination of agriculture and recreation gives visitors a closer look at everyday village life."
        },
        {
            title: "Outdoor and Water Recreation",
            description: "Enjoy a combination of outdoor recreation and water-based activities during the visit. Guests can balance relaxation with fun experiences and make their picnic day more active and engaging at Om Agro Tourism."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Saswad",
            description: "Om Agro Tourism offers a peaceful agricultural environment for visitors searching for a picnic spot near Saswad, with farm experiences, recreational activities, homemade food, and open countryside surroundings."
        },
        {
            name: "One Day Picnic Spot Near Saswad",
            description: "A one day picnic at Om Agro Tourism can include swimming, farm exploration, outdoor games, traditional rides, horse riding, nature activities, and homemade food for a refreshing group outing."
        },
        {
            name: "Best Picnic Spot Near Saswad",
            description: "Families and groups looking for an enjoyable picnic destination near Saswad can experience a combination of rural surroundings, farm activities, recreation, traditional experiences, and countryside dining."
        },
        {
            name: "Family Picnic Spot Near Saswad",
            description: "Om Agro Tourism provides family-friendly activities such as swimming, horse riding, games, tractor rides, bull cart rides, bird watching, and farm exploration for an enjoyable day together."
        },
        {
            name: "Picnic Resort Near Saswad",
            description: "Visitors can enjoy a countryside picnic experience with agricultural surroundings, recreational facilities, traditional activities, nature experiences, and homemade meals at Om Agro Tourism."
        },
        {
            name: "One Day Picnic Resort Near Saswad",
            description: "Plan a complete one day outing with multiple activities including swimming, games, farm exploration, traditional rural rides, horse riding, bird watching, and tasty homemade food."
        },
        {
            name: "Best Resort Near Saswad for Picnic",
            description: "Om Agro Tourism provides a relaxed rural environment where guests can combine nature, agricultural experiences, recreation, and food while enjoying a memorable picnic near Saswad."
        },
        {
            name: "Family Resort Near Saswad",
            description: "Families can enjoy quality time through swimming, games, horse riding, traditional rides, farm activities, and homemade dining in the peaceful surroundings of Om Agro Tourism."
        },
        {
            name: "One Day Trip Near Saswad",
            description: "Om Agro Tourism is suitable for a refreshing one day trip where visitors can take a break from their regular routine and enjoy nature, farming experiences, recreational activities, and countryside food."
        },
        {
            name: "Family One Day Trip Near Saswad",
            description: "A family day trip becomes more enjoyable with activities suitable for different age groups, including swimming, farm exploration, games, tractor rides, bull cart experiences, and horse riding."
        },
        {
            name: "Picnic Places Near Saswad",
            description: "Visitors exploring picnic places near Saswad can consider Om Agro Tourism for its combination of open agricultural spaces, nature experiences, family-friendly activities, traditional rural attractions, and homemade food."
        },
        {
            name: "Best Picnic Places Near Saswad",
            description: "Om Agro Tourism brings together countryside relaxation and recreational activities, allowing groups to enjoy farm exploration, swimming, games, bird watching, traditional rides, and satisfying meals."
        },
        {
            name: "Affordable Picnic Spot Near Saswad",
            description: "Guests looking for an affordable picnic experience can enjoy several recreational and farm-based activities at one destination, making the outing suitable for families, friends, and groups."
        },
        {
            name: "Budget Picnic Resort Near Saswad",
            description: "Om Agro Tourism offers a practical choice for a budget-friendly countryside outing with opportunities for farm exploration, games, water recreation, traditional activities, and homemade food."
        },
        {
            name: "Picnic Spot Near Saswad Pune",
            description: "For visitors searching around Pune, Om Agro Tourism provides a peaceful agricultural setting where guests can enjoy nature, farm activities, rural experiences, outdoor recreation, and homemade meals."
        },
        {
            name: "Resort Near Saswad for Family Outing",
            description: "Families can spend quality time together through swimming, horse riding, bird watching, games, farm exploration, tractor rides, bull cart rides, and relaxed countryside dining."
        },
        {
            name: "One Day Resort Near Saswad",
            description: "A one day visit to Om Agro Tourism allows guests to combine relaxation and recreation through farm activities, swimming, games, nature experiences, traditional rides, and homemade food."
        },
        {
            name: "Nature Picnic Spot Near Saswad",
            description: "Nature lovers can enjoy open farm surroundings, bird watching, agricultural landscapes, and peaceful rural spaces at Om Agro Tourism while taking a break from the urban environment."
        },
        {
            name: "Picnic Spot Near Dive Ghat Saswad",
            description: "Visitors travelling around the Dive Ghat and Saswad region can choose Om Agro Tourism for a different countryside experience featuring farm activities, traditional rides, nature exploration, recreation, and homemade food."
        },
        {
            name: "Picnic Spot Near Purandar Saswad",
            description: "Guests exploring the Purandar-Saswad area can enjoy a countryside outing at Om Agro Tourism with agricultural experiences, swimming, games, horse riding, rural activities, and relaxed farm surroundings."
        },
        {
            name: "Family Picnic Resort Near Saswad",
            description: "Om Agro Tourism combines family-friendly recreation with a peaceful farm setting, giving children and adults opportunities to enjoy swimming, games, horse riding, traditional rides, and quality time together."
        },
        {
            name: "Picnic Spot with Activities Near Saswad",
            description: "Visitors looking for a picnic destination with activities can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, games, farm exploration, bird watching, and other outdoor experiences at Om Agro Tourism."
        }
    ],
    tableData: [
        ["Picnic Spot Near Saswad"],
        ["One Day Picnic Spot Near Saswad"],
        ["Best Picnic Spot Near Saswad"],
        ["Family Picnic Spot Near Saswad"],
        ["Picnic Resort Near Saswad"],
        ["One Day Picnic Resort Near Saswad"],
        ["Best Resort Near Saswad for Picnic"],
        ["Family Resort Near Saswad"],
        ["One Day Trip Near Saswad"],
        ["Family One Day Trip Near Saswad"],
        ["Picnic Places Near Saswad"],
        ["Best Picnic Places Near Saswad"],
        ["Affordable Picnic Spot Near Saswad"],
        ["Budget Picnic Resort Near Saswad"],
        ["Picnic Spot Near Saswad Pune"],
        ["Resort Near Saswad for Family Outing"],
        ["One Day Resort Near Saswad"],
        ["Nature Picnic Spot Near Saswad"],
        ["Picnic Spot Near Dive Ghat Saswad"],
        ["Picnic Spot Near Purandar Saswad"],
        ["Family Picnic Resort Near Saswad"],
        ["Picnic Spot with Activities Near Saswad"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Agricultural Surroundings",
            WhyChoosedescription: "Om Agro Tourism offers an open countryside environment where guests can relax away from crowded city spaces while enjoying farm landscapes, fresh surroundings, and the peaceful character of rural Maharashtra."
        },
        {
            WhyChooseheading: "Wide Range of Activities",
            WhyChoosedescription: "Visitors can choose from swimming, horse riding, games, tractor rides, bull cart rides, farm exploration, bird watching, and other recreational experiences, making the outing suitable for varied interests."
        },
        {
            WhyChooseheading: "Family-Friendly Experience",
            WhyChoosedescription: "The combination of nature, activities, food, and open spaces makes the destination comfortable for families looking to spend meaningful time together during a one day outing."
        },
        {
            WhyChooseheading: "Authentic Farm Experience",
            WhyChoosedescription: "Guests get an opportunity to explore agricultural surroundings and understand aspects of rural life, creating a more engaging experience than a conventional picnic focused only on relaxation."
        },
        {
            WhyChooseheading: "Refreshing Swimming and Water Activities",
            WhyChoosedescription: "Swimming and water-based recreation provide a refreshing way to enjoy the day, especially for families and groups who want to combine countryside relaxation with fun activities."
        },
        {
            WhyChooseheading: "Traditional Rural Attractions",
            WhyChoosedescription: "Bull cart rides and tractor rides add a traditional countryside element to the visit, allowing guests to experience activities connected with agricultural and village life."
        },
        {
            WhyChooseheading: "Homemade Food in a Rural Setting",
            WhyChoosedescription: "Tasty homemade food adds comfort to the outing and gives visitors an opportunity to enjoy satisfying meals while spending time in the peaceful surroundings of the farm."
        },
        {
            WhyChooseheading: "Nature and Recreation in One Place",
            WhyChoosedescription: "From bird watching and farm exploration to games, swimming, and outdoor activities, Om Agro Tourism allows guests to enjoy both nature and recreation as part of one complete countryside experience."
        }
    ]
};


const faqData = [
    {
        question: "How can visitors from Saswad enjoy a different kind of picnic at Om Agri Tourism?",
        answer: "A countryside visit can combine outdoor recreation with hands-on rural experiences in a relaxed farm setting. Guests can spend their day with swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food."
    },
    {
        question: "What should families from Saswad include in their Om Agri Tourism picnic plan?",
        answer: "A family itinerary can mix energetic activities with comfortable breaks so that every age group gets time to enjoy the outing. Swimming and boating can be paired with farm rides, nature observation and a leisurely homemade meal."
    },
    {
        question: "Which experiences make Om Agri Tourism suitable for a picnic near Saswad?",
        answer: "The destination brings together recreation and traditional farm activities rather than focusing on only one attraction. Horse riding, tractor rides and bull cart rides can be enjoyed alongside swimming, boating and bird watching for a more varied day."
    },
    {
        question: "Can school or student groups from Saswad visit Om Agri Tourism for a picnic?",
        answer: "Student groups can enjoy an outdoor setting where recreation and exposure to rural surroundings come together. Depending on the group's plan, activities such as boating, swimming, farm rides and bird watching can be included along with time for meals and group interaction."
    },
    {
        question: "What activities can children enjoy during a picnic near Saswad?",
        answer: "Children can participate in suitable activities with appropriate supervision, including swimming, boating and selected countryside rides. Bird watching also gives younger visitors an opportunity to observe nature and experience something different from a conventional city-based outing."
    },
    {
        question: "Is Om Agri Tourism a good choice for friends looking for a picnic destination from Saswad?",
        answer: "Friends can create an active day by combining water activities with traditional rides and outdoor exploration. Horse riding, tractor rides and bull cart rides can add variety to swimming and boating, while homemade food provides an easy opportunity to relax together."
    },
    {
        question: "Can senior citizens comfortably enjoy a picnic at Om Agri Tourism?",
        answer: "Older family members can follow a slower itinerary and focus on activities that suit their comfort level. Bird watching, enjoying the countryside atmosphere and sharing a homemade meal can be pleasant alternatives while other members take part in more active experiences."
    },
    {
        question: "What food experience can visitors expect during a picnic near Saswad?",
        answer: "Homemade food can be included as an important part of the countryside outing, giving guests a chance to enjoy a relaxed meal with their group. The traditional food experience works well alongside farm activities and nature-focused time during the visit."
    },
    {
        question: "How can a group organize a one-day picnic from Saswad at Om Agri Tourism?",
        answer: "Groups can choose a manageable combination of activities instead of trying to cover everything at once. A schedule may include swimming or boating, followed by horse riding or traditional farm rides, with dedicated time for food, bird watching and casual relaxation."
    },
    {
        question: "Why might travelers searching for a picnic spot near Saswad choose Om Agri Tourism?",
        answer: "Travelers wanting a countryside alternative can enjoy several forms of recreation without giving up peaceful time in a farm environment. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide different ways for families and groups to spend the day."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohan Shinde",
        feedback:
            "A simple picnic plan from Saswad turned into a much more engaging day than we expected. The traditional rides were a new experience for several people in our group, and the combination of boating, outdoor activities and homemade food kept the outing enjoyable from start to finish.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Neha Pawar",
        feedback:
            "The farm environment suited our family because everyone could choose activities according to their interest. The children enjoyed the recreational activities, while the elders appreciated the quiet surroundings and bird watching. Sharing a homemade meal together made the visit feel especially pleasant.",
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
  "name": "Picnic Spot Near Saswad",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-saswad.webp",
  "description": "Looking for a convenient picnic spot near Saswad for a relaxing family outing or group day trip? Om Agro Tourism offers a welcoming agro-tourism environment for families, friends, students and groups who want to take a refreshing break from their regular routine. A one day picnic near Saswad can be a practical option for spending quality time together, enjoying outdoor surroundings and creating memorable moments with loved ones. Visitors searching for the best picnic spot near Saswad can plan a comfortable day outing for family recreation, friends' gatherings or group leisure, while those looking for a family picnic spot near Saswad can enjoy a peaceful setting for shared experiences. A picnic resort near Saswad or one day picnic resort near Saswad can be considered for school picnics, family get-togethers, weekend recreation and casual group outings. Those planning a one day trip near Saswad can also choose an agro-tourism destination that combines outdoor leisure with a relaxed atmosphere. Om Agro Tourism is suited to families and groups searching for a memorable picnic destination around Saswad.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-saswad"
  }
};








    return (
        <div>


<Helmet>
  <title>
    Picnic Spot Near Saswad | Heritage Area Getaway, Family Fun & Outdoor Leisure | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a picnic spot near Saswad for families, friends and groups. Plan a one day picnic at Om Agro Tourism for outdoor leisure, family recreation and a refreshing day getaway."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Saswad, One Day Picnic Spot Near Saswad, Best Picnic Spot Near Saswad, Family Picnic Spot Near Saswad, Picnic Resort Near Saswad, One Day Picnic Resort Near Saswad, Best Resort Near Saswad for Picnic, Family Resort Near Saswad, One Day Trip Near Saswad, Family One Day Trip Near Saswad, Picnic Places Near Saswad, Best Picnic Places Near Saswad, Family Outing Near Saswad, One Day Outing Near Saswad, Picnic Destination Near Saswad, Agro Tourism Near Saswad, Best Family Picnic Near Saswad, Weekend Picnic Near Saswad"
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
                            <img src='/images/keyword/169.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearsaswad;