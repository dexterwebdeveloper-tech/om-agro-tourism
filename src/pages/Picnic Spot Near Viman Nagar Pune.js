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

function PicnicspotNearVimanNagarPune() {

const cardData = {
    keyword: "Picnic Spot Near Viman Nagar Pune",
    headingDescription: "Looking for a refreshing picnic spot near Viman Nagar Pune? Om Agro Tourism offers a peaceful countryside escape where families, friends, school groups, and corporate teams can enjoy a memorable day surrounded by nature. Guests can experience farm activities, outdoor games, homemade food, water-based fun, and traditional rural experiences, making it a convenient choice for a one day picnic near Viman Nagar, Kharadi, Airport Road, and Pune Airport.",
    topPlaces: [
        {
            title: "Indoor and Outdoor Games",
            description: "Enjoy a lively picnic experience with indoor and outdoor games suitable for families, friends, children, and corporate groups. The activity area adds fun and entertainment to a relaxed countryside outing."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Explore the rural side of Pune through farm tours and engaging workshops that provide visitors with a closer look at agriculture, village life, and natural surroundings while enjoying a peaceful day away from the city."
        },
        {
            title: "Boating",
            description: "Boating offers a refreshing outdoor activity for visitors looking to add a calm and enjoyable experience to their picnic. It works well for families and groups seeking something different during their one day outing."
        },
        {
            title: "Tasty Homemade Food",
            description: "Enjoy delicious homemade food prepared with a traditional touch during your picnic. The farm-style dining experience complements the natural surroundings and makes the outing more satisfying for families and groups."
        },
        {
            title: "Bird Watching",
            description: "Spend quiet moments observing birds and enjoying the natural environment around the farm. Bird watching gives nature lovers and families an opportunity to slow down and experience the peaceful countryside atmosphere."
        },
        {
            title: "Water Park Activities",
            description: "Add excitement to your picnic with water park activities designed for visitors who enjoy energetic outdoor recreation. These activities make the destination suitable for family outings, group picnics, and weekend breaks."
        },
        {
            title: "Horse Riding",
            description: "Experience an enjoyable rural activity with horse riding at the farm. It brings an adventurous touch to a family picnic and can be an exciting addition for children, youngsters, and group visitors."
        },
        {
            title: "Tractor Ride",
            description: "Take part in a traditional countryside tractor ride and discover a different side of farm life. This activity creates a memorable rural experience for families, children, and visitors enjoying a day away from Pune city."
        },
        {
            title: "Swimming Pool",
            description: "Relax and have fun in the swimming pool during your picnic outing. The pool provides a refreshing activity for families and groups looking to combine countryside relaxation with enjoyable water-based recreation."
        },
        {
            title: "Bull Cart Ride",
            description: "Enjoy the charm of traditional village transportation with a bull cart ride around the farm environment. This simple rural activity gives families and visitors a memorable experience connected with Maharashtra's countryside culture."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Viman Nagar Pune",
            description: "Om Agro Tourism provides a peaceful countryside setting for visitors searching for a picnic spot near Viman Nagar Pune, with farm experiences, recreation, food, nature, and traditional activities suitable for a relaxed day outing."
        },
        {
            name: "One Day Picnic Spot Near Viman Nagar",
            description: "Plan a complete one day picnic near Viman Nagar with a combination of outdoor activities, farm experiences, homemade meals, nature exploration, and recreational options designed for families and groups."
        },
        {
            name: "Best Picnic Spot Near Viman Nagar Pune",
            description: "Visitors looking for the best picnic spot near Viman Nagar Pune can enjoy a countryside destination that combines natural surroundings, engaging activities, traditional experiences, and food for a memorable day away from the busy city."
        },
        {
            name: "Family Picnic Spot Near Viman Nagar",
            description: "Families can spend quality time together at Om Agro Tourism with child-friendly activities, open spaces, farm experiences, games, food, and refreshing outdoor recreation suitable for different age groups."
        },
        {
            name: "Picnic Resort Near Viman Nagar",
            description: "A countryside picnic resort near Viman Nagar can be a convenient choice for visitors wanting a break from urban surroundings. Om Agro Tourism brings together nature, activities, food, and rural experiences in one destination."
        },
        {
            name: "One Day Picnic Resort Near Viman Nagar",
            description: "Enjoy a planned one day outing with access to multiple recreational activities, farm attractions, homemade food, and relaxing natural surroundings, making the destination suitable for families and organized groups."
        },
        {
            name: "Best Resort Near Viman Nagar for Picnic",
            description: "For visitors comparing the best resort near Viman Nagar for a picnic, Om Agro Tourism offers a combination of countryside ambience, activities, traditional farm experiences, and food that can make a day trip more enjoyable."
        },
        {
            name: "Family Resort Near Viman Nagar",
            description: "Families can choose a peaceful farm-based destination where children and adults can participate in recreational activities, explore rural surroundings, enjoy homemade food, and spend meaningful time together."
        },
        {
            name: "One Day Trip Near Viman Nagar",
            description: "A one day trip near Viman Nagar becomes more enjoyable with a change of scenery, outdoor recreation, farm activities, nature experiences, and traditional attractions that provide a refreshing break from the city."
        },
        {
            name: "Family One Day Trip Near Viman Nagar",
            description: "Plan a family one day trip with activities that appeal to both children and adults, including games, farm tours, water activities, horse riding, homemade food, and peaceful nature experiences."
        },
        {
            name: "Picnic Places Near Viman Nagar",
            description: "Among picnic places near Viman Nagar, a farm-based destination offers a different experience through open surroundings, rural activities, natural exploration, food, and recreation suitable for families and groups."
        },
        {
            name: "Best Picnic Places Near Viman Nagar",
            description: "Those searching for the best picnic places near Viman Nagar can enjoy a countryside outing filled with varied activities, farm experiences, traditional attractions, and relaxing spaces away from the city's busy routine."
        },
        {
            name: "Affordable Picnic Spot Near Viman Nagar",
            description: "An affordable picnic spot near Viman Nagar can provide meaningful recreation without requiring a complicated travel plan. Om Agro Tourism combines multiple activities and countryside experiences for an enjoyable day outing."
        },
        {
            name: "Budget Picnic Resort Near Viman Nagar",
            description: "Visitors planning a budget-friendly picnic can enjoy a range of farm and recreational experiences in one destination. The setting is suitable for families and groups seeking value along with a refreshing outdoor break."
        },
        {
            name: "Picnic Spot Near Kharadi Viman Nagar",
            description: "Located as a countryside escape for visitors around the Kharadi and Viman Nagar side of Pune, Om Agro Tourism offers farm activities, games, nature experiences, food, and traditional attractions for a refreshing picnic."
        },
        {
            name: "Resort Near Viman Nagar for Family Outing",
            description: "Families planning an outing can enjoy a combination of open spaces, farm tours, games, water activities, horse riding, homemade food, and rural experiences at Om Agro Tourism."
        },
        {
            name: "One Day Resort Near Viman Nagar",
            description: "Make the most of a one day resort-style outing with countryside activities, nature exploration, traditional farm attractions, recreational games, and food that help create a complete day experience."
        },
        {
            name: "Picnic Spot Near Airport Road Pune",
            description: "Visitors searching for a picnic spot near Airport Road Pune can choose a peaceful farm environment where they can move away from the urban setting and enjoy nature, activities, food, and rural experiences."
        },
        {
            name: "Nature Picnic Spot Near Viman Nagar",
            description: "Nature lovers can enjoy a calm picnic environment surrounded by greenery and rural landscapes. Bird watching, farm tours, outdoor activities, and open spaces create a refreshing nature-focused outing."
        },
        {
            name: "Picnic Spot Near Pune Airport",
            description: "For those searching for a picnic spot near Pune Airport, Om Agro Tourism provides a countryside experience with farm attractions, recreational activities, homemade food, and nature-based experiences suitable for a day outing."
        },
        {
            name: "Corporate Picnic Spot Near Viman Nagar",
            description: "Corporate teams can use the destination for an informal group outing featuring indoor and outdoor games, boating, farm experiences, food, and outdoor recreation that encourage team interaction away from the workplace."
        },
        {
            name: "Picnic Spot with Activities Near Viman Nagar",
            description: "A picnic spot with activities near Viman Nagar can offer more than simple relaxation. Guests can enjoy games, swimming, boating, horse riding, tractor rides, farm workshops, bird watching, and other countryside experiences."
        }
    ],
    tableData: [
        ["Picnic Spot Near Viman Nagar Pune"],
        ["One Day Picnic Spot Near Viman Nagar"],
        ["Best Picnic Spot Near Viman Nagar Pune"],
        ["Family Picnic Spot Near Viman Nagar"],
        ["Picnic Resort Near Viman Nagar"],
        ["One Day Picnic Resort Near Viman Nagar"],
        ["Best Resort Near Viman Nagar for Picnic"],
        ["Family Resort Near Viman Nagar"],
        ["One Day Trip Near Viman Nagar"],
        ["Family One Day Trip Near Viman Nagar"],
        ["Picnic Places Near Viman Nagar"],
        ["Best Picnic Places Near Viman Nagar"],
        ["Affordable Picnic Spot Near Viman Nagar"],
        ["Budget Picnic Resort Near Viman Nagar"],
        ["Picnic Spot Near Kharadi Viman Nagar"],
        ["Resort Near Viman Nagar for Family Outing"],
        ["One Day Resort Near Viman Nagar"],
        ["Picnic Spot Near Airport Road Pune"],
        ["Nature Picnic Spot Near Viman Nagar"],
        ["Picnic Spot Near Pune Airport"],
        ["Corporate Picnic Spot Near Viman Nagar"],
        ["Picnic Spot with Activities Near Viman Nagar"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Farm Environment",
            WhyChoosedescription: "Escape the crowded city atmosphere and enjoy a calm countryside setting where families, friends, and teams can spend quality time surrounded by greenery and open farm landscapes."
        },
        {
            WhyChooseheading: "Variety of Activities",
            WhyChoosedescription: "From boating and swimming to horse riding, tractor rides, games, and farm experiences, visitors can select different activities according to their interests and group requirements."
        },
        {
            WhyChooseheading: "Family-Friendly Experience",
            WhyChoosedescription: "Children and adults can find enjoyable ways to spend the day together, with recreational activities and open spaces creating a comfortable environment for family picnics."
        },
        {
            WhyChooseheading: "Traditional Rural Activities",
            WhyChoosedescription: "Bull cart rides, tractor rides, farm tours, and other countryside experiences provide an opportunity to enjoy traditional rural activities that are different from regular city outings."
        },
        {
            WhyChooseheading: "Fresh Homemade Food",
            WhyChoosedescription: "The availability of tasty homemade food adds a traditional farm-style dining experience to the picnic, making the day more satisfying for families, friends, and organized groups."
        },
        {
            WhyChooseheading: "Nature and Outdoor Recreation",
            WhyChoosedescription: "Bird watching, farm exploration, boating, outdoor games, and open surroundings allow visitors to combine relaxation with active outdoor recreation in a natural environment."
        },
        {
            WhyChooseheading: "Suitable for Group Outings",
            WhyChoosedescription: "Families, school groups, corporate teams, and friends can enjoy activities together, making the destination suitable for different types of planned picnics and group outings."
        },
        {
            WhyChooseheading: "Complete One Day Experience",
            WhyChoosedescription: "With food, nature, farm activities, traditional attractions, games, and water-based recreation available at one destination, visitors can create a varied and enjoyable one day picnic experience."
        }
    ]
};






const faqData = [
    {
        question: "Where can people from Viman Nagar plan a refreshing picnic outside the city?",
        answer: "Those looking to escape the busy surroundings of Viman Nagar can consider Om Agri Tourism for a peaceful countryside outing. The destination combines farm experiences with activities such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching, making it suitable for a relaxed day trip."
    },
    {
        question: "What makes Om Agri Tourism different from a regular picnic spot near Viman Nagar Pune?",
        answer: "Instead of limiting the outing to open-space recreation, Om Agri Tourism brings together outdoor fun and traditional rural experiences. Visitors can enjoy water activities, countryside rides, nature observation and homemade food while spending time in a green farm environment."
    },
    {
        question: "Which activities can families from Viman Nagar enjoy at Om Agri Tourism?",
        answer: "A family outing can include swimming, boating and horse riding along with tractor and bull cart rides. Bird watching provides a quieter activity for nature enthusiasts, while homemade food and the peaceful surroundings give families time to relax between different experiences."
    },
    {
        question: "Can children enjoy a day picnic at Om Agri Tourism near Viman Nagar?",
        answer: "Young visitors can experience a variety of outdoor activities according to their age and comfort. Swimming, boating and farm rides can keep children engaged, while bird watching introduces them to the natural surroundings. Adult supervision is recommended during activities for a comfortable family outing."
    },
    {
        question: "How can friends from Viman Nagar spend their picnic day at Om Agri Tourism?",
        answer: "Friends can create an energetic itinerary with swimming, boating and horse riding, followed by tractor or bull cart rides for a traditional countryside experience. Time for photographs, meals, conversations and bird watching can be included to make the outing enjoyable without keeping the schedule overly rushed."
    },
    {
        question: "Is Om Agri Tourism suitable for a group picnic from Viman Nagar Pune?",
        answer: "Groups can choose activities according to their interests and divide the day between recreation and relaxation. Swimming, boating, horse riding and farm rides offer active options, while homemade food, bird watching and the green surroundings provide opportunities for everyone to unwind together."
    },
    {
        question: "Can visitors experience rural activities during a picnic near Viman Nagar?",
        answer: "The farm setting gives city visitors an opportunity to experience traditional countryside activities that are different from everyday urban entertainment. Horse riding, tractor rides and bull cart rides can be combined with bird watching, farm surroundings and homemade food for a more distinctive rural outing."
    },
    {
        question: "Is homemade food part of the picnic experience at Om Agri Tourism?",
        answer: "A traditional meal can make the countryside visit more satisfying, especially after spending time on outdoor activities. Guests can enjoy homemade food in the farm atmosphere and take a comfortable break before returning to swimming, boating, rides or nature-based activities."
    },
    {
        question: "What is a good way to plan a one-day picnic from Viman Nagar to Om Agri Tourism?",
        answer: "Visitors can start their day with recreational activities such as swimming or boating and then explore horse riding, tractor rides or bull cart rides. Setting aside time for lunch, photography, bird watching and relaxation allows the group to experience different aspects of the farm without making the outing feel hurried."
    },
    {
        question: "Why should Viman Nagar residents consider Om Agri Tourism for a picnic?",
        answer: "For people wanting a change from Pune's urban surroundings, Om Agri Tourism provides a combination of recreation, greenery and countryside experiences. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching offer variety, while homemade food and the calm farm atmosphere make the day suitable for families, friends and groups."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Kunal Mehta",
        feedback:
            "We travelled from Viman Nagar for a day picnic at Om Agri Tourism and enjoyed having so many activities in one place. Boating and swimming were great fun, while the horse riding and bull cart ride gave us a completely different countryside experience. The peaceful farm surroundings made the outing feel like a proper break from Pune.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss Riya Chavan",
        feedback:
            "Our friends' group chose Om Agri Tourism for a weekend picnic and had a memorable time. We tried the tractor ride, boating and horse riding, and later spent some quiet time enjoying the greenery and bird watching. The homemade food was another highlight and added a nice traditional touch to the whole experience.",
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
  "name": "Picnic Spot Near Viman Nagar Pune",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-viman-nagar-pune.webp",
  "description": "Picnic Spot Near Viman Nagar Pune is a convenient choice for families, friends, couples, school groups, and corporate teams looking for a refreshing outdoor escape away from the busy urban routine. Om Agro Tourism offers an agro-tourism-oriented countryside environment where visitors can enjoy quality time together through outdoor recreation, open surroundings, picnic activities, and relaxed group experiences. A One Day Picnic Spot Near Viman Nagar can be considered by families planning a short outing with children, friends arranging a casual day trip, or groups seeking a peaceful destination outside the city. Visitors searching for the Best Picnic Spot Near Viman Nagar Pune can enjoy a change of atmosphere where leisure, nature-oriented surroundings, and group recreation come together. The Family Picnic Spot Near Viman Nagar is suitable for family gatherings, birthdays, weekend outings, seasonal visits, and relaxed get-togethers. People looking for a Picnic Resort Near Viman Nagar or One Day Picnic Resort Near Viman Nagar can plan a comfortable day outing with the added appeal of an agro-tourism setting and countryside environment. The destination can be considered by visitors from Viman Nagar, Kharadi, Kalyani Nagar, Yerwada, Wadgaon Sheri, Koregaon Park, Hadapsar, Magarpatta, Mundhwa, Dhanori, Lohegaon, and nearby Pune areas. A short picnic getaway can provide an enjoyable break for families, friends, office teams, school groups, and couples who want to spend meaningful time together without planning an extended trip. The open environment also creates opportunities for outdoor activities, group conversations, family recreation, and memorable experiences. Om Agro Tourism provides a welcoming setting for visitors planning a family picnic, school outing, corporate gathering, friends' day trip, or weekend escape near Viman Nagar Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-viman-nagar-pune"
  }
};







    return (
        <div>
<Helmet>
  <title>
    Picnic Spot Near Viman Nagar Pune | Best One Day Picnic Resort & Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a Picnic Spot Near Viman Nagar Pune for families, friends, couples, school groups and corporate outings with outdoor recreation in an agro-tourism setting."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Viman Nagar Pune, One Day Picnic Spot Near Viman Nagar, Best Picnic Spot Near Viman Nagar Pune, Family Picnic Spot Near Viman Nagar, Picnic Resort Near Viman Nagar, One Day Picnic Resort Near Viman Nagar, Best Resort Near Viman Nagar for Picnic, Family Resort Near Viman Nagar, One Day Trip Near Viman Nagar, Family One Day Trip Near Viman Nagar, One Day Picnic Near Viman Nagar, Picnic Places Near Viman Nagar Pune, Best Picnic Places Near Viman Nagar, Family Picnic Near Viman Nagar, One Day Outing Near Viman Nagar, Best One Day Outing Near Viman Nagar, Picnic Resorts Near Viman Nagar Pune, Picnic Spot Near Kharadi, One Day Picnic Near Kharadi, Picnic Places Near Kalyani Nagar, Family Picnic Near Wadgaon Sheri, One Day Picnic Near Yerwada, Picnic Resort Near Koregaon Park, Family Outing Near Hadapsar, Picnic Places Near Magarpatta, One Day Picnic Near Mundhwa, Picnic Spot Near Dhanori, Family Picnic Near Lohegaon, Agro Tourism Near Viman Nagar, Agro Tourism Near Pune, One Day Picnic Near Pune, Family Picnic Near Pune"
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
                            <img src='/images/keyword/110.jpg' alt='img' className='img-fluid' />
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

export default PicnicspotNearVimanNagarPune;