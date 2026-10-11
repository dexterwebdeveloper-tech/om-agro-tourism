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

function Picnicspotsnearbavdhan() {

const cardData = {
    keyword: "Picnic Spot Near Bavdhan",
    headingDescription: "Om Agro Tourism is a refreshing destination for families, friends, and groups searching for a picnic spot near Bavdhan. Surrounded by a peaceful rural setting, it brings together farm experiences, nature-based activities, traditional rides, recreational options, water activities, and homemade food, making it suitable for one-day picnics, family outings, nature breaks, and group get-togethers away from the city's busy routine.",
    topPlaces: [
        {
            title: "Horse Riding",
            description: "Horse Riding adds an enjoyable outdoor experience to the picnic and gives visitors an opportunity to participate in a traditional recreational activity. It is a suitable choice for families and groups looking for something active during their outing."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food brings a comforting culinary experience to the visit with meals prepared in a homely style. Families and groups can enjoy satisfying food while spending their day in the peaceful agro tourism surroundings."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching offers a calm nature experience for visitors who enjoy observing birds and exploring peaceful outdoor surroundings. It provides families and nature lovers with a relaxing activity during their picnic."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide entertaining options for children, adults, families, and larger groups. The range of activities helps visitors stay engaged and enjoy quality time together throughout the outing."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops allow visitors to explore agricultural surroundings and understand aspects of rural life. This experience adds an educational and interactive element to a family or group picnic."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride introduces visitors to a traditional countryside experience and creates memorable moments for families and groups. It adds a distinctive rural character to the one-day picnic."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities offer refreshing entertainment for visitors who want to include water-based recreation in their picnic plan. They can add extra fun for families and groups during a full-day outing."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride gives visitors a closer connection with the farm environment through a fun countryside activity. It is an interesting experience for children and adults looking to explore something different."
        },
        {
            title: "Swimming Pool",
            description: "Swimming Pool access provides a refreshing leisure option for visitors who want to relax or enjoy water recreation. It can be a pleasant addition to a family picnic or group day outing."
        },
        {
            title: "Boating",
            description: "Boating gives visitors an opportunity to enjoy a peaceful water-based activity during their picnic. It adds variety to the day's experiences and can be enjoyed as part of a relaxed family or group outing."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Bavdhan",
            description: "Om Agro Tourism offers a refreshing picnic spot near Bavdhan where families, friends, and groups can enjoy peaceful rural surroundings, farm experiences, recreational activities, traditional rides, water activities, and homemade food."
        },
        {
            name: "One Day Picnic Spot Near Bavdhan",
            description: "A one-day picnic spot near Bavdhan provides a convenient option for visitors who want to spend an entire day away from the city with access to nature, farm activities, games, rides, water recreation, and food."
        },
        {
            name: "Best Picnic Spot Near Bavdhan",
            description: "Visitors looking for the best picnic spot near Bavdhan can enjoy a combination of rural surroundings, outdoor recreation, farm experiences, traditional attractions, water activities, and a homely food experience."
        },
        {
            name: "Family Picnic Spot Near Bavdhan",
            description: "The family picnic spot near Bavdhan provides activities and experiences suitable for different age groups, allowing parents, children, and relatives to enjoy games, rides, farm activities, water recreation, and quality time together."
        },
        {
            name: "Picnic Resort Near Bavdhan",
            description: "Om Agro Tourism works as a picnic resort near Bavdhan for visitors seeking a peaceful countryside escape with multiple recreational activities, farm experiences, traditional attractions, and food options in one destination."
        },
        {
            name: "One Day Picnic Resort Near Bavdhan",
            description: "A one-day picnic resort near Bavdhan is suitable for families and groups who want a complete day outing without planning an overnight stay, with activities and leisure experiences available throughout the visit."
        },
        {
            name: "Best Resort Near Bavdhan for Picnic",
            description: "For those searching for the best resort near Bavdhan for picnic plans, Om Agro Tourism combines a rural atmosphere with farm activities, traditional rides, games, water recreation, and tasty homemade food."
        },
        {
            name: "Family Resort Near Bavdhan",
            description: "The family resort near Bavdhan provides a pleasant environment for relatives and children to spend quality time together through recreational games, farm experiences, outdoor activities, water recreation, and food."
        },
        {
            name: "One Day Trip Near Bavdhan",
            description: "A one-day trip near Bavdhan becomes more enjoyable when visitors can combine nature, farm experiences, traditional rides, recreational activities, water entertainment, and food within the same destination."
        },
        {
            name: "Family One Day Trip Near Bavdhan",
            description: "Families planning a one-day trip near Bavdhan can enjoy a varied itinerary with games, horse riding, farm activities, traditional rides, water-based recreation, and relaxing outdoor surroundings."
        },
        {
            name: "Picnic Places Near Bavdhan",
            description: "Among picnic places near Bavdhan, Om Agro Tourism offers a distinctive countryside environment where visitors can enjoy farm attractions, nature experiences, recreational activities, traditional rides, and homemade food."
        },
        {
            name: "Best Picnic Places Near Bavdhan",
            description: "The best picnic places near Bavdhan can provide more than open space, and Om Agro Tourism adds interactive farm experiences, outdoor activities, traditional attractions, water recreation, and food for a fuller day outing."
        },
        {
            name: "Affordable Picnic Spot Near Bavdhan",
            description: "An affordable picnic spot near Bavdhan gives families and groups an opportunity to plan a refreshing day outing while enjoying multiple activities, peaceful surroundings, recreational experiences, and food."
        },
        {
            name: "Budget Picnic Resort Near Bavdhan",
            description: "A budget picnic resort near Bavdhan is a practical choice for visitors seeking a countryside day outing with varied activities, rural attractions, leisure options, and a comfortable food experience."
        },
        {
            name: "Picnic Spot Near Bavdhan Pune",
            description: "Visitors searching for a picnic spot near Bavdhan Pune can enjoy a convenient escape into a rural environment with farm experiences, nature activities, traditional rides, games, water recreation, and homemade meals."
        },
        {
            name: "Resort Near Bavdhan for Family Outing",
            description: "A resort near Bavdhan for family outing plans should provide activities for children and adults alike, and Om Agro Tourism offers games, farm experiences, rides, water activities, nature experiences, and food."
        },
        {
            name: "One Day Resort Near Bavdhan",
            description: "A one-day resort near Bavdhan provides a convenient alternative for visitors who want a complete recreational break within a single day, with several attractions available without requiring an overnight stay."
        },
        {
            name: "Nature Picnic Spot Near Bavdhan",
            description: "The nature picnic spot near Bavdhan provides a peaceful rural setting where visitors can enjoy bird watching, farm surroundings, outdoor activities, and traditional countryside experiences away from urban congestion."
        },
        {
            name: "Picnic Spot Near Kothrud Bavdhan",
            description: "For visitors searching for a picnic spot near Kothrud Bavdhan, Om Agro Tourism offers a countryside escape featuring farm activities, games, traditional rides, water recreation, nature experiences, and homemade food."
        },
        {
            name: "Family Picnic Resort Near Bavdhan",
            description: "The family picnic resort near Bavdhan creates opportunities for families to enjoy meaningful time together through outdoor recreation, farm activities, traditional rides, water-based entertainment, and a relaxing rural atmosphere."
        },
        {
            name: "Picnic Spot Near Pune Bavdhan",
            description: "A picnic spot near Pune Bavdhan can provide a convenient short getaway, while Om Agro Tourism adds variety through farm experiences, nature activities, games, traditional rides, water recreation, and food."
        },
        {
            name: "Picnic Spot with Activities Near Bavdhan",
            description: "A picnic spot with activities near Bavdhan is ideal for visitors who want an active day outing, with options including horse riding, farm tours, games, tractor rides, bull cart rides, water activities, and bird watching."
        }
    ],
    tableData: [
        ["Picnic Spot Near Bavdhan"],
        ["One Day Picnic Spot Near Bavdhan"],
        ["Best Picnic Spot Near Bavdhan"],
        ["Family Picnic Spot Near Bavdhan"],
        ["Picnic Resort Near Bavdhan"],
        ["One Day Picnic Resort Near Bavdhan"],
        ["Best Resort Near Bavdhan for Picnic"],
        ["Family Resort Near Bavdhan"],
        ["One Day Trip Near Bavdhan"],
        ["Family One Day Trip Near Bavdhan"],
        ["Picnic Places Near Bavdhan"],
        ["Best Picnic Places Near Bavdhan"],
        ["Affordable Picnic Spot Near Bavdhan"],
        ["Budget Picnic Resort Near Bavdhan"],
        ["Picnic Spot Near Bavdhan Pune"],
        ["Resort Near Bavdhan for Family Outing"],
        ["One Day Resort Near Bavdhan"],
        ["Nature Picnic Spot Near Bavdhan"],
        ["Picnic Spot Near Kothrud Bavdhan"],
        ["Family Picnic Resort Near Bavdhan"],
        ["Picnic Spot Near Pune Bavdhan"],
        ["Picnic Spot with Activities Near Bavdhan"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Escape",
            WhyChoosedescription: "The rural surroundings provide a refreshing change from the busy Bavdhan and Pune city environment, giving visitors an opportunity to relax in an open and natural setting."
        },
        {
            WhyChooseheading: "Activities for Families and Groups",
            WhyChoosedescription: "Families and groups can choose from games, horse riding, farm experiences, traditional rides, water activities, and nature-based recreation, making the outing engaging for different age groups."
        },
        {
            WhyChooseheading: "Interactive Farm Experiences",
            WhyChoosedescription: "Farm Tours and Workshops allow visitors to explore agricultural surroundings and experience rural activities, adding an educational and interactive dimension to the picnic."
        },
        {
            WhyChooseheading: "Traditional Countryside Activities",
            WhyChoosedescription: "Bull Cart Ride and Tractor Ride give guests an opportunity to experience traditional rural activities while creating memorable moments that are different from typical urban recreational outings."
        },
        {
            WhyChooseheading: "Refreshing Water Recreation",
            WhyChoosedescription: "Swimming Pool and Water Park Activities provide refreshing options for visitors who want to add water-based entertainment to their one-day picnic itinerary."
        },
        {
            WhyChooseheading: "Enjoyable Food Experience",
            WhyChoosedescription: "Tasty Homemade Food adds a comforting element to the outing, allowing visitors to enjoy flavorful meals in an environment that complements the rural agro tourism experience."
        },
        {
            WhyChooseheading: "Suitable for Different Outing Plans",
            WhyChoosedescription: "Whether the plan involves a family picnic, friends' gathering, nature break, or group outing, the variety of attractions makes it possible to create a flexible day experience around different interests."
        },
        {
            WhyChooseheading: "Multiple Experiences in One Destination",
            WhyChoosedescription: "Visitors can enjoy nature, farm activities, recreational games, traditional rides, water entertainment, and food without having to travel between multiple destinations, making the day easier to organize."
        }
    ]
};




const faqData = [
    {
        question: "What can visitors from Bavdhan enjoy at Om Agri Tourism?",
        answer: "A countryside visit to Om Agri Tourism gives people from Bavdhan a chance to take a break from Pune's urban routine. The farm setting brings together swimming, boating, horse riding, tractor rides, bull cart rides and bird watching, along with homemade food and peaceful green surroundings."
    },
    {
        question: "Which activities make Om Agri Tourism an interesting picnic spot near Bavdhan?",
        answer: "Visitors can choose from water-based recreation as well as traditional farm experiences during their outing. Swimming and boating offer active entertainment, while horse riding, tractor rides and bull cart rides add a rural touch. Bird watching can be included for those who prefer a quieter nature activity."
    },
    {
        question: "Can families from Bavdhan plan a picnic at Om Agri Tourism?",
        answer: "Families can enjoy a varied day by selecting activities that suit different age groups. Children can take part in appropriate experiences with adult supervision, while parents can relax around the farm, enjoy homemade food and spend time in the greenery between swimming, boating and rides."
    },
    {
        question: "How can friends from Bavdhan spend a day at this picnic destination?",
        answer: "Friends can start with swimming or boating and then explore horse riding, tractor rides or bull cart rides. Adding photography, food and bird watching to the itinerary allows the group to balance energetic activities with relaxed conversations and time spent enjoying the countryside."
    },
    {
        question: "What can children do during a picnic near Bavdhan Pune?",
        answer: "Children can enjoy a change from their usual city surroundings through outdoor activities such as swimming, boating and suitable farm rides. Bird watching can also make the visit interesting by encouraging them to observe the natural environment. Parents or guardians should provide appropriate supervision."
    },
    {
        question: "Does Om Agri Tourism offer traditional countryside experiences near Bavdhan?",
        answer: "The farm environment allows visitors to explore experiences connected with rural life rather than only conventional recreational activities. Horse riding, tractor rides and bull cart rides can be enjoyed alongside bird watching and farm surroundings, while homemade food adds a traditional element to the picnic."
    },
    {
        question: "Can corporate teams from Bavdhan visit Om Agri Tourism for a group outing?",
        answer: "Corporate groups can use the farm setting for an informal day away from the regular office environment. Boating, swimming, horse riding and traditional rides can encourage interaction among colleagues, while shared meals, nature observation and relaxed time around the farm can support team bonding."
    },
    {
        question: "Is homemade food available as part of the picnic experience near Bavdhan?",
        answer: "Homemade food can provide a comfortable meal break during the countryside outing and complement the overall farm experience. Guests can enjoy their food in a relaxed atmosphere before continuing with activities such as swimming, boating, horse riding, tractor rides, bull cart rides or bird watching."
    },
    {
        question: "Why might an agro tourism outing be better than a regular picnic near Bavdhan?",
        answer: "An agro tourism destination combines recreation with opportunities to experience farm surroundings and traditional rural activities. Visitors can move between swimming, boating, countryside rides and bird watching while enjoying homemade food, giving families and groups a more varied way to spend their day."
    },
    {
        question: "Why choose Om Agri Tourism when looking for a picnic spot near Bavdhan?",
        answer: "Om Agri Tourism offers a combination of outdoor recreation, greenery and countryside experiences for families, friends and groups. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide plenty of choices, while homemade food and the peaceful farm environment make the outing refreshing and memorable."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Abhinav Salunkhe",
        feedback:
            "Our family came from Bavdhan for a day picnic at Om Agri Tourism and enjoyed the peaceful atmosphere from the moment we arrived. The children liked boating and swimming, while the horse riding and bull cart ride were enjoyable for everyone. Homemade food and the green surroundings made the experience even better.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss Sakshi Kamat",
        feedback:
            "We planned a friends' outing from Bavdhan and wanted a place with different activities, so we visited Om Agri Tourism. The tractor ride, boating and horse riding kept us entertained, and later we relaxed with bird watching and photography. It was a refreshing countryside experience and a nice break from our normal weekend plans.",
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
  "name": "Picnic Spot Near Bavdhan",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-bavdhan.webp",
  "description": "Picnic Spot Near Bavdhan is a convenient choice for families, friends, couples, school groups, and corporate teams planning a refreshing break from the busy Pune city routine. Om Agro Tourism offers an agro-tourism-oriented countryside experience where visitors can enjoy open surroundings, outdoor leisure, group recreation, and quality time with their loved ones. A One Day Picnic Spot Near Bavdhan can be suitable for people who want to enjoy a short outing without arranging an overnight stay. Those searching for the Best Picnic Spot Near Bavdhan can plan a family day out, weekend picnic, birthday gathering, friends' get-together, school excursion, or corporate outing in a peaceful outdoor environment. The Family Picnic Spot Near Bavdhan provides an appealing setting for parents with children, extended families, and groups looking to spend meaningful time together away from crowded urban spaces. Visitors looking for a Picnic Resort Near Bavdhan or One Day Picnic Resort Near Bavdhan can consider an agro-tourism destination for relaxed recreation, outdoor experiences, and countryside leisure. The location can be convenient for visitors from Bavdhan, Kothrud, Pashan, Baner, Aundh, Sus, Paud Road, Warje, Karve Nagar, Wakad, Balewadi, and surrounding Pune areas. It can also be considered by visitors travelling from Hinjawadi, Pimple Saudagar, and nearby PCMC locations. An outing at Om Agro Tourism gives guests an opportunity to step away from everyday schedules and enjoy a nature-oriented atmosphere with family, friends, colleagues, or school groups. The destination can suit one-day picnic plans, family gatherings, corporate events, school outings, casual celebrations, and weekend recreation. Visitors can plan their day according to their group requirements while enjoying a refreshing change from the regular city environment. With its agro-tourism-focused setting, Om Agro Tourism provides a pleasant option for anyone searching for a picnic destination near Bavdhan Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-bavdhan"
  }
};






    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Bavdhan | Best One Day Picnic & Family Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Explore a Picnic Spot Near Bavdhan for families, friends, school groups and corporate outings with a refreshing one-day agro-tourism experience near Pune."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Bavdhan, One Day Picnic Spot Near Bavdhan, Best Picnic Spot Near Bavdhan, Family Picnic Spot Near Bavdhan, Picnic Resort Near Bavdhan, One Day Picnic Resort Near Bavdhan, Best Resort Near Bavdhan, Best Resort Near Bavdhan for Picnic, One Day Picnic Near Bavdhan, Picnic Places Near Bavdhan, Best Picnic Places Near Bavdhan, Family Picnic Near Bavdhan, One Day Outing Near Bavdhan, Best One Day Outing Near Bavdhan, Picnic Resorts Near Bavdhan, Family Resort Near Bavdhan, One Day Trip Near Bavdhan, Family One Day Trip Near Bavdhan, Family Outing Near Bavdhan, Weekend Picnic Near Bavdhan, School Picnic Spot Near Bavdhan, School Picnic Near Bavdhan, Corporate Outing Near Bavdhan, Agro Tourism Near Bavdhan, Agro Tourism Near Pune, Picnic Spot Near Kothrud, One Day Picnic Near Pashan, Picnic Places Near Baner, Family Picnic Near Aundh, One Day Picnic Near Sus Pune, Picnic Resort Near Paud Road, Family Picnic Near Warje, One Day Picnic Near Karve Nagar, Picnic Spot Near Wakad, Family Picnic Near Balewadi, One Day Picnic Near Hinjawadi, Picnic Spot Near Pune, Family Picnic Near Pune"
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
                            <img src='/images/keyword/118.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotsnearbavdhan;