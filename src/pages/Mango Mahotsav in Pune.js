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

function Mangomahotsavinpune() {


const cardData = {
    keyword: "Mango Mahotsav in Pune",

    headingDescription: "Experience the joy of the mango season at Om Agri Tourism with a vibrant Mango Mahotsav in Pune that brings together delicious seasonal mango experiences, refreshing Aamras, farm surroundings, rural activities, nature, and quality time with family and friends. Om Agri Tourism's Amba Mahotsav is designed to give visitors more than just a mango feast, offering an opportunity to enjoy the seasonal charm of the farm, explore agricultural surroundings, participate in outdoor activities, and experience the peaceful atmosphere of Koyali near Chakan. The destination is especially suitable for visitors searching for an Aamras party near Pune, an Amba Mahotsav in agri tourism Pune, a mango festival experience, or an enjoyable seasonal outing surrounded by nature. During the mango season, guests can enjoy fresh Aamras and mango-based experiences while spending time in a rural environment that brings together agriculture, food, recreation, and traditional countryside experiences. Whether you are planning a family day out, friends' gathering, seasonal celebration, or a unique agro-tourism experience, Om Agri Tourism provides a memorable way to celebrate the king of fruits in the natural surroundings of Koyali.",

    topPlaces: [
        {
            title: "Fresh Aamras Celebration",
            description: "Enjoy the highlight of the mango season with delicious Aamras prepared for the festive celebration. The rich seasonal flavour combined with the peaceful farm atmosphere makes the experience especially enjoyable for mango lovers, families, and groups."
        },
        {
            title: "Mango Orchard Experience",
            description: "Explore the farm environment and experience the seasonal charm of mango-growing surroundings. Visitors can spend time close to nature while appreciating the agricultural setting that gives the Mango Mahotsav its authentic rural character."
        },
        {
            title: "Amba Mahotsav Celebration",
            description: "Celebrate the arrival of the mango season through a lively Amba Mahotsav experience at Om Agri Tourism. The event brings together seasonal food, countryside surroundings, recreation, and enjoyable moments for visitors of different age groups."
        },
        {
            title: "Mango Season Farm Visit",
            description: "Discover the beauty of the farm during mango season and enjoy a relaxed visit surrounded by greenery and agricultural landscapes. It is a refreshing experience for visitors who want to combine seasonal food with agro-tourism."
        },
        {
            title: "Traditional Mango Feast",
            description: "Enjoy the seasonal taste of mango through a traditional food experience featuring Aamras and mango-inspired flavours. Sharing the feast with family or friends adds a social and festive character to the Mango Mahotsav."
        },
        {
            title: "Countryside Nature Walk",
            description: "Take a leisurely walk through the peaceful farm surroundings and enjoy fresh air, greenery, open landscapes, and rural scenery. The nature experience creates a pleasant balance between the festive atmosphere and quiet countryside relaxation."
        },
        {
            title: "Family Mango Celebration",
            description: "Families can make the mango season memorable by enjoying Aamras, farm surroundings, outdoor recreation, and shared meals together. The relaxed environment makes the celebration suitable for parents, children, and extended family groups."
        },
        {
            title: "Mango Photography Experience",
            description: "Capture seasonal memories around the farm, mango-growing areas, greenery, and countryside landscapes. The natural setting provides an attractive backdrop for family photographs, group pictures, and memorable Mango Mahotsav moments."
        },
        {
            title: "Agri Tourism Farm Experience",
            description: "Go beyond the mango feast and explore the wider agro-tourism environment through farm surroundings, rural activities, nature, and traditional experiences. This creates a more meaningful connection with agriculture and countryside life."
        },
        {
            title: "Group Aamras Party Experience",
            description: "Friends, colleagues, and larger groups can enjoy a fun-filled Aamras party while spending time together in the peaceful farm environment. Seasonal food, outdoor recreation, and countryside surroundings make the gathering more memorable."
        }
    ],

    services: [
        {
            name: "Amba Mahotsav at om agri tourism",
            description: "Celebrate the mango season at Om Agri Tourism with a memorable Amba Mahotsav featuring seasonal Aamras, farm surroundings, outdoor experiences, and enjoyable moments with family and friends."
        },
        {
            name: "Amba mahotsav in agri tourism Pune",
            description: "Experience an authentic Amba Mahotsav in an agro-tourism setting where the mango season is celebrated through Aamras, farm experiences, nature, rural surroundings, and group recreation."
        },
        {
            name: "Aamras party near pune",
            description: "Enjoy a delicious Aamras party near Pune surrounded by peaceful countryside landscapes, farm experiences, seasonal mango flavours, and opportunities for family and group entertainment."
        },
        {
            name: "Best Place to Enjoy Aamras Party Near Pune",
            description: "Om Agri Tourism offers a memorable setting for an Aamras party near Pune, combining seasonal mango flavours with farm surroundings, nature, outdoor activities, and a relaxed rural atmosphere."
        },
        {
            name: "Aamras Party / Mango Mahotsav at Om Agri Tourism",
            description: "Celebrate the mango season with an Aamras Party and Mango Mahotsav at Om Agri Tourism, bringing together delicious seasonal mango experiences, farm surroundings, nature, recreation, and traditional countryside charm."
        },
        {
            name: "Aamras party mango mahotsav at om agri tourism Koyali",
            description: "Enjoy the Aamras Party Mango Mahotsav at Om Agri Tourism in Koyali with seasonal mango flavours, farm exploration, outdoor recreation, nature, and a festive countryside atmosphere."
        },
        {
            name: "Agri Tourism in Koyali",
            description: "Explore Agri Tourism in Koyali through farm surroundings, mango-season experiences, nature, rural activities, traditional food, and a peaceful escape from the busy city environment."
        },
        {
            name: "agro tourism chakan",
            description: "Discover the agro-tourism experience around Chakan with farm landscapes, rural surroundings, seasonal mango celebrations, nature activities, traditional experiences, and relaxing countryside leisure."
        }
    ],

    tableData: [
        ["Amba Mahotsav at om agri tourism"],
        ["Amba mahotsav in agri tourism Pune"],
        ["Aamras party near pune"],
        ["Best Place to Enjoy Aamras Party Near Pune"],
        ["Aamras Party / Mango Mahotsav at Om Agri Tourism"],
        ["Aamras party mango mahotsav at om agri tourism Koyali"],
        ["Agri Tourism in Koyali"],
        ["agro tourism chakan"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Authentic Mango Season Experience",
            WhyChoosedescription: "Om Agri Tourism brings the joy of mango season into a peaceful agro-tourism environment, allowing visitors to enjoy seasonal Aamras while experiencing the charm of farm surroundings and rural landscapes."
        },
        {
            WhyChooseheading: "Delicious Aamras Celebration",
            WhyChoosedescription: "The Aamras experience is at the heart of the celebration, giving mango lovers an opportunity to enjoy the rich seasonal taste while spending quality time with family, friends, and groups."
        },
        {
            WhyChooseheading: "Peaceful Koyali Farm Setting",
            WhyChoosedescription: "The countryside surroundings of Koyali provide a refreshing backdrop for the Mango Mahotsav, offering greenery, open spaces, fresh air, and a relaxed atmosphere away from the busy city."
        },
        {
            WhyChooseheading: "More Than a Mango Feast",
            WhyChoosedescription: "Visitors can combine the mango celebration with nature walks, farm exploration, outdoor recreation, rural experiences, and group activities, making the outing more engaging than a regular food-focused event."
        },
        {
            WhyChooseheading: "Family-Friendly Celebration",
            WhyChoosedescription: "The relaxed farm environment makes the Mango Mahotsav suitable for families looking to enjoy seasonal food, nature, outdoor activities, and memorable moments together."
        },
        {
            WhyChooseheading: "Ideal for Friends and Groups",
            WhyChoosedescription: "Friends, colleagues, and larger groups can enjoy an Aamras party in a spacious countryside environment where seasonal food, recreation, conversations, and shared experiences come together."
        },
        {
            WhyChooseheading: "Agro-Tourism and Rural Experience",
            WhyChoosedescription: "Along with enjoying mangoes, visitors can experience the agricultural side of Koyali through farm surroundings, rural activities, nature, and traditional countryside experiences."
        },
        {
            WhyChooseheading: "Memorable Seasonal Outing",
            WhyChoosedescription: "The combination of mango flavours, Aamras, farm landscapes, nature, outdoor activities, and festive moments creates a distinctive seasonal outing that visitors can enjoy and remember with their loved ones."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good place to experience Mango Mahotsav in Pune?",
        answer: "Om Agri Tourism can be a refreshing destination for visitors interested in experiencing the seasonal charm of a Mango Mahotsav in Pune. The farm environment offers an opportunity to enjoy mango-related experiences along with greenery, traditional countryside activities and homemade food."
    },
    {
        question: "What can visitors experience during Mango Mahotsav at Om Agri Tourism?",
        answer: "A Mango Mahotsav experience at Om Agri Tourism can be enjoyed as a countryside day outing surrounded by farm greenery. Visitors can explore the seasonal atmosphere while also enjoying activities such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching."
    },
    {
        question: "Is Om Agri Tourism suitable for a family visit during Mango Mahotsav?",
        answer: "Families can enjoy a Mango Mahotsav outing at Om Agri Tourism with experiences suitable for children and adults. Along with enjoying the seasonal mango atmosphere, families can spend time outdoors, participate in recreational activities and enjoy homemade food in a peaceful farm setting."
    },
    {
        question: "Can children enjoy Mango Mahotsav at Om Agri Tourism?",
        answer: "Children can enjoy the seasonal farm atmosphere at Om Agri Tourism while participating in suitable outdoor activities. Bird watching, tractor rides, boating and other farm experiences can add variety to their visit and make a Mango Mahotsav outing more engaging for younger visitors."
    },
    {
        question: "What activities are available at Om Agri Tourism during the mango season?",
        answer: "Visitors can combine their mango-season experience with several activities at Om Agri Tourism, including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These options allow guests to enjoy both the seasonal farm atmosphere and outdoor recreation."
    },
    {
        question: "Can we enjoy homemade food during a Mango Mahotsav visit at Om Agri Tourism?",
        answer: "Guests visiting Om Agri Tourism can enjoy homemade food as part of their countryside experience. Traditional farm-style meals complement the seasonal outing and give families and groups an opportunity to relax and enjoy a satisfying meal surrounded by greenery."
    },
    {
        question: "Is Om Agri Tourism suitable for friends planning a Mango Mahotsav outing near Pune?",
        answer: "Friends can enjoy a Mango Mahotsav-themed outing at Om Agri Tourism by combining seasonal farm experiences with outdoor recreation. Boating, swimming, horse riding, tractor rides and bull cart rides offer opportunities for groups to spend quality time together away from the city."
    },
    {
        question: "Can couples visit Om Agri Tourism during the Mango Mahotsav season?",
        answer: "Couples can enjoy a relaxed seasonal outing at Om Agri Tourism during the mango season. The greenery, farm atmosphere, bird watching and countryside activities provide a pleasant setting for couples who want to spend quality time together in a peaceful environment."
    },
    {
        question: "Does Om Agri Tourism provide a traditional farm experience during mango season?",
        answer: "The farm surroundings at Om Agri Tourism offer visitors a closer connection with rural life during the mango season. Experiences such as tractor rides, bull cart rides, horse riding and bird watching add a traditional countryside touch to the seasonal visit."
    },
    {
        question: "Why choose Om Agri Tourism for a Mango Mahotsav experience in Pune?",
        answer: "Om Agri Tourism brings together the seasonal charm of mangoes, greenery, farm experiences and outdoor recreation in one destination. Visitors can enjoy the mango-season atmosphere while also experiencing swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sachin Chavan",
        feedback:
            "We visited Om Agri Tourism with our family during the mango season and really enjoyed the farm atmosphere. The children loved exploring the surroundings and taking the tractor ride, while we enjoyed the peaceful greenery and homemade food. It was a lovely way to spend a seasonal day together.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Aishwarya Patil",
        feedback:
            "Our Mango Mahotsav outing at Om Agri Tourism was a refreshing experience. We enjoyed the countryside setting along with boating and bird watching, and the traditional farm activities made the visit more interesting. The relaxed atmosphere gave us a memorable break from our regular city routine.",
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
  "name": "Mango Mahotsav in Pune",
  "image": "https://www.omagrotourism.com/assets/images/mango-mahotsav-in-pune.webp",
  "description": "Om Agro Tourism invites families, friends, couples and food lovers to enjoy a memorable Mango Mahotsav in Pune in a refreshing agro-tourism environment. Amba Mahotsav at Om Agri Tourism brings together the seasonal charm of mangoes, traditional Maharashtrian food experiences and the peaceful atmosphere of the countryside. Visitors searching for Amba Mahotsav in agri tourism Pune can enjoy a seasonal celebration centered around the delicious flavors and cultural appeal of mangoes. The event can be an enjoyable option for people looking for an Aamras party near Pune, where families and groups can spend quality time together while enjoying the much-loved seasonal mango delicacy. Visitors searching for the Best Place to Enjoy Aamras Party Near Pune can consider Om Agro Tourism for a refreshing food-focused outing surrounded by greenery and open rural spaces. The Aamras Party / Mango Mahotsav experience can be suitable for families, children, friends, food enthusiasts, corporate groups and visitors who want to celebrate the mango season in a relaxed countryside setting. Guests can enjoy the festive atmosphere while experiencing the charm of agro-tourism and spending time away from the busy city routine. Mango lovers can make the occasion part of a family picnic, weekend outing or group gathering, creating an opportunity to enjoy seasonal flavors with loved ones. The countryside environment adds a distinctive character to the celebration, making the experience different from a regular restaurant-based food outing. Om Agro Tourism provides a welcoming setting for visitors interested in seasonal festivals, traditional food, mango experiences and nature-based recreation near Pune. The Mango Mahotsav can also be suitable for groups planning a fun-filled day with food, relaxation and shared experiences. With the combination of fresh seasonal mango flavors, aamras enjoyment, rural surroundings and agro-tourism charm, Om Agro Tourism offers a memorable destination for celebrating the mango season near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/mango-mahotsav-in-pune"
  }
};



    return (
        <div>


<Helmet>
  <title>
    Mango Mahotsav in Pune | Amba Mahotsav & Aamras Party Near Pune | +91 7066665554
  </title>

  <meta
    name="description"
    content="Celebrate Mango Mahotsav in Pune at Om Agro Tourism with Amba Mahotsav, Aamras Party, seasonal mango flavors and a refreshing agro-tourism experience."
  />

  <meta
    name="keywords"
    content="Mango Mahotsav in Pune, Amba Mahotsav at Om Agri Tourism, Amba Mahotsav in agri tourism Pune, Aamras party near Pune, Best Place to Enjoy Aamras Party Near Pune, Aamras Party / Mango Mahotsav, Mango Mahotsav near Pune, Mango Festival near Pune, Mango festival Pune, Amba Mahotsav Pune, Amba Mahotsav near Pune, Aamras party Pune, Aamras party near Pune, best Aamras party near Pune, Aamras party places near Pune, Aamras party destination near Pune, mango festival near Pune, mango celebration near Pune, mango party near Pune, mango party Pune, mango event near Pune, mango food festival near Pune, mango season event near Pune, aamras festival near Pune, aamras festival Pune, traditional Aamras party near Pune, Maharashtrian Aamras party near Pune, mango picnic near Pune, mango picnic places near Pune, mango farm near Pune, mango orchard near Pune, mango farm outing near Pune, mango farm picnic near Pune, mango tourism near Pune, mango experience near Pune, agro tourism mango festival near Pune, agro tourism Aamras party near Pune, agri tourism mango festival Pune, agri tourism Aamras party near Pune, family Aamras party near Pune, family mango festival near Pune, mango festival for family near Pune, weekend Aamras party near Pune, one day mango outing near Pune, mango outing near Pune, food outing near Pune, seasonal food festival near Pune, best mango festival near Pune, best Aamras place near Pune, Aamras and Puri near Pune, fresh mango Aamras near Pune, mango Mahotsav agro tourism Pune, Amba Mahotsav agro tourism Pune"
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
                            <img src='/images/keyword/15.jpg' alt='img' className='img-fluid' />
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

export default Mangomahotsavinpune;