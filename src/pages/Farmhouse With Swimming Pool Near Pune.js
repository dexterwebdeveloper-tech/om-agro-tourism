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

function FarmhousewithSwimmingPoolNearPune() {


const cardData = {
    keyword: "Farmhouse With Swimming Pool Near Pune",
    headingDescription: "Om Agro Tourism is a refreshing countryside destination for families, couples, friends, and groups searching for a farmhouse experience with swimming and outdoor activities near Pune. Visitors can enjoy the swimming pool along with farm tours, boating, horse riding, tractor rides, bull cart rides, bird watching, games, homemade food, and other attractions, making it suitable for one-day picnics, short getaways, and relaxing time away from the city.",

    topPlaces: [
        {
            title: "Swimming Pool",
            description: "The spacious Swimming Pool is a refreshing attraction for guests looking to relax, cool down, and enjoy quality time with family or friends. Surrounded by greenery, it adds a comfortable recreational experience to a farmhouse-style outing."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops allow visitors to experience the agricultural side of the property while learning about planting, harvesting, animal care, and everyday farm activities. This makes the farmhouse visit more engaging and connected to rural life."
        },
        {
            title: "Tasty home made food",
            description: "Tasty home made food gives visitors the opportunity to enjoy fresh and comforting meals during their farmhouse outing. The traditional farm-style dining experience complements a relaxed day spent with family, friends, or groups."
        },
        {
            title: "Boating",
            description: "Boating offers a peaceful water-based activity for visitors who want to add something different to their farmhouse experience. Guests can enjoy tranquil surroundings and spend relaxing moments on the water with their loved ones."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide additional entertainment for families and groups visiting the farmhouse. Children and adults can participate in friendly activities together, making a one-day picnic more enjoyable and interactive."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding gives visitors an opportunity to explore the scenic farm landscape while enjoying a pleasant outdoor activity. It adds variety to a farmhouse getaway and offers a memorable countryside experience."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride introduces visitors to a traditional rural experience while allowing them to explore the farm surroundings at a leisurely pace. It is a distinctive attraction for families and groups looking to experience countryside life."
        },
        {
            title: "Birds Watching",
            description: "Birds Watching provides a peaceful nature activity for guests who enjoy spending time outdoors. The green farm environment creates opportunities to observe beautiful birds while taking a relaxing break from swimming and other activities."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride offers a unique way to explore the farm surroundings and experience the charm of rural life. Visitors can enjoy this activity as part of a relaxed farmhouse outing with family, friends, or groups."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities add more fun to a farmhouse outing for families, children, and groups. Visitors can combine refreshing water recreation with swimming, farm experiences, games, food, and other attractions available at the property."
        }
    ],

    services: [
        {
            name: "Farmhouse with swimming pool near pune",
            description: "A Farmhouse with swimming pool near Pune can be an ideal choice for families and groups looking for relaxation and recreation in one destination. Om Agro Tourism combines swimming with farm experiences, games, boating, food, and outdoor activities."
        },
        {
            name: "Farm house with swimming pool in pune",
            description: "A Farm house with swimming pool in Pune can provide a refreshing environment for a family outing or group gathering. Om Agro Tourism offers a peaceful farm setting with swimming, homemade food, games, boating, and countryside attractions."
        },
        {
            name: "Farmhouse in pune with swimming pool",
            description: "A Farmhouse in Pune with swimming pool can offer visitors a relaxing break from regular city routines. Om Agro Tourism provides swimming along with farm tours, horse riding, boating, games, homemade food, and other recreational experiences."
        },
        {
            name: "Farmhouse near khadakwasla with swimming pool",
            description: "A Farmhouse near Khadakwasla with swimming pool can be suitable for visitors planning a refreshing day outing near Pune. Om Agro Tourism combines swimming with countryside surroundings, farm activities, games, boating, and homemade meals."
        },
        {
            name: "Farmhouse near pune with swimming pool",
            description: "A Farmhouse near Pune with swimming pool provides a convenient option for visitors wanting relaxation and outdoor recreation. Om Agro Tourism offers a combination of swimming, farm experiences, games, boating, horse riding, and food."
        },
        {
            name: "Farmhouse with swimming pool on rent near pune",
            description: "A Farmhouse with swimming pool on rent near Pune can be considered by groups planning a private-style recreational outing. Om Agro Tourism provides swimming along with several activities and countryside attractions for families and groups."
        },
        {
            name: "farmhouse with swimming pool near pimpri chinchwad",
            description: "A farmhouse with swimming pool near Pimpri Chinchwad can provide a refreshing escape from the busy urban environment. Om Agro Tourism offers swimming, farm tours, boating, games, horse riding, homemade food, and peaceful surroundings."
        },
        {
            name: "Farmhouse near pune for one day picnic",
            description: "A Farmhouse near Pune for one day picnic can be a convenient choice for families, friends, and groups. Om Agro Tourism offers swimming, games, boating, farm tours, homemade food, and outdoor attractions for a complete day outing."
        },
        {
            name: "Farm house in pune for one day picnic",
            description: "A Farm house in Pune for one day picnic can provide visitors with a combination of relaxation and activities. Om Agro Tourism offers a peaceful farm environment with swimming, games, boating, horse riding, and homemade food."
        },
        {
            name: "One day farmhouse near pune",
            description: "A One day farmhouse near Pune can provide an easy countryside escape without requiring a long stay. Om Agro Tourism combines farm surroundings with swimming, outdoor activities, games, boating, food, and nature experiences."
        },
        {
            name: "One day picnic farm house near pune",
            description: "A One day picnic farm house near Pune can be suitable for families and groups wanting a full day of recreation. Om Agro Tourism provides swimming, farm tours, boating, games, horse riding, homemade food, and other attractions."
        },
        {
            name: "One day trip farm house near pune",
            description: "A One day trip farm house near Pune can offer visitors a refreshing break from their daily routine. Om Agro Tourism provides a range of activities including swimming, boating, games, farm experiences, and traditional rural attractions."
        },
        {
            name: "farmhouse",
            description: "A farmhouse experience can provide a peaceful environment for spending quality time with family and friends. Om Agro Tourism offers farm surroundings, swimming, boating, games, horse riding, homemade food, and several countryside activities."
        },
        {
            name: "farm house near me",
            description: "Visitors searching for a farm house near me can consider a destination that combines relaxation with outdoor recreation. Om Agro Tourism offers swimming, farm tours, boating, games, nature activities, and homemade food in a peaceful setting."
        },
        {
            name: "Near by farmhouse",
            description: "A Near by farmhouse can be a convenient option for visitors planning a short escape from city life. Om Agro Tourism offers a countryside environment with swimming, farm activities, games, boating, horse riding, and food experiences."
        },
        {
            name: "Near me farmhouse",
            description: "Visitors searching for a Near me farmhouse can enjoy a peaceful farm-based outing with several recreational options. Om Agro Tourism provides swimming, boating, farm tours, games, horse riding, and homemade food for families and groups."
        },
        {
            name: "Best farm house near me",
            description: "The Best farm house near me can be selected based on its surroundings, activities, food, and suitability for different groups. Om Agro Tourism combines a peaceful farm environment with swimming, boating, games, farm tours, and outdoor recreation."
        },
        {
            name: "farmhouse resort near pune",
            description: "A farmhouse resort near Pune can offer a combination of relaxation, nature, and recreational activities. Om Agro Tourism provides swimming, farm experiences, boating, horse riding, games, homemade food, and peaceful countryside surroundings."
        },
        {
            name: "Farm house stay near pune",
            description: "A Farm house stay near Pune can provide visitors with a relaxing countryside experience away from busy city routines. Om Agro Tourism offers farm surroundings, swimming, boating, games, nature activities, and homemade food for a memorable visit."
        },
        {
            name: "Lakeside farmhouse near Pune",
            description: "A Lakeside farmhouse near Pune can appeal to visitors who enjoy peaceful water surroundings and outdoor recreation. Om Agro Tourism offers boating and other countryside activities that complement a relaxing farmhouse-style experience."
        }
    ],

    tableData: [
        ["Farmhouse with swimming pool near pune"],
        ["Farm house with swimming pool in pune"],
        ["Farmhouse in pune with swimming pool"],
        ["Farmhouse near khadakwasla with swimming pool"],
        ["Farmhouse near pune with swimming pool"],
        ["Farmhouse with swimming pool on rent near pune"],
        ["farmhouse with swimming pool near pimpri chinchwad"],
        ["Farmhouse near pune for one day picnic"],
        ["Farm house in pune for one day picnic"],
        ["One day farmhouse near pune"],
        ["One day picnic farm house near pune"],
        ["One day trip farm house near pune"],
        ["farmhouse"],
        ["farm house near me"],
        ["Near by farmhouse"],
        ["Near me farmhouse"],
        ["Best farm house near me"],
        ["farmhouse resort near pune"],
        ["Farm house stay near pune"],
        ["Lakeside farmhouse near Pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Refreshing Swimming Pool",
            WhyChoosedescription: "The spacious swimming pool provides a refreshing recreational option for families, couples, friends, and groups looking to relax and cool down while enjoying the peaceful farm surroundings."
        },
        {
            WhyChooseheading: "Ideal for One-Day Picnics",
            WhyChoosedescription: "Swimming, games, boating, farm tours, homemade food, and outdoor activities make the destination suitable for families and groups planning a complete one-day picnic near Pune."
        },
        {
            WhyChooseheading: "Peaceful Farm Environment",
            WhyChoosedescription: "Open farm landscapes and greenery create a relaxing atmosphere where visitors can take a break from traffic, noise, and busy city routines while spending quality time with their loved ones."
        },
        {
            WhyChooseheading: "Wide Range of Activities",
            WhyChoosedescription: "Guests can enjoy horse riding, tractor rides, bull cart rides, boating, bird watching, farm tours, water park activities, and indoor and outdoor games along with swimming."
        },
        {
            WhyChooseheading: "Family-Friendly Experience",
            WhyChoosedescription: "The variety of attractions allows children and adults to participate in different activities together, making the destination suitable for family outings, group gatherings, and recreational day trips."
        },
        {
            WhyChooseheading: "Traditional Homemade Food",
            WhyChoosedescription: "Tasty homemade food adds a comforting farm-style dining experience to the visit, allowing guests to enjoy fresh meals after spending time in the swimming pool and participating in outdoor activities."
        },
        {
            WhyChooseheading: "Rural and Nature Experiences",
            WhyChoosedescription: "Farm tours, bird watching, bull cart rides, and tractor rides allow visitors to experience the countryside and learn more about rural activities while enjoying their farmhouse-style getaway."
        },
        {
            WhyChooseheading: "Complete Countryside Getaway",
            WhyChoosedescription: "Combining swimming, nature, farm activities, boating, food, games, and outdoor recreation allows visitors to enjoy more than a conventional farmhouse visit and create memorable moments together."
        }
    ]
};



const faqData = [
    {
        question: "Can Om Agri Tourism be considered a farmhouse with a swimming pool near Pune?",
        answer: "Om Agri Tourism provides a farm-oriented setting where visitors can enjoy swimming along with a variety of countryside activities. The combination of open greenery, recreational experiences and a peaceful atmosphere makes it an appealing option for people searching for a farmhouse-style getaway near Pune."
    },
    {
        question: "What can guests do at Om Agri Tourism besides using the swimming pool?",
        answer: "A day at the property can include boating, horse riding, tractor rides, bull cart rides and bird watching in addition to swimming. These activities allow guests to enjoy both recreation and rural experiences instead of limiting their visit to pool time."
    },
    {
        question: "Is Om Agri Tourism suitable for a family day out near Pune?",
        answer: "Families can enjoy a relaxed outing by spending time around the farm and selecting activities that appeal to different age groups. Swimming can be combined with boating, horse riding, traditional rides and bird watching to create a varied day for parents and children."
    },
    {
        question: "What type of swimming experience can visitors enjoy at Om Agri Tourism?",
        answer: "Swimming gives visitors an opportunity to cool off and add a refreshing water activity to their countryside visit. Guests can plan pool time alongside other outdoor experiences, making the visit more diverse than a simple trip focused only on swimming."
    },
    {
        question: "How is a farmhouse-style outing at Om Agri Tourism different from a regular resort visit?",
        answer: "The farm surroundings bring a more rural character to the outing, with activities connected to nature and countryside life. Visitors can enjoy swimming while also experiencing tractor rides, bull cart rides, horse riding, boating and bird watching in a relaxed environment."
    },
    {
        question: "Can friends spend a full day at Om Agri Tourism near Pune?",
        answer: "Friends can create an activity-filled day by moving between swimming, boating and horse riding, followed by traditional countryside experiences such as tractor and bull cart rides. The open farm atmosphere also provides space to relax, enjoy homemade food and spend time together."
    },
    {
        question: "Does Om Agri Tourism provide rural experiences along with swimming?",
        answer: "Yes, the destination combines water-based recreation with activities that reflect the countryside environment. Tractor rides and bull cart rides offer a traditional touch, while bird watching gives visitors another way to explore the natural surroundings during their visit."
    },
    {
        question: "Is Om Agri Tourism a good option for a weekend farmhouse outing near Pune?",
        answer: "Those planning a short weekend escape can use the farm setting as a place to disconnect from the city's routine and enjoy outdoor activities. Swimming, boating, horse riding and countryside rides provide multiple ways to make the day engaging for families, friends and groups."
    },
    {
        question: "Can children enjoy activities at a farmhouse with a swimming pool near Pune?",
        answer: "Children can enjoy the variety of experiences available at Om Agri Tourism, subject to appropriate supervision and activity suitability. Swimming, boating, tractor rides, bull cart rides and bird watching can introduce them to both recreational activities and a different rural environment."
    },
    {
        question: "Why choose Om Agri Tourism for a farmhouse experience with a swimming pool near Pune?",
        answer: "The destination brings together swimming, farm greenery and several outdoor experiences in one countryside setting. With boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food also available as part of the experience, visitors can enjoy a refreshing and varied outing near Pune."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Nikhil Joshi",
        feedback:
            "We wanted a farmhouse-style place near Pune where everyone in our family could enjoy different activities. Om Agri Tourism was a great choice because we spent time swimming and boating, while the children loved the tractor and bull cart rides. The greenery and homemade food made the day even more enjoyable.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Ritu Mahajan",
        feedback:
            "Our weekend visit to Om Agri Tourism was peaceful and full of activities. Swimming was refreshing, and we also enjoyed horse riding and bird watching around the farm. The countryside atmosphere felt very relaxing and gave our family a welcome break from the usual city routine.",
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
  "name": "Farmhouse With Swimming Pool Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/farmhouse-with-swimming-pool-near-pune.webp",
  "description": "Om Agro Tourism offers a relaxing Farmhouse With Swimming Pool Near Pune experience for families, friends, couples, corporate groups and visitors planning a private-style countryside getaway with outdoor recreation. Farmhouse With Swimming Pool Near Pune is a popular choice for people who want to spend quality time away from the city's busy routine while enjoying open spaces, greenery and a refreshing swimming pool environment. Visitors searching for a Farm House With Swimming Pool in Pune can consider a peaceful agro-tourism setting where leisure, nature and recreational activities can be enjoyed together. A Farmhouse in Pune With Swimming Pool can suit family get-togethers, birthday celebrations, weekend outings, group gatherings and casual celebrations. People looking for a Farmhouse Near Khadakwasla With Swimming Pool can also consider destinations around Pune that provide a countryside atmosphere, open surroundings and convenient access for a day outing or short getaway. A Farmhouse Near Pune With Swimming Pool can be particularly suitable for visitors who want a refreshing escape without travelling to a distant holiday destination. Om Agro Tourism combines agricultural surroundings with outdoor leisure, creating an environment where guests can enjoy greenery, open spaces and a relaxed rural atmosphere along with available water-based recreation. Families can plan children's outings, family picnics and get-togethers, while couples can enjoy peaceful surroundings and quality time away from crowded city areas. Friends can use the destination for group recreation, birthday plans, weekend gatherings and casual celebrations. Corporate teams can consider a farmhouse outing for employee gatherings, team interaction and informal group activities. The swimming pool can provide a refreshing recreational option, subject to applicable safety guidelines, weather conditions and available facilities. Visitors can also enjoy suitable outdoor games, nature observation, agricultural surroundings and countryside leisure according to the selected package. Monsoon visits offer lush greenery and refreshing scenery, winter provides comfortable conditions for outdoor activities, while summer can be particularly appealing for visitors planning pool-focused recreation during suitable timings. The farmhouse environment can accommodate different outing purposes depending on group size, food preferences, activity requirements and available arrangements. Guests can discuss package details, pool access, meals, group requirements and timing while planning their visit. Om Agro Tourism provides an alternative to conventional city-based entertainment by combining farmhouse-style leisure, agriculture, nature and recreation in one destination. Visitors from Pune, Pimpri Chinchwad, Khadakwasla and surrounding areas can consider the location for one-day outings, weekend plans, family gatherings and group celebrations. With its open countryside setting and swimming-pool-oriented recreation, Om Agro Tourism can be a suitable option for people searching for Farmhouse With Swimming Pool Near Pune, Farm House With Swimming Pool in Pune, Farmhouse in Pune With Swimming Pool, Farmhouse Near Khadakwasla With Swimming Pool and Farmhouse Near Pune With Swimming Pool.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/farmhouse-with-swimming-pool-near-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Farmhouse With Swimming Pool Near Pune | Family, Party & Pool Farmhouse | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers a farmhouse with swimming pool near Pune for family outings, weekend getaways, parties, group gatherings and relaxing countryside experiences."
  />

  <meta
    name="keywords"
    content="Farmhouse With Swimming Pool Near Pune, Farmhouse with swimming pool near pune, Farm house with swimming pool in pune, Farmhouse in pune with swimming pool, Farmhouse near khadakwasla with swimming pool, Farmhouse near pune with swimming pool, Farmhouse with swimming pool, farmhouse with pool near Pune, farmhouse with swimming pool in Pune, farm house with pool in Pune, farmhouse near Pune with pool, farmhouse near Pune for one day, farmhouse near Pune for family, farmhouse near Pune for couples, farmhouse near Pune for friends, farmhouse near Pune for party, farmhouse near Pune for birthday party, farmhouse with pool near Pune for party, farmhouse with swimming pool near Pune for party, farmhouse with swimming pool near Pune for family, farmhouse with swimming pool near Pune for couples, farmhouse with pool near Pune for family, family farmhouse with swimming pool near Pune, family farmhouse near Pune with pool, private farmhouse with swimming pool near Pune, private farmhouse near Pune for one day, private farmhouse with pool near Pune, luxury farmhouse with swimming pool near Pune, luxury farmhouse near Pune with pool, farmhouse resort with swimming pool near Pune, farmhouse resort near Pune with pool, farm resort with swimming pool near Pune, farm stay with swimming pool near Pune, farmhouse stay with swimming pool near Pune, farmhouse for one day near Pune with swimming pool, one day farmhouse near Pune with pool, one day farmhouse with swimming pool near Pune, farmhouse rental near Pune with swimming pool, farmhouse on rent near Pune with swimming pool, farmhouse for rent near Pune with pool, farmhouse on rent Pune with swimming pool, farmhouse booking near Pune with swimming pool, farmhouse booking Pune with pool, farmhouse near Pune for weekend with swimming pool, weekend farmhouse near Pune with pool, weekend farmhouse stay near Pune, farmhouse getaway near Pune with swimming pool, farmhouse near Pune for weekend, farmhouse with swimming pool near Pimpri Chinchwad, farmhouse near Pimpri Chinchwad with pool, farmhouse with swimming pool near PCMC, farmhouse near PCMC with swimming pool, farmhouse near Wakad with swimming pool, farmhouse near Hinjewadi with swimming pool, farmhouse near Chinchwad with swimming pool, farmhouse near Bhosari with swimming pool, farmhouse near Kothrud with swimming pool, farmhouse near Baner with swimming pool, farmhouse near Bavdhan with swimming pool, farmhouse near Mulshi with swimming pool, farmhouse near Khadakwasla with pool, farmhouse near Khadakwasla Pune with swimming pool, farmhouse near Panshet with swimming pool, farmhouse near Sinhagad with swimming pool, farmhouse near Lavasa with swimming pool, farmhouse near Lonavala with swimming pool, farmhouse with swimming pool near Pune for corporate outing, corporate farmhouse near Pune with swimming pool, corporate outing farmhouse near Pune, team outing farmhouse near Pune with pool, farmhouse for team outing near Pune, farmhouse with pool for team outing Pune, farmhouse for birthday party near Pune with swimming pool, birthday farmhouse near Pune with pool, farmhouse for celebration near Pune with swimming pool, farmhouse for family gathering near Pune with swimming pool, farmhouse for get together near Pune with pool, farmhouse for reunion near Pune with swimming pool, farmhouse for picnic near Pune with pool, one day picnic farmhouse near Pune with swimming pool, picnic farmhouse near Pune with pool, farmhouse for day outing near Pune with swimming pool, farmhouse for group outing near Pune with pool, farmhouse with activities near Pune, farmhouse with swimming pool and activities near Pune, farmhouse with pool and garden near Pune, farmhouse with swimming pool and garden near Pune, farmhouse with outdoor activities near Pune, nature farmhouse with swimming pool near Pune, countryside farmhouse with pool near Pune, agro tourism farmhouse with swimming pool near Pune, agro tourism farm house near Pune with pool, farm house resort near Pune with swimming pool, best farmhouse with swimming pool near Pune, best farmhouse near Pune with swimming pool, best farm house with pool in Pune, affordable farmhouse with swimming pool near Pune, budget farmhouse near Pune with pool, peaceful farmhouse with swimming pool near Pune, farmhouse near Pune for family outing with pool"
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
                            <img src='/images/keyword/81.jpg' alt='img' className='img-fluid' />
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

export default FarmhousewithSwimmingPoolNearPune;