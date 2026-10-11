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

function Agrotourismnearpune() {


const cardData = {
    keyword: "Agro Tourism Near Pune for Family",
    headingDescription: "Looking for Agro Tourism Near Pune for Family for a one-day picnic, weekend outing, farm stay, or activity-filled getaway? Om Agro Tourism offers families an opportunity to experience farm life, nature, rural activities, outdoor recreation, swimming, water-based fun, and fresh food in a peaceful countryside setting. It is suitable for children, parents, friends, and groups seeking a refreshing escape from Pune.",
    topPlaces: [
        {
            title: "Family Farm Experience",
            description: "Families can explore agricultural surroundings and enjoy a closer connection with rural life through farm activities, nature observation, and open countryside spaces. The experience gives children an enjoyable opportunity to learn outside a traditional classroom environment."
        },
        {
            title: "Kids Agro Tourism Adventure",
            description: "Children can discover farming, nature, animals, and outdoor activities while enjoying an engaging day away from the city. The combination of learning and recreation makes the experience suitable for family outings."
        },
        {
            title: "One-Day Farm Picnic",
            description: "Enjoy a complete family day with farm exploration, outdoor recreation, water activities, games, meals, and peaceful relaxation. It is a convenient choice for families who want a short countryside escape without an overnight stay."
        },
        {
            title: "Rural Village Experience",
            description: "Experience the charm of countryside living through traditional activities, agricultural surroundings, rural food, and nature-based recreation. Families can enjoy a slower atmosphere while discovering aspects of village life."
        },
        {
            title: "Farm-to-Table Food Experience",
            description: "Enjoy fresh and traditional food in a rural environment while spending time with family and friends. The food experience adds a local touch to the agro-tourism visit and complements the outdoor activities."
        },
        {
            title: "Family Water Recreation",
            description: "Swimming and water-based recreation give families an exciting way to spend time outdoors. Children and adults can enjoy refreshing activities while also participating in farm experiences and nature exploration."
        },
        {
            title: "Agricultural Learning Experience",
            description: "Visitors can learn about farming, crops, sustainable practices, and the everyday activities involved in rural agriculture. This makes the outing both entertaining and educational for children and adults."
        },
        {
            title: "Nature and Farm Walk",
            description: "A peaceful walk around the farm provides an opportunity to enjoy greenery, fresh air, agricultural landscapes, and natural surroundings. It is ideal for families looking for a relaxing outdoor experience."
        },
        {
            title: "Family Activity Day",
            description: "Families can enjoy a varied day with outdoor games, tractor rides, bullock cart rides, swimming, nature activities, and other recreational experiences that encourage everyone to participate together."
        },
        {
            title: "Weekend Agro Tourism Escape",
            description: "A weekend visit gives families more time to enjoy farm activities, nature, food, outdoor recreation, and peaceful surroundings. It provides a refreshing change from the usual city-based weekend routine."
        }
    ],
    services: [
        {
            name: "Pune Agro Tourism",
            description: "Experience the rural side of Pune through farm activities, agricultural surroundings, nature exploration, traditional food, outdoor recreation, and engaging experiences for families and groups."
        },
        {
            name: "Agro tourism near pune",
            description: "Enjoy a convenient countryside escape near Pune where visitors can reconnect with farming, nature, rural activities, outdoor recreation, and peaceful open spaces."
        },
        {
            name: "Agri tourism near pune",
            description: "Explore agriculture and rural life through farm-based activities, nature experiences, traditional practices, and recreational options suitable for families, children, and groups."
        },
        {
            name: "Best agro tourism near pune",
            description: "A memorable agro-tourism experience can combine farm exploration, nature, rural culture, outdoor activities, food, swimming, and quality family time in one peaceful destination."
        },
        {
            name: "Agri tourism in pune",
            description: "Discover an educational and relaxing agricultural experience around Pune with farm activities, nature exploration, rural experiences, outdoor games, and food."
        },
        {
            name: "One day Picnic agro tourism near pune",
            description: "Plan a convenient one-day agro-tourism picnic featuring farm visits, outdoor games, water recreation, nature walks, meals, and enjoyable activities for children and adults."
        },
        {
            name: "Agriculture tourism near pune",
            description: "Families can learn about farming and rural life while enjoying agricultural surroundings, hands-on experiences, nature activities, and peaceful countryside leisure."
        },
        {
            name: "Agro tourism resort near pune",
            description: "Enjoy the combination of resort-style leisure and genuine farm experiences with activities, nature exploration, food, swimming, and relaxing countryside surroundings."
        },
        {
            name: "Agro tourism pune",
            description: "Explore Pune's countryside through agriculture-focused activities, rural experiences, farm tours, nature walks, outdoor recreation, and traditional food."
        },
        {
            name: "Agritourism near pune",
            description: "Agritourism near Pune offers families an opportunity to step into a farm environment, learn about rural life, enjoy nature, and participate in recreational activities."
        },
        {
            name: "Agrotourism resort near pune",
            description: "Combine a relaxing resort experience with agricultural surroundings, farm activities, nature exploration, swimming, food, and rural recreation for a refreshing getaway."
        },
        {
            name: " best agro tourism resort near pune",
            description: "Families can enjoy a balanced agro-tourism getaway with farm experiences, outdoor activities, nature, food, water recreation, and comfortable leisure in a peaceful environment."
        },
        {
            name: "Agro Tourism Near Pune for Family",
            description: "Families can explore farm life, enjoy outdoor activities, participate in rural experiences, and spend quality time together in a natural environment away from city congestion."
        },
        {
            name: "Best Agro Tourism Near Pune",
            description: "A complete agro-tourism experience brings together agriculture, nature, rural culture, recreation, food, and family-friendly activities for an engaging short getaway."
        },
        {
            name: "Agri Tourism Near Pune for Family",
            description: "Family visits can include farm exploration, nature walks, agricultural learning, outdoor games, swimming, traditional food, and relaxing time in the countryside."
        },
        {
            name: "Family Agro Tourism Near Pune",
            description: "Enjoy an interactive family experience where children and adults can discover farming, rural traditions, nature, outdoor activities, and farm-based recreation together."
        },
        {
            name: "One Day Agro Tourism Near Pune",
            description: "A one-day visit can combine farm tours, nature exploration, water recreation, outdoor games, food, and rural activities into a convenient full-day experience."
        },
        {
            name: "Agro Tourism Resorts Near Pune",
            description: "Agro-tourism resorts near Pune provide an opportunity to combine comfortable leisure with agricultural experiences, nature, recreational activities, food, and family-friendly entertainment."
        },
        {
            name: "Agro Tourism Near Pune With Water Park",
            description: "Families can combine agricultural exploration with refreshing water-based entertainment, outdoor activities, food, and countryside relaxation for a more engaging day outing."
        },
        {
            name: "Agro Tourism Near Pune With Swimming Pool ",
            description: "Swimming adds a refreshing leisure activity to the agro-tourism experience, allowing families to enjoy water recreation alongside farm activities, nature exploration, and outdoor games."
        },
        {
            name: "Agro Tourism Near Pune With Activities",
            description: "Visitors can enjoy a variety of activities such as tractor rides, bullock cart rides, outdoor games, nature walks, swimming, farm tours, and other rural experiences."
        },
        {
            name: "One Day Picnic at Agro Tourism Near Pune",
            description: "Create a memorable one-day picnic with farm exploration, outdoor games, water activities, nature, traditional food, and relaxing family time in an open countryside environment."
        },
        {
            name: "Agro Tourism Near Pune for Kids",
            description: "Children can learn about farming, animals, nature, and rural life while enjoying tractor rides, outdoor games, farm activities, water recreation, and other engaging experiences."
        },
        {
            name: "Agro Tourism Near Pune With Food",
            description: "Enjoy tasty and traditional food alongside farm activities and countryside recreation, giving families an opportunity to experience local flavors in a relaxed rural setting."
        },
        {
            name: "Agro Tourism Near Pune With Stay",
            description: "An overnight agro-tourism experience gives visitors additional time to explore the farm, enjoy activities, relax in nature, and experience rural life at a slower pace."
        },
        {
            name: "Affordable Agro Tourism Near Pune",
            description: "Families can plan a budget-conscious countryside outing while enjoying farm activities, outdoor recreation, food, nature experiences, and other enjoyable attractions."
        },
        {
            name: "Weekend Agro Tourism Near Pune",
            description: "Spend a relaxing weekend discovering farm life, enjoying nature walks, outdoor activities, food, water recreation, and peaceful countryside surroundings away from the city."
        },
        {
            name: "Agro Tourism Near Pune for Family and Friends",
            description: "Families and friends can share farm activities, outdoor games, swimming, nature exploration, food, and group recreation in a setting designed for social and memorable experiences."
        },
        {
            name: "Farm Resort Near Pune for Family",
            description: "Families can combine comfortable leisure with genuine farm experiences, nature exploration, outdoor activities, swimming, food, and quality bonding time."
        },
        {
            name: "Rural Tourism Near Pune for Family",
            description: "Experience rural culture through farming, traditional activities, village surroundings, nature exploration, local food, and educational experiences that are suitable for families."
        },
        {
            name: "Village Resort Near Pune for Family",
            description: "A village-style countryside getaway allows families to enjoy rural surroundings, farm activities, outdoor recreation, traditional food, and a slower pace away from urban life."
        },
        {
            name: "Best Family Picnic Spot Near Pune",
            description: "Families can enjoy a complete picnic experience with nature, farm activities, swimming, outdoor games, food, and relaxing open spaces suitable for children and adults."
        }
    ],
    tableData: [
        ["Pune Agro Tourism"],
        ["Agro tourism near pune"],
        ["Agri tourism near pune"],
        ["Best agro tourism near pune"],
        ["Agri tourism in pune"],
        ["One day Picnic agro tourism near pune"],
        ["Agriculture tourism near pune"],
        ["Agro tourism resort near pune"],
        ["Agro tourism pune"],
        ["Agritourism near pune"],
        ["Agrotourism resort near pune"],
        [" best agro tourism resort near pune"],
        ["Agro Tourism Near Pune for Family"],
        ["Best Agro Tourism Near Pune"],
        ["Agri Tourism Near Pune for Family"],
        ["Family Agro Tourism Near Pune"],
        ["One Day Agro Tourism Near Pune"],
        ["Agro Tourism Resorts Near Pune"],
        ["Agro Tourism Near Pune With Water Park"],
        ["Agro Tourism Near Pune With Swimming Pool "],
        ["Agro Tourism Near Pune With Activities"],
        ["One Day Picnic at Agro Tourism Near Pune"],
        ["Agro Tourism Near Pune for Kids"],
        ["Agro Tourism Near Pune With Food"],
        ["Agro Tourism Near Pune With Stay"],
        ["Affordable Agro Tourism Near Pune"],
        ["Weekend Agro Tourism Near Pune"],
        ["Agro Tourism Near Pune for Family and Friends"],
        ["Farm Resort Near Pune for Family"],
        ["Rural Tourism Near Pune for Family"],
        ["Village Resort Near Pune for Family"],
        ["Best Family Picnic Spot Near Pune"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Authentic Farm Experience",
            WhyChoosedescription: "Visitors can experience agricultural surroundings and rural activities rather than simply visiting a conventional resort, creating a more meaningful connection with farming and countryside life."
        },
        {
            WhyChooseheading: "Excellent for Family Learning",
            WhyChoosedescription: "Children can discover how farms operate, observe nature, participate in suitable activities, and learn about rural practices while enjoying an entertaining day with their parents."
        },
        {
            WhyChooseheading: "Activities for Children and Adults",
            WhyChoosedescription: "Families can choose from swimming, tractor rides, bullock cart rides, outdoor games, nature walks, farm tours, and other activities that encourage participation across different age groups."
        },
        {
            WhyChooseheading: "Nature-Focused Environment",
            WhyChoosedescription: "Green surroundings, open farmland, fresh air, and natural landscapes provide a refreshing alternative to crowded urban entertainment and create a peaceful atmosphere for family time."
        },
        {
            WhyChooseheading: "Perfect for One-Day Picnics",
            WhyChoosedescription: "A family can enjoy farm experiences, water recreation, outdoor games, food, and relaxation during a single-day visit, making it practical for a quick break from Pune."
        },
        {
            WhyChooseheading: "Food and Farm Life Together",
            WhyChoosedescription: "Traditional and farm-inspired food adds another dimension to the visit, allowing families to enjoy local flavors while experiencing agriculture, nature, and outdoor recreation."
        },
        {
            WhyChooseheading: "Stay and Weekend Options",
            WhyChoosedescription: "Visitors who want more time can extend their experience with an overnight or weekend plan, giving them additional opportunities for farm exploration, nature activities, meals, and relaxation."
        },
        {
            WhyChooseheading: "Affordable Countryside Escape",
            WhyChoosedescription: "The combination of farm experiences, outdoor activities, nature, food, and recreation provides families with a practical way to enjoy a refreshing countryside outing without planning a distant holiday."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good agro tourism destination near Pune for families?",
        answer: "Om Agri Tourism provides families with a peaceful farm environment where they can enjoy greenery, open spaces and countryside experiences together. The combination of recreational activities and rural surroundings makes it a refreshing choice for families planning an agro tourism outing near Pune."
    },
    {
        question: "What activities can families enjoy at Om Agri Tourism?",
        answer: "Families visiting Om Agri Tourism can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These activities offer a mix of recreation and rural experiences, allowing both children and adults to participate in an enjoyable countryside outing."
    },
    {
        question: "Can children experience farm life at Om Agri Tourism?",
        answer: "Children can discover a different side of outdoor life at Om Agri Tourism by exploring the farm surroundings and observing nature. Activities such as tractor rides, bird watching and boating can make the visit engaging while giving younger guests a glimpse of a peaceful rural environment."
    },
    {
        question: "Is Om Agri Tourism suitable for a one day family outing near Pune?",
        answer: "A family can plan a complete one day visit to Om Agri Tourism by combining outdoor activities with relaxed time around the farm. Swimming, boating, rural rides and bird watching provide variety, while the greenery creates a comfortable setting for spending quality time together."
    },
    {
        question: "Does Om Agri Tourism offer traditional rural experiences for families?",
        answer: "Families can enjoy traditional countryside experiences at Om Agri Tourism through bull cart rides and tractor rides. These activities provide children and adults with an opportunity to experience rural traditions while enjoying the open surroundings of the farm."
    },
    {
        question: "Is Om Agri Tourism suitable for parents travelling with young children?",
        answer: "Parents can enjoy a family visit to Om Agri Tourism while choosing activities that are appropriate for their children and spending time together around the farm. The open greenery, bird watching and recreational options can provide a pleasant alternative to a conventional city outing."
    },
    {
        question: "Can families enjoy homemade food at Om Agri Tourism?",
        answer: "Homemade food adds a traditional touch to the family experience at Om Agri Tourism. After enjoying outdoor activities, guests can take time to enjoy a satisfying meal and relax in the peaceful farm surroundings before continuing their outing."
    },
    {
        question: "Can extended families or groups visit Om Agri Tourism together?",
        answer: "Om Agri Tourism can be considered for extended family gatherings and group outings where different age groups want to spend time together. The range of activities, open farm surroundings and relaxed atmosphere provide several ways for everyone to enjoy the day."
    },
    {
        question: "What makes Om Agri Tourism different from a regular family outing near Pune?",
        answer: "Om Agri Tourism combines recreation with a genuine countryside atmosphere, allowing families to enjoy more than conventional leisure activities. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching give visitors different ways to experience the farm environment."
    },
    {
        question: "Why choose Om Agri Tourism when searching for agro tourism near Pune for family?",
        answer: "Om Agri Tourism brings together greenery, farm surroundings, traditional rural experiences and recreational activities in a family-friendly setting. With options such as swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food, families can enjoy a memorable countryside escape near Pune."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Kunal Wagh",
        feedback:
            "We visited Om Agri Tourism with our parents and children, and everyone enjoyed the experience in their own way. The kids loved the tractor ride and bird watching, while the elders appreciated the peaceful greenery and homemade food. It was a wonderful family day away from the city.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Pooja Salunkhe",
        feedback:
            "Om Agri Tourism gave our family a refreshing countryside experience. We enjoyed boating, the bull cart ride and spending time around the farm, while the children were excited to explore the surroundings. The combination of activities and rural atmosphere made our outing very memorable.",
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
  "name": "Agro Tourism Near Pune for Family",
  "image": "https://www.omagrotourism.com/assets/images/agro-tourism-near-pune-for-family.webp",
  "description": "Om Agro Tourism offers a family-friendly Agro Tourism Near Pune for Family experience for parents, children, grandparents and groups looking to spend meaningful time in a peaceful countryside environment. Visitors searching for Pune Agro Tourism can explore a refreshing setting where agriculture, greenery, open spaces and rural experiences create a welcome break from the city's busy routine. Agro tourism near Pune is suitable for families who want to introduce children to nature, farming surroundings and a quieter rural atmosphere while enjoying recreational leisure together. People looking for Agri tourism near Pune can experience an environment that connects visitors with agricultural landscapes and countryside living while providing opportunities for family recreation. Families searching for the Best agro tourism near Pune can consider Om Agro Tourism for one-day outings, weekend breaks, family picnics and nature-focused getaways. Children can enjoy open surroundings and suitable outdoor experiences, while parents and grandparents can relax in a peaceful environment away from crowded urban locations. A family agro-tourism visit can also be an educational experience, allowing children to observe agricultural surroundings and understand aspects of rural life in an enjoyable setting. The destination is suitable for family gatherings, birthday outings, school groups, weekend plans and casual celebrations. Visitors planning a one day picnic near Pune can enjoy a convenient countryside escape without the need for an extended holiday. Families can also plan longer visits depending on available stay arrangements and packages. Seasonal changes offer different experiences, with monsoon bringing lush greenery and refreshing landscapes, winter providing comfortable conditions for outdoor recreation and summer outings being suitable with thoughtfully planned timings. Om Agro Tourism provides an alternative to conventional entertainment destinations by combining agriculture, nature, recreation and rural surroundings. Family members of different age groups can spend quality time together through outdoor leisure, shared activities and peaceful countryside experiences. The destination can also suit visitors searching for family picnic spots, nature outings, one-day trips and weekend getaways near Pune. With its combination of agricultural surroundings, open spaces and family-oriented recreation, Om Agro Tourism provides a memorable choice for people looking for the best agro tourism and agri tourism experience near Pune for a family outing.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/agro-tourism-near-pune-for-family"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Agro Tourism Near Pune for Family | Best Family Agro & Agri Tourism Experience | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers a family-friendly agro tourism experience near Pune with nature, agriculture, outdoor recreation and peaceful countryside surroundings."
  />

  <meta
    name="keywords"
    content="Agro Tourism Near Pune for Family, Pune Agro Tourism, Agro tourism near Pune, Agri tourism near Pune, Best agro tourism near Pune, best agri tourism near Pune, agro tourism near Pune for family, agri tourism near Pune for family, best agro tourism near Pune for family, best agri tourism near Pune for family, family agro tourism near Pune, family agri tourism near Pune, agro tourism places near Pune, agri tourism places near Pune, agro tourism spots near Pune, agri tourism spots near Pune, best agro tourism places near Pune, best agri tourism places near Pune, agro tourism resort near Pune, agri tourism resort near Pune, family agro tourism resort near Pune, agro tourism for family near Pune, agricultural tourism near Pune, agriculture tourism near Pune, agriculture tourism places near Pune, farm tourism near Pune, farm tourism for family near Pune, farm stay near Pune for family, family farm stay near Pune, rural tourism near Pune, rural tourism near Pune for family, countryside tourism near Pune, countryside outing near Pune, nature agro tourism near Pune, nature tourism near Pune for family, family nature outing near Pune, family outing near Pune, family picnic near Pune, family picnic spot near Pune, family picnic places near Pune, one day picnic near Pune for family, one day trip near Pune for family, one day family trip near Pune, one day family outing near Pune, family weekend getaway near Pune, family weekend trip near Pune, family resorts near Pune, family resort near Pune, agro tourism resort near Pune for family, best family resort near Pune, nature resort near Pune for family, family day outing near Pune, family getaway near Pune, places for family outing near Pune, places to visit near Pune with family, best places near Pune for family, educational agro tourism near Pune, educational farm visit near Pune, school agro tourism near Pune, school picnic agro tourism near Pune, kids agro tourism near Pune, family day trip near Pune, rural experience near Pune, farming experience near Pune, village tourism near Pune, village experience near Pune, farm visit near Pune, agricultural experience near Pune, nature outing near Pune, weekend agro tourism near Pune, weekend agri tourism near Pune, one day agro tourism near Pune, one day agri tourism near Pune, picnic destination near Pune, family picnic destination near Pune, best family picnic destination near Pune, best family outing near Pune, best family getaway near Pune, agro tourism near Pimpri Chinchwad, agri tourism near Pimpri Chinchwad, agro tourism near Mumbai, family agro tourism near Mumbai"
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
                            <img src='/images/keyword/40.jpg' alt='img' className='img-fluid' />
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

export default Agrotourismnearpune;