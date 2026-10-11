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

function Picnicspotneargangechowk() {

const cardData = {
    keyword: "Picnic Spot Near Dange Chowk",
    headingDescription: "Looking for a peaceful picnic spot near Dange Chowk for a family outing, one day trip, or weekend escape? Om Agro Tourism provides a refreshing countryside environment where visitors can enjoy greenery, open spaces, farm experiences, recreational activities, and homemade food. It is a convenient option for families, friends, and groups from Dange Chowk, Wakad, and Tathawade who want to spend a relaxing day away from the busy city surroundings.",
    topPlaces: [
        {
            title: "Family Countryside Outing",
            description: "Families from Dange Chowk can enjoy a relaxed day in a peaceful rural environment away from busy roads and crowded urban spaces. Open surroundings, recreation, farm experiences, and food provide a comfortable setting for parents, children, and relatives."
        },
        {
            title: "Refreshing Nature Break",
            description: "Visitors looking for a nature-focused outing can spend their day surrounded by greenery and open countryside. The calm environment provides a refreshing change from everyday city life and works well for a short break with family or friends."
        },
        {
            title: "Children's Activity Day",
            description: "Families with children can plan an entertaining day with outdoor recreation, games, and engaging farm-based experiences. The variety of activities gives younger visitors opportunities to stay active while parents enjoy the peaceful surroundings."
        },
        {
            title: "Complete One Day Escape",
            description: "A full-day outing from Dange Chowk can include relaxation, food, nature exploration, and recreational experiences at one destination. This makes it suitable for visitors who want a complete picnic without arranging an overnight stay."
        },
        {
            title: "Rural Learning Experience",
            description: "The countryside environment gives visitors an opportunity to understand rural life through farm surroundings, tours, and workshops. Families and children can combine their recreational outing with simple and engaging agricultural experiences."
        },
        {
            title: "Budget-Friendly Family Day",
            description: "Families searching for an affordable outing can enjoy several experiences within the same destination. The combination of open surroundings, recreation, farm activities, and food makes it possible to plan a satisfying day without an elaborate travel itinerary."
        },
        {
            title: "Friends Group Picnic",
            description: "Friends and larger groups can spend quality time together in a spacious countryside environment. Outdoor recreation, shared meals, games, and farm experiences can be combined according to the group's preferred picnic plan."
        },
        {
            title: "Family Resort Experience",
            description: "Families can enjoy a resort-style day surrounded by nature while keeping the outing convenient. The destination provides opportunities for relaxation, recreation, food, and shared family time in a comfortable rural setting."
        },
        {
            title: "Wakad-Tathawade Day Trip",
            description: "Visitors from Dange Chowk, Wakad, and Tathawade can plan a convenient countryside escape without making the outing a long-distance journey. The rural atmosphere provides a refreshing change from nearby residential and commercial areas."
        },
        {
            title: "Recreation-Focused Picnic",
            description: "Visitors searching for a picnic with activities can enjoy a range of experiences instead of spending the entire day simply relaxing outdoors. Depending on the plan, water recreation, games, farm experiences, and rides can make the outing more engaging."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Dange Chowk",
            description: "Om Agro Tourism offers a peaceful countryside setting for visitors searching for a picnic spot near Dange Chowk. Families and groups can enjoy greenery, open areas, farm experiences, recreational activities, and homemade food during a refreshing day outing."
        },
        {
            name: "One Day Picnic Spot Near Dange Chowk",
            description: "A one-day picnic near Dange Chowk can combine nature, recreation, food, and family time in one convenient destination. Visitors can enjoy a complete day experience without needing to arrange overnight accommodation."
        },
        {
            name: "Best Picnic Spot Near Dange Chowk",
            description: "Visitors comparing the best picnic spot near Dange Chowk can consider a destination that offers a balanced combination of nature and recreation. Farm experiences, open surroundings, family-friendly activities, and food help create a fuller picnic experience."
        },
        {
            name: "Family Picnic Spot Near Dange Chowk",
            description: "Families can enjoy a comfortable outing with access to open surroundings, countryside experiences, recreation, and food. The destination provides opportunities for parents, children, and relatives to relax and spend meaningful time together."
        },
        {
            name: "Picnic Resort Near Dange Chowk",
            description: "For those searching for a picnic resort near Dange Chowk, Om Agro Tourism provides a rural environment where visitors can combine relaxation and entertainment. It is suitable for families, friends, and groups planning a day away from the city."
        },
        {
            name: "One Day Picnic Resort Near Dange Chowk",
            description: "A one-day picnic resort experience near Dange Chowk allows visitors to enjoy nature, recreation, food, and farm-based activities within one visit. It is a practical choice for people who want a complete day outing without staying overnight."
        },
        {
            name: "Best Resort Near Dange Chowk for Picnic",
            description: "Visitors looking for the best resort near Dange Chowk for picnic plans can enjoy a destination offering open spaces, greenery, recreational options, farm experiences, and food. These varied facilities help families create an enjoyable full-day schedule."
        },
        {
            name: "Family Resort Near Dange Chowk",
            description: "A family-friendly resort environment gives parents and children the opportunity to relax and enjoy suitable recreational experiences together. The countryside surroundings add a peaceful quality to family gatherings and weekend outings."
        },
        {
            name: "One Day Trip Near Dange Chowk",
            description: "A one-day trip near Dange Chowk can be planned around nature, farm experiences, outdoor recreation, and homemade food. It provides a convenient way to enjoy a refreshing change of surroundings while returning home the same day."
        },
        {
            name: "Family One Day Trip Near Dange Chowk",
            description: "Families can plan a simple one-day trip from Dange Chowk with experiences suitable for both children and adults. Nature, recreation, farm surroundings, and meals can be combined into a comfortable family itinerary."
        },
        {
            name: "Picnic Places Near Dange Chowk",
            description: "People searching for picnic places near Dange Chowk can consider a countryside destination with greenery, open spaces, recreation, farm experiences, and food. It offers a pleasant alternative to crowded city entertainment areas."
        },
        {
            name: "Best Picnic Places Near Dange Chowk",
            description: "A quality picnic destination should provide more than just a place to sit outdoors. Visitors can enjoy a combination of natural surroundings, recreational experiences, farm-based activities, and meals to make the day more engaging."
        },
        {
            name: "Affordable Picnic Spot Near Dange Chowk",
            description: "An affordable picnic spot near Dange Chowk can be useful for families and groups looking for a refreshing outing without an expensive travel plan. The variety of experiences available in one location makes the day convenient and enjoyable."
        },
        {
            name: "Budget Picnic Resort Near Dange Chowk",
            description: "Visitors planning a budget-friendly picnic can enjoy multiple experiences within one countryside destination. Families and groups can combine recreation, nature, farm activities, and food while keeping the overall outing practical."
        },
        {
            name: "Picnic Spot Near Dange Chowk Pune",
            description: "For visitors searching specifically for a picnic spot near Dange Chowk Pune, Om Agro Tourism offers a countryside escape suitable for family and group outings. The natural environment can be combined with recreational activities, farm experiences, and homemade food."
        },
        {
            name: "Resort Near Dange Chowk for Family Outing",
            description: "Families planning an outing from Dange Chowk can enjoy a peaceful rural setting with options for relaxation and recreation. The open surroundings and varied experiences make it possible to create a comfortable day plan for different age groups."
        },
        {
            name: "One Day Resort Near Dange Chowk",
            description: "A one-day resort outing near Dange Chowk provides an opportunity to enjoy nature, recreation, food, and farm experiences without requiring an overnight stay. It is suitable for families and groups looking for a short countryside break."
        },
        {
            name: "Nature Picnic Spot Near Dange Chowk",
            description: "Nature lovers can enjoy a picnic surrounded by greenery and open rural landscapes. The peaceful environment offers a welcome break from urban congestion while allowing visitors to spend quality time outdoors with family and friends."
        },
        {
            name: "Picnic Spot Near Wakad Dange Chowk",
            description: "Visitors from Wakad and the Dange Chowk area can plan a convenient countryside picnic with greenery, open spaces, recreational activities, and homemade food. It provides an easy option for a refreshing group or family day out."
        },
        {
            name: "Picnic Spot Near Tathawade Dange Chowk",
            description: "People travelling from Tathawade and Dange Chowk can enjoy a peaceful rural outing with opportunities for recreation and relaxation. Families and groups can combine farm experiences, outdoor activities, and meals during their visit."
        },
        {
            name: "Family Picnic Resort Near Dange Chowk",
            description: "Families searching for a dedicated picnic resort experience near Dange Chowk can enjoy a combination of countryside surroundings, recreation, farm-based experiences, and food. The setting is suitable for parents, children, relatives, and small groups."
        },
        {
            name: "Picnic Spot with Activities Near Dange Chowk",
            description: "Visitors who want an activity-filled picnic near Dange Chowk can choose from different recreational experiences during their visit. Depending on the outing plan, activities may include water-based recreation, games, farm tours, rides, and other family-friendly options."
        }
    ],
    tableData: [
        ["Picnic Spot Near Dange Chowk"],
        ["One Day Picnic Spot Near Dange Chowk"],
        ["Best Picnic Spot Near Dange Chowk"],
        ["Family Picnic Spot Near Dange Chowk"],
        ["Picnic Resort Near Dange Chowk"],
        ["One Day Picnic Resort Near Dange Chowk"],
        ["Best Resort Near Dange Chowk for Picnic"],
        ["Family Resort Near Dange Chowk"],
        ["One Day Trip Near Dange Chowk"],
        ["Family One Day Trip Near Dange Chowk"],
        ["Picnic Places Near Dange Chowk"],
        ["Best Picnic Places Near Dange Chowk"],
        ["Affordable Picnic Spot Near Dange Chowk"],
        ["Budget Picnic Resort Near Dange Chowk"],
        ["Picnic Spot Near Dange Chowk Pune"],
        ["Resort Near Dange Chowk for Family Outing"],
        ["One Day Resort Near Dange Chowk"],
        ["Nature Picnic Spot Near Dange Chowk"],
        ["Picnic Spot Near Wakad Dange Chowk"],
        ["Picnic Spot Near Tathawade Dange Chowk"],
        ["Family Picnic Resort Near Dange Chowk"],
        ["Picnic Spot with Activities Near Dange Chowk"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Atmosphere",
            WhyChoosedescription: "The rural environment offers a refreshing break from the busy surroundings of Dange Chowk. Visitors can enjoy greenery, open spaces, and a calmer atmosphere while spending quality time with family, friends, or colleagues."
        },
        {
            WhyChooseheading: "Comfortable for Family Groups",
            WhyChoosedescription: "Parents, children, relatives, and different age groups can enjoy the outing together. The range of recreational and relaxing experiences makes it easier to plan a day that suits the interests of the entire family."
        },
        {
            WhyChooseheading: "Many Experiences at One Destination",
            WhyChoosedescription: "Visitors can combine nature, farm experiences, games, outdoor recreation, and food during the same visit. This variety helps turn a simple picnic into a more complete and engaging day outing."
        },
        {
            WhyChooseheading: "Ideal for Short Getaways",
            WhyChoosedescription: "People from Dange Chowk, Wakad, and Tathawade can plan a countryside escape without needing a long-distance journey. The destination works well for one-day plans, weekend breaks, and spontaneous family outings."
        },
        {
            WhyChooseheading: "Educational Farm Activities",
            WhyChoosedescription: "Farm tours and workshops give visitors a chance to learn about rural surroundings and agricultural practices. These experiences can add educational value to a family picnic, particularly for children and students."
        },
        {
            WhyChooseheading: "Traditional Homemade Meals",
            WhyChoosedescription: "Homemade food adds a familiar and traditional element to the countryside experience. Guests can enjoy their meals in a peaceful setting while taking a break from the regular dining options available in the city."
        },
        {
            WhyChooseheading: "Suitable for Friends and Groups",
            WhyChoosedescription: "The open environment allows friends, relatives, and larger groups to spend time together comfortably. Different activities can be selected so that everyone can participate according to their interests and preferred pace."
        },
        {
            WhyChooseheading: "Nature Combined with Recreation",
            WhyChoosedescription: "The destination balances peaceful natural surroundings with engaging recreational experiences. This combination makes it suitable for visitors who want relaxation as well as entertainment during their picnic near Dange Chowk."
        }
    ]
};







const faqData = [
    {
        question: "What type of picnic experience can people from Dange Chowk enjoy at Om Agri Tourism?",
        answer: "Visitors can spend the day combining outdoor fun with countryside experiences. Swimming and boating can be paired with horse riding, tractor rides and bull cart rides, while bird watching and homemade food offer opportunities to relax during the outing."
    },
    {
        question: "How can families near Dange Chowk plan a comfortable picnic day?",
        answer: "Families can create a flexible schedule that includes both active and slower-paced experiences. Water activities can be followed by a meal, countryside rides or time observing birds, allowing children, parents and senior members to enjoy the visit at their own pace."
    },
    {
        question: "Which activities are available for a picnic near Dange Chowk Pune?",
        answer: "A variety of activities can be included in the outing, such as swimming, boating, horse riding, tractor rides and bull cart rides. Guests who prefer nature-oriented experiences can also spend time bird watching and enjoying the farm surroundings."
    },
    {
        question: "Can friends from Dange Chowk visit Om Agri Tourism for a group picnic?",
        answer: "Friends can plan an interactive outing by choosing activities that everyone can enjoy together. Boating, swimming and riding experiences can keep the group active, while homemade food, photography and time in the countryside provide relaxed breaks throughout the day."
    },
    {
        question: "What makes a countryside picnic appealing to visitors from Dange Chowk?",
        answer: "A farm-based outing provides a change from the urban environment by bringing recreation and rural experiences together. Traditional bull cart and tractor rides, horse riding and bird watching can be enjoyed alongside swimming and boating for a more varied picnic."
    },
    {
        question: "Are there activities for children at Om Agri Tourism near Dange Chowk?",
        answer: "Children can participate in suitable outdoor experiences such as swimming, boating and selected rides with appropriate adult supervision. Bird watching can also make the visit interesting from a nature-learning perspective, giving young guests something different from regular city entertainment."
    },
    {
        question: "Can a multi-generation family enjoy a picnic near Dange Chowk?",
        answer: "Different activity choices make it possible for family members to follow their preferred pace. Younger guests can participate in active recreation, whereas elders can enjoy homemade food, bird watching and the open surroundings without needing to join every activity."
    },
    {
        question: "What itinerary works well for a one-day outing from Dange Chowk?",
        answer: "Groups can begin with activities such as swimming or boating and then move toward horse riding or traditional farm rides. After a meal break, the remaining time can be kept for bird watching, photography and relaxation instead of filling the schedule with too many activities."
    },
    {
        question: "Can visitors experience rural-style rides during a picnic near Dange Chowk?",
        answer: "Guests looking for a traditional countryside experience can include tractor rides and bull cart rides along with horse riding. Adding these activities to swimming and boating gives the outing a combination of recreation and farm-oriented experiences."
    },
    {
        question: "Why is Om Agri Tourism worth considering as a picnic spot near Dange Chowk?",
        answer: "For anyone wanting a refreshing break from the city, the destination brings outdoor recreation, countryside activities, nature and food into one outing. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide several options for families and groups."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Pratik Shirole",
        feedback:
            "A change of setting made our Dange Chowk group outing much more enjoyable than a regular city plan. We spent time boating and swimming, tried the countryside rides and later enjoyed a relaxed meal. The different activities kept the entire group interested.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Snehal Wagh",
        feedback:
            "The peaceful farm environment was a highlight of our family visit. While the younger members enjoyed the active experiences, the elders preferred bird watching, homemade food and sitting in the open surroundings. It was a pleasant way to spend a full day together.",
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
  "name": "Picnic Spot Near Dange Chowk",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-dange-chowk.webp",
  "description": "Planning a refreshing day outing and searching for a picnic spot near Dange Chowk? Om Agro Tourism offers a pleasant agro-tourism setting for families, friends, students and groups who want to spend quality time away from the busy city routine. A one day picnic near Dange Chowk can be an enjoyable choice for relaxing together, enjoying open surroundings and making the most of a planned family or group outing. Visitors searching for the best picnic spot near Dange Chowk can consider a destination suited to family gatherings, friends' meetups and casual celebrations. Families looking for a family picnic spot near Dange Chowk can plan a comfortable day out, while those searching for a picnic resort near Dange Chowk or a one day picnic resort near Dange Chowk can choose an agro-tourism destination for their leisure plans. Whether you are arranging a weekend outing, school picnic, family gathering or friends' day trip, Om Agro Tourism provides a welcoming setting for an enjoyable picnic experience near Dange Chowk.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-dange-chowk"
  }
};





    return (
        <div>


<Helmet>
  <title>
    Picnic Spot Near Dange Chowk | Weekend Escape, Family Picnic & Outdoor Recreation | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a picnic spot near Dange Chowk for families, friends and groups. Plan a one day picnic at Om Agro Tourism for a peaceful outdoor escape and enjoyable family recreation."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Dange Chowk, One Day Picnic Spot Near Dange Chowk, Best Picnic Spot Near Dange Chowk, Family Picnic Spot Near Dange Chowk, Picnic Resort Near Dange Chowk, One Day Picnic Resort Near Dange Chowk, Best Resort Near Dange Chowk for Picnic, Family Resort Near Dange Chowk, One Day Trip Near Dange Chowk, Family One Day Trip Near Dange Chowk, Picnic Places Near Dange Chowk, Best Picnic Places Near Dange Chowk, Family Outing Near Dange Chowk, One Day Outing Near Dange Chowk, Picnic Destination Near Dange Chowk, Agro Tourism Near Dange Chowk, Best Family Picnic Near Dange Chowk"
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
                            <img src='/images/keyword/153.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotneargangechowk;