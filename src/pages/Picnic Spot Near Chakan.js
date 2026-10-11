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

function PicnicSpotNearchakan() {

const cardData = {
    keyword: "Picnic Spot Near Chakan",
    headingDescription: "Om Agro Tourism is a refreshing countryside destination for visitors searching for a picnic spot near Chakan, offering a combination of nature, rural experiences, recreational activities, and tasty homemade food. Families, friends, students, and groups from Chakan, Moshi, and nearby areas can enjoy a convenient one-day outing away from the busy city environment. With attractions suitable for family gatherings, school picnics, nature outings, and activity-filled day trips, the destination provides a varied experience for different types of visitors.",
    topPlaces: [
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops are especially suitable for school groups and families looking for an educational picnic near Chakan. Visitors can explore agricultural surroundings and experience rural activities while adding a learning element to their enjoyable day outdoors."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride introduces children and adults to a traditional countryside experience and gives school groups an opportunity to discover a different side of rural life. It adds a memorable cultural element to a family or student picnic."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities provide energetic entertainment for children, families, and groups spending the day at the destination. They can be included in a school picnic or family outing when visitors want to add water-based recreation to their schedule."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride gives visitors an authentic farm-style experience that can be particularly enjoyable for children and students. It complements the agricultural setting and adds an interactive rural activity to a one-day picnic near Chakan."
        },
        {
            title: "Bird Watching",
            description: "Bird Watching offers a peaceful nature experience for visitors searching for a nature picnic spot near Chakan. Students can observe the natural surroundings while families and other groups enjoy a quieter activity during their countryside outing."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide group-friendly entertainment for school students, families, and friends. The range of games helps keep visitors engaged throughout the day and makes it easier to plan a balanced picnic itinerary."
        },
        {
            title: "Tasty Homemade Food",
            description: "Tasty Homemade Food gives picnic groups an opportunity to enjoy comforting meals during their outing. It adds a traditional and satisfying element to the day, especially for families and school groups spending several hours at the destination."
        },
        {
            title: "Jungle Safari",
            description: "Jungle Safari brings an adventurous element to the picnic experience and can be an exciting addition for students and families. It offers outdoor exploration that makes a one-day outing more engaging and memorable."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding offers an active countryside experience for children, families, and groups. Visitors planning a picnic with activities near Chakan can include this attraction to add excitement and variety to their day."
        },
        {
            title: "Boating",
            description: "Boating provides a relaxing shared activity that can be enjoyed by families, friends, and groups during a full-day picnic. It adds another outdoor experience to the itinerary and helps create a varied countryside outing."
        }
    ],
    services: [
        {
            name: "Picnic Spot Near Chakan",
            description: "Om Agro Tourism offers a peaceful rural environment for visitors searching for a picnic spot near Chakan. Families, friends, students, and groups can enjoy nature, food, games, traditional activities, and outdoor recreation during a refreshing day away from the city."
        },
        {
            name: "One Day Picnic Spot Near Chakan",
            description: "A one day picnic spot near Chakan should offer enough variety to keep visitors engaged throughout the day. Om Agro Tourism brings together recreational attractions, rural experiences, nature activities, and food so groups can plan a complete outing at one destination."
        },
        {
            name: "Best Picnic Spot Near Chakan",
            description: "Visitors looking for the best picnic spot near Chakan can consider Om Agro Tourism for its combination of countryside surroundings, family activities, traditional rural experiences, and food. The destination supports both relaxed picnics and activity-filled group outings."
        },
        {
            name: "Family Picnic Spot Near Chakan",
            description: "Om Agro Tourism is suitable for a family picnic spot near Chakan because it provides different experiences for children and adults. Families can enjoy games, nature, rural rides, food, and outdoor activities while spending meaningful time together."
        },
        {
            name: "Picnic Resort Near Chakan",
            description: "For visitors searching for a picnic resort near Chakan, Om Agro Tourism provides a refreshing countryside atmosphere with several recreational options. Families and groups can combine relaxation, meals, nature experiences, and activities during their day visit."
        },
        {
            name: "One Day Picnic Resort Near Chakan",
            description: "A one day picnic resort near Chakan offers a practical option for families and groups who want a complete outing without an overnight stay. Om Agro Tourism provides multiple attractions, rural experiences, food, and outdoor recreation within the same destination."
        },
        {
            name: "Best Resort Near Chakan for Picnic",
            description: "Those comparing the best resort near Chakan for picnic activities can choose Om Agro Tourism for its varied countryside experiences. The destination allows visitors to create a relaxed family itinerary or an energetic schedule filled with activities."
        },
        {
            name: "Family Resort Near Chakan",
            description: "Om Agro Tourism provides a family resort experience near Chakan where children, parents, and relatives can enjoy different attractions together. Open surroundings, food, games, and rural activities create a comfortable environment for family outings."
        },
        {
            name: "One Day Trip Near Chakan",
            description: "Planning a one day trip near Chakan becomes convenient when nature, recreation, food, and rural activities are available at one location. Om Agro Tourism allows visitors to enjoy a varied day without spending time travelling between multiple destinations."
        },
        {
            name: "Family One Day Trip Near Chakan",
            description: "A family one day trip near Chakan can include a balanced combination of active recreation and relaxing experiences at Om Agro Tourism. Families can enjoy games, traditional activities, nature, meals, and outdoor attractions according to their preferred pace."
        },
        {
            name: "Picnic Places Near Chakan",
            description: "Among picnic places near Chakan, Om Agro Tourism offers a distinctive rural environment with activities suitable for families, students, friends, and larger groups. Visitors can enjoy nature, traditional experiences, food, and recreation throughout their day."
        },
        {
            name: "Best Picnic Places Near Chakan",
            description: "Visitors comparing the best picnic places near Chakan can consider Om Agro Tourism for its variety of attractions and peaceful countryside setting. The destination gives groups flexibility to include education, recreation, relaxation, and shared meals in one outing."
        },
        {
            name: "Affordable Picnic Spot Near Chakan",
            description: "An affordable picnic spot near Chakan should offer a useful mix of activities and experiences for the entire group. Om Agro Tourism combines rural attractions, nature, games, food, and recreation within one destination for a practical day outing."
        },
        {
            name: "Budget Picnic Resort Near Chakan",
            description: "For people searching for a budget picnic resort near Chakan, Om Agro Tourism provides multiple activities and experiences in a single countryside setting. Families and groups can plan their day around food, games, nature, and rural attractions."
        },
        {
            name: "Picnic Spot Near Chakan Pune",
            description: "Om Agro Tourism provides a refreshing picnic spot near Chakan Pune for visitors looking to escape the busy urban environment. Its rural surroundings, recreational activities, traditional experiences, and food make it suitable for a comfortable one-day outing."
        },
        {
            name: "Resort Near Chakan for Family Outing",
            description: "A resort near Chakan for family outing should provide enough variety to keep different age groups interested. Om Agro Tourism offers games, outdoor recreation, rural activities, food, and nature experiences that families can enjoy together."
        },
        {
            name: "One Day Resort Near Chakan",
            description: "Om Agro Tourism is a convenient option for a one day resort near Chakan when visitors want recreation without an overnight stay. Families and groups can spend the day enjoying several activities while also finding time to relax and enjoy a meal."
        },
        {
            name: "Nature Picnic Spot Near Chakan",
            description: "Nature lovers searching for a nature picnic spot near Chakan can enjoy the open countryside environment at Om Agro Tourism. Bird Watching, farm experiences, and outdoor activities provide opportunities to spend quality time in a more peaceful natural setting."
        },
        {
            name: "Picnic Spot Near Moshi Chakan",
            description: "Visitors from Moshi and Chakan can choose Om Agro Tourism for a refreshing countryside picnic experience. Families and groups can enjoy traditional rural activities, games, food, nature, and outdoor recreation during a convenient one-day outing."
        },
        {
            name: "School Picnic Spot Near Chakan",
            description: "Om Agro Tourism is a suitable school picnic spot near Chakan where students can combine recreation with rural and educational experiences. Farm Tours and Workshops, games, tractor rides, and nature activities can make the outing both enjoyable and engaging."
        },
        {
            name: "Family Picnic Resort Near Chakan",
            description: "A family picnic resort near Chakan becomes more enjoyable when children and adults have several experiences to choose from. Om Agro Tourism combines rural attractions, games, food, nature, and outdoor activities for a flexible family day."
        },
        {
            name: "Picnic Spot with Activities Near Chakan",
            description: "Visitors searching for a picnic spot with activities near Chakan can enjoy a varied experience at Om Agro Tourism. Water activities, rural rides, games, farm experiences, nature attractions, and food provide several options for families, students, and groups."
        }
    ],
    tableData: [
        ["Picnic Spot Near Chakan"],
        ["One Day Picnic Spot Near Chakan"],
        ["Best Picnic Spot Near Chakan"],
        ["Family Picnic Spot Near Chakan"],
        ["Picnic Resort Near Chakan"],
        ["One Day Picnic Resort Near Chakan"],
        ["Best Resort Near Chakan for Picnic"],
        ["Family Resort Near Chakan"],
        ["One Day Trip Near Chakan"],
        ["Family One Day Trip Near Chakan"],
        ["Picnic Places Near Chakan"],
        ["Best Picnic Places Near Chakan"],
        ["Affordable Picnic Spot Near Chakan"],
        ["Budget Picnic Resort Near Chakan"],
        ["Picnic Spot Near Chakan Pune"],
        ["Resort Near Chakan for Family Outing"],
        ["One Day Resort Near Chakan"],
        ["Nature Picnic Spot Near Chakan"],
        ["Picnic Spot Near Moshi Chakan"],
        ["School Picnic Spot Near Chakan"],
        ["Family Picnic Resort Near Chakan"],
        ["Picnic Spot with Activities Near Chakan"]
    ],
    whychoose: [
        {
            WhyChooseheading: "Ideal for School and Family Groups",
            WhyChoosedescription: "Om Agro Tourism offers experiences that can suit students, parents, children, friends, and larger groups, making it a flexible choice for different types of picnic plans near Chakan."
        },
        {
            WhyChooseheading: "Educational Rural Experiences",
            WhyChoosedescription: "Farm Tours and Workshops introduce students and families to agricultural surroundings and rural activities, giving the outing an educational dimension alongside recreation."
        },
        {
            WhyChooseheading: "Wide Range of Activities",
            WhyChoosedescription: "Visitors can choose from water recreation, games, rural rides, nature activities, and outdoor experiences, allowing every group to create a schedule based on its interests."
        },
        {
            WhyChooseheading: "Peaceful Countryside Environment",
            WhyChoosedescription: "The rural setting provides a refreshing change from the industrial and urban surroundings of Chakan, giving visitors space to relax, explore, and spend quality time outdoors."
        },
        {
            WhyChooseheading: "Fun for Different Age Groups",
            WhyChoosedescription: "Children can enjoy games and exciting activities while adults can participate in rural experiences, nature activities, meals, and leisurely outdoor time, creating a balanced family outing."
        },
        {
            WhyChooseheading: "Suitable for One-Day Plans",
            WhyChoosedescription: "Multiple attractions are available at the same destination, making it easier for families, school groups, and friends to organize a complete day outing without moving between several locations."
        },
        {
            WhyChooseheading: "Traditional Village Experiences",
            WhyChoosedescription: "Bull Cart Ride and Tractor Ride provide visitors with an authentic countryside touch and create memorable experiences that are different from the usual city-based picnic activities."
        },
        {
            WhyChooseheading: "Complete Day-Out Experience",
            WhyChoosedescription: "With nature, recreation, food, games, rural activities, and opportunities for group enjoyment, Om Agro Tourism can turn a simple trip from Chakan into a varied and memorable countryside experience."
        }
    ]
};


const faqData = [
    {
        question: "What makes Om Agri Tourism a refreshing picnic option for visitors from Chakan?",
        answer: "A day at Om Agri Tourism combines countryside surroundings with recreational and traditional farm experiences. Guests from Chakan can enjoy swimming, boating, horse riding, tractor rides and bull cart rides, while bird watching and homemade food provide opportunities to slow down and relax."
    },
    {
        question: "How can families from Chakan plan a memorable picnic at Om Agri Tourism?",
        answer: "Families can create a flexible schedule that includes both active and peaceful experiences. Swimming and boating can be followed by horse riding or countryside rides, while a homemade meal, bird watching and time among the greenery allow everyone to enjoy the outing at a comfortable pace."
    },
    {
        question: "Which activities can be enjoyed at a picnic spot near Chakan Pune?",
        answer: "Visitors can choose from several outdoor experiences depending on their interests. Swimming, boating, horse riding, tractor rides and bull cart rides offer recreational variety, while bird watching brings a quieter nature-focused element to the picnic."
    },
    {
        question: "Is Om Agri Tourism suitable for friends looking for a day out near Chakan?",
        answer: "Friends can make the outing more engaging by combining group activities with relaxed social time. Swimming and boating can be followed by horse riding or traditional farm rides, with food, photography and conversations filling the quieter portions of the day."
    },
    {
        question: "What rural experiences can visitors discover during a picnic near Chakan?",
        answer: "The farm setting allows guests to experience activities associated with traditional countryside life. Horse riding, tractor rides and bull cart rides can give the outing a rural character, while bird watching, greenery and homemade food add to the overall farm experience."
    },
    {
        question: "Can children enjoy an outing at Om Agri Tourism near Chakan?",
        answer: "Children can explore a range of outdoor activities according to their age and comfort. Swimming, boating, horse riding and farm rides can keep them engaged, while bird watching offers an opportunity to observe nature. Adults should provide appropriate supervision during activities."
    },
    {
        question: "Does Om Agri Tourism offer activities for different age groups visiting from Chakan?",
        answer: "The variety of experiences makes it possible for different members of a group to choose activities suited to them. Younger visitors may prefer swimming and rides, while adults and seniors can enjoy boating, homemade food, bird watching and relaxing in the farm surroundings."
    },
    {
        question: "What could a comfortable one-day picnic itinerary from Chakan look like?",
        answer: "An easy-going plan can begin with swimming or boating, followed by horse riding and one of the traditional countryside rides. After enjoying food, visitors can reserve some time for bird watching, photography and relaxation instead of trying to fit every activity into a short period."
    },
    {
        question: "Can visitors experience tractor and bull cart rides during their picnic near Chakan?",
        answer: "Yes, these traditional farm rides can add a distinctive rural element to the outing. Guests can include tractor rides and bull cart rides along with horse riding, swimming or boating to create a more varied experience for family and friends."
    },
    {
        question: "Why consider Om Agri Tourism when searching for a picnic spot near Chakan?",
        answer: "For people seeking a countryside break close to the Chakan area, Om Agri Tourism brings recreation, nature and rural experiences together. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching provide several ways for families and groups to enjoy a relaxed day away from their regular routine."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Vishal Pawar",
        feedback:
            "A farm outing was a great change from our usual plans around Chakan. The group enjoyed the swimming and boating, while the horse riding and bull cart ride gave us a chance to try something completely different. Having homemade food and open surroundings made the day feel relaxed rather than rushed.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Manisha Kulkarni",
        feedback:
            "The variety made the visit enjoyable for our entire family. The children were excited about the outdoor activities and rides, while the older members preferred bird watching, food and sitting in the peaceful greenery. Everyone could follow their own pace, which made the picnic comfortable and memorable.",
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
  "name": "Picnic Spot Near Chakan",
  "image": "https://www.omagrotourism.com/assets/images/picnic-spot-near-chakan.webp",
  "description": "Planning a refreshing day away from the regular city routine becomes easier with a convenient picnic spot near Chakan. Om Agro Tourism is a suitable choice for families, friends, students and groups looking for a peaceful setting for a one day picnic near Chakan. Those searching for the best picnic spot near Chakan can consider an agro-tourism experience surrounded by open spaces and a relaxed atmosphere, making it suitable for spending quality time together. Families looking for a picnic resort near Chakan or a one day picnic resort near Chakan can plan a comfortable outing with opportunities to enjoy nature, group time and outdoor activities. Whether the occasion is a family gathering, friends' outing, school picnic or casual weekend plan, Om Agro Tourism offers a pleasant destination for a memorable day trip near Chakan.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/picnic-spot-near-chakan"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Picnic Spot Near Chakan | Best Picnic Resort & One Day Family Outing | +91 7066665554
  </title>

  <meta
    name="description"
    content="Find a refreshing picnic spot near Chakan for families, friends and groups. Plan a one day picnic near Chakan with Om Agro Tourism and enjoy a relaxed agro-tourism day outing."
  />

  <meta
    name="keywords"
    content="Picnic Spot Near Chakan, One Day Picnic Spot Near Chakan, Best Picnic Spot Near Chakan, Family Picnic Spot Near Chakan, Picnic Resort Near Chakan, One Day Picnic Resort Near Chakan, Best Resort Near Chakan for Picnic, Family Resort Near Chakan, One Day Trip Near Chakan, Picnic Places Near Chakan, Family Outing Near Chakan, One Day Outing Near Chakan, Agro Tourism Near Chakan, Picnic Destination Near Chakan, Best Picnic Resort Near Chakan"
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
                            <img src='/images/keyword/142.jpg' alt='img' className='img-fluid' />
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

export default PicnicSpotNearchakan;