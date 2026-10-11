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

function OneDayPicnicSpotFromMumbai() {


const cardData = {
    keyword: "One Day Picnic Spot From Mumbai",
    headingDescription: "Looking for a refreshing One Day Picnic Spot From Mumbai where you can escape the city's busy routine and enjoy nature, farm experiences, outdoor recreation, and quality time with family, friends, or your partner? Om Agri Tourism offers a countryside getaway with agricultural surroundings, nature-based activities, traditional rural experiences, outdoor games, water recreation, farm exploration, and relaxing open spaces. It is suitable for visitors searching for one day picnic resorts near Mumbai, a one day return trip near Mumbai, a 1 day picnic spot near Mumbai, or a peaceful day picnic resort where multiple activities can be enjoyed in one destination. Families can explore the farm, participate in recreational activities, enjoy traditional food, and spend meaningful time together, while couples can choose a quieter countryside experience with nature walks, photography, and relaxed outdoor moments. Visitors who want to extend their trip can also consider a 1 day 1 night picnic, 1 night stay, or longer two-day countryside experience depending on available accommodation and plans. ",

    topPlaces: [
        {
            title: "Farm Picnic Experience",
            description: "Spend a relaxing day surrounded by agricultural landscapes and open countryside while enjoying farm-based activities and outdoor recreation. The peaceful environment provides a refreshing change from Mumbai's busy urban surroundings."
        },
        {
            title: "Family Countryside Outing",
            description: "Families can enjoy a combination of nature, farm exploration, outdoor games, food, and leisure in one destination. The variety of experiences makes the outing enjoyable for children, parents, and other family members."
        },
        {
            title: "Couples Nature Escape",
            description: "Couples looking for a peaceful day away from the city can enjoy nature walks, scenic surroundings, photography, and relaxed conversations in an open countryside setting."
        },
        {
            title: "Traditional Village Experience",
            description: "Discover the charm of rural Maharashtra through traditional farm and village activities. These experiences allow visitors to enjoy their picnic while getting closer to the agricultural and cultural side of countryside life."
        },
        {
            title: "Outdoor Games and Recreation",
            description: "Add an active element to your picnic with outdoor games and recreational activities. Open farm spaces provide a comfortable setting for families, friends, and groups to participate together."
        },
        {
            title: "Swimming and Water Fun",
            description: "Water recreation offers a refreshing activity during a day picnic, particularly for families and groups looking for more entertainment beyond farm exploration and nature walks."
        },
        {
            title: "Nature and Farm Walk",
            description: "Take a leisurely walk around the agricultural surroundings and enjoy greenery, fresh air, and peaceful countryside views. The experience is suitable for visitors who prefer a slower and more relaxing picnic."
        },
        {
            title: "Traditional Farm Dining",
            description: "Enjoy a shared meal in a rural environment and experience the appeal of traditional countryside food. Dining together adds a social and cultural element to a family, friends, or couples outing."
        },
        {
            title: "Overnight Countryside Stay",
            description: "Visitors wanting more than a single-day outing can extend their experience with an overnight countryside stay, subject to accommodation availability. This allows additional time for farm exploration, recreation, and relaxation."
        },
        {
            title: "Extended Two-Day Getaway",
            description: "A longer stay provides an opportunity to slow down and experience more of the farm environment, nature, traditional activities, and leisure options instead of completing the entire outing within one day."
        }
    ],

    services: [
        {
            name: "One day picnic resorts near mumbai",
            description: "One day picnic resorts near Mumbai are suitable for families, friends, and groups who want to enjoy several recreational experiences, farm activities, food, and relaxation during a single-day getaway."
        },
        {
            name: "One day picnic in mumbai",
            description: "A One day picnic in Mumbai can be made more refreshing by choosing a countryside agro-tourism destination where visitors can enjoy nature, farm experiences, outdoor activities, and peaceful surroundings."
        },
        {
            name: "one day picnic spots near mumbai for family",
            description: "One day picnic spots near Mumbai for family should offer activities for different age groups, and a farm-based destination provides opportunities for nature exploration, games, food, and shared family experiences."
        },
        {
            name: "day picnic near mumbai",
            description: "A day picnic near Mumbai is an easy way to take a short break from city life. Farm exploration, outdoor recreation, nature walks, and traditional food can make the experience more complete."
        },
        {
            name: "One day return trip near mumbai",
            description: "A One day return trip near Mumbai is convenient for visitors who want to enjoy a full day away from the city and return home without planning an extended holiday."
        },
        {
            name: "1 day picnic spot in mumbai",
            description: "A 1 day picnic spot in Mumbai can provide a convenient short getaway with opportunities for farm activities, outdoor recreation, nature experiences, food, and family or group entertainment."
        },
        {
            name: "Day picnic resorts near mumbai",
            description: "Day picnic resorts near Mumbai give visitors the flexibility to enjoy recreation, nature, food, and leisure without requiring a long stay, making them suitable for families and groups."
        },
        {
            name: "1 day 1 night picnic spots near mumbai",
            description: "1 day 1 night picnic spots near Mumbai are suitable for visitors who want to combine daytime activities with an overnight countryside experience before returning the following day."
        },
        {
            name: "1 day picnic in mumbai",
            description: "A 1 day picnic in Mumbai can include farm exploration, outdoor games, traditional experiences, nature walks, and relaxing countryside time for a memorable short getaway."
        },
        {
            name: "1 day picnic for couples in mumbai",
            description: "A 1 day picnic for couples in Mumbai can be planned around peaceful nature experiences, scenic walks, outdoor leisure, photography, and quality time away from crowded city surroundings."
        },
        {
            name: "1 day picnic near mumbai",
            description: "A 1 day picnic near Mumbai offers a practical option for people who want to enjoy nature and recreation without committing to a lengthy trip or holiday."
        },
        {
            name: "1 day picnic spot in mumbai for couples",
            description: "A 1 day picnic spot in Mumbai for couples can provide a relaxed countryside environment where partners can enjoy nature walks, photography, food, and peaceful outdoor moments."
        },
        {
            name: "1 day picnic places in mumbai",
            description: "Visitors exploring 1 day picnic places in Mumbai can consider an agro-tourism destination for a different experience that combines rural surroundings, farm activities, recreation, and relaxation."
        },
        {
            name: "1 day picnic spot near mumbai",
            description: "A 1 day picnic spot near Mumbai is ideal for visitors who want to spend a complete day enjoying outdoor activities, nature, food, and countryside experiences before returning home."
        },
        {
            name: "1 day picnic spot near mumbai for couples",
            description: "A 1 day picnic spot near Mumbai for couples provides an opportunity to leave the city's routine behind and enjoy a quieter setting with nature, open spaces, shared activities, and relaxed leisure."
        },
        {
            name: "1 day spot near mumbai",
            description: "A 1 day spot near Mumbai can be a convenient choice for a short escape where visitors can combine recreation and relaxation without planning a long-distance holiday."
        },
        {
            name: "1 day stay picnic spot near mumbai",
            description: "A 1 day stay picnic spot near Mumbai is suitable for visitors who want the flexibility of spending their day enjoying activities and extending their visit with a short stay, subject to accommodation availability."
        },
        {
            name: "1 night picnic spot near mumbai",
            description: "A 1 night picnic spot near Mumbai allows visitors to continue their countryside experience into the evening and enjoy a more relaxed getaway than a standard day trip."
        },
        {
            name: "1 night stay picnic spot near mumbai",
            description: "A 1 night stay picnic spot near Mumbai is ideal for families, couples, and friends who want to combine daytime recreation with a peaceful overnight countryside experience."
        },
        {
            name: "2 days stay picnic spot near mumbai",
            description: "A 2 days stay picnic spot near Mumbai gives visitors more time for farm exploration, outdoor recreation, nature experiences, traditional food, and relaxed countryside leisure."
        }
    ],

    tableData: [
        ["One day picnic resorts near mumbai"],
        ["One day picnic in mumbai"],
        ["one day picnic spots near mumbai for family"],
        ["day picnic near mumbai"],
        ["One day return trip near mumbai"],
        ["1 day picnic spot in mumbai"],
        ["Day picnic resorts near mumbai"],
        ["1 day 1 night picnic spots near mumbai"],
        ["1 day picnic in mumbai"],
        ["1 day picnic for couples in mumbai"],
        ["1 day picnic near mumbai"],
        ["1 day picnic spot in mumbai for couples"],
        ["1 day picnic places in mumbai"],
        ["1 day picnic spot near mumbai"],
        ["1 day picnic spot near mumbai for couples"],
        ["1 day spot near mumbai"],
        ["1 day stay picnic spot near mumbai"],
        ["1 night picnic spot near mumbai"],
        ["1 night stay picnic spot near mumbai"],
        ["2 days stay picnic spot near mumbai"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Complete One-Day Picnic Experience",
            WhyChoosedescription: "Om Agri Tourism combines nature, farm exploration, outdoor recreation, traditional experiences, food, and leisure in one countryside destination, allowing visitors to enjoy a full-day outing without moving between multiple locations."
        },
        {
            WhyChooseheading: "Suitable for Families and Couples",
            WhyChoosedescription: "The destination offers a flexible environment for different groups. Families can enjoy shared activities and farm experiences, while couples can spend quieter time walking, relaxing, taking photographs, and enjoying the natural surroundings."
        },
        {
            WhyChooseheading: "Refreshing Countryside Environment",
            WhyChoosedescription: "Open agricultural spaces and greenery provide a welcome change from Mumbai's busy roads, crowded neighbourhoods, and fast-paced routine, creating a more peaceful atmosphere for a short getaway."
        },
        {
            WhyChooseheading: "Day Trip and Stay Flexibility",
            WhyChoosedescription: "Visitors can plan a simple one-day outing or extend their experience into an overnight or longer stay, depending on available accommodation and their travel requirements."
        },
        {
            WhyChooseheading: "Farm-Based Experiences",
            WhyChoosedescription: "The agricultural setting adds a distinctive element to the picnic through farm exploration, rural activities, nature walks, and opportunities to experience a different side of countryside Maharashtra."
        },
        {
            WhyChooseheading: "Outdoor Activities for Groups",
            WhyChoosedescription: "Friends, families, and groups can participate in outdoor games and recreational activities while enjoying open surroundings. Shared activities make the outing more interactive and memorable."
        },
        {
            WhyChooseheading: "Traditional Food and Rural Culture",
            WhyChoosedescription: "A countryside picnic becomes more meaningful when combined with traditional food and rural experiences. Visitors can enjoy shared meals while experiencing the relaxed atmosphere of an agricultural destination."
        },
        {
            WhyChooseheading: "Convenient Short Getaway from Mumbai",
            WhyChoosedescription: "Om Agri Tourism is positioned as a countryside escape for Mumbai visitors looking for a short break, with its farm environment and range of activities making it suitable for return trips as well as longer stays. "
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good one day picnic spot from Mumbai?",
        answer: "Om Agri Tourism offers a peaceful countryside setting for visitors planning a one day picnic away from the busy city environment. Families, friends and groups can enjoy greenery, farm surroundings, outdoor activities and homemade food while spending quality time together."
    },
    {
        question: "What activities can we enjoy at Om Agri Tourism during a one day picnic?",
        answer: "A day picnic at Om Agri Tourism can include several recreational and farm-based experiences. Visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching, giving groups plenty of ways to make their outing enjoyable."
    },
    {
        question: "Is Om Agri Tourism suitable for a family picnic from Mumbai?",
        answer: "Families can enjoy a relaxed day at Om Agri Tourism with activities suitable for both children and adults. The open farm surroundings provide space to spend time together, while boating, swimming, bird watching and traditional rides add variety to the picnic experience."
    },
    {
        question: "Can children enjoy a one day picnic at Om Agri Tourism?",
        answer: "Children can experience a different kind of outing at Om Agri Tourism by exploring the farm surroundings and participating in suitable outdoor activities. Tractor rides, boating, bird watching and other countryside experiences can keep younger visitors engaged throughout the day."
    },
    {
        question: "Can friends plan a one day picnic at Om Agri Tourism?",
        answer: "Friends can turn their day at Om Agri Tourism into an enjoyable group outing by combining recreational activities with time spent in the countryside. Swimming, boating, horse riding and bull cart rides offer opportunities to have fun together in a refreshing farm environment."
    },
    {
        question: "Does Om Agri Tourism provide homemade food during a picnic?",
        answer: "Homemade food adds a traditional countryside touch to the picnic experience at Om Agri Tourism. Visitors can take a break between activities, enjoy a satisfying meal and relax in the peaceful farm surroundings before continuing their day outing."
    },
    {
        question: "Is Om Agri Tourism suitable for a corporate or group picnic from Mumbai?",
        answer: "Groups looking for an outdoor day outing can consider Om Agri Tourism for a relaxed countryside experience. The combination of greenery and activities such as boating, swimming, horse riding, tractor rides and bull cart rides can provide opportunities for colleagues or larger groups to spend time together."
    },
    {
        question: "Can couples enjoy a one day picnic at Om Agri Tourism?",
        answer: "Couples can enjoy a peaceful day at Om Agri Tourism surrounded by greenery and farm landscapes. Boating, horse riding and bird watching can add enjoyable moments to the outing, while the quiet countryside atmosphere offers a pleasant change from the city's busy routine."
    },
    {
        question: "What makes Om Agri Tourism different from a regular picnic spot near Mumbai?",
        answer: "Om Agri Tourism combines the relaxed feel of a countryside picnic with farm-based and traditional rural experiences. Along with enjoying greenery and homemade food, visitors can explore activities such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching."
    },
    {
        question: "Why choose Om Agri Tourism for a one day picnic spot from Mumbai?",
        answer: "Om Agri Tourism provides an opportunity to enjoy a complete countryside day outing with family, friends or groups. Its farm environment, greenery, outdoor recreation, traditional activities and homemade food create a refreshing experience for visitors seeking a memorable break from Mumbai."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohan Sawant",
        feedback:
            "We planned a one day picnic at Om Agri Tourism with our friends and had a wonderful time. Boating, swimming and the bull cart ride kept everyone entertained, while the greenery gave us a relaxing break from Mumbai. The homemade food was also very enjoyable.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Priyanka Naik",
        feedback:
            "Our family outing at Om Agri Tourism was full of enjoyable moments. The children loved the tractor ride and bird watching, and we also spent time enjoying the peaceful farm surroundings. It was a refreshing one day picnic and a nice change from our usual weekend plans.",
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
  "name": "One Day Picnic Spot From Mumbai",
  "image": "https://www.omagrotourism.com/assets/images/one-day-picnic-spot-from-mumbai.webp",
  "description": "Om Agro Tourism is a refreshing One Day Picnic Spot From Mumbai for families, friends, couples, school groups and corporate teams looking for a convenient break from the city's busy surroundings. Visitors searching for One day picnic resorts near Mumbai can enjoy a peaceful countryside environment where open spaces, greenery, nature and recreational experiences create an enjoyable setting for a complete day outing. A One day picnic in Mumbai and nearby destinations can be planned for people who want to spend quality time together without making an extensive travel schedule. Families searching for one day picnic spots near Mumbai for family can choose a relaxed destination where children, parents and senior family members can enjoy time outdoors. A day picnic near Mumbai can be suitable for weekend plans, family gatherings, casual celebrations, friends' get-togethers and group recreation. Visitors looking for a One day return trip near Mumbai can plan their outing with enough time to enjoy the destination and return on the same day. Those searching for a 1 day picnic spot in Mumbai or nearby areas can consider an agro-tourism setting as an alternative to crowded city entertainment options. Day picnic resorts near Mumbai can provide opportunities to combine relaxation, nature experiences and outdoor recreation in a single visit. For visitors planning a 1 day 1 night picnic spots near Mumbai experience, Om Agro Tourism can also be considered when a longer leisure schedule and countryside atmosphere are preferred. A 1 day picnic in Mumbai and its surrounding region can be made more memorable with family-friendly spaces, rural surroundings and opportunities to experience a quieter side of the countryside. The destination is suitable for different types of groups, including families with children, friends, office teams, school groups and visitors planning seasonal outings. During monsoon, the surrounding greenery can create a refreshing atmosphere, while winter offers comfortable conditions for outdoor leisure and summer visits can be planned around suitable daytime activities. Om Agro Tourism brings together nature, agriculture, open surroundings and recreational experiences to create a convenient picnic destination for visitors travelling from Mumbai. Whether the plan is a same-day return trip, family picnic, group outing or short overnight break, the destination provides a welcoming countryside experience away from the city's everyday routine.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/one-day-picnic-spot-from-mumbai"
  }
};





    return (
        <div>

<Helmet>
  <title>
    One Day Picnic Spot From Mumbai | Family Picnic & One Day Return Trip | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism is a family-friendly one day picnic spot from Mumbai for return trips, day outings, group picnics and relaxing countryside experiences."
  />

  <meta
    name="keywords"
    content="One Day Picnic Spot From Mumbai, One day picnic resorts near Mumbai, One day picnic in Mumbai, one day picnic spots near Mumbai for family, day picnic near Mumbai, One day return trip near Mumbai, 1 day picnic spot in Mumbai, Day picnic resorts near Mumbai, 1 day 1 night picnic spots near Mumbai, 1 day picnic in Mumbai, one day picnic spot near Mumbai, one day picnic places near Mumbai, best one day picnic spot near Mumbai, best picnic spots near Mumbai, family picnic spots near Mumbai, family picnic places near Mumbai, one day picnic for family near Mumbai, family day trip near Mumbai, one day outing near Mumbai, one day outing places near Mumbai, day outing near Mumbai, day outing resorts near Mumbai, one day trip near Mumbai, one day return trip from Mumbai, one day return journey near Mumbai, picnic resort near Mumbai, picnic resorts near Mumbai, best picnic resort near Mumbai, family picnic resort near Mumbai, one day picnic resort near Mumbai, one day picnic destination near Mumbai, day picnic destination near Mumbai, nature picnic spot near Mumbai, nature outing near Mumbai, nature resorts near Mumbai, countryside picnic near Mumbai, countryside outing near Mumbai, agro tourism near Mumbai, agro tourism picnic near Mumbai, agri tourism near Mumbai, agriculture tourism near Mumbai, family outing near Mumbai, weekend picnic near Mumbai, weekend outing near Mumbai, one day trip for family near Mumbai, one day family picnic near Mumbai, school picnic near Mumbai, corporate picnic near Mumbai, team outing near Mumbai, friends outing near Mumbai, couple outing near Mumbai, 1 day 1 night picnic near Mumbai, overnight picnic near Mumbai, short trip near Mumbai, same day picnic near Mumbai, same day return trip from Mumbai, best day picnic places near Mumbai, best one day outing near Mumbai, picnic places from Mumbai, picnic destination from Mumbai, one day getaway from Mumbai, family getaway near Mumbai"
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
                            <img src='/images/keyword/20.jpg' alt='img' className='img-fluid' />
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

export default OneDayPicnicSpotFromMumbai;