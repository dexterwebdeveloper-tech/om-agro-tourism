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

function Picnicspotneartathawade() {

const cardData = {
    keyword: "Picnic Spot Near Tathawade",
    headingDescription: "Om Agro Tourism is a refreshing choice for visitors searching for a picnic spot near Tathawade, offering a peaceful rural setting away from the busy city environment. Families, friends, and groups can enjoy a variety of outdoor activities, traditional village experiences, nature-based recreation, water activities, games, and freshly prepared homemade food. Its combination of relaxation and entertainment makes it suitable for one day picnics, family outings, short trips, and affordable weekend plans from Tathawade, Wakad, Hinjewadi, and nearby Pune areas.",
    topPlaces: [
        {
            title: "Jungle Safari",
            description: "Jungle Safari brings an adventurous outdoor experience to the picnic day, giving visitors an opportunity to explore a natural setting and enjoy something different from regular city recreation. It can be an engaging option for families and groups looking for an activity-filled outing near Tathawade."
        },
        {
            title: "Boating",
            description: "Boating adds a relaxing water-based experience to a one day picnic and gives families or groups an opportunity to spend peaceful time together outdoors. It is a pleasant choice for visitors who want both recreation and a change of scenery during their countryside outing."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops offer an interactive introduction to the rural environment and agricultural activities. Families, children, and groups can enjoy a more meaningful countryside experience while exploring farm surroundings during their picnic."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride gives guests a traditional village experience and adds a distinctive rural element to the day. Families searching for a picnic resort near Tathawade can enjoy this activity as part of a relaxed outing with a touch of local countryside culture."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide entertainment for different age groups and make it easier for families and groups to stay engaged throughout the day. The variety of recreational options can make a one day picnic more enjoyable and active."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food gives visitors an opportunity to enjoy freshly prepared meals in a comfortable rural environment. It complements the picnic experience and can be especially convenient for families planning a complete day outing without arranging separate dining plans."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride offers an enjoyable farm-based activity that lets visitors experience the countryside in a different way. It can be a memorable addition for children, families, and groups who want their picnic near Tathawade to include traditional outdoor experiences."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching provides a quieter nature-oriented activity for guests who enjoy observing the surrounding environment. It is well suited to visitors searching for a nature picnic spot near Tathawade where relaxation and outdoor exploration can be combined."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding adds an exciting outdoor activity to the picnic experience and gives guests another way to enjoy the open rural surroundings. Families and groups can include this experience while creating a more varied and memorable day trip."
        },
        {
            title: "Swimming Pool",
            description: "Swimming Pool access offers a refreshing way to relax during the picnic, particularly for families looking for a resort-style outing. Visitors can combine pool time with other activities and enjoy a balanced day of recreation and leisure."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Tathawade",
            description: "Om Agro Tourism offers a peaceful countryside setting for visitors searching for a picnic spot near Tathawade, with a combination of outdoor recreation, traditional activities, nature experiences, games, and food options."
        },
        {
            name: "One Day Picnic Spot Near Tathawade",
            description: "A one day picnic spot near Tathawade becomes more enjoyable when visitors have multiple activities available in one location. Farm experiences, games, rides, water recreation, and homemade food help create a complete day outing."
        },
        {
            name: "Best Picnic Spot Near Tathawade",
            description: "Visitors comparing the best picnic spot near Tathawade can consider a destination that provides more than an open picnic area, combining rural surroundings with recreational activities, traditional experiences, nature exploration, and dining."
        },
        {
            name: "Family Picnic Spot Near Tathawade",
            description: "A family picnic spot near Tathawade should offer activities that appeal to both children and adults. The destination provides games, rides, farm experiences, nature activities, water recreation, and food for a varied family outing."
        },
        {
            name: "Picnic Resort Near Tathawade",
            description: "Om Agro Tourism is suitable for guests looking for a picnic resort near Tathawade where they can spend the day enjoying countryside surroundings, recreational activities, traditional experiences, and freshly prepared food."
        },
        {
            name: "One Day Picnic Resort Near Tathawade",
            description: "A one day picnic resort near Tathawade provides a convenient option for visitors who want a complete day experience without booking an overnight stay. Multiple activities and dining options allow families and groups to enjoy their time comfortably."
        },
        {
            name: "Best Resort Near Tathawade for Picnic",
            description: "Those looking for the best resort near Tathawade for picnic plans can choose a countryside destination that combines relaxation with activities, games, nature experiences, water recreation, traditional rides, and food."
        },
        {
            name: "Family Resort Near Tathawade",
            description: "A family resort near Tathawade can make a short outing more engaging by providing recreation for different age groups. Farm activities, games, rides, swimming, and nature-based experiences give families several ways to spend their day."
        },
        {
            name: "One Day Trip Near Tathawade",
            description: "Planning a one day trip near Tathawade is convenient when the destination offers several experiences in one place. Visitors can enjoy outdoor activities, rural surroundings, games, food, and relaxing moments without requiring a long-distance holiday."
        },
        {
            name: "Family One Day Trip Near Tathawade",
            description: "A family one day trip near Tathawade can include a mixture of recreation and relaxation, with activities such as farm experiences, rides, games, nature exploration, swimming, and homemade food suitable for a shared family outing."
        },
        {
            name: "Picnic Places Near Tathawade",
            description: "Visitors exploring picnic places near Tathawade can consider Om Agro Tourism for its rural atmosphere and broad selection of activities. The combination of nature, entertainment, traditional experiences, and food makes it suitable for family and group plans."
        },
        {
            name: "Best Picnic Places Near Tathawade",
            description: "The best picnic places near Tathawade can provide an experience that includes both leisure and entertainment. Om Agro Tourism brings together outdoor recreation, farm activities, games, water options, and dining in a countryside environment."
        },
        {
            name: "Affordable Picnic Spot Near Tathawade",
            description: "An affordable picnic spot near Tathawade can be a practical choice for families and groups who want several experiences during one outing without planning an expensive long-distance trip. A range of activities helps make the day worthwhile."
        },
        {
            name: "Budget Picnic Resort Near Tathawade",
            description: "A budget picnic resort near Tathawade can provide families and groups with access to recreational activities, food, and countryside surroundings within a convenient one day plan, making short breaks easier to organize."
        },
        {
            name: "Picnic Spot Near Tathawade Pune",
            description: "For visitors searching for a picnic spot near Tathawade Pune, Om Agro Tourism provides a countryside escape with recreational activities, nature experiences, traditional rural attractions, games, and homemade food suitable for a relaxed day."
        },
        {
            name: "Resort Near Tathawade for Family Outing",
            description: "A resort near Tathawade for family outing plans should have options for different interests and age groups. Visitors can combine games, farm experiences, rides, nature activities, swimming, and meals for a more complete family day."
        },
        {
            name: "One Day Resort Near Tathawade",
            description: "A one day resort near Tathawade is a convenient choice for those who want to enjoy a countryside break without staying overnight. Activities, food, and open surroundings provide enough variety for a comfortable day outing."
        },
        {
            name: "Nature Picnic Spot Near Tathawade",
            description: "A nature picnic spot near Tathawade gives visitors a welcome break from urban surroundings, with opportunities to enjoy bird watching, farm experiences, open outdoor spaces, and other activities in a peaceful countryside setting."
        },
        {
            name: "Picnic Spot Near Wakad Tathawade",
            description: "Visitors searching for a picnic spot near Wakad Tathawade can choose a destination that combines easy day-outing plans with rural recreation. Families and groups can enjoy activities, games, traditional experiences, nature, and food during their visit."
        },
        {
            name: "Picnic Spot Near Hinjewadi Tathawade",
            description: "A picnic spot near Hinjewadi Tathawade can offer a convenient escape for families, friends, and working groups looking for a short countryside break. The range of activities provides options for both relaxation and group entertainment."
        },
        {
            name: "Family Picnic Resort Near Tathawade",
            description: "A family picnic resort near Tathawade can provide a balanced outing through traditional rural activities, games, water recreation, farm experiences, nature activities, and food, allowing different members of the family to enjoy the day in their own way."
        },
        {
            name: "Picnic Spot with Activities Near Tathawade",
            description: "A picnic spot with activities near Tathawade offers more variety than a simple outdoor gathering. Visitors can enjoy rides, games, farm experiences, swimming, nature activities, boating, and homemade food while spending quality time with family or friends."
        }
    ],
    tableData: [
        ["Picnic Spot Near Tathawade"],
        ["One Day Picnic Spot Near Tathawade"],
        ["Best Picnic Spot Near Tathawade"],
        ["Family Picnic Spot Near Tathawade"],
        ["Picnic Resort Near Tathawade"],
        ["One Day Picnic Resort Near Tathawade"],
        ["Best Resort Near Tathawade for Picnic"],
        ["Family Resort Near Tathawade"],
        ["One Day Trip Near Tathawade"],
        ["Family One Day Trip Near Tathawade"],
        ["Picnic Places Near Tathawade"],
        ["Best Picnic Places Near Tathawade"],
        ["Affordable Picnic Spot Near Tathawade"],
        ["Budget Picnic Resort Near Tathawade"],
        ["Picnic Spot Near Tathawade Pune"],
        ["Resort Near Tathawade for Family Outing"],
        ["One Day Resort Near Tathawade"],
        ["Nature Picnic Spot Near Tathawade"],
        ["Picnic Spot Near Wakad Tathawade"],
        ["Picnic Spot Near Hinjewadi Tathawade"],
        ["Family Picnic Resort Near Tathawade"],
        ["Picnic Spot with Activities Near Tathawade"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Relaxing Rural Atmosphere",
            WhyChoosedescription: "The countryside setting creates a refreshing change from the busy urban environment around Tathawade, giving families and groups a comfortable place to slow down, enjoy open surroundings, and spend quality time together."
        },
        {
            WhyChooseheading: "Wide Range of Activities",
            WhyChoosedescription: "Visitors can choose from several experiences during their outing, including farm activities, traditional rides, games, nature exploration, swimming, and other recreational options, making the day more engaging for different age groups."
        },
        {
            WhyChooseheading: "Suitable for Family Outings",
            WhyChoosedescription: "Families can plan a shared day with activities for children, adults, and groups, allowing everyone to participate according to their interests while enjoying the peaceful surroundings and recreational facilities."
        },
        {
            WhyChooseheading: "Traditional Village Experiences",
            WhyChoosedescription: "Bull Cart Ride, Tractor Ride, and farm-related activities add an authentic rural touch to the outing. These experiences can make the picnic more memorable for visitors who want something beyond ordinary city entertainment."
        },
        {
            WhyChooseheading: "Nature-Focused Experiences",
            WhyChoosedescription: "Bird Watching, Jungle Safari, Farm Tours and Workshops, and other outdoor experiences provide opportunities to connect with nature while enjoying a relaxed day away from the urban surroundings of Tathawade and nearby Pune areas."
        },
        {
            WhyChooseheading: "Recreation for Groups",
            WhyChoosedescription: "Indoor and Outdoor Games along with multiple outdoor activities make the destination suitable for family groups, friends, and other visitors who want entertainment and shared experiences during a one day picnic."
        },
        {
            WhyChooseheading: "Refreshing Pool Experience",
            WhyChoosedescription: "The Swimming Pool provides a leisure option for visitors who want to relax and cool down during their outing. It adds variety to the picnic and can be combined with other activities throughout the day."
        },
        {
            WhyChooseheading: "Homemade Food and Convenience",
            WhyChoosedescription: "Tasty Homemade Food adds a satisfying dining experience to the day, while having several activities at one destination reduces the need to arrange separate entertainment and meal stops for a family or group outing."
        }
    ]
};


const faqData = [
    {
        question: "How can people from Tathawade plan a refreshing picnic at Om Agri Tourism?",
        answer: "A day at Om Agri Tourism can combine outdoor recreation with a peaceful rural setting. Visitors from Tathawade can enjoy swimming, boating, horse riding, tractor rides and bull cart rides, while bird watching and homemade food add slower, relaxing moments to the outing."
    },
    {
        question: "Which experiences can make a Tathawade picnic more enjoyable?",
        answer: "Different activities allow each group to create its own style of day out. Swimming and boating are suitable for those seeking recreation, whereas horse riding, tractor rides and bull cart rides provide distinctive countryside experiences surrounded by greenery."
    },
    {
        question: "Is Om Agri Tourism suitable for a family day trip from Tathawade?",
        answer: "Families can spend the day balancing active entertainment with time to relax together. Children can enjoy suitable outdoor activities and rides, while parents and elders may prefer boating, bird watching, homemade food and the calm atmosphere of the farm."
    },
    {
        question: "What rural activities can visitors experience at this picnic spot near Tathawade?",
        answer: "The destination gives guests an opportunity to experience traditional countryside activities that are different from a typical city outing. Horse riding, tractor rides and bull cart rides bring a rural touch to the visit, with bird watching and farm surroundings adding a nature-oriented element."
    },
    {
        question: "Can friends from Tathawade visit Om Agri Tourism for a one day outing?",
        answer: "A group of friends can build an enjoyable one-day plan around recreation, rides and open-air relaxation. Swimming, boating and horse riding can keep the group engaged, while food, photography and conversations around the farm make the remaining time more leisurely."
    },
    {
        question: "What can children do during a picnic near Tathawade Pune?",
        answer: "Young visitors can explore the countryside through a variety of suitable activities and experiences. Depending on the group's plan, children can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching under appropriate adult supervision."
    },
    {
        question: "Does Om Agri Tourism provide a nature-focused picnic experience near Tathawade?",
        answer: "Beyond recreational activities, the farm environment creates opportunities to slow down and appreciate the outdoors. Guests can spend time observing birds, walking around the greenery, enjoying homemade food and experiencing a quieter side of rural Maharashtra."
    },
    {
        question: "How can a group organize its day at Om Agri Tourism?",
        answer: "Groups can begin with their preferred active experience, such as swimming or boating, and then schedule countryside rides around a meal break. Keeping some unplanned time for bird watching, photography and relaxation helps make the itinerary comfortable instead of overcrowded."
    },
    {
        question: "Are traditional farm rides available for visitors looking for something different near Tathawade?",
        answer: "Visitors interested in a more traditional outing can include tractor rides and bull cart rides along with horse riding. These experiences give the picnic a distinctly rural character and can be enjoyed alongside the farm's recreational and nature-based activities."
    },
    {
        question: "Why is Om Agri Tourism worth considering when searching for a picnic spot near Tathawade?",
        answer: "For those wanting a break from the usual urban recreation options, Om Agri Tourism combines countryside surroundings, outdoor activities and food in one destination. The mix of swimming, boating, horse riding, tractor rides, bull cart rides and bird watching gives families and groups several ways to enjoy their day."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sagar Jadhav",
        feedback:
            "Leaving Tathawade for a countryside day out turned out to be a great decision for our friends' group. The combination of boating, swimming and horse riding kept everyone involved, while the tractor and bull cart rides gave us a fun rural experience. We especially enjoyed having a relaxed meal and spending time away from the busy city environment.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Rutuja Deshmukh",
        feedback:
            "The children enjoyed seeing and experiencing a completely different setting from their usual weekend routine. They were excited about the rides and outdoor activities, while the elders appreciated the greenery, bird watching and homemade food. Om Agri Tourism gave our family enough variety to keep everyone comfortable and entertained throughout the day.",
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
  "name": "Picnic Spot Near Tathawade",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-tathawade.webp",
  "description": "Picnic Spot Near Tathawade is a convenient choice for families, friends, students, school groups, corporate teams, and visitors searching for a refreshing one-day escape from the regular city routine. Om Agro Tourism offers a countryside-oriented agro-tourism environment where guests can spend quality time together and enjoy a peaceful change of surroundings away from busy urban areas. A One Day Picnic Spot Near Tathawade can be considered by people who want to enjoy a full-day outing without arranging an overnight stay. Those searching for the Best Picnic Spot Near Tathawade can consider an outdoor destination for family gatherings, weekend recreation, friends' get-togethers, school picnics, college outings, corporate day trips, and special celebrations. The Family Picnic Spot Near Tathawade is suitable for parents, children, relatives, and groups who want to relax and spend meaningful time together. Visitors looking for a Picnic Resort Near Tathawade can consider an agro-tourism destination for a dedicated day-outing experience in a countryside-inspired setting. A One Day Picnic Resort Near Tathawade can be useful for groups that prefer to spend their entire day at one destination rather than travelling between several city attractions. Those searching for the Best Resort Near Tathawade for One Day Picnic or Family Resort Near Tathawade can consider a peaceful outdoor setting for group recreation and family time. The destination can be considered by visitors travelling from Tathawade, Wakad, Hinjawadi, Punawale, Ravet, Kiwale, Akurdi, Nigdi, Pimpri, Chinchwad, Thergaon, Pimple Saudagar, Pimple Nilakh, Mahalunge, Baner, Balewadi, and other nearby Pune areas. Families can plan a relaxed day together, while friends can enjoy a casual picnic away from their everyday schedules. Schools and colleges may consider the destination for student outings, group picnics, and recreational day trips. Corporate teams can also plan employee outings, informal gatherings, and team recreation in a different environment from the regular workplace. Om Agro Tourism provides a rural-inspired atmosphere that offers a refreshing alternative to malls, restaurants, and routine city entertainment. A One Day Picnic Near Tathawade can be particularly suitable for visitors who want a short escape while returning home on the same day. People searching for Family One Day Trip Near Tathawade, Picnic Places Near Tathawade, Best Picnic Places Near Tathawade, One Day Outing Near Tathawade, or Weekend Picnic Near Tathawade can consider an agro-tourism experience for a peaceful break near Pune. The open surroundings create an opportunity to disconnect from the fast pace of city life and spend uninterrupted time with family, classmates, friends, or colleagues. Whether the plan is a family picnic, student outing, corporate gathering, weekend recreation, or friends' day trip, Om Agro Tourism offers a suitable concept for an enjoyable one-day experience near Tathawade and Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-tathawade"
  }
};




    return (
        <div>




<Helmet>
  <title>
    Picnic Spot Near Tathawade | Best One Day Picnic & Family Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Find a Picnic Spot Near Tathawade for families, friends, students and corporate groups looking for a peaceful one-day picnic, family outing and agro-tourism experience."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Tathawade, One Day Picnic Spot Near Tathawade, Best Picnic Spot Near Tathawade, Family Picnic Spot Near Tathawade, Picnic Resort Near Tathawade, One Day Picnic Resort Near Tathawade, Best Resort Near Tathawade, Best Resort Near Tathawade for One Day Picnic, Family Resort Near Tathawade, One Day Trip Near Tathawade, Family One Day Trip Near Tathawade, One Day Picnic Near Tathawade, Picnic Places Near Tathawade, Best Picnic Places Near Tathawade, Family Picnic Near Tathawade, One Day Outing Near Tathawade, Best One Day Outing Near Tathawade, Picnic Destination Near Tathawade, Weekend Picnic Near Tathawade, Weekend Outing Near Tathawade, Family Outing Near Tathawade, School Picnic Spot Near Tathawade, School Picnic Places Near Tathawade, College Picnic Near Tathawade, Student Picnic Spot Near Tathawade, Corporate Picnic Near Tathawade, Corporate Outing Near Tathawade, Agro Tourism Near Tathawade, Agro Tourism Near Pune, Budget Picnic Spot Near Tathawade, Picnic Resort Near Wakad, One Day Picnic Near Hinjawadi, Family Picnic Near Punawale, Picnic Places Near Ravet, One Day Picnic Near Kiwale, Family Picnic Near Akurdi, Picnic Spot Near Nigdi, One Day Picnic Near Pimpri, Family Picnic Near Chinchwad, Picnic Resort Near Thergaon, One Day Picnic Near Pimple Saudagar, Family Picnic Near Mahalunge, Picnic Spot Near Baner, One Day Picnic Near Balewadi, Family Picnic Near Pune"
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
                            <img src='/images/keyword/135.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotneartathawade;