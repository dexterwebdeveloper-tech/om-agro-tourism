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

function AgriTourismNearPune() {



const cardData = {
    keyword: "Agri Tourism Near Pune",
    headingDescription: "Discover a refreshing agri tourism near Pune experience at Om Agri Tourism, where visitors can reconnect with nature, explore farm life and enjoy the peaceful charm of the countryside. Om Agri Tourism combines agricultural experiences, rural surroundings, outdoor recreation and leisure activities to create an enjoyable destination for families, couples, friends, school groups and corporate visitors. Guests can explore farming areas, enjoy nature-based activities, experience traditional rural life and relax in a green farm environment away from the city's busy routine. With facilities such as a swimming pool, water-based recreation, farm experiences and family-friendly activities, Om Agri Tourism offers a balanced combination of learning, relaxation and entertainment. Whether you are searching for agriculture tourism near Pune, agri tourism spots near Pune, an agritourism resort near Pune, agro tourism near Hinjewadi or an agri tourism farm resort in Pune, Om Agri Tourism provides an engaging countryside experience for a memorable day outing or short getaway.",

    topPlaces: [
        {
            title: "Organic Farming Experience",
            description: "Discover the basics of farming through an immersive agricultural experience at Om Agri Tourism. Visitors can explore cultivated areas, understand traditional and sustainable farming practices and gain a closer connection with the natural process behind farm-grown produce."
        },
        {
            title: "Farm-to-Table Food Experience",
            description: "Enjoy the connection between agriculture and food through a traditional farm-to-table dining experience. Freshly prepared meals and local flavors complement the rural surroundings, allowing visitors to appreciate the relationship between farming, food and countryside culture."
        },
        {
            title: "Animal Care and Farm Interaction",
            description: "Experience an engaging side of rural life by observing farm animals and learning about everyday animal care. This activity can be especially enjoyable for children and families who want their agri tourism visit to include educational and hands-on countryside experiences."
        },
        {
            title: "Seasonal Crop Exploration",
            description: "Explore the farm and discover different crops, plants and agricultural surroundings depending on the season. Walking through cultivated areas offers visitors an opportunity to understand farm life while enjoying fresh air and the peaceful atmosphere of the countryside."
        },
        {
            title: "Water Park Fun",
            description: "Add excitement to the agricultural experience with enjoyable water-based recreation. The water park activities provide a refreshing option for families and groups who want to combine the peacefulness of farm surroundings with energetic entertainment during their visit."
        },
        {
            title: "Swimming Pool Leisure",
            description: "Relax and cool down in the swimming pool while enjoying the green surroundings of Om Agri Tourism. The pool provides an additional leisure option for visitors looking for an agri tourism destination near Pune that combines rural experiences with recreational facilities."
        },
        {
            title: "Rural Craft and Culture",
            description: "Explore the cultural side of village life through rural traditions and craft-inspired experiences. These activities give visitors a better understanding of countryside culture while adding an educational and memorable element to their agri tourism outing."
        },
        {
            title: "Nature Trail Around the Farm",
            description: "Take a peaceful walk through the natural surroundings and enjoy greenery, open fields and fresh countryside air. A nature trail provides a simple way to slow down, observe the environment and experience the scenic side of agricultural tourism near Pune."
        },
        {
            title: "Traditional Tractor Adventure",
            description: "Experience a fun rural activity with a tractor ride around the farm surroundings. The activity provides visitors with an enjoyable glimpse into agricultural life while giving families and groups a different way to explore the countryside."
        },
        {
            title: "Village-Style Recreation",
            description: "Enjoy recreational activities inspired by traditional village life in a relaxed farm environment. These experiences provide a welcome change from conventional urban entertainment and make the visit more interactive for families, groups and educational visitors."
        }
    ],

    services: [
        {
            name: "Agriculture Tourism Near Pune",
            description: "Om Agri Tourism offers an engaging agriculture tourism near Pune experience where visitors can explore farming, nature and rural life. Guests can learn about agricultural activities, enjoy outdoor recreation and spend peaceful time surrounded by green farm landscapes."
        },
        {
            name: "Agri Tourism Spots Near Pune",
            description: "For visitors exploring agri tourism spots near Pune, Om Agri Tourism provides a combination of authentic farm experiences and recreational activities. The destination allows families and groups to enjoy nature, farming, rural culture and leisure in one peaceful setting."
        },
        {
            name: "Agritourism Resorts Near Pune",
            description: "Om Agri Tourism is a suitable choice among agritourism resorts near Pune for visitors seeking more than a conventional resort experience. Farm activities, natural surroundings, traditional food and recreational facilities create a distinctive countryside getaway."
        },
        {
            name: "Best Agri Tourism Near Pune",
            description: "Visitors searching for the best agri tourism near Pune can explore Om Agri Tourism for a combination of agriculture, nature and recreation. The farm provides opportunities to understand rural life while enjoying activities suitable for families, groups and nature lovers."
        },
        {
            name: "Agro Tourism Near Pimpri Chinchwad",
            description: "Om Agri Tourism provides a countryside option for visitors searching for agro tourism near Pimpri Chinchwad. Guests can take a break from the urban environment and enjoy farm experiences, nature exploration, traditional activities and outdoor recreation."
        },
        {
            name: "Agro Tourism Near Hinjewadi",
            description: "Those looking for agro tourism near Hinjewadi can consider Om Agri Tourism for a refreshing escape into the countryside. The destination combines agricultural experiences with leisure activities, making it suitable for families, working professionals and groups."
        },
        {
            name: "Agro Tourism Near Kharadi",
            description: "Visitors searching for agro tourism near Kharadi can enjoy a different environment at Om Agri Tourism, surrounded by farm landscapes and rural surroundings. It offers opportunities for agricultural exploration, outdoor activities, food and peaceful relaxation."
        },
        {
            name: "Agro Tourism Near Hadapsar",
            description: "Om Agri Tourism provides an option for people looking for agro tourism near Hadapsar and wanting to experience rural life outside the urban environment. Farm activities, nature experiences and recreational facilities make it suitable for a refreshing day outing."
        },
        {
            name: "Agro Tourism Near Pune with Swimming Pool",
            description: "For visitors looking for agro tourism near Pune with swimming pool facilities, Om Agri Tourism combines a farm environment with refreshing water-based leisure. Guests can enjoy agricultural experiences and then relax by the pool for a more complete day outing."
        },
        {
            name: "Agro Tourism with Water Park Near Pune",
            description: "Om Agri Tourism offers an enjoyable combination for visitors searching for agro tourism with water park near Pune. Families and groups can experience farm life while also enjoying water-based recreation, creating a balanced day of learning, relaxation and fun."
        },
        {
            name: "Best Agro Tourism Near Pune",
            description: "Om Agri Tourism provides a memorable option for anyone researching the best agro tourism near Pune. The destination brings together agriculture, rural culture, nature exploration, traditional food and recreational activities in a peaceful countryside setting."
        },
        {
            name: "Agri Tourism Farm Resort in Pune",
            description: "Om Agri Tourism offers a distinctive agri tourism farm resort in Pune experience where visitors can enjoy the charm of working farm surroundings along with leisure facilities. It is suitable for families, couples, groups and visitors interested in rural tourism."
        },
        {
            name: "Om Agro Tourism Near Pune",
            description: "Om Agro Tourism near Pune offers visitors an opportunity to experience farming, nature and rural culture while enjoying recreational facilities. With farm activities, outdoor experiences, swimming and water-based entertainment, it provides a refreshing destination for a memorable countryside outing."
        }
    ],

    tableData: [
        ["Agriculture Tourism Near Pune"],
        ["Agri Tourism Spots Near Pune"],
        ["Agritourism Resorts Near Pune"],
        ["Best Agri Tourism Near Pune"],
        ["Agro Tourism Near Pimpri Chinchwad"],
        ["Agro Tourism Near Hinjewadi"],
        ["Agro Tourism Near Kharadi"],
        ["Agro Tourism Near Hadapsar"],
        ["Agro Tourism Near Pune with Swimming Pool"],
        ["Agro Tourism with Water Park Near Pune"],
        ["Best Agro Tourism Near Pune"],
        ["Agri Tourism Farm Resort in Pune"],
        ["Om Agro Tourism Near Pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Authentic Farm Experience",
            WhyChoosedescription: "Om Agri Tourism gives visitors an opportunity to experience the atmosphere of rural farming rather than simply visiting a conventional leisure destination. Farm exploration, agricultural activities and natural surroundings help guests understand and appreciate countryside life."
        },
        {
            WhyChooseheading: "Learning Through Rural Activities",
            WhyChoosedescription: "The destination combines recreation with opportunities to learn about farming and rural culture. Children, families and educational groups can discover how agricultural activities connect with everyday life while enjoying an interactive countryside experience."
        },
        {
            WhyChooseheading: "Nature and Recreation Together",
            WhyChoosedescription: "Visitors do not have to choose between a peaceful farm experience and recreational entertainment. Om Agri Tourism brings together greenery, agricultural surroundings, outdoor activities and water-based leisure for a more varied day out."
        },
        {
            WhyChooseheading: "Family-Friendly Environment",
            WhyChoosedescription: "Families can enjoy activities that appeal to both children and adults while spending time in a spacious countryside environment. Farm experiences, swimming, water activities and outdoor recreation provide opportunities for different age groups to enjoy the visit together."
        },
        {
            WhyChooseheading: "Rural Culture and Tradition",
            WhyChoosedescription: "Traditional rural experiences add a cultural dimension to the visit and help guests experience a lifestyle that differs from urban living. Visitors can enjoy countryside activities while gaining a deeper appreciation for local farming traditions and village culture."
        },
        {
            WhyChooseheading: "Refreshing Escape from the City",
            WhyChoosedescription: "Green fields, open farm spaces and peaceful surroundings provide a refreshing change from Pune's busy urban atmosphere. Visitors can slow down, breathe fresh air and enjoy a relaxed environment while reconnecting with nature."
        },
        {
            WhyChooseheading: "Swimming and Water Recreation",
            WhyChoosedescription: "The availability of swimming and water-based recreation adds an enjoyable leisure component to the agri tourism experience. Families and groups can combine agricultural exploration with refreshing activities during a complete day at the destination."
        },
        {
            WhyChooseheading: "Suitable for Multiple Visitor Groups",
            WhyChoosedescription: "Om Agri Tourism can be enjoyed by families, couples, friends, corporate teams and educational groups. Its combination of farming, nature, recreation and rural experiences makes it adaptable to different types of outings and visitor interests."
        }
    ]
};








const faqData = [
    {
        question: "What makes Om Agri Tourism a good agri tourism destination near Pune?",
        answer: "Om Agri Tourism offers visitors an opportunity to experience peaceful farm surroundings, greenery and traditional countryside activities away from the busy city environment. Guests can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food during their visit."
    },
    {
        question: "What can visitors experience at Om Agri Tourism near Pune?",
        answer: "A visit to Om Agri Tourism combines recreation with authentic farm experiences. Guests can explore the natural surroundings, participate in activities such as horse riding and tractor rides, enjoy boating and swimming, observe birds and experience the simple charm of rural life."
    },
    {
        question: "Is Om Agri Tourism suitable for a family visit near Pune?",
        answer: "Families can enjoy a comfortable day at Om Agri Tourism with activities that appeal to both children and adults. The open farm environment, outdoor recreation, bird watching and traditional activities provide a relaxed setting for families looking to spend quality time together."
    },
    {
        question: "Which activities are available at Om Agri Tourism?",
        answer: "Visitors can take part in several activities at Om Agri Tourism, including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These options allow guests to combine outdoor recreation with an enjoyable countryside and farm experience."
    },
    {
        question: "Can children enjoy an agri tourism visit at Om Agri Tourism?",
        answer: "Children can discover a variety of outdoor experiences at Om Agri Tourism. Activities such as bird watching, boating, tractor rides and swimming can make the visit interesting for younger guests, while parents can select experiences based on their children's age and comfort."
    },
    {
        question: "Is Om Agri Tourism suitable for couples near Pune?",
        answer: "Couples searching for a peaceful agri tourism experience near Pune can spend a relaxing day at Om Agri Tourism. The greenery, quiet farm surroundings and nature-oriented activities offer a pleasant opportunity to take a break from the city's fast-paced routine."
    },
    {
        question: "Can visitors experience traditional village life at Om Agri Tourism?",
        answer: "Om Agri Tourism allows guests to experience elements of traditional village life through activities such as bull cart rides, tractor rides and horse riding. Along with bird watching and the surrounding farmland, these experiences provide a closer connection with the countryside."
    },
    {
        question: "Does Om Agri Tourism provide homemade food?",
        answer: "Guests at Om Agri Tourism can enjoy homemade food as part of their farm visit. Traditional meals complement the rural atmosphere and give visitors an opportunity to enjoy a satisfying dining experience while spending their day surrounded by nature."
    },
    {
        question: "Is Om Agri Tourism suitable for groups and friends?",
        answer: "Groups of friends, relatives and other visitors can enjoy Om Agri Tourism as a shared countryside getaway near Pune. The variety of activities makes it possible for group members to participate in different experiences while spending time together in a peaceful farm environment."
    },
    {
        question: "Why should I choose Om Agri Tourism for agri tourism near Pune?",
        answer: "Om Agri Tourism brings together nature, farm activities, rural experiences and recreation in one destination. With swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food, it offers a refreshing way to experience the countryside near Pune."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Vivek Gaikwad",
        feedback:
            "We wanted to experience agri tourism near Pune and spent a full day at Om Agri Tourism with our family. The children enjoyed the tractor ride and bird watching, while we liked the peaceful farm surroundings. Boating and the homemade food made the visit even more enjoyable.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Kavita Sawant",
        feedback:
            "Om Agri Tourism gave us a wonderful countryside experience away from the usual city attractions. We tried horse riding and the bull cart ride, enjoyed the greenery and spent some quiet time around the farm. The combination of activities and traditional food made our visit memorable.",
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
  "name": "Agri Tourism Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/agri-tourism-near-pune.webp",
  "description": "Om Agro Tourism offers an engaging Agri Tourism Near Pune experience for families, children, couples, students, friends, corporate groups and visitors who want to explore peaceful countryside surroundings. Agriculture tourism near Pune provides an opportunity to step away from the city's busy routine and experience rural landscapes, farming environments, open spaces and nature-oriented activities. Visitors searching for Agri tourism spots near Pune can discover a refreshing destination suitable for one-day outings, family visits, educational trips and weekend recreation. Agritourism resorts near Pune can be a convenient choice for people who want to combine leisure with an authentic countryside atmosphere, and Om Agro Tourism creates a comfortable setting for such experiences. Those looking for the Best agri tourism near Pune can enjoy a destination where agriculture, nature and outdoor recreation come together for an enjoyable day. Visitors from Pimpri-Chinchwad searching for agro tourism near Pimpri Chinchwad can also consider Om Agro Tourism for a refreshing escape from urban surroundings. The destination can be suitable for school and college groups interested in understanding rural life, families introducing children to farming environments, and friends or teams planning a nature-based outing. Guests can spend time in open surroundings while experiencing the peaceful character of agricultural landscapes and countryside life. Om Agro Tourism also provides a useful setting for family picnics, group gatherings, educational visits, corporate outings and recreational day trips. People comparing agro tourism destinations near Pune can choose an experience that combines relaxation, learning, greenery and rural charm rather than a conventional city outing. With its agriculture-focused environment and welcoming countryside atmosphere, Om Agro Tourism provides a memorable option for visitors interested in agri tourism, agro tourism and nature-based experiences near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/agri-tourism-near-pune"
  }
};



    return (
        <div>
<Helmet>
  <title>
    Agri Tourism Near Pune | Best Agriculture & Agro Tourism Experience | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism is an agri tourism destination near Pune offering countryside, agriculture, nature, family outing and educational experiences for visitors and groups."
  />

  <meta
    name="keywords"
    content="Agri Tourism Near Pune, Agriculture tourism near Pune, Agri tourism spots near Pune, Agritourism resorts near Pune, Best agri tourism near Pune, agro tourism near Pimpri Chinchwad, agro tourism, agri tourism Pune, agri tourism near Pune, agriculture tourism Pune, agriculture tourism near Pune, agro tourism near Pune, agro tourism spots near Pune, best agro tourism near Pune, agro tourism resorts near Pune, agritourism places near Pune, agritourism destination near Pune, farming tourism near Pune, farm tourism near Pune, farm stay near Pune, rural tourism near Pune, rural tourism places near Pune, countryside tourism near Pune, agricultural tourism near Pune, agriculture experience near Pune, farming experience near Pune, family agri tourism near Pune, agri tourism for family near Pune, agri tourism for children near Pune, educational agri tourism near Pune, school picnic agri tourism near Pune, nature outing near Pune, one day agri tourism near Pune, weekend agri tourism near Pune, agro tourism for school groups near Pune, agro tourism for corporate outing near Pune, agro tourism for family outing near Pune, best agritourism destination near Pune, agricultural resort near Pune, farm resort near Pune, agro tourism near Pimpri Chinchwad, agri tourism near Pimpri Chinchwad, best agro tourism near Pimpri Chinchwad, rural outing near Pune, farming tourism destination near Pune"
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
                            <img src='/images/keyword/6.jpg' alt='img' className='img-fluid' />
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

export default AgriTourismNearPune;