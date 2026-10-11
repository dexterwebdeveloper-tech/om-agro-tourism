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

function TeamoutingPlacesNearPune() {


const cardData = {
    keyword: "Team Outing Places Near Pune",
    headingDescription: "Om Agro Tourism offers a refreshing countryside destination for corporate teams, office groups, and colleagues looking for an enjoyable outing near Pune. With farm experiences, outdoor activities, homemade food, greenery, and recreational facilities, the destination provides opportunities for team members to relax, interact, participate in group activities, and spend quality time away from their regular workplace environment.",

    topPlaces: [
        {
            title: "Water Park Activities",
            description: "Water park activities provide a refreshing and energetic experience for corporate teams and office groups. Employees can enjoy fun moments together, participate in recreational activities, and make their outing more engaging in a relaxed countryside environment."
        },
        {
            title: "Bull Cart Ride",
            description: "A traditional bull cart ride gives team members an opportunity to experience the charm of rural Maharashtra. The leisurely activity encourages colleagues to spend time together while exploring the farm surroundings in a unique way."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and outdoor games create excellent opportunities for colleagues to interact, compete in a friendly manner, and enjoy group entertainment. These activities can add energy and variety to a corporate team outing."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm tours and workshops introduce corporate groups to agricultural activities and rural practices. Team members can learn about planting, harvesting, animal care, and everyday farm operations while enjoying a peaceful natural environment."
        },
        {
            title: "Boating",
            description: "Boating offers a calm recreational experience where colleagues can relax and spend quality time together. The tranquil surroundings provide a refreshing break from office routines and create opportunities for informal team interaction."
        },
        {
            title: "Tractor Ride",
            description: "A tractor ride gives corporate groups a fun way to explore the farm and experience the countryside. The activity can be enjoyed collectively and adds a distinctive rural element to a one-day team outing."
        },
        {
            title: "Tasty home made food",
            description: "Fresh homemade food provides a satisfying dining experience for corporate groups after a day of activities. The traditional farm-style meals offer colleagues an opportunity to sit together, relax, and enjoy flavorful food in a peaceful setting."
        },
        {
            title: "Horse Riding",
            description: "Horse riding through the scenic farm landscape offers team members an enjoyable outdoor activity. Employees can explore the natural surroundings, experience something different from their regular routine, and enjoy the peaceful countryside atmosphere."
        },
        {
            title: "Swimming Pool",
            description: "The spacious swimming pool provides a refreshing option for corporate groups looking to unwind during their outing. Surrounded by greenery, it creates a relaxed environment where colleagues can enjoy leisure time together."
        },
        {
            title: "Jungle Safari",
            description: "Jungle safari activities add an adventurous element to a corporate outing at Om Agro Tourism. Team members can explore the natural surroundings and enjoy an outdoor experience that makes the group visit more exciting and memorable."
        }
    ],

    services: [
        {
            name: "Corporate outing resorts near pune",
            description: "Corporate outing resorts near Pune can provide employees with a refreshing environment for relaxation, team interaction, and group activities. Om Agro Tourism combines farm experiences, greenery, homemade food, and recreational facilities for corporate groups."
        },
        {
            name: "Team outing places near pune",
            description: "Team outing places near Pune are useful for companies planning a break from regular office routines. Om Agro Tourism offers a countryside destination where colleagues can participate in activities, enjoy meals, and spend quality time together."
        },
        {
            name: "Resorts near pune for corporate outing",
            description: "Resorts near Pune for corporate outing can provide teams with a combination of recreation, food, and natural surroundings. Om Agro Tourism offers activities such as farm tours, boating, games, swimming, and traditional rural experiences."
        },
        {
            name: "Best resort for corporate outing near pune",
            description: "The best resort for corporate outing near Pune can offer a balance of team entertainment, relaxation, food, and group-friendly activities. Om Agro Tourism provides a peaceful farm setting where employees can enjoy an engaging day together."
        },
        {
            name: "Resorts for corporate outing near pune",
            description: "Resorts for corporate outing near Pune give office teams an opportunity to spend time away from their workplace. Om Agro Tourism offers a natural environment with recreational activities, homemade meals, and farm-based experiences suitable for group outings."
        },
        {
            name: "Corporate team outing places in pune",
            description: "Corporate team outing places in Pune can help employees relax and interact outside the office environment. Om Agro Tourism provides a countryside destination with activities that encourage informal conversations, group participation, and team bonding."
        },
        {
            name: "Corporate team outing places near pune",
            description: "Corporate team outing places near Pune are suitable for organizations planning a recreational day for their employees. Om Agro Tourism combines greenery, outdoor activities, farm experiences, food, and leisure options for corporate groups."
        },
        {
            name: "Resorts for team outing near pune",
            description: "Resorts for team outing near Pune can provide a convenient setting for colleagues to enjoy recreational activities together. Om Agro Tourism offers farm tours, games, boating, swimming, horse riding, and other experiences for team groups."
        },
        {
            name: "Team outing places in pune",
            description: "Team outing places in Pune can give employees a welcome change from their regular work schedule. Om Agro Tourism offers a relaxed countryside atmosphere with group activities, homemade food, nature experiences, and recreational facilities."
        },
        {
            name: "Team outing resorts near Pune",
            description: "Team outing resorts near Pune can be selected by companies looking for a destination that supports both relaxation and group entertainment. Om Agro Tourism provides a range of farm and outdoor activities suitable for colleagues."
        },
        {
            name: "corporate team outing places in pune",
            description: "Corporate team outing places in Pune can help teams strengthen workplace relationships through informal interaction and shared activities. Om Agro Tourism provides an open natural environment where colleagues can enjoy games, food, and outdoor experiences."
        },
        {
            name: "Corporate team outing places near pune",
            description: "Corporate team outing places near Pune offer an opportunity for employees to step away from office routines and spend quality time together. Om Agro Tourism provides group-friendly activities, farm experiences, dining, and peaceful surroundings."
        },
        {
            name: "Resorts for team outing near pune",
            description: "Resorts for team outing near Pune can provide an enjoyable combination of nature, recreation, and food. Om Agro Tourism gives corporate groups several ways to spend their outing through games, swimming, boating, farm tours, and rural activities."
        },
        {
            name: "Corporate outing near Pune",
            description: "A corporate outing near Pune can be a refreshing way for employees to relax and connect outside the workplace. Om Agro Tourism offers a countryside environment with group activities, homemade meals, greenery, and recreational experiences."
        },
        {
            name: "Corporate team outing near pune",
            description: "Corporate team outing near Pune can be planned as a one-day recreational experience where colleagues enjoy activities away from their regular work environment. Om Agro Tourism offers a peaceful setting with multiple attractions for team groups."
        },
        {
            name: "Best places for corporate team outing in pune",
            description: "The best places for corporate team outing in Pune can provide opportunities for team members to communicate, relax, and participate in shared activities. Om Agro Tourism offers farm experiences, games, water activities, food, and nature-based recreation."
        },
        {
            name: "Best places for team outing in pune",
            description: "Best places for team outing in Pune should offer activities that appeal to different interests and encourage colleagues to spend time together. Om Agro Tourism combines outdoor recreation, farm experiences, homemade food, and peaceful surroundings."
        },
        {
            name: "Best places for team outing near pune",
            description: "The best places for team outing near Pune can provide a break from city routines while keeping the group entertained. Om Agro Tourism offers a countryside setting with boating, swimming, games, farm tours, and traditional rural activities."
        },
        {
            name: "Best team outing places in pune",
            description: "Best team outing places in Pune can help colleagues enjoy a relaxed day filled with shared experiences. Om Agro Tourism provides a natural destination where groups can participate in recreational activities and enjoy homemade food together."
        },
        {
            name: "Corporate outing places near pune",
            description: "Corporate outing places near Pune can be ideal for organizations planning employee recreation, team bonding, and informal gatherings. Om Agro Tourism offers a peaceful farm environment with activities and dining options for corporate groups."
        },
        {
            name: "Office outing places near pune",
            description: "Office outing places near Pune give employees an opportunity to step away from daily responsibilities and enjoy time with colleagues. Om Agro Tourism provides group activities, natural surroundings, homemade food, and a relaxed countryside atmosphere."
        },
        {
            name: "One day corporate outing near pune",
            description: "A one day corporate outing near Pune can be planned around multiple recreational activities without requiring a lengthy trip. Om Agro Tourism provides farm tours, games, swimming, boating, food, and other attractions suitable for a full-day group experience."
        },
        {
            name: "One day team outing near pune",
            description: "One day team outing near Pune can offer employees a practical way to relax, interact, and enjoy shared experiences. Om Agro Tourism combines outdoor activities, farm experiences, dining, and natural surroundings for a memorable day."
        },
        {
            name: "Places for corporate team outing near pune",
            description: "Places for corporate team outing near Pune can be selected based on group activities, dining, accessibility, and overall atmosphere. Om Agro Tourism offers a countryside setting with several recreational options for employees and office groups."
        },
        {
            name: "Team outing in pune",
            description: "Team outing in Pune can become more enjoyable when employees have opportunities to participate in activities together. Om Agro Tourism offers games, farm tours, water activities, boating, traditional rides, and homemade food in a peaceful setting."
        },
        {
            name: "Team outing near pune",
            description: "A team outing near Pune can provide a refreshing break from regular office schedules. Om Agro Tourism offers a natural destination where colleagues can relax, participate in group activities, enjoy meals, and create shared memories."
        }
    ],

    tableData: [
        ["Corporate outing resorts near pune"],
        ["Team outing places near pune"],
        ["Resorts near pune for corporate outing"],
        ["Best resort for corporate outing near pune"],
        ["Resorts for corporate outing near pune"],
        ["Corporate team outing places in pune"],
        ["Corporate team outing places near pune"],
        ["Resorts for team outing near pune"],
        ["Team outing places in pune"],
        ["Team outing resorts near Pune"],
        ["corporate team outing places in pune"],
        ["Corporate team outing places near pune"],
        ["Resorts for team outing near pune"],
        ["Corporate outing near Pune"],
        ["Corporate team outing near pune"],
        ["Best places for corporate team outing in pune"],
        ["Best places for team outing in pune"],
        ["Best places for team outing near pune"],
        ["Best team outing places in pune"],
        ["Corporate outing places near pune"],
        ["Office outing places near pune"],
        ["One day corporate outing near pune"],
        ["One day team outing near pune"],
        ["Places for corporate team outing near pune"],
        ["Team outing in pune"],
        ["Team outing near pune"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Refreshing Break from Office Routine",
            WhyChoosedescription: "Om Agro Tourism provides a peaceful countryside environment where employees can step away from daily office responsibilities, relax with colleagues, and enjoy a refreshing change of surroundings."
        },
        {
            WhyChooseheading: "Activities for Team Interaction",
            WhyChoosedescription: "Games, farm tours, boating, swimming, horse riding, tractor rides, and traditional activities give team members opportunities to interact through shared experiences and informal group participation."
        },
        {
            WhyChooseheading: "Ideal for One-Day Group Plans",
            WhyChoosedescription: "The variety of attractions makes it suitable for companies planning a practical one-day outing where employees can enjoy multiple activities, dining, and relaxation without needing a long holiday schedule."
        },
        {
            WhyChooseheading: "Natural Countryside Environment",
            WhyChoosedescription: "Green surroundings and a peaceful farm atmosphere provide a refreshing alternative to office buildings and crowded city destinations, helping employees enjoy a more relaxed group experience."
        },
        {
            WhyChooseheading: "Homemade Food for Groups",
            WhyChoosedescription: "Tasty homemade meals give corporate groups an opportunity to sit together and enjoy traditional farm-style food after participating in outdoor and recreational activities."
        },
        {
            WhyChooseheading: "Fun Options for Different Interests",
            WhyChoosedescription: "From water activities and swimming to boating, games, farm tours, horse riding, and rural rides, the destination provides varied entertainment so different team members can find activities they enjoy."
        },
        {
            WhyChooseheading: "Encourages Informal Team Bonding",
            WhyChoosedescription: "Shared recreational experiences can create opportunities for colleagues to communicate outside their normal work roles, interact more comfortably, and build stronger informal connections within the team."
        },
        {
            WhyChooseheading: "Memorable Corporate Outing Experience",
            WhyChoosedescription: "Combining nature, farm activities, food, recreation, and group entertainment creates a distinctive outing experience that employees can enjoy together and remember beyond their regular workplace routine."
        }
    ]
};



const faqData = [
    {
        question: "Why is Om Agri Tourism a good option among team outing places near Pune?",
        answer: "Teams looking for a break from their regular office environment can enjoy a refreshing day at Om Agri Tourism. The farm's greenery, open surroundings and range of outdoor experiences create a relaxed setting where colleagues can unwind, interact and enjoy time together."
    },
    {
        question: "What activities can corporate teams enjoy at Om Agri Tourism?",
        answer: "A team visit can include experiences such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. Having different activities allows colleagues with varied interests to participate in recreation while also enjoying the peaceful farm atmosphere."
    },
    {
        question: "Can companies near Pune plan a team outing at Om Agri Tourism?",
        answer: "Businesses around Pune can consider Om Agri Tourism for a group outing designed to give employees a change of surroundings. Planning the visit in advance can help coordinate the preferred activities, meal breaks and group requirements for a smoother day."
    },
    {
        question: "How can a farm outing help employees spend quality time together?",
        answer: "A relaxed outdoor environment gives colleagues an opportunity to interact away from meetings, deadlines and routine office responsibilities. Shared activities, conversations and meals can encourage informal bonding while allowing team members to enjoy a refreshing break together."
    },
    {
        question: "Is Om Agri Tourism suitable for a team that wants both relaxation and outdoor recreation?",
        answer: "Teams can create a balanced outing by combining active experiences with quieter moments around the farm. Swimming, boating and horse riding can provide recreation, while bird watching and time spent in the greenery can offer a more peaceful part of the day."
    },
    {
        question: "Can team members experience rural activities during an outing near Pune?",
        answer: "The farm environment provides opportunities to try activities that are different from typical city-based corporate outings. Tractor rides and bull cart rides can introduce colleagues to traditional countryside experiences while adding an enjoyable and memorable element to the group visit."
    },
    {
        question: "Can boating and swimming be included in a corporate team outing?",
        answer: "Boating and swimming can add variety to a team day when they are suitable for the participating group. Companies should consider individual comfort levels, follow applicable safety instructions and ensure that appropriate supervision is maintained during water-based activities."
    },
    {
        question: "Is bird watching suitable for a corporate team outing at Om Agri Tourism?",
        answer: "Bird watching can provide a quieter group experience for employees who prefer nature observation over energetic activities. Spending time around the farm and observing birds can encourage colleagues to slow down, enjoy the surroundings and experience a different side of the countryside."
    },
    {
        question: "Can teams enjoy homemade food during their outing at Om Agri Tourism?",
        answer: "Homemade food can complement the relaxed farm atmosphere and give employees an opportunity to enjoy a shared meal together. A common dining experience can become an enjoyable part of the outing while giving everyone time to rest between activities."
    },
    {
        question: "What makes Om Agri Tourism memorable for a team outing near Pune?",
        answer: "The combination of greenery, outdoor recreation and rural experiences gives teams several ways to spend their day together. From horse riding and boating to tractor rides, bull cart rides and bird watching, the outing can provide a refreshing change from the usual workplace routine."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Rahul Kamat",
        feedback:
            "Our office team had a great outing at Om Agri Tourism. Everyone enjoyed the boating and tractor ride, and the open farm environment gave us a much-needed break from work. It was a relaxed day where colleagues could interact and have fun outside the office.",
        rating: 5
    },
    {
        id: 2,
        name: "Miss. Snehal Pawar",
        feedback:
            "We chose Om Agri Tourism for our team outing near Pune and had a wonderful experience. Horse riding and bird watching were enjoyed by different members of our group, while the homemade food made the day even more pleasant. The countryside atmosphere was refreshing.",
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
  "name": "Team Outing Places Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/team-outing-places-near-pune.webp",
  "description": "Om Agro Tourism offers an engaging Team Outing Places Near Pune experience for companies, offices and corporate groups planning a refreshing break from the regular workplace routine. Corporate Outing Resorts Near Pune are increasingly preferred by teams looking for open spaces, recreational activities and a relaxed environment where colleagues can interact outside the office. Team Outing Places Near Pune can provide an opportunity for employees to spend quality time together through group activities, outdoor recreation, informal conversations and shared experiences. Companies searching for Resorts Near Pune for Corporate Outing can consider an agro-tourism destination where greenery, agricultural surroundings and open spaces create a refreshing atmosphere for team gatherings. A Best Resort for Corporate Outing Near Pune should ideally provide an environment where employees can relax, participate in suitable activities and enjoy time together away from daily work responsibilities. Resorts for Corporate Outing Near Pune can be suitable for small office teams as well as larger groups planning annual outings, employee engagement programs, team-building days and corporate celebrations. Corporate Team Outing Places in Pune and Corporate Team Outing Places Near Pune can offer different possibilities depending on group size, outing duration and preferred activities. Resorts for Team Outing Near Pune can be considered by organizations looking for a destination that combines leisure, nature and group recreation. Team Outing Places in Pune can range from city-based entertainment venues to countryside destinations, while an agro-tourism environment offers a distinctive change of scenery. Om Agro Tourism provides open surroundings where teams can organize group recreation, outdoor games, nature experiences and informal team interactions. The agricultural setting can also introduce employees to a more relaxed rural environment while providing a break from screens, meetings and office schedules. Companies can plan day outings, employee engagement events, annual team picnics, corporate family days, department gatherings and informal celebrations according to their requirements. Seasonal visits provide different experiences, with monsoon offering lush greenery and refreshing surroundings, winter creating pleasant conditions for outdoor activities and summer outings being planned around suitable timings. Team members can participate in shared activities that encourage communication, collaboration and stronger workplace relationships in an informal atmosphere. The destination can also be suitable for HR teams planning employee appreciation events, corporate recreation days and group celebrations. Food arrangements, activity requirements, group size and event schedules can be discussed according to the organization's outing plan. Teams travelling from Pune and surrounding business areas can consider the destination for a convenient countryside escape without requiring an extended journey. The open environment provides opportunities for colleagues to interact naturally and create memorable experiences beyond the office. Om Agro Tourism combines nature, agriculture, recreation and countryside leisure, making it a suitable option for companies searching for Corporate Outing Resorts Near Pune, Team Outing Places Near Pune and Resorts for Corporate Outing Near Pune. With its peaceful surroundings and group-friendly atmosphere, the destination can help turn a routine corporate outing into an enjoyable team experience.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/team-outing-places-near-pune"
  }
};





    return (
        <div>

<Helmet>
  <title>
    Team Outing Places Near Pune | Corporate Outing Resorts & Team Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers team outing places near Pune for corporate groups, office teams and employee gatherings with nature, recreation and outdoor activities."
  />

  <meta
    name="keywords"
    content="Team Outing Places Near Pune, Corporate outing resorts near pune, Team outing places near pune, Resorts near pune for corporate outing, Best resort for corporate outing near pune, Resorts for corporate outing near pune, Corporate team outing places in pune, Corporate team outing places near pune, Resorts for team outing near pune, Team outing places in pune, Team outing places near Pune, best team outing places near Pune, corporate outing places near Pune, corporate outing resorts near Pune, corporate team outing resorts near Pune, best corporate outing resort near Pune, office outing places near Pune, office team outing places near Pune, office outing resorts near Pune, employee outing places near Pune, employee outing resort near Pune, corporate picnic places near Pune, corporate picnic resorts near Pune, corporate picnic venue near Pune, corporate team picnic near Pune, team picnic places near Pune, team picnic resorts near Pune, team building places near Pune, team building resorts near Pune, team building activities near Pune, corporate team building resort near Pune, corporate team building activities near Pune, employee engagement activities near Pune, employee engagement resort near Pune, corporate retreat near Pune, corporate retreat resorts near Pune, corporate offsite near Pune, corporate offsite resorts near Pune, corporate offsite locations near Pune, office offsite places near Pune, office offsite resort near Pune, company outing places near Pune, company picnic places near Pune, company outing resort near Pune, corporate group outing near Pune, corporate group picnic near Pune, corporate event venue near Pune, corporate event resort near Pune, corporate event places near Pune, corporate celebration venue near Pune, corporate annual outing near Pune, annual corporate picnic near Pune, annual team outing near Pune, annual office outing near Pune, team outing resort near Pune, team outing destination near Pune, team outing venue near Pune, team outing places in Pune, corporate outing places in Pune, corporate picnic places in Pune, corporate resorts in Pune, best resorts near Pune for corporate outing, resorts near Pune for office outing, resorts near Pune for team outing, resorts near Pune for company outing, resorts near Pune for team building, resorts near Pune for employee outing, resorts near Pune for office picnic, one day corporate outing near Pune, one day team outing near Pune, one day office outing near Pune, one day corporate picnic near Pune, one day team picnic near Pune, team outing with activities near Pune, corporate outing with activities near Pune, corporate resort with activities near Pune, team outing resort with activities near Pune, adventure resort for corporate outing near Pune, nature resort for corporate outing near Pune, agro tourism for corporate outing near Pune, agro tourism resort near Pune for corporate, nature outing for corporate teams near Pune, outdoor team outing near Pune, corporate team day out near Pune, employee recreation resort near Pune, corporate family outing near Pune, office family day resort near Pune"
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
                            <img src='/images/keyword/72.jpg' alt='img' className='img-fluid' />
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

export default TeamoutingPlacesNearPune;