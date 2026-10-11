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

function Waterparknearnavimumbai() {


const cardData = {
    keyword: "Water Park Near Navi Mumbai",
    headingDescription: "Om Agro Tourism is a refreshing destination for families, kids, friends, and groups looking for a water park experience near Navi Mumbai. Visitors can enjoy water park activities, swimming, boating, games, farm attractions, homemade food, and peaceful greenery, making it suitable for one-day picnics, family outings, group visits, and relaxing breaks away from the busy city environment.",

    topPlaces: [
        {
            title: "Jungle Safari",
            description: "Jungle Safari offers visitors an exciting nature-oriented experience where families and groups can explore the surroundings and enjoy a change of pace from water-based recreation. It adds adventure and outdoor exploration to a refreshing day outing."
        },
        {
            title: "Swimming Pool",
            description: "The spacious swimming pool provides a refreshing place for children and adults to cool down and relax. Surrounded by greenery, it creates an enjoyable setting for families and groups spending a leisure day at Om Agro Tourism."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride introduces visitors to a traditional rural experience while allowing them to explore the farm surroundings at a relaxed pace. It is an enjoyable activity for families looking to experience something different alongside water park recreation."
        },
        {
            title: "Birds Watching",
            description: "Birds Watching gives nature lovers an opportunity to observe beautiful birds in the peaceful farm environment. The activity provides a calm experience for visitors who want to spend some time close to nature between other recreational activities."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities provide refreshing entertainment for families, children, and groups visiting Om Agro Tourism. The water-based recreation makes the destination suitable for a fun-filled one-day picnic while offering plenty of opportunities to relax and enjoy the surroundings."
        },
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops allow visitors to understand daily agricultural activities while exploring the countryside setting. Guests can learn about farming practices, planting, harvesting, and animal care as part of their overall outing."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding offers a peaceful outdoor activity through the scenic farm landscape. Visitors can enjoy the countryside atmosphere and add an adventurous yet relaxing experience to their family or group visit."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games provide additional entertainment for children, families, and groups visiting the property. Guests can enjoy friendly activities together and keep the outing engaging even when taking a break from water attractions."
        },
        {
            title: "Boating",
            description: "Boating offers a tranquil recreational experience surrounded by peaceful scenery. Families and friends can spend quality time on the water while enjoying a relaxing break from the more active attractions at the destination."
        },
        {
            title: "Tasty home made food",
            description: "Tasty home made food adds a comforting farm-style dining experience to the visit. Guests can enjoy fresh and flavorful meals after participating in water activities, games, farm experiences, and other attractions."
        }
    ],

    services: [
        {
            name: "Water park resort near navi mumbai",
            description: "A water park resort near Navi Mumbai can be an enjoyable choice for families and groups seeking water recreation along with relaxation. Om Agro Tourism combines water park activities with swimming, boating, games, farm attractions, and homemade food."
        },
        {
            name: "Navi mumbai resort water park",
            description: "A Navi Mumbai resort water park experience can provide visitors with a refreshing combination of recreation and leisure. Om Agro Tourism offers water-based activities along with greenery, farm experiences, outdoor games, boating, and traditional homemade food."
        },
        {
            name: "Water park near navi mumbai",
            description: "Visitors searching for a water park near Navi Mumbai can consider Om Agro Tourism for a refreshing countryside outing. The destination offers water park activities, swimming, boating, games, farm tours, and additional attractions for families and groups."
        },
        {
            name: "Water park near panvel navi mumbai maharashtra",
            description: "A water park near Panvel Navi Mumbai Maharashtra can be suitable for families planning a refreshing day away from busy urban surroundings. Om Agro Tourism combines water recreation with farm activities, greenery, homemade food, and outdoor entertainment."
        },
        {
            name: "Water park resort in navi mumbai",
            description: "A water park resort in Navi Mumbai can provide an activity-filled experience for families, children, and groups. Om Agro Tourism offers water park activities together with swimming, boating, games, farm tours, and relaxing countryside surroundings."
        },
        {
            name: "Water resort in navi mumbai",
            description: "A water resort in Navi Mumbai can be a convenient option for visitors looking for water-based entertainment and relaxation. Om Agro Tourism adds variety through swimming, boating, farm experiences, games, homemade food, and nature-oriented activities."
        },
        {
            name: "Water resort near navi mumbai",
            description: "A water resort near Navi Mumbai can offer a refreshing break for families and groups. Om Agro Tourism provides water activities in a peaceful farm setting along with swimming, boating, outdoor games, horse riding, and homemade meals."
        },
        {
            name: "water park resort in navi mumbai",
            description: "A water park resort in Navi Mumbai can be suitable for visitors who want recreation and relaxation at one destination. Om Agro Tourism combines water attractions with farm tours, games, boating, swimming, and a peaceful natural environment."
        },
        {
            name: "Best water park in navi mumbai",
            description: "Visitors comparing the Best water park in Navi Mumbai can look for a destination that offers more than water activities. Om Agro Tourism provides swimming and water park activities along with boating, farm experiences, games, food, and rural attractions."
        },
        {
            name: "Water park near navi mumbai",
            description: "For those looking for a Water park near Navi Mumbai, Om Agro Tourism provides a combination of refreshing water recreation and countryside experiences. Families and groups can enjoy swimming, water activities, games, boating, and homemade food."
        },
        {
            name: "Best water park near navi mumbai",
            description: "The Best water park near Navi Mumbai can be selected by considering activities, family suitability, surroundings, and overall outing experience. Om Agro Tourism provides water recreation together with farm attractions, games, boating, and homemade meals."
        },
        {
            name: "Water park near kharghar navi mumbai",
            description: "Visitors searching for a Water park near Kharghar Navi Mumbai can explore destinations offering a broader recreational experience. Om Agro Tourism provides water activities along with swimming, boating, farm tours, games, and peaceful countryside surroundings."
        },
        {
            name: "Water park near navi mumbai maharashtra",
            description: "A Water park near Navi Mumbai Maharashtra can be an appealing option for families planning a refreshing picnic. Om Agro Tourism offers water park activities supported by swimming, boating, farm experiences, games, homemade food, and outdoor recreation."
        },
        {
            name: "Water park near nerul navi mumbai",
            description: "A Water park near Nerul Navi Mumbai can provide families and groups with an opportunity to enjoy a refreshing day outside the city. Om Agro Tourism offers water activities along with several nature, farm, food, and recreational experiences."
        },
        {
            name: "Water park near vashi navi mumbai",
            description: "Visitors searching for a Water park near Vashi Navi Mumbai can choose a destination that combines water recreation with additional activities. Om Agro Tourism offers swimming, water park activities, boating, games, farm tours, and homemade food."
        },
        {
            name: "Water park resort near navi mumbai",
            description: "A Water park resort near Navi Mumbai can be suitable for families and groups seeking a complete recreational outing. Om Agro Tourism combines water attractions with greenery, swimming, boating, games, farm experiences, and homemade meals."
        },
        {
            name: "Water Park Near Navi Mumbai",
            description: "Water Park Near Navi Mumbai searches are often made by families and groups planning a refreshing one-day outing. Om Agro Tourism provides water park activities, swimming, boating, games, farm experiences, and a peaceful countryside setting."
        },
        {
            name: "Best Water Park Near Navi Mumbai",
            description: "The Best Water Park Near Navi Mumbai can provide a mix of entertainment, relaxation, and activities for different age groups. Om Agro Tourism offers water recreation together with farm attractions, boating, games, homemade food, and nature experiences."
        },
        {
            name: "Water Parks in Navi Mumbai",
            description: "Visitors exploring Water Parks in Navi Mumbai can consider destinations that provide a wider range of activities beyond swimming. Om Agro Tourism combines water park recreation with boating, farm tours, games, horse riding, and traditional food."
        },
        {
            name: "Best Water Parks in Navi Mumbai",
            description: "The Best Water Parks in Navi Mumbai can be compared based on recreational options, family suitability, surroundings, and overall experience. Om Agro Tourism offers water-based entertainment along with farm activities, games, boating, and homemade food."
        },
        {
            name: "Water Park Near Navi Mumbai for Family",
            description: "A Water Park Near Navi Mumbai for Family outings should provide activities that can be enjoyed by both children and adults. Om Agro Tourism offers water park activities, swimming, games, boating, farm experiences, and food for a varied family day."
        },
        {
            name: "Water Park Near Navi Mumbai for Kids",
            description: "A Water Park Near Navi Mumbai for Kids can be a fun choice for families looking to give children an active outdoor experience. Om Agro Tourism offers water activities along with games, farm attractions, boating, and open surroundings for family recreation."
        },
        {
            name: "Water Park Near Navi Mumbai With Price",
            description: "Visitors searching for a Water Park Near Navi Mumbai With Price can compare the overall activities and facilities available with the package cost. Om Agro Tourism provides water recreation along with additional attractions that can make a day outing more engaging."
        },
        {
            name: "Water Park Near Navi Mumbai With Stay",
            description: "A Water Park Near Navi Mumbai With Stay can be convenient for visitors who want to combine recreation with a longer leisure experience. Om Agro Tourism offers water activities along with a peaceful farm environment and multiple attractions for visitors."
        },
        {
            name: "Water Park Resort Near Navi Mumbai",
            description: "A Water Park Resort Near Navi Mumbai can provide families and groups with an enjoyable combination of water recreation and countryside relaxation. Om Agro Tourism includes water activities, swimming, boating, games, farm experiences, and homemade food."
        },
        {
            name: "Best Water Park Resort Near Navi Mumbai",
            description: "The Best Water Park Resort Near Navi Mumbai can offer a balanced mix of water entertainment, outdoor activities, food, and relaxation. Om Agro Tourism provides a varied experience with swimming, water activities, boating, games, farm tours, and greenery."
        },
        {
            name: "Water Park Near Navi Mumbai for One Day Picnic",
            description: "A Water Park Near Navi Mumbai for One Day Picnic can be ideal for families, friends, schools, and groups wanting a complete day of recreation. Om Agro Tourism offers water activities alongside games, boating, farm experiences, food, and outdoor attractions."
        },
        {
            name: "One Day Picnic Water Park Near Navi Mumbai",
            description: "A One Day Picnic Water Park Near Navi Mumbai can provide a refreshing escape for groups looking for entertainment without planning a long trip. Om Agro Tourism combines water recreation with swimming, boating, games, farm tours, and homemade meals."
        }
    ],

    tableData: [
        ["Water park resort near navi mumbai"],
        ["Navi mumbai resort water park"],
        ["Water park near navi mumbai"],
        ["Water park near panvel navi mumbai maharashtra"],
        ["Water park resort in navi mumbai"],
        ["Water resort in navi mumbai"],
        ["Water resort near navi mumbai"],
        ["water park resort in navi mumbai"],
        ["Best water park in navi mumbai"],
        ["Water park near navi mumbai"],
        ["Best water park near navi mumbai"],
        ["Water park near kharghar navi mumbai"],
        ["Water park near navi mumbai maharashtra"],
        ["Water park near nerul navi mumbai"],
        ["Water park near vashi navi mumbai"],
        ["Water park resort near navi mumbai"],
        ["Water Park Near Navi Mumbai"],
        ["Best Water Park Near Navi Mumbai"],
        ["Water Parks in Navi Mumbai"],
        ["Best Water Parks in Navi Mumbai"],
        ["Water Park Near Navi Mumbai for Family"],
        ["Water Park Near Navi Mumbai for Kids"],
        ["Water Park Near Navi Mumbai With Price"],
        ["Water Park Near Navi Mumbai With Stay"],
        ["Water Park Resort Near Navi Mumbai"],
        ["Best Water Park Resort Near Navi Mumbai"],
        ["Water Park Near Navi Mumbai for One Day Picnic"],
        ["One Day Picnic Water Park Near Navi Mumbai"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Refreshing Water Park Experience",
            WhyChoosedescription: "Om Agro Tourism offers water park activities and a swimming pool where families, children, friends, and groups can enjoy refreshing recreation in a peaceful countryside environment away from the busy city."
        },
        {
            WhyChooseheading: "Family-Friendly Attractions",
            WhyChoosedescription: "The destination includes water activities, games, boating, farm experiences, and outdoor recreation, giving different age groups opportunities to participate and enjoy the outing together."
        },
        {
            WhyChooseheading: "Perfect for One-Day Picnics",
            WhyChoosedescription: "A combination of water recreation, homemade food, farm attractions, games, and nature-based activities makes the destination suitable for families and groups planning a refreshing one-day picnic."
        },
        {
            WhyChooseheading: "Peaceful Green Surroundings",
            WhyChoosedescription: "Visitors can enjoy water-based entertainment while surrounded by greenery and open farm landscapes, creating a relaxing atmosphere that feels different from crowded urban recreation areas."
        },
        {
            WhyChooseheading: "Activities Beyond Water",
            WhyChoosedescription: "Along with water park activities and swimming, guests can enjoy boating, horse riding, tractor rides, bull cart rides, bird watching, jungle safari, games, and farm tours for a more complete outing."
        },
        {
            WhyChooseheading: "Homemade Food",
            WhyChoosedescription: "Tasty homemade food adds a traditional farm-style dining experience to the visit. Guests can enjoy fresh meals after spending time in the water and participating in other recreational activities."
        },
        {
            WhyChooseheading: "Suitable for Different Groups",
            WhyChoosedescription: "Families, children, friends, school groups, and corporate teams can find suitable recreational options at the property, making it adaptable for different types of day outings and group visits."
        },
        {
            WhyChooseheading: "Complete Countryside Getaway",
            WhyChoosedescription: "The combination of water attractions, nature, rural activities, food, games, and farm experiences allows visitors to enjoy more than a conventional water park visit while creating memorable moments together."
        }
    ]
};



const faqData = [
    {
        question: "Can Om Agri Tourism be considered when searching for a water park near Navi Mumbai?",
        answer: "Visitors looking for a refreshing water-based outing near Navi Mumbai can consider Om Agri Tourism for experiences such as swimming and boating. Along with water recreation, the destination provides a green farm environment and countryside activities for a more varied day trip."
    },
    {
        question: "What water activities are available at Om Agri Tourism?",
        answer: "Swimming and boating can form the main water-based part of a visit to Om Agri Tourism. Guests can also explore horse riding, tractor rides, bull cart rides and bird watching, allowing them to combine water recreation with outdoor farm experiences."
    },
    {
        question: "Is Om Agri Tourism suitable for a family outing near Navi Mumbai?",
        answer: "Families can consider the destination for a countryside day trip that includes suitable water activities and nature-based experiences. Children and adults can participate according to their age, comfort and activity suitability while enjoying time together away from the busy city environment."
    },
    {
        question: "Can children enjoy swimming during a visit to Om Agri Tourism?",
        answer: "Swimming can be an enjoyable experience for children when it is appropriate for their age and swimming ability. Parents and accompanying adults should follow the applicable safety guidelines and provide proper supervision throughout the activity."
    },
    {
        question: "Does Om Agri Tourism offer activities besides swimming and boating?",
        answer: "The destination provides several countryside experiences beyond water recreation. Visitors can enjoy horse riding, tractor rides, bull cart rides and bird watching, making it possible to create an outing that includes both active entertainment and peaceful nature experiences."
    },
    {
        question: "Can groups from Navi Mumbai plan a water-based outing at Om Agri Tourism?",
        answer: "Friends, families and other groups can consider Om Agri Tourism for a planned outdoor outing featuring swimming and boating. Coordinating the visit beforehand can help groups organize their preferred activities and meal breaks while making the most of their time at the destination."
    },
    {
        question: "How is Om Agri Tourism different from a conventional water park near Navi Mumbai?",
        answer: "Instead of focusing exclusively on water rides and amusement attractions, Om Agri Tourism combines swimming and boating with a farm atmosphere and rural recreation. Activities such as tractor rides, bull cart rides and bird watching provide a broader countryside experience."
    },
    {
        question: "Can visitors enjoy nature along with water activities at Om Agri Tourism?",
        answer: "The farm surroundings allow guests to combine swimming or boating with time spent in greenery and nature observation. Bird watching can offer a quieter part of the outing, while horse riding and rural rides can add variety to the overall experience."
    },
    {
        question: "What should families know before planning a water outing at Om Agri Tourism?",
        answer: "Families should consider children's ages, swimming abilities and individual comfort levels before choosing water activities. Following safety instructions and maintaining appropriate adult supervision can help ensure that swimming and boating remain enjoyable parts of the family visit."
    },
    {
        question: "Why can Om Agri Tourism be a refreshing alternative to a water park near Navi Mumbai?",
        answer: "Visitors can enjoy water-based recreation while also experiencing farm greenery and traditional countryside activities. Swimming, boating, horse riding, tractor rides, bull cart rides and bird watching create a diverse outing for people who want more than a conventional water-focused destination."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Amol Patil",
        feedback:
            "We were searching for a water outing near Navi Mumbai and had a great experience at Om Agri Tourism. Swimming and boating were enjoyable, and the peaceful farm surroundings made the day feel different from a regular water park visit. Everyone in our group had a good time.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Sonali Desai",
        feedback:
            "Our family enjoyed visiting Om Agri Tourism for a refreshing day out. The children were excited about the water activities, while we appreciated the greenery and bird watching. The combination of recreation and countryside atmosphere made the trip memorable.",
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
  "name": "Water Park Near Navi Mumbai",
  "image": "https://www.omagrotourism.com/assets/images/water-park-near-navi-mumbai.webp",
  "description": "Om Agro Tourism offers a refreshing Water Park Near Navi Mumbai experience for families, children, friends and groups looking for a fun-filled break from the busy city routine. A Water Park Resort Near Navi Mumbai can be a convenient choice for visitors who want to combine water-based recreation with open surroundings, relaxation and a countryside atmosphere. Navi Mumbai Resort Water Park searches are often made by families and groups looking for destinations where water activities and leisure experiences can be enjoyed together. People searching for a Water Park Near Navi Mumbai can consider an agro-tourism destination that provides a refreshing environment for day outings, family picnics and group recreation. A Water Park Near Panvel Navi Mumbai Maharashtra can be particularly convenient for visitors travelling from Navi Mumbai, Panvel and surrounding areas who want an enjoyable recreational destination without planning a long-distance trip. A Water Park Resort in Navi Mumbai can provide an alternative to conventional city entertainment by combining recreational experiences with greenery and open spaces. Families comparing a Water Resort in Navi Mumbai and a Water Resort Near Navi Mumbai can consider destinations that provide opportunities for water recreation, outdoor leisure and group activities. Visitors searching for a Water Park Resort in Navi Mumbai can plan family outings, children's day trips, weekend recreation, school picnics and corporate group visits according to available facilities and seasonal arrangements. The Best Water Park in Navi Mumbai can be chosen according to factors such as water recreation, family suitability, accessibility, available activities, group facilities and overall outing experience. Om Agro Tourism provides a peaceful agro-tourism atmosphere where visitors can enjoy a refreshing day surrounded by greenery, agricultural landscapes and open countryside spaces. Water-focused recreation can be combined with nature experiences, outdoor games, group interaction and relaxed leisure. Children can enjoy an entertaining outdoor environment while parents and other family members spend quality time together. Corporate teams can also consider the destination for employee outings and informal group recreation, while schools and larger groups can plan visits based on their schedules and requirements. Monsoon offers lush greenery and refreshing countryside scenery, summer is particularly suitable for visitors looking for water-based recreation, and winter can provide comfortable conditions for enjoying the surrounding outdoor environment. One-day picnic plans, family get-togethers, children's outings and weekend visits can be organized according to group size and package requirements. Visitors from Navi Mumbai, Panvel and nearby locations can consider the destination for a convenient change of scenery and a refreshing recreational experience. The combination of water recreation, greenery, open spaces and agro-tourism surroundings provides a distinctive alternative to crowded urban entertainment venues. Om Agro Tourism can therefore be considered by visitors searching for a Water Park Near Navi Mumbai, Water Park Resort Near Navi Mumbai, Water Resort in Navi Mumbai and Water Park Near Panvel Navi Mumbai Maharashtra. With its family-friendly atmosphere and nature-oriented surroundings, the destination can provide an enjoyable option for a memorable water-focused outing.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/water-park-near-navi-mumbai"
  }
};



    return (
        <div>


<Helmet>
  <title>
    Water Park Near Navi Mumbai | Best Water Resort & Water Park Near Panvel | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers a refreshing water park experience near Navi Mumbai and Panvel for family outings, children's recreation, picnics and group activities."
  />

  <meta
    name="keywords"
    content="Water Park Near Navi Mumbai, Water park resort near navi mumbai, Navi mumbai resort water park, Water park near navi mumbai, Water park near panvel navi mumbai maharashtra, Water park resort in navi mumbai, Water resort in navi mumbai, Water resort near navi mumbai, water park resort in navi mumbai, Best water park in navi mumbai, Water park near Navi Mumbai, best water park near Navi Mumbai, water park near Navi Mumbai for family, water park near Navi Mumbai for kids, water park near Navi Mumbai for children, water park resort near Navi Mumbai, water resort near Navi Mumbai, best water resort near Navi Mumbai, water park resorts near Navi Mumbai, water resorts near Navi Mumbai, water park near Panvel, water park near Panvel Navi Mumbai, water park near Panvel Maharashtra, water resort near Panvel, water park resort near Panvel, best water park near Panvel, best water resort near Panvel, water park in Panvel, water park around Navi Mumbai, water park near Mumbai Navi Mumbai, water park near Mumbai and Navi Mumbai, water park near me Navi Mumbai, water park resort near Panvel, resort with water park near Navi Mumbai, resort and water park near Navi Mumbai, water park and resort near Navi Mumbai, Navi Mumbai water park resort, Navi Mumbai water resort, Navi Mumbai water park, water park in Navi Mumbai, best water parks in Navi Mumbai, water park destination near Navi Mumbai, water park for family near Navi Mumbai, family water park near Navi Mumbai, family water resort near Navi Mumbai, kids water park near Navi Mumbai, kids water resort near Navi Mumbai, water park for children near Navi Mumbai, water park for one day picnic near Navi Mumbai, one day water park near Navi Mumbai, one day water resort near Navi Mumbai, water park day outing near Navi Mumbai, water resort day outing near Navi Mumbai, water park one day trip near Navi Mumbai, water resort one day trip near Navi Mumbai, water park picnic near Navi Mumbai, water park picnic resort near Navi Mumbai, family picnic water park near Navi Mumbai, water park for weekend near Navi Mumbai, water resort for weekend near Navi Mumbai, weekend water park near Navi Mumbai, water park with activities near Navi Mumbai, water resort with activities near Navi Mumbai, water park with swimming pool near Navi Mumbai, resort with water activities near Navi Mumbai, water activity resort near Navi Mumbai, water recreation near Navi Mumbai, water recreation resort near Navi Mumbai, best water park for family Navi Mumbai, best water resort for family Navi Mumbai, water park for corporate outing near Navi Mumbai, water resort for corporate outing near Navi Mumbai, corporate water park near Navi Mumbai, team outing water resort near Navi Mumbai, school picnic water park near Navi Mumbai, school water park resort near Navi Mumbai, water park for school picnic near Navi Mumbai, group water park near Navi Mumbai, group water resort near Navi Mumbai, water park for birthday near Navi Mumbai, water resort for birthday party near Navi Mumbai, water park celebration venue near Navi Mumbai, nature water resort near Navi Mumbai, agro tourism water resort near Navi Mumbai, countryside water resort near Navi Mumbai, peaceful water resort near Navi Mumbai, water park near Kharghar, water park near Vashi, water park near Belapur, water park near Thane Navi Mumbai, water park near Raigad"
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
                            <img src='/images/keyword/76.jpg' alt='img' className='img-fluid' />
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

export default Waterparknearnavimumbai;