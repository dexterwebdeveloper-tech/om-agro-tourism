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

function FamilyResortsNearPune() {


const cardData = {
    keyword: "Family Resorts Near Pune",
    headingDescription: "Om Agro Tourism offers a peaceful countryside destination for families looking for a relaxing day trip, picnic, weekend break, or comfortable stay near Pune. Surrounded by greenery, the property combines farm experiences, homemade food, water activities, games, and outdoor recreation, giving children and adults opportunities to enjoy nature, spend quality time together, and take a refreshing break from busy city life.",

    topPlaces: [
        {
            title: "Swimming Pool",
            description: "The spacious swimming pool provides a refreshing leisure option for families visiting Om Agro Tourism. Surrounded by greenery, it gives children and adults a pleasant place to relax, enjoy the water, and spend quality time together."
        },
        {
            title: "Birds Watching",
            description: "Birds watching offers families a peaceful opportunity to observe beautiful birds in their natural surroundings. The green farm environment creates an enjoyable nature experience for children, parents, and anyone who appreciates outdoor activities."
        },
        {
            title: "Bull Cart Ride",
            description: "A traditional bull cart ride allows families to experience the charm of rural Maharashtra at a relaxed pace. The activity is an enjoyable way to explore the farm surroundings and introduce children to a traditional countryside experience."
        },
        {
            title: "Water Park Activities",
            description: "Water park activities provide an exciting recreational option for families and children. Guests can enjoy refreshing water-based fun while spending time together in a lively yet peaceful countryside destination."
        },
        {
            title: "Tasty home made food",
            description: "Families can enjoy authentic homemade meals prepared with fresh and flavorful ingredients. The farm-style dining experience gives everyone an opportunity to sit together, enjoy traditional food, and relax during their outing or stay."
        },
        {
            title: "Horse Riding",
            description: "Horse riding through the scenic farm landscape offers families an enjoyable outdoor experience. Parents and children can explore the peaceful surroundings while trying an activity that adds something special to their countryside visit."
        },
        {
            title: "Boating",
            description: "Boating provides a calm and enjoyable activity for families who want to spend quality time together. The tranquil water and surrounding greenery create a relaxing experience suitable for a family outing or day trip."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm tours and workshops allow families and children to learn about planting, harvesting, animal care, and everyday agricultural activities. The hands-on rural experience makes the visit both educational and enjoyable."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and outdoor games provide entertainment for children, parents, and family groups. These activities encourage everyone to participate, interact, and enjoy fun moments together during a picnic, day trip, or weekend visit."
        },
        {
            title: "Tractor Ride",
            description: "A tractor ride gives families a fun and distinctive way to explore the farm surroundings. Children especially can enjoy the experience while discovering the agricultural environment and countryside character of the destination."
        }
    ],

    services: [
        {
            name: "Family resorts near pune",
            description: "Family resorts near Pune can provide a comfortable combination of relaxation, food, nature, and activities. Om Agro Tourism offers a peaceful countryside environment where families can enjoy farm experiences, games, water activities, and quality time together."
        },
        {
            name: "Resorts near pune for family get together",
            description: "Resorts near Pune for family get together can make reunions more enjoyable by providing activities and spaces for everyone to interact. Om Agro Tourism offers homemade food, greenery, recreational facilities, and attractions suitable for family groups."
        },
        {
            name: "Resorts near pune for family one day trip",
            description: "Resorts near Pune for family one day trip are useful for families looking for a quick break without planning a long vacation. Om Agro Tourism offers farm tours, games, swimming, boating, food, and outdoor activities for a full-day experience."
        },
        {
            name: "One day resort near pune for family",
            description: "A one day resort near Pune for family can provide a convenient escape from city routines. Om Agro Tourism offers a peaceful destination where families can enjoy homemade meals, recreational activities, farm experiences, and natural surroundings."
        },
        {
            name: "Resorts in pune for family",
            description: "Resorts in Pune for family can be selected according to activities, food, atmosphere, and guest comfort. Om Agro Tourism offers a countryside setting with swimming, boating, games, farm activities, and traditional rural experiences."
        },
        {
            name: "Best resorts near pune for family",
            description: "The best resorts near Pune for family can offer varied activities that appeal to children and adults alike. Om Agro Tourism provides a combination of nature, homemade food, water activities, games, farm tours, and outdoor recreation."
        },
        {
            name: "Best resort near pune for family",
            description: "The best resort near Pune for family can provide a balanced experience of relaxation and entertainment. Om Agro Tourism offers a peaceful farm environment where families can enjoy activities, meals, greenery, and quality time together."
        },
        {
            name: "Adventure resorts near pune for family",
            description: "Adventure resorts near Pune for family can provide exciting outdoor experiences while maintaining a comfortable environment for parents and children. Om Agro Tourism offers water activities, horse riding, tractor rides, games, and other engaging attractions."
        },
        {
            name: "Resorts near pune for family with activities",
            description: "Resorts near Pune for family with activities are ideal for groups that want more than a place to relax. Om Agro Tourism provides swimming, boating, games, farm tours, horse riding, bull cart rides, and other family-friendly experiences."
        },
        {
            name: "Best resort in pune for family",
            description: "The best resort in Pune for family can combine peaceful surroundings with activities, food, and comfortable facilities. Om Agro Tourism provides a refreshing farm destination where children and adults can enjoy a variety of experiences."
        },
        {
            name: "Weekend resorts near pune for family",
            description: "Weekend resorts near Pune for family offer an opportunity to escape busy schedules and spend meaningful time together. Om Agro Tourism provides greenery, homemade food, recreational activities, and farm experiences for a refreshing weekend visit."
        },
        {
            name: "One day picnic resorts near pune for family",
            description: "One day picnic resorts near Pune for family can provide convenient entertainment without requiring an overnight trip. Om Agro Tourism offers games, swimming, boating, farm tours, homemade food, and outdoor activities suitable for family groups."
        },
        {
            name: "Best family resort near pune",
            description: "The best family resort near Pune can provide activities for children while giving adults opportunities to relax. Om Agro Tourism combines nature, food, recreational attractions, and peaceful surroundings for an enjoyable family experience."
        },
        {
            name: "Budget resorts near pune for family",
            description: "Budget resorts near Pune for family can help families plan an enjoyable outing while keeping the trip practical. Om Agro Tourism offers multiple activities and dining experiences in a natural countryside environment suitable for family groups."
        },
        {
            name: "Best resorts around pune for family",
            description: "The best resorts around Pune for family can provide a refreshing environment with attractions for different age groups. Om Agro Tourism offers water activities, games, farm experiences, traditional rides, food, and peaceful green surroundings."
        },
        {
            name: "Best resort for family near pune",
            description: "The best resort for family near Pune can create a balance between recreation, relaxation, and nature. Om Agro Tourism provides an engaging destination where parents and children can participate in activities and enjoy time together."
        },
        {
            name: "Family getaways near pune",
            description: "Family getaways near Pune are ideal for taking a break from busy routines and spending quality time together. Om Agro Tourism offers a countryside atmosphere with farm experiences, homemade food, water activities, games, and nature-based recreation."
        },
        {
            name: "Family picnic resorts near pune",
            description: "Family picnic resorts near Pune can provide convenient options for outdoor meals, games, and recreational activities. Om Agro Tourism offers a peaceful farm environment where families can enjoy a complete picnic experience surrounded by greenery."
        },
        {
            name: "Family resorts near pune for one day trip",
            description: "Family resorts near Pune for one day trip are suitable for families wanting a quick and enjoyable escape. Om Agro Tourism offers several activities, homemade food, nature experiences, and recreational facilities that can fill an entire day."
        },
        {
            name: "One day picnic near pune for family",
            description: "A one day picnic near Pune for family can be planned around food, games, nature, and activities. Om Agro Tourism provides a countryside destination where children and adults can enjoy swimming, boating, farm tours, and other experiences."
        },
        {
            name: "One night stay near pune for family",
            description: "A one night stay near Pune for family can provide more time to relax and enjoy the destination without rushing through activities. Om Agro Tourism offers a peaceful environment with accommodation, food, nature, and recreational experiences."
        },
        {
            name: "Resort for family near pune",
            description: "A resort for family near Pune can offer a convenient setting for relaxation and shared experiences. Om Agro Tourism provides greenery, homemade food, games, swimming, boating, farm activities, and traditional rural attractions."
        },
        {
            name: "One day picnic resort near pune for family",
            description: "A one day picnic resort near Pune for family can provide a complete day of recreation and relaxation. Om Agro Tourism offers activities for children and adults along with homemade food and a peaceful countryside environment."
        },
        {
            name: "One day picnic near pune with family",
            description: "A one day picnic near Pune with family can be an enjoyable way to spend quality time away from city routines. Om Agro Tourism offers farm experiences, water activities, games, nature, and food for a memorable family day."
        },
        {
            name: "One day family resort near pune",
            description: "A one day family resort near Pune can provide convenient recreation without requiring an overnight stay. Om Agro Tourism offers swimming, boating, games, farm tours, horse riding, traditional rides, and homemade food for a fulfilling family outing."
        }
    ],

    tableData: [
        ["Family resorts near pune"],
        ["Resorts near pune for family get together"],
        ["Resorts near pune for family one day trip"],
        ["One day resort near pune for family"],
        ["Resorts in pune for family"],
        ["Best resorts near pune for family"],
        ["Best resort near pune for family"],
        ["Adventure resorts near pune for family"],
        ["Resorts near pune for family with activities"],
        ["Best resort in pune for family"],
        ["Weekend resorts near pune for family"],
        ["One day picnic resorts near pune for family"],
        ["Best family resort near pune"],
        ["Budget resorts near pune for family"],
        ["Best resorts around pune for family"],
        ["Best resort for family near pune"],
        ["Family getaways near pune"],
        ["Family picnic resorts near pune"],
        ["Family resorts near pune for one day trip"],
        ["One day picnic near pune for family"],
        ["One night stay near pune for family"],
        ["Resort for family near pune"],
        ["One day picnic resort near pune for family"],
        ["One day picnic near pune with family"],
        ["One day family resort near pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Family-Friendly Countryside Environment",
            WhyChoosedescription: "Om Agro Tourism provides a peaceful farm atmosphere where parents, children, grandparents, and extended family members can spend quality time together away from busy city surroundings."
        },
        {
            WhyChooseheading: "Activities for Children and Adults",
            WhyChoosedescription: "Swimming, boating, games, horse riding, tractor rides, bull cart rides, bird watching, and farm activities give different age groups enjoyable ways to participate and have fun together."
        },
        {
            WhyChooseheading: "Perfect for One-Day Picnics",
            WhyChoosedescription: "The variety of attractions makes the destination suitable for families planning a one-day picnic where they can enjoy meals, recreation, nature, and multiple activities without needing an extended holiday."
        },
        {
            WhyChooseheading: "Refreshing Natural Surroundings",
            WhyChoosedescription: "Green farm landscapes and peaceful surroundings provide a welcome break from urban routines, giving families an opportunity to relax and enjoy a more natural outdoor environment."
        },
        {
            WhyChooseheading: "Fresh Homemade Meals",
            WhyChoosedescription: "Tasty homemade food gives families a comfortable dining experience with traditional flavors, making mealtimes another enjoyable part of the picnic, day trip, or family stay."
        },
        {
            WhyChooseheading: "Educational Farm Experiences",
            WhyChoosedescription: "Farm tours and workshops can make the visit interesting for children by introducing them to agriculture, planting, harvesting, animal care, and rural life through practical experiences."
        },
        {
            WhyChooseheading: "Options for Day Trips and Stays",
            WhyChoosedescription: "Families can plan a short day outing or spend more time at the destination with accommodation, allowing them to choose an experience according to their schedule and preferred travel plan."
        },
        {
            WhyChooseheading: "Memorable Family Time",
            WhyChoosedescription: "Combining nature, food, water activities, farm experiences, traditional rides, games, and relaxation gives families opportunities to create enjoyable shared memories during their visit."
        }
    ]
};



const faqData = [
    {
        question: "Why consider Om Agri Tourism when looking for family resorts near Pune?",
        answer: "Families seeking a peaceful break from the city can consider Om Agri Tourism for its farm-based atmosphere, greenery and open surroundings. The destination provides opportunities for family members to relax together while enjoying countryside experiences and outdoor recreation."
    },
    {
        question: "What can families do during a visit to Om Agri Tourism?",
        answer: "A family outing can include activities such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. The variety allows children, parents and other family members to choose experiences according to their interests and comfort levels."
    },
    {
        question: "Is Om Agri Tourism suitable for a family day trip near Pune?",
        answer: "Families planning a short countryside escape can consider Om Agri Tourism for a day filled with outdoor experiences and relaxation. Spending time around the farm gives family members a chance to enjoy nature and participate in activities away from their usual urban routine."
    },
    {
        question: "Can children enjoy outdoor activities at Om Agri Tourism?",
        answer: "Children can enjoy suitable activities such as horse riding, boating and swimming, depending on age, comfort and applicable arrangements. Tractor rides, bull cart rides and bird watching can also provide children with interesting experiences in a farm and countryside environment."
    },
    {
        question: "How does Om Agri Tourism provide a different family holiday experience?",
        answer: "Instead of focusing only on conventional indoor entertainment, the destination combines farm surroundings with outdoor recreation and rural experiences. Families can spend time together in the greenery, enjoy shared activities and take a break from the fast pace of city life."
    },
    {
        question: "Can families experience rural life during their stay or visit?",
        answer: "The farm environment allows visitors to experience elements of countryside life through tractor rides, bull cart rides and time spent around the agricultural surroundings. These activities can be particularly interesting for children who have limited exposure to traditional rural settings."
    },
    {
        question: "Is bird watching a good activity for families visiting Om Agri Tourism?",
        answer: "Bird watching can be a peaceful activity for family members of different ages. Parents and children can spend time observing birds and the surrounding environment, adding a nature-focused experience to a day that may also include swimming, boating or other recreational activities."
    },
    {
        question: "Can families enjoy homemade food at Om Agri Tourism?",
        answer: "Homemade food can add a comforting and traditional touch to a family visit. Sharing a meal in the relaxed farm environment gives everyone an opportunity to rest between activities and enjoy quality time together in a countryside setting."
    },
    {
        question: "What should families consider before visiting a resort-style destination near Pune?",
        answer: "Families should consider the ages of children, preferred activities, meal requirements and the amount of time they want to spend at the destination. Checking activity suitability and coordinating important arrangements in advance can make the visit more comfortable and enjoyable."
    },
    {
        question: "What makes Om Agri Tourism a memorable choice among family resorts near Pune?",
        answer: "The combination of farm greenery, outdoor recreation and traditional countryside experiences gives families several ways to enjoy their time together. Swimming, boating, horse riding, bird watching, tractor rides and bull cart rides can turn a simple family getaway into a varied and memorable experience."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Prakash Jagtap",
        feedback:
            "Our family had a wonderful day at Om Agri Tourism. The children were especially excited about the horse riding and tractor ride, while we enjoyed the peaceful greenery and relaxed atmosphere. It was a refreshing break from our regular city routine.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Manisha Kulkarni",
        feedback:
            "We visited Om Agri Tourism with our family and everyone found something enjoyable to do. The children loved boating and bird watching, and the homemade food was a pleasant part of the experience. The farm surroundings made the outing feel peaceful and refreshing.",
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
  "name": "Family Resorts Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/family-resorts-near-pune.webp",
  "description": "Om Agro Tourism offers a welcoming Family Resorts Near Pune experience for families looking for a peaceful getaway surrounded by greenery, open spaces and countryside scenery. Family Resorts Near Pune can be an ideal choice for parents, children, grandparents and relatives who want to spend quality time together away from the city's busy routine. Resorts Near Pune for Family Get Together are suitable for reunions, birthday celebrations, festive gatherings, family functions and casual occasions where relatives want to relax and enjoy shared experiences. Families searching for Resorts Near Pune for Family One Day Trip can plan a convenient day outing that combines nature, recreation, outdoor leisure and meaningful family time without requiring a long journey. A One Day Resort Near Pune for Family can provide an opportunity for different age groups to enjoy a refreshing environment while spending the day together. Resorts in Pune for Family can range from conventional city properties to countryside destinations, and an agro-tourism setting offers a distinctive experience through agriculture, greenery and open surroundings. Families looking for the Best Family Resorts Near Pune can consider a destination where children can enjoy suitable outdoor experiences while adults and senior family members relax in a peaceful atmosphere. Om Agro Tourism provides a family-oriented environment where visitors can enjoy nature, open spaces, agricultural surroundings and recreational possibilities. The destination can suit family picnics, weekend outings, birthday celebrations, family reunions, children's gatherings and short countryside getaways. Open surroundings allow families to spend time together through group activities, outdoor recreation, nature observation and relaxed conversations. Children can experience a rural atmosphere and learn about agricultural surroundings while enjoying a break from their regular urban routine. Seasonal visits provide different countryside experiences, with monsoon offering lush greenery and refreshing scenery, winter creating comfortable conditions for outdoor activities and summer outings being planned around suitable timings. Families can choose a day outing or explore available stay options depending on their requirements and package preferences. The location can also be suitable for extended family groups looking for a destination where relatives from different age groups can gather comfortably. Parents can enjoy a peaceful environment while children have opportunities for outdoor recreation and nature-based experiences. The agro-tourism atmosphere creates a more relaxed alternative to crowded entertainment destinations and gives families a chance to reconnect in a natural setting. Families travelling from Pune and surrounding areas can consider the destination for one-day trips, weekend plans and special family occasions. Food arrangements, activities and group requirements can be discussed according to the size and purpose of the outing. Om Agro Tourism combines countryside leisure, nature, agriculture and family-friendly recreation, making it a suitable option for people searching for Family Resorts Near Pune, Resorts Near Pune for Family Get Together and One Day Resorts Near Pune for Family. With its peaceful surroundings and open environment, the destination can help families create memorable moments together.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/family-resorts-near-pune"
  }
};



    return (
        <div>

<Helmet>
  <title>
    Family Resorts Near Pune | One Day Family Resort & Get-Together Destination | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers family resorts near Pune for one-day trips, family get-togethers, weekend outings, picnics, celebrations and peaceful countryside experiences."
  />

  <meta
    name="keywords"
    content="Family Resorts Near Pune, Family resorts near pune, Resorts near pune for family get together, Resorts near pune for family one day trip, One day resort near pune for family, Resorts in pune for family, Best family resorts near Pune, family resort near Pune, best family resort near Pune, family resorts in Pune, family friendly resorts near Pune, family getaway resorts near Pune, family weekend resorts near Pune, family outing resorts near Pune, family picnic resorts near Pune, one day family resorts near Pune, one day resort near Pune for family, one day picnic resort near Pune for family, one day trip resort near Pune, family day outing resort near Pune, family day trip near Pune, family outing near Pune, family picnic near Pune, family picnic places near Pune, family picnic destination near Pune, family get together resort near Pune, family gathering resort near Pune, family reunion resort near Pune, resorts near Pune for family gathering, resorts near Pune for family function, resorts near Pune for relatives, family celebration resort near Pune, birthday resort near Pune for family, family birthday outing near Pune, family celebration places near Pune, family weekend getaway near Pune, weekend resorts near Pune for family, family holiday resorts near Pune, family stay resorts near Pune, family resorts near Pune for weekend, family resorts near Pune with activities, family resorts near Pune with pool, family resorts near Pune with outdoor activities, family resorts near Pune for children, kids friendly resorts near Pune, child friendly resorts near Pune, senior citizen friendly resorts near Pune, resorts near Pune for kids and family, resorts near Pune for large family, group family resort near Pune, family group outing near Pune, family group picnic near Pune, family resort for one day trip near Pune, one day family outing near Pune, one day family picnic near Pune, one day family getaway near Pune, family day outing places near Pune, places for family outing near Pune, best family outing places near Pune, best family picnic spots near Pune, best family getaway near Pune, nature resorts near Pune for family, nature family resort near Pune, nature resorts near Pune, agro tourism resort near Pune for family, agro tourism near Pune for family, agri tourism near Pune for family, farm resort near Pune for family, farm stay near Pune for family, countryside resort near Pune for family, peaceful family resort near Pune, family resort surrounded by nature near Pune, family resort with activities near Pune, adventure resort near Pune for family, family adventure resort near Pune, family resort for birthday near Pune, family resort for anniversary near Pune, family resort for festival gathering near Pune, family resort for reunion near Pune, family resort for relatives near Pune, family day trip resort near Pune, short family trip near Pune, family vacation resort near Pune, family holiday destination near Pune, best resorts in Pune for family, family resorts near Pimpri Chinchwad, family resorts near PCMC, family resort near Chinchwad, one day family resort near Pimpri Chinchwad"
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
                            <img src='/images/keyword/74.jpg' alt='img' className='img-fluid' />
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

export default FamilyResortsNearPune;