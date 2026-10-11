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

function Picnicspotnearkiwale() {

const cardData = {
    keyword: "Picnic Spot Near Kiwale",
    headingDescription: "Om Agro Tourism is a peaceful countryside destination for visitors searching for a picnic spot near Kiwale. Its rural environment combines nature, traditional farm experiences, recreational activities, outdoor games, water-based entertainment, and homemade food, making it suitable for families, friends, and groups planning a one day picnic or short getaway. Visitors from Kiwale, Ravet, Dehu Road, and nearby Pune areas can enjoy a refreshing day away from the city's busy routine with a variety of experiences available in one destination.",
    topPlaces: [
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food is a strong choice for families searching for a comfortable one day picnic near Kiwale, as it adds a satisfying dining experience to the outing. Freshly prepared meals can make the day more convenient for families and groups who want to enjoy their picnic without arranging separate food stops."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops suit visitors looking for a nature-oriented picnic near Kiwale with an interactive rural experience. Guests can explore the agricultural surroundings and enjoy an activity that combines learning, exploration, and countryside recreation."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching provides a quieter experience for guests interested in a nature picnic spot near Kiwale. It allows visitors to slow down, observe the natural surroundings, and enjoy peaceful outdoor time with family or friends away from the busy city environment."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride introduces visitors to a traditional village experience and gives a family picnic near Kiwale a distinctive rural character. Children and adults can enjoy this activity while experiencing a form of countryside transportation that is different from regular urban recreation."
        },
        {
            title: "Boating",
            description: "Boating provides a relaxed water-based experience for visitors planning a family one day trip near Kiwale. It offers an opportunity to spend peaceful time together and adds a different type of recreation to a day that also includes farm and outdoor activities."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games make the destination suitable for groups searching for a picnic spot with activities near Kiwale. Families and friends can participate in recreational games throughout the day, giving both children and adults opportunities for shared entertainment."
        },
        {
            title: "Jungle Safari",
            description: "Jungle Safari adds an adventurous nature experience for visitors who want more exploration during their picnic. It can appeal to families and groups searching for an active outing where the countryside environment becomes part of the day's entertainment."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities bring refreshing entertainment to a one day resort outing near Kiwale. Families can enjoy water-based recreation as part of a broader picnic plan that also includes nature, games, traditional rural activities, and food."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride offers a fun connection with the agricultural side of the destination and can be particularly enjoyable for children and families. It gives visitors a chance to experience rural surroundings through an activity that feels different from conventional city outings."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding adds an active outdoor experience for guests who want variety during their picnic day. Families and groups can enjoy the activity while exploring the open countryside surroundings and making their one day outing more engaging."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Kiwale",
            description: "Om Agro Tourism provides a refreshing countryside setting for visitors searching for a picnic spot near Kiwale, with farm experiences, nature activities, traditional rural attractions, games, water recreation, and homemade food."
        },
        {
            name: "One Day Picnic Spot Near Kiwale",
            description: "A one day picnic spot near Kiwale becomes more useful when families can enjoy several activities at one destination. Farm tours, rides, games, nature experiences, water activities, and meals help create a complete day outing."
        },
        {
            name: "Best Picnic Spot Near Kiwale",
            description: "Visitors comparing the best picnic spot near Kiwale can look for a destination that combines relaxation with meaningful activities. Om Agro Tourism offers rural surroundings, traditional experiences, outdoor recreation, water options, and food for a varied picnic."
        },
        {
            name: "Family Picnic Spot Near Kiwale",
            description: "A family picnic spot near Kiwale should offer entertainment for both children and adults. Visitors can enjoy games, farm experiences, traditional rides, nature activities, water recreation, and food while spending quality time together."
        },
        {
            name: "Picnic Resort Near Kiwale",
            description: "Om Agro Tourism is suitable for guests looking for a picnic resort near Kiwale where they can combine relaxation with countryside recreation. The range of attractions allows families and groups to enjoy different experiences during their visit."
        },
        {
            name: "One Day Picnic Resort Near Kiwale",
            description: "A one day picnic resort near Kiwale provides a convenient alternative to a longer holiday for visitors who simply want a refreshing day away from the city. Multiple activities and dining options help make the outing complete."
        },
        {
            name: "Best Resort Near Kiwale for Picnic",
            description: "Those searching for the best resort near Kiwale for picnic plans can consider a destination with a mix of nature, rural experiences, recreation, games, water activities, and food rather than a location focused on only one attraction."
        },
        {
            name: "Family Resort Near Kiwale",
            description: "A family resort near Kiwale can make a day outing more enjoyable by providing activities suited to different age groups. Farm experiences, games, rides, water recreation, nature exploration, and meals give families plenty of options."
        },
        {
            name: "One Day Trip Near Kiwale",
            description: "Planning a one day trip near Kiwale is convenient when visitors can experience several attractions without travelling between multiple locations. A countryside environment with activities and food allows families and friends to enjoy a relaxed short getaway."
        },
        {
            name: "Family One Day Trip Near Kiwale",
            description: "A family one day trip near Kiwale can include a balanced combination of active and relaxing experiences. Farm tours, traditional rides, games, boating, nature activities, and water recreation can keep different members of the family engaged."
        },
        {
            name: "Picnic Places Near Kiwale",
            description: "Visitors exploring picnic places near Kiwale can consider Om Agro Tourism for its combination of rural surroundings, recreation, traditional activities, nature experiences, and food, making it suitable for family and group outings."
        },
        {
            name: "Best Picnic Places Near Kiwale",
            description: "The best picnic places near Kiwale can offer more than an open area for relaxation. Om Agro Tourism provides a complete countryside experience through farm activities, games, rides, nature exploration, water recreation, and homemade food."
        },
        {
            name: "Affordable Picnic Spot Near Kiwale",
            description: "An affordable picnic spot near Kiwale can be a practical choice for families and groups who want several experiences within one day. Having recreation, activities, and food available together can make a short outing easier to organize."
        },
        {
            name: "Budget Picnic Resort Near Kiwale",
            description: "A budget picnic resort near Kiwale can provide a convenient countryside escape for visitors looking for recreation without planning an expensive long-distance trip. Families and groups can build their day around the activities and experiences available at the destination."
        },
        {
            name: "Picnic Spot Near Kiwale Pune",
            description: "For visitors searching for a picnic spot near Kiwale Pune, Om Agro Tourism offers a rural atmosphere with nature activities, traditional rides, games, farm experiences, water recreation, and homemade food suitable for a day outing."
        },
        {
            name: "Resort Near Kiwale for Family Outing",
            description: "A resort near Kiwale for family outing plans should provide different experiences for children and adults. The combination of games, farm activities, rides, nature exploration, water recreation, and food helps families enjoy a complete shared day."
        },
        {
            name: "One Day Resort Near Kiwale",
            description: "A one day resort near Kiwale is a suitable option for visitors who want a short countryside escape without staying overnight. Guests can spend their day enjoying activities, rural surroundings, meals, and relaxation in one location."
        },
        {
            name: "Nature Picnic Spot Near Kiwale",
            description: "A nature picnic spot near Kiwale provides an opportunity to step away from the urban environment and spend time around rural surroundings. Bird Watching, Farm Tours and Workshops, and Jungle Safari add nature-focused experiences to the outing."
        },
        {
            name: "Picnic Spot Near Ravet Kiwale",
            description: "Visitors looking for a picnic spot near Ravet Kiwale can choose a countryside destination where multiple activities are available together. Families and groups can enjoy rural experiences, games, nature activities, water recreation, and food during their day."
        },
        {
            name: "Picnic Spot Near Dehu Road Kiwale",
            description: "A picnic spot near Dehu Road Kiwale can be a convenient choice for families and groups wanting a refreshing break from the nearby urban areas. The combination of outdoor activities, traditional experiences, and food gives visitors several ways to enjoy their day."
        },
        {
            name: "Family Picnic Resort Near Kiwale",
            description: "A family picnic resort near Kiwale can offer a balanced experience through farm activities, games, traditional rides, nature exploration, boating, water recreation, and food, allowing family members with different interests to enjoy the same outing."
        },
        {
            name: "Picnic Spot with Activities Near Kiwale",
            description: "A picnic spot with activities near Kiwale gives visitors plenty of options beyond a simple picnic meal. Farm tours, rides, games, boating, water activities, nature experiences, and homemade food can all contribute to an engaging one day outing."
        }
    ],
    tableData: [
        ["Picnic Spot Near Kiwale"],
        ["One Day Picnic Spot Near Kiwale"],
        ["Best Picnic Spot Near Kiwale"],
        ["Family Picnic Spot Near Kiwale"],
        ["Picnic Resort Near Kiwale"],
        ["One Day Picnic Resort Near Kiwale"],
        ["Best Resort Near Kiwale for Picnic"],
        ["Family Resort Near Kiwale"],
        ["One Day Trip Near Kiwale"],
        ["Family One Day Trip Near Kiwale"],
        ["Picnic Places Near Kiwale"],
        ["Best Picnic Places Near Kiwale"],
        ["Affordable Picnic Spot Near Kiwale"],
        ["Budget Picnic Resort Near Kiwale"],
        ["Picnic Spot Near Kiwale Pune"],
        ["Resort Near Kiwale for Family Outing"],
        ["One Day Resort Near Kiwale"],
        ["Nature Picnic Spot Near Kiwale"],
        ["Picnic Spot Near Ravet Kiwale"],
        ["Picnic Spot Near Dehu Road Kiwale"],
        ["Family Picnic Resort Near Kiwale"],
        ["Picnic Spot with Activities Near Kiwale"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Authentic Countryside Experience",
            WhyChoosedescription: "Om Agro Tourism gives visitors an opportunity to move away from the routine of city life and enjoy a rural setting where farm activities, traditional rides, nature experiences, and open surroundings become part of the day."
        },
        {
            WhyChooseheading: "Great for Family Time",
            WhyChoosedescription: "Families can find several activities suitable for children and adults, allowing everyone to participate in games, rides, nature exploration, water recreation, or simply relax together during the picnic."
        },
        {
            WhyChooseheading: "Interactive Farm Activities",
            WhyChoosedescription: "Farm Tours and Workshops and Tractor Ride provide visitors with a closer look at rural and agricultural experiences, making the outing more interesting for families who want an activity with an educational and cultural element."
        },
        {
            WhyChooseheading: "Traditional Rural Attractions",
            WhyChoosedescription: "Bull Cart Ride adds a traditional village experience to the picnic, giving visitors an opportunity to enjoy an activity that feels distinctly different from standard city entertainment and modern resort recreation."
        },
        {
            WhyChooseheading: "Nature and Adventure Options",
            WhyChoosedescription: "Bird Watching and Jungle Safari offer nature-focused experiences, while Horse Riding adds an adventurous outdoor activity, giving guests multiple ways to explore the countryside during their day."
        },
        {
            WhyChooseheading: "Entertainment for Groups",
            WhyChoosedescription: "Indoor and Outdoor Games make the destination suitable for friends, families, and larger groups who want shared entertainment. Different recreational options can keep the outing active throughout the day."
        },
        {
            WhyChooseheading: "Relaxing Water Experiences",
            WhyChoosedescription: "Boating and Water Park Activities introduce refreshing water-based recreation into the picnic plan, providing a pleasant contrast to farm tours, traditional rides, and other outdoor experiences."
        },
        {
            WhyChooseheading: "Comfortable Day-Trip Planning",
            WhyChoosedescription: "Visitors from Kiwale, Ravet, Dehu Road, and surrounding Pune areas can plan a convenient one day countryside escape with activities and food available at the same destination, avoiding the need for a lengthy holiday."
        }
    ]
};


const faqData = [
    {
        question: "Where can people from Kiwale enjoy a countryside picnic experience?",
        answer: "Om Agri Tourism provides a farm-based setting where visitors can combine outdoor recreation with a relaxed rural atmosphere. A picnic plan may include swimming, boating, horse riding, tractor rides and bull cart rides, along with bird watching and homemade food."
    },
    {
        question: "What activities can be included in a picnic near Kiwale Pune?",
        answer: "There are several options for creating an engaging day outdoors, from swimming and boating to horse riding and traditional farm rides. Tractor rides, bull cart rides and bird watching can add variety for visitors who want something different from a conventional picnic."
    },
    {
        question: "Would Om Agri Tourism work for a family outing from Kiwale?",
        answer: "Families with different age groups can plan their visit according to individual interests and comfort. Children may prefer active recreation and rides, whereas adults can spend time boating, enjoying homemade food, observing birds or relaxing in the green surroundings."
    },
    {
        question: "How can friends from Kiwale spend their day at this picnic destination?",
        answer: "Friends can make the outing more engaging by combining activities instead of following a single schedule. Swimming, boating and horse riding can be followed by tractor or bull cart rides, with time for food, photography and conversations between experiences."
    },
    {
        question: "What rural experiences are available at Om Agri Tourism near Kiwale?",
        answer: "The farm environment introduces visitors to traditional countryside activities such as bull cart rides, tractor rides and horse riding. Along with these experiences, bird watching and time among the greenery provide a closer connection with the natural and agricultural surroundings."
    },
    {
        question: "Can children have an enjoyable picnic near Kiwale at Om Agri Tourism?",
        answer: "Children can discover a variety of outdoor experiences during the visit, depending on their age and suitability. Swimming, boating, rides and bird watching can keep them interested throughout the day, while adults can supervise them during activities and enjoy the farm atmosphere."
    },
    {
        question: "Is Om Agri Tourism suitable for a relaxed picnic as well as outdoor fun?",
        answer: "Visitors do not have to spend the entire day participating in activities. After enjoying recreation, guests can slow down with homemade food, bird watching, photography or quiet time around the greenery, making it possible to balance excitement with relaxation."
    },
    {
        question: "What would be a comfortable one-day picnic plan from Kiwale?",
        answer: "A flexible itinerary could start with swimming or boating and continue with horse riding or a countryside ride. After a meal break, visitors can leave the afternoon for bird watching, photography and conversations, allowing enough time to enjoy the destination without rushing."
    },
    {
        question: "Can groups enjoy traditional bull cart and tractor rides during their picnic?",
        answer: "These countryside rides can bring a distinctive rural element to a group outing. Visitors can include bull cart rides and tractor rides alongside horse riding, swimming or boating, creating a varied experience for friends, families and other groups."
    },
    {
        question: "Why choose Om Agri Tourism when searching for a picnic spot near Kiwale?",
        answer: "The destination combines recreational activities, countryside experiences, nature and food in one farm-oriented setting. Guests from Kiwale can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching while getting a break from the regular urban routine."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Nikhil Chavan",
        feedback:
            "Our group wanted a day that was more interesting than simply visiting a restaurant or sitting at a regular picnic location. The horse riding and countryside rides were a pleasant surprise, while swimming and boating kept the outing active. The relaxed farm setting gave us plenty of time to enjoy ourselves without feeling hurried.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss Snehal Pawar",
        feedback:
            "A quiet farm environment was a nice change for our family, especially with children who enjoyed having different activities to explore. The rides were exciting for them, while the adults preferred the homemade food, greenery and bird watching. Everyone had something enjoyable to do during the visit.",
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
  "name": "Picnic Spot Near Kiwale",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-kiwale.webp",
  "description": "Picnic Spot Near Kiwale is a convenient option for families, friends, students, school groups, corporate teams, and visitors searching for a refreshing one-day escape from the regular urban routine. Om Agro Tourism offers a countryside-oriented agro-tourism environment where guests can spend quality time together and enjoy a peaceful change of surroundings away from the busy city atmosphere. A One Day Picnic Spot Near Kiwale can be considered by people who want to enjoy a complete day outing without arranging an overnight stay. Those searching for the Best Picnic Spot Near Kiwale can consider an outdoor destination for family gatherings, weekend recreation, friends' get-togethers, school picnics, college outings, corporate day trips, and special celebrations. The Family Picnic Spot Near Kiwale is suitable for parents, children, relatives, and groups looking for a relaxed environment where they can spend meaningful time together. Visitors searching for a Picnic Resort Near Kiwale can consider an agro-tourism destination for a dedicated day-outing experience surrounded by a countryside-inspired atmosphere. A One Day Picnic Resort Near Kiwale can be useful for groups that prefer spending their entire outing at one destination rather than travelling between multiple city attractions. Those looking for the Best Resort Near Kiwale for Picnic can consider a peaceful outdoor setting for family recreation, friends' gatherings, student outings, and group activities. The destination can be considered by visitors travelling from Kiwale, Ravet, Mamurdi, Dehu Road, Nigdi, Akurdi, Punawale, Tathawade, Wakad, Chinchwad, Pimpri, Pimple Saudagar, Thergaon, Hinjawadi, Mahalunge, Talegaon Dabhade, and other nearby Pune areas. Families can plan a relaxed day together, while friends can enjoy a casual picnic away from their regular schedules. Schools and colleges may also consider the destination for recreational student outings and group picnics, while corporate teams can arrange informal employee gatherings and team outings in a different environment. Om Agro Tourism provides a rural-inspired atmosphere that offers a refreshing alternative to malls, restaurants, and crowded city entertainment. A One Day Picnic Near Kiwale can be a practical choice for people who want to enjoy an outdoor break and return home on the same day. Visitors searching for Family Resort Near Kiwale, Family One Day Trip Near Kiwale, Picnic Places Near Kiwale, Best Picnic Places Near Kiwale, One Day Outing Near Kiwale, or Weekend Picnic Near Kiwale can consider an agro-tourism experience for a peaceful escape near Pune. The open surroundings create an opportunity to step away from the fast pace of city life and spend uninterrupted time with family, friends, classmates, or colleagues. Whether the plan is a family picnic, school outing, college trip, corporate gathering, friends' day out, or weekend recreation, Om Agro Tourism offers a suitable countryside-oriented concept for an enjoyable one-day experience near Kiwale and Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-kiwale"
  }
};






    return (
        <div>



<Helmet>
  <title>
    Picnic Spot Near Kiwale | Best One Day Picnic & Family Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a Picnic Spot Near Kiwale for families, friends, students and corporate groups looking for a peaceful one-day picnic, family outing and agro-tourism experience."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Kiwale, One Day Picnic Spot Near Kiwale, Best Picnic Spot Near Kiwale, Family Picnic Spot Near Kiwale, Picnic Resort Near Kiwale, One Day Picnic Resort Near Kiwale, Best Resort Near Kiwale for Picnic, Family Resort Near Kiwale, One Day Trip Near Kiwale, Family One Day Trip Near Kiwale, One Day Picnic Near Kiwale, Picnic Places Near Kiwale, Best Picnic Places Near Kiwale, Family Picnic Near Kiwale, One Day Outing Near Kiwale, Best One Day Outing Near Kiwale, Picnic Destination Near Kiwale, Weekend Picnic Near Kiwale, Weekend Outing Near Kiwale, Family Outing Near Kiwale, School Picnic Spot Near Kiwale, School Picnic Places Near Kiwale, College Picnic Near Kiwale, Student Picnic Spot Near Kiwale, Corporate Picnic Near Kiwale, Corporate Outing Near Kiwale, Agro Tourism Near Kiwale, Agro Tourism Near Pune, Budget Picnic Spot Near Kiwale, Picnic Resort Near Ravet, One Day Picnic Near Mamurdi, Family Picnic Near Dehu Road, Picnic Places Near Nigdi, One Day Picnic Near Akurdi, Family Picnic Near Punawale, Picnic Spot Near Tathawade, One Day Picnic Near Wakad, Family Picnic Near Chinchwad, Picnic Resort Near Pimpri, One Day Picnic Near Pimple Saudagar, Family Picnic Near Hinjawadi, Picnic Spot Near Mahalunge, One Day Picnic Near Talegaon Dabhade, Family Picnic Near Pune"
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
                            <img src='/images/keyword/138.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearkiwale;