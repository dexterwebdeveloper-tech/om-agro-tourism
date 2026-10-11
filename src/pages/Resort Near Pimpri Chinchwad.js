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

function Resortnearpimprichichwad() {


const cardData = {
    keyword: "Resort Near Pimpri Chinchwad",
    headingDescription: "Looking for a Resort Near Pimpri Chinchwad for a family picnic, couple getaway, corporate outing, or relaxing day trip? Om Agro Tourism offers a peaceful countryside setting with farm experiences, outdoor recreation, nature activities, traditional food, and refreshing open spaces. It is a convenient option for families, friends, couples, and groups looking to enjoy quality time away from the busy routine of Pimpri Chinchwad.",

    topPlaces: [
        {
            title: "Family Countryside Retreat",
            description: "Families can enjoy a relaxing day surrounded by greenery, open farm spaces, outdoor recreation, and peaceful countryside views. The setting provides opportunities for both children and adults to participate in activities and spend quality time together."
        },
        {
            title: "Agro Tourism Experience",
            description: "Explore the charm of rural life through farm surroundings, agricultural experiences, traditional activities, and local food. This provides visitors with a refreshing alternative to conventional city entertainment and indoor outings."
        },
        {
            title: "Couples Nature Getaway",
            description: "Couples can enjoy a quieter escape with scenic countryside surroundings, leisurely walks, traditional food, and relaxed spaces. The natural environment creates a pleasant setting for conversations and spending uninterrupted time together."
        },
        {
            title: "One-Day Picnic Experience",
            description: "Plan a convenient one-day picnic with outdoor activities, farm exploration, food, nature experiences, and recreation. It is suitable for families, friends, and groups who want a complete outing without an overnight travel plan."
        },
        {
            title: "Outdoor Recreation Zone",
            description: "Visitors can participate in outdoor games and recreational activities in an open countryside environment. The space works well for families, friend groups, and corporate teams looking for an energetic and enjoyable day."
        },
        {
            title: "Refreshing Water Leisure",
            description: "Water-based recreation can add an enjoyable and refreshing element to a day outing, especially for families and groups. Guests can balance water fun with nature exploration, food, and relaxation."
        },
        {
            title: "Corporate Group Outing",
            description: "Corporate teams can step away from office routines and enjoy outdoor recreation, group activities, informal conversations, and shared meals. The countryside atmosphere provides a relaxed environment for employee engagement."
        },
        {
            title: "Weekend Farm Escape",
            description: "A weekend visit provides an opportunity to slow down and enjoy open farmland, greenery, outdoor activities, traditional food, and peaceful surroundings. It is suitable for visitors seeking a short break without extensive travel."
        },
        {
            title: "Nature Exploration Area",
            description: "Guests can spend time exploring the natural surroundings through leisurely walks and countryside experiences. Fresh air, greenery, and open landscapes create a refreshing atmosphere away from the urban environment."
        },
        {
            title: "Traditional Food Experience",
            description: "Enjoying traditional Maharashtrian food in a countryside setting adds an authentic local element to the outing. It complements family picnics, couple visits, corporate gatherings, and group day trips."
        }
    ],

    services: [
        {
            name: "Resort near pimpri chinchwad",
            description: "A resort near Pimpri Chinchwad provides a convenient countryside escape for families, couples, friends, and groups looking for nature, outdoor recreation, farm experiences, food, and relaxation."
        },
        {
            name: "Good resorts near pimpri chinchwad",
            description: "Good resorts near Pimpri Chinchwad can offer a combination of peaceful surroundings, outdoor activities, farm experiences, traditional food, and relaxing spaces for a refreshing short getaway."
        },
        {
            name: "Resort near chinchwad",
            description: "A resort near Chinchwad is suitable for visitors who want to step away from the urban routine and enjoy countryside surroundings, nature exploration, outdoor recreation, and quality time with family or friends."
        },
        {
            name: "Resort near pimpri chinchwad maharashtra",
            description: "A resort near Pimpri Chinchwad Maharashtra can provide a convenient destination for day outings, family picnics, couple getaways, corporate gatherings, and nature-focused experiences."
        },
        {
            name: "Resort in pimpri chinchwad",
            description: "A resort in Pimpri Chinchwad can be considered by visitors looking for easy access to recreation, relaxation, food, and outdoor experiences while staying close to the urban area."
        },
        {
            name: "good resorts near pimpri chinchwad",
            description: "Good resorts near Pimpri Chinchwad are ideal for visitors seeking a balanced outing with open spaces, outdoor recreation, nature, farm activities, traditional meals, and comfortable leisure time."
        },
        {
            name: "pimpri chinchwad resort",
            description: "A Pimpri Chinchwad resort can provide a practical option for families, couples, friends, and groups planning a convenient day outing with recreation and countryside experiences."
        },
        {
            name: "Resort near chinchwad",
            description: "A Resort near Chinchwad offers an easy opportunity to enjoy a peaceful break with nature, outdoor activities, farm experiences, local food, and relaxing surroundings away from busy city routines."
        },
        {
            name: "Resort Near Pimpri Chinchwad",
            description: "A Resort Near Pimpri Chinchwad is suitable for family outings, couple getaways, corporate picnics, weekend breaks, and group activities in a peaceful countryside atmosphere."
        },
        {
            name: "Resorts in Pimpri Chinchwad",
            description: "Resorts in Pimpri Chinchwad can provide convenient options for short breaks, day outings, family recreation, group gatherings, and relaxing experiences without requiring a long-distance journey."
        },
        {
            name: "Best Resort Near Pimpri Chinchwad",
            description: "The Best Resort Near Pimpri Chinchwad should offer a comfortable mix of nature, recreation, food, outdoor activities, and relaxing surroundings suitable for different types of visitors."
        },
        {
            name: "Resort Near PCMC",
            description: "A Resort Near PCMC is a convenient choice for residents and visitors seeking a quick escape with farm experiences, outdoor recreation, nature, traditional food, and peaceful open spaces."
        },
        {
            name: "Best Resort Near PCMC",
            description: "The Best Resort Near PCMC can provide families, couples, friends, and corporate groups with a balanced experience combining outdoor entertainment, countryside relaxation, food, and nature."
        },
        {
            name: "One Day Picnic Resort Near Pimpri Chinchwad",
            description: "A One Day Picnic Resort Near Pimpri Chinchwad is suitable for families and groups who want to enjoy outdoor activities, farm experiences, food, nature, and relaxation within a single-day plan."
        },
        {
            name: "Family Resort Near Pimpri Chinchwad",
            description: "A Family Resort Near Pimpri Chinchwad can provide children and adults with opportunities for outdoor recreation, nature exploration, farm activities, traditional food, and meaningful family time."
        },
        {
            name: "Resort Near Pimpri Chinchwad for Couples",
            description: "A Resort Near Pimpri Chinchwad for Couples offers a peaceful alternative to crowded city destinations, with nature surroundings, relaxed spaces, local food, and opportunities for quality time together."
        },
        {
            name: "Resort With Swimming Pool Near Pimpri Chinchwad",
            description: "A Resort With Swimming Pool Near Pimpri Chinchwad can combine water-based leisure with outdoor recreation, nature experiences, farm activities, food, and relaxing countryside surroundings."
        },
        {
            name: "Water Park Resort Near Pimpri Chinchwad",
            description: "A Water Park Resort Near Pimpri Chinchwad can add refreshing water entertainment to a family or group outing while allowing visitors to enjoy outdoor recreation, food, and leisure activities."
        },
        {
            name: "Resort With Activities Near Pimpri Chinchwad",
            description: "A Resort With Activities Near Pimpri Chinchwad is ideal for visitors who prefer an active outing featuring outdoor games, farm experiences, nature activities, group recreation, and relaxing countryside time."
        },
        {
            name: "Day Outing Resort Near Pimpri Chinchwad",
            description: "A Day Outing Resort Near Pimpri Chinchwad offers a convenient setting for a complete day of recreation, nature exploration, food, outdoor activities, and relaxation without requiring an overnight stay."
        },
        {
            name: "Weekend Resort Near Pimpri Chinchwad",
            description: "A Weekend Resort Near Pimpri Chinchwad can provide a refreshing short break with open surroundings, farm activities, outdoor games, traditional food, and peaceful leisure away from the weekday routine."
        },
        {
            name: "Affordable Resort Near Pimpri Chinchwad",
            description: "An Affordable Resort Near Pimpri Chinchwad can be a practical choice for visitors who want to enjoy nature, recreation, food, and quality time without planning an expensive long-distance holiday."
        },
        {
            name: "Luxury Resort Near Pimpri Chinchwad",
            description: "A Luxury Resort Near Pimpri Chinchwad can appeal to guests looking for a more comfortable countryside escape with relaxing surroundings, enjoyable recreation, food experiences, and quality leisure time."
        },
        {
            name: "Agro Tourism Resort Near Pimpri Chinchwad",
            description: "An Agro Tourism Resort Near Pimpri Chinchwad offers visitors an opportunity to experience farm surroundings, rural activities, traditional food, nature, and the peaceful atmosphere of the countryside."
        },
        {
            name: "Picnic Spot Near Pimpri Chinchwad",
            description: "A Picnic Spot Near Pimpri Chinchwad is suitable for families, friends, and groups looking for open spaces, outdoor recreation, food, nature experiences, and an enjoyable break from urban routines."
        },
        {
            name: "Corporate Outing Resort Near Pimpri Chinchwad",
            description: "A Corporate Outing Resort Near Pimpri Chinchwad gives teams an outdoor environment for group activities, informal interaction, shared meals, employee engagement, and a refreshing break from office schedules."
        },
        {
            name: "Resort Near Wakad and Pimpri Chinchwad",
            description: "A Resort Near Wakad and Pimpri Chinchwad can provide an accessible countryside escape for nearby residents and groups seeking nature, outdoor recreation, farm activities, food, and relaxing leisure time."
        },
        {
            name: "Resort Near Hinjewadi and Pimpri Chinchwad",
            description: "A Resort Near Hinjewadi and Pimpri Chinchwad is convenient for families, corporate teams, and professionals looking for a short outing with outdoor activities, nature, farm experiences, food, and relaxation."
        }
    ],

    tableData: [
        ["Resort near pimpri chinchwad"],
        ["Good resorts near pimpri chinchwad"],
        ["Resort near chinchwad"],
        ["Resort near pimpri chinchwad maharashtra"],
        ["Resort in pimpri chinchwad"],
        ["good resorts near pimpri chinchwad"],
        ["pimpri chinchwad resort"],
        ["Resort near chinchwad"],
        ["Resort Near Pimpri Chinchwad"],
        ["Resorts in Pimpri Chinchwad"],
        ["Best Resort Near Pimpri Chinchwad"],
        ["Resort Near PCMC"],
        ["Best Resort Near PCMC"],
        ["One Day Picnic Resort Near Pimpri Chinchwad"],
        ["Family Resort Near Pimpri Chinchwad"],
        ["Resort Near Pimpri Chinchwad for Couples"],
        ["Resort With Swimming Pool Near Pimpri Chinchwad"],
        ["Water Park Resort Near Pimpri Chinchwad"],
        ["Resort With Activities Near Pimpri Chinchwad"],
        ["Day Outing Resort Near Pimpri Chinchwad"],
        ["Weekend Resort Near Pimpri Chinchwad"],
        ["Affordable Resort Near Pimpri Chinchwad"],
        ["Luxury Resort Near Pimpri Chinchwad"],
        ["Agro Tourism Resort Near Pimpri Chinchwad"],
        ["Picnic Spot Near Pimpri Chinchwad"],
        ["Corporate Outing Resort Near Pimpri Chinchwad"],
        ["Resort Near Wakad and Pimpri Chinchwad"],
        ["Resort Near Hinjewadi and Pimpri Chinchwad"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Convenient Countryside Escape",
            WhyChoosedescription: "The destination offers a practical way to move away from the busy urban environment of Pimpri Chinchwad and enjoy greenery, open spaces, fresh air, and peaceful rural surroundings."
        },
        {
            WhyChooseheading: "Family-Friendly Experiences",
            WhyChoosedescription: "Families can enjoy activities and surroundings suitable for different age groups. Children can participate in outdoor recreation while adults relax, explore the farm, and enjoy quality time together."
        },
        {
            WhyChooseheading: "Ideal for Couples",
            WhyChoosedescription: "Couples can choose a quieter countryside environment for their getaway, with nature, local food, leisurely activities, and peaceful spaces that encourage relaxed and meaningful time together."
        },
        {
            WhyChooseheading: "Great for Corporate Groups",
            WhyChoosedescription: "Corporate teams can use the open environment for group recreation, informal interaction, shared meals, and employee engagement activities that provide a refreshing change from office surroundings."
        },
        {
            WhyChooseheading: "Agro Tourism Experience",
            WhyChoosedescription: "Farm surroundings and rural experiences add a distinctive element to the visit. Guests can enjoy nature, agriculture, traditional activities, and local food rather than spending the entire outing in a conventional resort environment."
        },
        {
            WhyChooseheading: "Day Outing and Weekend Options",
            WhyChoosedescription: "Whether visitors have only one day or want a relaxed weekend break, the countryside setting can accommodate different outing styles with recreation, food, nature, and leisure experiences."
        },
        {
            WhyChooseheading: "Outdoor Recreation",
            WhyChoosedescription: "Open spaces provide opportunities for outdoor games, group recreation, nature exploration, and other activities. This makes the destination suitable for visitors who prefer an active outing rather than simply sitting indoors."
        },
        {
            WhyChooseheading: "Refreshing Food and Nature Combination",
            WhyChoosedescription: "Traditional food, greenery, farm surroundings, and open-air leisure come together to create a more complete getaway experience. Guests can enjoy local flavors while taking a break from the fast pace of city life."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good resort near Pimpri Chinchwad?",
        answer: "Om Agri Tourism is a peaceful countryside destination where visitors can step away from the busy surroundings of Pimpri Chinchwad and enjoy greenery, open spaces and farm-based experiences. It can be a suitable choice for families, friends and groups looking for a relaxing day outing."
    },
    {
        question: "How far is Om Agri Tourism from Pimpri Chinchwad?",
        answer: "Om Agri Tourism is located near Pune and can be considered by visitors from Pimpri Chinchwad who want a countryside escape. The travel time may vary depending on the starting point, traffic and selected route, so checking the route before departure is recommended."
    },
    {
        question: "What activities can guests enjoy at Om Agri Tourism?",
        answer: "A visit to Om Agri Tourism can include enjoyable outdoor experiences such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These activities give visitors opportunities to enjoy both recreation and the natural farm surroundings."
    },
    {
        question: "Is Om Agri Tourism suitable for a family outing from Pimpri Chinchwad?",
        answer: "Families from Pimpri Chinchwad can consider Om Agri Tourism for a refreshing countryside outing. The combination of greenery, open farm surroundings and activities suitable for different age groups makes it possible for parents and children to spend quality time together."
    },
    {
        question: "Can children enjoy a visit to Om Agri Tourism near Pimpri Chinchwad?",
        answer: "Children can experience a different kind of outing at Om Agri Tourism by exploring the farm environment and enjoying suitable recreational activities. Tractor rides, boating and bird watching can add variety to their visit while introducing them to a peaceful rural setting."
    },
    {
        question: "Does Om Agri Tourism offer traditional rural experiences?",
        answer: "Om Agri Tourism provides opportunities to experience traditional countryside activities such as bull cart rides and tractor rides. Along with the surrounding greenery and farm atmosphere, these experiences can make the outing more engaging for visitors accustomed to city life."
    },
    {
        question: "Is Om Agri Tourism suitable for a weekend outing near Pimpri Chinchwad?",
        answer: "For people planning a short break from Pimpri Chinchwad, Om Agri Tourism can provide a calm environment away from the city's regular routine. Guests can spend time outdoors, participate in recreational activities and enjoy the relaxed atmosphere of the countryside."
    },
    {
        question: "Can friends plan a day trip to Om Agri Tourism from Pimpri Chinchwad?",
        answer: "Friends can plan a fun-filled day at Om Agri Tourism by combining activities such as swimming, boating and horse riding with time spent around the farm. Traditional rides and bird watching can also add different experiences to a group outing."
    },
    {
        question: "Does Om Agri Tourism provide food for visitors?",
        answer: "Homemade food can complement the countryside experience at Om Agri Tourism, allowing visitors to enjoy a traditional meal during their outing. Having food along with farm activities and peaceful surroundings can make the visit more comfortable and enjoyable."
    },
    {
        question: "Why choose Om Agri Tourism when searching for a resort near Pimpri Chinchwad?",
        answer: "Om Agri Tourism brings together greenery, farm surroundings, outdoor recreation and traditional rural experiences in one destination. With activities such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching, it can be a refreshing option for visitors seeking a memorable countryside escape near Pimpri Chinchwad."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohan Jadhav",
        feedback:
            "We visited Om Agri Tourism with friends after looking for a resort near Pimpri Chinchwad for a relaxed day out. The boating, swimming and horse riding kept everyone entertained, while the green surroundings gave us a pleasant break from the city atmosphere. It was a refreshing experience for our group.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Neha Kulkarni",
        feedback:
            "Our family enjoyed spending a day at Om Agri Tourism. The children were excited about the tractor ride and bird watching, while we appreciated the peaceful farm setting and homemade food. The combination of activities and countryside surroundings made it a memorable family outing.",
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
  "name": "Resort Near Pimpri Chinchwad",
  "image": "https://www.omagrotourism.com/assets/images/resort-near-pimpri-chinchwad.webp",
  "description": "Om Agro Tourism offers a refreshing Resort Near Pimpri Chinchwad experience for families, couples, friends, corporate groups and visitors looking for a peaceful break from the busy urban environment. People searching for Resort near Pimpri Chinchwad can choose a countryside destination where greenery, open spaces, agriculture and recreational experiences create a relaxed atmosphere away from the city's routine. Those looking for Good resorts near Pimpri Chinchwad can consider an agro-tourism setting suitable for family outings, weekend plans, day picnics and group gatherings. A Resort near Chinchwad can be a convenient option for visitors who want to enjoy nature and recreation without travelling too far from the Pimpri-Chinchwad area. Visitors searching for Resort near Pimpri Chinchwad Maharashtra can plan a short escape for families, couples, friends or colleagues in a peaceful rural environment. A Resort in Pimpri Chinchwad search may also suit people comparing nearby recreation and stay options for one-day outings, celebrations and weekend breaks. Guests looking for a Pimpri Chinchwad resort can enjoy the benefits of spending leisure time surrounded by natural landscapes, agricultural surroundings and open areas. Families can use the destination for quality time together, children's recreation, casual celebrations and weekend outings, while couples can enjoy a calm setting for a short getaway. Corporate teams can consider the location for informal employee gatherings, team interaction and outdoor recreation away from the office. Friends and larger groups can also plan one-day picnics, birthday outings, get-togethers and seasonal visits. The agro-tourism environment provides a different experience from conventional city resorts by bringing visitors closer to countryside landscapes and agricultural surroundings. Monsoon visits can offer lush greenery and refreshing weather, while winter is suitable for comfortable outdoor activities and summer outings can be planned around convenient timings. Visitors searching for good resorts near Pimpri Chinchwad can also consider the destination for family picnics, nature outings, group recreation and short weekend escapes. Om Agro Tourism provides a convenient combination of nature, rural surroundings, recreation and agro-tourism experiences for visitors from Pimpri Chinchwad and nearby areas. Whether planning a one-day outing, family picnic, couple getaway, corporate gathering or weekend break, the destination offers a peaceful alternative for people searching for a resort near Pimpri Chinchwad.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/resort-near-pimpri-chinchwad"
  }
};







    return (
        <div>

<Helmet>
  <title>
    Resort Near Pimpri Chinchwad | Family, Weekend & Picnic Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism is a peaceful resort near Pimpri Chinchwad for families, couples and groups, offering nature, picnic, recreation and weekend outing experiences."
  />

  <meta
    name="keywords"
    content="Resort Near Pimpri Chinchwad, Resort near Pimpri Chinchwad, Good resorts near Pimpri Chinchwad, Resort near Chinchwad, Resort near Pimpri Chinchwad Maharashtra, Resort in Pimpri Chinchwad, good resorts near Pimpri Chinchwad, Pimpri Chinchwad resort, Resort near Pimpri Chinchwad Pune, resorts near Pimpri Chinchwad, best resorts near Pimpri Chinchwad, best resort near Pimpri Chinchwad, family resorts near Pimpri Chinchwad, family resort near Pimpri Chinchwad, resorts for family near Pimpri Chinchwad, weekend resorts near Pimpri Chinchwad, weekend resort near Pimpri Chinchwad, one day resort near Pimpri Chinchwad, one day picnic resort near Pimpri Chinchwad, picnic resort near Pimpri Chinchwad, picnic spots near Pimpri Chinchwad, picnic place near Pimpri Chinchwad, family picnic spot near Pimpri Chinchwad, family outing near Pimpri Chinchwad, family outing places near Pimpri Chinchwad, resorts for couples near Pimpri Chinchwad, couple resort near Pimpri Chinchwad, romantic resort near Pimpri Chinchwad, couple getaway near Pimpri Chinchwad, resorts with activities near Pimpri Chinchwad, activity resort near Pimpri Chinchwad, adventure resort near Pimpri Chinchwad, adventure resorts near Pimpri Chinchwad, resorts near Pimpri Chinchwad with activities, team outing places near Pimpri Chinchwad, team outing resort near Pimpri Chinchwad, corporate outing resort near Pimpri Chinchwad, corporate picnic resort near Pimpri Chinchwad, corporate outing places near Pimpri Chinchwad, office outing places near Pimpri Chinchwad, group outing resort near Pimpri Chinchwad, friends outing near Pimpri Chinchwad, weekend getaway near Pimpri Chinchwad, short getaway near Pimpri Chinchwad, nature resort near Pimpri Chinchwad, nature resorts near Pimpri Chinchwad, nature outing near Pimpri Chinchwad, agro tourism near Pimpri Chinchwad, agro tourism resort near Pimpri Chinchwad, agri tourism near Pimpri Chinchwad, farm resort near Pimpri Chinchwad, countryside resort near Pimpri Chinchwad, resort near Chinchwad Pune, resort near Nigdi, resort near Akurdi, resort near Wakad, resort near Bhosari, resort near Ravet, resort near Pune Pimpri Chinchwad, best picnic resort near Pimpri Chinchwad, best family resort near Pimpri Chinchwad, good family resorts near Pimpri Chinchwad, resort for birthday near Pimpri Chinchwad, resort for group outing near Pimpri Chinchwad, resort for corporate outing near Pimpri Chinchwad, resort for one day picnic near Pimpri Chinchwad, resort for weekend near Pimpri Chinchwad"
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
                            <img src='/images/keyword/32.jpg' alt='img' className='img-fluid' />
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

export default Resortnearpimprichichwad;