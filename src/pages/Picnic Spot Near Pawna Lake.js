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

function Picnicspotnearpawnalake() {

const cardData = {
    keyword: "Picnic Spot Near Pawna Lake",
    headingDescription: "Om Agro Tourism offers a refreshing countryside escape for families, friends, students, and groups looking for a picnic experience around the Pawna Lake region. Guests can enjoy farm exploration, swimming, traditional rural activities, homemade food, games, bird watching, and outdoor recreation in a peaceful agricultural environment. It is a comfortable option for spending quality time away from busy city surroundings.",
    topPlaces: [
        {
            title: "Explore the Agricultural Farm",
            description: "Discover the charm of rural life through agricultural farm exploration at Om Agro Tourism. Visitors can walk around the farm surroundings, learn about farming activities, and enjoy a peaceful countryside atmosphere surrounded by open spaces."
        },
        {
            title: "Refreshing Swimming Pool Experience",
            description: "Take a refreshing break at the swimming pool and enjoy relaxed water time with family or friends. The pool adds an enjoyable recreational element to a countryside picnic, particularly for guests looking to cool down and unwind."
        },
        {
            title: "Traditional Bull Cart Ride",
            description: "Experience a traditional bull cart ride and get a glimpse of rural transportation and village culture. This activity can be especially enjoyable for children and families seeking something different from a regular picnic."
        },
        {
            title: "Fun Tractor Ride",
            description: "Enjoy an exciting tractor ride through the agricultural surroundings and experience a fun aspect of farm life. The activity gives visitors a closer connection with the rural setting while adding variety to their day outing."
        },
        {
            title: "Horse Riding Activity",
            description: "Horse riding provides an active outdoor experience in the peaceful farm environment. Guests can enjoy spending time outdoors while adding an adventurous touch to their family or group picnic."
        },
        {
            title: "Homemade Countryside Dining",
            description: "Enjoy tasty homemade food in a relaxed rural setting at Om Agro Tourism. Sharing freshly prepared meals with family and friends adds a warm and satisfying dining experience to a full day of countryside recreation."
        },
        {
            title: "Bird Watching and Nature Exploration",
            description: "Spend peaceful moments observing birds and appreciating the surrounding natural environment. Bird watching gives visitors an opportunity to slow down, enjoy the open landscape, and connect with the quieter side of rural life."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Families and groups can keep their outing lively with a selection of indoor and outdoor games. These activities provide opportunities for friendly competition, group interaction, and enjoyable moments for visitors of different age groups."
        },
        {
            title: "Rural Culture and Farm Life",
            description: "Experience the simplicity of rural culture through farming activities, traditional experiences, and the peaceful atmosphere of the countryside. The setting offers more than a picnic by bringing guests closer to everyday agricultural life."
        },
        {
            title: "Water and Outdoor Recreation",
            description: "Make the day more engaging with water-based and outdoor recreational activities available at Om Agro Tourism. Visitors can combine relaxation, nature, games, and farm experiences for a varied countryside outing."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Pawna Lake",
            description: "Om Agro Tourism provides a peaceful agricultural setting for visitors searching for a picnic spot near Pawna Lake, with farm experiences, recreational activities, homemade food, and relaxing countryside surroundings."
        },
        {
            name: "One Day Picnic Spot Near Pawna Lake",
            description: "Plan a complete one day outing with activities such as swimming, farm exploration, traditional rides, games, bird watching, and homemade food at Om Agro Tourism."
        },
        {
            name: "Best Picnic Spot Near Pawna Lake",
            description: "Visitors looking for a memorable picnic destination around Pawna Lake can enjoy a combination of nature, rural experiences, outdoor recreation, and family-friendly activities at Om Agro Tourism."
        },
        {
            name: "Family Picnic Spot Near Pawna Lake",
            description: "Families can spend quality time together through swimming, horse riding, games, farm exploration, bull cart rides, tractor rides, and enjoyable homemade meals in a peaceful countryside setting."
        },
        {
            name: "Picnic Resort Near Pawna Lake",
            description: "Om Agro Tourism offers a countryside picnic experience with agricultural surroundings, recreational activities, traditional rural experiences, food, and opportunities to relax away from urban crowds."
        },
        {
            name: "One Day Picnic Resort Near Pawna Lake",
            description: "A one day picnic at Om Agro Tourism can include water recreation, outdoor games, farm activities, rural rides, nature experiences, and satisfying homemade food without requiring a complicated itinerary."
        },
        {
            name: "Best Resort Near Pawna Lake for Picnic",
            description: "For visitors planning a relaxed picnic near Pawna Lake, Om Agro Tourism combines natural surroundings with farm experiences, recreational facilities, traditional activities, and countryside dining."
        },
        {
            name: "Family Resort Near Pawna Lake",
            description: "The family-friendly atmosphere at Om Agro Tourism allows children and adults to enjoy swimming, games, horse riding, farming experiences, traditional rides, and relaxed time together."
        },
        {
            name: "One Day Trip Near Pawna Lake",
            description: "Om Agro Tourism is suitable for a refreshing one day trip where guests can step away from routine life and enjoy nature, farming experiences, outdoor activities, and homemade food."
        },
        {
            name: "Family One Day Trip Near Pawna Lake",
            description: "A family outing becomes more engaging with activities for different age groups, including swimming, games, farm exploration, bull cart rides, tractor rides, and horse riding."
        },
        {
            name: "Picnic Places Near Pawna Lake",
            description: "Visitors exploring picnic places near Pawna Lake can consider Om Agro Tourism for its combination of open farm surroundings, nature experiences, rural activities, recreational facilities, and family-friendly atmosphere."
        },
        {
            name: "Best Picnic Places Near Pawna Lake",
            description: "Om Agro Tourism creates an enjoyable countryside environment where groups can combine relaxation with farm exploration, traditional activities, games, water recreation, and homemade food."
        },
        {
            name: "Affordable Picnic Spot Near Pawna Lake",
            description: "Guests searching for an affordable picnic experience can enjoy several activities at one countryside destination, making Om Agro Tourism suitable for families, friends, students, and group outings."
        },
        {
            name: "Budget Picnic Resort Near Pawna Lake",
            description: "Om Agro Tourism offers a practical countryside option for visitors planning a budget-friendly outing with access to farm experiences, games, water activities, traditional rides, and homemade meals."
        },
        {
            name: "Picnic Spot Near Pawna Lake Lonavala",
            description: "For guests travelling around the Pawna Lake and Lonavala region, Om Agro Tourism provides an alternative rural experience featuring farm activities, outdoor recreation, traditional rides, and countryside dining."
        },
        {
            name: "Resort Near Pawna Lake for Family Outing",
            description: "Families can enjoy a complete day of recreation through swimming, horse riding, bird watching, games, farm exploration, tractor rides, bull cart rides, and homemade food at Om Agro Tourism."
        },
        {
            name: "One Day Resort Near Pawna Lake",
            description: "A one day visit to Om Agro Tourism allows guests to combine relaxation and recreation through swimming, games, farm activities, nature experiences, and traditional countryside attractions."
        },
        {
            name: "Nature Picnic Spot Near Pawna Lake",
            description: "Nature lovers can enjoy open agricultural surroundings, bird watching, peaceful spaces, and rural scenery at Om Agro Tourism while taking a break from crowded urban environments."
        },
        {
            name: "Pawna Lake Camping and Picnic",
            description: "Visitors interested in Pawna Lake camping and picnic experiences can add a countryside farm visit to their travel plans and enjoy agricultural activities, recreational options, homemade food, and rural experiences at Om Agro Tourism."
        },
        {
            name: "Picnic Spot Near Pawna Dam",
            description: "Guests exploring the Pawna Dam region can choose Om Agro Tourism for a different kind of outdoor outing, combining peaceful farm surroundings with swimming, games, traditional rides, nature experiences, and homemade food."
        },
        {
            name: "Family Picnic Resort Near Pawna Lake",
            description: "Om Agro Tourism brings together family-friendly recreation and a peaceful farm environment where visitors can enjoy swimming, horse riding, games, tractor rides, bull cart experiences, and quality time together."
        },
        {
            name: "Picnic Spot with Activities Near Pawna Lake",
            description: "Guests looking for a picnic destination with activities can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, games, farm exploration, bird watching, and other outdoor experiences at Om Agro Tourism."
        }
    ],
    tableData: [
        ["Picnic Spot Near Pawna Lake"],
        ["One Day Picnic Spot Near Pawna Lake"],
        ["Best Picnic Spot Near Pawna Lake"],
        ["Family Picnic Spot Near Pawna Lake"],
        ["Picnic Resort Near Pawna Lake"],
        ["One Day Picnic Resort Near Pawna Lake"],
        ["Best Resort Near Pawna Lake for Picnic"],
        ["Family Resort Near Pawna Lake"],
        ["One Day Trip Near Pawna Lake"],
        ["Family One Day Trip Near Pawna Lake"],
        ["Picnic Places Near Pawna Lake"],
        ["Best Picnic Places Near Pawna Lake"],
        ["Affordable Picnic Spot Near Pawna Lake"],
        ["Budget Picnic Resort Near Pawna Lake"],
        ["Picnic Spot Near Pawna Lake Lonavala"],
        ["Resort Near Pawna Lake for Family Outing"],
        ["One Day Resort Near Pawna Lake"],
        ["Nature Picnic Spot Near Pawna Lake"],
        ["Pawna Lake Camping and Picnic"],
        ["Picnic Spot Near Pawna Dam"],
        ["Family Picnic Resort Near Pawna Lake"],
        ["Picnic Spot with Activities Near Pawna Lake"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Peaceful Farm Environment",
            WhyChoosedescription: "Om Agro Tourism provides an open countryside atmosphere where families and groups can enjoy a relaxed day surrounded by agricultural landscapes and natural surroundings away from busy urban areas."
        },
        {
            WhyChooseheading: "Fun Activities for Families",
            WhyChoosedescription: "Visitors of different age groups can stay engaged with swimming, games, horse riding, tractor rides, bull cart rides, farm activities, and other recreational experiences."
        },
        {
            WhyChooseheading: "Authentic Agricultural Experience",
            WhyChoosedescription: "The farm setting allows guests to experience agriculture and rural surroundings directly, making the outing more meaningful than a conventional leisure visit."
        },
        {
            WhyChooseheading: "Refreshing Water Activities",
            WhyChoosedescription: "Swimming and other water-based recreation provide a refreshing break during the day and give families and groups an enjoyable way to relax together."
        },
        {
            WhyChooseheading: "Traditional Countryside Activities",
            WhyChoosedescription: "Bull cart rides and tractor rides introduce visitors to traditional rural experiences while adding a distinctive cultural element to their picnic near the Pawna Lake region."
        },
        {
            WhyChooseheading: "Homemade Food and Rural Dining",
            WhyChoosedescription: "Tasty homemade food adds comfort to the outing, allowing guests to enjoy satisfying meals while spending time in a peaceful countryside environment."
        },
        {
            WhyChooseheading: "Ideal for Group Outings",
            WhyChoosedescription: "The combination of activities, open spaces, food, and nature makes Om Agro Tourism suitable for family picnics, friend groups, student outings, and other group visits."
        },
        {
            WhyChooseheading: "Nature, Recreation and Rural Culture",
            WhyChoosedescription: "Guests can combine bird watching, farm exploration, outdoor activities, traditional experiences, and relaxation to enjoy a well-rounded countryside day around the Pawna Lake travel circuit."
        }
    ]
};


const faqData = [
    {
        question: "What makes Om Agri Tourism an interesting picnic option for people visiting Pawna Lake?",
        answer: "Visitors looking beyond the lakeside experience can enjoy a countryside outing with a mix of recreation and farm-based activities. Swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food can all be included in the day's plans."
    },
    {
        question: "How can families near Pawna Lake plan their picnic at Om Agri Tourism?",
        answer: "Families can divide the day between active entertainment and relaxed time at the farm. Children may enjoy swimming and selected rides, while adults can explore boating, bird watching and traditional countryside experiences before gathering for a homemade meal."
    },
    {
        question: "Which activities can be enjoyed at a picnic spot near Pawna Lake?",
        answer: "A varied itinerary can include swimming, boating, horse riding, tractor rides and bull cart rides. Guests who prefer a quieter pace can spend time bird watching, enjoying the farm atmosphere and sharing homemade food with their group."
    },
    {
        question: "Can friends visiting Pawna Lake choose Om Agri Tourism for a day outing?",
        answer: "Friends can use the destination for a change of pace after enjoying the popular lake surroundings. Outdoor activities such as boating, swimming and horse riding can be combined with tractor or bull cart rides, giving the group several experiences to enjoy together."
    },
    {
        question: "Is Om Agri Tourism suitable for children during a picnic near Pawna Lake?",
        answer: "Young guests can enjoy age-appropriate outdoor activities under proper adult supervision. Swimming, boating and farm rides can keep children engaged, while bird watching introduces them to the natural surroundings and gives the outing an additional educational element."
    },
    {
        question: "What type of countryside experiences are available for Pawna Lake picnic groups?",
        answer: "Groups can experience rural activities that are different from a conventional sightseeing trip. Horse riding, tractor rides and bull cart rides bring a traditional farm atmosphere to the outing, while boating, swimming and bird watching provide additional recreation."
    },
    {
        question: "Can guests enjoy homemade food during a picnic at Om Agri Tourism?",
        answer: "A homemade meal can become a relaxed part of the day's itinerary, giving visitors time to sit together after outdoor activities. The farm setting and traditional food experience can complement swimming, boating and countryside rides for a more complete picnic."
    },
    {
        question: "What can senior family members do during a Pawna Lake picnic trip to Om Agri Tourism?",
        answer: "Senior guests can choose a comfortable pace instead of participating in every active attraction. Bird watching, enjoying homemade food and spending time in the open surroundings can be pleasant options, while younger family members explore swimming, boating and rides."
    },
    {
        question: "How should a group schedule activities for a one-day picnic near Pawna Lake?",
        answer: "Starting with a few preferred recreational activities can leave enough time for meals and relaxation later in the day. Groups may combine swimming or boating with one or two countryside rides, then reserve quieter time for bird watching, photography and conversations."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Pawna Lake?",
        answer: "Travelers seeking more than a typical lake visit can enjoy a combination of farm recreation, nature and traditional experiences. Swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food create plenty of possibilities for a memorable group outing."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Aditya Kulkarni",
        feedback:
            "After spending time around Pawna Lake, our group wanted a different experience for the rest of the day. The farm activities gave us plenty to do, especially the horse riding and traditional bull cart ride. The relaxed meal afterward was a great way to finish the outing.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss Prachi More",
        feedback:
            "The peaceful farm atmosphere was the highlight of our family visit. Kids were excited about the water activities and rides, while the older members enjoyed bird watching and sitting together during the meal. It gave everyone something enjoyable to remember from the trip.",
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
  "name": "Picnic Spot Near Pawna Lake",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-pawna-lake.webp",
  "description": "Searching for a peaceful picnic spot near Pawna Lake for a memorable family outing or group day trip? Om Agro Tourism offers a welcoming agro-tourism setting for families, friends, students and groups who want to spend quality time away from the usual city routine. A one day picnic near Pawna Lake can be a refreshing choice for visitors planning a short outdoor escape, family gathering or friends' outing. Those looking for the best picnic spot near Pawna Lake can plan a relaxed day filled with leisure and shared experiences, while families searching for a family picnic spot near Pawna Lake can enjoy a comfortable destination for spending time together. A picnic resort near Pawna Lake or one day picnic resort near Pawna Lake can be suitable for family gatherings, school outings, friends' get-togethers and group recreation. Visitors comparing the best resort near Pawna Lake for a picnic can also consider an agro-tourism destination that offers a pleasant atmosphere for a planned day outing. Om Agro Tourism is a suitable choice for families and groups looking for a refreshing picnic destination around Pawna Lake.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-pawna-lake"
  }
};







    return (
        <div>


<Helmet>
  <title>
    Picnic Spot Near Pawna Lake | Lakeside Escape, Family Leisure & Outdoor Recreation | +91 7066665554
  </title>

  <meta
    name="description"
    content="Explore a picnic spot near Pawna Lake for families, friends and groups. Plan a one day picnic at Om Agro Tourism for a relaxing outdoor experience and memorable family recreation."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Pawna Lake, One Day Picnic Spot Near Pawna Lake, Best Picnic Spot Near Pawna Lake, Family Picnic Spot Near Pawna Lake, Picnic Resort Near Pawna Lake, One Day Picnic Resort Near Pawna Lake, Best Resort Near Pawna Lake for Picnic, Family Resort Near Pawna Lake, One Day Trip Near Pawna Lake, Family One Day Trip Near Pawna Lake, Picnic Places Near Pawna Lake, Best Picnic Places Near Pawna Lake, Family Outing Near Pawna Lake, One Day Outing Near Pawna Lake, Picnic Destination Near Pawna Lake, Agro Tourism Near Pawna Lake, Best Family Picnic Near Pawna Lake, Weekend Picnic Near Pawna Lake, Family Picnic Resort Near Pawna Lake"
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
                            <img src='/images/keyword/168.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearpawnalake;