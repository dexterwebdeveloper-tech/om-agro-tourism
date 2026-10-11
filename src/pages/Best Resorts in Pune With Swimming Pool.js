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

function BestResortsInPuneWithSwimmingPool() {


const cardData = {
    keyword: "Best Resorts In Pune With Swimming Pool",
    headingDescription: "Om Agro Tourism is a refreshing countryside destination near Pune where families, children, friends, and groups can enjoy swimming, water activities, farm experiences, games, homemade food, and outdoor recreation. With its peaceful rural setting and varied attractions, it is a suitable choice for visitors looking for a resort-style day outing with a swimming pool and activities.",

    topPlaces: [
        {
            title: "Swimming Pool",
            description: "The Swimming Pool is a major attraction for visitors looking for a relaxing resort experience near Pune, offering a refreshing way to enjoy quality time with family and friends."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities provide additional fun for children and adults, making the outing more lively for families and groups looking for water-based recreation."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding adds an exciting outdoor experience to the visit and gives families, children, and adventure-loving guests an opportunity to enjoy a traditional countryside activity."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food complements the day outing with comforting meals, allowing visitors to combine recreation and satisfying food within the same countryside destination."
        },
        {
            title: "Boating",
            description: "Boating offers a peaceful recreational experience for visitors who want to relax around the water while enjoying a break from the busy urban surroundings."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops provide an interesting rural experience where families and children can learn about farming and enjoy a closer connection with nature."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games give families and groups additional entertainment throughout their visit, making the destination suitable for active day outings."
        },
        {
            title: "Jungle Safari",
            description: "Jungle Safari adds an adventurous element to the countryside experience and gives visitors another engaging outdoor activity to enjoy during their stay or picnic."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride introduces visitors to a traditional rural activity and creates a memorable experience for children, families, and groups visiting the destination."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching offers a calm nature-based activity for guests who enjoy observing birds and spending peaceful time in the open countryside environment."
        }
    ],

    services: [
        {
            name: "Best Resorts in Pune With Swimming Pool",
            description: "Om Agro Tourism offers a countryside resort-style experience with a swimming pool, water activities, games, farm attractions, homemade food, and outdoor recreation for visitors near Pune."
        },
        {
            name: "Resorts in Pune With Swimming Pool",
            description: "Visitors looking for resorts in Pune with swimming pool facilities can enjoy a refreshing environment with swimming, recreational activities, farm experiences, and relaxing open surroundings."
        },
        {
            name: "Best Resorts Near Pune With Swimming Pool",
            description: "A visit to Om Agro Tourism combines swimming pool enjoyment with countryside attractions, traditional rides, games, water activities, and food for a complete day outing."
        },
        {
            name: "Resorts Near Pune With Swimming Pool",
            description: "The destination provides a peaceful alternative to crowded city spaces, with a swimming pool and several activities suitable for families, children, friends, and groups."
        },
        {
            name: "Family Resorts in Pune With Swimming Pool",
            description: "Families can enjoy swimming, games, farm experiences, boating, horse riding, and other attractions while spending quality time together in a relaxed rural setting."
        },
        {
            name: "Best Family Resorts Near Pune With Swimming Pool",
            description: "The combination of a swimming pool, child-friendly activities, nature experiences, homemade food, and outdoor recreation makes the destination suitable for family outings."
        },
        {
            name: "Budget Resorts Near Pune With Swimming Pool",
            description: "Visitors seeking a value-focused resort experience can enjoy swimming and multiple recreational attractions in one location without needing to travel between different destinations."
        },
        {
            name: "Affordable Resorts Near Pune With Swimming Pool",
            description: "Om Agro Tourism provides an affordable day-out environment where visitors can combine pool time with games, farm activities, water attractions, food, and countryside relaxation."
        },
        {
            name: "Luxury Resorts Near Pune With Swimming Pool",
            description: "Guests searching for a more relaxed resort-style experience can enjoy swimming, food, nature surroundings, recreational activities, and peaceful open spaces away from the city."
        },
        {
            name: "Resorts Near Pune With Private Swimming Pool",
            description: "Visitors specifically searching for private swimming pool facilities should check the latest package and facility details before booking, while the destination offers swimming and several other recreational attractions."
        },
        {
            name: "Resorts Near Pune With Pool and Activities",
            description: "Along with swimming, visitors can enjoy horse riding, boating, games, tractor rides, farm workshops, water activities, and traditional rural experiences."
        },
        {
            name: "Resorts Near Pune With Swimming Pool and Food",
            description: "Guests can combine refreshing pool time with Tasty Homemade Food, making it convenient to enjoy recreation and meals at the same countryside destination."
        },
        {
            name: "Resorts Near Pune With Swimming Pool and Stay",
            description: "Visitors planning an overnight experience can explore available stay options along with swimming, farm activities, games, food, and other attractions, subject to the current package."
        },
        {
            name: "Resorts Near Pune With Swimming Pool for One Day Picnic",
            description: "The swimming pool, water activities, games, farm experiences, food, and outdoor attractions make the destination suitable for visitors planning a complete one day picnic near Pune."
        },
        {
            name: "One Day Picnic Resorts Near Pune With Swimming Pool",
            description: "Families and groups can spend their day enjoying pool activities, water recreation, homemade food, games, traditional rides, and nature-based experiences in one location."
        },
        {
            name: "One Day Resorts Near Pune With Swimming Pool",
            description: "A one day resort-style outing can include swimming, boating, horse riding, farm activities, games, water attractions, and relaxing time in the countryside."
        },
        {
            name: "Resorts Near Pune With Swimming Pool for Famil",
            description: "Families can enjoy a varied day out with swimming, outdoor games, farm experiences, food, water activities, and attractions designed to keep both children and adults engaged."
        },
        {
            name: "Resorts Near Pune With Swimming Pool for Kids",
            description: "Children can enjoy swimming and other age-friendly activities such as games, water attractions, farm experiences, tractor rides, and outdoor recreation."
        },
        {
            name: "Kids Friendly Resorts Near Pune With Swimming Pool",
            description: "The combination of swimming, games, farm experiences, water activities, and open surroundings creates an enjoyable environment for families visiting with children."
        },
        {
            name: "Resorts Near Pune With Swimming Pool and Water Park",
            description: "Visitors can combine swimming pool recreation with Water Park Activities and other attractions for a lively outing suitable for families, friends, and groups."
        },
        {
            name: "Water Park Resorts Near Pune With Swimming Pool",
            description: "Water Park Activities and swimming provide refreshing entertainment, while games, farm attractions, food, and traditional rides add variety to the overall visit."
        },
        {
            name: "Adventure Resorts Near Pune With Swimming Pool",
            description: "Adventure-loving visitors can combine swimming with horse riding, tractor rides, games, boating, jungle safari, water activities, and other outdoor experiences."
        }
    ],

    tableData: [
        ["Best Resorts in Pune With Swimming Pool"],
        ["Resorts in Pune With Swimming Pool"],
        ["Best Resorts Near Pune With Swimming Pool"],
        ["Resorts Near Pune With Swimming Pool"],
        ["Family Resorts in Pune With Swimming Pool"],
        ["Best Family Resorts Near Pune With Swimming Pool"],
        ["Budget Resorts Near Pune With Swimming Pool"],
        ["Affordable Resorts Near Pune With Swimming Pool"],
        ["Luxury Resorts Near Pune With Swimming Pool"],
        ["Resorts Near Pune With Private Swimming Pool"],
        ["Resorts Near Pune With Pool and Activities"],
        ["Resorts Near Pune With Swimming Pool and Food"],
        ["Resorts Near Pune With Swimming Pool and Stay"],
        ["Resorts Near Pune With Swimming Pool for One Day Picnic"],
        ["One Day Picnic Resorts Near Pune With Swimming Pool"],
        ["One Day Resorts Near Pune With Swimming Pool"],
        ["Resorts Near Pune With Swimming Pool for Famil"],
        ["Resorts Near Pune With Swimming Pool for Kids"],
        ["Kids Friendly Resorts Near Pune With Swimming Pool"],
        ["Resorts Near Pune With Swimming Pool and Water Park"],
        ["Water Park Resorts Near Pune With Swimming Pool"],
        ["Adventure Resorts Near Pune With Swimming Pool"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Refreshing Swimming Pool Experience",
            WhyChoosedescription: "The swimming pool gives visitors a convenient way to cool down and relax while enjoying a full day surrounded by open countryside and recreational attractions."
        },
        {
            WhyChooseheading: "Activities Beyond the Pool",
            WhyChoosedescription: "A visit is not limited to swimming, as guests can also enjoy water activities, horse riding, boating, games, farm experiences, tractor rides, and other attractions."
        },
        {
            WhyChooseheading: "Family-Friendly Environment",
            WhyChoosedescription: "Families can choose from activities suitable for children and adults, creating opportunities for everyone to participate, relax, and spend meaningful time together."
        },
        {
            WhyChooseheading: "Peaceful Rural Setting",
            WhyChoosedescription: "The countryside surroundings provide a refreshing change from busy city life, allowing visitors to enjoy nature, open spaces, bird watching, and farm-based experiences."
        },
        {
            WhyChooseheading: "Suitable for Day Picnics",
            WhyChoosedescription: "Visitors planning a one day picnic can combine swimming, food, games, water recreation, farm activities, and outdoor entertainment without needing to visit multiple places."
        },
        {
            WhyChooseheading: "Homemade Food Options",
            WhyChoosedescription: "Tasty Homemade Food adds value to the outing by giving guests an opportunity to enjoy satisfying meals while spending their day at the agritourism destination."
        },
        {
            WhyChooseheading: "Fun for Groups",
            WhyChoosedescription: "Friends, school groups, corporate teams, and extended families can participate in shared games, outdoor activities, water recreation, and traditional rural experiences."
        },
        {
            WhyChooseheading: "Nature and Adventure Together",
            WhyChoosedescription: "From Bird Watching and Farm Tours to Horse Riding, Jungle Safari, Boating, and Water Park Activities, the destination brings together relaxing nature experiences and active recreation."
        }
    ]
};


const faqData = [
    {
        question: "Is Om Agri Tourism a good option among the best resorts in Pune with swimming pool?",
        answer: "For visitors searching for a refreshing resort-style day experience in Pune, Om Agri Tourism provides a countryside setting with swimming and several outdoor activities. Guests can combine time in the swimming pool with boating, horse riding, tractor rides, bull cart rides and bird watching for a relaxed farm getaway."
    },
    {
        question: "What can guests do at Om Agri Tourism besides swimming?",
        answer: "Swimming is only one part of the experience at Om Agri Tourism. Visitors can also enjoy boating, horse riding, tractor rides and bull cart rides, while bird watching and time around the greenery provide opportunities to slow down and enjoy the natural surroundings."
    },
    {
        question: "Is Om Agri Tourism suitable for families looking for a resort with swimming pool near Pune?",
        answer: "Families can enjoy a varied outing by combining pool time with countryside recreation. Children and adults can participate in suitable activities such as swimming and boating, while horse riding and traditional farm rides add something different to the family day."
    },
    {
        question: "Can friends plan a swimming pool outing at Om Agri Tourism?",
        answer: "A friends' group can spend the day moving between swimming, boating and other outdoor experiences rather than limiting the visit to pool activities. Horse riding, tractor rides and bull cart rides can make the outing more engaging, with the farm environment providing a comfortable backdrop for conversations and relaxation."
    },
    {
        question: "Does Om Agri Tourism offer a different experience from regular resorts in Pune?",
        answer: "The destination combines recreational activities with a distinctly rural atmosphere. Along with swimming and boating, visitors can experience horse riding, tractor rides, bull cart rides and bird watching, giving the outing a farm-oriented character instead of a conventional hotel or city-resort experience."
    },
    {
        question: "What makes a swimming pool at a farm destination attractive for a Pune day outing?",
        answer: "A swimming pool becomes more enjoyable when it is part of a broader outdoor experience. At Om Agri Tourism, guests can take a refreshing swim and then explore activities such as boating, horse riding and countryside rides while spending time in an open, green farm setting."
    },
    {
        question: "Can children enjoy a resort-style day at Om Agri Tourism in Pune?",
        answer: "Children can have an active day with suitable experiences such as swimming, boating, tractor rides and bull cart rides under appropriate adult supervision. Bird watching can also introduce them to nature, making the visit more than just a swimming-focused outing."
    },
    {
        question: "Is homemade food available during a visit to Om Agri Tourism?",
        answer: "A homemade meal can complement the relaxed farm experience and give guests a traditional food break between outdoor activities. Families and groups can enjoy their meal before returning to swimming, boating or other experiences planned during the day."
    },
    {
        question: "Can corporate groups choose Om Agri Tourism for a swimming and recreation outing near Pune?",
        answer: "Corporate groups can use the destination for a relaxed outdoor gathering that combines recreation and group interaction. Swimming, boating, horse riding and traditional tractor or bull cart rides provide different activities, while the countryside surroundings create a pleasant change from an office environment."
    },
    {
        question: "Why consider Om Agri Tourism when searching for the best resorts in Pune with swimming pool?",
        answer: "Om Agri Tourism stands out for combining swimming with farm-based recreation and a peaceful countryside atmosphere. Guests can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food, making it a suitable choice for families, friends and groups seeking a refreshing Pune getaway."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Kunal Joshi",
        feedback:
            "We were searching for a Pune destination with a swimming pool where our entire family could enjoy more than just pool time. Om Agri Tourism was a great choice. Swimming and boating were fun, and the tractor and bull cart rides gave the children a memorable rural experience. We enjoyed the peaceful surroundings as well.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss Neha Kulkarni",
        feedback:
            "Our friends' group spent a full day at Om Agri Tourism and loved the variety of activities. After enjoying the swimming pool, we tried horse riding and boating and later explored the farm surroundings. The combination of recreation, greenery and homemade food made the outing feel refreshing and different from a regular resort visit.",
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
  "name": "Best Resorts In Pune With Swimming Pool",
  "image": "https://www.omagrotourism.com/assets/images/best-resorts-in-pune-with-swimming-pool.webp",
  "description": "Best Resorts In Pune With Swimming Pool is an ideal search for families, couples, friends, corporate groups, and visitors looking for a refreshing day outing or relaxing stay surrounded by open spaces and a pleasant countryside atmosphere. Om Agro Tourism brings together the appeal of a resort-style getaway with outdoor recreation, swimming pool enjoyment, family time, and agro-tourism experiences near Pune. Guests can consider a comfortable setting for one day picnics, weekend plans, celebrations, group outings, and casual breaks away from the busy city environment. Resorts in Pune With Swimming Pool are especially suitable for families looking for children-friendly recreation, couples planning a relaxed escape, and groups wanting to combine leisure with outdoor activities. Those searching for Best Resorts Near Pune With Swimming Pool or Resorts Near Pune With Swimming Pool can explore options around Pune and nearby countryside destinations for convenient short-distance getaways. The experience can also suit visitors from Pimpri Chinchwad, Wakad, Hinjewadi, Baner, Kharadi, Hadapsar, Chinchwad, Bhosari, and other Pune areas. Whether the plan involves a family picnic, pool day, weekend outing, corporate gathering, birthday celebration, or nature-focused break, choosing a resort with swimming pool facilities can make the visit more enjoyable. Om Agro Tourism provides an agro-tourism-oriented environment where leisure, outdoor recreation, countryside surroundings, and memorable group experiences come together for a refreshing escape near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/best-resorts-in-pune-with-swimming-pool"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Best Resorts In Pune With Swimming Pool | Family Resort, Pool & One Day Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover the Best Resorts In Pune With Swimming Pool for family picnics, weekend outings, couples, friends, corporate groups and relaxing poolside recreation near Pune."
  />

  <meta
    name="keywords"
    content="Best Resorts in Pune With Swimming Pool, Resorts in Pune With Swimming Pool, Best Resorts Near Pune With Swimming Pool, Resorts Near Pune With Swimming Pool, Best Resort in Pune with Swimming Pool, Family Resorts in Pune with Swimming Pool, Resorts Near Pune for Family with Swimming Pool, One Day Picnic Resorts Near Pune with Swimming Pool, Pool Resorts Near Pune, Swimming Pool Resort Near Pune, Best Family Resort Near Pune with Pool, Resorts Near Pune with Pool, Weekend Resorts Near Pune with Swimming Pool, One Day Resorts Near Pune with Swimming Pool, Picnic Resorts Near Pune with Swimming Pool, Agro Tourism Resort Near Pune with Swimming Pool, Family Outing Resort Near Pune, Resorts Near Pimpri Chinchwad with Swimming Pool, Resorts Near Wakad with Swimming Pool, Resorts Near Hinjewadi with Swimming Pool, Resorts Near Chinchwad with Swimming Pool, Resorts Near Bhosari with Swimming Pool, Best Pool Resort Near Pune, One Day Outing Near Pune, Family Picnic Near Pune, Weekend Getaway Near Pune, Agro Tourism Near Pune"
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
                            <img src='/images/keyword/96.jpg' alt='img' className='img-fluid' />
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

export default BestResortsInPuneWithSwimmingPool;