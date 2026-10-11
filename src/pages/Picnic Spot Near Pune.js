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

function PicnicSpotNearPune() {



const cardData = {
    keyword: "Picnic Spot Near Pune",
    headingDescription: "Enjoy a refreshing picnic spot near Pune at Om Agri Tourism, where families, couples, friends and corporate groups can spend quality time in a peaceful countryside setting. Surrounded by greenery and open farm spaces, the destination offers a relaxing escape from the city's busy routine with opportunities for outdoor recreation, nature exploration, traditional rural experiences and delicious homemade food. Whether you are planning a family picnic, couple outing, team gathering or a one day trip near Pune, Om Agri Tourism provides a comfortable environment for creating memorable moments together. With engaging activities, natural surroundings and a pleasant farm atmosphere, it is a suitable choice for visitors searching for the best picnic spot near Pune, good picnic spots near Pune or a convenient nearby Pune picnic spot for a refreshing day out.",

    topPlaces: [
        {
            title: "Mango Orchard Walk",
            description: "Take a leisurely walk through the orchard area and enjoy the peaceful greenery of the countryside. The natural surroundings offer a refreshing setting for families, couples and groups who want to relax, explore and enjoy a quiet picnic experience away from the city."
        },
        {
            title: "Village Games and Activities",
            description: "Enjoy traditional village-inspired games and activities that bring a fun and interactive element to your picnic. These experiences are suitable for families, friends and team groups looking to participate together and create enjoyable memories during their day out."
        },
        {
            title: "Refreshing Swimming Experience",
            description: "Take a refreshing dip and enjoy relaxing moments around the swimming facility at Om Agri Tourism. It provides an enjoyable way for visitors to cool down, have fun with their companions and add recreation to a one day picnic near Pune."
        },
        {
            title: "Farm Fresh Nature Experience",
            description: "Spend time exploring the farm surroundings and experience the peaceful rhythm of countryside life. Green fields, open spaces and natural scenery create a pleasant backdrop for visitors searching for a best place for picnic near Pune."
        },
        {
            title: "Tractor Farm Ride",
            description: "Experience the countryside from a different perspective with an enjoyable tractor farm ride. The activity gives children and adults an opportunity to explore the agricultural surroundings while adding a fun rural experience to their picnic day."
        },
        {
            title: "Outdoor Group Games",
            description: "Make your group outing more energetic with outdoor games in the spacious farm surroundings. Friends, families and corporate teams can participate in recreational activities together, making the destination suitable for team outing places near Pune."
        },
        {
            title: "Traditional Bullock Cart Ride",
            description: "Enjoy a traditional bullock cart ride and experience a charming part of rural life. The leisurely activity is especially enjoyable for families and visitors who want to add an authentic village experience to their picnic near Pune."
        },
        {
            title: "Homemade Traditional Lunch",
            description: "Enjoy a satisfying homemade meal featuring traditional flavors in the peaceful farm environment. Sharing a fresh and comforting lunch with family, friends or colleagues makes the picnic experience more enjoyable and complete."
        },
        {
            title: "Nature Photography Corners",
            description: "Capture memorable photographs across the farm's natural surroundings, open spaces and greenery. The relaxed landscape provides attractive settings for family pictures, couple photographs, group memories and casual moments throughout the picnic."
        },
        {
            title: "Relaxing Farm Leisure",
            description: "Slow down and enjoy peaceful leisure time in the open farm environment. Visitors can sit back, enjoy the fresh surroundings, talk with their companions and take a refreshing break from the regular city routine."
        }
    ],

    services: [
        {
            name: "Picnic Spot Near Pune",
            description: "Om Agri Tourism offers a peaceful picnic spot near Pune for families, couples, friends and groups. Visitors can enjoy greenery, outdoor recreation, farm experiences, traditional activities and homemade food while spending a relaxed day together."
        },
        {
            name: "One Day Trip Near Pune",
            description: "Plan a memorable one day trip near Pune at Om Agri Tourism and enjoy a combination of nature, recreation and countryside experiences. The destination provides a refreshing alternative for visitors looking to spend quality time away from the city."
        },
        {
            name: "Team Outing Places Near Pune",
            description: "Om Agri Tourism can be considered among team outing places near Pune for groups looking to combine recreation and relaxation. Open spaces, group activities, farm experiences and a peaceful environment create opportunities for colleagues to interact outside the workplace."
        },
        {
            name: "1 Day Picnic Spot Near Pune",
            description: "Enjoy a refreshing 1 day picnic spot near Pune experience at Om Agri Tourism. Families and groups can participate in outdoor activities, explore the farm, enjoy traditional experiences and spend a complete day surrounded by natural greenery."
        },
        {
            name: "One Day Picnic Spot Pune",
            description: "Om Agri Tourism is a pleasant one day picnic spot Pune visitors can choose for family outings, group gatherings and casual weekend plans. Its open farm setting provides space for recreation, relaxation, food and quality time together."
        },
        {
            name: "Best One Day Picnic Spot Near Pune",
            description: "For visitors searching for the best one day picnic spot near Pune, Om Agri Tourism combines natural surroundings with engaging activities and a relaxed atmosphere. It is suitable for families, couples, friends and groups planning a memorable day outing."
        },
        {
            name: "Best One Day Picnic Spot in Pune",
            description: "Om Agri Tourism provides a countryside setting for those looking for the best one day picnic spot in Pune. Visitors can enjoy farm activities, outdoor recreation, traditional experiences and homemade food during a refreshing day away from the usual routine."
        },
        {
            name: "Best Outing Places Near Pune",
            description: "Om Agri Tourism is a refreshing option among the best outing places near Pune for visitors who prefer nature and open spaces. The farm environment offers a combination of relaxation, activities and rural experiences suitable for different groups."
        },
        {
            name: "Best Picnic Places in Pune",
            description: "Among the best picnic places in Pune, Om Agri Tourism offers a peaceful farm atmosphere where visitors can enjoy nature, recreational activities and traditional experiences. It is well suited for families and groups planning a relaxed day outdoors."
        },
        {
            name: "Best Picnic Spot in Pune",
            description: "Om Agri Tourism offers a comfortable setting for visitors searching for the best picnic spot in Pune. Green surroundings, open spaces, enjoyable activities and homemade meals create a pleasant environment for spending quality time with loved ones."
        },
        {
            name: "Best Picnic Spot Near Pune in Summer",
            description: "For a best picnic spot near Pune in summer, Om Agri Tourism offers a refreshing farm environment with water-based recreation, shaded natural areas and outdoor activities. Visitors can enjoy a relaxed summer day while taking a break from the city's heat."
        },
        {
            name: "Best Place for Picnic in Pune",
            description: "Om Agri Tourism is a peaceful choice for anyone looking for the best place for picnic in Pune. The countryside setting, recreational options, farm experiences and traditional food provide everything needed for an enjoyable day with family or friends."
        },
        {
            name: "Best Place for One Day Trip Near Pune",
            description: "Plan your next outing at Om Agri Tourism if you are searching for the best place for one day trip near Pune. The destination combines nature, leisure, farm activities and group-friendly recreation for a refreshing short getaway."
        },
        {
            name: "Best Place for Picnic Near Pune",
            description: "Om Agri Tourism is a relaxing best place for picnic near Pune where visitors can enjoy open farm spaces, natural surroundings and engaging activities. It provides a comfortable setting for families, couples, friends and groups."
        },
        {
            name: "Best Places for 1 Day Trip Near Pune",
            description: "Visitors exploring the best places for 1 day trip near Pune can consider Om Agri Tourism for a countryside escape. Guests can enjoy farm experiences, outdoor recreation, traditional activities and homemade food without planning an extended holiday."
        },
        {
            name: "Best Places in Pune for Picnic",
            description: "Om Agri Tourism is among the best places in Pune for picnic plans that combine relaxation and recreation. Its natural farm environment gives families and groups an opportunity to enjoy outdoor activities and spend meaningful time together."
        },
        {
            name: "Best Places to Visit in Pune for One Day Picnic",
            description: "Om Agri Tourism offers an enjoyable option among the best places to visit in Pune for one day picnic plans. Visitors can explore the farm, participate in recreational activities, enjoy nature and share a traditional meal during their outing."
        },
        {
            name: "Best Places to Visit Near Pune for One Day Trip",
            description: "For people researching the best places to visit near Pune for one day trip, Om Agri Tourism provides a peaceful countryside experience. Its combination of greenery, activities and rural charm makes it suitable for a complete day getaway."
        },
        {
            name: "Couple Picnic Spot in Pune",
            description: "Om Agri Tourism provides a peaceful couple picnic spot in Pune where partners can enjoy nature, relaxed surroundings and quality time together. The farm atmosphere offers a refreshing change from crowded urban destinations."
        },
        {
            name: "Couple Picnic Spot Near Pune",
            description: "Couples looking for a couple picnic spot near Pune can enjoy the calm surroundings of Om Agri Tourism. Nature walks, farm exploration, photography and relaxed outdoor moments make it suitable for a simple countryside outing."
        },
        {
            name: "Day Picnic in Pune",
            description: "Enjoy a refreshing day picnic in Pune at Om Agri Tourism with greenery, open spaces, recreational activities and countryside experiences. The destination gives visitors an opportunity to relax and enjoy meaningful time with family or friends."
        },
        {
            name: "Family Picnic Spot Pune",
            description: "Om Agri Tourism is a family picnic spot Pune visitors can choose for a fun and relaxing day out. Children and adults can enjoy outdoor activities, farm experiences, nature exploration and traditional food in a peaceful setting."
        },
        {
            name: "Good Picnic Spots Near Pune",
            description: "For those exploring good picnic spots near Pune, Om Agri Tourism offers a balanced combination of nature, recreation and rural experiences. The open farm environment is suitable for families, friends, couples and groups seeking a comfortable outing."
        },
        {
            name: "Group Picnic Spots Near Pune",
            description: "Om Agri Tourism is suitable for visitors comparing group picnic spots near Pune, offering open areas and activities that can be enjoyed together. Friends, extended families and workplace groups can spend time participating in recreation and sharing meals."
        },
        {
            name: "Nearby Pune Picnic Spot",
            description: "Om Agri Tourism is a convenient nearby Pune picnic spot for visitors wanting a countryside break without planning a long vacation. Its peaceful farm surroundings, outdoor activities and traditional experiences make it suitable for a refreshing day outing."
        }
    ],

    tableData: [
        ["Picnic Spot Near Pune"],
        ["One Day Trip Near Pune"],
        ["Team Outing Places Near Pune"],
        ["1 Day Picnic Spot Near Pune"],
        ["One Day Picnic Spot Pune"],
        ["Best One Day Picnic Spot Near Pune"],
        ["Best One Day Picnic Spot in Pune"],
        ["Best Outing Places Near Pune"],
        ["Best Picnic Places in Pune"],
        ["Best Picnic Spot in Pune"],
        ["Best Picnic Spot Near Pune"],
        ["Best Picnic Spot Near Pune in Summer"],
        ["Best Place for Picnic in Pune"],
        ["Best Place for One Day Trip Near Pune"],
        ["Best Place for Picnic Near Pune"],
        ["Best Places for 1 Day Trip Near Pune"],
        ["Best Places in Pune for Picnic"],
        ["Best Places to Visit in Pune for One Day Picnic"],
        ["Best Places to Visit Near Pune for One Day Trip"],
        ["Couple Picnic Spot in Pune"],
        ["Couple Picnic Spot Near Pune"],
        ["Day Picnic in Pune"],
        ["Family Picnic Spot Pune"],
        ["Good Picnic Spots Near Pune"],
        ["Group Picnic Spots Near Pune"],
        ["Nearby Pune Picnic Spot"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Natural Farm Setting",
            WhyChoosedescription: "Om Agri Tourism provides a peaceful farm environment where visitors can enjoy greenery, open spaces and fresh countryside surroundings. This natural setting makes the destination suitable for anyone wanting a relaxing picnic away from crowded city locations."
        },
        {
            WhyChooseheading: "Ideal for Family Picnics",
            WhyChoosedescription: "Families can enjoy a variety of experiences together, from outdoor recreation and farm exploration to traditional activities and shared meals. The relaxed atmosphere makes it easier for children, parents and elders to spend quality time together."
        },
        {
            WhyChooseheading: "Suitable for Team Outings",
            WhyChoosedescription: "Groups and workplace teams can use the open surroundings for recreational activities, informal interaction and shared experiences. The combination of group-friendly activities and a peaceful environment makes the farm a practical choice for team outings near Pune."
        },
        {
            WhyChooseheading: "Pleasant Couple Getaway",
            WhyChoosedescription: "Couples can enjoy a quieter alternative to crowded city attractions at Om Agri Tourism. The countryside scenery, relaxed atmosphere, nature experiences and photography opportunities provide a pleasant setting for spending uninterrupted time together."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Visitors can experience elements of rural life through farm activities and traditional village-inspired recreation. These experiences add character to the picnic and give guests something different from a standard urban day outing."
        },
        {
            WhyChooseheading: "Activities for Different Age Groups",
            WhyChoosedescription: "The range of activities at Om Agri Tourism makes the destination enjoyable for children, adults and senior family members. Visitors can choose between active recreation, nature exploration and relaxed leisure according to their preferences."
        },
        {
            WhyChooseheading: "Refreshing Summer Picnic Option",
            WhyChoosedescription: "During warmer months, the farm environment offers visitors an opportunity to enjoy outdoor recreation and refreshing water-based activities. The combination of greenery, open spaces and leisure options can make a summer picnic more comfortable and enjoyable."
        },
        {
            WhyChooseheading: "Memorable Food and Leisure",
            WhyChoosedescription: "A picnic becomes more enjoyable when visitors can combine activities with satisfying traditional food and relaxed conversation. Om Agri Tourism creates an environment where guests can enjoy a meal, unwind in nature and make lasting memories with their companions."
        }
    ]
};











const faqData = [
    {
        question: "Is Om Agri Tourism a good picnic spot near Pune for families?",
        answer: "Om Agri Tourism is a suitable picnic spot near Pune for families who want to spend a relaxing day surrounded by nature. The farm offers a mix of outdoor recreation and rural experiences, including swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food."
    },
    {
        question: "What can we do at Om Agri Tourism during a family picnic?",
        answer: "A family picnic at Om Agri Tourism can include swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. Guests can also enjoy the peaceful farm surroundings and traditional homemade food, giving both children and adults plenty of ways to enjoy their day."
    },
    {
        question: "Is Om Agri Tourism suitable as a picnic spot near Pune for children?",
        answer: "Children can enjoy several outdoor and farm-based experiences at Om Agri Tourism. Activities such as boating, tractor rides, bird watching and swimming can make the picnic engaging for younger visitors, while parents can select activities according to their children's age and comfort."
    },
    {
        question: "Can couples visit Om Agri Tourism as a picnic spot near Pune?",
        answer: "Om Agri Tourism can be a pleasant choice for couples searching for a peaceful picnic spot near Pune. The natural farm setting, greenery and recreational activities provide an opportunity to step away from the city's routine and enjoy a relaxed day together."
    },
    {
        question: "What activities are available at Om Agri Tourism?",
        answer: "Visitors at Om Agri Tourism can participate in a variety of recreational and countryside activities. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching are among the experiences that can make a picnic day more enjoyable and memorable."
    },
    {
        question: "Does Om Agri Tourism provide a swimming facility?",
        answer: "Yes, Om Agri Tourism has a swimming pool where guests can enjoy a refreshing break during their picnic. Swimming can be combined with other farm activities and nature experiences, making the destination suitable for visitors who want recreation as well as relaxation."
    },
    {
        question: "Can we enjoy traditional village experiences at Om Agri Tourism?",
        answer: "Guests can get a glimpse of countryside life through experiences such as bull cart rides, tractor rides and horse riding at Om Agri Tourism. Bird watching and the surrounding farm environment further add to the traditional rural atmosphere of the picnic destination."
    },
    {
        question: "Is homemade food available at Om Agri Tourism for picnic visitors?",
        answer: "Homemade food is an important part of the countryside experience at Om Agri Tourism. Visitors can enjoy traditional farm-style meals during their outing, complementing the outdoor activities and creating a more authentic and satisfying picnic experience."
    },
    {
        question: "Is Om Agri Tourism suitable for groups and friends?",
        answer: "Groups of friends and extended families can enjoy Om Agri Tourism as a picnic spot near Pune. The destination offers different activities and open surroundings where visitors can spend time together, participate in recreational experiences and enjoy a break from their everyday schedule."
    },
    {
        question: "Why choose Om Agri Tourism as a picnic spot near Pune?",
        answer: "Om Agri Tourism brings together greenery, farm experiences, outdoor recreation and traditional activities in one destination. With options such as swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food, it offers a well-rounded picnic experience for families, couples, friends and groups."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sagar More",
        feedback:
            "Our family wanted a peaceful picnic spot near Pune, and Om Agri Tourism was a wonderful choice. The children enjoyed swimming and the tractor ride, while the elders liked the greenery and calm farm environment. We also enjoyed the homemade food and had a relaxing day together.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Neha Bhosale",
        feedback:
            "We visited Om Agri Tourism with a group of friends for a day outing and really enjoyed the variety of activities. The bull cart ride and boating were especially enjoyable, and the countryside atmosphere made the whole experience feel different from a regular city picnic. The food was also very satisfying.",
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
  "name": "Picnic Spot Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-pune.webp",
  "description": "Om Agro Tourism offers a refreshing Picnic Spot Near Pune for families, couples, friends, teams and groups looking for a relaxing escape surrounded by natural countryside. A picnic spot near Pune can be an ideal choice for visitors who want to spend quality time outdoors without planning a long-distance journey. For those searching for a One day trip near Pune, the destination provides an opportunity to enjoy a complete day of recreation, relaxation and nature-based experiences. A 1 day picnic spot near Pune can suit family outings, weekend plans, school groups, corporate gatherings and casual get-togethers. Visitors looking for a one day picnic spot Pune can enjoy a change from the city's busy environment while spending time in a peaceful agro-tourism setting. Om Agro Tourism can also be considered among the best one day picnic spot near Pune options for visitors who prefer open surroundings and enjoyable outdoor experiences. People searching for the best one day picnic spot in Pune can plan a convenient day outing with family, friends or colleagues. For team outing places near Pune, the destination provides a comfortable environment for group interaction, recreation and shared experiences. Visitors comparing the best outing places near Pune and best picnic places in Pune can choose an agro-tourism destination that combines nature, leisure and rural surroundings. Those searching for the Best picnic spot in Pune or the best picnic spot near Pune can enjoy a refreshing setting suitable for different age groups and group sizes. The destination can also be a suitable best picnic spot near Pune in summer for visitors looking to spend leisure time away from crowded urban areas. Om Agro Tourism provides a memorable countryside experience for people searching for a convenient picnic and outing destination near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-pune"
  }
};




    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Pune | Best One Day Picnic & Team Outing Place | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism is a refreshing picnic spot near Pune for families, teams and groups, offering one day picnic, outing and nature-based experiences."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Pune, picnic spot near Pune, One day trip near Pune, Team outing places near Pune, 1 day picnic spot near Pune, one day picnic spot Pune, best one day picnic spot near Pune, best one day picnic spot in Pune, best outing places near Pune, best picnic places in Pune, Best picnic spot in Pune, best picnic spot near Pune, best picnic spot near Pune in summer, best place for picnic near Pune, best picnic place near Pune, picnic places near Pune, picnic destination near Pune, one day picnic near Pune, one day outing near Pune, family picnic spot near Pune, family picnic places near Pune, family outing near Pune, team outing near Pune, corporate team outing places near Pune, group picnic places near Pune, friends outing near Pune, weekend picnic near Pune, nature picnic spot near Pune, nature outing near Pune, agro tourism near Pune, agro tourism picnic near Pune, best day outing near Pune, one day outing places near Pune, picnic resort near Pune, picnic destination in Pune, Pune picnic spot, Pune outing places, summer picnic spot near Pune, countryside picnic near Pune, family day trip near Pune, best family picnic spot near Pune"
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
                            <img src='/images/keyword/3.jpg' alt='img' className='img-fluid' />
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

export default PicnicSpotNearPune;