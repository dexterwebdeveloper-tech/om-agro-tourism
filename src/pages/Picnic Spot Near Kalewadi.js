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

function Picniaspotnearkalewadi() {

const cardData = {
    keyword: "Picnic Spot Near Kalewadi",
    headingDescription: "Looking for a refreshing picnic spot near Kalewadi for a family outing, one day trip, or weekend break? Om Agro Tourism offers a peaceful countryside setting where families, friends, and groups can enjoy a comfortable day away from the busy city environment. With nature, open spaces, farm experiences, recreational activities, and homemade food, it is a convenient choice for visitors searching for an affordable and enjoyable picnic experience near Kalewadi, Pune.",
    topPlaces: [
        {
            title: "Family Day Outing",
            description: "Families from Kalewadi can enjoy a relaxed day surrounded by greenery and open countryside. The peaceful environment, spacious areas, recreational options, and fresh homemade food make the experience suitable for parents, children, and extended family groups."
        },
        {
            title: "Nature Picnic Experience",
            description: "Visitors looking for a nature picnic near Kalewadi can spend quality time away from crowded urban surroundings. The rural atmosphere provides an opportunity to enjoy fresh air, greenery, farm surroundings, and a slower pace throughout the day."
        },
        {
            title: "Kids Fun Day",
            description: "A countryside outing gives children plenty of opportunities to stay active and enjoy an entertaining day. Families can combine outdoor recreation with farm surroundings and age-friendly activities for a memorable picnic experience."
        },
        {
            title: "Weekend Family Escape",
            description: "For a short weekend break from Kalewadi and nearby areas, this destination provides a comfortable setting for families seeking relaxation and recreation. The combination of open surroundings, food, and activities makes the day more enjoyable."
        },
        {
            title: "Rural Farm Experience",
            description: "Those interested in a different kind of picnic can experience rural surroundings and learn more about farm life. Farm tours and workshops can add an educational and engaging element to a family or group outing."
        },
        {
            title: "Affordable Day Trip",
            description: "Visitors searching for a budget-friendly picnic option near Kalewadi can enjoy a complete day outing without choosing an expensive city destination. The natural setting and range of available experiences provide good value for families and groups."
        },
        {
            title: "Group Picnic Experience",
            description: "Friends, relatives, and larger groups can plan a comfortable picnic day with enough space for socialising and outdoor recreation. The countryside atmosphere creates a pleasant setting for spending uninterrupted time together."
        },
        {
            title: "Family Resort Day",
            description: "Families looking for a resort-style picnic near Kalewadi can enjoy a combination of relaxation, food, nature, and recreation in one destination. The setting works well for families planning a convenient one-day outing."
        },
        {
            title: "Kalewadi Weekend Retreat",
            description: "A trip from Kalewadi towards the countryside can be a refreshing way to spend a free day. Visitors can enjoy the natural surroundings, participate in suitable recreational activities, and return after a relaxed day with family or friends."
        },
        {
            title: "Activity-Filled Picnic",
            description: "For visitors specifically searching for a picnic spot with activities near Kalewadi, the destination offers several ways to keep the day engaging. Outdoor recreation, farm experiences, and family-friendly facilities can be combined into a fun-filled outing."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Kalewadi",
            description: "Om Agro Tourism provides a peaceful countryside setting for visitors searching for a picnic spot near Kalewadi. Families and groups can enjoy open surroundings, fresh air, recreational experiences, farm activities, and homemade food while spending quality time away from the busy city."
        },
        {
            name: "One Day Picnic Spot Near Kalewadi",
            description: "A complete one-day outing near Kalewadi can be planned with nature, recreation, food, and family-friendly experiences available at one destination. It is suitable for visitors who want to enjoy a refreshing day trip without planning a long-distance journey."
        },
        {
            name: "Best Picnic Spot Near Kalewadi",
            description: "Visitors comparing the best picnic spot near Kalewadi can consider a destination that combines peaceful surroundings with varied activities and a comfortable family atmosphere. The countryside environment adds a refreshing touch to a full-day picnic."
        },
        {
            name: "Family Picnic Spot Near Kalewadi",
            description: "Families can enjoy a relaxed picnic experience with open spaces, natural surroundings, recreational activities, farm experiences, and homemade meals. The destination is designed to make a family day out comfortable and enjoyable for different age groups."
        },
        {
            name: "Picnic Resort Near Kalewadi",
            description: "For those searching for a picnic resort near Kalewadi, Om Agro Tourism offers a countryside environment where visitors can combine relaxation and recreation. The setting is suitable for families and groups looking for a peaceful day outing."
        },
        {
            name: "One Day Picnic Resort Near Kalewadi",
            description: "A one-day picnic resort experience near Kalewadi can include nature, food, recreational activities, and farm-based experiences. It provides a convenient option for visitors who want a complete outing without requiring an overnight stay."
        },
        {
            name: "Best Resort Near Kalewadi for Picnic",
            description: "Visitors looking for the best resort near Kalewadi for picnic activities can enjoy a rural destination with a variety of experiences for families and groups. The combination of greenery, open areas, activities, and food makes the outing more engaging."
        },
        {
            name: "Family Resort Near Kalewadi",
            description: "A family-friendly countryside resort experience gives parents and children an opportunity to relax and enjoy recreational activities together. The natural surroundings and welcoming environment make it suitable for family gatherings and casual day trips."
        },
        {
            name: "One Day Trip Near Kalewadi",
            description: "A one-day trip near Kalewadi can be planned around nature, farm experiences, outdoor recreation, and freshly prepared food. It is a practical choice for people who want a refreshing break while keeping the outing within a single day."
        },
        {
            name: "Family One Day Trip Near Kalewadi",
            description: "Families can plan a convenient one-day trip from Kalewadi and enjoy a combination of relaxation, recreation, and countryside experiences. The destination offers activities that can keep both children and adults engaged throughout the visit."
        },
        {
            name: "Picnic Places Near Kalewadi",
            description: "People searching for picnic places near Kalewadi can consider a countryside destination offering open surroundings, farm experiences, food, and recreational opportunities. It provides a pleasant alternative to crowded urban entertainment spaces."
        },
        {
            name: "Best Picnic Places Near Kalewadi",
            description: "Among the options for a family-friendly outing, a peaceful agricultural setting can provide a different picnic experience. Visitors can enjoy greenery, outdoor recreation, rural surroundings, and homemade food while spending the day together."
        },
        {
            name: "Affordable Picnic Spot Near Kalewadi",
            description: "An affordable picnic spot near Kalewadi can provide families and groups with an enjoyable day without focusing only on expensive entertainment. The combination of nature, activities, food, and open space creates a practical outing option."
        },
        {
            name: "Budget Picnic Resort Near Kalewadi",
            description: "Visitors planning a budget picnic can choose a destination where multiple experiences are available in one place. Families and groups can enjoy countryside surroundings, recreational activities, farm experiences, and food while keeping the outing convenient."
        },
        {
            name: "Picnic Spot Near Kalewadi Pune",
            description: "For visitors searching specifically around Kalewadi Pune, Om Agro Tourism offers a countryside escape suited to family picnics and group outings. The destination brings together natural surroundings, recreation, farm experiences, and homemade food."
        },
        {
            name: "Resort Near Kalewadi for Family Outing",
            description: "Families planning an outing from Kalewadi can enjoy a comfortable rural environment with space for relaxation and recreation. The combination of family-friendly activities, farm surroundings, and food makes it suitable for a complete day away from the city."
        },
        {
            name: "One Day Resort Near Kalewadi",
            description: "A one-day resort experience near Kalewadi can be enjoyed without the need for overnight accommodation. Visitors can spend their available day exploring the countryside, enjoying recreational activities, and sharing meals with family or friends."
        },
        {
            name: "Nature Picnic Spot Near Kalewadi",
            description: "Nature lovers can enjoy a peaceful picnic surrounded by greenery and rural landscapes. The destination provides an opportunity to step away from urban congestion while experiencing farm surroundings, fresh air, outdoor recreation, and a relaxed atmosphere."
        },
        {
            name: "Picnic Spot Near Rahatani Kalewadi",
            description: "Visitors from Rahatani and Kalewadi can plan a countryside picnic featuring open spaces, nature, recreational activities, and homemade food. It is suitable for families and groups looking for a convenient escape from their regular city routine."
        },
        {
            name: "Picnic Spot Near Thergaon Kalewadi",
            description: "Those travelling from Thergaon and Kalewadi can enjoy a refreshing day outing in a peaceful agricultural environment. The destination offers opportunities for recreation, farm experiences, family time, and relaxed meals in a natural setting."
        },
        {
            name: "Family Picnic Resort Near Kalewadi",
            description: "Families searching for a dedicated picnic resort experience near Kalewadi can enjoy a combination of natural surroundings, recreational options, farm-based activities, and food. The setting is appropriate for parents, children, relatives, and small family groups."
        },
        {
            name: "Picnic Spot with Activities Near Kalewadi",
            description: "Visitors who want more than a simple outdoor picnic can enjoy a destination with several recreational experiences. Depending on the outing plan, activities can include water-based recreation, games, farm tours, rides, and other engaging experiences for families and groups."
        }
    ],
    tableData: [
        ["Picnic Spot Near Kalewadi"],
        ["One Day Picnic Spot Near Kalewadi"],
        ["Best Picnic Spot Near Kalewadi"],
        ["Family Picnic Spot Near Kalewadi"],
        ["Picnic Resort Near Kalewadi"],
        ["One Day Picnic Resort Near Kalewadi"],
        ["Best Resort Near Kalewadi for Picnic"],
        ["Family Resort Near Kalewadi"],
        ["One Day Trip Near Kalewadi"],
        ["Family One Day Trip Near Kalewadi"],
        ["Picnic Places Near Kalewadi"],
        ["Best Picnic Places Near Kalewadi"],
        ["Affordable Picnic Spot Near Kalewadi"],
        ["Budget Picnic Resort Near Kalewadi"],
        ["Picnic Spot Near Kalewadi Pune"],
        ["Resort Near Kalewadi for Family Outing"],
        ["One Day Resort Near Kalewadi"],
        ["Nature Picnic Spot Near Kalewadi"],
        ["Picnic Spot Near Rahatani Kalewadi"],
        ["Picnic Spot Near Thergaon Kalewadi"],
        ["Family Picnic Resort Near Kalewadi"],
        ["Picnic Spot with Activities Near Kalewadi"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Setting",
            WhyChoosedescription: "The natural surroundings provide a welcome break from the busy residential and commercial areas around Kalewadi. Families can spend their picnic day in a quieter environment with greenery, open spaces, and a relaxed rural atmosphere."
        },
        {
            WhyChooseheading: "Suitable for Family Outings",
            WhyChoosedescription: "The destination is planned to suit different age groups, making it convenient for parents, children, relatives, and family groups. Visitors can enjoy recreation and relaxation together without needing to arrange separate activities at different locations."
        },
        {
            WhyChooseheading: "Multiple Experiences in One Visit",
            WhyChoosedescription: "A single outing can include farm experiences, outdoor recreation, games, nature exploration, and food. Having different options available at one destination helps families create a fuller and more engaging day itinerary."
        },
        {
            WhyChooseheading: "Good Option for One Day Trips",
            WhyChoosedescription: "Visitors from Kalewadi, Rahatani, and Thergaon can plan a complete day without requiring an overnight stay. The combination of activities and relaxation makes the destination practical for short breaks and weekend outings."
        },
        {
            WhyChooseheading: "Farm-Based Rural Experience",
            WhyChoosedescription: "Guests get an opportunity to experience a rural environment and understand aspects of agricultural life. Farm tours and workshops can make the outing educational as well as enjoyable, especially for families and younger visitors."
        },
        {
            WhyChooseheading: "Fresh Homemade Food",
            WhyChoosedescription: "A picnic becomes more satisfying when visitors can enjoy tasty homemade food during their day out. The food experience complements the natural surroundings and adds a traditional rural touch to the overall visit."
        },
        {
            WhyChooseheading: "Options for Different Groups",
            WhyChoosedescription: "Whether the plan involves a small family, relatives, friends, or a larger group, the open environment provides flexibility for spending time together. Visitors can select suitable recreational experiences according to their group and interests."
        },
        {
            WhyChooseheading: "Convenient Picnic Experience",
            WhyChoosedescription: "For people searching around Kalewadi Pune, the destination offers a convenient way to combine nature, food, recreation, and family time in one outing. Its varied experiences make it a useful choice for planning a refreshing picnic day."
        }
    ]
};







const faqData = [
    {
        question: "What kind of day picnic can visitors from Kalewadi plan at Om Agri Tourism?",
        answer: "A day at Om Agri Tourism can combine active recreation with peaceful countryside moments. Visitors from Kalewadi can enjoy swimming and boating, try horse riding or traditional farm rides, and set aside time for bird watching and homemade food during their outing."
    },
    {
        question: "Which experiences make Om Agri Tourism suitable for a picnic near Kalewadi?",
        answer: "The combination of water-based recreation and rural activities gives the outing a varied character. Guests can move between swimming, boating, horse riding, tractor rides and bull cart rides, while the natural surroundings offer a pleasant setting for breaks and photography."
    },
    {
        question: "Can families from Kalewadi visit Om Agri Tourism for a weekend picnic?",
        answer: "Families can use the destination for an easygoing outdoor break where different members can choose activities according to their interests. Children may enjoy the recreational experiences, while adults and elders can spend time with homemade food, bird watching and relaxed conversations."
    },
    {
        question: "Are there traditional farm activities to experience near Kalewadi Pune?",
        answer: "Visitors interested in rural experiences can try tractor rides and bull cart rides along with horse riding. These activities provide a glimpse of countryside-style recreation and can be paired with swimming, boating and nature observation for a fuller picnic experience."
    },
    {
        question: "What can children do during a picnic at Om Agri Tourism?",
        answer: "Children can take part in suitable outdoor activities such as swimming, boating and selected rides under proper adult supervision. Bird watching can also add an educational element to the visit, allowing young guests to spend time observing nature beyond their usual city surroundings."
    },
    {
        question: "Is a picnic near Kalewadi suitable for a mixed-age family group?",
        answer: "A mixed-age outing can be arranged without requiring everyone to follow the same activity schedule. Younger members can enjoy swimming, boating or rides, while senior guests may prefer bird watching, homemade food and relaxing in the open farm environment."
    },
    {
        question: "How can friends from Kalewadi make their picnic more enjoyable?",
        answer: "A friends' outing can be organized around shared activities followed by relaxed breaks. Starting with boating or swimming, adding horse riding or a farm ride, and finishing with food and time outdoors can create a balanced schedule without making the day feel rushed."
    },
    {
        question: "Does Om Agri Tourism provide nature-based activities for visitors near Kalewadi?",
        answer: "Nature forms an important part of the farm experience, with bird watching and open countryside surroundings giving guests opportunities to slow down and observe the environment. These quieter moments can complement the more energetic activities available during the picnic."
    },
    {
        question: "What should groups from Kalewadi include in a one-day picnic itinerary?",
        answer: "A practical itinerary could reserve the earlier part of the visit for swimming, boating or horse riding, followed by lunch and a slower afternoon. Tractor rides, bull cart rides, bird watching and photography can be added according to the group's interests and available time."
    },
    {
        question: "Why consider Om Agri Tourism when looking for a picnic spot near Kalewadi?",
        answer: "For visitors wanting something beyond a typical urban outing, the farm setting brings recreation, rural experiences, food and nature together. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching give families and groups several ways to spend quality time away from the city."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Saurabh Kulkarni",
        feedback:
            "The variety kept our Kalewadi group engaged throughout the visit. We started with boating and swimming, later tried the countryside rides, and enjoyed a relaxed meal together. The farm environment gave us a refreshing change from our usual weekend plans.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Rutuja Deshmukh",
        feedback:
            "Seeing the children enjoy the outdoor activities while the elders comfortably spent time around the greenery made the picnic especially pleasant. Bird watching and homemade food added quieter moments between activities, so everyone in our family had something to enjoy.",
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
  "name": "Picnic Spot Near Kalewadi",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-kalewadi.webp",
  "description": "Looking for a refreshing picnic spot near Kalewadi where family and friends can enjoy a relaxed day together? Om Agro Tourism offers a welcoming agro-tourism setting for families, friends, students and groups planning a memorable outdoor outing. A one day picnic near Kalewadi can be a simple way to take a break from the city's busy schedule and spend meaningful time with loved ones in a peaceful environment. Visitors searching for the best picnic spot near Kalewadi can plan a leisurely day for family gatherings, friends' get-togethers or group activities. Families considering a picnic resort near Kalewadi or a one day picnic resort near Kalewadi can also choose a comfortable destination for their planned day outing. Whether you are arranging a family picnic, weekend escape, school outing or casual group gathering, Om Agro Tourism provides an enjoyable setting for creating lasting memories near Kalewadi.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-kalewadi"
  }
};








    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Kalewadi | Family Retreat, Outdoor Activities & Leisure Day | +91 7066665554
  </title>

  <meta
    name="description"
    content="Find a picnic spot near Kalewadi for a relaxing family outing, friends' gathering or one day trip. Om Agro Tourism offers a peaceful agro-tourism setting for an enjoyable leisure day."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Kalewadi, One Day Picnic Spot Near Kalewadi, Best Picnic Spot Near Kalewadi, Family Picnic Spot Near Kalewadi, Picnic Resort Near Kalewadi, One Day Picnic Resort Near Kalewadi, Best Resort Near Kalewadi for Picnic, Family Resort Near Kalewadi, One Day Trip Near Kalewadi, Family One Day Trip Near Kalewadi, Picnic Places Near Kalewadi, Best Picnic Places Near Kalewadi, Family Outing Near Kalewadi, One Day Outing Near Kalewadi, Picnic Destination Near Kalewadi, Agro Tourism Near Kalewadi, Best Family Picnic Near Kalewadi"
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
                            <img src='/images/keyword/151.jpg' alt='img' className='img-fluid' />
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

export default Picniaspotnearkalewadi;