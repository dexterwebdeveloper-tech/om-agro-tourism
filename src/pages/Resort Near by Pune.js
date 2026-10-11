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

function Resortnearbypune() {


const cardData = {
    keyword: "Resort Near by Pune",
    headingDescription: "Looking for a Resort Near by Pune for a family gathering, weekend getaway, couple trip, one-day picnic, or team outing? Om Agro Tourism offers a peaceful countryside environment with farm experiences, outdoor activities, nature exploration, traditional food, and relaxing spaces. It is suitable for families, couples, friends, and groups looking for a convenient escape from Pune without planning a long-distance trip.",

    topPlaces: [
        {
            title: "Family Weekend Retreat",
            description: "Enjoy a relaxed family break surrounded by open farmland, greenery, fresh air, and peaceful countryside views. The setting provides space for children and adults to participate in activities while spending meaningful time together."
        },
        {
            title: "Couples Countryside Escape",
            description: "Couples can enjoy a quieter getaway with nature, leisurely walks, traditional food, and peaceful surroundings. The rural atmosphere provides a pleasant alternative to crowded city destinations for spending quality time together."
        },
        {
            title: "One-Day Family Picnic",
            description: "Plan a convenient day outing with outdoor recreation, farm experiences, nature exploration, food, and relaxing open spaces. It is suitable for families who want an enjoyable break without an overnight travel schedule."
        },
        {
            title: "Farm and Nature Experience",
            description: "Explore agricultural surroundings and experience the charm of rural Maharashtra through farm activities, nature walks, open landscapes, and traditional experiences. It offers visitors a refreshing change from urban entertainment."
        },
        {
            title: "Group Outdoor Recreation",
            description: "Friends, families, and groups can enjoy outdoor games and recreational activities in a spacious countryside environment. The setting encourages interaction, friendly competition, and memorable moments during the outing."
        },
        {
            title: "Refreshing Water Leisure",
            description: "Add refreshing water-based recreation to your getaway while enjoying the surrounding greenery and open countryside. Water activities can make a family or group outing more engaging, especially for children and active visitors."
        },
        {
            title: "Corporate Team Getaway",
            description: "Corporate groups can step away from office routines and enjoy outdoor activities, informal conversations, shared meals, and team recreation. The peaceful environment creates a relaxed setting for employee gatherings."
        },
        {
            title: "Overnight Farm Stay",
            description: "Visitors who want more time away from the city can extend their trip and enjoy a relaxed overnight countryside experience. Farm surroundings, food, nature, and recreational activities make the stay more engaging."
        },
        {
            title: "Nature Weekend Escape",
            description: "A weekend surrounded by greenery and open landscapes can provide a refreshing change from busy city schedules. Guests can combine nature exploration, farm activities, outdoor recreation, and peaceful leisure during their visit."
        },
        {
            title: "Traditional Rural Experience",
            description: "Experience the charm of village-inspired surroundings through traditional food, farm activities, open spaces, and countryside recreation. This creates an authentic local element for families, couples, friends, and groups."
        }
    ],

    services: [
        {
            name: "Resort near by pune",
            description: "A Resort Near by Pune is a convenient choice for families, couples, friends, and groups looking for countryside relaxation, outdoor recreation, farm experiences, traditional food, and a refreshing short getaway."
        },
        {
            name: "Resorts near pune",
            description: "Resorts near Pune offer practical options for visitors seeking nature, recreation, family outings, couple getaways, group activities, and peaceful leisure without traveling too far from the city."
        },
        {
            name: "Best resorts near pune",
            description: "The best resorts near Pune can combine comfortable leisure with nature, outdoor activities, farm experiences, traditional food, and open surroundings suitable for different types of visitors."
        },
        {
            name: "Pet friendly resorts near pune",
            description: "Pet friendly resorts near Pune can appeal to families and pet owners who want to spend quality time together in an open countryside environment while enjoying nature and outdoor leisure."
        },
        {
            name: "Resorts near pune for weekend",
            description: "Resorts near Pune for weekend breaks provide an easy way to escape city routines and enjoy greenery, farm experiences, outdoor recreation, local food, and peaceful countryside surroundings."
        },
        {
            name: "One day resort near pune",
            description: "A One Day Resort Near Pune is ideal for visitors who want to enjoy outdoor activities, farm experiences, food, nature, and relaxation within a convenient single-day outing."
        },
        {
            name: "Resorts near pune for family get together",
            description: "Resorts near Pune for family get together plans provide open spaces, recreational activities, farm experiences, food, and a relaxed environment where relatives can spend meaningful time together."
        },
        {
            name: "Resorts near pune for couples",
            description: "Resorts near Pune for couples offer a peaceful alternative to busy city locations, with greenery, nature experiences, traditional food, and relaxing spaces suitable for a couple getaway."
        },
        {
            name: "Luxury resorts near pune",
            description: "Luxury resorts near Pune can provide a more comfortable countryside escape by combining quality leisure, scenic surroundings, recreational experiences, food, and relaxing spaces."
        },
        {
            name: "Resorts near pune for family one day trip",
            description: "Resorts near Pune for family one day trip plans are suitable for visitors looking to combine outdoor recreation, farm activities, nature exploration, food, and family relaxation without an overnight stay."
        },
        {
            name: "One day resort near pune for couples",
            description: "A One Day Resort Near Pune for Couples provides an easy short getaway with peaceful surroundings, nature, local food, outdoor experiences, and opportunities to enjoy quality time together."
        },
        {
            name: "Luxury resorts near pune for weekend",
            description: "Luxury resorts near Pune for weekend breaks can offer a relaxing combination of countryside surroundings, recreational activities, food, nature experiences, and comfortable leisure."
        },
        {
            name: "Best resort in pune",
            description: "The best resort in Pune should offer more than a place to relax by bringing together nature, outdoor activities, farm experiences, traditional food, and memorable experiences for families and groups."
        },
        {
            name: "One day resort near pune for family",
            description: "A One Day Resort Near Pune for Family outings can provide children and adults with outdoor recreation, farm activities, nature exploration, food, and open spaces for shared family time."
        },
        {
            name: "Resorts in pune for family",
            description: "Resorts in Pune for family outings can provide a convenient setting for recreation, food, nature experiences, farm activities, and relaxed gatherings suitable for different age groups."
        },
        {
            name: "Good resorts near pune",
            description: "Good resorts near Pune can offer a balanced experience of peaceful surroundings, outdoor recreation, farm activities, traditional food, and relaxing spaces for short breaks and family outings."
        },
        {
            name: "Best Resorts near pune for couples",
            description: "Best Resorts near Pune for couples provide a calm environment where partners can enjoy nature, countryside views, leisurely activities, traditional meals, and quality time away from busy city routines."
        },
        {
            name: "Team outing places near pune",
            description: "Team outing places near Pune can provide corporate groups with outdoor games, recreational activities, shared meals, informal interaction, and a refreshing environment away from office schedules."
        },
        {
            name: "One day stay resort near pune",
            description: "A One Day Stay Resort Near Pune is suitable for visitors who want to combine relaxation, food, nature, and recreational activities within a short and convenient getaway."
        },
        {
            name: "Best resorts near pune for family",
            description: "Best resorts near Pune for family outings can offer a mix of open spaces, outdoor activities, farm experiences, nature exploration, food, and family-friendly recreation."
        },
        {
            name: "Budget resorts near pune for couples",
            description: "Budget resorts near Pune for couples can provide an affordable way to enjoy peaceful surroundings, nature, local food, and relaxing outdoor experiences without planning an expensive long-distance trip."
        },
        {
            name: "Resort with activities near pune",
            description: "A Resort With Activities Near Pune is suitable for visitors who want an active outing with outdoor games, farm experiences, nature activities, group recreation, and relaxing countryside time."
        },
        {
            name: "One day trip near pune resort",
            description: "A One Day Trip Near Pune Resort can bring together outdoor recreation, nature exploration, farm activities, food, and relaxation for a convenient short escape from the city."
        },
        {
            name: "Nature resorts near pune for weekend",
            description: "Nature Resorts Near Pune for Weekend breaks provide greenery, open countryside surroundings, farm experiences, outdoor activities, traditional food, and peaceful leisure for families, couples, and groups."
        },
        {
            name: "Weekend resorts near pune for family",
            description: "Weekend Resorts Near Pune for Family visits provide an opportunity to enjoy nature, outdoor recreation, farm activities, food, and quality family time in a peaceful countryside environment."
        },
        {
            name: "Resorts near khadakwasla",
            description: "Resorts near Khadakwasla can be considered by visitors seeking a convenient Pune-side escape with nature, outdoor recreation, farm experiences, food, and relaxing countryside surroundings."
        }
    ],

    tableData: [
        ["Resort near by pune"],
        ["Resorts near pune"],
        ["Best resorts near pune"],
        ["Pet friendly resorts near pune"],
        ["Resorts near pune for weekend"],
        ["One day resort near pune"],
        ["Resorts near pune for family get together"],
        ["Resorts near pune for couples"],
        ["Luxury resorts near pune"],
        ["Resorts near pune for family one day trip"],
        ["One day resort near pune for couples"],
        ["Luxury resorts near pune for weekend"],
        ["Best resort in pune"],
        ["One day resort near pune for family"],
        ["Resorts in pune for family"],
        ["Good resorts near pune"],
        ["Best Resorts near pune for couples"],
        ["Team outing places near pune"],
        ["One day stay resort near pune"],
        ["Best resorts near pune for family"],
        ["Budget resorts near pune for couples"],
        ["Resort with activities near pune"],
        ["One day trip near pune resort"],
        ["Nature resorts near pune for weekend"],
        ["Weekend resorts near pune for family"],
        ["Resorts near khadakwasla"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Convenient Pune Getaway",
            WhyChoosedescription: "A nearby countryside destination makes it easier to take a break without spending most of the day traveling. Visitors can enjoy nature, recreation, food, and relaxation within a practical short-trip plan."
        },
        {
            WhyChooseheading: "Family-Friendly Environment",
            WhyChoosedescription: "Families can enjoy open spaces and activities that appeal to children and adults alike. The combination of outdoor recreation, farm experiences, food, and peaceful surroundings supports enjoyable family gatherings."
        },
        {
            WhyChooseheading: "Peaceful Couple Escape",
            WhyChoosedescription: "Couples can move away from crowded city locations and enjoy greenery, nature, traditional food, and relaxed surroundings that create a comfortable setting for quality time together."
        },
        {
            WhyChooseheading: "Suitable for Weekend Breaks",
            WhyChoosedescription: "Weekend visitors can enjoy a refreshing change of environment without planning an extensive holiday. Farm activities, outdoor recreation, nature, food, and leisure can all be combined into a short getaway."
        },
        {
            WhyChooseheading: "Agro Tourism Experience",
            WhyChoosedescription: "The farm setting adds a distinctive rural element to the visit through agricultural surroundings, countryside activities, traditional experiences, and local food that go beyond conventional resort entertainment."
        },
        {
            WhyChooseheading: "Good for Group Outings",
            WhyChoosedescription: "Friends, relatives, and corporate teams can use the open environment for group games, shared meals, outdoor activities, and informal interaction, making the destination suitable for different types of gatherings."
        },
        {
            WhyChooseheading: "Nature and Activities Together",
            WhyChoosedescription: "Guests do not have to choose between relaxation and recreation. The countryside setting allows visitors to enjoy nature walks, outdoor activities, farm experiences, food, and quiet leisure during the same visit."
        },
        {
            WhyChooseheading: "Flexible Day and Stay Options",
            WhyChoosedescription: "Whether the plan is a one-day picnic, family gathering, couple outing, weekend break, or short stay, the destination can suit different travel preferences while providing a refreshing countryside atmosphere."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good resort near Pune?",
        answer: "Om Agri Tourism offers a peaceful farm setting for visitors who want to take a break from the city's busy environment. With greenery, open spaces, outdoor activities and a relaxed countryside atmosphere, it can be a suitable choice for families, friends and groups planning a refreshing outing near Pune."
    },
    {
        question: "What can visitors do at Om Agri Tourism near Pune?",
        answer: "Guests at Om Agri Tourism can enjoy a variety of recreational and rural experiences, including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These options allow visitors to combine relaxation with enjoyable outdoor activities during their stay."
    },
    {
        question: "Is Om Agri Tourism suitable for a family trip near Pune?",
        answer: "Families can enjoy a comfortable day at Om Agri Tourism by spending time in the greenery and participating in suitable activities. The farm environment offers children and adults a chance to enjoy outdoor recreation while experiencing a peaceful setting away from the regular city routine."
    },
    {
        question: "Can I visit Om Agri Tourism for a one day outing near Pune?",
        answer: "Om Agri Tourism can be considered for a one day countryside outing where visitors can plan several activities within the same visit. Swimming, boating, farm rides, bird watching and time spent around the greenery can create a varied and relaxing day experience."
    },
    {
        question: "Does Om Agri Tourism offer activities for friends and groups?",
        answer: "Groups of friends can enjoy an activity-oriented visit to Om Agri Tourism with options such as boating, swimming, horse riding and traditional farm rides. The open surroundings also provide a comfortable setting for groups to spend time together and enjoy a break from urban surroundings."
    },
    {
        question: "Are traditional rural experiences available at Om Agri Tourism?",
        answer: "Visitors can experience elements of rural life at Om Agri Tourism through activities such as tractor rides and bull cart rides. These traditional experiences add a distinctive countryside character to the outing and make the visit different from a typical city-based recreational trip."
    },
    {
        question: "Is Om Agri Tourism a good option for couples near Pune?",
        answer: "Couples can enjoy a peaceful outing at Om Agri Tourism while exploring activities such as boating, horse riding and bird watching. The farm greenery and calm surroundings create a pleasant atmosphere for relaxing together and enjoying time away from the city's fast pace."
    },
    {
        question: "Can children enjoy the environment at Om Agri Tourism?",
        answer: "Children can find plenty of interesting things to explore at Om Agri Tourism, from observing birds and farm surroundings to enjoying suitable outdoor activities. Experiences such as tractor rides and boating can add excitement to their visit while introducing them to a rural environment."
    },
    {
        question: "Does Om Agri Tourism provide homemade food for visitors?",
        answer: "Homemade food can be part of the countryside experience at Om Agri Tourism, giving guests an opportunity to enjoy traditional flavours during their outing. A meal combined with farm activities, greenery and peaceful surroundings can make the overall visit more satisfying."
    },
    {
        question: "Why choose Om Agri Tourism when searching for a resort near Pune?",
        answer: "Om Agri Tourism brings together natural surroundings, farm experiences, recreational activities and a peaceful atmosphere in one destination. With swimming, boating, horse riding, tractor rides, bull cart rides and bird watching, it offers visitors a varied way to relax and enjoy a countryside escape near Pune."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Nikhil Shinde",
        feedback:
            "We were looking for a resort near Pune where our group could enjoy more than just sitting and relaxing. Om Agri Tourism gave us plenty to do, from boating and swimming to horse riding and the bull cart ride. The greenery and peaceful farm atmosphere made the outing feel completely different from a regular city day.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Kavita Pawar",
        feedback:
            "Our family had a pleasant experience at Om Agri Tourism. The children especially liked the tractor ride and bird watching, while we enjoyed the quiet surroundings and homemade food. It was nice to spend the day together in a natural farm environment with different activities to enjoy.",
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
  "name": "Resort Near by Pune",
  "image": "https://www.omagrotourism.com/assets/images/resort-near-by-pune.webp",
  "description": "Om Agro Tourism offers a peaceful Resort Near by Pune experience for families, couples, friends and groups looking for a refreshing break surrounded by nature and countryside landscapes. Visitors searching for Resort near by Pune can enjoy a convenient escape from the city's busy routine while spending quality time in an open and relaxing agro-tourism environment. Those comparing Resorts near Pune can consider a destination suitable for family outings, weekend plans, one-day picnics, celebrations and short getaways. People looking for the Best resorts near Pune can choose a nature-oriented setting where agricultural surroundings, greenery and recreational experiences create a refreshing atmosphere. Pet owners searching for Pet friendly resorts near Pune can also consider a countryside destination where visitors can plan relaxed outings with their companions, subject to applicable property guidelines and arrangements. Resorts near Pune for weekend are suitable for visitors who want to step away from the city for a short break and enjoy nature, outdoor leisure and peaceful surroundings. A One day resort near Pune can be convenient for families, friends and groups who want a complete day outing without planning an extended holiday. Families searching for Resorts near Pune for family get together can use the destination for reunions, celebrations, casual gatherings and quality time across different age groups. Couples looking for Resorts near Pune for couples can enjoy a calm environment suitable for short romantic getaways, celebrations and relaxed leisure time. Visitors interested in Luxury resorts near Pune can also explore an agro-tourism experience that focuses on peaceful surroundings, open spaces, nature and comfortable leisure rather than crowded urban entertainment. Resorts near Pune for family one day trip can be suitable for parents and children looking for outdoor recreation, countryside views and shared experiences. A One day resort near Pune for couples provides an option for couples who want to spend quality time together in a peaceful setting without travelling far from Pune. Om Agro Tourism also offers an alternative to conventional city resorts by combining agricultural landscapes, rural surroundings and recreational possibilities. Families can plan seasonal outings, children can enjoy suitable outdoor recreation and adults can relax amid greenery. Friends and corporate groups can use the setting for informal gatherings, group recreation and weekend breaks. Monsoon visits can bring lush greenery and a refreshing countryside atmosphere, while winter offers comfortable conditions for outdoor leisure and summer outings can be planned around suitable timings. The destination can be considered for one-day picnics, family get-togethers, couple outings, weekend escapes, group gatherings and nature-based recreation. With its convenient location and combination of agro-tourism, nature and leisure, Om Agro Tourism provides a memorable choice for visitors searching for a resort near Pune and nearby areas.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/resort-near-by-pune"
  }
};




    return (
        <div>
<Helmet>
  <title>
    Resort Near by Pune | Best Family, Couple, Weekend & One Day Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism is a peaceful resort near Pune for families, couples and groups, offering one-day picnics, weekend outings, nature experiences and family get-togethers."
  />

  <meta
    name="keywords"
    content="Resort Near by Pune, Resort near by Pune, Resorts near Pune, Best resorts near Pune, Pet friendly resorts near Pune, Resorts near Pune for weekend, One day resort near Pune, Resorts near Pune for family get together, Resorts near Pune for couples, Luxury resorts near Pune, Resorts near Pune for family one day trip, One day resort near Pune for couples, best resort near Pune, best resorts near Pune for family, family resorts near Pune, family resort near Pune, resorts near Pune for family, resorts near Pune for family outing, resorts near Pune for family get together, family get together resorts near Pune, family picnic resort near Pune, one day picnic resort near Pune, one day picnic resorts near Pune, one day outing resort near Pune, one day resort near Pune for family, one day resort near Pune for couples, couple resorts near Pune, resorts for couples near Pune, romantic resorts near Pune, romantic getaway near Pune, couple getaway near Pune, weekend resorts near Pune, weekend resort near Pune, best weekend resorts near Pune, weekend getaway near Pune, short stay resorts near Pune, one day stay resort near Pune, one day trip resort near Pune, family one day trip near Pune, one day family outing near Pune, one day family resort near Pune, family day trip near Pune, pet friendly resort near Pune, pet friendly places near Pune, pet friendly picnic resort near Pune, luxury resort near Pune, luxury resorts near Pune for family, luxury resorts near Pune for couples, premium resorts near Pune, nature resorts near Pune, nature resort near Pune, nature outing near Pune, nature getaway near Pune, resorts near Pune with activities, activity resorts near Pune, adventure resorts near Pune, resorts with adventure activities near Pune, resorts near Pune for corporate outing, corporate outing resort near Pune, team outing resort near Pune, team outing places near Pune, corporate picnic resort near Pune, group outing resort near Pune, friends outing resort near Pune, birthday resort near Pune, birthday outing resort near Pune, picnic places near Pune, best picnic resort near Pune, picnic resort near Pune, one day picnic near Pune, one day outing near Pune, day outing near Pune, agro tourism near Pune, agro tourism resort near Pune, agri tourism near Pune, farm resort near Pune, countryside resort near Pune, resort near Pune for weekend stay, resorts near Pune for overnight stay, one night stay near Pune, resort for family weekend near Pune, resort for couple weekend near Pune, best one day resort near Pune, best family resort near Pune, best couple resort near Pune"
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
                            <img src='/images/keyword/35.jpg' alt='img' className='img-fluid' />
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

export default Resortnearbypune;