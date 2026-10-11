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

function PicnicSpotNearSinhagadRoad() {

const cardData = {
    keyword: "Picnic Spot Near Sinhagad Road",
    headingDescription: "Om Agro Tourism is a refreshing countryside destination for visitors searching for a picnic spot near Sinhagad Road. The destination combines farm experiences, nature, traditional rural activities, homemade food, and recreational attractions, making it suitable for families, friends, and groups planning a one-day outing near Sinhagad Road, Khadakwasla, Donje, and the surrounding Pune region.",

    topPlaces: [
        {
            title: "Jungle Safari",
            description: "Jungle safari adds an adventurous touch to the outing and is a suitable attraction for visitors looking for an exciting picnic experience around the Sinhagad Road and Pune region."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm tours and workshops provide an opportunity to explore agricultural surroundings and understand rural activities, making the picnic more meaningful for families and nature lovers."
        },
        {
            title: "Bird Watching",
            description: "Bird watching offers a peaceful nature experience where visitors can enjoy the natural surroundings and observe birdlife away from the busy city environment."
        },
        {
            title: "Bull Cart Ride",
            description: "A bull cart ride introduces visitors to a traditional countryside activity and gives families an enjoyable rural experience during their one-day picnic."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and outdoor games provide active entertainment for families, friends, and groups looking for recreational activities during their picnic near Sinhagad Road."
        },
        {
            title: "Tasty Homemade Food",
            description: "Traditional homemade food adds a satisfying culinary experience to the outing and complements the relaxed atmosphere of the farm surroundings."
        },
        {
            title: "Horse Riding",
            description: "Horse riding offers an enjoyable outdoor experience for children, families, and groups who want to add an active attraction to their countryside picnic."
        },
        {
            title: "Tractor Ride",
            description: "A tractor ride gives visitors a distinctive farm experience and allows them to enjoy an activity closely connected with the agricultural character of the destination."
        },
        {
            title: "Water Park Activities",
            description: "Water park activities provide a refreshing recreational option for visitors searching for a picnic spot with activities and additional entertainment for their group."
        },
        {
            title: "Swimming Pool",
            description: "The swimming pool offers a relaxing water-based attraction for guests who want to cool down and enjoy leisure time during a family or group outing."
        }
    ],

    services: [
        {
            name: "Picnic Spot Near Sinhagad Road",
            description: "Om Agro Tourism offers a peaceful farm environment for visitors searching for a picnic spot near Sinhagad Road, with nature, rural experiences, food, and recreational attractions."
        },
        {
            name: "One Day Picnic Spot Near Sinhagad Road",
            description: "Visitors can plan a complete one-day outing with farm activities, traditional experiences, games, food, nature exploration, and leisure attractions at one countryside destination."
        },
        {
            name: "Best Picnic Spot Near Sinhagad Road",
            description: "Those comparing picnic destinations can enjoy a varied experience at Om Agro Tourism, combining agricultural surroundings, family activities, natural scenery, and traditional attractions."
        },
        {
            name: "Family Picnic Spot Near Sinhagad Road",
            description: "Families can enjoy quality time together through a selection of activities suitable for different age groups, along with farm experiences, food, and open countryside surroundings."
        },
        {
            name: "Picnic Resort Near Sinhagad Road",
            description: "Om Agro Tourism provides a relaxing picnic environment where visitors can combine rural scenery with recreational activities, traditional experiences, homemade food, and nature."
        },
        {
            name: "One Day Picnic Resort Near Sinhagad Road",
            description: "A one-day visit can include farm tours, rides, games, water activities, food, and nature experiences, making it suitable for a complete family or group outing."
        },
        {
            name: "Best Resort Near Sinhagad Road for Picnic",
            description: "Visitors looking for a countryside resort-style picnic can enjoy open surroundings, rural activities, family recreation, traditional experiences, and homemade food in one destination."
        },
        {
            name: "Family Resort Near Sinhagad Road",
            description: "Families can choose from farm tours, traditional rides, nature activities, games, and leisure attractions to create a comfortable and engaging day outing."
        },
        {
            name: "One Day Trip Near Sinhagad Road",
            description: "Om Agro Tourism provides a refreshing option for a one-day trip where visitors can step away from their routine and enjoy countryside landscapes, activities, food, and rural experiences."
        },
        {
            name: "Family One Day Trip Near Sinhagad Road",
            description: "Families can plan an enjoyable day trip with age-friendly activities, open surroundings, farm attractions, traditional experiences, and opportunities to relax together."
        },
        {
            name: "Picnic Places Near Sinhagad Road",
            description: "Visitors searching for picnic places near Sinhagad Road can experience an agricultural setting with a mix of nature, recreation, food, traditional activities, and open spaces."
        },
        {
            name: "Best Picnic Places Near Sinhagad Road",
            description: "Om Agro Tourism offers a diverse countryside outing where visitors can enjoy farm experiences, outdoor activities, homemade food, nature exploration, and shared family time."
        },
        {
            name: "Affordable Picnic Spot Near Sinhagad Road",
            description: "Visitors looking for an affordable picnic experience can enjoy several attractions at one destination, making the outing practical for families and groups."
        },
        {
            name: "Budget Picnic Resort Near Sinhagad Road",
            description: "The destination is suitable for visitors seeking a budget-friendly countryside outing with recreational activities, farm experiences, food, and natural surroundings."
        },
        {
            name: "Picnic Spot Near Khadakwasla",
            description: "Visitors around Khadakwasla can enjoy a refreshing farm-based picnic featuring rural activities, nature experiences, traditional attractions, homemade food, and recreational options."
        },
        {
            name: "Picnic Spot Near Sinhagad Pune",
            description: "For visitors planning a picnic around Sinhagad Pune, Om Agro Tourism offers a countryside experience combining farm activities, nature, traditional rides, food, and recreation."
        },
        {
            name: "Resort Near Sinhagad Road for Family Outing",
            description: "Families can enjoy a varied outing with farm tours, traditional rides, games, nature-based activities, food, and peaceful surroundings that encourage quality time together."
        },
        {
            name: "One Day Resort Near Sinhagad Road",
            description: "A full-day visit can include several experiences such as farm activities, rides, games, nature exploration, water recreation, and homemade food without requiring a long holiday."
        },
        {
            name: "Nature Picnic Spot Near Sinhagad Road",
            description: "Bird watching, agricultural surroundings, open landscapes, and peaceful rural experiences make Om Agro Tourism suitable for visitors seeking a nature-focused picnic near Sinhagad Road."
        },
        {
            name: "Picnic Spot Near Donje Pune",
            description: "Visitors from the Donje and Sinhagad Road side can plan a countryside picnic with farm experiences, traditional activities, nature attractions, homemade food, and recreation."
        },
        {
            name: "Picnic Spot Near Khadakwasla Dam",
            description: "Those looking for a picnic destination around Khadakwasla Dam can enjoy a farm-oriented outing featuring rural experiences, nature, food, and family-friendly recreational activities."
        },
        {
            name: "Picnic Spot with Activities Near Sinhagad Road",
            description: "Om Agro Tourism combines farm tours, rides, games, water activities, nature experiences, and other attractions, giving visitors plenty of options during a one-day picnic."
        }
    ],

    tableData: [
        ["Picnic Spot Near Sinhagad Road"],
        ["One Day Picnic Spot Near Sinhagad Road"],
        ["Best Picnic Spot Near Sinhagad Road"],
        ["Family Picnic Spot Near Sinhagad Road"],
        ["Picnic Resort Near Sinhagad Road"],
        ["One Day Picnic Resort Near Sinhagad Road"],
        ["Best Resort Near Sinhagad Road for Picnic"],
        ["Family Resort Near Sinhagad Road"],
        ["One Day Trip Near Sinhagad Road"],
        ["Family One Day Trip Near Sinhagad Road"],
        ["Picnic Places Near Sinhagad Road"],
        ["Best Picnic Places Near Sinhagad Road"],
        ["Affordable Picnic Spot Near Sinhagad Road"],
        ["Budget Picnic Resort Near Sinhagad Road"],
        ["Picnic Spot Near Khadakwasla"],
        ["Picnic Spot Near Sinhagad Pune"],
        ["Resort Near Sinhagad Road for Family Outing"],
        ["One Day Resort Near Sinhagad Road"],
        ["Nature Picnic Spot Near Sinhagad Road"],
        ["Picnic Spot Near Donje Pune"],
        ["Picnic Spot Near Khadakwasla Dam"],
        ["Picnic Spot with Activities Near Sinhagad Road"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Countryside Atmosphere",
            WhyChoosedescription: "Om Agro Tourism offers visitors a refreshing rural environment where they can relax in open surroundings and enjoy a break from the busy Pune city routine."
        },
        {
            WhyChooseheading: "Nature-Focused Experiences",
            WhyChoosedescription: "Bird watching, farm surroundings, open landscapes, and agricultural activities provide opportunities for visitors to spend meaningful time close to nature."
        },
        {
            WhyChooseheading: "Traditional Rural Activities",
            WhyChoosedescription: "Bull cart rides, tractor rides, and farm experiences introduce visitors to countryside traditions while adding variety to a regular picnic outing."
        },
        {
            WhyChooseheading: "Family-Friendly Attractions",
            WhyChoosedescription: "The destination provides different experiences for children and adults, helping families enjoy activities together while also having time for relaxation."
        },
        {
            WhyChooseheading: "Variety of Recreation",
            WhyChoosedescription: "Visitors can choose from games, horse riding, water activities, swimming, safari experiences, and other attractions depending on how they want to spend their day."
        },
        {
            WhyChooseheading: "Homemade Food Experience",
            WhyChoosedescription: "Tasty homemade food adds a traditional and satisfying element to the outing, complementing the peaceful farm atmosphere and family picnic experience."
        },
        {
            WhyChooseheading: "Suitable for Group Outings",
            WhyChoosedescription: "Families, friends, and organized groups can enjoy shared activities, open spaces, food, and countryside experiences that make the destination suitable for group picnics."
        },
        {
            WhyChooseheading: "Complete One Day Outing",
            WhyChoosedescription: "Multiple attractions at one destination allow visitors to combine recreation, nature exploration, traditional activities, food, and relaxation into a convenient one-day picnic."
        }
    ]
};






const faqData = [
    {
        question: "What makes Om Agri Tourism a suitable picnic spot near Sinhagad Road?",
        answer: "For people around Sinhagad Road seeking a refreshing break from the city's routine, Om Agri Tourism provides a countryside setting with a mix of recreation and farm-based experiences. Visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food in a peaceful green environment."
    },
    {
        question: "Which activities are available at Om Agri Tourism for visitors from Sinhagad Road?",
        answer: "A day at the farm can include several outdoor experiences depending on the group's interests. Swimming and boating bring active recreation, while horse riding, tractor rides and bull cart rides offer a traditional rural experience. Bird watching is another option for guests who prefer a quieter connection with nature."
    },
    {
        question: "Can families near Sinhagad Road plan a one day picnic at Om Agri Tourism?",
        answer: "Families can organize a complete day outing by combining recreational activities with relaxed time around the farm. Children and adults can enjoy suitable activities with proper supervision, while the greenery, homemade food and open surroundings provide opportunities to unwind between different experiences."
    },
    {
        question: "Is Om Agri Tourism suitable for a friends' picnic near Sinhagad Road?",
        answer: "Friends can turn their outing into an activity-filled countryside day with swimming, boating, horse riding and farm rides. Tractor and bull cart rides add a different rural touch, while photography, food and bird watching can be included for those who want some slower moments during the picnic."
    },
    {
        question: "What can children experience during a picnic at Om Agri Tourism near Sinhagad Road?",
        answer: "Young visitors can enjoy age-appropriate outdoor activities such as swimming, boating and farm rides while discovering a different side of rural life. Bird watching can also make the visit interesting for children who enjoy nature, with adults providing suitable supervision throughout the outing."
    },
    {
        question: "Does Om Agri Tourism provide a rural experience for visitors from Sinhagad Road?",
        answer: "Beyond ordinary recreational activities, the farm gives guests an opportunity to experience the atmosphere of the countryside. Traditional bull cart and tractor rides, horse riding, bird watching, farm surroundings and homemade food together create a more authentic rural outing near Pune."
    },
    {
        question: "Can groups enjoy homemade food during a picnic near Sinhagad Road?",
        answer: "Meal time can become an important part of the countryside experience at Om Agri Tourism, where homemade food complements the outdoor setting. Groups can take a comfortable break for food before continuing with activities such as swimming, boating, rides or nature observation."
    },
    {
        question: "How can a group spend a full day at Om Agri Tourism near Sinhagad Road?",
        answer: "A flexible itinerary can begin with outdoor recreation such as swimming or boating, followed by horse riding and traditional tractor or bull cart rides. Groups can reserve time for meals, photography, bird watching and relaxation so that the day includes both energetic activities and peaceful farm experiences."
    },
    {
        question: "Why is an agro tourism outing a good alternative to a regular picnic near Sinhagad Road?",
        answer: "An agro tourism visit combines leisure with an opportunity to experience farm life and rural surroundings. Instead of spending the entire day in a conventional recreation area, guests can enjoy water activities, traditional rides, nature observation and homemade food while taking a break from the busy city atmosphere."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Sinhagad Road?",
        answer: "Om Agri Tourism brings together recreation, countryside scenery and traditional farm experiences in one destination. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching give visitors several ways to enjoy the day, while homemade food and a peaceful environment make the outing suitable for families, friends and groups."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rohan Kulkarni",
        feedback:
            "Our group from Sinhagad Road spent a day at Om Agri Tourism and really enjoyed the change from our usual city outings. Boating and swimming kept everyone entertained, while the horse riding and bull cart ride gave us a memorable rural experience. The homemade food and greenery made the day even more enjoyable.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Priyanka Jadhav",
        feedback:
            "We visited Om Agri Tourism with our family for a picnic and appreciated the variety available for both adults and children. The farm atmosphere was peaceful, and the tractor ride, boating and bird watching gave the children something different to explore. It was a relaxed and enjoyable day away from the regular city routine.",
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
  "name": "Picnic Spot Near Sinhagad Road",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-sinhagad-road.webp",
  "description": "Picnic Spot Near Sinhagad Road is a convenient option for families, friends, couples, school groups, and corporate teams looking for a refreshing outdoor break near Pune. Om Agro Tourism offers an agro-tourism-oriented countryside atmosphere where visitors can spend quality time together through outdoor recreation, open surroundings, picnic activities, and relaxed group experiences. A One Day Picnic Spot Near Sinhagad Road can be considered by families planning a short outing with children, friends looking for a weekend escape, or groups wanting to enjoy a change from the busy city routine. Visitors searching for the Best Picnic Spot Near Sinhagad Road can choose a peaceful outdoor environment where nature, recreation, and group time come together. The Family Picnic Spot Near Sinhagad Road is suitable for family gatherings, birthdays, seasonal outings, weekend recreation, and casual get-togethers. Those looking for a Picnic Resort Near Sinhagad Road can enjoy the appeal of a comfortable day outing combined with an agro-tourism atmosphere and countryside surroundings. The destination can also suit school excursions, office team outings, friends' gatherings, couples, and visitors interested in spending time in a nature-oriented setting. People travelling from Sinhagad Road, Dhayari, Nanded, Vadgaon Budruk, Narhe, Ambegaon, Katraj, Anand Nagar, Warje, Kothrud, Bavdhan, and other Pune areas can consider this type of countryside picnic experience for a convenient short-distance escape. An outdoor day trip provides an opportunity to relax, enjoy group activities, spend time with family, and experience a refreshing atmosphere away from crowded urban spaces. Om Agro Tourism offers a welcoming setting for visitors planning a family picnic, school outing, corporate gathering, friends' day trip, or relaxed weekend experience near Sinhagad Road.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-sinhagad-road"
  }
};


    return (
        <div>




<Helmet>
  <title>
    Picnic Spot Near Sinhagad Road | Best One Day Picnic Resort & Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a Picnic Spot Near Sinhagad Road for families, friends, couples, school groups and corporate outings with outdoor recreation in a peaceful agro-tourism setting."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Sinhagad Road, One Day Picnic Spot Near Sinhagad Road, Best Picnic Spot Near Sinhagad Road, Family Picnic Spot Near Sinhagad Road, Picnic Resort Near Sinhagad Road, One Day Picnic Resort Near Sinhagad Road, Best Resort Near Sinhagad Road for Picnic, Family Resort Near Sinhagad Road, One Day Trip Near Sinhagad Road, Family One Day Trip Near Sinhagad Road, One Day Picnic Near Sinhagad Road, Picnic Places Near Sinhagad Road, Best Picnic Places Near Sinhagad Road, Family Picnic Near Sinhagad Road, One Day Outing Near Sinhagad Road, Best One Day Outing Near Sinhagad Road, Picnic Resorts Near Sinhagad Road, Picnic Spot Near Dhayari, One Day Picnic Near Dhayari, Picnic Places Near Nanded Pune, Family Picnic Near Vadgaon Budruk, Picnic Resort Near Narhe, One Day Picnic Near Ambegaon Pune, Picnic Places Near Katraj, Family Outing Near Warje, Picnic Spot Near Kothrud, Agro Tourism Near Sinhagad Road, Agro Tourism Near Pune, One Day Picnic Near Pune, Family Picnic Near Pune"
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
                            <img src='/images/keyword/108.jpg' alt='img' className='img-fluid' />
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

export default PicnicSpotNearSinhagadRoad;