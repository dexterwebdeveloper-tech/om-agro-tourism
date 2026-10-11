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

function Onedaypicnicspotnearmoshi() {


const cardData = {
    keyword: "One Day Picnic Spot Near Moshi",
    headingDescription: "Om Agro Tourism is a refreshing countryside destination for visitors searching for a one day picnic spot near Moshi. Families, children, school groups, corporate teams, and friends can enjoy farm experiences, outdoor recreation, swimming, water activities, homemade food, and peaceful natural surroundings for a memorable day outing near Pune.",

    topPlaces: [
        {
            title: "Tractor Ride",
            description: "Tractor Ride offers an enjoyable farm-style experience that lets families and children discover the rural side of the destination while adding something different to their one day picnic."
        },
        {
            title: "Swimming Pool",
            description: "The Swimming Pool provides a refreshing option for families and groups looking to relax and enjoy water-based recreation during their picnic near Moshi."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching gives nature lovers and children an opportunity to observe birds and enjoy quiet moments surrounded by the open countryside environment."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride introduces visitors to a traditional village activity and creates a memorable experience for families, school groups, and children."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide plenty of entertainment for families and groups, making the outing more engaging for visitors of different age groups."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food makes the picnic more enjoyable by giving visitors the opportunity to enjoy satisfying meals while spending the day in a peaceful rural setting."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities add excitement to the picnic and provide an enjoyable choice for families, kids, and groups looking for active water-based entertainment."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops offer an educational and interactive rural experience, making them particularly suitable for school children and families interested in agriculture."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding brings an adventurous element to the outing and gives children, families, and groups an opportunity to enjoy a memorable countryside activity."
        },
        {
            title: "Boating",
            description: "Boating provides a relaxing recreational experience for visitors who want to spend peaceful time around the water during their one day picnic."
        }
    ],

    services: [
        {
            name: "One Day Picnic Spot Near Moshi",
            description: "Om Agro Tourism offers a complete one day picnic experience near Moshi with swimming, farm activities, games, water attractions, traditional rides, homemade food, and nature-based recreation."
        },
        {
            name: "Best One Day Picnic Spot Near Moshi",
            description: "Families and groups can enjoy a varied day outing with multiple activities in one countryside destination, making it a convenient option for a refreshing break from the city."
        },
        {
            name: "One Day Picnic Spots Near Moshi",
            description: "Visitors exploring one day picnic spots near Moshi can enjoy a combination of rural surroundings, recreational activities, food, water attractions, and farm experiences at Om Agro Tourism."
        },
        {
            name: "Best Picnic Spots Near Moshi",
            description: "The destination combines nature, entertainment, traditional village activities, swimming, food, and farm experiences for families, children, friends, and organized groups."
        },
        {
            name: "Picnic Places Near Moshi Pune",
            description: "Those searching for picnic places near Moshi Pune can enjoy an open countryside setting with activities such as swimming, boating, games, horse riding, and farm tours."
        },
        {
            name: "One Day Picnic Near Moshi",
            description: "A one day picnic near Moshi can include water recreation, outdoor games, farm experiences, traditional rides, homemade food, and peaceful time in natural surroundings."
        },
        {
            name: "One Day Picnic Resort Near Moshi",
            description: "Om Agro Tourism provides a resort-style day outing where visitors can combine recreation, food, farm experiences, water activities, and relaxation in one location."
        },
        {
            name: "Best One Day Picnic Resort Near Moshi",
            description: "Families and groups can enjoy a broad selection of attractions, including swimming, boating, games, horse riding, tractor rides, and farm-based activities."
        },
        {
            name: "Picnic Resorts Near Moshi Pune",
            description: "Visitors comparing picnic resorts near Moshi Pune can consider a countryside destination offering activities, food, nature experiences, and entertainment for different age groups."
        },
        {
            name: "One Day Outing Near Moshi",
            description: "A one day outing near Moshi can be planned around swimming, water activities, farm tours, games, rides, homemade food, and relaxing outdoor experiences."
        },
        {
            name: "Best One Day Outing Near Moshi",
            description: "Om Agro Tourism offers a mix of active recreation and peaceful countryside experiences, making it suitable for families, friends, school groups, and corporate teams."
        },
        {
            name: "Family Picnic Spot Near Moshi",
            description: "Families can enjoy swimming, games, boating, farm activities, traditional rides, and homemade food while spending quality time together in a relaxed outdoor environment."
        },
        {
            name: "One Day Picnic Near Moshi for Family",
            description: "The destination provides activities for both children and adults, allowing families to enjoy recreation, food, nature, and rural experiences during a single-day visit."
        },
        {
            name: "Picnic Spot Near Moshi for Kids",
            description: "Children can enjoy water activities, games, tractor rides, horse riding, farm experiences, and other outdoor attractions during a fun-filled picnic."
        },
        {
            name: "Kids Picnic Places Near Moshi",
            description: "Om Agro Tourism provides a combination of recreational and educational experiences for children, including farm workshops, nature activities, games, and traditional rural rides."
        },
        {
            name: "Picnic Spot Near Moshi With Food",
            description: "Visitors looking for a picnic with food can enjoy Tasty Homemade Food along with swimming, games, farm experiences, rides, and other activities."
        },
        {
            name: "Picnic Spot Near Moshi With Activities",
            description: "The destination offers multiple activities such as swimming, boating, horse riding, tractor rides, games, water recreation, farm workshops, and traditional rides."
        },
        {
            name: "Picnic Resort Near Moshi With Swimming Pool",
            description: "Visitors can enjoy refreshing swimming pool time along with farm attractions, outdoor games, food, traditional activities, and other recreational options."
        },
        {
            name: "Picnic Spot Near Moshi With Water Park",
            description: "Water Park Activities provide an exciting addition to the picnic, giving families and groups another way to enjoy active recreation during their visit."
        },
        {
            name: "Water Park Near Moshi Pune",
            description: "Visitors searching for water recreation near Moshi Pune can enjoy Water Park Activities along with swimming, games, food, and countryside attractions."
        },
        {
            name: "Water Park Resort Near Moshi",
            description: "The destination combines water-based recreation with farm experiences, games, traditional rides, homemade food, and nature activities for a varied day outing."
        },
        {
            name: "Adventure Park Near Moshi",
            description: "Adventure-focused visitors can enjoy horse riding, tractor rides, boating, games, water activities, and other outdoor experiences in a countryside environment."
        },
        {
            name: "Adventure Picnic Spot Near Moshi",
            description: "An adventure-filled picnic can include horse riding, traditional rides, water activities, outdoor games, farm experiences, and other recreational attractions."
        },
        {
            name: "Adventure Resort Near Moshi",
            description: "Visitors can combine adventure and relaxation through swimming, horse riding, boating, games, farm activities, water attractions, and homemade food."
        },
        {
            name: "Agro Tourism Near Moshi",
            description: "Om Agro Tourism provides an opportunity to experience rural surroundings, farm activities, traditional village experiences, nature exploration, and recreational attractions near Moshi."
        },
        {
            name: "Agro Tourism Near Moshi for One Day Picnic",
            description: "A one day agritourism visit near Moshi can include farm tours, rural activities, water recreation, games, food, and opportunities to enjoy meaningful time in nature."
        },
        {
            name: "Nature Picnic Spots Near Moshi",
            description: "Nature lovers can enjoy bird watching, farm experiences, open surroundings, outdoor recreation, and a peaceful break from the busy urban environment."
        },
        {
            name: "Budget One Day Picnic Near Moshi",
            description: "Visitors looking for a budget-friendly day outing can enjoy several attractions in one location, including recreation, food, farm activities, and nature experiences."
        },
        {
            name: "Affordable Picnic Resort Near Moshi",
            description: "The destination offers an affordable picnic environment where visitors can combine activities, homemade food, swimming, rural experiences, and outdoor entertainment."
        },
        {
            name: "School Picnic Spots Near Moshi",
            description: "School groups can enjoy educational farm tours, workshops, bird watching, games, tractor rides, traditional activities, and outdoor recreation in a rural setting."
        },
        {
            name: "School Picnic Resort Near Moshi",
            description: "Om Agro Tourism gives school groups a balanced combination of learning and entertainment through farm experiences, nature activities, games, rides, and water attractions."
        },
        {
            name: "Corporate Picnic Spots Near Moshi",
            description: "Corporate teams can enjoy group recreation, outdoor games, water activities, farm experiences, homemade food, and relaxed surroundings that encourage team interaction."
        },
        {
            name: "Corporate Outing Places Near Moshi",
            description: "Corporate groups can plan a refreshing outing with shared activities, games, food, farm experiences, water recreation, and countryside relaxation away from the workplace."
        }
    ],

    tableData: [
        ["One Day Picnic Spot Near Moshi"],
        ["Best One Day Picnic Spot Near Moshi"],
        ["One Day Picnic Spots Near Moshi"],
        ["Best Picnic Spots Near Moshi"],
        ["Picnic Places Near Moshi Pune"],
        ["One Day Picnic Near Moshi"],
        ["One Day Picnic Resort Near Moshi"],
        ["Best One Day Picnic Resort Near Moshi"],
        ["Picnic Resorts Near Moshi Pune"],
        ["One Day Outing Near Moshi"],
        ["Best One Day Outing Near Moshi"],
        ["Family Picnic Spot Near Moshi"],
        ["One Day Picnic Near Moshi for Family"],
        ["Picnic Spot Near Moshi for Kids"],
        ["Kids Picnic Places Near Moshi"],
        ["Picnic Spot Near Moshi With Food"],
        ["Picnic Spot Near Moshi With Activities"],
        ["Picnic Resort Near Moshi With Swimming Pool"],
        ["Picnic Spot Near Moshi With Water Park"],
        ["Water Park Near Moshi Pune"],
        ["Water Park Resort Near Moshi"],
        ["Adventure Park Near Moshi"],
        ["Adventure Picnic Spot Near Moshi"],
        ["Adventure Resort Near Moshi"],
        ["Agro Tourism Near Moshi"],
        ["Agro Tourism Near Moshi for One Day Picnic"],
        ["Nature Picnic Spots Near Moshi"],
        ["Budget One Day Picnic Near Moshi"],
        ["Affordable Picnic Resort Near Moshi"],
        ["School Picnic Spots Near Moshi"],
        ["School Picnic Resort Near Moshi"],
        ["Corporate Picnic Spots Near Moshi"],
        ["Corporate Outing Places Near Moshi"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Easy Countryside Getaway",
            WhyChoosedescription: "Om Agro Tourism provides a refreshing rural environment for visitors from Moshi who want to step away from everyday city routines and enjoy a full day surrounded by nature and open spaces."
        },
        {
            WhyChooseheading: "Wide Choice of Attractions",
            WhyChoosedescription: "Visitors can select from swimming, boating, horse riding, tractor rides, water activities, games, farm workshops, bird watching, and traditional rural experiences."
        },
        {
            WhyChooseheading: "Fun for Families",
            WhyChoosedescription: "The destination offers activities that appeal to both children and adults, allowing families to enjoy recreation, food, nature, and quality time together during the same visit."
        },
        {
            WhyChooseheading: "Educational Farm Experiences",
            WhyChoosedescription: "Farm Tours and Workshops introduce children and school groups to agriculture and rural life, adding an educational element to an otherwise recreational picnic."
        },
        {
            WhyChooseheading: "Refreshing Water Recreation",
            WhyChoosedescription: "Swimming and Water Park Activities give visitors an opportunity to cool down and enjoy active water-based entertainment during a day away from the city."
        },
        {
            WhyChooseheading: "Traditional Rural Activities",
            WhyChoosedescription: "Bull Cart Ride and Tractor Ride provide visitors with memorable countryside experiences that bring a traditional farm atmosphere into the picnic."
        },
        {
            WhyChooseheading: "Suitable for Organized Groups",
            WhyChoosedescription: "Schools, corporate teams, families, and larger groups can plan shared activities, games, meals, and outdoor recreation within the same destination."
        },
        {
            WhyChooseheading: "Food and Nature Together",
            WhyChoosedescription: "Tasty Homemade Food, Bird Watching, farm experiences, and open countryside surroundings create a balanced outing where visitors can combine relaxation, recreation, and nature."
        }
    ]
};


const faqData = [
    {
        question: "Is Om Agri Tourism a suitable one day picnic spot near Moshi?",
        answer: "People from Moshi looking for a refreshing day away from the urban routine can consider Om Agri Tourism for a countryside picnic experience. The day can include swimming, boating, horse riding, tractor rides, bull cart rides and bird watching, along with relaxed time in the farm surroundings."
    },
    {
        question: "What activities can visitors enjoy at Om Agri Tourism near Moshi?",
        answer: "Guests can choose from a variety of recreational and rural experiences during their visit. Swimming and boating provide active entertainment, while horse riding, tractor rides and bull cart rides introduce visitors to traditional countryside activities. Bird watching adds a peaceful nature-based option."
    },
    {
        question: "Can families from Moshi plan a one day picnic at Om Agri Tourism?",
        answer: "A family outing can be arranged around activities that appeal to both children and adults. Swimming, boating and suitable farm rides can keep younger visitors engaged, while parents can enjoy the greenery, homemade food and quieter moments around the countryside setting."
    },
    {
        question: "How is Om Agri Tourism different from regular picnic places near Moshi?",
        answer: "Instead of being limited to a park visit or sightseeing, Om Agri Tourism brings together recreation and rural experiences. Visitors can enjoy water activities, horse riding, tractor rides and bull cart rides while also observing birds and spending time in an open farm environment."
    },
    {
        question: "Can friends from Moshi enjoy a full day outing at Om Agri Tourism?",
        answer: "Friends can create an active itinerary with swimming, boating and horse riding, followed by traditional tractor or bull cart rides. Breaks for food, photography and conversations can be added throughout the day, making the farm a relaxed setting for spending quality time together."
    },
    {
        question: "What can children experience during a picnic at Om Agri Tourism near Moshi?",
        answer: "Children can explore a variety of outdoor experiences such as swimming, boating, tractor rides and bull cart rides, depending on their age and suitability. Bird watching can also encourage them to observe nature, while adult supervision can help make the activities comfortable and enjoyable."
    },
    {
        question: "Can visitors enjoy homemade food during a one day picnic near Moshi?",
        answer: "A traditional homemade meal can add to the relaxed character of a farm outing. Guests can take a comfortable food break between activities and enjoy their meal in the countryside atmosphere before continuing with swimming, boating, rides or nature observation."
    },
    {
        question: "Is Om Agri Tourism suitable for a group outing from Moshi?",
        answer: "Groups can make use of the different experiences available throughout the day rather than following a single activity. Swimming, boating, horse riding, tractor rides and bull cart rides can be combined with meals and relaxation, making the destination suitable for friends, families and organized groups."
    },
    {
        question: "Why might Moshi residents choose an agro tourism picnic experience?",
        answer: "An agro tourism outing provides an opportunity to step away from the fast-paced surroundings of the city and spend time closer to nature. At Om Agri Tourism, guests can enjoy recreational activities alongside farm-based experiences, bird watching and homemade food for a more varied day trip."
    },
    {
        question: "What makes Om Agri Tourism worth considering for a one day picnic near Moshi?",
        answer: "The combination of swimming, boating, horse riding and traditional countryside rides gives visitors plenty of ways to enjoy the day. Along with bird watching, farm greenery and homemade food, these experiences make Om Agri Tourism a refreshing alternative for families, friends and groups planning a one day picnic from Moshi."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Prathamesh Gaikwad",
        feedback:
            "Our group from Moshi wanted a full-day outing with different activities, and Om Agri Tourism gave us exactly that kind of experience. We enjoyed swimming and boating before trying the tractor and bull cart rides. The open farm surroundings and relaxed atmosphere made the day feel refreshing.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Kavita Wagh",
        feedback:
            "We visited Om Agri Tourism with our family for a one day picnic and enjoyed having activities for everyone. The children loved the rides and outdoor experiences, while we appreciated the greenery, bird watching and homemade food. It was a pleasant break from our regular routine in Moshi.",
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
  "name": "One Day Picnic Spot Near Moshi",
  "image": "https://www.omagrotourism.com/assets/images/one-day-picnic-spot-near-moshi.webp",
  "description": "One Day Picnic Spot Near Moshi is a convenient choice for families, friends, couples, school groups, and corporate teams looking to enjoy a refreshing break away from the routine of city life. Om Agro Tourism offers an agro-tourism-oriented setting where visitors can spend quality time together through outdoor recreation, open countryside surroundings, picnic activities, and relaxed group experiences. Those searching for the Best One Day Picnic Spot Near Moshi or the Best Picnic Spots Near Moshi can consider a destination that combines leisure, nature, and engaging activities within a practical travel distance from the Pimpri Chinchwad and Pune region. Picnic Places Near Moshi Pune are suitable for families planning a short outing with children, friends arranging a casual day trip, couples seeking a peaceful escape, and organizations looking for an outdoor team gathering. A One Day Picnic Near Moshi can also be planned for birthdays, family get-togethers, school outings, seasonal celebrations, and weekend recreation. Visitors searching for a One Day Picnic Resort Near Moshi or the Best One Day Picnic Resort Near Moshi can enjoy the appeal of a resort-style outing along with an agro-tourism atmosphere and countryside environment. The location is also convenient for people from Moshi, Chikhali, Bhosari, Alandi, Dighi, Dudulgaon, Charholi, Pimpri Chinchwad, Talegaon Dabhade, and nearby Pune areas. Whether the objective is spending time beside open natural surroundings, enjoying outdoor activities, relaxing with family, or creating a memorable group picnic, Om Agro Tourism provides a welcoming setting for a refreshing one-day experience near Moshi.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/one-day-picnic-spot-near-moshi"
  }
};



    return (
        <div>


<Helmet>
  <title>
    One Day Picnic Spot Near Moshi | Best Picnic Resort & Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Find a One Day Picnic Spot Near Moshi for families, friends, couples, school groups and corporate outings, with outdoor recreation and an enjoyable agro-tourism setting near Pune."
  />

  <meta
    name="keywords"
    content="One Day Picnic Spot Near Moshi, Best One Day Picnic Spot Near Moshi, One Day Picnic Spots Near Moshi, Best Picnic Spots Near Moshi, Picnic Places Near Moshi Pune, One Day Picnic Near Moshi, One Day Picnic Resort Near Moshi, Best One Day Picnic Resort Near Moshi, Picnic Resorts Near Moshi, Picnic Places Near Moshi, Family Picnic Near Moshi, One Day Outing Near Moshi, Best Picnic Resort Near Moshi, Family Resorts Near Moshi, One Day Picnic Near Moshi Pune, Picnic Spot Near Moshi Pune, Picnic Resort Near Moshi Pune, Resorts Near Moshi, One Day Trip Near Moshi, Family Outing Near Moshi, School Picnic Spot Near Moshi, Corporate Outing Near Moshi, Agro Tourism Near Moshi, Agro Tourism Near Pune, One Day Picnic Near Pimpri Chinchwad, Picnic Spots Near Pimpri Chinchwad, Picnic Places Near Bhosari, Picnic Spots Near Chikhali, Picnic Places Near Alandi, One Day Picnic Near Pune"
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
                            <img src='/images/keyword/97.jpg' alt='img' className='img-fluid' />
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

export default Onedaypicnicspotnearmoshi;