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

function Picnicspotnearnashik() {


const cardData = {
    keyword: "Picnic Spot Near Nashik",
    headingDescription: "Looking for a Picnic Spot Near Nashik for a one-day family outing, weekend picnic, or relaxing break with friends? Om Agro Tourism offers a peaceful farm-based environment where visitors can enjoy nature, outdoor activities, traditional rural experiences, farm exploration, group recreation, and quality time away from the busy city routine. The destination can be considered for one-day picnics, return trips, family gatherings, and longer two-day plans, giving visitors a refreshing combination of countryside surroundings, enjoyable activities, food, and relaxation.",

    topPlaces: [
        {
            title: "Farm Nature Picnic",
            description: "Enjoy a relaxed picnic surrounded by open farmland, greenery, fresh air, and peaceful countryside scenery that creates a refreshing atmosphere for families and groups."
        },
        {
            title: "Family Outdoor Recreation",
            description: "Spend quality time together through outdoor games, farm activities, nature exploration, and recreational experiences suitable for children and adults."
        },
        {
            title: "Traditional Village Experience",
            description: "Discover rural Maharashtra through traditional activities, agricultural surroundings, countryside experiences, and a slower pace of outdoor leisure."
        },
        {
            title: "Agricultural Farm Walk",
            description: "Explore the farm surroundings while learning about rural landscapes, seasonal activities, crops, and the everyday charm of countryside life."
        },
        {
            title: "Countryside Group Games",
            description: "Friends, families, and larger groups can enjoy open-space games and recreational activities that bring energy and fun to a picnic day."
        },
        {
            title: "Refreshing Water Recreation",
            description: "Add variety to your picnic with refreshing water-based leisure and recreational activities that make a family or group outing more enjoyable."
        },
        {
            title: "Traditional Food Experience",
            description: "Enjoy a memorable meal in a peaceful farm environment while experiencing traditional flavors that complement a relaxed countryside picnic."
        },
        {
            title: "Nature Photography Experience",
            description: "Capture greenery, open landscapes, farm surroundings, and memorable family moments while exploring the scenic countryside environment."
        },
        {
            title: "Overnight Countryside Picnic",
            description: "For visitors planning a longer break, an overnight experience allows more time for outdoor activities, relaxation, meals, and exploration of the rural surroundings."
        },
        {
            title: "One-Day Family Getaway",
            description: "Plan a complete day away from the regular routine with nature, recreation, food, farm activities, and comfortable time spent together in the countryside."
        }
    ],

    services: [
        {
            name: "1 day picnic spot near nashik",
            description: "Enjoy a convenient one-day picnic experience with farm surroundings, outdoor activities, nature exploration, traditional food, and relaxing countryside leisure."
        },
        {
            name: "2 days picnic spot near nashik",
            description: "Plan a longer two-day getaway with additional time for farm activities, outdoor recreation, nature experiences, meals, and peaceful overnight relaxation."
        },
        {
            name: "best places near nashik for picnic",
            description: "Choose a refreshing countryside picnic experience where families and groups can enjoy nature, open spaces, activities, food, and rural experiences."
        },
        {
            name: "best picnic spot near nashik",
            description: "Enjoy a memorable picnic surrounded by farm landscapes, greenery, outdoor recreation, traditional experiences, and peaceful surroundings."
        },
        {
            name: "family picnic spot near nashik",
            description: "Families can spend quality time together through outdoor games, farm exploration, nature activities, food experiences, and group-friendly recreation."
        },
        {
            name: "Nashik one day picnic spot",
            description: "Plan a refreshing one-day outing from Nashik with a combination of nature, farm activities, outdoor recreation, traditional food, and countryside relaxation."
        },
        {
            name: "nashik picnic point",
            description: "Enjoy a scenic countryside picnic experience where visitors can relax in open surroundings, explore the farm, participate in activities, and spend time with loved ones."
        },
        {
            name: "one day picnic spot near nashik",
            description: "A one-day picnic can combine outdoor games, nature walks, farm experiences, food, and peaceful leisure for families, friends, and groups."
        },
        {
            name: "one day picnic spot near nashik for family",
            description: "Families can enjoy a complete day outing with child-friendly recreation, open farm surroundings, nature experiences, group activities, and shared meals."
        },
        {
            name: "one day return picnic spot near nashik",
            description: "Plan a convenient return picnic with enough time for outdoor recreation, farm exploration, food, relaxation, and memorable moments before heading back."
        },
        {
            name: "picnic places near nashik",
            description: "Explore a peaceful farm-oriented picnic environment offering nature, countryside activities, outdoor recreation, traditional experiences, and relaxing group time."
        },
        {
            name: "picnic point in nashik",
            description: "Enjoy a refreshing picnic atmosphere with open landscapes, greenery, outdoor activities, farm experiences, and opportunities for photography and relaxation."
        },
        {
            name: "picnic spot near nashik for 2 days",
            description: "Visitors planning a two-day picnic can enjoy extended time for farm exploration, outdoor activities, meals, nature experiences, and overnight countryside relaxation."
        },
        {
            name: "picnic spot near nashik for one day",
            description: "A one-day countryside outing provides an easy way to enjoy nature, group recreation, farm activities, traditional food, and quality time away from the city."
        },
        {
            name: "picnic spots near nashik for 1 day",
            description: "Make the most of a single day with outdoor games, farm exploration, nature walks, food experiences, and relaxing time in a peaceful rural environment."
        },
        {
            name: "places near nashik for one day picnic",
            description: "Plan a memorable one-day picnic with family or friends by combining countryside scenery, outdoor recreation, agricultural experiences, meals, and leisure activities."
        }
    ],

    tableData: [
        ["1 day picnic spot near nashik"],
        ["2 days picnic spot near nashik"],
        ["best places near nashik for picnic"],
        ["best picnic spot near nashik"],
        ["family picnic spot near nashik"],
        ["Nashik one day picnic spot"],
        ["nashik picnic point"],
        ["one day picnic spot near nashik"],
        ["one day picnic spot near nashik for family"],
        ["one day return picnic spot near nashik"],
        ["picnic places near nashik"],
        ["picnic point in nashik"],
        ["picnic spot near nashik for 2 days"],
        ["picnic spot near nashik for one day"],
        ["picnic spots near nashik for 1 day"],
        ["places near nashik for one day picnic"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Farm Environment",
            WhyChoosedescription: "The countryside setting provides a refreshing break from busy city surroundings, giving families and groups open spaces for relaxation, recreation, and quality time together."
        },
        {
            WhyChooseheading: "Family-Friendly Picnic Experience",
            WhyChoosedescription: "Families can enjoy a combination of outdoor activities, nature experiences, farm exploration, food, and group recreation that can keep different age groups engaged."
        },
        {
            WhyChooseheading: "Ideal for One-Day Plans",
            WhyChoosedescription: "Visitors looking for a quick escape can plan a complete one-day outing with activities, meals, nature, and relaxation without needing a long holiday."
        },
        {
            WhyChooseheading: "Suitable for Longer Getaways",
            WhyChoosedescription: "Those planning a two-day picnic can spend additional time enjoying farm activities, outdoor recreation, countryside exploration, meals, and overnight leisure."
        },
        {
            WhyChooseheading: "Nature and Agriculture Together",
            WhyChoosedescription: "The farm environment allows visitors to enjoy greenery and open landscapes while experiencing agricultural surroundings and learning more about rural life."
        },
        {
            WhyChooseheading: "Fun Outdoor Activities",
            WhyChoosedescription: "Outdoor games and recreational experiences add variety to the picnic, making the outing more engaging for friends, families, children, and larger groups."
        },
        {
            WhyChooseheading: "Traditional Rural Experiences",
            WhyChoosedescription: "Visitors can enjoy a countryside atmosphere enriched by traditional activities, local food experiences, farm surroundings, and the relaxed character of rural Maharashtra."
        },
        {
            WhyChooseheading: "Memorable Group Outing",
            WhyChoosedescription: "Shared meals, nature experiences, outdoor recreation, farm activities, and informal conversations create opportunities for families and groups to spend meaningful time together."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good picnic spot near Nashik?",
        answer: "Om Agri Tourism offers a peaceful farm environment for visitors looking for a refreshing picnic experience near Nashik. The greenery, open countryside surroundings and range of outdoor activities make it a suitable destination for families, friends and groups seeking a relaxing day away from their regular routine."
    },
    {
        question: "What activities can visitors enjoy at Om Agri Tourism?",
        answer: "Guests visiting Om Agri Tourism can enjoy several recreational and countryside activities, including swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These experiences give visitors different ways to enjoy their picnic while spending time in a natural farm setting."
    },
    {
        question: "Is Om Agri Tourism suitable for a family picnic near Nashik?",
        answer: "Families can enjoy a relaxed day at Om Agri Tourism with activities that can appeal to children as well as adults. The farm surroundings provide space for family time, while boating, swimming, bird watching and traditional rides add variety to the picnic experience."
    },
    {
        question: "Can children enjoy a picnic at Om Agri Tourism?",
        answer: "Children can experience a fun outdoor outing at Om Agri Tourism by exploring the farm surroundings and participating in suitable activities. Tractor rides, boating and bird watching can keep younger visitors engaged while giving them an opportunity to enjoy a countryside environment."
    },
    {
        question: "Can friends plan a picnic at Om Agri Tourism near Nashik?",
        answer: "Friends can enjoy a group picnic at Om Agri Tourism by combining outdoor recreation with time spent in the peaceful countryside. Swimming, boating, horse riding and bull cart rides provide enjoyable options for groups looking to spend a memorable day together."
    },
    {
        question: "Does Om Agri Tourism offer homemade food during a picnic?",
        answer: "Homemade food adds a traditional touch to the picnic experience at Om Agri Tourism. Visitors can enjoy a satisfying meal during their outing and relax in the farm surroundings before continuing with activities and exploring the peaceful countryside."
    },
    {
        question: "Is Om Agri Tourism suitable for a weekend picnic near Nashik?",
        answer: "Those planning a weekend break can consider Om Agri Tourism for a nature-oriented picnic experience. The combination of greenery, farm surroundings and outdoor activities provides a refreshing alternative to spending the weekend in a busy urban environment."
    },
    {
        question: "Can couples enjoy a picnic at Om Agri Tourism?",
        answer: "Couples can spend a peaceful day at Om Agri Tourism surrounded by greenery and open farm landscapes. Boating, horse riding and bird watching can add enjoyable moments to the outing, while the calm countryside atmosphere offers a pleasant change from everyday routines."
    },
    {
        question: "What makes Om Agri Tourism different from a regular picnic spot near Nashik?",
        answer: "Om Agri Tourism combines the relaxed feel of a picnic with traditional farm experiences and outdoor recreation. Visitors can enjoy swimming, boating, horse riding, tractor rides, bull cart rides and bird watching while also experiencing greenery, homemade food and a peaceful rural atmosphere."
    },
    {
        question: "Why choose Om Agri Tourism when looking for a picnic spot near Nashik?",
        answer: "Om Agri Tourism provides a countryside setting where visitors can combine relaxation, farm experiences and outdoor activities in one outing. Families, friends and groups can enjoy swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food while spending quality time together."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Prasad Shinde",
        feedback:
            "Our family visited Om Agri Tourism for a picnic and had a wonderful time. The children enjoyed the tractor ride and boating, while we loved the greenery and peaceful farm atmosphere. The homemade food was delicious and made the day even more enjoyable.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Tanvi More",
        feedback:
            "We went to Om Agri Tourism with our friends for a relaxing picnic and really enjoyed the countryside experience. Horse riding, bird watching and the bull cart ride gave us plenty to do, while the calm surroundings helped everyone unwind. It was a refreshing day out.",
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
  "name": "Picnic Spot Near Nashik",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-nashik.webp",
  "description": "Om Agro Tourism offers a refreshing Picnic Spot Near Nashik experience for families, couples, friends, school groups and corporate teams looking for a peaceful break surrounded by nature and countryside landscapes. Visitors searching for a 1 day picnic spot near Nashik can plan a convenient outing where they can spend quality time outdoors without arranging a lengthy holiday. For groups planning a 2 days picnic spot near Nashik, the destination can also provide a relaxed setting for an extended leisure schedule, subject to available stay and package options. People comparing the best places near Nashik for picnic can consider an agro-tourism environment where greenery, open spaces, agricultural surroundings and recreational experiences come together. Families searching for the best picnic spot near Nashik can enjoy a comfortable atmosphere suitable for children, parents and larger family groups. A family picnic spot near Nashik can be ideal for weekend outings, family get-togethers, celebrations and casual recreational plans. Visitors looking for a Nashik one day picnic spot can choose a countryside destination where they can take a break from the city's regular routine and enjoy a nature-oriented experience. Those searching for a Nashik picnic point can explore an agro-tourism setting that offers a combination of rural surroundings, open spaces and leisure activities. A one day picnic spot near Nashik can suit different groups, including friends, couples, office teams and school students, making it a versatile destination for outdoor recreation. Om Agro Tourism provides an alternative to crowded urban entertainment spaces by offering a peaceful countryside atmosphere where visitors can relax, interact and enjoy time with their group. Families can spend the day exploring the surroundings and participating in suitable recreational activities, while corporate and school groups can plan organized outdoor programs. Seasonal visits offer different experiences, with monsoon bringing fresh greenery, winter providing pleasant outdoor weather and summer allowing visitors to plan suitable daytime outings. The destination can also be considered for weekend picnics, one-day trips, group outings, nature visits and short countryside escapes from Nashik. By combining agro-tourism, agriculture, nature and recreation, Om Agro Tourism creates a memorable option for visitors searching for picnic spots, family outings and one-day destinations near Nashik.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-nashik"
  }
};


    return (
        <div>


<Helmet>
  <title>
    Picnic Spot Near Nashik | Best One Day & Family Picnic Destination | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism is a peaceful picnic spot near Nashik for families, friends and groups, offering one-day outings, nature experiences and countryside recreation."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Nashik, 1 day picnic spot near Nashik, 2 days picnic spot near Nashik, best places near Nashik for picnic, best picnic spot near Nashik, family picnic spot near Nashik, Nashik one day picnic spot, Nashik picnic point, one day picnic spot near Nashik, one day picnic spot near Nashik for family, one day picnic places near Nashik, best one day picnic spot near Nashik, best picnic places near Nashik, picnic places near Nashik, picnic spots near Nashik, picnic destination near Nashik, one day outing near Nashik, one day trip near Nashik, one day outing places near Nashik, day outing near Nashik, family picnic near Nashik, family picnic places near Nashik, family outing near Nashik, family day trip near Nashik, best family picnic spot near Nashik, family picnic destination near Nashik, picnic resort near Nashik, picnic resorts near Nashik, one day picnic resort near Nashik, one day picnic resorts near Nashik, best picnic resort near Nashik, picnic spot for couples near Nashik, couple outing near Nashik, friends picnic near Nashik, friends outing near Nashik, group picnic near Nashik, group outing near Nashik, corporate picnic near Nashik, corporate outing near Nashik, school picnic near Nashik, school picnic spots near Nashik, student picnic near Nashik, nature picnic spot near Nashik, nature outing near Nashik, nature places near Nashik for picnic, countryside picnic near Nashik, countryside outing near Nashik, agro tourism near Nashik, agro tourism picnic near Nashik, agri tourism near Nashik, farm picnic near Nashik, farm outing near Nashik, rural tourism near Nashik, weekend picnic near Nashik, weekend outing near Nashik, weekend getaway near Nashik, one day getaway near Nashik, 2 day picnic near Nashik, two day picnic near Nashik, overnight picnic near Nashik, family weekend outing near Nashik, best outing places near Nashik, best day outing near Nashik, picnic places around Nashik, picnic spots around Nashik, picnic destination around Nashik, one day trip for family near Nashik, best places for family outing near Nashik, monsoon picnic near Nashik, summer picnic near Nashik, winter picnic near Nashik, nature resort near Nashik, activity resort near Nashik, resort for picnic near Nashik, best resort near Nashik for picnic"
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
                            <img src='/images/keyword/26.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearnashik;