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

function Picnicspotnearpradhikarn() {

const cardData = {
    keyword: "Picnic Spot Near Pradhikaran",
    headingDescription: "Om Agro Tourism is a refreshing choice for people looking for a picnic spot near Pradhikaran, offering a peaceful countryside setting with enjoyable activities, tasty homemade food, and outdoor experiences. Families, friends, and groups from Pradhikaran, Nigdi, Akurdi, and Pimpri Chinchwad can plan a comfortable one-day outing surrounded by greenery and open spaces. With options suitable for nature picnics, family outings, and activity-filled day trips, the destination provides a pleasant break from the busy city environment.",
    topPlaces: [
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride brings a traditional rural experience to a family picnic near Pradhikaran, allowing visitors to enjoy a relaxed ride while experiencing the charm of village life. It is a memorable activity for children, families, and groups looking for something different during their one-day outing."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food adds a comforting touch to a family resort outing near Pradhikaran, with wholesome flavors that complement a full day of outdoor activities. It is especially suitable for families and groups who want to enjoy a satisfying meal as part of their picnic experience."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching provides a peaceful nature-focused experience for visitors searching for a nature picnic spot near Pradhikaran. The surrounding countryside offers an opportunity to slow down, observe birds, and enjoy the natural environment away from the crowded city."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride gives guests an authentic farm-style experience and works well for a one-day picnic resort visit near Pradhikaran. Children and adults can enjoy this rural activity while getting a closer feel of agricultural surroundings and countryside life."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops make the outing more interactive by introducing visitors to agricultural surroundings and rural activities. Families visiting from Pradhikaran, Nigdi, or Akurdi can include this experience when planning an educational, relaxing, and activity-oriented picnic."
        },
        {
            title: "Boating",
            description: "Boating offers a calm outdoor activity for families and friends looking for a picnic place with activities near Pradhikaran. The experience adds variety to a one-day trip and gives visitors an enjoyable way to spend time together in a refreshing setting."
        },
        {
            title: "Jungle Safari",
            description: "Jungle Safari adds an adventurous element to a family outing and is suitable for visitors who want more than a simple picnic. Guests can enjoy an engaging outdoor experience while exploring the natural surroundings and making their one-day trip more memorable."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide flexible entertainment for children, families, and groups visiting for a picnic near Pradhikaran. The variety of games helps everyone stay engaged throughout the outing and makes the destination suitable for different age groups."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding gives families and groups an exciting countryside activity to include in their picnic schedule. It is a good choice for visitors from Pimpri Chinchwad and nearby areas who want an active experience during a one-day resort or family outing."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities bring a fun and energetic element to the picnic experience, particularly for families planning a full-day outing. Visitors can combine water-based recreation with other rural and outdoor activities for a varied day trip near Pradhikaran."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Pradhikaran",
            description: "Om Agro Tourism offers a peaceful countryside setting for visitors searching for a picnic spot near Pradhikaran. Families and groups can spend quality time together while enjoying nature, food, recreational activities, and a comfortable one-day outing away from the busy city."
        },
        {
            name: "One Day Picnic Spot Near Pradhikaran",
            description: "For a one day picnic spot near Pradhikaran, Om Agro Tourism combines open surroundings, enjoyable activities, homemade food, and rural experiences in one destination. The setup makes it convenient for families, friends, and groups planning a complete day without requiring an overnight stay."
        },
        {
            name: "Best Picnic Spot Near Pradhikaran",
            description: "Visitors looking for the best picnic spot near Pradhikaran can enjoy a combination of nature, recreation, traditional experiences, and food at Om Agro Tourism. Its variety of activities makes it suitable for different age groups and different types of day outings."
        },
        {
            name: "Family Picnic Spot Near Pradhikaran",
            description: "A family picnic spot near Pradhikaran should offer activities that appeal to children and adults alike. Om Agro Tourism provides a balanced experience with outdoor recreation, rural attractions, food, and relaxing surroundings for families spending quality time together."
        },
        {
            name: "Picnic Resort Near Pradhikaran",
            description: "Om Agro Tourism is a convenient picnic resort near Pradhikaran for guests who want to combine relaxation with recreational experiences. Visitors can enjoy the countryside atmosphere along with food and multiple activities during their planned outing."
        },
        {
            name: "One Day Picnic Resort Near Pradhikaran",
            description: "A one day picnic resort near Pradhikaran can make it easier for families and groups to enjoy several experiences within a single day. Om Agro Tourism offers nature-oriented surroundings, recreational activities, traditional rural experiences, and food for a well-rounded outing."
        },
        {
            name: "Best Resort Near Pradhikaran for Picnic",
            description: "Those searching for the best resort near Pradhikaran for picnic activities can choose Om Agro Tourism for its mix of countryside atmosphere and recreational options. The destination supports relaxed family outings as well as more active group plans."
        },
        {
            name: "Family Resort Near Pradhikaran",
            description: "Om Agro Tourism provides a family resort experience near Pradhikaran where parents, children, and extended family members can enjoy different activities at their own pace. The combination of open spaces, food, nature, and recreation creates a comfortable environment for family gatherings."
        },
        {
            name: "One Day Trip Near Pradhikaran",
            description: "Planning a one day trip near Pradhikaran becomes convenient with a destination that offers multiple activities in one place. Om Agro Tourism allows visitors to spend the day enjoying rural experiences, nature, recreation, and meals without the need for a long-distance journey."
        },
        {
            name: "Family One Day Trip Near Pradhikaran",
            description: "A family one day trip near Pradhikaran can be planned around activities suitable for both children and adults. Om Agro Tourism offers a varied environment where families can enjoy games, outdoor experiences, food, and countryside attractions together."
        },
        {
            name: "Picnic Places Near Pradhikaran",
            description: "Among picnic places near Pradhikaran, Om Agro Tourism provides a distinctive rural setting with nature-focused surroundings and a variety of recreational experiences. It is suitable for families, friends, school groups, and other visitors seeking a refreshing day outside the city."
        },
        {
            name: "Best Picnic Places Near Pradhikaran",
            description: "Visitors comparing the best picnic places near Pradhikaran can consider Om Agro Tourism for its combination of natural surroundings, traditional activities, food, and recreation. The destination gives groups the flexibility to create a relaxed or activity-filled picnic schedule."
        },
        {
            name: "Affordable Picnic Spot Near Pradhikaran",
            description: "An affordable picnic spot near Pradhikaran should provide enough activities and experiences to make a full-day outing worthwhile. Om Agro Tourism offers families and groups an opportunity to enjoy nature, food, and recreation in a countryside environment."
        },
        {
            name: "Budget Picnic Resort Near Pradhikaran",
            description: "For visitors searching for a budget picnic resort near Pradhikaran, Om Agro Tourism provides multiple experiences within one destination. Families and groups can enjoy outdoor activities, rural attractions, homemade food, and leisure time while planning a practical day outing."
        },
        {
            name: "Picnic Spot Near Nigdi Pradhikaran",
            description: "Om Agro Tourism is a suitable option for people searching for a picnic spot near Nigdi Pradhikaran and looking to escape the urban routine. Its countryside atmosphere, recreational activities, and food options help create a refreshing experience for families and groups."
        },
        {
            name: "Resort Near Pradhikaran for Family Outing",
            description: "A resort near Pradhikaran for family outing should provide varied activities so that different age groups can enjoy the day. Om Agro Tourism offers outdoor recreation, traditional rural experiences, nature activities, and food that can be enjoyed as part of a family gathering."
        },
        {
            name: "One Day Resort Near Pradhikaran",
            description: "Om Agro Tourism works well as a one day resort near Pradhikaran for visitors who want recreation without planning an overnight stay. Families and friends can spend the day exploring activities, enjoying meals, and relaxing in a countryside environment."
        },
        {
            name: "Nature Picnic Spot Near Pradhikaran",
            description: "Nature lovers searching for a nature picnic spot near Pradhikaran can enjoy the open countryside environment at Om Agro Tourism. Bird watching, farm experiences, and outdoor activities provide opportunities to spend meaningful time surrounded by a more natural setting."
        },
        {
            name: "Picnic Spot Near Akurdi Pradhikaran",
            description: "For visitors from Akurdi Pradhikaran, Om Agro Tourism offers a refreshing option for a day away from regular city surroundings. Families and groups can combine rural experiences, games, food, and outdoor activities to create a comfortable picnic schedule."
        },
        {
            name: "Picnic Spot Near Pimpri Chinchwad Pradhikaran",
            description: "Om Agro Tourism is an appealing picnic spot near Pimpri Chinchwad Pradhikaran for families and groups looking for a countryside day outing. Its range of activities and relaxing environment allows visitors to enjoy both recreation and quality time together."
        },
        {
            name: "Family Picnic Resort Near Pradhikaran",
            description: "A family picnic resort near Pradhikaran becomes more enjoyable when children and adults have several experiences to choose from. Om Agro Tourism combines rural attractions, outdoor recreation, food, and nature-based activities for a varied family outing."
        },
        {
            name: "Picnic Spot with Activities Near Pradhikaran",
            description: "Visitors searching for a picnic spot with activities near Pradhikaran can enjoy a diverse day at Om Agro Tourism. From traditional countryside experiences and nature activities to games and water-based recreation, the destination offers several ways to keep a group engaged."
        }
    ],
    tableData: [
        ["Picnic Spot Near Pradhikaran"],
        ["One Day Picnic Spot Near Pradhikaran"],
        ["Best Picnic Spot Near Pradhikaran"],
        ["Family Picnic Spot Near Pradhikaran"],
        ["Picnic Resort Near Pradhikaran"],
        ["One Day Picnic Resort Near Pradhikaran"],
        ["Best Resort Near Pradhikaran for Picnic"],
        ["Family Resort Near Pradhikaran"],
        ["One Day Trip Near Pradhikaran"],
        ["Family One Day Trip Near Pradhikaran"],
        ["Picnic Places Near Pradhikaran"],
        ["Best Picnic Places Near Pradhikaran"],
        ["Affordable Picnic Spot Near Pradhikaran"],
        ["Budget Picnic Resort Near Pradhikaran"],
        ["Picnic Spot Near Nigdi Pradhikaran"],
        ["Resort Near Pradhikaran for Family Outing"],
        ["One Day Resort Near Pradhikaran"],
        ["Nature Picnic Spot Near Pradhikaran"],
        ["Picnic Spot Near Akurdi Pradhikaran"],
        ["Picnic Spot Near Pimpri Chinchwad Pradhikaran"],
        ["Family Picnic Resort Near Pradhikaran"],
        ["Picnic Spot with Activities Near Pradhikaran"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Convenient Countryside Escape",
            WhyChoosedescription: "Om Agro Tourism gives visitors from Pradhikaran, Nigdi, Akurdi, and Pimpri Chinchwad an opportunity to step away from the urban routine and spend quality time in a peaceful countryside environment."
        },
        {
            WhyChooseheading: "Activities for Different Age Groups",
            WhyChoosedescription: "Families can choose from a range of recreational and rural experiences, making the outing enjoyable for children, parents, friends, and larger groups with different interests."
        },
        {
            WhyChooseheading: "Authentic Rural Experiences",
            WhyChoosedescription: "Bull Cart Ride, Tractor Ride, and Farm Tours and Workshops add a traditional village character to the picnic, giving visitors experiences that feel different from a regular city recreation centre."
        },
        {
            WhyChooseheading: "Enjoyable Family Outings",
            WhyChoosedescription: "The combination of open spaces, games, food, nature, and activities creates a flexible environment where families can relax together while keeping children and adults entertained."
        },
        {
            WhyChooseheading: "Nature-Focused Environment",
            WhyChoosedescription: "Bird Watching, farm experiences, and outdoor surroundings provide a refreshing setting for visitors who want their one-day picnic to include meaningful contact with nature."
        },
        {
            WhyChooseheading: "Variety Within One Destination",
            WhyChoosedescription: "Visitors do not need to depend on a single activity for entertainment, as the destination brings together rural experiences, water recreation, games, food, and outdoor activities in one place."
        },
        {
            WhyChooseheading: "Suitable for Group Plans",
            WhyChoosedescription: "Friends, families, and other groups can create their own pace for the day by combining active attractions with relaxed meals and nature-oriented experiences."
        },
        {
            WhyChooseheading: "Memorable One-Day Experience",
            WhyChoosedescription: "A thoughtfully planned visit can include recreation, countryside exploration, traditional activities, and shared meals, making Om Agro Tourism a practical choice for a memorable one-day outing near Pradhikaran."
        }
    ]
};


const faqData = [
    {
        question: "What makes Om Agri Tourism a suitable day-out option for people from Pradhikaran?",
        answer: "Visitors looking for a change from the planned urban surroundings of Pradhikaran can enjoy a countryside experience with recreation and farm-based activities. Swimming, boating, horse riding, tractor rides and bull cart rides can be combined with bird watching, homemade food and time in the greenery."
    },
    {
        question: "Which activities can visitors enjoy at a picnic spot near Pradhikaran?",
        answer: "The outing can be filled with a mix of active and relaxed experiences. Guests may spend time in the swimming pool, enjoy boating, try horse riding, or experience tractor and bull cart rides before taking a break for food and nature observation."
    },
    {
        question: "Can families from Pradhikaran visit Om Agri Tourism for a one-day picnic?",
        answer: "A family can plan the day around activities that suit different age groups. Children may enjoy the recreational activities and countryside rides, while adults and senior members can choose boating, bird watching, homemade food and peaceful time around the farm."
    },
    {
        question: "What kind of countryside experience can be enjoyed near Pradhikaran Pune?",
        answer: "The destination gives visitors an opportunity to experience traditional rural activities alongside modern recreational options. Horse riding, tractor rides and bull cart rides bring a farm-life element to the outing, while bird watching and greenery create a more natural atmosphere."
    },
    {
        question: "Is Om Agri Tourism a good option for a friends' picnic from Pradhikaran?",
        answer: "Friends can enjoy an active group outing by combining swimming, boating and horse riding with traditional farm rides. The schedule can also include a relaxed food break, photography and time together in the open surroundings, making the day more social and enjoyable."
    },
    {
        question: "What can children experience during a picnic near Pradhikaran?",
        answer: "Young visitors can explore several outdoor experiences depending on their age and comfort. Swimming, boating, horse riding, tractor rides and bull cart rides can provide entertainment, while bird watching can introduce them to the natural side of the countryside. Adult supervision is advisable during activities."
    },
    {
        question: "Can senior citizens enjoy a picnic at Om Agri Tourism without participating in every activity?",
        answer: "Senior family members can follow a comfortable pace and choose quieter parts of the experience. Bird watching, enjoying homemade food, sitting amid the greenery and spending time with family can be relaxing alternatives while younger guests take part in rides or water activities."
    },
    {
        question: "How can a group from Pradhikaran plan a balanced one-day picnic?",
        answer: "A practical itinerary could begin with swimming or boating, followed by one or two countryside rides before a meal break. The later part of the visit can remain flexible for bird watching, photography and relaxation, allowing the group to enjoy the farm without an overly packed schedule."
    },
    {
        question: "Does Om Agri Tourism combine food with outdoor picnic activities?",
        answer: "Homemade food can become an enjoyable part of the day between different activities. Guests can take a break after swimming, boating or farm rides, enjoy a meal together and then spend some time exploring the greenery or observing birds."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Pradhikaran?",
        answer: "Om Agri Tourism offers a combination of outdoor recreation, traditional rural experiences, nature and food in a farm setting. Visitors from Pradhikaran can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching while taking a refreshing break from their everyday city routine."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Amol Gaikwad",
        feedback:
            "The farm setting gave our group a completely different kind of weekend experience. We started with boating and swimming, then tried the horse riding and traditional bull cart ride. What stood out most was having enough open space to relax, enjoy homemade food and spend uninterrupted time together.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Kavita Wagh",
        feedback:
            "For our family, the variety of experiences was the biggest advantage. The kids were eager to try the rides and outdoor activities, while the elders enjoyed the greenery, bird watching and food. It felt like a proper break from the familiar Pradhikaran surroundings and gave everyone a pleasant day to remember.",
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
  "name": "Picnic Spot Near Pradhikaran",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-pradhikaran.webp",
  "description": "Picnic Spot Near Pradhikaran is a suitable choice for families, friends, students, school groups, corporate teams, and visitors searching for a refreshing one-day escape from the regular urban routine. Om Agro Tourism offers a countryside-oriented agro-tourism environment where guests can spend quality time together and enjoy a peaceful change of surroundings away from the busy city atmosphere. A One Day Picnic Spot Near Pradhikaran can be considered by people who want to enjoy a full-day outing without arranging an overnight stay. Those searching for the Best Picnic Spot Near Pradhikaran can consider an outdoor destination for family gatherings, weekend recreation, friends' get-togethers, school picnics, college outings, corporate day trips, and special celebrations. The Family Picnic Spot Near Pradhikaran is suitable for parents, children, relatives, and groups who want to relax and spend meaningful time together. Visitors looking for a Picnic Resort Near Pradhikaran can consider an agro-tourism destination for a dedicated day-outing experience in a countryside-inspired environment. A One Day Picnic Resort Near Pradhikaran can be useful for groups that prefer spending their entire outing at one destination rather than travelling between several city attractions. People searching for the Best Resort Near Pradhikaran for Picnic or Family Resort Near Pradhikaran can consider a peaceful outdoor setting for family recreation, friends' gatherings, student outings, and group activities. The destination can be considered by visitors travelling from Pradhikaran, Nigdi, Akurdi, Ravet, Kiwale, Mamurdi, Dehu Road, Punawale, Tathawade, Chinchwad, Pimpri, Pimple Saudagar, Pimple Nilakh, Thergaon, Wakad, Hinjawadi, Moshi, Bhosari, and other nearby Pune areas. Families can plan a relaxed day together, while friends can enjoy a casual picnic away from their usual schedules. Schools and colleges may also consider the destination for student picnics, recreational outings, and group day trips. Corporate teams can plan informal employee gatherings and team outings in a different environment from the regular workplace. Om Agro Tourism provides a rural-inspired atmosphere that can make a one-day outing feel different from crowded commercial areas and routine city entertainment. A One Day Picnic Near Pradhikaran can be a practical option for visitors who want to enjoy an outdoor break while returning home on the same day. People searching for Family One Day Trip Near Pradhikaran, Picnic Places Near Pradhikaran, Best Picnic Places Near Pradhikaran, One Day Outing Near Pradhikaran, or Weekend Picnic Near Pradhikaran can consider an agro-tourism experience for a peaceful escape near Pune. The open surroundings create an opportunity to disconnect from the fast pace of city life and spend uninterrupted time with family, classmates, friends, or colleagues. Whether the plan is a family picnic, school outing, college trip, corporate gathering, friends' day out, or weekend recreation, Om Agro Tourism offers a suitable countryside-oriented concept for an enjoyable one-day experience near Pradhikaran and Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-pradhikaran"
  }
};







    return (
        <div>
<Helmet>
  <title>
    Picnic Spot Near Pradhikaran | Best One Day Picnic & Family Resort | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a Picnic Spot Near Pradhikaran for families, friends, students and corporate groups looking for a peaceful one-day picnic, family outing and agro-tourism experience."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Pradhikaran, One Day Picnic Spot Near Pradhikaran, Best Picnic Spot Near Pradhikaran, Family Picnic Spot Near Pradhikaran, Picnic Resort Near Pradhikaran, One Day Picnic Resort Near Pradhikaran, Best Resort Near Pradhikaran for Picnic, Family Resort Near Pradhikaran, One Day Trip Near Pradhikaran, Family One Day Trip Near Pradhikaran, One Day Picnic Near Pradhikaran, Picnic Places Near Pradhikaran, Best Picnic Places Near Pradhikaran, Family Picnic Near Pradhikaran, One Day Outing Near Pradhikaran, Best One Day Outing Near Pradhikaran, Picnic Destination Near Pradhikaran, Weekend Picnic Near Pradhikaran, Weekend Outing Near Pradhikaran, Family Outing Near Pradhikaran, School Picnic Spot Near Pradhikaran, School Picnic Places Near Pradhikaran, College Picnic Near Pradhikaran, Student Picnic Spot Near Pradhikaran, Corporate Picnic Near Pradhikaran, Corporate Outing Near Pradhikaran, Agro Tourism Near Pradhikaran, Agro Tourism Near Pune, Budget Picnic Spot Near Pradhikaran, Picnic Resort Near Nigdi, One Day Picnic Near Akurdi, Family Picnic Near Ravet, Picnic Places Near Kiwale, One Day Picnic Near Mamurdi, Family Picnic Near Dehu Road, Picnic Spot Near Punawale, One Day Picnic Near Tathawade, Family Picnic Near Chinchwad, Picnic Resort Near Pimpri, One Day Picnic Near Pimple Saudagar, Family Picnic Near Wakad, Picnic Spot Near Hinjawadi, One Day Picnic Near Moshi, Family Picnic Near Bhosari, One Day Picnic Near Pune"
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
                            <img src='/images/keyword/139.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearpradhikarn;