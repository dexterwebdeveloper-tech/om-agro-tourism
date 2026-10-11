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

function Picnicspotnearpunewala() {

const cardData = {
    keyword: "Picnic Spot Near Punawale",
    headingDescription: "Om Agro Tourism is a refreshing countryside destination for visitors searching for a picnic spot near Punawale. Surrounded by a peaceful rural atmosphere, the destination brings together traditional farm experiences, outdoor recreation, nature activities, games, water-based entertainment, and freshly prepared homemade food. It is suitable for families, friends, and groups planning a one day picnic, short trip, affordable family outing, or relaxing weekend escape from Punawale, Wakad, Tathawade, and nearby Pune areas.",
    topPlaces: [
        {
            title: "Water Park Activities",
            description: "Water Park Activities add a refreshing and entertaining element to a picnic near Punawale, giving families and groups an opportunity to enjoy water-based recreation during their day out. The activities can be combined with other attractions for a varied and enjoyable countryside experience."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding offers an exciting outdoor experience for visitors who want something more adventurous during their picnic. Families and groups can enjoy this activity while spending time in the open rural surroundings and creating memorable moments together."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food gives guests the opportunity to enjoy freshly prepared meals in a relaxed countryside environment. It adds convenience to a one day picnic and allows families or groups to make their outing more complete without depending on separate dining arrangements."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching provides a peaceful nature-based activity for visitors who enjoy observing the surroundings at a slower pace. It is particularly suitable for guests searching for a nature picnic spot near Punawale where relaxation and outdoor exploration can be enjoyed together."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride introduces visitors to a traditional rural experience and adds a distinctive village touch to the picnic. Families and children can enjoy this activity as part of a countryside outing that feels different from a typical urban recreational trip."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide flexible entertainment for children, adults, and larger groups. The combination of different games makes it easier for families and friends to remain engaged throughout their one day outing while enjoying a relaxed environment."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops allow visitors to explore the agricultural side of the destination and experience a closer connection with rural surroundings. The interactive nature of the activity makes it useful for families and groups looking for an informative as well as enjoyable picnic."
        },
        {
            title: "Boating",
            description: "Boating gives guests a relaxing way to enjoy the outdoor surroundings and spend quality time together. It can add a calm water-based experience to a family picnic while providing a pleasant change from games and other active attractions."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride offers a fun countryside experience that lets visitors experience an important part of traditional farm life. It can be especially enjoyable for children and families looking to include unique rural activities in their picnic plan."
        },
        {
            title: "Swimming Pool",
            description: "Swimming Pool access gives visitors a refreshing leisure option during their day out. Families searching for a picnic resort near Punawale can combine pool time with farm activities, games, nature experiences, and food for a balanced outing."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Punawale",
            description: "Om Agro Tourism offers a peaceful rural setting for visitors searching for a picnic spot near Punawale, with a variety of activities, traditional farm experiences, nature-based recreation, games, water activities, and food options."
        },
        {
            name: "One Day Picnic Spot Near Punawale",
            description: "A one day picnic spot near Punawale becomes more convenient when several activities are available at the same destination. Families and groups can enjoy farm experiences, games, rides, water recreation, nature activities, and meals within a single day."
        },
        {
            name: "Best Picnic Spot Near Punawale",
            description: "Visitors looking for the best picnic spot near Punawale can consider a destination that combines peaceful countryside surroundings with entertainment and outdoor experiences. Om Agro Tourism provides multiple ways to enjoy a family or group day out."
        },
        {
            name: "Family Picnic Spot Near Punawale",
            description: "A family picnic spot near Punawale should provide options for children as well as adults. Farm activities, games, rides, nature experiences, swimming, and water recreation help create a varied outing where different members of the family can participate."
        },
        {
            name: "Picnic Resort Near Punawale",
            description: "Om Agro Tourism is suitable for guests searching for a picnic resort near Punawale where relaxation and recreation can be enjoyed together. The countryside environment, activities, food, and leisure options make it suitable for day-long family plans."
        },
        {
            name: "One Day Picnic Resort Near Punawale",
            description: "A one day picnic resort near Punawale is a practical choice for people who want a countryside break without arranging an overnight stay. Visitors can spend their day enjoying activities, food, open surroundings, and quality time with their group."
        },
        {
            name: "Best Resort Near Punawale for Picnic",
            description: "Those comparing the best resort near Punawale for picnic plans can look for a destination offering both relaxation and activities. Om Agro Tourism combines rural experiences, games, water recreation, nature activities, and homemade food."
        },
        {
            name: "Family Resort Near Punawale",
            description: "A family resort near Punawale can make a day outing more enjoyable when it offers experiences for different age groups. Visitors can choose from farm activities, traditional rides, games, swimming, nature exploration, and food during their visit."
        },
        {
            name: "One Day Trip Near Punawale",
            description: "Planning a one day trip near Punawale is easier when the destination offers multiple experiences in one place. Guests can enjoy a countryside environment, recreational activities, traditional attractions, games, and food without needing a lengthy holiday."
        },
        {
            name: "Family One Day Trip Near Punawale",
            description: "A family one day trip near Punawale can include a mixture of active recreation and relaxed experiences. Farm tours, rides, games, water activities, nature exploration, and homemade meals provide several ways for families to enjoy the day together."
        },
        {
            name: "Picnic Places Near Punawale",
            description: "Visitors exploring picnic places near Punawale can consider Om Agro Tourism for its combination of rural surroundings and recreational experiences. The destination gives families and groups opportunities to enjoy nature, activities, traditional experiences, and food."
        },
        {
            name: "Best Picnic Places Near Punawale",
            description: "The best picnic places near Punawale can offer more than an open area for sitting and eating. Om Agro Tourism provides a broader countryside experience through farm activities, games, rides, water recreation, nature experiences, and homemade food."
        },
        {
            name: "Affordable Picnic Spot Near Punawale",
            description: "An affordable picnic spot near Punawale can be a practical option for families and groups who want several activities within a single day outing. A variety of experiences helps visitors enjoy their time without planning a distant vacation."
        },
        {
            name: "Budget Picnic Resort Near Punawale",
            description: "A budget picnic resort near Punawale can provide a convenient countryside escape for visitors looking for recreation and relaxation within a manageable day-trip plan. Activities, food, and natural surroundings add value to the overall outing."
        },
        {
            name: "Picnic Spot Near Punawale Pune",
            description: "For visitors searching for a picnic spot near Punawale Pune, Om Agro Tourism offers a rural atmosphere with farm experiences, outdoor activities, games, water recreation, nature-based options, and homemade food suitable for families and groups."
        },
        {
            name: "Resort Near Punawale for Family Outing",
            description: "A resort near Punawale for family outing plans should provide enough variety to keep different age groups comfortable and entertained. Visitors can enjoy games, rides, farm activities, swimming, nature experiences, and meals during a shared day out."
        },
        {
            name: "One Day Resort Near Punawale",
            description: "A one day resort near Punawale provides an easy option for visitors who want to relax outside the city without staying overnight. The combination of recreational activities, rural surroundings, and food makes it suitable for short breaks."
        },
        {
            name: "Nature Picnic Spot Near Punawale",
            description: "A nature picnic spot near Punawale gives visitors an opportunity to step away from the urban environment and spend time around rural landscapes. Bird Watching, Farm Tours and Workshops, and outdoor activities add variety to a peaceful nature-focused outing."
        },
        {
            name: "Picnic Spot Near Wakad Punawale",
            description: "Visitors searching for a picnic spot near Wakad Punawale can choose a countryside destination that provides multiple activities in one place. Families and groups can enjoy traditional rural experiences, games, nature activities, water recreation, and food."
        },
        {
            name: "Picnic Spot Near Tathawade Punawale",
            description: "A picnic spot near Tathawade Punawale can be a convenient choice for families, friends, and groups looking for a short escape from the nearby urban areas. A range of outdoor activities and countryside experiences makes the outing more engaging."
        },
        {
            name: "Family Picnic Resort Near Punawale",
            description: "A family picnic resort near Punawale can provide a balanced day through activities such as games, farm experiences, traditional rides, swimming, nature exploration, and water recreation, giving family members different ways to enjoy their time."
        },
        {
            name: "Picnic Spot with Activities Near Punawale",
            description: "A picnic spot with activities near Punawale gives visitors more options than a simple outdoor gathering. Guests can enjoy farm tours, rides, games, water activities, swimming, nature experiences, and homemade food while spending quality time together."
        }
    ],
    tableData: [
        ["Picnic Spot Near Punawale"],
        ["One Day Picnic Spot Near Punawale"],
        ["Best Picnic Spot Near Punawale"],
        ["Family Picnic Spot Near Punawale"],
        ["Picnic Resort Near Punawale"],
        ["One Day Picnic Resort Near Punawale"],
        ["Best Resort Near Punawale for Picnic"],
        ["Family Resort Near Punawale"],
        ["One Day Trip Near Punawale"],
        ["Family One Day Trip Near Punawale"],
        ["Picnic Places Near Punawale"],
        ["Best Picnic Places Near Punawale"],
        ["Affordable Picnic Spot Near Punawale"],
        ["Budget Picnic Resort Near Punawale"],
        ["Picnic Spot Near Punawale Pune"],
        ["Resort Near Punawale for Family Outing"],
        ["One Day Resort Near Punawale"],
        ["Nature Picnic Spot Near Punawale"],
        ["Picnic Spot Near Wakad Punawale"],
        ["Picnic Spot Near Tathawade Punawale"],
        ["Family Picnic Resort Near Punawale"],
        ["Picnic Spot with Activities Near Punawale"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Escape",
            WhyChoosedescription: "Om Agro Tourism provides a refreshing change from the busy surroundings of Punawale, allowing families and groups to spend their day in a more relaxed rural environment with open spaces and outdoor experiences."
        },
        {
            WhyChooseheading: "Variety of Rural Activities",
            WhyChoosedescription: "Traditional experiences such as Bull Cart Ride and Tractor Ride give visitors something distinctive to enjoy, while Farm Tours and Workshops provide an opportunity to explore the agricultural side of the countryside."
        },
        {
            WhyChooseheading: "Family-Friendly Recreation",
            WhyChoosedescription: "Families can choose from activities suited to different age groups, including games, swimming, rides, nature experiences, and water-based recreation, making it easier to plan a shared outing."
        },
        {
            WhyChooseheading: "Nature and Farm Experience",
            WhyChoosedescription: "Bird Watching and Farm Tours and Workshops allow visitors to spend time closer to nature and understand aspects of rural surroundings, making the destination suitable for people who want more than conventional entertainment."
        },
        {
            WhyChooseheading: "Fun-Filled Day Out",
            WhyChoosedescription: "The combination of Indoor and Outdoor Games, Horse Riding, Boating, and other recreational options gives groups plenty of ways to stay entertained during a one day picnic or family outing."
        },
        {
            WhyChooseheading: "Refreshing Water Options",
            WhyChoosedescription: "Swimming Pool and Water Park Activities provide enjoyable ways to cool down and relax during the visit, adding a resort-style element to the countryside picnic experience."
        },
        {
            WhyChooseheading: "Homemade Dining",
            WhyChoosedescription: "Tasty Homemade Food adds convenience and comfort to the outing, allowing guests to enjoy freshly prepared meals while spending their day in the peaceful rural surroundings."
        },
        {
            WhyChooseheading: "Convenient Nearby Getaway",
            WhyChoosedescription: "For visitors from Punawale, Wakad, Tathawade, and surrounding Pune areas, a countryside day outing can be a convenient way to take a break from routine without planning a long-distance trip or overnight holiday."
        }
    ]
};


const faqData = [
    {
        question: "What kind of day can visitors from Punawale enjoy at Om Agri Tourism?",
        answer: "A visit can be shaped around a blend of recreation, countryside experiences and relaxed family time. Guests from Punawale can include swimming, boating, horse riding, tractor rides and bull cart rides in their plan, with bird watching and homemade food adding a peaceful touch to the outing."
    },
    {
        question: "Which activities are available for a picnic near Punawale Pune?",
        answer: "The outing can include several experiences beyond simply relaxing at a picnic location. Visitors can explore swimming, boating, horse riding, tractor rides, bull cart rides and bird watching, giving families, friends and small groups multiple ways to spend their time outdoors."
    },
    {
        question: "Would Om Agri Tourism be a good choice for families living in Punawale?",
        answer: "Families can find a comfortable mix of activities and quieter moments at the farm. Younger members may prefer swimming and rides, while adults can enjoy boating, homemade food, bird watching and the surrounding greenery without having to follow the same activity schedule."
    },
    {
        question: "How can friends make the most of a picnic trip from Punawale?",
        answer: "Friends can divide the day between group activities and casual downtime. Starting with swimming or boating, followed by horse riding or traditional farm rides, creates an active itinerary, while food, photography and conversations provide opportunities to unwind together."
    },
    {
        question: "What makes the countryside experience different from a regular picnic near Punawale?",
        answer: "Instead of limiting the outing to a conventional picnic setup, visitors can experience elements of rural life through tractor rides, bull cart rides and horse riding. Bird watching, greenery and homemade food further contribute to a more traditional farm-based day out."
    },
    {
        question: "Can children enjoy activities at Om Agri Tourism during a Punawale picnic?",
        answer: "Children can experience a variety of outdoor activities depending on their age and suitability. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching can keep young visitors engaged, with adults providing suitable supervision throughout the outing."
    },
    {
        question: "Is there a peaceful side to the picnic experience near Punawale?",
        answer: "Alongside recreational activities, guests can take time to enjoy the quieter surroundings of the farm. Sitting amid the greenery, watching birds, sharing homemade food and taking a break from the city's routine can make the day feel more relaxed."
    },
    {
        question: "What would be a practical one-day itinerary for visitors from Punawale?",
        answer: "An easy schedule could include swimming or boating earlier in the day, followed by horse riding or one of the countryside rides. After enjoying homemade food, the remaining time can be used for bird watching, photography and relaxed conversations rather than rushing between activities."
    },
    {
        question: "Can groups experience traditional farm rides at Om Agri Tourism?",
        answer: "Yes, the rural setting allows groups to include traditional experiences such as tractor rides and bull cart rides along with horse riding. These activities can add variety to a picnic and give visitors a closer feel of countryside recreation."
    },
    {
        question: "Why consider Om Agri Tourism while looking for a picnic spot near Punawale?",
        answer: "Om Agri Tourism brings together outdoor recreation, rural activities, nature and food in a countryside setting. Visitors from Punawale can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching while spending quality time with family or friends away from the usual urban routine."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Aditya Pawar",
        feedback:
            "A full day at Om Agri Tourism gave our group plenty to do without making the outing feel rushed. We enjoyed the boating and swimming, and the bull cart ride was a memorable change from our usual weekend plans. The farm atmosphere and homemade food made the experience even better.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss Neha Bhosale",
        feedback:
            "Seeing the children become excited about the countryside activities was the highlight of our family outing. They enjoyed the rides and outdoor experiences, while the adults appreciated the bird watching and peaceful greenery. It was a refreshing break from our regular Punawale routine and everyone returned happy.",
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
  "name": "Picnic Spot Near Punawale",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-punawale.webp",
  "description": "Picnic Spot Near Punawale is a suitable choice for families, friends, students, school groups, corporate teams, and visitors looking for a refreshing one-day escape from the busy urban routine. Om Agro Tourism offers a countryside-oriented agro-tourism environment where guests can spend quality time together and enjoy a peaceful change of surroundings away from the usual city schedule. A One Day Picnic Spot Near Punawale can be considered by people who want a complete day outing without arranging an overnight stay. Those searching for the Best Picnic Spot Near Punawale can consider an outdoor destination for family gatherings, weekend recreation, friends' get-togethers, school picnics, college outings, corporate day trips, and special celebrations. The Family Picnic Spot Near Punawale is suitable for parents, children, relatives, and larger groups who want to relax and create memorable moments together. Visitors searching for a Picnic Resort Near Punawale can consider an agro-tourism destination for a dedicated day-outing experience in a countryside-inspired setting. A One Day Picnic Resort Near Punawale is useful for groups that prefer spending their entire outing at one destination rather than travelling between several city attractions. People looking for the Best Resort Near Punawale for Picnic can consider a peaceful outdoor environment for family recreation, friends' gatherings, and group outings. The Family Resort Near Punawale concept can suit visitors planning a relaxed day with children, parents, relatives, or close friends. The destination can be considered by visitors travelling from Punawale, Tathawade, Wakad, Ravet, Kiwale, Mamurdi, Akurdi, Nigdi, Chinchwad, Pimpri, Pimple Saudagar, Pimple Nilakh, Thergaon, Hinjawadi, Mahalunge, Balewadi, Baner, and other nearby Pune areas. Families can enjoy a change from regular city entertainment, while friends can plan a casual picnic or weekend day trip. School and college groups may also consider the destination for recreational outings and student picnics, while corporate teams can plan informal employee gatherings and team outings. Om Agro Tourism provides a rural-inspired atmosphere that can make a one-day outing feel different from spending the day in crowded commercial areas. A One Day Picnic Near Punawale can be a practical option for people who want to enjoy an outdoor break and return home on the same day. Visitors searching for Family One Day Trip Near Punawale, Picnic Places Near Punawale, Best Picnic Places Near Punawale, One Day Outing Near Punawale, or Weekend Picnic Near Punawale can consider an agro-tourism experience for a peaceful escape near Pune. The open surroundings provide an opportunity to disconnect from the fast pace of city life and spend uninterrupted time with family, friends, classmates, or colleagues. Whether the requirement is a family picnic, school outing, college trip, corporate gathering, friends' day out, or weekend recreation, Om Agro Tourism offers a suitable countryside-oriented concept for an enjoyable one-day experience near Punawale and Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-punawale"
  }
};




    return (
        <div>


<Helmet>
  <title>
    Picnic Spot Near Punawale | Best One Day Picnic & Family Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a Picnic Spot Near Punawale for families, friends, students and corporate groups looking for a peaceful one-day picnic, family outing and agro-tourism experience."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Punawale, One Day Picnic Spot Near Punawale, Best Picnic Spot Near Punawale, Family Picnic Spot Near Punawale, Picnic Resort Near Punawale, One Day Picnic Resort Near Punawale, Best Resort Near Punawale for Picnic, Family Resort Near Punawale, One Day Trip Near Punawale, Family One Day Trip Near Punawale, One Day Picnic Near Punawale, Picnic Places Near Punawale, Best Picnic Places Near Punawale, Family Picnic Near Punawale, One Day Outing Near Punawale, Best One Day Outing Near Punawale, Picnic Destination Near Punawale, Weekend Picnic Near Punawale, Weekend Outing Near Punawale, Family Outing Near Punawale, School Picnic Spot Near Punawale, School Picnic Places Near Punawale, College Picnic Near Punawale, Student Picnic Spot Near Punawale, Corporate Picnic Near Punawale, Corporate Outing Near Punawale, Agro Tourism Near Punawale, Agro Tourism Near Pune, Budget Picnic Spot Near Punawale, Picnic Resort Near Tathawade, One Day Picnic Near Wakad, Family Picnic Near Ravet, Picnic Places Near Kiwale, One Day Picnic Near Mamurdi, Family Picnic Near Akurdi, Picnic Spot Near Nigdi, One Day Picnic Near Chinchwad, Family Picnic Near Pimpri, Picnic Resort Near Pimple Saudagar, One Day Picnic Near Hinjawadi, Family Picnic Near Mahalunge, Picnic Spot Near Balewadi, One Day Picnic Near Baner, Family Picnic Near Pune"
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
                            <img src='/images/keyword/136.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearpunewala;