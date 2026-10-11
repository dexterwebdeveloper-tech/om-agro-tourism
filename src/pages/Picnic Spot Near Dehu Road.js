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

function Picnicspotneardehuroad() {

const cardData = {
    keyword: "Picnic Spot Near Dehu Road",
    headingDescription: "Om Agro Tourism is a refreshing countryside destination for visitors searching for a picnic spot near Dehu Road. Families, friends, and groups can enjoy a peaceful day with farm experiences, nature activities, homemade food, traditional rural attractions, games, and water-based recreation. The destination is suitable for one day picnics, family outings, weekend breaks, and group gatherings away from the busy city environment.",
    topPlaces: [
        {
            title: "Farm Tours and Workshops",
            description: "Explore the farm through engaging tours and workshops that introduce visitors to agriculture, rural surroundings, and traditional farming experiences. It is an enjoyable activity for families, children, and groups."
        },
        {
            title: "Swimming Pool",
            description: "Enjoy refreshing time in the swimming pool during your picnic outing. The pool provides a fun water-based activity for families and groups looking to relax and enjoy their day in a countryside environment."
        },
        {
            title: "Horse Riding",
            description: "Add an adventurous touch to your outing with horse riding. Children, youngsters, and families can enjoy this engaging rural activity while experiencing the open surroundings of the agro tourism destination."
        },
        {
            title: "Tasty Homemade Food",
            description: "Savor tasty homemade food with a traditional farm-style touch. A satisfying meal surrounded by peaceful countryside scenery adds to the comfort and enjoyment of a family picnic or group outing."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Families, friends, and groups can enjoy a variety of indoor and outdoor games for active entertainment. These activities are especially suitable for group picnics and visitors who want a lively day out."
        },
        {
            title: "Bird Watching",
            description: "Take a peaceful break with bird watching around the natural farm surroundings. The activity allows visitors to appreciate local nature and gives families and nature lovers a relaxing outdoor experience."
        },
        {
            title: "Boating",
            description: "Enjoy boating as a refreshing part of your one day picnic. The activity offers a calm and enjoyable experience for families and groups while adding variety to a countryside outing."
        },
        {
            title: "Tractor Ride",
            description: "Experience a fun countryside tractor ride and get a closer feel of traditional farm life. This activity can be particularly enjoyable for children and families looking for a different rural experience."
        },
        {
            title: "Water Park Activities",
            description: "Make the picnic more energetic with water park activities that provide fun and recreation for families and groups. These attractions are ideal for visitors looking to include water-based entertainment in their outing."
        },
        {
            title: "Bull Cart Ride",
            description: "Enjoy the traditional charm of a bull cart ride around the farm setting. This rural attraction provides families and visitors with a memorable experience connected to countryside culture and village life."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Dehu Road",
            description: "Om Agro Tourism provides a peaceful farm environment for visitors searching for a picnic spot near Dehu Road, combining nature, food, recreation, farm experiences, and traditional rural activities."
        },
        {
            name: "One Day Picnic Spot Near Dehu Road",
            description: "Plan a refreshing one day picnic near Dehu Road with access to farm tours, games, water activities, traditional rides, nature experiences, and homemade food for a complete countryside outing."
        },
        {
            name: "Best Picnic Spot Near Dehu Road",
            description: "Visitors looking for the best picnic spot near Dehu Road can enjoy a combination of natural surroundings, farm attractions, recreational activities, traditional experiences, and food at one destination."
        },
        {
            name: "Family Picnic Spot Near Dehu Road",
            description: "Families can spend quality time together through swimming, horse riding, games, boating, farm activities, bird watching, and other attractions suitable for children and adults."
        },
        {
            name: "Picnic Resort Near Dehu Road",
            description: "A picnic resort near Dehu Road offers an opportunity to leave the busy urban surroundings behind and enjoy a countryside atmosphere with activities, food, nature, and rural experiences."
        },
        {
            name: "One Day Picnic Resort Near Dehu Road",
            description: "Enjoy a complete one day outing with recreational activities, farm experiences, traditional attractions, homemade food, and open surroundings designed for families, friends, and organized groups."
        },
        {
            name: "Best Resort Near Dehu Road for Picnic",
            description: "For visitors comparing the best resort near Dehu Road for a picnic, Om Agro Tourism offers a varied countryside experience with nature, food, farm activities, games, and traditional rural attractions."
        },
        {
            name: "Family Resort Near Dehu Road",
            description: "Families can enjoy a relaxed farm-based outing where different age groups can participate in activities, explore nature, enjoy homemade food, and experience traditional countryside attractions."
        },
        {
            name: "One Day Trip Near Dehu Road",
            description: "A one day trip near Dehu Road can become more memorable with a change of scenery, outdoor recreation, farm exploration, traditional activities, water fun, and a peaceful natural environment."
        },
        {
            name: "Family One Day Trip Near Dehu Road",
            description: "Plan a family one day trip with activities that bring children and adults together, including games, horse riding, swimming, boating, farm tours, bird watching, and rural experiences."
        },
        {
            name: "Picnic Places Near Dehu Road",
            description: "Visitors exploring picnic places near Dehu Road can enjoy a farm-based destination where nature, recreational activities, homemade food, and traditional attractions come together for a refreshing day out."
        },
        {
            name: "Best Picnic Places Near Dehu Road",
            description: "Those searching for the best picnic places near Dehu Road can enjoy a countryside escape with varied activities, farm experiences, natural surroundings, food, and entertainment suitable for different groups."
        },
        {
            name: "Affordable Picnic Spot Near Dehu Road",
            description: "An affordable picnic spot near Dehu Road can provide families and groups with multiple activities and experiences in one destination, making it easier to plan a refreshing day outing."
        },
        {
            name: "Budget Picnic Resort Near Dehu Road",
            description: "Visitors planning a budget-friendly picnic can enjoy countryside recreation, farm attractions, homemade food, nature experiences, and traditional activities while spending quality time with family or friends."
        },
        {
            name: "Picnic Spot Near Dehu Road Pune",
            description: "For visitors searching for a picnic spot near Dehu Road Pune, Om Agro Tourism provides a peaceful farm setting with recreational activities, rural experiences, food, and nature-based attractions."
        },
        {
            name: "Resort Near Dehu Road for Family Outing",
            description: "Families planning an outing can enjoy swimming, games, horse riding, boating, farm tours, bird watching, homemade food, and traditional rural activities in a relaxed countryside setting."
        },
        {
            name: "One Day Resort Near Dehu Road",
            description: "Make your one day resort-style outing more enjoyable with access to farm activities, outdoor games, water recreation, traditional rides, nature exploration, and homemade food at one destination."
        },
        {
            name: "Picnic Spot Near Talegaon Dehu Road",
            description: "Visitors looking around the Talegaon Dehu Road area can enjoy a countryside picnic experience featuring farm tours, outdoor recreation, nature activities, traditional attractions, and tasty homemade food."
        },
        {
            name: "Picnic Spot Near Ravet Dehu Road",
            description: "For visitors from the Ravet and Dehu Road side, Om Agro Tourism offers a refreshing farm-based outing with games, swimming, boating, horse riding, nature exploration, and traditional rural experiences."
        },
        {
            name: "Nature Picnic Spot Near Dehu Road",
            description: "Nature lovers can relax in a peaceful farm environment surrounded by open countryside scenery. Bird watching, farm exploration, outdoor activities, and natural surroundings create a refreshing break from city life."
        },
        {
            name: "Family Picnic Resort Near Dehu Road",
            description: "A family picnic resort near Dehu Road can provide a balanced combination of relaxation and entertainment through swimming, games, horse riding, farm tours, boating, homemade food, and countryside activities."
        },
        {
            name: "Picnic Spot with Activities Near Dehu Road",
            description: "A picnic spot with activities near Dehu Road offers more than a simple outdoor break, with options such as swimming, boating, horse riding, tractor rides, games, farm workshops, bird watching, and water activities."
        }
    ],
    tableData: [
        ["Picnic Spot Near Dehu Road"],
        ["One Day Picnic Spot Near Dehu Road"],
        ["Best Picnic Spot Near Dehu Road"],
        ["Family Picnic Spot Near Dehu Road"],
        ["Picnic Resort Near Dehu Road"],
        ["One Day Picnic Resort Near Dehu Road"],
        ["Best Resort Near Dehu Road for Picnic"],
        ["Family Resort Near Dehu Road"],
        ["One Day Trip Near Dehu Road"],
        ["Family One Day Trip Near Dehu Road"],
        ["Picnic Places Near Dehu Road"],
        ["Best Picnic Places Near Dehu Road"],
        ["Affordable Picnic Spot Near Dehu Road"],
        ["Budget Picnic Resort Near Dehu Road"],
        ["Picnic Spot Near Dehu Road Pune"],
        ["Resort Near Dehu Road for Family Outing"],
        ["One Day Resort Near Dehu Road"],
        ["Picnic Spot Near Talegaon Dehu Road"],
        ["Picnic Spot Near Ravet Dehu Road"],
        ["Nature Picnic Spot Near Dehu Road"],
        ["Family Picnic Resort Near Dehu Road"],
        ["Picnic Spot with Activities Near Dehu Road"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Farm Atmosphere",
            WhyChoosedescription: "The countryside setting gives visitors a welcome break from busy urban surroundings, providing open spaces and a calm environment for families, friends, and groups."
        },
        {
            WhyChooseheading: "Wide Range of Activities",
            WhyChoosedescription: "Guests can choose from swimming, boating, games, horse riding, tractor rides, farm activities, bird watching, and other attractions to make their picnic more engaging."
        },
        {
            WhyChooseheading: "Family-Friendly Recreation",
            WhyChoosedescription: "Children and adults can participate in different activities together, making the destination suitable for family picnics where everyone can find something enjoyable to do."
        },
        {
            WhyChooseheading: "Hands-On Farm Experience",
            WhyChoosedescription: "Farm tours and workshops allow visitors to explore agriculture and rural life more closely, creating an educational and enjoyable experience beyond a regular picnic."
        },
        {
            WhyChooseheading: "Traditional Countryside Activities",
            WhyChoosedescription: "Bull cart rides and tractor rides introduce visitors to traditional rural experiences and add a distinctive countryside character to the day's activities."
        },
        {
            WhyChooseheading: "Homemade Food",
            WhyChoosedescription: "Tasty homemade food adds a traditional dining element to the outing, allowing families and groups to enjoy satisfying meals while spending time in the peaceful farm environment."
        },
        {
            WhyChooseheading: "Suitable for Groups",
            WhyChoosedescription: "The combination of games, outdoor activities, food, nature, and farm attractions makes the destination suitable for families, friends, school groups, and corporate outings."
        },
        {
            WhyChooseheading: "Complete Picnic Experience",
            WhyChoosedescription: "Nature, recreation, food, farm activities, traditional attractions, and water-based entertainment come together to create a varied one day picnic experience at a single destination."
        }
    ]
};






const faqData = [
    {
        question: "What kind of picnic experience can people from Dehu Road enjoy at Om Agri Tourism?",
        answer: "A trip from Dehu Road to Om Agri Tourism can provide a refreshing change from the urban routine with a combination of outdoor recreation and countryside experiences. Guests can spend their day enjoying swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food in a peaceful farm setting."
    },
    {
        question: "Which activities make Om Agri Tourism a popular picnic option near Dehu Road?",
        answer: "The variety of activities allows different age groups to enjoy the outing in their own way. Swimming and boating provide active recreation, while horse riding, tractor rides and bull cart rides offer traditional farm experiences. Visitors who prefer quieter activities can also spend time bird watching and exploring the green surroundings."
    },
    {
        question: "Can families from Dehu Road plan a day picnic at Om Agri Tourism?",
        answer: "Families can comfortably combine fun activities with relaxed time at the farm. Children can enjoy suitable experiences under adult supervision, while parents can take a break amid greenery and enjoy homemade food. The mix of recreation and nature makes the outing suitable for a family day trip."
    },
    {
        question: "How can friends from Dehu Road enjoy a picnic at Om Agri Tourism?",
        answer: "A friends' group can begin with swimming or boating and then move on to horse riding, tractor rides or bull cart rides. Between activities, the group can enjoy food, photography, bird watching and conversations, creating a day that includes both energetic entertainment and relaxed countryside moments."
    },
    {
        question: "Is Om Agri Tourism suitable for children visiting from Dehu Road?",
        answer: "Children can experience a different type of outdoor outing through suitable activities such as swimming, boating and farm rides. Bird watching can also encourage them to observe the natural surroundings. Parents and guardians should provide appropriate supervision based on each child's age and comfort."
    },
    {
        question: "What rural experiences are available at Om Agri Tourism near Dehu Road?",
        answer: "Visitors get an opportunity to step into a farm-oriented environment and experience activities associated with countryside life. Horse riding, tractor rides and bull cart rides add a traditional touch, while bird watching, greenery and homemade food make the overall visit feel more connected to rural surroundings."
    },
    {
        question: "Can corporate or large groups from Dehu Road enjoy a picnic at Om Agri Tourism?",
        answer: "Groups can plan a flexible outing by combining recreational activities with shared meal and relaxation time. Swimming, boating, horse riding and traditional farm rides can keep participants engaged, while bird watching and the open surroundings offer quieter opportunities to unwind and interact with colleagues or friends."
    },
    {
        question: "Does Om Agri Tourism include homemade food for a picnic outing near Dehu Road?",
        answer: "Homemade food can complement the farm experience by giving visitors a relaxed meal break in a countryside atmosphere. Guests can enjoy their food between different activities and then continue with swimming, boating, rides or nature observation according to their preferred schedule."
    },
    {
        question: "Why choose an agro tourism destination for a picnic near Dehu Road?",
        answer: "An agro tourism outing provides more variety than a conventional picnic by combining leisure with rural experiences. Visitors can enjoy water-based activities, traditional rides, nature observation and farm surroundings in one day, giving families and groups a chance to step away from the fast pace of city life."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Dehu Road?",
        answer: "Om Agri Tourism brings together several experiences that can make a day trip enjoyable for families, friends and groups. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide plenty of choices, while homemade food and the peaceful farm environment create a refreshing countryside escape."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Nikhil Bhosale",
        feedback:
            "We travelled from Dehu Road with our family and spent a full day at Om Agri Tourism. The children enjoyed the swimming and boating, while the horse riding and tractor ride were highlights for the adults too. The homemade food and quiet green surroundings made it a relaxing family outing.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Aarti More",
        feedback:
            "Our friends' group wanted a picnic with something more than just sitting outdoors, and Om Agri Tourism was a great choice. We enjoyed boating, the bull cart ride and horse riding, followed by a peaceful break for food and bird watching. Everyone came back refreshed after spending the day away from the city.",
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
  "name": "Picnic Spot Near Dehu Road",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-dehu-road.webp",
  "description": "Picnic Spot Near Dehu Road is a convenient choice for families, friends, couples, school groups, and corporate teams looking for a refreshing outdoor escape near Pune and Pimpri Chinchwad. Om Agro Tourism offers an agro-tourism-oriented countryside environment where visitors can take a break from their regular routine and enjoy quality time through outdoor recreation, open surroundings, picnic activities, and relaxed group experiences. A One Day Picnic Spot Near Dehu Road can be suitable for families planning a short outing with children, friends arranging a casual day trip, and groups looking for a peaceful destination away from the busy urban environment. Visitors searching for the Best Picnic Spot Near Dehu Road can enjoy a nature-oriented setting where leisure, recreation, and shared time come together. The Family Picnic Spot Near Dehu Road is suitable for family gatherings, birthdays, weekend outings, seasonal visits, and casual celebrations. People looking for a Picnic Resort Near Dehu Road or One Day Picnic Resort Near Dehu Road can plan a comfortable day outing with the added appeal of an agro-tourism atmosphere and countryside surroundings. Those searching for the Best Resort Near Dehu Road for Picnic can consider a destination suitable for families, friends, school excursions, corporate teams, and couples who want to enjoy an outdoor experience without planning a long-distance trip. The location can be considered by visitors from Dehu Road, Nigdi, Akurdi, Ravet, Kiwale, Mamurdi, Talegaon Dabhade, Tathawade, Wakad, Chinchwad, Pimpri, and nearby Pune and PCMC areas. A countryside picnic provides an opportunity to relax, enjoy outdoor activities, spend meaningful time with loved ones, and create memorable moments away from crowded city spaces. Om Agro Tourism provides a welcoming setting for family picnics, school outings, corporate gatherings, friends' trips, birthdays, and relaxed weekend recreation near Dehu Road.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-dehu-road"
  }
};







    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Dehu Road | Best One Day Picnic Resort & Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a Picnic Spot Near Dehu Road for families, friends, couples, school groups and corporate outings with outdoor recreation in a peaceful agro-tourism setting."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Dehu Road, One Day Picnic Spot Near Dehu Road, Best Picnic Spot Near Dehu Road, Family Picnic Spot Near Dehu Road, Picnic Resort Near Dehu Road, One Day Picnic Resort Near Dehu Road, Best Resort Near Dehu Road for Picnic, One Day Picnic Near Dehu Road, Picnic Places Near Dehu Road, Best Picnic Places Near Dehu Road, Family Picnic Near Dehu Road, One Day Outing Near Dehu Road, Best One Day Outing Near Dehu Road, Picnic Resorts Near Dehu Road, Family Resort Near Dehu Road, One Day Trip Near Dehu Road, Family Outing Near Dehu Road, Weekend Picnic Near Dehu Road, School Picnic Spot Near Dehu Road, School Picnic Near Dehu Road, Corporate Outing Near Dehu Road, Agro Tourism Near Dehu Road, Agro Tourism Near Pune, Picnic Spot Near Nigdi, One Day Picnic Near Akurdi, Picnic Places Near Ravet, Family Picnic Near Kiwale, One Day Picnic Near Mamurdi, Picnic Resort Near Talegaon Dabhade, Picnic Places Near Tathawade, One Day Picnic Near Wakad, Family Picnic Near Chinchwad, One Day Picnic Near Pimpri Chinchwad, Picnic Spot Near Pune, Family Picnic Near Pune"
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
                            <img src='/images/keyword/112.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotneardehuroad;