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

function PicnicSpotNearBhosari() {

const cardData = {
    keyword: "Picnic Spot Near Bhosari",
    headingDescription: "Om Agro Tourism is a refreshing destination for visitors searching for a picnic spot near Bhosari, offering a peaceful rural atmosphere with nature, food, traditional experiences, and recreational activities. Families, friends, and groups from Bhosari, Moshi, Dighi, and nearby Pimpri Chinchwad areas can enjoy a convenient one-day outing away from the city's busy routine. The combination of countryside surroundings and varied activities makes it suitable for family picnics, nature outings, and enjoyable day trips.",
    topPlaces: [
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops offer visitors an engaging way to experience the agricultural side of the countryside. Families and groups from Bhosari can explore farm surroundings and participate in rural experiences while adding an educational element to their one-day picnic."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching creates a calm nature experience for visitors looking for a peaceful picnic spot near Bhosari. The open rural surroundings provide an opportunity to observe birds and enjoy a quieter break from the crowded urban environment."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride introduces guests to an authentic farm-style experience and can be an exciting addition to a family one-day trip. Children and adults can enjoy this countryside activity while experiencing a different side of rural life."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food makes the picnic experience more satisfying by giving families and groups an opportunity to enjoy wholesome meals during their day out. It pairs naturally with the relaxed atmosphere and traditional character of the countryside."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding provides an active and enjoyable experience for visitors planning a picnic with activities near Bhosari. Families and friends can include this attraction in their outing for an exciting countryside experience."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities add a lively recreational option for families visiting during a one-day picnic. Guests can enjoy water-based fun along with other outdoor attractions, making the day more varied and enjoyable for different age groups."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride offers a traditional rural experience that gives visitors a closer feel of village life. It can be particularly enjoyable for families and children who want to include something distinctive in their picnic schedule."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide flexible entertainment for families, friends, and groups spending the day together. The variety of activities helps keep visitors engaged and makes the destination suitable for a relaxed family outing."
        },
        {
            title: "Boating",
            description: "Boating provides a refreshing outdoor activity for guests looking for more variety during their picnic near Bhosari. Families and friends can enjoy a shared recreational experience while taking a pleasant break within the countryside setting."
        },
        {
            title: "Jungle Safari",
            description: "Jungle Safari brings an adventurous touch to the outing and is suitable for visitors who want more than a conventional picnic. The experience adds exploration and excitement to a family day trip while keeping the focus on outdoor recreation."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Bhosari",
            description: "Om Agro Tourism offers a peaceful countryside setting for anyone searching for a picnic spot near Bhosari. Families and groups can enjoy nature, food, rural activities, and recreation while spending quality time away from the regular city routine."
        },
        {
            name: "One Day Picnic Spot Near Bhosari",
            description: "A one day picnic spot near Bhosari should provide enough variety to make the entire outing enjoyable. Om Agro Tourism brings together outdoor activities, countryside experiences, food, and nature so visitors can comfortably plan a complete day trip."
        },
        {
            name: "Best Picnic Spot Near Bhosari",
            description: "Visitors comparing the best picnic spot near Bhosari can consider Om Agro Tourism for its combination of open surroundings, recreational attractions, traditional activities, and homemade food. The varied setting allows families and groups to plan a picnic according to their interests."
        },
        {
            name: "Family Picnic Spot Near Bhosari",
            description: "Om Agro Tourism is suitable for a family picnic spot near Bhosari because it offers activities and experiences for different age groups. Parents, children, and relatives can spend the day enjoying games, food, nature, and countryside attractions together."
        },
        {
            name: "Picnic Resort Near Bhosari",
            description: "For visitors looking for a picnic resort near Bhosari, Om Agro Tourism provides a relaxing rural atmosphere along with multiple recreational options. Guests can combine leisure, food, nature, and activities during a comfortable day outing."
        },
        {
            name: "One Day Picnic Resort Near Bhosari",
            description: "A one day picnic resort near Bhosari gives families and groups the convenience of enjoying several experiences without planning an overnight stay. Om Agro Tourism offers outdoor recreation, rural activities, food, and nature-based experiences in one destination."
        },
        {
            name: "Best Resort Near Bhosari for Picnic",
            description: "Those searching for the best resort near Bhosari for picnic activities can choose Om Agro Tourism for its varied countryside experiences. The destination supports relaxed family outings as well as activity-filled plans for friends and groups."
        },
        {
            name: "Family Resort Near Bhosari",
            description: "Om Agro Tourism offers a family resort experience near Bhosari where visitors can spend meaningful time together in a refreshing outdoor setting. Its combination of activities, food, games, and rural attractions provides options for both children and adults."
        },
        {
            name: "One Day Trip Near Bhosari",
            description: "Planning a one day trip near Bhosari becomes easier when several recreational and nature-based experiences are available in one place. Om Agro Tourism allows visitors to enjoy countryside activities, meals, games, and outdoor experiences during a convenient day visit."
        },
        {
            name: "Family One Day Trip Near Bhosari",
            description: "A family one day trip near Bhosari can include a balanced mix of relaxation and recreation at Om Agro Tourism. Families can spend time together while enjoying rural attractions, games, food, and nature-focused experiences suitable for different generations."
        },
        {
            name: "Picnic Places Near Bhosari",
            description: "Among picnic places near Bhosari, Om Agro Tourism provides a distinctive countryside environment with several activities and experiences. It is a practical option for families, friends, and groups who want to spend their day surrounded by open spaces and rural attractions."
        },
        {
            name: "Best Picnic Places Near Bhosari",
            description: "Visitors searching for the best picnic places near Bhosari can explore Om Agro Tourism for its combination of nature, food, traditional activities, and recreation. The destination gives groups the flexibility to create either a relaxed or activity-focused picnic schedule."
        },
        {
            name: "Affordable Picnic Spot Near Bhosari",
            description: "An affordable picnic spot near Bhosari should offer enough variety to make the outing worthwhile for families and groups. Om Agro Tourism combines food, nature, rural experiences, and recreational activities within a single destination for a practical day outing."
        },
        {
            name: "Budget Picnic Resort Near Bhosari",
            description: "For guests searching for a budget picnic resort near Bhosari, Om Agro Tourism offers multiple experiences within the same countryside setting. Visitors can enjoy outdoor activities, traditional rural attractions, meals, and leisure time as part of their day plan."
        },
        {
            name: "Picnic Spot Near Bhosari Pune",
            description: "Om Agro Tourism provides a refreshing picnic spot near Bhosari Pune for visitors who want to spend a day away from the city's crowded surroundings. Families and groups can enjoy a combination of rural experiences, food, games, and nature."
        },
        {
            name: "Resort Near Bhosari for Family Outing",
            description: "A resort near Bhosari for family outing should offer experiences that keep both children and adults interested. Om Agro Tourism brings together games, outdoor recreation, countryside activities, food, and nature so families can enjoy the day at their own pace."
        },
        {
            name: "One Day Resort Near Bhosari",
            description: "Om Agro Tourism is a convenient choice for a one day resort near Bhosari when visitors want recreation without an overnight stay. The destination offers several activities and relaxing experiences that can be combined into a complete day itinerary."
        },
        {
            name: "Nature Picnic Spot Near Bhosari",
            description: "Nature lovers searching for a nature picnic spot near Bhosari can enjoy the open countryside environment at Om Agro Tourism. Bird watching, farm experiences, and outdoor attractions provide opportunities to spend quality time in a more peaceful natural setting."
        },
        {
            name: "Picnic Spot Near Moshi Bhosari",
            description: "Visitors from Moshi and Bhosari can choose Om Agro Tourism for a refreshing picnic experience surrounded by rural landscapes. Families and groups can enjoy food, traditional activities, nature, and recreation while making the most of their day away from the city."
        },
        {
            name: "Picnic Spot Near Dighi Bhosari",
            description: "Om Agro Tourism offers a countryside option for people searching for a picnic spot near Dighi Bhosari. Its combination of nature, food, rural experiences, and recreational activities makes it suitable for families and groups planning a convenient one-day outing."
        },
        {
            name: "Family Picnic Resort Near Bhosari",
            description: "A family picnic resort near Bhosari can be more enjoyable when it offers different experiences for every member of the group. Om Agro Tourism combines outdoor recreation, traditional rural activities, food, and nature for a flexible family picnic."
        },
        {
            name: "Picnic Spot with Activities Near Bhosari",
            description: "Visitors looking for a picnic spot with activities near Bhosari can enjoy a varied experience at Om Agro Tourism. Rural rides, games, nature experiences, food, and recreational attractions allow families and groups to keep their day active and enjoyable."
        }
    ],
    tableData: [
        ["Picnic Spot Near Bhosari"],
        ["One Day Picnic Spot Near Bhosari"],
        ["Best Picnic Spot Near Bhosari"],
        ["Family Picnic Spot Near Bhosari"],
        ["Picnic Resort Near Bhosari"],
        ["One Day Picnic Resort Near Bhosari"],
        ["Best Resort Near Bhosari for Picnic"],
        ["Family Resort Near Bhosari"],
        ["One Day Trip Near Bhosari"],
        ["Family One Day Trip Near Bhosari"],
        ["Picnic Places Near Bhosari"],
        ["Best Picnic Places Near Bhosari"],
        ["Affordable Picnic Spot Near Bhosari"],
        ["Budget Picnic Resort Near Bhosari"],
        ["Picnic Spot Near Bhosari Pune"],
        ["Resort Near Bhosari for Family Outing"],
        ["One Day Resort Near Bhosari"],
        ["Nature Picnic Spot Near Bhosari"],
        ["Picnic Spot Near Moshi Bhosari"],
        ["Picnic Spot Near Dighi Bhosari"],
        ["Family Picnic Resort Near Bhosari"],
        ["Picnic Spot with Activities Near Bhosari"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Setting",
            WhyChoosedescription: "Om Agro Tourism provides a refreshing rural environment where visitors from Bhosari and nearby areas can take a break from traffic, noise, and the busy pace of everyday city life."
        },
        {
            WhyChooseheading: "Fun for Families",
            WhyChoosedescription: "Children and adults can choose from different recreational experiences, making the destination suitable for family picnics where everyone wants something enjoyable to do during the day."
        },
        {
            WhyChooseheading: "Traditional Farm Activities",
            WhyChoosedescription: "Bull Cart Ride, Tractor Ride, and Farm Tours and Workshops introduce visitors to rural traditions and provide a memorable experience that feels different from a typical urban picnic destination."
        },
        {
            WhyChooseheading: "Nature and Open Spaces",
            WhyChoosedescription: "The countryside surroundings offer room to relax and enjoy nature, while activities such as Bird Watching provide an additional reason for visitors to spend quality time outdoors."
        },
        {
            WhyChooseheading: "Multiple Recreational Options",
            WhyChoosedescription: "From water-based fun and games to rural rides and outdoor exploration, visitors can select activities according to the interests and energy levels of their family or group."
        },
        {
            WhyChooseheading: "Suitable for Day Trips",
            WhyChoosedescription: "The variety available at Om Agro Tourism makes it possible to plan a complete one-day outing without needing to visit several different places for food, recreation, and outdoor experiences."
        },
        {
            WhyChooseheading: "Comfortable Group Experience",
            WhyChoosedescription: "Families, friends, and larger groups can enjoy shared activities while also finding opportunities to relax, eat together, and explore the countryside at a comfortable pace."
        },
        {
            WhyChooseheading: "A Refreshing Break from Bhosari",
            WhyChoosedescription: "For people living around Bhosari, Moshi, Dighi, and nearby Pimpri Chinchwad areas, Om Agro Tourism offers a convenient way to turn an ordinary day into a memorable countryside outing."
        }
    ]
};


const faqData = [
    {
        question: "What type of picnic experience can people from Bhosari enjoy at Om Agri Tourism?",
        answer: "A visit to Om Agri Tourism can turn a regular day out into a countryside experience with recreation, nature and farm activities. Guests from Bhosari can enjoy swimming, boating, horse riding, tractor rides and bull cart rides, along with bird watching and homemade food."
    },
    {
        question: "How can families from Bhosari spend a full day at a picnic destination?",
        answer: "Families can divide their time between energetic activities and peaceful breaks according to everyone's preferences. Swimming and boating can be followed by horse riding or countryside rides, while homemade food, bird watching and time around the greenery provide opportunities to relax."
    },
    {
        question: "Which outdoor activities are available near Bhosari for a family picnic?",
        answer: "Visitors have several outdoor options to choose from, including swimming, boating, horse riding, tractor rides and bull cart rides. Bird watching also adds a quieter nature-based activity, making the experience suitable for families with different interests."
    },
    {
        question: "Can friends from Bhosari plan a fun one-day outing at Om Agri Tourism?",
        answer: "A friends' group can create an enjoyable itinerary by mixing water recreation with countryside activities. Swimming, boating and horse riding can bring energy to the day, while tractor rides, bull cart rides, food and photography offer different ways to enjoy time together."
    },
    {
        question: "What makes a farm-based picnic different from regular outing places near Bhosari?",
        answer: "The farm setting adds experiences that are not usually part of a standard city outing. Guests can participate in traditional rides, observe birds, spend time around greenery and enjoy homemade food while also taking part in recreational activities such as swimming and boating."
    },
    {
        question: "Are there activities at Om Agri Tourism that children can enjoy?",
        answer: "Children can experience the outdoors through age-appropriate activities such as swimming, boating, horse riding and farm rides. Tractor rides, bull cart rides and bird watching can also introduce them to a different environment, with adults maintaining suitable supervision during activities."
    },
    {
        question: "Is Om Agri Tourism suitable for a picnic with senior family members from Bhosari?",
        answer: "Senior visitors can enjoy the destination without needing to participate in every active experience. Bird watching, homemade food, sitting in the green surroundings and spending quality time with family can provide a comfortable pace while younger members explore the activities."
    },
    {
        question: "What can groups do between activities during a picnic near Bhosari Pune?",
        answer: "The day does not need to remain activity-focused from start to finish. Groups can use breaks for homemade food, casual conversations, photography and observing the natural surroundings, creating a more comfortable balance between recreation and relaxation."
    },
    {
        question: "Can visitors experience traditional village-style rides at Om Agri Tourism?",
        answer: "Guests looking for a rural touch can include horse riding, tractor rides and bull cart rides in their outing. These experiences provide a distinctive countryside feel and can be combined with swimming, boating, bird watching and other farm-based activities."
    },
    {
        question: "Why might Om Agri Tourism be considered when searching for a picnic spot near Bhosari?",
        answer: "For visitors wanting to move away from the usual urban routine, Om Agri Tourism brings recreation, nature and countryside experiences together. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide variety for families, friends and groups visiting from Bhosari."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Pranav Shinde",
        feedback:
            "Instead of spending another weekend around the city, our group decided to try a farm-based picnic. The swimming and boating were enjoyable, while the horse riding and bull cart ride gave us a memorable countryside experience. Homemade food and plenty of time to sit together made the outing feel relaxed from beginning to end.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Sonali Jagtap",
        feedback:
            "The combination of activities worked very well for our family. Children had fun with the outdoor experiences and rides, while the adults appreciated the greenery, bird watching and peaceful atmosphere. The visit gave us a welcome break from our regular Bhosari routine and everyone enjoyed having something different to do.",
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
  "name": "Picnic Spot Near Bhosari",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-bhosari.webp",
  "description": "Picnic Spot Near Bhosari is a convenient option for families, friends, students, school groups, corporate teams, and visitors searching for a refreshing one-day escape from the busy urban routine. Om Agro Tourism offers a countryside-oriented agro-tourism environment where guests can spend quality time together and enjoy a peaceful change of surroundings away from the regular city atmosphere. A One Day Picnic Spot Near Bhosari can be considered by people who want to enjoy a complete day outing without arranging an overnight stay. Those searching for the Best Picnic Spot Near Bhosari can consider an outdoor destination for family gatherings, weekend recreation, friends' get-togethers, school picnics, college outings, corporate day trips, and special celebrations. The Family Picnic Spot Near Bhosari is suitable for parents, children, relatives, and groups looking for a relaxed environment to spend meaningful time together. Visitors searching for a Picnic Resort Near Bhosari can consider an agro-tourism destination for a dedicated day-outing experience in a countryside-inspired setting. A One Day Picnic Resort Near Bhosari can be useful for groups that prefer spending their entire outing at one destination rather than travelling between multiple city attractions. Those looking for the Best Resort Near Bhosari for Picnic or Family Resort Near Bhosari can consider a peaceful outdoor environment for family recreation, friends' gatherings, student outings, and group activities. The destination can be considered by visitors travelling from Bhosari, Moshi, Chikhali, Dighi, Alandi, Dudulgaon, Charholi, Spine Road, Pradhikaran, Nigdi, Akurdi, Chinchwad, Pimpri, Ravet, Kiwale, Tathawade, Punawale, Wakad, and other nearby Pune areas. Families can plan a relaxed day together, while friends can enjoy a casual picnic away from their usual schedules. Schools and colleges may also consider the destination for student picnics, recreational outings, and group day trips. Corporate teams can arrange informal employee gatherings and team outings in a different environment from the regular workplace. Om Agro Tourism provides a rural-inspired atmosphere that offers a refreshing alternative to malls, restaurants, and crowded city entertainment. A One Day Trip Near Bhosari can be a practical option for visitors who want to enjoy an outdoor break and return home on the same day. People searching for Family One Day Trip Near Bhosari, Picnic Places Near Bhosari, Best Picnic Places Near Bhosari, One Day Outing Near Bhosari, or Weekend Picnic Near Bhosari can consider an agro-tourism experience for a peaceful escape near Pune. The open surroundings create an opportunity to step away from the fast pace of city life and spend uninterrupted time with family, classmates, friends, or colleagues. Whether the requirement is a family picnic, school outing, college trip, corporate gathering, friends' day out, or weekend recreation, Om Agro Tourism offers a suitable countryside-oriented concept for an enjoyable one-day experience near Bhosari and Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-bhosari"
  }
};





    return (
        <div>


<Helmet>
  <title>
    Picnic Spot Near Bhosari | Best One Day Picnic & Family Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a Picnic Spot Near Bhosari for families, friends, students and corporate groups looking for a peaceful one-day picnic, family outing and agro-tourism experience."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Bhosari, One Day Picnic Spot Near Bhosari, Best Picnic Spot Near Bhosari, Family Picnic Spot Near Bhosari, Picnic Resort Near Bhosari, One Day Picnic Resort Near Bhosari, Best Resort Near Bhosari for Picnic, Family Resort Near Bhosari, One Day Trip Near Bhosari, Family One Day Trip Near Bhosari, One Day Picnic Near Bhosari, Picnic Places Near Bhosari, Best Picnic Places Near Bhosari, Family Picnic Near Bhosari, One Day Outing Near Bhosari, Best One Day Outing Near Bhosari, Picnic Destination Near Bhosari, Weekend Picnic Near Bhosari, Weekend Outing Near Bhosari, Family Outing Near Bhosari, School Picnic Spot Near Bhosari, School Picnic Places Near Bhosari, College Picnic Near Bhosari, Student Picnic Spot Near Bhosari, Corporate Picnic Near Bhosari, Corporate Outing Near Bhosari, Agro Tourism Near Bhosari, Agro Tourism Near Pune, Budget Picnic Spot Near Bhosari, Picnic Resort Near Moshi, One Day Picnic Near Chikhali, Family Picnic Near Dighi, Picnic Places Near Alandi, One Day Picnic Near Dudulgaon, Family Picnic Near Charholi, Picnic Spot Near Pradhikaran, One Day Picnic Near Nigdi, Family Picnic Near Akurdi, Picnic Resort Near Chinchwad, One Day Picnic Near Pimpri, Family Picnic Near Ravet, Picnic Spot Near Kiwale, One Day Picnic Near Tathawade, Family Picnic Near Punawale, Picnic Resort Near Wakad, One Day Picnic Near Pune"
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
                            <img src='/images/keyword/140.jpg' alt='img' className='img-fluid' />
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

export default PicnicSpotNearBhosari;