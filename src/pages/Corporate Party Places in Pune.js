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

function CorporatePartyPlacesInPune() {


const cardData = {
    keyword: "Corporate Party Places in Pune",
    headingDescription: "Om Agro Tourism offers a refreshing countryside destination for corporate parties, office celebrations, team gatherings, and company events near Pune. The peaceful farm environment combines open spaces, greenery, homemade food, recreational activities, and group-friendly experiences, making it suitable for teams looking to celebrate, interact, relax, and spend quality time together away from their regular workplace surroundings.",

    topPlaces: [
        {
            title: "Boating",
            description: "Boating provides a calm and enjoyable activity for colleagues attending corporate parties and group events. The tranquil surroundings create an opportunity for employees to relax, interact informally, and enjoy a refreshing break from their regular office routine."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and outdoor games offer corporate groups an entertaining way to participate in friendly activities and team interaction. Employees can enjoy different recreational options while spending quality time together during their company celebration."
        },
        {
            title: "Tasty home made food",
            description: "Fresh homemade food adds a traditional and welcoming touch to corporate gatherings. Colleagues can sit together, enjoy flavorful farm-style meals, and relax after participating in the various recreational activities available at the destination."
        },
        {
            title: "Water Park Activities",
            description: "Water park activities bring energy and fun to corporate celebrations, team gatherings, and company outings. Employees can enjoy refreshing recreational experiences that make the party or group visit more lively and memorable."
        },
        {
            title: "Horse Riding",
            description: "Horse riding through the scenic farm surroundings gives corporate guests an enjoyable outdoor experience. Team members can explore the countryside at a relaxed pace while trying an activity that is different from their everyday workplace routine."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm tours and workshops introduce corporate groups to agriculture, rural practices, planting, harvesting, and animal care. The experience provides an interesting combination of learning, nature, and informal team interaction."
        },
        {
            title: "Swimming Pool",
            description: "The spacious swimming pool gives employees a refreshing place to unwind during corporate celebrations and outings. Surrounded by greenery, it provides a relaxed recreational setting where colleagues can enjoy leisure time together."
        },
        {
            title: "Tractor Ride",
            description: "A tractor ride offers corporate groups a fun and distinctive way to explore the farm surroundings. The activity adds a rural experience to company outings and gives colleagues an opportunity to enjoy something different together."
        },
        {
            title: "Bull Cart Ride",
            description: "The traditional bull cart ride lets corporate guests experience the charm of rural Maharashtra while exploring the farm at a leisurely pace. It can be an enjoyable group activity for employees attending parties, outings, and company gatherings."
        },
        {
            title: "Birds Watching",
            description: "Birds watching provides a peaceful nature-based activity for employees who enjoy quiet outdoor experiences. The green surroundings offer an opportunity to observe beautiful birds and take a relaxing break during a corporate group visit."
        }
    ],

    services: [
        {
            name: "Corporate party places in pune",
            description: "Corporate party places in Pune can provide a relaxed environment for office celebrations, employee gatherings, and company functions. Om Agro Tourism offers a countryside destination with greenery, homemade food, activities, and group-friendly facilities."
        },
        {
            name: "Corporate parties in pune",
            description: "Corporate parties in Pune can become more engaging when employees have access to recreational activities beyond the main celebration. Om Agro Tourism combines a peaceful farm atmosphere with food, games, water activities, and outdoor experiences."
        },
        {
            name: "Corporate party venues in pune",
            description: "Corporate party venues in Pune can be selected according to group size, entertainment requirements, food arrangements, and overall atmosphere. Om Agro Tourism provides a natural destination setting suitable for company celebrations and employee gatherings."
        },
        {
            name: "best office party places in pune",
            description: "The best office party places in Pune can offer employees opportunities to celebrate and interact away from the workplace. Om Agro Tourism provides a refreshing countryside environment with group activities, homemade food, greenery, and leisure facilities."
        },
        {
            name: "late night party places in pune",
            description: "Companies exploring late night party places in Pune can also consider destination-style venues for planned corporate gatherings and extended group experiences. Om Agro Tourism offers a peaceful setting with food, accommodation, and recreational facilities for organized events."
        },
        {
            name: "corporate banquet halls in pune",
            description: "Corporate banquet halls in Pune are useful for formal parties, company gatherings, celebrations, and employee functions. Om Agro Tourism offers an alternative farm destination where corporate events can be combined with outdoor activities and a relaxed atmosphere."
        },
        {
            name: "Corporate Party Venues in Pune",
            description: "Corporate Party Venues in Pune can provide a dedicated environment for celebrations, employee gatherings, and business-related social events. Om Agro Tourism offers open surroundings, homemade food, accommodation, and recreational activities for corporate groups."
        },
        {
            name: "Corporate parties in pune",
            description: "Corporate parties in Pune can be planned around food, entertainment, team interaction, and relaxation. Om Agro Tourism provides a countryside setting where employees can enjoy games, swimming, boating, farm experiences, and traditional activities."
        },
        {
            name: "Office party places in pune",
            description: "Office party places in Pune can give employees a chance to celebrate outside the usual office environment. Om Agro Tourism offers a natural destination with activities, homemade meals, greenery, and spaces suitable for group gatherings."
        },
        {
            name: "Corporate party places in pune",
            description: "Corporate party places in Pune can be selected for employee celebrations, annual gatherings, team functions, and informal company events. Om Agro Tourism combines a peaceful farm setting with food, recreation, and group activities."
        },
        {
            name: "team building activities resorts in Pune",
            description: "Team building activities resorts in Pune can help employees participate in shared experiences that encourage communication and interaction. Om Agro Tourism offers games, farm activities, outdoor recreation, and group experiences suitable for corporate teams."
        },
        {
            name: "Corporate Party Places in Pune",
            description: "Corporate Party Places in Pune can provide a refreshing venue for company celebrations and employee gatherings. Om Agro Tourism offers a countryside atmosphere with homemade food, recreational activities, greenery, and facilities suitable for corporate groups."
        },
        {
            name: "Best Corporate Party Places in Pune",
            description: "The Best Corporate Party Places in Pune can offer a balance of celebration, food, entertainment, and comfortable surroundings. Om Agro Tourism provides varied activities and a peaceful farm environment for memorable company gatherings."
        },
        {
            name: "Corporate Party Venues in Pune",
            description: "Corporate Party Venues in Pune can be useful for annual parties, employee celebrations, team functions, and company gatherings. Om Agro Tourism offers a distinctive destination atmosphere supported by food, nature, recreation, and accommodation."
        },
        {
            name: "Best Corporate Party Venues in Pune",
            description: "Best Corporate Party Venues in Pune can create an enjoyable setting for employees to celebrate and connect. Om Agro Tourism combines open countryside surroundings with homemade food, games, water activities, and farm experiences."
        },
        {
            name: "Corporate Event Venues in Pune",
            description: "Corporate Event Venues in Pune can support company celebrations, employee programs, informal gatherings, and group events. Om Agro Tourism provides a natural environment with recreational facilities and dining options for corporate groups."
        },
        {
            name: "Corporate Event Places in Pune",
            description: "Corporate Event Places in Pune can offer organizations an alternative to conventional office-based gatherings. Om Agro Tourism provides a peaceful farm destination where employees can participate in activities, enjoy food, and spend quality time together."
        },
        {
            name: "Corporate Party Resorts in Pune",
            description: "Corporate Party Resorts in Pune can combine celebrations with leisure facilities and group activities. Om Agro Tourism offers a countryside resort-style experience with greenery, homemade food, accommodation, and several recreational attractions."
        },
        {
            name: "Resorts for Corporate Events in Pune",
            description: "Resorts for Corporate Events in Pune can provide a comfortable environment for company gatherings and employee celebrations. Om Agro Tourism offers farm experiences, outdoor activities, food, and peaceful surroundings for corporate groups."
        },
        {
            name: "Corporate Outing Places in Pune",
            description: "Corporate Outing Places in Pune can help employees relax and interact outside their regular workplace. Om Agro Tourism provides activities such as boating, swimming, games, farm tours, horse riding, and traditional rural experiences."
        },
        {
            name: "Best Corporate Outing Places in Pune",
            description: "The Best Corporate Outing Places in Pune can provide a mix of recreation, food, nature, and opportunities for team interaction. Om Agro Tourism offers a countryside environment with varied activities suitable for office groups."
        },
        {
            name: "Corporate Team Outing Places in Pune",
            description: "Corporate Team Outing Places in Pune can give employees an opportunity to build informal connections through shared activities. Om Agro Tourism offers group-friendly attractions, homemade food, natural surroundings, and recreational experiences."
        },
        {
            name: "Team Outing Resorts in Pune",
            description: "Team Outing Resorts in Pune can provide employees with a refreshing destination for recreation and group interaction. Om Agro Tourism offers farm tours, games, boating, swimming, horse riding, and other activities for team groups."
        },
        {
            name: "Corporate Day Outing Near Pune",
            description: "A Corporate Day Outing Near Pune can be planned as a convenient break from regular office schedules. Om Agro Tourism provides a variety of activities, homemade food, greenery, and peaceful surroundings suitable for a full-day company experience."
        },
        {
            name: "Corporate Picnic Spots Near Pune",
            description: "Corporate Picnic Spots Near Pune can provide a relaxed environment for employees to enjoy food, nature, recreation, and informal interaction. Om Agro Tourism offers a countryside destination with several activities for corporate picnic groups."
        },
        {
            name: "Corporate Get Together Places in Pune",
            description: "Corporate Get Together Places in Pune can help colleagues connect in a more relaxed environment outside their normal work setting. Om Agro Tourism provides food, greenery, games, outdoor activities, and farm experiences for company groups."
        },
        {
            name: "Office Party Places in Pune",
            description: "Office Party Places in Pune can offer employees a change of environment for celebrations and group gatherings. Om Agro Tourism combines a peaceful farm setting with homemade food, water activities, games, and nature-based experiences."
        },
        {
            name: "Office Party Venues in Pune",
            description: "Office Party Venues in Pune can be selected for team celebrations, company functions, and employee gatherings. Om Agro Tourism provides a refreshing destination setting where colleagues can celebrate while enjoying several recreational facilities."
        },
        {
            name: "Company Party Places in Pune",
            description: "Company Party Places in Pune can provide organizations with an enjoyable environment for employee celebrations and informal gatherings. Om Agro Tourism offers a countryside atmosphere supported by food, activities, greenery, and accommodation."
        },
        {
            name: "Company Outing Places Near Pune",
            description: "Company Outing Places Near Pune are suitable for organizations planning recreational days for employees and teams. Om Agro Tourism offers a range of farm-based and outdoor activities that encourage colleagues to relax and interact together."
        },
        {
            name: "Corporate Team Building Resorts in Pune",
            description: "Corporate Team Building Resorts in Pune can provide activities that encourage communication, participation, and informal team bonding. Om Agro Tourism offers games, farm workshops, outdoor recreation, and shared experiences in a peaceful countryside setting."
        }
    ],

    tableData: [
        ["Corporate party places in pune"],
        ["Corporate parties in pune"],
        ["Corporate party venues in pune"],
        ["best office party places in pune"],
        ["late night party places in pune"],
        ["corporate banquet halls in pune"],
        ["Corporate Party Venues in Pune"],
        ["Corporate parties in pune"],
        ["Office party places in pune"],
        ["Corporate party places in pune"],
        ["team building activities resorts in Pune"],
        ["Corporate Party Places in Pune"],
        ["Best Corporate Party Places in Pune"],
        ["Corporate Party Venues in Pune"],
        ["Best Corporate Party Venues in Pune"],
        ["Corporate Event Venues in Pune"],
        ["Corporate Event Places in Pune"],
        ["Corporate Party Resorts in Pune"],
        ["Resorts for Corporate Events in Pune"],
        ["Corporate Outing Places in Pune"],
        ["Best Corporate Outing Places in Pune"],
        ["Corporate Team Outing Places in Pune"],
        ["Team Outing Resorts in Pune"],
        ["Corporate Day Outing Near Pune"],
        ["Corporate Picnic Spots Near Pune"],
        ["Corporate Get Together Places in Pune"],
        ["Office Party Places in Pune"],
        ["Office Party Venues in Pune"],
        ["Company Party Places in Pune"],
        ["Company Outing Places Near Pune"],
        ["Corporate Team Building Resorts in Pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Refreshing Corporate Party Environment",
            WhyChoosedescription: "Om Agro Tourism provides a peaceful countryside setting where employees can celebrate together away from the usual office environment, creating a more relaxed and enjoyable atmosphere for company events."
        },
        {
            WhyChooseheading: "Multiple Activities for Employees",
            WhyChoosedescription: "Corporate groups can enjoy boating, swimming, games, horse riding, tractor rides, bull cart rides, farm tours, water activities, and other attractions that add variety to company celebrations."
        },
        {
            WhyChooseheading: "Ideal for Team Gatherings",
            WhyChoosedescription: "The destination provides opportunities for colleagues to interact informally through shared activities, meals, and recreational experiences, making it suitable for team gatherings and employee get-togethers."
        },
        {
            WhyChooseheading: "Homemade Food for Group Events",
            WhyChoosedescription: "Tasty homemade food gives corporate groups a comfortable dining experience where employees can sit together, enjoy fresh meals, and take a relaxing break during their party or outing."
        },
        {
            WhyChooseheading: "Natural Countryside Surroundings",
            WhyChoosedescription: "Greenery and peaceful farm surroundings provide a refreshing alternative to conventional urban party venues and create an enjoyable backdrop for corporate celebrations, photographs, and informal interactions."
        },
        {
            WhyChooseheading: "Suitable for Day Outings",
            WhyChoosedescription: "The variety of activities makes the destination suitable for corporate day outings where employees can participate in multiple experiences, enjoy meals, and spend quality time together within a practical group schedule."
        },
        {
            WhyChooseheading: "Team Building Opportunities",
            WhyChoosedescription: "Shared games, farm workshops, outdoor activities, and group recreation can encourage communication and participation among colleagues while providing a relaxed environment for informal team bonding."
        },
        {
            WhyChooseheading: "Memorable Company Celebration",
            WhyChoosedescription: "Combining corporate celebrations with nature, farm experiences, homemade food, water activities, and recreational facilities creates a distinctive event experience that employees can enjoy and remember."
        }
    ]
};



const faqData = [
    {
        question: "Why consider Om Agri Tourism among corporate party places in Pune?",
        answer: "Companies looking for a change from conventional indoor party venues can consider Om Agri Tourism for a relaxed farm-based gathering. Green surroundings, open spaces and countryside experiences create a refreshing atmosphere where employees can socialize and enjoy time away from their usual workplace."
    },
    {
        question: "What type of corporate parties can be planned at Om Agri Tourism?",
        answer: "The destination can suit informal corporate gatherings, team celebrations, employee get-togethers and group outings. Companies can coordinate their requirements beforehand to plan suitable activities, food breaks and other arrangements according to the nature of the event."
    },
    {
        question: "Can companies arrange a corporate celebration at Om Agri Tourism near Pune?",
        answer: "Businesses in and around Pune can consider the farm destination for a group celebration outside the office environment. Advance planning can help companies organize the day's schedule and select suitable experiences for employees with different interests and preferences."
    },
    {
        question: "What activities can employees enjoy during a corporate party?",
        answer: "Employees can explore activities such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. A combination of energetic and relaxed experiences can keep the gathering engaging while giving colleagues opportunities to interact in an informal setting."
    },
    {
        question: "Is Om Agri Tourism suitable for corporate team celebrations?",
        answer: "A farm environment can provide a comfortable setting for colleagues to spend quality time together outside their regular work routine. Shared activities and meals can encourage informal conversations, strengthen workplace relationships and make a corporate celebration more enjoyable."
    },
    {
        question: "Can a corporate party at Om Agri Tourism include outdoor activities?",
        answer: "The open farm surroundings make it possible to include suitable outdoor experiences in the event schedule. Depending on the group and arrangements, employees can enjoy horse riding, boating, swimming, tractor rides or simply relax in the green countryside environment."
    },
    {
        question: "How can a farm setting make a corporate party more memorable?",
        answer: "A countryside venue introduces a different atmosphere from a typical restaurant or indoor event space. Employees can combine social interaction with nature, outdoor recreation and shared meals, creating a more relaxed experience that feels like a genuine break from office responsibilities."
    },
    {
        question: "Can corporate groups enjoy traditional rural experiences at Om Agri Tourism?",
        answer: "Yes, activities such as bull cart rides and tractor rides can add a distinctive rural element to the corporate gathering. These experiences give employees something different to try together and can become memorable highlights of a group celebration."
    },
    {
        question: "Is homemade food suitable for a corporate party at Om Agri Tourism?",
        answer: "Homemade food can complement the farm atmosphere and provide employees with a comfortable shared dining experience. A meal enjoyed together can also create additional opportunities for colleagues to relax and interact during the corporate outing."
    },
    {
        question: "What makes Om Agri Tourism a unique corporate party place in Pune?",
        answer: "The combination of farm greenery, open surroundings, recreational activities and countryside experiences gives the destination a character that differs from standard corporate party venues. It allows teams to celebrate together while enjoying a refreshing outdoor environment away from the city routine."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Harish Kulkarni",
        feedback:
            "Our company organized a corporate gathering at Om Agri Tourism, and the team really enjoyed the change of atmosphere. The open farm surroundings were relaxing, while boating and the tractor ride gave everyone something fun to experience together. It was a successful and enjoyable outing.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Anjali More",
        feedback:
            "We wanted a corporate party that would be more casual than a regular indoor venue, so we selected Om Agri Tourism. The employees enjoyed horse riding, bird watching and the shared meal, and there was plenty of time for everyone to interact. The countryside setting made the celebration special.",
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
  "name": "Corporate Party Places in Pune",
  "image": "https://www.omagrotourism.com/assets/images/corporate-party-places-in-pune.webp",
  "description": "Om Agro Tourism offers a refreshing Corporate Party Places in Pune experience for companies, office teams and organizations planning celebrations, employee gatherings and informal corporate events. Corporate Party Places in Pune can provide a welcome change from the regular workplace environment, giving colleagues an opportunity to relax, interact and celebrate together in a comfortable setting. Companies organizing Corporate Parties in Pune can consider a destination that combines open spaces, greenery and countryside surroundings with opportunities for group recreation and social interaction. Corporate Party Venues in Pune are useful for annual celebrations, employee appreciation events, team achievements, office anniversaries, festive gatherings and department parties. Organizations searching for the Best Office Party Places in Pune can explore a nature-oriented setting where employees can spend quality time together away from busy commercial areas. For teams interested in Late Night Party Places in Pune, event planning can be discussed according to the available venue arrangements, event schedule and group requirements rather than relying only on conventional city nightlife venues. Om Agro Tourism provides a peaceful alternative for companies that want their corporate celebration to include outdoor surroundings, nature and informal team interaction. The destination can suit office parties, corporate get-togethers, annual celebrations, employee engagement events, farewell gatherings, festive office functions and company milestone celebrations. Open spaces can provide flexibility for group seating, decorations, food arrangements, recreational activities and photography according to the event plan. Colleagues can use the relaxed environment to interact outside their usual work responsibilities, strengthening informal connections and creating shared memories. The agro-tourism surroundings add a distinctive character to corporate celebrations by bringing employees closer to greenery, agricultural landscapes and a peaceful countryside atmosphere. Monsoon visits offer lush surroundings and refreshing scenery, winter provides comfortable conditions for outdoor gatherings and summer celebrations can be planned around suitable timings. Companies can organize activities according to employee strength, event duration and the overall purpose of the party. The destination can work for smaller office teams as well as larger corporate groups looking for a spacious celebration environment near Pune. HR teams can also consider the venue for employee appreciation parties, team dinners, corporate family gatherings and festive office celebrations. Food, seating, decoration, activity and event requirements can be discussed according to the company's preferred arrangements. Teams travelling from Pune and nearby business areas can enjoy a change from the city's busy routine while remaining within a convenient destination for a corporate gathering. Om Agro Tourism combines countryside leisure, greenery, open spaces and group-friendly possibilities, making it a suitable option for organizations searching for Corporate Party Places in Pune, Corporate Party Venues in Pune and memorable office celebration destinations. The relaxed environment can help turn a routine corporate event into an enjoyable experience for employees, colleagues and company teams.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/corporate-party-places-in-pune"
  }
};






    return (
        <div>
<Helmet>
  <title>
    Corporate Party Places in Pune | Office Party Venue & Corporate Celebration | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers corporate party places in Pune for office celebrations, corporate gatherings, employee parties, team events and memorable company functions."
  />

  <meta
    name="keywords"
    content="Corporate party places in pune, Corporate parties in pune, Corporate party venues in pune, best office party places in pune, late night party places in pune, corporate party places near Pune, corporate party venues near Pune, best corporate party places near Pune, office party places near Pune, office party venues in Pune, office party venue near Pune, corporate celebration places in Pune, corporate celebration venues in Pune, corporate event venues in Pune, corporate event places near Pune, corporate event venue near Pune, corporate function venues in Pune, corporate function hall in Pune, corporate function places near Pune, office celebration places in Pune, office celebration venues near Pune, office celebration party venue Pune, company party places in Pune, company party venues near Pune, company celebration venue Pune, corporate gathering places in Pune, corporate gathering venue near Pune, corporate get together places in Pune, corporate get together venue near Pune, office get together places in Pune, office get together venue near Pune, corporate annual party places in Pune, annual office party places in Pune, annual corporate party venue near Pune, corporate annual celebration venue Pune, employee party places in Pune, employee party venue near Pune, employee celebration places near Pune, employee appreciation party venue Pune, employee engagement party places Pune, corporate team party places Pune, team party venue near Pune, team celebration places near Pune, corporate dinner party places Pune, office dinner party venue near Pune, corporate lunch party venue Pune, office lunch party places Pune, corporate festive party places Pune, office festive party venue Pune, corporate Christmas party venue Pune, corporate Diwali party venue Pune, corporate New Year party venue Pune, office New Year party places Pune, corporate farewell party venue Pune, office farewell party places Pune, corporate birthday celebration venue Pune, office anniversary party venue Pune, company anniversary celebration venue Pune, corporate milestone celebration Pune, best office party venue Pune, best corporate party venue Pune, affordable corporate party places Pune, budget corporate party venue Pune, corporate party venue with food Pune, corporate party venue with activities Pune, corporate party resort Pune, corporate party resort near Pune, corporate party places with outdoor space Pune, outdoor corporate party venue Pune, corporate party places surrounded by nature Pune, nature corporate party venue Pune, corporate party resort with activities near Pune, corporate party venue for employees Pune, corporate party venue for large groups Pune, corporate party place for small teams Pune, corporate party destination near Pune, corporate event resort near Pune, corporate resort near Pune for party, office party resort near Pune, corporate party near Pimpri Chinchwad, corporate party places near PCMC, office party places near Pimpri Chinchwad, late night corporate party Pune, late night office party places Pune, late night party venue Pune, party places for corporate groups Pune, corporate group party venue Pune"
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
                            <img src='/images/keyword/73.jpg' alt='img' className='img-fluid' />
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

export default CorporatePartyPlacesInPune;