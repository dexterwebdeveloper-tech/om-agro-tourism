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

function Picnicspotnearmahalunga() {

const cardData = {
    keyword: "Picnic Spot Near Mahalunge Pune",
    headingDescription: "Looking for a peaceful and enjoyable picnic spot near Mahalunge Pune? Om Agro Tourism offers a refreshing countryside experience where families, friends, and groups can spend quality time away from the busy city environment. With outdoor activities, traditional rural experiences, natural surroundings, recreational options, and freshly prepared homemade food, it is suitable for one day picnics, family outings, short trips, and affordable weekend plans. The destination also provides a convenient option for visitors from Baner, Hinjewadi, and nearby Pune areas who want a relaxing picnic experience with multiple activities in one place.",
    topPlaces: [
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops introduce visitors to rural surroundings and agricultural activities while creating an interactive experience for families and groups. The activity is especially suitable for people looking for a nature-focused picnic near Mahalunge with something educational and engaging to explore."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride brings a traditional village experience into the picnic day and gives visitors an opportunity to enjoy a slower, authentic countryside activity. It can be a memorable choice for families and children looking for something different from ordinary city outings."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride adds a fun rural adventure to a one day picnic near Mahalunge Pune. Guests can experience the farm environment in an enjoyable way, making this activity suitable for families, children, and groups seeking an activity-filled countryside outing."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food makes the picnic experience more satisfying by giving visitors the opportunity to enjoy freshly prepared meals in a relaxed rural setting. It is a convenient option for families planning a complete one day outing without having to arrange every part of the trip separately."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching offers a calm way to appreciate the natural surroundings while taking a break from the fast-paced city environment. Nature lovers and families searching for a peaceful picnic place near Mahalunge can enjoy observing birds and spending quiet outdoor time."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide recreational choices for children, adults, and larger family groups during the picnic. Having multiple game options makes the destination practical for visitors who want their one day resort outing to include both relaxation and entertainment."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding brings an exciting outdoor element to the picnic experience and can make a family outing more memorable. Visitors interested in activities and countryside recreation can include this experience while spending their day in a spacious rural environment."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities offer a refreshing recreational option for guests who want some water-based fun during their picnic. This makes the destination useful for families and groups looking for a picnic resort near Mahalunge with activities beyond traditional sightseeing."
        },
        {
            title: "Swimming Pool",
            description: "Swimming Pool access gives visitors an opportunity to relax and cool down during their day out. Families searching for a resort near Mahalunge for a comfortable outing can combine leisure time with other outdoor experiences available at the destination."
        },
        {
            title: "Jungle Safari",
            description: "Jungle Safari adds an adventurous touch to a one day trip near Mahalunge and provides an opportunity to explore a more natural setting. It is a suitable activity for groups and families who want their picnic experience to include outdoor exploration along with relaxation."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Mahalunge Pune",
            description: "Om Agro Tourism provides a refreshing countryside setting for visitors searching for a picnic spot near Mahalunge Pune, with recreational activities, natural surroundings, traditional experiences, and food options suitable for a relaxed day outing."
        },
        {
            name: "One Day Picnic Spot Near Mahalunge",
            description: "A one day picnic spot near Mahalunge should offer enough activities and relaxation opportunities for a complete day, and Om Agro Tourism combines outdoor recreation, rural experiences, games, water activities, and food for families and groups."
        },
        {
            name: "Best Picnic Spot Near Mahalunge Pune",
            description: "Visitors comparing the best picnic spot near Mahalunge Pune can choose a destination that brings together nature, entertainment, traditional farm experiences, and family-friendly activities in one convenient countryside location."
        },
        {
            name: "Family Picnic Spot Near Mahalunge",
            description: "A family picnic spot near Mahalunge can be more enjoyable when children and adults have different activities to explore, including games, farm experiences, rides, water recreation, and comfortable spaces for spending quality time together."
        },
        {
            name: "Picnic Resort Near Mahalunge",
            description: "Om Agro Tourism works well as a picnic resort near Mahalunge for guests who want a combination of countryside surroundings, recreational activities, homemade food, and an easygoing environment for a day away from the city."
        },
        {
            name: "One Day Picnic Resort Near Mahalunge",
            description: "A one day picnic resort near Mahalunge offers a convenient way to plan a complete outing without requiring an overnight stay, with multiple activities and dining options available as part of the countryside experience."
        },
        {
            name: "Best Resort Near Mahalunge for Picnic",
            description: "Those searching for the best resort near Mahalunge for picnic plans can consider a destination that supports family recreation, outdoor activities, rural experiences, and relaxing meals in a natural environment."
        },
        {
            name: "Family Resort Near Mahalunge",
            description: "A family resort near Mahalunge should provide activities suitable for different age groups, and Om Agro Tourism offers a combination of games, rides, farm experiences, water recreation, and food for a balanced family outing."
        },
        {
            name: "One Day Trip Near Mahalunge",
            description: "Planning a one day trip near Mahalunge becomes easier with a destination where visitors can spend several hours enjoying nature, recreational activities, traditional experiences, games, and freshly prepared food without needing a long-distance journey."
        },
        {
            name: "Family One Day Trip Near Mahalunge",
            description: "A family one day trip near Mahalunge can include interactive farm experiences, outdoor recreation, water activities, games, and food, giving parents and children multiple ways to enjoy their time together."
        },
        {
            name: "Picnic Places Near Mahalunge",
            description: "Visitors exploring picnic places near Mahalunge can choose Om Agro Tourism for its countryside atmosphere, varied activities, natural surroundings, traditional rural experiences, and food options designed for enjoyable group outings."
        },
        {
            name: "Best Picnic Places Near Mahalunge",
            description: "The best picnic places near Mahalunge should provide more than just an open space, and Om Agro Tourism combines nature, recreation, rural activities, games, water-based entertainment, and dining for a more complete picnic experience."
        },
        {
            name: "Affordable Picnic Spot Near Mahalunge",
            description: "An affordable picnic spot near Mahalunge can be a practical choice for families and groups looking to enjoy several activities during a single day while keeping the outing convenient and value-focused."
        },
        {
            name: "Budget Picnic Resort Near Mahalunge",
            description: "A budget picnic resort near Mahalunge can provide families and groups with access to multiple recreational experiences without the need for an expensive long-distance holiday, making a countryside day trip more accessible."
        },
        {
            name: "Picnic Spot Near Mahalunge Pune",
            description: "For another picnic spot near Mahalunge Pune, Om Agro Tourism offers a peaceful rural environment with activities and food options that can suit families, friends, students, and small groups planning a relaxing day outing."
        },
        {
            name: "Resort Near Mahalunge for Family Outing",
            description: "A resort near Mahalunge for family outing plans should accommodate different interests, from children’s games and rides to nature experiences, water activities, traditional farm experiences, and enjoyable meals."
        },
        {
            name: "One Day Resort Near Mahalunge",
            description: "A one day resort near Mahalunge is suitable for visitors who want a short break without booking an overnight stay, offering opportunities to enjoy outdoor recreation, rural activities, food, and relaxation within one day."
        },
        {
            name: "Nature Picnic Spot Near Mahalunge",
            description: "A nature picnic spot near Mahalunge provides a welcome change from urban surroundings, allowing visitors to enjoy open rural landscapes, bird watching, farm experiences, and outdoor activities while spending quality time with family or friends."
        },
        {
            name: "Picnic Spot Near Baner Mahalunge",
            description: "Visitors looking for a picnic spot near Baner Mahalunge can choose a countryside destination where recreational activities, farm experiences, water options, games, and homemade food come together for a convenient day outing."
        },
        {
            name: "Picnic Spot Near Hinjewadi Mahalunge",
            description: "A picnic spot near Hinjewadi Mahalunge can be a practical escape for families and working groups looking for a short countryside break, with several activities available for relaxation, entertainment, and group bonding."
        },
        {
            name: "Family Picnic Resort Near Mahalunge",
            description: "A family picnic resort near Mahalunge can make a day outing more engaging by combining traditional rural activities, outdoor games, water recreation, nature experiences, and food suitable for different members of the family."
        },
        {
            name: "Picnic Spot with Activities Near Mahalunge",
            description: "A picnic spot with activities near Mahalunge gives visitors more ways to spend their day instead of simply sitting outdoors, with options such as rides, games, farm experiences, water recreation, nature exploration, and food."
        }
    ],
    tableData: [
        ["Picnic Spot Near Mahalunge Pune"],
        ["One Day Picnic Spot Near Mahalunge"],
        ["Best Picnic Spot Near Mahalunge Pune"],
        ["Family Picnic Spot Near Mahalunge"],
        ["Picnic Resort Near Mahalunge"],
        ["One Day Picnic Resort Near Mahalunge"],
        ["Best Resort Near Mahalunge for Picnic"],
        ["Family Resort Near Mahalunge"],
        ["One Day Trip Near Mahalunge"],
        ["Family One Day Trip Near Mahalunge"],
        ["Picnic Places Near Mahalunge"],
        ["Best Picnic Places Near Mahalunge"],
        ["Affordable Picnic Spot Near Mahalunge"],
        ["Budget Picnic Resort Near Mahalunge"],
        ["Picnic Spot Near Mahalunge Pune"],
        ["Resort Near Mahalunge for Family Outing"],
        ["One Day Resort Near Mahalunge"],
        ["Nature Picnic Spot Near Mahalunge"],
        ["Picnic Spot Near Baner Mahalunge"],
        ["Picnic Spot Near Hinjewadi Mahalunge"],
        ["Family Picnic Resort Near Mahalunge"],
        ["Picnic Spot with Activities Near Mahalunge"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Setting",
            WhyChoosedescription: "The rural environment at Om Agro Tourism offers a refreshing break from the busy surroundings of Pune, giving families and groups an opportunity to enjoy open spaces, natural surroundings, and a relaxed atmosphere during their picnic."
        },
        {
            WhyChooseheading: "Activities for Different Age Groups",
            WhyChoosedescription: "Children, adults, and senior family members can find suitable ways to enjoy the outing through games, farm experiences, traditional rides, water activities, nature exploration, and other recreational options."
        },
        {
            WhyChooseheading: "Ideal for One Day Plans",
            WhyChoosedescription: "Visitors do not need to plan an overnight holiday to enjoy the destination. The combination of activities, food, and countryside recreation makes it convenient for a complete one day picnic or short family trip."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Bull Cart Ride, Tractor Ride, and farm-related activities give guests a chance to experience elements of rural life that are quite different from a typical city outing, adding a distinctive character to the picnic."
        },
        {
            WhyChooseheading: "Nature and Outdoor Recreation",
            WhyChoosedescription: "Bird Watching, Jungle Safari, Horse Riding, and other outdoor experiences allow visitors to spend meaningful time in a natural environment while adding variety to a family outing or group picnic."
        },
        {
            WhyChooseheading: "Refreshing Water Activities",
            WhyChoosedescription: "Swimming Pool and Water Park Activities provide refreshing entertainment for visitors who want to include water-based recreation in their picnic plan, especially during warmer days."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty Homemade Food complements the day outing by providing a satisfying dining experience in a relaxed rural setting, making the picnic feel more complete for families and groups."
        },
        {
            WhyChooseheading: "Convenient for Nearby Pune Areas",
            WhyChoosedescription: "The destination can be considered by visitors from Mahalunge and nearby areas such as Baner and Hinjewadi who want a countryside picnic experience without planning a distant holiday or lengthy trip."
        }
    ]
};


const faqData = [
    {
        question: "What can visitors from Mahalunge enjoy at Om Agri Tourism during a picnic?",
        answer: "A visit from Mahalunge can be planned as a refreshing countryside escape with a mix of recreation and rural experiences. Guests can enjoy swimming, boating, horse riding, tractor rides and bull cart rides, while bird watching, homemade food and time among the greenery provide a relaxed side to the outing."
    },
    {
        question: "Which activities make Om Agri Tourism a good picnic spot near Mahalunge Pune?",
        answer: "Visitors have several ways to make the day enjoyable, including water-based recreation, countryside rides and nature-oriented activities. Swimming and boating can be combined with horse riding, tractor rides, bull cart rides and bird watching so families and groups can create an itinerary suited to their interests."
    },
    {
        question: "Can families from Mahalunge spend a full day at this picnic destination?",
        answer: "Families can comfortably divide the day between active experiences and quieter moments. Children may enjoy suitable outdoor activities and rides, while adults can take time for boating, nature observation, homemade food and relaxing around the farm surroundings."
    },
    {
        question: "Is Om Agri Tourism suitable for friends looking for a picnic near Mahalunge?",
        answer: "Friends can turn the visit into a social day out by participating in activities together and leaving time for casual conversations. Swimming, boating and horse riding can be followed by traditional farm rides, photography, food and relaxation in the open countryside."
    },
    {
        question: "What type of rural experiences are available at Om Agri Tourism?",
        answer: "The farm environment allows visitors to experience elements of countryside life through tractor rides, bull cart rides, horse riding and time around the agricultural surroundings. Bird watching and homemade food can further add a traditional and nature-focused dimension to the picnic."
    },
    {
        question: "How can children enjoy a picnic near Mahalunge Pune?",
        answer: "Young visitors can explore a different environment through suitable outdoor activities, farm rides and nature experiences. Swimming, boating, horse riding, tractor rides and bull cart rides can keep children engaged, while bird watching offers an opportunity to observe the countryside. Adult supervision should be maintained during activities."
    },
    {
        question: "Can senior citizens also enjoy a family picnic at Om Agri Tourism?",
        answer: "Senior members can choose a slower-paced itinerary without needing to participate in every active experience. Bird watching, enjoying the greenery, having homemade food and spending time in the peaceful farm surroundings can provide comfortable alternatives while younger members enjoy boating or rides."
    },
    {
        question: "What is a good itinerary for a one day picnic from Mahalunge?",
        answer: "A balanced schedule could begin with swimming or boating, followed by one or two countryside rides and a relaxed meal break. The remaining hours can be kept for bird watching, photography, conversations and enjoying the farm atmosphere rather than filling every part of the day with activities."
    },
    {
        question: "Does Om Agri Tourism offer a nature-focused experience along with picnic activities?",
        answer: "Nature is an important part of the countryside setting, giving visitors opportunities to appreciate greenery and observe birds between recreational activities. Combining these quieter experiences with swimming, boating and traditional rides creates a varied day for families and groups."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Mahalunge Pune?",
        answer: "Om Agri Tourism brings outdoor recreation, rural activities, nature and food together in a countryside environment. Visitors from Mahalunge can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching while spending quality time with family or friends away from the busy city routine."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Kunal Shirole",
        feedback:
            "The variety of experiences made our visit to Om Agri Tourism much more enjoyable than a regular picnic. Boating and swimming kept the group active, while the horse riding and traditional bull cart ride gave us something different to try. A homemade meal followed by time around the greenery made the day feel relaxed and complete.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Megha Kulkarni",
        feedback:
            "For our family, the peaceful farm environment was just as enjoyable as the activities. The children were excited about the rides, while the elders preferred bird watching and sitting around the green surroundings. Everyone found something to enjoy, and the countryside atmosphere gave us a welcome break from our regular Pune routine.",
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
  "name": "Picnic Spot Near Mahalunge Pune",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-mahalunge-pune.webp",
  "description": "Picnic Spot Near Mahalunge Pune is a convenient choice for families, friends, students, school groups, corporate teams, and visitors looking for a refreshing one-day escape from the busy city routine. Om Agro Tourism offers a countryside-oriented agro-tourism environment where guests can spend quality time together and enjoy a peaceful change of surroundings. A One Day Picnic Spot Near Mahalunge can be considered by groups planning a full-day outing without the need for an overnight stay. Those searching for the Best Picnic Spot Near Mahalunge Pune can consider an outdoor destination for family gatherings, weekend recreation, friends' get-togethers, school picnics, college outings, corporate day trips, and special celebrations. The Family Picnic Spot Near Mahalunge is suitable for parents, children, relatives, and groups who want to spend meaningful time together away from their regular urban schedule. Visitors searching for a Picnic Resort Near Mahalunge can also consider an agro-tourism destination for a dedicated and relaxed day-outing experience. A One Day Picnic Resort Near Mahalunge can be useful for groups that prefer to spend the entire day at one destination rather than travelling between multiple city attractions. Those looking for the Best Resort Near Mahalunge can consider a countryside-inspired setting for family outings, friends' gatherings, school trips, and corporate picnics. The destination can be considered by visitors travelling from Mahalunge, Hinjawadi, Wakad, Baner, Balewadi, Pashan, Bavdhan, Aundh, Sus, Tathawade, Punawale, Kothrud, Pimpri Chinchwad, and other nearby Pune areas. Families can plan a relaxed day together, while friends can enjoy a casual outdoor gathering away from their usual routine. Schools and colleges may also consider the destination for recreational student outings, group picnics, and day trips. Corporate teams can plan informal employee gatherings and team outings in a different environment from the usual workplace. Om Agro Tourism provides a rural-inspired atmosphere that can offer a refreshing alternative to malls, restaurants, and crowded city entertainment options. A One Day Picnic Near Mahalunge can be particularly suitable for visitors who want a short escape while still returning home on the same day. People searching for Family Resort Near Mahalunge, One Day Trip Near Mahalunge, Family One Day Trip Near Mahalunge, Picnic Places Near Mahalunge, or Best Picnic Places Near Mahalunge can consider an agro-tourism experience for a peaceful break near Pune. The open countryside atmosphere creates an opportunity to disconnect from the fast pace of city life and spend uninterrupted time with family, friends, classmates, or colleagues. Whether the requirement is a family picnic, student outing, corporate gathering, weekend recreation, or friends' day trip, Om Agro Tourism offers a suitable concept for an enjoyable one-day experience near Mahalunge and Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-mahalunge-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Mahalunge Pune | Best One Day Picnic & Family Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Find a Picnic Spot Near Mahalunge Pune for families, friends, students and corporate groups looking for a peaceful one-day picnic, resort outing and agro-tourism experience."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Mahalunge Pune, One Day Picnic Spot Near Mahalunge, Best Picnic Spot Near Mahalunge Pune, Family Picnic Spot Near Mahalunge, Picnic Resort Near Mahalunge, One Day Picnic Resort Near Mahalunge, Best Resort Near Mahalunge, Best Resort Near Mahalunge for Picnic, Family Resort Near Mahalunge, One Day Trip Near Mahalunge, Family One Day Trip Near Mahalunge, One Day Picnic Near Mahalunge, Picnic Places Near Mahalunge, Best Picnic Places Near Mahalunge, Family Picnic Near Mahalunge, One Day Outing Near Mahalunge, Best One Day Outing Near Mahalunge, Picnic Destination Near Mahalunge, Weekend Picnic Near Mahalunge, Weekend Outing Near Mahalunge, Family Outing Near Mahalunge, School Picnic Spot Near Mahalunge, School Picnic Places Near Mahalunge, College Picnic Near Mahalunge, Student Picnic Spot Near Mahalunge, Corporate Picnic Near Mahalunge, Corporate Outing Near Mahalunge, Agro Tourism Near Mahalunge, Agro Tourism Near Pune, Budget Picnic Spot Near Mahalunge, Picnic Resort Near Hinjawadi, One Day Picnic Near Wakad, Family Picnic Near Baner, Picnic Places Near Balewadi, One Day Picnic Near Pashan, Family Picnic Near Bavdhan, Picnic Spot Near Aundh, One Day Picnic Near Sus, Family Picnic Near Tathawade, Picnic Resort Near Punawale, One Day Picnic Near Kothrud, Picnic Spot Near Pimpri Chinchwad, One Day Picnic Near Pune"
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
                            <img src='/images/keyword/134.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearmahalunga;