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

function Aggrotourismnearpune() {


const cardData = {
    keyword: "Agro Tourism Near Pune",
    headingDescription: "Om Agro Tourism is a peaceful countryside destination for visitors searching for agro tourism near Pune, Pimpri Chinchwad, and PCMC. Guests can experience farm tours, rural activities, water recreation, games, horse riding, boating, homemade food, and nature-based experiences. The destination is suitable for families, children, school picnics, corporate outings, weekend visits, group picnics, and one-day trips where visitors can enjoy agriculture, village life, and outdoor recreation together.",

    topPlaces: [
        {
            title: "Farm Tours and Workshops",
            description: "Farm Tours and Workshops provide an engaging introduction to agricultural life at Om Agro Tourism. Visitors can learn about daily farm operations, planting, harvesting, animal care, and rural practices while experiencing the natural surroundings."
        },
        {
            title: "Bull Cart Ride",
            description: "Bull Cart Ride gives guests an opportunity to experience traditional rural transportation while exploring the farm surroundings. The leisurely ride adds an authentic village experience to family outings, school trips, and group visits."
        },
        {
            title: "Birds Watching",
            description: "Birds Watching offers a peaceful opportunity to observe beautiful birds in their natural surroundings. Visitors can slow down, enjoy the greenery, and connect with nature while taking a break from other activities."
        },
        {
            title: "Horse Riding",
            description: "Horse Riding allows visitors to explore the scenic farm landscape in an enjoyable and traditional outdoor setting. It is a memorable activity for families, children, friends, and groups looking to experience countryside recreation."
        },
        {
            title: "Tasty home made food",
            description: "Tasty home made food adds an authentic farm-style dining experience to the visit. Guests can enjoy fresh and flavorful meals after participating in farm activities, outdoor recreation, water activities, and other experiences."
        },
        {
            title: "Jungle Safari",
            description: "Jungle Safari adds an adventurous nature experience to the agro tourism visit. Families and groups can explore the surroundings and enjoy an outdoor activity that complements the peaceful farm and rural atmosphere."
        },
        {
            title: "Boating",
            description: "Boating provides a calm and enjoyable way to spend time surrounded by peaceful scenery. Families and friends can relax on the water and add a refreshing recreational experience to their agro tourism outing."
        },
        {
            title: "Tractor Ride",
            description: "Tractor Ride offers visitors a distinctive way to explore the farm and understand the feel of rural agricultural life. The experience is particularly enjoyable for children and families looking for something different during their countryside visit."
        },
        {
            title: "Indoor and Outdoor Games",
            description: "Indoor and Outdoor Games give families, school groups, corporate teams, and friends opportunities to enjoy recreational activities together. The variety of games keeps group outings engaging while complementing the farm and nature experiences."
        },
        {
            title: "Water Park Activities",
            description: "Water Park Activities provide refreshing entertainment for visitors who want to combine agro tourism with active recreation. Families and groups can enjoy water-based activities while also exploring the farm, countryside surroundings, and other attractions."
        }
    ],

    services: [
        {
            name: "Agro tourism near pune",
            description: "Agro tourism near Pune provides an opportunity to step away from busy city routines and experience farming, nature, and rural activities. Om Agro Tourism combines farm experiences with games, water activities, food, and countryside recreation."
        },
        {
            name: "Pune agro tourism",
            description: "Pune agro tourism experiences allow visitors to discover agricultural surroundings while enjoying recreational activities. Om Agro Tourism offers farm tours, workshops, rural rides, nature activities, homemade food, and outdoor entertainment."
        },
        {
            name: "Agri tourism near pune",
            description: "Agri tourism near Pune can be an enjoyable choice for families, students, and groups interested in agriculture and rural life. Om Agro Tourism provides hands-on farm experiences together with games, food, water activities, and nature."
        },
        {
            name: "Best agro tourism near pune",
            description: "The Best agro tourism near Pune can provide more than a farm visit by combining agriculture, recreation, food, and nature. Om Agro Tourism offers farm tours, workshops, rural rides, boating, games, and water-based activities."
        },
        {
            name: "One day picnic agro tourism near pune",
            description: "One day picnic agro tourism near Pune is suitable for visitors wanting a complete countryside outing without planning a long trip. Om Agro Tourism offers farm activities, games, water recreation, homemade food, and rural experiences."
        },
        {
            name: "Agri tourism pune",
            description: "Agri tourism Pune experiences give visitors a chance to explore farming and countryside traditions while enjoying recreational activities. Om Agro Tourism combines agricultural learning with nature, food, games, and outdoor attractions."
        },
        {
            name: "Agri tourism in pune",
            description: "Agri tourism in Pune can provide families, schools, and groups with an educational and recreational experience. Visitors at Om Agro Tourism can explore farm operations, participate in workshops, enjoy rural rides, and spend time in nature."
        },
        {
            name: "Agriculture tourism near pune",
            description: "Agriculture tourism near Pune helps visitors understand farming practices and rural lifestyles in a more engaging environment. Om Agro Tourism offers farm tours and workshops along with animal care experiences, recreation, food, and outdoor activities."
        },
        {
            name: "Agro farm resorts near pune",
            description: "Agro farm resorts near Pune can be ideal for visitors who want to combine rural surroundings with recreational facilities. Om Agro Tourism offers farm experiences, water activities, games, boating, homemade food, and countryside relaxation."
        },
        {
            name: "Agro tourism in pune",
            description: "Agro tourism in Pune provides an opportunity to experience farming, nature, and traditional rural activities. Om Agro Tourism creates a varied outing through farm tours, workshops, tractor rides, bull cart rides, games, and water activities."
        },
        {
            name: "Agro tourism near khadakwasla",
            description: "Visitors searching for agro tourism near Khadakwasla can consider destinations that combine farm experiences with recreational activities. Om Agro Tourism offers agricultural learning, rural activities, water recreation, homemade food, and peaceful surroundings."
        },
        {
            name: "Agro tourism near hadapsar",
            description: "Agro tourism near Hadapsar can provide a refreshing countryside experience for families and groups. Om Agro Tourism offers farm tours, workshops, games, boating, water activities, rural rides, and homemade food for a varied day outing."
        },
        {
            name: "Agro tourism pune",
            description: "Agro tourism Pune options can be suitable for visitors who want to experience rural life without giving up recreational activities. Om Agro Tourism combines agriculture, nature, games, water activities, traditional rides, and farm-style food."
        },
        {
            name: "Agro tourism resort near pune",
            description: "An agro tourism resort near Pune can offer a combination of farming experiences, nature, relaxation, and outdoor recreation. Om Agro Tourism provides farm tours, workshops, boating, games, water activities, and homemade meals."
        },
        {
            name: "Agritourism near pune",
            description: "Agritourism near Pune offers visitors an opportunity to understand rural life while enjoying a peaceful environment. Om Agro Tourism provides agricultural experiences along with horse riding, tractor rides, bull cart rides, games, boating, and food."
        },
        {
            name: "Agro tourism resorts near pune",
            description: "Agro tourism resorts near Pune can be suitable for families, schools, corporate groups, and weekend visitors. Om Agro Tourism combines agricultural activities with outdoor recreation, water attractions, games, food, and countryside experiences."
        },
        {
            name: "Best agro tourism resort near pune",
            description: "The Best agro tourism resort near Pune can provide a balanced experience of agriculture, recreation, and relaxation. Om Agro Tourism offers farm tours and workshops along with boating, games, water activities, rural rides, and homemade food."
        },
        {
            name: "Krushi paryatan near Pune",
            description: "Krushi paryatan near Pune gives visitors an opportunity to experience farming, village culture, and rural surroundings. Om Agro Tourism provides agricultural learning, traditional rides, nature activities, games, food, and recreational experiences."
        },
        {
            name: "One day agro tourism near pune",
            description: "One day agro tourism near Pune can be a convenient choice for families and groups planning a short rural getaway. Om Agro Tourism offers farm tours, workshops, games, boating, water activities, homemade food, and countryside attractions."
        },
        {
            name: "Agro Tourism Near Pimpri Chinchwad",
            description: "Agro Tourism Near Pimpri Chinchwad provides families and groups with an opportunity to experience farming and countryside recreation away from urban surroundings. Om Agro Tourism combines farm activities with games, water attractions, food, and nature."
        },
        {
            name: "Best Agro Tourism Near Pimpri Chinchwad",
            description: "The Best Agro Tourism Near Pimpri Chinchwad can offer a combination of agricultural learning and recreational activities. Om Agro Tourism provides farm tours, workshops, rural rides, boating, games, water activities, and homemade meals."
        },
        {
            name: "Agro Tourism Places Near Pimpri Chinchwad",
            description: "Agro Tourism Places Near Pimpri Chinchwad can be suitable for visitors interested in farming, village experiences, and outdoor recreation. Om Agro Tourism offers agricultural activities alongside water recreation, games, nature experiences, and traditional food."
        },
        {
            name: "Best Agro Tourism Places Near Pimpri Chinchwad",
            description: "The Best Agro Tourism Places Near Pimpri Chinchwad can provide visitors with a varied countryside experience. Om Agro Tourism combines farm learning, rural activities, boating, water park activities, games, and homemade food."
        },
        {
            name: "Agro Tourism Resort Near Pimpri Chinchwad",
            description: "An Agro Tourism Resort Near Pimpri Chinchwad can be an appealing option for families and groups seeking agriculture and recreation together. Om Agro Tourism offers farm tours, workshops, outdoor activities, water recreation, games, and food."
        },
        {
            name: "Best Agro Tourism Resort Near Pimpri Chinchwad",
            description: "The Best Agro Tourism Resort Near Pimpri Chinchwad can offer visitors an engaging mix of rural experiences and leisure activities. Om Agro Tourism provides farming experiences, traditional rides, boating, games, water activities, and homemade meals."
        },
        {
            name: "Agri Tourism Near Pimpri Chinchwad",
            description: "Agri Tourism Near Pimpri Chinchwad allows visitors to discover agricultural activities and enjoy the peaceful atmosphere of the countryside. Om Agro Tourism provides farm tours, workshops, nature experiences, rural rides, and recreational activities."
        },
        {
            name: "Agri Tourism Resort Near Pimpri Chinchwad",
            description: "An Agri Tourism Resort Near Pimpri Chinchwad can provide both agricultural learning and leisure activities. Om Agro Tourism offers farm-based experiences along with boating, water activities, games, horse riding, and traditional homemade food."
        },
        {
            name: "Agro Tourism Near PCMC",
            description: "Agro Tourism Near PCMC can provide a refreshing rural escape for families, students, employees, and groups. Om Agro Tourism combines farming experiences with outdoor recreation, water activities, games, food, and nature."
        },
        {
            name: "Agro Tourism Resort Near PCMC",
            description: "An Agro Tourism Resort Near PCMC can be suitable for visitors looking for a countryside destination with varied activities. Om Agro Tourism offers farm tours, rural rides, water attractions, boating, games, and homemade meals."
        },
        {
            name: "Agro Tourism Near Pimpri Chinchwad for Family",
            description: "Agro Tourism Near Pimpri Chinchwad for Family outings can provide activities suitable for different age groups. Om Agro Tourism offers farm tours, water activities, games, boating, horse riding, rural experiences, and homemade food."
        },
        {
            name: "Agro Tourism Near Pimpri Chinchwad for Kids",
            description: "Agro Tourism Near Pimpri Chinchwad for Kids can provide an enjoyable combination of learning and outdoor recreation. Children can experience farm activities, tractor rides, games, water activities, nature, and traditional rural experiences."
        },
        {
            name: "Agro Tourism Near Pimpri Chinchwad for One Day Picnic",
            description: "Agro Tourism Near Pimpri Chinchwad for One Day Picnic can be a convenient option for families and groups wanting several activities in one destination. Om Agro Tourism combines farming, water recreation, games, food, and nature."
        },
        {
            name: "One Day Picnic Agro Tourism Near Pimpri Chinchwad",
            description: "One Day Picnic Agro Tourism Near Pimpri Chinchwad provides an opportunity to enjoy rural surroundings without planning a lengthy getaway. Om Agro Tourism offers farm experiences, boating, games, water activities, rural rides, and homemade food."
        },
        {
            name: "Agro Tourism Near Pimpri Chinchwad With Activities",
            description: "Agro Tourism Near Pimpri Chinchwad With Activities can offer more variety than a simple farm visit. Om Agro Tourism includes farm tours, workshops, horse riding, tractor rides, bull cart rides, boating, games, and water park activities."
        },
        {
            name: "Agro Tourism Near Pimpri Chinchwad With Food",
            description: "Agro Tourism Near Pimpri Chinchwad With Food can provide visitors with both rural experiences and traditional farm-style dining. Om Agro Tourism serves tasty homemade food alongside agricultural activities, water recreation, games, and nature experiences."
        },
        {
            name: "Agro Tourism Near Pimpri Chinchwad With Stay",
            description: "Agro Tourism Near Pimpri Chinchwad With Stay can suit visitors who want to spend more time experiencing the countryside. Om Agro Tourism provides a peaceful farm environment along with agricultural activities and multiple recreational attractions."
        },
        {
            name: "Agro Tourism Near Pimpri Chinchwad for School Picnic",
            description: "Agro Tourism Near Pimpri Chinchwad for School Picnic can provide students with a combination of education and recreation. Farm tours, workshops, nature experiences, games, and rural activities can make the visit informative as well as enjoyable."
        },
        {
            name: "School Picnic Agro Tourism Near Pimpri Chinchwad",
            description: "School Picnic Agro Tourism Near Pimpri Chinchwad offers an engaging setting where students can learn about farming and rural life while enjoying outdoor activities. Om Agro Tourism combines educational farm experiences with games, nature, and recreation."
        },
        {
            name: "Agro Tourism Near Pimpri Chinchwad for Corporate Outing",
            description: "Agro Tourism Near Pimpri Chinchwad for Corporate Outing can give teams a refreshing break from office routines. Groups can enjoy farm activities, games, boating, water recreation, outdoor experiences, and homemade food in a relaxed countryside setting."
        },
        {
            name: "Agro Tourism Near Pimpri Chinchwad for Group Picnic",
            description: "Agro Tourism Near Pimpri Chinchwad for Group Picnic provides a variety of shared activities for friends, families, and organized groups. Om Agro Tourism combines farm tours, games, boating, water activities, rural rides, and food."
        },
        {
            name: "Agro Tourism Near Pimpri Chinchwad for Weekend",
            description: "Agro Tourism Near Pimpri Chinchwad for Weekend visits can provide a refreshing break from regular city life. Visitors can spend quality time enjoying farming experiences, nature, water activities, games, boating, and homemade food."
        },
        {
            name: "Farm Stay Near Pimpri Chinchwad",
            description: "Farm Stay Near Pimpri Chinchwad can be an appealing option for visitors who want to experience a peaceful agricultural environment. Om Agro Tourism provides rural surroundings along with farm activities, nature experiences, food, and recreation."
        },
        {
            name: "Agricultural Tourism Near Pimpri Chinchwad",
            description: "Agricultural Tourism Near Pimpri Chinchwad helps visitors understand farming, rural practices, and agricultural life. Om Agro Tourism offers farm tours and workshops that can be combined with games, traditional rides, water activities, and nature."
        },
        {
            name: "Village Tourism Near Pimpri Chinchwad",
            description: "Village Tourism Near Pimpri Chinchwad provides an opportunity to experience rural surroundings, traditional activities, and agricultural life. Om Agro Tourism offers bull cart rides, tractor rides, farm tours, homemade food, and nature-based experiences."
        }
    ],

    tableData: [
        ["Agro tourism near pune"],
        ["Pune agro tourism"],
        ["Agri tourism near pune"],
        ["Best agro tourism near pune"],
        ["One day picnic agro tourism near pune"],
        ["Agri tourism pune"],
        ["Agri tourism in pune"],
        ["Agriculture tourism near pune"],
        ["Agro farm resorts near pune"],
        ["Agro tourism in pune"],
        ["Agro tourism near khadakwasla"],
        ["Agro tourism near hadapsar"],
        ["Agro tourism pune"],
        ["Agro tourism resort near pune"],
        ["Agritourism near pune"],
        ["Agro tourism resorts near pune"],
        ["Best agro tourism resort near pune"],
        ["Krushi paryatan near Pune"],
        ["One day agro tourism near pune"],
        ["Agro Tourism Near Pimpri Chinchwad"],
        ["Best Agro Tourism Near Pimpri Chinchwad"],
        ["Agro Tourism Places Near Pimpri Chinchwad"],
        ["Best Agro Tourism Places Near Pimpri Chinchwad"],
        ["Agro Tourism Resort Near Pimpri Chinchwad"],
        ["Best Agro Tourism Resort Near Pimpri Chinchwad"],
        ["Agri Tourism Near Pimpri Chinchwad"],
        ["Agri Tourism Resort Near Pimpri Chinchwad"],
        ["Agro Tourism Near PCMC"],
        ["Agro Tourism Resort Near PCMC"],
        ["Agro Tourism Near Pimpri Chinchwad for Family"],
        ["Agro Tourism Near Pimpri Chinchwad for Kids"],
        ["Agro Tourism Near Pimpri Chinchwad for One Day Picnic"],
        ["One Day Picnic Agro Tourism Near Pimpri Chinchwad"],
        ["Agro Tourism Near Pimpri Chinchwad With Activities"],
        ["Agro Tourism Near Pimpri Chinchwad With Food"],
        ["Agro Tourism Near Pimpri Chinchwad With Stay"],
        ["Agro Tourism Near Pimpri Chinchwad for School Picnic"],
        ["School Picnic Agro Tourism Near Pimpri Chinchwad"],
        ["Agro Tourism Near Pimpri Chinchwad for Corporate Outing"],
        ["Agro Tourism Near Pimpri Chinchwad for Group Picnic"],
        ["Agro Tourism Near Pimpri Chinchwad for Weekend"],
        ["Farm Stay Near Pimpri Chinchwad"],
        ["Agricultural Tourism Near Pimpri Chinchwad"],
        ["Village Tourism Near Pimpri Chinchwad"]
    ],

    whychoose: [
        {
            WhyChooseheading: "Authentic Farm Experience",
            WhyChoosedescription: "Om Agro Tourism gives visitors an opportunity to experience agricultural life through farm tours and workshops. Guests can learn about planting, harvesting, animal care, and everyday farm operations while enjoying the peaceful countryside."
        },
        {
            WhyChooseheading: "Ideal for Families",
            WhyChoosedescription: "Families can enjoy a variety of activities together, including water park activities, boating, games, horse riding, tractor rides, and farm experiences. The mix of learning and recreation makes the outing engaging for both children and adults."
        },
        {
            WhyChooseheading: "Educational for School Groups",
            WhyChoosedescription: "Farm tours and workshops provide students with practical exposure to agriculture and rural life. Along with educational experiences, children can enjoy games, nature activities, traditional rides, and other recreational attractions."
        },
        {
            WhyChooseheading: "Great for Corporate Outings",
            WhyChoosedescription: "Corporate teams can use the peaceful farm environment as a refreshing break from office routines. Outdoor games, boating, water activities, farm experiences, and group-friendly attractions encourage interaction and shared experiences."
        },
        {
            WhyChooseheading: "One-Day Picnic Friendly",
            WhyChoosedescription: "A broad selection of activities makes Om Agro Tourism suitable for one-day picnics near Pune and Pimpri Chinchwad. Visitors can combine farm experiences, recreation, food, nature, and rural activities during a single visit."
        },
        {
            WhyChooseheading: "Traditional Rural Activities",
            WhyChoosedescription: "Bull cart rides and tractor rides allow guests to experience traditional and agricultural aspects of countryside life. These activities add an authentic rural touch to family outings, school trips, and group picnics."
        },
        {
            WhyChooseheading: "Recreation With Nature",
            WhyChoosedescription: "Visitors can enjoy greenery, bird watching, boating, jungle safari, farm landscapes, and open spaces while participating in recreational activities. This combination provides a refreshing alternative to conventional urban entertainment."
        },
        {
            WhyChooseheading: "Homemade Food and Countryside Hospitality",
            WhyChoosedescription: "Tasty homemade food adds a comforting farm-style dining experience to the visit. Guests can enjoy fresh meals after exploring the farm, participating in games, enjoying water activities, and experiencing the peaceful rural surroundings."
        }
    ]
};



const faqData = [
    {
        question: "Why consider Om Agri Tourism when searching for agro tourism near Pune?",
        answer: "Om Agri Tourism provides a countryside setting where visitors can spend time around farm greenery while enjoying recreational and rural experiences. It can be a refreshing choice for families, friends and groups looking to experience a slower pace away from the busy city environment."
    },
    {
        question: "What can visitors experience at Om Agri Tourism?",
        answer: "Guests can enjoy activities such as swimming, boating, horse riding, tractor rides, bull cart rides and bird watching. These experiences allow visitors to combine outdoor recreation with opportunities to explore and appreciate a farm-oriented countryside environment."
    },
    {
        question: "Is Om Agri Tourism suitable for a day trip near Pune?",
        answer: "People planning a short escape from Pune can consider Om Agri Tourism for a day surrounded by greenery and open farm surroundings. Families, friends and small groups can plan activities according to their interests and spend quality time together away from the city's routine."
    },
    {
        question: "How can visitors experience rural life at Om Agri Tourism?",
        answer: "The farm environment gives visitors an opportunity to participate in activities connected with traditional countryside life. Bull cart rides and tractor rides can provide a closer experience of rural transportation, while bird watching allows guests to observe the natural surroundings."
    },
    {
        question: "Can families enjoy agro tourism activities near Pune?",
        answer: "Families can choose from a range of activities suitable for different age groups and interests. Children and adults can enjoy swimming, boating or horse riding where appropriate, while tractor rides, bull cart rides and bird watching provide additional countryside experiences."
    },
    {
        question: "What makes Om Agri Tourism different from a regular picnic destination?",
        answer: "The farm-focused environment adds a rural and nature-oriented dimension to the outing. Instead of simply spending time at a recreational venue, visitors can experience greenery, traditional rides, outdoor activities and the relaxed atmosphere associated with countryside tourism."
    },
    {
        question: "Can children learn about nature during an agro tourism visit?",
        answer: "A visit to the farm can encourage children to observe their surroundings and become more interested in rural environments. Bird watching, tractor rides and bull cart rides can provide engaging experiences while giving children exposure to aspects of countryside life that may be different from their everyday surroundings."
    },
    {
        question: "Is homemade food part of the Om Agri Tourism experience?",
        answer: "Homemade food can complement the traditional farm atmosphere and give visitors an opportunity to enjoy a shared meal in a relaxed setting. Taking a food break between activities can make the countryside outing more comfortable and enjoyable for families and groups."
    },
    {
        question: "Can groups enjoy outdoor activities during an agro tourism visit near Pune?",
        answer: "Groups can create a varied outing by combining active experiences such as swimming, boating and horse riding with slower activities like bird watching. Tractor rides and bull cart rides can further add a distinctive rural element to the group experience."
    },
    {
        question: "Why can Om Agri Tourism be a memorable agro tourism destination near Pune?",
        answer: "The combination of farm greenery, rural experiences, outdoor recreation and peaceful surroundings gives visitors several ways to enjoy their time. Swimming, boating, horse riding, bird watching, tractor rides and bull cart rides can make the visit engaging for families, friends and groups."
    }
];

const testimonials = [
    {
        id: 1,
        name: "Mr. Sachin Bhandari",
        feedback:
            "Our family wanted to experience something different from the usual city outing, so we visited Om Agri Tourism. The children enjoyed the tractor ride and bird watching, while we appreciated the peaceful farm surroundings and homemade food. It was a refreshing countryside experience for everyone.",
        rating: 5
    },
    {
        id: 2,
        name: "Mrs. Vaishali Pawar",
        feedback:
            "Om Agri Tourism gave our group a wonderful opportunity to enjoy rural experiences near Pune. We had fun with boating and horse riding and also enjoyed the traditional bull cart ride. The greenery and relaxed atmosphere made the entire day feel refreshing and memorable.",
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
  "name": "Agro Tourism Near Pune",
  "image": "https://www.omagrotourism.com/assets/images/agro-tourism-near-pune.webp",
  "description": "Om Agro Tourism offers an immersive Agro Tourism Near Pune experience for families, children, couples, school groups, corporate teams and visitors looking for a peaceful break surrounded by agriculture, greenery and countryside landscapes. Agro Tourism Near Pune provides an opportunity to experience rural surroundings while enjoying recreation, nature, traditional agricultural settings and relaxed outdoor leisure away from the city's busy routine. Visitors searching for Pune Agro Tourism can consider a destination where agriculture and tourism come together through open spaces, farm surroundings and nature-oriented experiences. Agri Tourism Near Pune and Agri Tourism Pune are suitable searches for families and groups interested in discovering rural life while planning a convenient one-day outing or longer countryside visit. People looking for Agri Tourism in Pune can enjoy a different type of recreational experience that combines agricultural landscapes, nature observation and outdoor activities. Agriculture Tourism Near Pune can be especially appealing to children and families who want to introduce younger visitors to farming environments and the natural processes associated with rural life. The Best Agro Tourism Near Pune can be considered by visitors based on accessibility, natural surroundings, family suitability, available activities, food arrangements and overall outing experience. A One Day Picnic Agro Tourism Near Pune option can provide a practical way to spend a complete day enjoying greenery, open spaces, group recreation and countryside relaxation without requiring a long journey. Agro Farm Resorts Near Pune can also suit visitors who want to combine agricultural surroundings with comfortable leisure, group gatherings and available recreational facilities. Om Agro Tourism provides an environment where visitors can enjoy nature, agriculture and outdoor recreation in a relaxed setting. Families can plan picnics, children's outings, weekend visits and family get-togethers, while couples can enjoy peaceful countryside surroundings away from crowded urban areas. School groups can use the destination for experiential learning, nature observation and agricultural exposure, giving students an opportunity to understand rural surroundings beyond the classroom. Corporate teams can consider agro-tourism for employee outings, team interaction and informal group activities in an open environment. Seasonal visits bring different experiences, with monsoon creating lush greenery, winter providing pleasant conditions for outdoor leisure and summer outings being planned around suitable timings. Visitors can also enjoy fresh countryside surroundings, group games, nature walks and other activities according to the available facilities and package arrangements. Food, group size, activity preferences and picnic requirements can be discussed while planning the visit. The destination offers an alternative to conventional urban entertainment by bringing agriculture, nature, recreation and rural experiences together. Visitors from Pune, Pimpri Chinchwad and surrounding areas can consider Om Agro Tourism for one-day picnics, family outings, educational visits, corporate gatherings and peaceful weekend plans. With its combination of agricultural landscapes, open surroundings and recreational possibilities, Om Agro Tourism can be a suitable choice for people searching for Agro Tourism Near Pune, Pune Agro Tourism, Agri Tourism Near Pune, Agriculture Tourism Near Pune and Agro Farm Resorts Near Pune.",
  "brand": {
    "@type": "Brand",
    "name": "Om Agro Tourism"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Contact for Picnic Package Pricing",
    "availability": "https://schema.org/InStock",
    "url": "https://www.omagrotourism.com/agro-tourism-near-pune"
  }
};







    return (
        <div>

<Helmet>
  <title>
    Agro Tourism Near Pune | Best Agri Tourism, Farm Resort & One Day Picnic | +91 7066665554
  </title>

  <meta
    name="description"
    content="Om Agro Tourism offers an authentic agro tourism and agri tourism experience near Pune with farm surroundings, nature, one-day picnics, family outings and rural activities."
  />

  <meta
    name="keywords"
    content="Agro Tourism Near Pune, Agro tourism near pune, Pune agro tourism, Agri tourism near pune, Best agro tourism near pune, One day picnic agro tourism near pune, Agri tourism pune, Agri tourism in pune, Agriculture tourism near pune, Agro farm resorts near pune, Agro tourism in Pune, best agro tourism in Pune, agro tourism places near Pune, agro tourism spots near Pune, agro tourism resorts near Pune, agro tourism resort near Pune, agro tourism destination near Pune, agro tourism near Pune for family, agro tourism near Pune for couples, agro tourism near Pune for kids, agro tourism near Pune for school picnic, agro tourism near Pune for corporate outing, family agro tourism near Pune, family agro tourism Pune, agri tourism near Pune for family, agri tourism near Pune for couples, agri tourism resort near Pune, agri tourism places near Pune, agri tourism spots near Pune, agri tourism destination near Pune, agricultural tourism near Pune, agriculture tourism Pune, agriculture tourism in Pune, agricultural tourism places near Pune, farm tourism near Pune, farm tourism Pune, farm tourism resort near Pune, farm tourism places near Pune, farm stay near Pune, farm stay resort near Pune, farm resort near Pune, farm resorts near Pune, agro farm near Pune, agro farm resort near Pune, agro farm resorts near Pune, farm house agro tourism near Pune, countryside resort near Pune, rural tourism near Pune, rural tourism Pune, rural tourism near Pune for family, village tourism near Pune, village tourism Pune, rural experience near Pune, one day agro tourism near Pune, one day agri tourism near Pune, one day agro tourism Pune, one day picnic near Pune agro tourism, one day picnic agro tourism near Pune, one day picnic resort near Pune, one day picnic farm resort near Pune, one day trip agro tourism near Pune, one day trip near Pune farm, family picnic agro tourism near Pune, family picnic farm resort near Pune, family outing agro tourism near Pune, family day trip agro tourism near Pune, family weekend agro tourism near Pune, weekend agro tourism near Pune, weekend farm resort near Pune, weekend farm stay near Pune, agro tourism for family near Pune, agro tourism for children near Pune, agro tourism for kids near Pune, agro tourism for school students near Pune, school picnic agro tourism near Pune, educational agro tourism near Pune, educational farm visit near Pune, agricultural educational tour near Pune, farm visit near Pune, farm visit for school students near Pune, nature agro tourism near Pune, nature farm resort near Pune, nature tourism near Pune, nature outing near Pune, agro tourism with activities near Pune, agro tourism resort with activities near Pune, farm resort with activities near Pune, adventure agro tourism near Pune, agro tourism for corporate outing near Pune, corporate agro tourism near Pune, corporate outing farm resort near Pune, team outing agro tourism near Pune, team outing farm resort near Pune, agro tourism near Pimpri Chinchwad, agri tourism near Pimpri Chinchwad, agro tourism resort near Pimpri Chinchwad, farm resort near Pimpri Chinchwad, best agro tourism near Pimpri Chinchwad, agro tourism near PCMC, agri tourism near PCMC, best agro tourism near Pune, peaceful agro tourism near Pune, natural agro tourism near Pune, authentic agro tourism near Pune, best agri tourism near Pune, best farm resort near Pune"
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
                            <img src='/images/keyword/78.jpg' alt='img' className='img-fluid' />
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

export default Aggrotourismnearpune;