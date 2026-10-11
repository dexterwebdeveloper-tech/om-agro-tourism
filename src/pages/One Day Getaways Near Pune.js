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

function Onedaygetawaynearpune() {


const cardData = {
    keyword: "One Day Getaways Near Pune",
    headingDescription: "Looking for One Day Getaways Near Pune for a family outing, couple trip, weekend break, or refreshing day away from the city? Om Agro Tourism offers a peaceful countryside setting with nature experiences, farm activities, outdoor recreation, traditional food, and relaxing spaces. It is suitable for families, couples, children, friends, and groups planning a convenient one-day or short overnight escape from Pune.",

    topPlaces: [
        {
            title: "Countryside Farm Getaway",
            description: "Enjoy a refreshing break surrounded by open farmland, greenery, fresh air, and peaceful rural surroundings. This experience is ideal for visitors who want to spend quality time away from Pune's traffic and busy urban routine."
        },
        {
            title: "Family Day Picnic Experience",
            description: "Families can enjoy a relaxed day together with outdoor activities, farm exploration, open spaces, traditional food, and recreational experiences. The setting gives children and adults opportunities to have fun while spending meaningful time together."
        },
        {
            title: "Couples Nature Escape",
            description: "Couples looking for a simple one-day escape can enjoy peaceful surroundings, nature walks, farm views, comfortable relaxation areas, and delicious local meals. It creates a pleasant setting for conversations and quality time away from the city."
        },
        {
            title: "Weekend Farm Retreat",
            description: "A weekend farm retreat provides an easy change of scenery without requiring a long journey. Visitors can combine countryside relaxation, agricultural experiences, outdoor games, food, and leisure activities into a refreshing short break."
        },
        {
            title: "Kids Fun and Recreation",
            description: "Children can enjoy open-air recreation and age-friendly activities while families explore the farm surroundings. The combination of nature, games, and rural experiences makes the outing engaging for younger visitors."
        },
        {
            title: "Traditional Village Experience",
            description: "Experience the charm of rural Maharashtra through farm surroundings, traditional lifestyle elements, local cuisine, and countryside activities. It offers a different experience from conventional city entertainment and indoor outings."
        },
        {
            title: "Nature and Farm Walk",
            description: "Take a leisurely walk through natural surroundings and agricultural spaces while enjoying fresh air and scenic countryside views. It is a relaxing option for guests who prefer nature exploration along with their day outing."
        },
        {
            title: "Outdoor Adventure Zone",
            description: "Groups can add excitement to their getaway through outdoor recreation and adventure-oriented activities. The open environment provides plenty of opportunities for friends and families to enjoy an active and energetic day."
        },
        {
            title: "Maharashtrian Food Experience",
            description: "A countryside getaway becomes more memorable with traditional Maharashtrian food served in a relaxed farm atmosphere. Guests can enjoy local flavors while taking a break from the usual restaurant and city dining experience."
        },
        {
            title: "Refreshing One-Day Escape",
            description: "For visitors with limited time, a one-day countryside escape offers relaxation, recreation, food, and nature experiences within a convenient short-trip plan. It is well suited for families, couples, friends, and small groups."
        }
    ],

    services: [
        {
            name: "One day getaways near pune",
            description: "Plan a refreshing one-day getaway near Pune with peaceful farm surroundings, outdoor activities, nature experiences, traditional food, and quality time with family or friends."
        },
        {
            name: "1 day family trip near pune",
            description: "Enjoy a convenient one-day family trip near Pune where children and adults can participate in recreational activities, explore the countryside, enjoy local food, and spend time together."
        },
        {
            name: "1 day getaway from pune",
            description: "A one-day getaway from Pune offers an easy escape from city traffic and routine with open spaces, farm experiences, outdoor recreation, and a relaxing rural atmosphere."
        },
        {
            name: "One day family trip near pune",
            description: "Families can enjoy a memorable one-day trip near Pune with nature exploration, outdoor games, countryside experiences, and comfortable spaces designed for shared family time."
        },
        {
            name: "Half day trip near pune",
            description: "A half-day trip near Pune is suitable for visitors who have limited time but still want to enjoy a change of scenery, fresh countryside air, farm surroundings, and relaxing outdoor activities."
        },
        {
            name: "2 day picnic spot near pune",
            description: "Plan a longer two-day picnic experience near Pune by combining countryside recreation, farm activities, food, nature exploration, and relaxing time in a peaceful rural environment."
        },
        {
            name: "One day getaways from pune",
            description: "One day getaways from Pune provide a convenient way to step away from the city's busy schedule and enjoy nature, farm experiences, outdoor fun, and refreshing countryside surroundings."
        },
        {
            name: "One day overnight trip near pune",
            description: "Visitors planning a short overnight trip near Pune can combine daytime recreation with peaceful countryside surroundings and additional time to relax, dine, and enjoy the farm atmosphere."
        },
        {
            name: "One day tour package near pune",
            description: "A one-day tour package near Pune can bring together food, recreation, nature, farm activities, and outdoor experiences into a convenient itinerary for families, couples, and groups."
        },
        {
            name: "Places near pune for one day trip for Couple",
            description: "Couples searching for places near Pune for a one-day trip can enjoy a peaceful farm setting with nature views, relaxing spaces, outdoor experiences, and opportunities to spend quality time together."
        },
        {
            name: "One day weekend getaways from pune",
            description: "Make the weekend more enjoyable with a one-day getaway from Pune featuring countryside relaxation, farm exploration, outdoor recreation, traditional meals, and a break from everyday city life."
        },
        {
            name: "places near pune for one day trip for couples",
            description: "Couples can explore peaceful places near Pune for a one-day trip where they can enjoy nature, farm surroundings, local food, and a relaxed atmosphere away from crowded city destinations."
        },
        {
            name: "Places to visit and stay near pune",
            description: "Places to visit and stay near Pune are ideal for travelers who want to combine sightseeing-style exploration with relaxation, countryside experiences, food, and comfortable time away from the city."
        },
        {
            name: "Places to visit near pune for 1 day stay",
            description: "For a short one-day stay near Pune, visitors can choose a countryside experience that combines nature, farm activities, recreation, food, and peaceful surroundings without requiring a long-distance journey."
        },
        {
            name: "Places to visit near pune for stay",
            description: "Visitors looking for places to visit near Pune for a stay can enjoy a rural atmosphere with nature exploration, farm experiences, outdoor activities, and relaxing spaces suitable for short breaks."
        },
        {
            name: "One Day Getaways Near Pune",
            description: "One Day Getaways Near Pune are a convenient choice for families, couples, friends, and groups seeking nature, recreation, traditional food, and a peaceful countryside environment within a short travel plan."
        },
        {
            name: "One Day Trip Near Pune",
            description: "A One Day Trip Near Pune can combine farm exploration, outdoor recreation, nature walks, local food, and relaxation to create a balanced and enjoyable short outing."
        },
        {
            name: "Best One Day Trip Near Pune",
            description: "A memorable one-day trip near Pune should offer more than sightseeing, with opportunities for nature experiences, farm activities, recreation, food, and quality time in a peaceful environment."
        },
        {
            name: "One Day Trip Near Pune with Family",
            description: "Families can enjoy a One Day Trip Near Pune with child-friendly recreation, outdoor activities, nature exploration, farm experiences, and relaxed spaces where everyone can spend time together."
        },
        {
            name: "One Day Picnic Spot Near Pune",
            description: "A One Day Picnic Spot Near Pune provides an easy option for families and groups seeking open surroundings, outdoor fun, farm experiences, traditional meals, and a refreshing break from city life."
        },
        {
            name: "One Day Picnic Resort Near Pune",
            description: "A One Day Picnic Resort Near Pune can bring together recreation, nature, food, farm activities, and relaxation in one convenient destination for families, couples, friends, and group outings."
        },
        {
            name: "One Day Outing Near Pune",
            description: "Enjoy a One Day Outing Near Pune with countryside views, outdoor recreation, farm exploration, local food, and peaceful surroundings that make a short break more enjoyable and refreshing."
        },
        {
            name: "Places to Visit Near Pune for One Day",
            description: "Places to Visit Near Pune for One Day can offer a mix of nature, rural experiences, outdoor activities, food, and relaxation for visitors who want to return within the same day."
        },
        {
            name: "One Day Trip Near Pune Within 50 KM",
            description: "A One Day Trip Near Pune Within 50 KM can be planned around convenient countryside experiences, farm activities, recreation, food, and relaxation without committing to a long-distance journey."
        },
        {
            name: "One Day Trip Near Pune Within 25 KM",
            description: "For a shorter travel plan, a One Day Trip Near Pune Within 25 KM can provide a quick change of scenery with nature, farm surroundings, outdoor recreation, and peaceful leisure time."
        },
        {
            name: "Weekend Getaways Near Pune",
            description: "Weekend Getaways Near Pune offer a practical way to refresh yourself with countryside surroundings, farm activities, outdoor games, traditional cuisine, and relaxing time away from the city's fast pace."
        },
        {
            name: "Family Getaways Near Pune",
            description: "Family Getaways Near Pune can include nature exploration, farm experiences, recreational activities, local food, and open spaces where children, parents, and elders can enjoy time together."
        },
        {
            name: "One Day Resort Near Pune",
            description: "A One Day Resort Near Pune provides a convenient setting for relaxation, recreation, farm experiences, outdoor activities, and food without requiring an extended holiday plan."
        },
        {
            name: "Resorts Near Pune for One Day Trip",
            description: "Resorts Near Pune for One Day Trip are suitable for visitors who want to combine leisure, activities, food, nature, and family or group entertainment into a single-day outing."
        },
        {
            name: "One Day Trip Near Pune for Couples",
            description: "Couples can enjoy a One Day Trip Near Pune in a peaceful countryside setting with nature views, relaxed surroundings, outdoor experiences, and opportunities to spend uninterrupted quality time together."
        },
        {
            name: "One Day Trip Near Pune with Kids",
            description: "A One Day Trip Near Pune with Kids can include outdoor games, nature exploration, farm activities, open spaces, and recreational experiences that keep younger visitors engaged throughout the outing."
        },
        {
            name: "One Day Picnic Near Pune with Water Park",
            description: "A One Day Picnic Near Pune with Water Park activities can add an exciting recreational element to a family or group outing while balancing water fun with nature, food, and countryside relaxation."
        },
        {
            name: "Monsoon Getaways Near Pune",
            description: "Monsoon Getaways Near Pune are ideal for enjoying fresh greenery, cool weather, countryside landscapes, seasonal nature experiences, and a refreshing farm atmosphere during the rainy season."
        },
        {
            name: "One Day Road Trip from Pune",
            description: "A One Day Road Trip from Pune can become more enjoyable when the destination combines scenic countryside surroundings, farm experiences, outdoor recreation, traditional food, and relaxing spaces."
        },
        {
            name: "One Day Picnic Spot Near Pune for Family",
            description: "Families searching for a One Day Picnic Spot Near Pune can enjoy open spaces, outdoor activities, farm experiences, local cuisine, and a peaceful environment suitable for different age groups."
        }
    ],

    tableData: [
        ["One day getaways near pune"],
        ["1 day family trip near pune"],
        ["1 day getaway from pune"],
        ["One day family trip near pune"],
        ["Half day trip near pune"],
        ["2 day picnic spot near pune"],
        ["One day getaways from pune"],
        ["One day overnight trip near pune"],
        ["One day tour package near pune"],
        ["Places near pune for one day trip for Couple"],
        ["One day weekend getaways from pune"],
        ["places near pune for one day trip for couples"],
        ["Places to visit and stay near pune"],
        ["Places to visit near pune for 1 day stay"],
        ["Places to visit near pune for stay"],
        ["One Day Getaways Near Pune"],
        ["One Day Trip Near Pune"],
        ["Best One Day Trip Near Pune"],
        ["One Day Trip Near Pune with Family"],
        ["One Day Picnic Spot Near Pune"],
        ["One Day Picnic Resort Near Pune"],
        ["One Day Outing Near Pune"],
        ["Places to Visit Near Pune for One Day"],
        ["One Day Trip Near Pune Within 50 KM"],
        ["One Day Trip Near Pune Within 25 KM"],
        ["Weekend Getaways Near Pune"],
        ["Family Getaways Near Pune"],
        ["One Day Resort Near Pune"],
        ["Resorts Near Pune for One Day Trip"],
        ["One Day Trip Near Pune for Couples"],
        ["One Day Trip Near Pune with Kids"],
        ["One Day Picnic Near Pune with Water Park"],
        ["Monsoon Getaways Near Pune"],
        ["One Day Road Trip from Pune"],
        ["One Day Picnic Spot Near Pune for Family"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Convenient Short Getaway",
            WhyChoosedescription: "A short trip does not need a complicated itinerary. Om Agro Tourism offers a countryside environment where visitors can combine relaxation, recreation, food, and nature experiences within a convenient one-day plan."
        },
        {
            WhyChooseheading: "Family-Friendly Environment",
            WhyChoosedescription: "Families can spend meaningful time together in open surroundings with activities and experiences suitable for children and adults. The peaceful setting also gives parents an opportunity to relax while children enjoy outdoor recreation."
        },
        {
            WhyChooseheading: "Perfect for Couples",
            WhyChoosedescription: "Couples can step away from crowded city destinations and enjoy a quieter farm atmosphere with nature, scenic surroundings, local food, and relaxed moments together."
        },
        {
            WhyChooseheading: "Activities and Relaxation",
            WhyChoosedescription: "The experience combines active recreation with opportunities to slow down and enjoy nature. Guests can choose between outdoor fun, farm exploration, leisurely walks, food, and peaceful relaxation."
        },
        {
            WhyChooseheading: "Suitable for One-Day Plans",
            WhyChoosedescription: "Visitors with limited time can plan a complete day without needing a lengthy holiday. The combination of recreation, food, nature, and countryside experiences makes the destination suitable for quick breaks from Pune."
        },
        {
            WhyChooseheading: "Authentic Rural Experience",
            WhyChoosedescription: "Instead of a conventional urban outing, guests get an opportunity to experience the charm of farm surroundings, traditional food, rural activities, open landscapes, and a slower countryside lifestyle."
        },
        {
            WhyChooseheading: "Good for Kids and Groups",
            WhyChoosedescription: "Open spaces and recreational opportunities make the experience suitable for children, friend groups, family gatherings, and other small groups looking for an enjoyable outdoor outing."
        },
        {
            WhyChooseheading: "Refreshing Escape from City Routine",
            WhyChoosedescription: "Fresh air, greenery, farm surroundings, and open spaces create a welcome change from Pune's busy daily routine. The setting encourages visitors to relax, reconnect with nature, and return refreshed."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good choice for one day getaways near Pune?",
        answer: "Om Agri Tourism provides a peaceful countryside environment for visitors looking to take a refreshing one day break from Pune. The farm surroundings, greenery, outdoor activities and traditional experiences create a relaxed setting for families, friends and groups."
    },
    {
        question: "What can we do at Om Agri Tourism during a one day getaway?",
        answer: "Visitors can enjoy a mix of recreation and countryside experiences at Om Agri Tourism. Activities such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching offer different ways to spend an enjoyable day outdoors."
    },
    {
        question: "Is Om Agri Tourism suitable for a family one day getaway near Pune?",
        answer: "Families can enjoy a relaxed day at Om Agri Tourism with activities that can be enjoyed by both children and adults. The farm greenery provides a peaceful backdrop for family time, while boating, swimming and traditional rides add excitement to the outing."
    },
    {
        question: "Can friends visit Om Agri Tourism for a one day trip?",
        answer: "Friends can turn their visit to Om Agri Tourism into an enjoyable group getaway by participating in outdoor activities and exploring the farm surroundings. Horse riding, boating, swimming and bull cart rides provide opportunities to have fun and spend quality time together."
    },
    {
        question: "Can children enjoy a getaway at Om Agri Tourism?",
        answer: "Children can experience a refreshing outdoor day at Om Agri Tourism with activities such as tractor rides, boating and bird watching. The farm surroundings also give them an opportunity to explore a rural environment and enjoy time away from their usual city routine."
    },
    {
        question: "Is Om Agri Tourism suitable for couples looking for a one day getaway?",
        answer: "Couples can enjoy a calm countryside outing at Om Agri Tourism surrounded by greenery and farm landscapes. Boating, horse riding and bird watching can make the visit more engaging, while the peaceful setting offers a pleasant opportunity to unwind together."
    },
    {
        question: "Does Om Agri Tourism offer homemade food during a one day getaway?",
        answer: "Homemade food adds a traditional touch to the countryside experience at Om Agri Tourism. Guests can enjoy a satisfying meal during their day out and relax in the farm surroundings before continuing with their activities."
    },
    {
        question: "Can groups plan a one day getaway at Om Agri Tourism?",
        answer: "Groups can enjoy a varied day outing at Om Agri Tourism by choosing from multiple recreational and farm-based activities. Swimming, boating, horse riding, tractor rides and bull cart rides offer active experiences, while bird watching and the greenery provide quieter moments."
    },
    {
        question: "What makes Om Agri Tourism different from regular one day getaways near Pune?",
        answer: "Om Agri Tourism combines a nature-oriented break with traditional farm experiences and outdoor recreation. Visitors can enjoy greenery, homemade food, bird watching and activities such as swimming, boating, horse riding, tractor rides and bull cart rides in a peaceful countryside environment."
    },
    {
        question: "Why choose Om Agri Tourism for one day getaways near Pune?",
        answer: "Om Agri Tourism brings together relaxation, farm experiences, greenery and outdoor recreation for a memorable day away from Pune. Families, friends and groups can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food while spending meaningful time together."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Yash Kulkarni",
        feedback:
            "We were looking for a quick one day getaway from Pune and Om Agri Tourism turned out to be a great choice. The farm surroundings were peaceful, and we enjoyed boating, horse riding and the bull cart ride. It was a refreshing break from our usual weekend routine.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Anushka Jadhav",
        feedback:
            "Our family had a lovely day at Om Agri Tourism. The children enjoyed the tractor ride and bird watching, while the adults appreciated the greenery and relaxed atmosphere. We also enjoyed the homemade food, which gave the outing a wonderful countryside feel.",
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
  "name": "One Day Getaways Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/one-day-getaways-near-pune.webp",
  "description": "Om Agro Tourism offers a refreshing One Day Getaways Near Pune experience for families, couples, friends, corporate groups and visitors looking for a convenient escape from the city's everyday routine. People searching for One day getaways near Pune can enjoy a peaceful countryside environment where nature, agriculture, open spaces and recreational experiences create a relaxing break without requiring extensive travel. A 1 day family trip near Pune can be planned for parents, children and extended family members who want to spend quality time together in a natural setting. Visitors looking for a 1 day getaway from Pune can choose an agro-tourism destination for a short escape filled with outdoor leisure, countryside views and group recreation. A One day family trip near Pune is suitable for weekend plans, family gatherings, casual celebrations and nature-based outings. For visitors with limited time, a Half day trip near Pune can provide a convenient change of scenery while allowing them to return to the city within the same day. Those planning a 2 day picnic spot near Pune can also consider a countryside destination for a longer leisure schedule, subject to available stay facilities and packages. One day getaways from Pune are popular with families, friends and office teams looking for a quick break from urban surroundings. Visitors searching for a One day overnight trip near Pune can plan a short stay experience that combines daytime recreation with a peaceful countryside atmosphere, subject to accommodation availability. A One day tour package near Pune can be suitable for groups wanting a structured outing with leisure, nature and recreational experiences. Couples looking for Places near Pune for one day trip for Couple can enjoy a relaxed setting away from crowded city locations, while those comparing places near Pune for one day trip for couples can choose a nature-oriented destination for quality time together. People searching for Places to visit and stay near Pune can combine sightseeing and countryside leisure with a short overnight or extended outing according to their schedule. Om Agro Tourism provides an alternative to conventional city entertainment by bringing visitors closer to agricultural landscapes, greenery and rural surroundings. Families can enjoy open spaces and suitable outdoor activities, while corporate groups and friends can use the destination for informal gatherings and team recreation. Seasonal visits provide different experiences, with monsoon bringing lush greenery, winter offering comfortable outdoor conditions and summer allowing visitors to plan outings around suitable timings. The destination can be considered for family day trips, couple getaways, weekend outings, school groups, corporate gatherings and short countryside escapes. With its combination of agro-tourism, nature and recreation, Om Agro Tourism offers a memorable choice for visitors searching for one-day getaways, family trips, couple outings and places to visit near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/one-day-getaways-near-pune"
  }
};




    return (
        <div>
<Helmet>
  <title>
    One Day Getaways Near Pune | Family Trips, Couple Getaways & Weekend Escapes | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers refreshing one day getaways near Pune for families and couples, with picnic, nature, stay and weekend outing experiences."
  />

  <meta
    name="keywords"
    content="One Day Getaways Near Pune, One day getaways near Pune, 1 day family trip near Pune, 1 day getaway from Pune, One day family trip near Pune, Half day trip near Pune, 2 day picnic spot near Pune, One day getaways from Pune, One day overnight trip near Pune, One day tour package near Pune, Places near Pune for one day trip for Couple, One day weekend getaways from Pune, places near Pune for one day trip for couples, Places to visit and stay near Pune, Places to visit near Pune, one day trip near Pune, one day outing near Pune, one day picnic near Pune, one day picnic spot near Pune, best one day trip near Pune, best one day getaway near Pune, family day trip near Pune, family outing near Pune, family getaway near Pune, family picnic places near Pune, one day family outing near Pune, one day family getaway near Pune, one day trip for family near Pune, couple trip near Pune, couple getaway near Pune, romantic getaway near Pune, one day trip for couples near Pune, places near Pune for couples, places to visit near Pune for couples, one day outing for couples near Pune, weekend getaway near Pune, weekend getaways near Pune, weekend trip near Pune, weekend destinations near Pune, one day weekend trip near Pune, one day weekend getaway near Pune, short trip near Pune, short getaway from Pune, half day outing near Pune, half day getaway near Pune, half day picnic near Pune, 2 day trip near Pune, 2 day picnic near Pune, 2 day getaway near Pune, overnight trip near Pune, one night stay near Pune, overnight getaway near Pune, places to visit and stay near Pune, places to stay near Pune for weekend, one day tour near Pune, one day tour package from Pune, one day travel package near Pune, one day sightseeing near Pune, one day destination near Pune, one day travel destinations near Pune, best places near Pune for one day trip, best places to visit near Pune in one day, places near Pune for day trip, day trip destinations near Pune, day outing destinations near Pune, nature getaway near Pune, nature places near Pune, nature trip near Pune, nature resorts near Pune, countryside getaway near Pune, countryside trip near Pune, agro tourism near Pune, agro tourism getaway near Pune, agri tourism near Pune, farm outing near Pune, farm stay near Pune, picnic resort near Pune, one day picnic resort near Pune, resorts near Pune for weekend, resorts near Pune for couples, resorts near Pune for family, one day resort near Pune, best one day resort near Pune, weekend resort near Pune, best weekend getaway near Pune, family weekend getaway near Pune, couple weekend getaway near Pune, corporate getaway near Pune, group getaway near Pune, friends getaway near Pune, school outing near Pune, best one day getaway from Pune, best short trip from Pune, places to visit around Pune for one day, one day destinations around Pune, weekend destinations around Pune"
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
                            <img src='/images/keyword/30.jpg' alt='img' className='img-fluid' />
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

export default Onedaygetawaynearpune;