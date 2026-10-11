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

function PicnicSpotNearNarayangaon() {

const cardData = {
    keyword: "Picnic Spot Near Narayangaon",
    headingDescription: "Om Agro Tourism is a refreshing countryside destination for visitors searching for a picnic spot near Narayangaon. Families, friends, corporate groups, and children can enjoy a peaceful day surrounded by nature with farm activities, outdoor recreation, homemade food, traditional rural experiences, and water-based activities. It is a suitable choice for a one day picnic, family outing, nature break, or group activity away from the busy city environment.",
    topPlaces: [
        {
            title: "Bird Watching",
            description: "Spend relaxing moments observing birds in the natural surroundings of the farm. Bird watching offers nature lovers, families, and children a peaceful way to explore the countryside while enjoying the fresh outdoor atmosphere."
        },
        {
            title: "Bull Cart Ride",
            description: "Experience a traditional countryside activity with a bull cart ride around the farm environment. It gives families and visitors an opportunity to enjoy rural culture and create memorable moments during their picnic."
        },
        {
            title: "Tasty Homemade Food",
            description: "Enjoy flavorful homemade food prepared with a traditional farm-style touch. The dining experience complements the peaceful surroundings and adds a satisfying element to a family picnic or group outing."
        },
        {
            title: "Horse Riding",
            description: "Horse riding brings an exciting outdoor element to the picnic experience. Children, youngsters, and families can enjoy this rural activity while exploring the open surroundings of the agro tourism destination."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Explore agricultural surroundings through farm tours and workshops that introduce visitors to farming practices, rural life, and nature. It is an engaging activity for families, students, and groups."
        },
        {
            title: "Boating",
            description: "Enjoy a refreshing boating experience as part of your countryside outing. This activity provides a calm and enjoyable way for families and groups to add something different to their one day picnic."
        },
        {
            title: "Jungle Safari",
            description: "Add an adventurous touch to the outing with jungle safari activities. The experience allows visitors to enjoy outdoor exploration and discover a different side of the natural surroundings during their picnic."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Families, friends, and corporate groups can participate in indoor and outdoor games for lively entertainment throughout the day. These activities are ideal for group interaction and recreational fun."
        },
        {
            title: "Swimming Pool",
            description: "Cool down and enjoy recreational time in the swimming pool during your picnic. It provides a refreshing activity for families and groups looking to combine relaxation with outdoor fun."
        },
        {
            title: "Tractor Ride",
            description: "Experience a traditional farm activity with a tractor ride through the countryside setting. This attraction offers children and adults a fun opportunity to experience rural farm life in a memorable way."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Narayangaon",
            description: "Om Agro Tourism offers a peaceful farm-based setting for visitors looking for a picnic spot near Narayangaon, with nature, traditional activities, recreational options, homemade food, and countryside experiences."
        },
        {
            name: "One Day Picnic Spot Near Narayangaon",
            description: "Plan a complete one day picnic near Narayangaon with farm tours, games, water activities, traditional rides, nature experiences, and homemade food available for a refreshing day away from the regular routine."
        },
        {
            name: "Best Picnic Spot Near Narayangaon",
            description: "Visitors searching for the best picnic spot near Narayangaon can enjoy a combination of rural surroundings, engaging activities, natural beauty, traditional experiences, and food in one convenient destination."
        },
        {
            name: "Family Picnic Spot Near Narayangaon",
            description: "Families can spend quality time together through activities such as horse riding, swimming, games, farm exploration, boating, and bird watching, creating an enjoyable outing for both children and adults."
        },
        {
            name: "Picnic Resort Near Narayangaon",
            description: "A picnic resort near Narayangaon can provide a welcome change from crowded urban spaces. Om Agro Tourism combines a farm environment with recreation, food, nature activities, and traditional rural experiences."
        },
        {
            name: "One Day Picnic Resort Near Narayangaon",
            description: "Enjoy a well-rounded one day outing with multiple activities, open surroundings, homemade food, farm experiences, and recreational attractions designed for families, friends, and organized groups."
        },
        {
            name: "Best Resort Near Narayangaon for Picnic",
            description: "For those comparing the best resort near Narayangaon for a picnic, Om Agro Tourism provides a countryside experience with activities, food, nature exploration, and rural attractions suitable for a memorable day trip."
        },
        {
            name: "Family Resort Near Narayangaon",
            description: "Families can choose a relaxing farm destination where different age groups can participate in enjoyable activities, explore the countryside, enjoy homemade food, and spend meaningful time together."
        },
        {
            name: "One Day Trip Near Narayangaon",
            description: "A one day trip near Narayangaon becomes more enjoyable with a change of scenery and access to farm activities, nature exploration, outdoor recreation, traditional rides, and food."
        },
        {
            name: "Family One Day Trip Near Narayangaon",
            description: "Plan a family one day trip filled with activities for children and adults, including games, horse riding, swimming, farm tours, boating, bird watching, and traditional rural experiences."
        },
        {
            name: "Picnic Places Near Narayangaon",
            description: "Visitors exploring picnic places near Narayangaon can choose a farm-based destination where natural surroundings, outdoor recreation, homemade food, and traditional attractions come together for a complete day outing."
        },
        {
            name: "Best Picnic Places Near Narayangaon",
            description: "Those looking for the best picnic places near Narayangaon can enjoy a countryside escape offering varied activities, farm experiences, nature exploration, food, and recreational options for different types of groups."
        },
        {
            name: "Affordable Picnic Spot Near Narayangaon",
            description: "An affordable picnic spot near Narayangaon can provide families and groups with several activities and experiences in one destination, helping them enjoy a refreshing outing without a complicated travel plan."
        },
        {
            name: "Budget Picnic Resort Near Narayangaon",
            description: "Visitors planning a budget picnic can enjoy a combination of countryside recreation, farm activities, traditional experiences, homemade food, and natural surroundings while spending quality time with their group."
        },
        {
            name: "Picnic Spot Near Junnar Narayangaon",
            description: "For visitors searching around the Junnar Narayangaon area, Om Agro Tourism provides a countryside setting with farm attractions, nature activities, games, traditional rides, food, and outdoor recreation."
        },
        {
            name: "Resort Near Narayangaon for Family Outing",
            description: "Families planning an outing can enjoy a variety of experiences including farm tours, horse riding, games, boating, swimming, bird watching, homemade food, and peaceful open surroundings."
        },
        {
            name: "One Day Resort Near Narayangaon",
            description: "Make a one day resort-style outing more engaging with access to rural attractions, outdoor activities, farm experiences, nature exploration, traditional rides, and food at a single destination."
        },
        {
            name: "Nature Picnic Spot Near Narayangaon",
            description: "Nature lovers can enjoy a peaceful farm environment with greenery, open spaces, bird watching, farm exploration, and outdoor activities that provide a refreshing break from everyday surroundings."
        },
        {
            name: "Picnic Spot Near Pune Narayangaon",
            description: "Visitors searching for a picnic spot near Pune Narayangaon can enjoy a countryside escape featuring farm activities, recreation, traditional rural experiences, homemade food, and nature-based attractions."
        },
        {
            name: "Family Picnic Resort Near Narayangaon",
            description: "A family picnic resort near Narayangaon can offer a balanced mix of relaxation and entertainment, with activities such as swimming, games, horse riding, farm tours, boating, and homemade food."
        },
        {
            name: "Picnic Spot with Activities Near Narayangaon",
            description: "A picnic spot with activities near Narayangaon offers more than a simple outdoor break. Guests can enjoy games, swimming, boating, horse riding, tractor rides, farm workshops, bird watching, and other countryside attractions."
        },
        {
            name: "Corporate Picnic Spot Near Narayangaon",
            description: "Corporate groups can enjoy a relaxed team outing with indoor and outdoor games, boating, farm activities, nature exploration, traditional attractions, and shared meals that encourage interaction outside the workplace."
        }
    ],
    tableData: [
        ["Picnic Spot Near Narayangaon"],
        ["One Day Picnic Spot Near Narayangaon"],
        ["Best Picnic Spot Near Narayangaon"],
        ["Family Picnic Spot Near Narayangaon"],
        ["Picnic Resort Near Narayangaon"],
        ["One Day Picnic Resort Near Narayangaon"],
        ["Best Resort Near Narayangaon for Picnic"],
        ["Family Resort Near Narayangaon"],
        ["One Day Trip Near Narayangaon"],
        ["Family One Day Trip Near Narayangaon"],
        ["Picnic Places Near Narayangaon"],
        ["Best Picnic Places Near Narayangaon"],
        ["Affordable Picnic Spot Near Narayangaon"],
        ["Budget Picnic Resort Near Narayangaon"],
        ["Picnic Spot Near Junnar Narayangaon"],
        ["Resort Near Narayangaon for Family Outing"],
        ["One Day Resort Near Narayangaon"],
        ["Nature Picnic Spot Near Narayangaon"],
        ["Picnic Spot Near Pune Narayangaon"],
        ["Family Picnic Resort Near Narayangaon"],
        ["Picnic Spot with Activities Near Narayangaon"],
        ["Corporate Picnic Spot Near Narayangaon"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Natural Countryside Setting",
            WhyChoosedescription: "The peaceful farm surroundings provide a refreshing change from busy urban areas, allowing visitors to relax, explore nature, and enjoy their picnic in an open countryside environment."
        },
        {
            WhyChooseheading: "Activities for Different Age Groups",
            WhyChoosedescription: "Children, adults, families, and groups can find suitable recreational options, including games, swimming, horse riding, boating, farm activities, and traditional rural experiences."
        },
        {
            WhyChooseheading: "Authentic Farm Experience",
            WhyChoosedescription: "Farm tours and workshops give visitors an opportunity to learn about agriculture and rural life while enjoying a hands-on countryside experience away from the usual city attractions."
        },
        {
            WhyChooseheading: "Traditional Rural Attractions",
            WhyChoosedescription: "Bull cart rides and tractor rides add a traditional touch to the outing, allowing guests to experience activities associated with village and farm life in an enjoyable setting."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty homemade food adds to the charm of the countryside visit and gives families and groups an opportunity to enjoy a satisfying meal with a traditional farm-style atmosphere."
        },
        {
            WhyChooseheading: "Fun for Families and Groups",
            WhyChoosedescription: "The combination of recreational activities, open spaces, nature experiences, and food makes the destination suitable for family picnics, friend groups, school outings, and corporate gatherings."
        },
        {
            WhyChooseheading: "Nature-Based Recreation",
            WhyChoosedescription: "Bird watching, farm exploration, outdoor activities, and peaceful surroundings allow visitors to combine relaxation with enjoyable nature-based recreation during their picnic."
        },
        {
            WhyChooseheading: "Complete Day Outing",
            WhyChoosedescription: "With activities, food, farm attractions, traditional experiences, water recreation, and natural surroundings available together, visitors can enjoy a varied and memorable one day picnic experience."
        }
    ]
};






const faqData = [
    {
        question: "What can visitors expect from a picnic at Om Agri Tourism near Narayangaon?",
        answer: "A visit to Om Agri Tourism gives Narayangaon visitors an opportunity to enjoy a countryside day surrounded by greenery and farm-based experiences. The outing can include swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food for a varied and relaxing picnic."
    },
    {
        question: "Which outdoor experiences are available at Om Agri Tourism for a Narayangaon picnic?",
        answer: "Guests can choose from several experiences depending on how they want to spend their day. Swimming and boating provide recreational options, while horse riding, tractor rides and bull cart rides bring a traditional rural element. Bird watching is also suitable for visitors who enjoy nature and peaceful surroundings."
    },
    {
        question: "Can families from Narayangaon visit Om Agri Tourism for a day picnic?",
        answer: "Families can plan a comfortable outing by combining activities with plenty of time to relax around the farm. Children can participate in suitable experiences with adult supervision, while parents can enjoy the open greenery, homemade food and slower pace of a countryside environment."
    },
    {
        question: "How is Om Agri Tourism suitable for a friends' outing near Narayangaon?",
        answer: "Friends can keep the day lively with swimming, boating and horse riding before trying tractor or bull cart rides. The group can also spend time taking photographs, enjoying meals, watching birds and relaxing together, making the picnic a mix of adventure and leisure."
    },
    {
        question: "What can children enjoy at a picnic spot near Narayangaon?",
        answer: "Children can discover a range of outdoor experiences at Om Agri Tourism, including swimming, boating and suitable farm rides. Bird watching can add an interesting nature-based activity, while the open surroundings give young visitors a chance to experience a countryside setting away from regular urban entertainment."
    },
    {
        question: "Does Om Agri Tourism provide traditional village experiences near Narayangaon?",
        answer: "The farm atmosphere allows visitors to experience activities associated with rural life rather than spending the entire day around conventional recreational facilities. Bull cart rides, tractor rides and horse riding can be paired with bird watching, farm surroundings and homemade food for a more distinctive countryside visit."
    },
    {
        question: "Can a group spend an entire day at Om Agri Tourism near Narayangaon?",
        answer: "A full-day itinerary can be arranged around different activities and comfortable breaks. Groups may begin with swimming or boating, continue with horse riding and traditional farm rides, and reserve time for food, photography, bird watching and relaxation so everyone can enjoy the outing at their own pace."
    },
    {
        question: "Is homemade food available for visitors enjoying a picnic at Om Agri Tourism?",
        answer: "Homemade food adds a traditional touch to the overall farm experience and gives guests a chance to enjoy a relaxed meal during their outing. Visitors can take a break from activities for food before continuing with swimming, boating, rides or nature observation."
    },
    {
        question: "Why might an agro tourism picnic be a better choice than a regular outing near Narayangaon?",
        answer: "An agro tourism visit brings together recreation, greenery and rural experiences instead of focusing on just one type of activity. Guests can move between water activities, traditional rides and nature observation while enjoying homemade food and a peaceful farm atmosphere, creating a more varied day trip."
    },
    {
        question: "Why choose Om Agri Tourism when searching for a picnic spot near Narayangaon?",
        answer: "For families, friends and groups wanting a countryside escape, Om Agri Tourism provides several activities in one farm-oriented setting. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching offer variety, while homemade food and the calm surroundings help make the picnic comfortable and memorable."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Saurabh Wagh",
        feedback:
            "Our family visited Om Agri Tourism from Narayangaon for a day picnic and enjoyed the peaceful farm atmosphere. The children had fun with boating and swimming, while the tractor and bull cart rides gave us a chance to experience something different. We also appreciated the homemade food and greenery around the property.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss Snehal Pawar",
        feedback:
            "We arranged a friends' outing at Om Agri Tourism and found plenty of activities to keep everyone involved. Horse riding and boating were our favorites, and the traditional farm rides made the day more memorable. Later, we relaxed around the greenery and enjoyed bird watching before having our meal.",
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
  "name": "Picnic Spot Near Narayangaon",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-narayangaon.webp",
  "description": "Picnic Spot Near Narayangaon is a refreshing choice for families, friends, couples, school groups, and corporate teams looking for a peaceful outdoor destination near the Pune region. Om Agro Tourism offers an agro-tourism-oriented countryside environment where visitors can step away from their everyday routine and enjoy quality time through outdoor recreation, open surroundings, picnic activities, and relaxed group experiences. A One Day Picnic Spot Near Narayangaon can be considered by families planning a short outing with children, friends arranging a day trip, or groups searching for a comfortable destination away from crowded urban areas. Visitors looking for the Best Picnic Spot Near Narayangaon can enjoy a nature-oriented setting where leisure, recreation, and group time come together. The Family Picnic Spot Near Narayangaon is suitable for family gatherings, birthdays, weekend outings, seasonal visits, and casual celebrations. People searching for a Picnic Resort Near Narayangaon or One Day Picnic Resort Near Narayangaon can plan an enjoyable day outing with the added appeal of an agro-tourism atmosphere and open countryside surroundings. Those considering the Best Resort Near Narayangaon can choose a destination suitable for families, friends, school groups, office teams, and couples who want a relaxed outdoor experience. The location can be considered by visitors from Narayangaon, Junnar, Manchar, Alephata, Rajgurunagar, Khed, Ambegaon, Chakan, Talegaon Dabhade, Moshi, and nearby Pune areas. A countryside picnic can provide a welcome change from the regular city schedule while giving families and groups an opportunity to enjoy outdoor recreation and meaningful time together. Om Agro Tourism provides a welcoming environment for a family picnic, school excursion, corporate outing, friends' gathering, birthday celebration, or simple weekend break near Narayangaon.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-narayangaon"
  }
};






    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Narayangaon | Best One Day Picnic Resort & Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Explore a Picnic Spot Near Narayangaon for families, friends, couples, school groups and corporate outings with outdoor recreation in a peaceful agro-tourism setting."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Narayangaon, One Day Picnic Spot Near Narayangaon, Best Picnic Spot Near Narayangaon, Family Picnic Spot Near Narayangaon, Picnic Resort Near Narayangaon, One Day Picnic Resort Near Narayangaon, Best Resort Near Narayangaon, One Day Picnic Near Narayangaon, Picnic Places Near Narayangaon, Best Picnic Places Near Narayangaon, Family Picnic Near Narayangaon, One Day Outing Near Narayangaon, Best One Day Outing Near Narayangaon, Picnic Resorts Near Narayangaon, Family Resort Near Narayangaon, One Day Trip Near Narayangaon, Family Outing Near Narayangaon, Weekend Picnic Near Narayangaon, School Picnic Spot Near Narayangaon, School Picnic Near Narayangaon, Corporate Outing Near Narayangaon, Agro Tourism Near Narayangaon, Agro Tourism Near Pune, Picnic Spot Near Junnar, One Day Picnic Near Junnar, Picnic Places Near Manchar, Family Picnic Near Ambegaon, One Day Picnic Near Khed, Picnic Resort Near Rajgurunagar, One Day Picnic Near Chakan, Family Picnic Near Talegaon Dabhade, Picnic Places Near Moshi, One Day Picnic Near Pune, Family Picnic Near Pune"
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
                            <img src='/images/keyword/111.jpg' alt='img' className='img-fluid' />
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

export default PicnicSpotNearNarayangaon;