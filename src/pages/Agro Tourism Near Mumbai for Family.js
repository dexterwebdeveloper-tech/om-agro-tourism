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

function AgroTourismNearMumbaiForFamily() {


const cardData = {
    keyword: "Agro Tourism Near Mumbai for Family",
    headingDescription: "Searching for the best Agro Tourism Near Mumbai for Family where parents, children, friends, and relatives can enjoy nature, farming, outdoor recreation, and quality time together? Om Agri Tourism offers a refreshing countryside experience for families looking to escape the busy Mumbai environment and spend a memorable day surrounded by farmland, greenery, open spaces, and rural surroundings. Visitors can enjoy farm exploration, traditional village experiences, outdoor games, nature walks, swimming and water recreation, farm-fresh food, and other leisure activities that make an agro-tourism outing more engaging than a regular picnic. Families searching for one day agro tourism near Mumbai, one day picnic spot near Mumbai for family, one day picnic resorts near Mumbai, or the Best 1 day picnic spot near Mumbai can plan a relaxing countryside getaway with activities suitable for different age groups. Seasonal visits can also provide a different experience during monsoon, summer, and winter, making the destination suitable for families looking for a one day picnic spot near Mumbai in rainy season, summer, or winter. For people comparing family picnic places near Mumbai, Mumbai nearest picnic spot options, or a One day picnic destination near Mumbai, Om Agri Tourism combines the charm of rural Maharashtra with recreational experiences, peaceful surroundings, traditional food, and opportunities to spend meaningful time together away from the city's crowded routine.",

    topPlaces: [
        {
            title: "Family Farm Exploration",
            description: "Explore the agricultural surroundings together and introduce children to the sights and experiences of rural farming. Open fields, greenery, and farm activities provide an engaging setting for families looking for something different from a conventional city picnic."
        },
        {
            title: "Monsoon Countryside Experience",
            description: "During the rainy season, the countryside takes on a fresh and vibrant appearance with greenery and pleasant natural surroundings. Families can enjoy the seasonal atmosphere while spending quality time away from the busy urban environment."
        },
        {
            title: "Traditional Village Activities",
            description: "Experience the charm of rural Maharashtra through traditional farm and village activities that are enjoyable for children and adults. These experiences add a cultural and educational element to a family day outing."
        },
        {
            title: "Refreshing Water Recreation",
            description: "Families can include swimming and water-based recreation in their outing for a refreshing break. Water activities provide additional entertainment and make the destination suitable for a complete one-day family picnic."
        },
        {
            title: "Nature Walk and Greenery",
            description: "Take a leisurely walk around the natural farm surroundings while enjoying fresh air, greenery, and peaceful countryside views. The experience is suitable for families who want relaxation as well as light outdoor activity."
        },
        {
            title: "Traditional Farm Dining",
            description: "Enjoy a wholesome meal in a countryside atmosphere and experience the appeal of traditional farm-style food. Dining together in a rural environment adds another memorable element to a family picnic or day trip."
        },
        {
            title: "Outdoor Family Games",
            description: "Families and groups can enjoy outdoor games and recreational activities in open surroundings. Children can remain active while parents and relatives participate in shared activities and create memorable moments together."
        },
        {
            title: "Countryside Photography",
            description: "The farm landscape offers natural opportunities for family photography, scenic pictures, and relaxed outdoor moments. Green fields, rural surroundings, and open spaces provide a pleasant backdrop throughout the outing."
        },
        {
            title: "Agricultural Learning Experience",
            description: "Children and adults can discover more about farming and rural lifestyles through an agricultural environment. This makes the visit more meaningful by combining entertainment with practical exposure to countryside life."
        },
        {
            title: "Complete One-Day Family Getaway",
            description: "Combine farm exploration, recreation, food, nature, and relaxation into one family outing. The variety of experiences allows visitors to enjoy a full day without needing to plan multiple destinations."
        }
    ],

    services: [
        {
            name: "best agro tourism near mumbai",
            description: "Families searching for the best agro tourism near Mumbai can enjoy a peaceful countryside environment with farm experiences, nature, outdoor recreation, traditional activities, and family-friendly leisure."
        },
        {
            name: "one day agro tourism near mumbai",
            description: "One day agro tourism near Mumbai is a convenient choice for families wanting a short escape that combines agricultural experiences, outdoor activities, food, nature, and relaxation within a single outing."
        },
        {
            name: "one day picnic spot near mumbai in monsoon",
            description: "A one day picnic spot near Mumbai in monsoon can provide families with a refreshing seasonal experience surrounded by greenery, open countryside, fresh air, and enjoyable outdoor activities."
        },
        {
            name: "one day picnic spot near mumbai in rainy season",
            description: "Families looking for a one day picnic spot near Mumbai in rainy season can enjoy the changing countryside landscape along with nature experiences, farm activities, food, and family recreation."
        },
        {
            name: "one day picnic spot near mumbai in summer",
            description: "A one day picnic spot near Mumbai in summer can give families an opportunity to step away from the city and enjoy a refreshing countryside environment with water recreation, farm activities, and shaded leisure areas."
        },
        {
            name: "one day picnic spot near mumbai in winter",
            description: "Winter is suitable for outdoor family outings, and a one day picnic spot near Mumbai in winter can offer pleasant countryside surroundings for nature walks, farm exploration, games, food, and group activities."
        },
        {
            name: "one day picnic spot near mumbai for family",
            description: "A one day picnic spot near Mumbai for family should offer experiences for different age groups, and an agro-tourism environment can combine farm exploration, outdoor recreation, food, nature, and relaxation."
        },
        {
            name: "one day picnic resorts near mumbai",
            description: "One day picnic resorts near Mumbai are useful for families who want several activities and leisure options within one destination instead of travelling between multiple picnic locations."
        },
        {
            name: "Best 1 day picnic spot near mumbai",
            description: "The Best 1 day picnic spot near Mumbai can provide a balanced experience of nature, family activities, traditional food, outdoor recreation, and peaceful surroundings for a complete day outing."
        },
        {
            name: "best one day picnic spot in mumbai",
            description: "Visitors comparing the best one day picnic spot in Mumbai can consider an agro-tourism experience where families can enjoy rural surroundings and activities beyond a typical urban picnic."
        },
        {
            name: "best one day picnic spot near mumbai",
            description: "The best one day picnic spot near Mumbai can offer a combination of farm experiences, outdoor games, water recreation, traditional food, and nature-based relaxation for families and groups."
        },
        {
            name: "best picnic spot in mumbai for 1 day",
            description: "Families looking for the best picnic spot in Mumbai for 1 day can choose a destination that provides multiple activities, countryside scenery, food, and opportunities for shared family time."
        },
        {
            name: "day picnic in mumbai",
            description: "A day picnic in Mumbai can become more memorable with a countryside agro-tourism experience where visitors can enjoy nature, farming activities, outdoor recreation, and traditional rural experiences."
        },
        {
            name: "day picnic around mumbai",
            description: "A day picnic around Mumbai is ideal for families who want to leave the busy city environment for a peaceful natural setting and enjoy a complete outing filled with recreation and relaxation."
        },
        {
            name: "family picnic places near mumbai",
            description: "Family picnic places near Mumbai can offer a range of experiences, and agro-tourism destinations are especially suitable for families interested in nature, farming, traditional activities, outdoor games, and quality time together."
        },
        {
            name: "mumbai nearest picnic spot",
            description: "Visitors searching for a Mumbai nearest picnic spot can explore countryside destinations that provide a refreshing change from city surroundings while still being suitable for a short family outing."
        },
        {
            name: "one day family picnic near mumbai",
            description: "A one day family picnic near Mumbai can include nature walks, farm exploration, traditional food, outdoor games, water recreation, and relaxed family time in a peaceful countryside setting."
        },
        {
            name: "one day outing places in mumbai",
            description: "People searching for one day outing places in Mumbai can consider agro-tourism destinations for a different experience combining rural surroundings, family recreation, agricultural activities, and nature."
        },
        {
            name: "One day picnic destination near mumbai",
            description: "A One day picnic destination near Mumbai can provide families with a complete day of outdoor experiences, countryside relaxation, traditional food, and activities without requiring a long vacation plan."
        }
    ],

    tableData: [
        ["best agro tourism near mumbai"],
        ["one day agro tourism near mumbai"],
        ["one day picnic spot near mumbai in monsoon"],
        ["one day picnic spot near mumbai in rainy season"],
        ["one day picnic spot near mumbai in summer"],
        ["one day picnic spot near mumbai in winter"],
        ["one day picnic spot near mumbai for family"],
        ["one day picnic resorts near mumbai"],
        ["Best 1 day picnic spot near mumbai"],
        ["best one day picnic spot in mumbai"],
        ["best one day picnic spot near mumbai"],
        ["best picnic spot in mumbai for 1 day"],
        ["day picnic in mumbai"],
        ["day picnic around mumbai"],
        ["family picnic places near mumbai"],
        ["mumbai nearest picnic spot"],
        ["one day family picnic near mumbai"],
        ["one day outing places in mumbai"],
        ["One day picnic destination near mumbai"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Family-Friendly Countryside Experience",
            WhyChoosedescription: "Om Agri Tourism gives families an opportunity to spend quality time together in an open agricultural environment where children and adults can participate in different activities and enjoy a refreshing break from city life."
        },
        {
            WhyChooseheading: "Suitable for Different Seasons",
            WhyChoosedescription: "The countryside experience can be enjoyed throughout the year, with greenery and pleasant surroundings during monsoon, outdoor recreation during winter, and refreshing activities for summer outings."
        },
        {
            WhyChooseheading: "Nature and Recreation Together",
            WhyChoosedescription: "Visitors can combine peaceful nature experiences with outdoor games, farm activities, water recreation, and other entertainment, creating a balanced outing for family members with different interests."
        },
        {
            WhyChooseheading: "Educational Farm Exposure",
            WhyChoosedescription: "Children can learn about agriculture, farming surroundings, and rural lifestyles while enjoying their picnic. This makes the outing both entertaining and an opportunity for practical learning outside the usual classroom environment."
        },
        {
            WhyChooseheading: "Ideal for One-Day Picnics",
            WhyChoosedescription: "Families can enjoy several experiences within one destination, making it convenient for a one-day picnic or outing without the need to arrange separate activities at multiple locations."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Traditional food, village-style activities, farm surroundings, and countryside recreation give visitors a chance to experience a different side of Maharashtra while spending time together."
        },
        {
            WhyChooseheading: "Relaxing Escape from Mumbai",
            WhyChoosedescription: "The open farm environment provides a welcome change from Mumbai's busy streets and crowded surroundings, allowing families to slow down, enjoy fresh air, and reconnect with nature."
        },
        {
            WhyChooseheading: "Memorable Family Time",
            WhyChoosedescription: "From outdoor activities and farm exploration to shared meals and countryside photography, the variety of experiences creates opportunities for families to spend meaningful time together and return with memorable moments."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism suitable for agro tourism near Mumbai for family?",
        answer: "Om Agri Tourism provides a peaceful farm environment where families can enjoy a refreshing countryside experience away from the busy city atmosphere. The combination of greenery, farm surroundings, traditional activities and outdoor recreation makes it a suitable option for a family agro tourism outing."
    },
    {
        question: "What can families experience at Om Agri Tourism near Mumbai?",
        answer: "Families visiting Om Agri Tourism can enjoy a variety of farm and outdoor experiences, including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These activities allow both children and adults to enjoy an engaging day surrounded by nature."
    },
    {
        question: "Is Om Agri Tourism a good family day outing destination?",
        answer: "Families looking for a different kind of day outing can spend quality time at Om Agri Tourism. Children can explore the farm surroundings and enjoy suitable activities, while parents can relax in the greenery and experience the calm atmosphere of the countryside."
    },
    {
        question: "Can children enjoy agro tourism activities at Om Agri Tourism?",
        answer: "Children can experience a variety of outdoor and farm-based activities at Om Agri Tourism. Tractor rides, bird watching, boating and exploring the countryside surroundings can make the visit exciting while giving children an opportunity to experience a setting away from their regular urban routine."
    },
    {
        question: "What family-friendly activities are available at Om Agri Tourism?",
        answer: "Om Agri Tourism offers several experiences that families can enjoy together, such as swimming, boating, horse riding, tractor rides and bull cart rides. Bird watching and spending time around the farm greenery also add a relaxing and nature-focused element to the family outing."
    },
    {
        question: "Can parents introduce children to rural life at Om Agri Tourism?",
        answer: "A visit to Om Agri Tourism can give children an opportunity to see and experience the simple charm of a rural farm environment. Traditional bull cart rides, tractor rides, bird watching and open green surroundings can make the outing both enjoyable and different from a typical city activity."
    },
    {
        question: "Is Om Agri Tourism suitable for a weekend family trip from Mumbai?",
        answer: "Families planning a countryside break from Mumbai can consider Om Agri Tourism for a relaxing nature-oriented outing. The farm atmosphere, greenery and range of recreational activities provide opportunities for family members to spend meaningful time together away from their everyday surroundings."
    },
    {
        question: "Does Om Agri Tourism provide homemade food for family visitors?",
        answer: "Homemade food adds a traditional touch to the family experience at Om Agri Tourism. After enjoying the outdoor activities and farm surroundings, guests can relax over a satisfying meal while experiencing the warm and simple character of countryside hospitality."
    },
    {
        question: "Can grandparents and children enjoy a visit to Om Agri Tourism together?",
        answer: "Om Agri Tourism can be a pleasant family destination where different generations can spend time together. While children can enjoy activities and explore the surroundings, older family members can appreciate the greenery, peaceful farm atmosphere, bird watching and traditional countryside setting."
    },
    {
        question: "Why choose Om Agri Tourism for agro tourism near Mumbai for family?",
        answer: "Om Agri Tourism combines farm experiences, greenery, traditional rural activities and outdoor recreation in a family-friendly countryside environment. From swimming and boating to horse riding, tractor rides, bull cart rides and bird watching, families can create a memorable day together while enjoying homemade food and a peaceful atmosphere."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Saurabh More",
        feedback:
            "We visited Om Agri Tourism with our parents and children and everyone found something to enjoy. The kids loved the tractor ride and boating, while our parents appreciated the greenery and peaceful farm setting. The homemade food was another highlight of our family day.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Manisha Desai",
        feedback:
            "Our family outing at Om Agri Tourism was a refreshing experience. The children enjoyed seeing the farm surroundings and trying the bull cart ride, while we spent relaxing time with bird watching and horse riding. It was a lovely break from our regular Mumbai routine.",
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
  "name": "Agro Tourism Near Mumbai for Family",
  "image": "https://www.omagrotourism.com/assets/images/agro-tourism-near-mumbai-for-family.webp",
  "description": "Om Agro Tourism offers a refreshing Agro Tourism Near Mumbai for Family experience for visitors looking to escape the busy city environment and spend meaningful time in peaceful countryside surroundings. Families searching for the best agro tourism near Mumbai can enjoy a nature-oriented destination where rural landscapes, agricultural surroundings and outdoor recreation come together for an enjoyable outing. A one day agro tourism near Mumbai can be an ideal choice for families who want to plan a convenient day trip without committing to a long-distance journey. Visitors looking for a one day picnic spot near Mumbai in monsoon can experience the countryside when greenery and pleasant weather create a refreshing atmosphere for outdoor recreation. During the rainy season, a one day picnic spot near Mumbai in rainy season can provide families with an opportunity to enjoy the natural beauty of the surroundings while spending quality time together. For warmer months, a one day picnic spot near Mumbai in summer can offer an alternative to crowded city recreation, with open spaces and a relaxed agro-tourism environment. Families planning a one day picnic spot near Mumbai in winter can also enjoy comfortable outdoor conditions, greenery and countryside experiences during the cooler season. A one day picnic spot near Mumbai for family can suit parents, children, grandparents and extended family groups looking for a shared recreational experience. Visitors comparing one day picnic resorts near Mumbai can consider Om Agro Tourism for a nature-focused setting where families can combine leisure, outdoor activities and rural experiences. The destination can also be suitable for weekend family outings, school groups, friends and corporate teams looking for a peaceful countryside escape. Children can experience agricultural surroundings and learn about rural life while adults enjoy a relaxed break from their regular routine. Seasonal visits can offer different experiences throughout the year, from lush monsoon landscapes to pleasant winter outings and refreshing summer day trips. Om Agro Tourism provides an inviting environment for family picnics, one-day outings, agro-tourism visits and nature-based recreation. With its combination of agriculture, greenery, open spaces and countryside charm, it offers a memorable option for families searching for agro tourism and picnic destinations near Mumbai.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/agro-tourism-near-mumbai-for-family"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Agro Tourism Near Mumbai for Family | One Day Picnic & Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers a family-friendly agro-tourism experience near Mumbai with one-day picnics, countryside surroundings and seasonal outdoor activities."
  />

  <meta
    name="keywords"
    content="Agro Tourism Near Mumbai for Family, best agro tourism near Mumbai, one day agro tourism near Mumbai, one day picnic spot near Mumbai in monsoon, one day picnic spot near Mumbai in rainy season, one day picnic spot near Mumbai in summer, one day picnic spot near Mumbai in winter, one day picnic spot near Mumbai for family, one day picnic resorts near Mumbai, Best agro tourism near Mumbai, agro tourism near Mumbai, agro tourism for family near Mumbai, family agro tourism near Mumbai, best agro tourism places near Mumbai, agro tourism resort near Mumbai, agro tourism destination near Mumbai, agri tourism near Mumbai, agriculture tourism near Mumbai, one day trip near Mumbai, one day outing near Mumbai, one day picnic near Mumbai, one day picnic spot near Mumbai, best one day picnic spot near Mumbai, family picnic spot near Mumbai, family picnic places near Mumbai, family outing near Mumbai, family day trip near Mumbai, picnic resort near Mumbai, picnic resorts near Mumbai, best picnic resorts near Mumbai, nature picnic spot near Mumbai, nature outing near Mumbai, nature resort near Mumbai, countryside picnic near Mumbai, countryside outing near Mumbai, rural tourism near Mumbai, rural outing near Mumbai, farm visit near Mumbai, farm tourism near Mumbai, farm stay near Mumbai, agricultural tourism near Mumbai, family farm outing near Mumbai, school picnic near Mumbai, corporate outing near Mumbai, weekend agro tourism near Mumbai, weekend picnic near Mumbai, monsoon picnic near Mumbai, rainy season picnic near Mumbai, summer picnic near Mumbai, winter picnic near Mumbai, monsoon agro tourism near Mumbai, summer agro tourism near Mumbai, winter agro tourism near Mumbai, seasonal picnic places near Mumbai, best family outing near Mumbai, best family picnic near Mumbai, one day family outing near Mumbai, one day picnic destination near Mumbai, agro tourism for children near Mumbai, educational agro tourism near Mumbai, best nature places near Mumbai, best picnic place near Mumbai"
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
                            <img src='/images/keyword/19.jpg' alt='img' className='img-fluid' />
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

export default AgroTourismNearMumbaiForFamily;