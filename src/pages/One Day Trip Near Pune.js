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

function OneDayTripNearPune() {



  const cardData = {
    keyword: "One Day Trip Near Pune",
    headingDescription: "Plan a refreshing one day trip near Pune at Om Agri Tourism, a peaceful countryside destination where visitors can enjoy nature, farm experiences, outdoor recreation and quality time away from the busy city. Ideal for families, couples, friends and groups, Om Agri Tourism combines open green spaces with enjoyable activities and a relaxed rural atmosphere. Guests can explore the farm, enjoy traditional village experiences, participate in outdoor activities, relax in natural surroundings and savor delicious homemade food during their visit. Whether you are searching for a one day picnic spot near Pune, a comfortable one day stay trip near Pune, a day outing near Pune within 50 km or a convenient 1 day destination near Pune, Om Agri Tourism provides a memorable setting for a short countryside escape. With its family-friendly environment and variety of experiences, it is a suitable choice for planning a refreshing 1 day trip near Pune.",

    topPlaces: [
        {
            title: "Farm Tour Experience",
            description: "Discover the charm of countryside life through an enjoyable farm tour at Om Agri Tourism. Visitors can explore the agricultural surroundings, learn about everyday farm activities and enjoy a peaceful experience surrounded by greenery, making it a meaningful part of a one day outing near Pune."
        },
        {
            title: "Swimming and Water Fun",
            description: "Cool down and enjoy refreshing water-based recreation during your visit to Om Agri Tourism. The swimming facility offers families, friends and groups an enjoyable way to relax and have fun together while spending a refreshing day away from the city."
        },
        {
            title: "Traditional Village Activities",
            description: "Experience the simple charm of rural Maharashtra through traditional village-inspired activities. These experiences give visitors an opportunity to enjoy a different pace of life while making their 1 day trip near Pune more engaging and memorable."
        },
        {
            title: "Scenic Farm Photography",
            description: "Capture beautiful moments around the scenic farm landscape at Om Agri Tourism. Open fields, greenery, natural surroundings and rural settings create attractive spots for family photographs, group pictures and relaxed memories during a day trip near Pune."
        },
        {
            title: "Bullock Cart Experience",
            description: "Enjoy a traditional bullock cart experience that brings visitors closer to the rural character of the destination. The leisurely ride offers families and children an interesting way to experience village transportation while exploring the peaceful surroundings."
        },
        {
            title: "Horse Riding",
            description: "Add a touch of adventure to your countryside outing with horse riding at Om Agri Tourism. The activity allows visitors to enjoy the farm landscape from a different perspective and can make a one day tour near Pune more exciting for families and groups."
        },
        {
            title: "Homestyle Maharashtrian Meals",
            description: "Take a delicious break with homestyle meals prepared with traditional flavors. Enjoying fresh and comforting food in a peaceful farm environment adds to the complete countryside experience and makes the day outing near Pune more satisfying."
        },
        {
            title: "Nature Exploration",
            description: "Spend relaxing moments exploring the natural surroundings of Om Agri Tourism. Visitors can enjoy greenery, fresh air and quiet countryside views while taking a break from their regular routine during a 1 day destination near Pune."
        },
        {
            title: "Outdoor Recreation",
            description: "Make the most of the open farm spaces with enjoyable outdoor recreation suitable for families, friends and groups. The spacious surroundings provide opportunities to stay active, have fun together and create memorable moments during a one day picnic near Pune."
        },
        {
            title: "Countryside Relaxation",
            description: "Unwind in a calm rural setting surrounded by open spaces and natural beauty. Om Agri Tourism gives visitors the opportunity to slow down, spend quality time together and enjoy a peaceful one day outing in Pune away from crowded urban surroundings."
        }
    ],

    services: [
        {
            name: "One Day Picnic Spot Near Pune",
            description: "Om Agri Tourism is a refreshing one day picnic spot near Pune where families, couples and groups can enjoy nature, farm activities, outdoor recreation and delicious food. The peaceful setting makes it suitable for spending quality time together."
        },
        {
            name: "One Day Stay Trip Near Pune",
            description: "For visitors planning a one day stay trip near Pune, Om Agri Tourism offers a relaxed countryside environment with comfortable spaces, farm experiences, recreational activities and a peaceful atmosphere suitable for a short getaway."
        },
        {
            name: "1 Day Trip Near Pune",
            description: "Enjoy a memorable 1 day trip near Pune at Om Agri Tourism and take a break from the city's routine. Visitors can experience farm life, enjoy outdoor activities, explore natural surroundings and spend an enjoyable day with family or friends."
        },
        {
            name: "One Day Outing Near Pune",
            description: "Om Agri Tourism provides an ideal setting for a one day outing near Pune, combining greenery, open spaces, rural experiences and recreational activities. It is a convenient option for families, friends and groups planning a short escape."
        },
        {
            name: "1 Day Picnic Spot Near Pune",
            description: "Choose Om Agri Tourism as a 1 day picnic spot near Pune for a relaxing and activity-filled day. Guests can enjoy the farm atmosphere, participate in outdoor experiences, spend time in nature and enjoy traditional homestyle meals."
        },
        {
            name: "Day Outing Near Pune",
            description: "A day outing near Pune becomes more enjoyable at Om Agri Tourism, where visitors can leave behind the busy urban routine and experience peaceful farm surroundings. The destination offers activities and open spaces suitable for different age groups."
        },
        {
            name: "One Day Trip Near Pune Within 50 KM",
            description: "If you are looking for a one day trip near Pune within 50 km, Om Agri Tourism can be considered for a convenient countryside escape. Its natural setting, farm experiences and recreational options make it suitable for a short day getaway."
        },
        {
            name: "One Day Picnic Spot Pune",
            description: "Om Agri Tourism offers a peaceful one day picnic spot Pune visitors can choose for family outings, group gatherings and weekend recreation. Green surroundings, outdoor activities, farm experiences and homestyle food create a pleasant picnic atmosphere."
        },
        {
            name: "1 Day Stay Trip Near Pune",
            description: "Plan a relaxing 1 day stay trip near Pune at Om Agri Tourism and enjoy a break surrounded by countryside scenery. Visitors can combine leisure, farm activities, outdoor recreation and food for a comfortable short getaway."
        },
        {
            name: "Places Near Pune for One Day Trip",
            description: "Among the places near Pune for one day trip, Om Agri Tourism provides a refreshing countryside experience with natural surroundings and engaging activities. It is suitable for visitors who want to spend an entire day away from the city's busy atmosphere."
        },
        {
            name: "1 Day Destination Near Pune",
            description: "Om Agri Tourism is a peaceful 1 day destination near Pune for families, couples, friends and groups. Visitors can enjoy nature, explore the farm, participate in recreational activities and create memorable moments without planning a long vacation."
        },
        {
            name: "1 Day Outing Near Pune",
            description: "Enjoy a refreshing 1 day outing near Pune at Om Agri Tourism, where greenery, open spaces and countryside experiences create a relaxing environment. The destination is suitable for visitors seeking both recreation and peaceful time in nature."
        },
        {
            name: "1 Day Outing in Pune",
            description: "For a refreshing 1 day outing in Pune, Om Agri Tourism offers an alternative to crowded city destinations. Its farm atmosphere, natural surroundings, traditional experiences and recreational activities provide an enjoyable day for families and groups."
        },
        {
            name: "1 Day Tour Near Pune",
            description: "Make your 1 day tour near Pune memorable with a visit to Om Agri Tourism. Guests can experience rural surroundings, enjoy outdoor activities, explore the farm environment and relax with loved ones during a convenient countryside excursion."
        },
        {
            name: "1 Day Trip in Pune",
            description: "Om Agri Tourism is a refreshing option for planning a 1 day trip in Pune with family or friends. The peaceful farm setting allows visitors to enjoy nature, recreation, traditional experiences and delicious meals during their short getaway."
        },
        {
            name: "Day Trip Near Pune",
            description: "Plan a relaxing day trip near Pune at Om Agri Tourism and enjoy a combination of countryside scenery and engaging activities. The destination provides a pleasant environment for families and groups looking to spend quality time together."
        },
        {
            name: "Near Places to Pune for 1 Day Trip",
            description: "For visitors searching for near places to Pune for a 1 day trip, Om Agri Tourism offers a convenient countryside experience. Guests can enjoy greenery, farm-based activities, outdoor recreation and peaceful surroundings during a single-day escape."
        },
        {
            name: "Om Agri Tourism One Day Trip Near Pune",
            description: "Om Agri Tourism offers a memorable one day trip near Pune experience with a combination of peaceful farm surroundings, outdoor recreation, traditional village activities, nature exploration and tasty homestyle food for families, couples and groups."
        }
    ],

    tableData: [
        ["One Day Picnic Spot Near Pune"],
        ["One Day Stay Trip Near Pune"],
        ["1 Day Trip Near Pune"],
        ["One Day Outing Near Pune"],
        ["1 Day Picnic Spot Near Pune"],
        ["Day Outing Near Pune"],
        ["One Day Trip Near Pune Within 50 KM"],
        ["One Day Picnic Spot Pune"],
        ["1 Day Stay Trip Near Pune"],
        ["Places Near Pune for One Day Trip"],
        ["1 Day Destination Near Pune"],
        ["1 Day Outing Near Pune"],
        ["1 Day Outing in Pune"],
        ["1 Day Tour Near Pune"],
        ["1 Day Trip in Pune"],
        ["Day Trip Near Pune"],
        ["Near Places to Pune for 1 Day Trip"],
        ["Om Agri Tourism One Day Trip Near Pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Escape",
            WhyChoosedescription: "A visit to Om Agri Tourism provides a welcome break from Pune's busy urban surroundings. The calm farm atmosphere, open spaces and greenery create a comfortable environment for visitors who want to relax and spend meaningful time with family or friends."
        },
        {
            WhyChooseheading: "Suitable for Different Groups",
            WhyChoosedescription: "Families, couples, friends and small groups can all enjoy a day at Om Agri Tourism. The combination of leisure areas, farm experiences and recreational activities makes the destination flexible for different types of one day outing plans."
        },
        {
            WhyChooseheading: "Variety of Countryside Experiences",
            WhyChoosedescription: "Instead of limiting the visit to sightseeing, guests can experience several aspects of rural life through farm exploration, traditional activities, nature experiences and outdoor recreation. This variety keeps a one day trip near Pune interesting throughout the visit."
        },
        {
            WhyChooseheading: "Enjoyable Outdoor Activities",
            WhyChoosedescription: "Visitors have opportunities to spend time outdoors and enjoy activities suitable for different age groups. From recreational experiences to exploring the farm environment, the open surroundings make the day more active and engaging."
        },
        {
            WhyChooseheading: "Relaxing Natural Surroundings",
            WhyChoosedescription: "Greenery, fresh air and open countryside views create a soothing backdrop for a short getaway. Guests can take a break from their regular schedule, enjoy quiet moments and return refreshed after spending the day close to nature."
        },
        {
            WhyChooseheading: "Traditional Food Experience",
            WhyChoosedescription: "The experience is complemented by comforting homestyle food featuring familiar traditional flavors. Enjoying a satisfying meal in a peaceful farm setting adds another memorable element to the overall one day picnic experience."
        },
        {
            WhyChooseheading: "Good Option for Short Getaways",
            WhyChoosedescription: "Om Agri Tourism works well for people who want a quick escape without planning an extended holiday. Its countryside setting and range of activities allow visitors to enjoy a meaningful day trip near Pune within a convenient travel plan."
        },
        {
            WhyChooseheading: "Memorable Family Time",
            WhyChoosedescription: "Families can use the relaxed farm environment to spend uninterrupted time together, participate in activities and capture memorable moments. The combination of recreation and nature makes the destination suitable for a pleasant family day out."
        }
    ]
};












const faqData = [
    {
        question: "What makes Om Agri Tourism a good one day trip near Pune?",
        answer: "Om Agri Tourism offers a refreshing countryside experience for people planning a one day trip near Pune. Visitors can spend quality time surrounded by greenery while enjoying swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and delicious homemade food."
    },
    {
        question: "Is Om Agri Tourism suitable for a one day trip near Pune with family?",
        answer: "Yes, Om Agri Tourism is well suited for families looking for a relaxing one day trip near Pune. The destination combines open farm surroundings with enjoyable activities for different age groups, making it possible for children, parents and elders to have an engaging day together."
    },
    {
        question: "What activities can we enjoy during a one day trip at Om Agri Tourism?",
        answer: "A day at Om Agri Tourism can include swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. Along with these activities, guests can explore the farm atmosphere, enjoy nature and have homemade food as part of their countryside outing."
    },
    {
        question: "Can couples visit Om Agri Tourism for a one day trip near Pune?",
        answer: "Couples can choose Om Agri Tourism when they want a peaceful one day escape from Pune. The greenery, calm farm surroundings, nature-based experiences and leisurely activities create a pleasant setting for couples to relax and spend meaningful time together."
    },
    {
        question: "Is Om Agri Tourism a suitable day outing destination for children?",
        answer: "Om Agri Tourism provides several enjoyable experiences for children during a one day trip near Pune. Depending on their age and comfort, children can take part in activities such as boating, tractor rides, bird watching and other outdoor farm experiences under appropriate supervision."
    },
    {
        question: "Does Om Agri Tourism offer traditional rural experiences?",
        answer: "Visitors can experience the charm of rural life at Om Agri Tourism through activities such as bull cart rides, tractor rides, horse riding and bird watching. These experiences make the outing more than a regular picnic and give guests an opportunity to connect with the countryside."
    },
    {
        question: "Can we enjoy swimming during our one day trip to Om Agri Tourism?",
        answer: "Swimming is one of the recreational experiences available at Om Agri Tourism. Guests planning a one day trip near Pune can enjoy time in the swimming pool while also exploring the farm environment and participating in other outdoor activities throughout the day."
    },
    {
        question: "Is homemade food available at Om Agri Tourism?",
        answer: "Homemade food adds a traditional touch to the Om Agri Tourism experience. Guests can enjoy a satisfying farm-style meal during their day outing, making the combination of nature, activities and local food suitable for families and groups seeking a complete picnic experience."
    },
    {
        question: "Is Om Agri Tourism suitable for groups and friends?",
        answer: "Friends, extended families and small groups can consider Om Agri Tourism for a one day trip near Pune. The variety of outdoor activities allows different members of a group to participate according to their interests while enjoying the peaceful surroundings away from the city's busy routine."
    },
    {
        question: "Why should I choose Om Agri Tourism instead of a regular picnic spot near Pune?",
        answer: "Om Agri Tourism brings together nature, farm experiences, recreation and traditional countryside activities in one destination. For anyone planning a one day trip near Pune, the combination of swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food offers a more engaging day-out experience."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Akash Jadhav",
        feedback:
            "We planned a one day trip near Pune with our family and spent the day at Om Agri Tourism. The tractor ride, boating and swimming kept the children entertained, while we enjoyed the greenery and peaceful farm surroundings. The homemade food was also a memorable part of our visit.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Priya Deshmukh",
        feedback:
            "Om Agri Tourism turned out to be a refreshing choice for our weekend day outing. We enjoyed the bull cart ride, horse riding and bird watching, and there was plenty of space to relax and spend time together. It was a pleasant break from our regular city routine.",
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
  "name": "One Day Trip Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/one-day-trip-near-pune.webp",
  "description": "Om Agro Tourism offers an enjoyable One Day Trip Near Pune for visitors looking for a peaceful break from the city's busy routine. A one day picnic spot near Pune can be an ideal choice for families, couples, friends and groups who want to spend quality time in a natural countryside environment without planning a long-distance journey. Visitors searching for a one day stay trip near Pune can also explore a relaxing agro-tourism experience where nature, outdoor recreation and comfortable leisure can be enjoyed together. A 1 day trip near Pune provides a convenient opportunity to take a short break, enjoy open surroundings and create memorable moments with family or friends. For people looking for a one day outing near Pune, Om Agro Tourism offers a refreshing setting suitable for weekend plans, family gatherings, group outings and casual day escapes. A 1 day picnic spot near Pune can combine nature, outdoor activities, local experiences and relaxation into a convenient day itinerary. Visitors planning a day outing near Pune can enjoy a change of scenery while spending meaningful time away from crowded urban spaces. Om Agro Tourism is suitable for guests who want a nature-focused outing with the charm of rural surroundings and the relaxed atmosphere of an agro-tourism destination. The experience can be planned for families, couples, friends, corporate groups and other visitors seeking a convenient one-day destination near Pune. With a combination of countryside surroundings, recreation and leisure, Om Agro Tourism provides a practical option for people searching for a memorable one day trip and picnic experience near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/one-day-trip-near-pune"
  }
};




    return (
        <div>



<Helmet>
  <title>
    One Day Trip Near Pune | Picnic, Day Outing & Stay Trip Destination | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers a refreshing one day trip near Pune with picnic, day outing and relaxing countryside experiences for families, couples, friends and groups."
  />

  <meta
    name="keywords"
    content="One Day Trip Near Pune, One day picnic spot near Pune, One day stay trip near Pune, 1 day trip near Pune, one day outing near Pune, 1 day picnic spot near Pune, day outing near Pune, one day trip destination near Pune, one day picnic destination near Pune, one day picnic near Pune, one day outing near Pune for family, one day outing near Pune for couples, one day trip near Pune for family, one day trip near Pune for couples, best one day trip near Pune, best one day picnic spot near Pune, best day outing near Pune, family day trip near Pune, family picnic near Pune, family outing near Pune, couple outing near Pune, couple day trip near Pune, weekend outing near Pune, weekend picnic near Pune, nature outing near Pune, nature picnic spot near Pune, agro tourism near Pune, agro tourism day trip near Pune, one day stay near Pune, day trip places near Pune, picnic places near Pune, outing places near Pune, one day getaway near Pune, short trip near Pune, day trip destination Pune, one day recreational outing near Pune, countryside outing near Pune, family friendly picnic place near Pune"
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
                            <img src='/images/keyword/2.jpg' alt='img' className='img-fluid' />
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

export default OneDayTripNearPune;