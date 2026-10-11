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

function Picnicspotnearrahatani() {

const cardData = {
keyword: "Picnic Spot Near Rahatani",
headingDescription: "Looking for a peaceful picnic spot near Rahatani for a family outing, one day trip, or weekend escape? Om Agro Tourism offers a refreshing countryside environment with family recreation, nature experiences, rural activities, homemade food, and engaging outdoor experiences. Its spacious farm setting makes it a suitable choice for visitors from Rahatani, Pimple Saudagar, and Wakad who want to enjoy a complete picnic day away from the busy city surroundings.",
topPlaces: [
{
title: "Family Day Outing",
description: "Families can enjoy a relaxed day together in a countryside environment, with a combination of recreation, food, nature, and rural experiences that suit both children and adults."
},
{
title: "Nature Escape",
description: "The peaceful farm surroundings provide a refreshing nature escape for visitors from Rahatani who want to spend time outdoors away from crowded urban spaces and enjoy a quieter picnic atmosphere."
},
{
title: "Kids Fun Zone",
description: "Children can stay engaged with age-friendly recreational experiences, outdoor activities, and interactive farm surroundings, making the outing enjoyable for families with young visitors."
},
{
title: "Rural Village Experience",
description: "Visitors can experience the charm of countryside life through traditional rural activities and farm surroundings, adding a distinctive cultural element to a regular one day picnic."
},
{
title: "Weekend Picnic Retreat",
description: "The open countryside setting makes Om Agro Tourism a refreshing weekend retreat for families and friends looking to relax, enjoy outdoor activities, and spend uninterrupted time together."
},
{
title: "Group Picnic Area",
description: "Friends, families, and larger groups can enjoy a shared outing with recreational options, open surroundings, food, and activities that make the destination suitable for group picnic plans."
},
{
title: "Outdoor Family Recreation",
description: "Families can make their day more active through outdoor recreation and countryside experiences, creating a balanced itinerary for visitors looking beyond a simple sit-down picnic."
},
{
title: "Farm Experience",
description: "The agricultural setting gives visitors an opportunity to experience rural surroundings and understand aspects of farm life, making the outing both enjoyable and informative."
},
{
title: "Affordable Day Trip",
description: "Visitors comparing affordable picnic options near Rahatani can enjoy several experiences at one destination, making it convenient to plan a complete day without moving between multiple locations."
},
{
title: "Activity-Filled Family Picnic",
description: "Families looking for more than a simple picnic can enjoy a varied day featuring recreational activities, nature, rural experiences, food, and other engaging options available at the destination."
}
],
services: [
{
name: "Picnic Spot Near Rahatani",
description: "Om Agro Tourism provides a peaceful countryside setting for visitors searching for a picnic spot near Rahatani, with family recreation, nature experiences, rural activities, food, and outdoor entertainment."
},
{
name: "One Day Picnic Spot Near Rahatani",
description: "Families and groups can plan a complete one day outing at Om Agro Tourism, making it a convenient one day picnic spot near Rahatani for recreation, relaxation, and countryside experiences."
},
{
name: "Best Picnic Spot Near Rahatani",
description: "Visitors comparing the best picnic spot near Rahatani can enjoy a combination of open surroundings, family activities, rural experiences, homemade food, and outdoor recreation at Om Agro Tourism."
},
{
name: "Family Picnic Spot Near Rahatani",
description: "Om Agro Tourism offers activities and experiences suitable for children and adults, making it a practical family picnic spot near Rahatani for spending meaningful time together."
},
{
name: "Picnic Resort Near Rahatani",
description: "A countryside atmosphere combined with family recreation, farm experiences, traditional activities, food, and outdoor entertainment makes Om Agro Tourism a suitable picnic resort near Rahatani."
},
{
name: "One Day Picnic Resort Near Rahatani",
description: "Visitors planning a one day picnic resort near Rahatani can enjoy multiple experiences at Om Agro Tourism, creating a varied itinerary without needing to travel between different activity locations."
},
{
name: "Best Resort Near Rahatani for Picnic",
description: "For visitors comparing the best resort near Rahatani for picnic plans, Om Agro Tourism offers a refreshing rural environment with recreation, nature, food, and family-oriented experiences."
},
{
name: "Family Resort Near Rahatani",
description: "Families can enjoy outdoor recreation, rural activities, food, and nature-based experiences at Om Agro Tourism, making it a convenient family resort near Rahatani for a day outing."
},
{
name: "One Day Trip Near Rahatani",
description: "Om Agro Tourism offers enough countryside experiences and recreational options to create an enjoyable one day trip near Rahatani for families, friends, and groups."
},
{
name: "Family One Day Trip Near Rahatani",
description: "A family one day trip near Rahatani can include nature, farm experiences, traditional activities, games, food, and outdoor recreation at Om Agro Tourism."
},
{
name: "Picnic Places Near Rahatani",
description: "Visitors exploring picnic places near Rahatani can consider Om Agro Tourism for its open farm setting, family-friendly environment, varied recreation, and peaceful countryside atmosphere."
},
{
name: "Best Picnic Places Near Rahatani",
description: "Om Agro Tourism provides a balanced countryside experience for visitors comparing the best picnic places near Rahatani, bringing together recreation, nature, food, and rural activities."
},
{
name: "Affordable Picnic Spot Near Rahatani",
description: "Families and groups looking for an affordable picnic spot near Rahatani can enjoy several experiences at one destination, making the day convenient as well as engaging."
},
{
name: "Budget Picnic Resort Near Rahatani",
description: "Om Agro Tourism is a practical option for visitors comparing a budget picnic resort near Rahatani who want family recreation, countryside experiences, food, and outdoor activities."
},
{
name: "Picnic Spot Near Rahatani Pune",
description: "For people searching for a picnic spot near Rahatani Pune, Om Agro Tourism provides a refreshing rural escape with family activities, nature, recreation, farm experiences, and homemade food."
},
{
name: "Resort Near Rahatani for Family Outing",
description: "Families searching for a resort near Rahatani for family outing can enjoy a combination of outdoor recreation, rural experiences, games, traditional activities, and food in a peaceful farm environment."
},
{
name: "One Day Resort Near Rahatani",
description: "Om Agro Tourism works well for visitors looking for a one day resort near Rahatani, with enough attractions and experiences to create a complete and enjoyable day itinerary."
},
{
name: "Nature Picnic Spot Near Rahatani",
description: "The open farm landscape and peaceful rural surroundings make Om Agro Tourism a suitable nature picnic spot near Rahatani for visitors seeking fresh outdoor surroundings and a quieter day away from the city."
},
{
name: "Picnic Spot Near Pimple Saudagar Rahatani",
description: "Visitors from the Pimple Saudagar and Rahatani areas can enjoy a countryside picnic at Om Agro Tourism featuring family recreation, rural experiences, nature, food, and outdoor activities."
},
{
name: "Picnic Spot Near Wakad Rahatani",
description: "Families and groups from Wakad and Rahatani can choose Om Agro Tourism for a refreshing day trip with open surroundings, countryside experiences, recreation, and family-friendly activities."
},
{
name: "Family Picnic Resort Near Rahatani",
description: "Om Agro Tourism provides a family-oriented picnic environment where visitors can combine relaxation with recreational activities, farm experiences, traditional rural activities, and homemade food."
},
{
name: "Picnic Spot with Activities Near Rahatani",
description: "Visitors searching for a picnic spot with activities near Rahatani can enjoy a varied day involving farm experiences, outdoor games, traditional rural recreation, water-based activities, nature experiences, and family entertainment."
}
],
tableData: [
["Picnic Spot Near Rahatani"],
["One Day Picnic Spot Near Rahatani"],
["Best Picnic Spot Near Rahatani"],
["Family Picnic Spot Near Rahatani"],
["Picnic Resort Near Rahatani"],
["One Day Picnic Resort Near Rahatani"],
["Best Resort Near Rahatani for Picnic"],
["Family Resort Near Rahatani"],
["One Day Trip Near Rahatani"],
["Family One Day Trip Near Rahatani"],
["Picnic Places Near Rahatani"],
["Best Picnic Places Near Rahatani"],
["Affordable Picnic Spot Near Rahatani"],
["Budget Picnic Resort Near Rahatani"],
["Picnic Spot Near Rahatani Pune"],
["Resort Near Rahatani for Family Outing"],
["One Day Resort Near Rahatani"],
["Nature Picnic Spot Near Rahatani"],
["Picnic Spot Near Pimple Saudagar Rahatani"],
["Picnic Spot Near Wakad Rahatani"],
["Family Picnic Resort Near Rahatani"],
["Picnic Spot with Activities Near Rahatani"]
],
whychoose: [
{
WhyChooseheading: "Refreshing Countryside Environment",
WhyChoosedescription: "Om Agro Tourism offers an open and peaceful farm atmosphere where visitors from Rahatani can step away from the busy urban routine and enjoy a refreshing day outdoors."
},
{
WhyChooseheading: "Designed for Family Time",
WhyChoosedescription: "The combination of recreation, food, nature, and countryside experiences allows children and adults to participate together and create a memorable family outing."
},
{
WhyChooseheading: "Complete One Day Experience",
WhyChoosedescription: "Visitors can combine multiple activities into one itinerary, making the destination convenient for families and groups who want to spend an entire day at a single picnic location."
},
{
WhyChooseheading: "Authentic Rural Atmosphere",
WhyChoosedescription: "Farm surroundings and traditional rural experiences give visitors a chance to enjoy the character of village life while making their picnic different from a conventional urban outing."
},
{
WhyChooseheading: "Nature-Focused Day Out",
WhyChoosedescription: "The countryside setting provides a natural backdrop for visitors who prefer open spaces, outdoor experiences, and a quieter atmosphere during their picnic or weekend trip."
},
{
WhyChooseheading: "Suitable for Group Outings",
WhyChoosedescription: "Families, friends, and larger groups can choose from different forms of recreation, making it easier to create an engaging itinerary that suits varied interests."
},
{
WhyChooseheading: "Comforting Homemade Meals",
WhyChoosedescription: "Tasty Homemade Food adds a traditional dining experience to the outing, giving visitors a convenient way to enjoy meals while spending the day in the countryside."
},
{
WhyChooseheading: "Convenient for Nearby Locations",
WhyChoosedescription: "Visitors searching around Rahatani, Pimple Saudagar, and Wakad can consider Om Agro Tourism for a countryside day trip combining family recreation, nature, food, and rural experiences."
}
]
};







const faqData = [
    {
        question: "How can people from Rahatani enjoy a day at Om Agri Tourism?",
        answer: "A visit can be planned around a mix of recreation and countryside experiences. Guests travelling from Rahatani can spend time swimming, boating and horse riding, while tractor rides, bull cart rides, bird watching and homemade food add variety to the picnic."
    },
    {
        question: "Which outdoor experiences can families from Rahatani try?",
        answer: "Families have several options for making the outing engaging for different age groups. Children and adults can enjoy swimming and boating, while horse riding and traditional farm rides provide a different kind of rural experience away from the busy city environment."
    },
    {
        question: "Is Om Agri Tourism a good choice for a family picnic near Rahatani?",
        answer: "For families looking beyond conventional city recreation, the farm atmosphere provides a refreshing setting for spending quality time together. Swimming, nature observation, countryside rides and homemade food can be combined into a relaxed day suitable for parents, children and elders."
    },
    {
        question: "Can friends from Rahatani plan a group outing at Om Agri Tourism?",
        answer: "Friends can build an enjoyable group schedule by choosing activities that encourage participation and interaction. Boating, swimming, horse riding, tractor rides and bull cart rides can keep the group entertained, with meals and open surroundings providing opportunities to relax between activities."
    },
    {
        question: "What type of picnic activities are available near Rahatani Pune?",
        answer: "The destination brings together several outdoor and farm-based experiences, including swimming, boating, horse riding, tractor rides and bull cart rides. Visitors interested in quieter activities can also spend time bird watching and enjoying homemade food in the countryside."
    },
    {
        question: "Would children from Rahatani enjoy a picnic at Om Agri Tourism?",
        answer: "Young visitors can experience a combination of recreation and rural activities during the outing. Swimming, boating and selected rides can be exciting for children, while bird watching and farm surroundings can introduce them to a different environment. Adult supervision is recommended during activity participation."
    },
    {
        question: "What can senior citizens do during a picnic near Rahatani?",
        answer: "A comfortable itinerary does not require every guest to participate in active rides. Senior family members can enjoy the greenery, homemade food and bird watching while other members take part in swimming, boating or horse riding, making it easier for multiple generations to spend the day together."
    },
    {
        question: "How should a group from Rahatani plan a one-day picnic?",
        answer: "Starting with outdoor activities and leaving enough time for meals and relaxation can make the schedule more comfortable. A group might begin with boating or swimming, explore a countryside ride later, and keep part of the afternoon for food, photography, nature observation and casual conversations."
    },
    {
        question: "Can visitors near Rahatani experience traditional village-style rides?",
        answer: "Those interested in rural experiences can include bull cart rides and tractor rides along with horse riding. These activities give the picnic a traditional countryside character and can be combined with boating, swimming and bird watching for a more varied day."
    },
    {
        question: "Why might Om Agri Tourism be considered when searching for a picnic spot near Rahatani?",
        answer: "People looking for a break from the urban routine can find multiple forms of recreation and countryside experiences at one destination. The combination of swimming, boating, horse riding, farm rides, bird watching and homemade food makes Om Agri Tourism a suitable option for family outings, friend groups and casual day picnics."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Nikhil Jadhav",
        feedback:
            "Leaving the regular city routine behind made this outing special for our friends group. Boating and swimming kept everyone involved, while the tractor and bull cart rides gave us something different to experience together. The homemade food was another enjoyable part of the day.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Kavita Shinde",
        feedback:
            "The farm atmosphere worked very well for our family picnic from Rahatani. The children enjoyed the outdoor activities, whereas the elders preferred sitting in the greenery, watching birds and enjoying the meal. Having different experiences in one place made the visit comfortable for everyone.",
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
  "name": "Picnic Spot Near Rahatani",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-rahatani.webp",
  "description": "Planning an enjoyable day away from the busy routine and searching for a picnic spot near Rahatani? Om Agro Tourism offers a pleasant agro-tourism setting for families, friends, students and groups looking for a refreshing outdoor experience. A one day picnic near Rahatani can be a convenient choice for spending quality time together, enjoying a relaxed atmosphere and creating memorable moments with loved ones. Visitors comparing the best picnic spot near Rahatani or the best picnic places near Rahatani can consider a destination suited to family gatherings, casual celebrations and group outings. Families looking for a picnic resort near Rahatani, a one day picnic resort near Rahatani or an affordable picnic option can plan a comfortable day trip according to their outing requirements. From family one day trips and friends' gatherings to school picnics and weekend leisure plans, Om Agro Tourism provides a welcoming destination for a refreshing picnic experience near Rahatani.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-rahatani"
  }
};







    return (
        <div>
<Helmet>
  <title>
    Picnic Spot Near Rahatani | Affordable Day Out, Family Recreation & Group Fun | +91 7066665554
  </title>

  <meta
    name="description"
    content="Discover a picnic spot near Rahatani for families, friends and groups. Plan an affordable one day picnic or family day trip at Om Agro Tourism with a peaceful outdoor setting."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Rahatani, One Day Picnic Spot Near Rahatani, Best Picnic Spot Near Rahatani, Family Picnic Spot Near Rahatani, Picnic Resort Near Rahatani, One Day Picnic Resort Near Rahatani, Best Resort Near Rahatani for Picnic, Family Resort Near Rahatani, One Day Trip Near Rahatani, Family One Day Trip Near Rahatani, Picnic Places Near Rahatani, Best Picnic Places Near Rahatani, Affordable Picnic Near Rahatani, Budget Picnic Spot Near Rahatani, Affordable One Day Picnic Near Rahatani, Family Outing Near Rahatani, One Day Outing Near Rahatani, Picnic Destination Near Rahatani, Agro Tourism Near Rahatani"
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
                            <img src='/images/keyword/150.jpg' alt='img' className='img-fluid' />
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

export default Picnicspotnearrahatani;