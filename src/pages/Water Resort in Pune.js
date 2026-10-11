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

function WaterresortInPune() {


const cardData = {
    keyword: "Pune Water Resort",
    headingDescription: "Om Agro Tourism offers a refreshing water-based destination experience near Pune for families, friends, and groups looking for recreation and relaxation. Along with water park activities, the property provides a swimming pool, boating, farm experiences, homemade food, games, and outdoor attractions, allowing visitors to combine refreshing activities with a peaceful countryside environment and quality time away from busy city routines.",

    topPlaces: [
        {
            title: "Water Park Activities",
            description: "Water park activities offer a refreshing and entertaining experience for families, friends, and groups visiting Om Agro Tourism. Guests can enjoy water-based recreation in a lively countryside setting while making their day trip more enjoyable and memorable."
        },
        {
            title: "Boating",
            description: "Boating provides a calm and relaxing way to enjoy the tranquil surroundings of the destination. Visitors can spend quality time with family and friends on the water while taking a peaceful break from their regular routine."
        },
        {
            title: "Swimming Pool",
            description: "The spacious swimming pool offers a refreshing place for visitors to cool down and relax. Surrounded by greenery, it provides a comfortable recreational experience for families, children, and groups spending time at the property."
        },
        {
            title: "Tractor Ride",
            description: "A tractor ride gives visitors a fun opportunity to explore the farm surroundings in a distinctive rural style. The experience adds variety to a water-focused outing and lets guests discover the agricultural side of the destination."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and outdoor games provide additional entertainment for visitors between water activities and other attractions. Families and groups can enjoy friendly games, interact with one another, and make the outing more engaging."
        },
        {
            title: "Horse Riding",
            description: "Horse riding through the scenic farm landscape offers an enjoyable outdoor activity alongside the water attractions. Visitors can experience the peaceful countryside while exploring the property at a relaxed pace."
        },
        {
            title: "Tasty home made food",
            description: "Guests can enjoy authentic homemade food prepared with fresh and flavorful ingredients after spending time in the water and participating in other activities. The traditional farm-style dining experience adds comfort to the overall visit."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm tours and workshops allow visitors to explore agricultural activities and learn about planting, harvesting, animal care, and rural practices. The experience provides an interesting change of pace from water-based recreation."
        },
        {
            title: "Bull Cart Ride",
            description: "A traditional bull cart ride introduces visitors to the charm of rural Maharashtra and provides a leisurely way to explore the farm surroundings. It offers families and groups a memorable activity alongside the water park experience."
        },
        {
            title: "Birds Watching",
            description: "Birds watching provides a peaceful nature activity for visitors who want to relax away from the water attractions. The green surroundings offer opportunities to observe beautiful birds in their natural habitat."
        }
    ],

    services: [
        {
            name: "Best Water Resort in Pune",
            description: "The Best Water Resort in Pune can provide more than water-based entertainment by combining recreation, food, nature, and relaxation. Om Agro Tourism offers water park activities along with a swimming pool, boating, games, farm experiences, and homemade meals."
        },
        {
            name: "water park resort in pune",
            description: "A water park resort in Pune can be a convenient choice for families and groups seeking both recreation and relaxation. Om Agro Tourism offers water activities alongside greenery, homemade food, farm attractions, and additional outdoor experiences."
        },
        {
            name: "Best water park in pune",
            description: "Visitors searching for the Best water park in Pune can consider destinations that provide multiple activities rather than water recreation alone. Om Agro Tourism combines water park activities with swimming, boating, games, food, and farm experiences."
        },
        {
            name: "Best water parks near pune",
            description: "The Best water parks near Pune can offer a refreshing day out for families, children, and groups. Om Agro Tourism provides water-based recreation in a countryside environment with additional activities and homemade food."
        },
        {
            name: "Best water resort in pune",
            description: "The Best water resort in Pune can provide a balanced experience of water recreation, nature, food, and relaxation. Om Agro Tourism offers water park activities, swimming, boating, games, and farm attractions for visitors."
        },
        {
            name: "Pune water park resort",
            description: "A Pune water park resort can be ideal for visitors who want to combine refreshing water activities with a relaxing destination experience. Om Agro Tourism provides water attractions, greenery, homemade food, and several recreational options."
        },
        {
            name: "Pune water park and resort",
            description: "Pune water park and resort experiences can provide families and groups with a complete day of recreation. Om Agro Tourism combines water park activities and swimming with boating, farm tours, games, food, and countryside relaxation."
        },
        {
            name: "Resort and waterpark in pune",
            description: "A resort and waterpark in Pune can offer both leisure and entertainment in one destination. Om Agro Tourism provides water activities along with accommodation options, homemade food, greenery, and additional attractions for visitors."
        },
        {
            name: "Resort with water park near pune",
            description: "A resort with water park near Pune can be suitable for families and groups looking for an activity-filled getaway. Om Agro Tourism combines water park activities with swimming, boating, farm experiences, games, and a peaceful environment."
        },
        {
            name: "Water park and resort near pune",
            description: "A water park and resort near Pune can provide a convenient destination for visitors wanting recreation and relaxation together. Om Agro Tourism offers water activities along with natural surroundings, homemade meals, games, and farm attractions."
        },
        {
            name: "Water park and resort in pune",
            description: "Water park and resort in Pune options can be suitable for day outings, family trips, and group recreation. Om Agro Tourism provides refreshing water activities together with swimming, boating, food, games, and countryside experiences."
        },
        {
            name: "Water park and resort pune",
            description: "Water park and resort Pune experiences can offer visitors a combination of entertainment and relaxation. Om Agro Tourism provides water-based activities while also giving guests opportunities to enjoy farm tours, games, food, and nature."
        },
        {
            name: "Water park in ravet pune",
            description: "Visitors searching for a water park in Ravet Pune can also explore countryside destinations around Pune that combine water recreation with other attractions. Om Agro Tourism offers water park activities, swimming, food, games, and farm experiences."
        },
        {
            name: "Water park nearby pune",
            description: "A water park nearby Pune can be a convenient choice for families and groups planning a refreshing outing. Om Agro Tourism offers water-based recreation in a peaceful farm environment with several additional activities."
        },
        {
            name: "Water resort near pune",
            description: "A water resort near Pune can provide a refreshing break from city life with activities suitable for families and groups. Om Agro Tourism offers water park activities, swimming, boating, homemade food, and outdoor recreation."
        },
        {
            name: "best water park in pune",
            description: "The best water park in Pune can provide a varied experience where visitors can enjoy water recreation along with other attractions. Om Agro Tourism offers water activities supported by swimming, boating, games, farm experiences, and food."
        },
        {
            name: "Best water park in pune with price",
            description: "Visitors comparing the Best water park in Pune with price information can consider the activities and facilities included in the overall experience. Om Agro Tourism offers water attractions along with several recreational and dining options."
        },
        {
            name: "Good water parks in pune",
            description: "Good water parks in Pune can provide families and groups with refreshing entertainment for a day out. Om Agro Tourism combines water activities with greenery, swimming, boating, games, farm experiences, and homemade food."
        },
        {
            name: "Top 10 water park in pune",
            description: "Visitors exploring the Top 10 water park in Pune can consider destinations that offer a broader range of recreational experiences. Om Agro Tourism provides water park activities together with swimming, boating, games, farm tours, and rural attractions."
        },
        {
            name: "Top water park in pune",
            description: "A top water park in Pune can offer visitors an enjoyable combination of refreshing activities and leisure. Om Agro Tourism provides water recreation in a peaceful countryside environment with additional attractions for families and groups."
        },
        {
            name: "Top water parks in Pune",
            description: "The top water parks in Pune can be compared according to activities, surroundings, food, and overall visitor experience. Om Agro Tourism offers water-based recreation along with farm activities, games, homemade food, and natural surroundings."
        },
        {
            name: "Water Activity Resort Near Pune",
            description: "A Water Activity Resort Near Pune can provide an exciting destination for families, friends, and groups looking for active recreation. Om Agro Tourism offers water park activities and swimming along with boating, games, farm experiences, and outdoor attractions."
        },
        {
            name: "Resort with water park near pune",
            description: "A resort with water park near Pune can provide visitors with a combination of water entertainment and relaxation. Om Agro Tourism offers water activities, swimming, homemade food, farm experiences, and recreational options in a peaceful setting."
        },
        {
            name: "water park and resort near pune",
            description: "A water park and resort near Pune can be suitable for families and groups planning a refreshing day or leisure visit. Om Agro Tourism combines water attractions with greenery, food, boating, games, and countryside experiences."
        },
        {
            name: "Water park resort near Pune",
            description: "A Water park resort near Pune can offer a convenient destination for visitors who want water recreation along with other leisure activities. Om Agro Tourism provides water park activities, swimming, boating, homemade food, games, and farm attractions."
        }
    ],

    tableData: [
        ["Best Water Resort in Pune"],
        ["water park resort in pune"],
        ["Best water park in pune"],
        ["Best water parks near pune"],
        ["Best water resort in pune"],
        ["Pune water park resort"],
        ["Pune water park and resort"],
        ["Resort and waterpark in pune"],
        ["Resort with water park near pune"],
        ["Water park and resort near pune"],
        ["Water park and resort in pune"],
        ["Water park and resort pune"],
        ["Water park in ravet pune"],
        ["Water park nearby pune"],
        ["Water resort near pune"],
        ["best water park in pune"],
        ["Best water park in pune with price"],
        ["Good water parks in pune"],
        ["Top 10 water park in pune"],
        ["Top water park in pune"],
        ["Top water parks in Pune"],
        ["Water Activity Resort Near Pune"],
        ["Resort with water park near pune"],
        ["water park and resort near pune"],
        ["Water park resort near Pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Refreshing Water-Based Recreation",
            WhyChoosedescription: "Om Agro Tourism provides water park activities and a swimming pool where families, friends, and groups can enjoy refreshing recreation while spending quality time in a peaceful countryside environment."
        },
        {
            WhyChooseheading: "More Than a Water Park",
            WhyChoosedescription: "Visitors can combine water activities with boating, games, horse riding, tractor rides, farm tours, bull cart rides, and bird watching, creating a more varied day-out experience."
        },
        {
            WhyChooseheading: "Suitable for Families and Groups",
            WhyChoosedescription: "The range of attractions provides entertainment for children and adults, making the destination suitable for family outings, friend groups, school groups, and other visitors looking for shared recreational experiences."
        },
        {
            WhyChooseheading: "Peaceful Farm Surroundings",
            WhyChoosedescription: "Greenery and open farm landscapes provide a refreshing backdrop for water-based recreation and relaxation, giving visitors a welcome break from crowded urban surroundings."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty homemade food adds a traditional dining experience to the water resort visit, allowing guests to enjoy fresh meals and relax together after participating in recreational activities."
        },
        {
            WhyChooseheading: "Variety of Outdoor Activities",
            WhyChoosedescription: "Boating, horse riding, tractor rides, bull cart rides, bird watching, farm tours, and games give visitors plenty of alternatives when they want a break from swimming and water park activities."
        },
        {
            WhyChooseheading: "Ideal for a Full-Day Outing",
            WhyChoosedescription: "The combination of water attractions, food, farm experiences, and recreational activities allows families and groups to spend an entire day enjoying different experiences without depending on a single activity."
        },
        {
            WhyChooseheading: "Memorable Countryside Experience",
            WhyChoosedescription: "Combining water recreation with nature, traditional rural activities, homemade food, and farm experiences creates a distinctive outing where visitors can relax, have fun, and make lasting memories."
        }
    ]
};



const faqData = [
    {
        question: "Can Om Agri Tourism be considered as a water resort in Pune?",
        answer: "Visitors searching for a water-focused recreational getaway can consider Om Agri Tourism for its swimming and boating experiences along with its peaceful farm surroundings. The destination combines water-based recreation with greenery and countryside activities for a refreshing day away from the city."
    },
    {
        question: "What water activities can visitors enjoy at Om Agri Tourism?",
        answer: "Swimming and boating are among the experiences that can add a water-based element to a visit. Guests can combine these activities with other countryside options such as horse riding, tractor rides, bull cart rides and bird watching for a varied outing."
    },
    {
        question: "Is Om Agri Tourism suitable for a family water outing near Pune?",
        answer: "Families looking for an outdoor getaway can consider the destination for suitable water recreation along with farm-based experiences. Children and adults can enjoy different activities according to age, comfort and applicable safety arrangements while spending time in the open surroundings."
    },
    {
        question: "Can children enjoy swimming at Om Agri Tourism?",
        answer: "Swimming can be an enjoyable activity for children when it is appropriate for their age and abilities. Parents and accompanying adults should follow the destination's safety instructions and maintain suitable supervision so children can participate comfortably and responsibly."
    },
    {
        question: "Does Om Agri Tourism offer more than water-based recreation?",
        answer: "The experience extends beyond swimming and boating, with options such as horse riding, tractor rides, bull cart rides and bird watching. This variety allows visitors to alternate between active water recreation and slower countryside experiences during their outing."
    },
    {
        question: "Can boating be included in a Pune water resort-style outing?",
        answer: "Boating can provide a relaxing and enjoyable part of the visit for guests who want to spend time around the water. Combining a boating experience with swimming and farm activities can create a more varied itinerary for families, friends or small groups."
    },
    {
        question: "What makes Om Agri Tourism different from a typical water resort in Pune?",
        answer: "Along with water-based recreation, the destination offers a distinct farm and countryside atmosphere. Visitors can enjoy greenery, rural experiences and activities such as tractor rides or bull cart rides, giving the outing a broader nature-oriented character than a water-focused visit alone."
    },
    {
        question: "Can friends plan a fun water outing at Om Agri Tourism?",
        answer: "Friends can enjoy a combination of swimming, boating and outdoor recreation during a planned group visit. Horse riding, tractor rides and other countryside experiences can add variety, while the farm surroundings provide a relaxed environment for spending time together."
    },
    {
        question: "What should visitors consider before planning water activities at Om Agri Tourism?",
        answer: "Guests should consider their swimming ability, age suitability and personal comfort before participating in water activities. Following safety instructions and maintaining appropriate supervision for children can help make swimming and boating experiences more enjoyable."
    },
    {
        question: "Why can Om Agri Tourism be a refreshing water getaway near Pune?",
        answer: "The combination of swimming, boating, greenery and countryside recreation gives visitors several ways to relax and have fun. A day at Om Agri Tourism can provide a welcome break from the urban routine while allowing guests to enjoy both water activities and farm experiences."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sameer Joshi",
        feedback:
            "We visited Om Agri Tourism with friends for a refreshing water outing and had a great time. Swimming and boating were the highlights of our visit, while the farm surroundings gave us plenty of space to relax. The combination of water recreation and nature made the day enjoyable.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Komal Shinde",
        feedback:
            "Our family really enjoyed the water activities at Om Agri Tourism. The children were excited about swimming and boating, and we also spent time exploring the peaceful farm surroundings. It was a pleasant getaway with a nice mix of recreation and countryside experiences.",
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
  "name": "Pune Water Resort",
  "image": "https://www.omagrotourism.com/assets/images/pune-water-resort.webp",
  "description": "Om Agro Tourism offers a refreshing Pune Water Resort experience for families, friends, couples, school groups and corporate teams looking for a combination of water-based recreation, countryside surroundings and a relaxing day outing. Visitors searching for the Best Water Resort in Pune can consider a destination where leisure, outdoor recreation and nature can come together in one convenient setting. A Water Park Resort in Pune can be suitable for families who want to enjoy water recreation while also having access to resort-style surroundings and open spaces. People comparing the Best Water Park in Pune and Best Water Parks Near Pune can explore options that provide a refreshing break from the city's busy routine. The Best Water Resort in Pune can be especially appealing to visitors planning family picnics, weekend outings, group gatherings and seasonal recreation. Pune Water Park Resort and Pune Water Park and Resort searches are often associated with destinations where visitors can combine water activities with food, relaxation and outdoor leisure. A Resort and Waterpark in Pune can provide a convenient option for families and groups who want multiple recreational experiences at one destination. Visitors looking for a Resort With Water Park Near Pune can consider an agro-tourism environment where water recreation can be combined with greenery, agricultural surroundings and open countryside spaces. Om Agro Tourism provides a relaxed destination atmosphere suitable for families, children and groups planning a refreshing day away from the city. Water-based recreation can be combined with outdoor activities, nature experiences, group games and leisure time according to the available facilities and seasonal arrangements. Families can enjoy a change of scenery while children experience an entertaining outdoor environment. Corporate teams can also consider the destination for employee outings, team recreation and informal group gatherings. School groups and larger family groups can plan outings according to their schedule, group strength and activity requirements. Monsoon brings lush greenery and refreshing countryside scenery, while summer can be an especially attractive period for visitors looking for water-based recreation and a cooling day outing. Winter can offer comfortable conditions for enjoying the surrounding countryside and other outdoor experiences. The destination can suit one-day picnics, family get-togethers, children's outings, weekend recreation and group celebrations. Food arrangements, group requirements, activity access and available packages can be discussed according to the planned visit. Visitors from Pune, Pimpri Chinchwad and nearby areas can consider the destination for a convenient recreational escape without requiring an extended trip. The combination of water recreation, nature, agriculture and open surroundings creates an experience different from a conventional city entertainment venue. Om Agro Tourism can therefore be considered by families and groups searching for a Pune Water Resort, Water Park Resort in Pune, Pune Water Park and Resort or Resort With Water Park Near Pune. With its recreational atmosphere and countryside setting, the destination offers an enjoyable option for visitors planning a refreshing water-focused outing near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/pune-water-resort"
  }
};







    return (
        <div>
<Helmet>
  <title>
    Pune Water Resort | Best Water Park & Resort Near Pune | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers a refreshing Pune water resort experience with water recreation, family outings, picnics, group activities and peaceful countryside surroundings."
  />

  <meta
    name="keywords"
    content="Pune Water Resort, Best Water Resort in Pune, water park resort in pune, Best water park in pune, Best water parks near pune, Best water resort in pune, Pune water park resort, Pune water park and resort, Resort and waterpark in pune, Resort with water park near Pune, water resorts near Pune, water park near Pune, water park resorts near Pune, best water park resorts near Pune, best water resorts near Pune, water park and resort near Pune, water resort near Pune, water park near Pune for family, water resort near Pune for family, water park near Pune for couples, water resort near Pune for couples, water park near Pune for kids, water park near Pune for children, family water park near Pune, family water resort near Pune, kids water park near Pune, kids water resort near Pune, water park Pune for one day picnic, one day water park near Pune, one day water resort near Pune, water park for family outing near Pune, water resort for family outing near Pune, water park picnic near Pune, water park picnic resort near Pune, water park with resort near Pune, resort with water park near Pune, resort with swimming pool near Pune, water resort with activities near Pune, water park with activities near Pune, water recreation near Pune, water activity resort near Pune, best water recreation near Pune, water park destination near Pune, water resort destination near Pune, water park around Pune, water park in Pune near me, water park near Pune city, Pune water park near me, water park near Pimpri Chinchwad, water resort near Pimpri Chinchwad, water park near PCMC, water resort near PCMC, water park near Chinchwad, water resort near Chinchwad, Pune water park for family, Pune water resort for family, Pune water park for kids, Pune water park for weekend, Pune water resort for weekend, Pune water park day outing, Pune water resort day outing, water park day trip near Pune, water resort day trip near Pune, water park one day trip near Pune, water resort one day trip near Pune, water park for corporate outing near Pune, water resort for corporate outing near Pune, corporate water park near Pune, team outing water resort near Pune, school picnic water park near Pune, school water park resort near Pune, water park for school picnic Pune, family picnic water park Pune, best family water resort Pune, best family water park near Pune, water park resort for group outing Pune, group water resort near Pune, group water park near Pune, water park resort for birthday Pune, water resort for birthday party near Pune, water park celebration venue near Pune, nature water resort near Pune, agro tourism water resort near Pune, water park agro tourism near Pune, countryside water resort near Pune, peaceful water resort near Pune, resort with water activities near Pune, water park with outdoor activities near Pune, water recreation resort near Pune"
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
                            <img src='/images/keyword/75.jpg' alt='img' className='img-fluid' />
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

export default WaterresortInPune;