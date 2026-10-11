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

function ActivityResortsNearPuneForWeekend() {


const cardData = {
    keyword: "Nature resorts near pune for weekend",

    headingDescription: "Planning a refreshing weekend escape from Pune and looking for Nature resorts near pune for weekend plans with family, couples, friends, or a small group? Om Agri Tourism offers a peaceful countryside getaway where visitors can enjoy natural surroundings, open farm landscapes, fresh air, outdoor recreation, traditional rural experiences, water activities, and quality time away from the busy city routine. The destination brings together the relaxing feel of a nature retreat with enjoyable activities, making it suitable for families searching for a budget-friendly resort, couples looking for a peaceful break, groups wanting recreational activities, and visitors planning a one-day family trip. Whether you are searching for Nature resorts near Pune for couples, Nature resorts near Pune for family, resorts near Pune with activities, luxury resorts near Pune with activities, or a resort with swimming pool facilities, Om Agri Tourism provides a varied countryside experience where relaxation and recreation can be enjoyed together. Its farm-focused environment also allows guests to experience rural surroundings, nature exploration, traditional food, outdoor activities, and refreshing leisure in one destination, making it a practical choice for a short weekend getaway near Pune.",

    topPlaces: [
        {
            title: "Peaceful Farm Nature Walk",
            description: "Take a leisurely walk around the farm surroundings and enjoy greenery, fresh countryside air, open landscapes, and a calm environment. The experience is ideal for visitors who want to slow down and spend meaningful time close to nature during a weekend break."
        },
        {
            title: "Family Outdoor Recreation",
            description: "Families can enjoy shared outdoor activities in a spacious countryside environment. The combination of recreation, open surroundings, and farm experiences creates opportunities for parents, children, and other family members to spend quality time together."
        },
        {
            title: "Refreshing Swimming Experience",
            description: "Add water-based leisure to your weekend outing with a refreshing swimming experience. It provides an enjoyable way to cool down and relax while complementing the other outdoor and countryside activities available at the destination."
        },
        {
            title: "Countryside Farm Exploration",
            description: "Discover the agricultural surroundings through a relaxed farm exploration experience. Visitors can enjoy the peaceful rural atmosphere, observe the natural setting, and experience a different pace of life away from Pune's busy urban environment."
        },
        {
            title: "Traditional Bullock Cart Ride",
            description: "Experience a traditional rural activity through a memorable bullock cart ride around the farm environment. This countryside experience adds a cultural element to the weekend and gives visitors a chance to enjoy a classic rural activity."
        },
        {
            title: "Nature Photography Experience",
            description: "Capture memorable moments around the farm, greenery, open landscapes, and countryside surroundings. The natural setting offers a relaxed backdrop for family photographs, couple memories, group pictures, and casual nature photography."
        },
        {
            title: "Group Games and Activities",
            description: "Friends, families, and groups can make their weekend more engaging with outdoor games and shared recreational activities. Group participation creates opportunities for friendly competition, laughter, interaction, and memorable experiences."
        },
        {
            title: "Traditional Maharashtrian Dining",
            description: "Enjoy traditional Maharashtrian flavours in a peaceful rural setting. A regional food experience adds a local touch to the weekend outing and provides a satisfying way to enjoy a meal after spending time outdoors."
        },
        {
            title: "Couple Countryside Retreat",
            description: "Couples can enjoy a relaxed escape surrounded by open countryside, greenery, and peaceful farm landscapes. Nature walks, quiet conversations, photography, outdoor leisure, and traditional dining can make the weekend experience more memorable."
        },
        {
            title: "Weekend Family Leisure",
            description: "Spend unhurried time with loved ones by combining nature, farm activities, water recreation, outdoor games, food, and relaxation. The varied environment makes it suitable for families looking for a short break without planning a long-distance trip."
        }
    ],

    services: [
        {
            name: "Nature resorts near Pune for couples",
            description: "Enjoy a peaceful countryside weekend with nature walks, farm surroundings, outdoor recreation, traditional dining, and relaxing spaces suitable for couples looking for quality time together."
        },
        {
            name: "Budget resorts near Pune for family",
            description: "Families can enjoy an affordable countryside outing with farm experiences, outdoor activities, water recreation, traditional food, and relaxing open spaces."
        },
        {
            name: "resorts near pune with activities",
            description: "Experience a resort outing with nature exploration, outdoor games, farm activities, water recreation, traditional rural experiences, and group entertainment."
        },
        {
            name: "luxury resorts near pune with activities",
            description: "Enjoy a comfortable countryside getaway that combines resort-style leisure with outdoor activities, nature experiences, water recreation, traditional food, and peaceful surroundings."
        },
        {
            name: "nature resorts near pune for weekend",
            description: "Plan a refreshing weekend escape with greenery, farm exploration, nature walks, outdoor recreation, water activities, traditional food, and peaceful countryside leisure."
        },
        {
            name: "Nature resorts near Pune for family",
            description: "Families can enjoy a varied nature getaway with outdoor activities, farm exploration, water recreation, traditional dining, and open countryside surroundings suitable for different age groups."
        },
        {
            name: "Resorts near Pune for family one day trip",
            description: "Make a family one-day trip memorable with nature experiences, farm activities, outdoor games, water recreation, traditional food, and relaxing countryside surroundings."
        },
        {
            name: "Budget resorts near Pune for family",
            description: "Enjoy a family-friendly countryside experience with outdoor recreation, farm activities, water fun, traditional food, and peaceful spaces for a refreshing short getaway."
        },
        {
            name: "Budget resorts near pune for family with swimming pool",
            description: "Families can combine a budget-conscious countryside outing with refreshing swimming, farm exploration, outdoor recreation, traditional food, and quality leisure time."
        },
        {
            name: "Budget resorts near pune for family with swimming pool near me",
            description: "Plan a convenient family getaway with swimming, nature experiences, outdoor activities, farm surroundings, and relaxing spaces suitable for a refreshing day or short break."
        },
        {
            name: "om agro tourism resort near pune",
            description: "Om Agri Tourism offers a nature-focused countryside resort experience with farm exploration, outdoor activities, water recreation, traditional rural experiences, food, and peaceful surroundings near Pune."
        }
    ],

    tableData: [
        ["Nature resorts near Pune for couples"],
        ["Budget resorts near Pune for family"],
        ["resorts near pune with activities"],
        ["luxury resorts near pune with activities"],
        ["nature resorts near pune for weekend"],
        ["Nature resorts near Pune for family"],
        ["Resorts near Pune for family one day trip"],
        ["Budget resorts near Pune for family"],
        ["Budget resorts near pune for family with swimming pool"],
        ["Budget resorts near pune for family with swimming pool near me"],
        ["om agro tourism resort near pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Peaceful Nature-Focused Environment",
            WhyChoosedescription: "Om Agri Tourism provides a refreshing countryside atmosphere where visitors can enjoy greenery, open farm landscapes, fresh air, and a slower pace that makes a weekend break feel more relaxing."
        },
        {
            WhyChooseheading: "Suitable for Family Weekends",
            WhyChoosedescription: "Families can combine outdoor recreation, farm exploration, water activities, traditional food, and relaxation in one destination, creating an enjoyable weekend experience for different age groups."
        },
        {
            WhyChooseheading: "Relaxing Choice for Couples",
            WhyChoosedescription: "Couples can enjoy peaceful surroundings, nature walks, countryside views, traditional dining, photography, and unhurried conversations away from the noise and routine of city life."
        },
        {
            WhyChooseheading: "Activities Beyond a Typical Resort",
            WhyChoosedescription: "The experience goes beyond simple relaxation by combining farm activities, outdoor recreation, nature exploration, water-based leisure, traditional rural experiences, and group entertainment."
        },
        {
            WhyChooseheading: "Refreshing Water Recreation",
            WhyChoosedescription: "Swimming and water-based leisure add an enjoyable element to the nature getaway, giving families and groups an opportunity to cool down and relax during their outing."
        },
        {
            WhyChooseheading: "Authentic Farm and Rural Experience",
            WhyChoosedescription: "Visitors can experience the charm of countryside life through agricultural surroundings, farm exploration, traditional activities, nature experiences, and regional food."
        },
        {
            WhyChooseheading: "Convenient for Short Getaways",
            WhyChoosedescription: "A combination of nature, recreation, food, and farm experiences makes the destination suitable for visitors who want a refreshing weekend or one-day escape without planning a long-distance vacation."
        },
        {
            WhyChooseheading: "Good for Different Group Plans",
            WhyChoosedescription: "Families, couples, friends, and group visitors can create different types of outings around nature walks, outdoor activities, water recreation, food, farm exploration, and relaxed countryside leisure."
        }
    ]
};




const faqData = [
    {
        question: "Is Om Agri Tourism a good nature resort near Pune for a weekend?",
        answer: "Om Agri Tourism is a refreshing weekend getaway for visitors who want to spend time surrounded by greenery and peaceful farm landscapes. Guests can enjoy nature along with swimming, boating, horse riding, tractor rides, bull cart rides, bird watching and homemade food."
    },
    {
        question: "Why choose Om Agri Tourism for a weekend nature getaway near Pune?",
        answer: "A weekend at Om Agri Tourism offers a pleasant break from Pune's busy city routine through open surroundings, farm experiences and outdoor recreation. Visitors can enjoy a slower pace while participating in activities and spending quality time with family or friends."
    },
    {
        question: "Is Om Agri Tourism suitable for a weekend trip with family?",
        answer: "Families can enjoy a weekend outing at Om Agri Tourism with a mix of nature, recreation and countryside experiences. Children and adults can choose from activities such as swimming, boating, tractor rides, bird watching and other outdoor experiences based on their interests."
    },
    {
        question: "What activities can we enjoy at Om Agri Tourism on a weekend?",
        answer: "A weekend visit can include swimming, boating, horse riding, tractor rides, bull cart rides and bird watching at Om Agri Tourism. Guests can also spend time exploring the farm surroundings and enjoying homemade food for a more complete countryside experience."
    },
    {
        question: "Can couples visit Om Agri Tourism for a weekend nature retreat?",
        answer: "Couples can enjoy a peaceful weekend at Om Agri Tourism away from the noise and routine of the city. The greenery, farm atmosphere and nature-based activities provide a relaxed setting for spending quality time together and enjoying a simple countryside escape."
    },
    {
        question: "Is Om Agri Tourism suitable for friends planning a weekend outing near Pune?",
        answer: "Friends can make their weekend outing more enjoyable at Om Agri Tourism by participating in outdoor and farm-based activities together. Swimming, boating, horse riding, tractor rides and bull cart rides provide opportunities for shared experiences in a relaxed natural environment."
    },
    {
        question: "Can children enjoy a weekend at Om Agri Tourism?",
        answer: "Children can experience a variety of outdoor activities during a weekend visit to Om Agri Tourism. Swimming, boating, tractor rides and bird watching can keep younger visitors engaged, while the open farm surroundings provide plenty of space to enjoy a day close to nature."
    },
    {
        question: "Does Om Agri Tourism offer bird watching and nature experiences?",
        answer: "Yes, bird watching is one of the nature-oriented experiences available at Om Agri Tourism. Visitors can observe birds and enjoy the greenery around the farm while taking a break from urban surroundings, making the destination appealing to families and nature enthusiasts."
    },
    {
        question: "Can guests enjoy homemade food during a weekend stay or outing at Om Agri Tourism?",
        answer: "Guests can enjoy homemade food during their visit to Om Agri Tourism, adding a traditional touch to the weekend experience. A farm-style meal combined with outdoor activities and peaceful surroundings makes the outing more satisfying for families and groups."
    },
    {
        question: "What makes Om Agri Tourism one of the nature resorts near Pune for weekend trips?",
        answer: "Om Agri Tourism brings together greenery, farm experiences, outdoor recreation and traditional food for visitors seeking a weekend escape near Pune. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching give guests several ways to enjoy their time in a peaceful countryside setting."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Aditya Bhosale",
        feedback:
            "We chose Om Agri Tourism for a weekend break with our family and enjoyed the peaceful surroundings from the moment we arrived. The children loved swimming and the tractor ride, while we spent time bird watching and relaxing around the farm. The homemade food was also excellent.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Rutuja Mane",
        feedback:
            "Our weekend outing at Om Agri Tourism was a refreshing escape from Pune. We enjoyed boating, horse riding and the bull cart ride, and the greenery made the whole place feel calm and comfortable. It was a great way to spend quality time with friends in nature.",
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


















    return (
        <div>




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
                            <img src='/images/keyword/.jpg' alt='img' className='img-fluid' />
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

export default ActivityResortsNearPuneForWeekend;