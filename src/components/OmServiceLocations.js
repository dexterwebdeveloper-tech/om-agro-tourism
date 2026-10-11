// import React from "react";
// import { Link } from "react-router-dom";
// import "./OmServiceLocations.css";

// const OmServiceLocations = () => {
//   const sections = [
//     {
//       icon: "fa-solid fa-location-dot",
//       label: "Areas We Serve",
//       title: "Pune & PCMC Locations",
//       links: [
//         ["one-day-picnic-spot-near-pimpri-chinchwad", "Pimpri Chinchwad"],
//         ["one-day-picnic-spot-near-bhosari", "Bhosari"],
//         ["one-day-picnic-spot-near-nigdi", "Nigdi"],
//         ["one-day-picnic-spot-near-akurdi", "Akurdi"],
//         ["picnic-spot-near-sangvi-pune", "Sangvi"],
//         ["one-day-picnic-spot-near-wakad", "Wakad"],
//         ["one-day-picnic-spot-near-tathawade", "Tathawade"],
//         ["one-day-picnic-spot-near-ravet", "Ravet"],
//         ["one-day-picnic-spot-near-chakan", "Chakan"],
//         ["one-day-picnic-spot-near-moshi", "Moshi"],
//         ["one-day-picnic-spot-near-talawade", "Talawade"],
//         ["one-day-picnic-spot-near-chikhali-moshi", "Chikhali"],
//         ["one-day-picnic-spot-near-balewadi", "Balewadi"],
//         ["one-day-picnic-spot-near-baner", "Baner"],
//         ["one-day-picnic-spot-near-dighi-alandi", "Dighi"],
//         ["picnic-spot-near-alandi", "Alandi"],
//         ["picnic-spot-near-punawale", "Punawale"],
//         ["day-picnic-spot-near-pimple-saudagar", "Pimple Saudagar"],
//         ["picnic-spot-near-pimple-gurav", "Pimple Gurav"],
//         ["picnic-spot-near-pimple-nilakh", "Pimple Nilakh"],
//         ["picnic-spot-near-rahatani", "Rahatani"],
//         ["picnic-spot-near-kalewadi", "Kalewadi"],
//         ["picnic-spot-near-thergaon", "Thergaon"],
//         ["picnic-spot-near-dange-chowk", "Dange Chowk"],
//       ],
//     },

//     {
//       icon: "fa-solid fa-map-location-dot",
//       label: "Popular Areas",
//       title: "Picnic Spots Near Pune",
//       links: [
//         ["picnic-spot-near-hadapsar", "Hadapsar"],
//         ["picnic-spot-near-kharadi", "Kharadi"],
//         ["picnic-spot-near-viman-nagar-pune", "Viman Nagar"],
//         ["picnic-spot-near-koregaon-park-pune", "Koregaon Park"],
//         ["picnic-spot-near-kalyani-nagar-pune", "Kalyani Nagar"],
//         ["picnic-spot-near-wagholi", "Wagholi"],
//         ["picnic-spot-near-lohegaon", "Lohegaon"],
//         ["picnic-spot-near-yerawada", "Yerawada"],
//         ["picnic-spot-near-aundh-pune", "Aundh"],
//         ["picnic-spot-near-kothrud-pune", "Kothrud"],
//         ["picnic-spot-near-warje-pune", "Warje"],
//         ["picnic-spot-near-bavdhan", "Bavdhan"],
//         ["picnic-spot-near-pashan-pune", "Pashan"],
//         ["picnic-spot-near-sinhagad-road", "Sinhagad Road"],
//         ["picnic-spot-near-katraj", "Katraj"],
//         ["picnic-spot-near-kondhwa", "Kondhwa"],
//         ["picnic-spot-near-undri", "Undri"],
//         ["picnic-spot-near-bibvewadi-pune", "Bibvewadi"],
//         ["picnic-spot-near-nibm-pune", "NIBM"],
//         ["picnic-spot-near-shivajinagar", "Shivajinagar"],
//         ["picnic-spot-near-magarpatta", "Magarpatta"],
//         ["picnic-spot-near-pirangut", "Pirangut"],
//         ["picnic-spot-near-bhugaon", "Bhugaon"],
//         ["picnic-spot-near-lavale", "Lavale"],
//       ],
//     },

//     {
//       icon: "fa-solid fa-school",
//       label: "Student Trips",
//       title: "School Picnic Destinations",
//       links: [
//         ["school-picnic-spots-near-pune-for-students", "Pune"],
//         ["school-picnic-spots-near-pimpri-chinchwad", "Pimpri Chinchwad"],
//         ["school-picnic-spots-near-chakan", "Chakan"],
//         ["school-picnic-spots-near-talegaon-dabhade", "Talegaon Dabhade"],
//         ["school-picnic-spots-near-lonavala", "Lonavala"],
//         ["school-picnic-spot-in-khed-pune", "Khed"],
//         ["school-picnic-spot-in-junnar", "Junnar"],
//         ["school-picnic-spot-in-ambegaon", "Ambegaon"],
//         ["school-picnic-spot-in-maval", "Maval"],
//         ["school-picnic-spot-in-mulshi-pune", "Mulshi"],
//         ["school-picnic-spot-in-velhe", "Velhe"],
//         ["school-picnic-spot-in-bhor", "Bhor"],
//         ["school-picnic-spot-in-purandar", "Purandar"],
//         ["school-picnic-spot-in-baramati", "Baramati"],
//         ["school-picnic-spot-in-daund", "Daund"],
//         ["school-picnic-spot-in-indapur", "Indapur"],
//         ["school-picnic-spot-in-shirur", "Shirur"],
//         ["school-picnic-spot-in-nashik", "Nashik"],
//         ["school-picnic-spot-in-ahmednagar", "Ahilyanagar"],
//         ["school-picnic-spots-near-mumbai", "Mumbai"],
//         ["school-picnic-spots-near-navi-mumbai", "Navi Mumbai"],
//       ],
//     },

//     {
//       icon: "fa-solid fa-people-group",
//       label: "Group Experiences",
//       title: "Family & Corporate Outings",
//       links: [
//         ["one-day-picnic-spot-near-pune-for-family", "Family Picnic Near Pune"],
//         ["team-outing-places-near-pune", "Team Outing Near Pune"],
//         ["corporate-outing-resorts-near-pune", "Corporate Outing Resorts"],
//         ["corporate-party-places-in-pune", "Corporate Party Places"],
//         ["family-resorts-near-pune", "Family Resorts Near Pune"],
//         ["best-family-resort-near-pune", "Best Family Resort Near Pune"],
//         ["budget-resorts-near-pune-for-family", "Budget Family Resorts"],
//         ["resorts-near-pune-for-family", "Resorts Near Pune for Family"],
//         ["one-day-getaways-near-pune", "One Day Getaways"],
//         ["one-night-stay-near-pune", "One Night Stay Near Pune"],
//         ["resort-with-activities-near-pune", "Resorts With Activities"],
//         ["nature-resorts-near-pune-for-weekend", "Nature Weekend Resorts"],
//       ],
//     },

//     {
//       icon: "fa-solid fa-water-ladder",
//       label: "Fun & Recreation",
//       title: "Water Park & Activity Experiences",
//       links: [
//         ["water-park-near-pune", "Water Park Near Pune"],
//         ["water-park-near-pimpri-chinchwad", "Water Park Near Pimpri Chinchwad"],
//         ["water-park-near-navi-mumbai", "Water Park Near Navi Mumbai"],
//         ["water-resort-in-pune", "Water Resort in Pune"],
//         ["best-resorts-in-pune-with-swimming-pool", "Resorts With Swimming Pool"],
//         ["activities-resort-near-pune", "Activity Resorts Near Pune"],
//         ["one-day-adventure-resorts-near-pune", "Adventure Resorts Near Pune"],
//         ["adventure-park-near-pune", "Adventure Park Near Pune"],
//         ["camping-places-near-pune", "Camping Places Near Pune"],
//         ["morachi-chincholi-water-park", "Morachi Chincholi Water Park"],
//       ],
//     },

//     {
//       icon: "fa-solid fa-leaf",
//       label: "Farm Experiences",
//       title: "Agro Tourism & Seasonal Experiences",
//       links: [
//         ["agro-tourism-near-pune", "Agro Tourism Near Pune"],
//         ["agro-tourism-near-pune-for-family", "Agro Tourism for Family"],
//         ["krushi-paryatan-kendra-near-pune", "Krushi Paryatan Kendra"],
//         ["farm-house-on-rent-in-pune", "Farm House Near Pune"],
//         ["hurda-party-places-near-pune", "Hurda Party Places Near Pune"],
//         ["hurda-party-near-shikrapur-pune", "Hurda Party Near Shikrapur"],
//         ["mango-mahotsav-in-pune", "Mango Mahotsav in Pune"],
//         ["one-day-trip-near-pune", "One Day Trip Near Pune"],
//         ["one-day-picnic-resorts-near-pune", "One Day Picnic Resorts"],
//         ["agro-tourism-near-mumbai-for-family", "Agro Tourism Near Mumbai"],
//       ],
//     },

//     {
//       icon: "fa-solid fa-heart",
//       label: "Special Celebrations",
//       title: "Wedding & Event Venues",
//       links: [
//         ["destination-wedding-near-pune", "Destination Wedding Near Pune"],
//         ["destination-wedding-in-pune", "Destination Wedding in Pune"],
//         ["wedding-destination-near-pimpri-chinchwad", "Wedding Destination Near PCMC"],
//         ["wedding-locations-in-pune", "Wedding Locations in Pune"],
//         ["wedding-venues-in-pune", "Wedding Venues in Pune"],
//         ["wedding-lawns-in-pune", "Wedding Lawns in Pune"],
//         ["marriage-hall-in-pune", "Marriage Hall in Pune"],
//         ["banquet-halls-in-pimpri-chinchwad", "Banquet Halls in PCMC"],
//       ],
//     },

//     {
//       icon: "fa-solid fa-mountain-sun",
//       label: "Nearby Getaways",
//       title: "Popular Tourism Locations",
//       links: [
//         ["one-day-picnic-spot-near-lonavala", "Lonavala"],
//         ["picnic-spot-near-kamshet", "Kamshet"],
//         ["picnic-spot-near-pawna-lake", "Pawna Lake"],
//         ["panshet-picnic-spot", "Panshet"],
//         ["picnic-spot-near-khadakwasla", "Khadakwasla"],
//         ["picnic-spot-near-saswad", "Saswad"],
//         ["picnic-spot-near-shikrapur", "Shikrapur"],
//         ["picnic-spot-near-sanaswadi", "Sanaswadi"],
//         ["picnic-spot-near-manchar", "Manchar"],
//         ["picnic-spot-near-narayangaon", "Narayangaon"],
//         ["picnic-spot-near-talegaon-dabhade", "Talegaon Dabhade"],
//         ["picnic-spot-near-mamurdi", "Mamurdi"],
//         ["picnic-spot-near-marunji", "Marunji"],
//         ["picnic-spot-near-maan-hinjewadi", "Maan - Hinjewadi"],
//       ],
//     },
//   ];

//   return (
//     <section className="omSeoArea">
//       <div className="container">

//         {/* Top Heading */}
//         <div className="omSeoHeading">
//           <div className="omSeoHeadingIcon">
//             <i className="fa-solid fa-location-dot"></i>
//           </div>

//           <div>
//             <span>EXPLORE MORE WITH OM AGRO TOURISM</span>

//             <h2>
//               Popular Services & Locations
//               <strong> Near Pune</strong>
//             </h2>

//             <p>
//               Explore popular picnic destinations, school trips, family
//               outings, corporate experiences, agro tourism activities and
//               nearby locations served by Om Agro Tourism.
//             </p>
//           </div>
//         </div>

//         {/* SEO Rows */}
//         <div className="omSeoRows">
//           {sections.map((section, index) => (
//             <div className="omSeoRow" key={index}>

//               {/* Left Title */}
//               <div className="omSeoRowTitle">
//                 <div className="omSeoRowIcon">
//                   <i className={section.icon}></i>
//                 </div>

//                 <div>
//                   <span>{section.label}</span>
//                   <h3>{section.title}</h3>
//                 </div>
//               </div>

//               {/* Right Links */}
//               <div className="omSeoLinks">
//                 {section.links.map(([url, title], linkIndex) => (
//                   <React.Fragment key={linkIndex}>
//                     <Link to={`/${url}`}>
//                       {title}
//                     </Link>

//                     {linkIndex !== section.links.length - 1 && (
//                       <span className="omSeoDot">•</span>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </div>

//             </div>
//           ))}
//         </div>

//         {/* Bottom Contact Strip */}
//         <div className="omSeoContact">
//           <div className="omSeoContactLeft">
//             <div className="omSeoContactIcon">
//               <i className="fa-solid fa-leaf"></i>
//             </div>

//             <div>
//               <span>PLAN YOUR NEXT OUTING</span>
//               <h3>Experience Nature, Farm Life & Fun Near Pune</h3>
//               <p>
//                 Family Picnic • School Picnic • Corporate Outing •
//                 Water Activities • Farm Experiences
//               </p>
//             </div>
//           </div>

//           <div className="omSeoContactButtons">
//             <a
//               href="tel:+917066665554"
//               className="omSeoCall"
//             >
//               <i className="fa-solid fa-phone"></i>

//               <span>
//                 <small>CALL NOW</small>
//                 +91 70666 65554
//               </span>
//             </a>

//             <a
//               href="https://wa.me/917066665554"
//               target="_blank"
//               rel="noreferrer"
//               className="omSeoWhatsapp"
//             >
//               <i className="fa-brands fa-whatsapp"></i>
//               WhatsApp
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default OmServiceLocations;


import React from "react";
import { Link } from "react-router-dom";
import "./OmServiceLocations.css";

const OmServiceLocations = () => {
  const sections = [
    {
      icon: "fa-solid fa-location-dot",
      label: "Areas We Serve",
      title: "Pune & PCMC Locations",
      links: [
        ["one-day-picnic-spot-near-pimpri-chinchwad", "Pimpri Chinchwad"],
        ["one-day-picnic-spot-near-bhosari", "Bhosari"],
        ["one-day-picnic-spot-near-nigdi", "Nigdi"],
        ["one-day-picnic-spot-near-akurdi", "Akurdi"],
        ["picnic-spot-near-sangvi-pune", "Sangvi"],
        ["one-day-picnic-spot-near-wakad", "Wakad"],
        ["one-day-picnic-spot-near-tathawade", "Tathawade"],
        ["one-day-picnic-spot-near-ravet", "Ravet"],
        ["one-day-picnic-spot-near-chakan", "Chakan"],
        ["one-day-picnic-spot-near-moshi", "Moshi"],
        ["one-day-picnic-spot-near-talawade", "Talawade"],
        ["one-day-picnic-spot-near-chikhali-moshi", "Chikhali"],
        ["one-day-picnic-spot-near-balewadi", "Balewadi"],
        ["one-day-picnic-spot-near-baner", "Baner"],
        ["one-day-picnic-spot-near-dighi-alandi", "Dighi"],
        ["picnic-spot-near-alandi", "Alandi"],
        ["picnic-spot-near-punawale", "Punawale"],
        ["day-picnic-spot-near-pimple-saudagar", "Pimple Saudagar"],
        ["picnic-spot-near-pimple-gurav", "Pimple Gurav"],
        ["picnic-spot-near-pimple-nilakh", "Pimple Nilakh"],
        ["picnic-spot-near-rahatani", "Rahatani"],
        ["picnic-spot-near-kalewadi", "Kalewadi"],
        ["picnic-spot-near-thergaon", "Thergaon"],
        ["picnic-spot-near-dange-chowk", "Dange Chowk"],
      ],
    },

    {
      icon: "fa-solid fa-map-location-dot",
      label: "Popular Areas",
      title: "Picnic Spots Near Pune",
      links: [
        ["picnic-spot-near-hadapsar", "Hadapsar"],
        ["picnic-spot-near-kharadi", "Kharadi"],
        ["picnic-spot-near-viman-nagar-pune", "Viman Nagar"],
        ["picnic-spot-near-koregaon-park-pune", "Koregaon Park"],
        ["picnic-spot-near-kalyani-nagar-pune", "Kalyani Nagar"],
        ["picnic-spot-near-wagholi", "Wagholi"],
        ["picnic-spot-near-lohegaon", "Lohegaon"],
        ["one-day-picnic-spot-near-yerawada-pune", "Yerawada"],
        ["picnic-spot-near-aundh-pune", "Aundh"],
        ["picnic-spot-near-kothrud-pune", "Kothrud"],
        ["picnic-spot-near-warje-pune", "Warje"],
        ["picnic-spot-near-bavdhan", "Bavdhan"],
        ["picnic-spot-near-pashan-pune", "Pashan"],
        ["picnic-spot-near-sinhagad-road", "Sinhagad Road"],
        ["picnic-spot-near-katraj", "Katraj"],
        ["picnic-spot-near-kondhwa", "Kondhwa"],
        ["picnic-spot-near-undri", "Undri"],
        ["picnic-spot-near-bibvewadi-pune", "Bibvewadi"],
        ["picnic-spot-near-nibm-pune", "NIBM"],
        ["picnic-spot-near-shivajinagar", "Shivajinagar"],
        ["picnic-spot-near-magarpatta", "Magarpatta"],
        ["picnic-spot-near-pirangut", "Pirangut"],
        ["picnic-spot-near-bhugaon", "Bhugaon"],
        ["picnic-spot-near-lavale", "Lavale"],
      ],
    },

    {
      icon: "fa-solid fa-school",
      label: "Student Trips",
      title: "School Picnic Destinations",
      links: [
        ["school-picnic-spots-near-pune-for-students", "Pune"],
        ["school-picnic-spots-near-pimpri-chinchwad", "Pimpri Chinchwad"],
        ["school-picnic-spots-near-chakan", "Chakan"],
        ["school-picnic-spots-near-talegaon-dabhade", "Talegaon Dabhade"],
        ["school-picnic-spots-near-lonavala", "Lonavala"],
        ["school-picnic-spot-in-khed-pune", "Khed"],
        ["school-picnic-spot-in-junnar", "Junnar"],
        ["school-picnic-spot-in-ambegaon", "Ambegaon"],
        ["school-picnic-spot-in-maval", "Maval"],
        ["school-picnic-spot-in-mulshi-pune", "Mulshi"],
        ["school-picnic-spot-in-velhe", "Velhe"],
        ["school-picnic-spot-in-bhor", "Bhor"],
        ["school-picnic-spot-in-purandar", "Purandar"],
        ["school-picnic-spot-in-baramati", "Baramati"],
        ["school-picnic-spot-in-daund", "Daund"],
        ["school-picnic-spot-in-indapur", "Indapur"],
        ["school-picnic-spot-in-shirur", "Shirur"],
        ["school-picnic-spot-in-nashik", "Nashik"],
        ["school-picnic-spot-in-ahmednagar", "Ahilyanagar"],
        ["school-picnic-spots-near-mumbai", "Mumbai"],
        ["school-picnic-spots-near-navi-mumbai", "Navi Mumbai"],
      ],
    },

    {
      icon: "fa-solid fa-people-group",
      label: "Group Experiences",
      title: "Family & Corporate Outings",
      links: [
        ["one-day-picnic-spot-near-pune-for-family", "Family Picnic Near Pune"],
        ["team-outing-places-near-pune", "Team Outing Near Pune"],
        ["corporate-outing-resorts-near-pune", "Corporate Outing Resorts"],
        ["corporate-party-places-in-pune", "Corporate Party Places"],
        ["family-resorts-near-pune", "Family Resorts Near Pune"],
        ["best-family-resort-near-pune", "Best Family Resort Near Pune"],
        ["budget-resorts-near-pune-for-family", "Budget Family Resorts"],
        ["resorts-near-pune-for-family", "Resorts Near Pune for Family"],
        ["one-day-getaways-near-pune", "One Day Getaways"],
        ["one-night-stay-near-pune", "One Night Stay Near Pune"],
        ["resort-with-activities-near-pune", "Resorts With Activities"],
        ["nature-resorts-near-pune-for-weekend", "Nature Weekend Resorts"],
      ],
    },

    {
      icon: "fa-solid fa-water-ladder",
      label: "Fun & Recreation",
      title: "Water Park & Activity Experiences",
      links: [
        ["water-park-near-pune", "Water Park Near Pune"],
        [
          "water-park-near-pimpri-chinchwad",
          "Water Park Near Pimpri Chinchwad",
        ],
        ["water-park-near-navi-mumbai", "Water Park Near Navi Mumbai"],
        ["water-resort-in-pune", "Water Resort in Pune"],
        [
          "best-resorts-in-pune-with-swimming-pool",
          "Resorts With Swimming Pool",
        ],
        ["activities-resort-near-pune", "Activity Resorts Near Pune"],
        [
          "one-day-adventure-resorts-near-pune",
          "Adventure Resorts Near Pune",
        ],
        ["adventure-park-near-pune", "Adventure Park Near Pune"],
        ["camping-places-near-pune", "Camping Places Near Pune"],
        ["morachi-chincholi-water-park", "Morachi Chincholi Water Park"],
      ],
    },

    {
      icon: "fa-solid fa-leaf",
      label: "Farm Experiences",
      title: "Agro Tourism & Seasonal Experiences",
      links: [
        ["agro-tourism-near-pune", "Agro Tourism Near Pune"],
        ["agro-tourism-near-pune-for-family", "Agro Tourism for Family"],
        ["krushi-paryatan-kendra-near-pune", "Krushi Paryatan Kendra"],
        ["farm-house-on-rent-in-pune", "Farm House Near Pune"],
        ["hurda-party-places-near-pune", "Hurda Party Places Near Pune"],
        ["hurda-party-near-shikrapur-pune", "Hurda Party Near Shikrapur"],
        ["mango-mahotsav-in-pune", "Mango Mahotsav in Pune"],
        ["one-day-trip-near-pune", "One Day Trip Near Pune"],
        ["one-day-picnic-resorts-near-pune", "One Day Picnic Resorts"],
        ["agro-tourism-near-mumbai-for-family", "Agro Tourism Near Mumbai"],
      ],
    },

    {
      icon: "fa-solid fa-heart",
      label: "Special Celebrations",
      title: "Wedding & Event Venues",
      links: [
        ["destination-wedding-near-pune", "Destination Wedding Near Pune"],
        ["destination-wedding-in-pune", "Destination Wedding in Pune"],
        [
          "wedding-destination-near-pimpri-chinchwad",
          "Wedding Destination Near PCMC",
        ],
        ["wedding-locations-in-pune", "Wedding Locations in Pune"],
        ["wedding-venues-in-pune", "Wedding Venues in Pune"],
        ["wedding-lawns-in-pune", "Wedding Lawns in Pune"],
        ["marriage-hall-in-pune", "Marriage Hall in Pune"],
        ["banquet-halls-in-pimpri-chinchwad", "Banquet Halls in PCMC"],
      ],
    },

    {
      icon: "fa-solid fa-mountain-sun",
      label: "Nearby Getaways",
      title: "Popular Tourism Locations",
      links: [
        ["one-day-picnic-spot-near-lonavala", "Lonavala"],
        ["picnic-spot-near-kamshet", "Kamshet"],
        ["picnic-spot-near-pawna-lake", "Pawna Lake"],
        ["panshet-picnic-spot", "Panshet"],
        ["picnic-spot-near-khadakwasla", "Khadakwasla"],
        ["picnic-spot-near-saswad", "Saswad"],
        ["picnic-spot-near-shikrapur", "Shikrapur"],
        ["picnic-spot-near-sanaswadi", "Sanaswadi"],
        ["picnic-spot-near-manchar", "Manchar"],
        ["picnic-spot-near-narayangaon", "Narayangaon"],
        ["picnic-spot-near-talegaon-dabhade", "Talegaon Dabhade"],
        ["picnic-spot-near-mamurdi", "Mamurdi"],
        ["picnic-spot-near-marunji", "Marunji"],
        ["picnic-spot-near-maan-hinjewadi", "Maan - Hinjewadi"],
      ],
    },
  ];

  return (
    <section className="omSeoArea">
      <div className="container">
        {/* ================= HEADING ================= */}
        <div className="omSeoHeading">
          <div className="omSeoHeadingIcon">
            <i className="fa-solid fa-location-dot"></i>
          </div>

          <div className="omSeoHeadingContent">
            <span>EXPLORE MORE WITH OM AGRO TOURISM</span>

            <h2>
              Popular Services & Locations
              <strong> Near Pune</strong>
            </h2>

            <p>
              Find picnic spots, school trip destinations, family outings,
              corporate experiences, water activities, agro tourism
              experiences and popular getaway locations around Pune and PCMC.
            </p>
          </div>
        </div>

        {/* ================= SERVICE ROWS ================= */}
        <div className="omSeoRows">
          {sections.map((section, index) => (
            <div className="omSeoRow" key={index}>
              {/* LEFT */}
              <div className="omSeoRowTitle">
                <div className="omSeoRowIcon">
                  <i className={section.icon}></i>
                </div>

                <div className="omSeoRowTitleText">
                  <span>{section.label}</span>
                  <h3>{section.title}</h3>
                </div>
              </div>

              {/* RIGHT BUTTON LINKS */}
              <div className="omSeoLinks">
                {section.links.map(([url, title], linkIndex) => (
                  <Link
                    to={`/${url}`}
                    className="omSeoLinkBtn"
                    key={linkIndex}
                  >
                    <span className="omSeoLinkPin">
                      <i className="fa-solid fa-location-dot"></i>
                    </span>

                    <span className="omSeoLinkText">{title}</span>

                    <span className="omSeoLinkArrow">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="omSeoContact">
          <div className="omSeoContactLeft">
            <div className="omSeoContactIcon">
              <i className="fa-solid fa-leaf"></i>
            </div>

            <div>
              <span>PLAN YOUR NEXT OUTING</span>

              <h3>Experience Nature, Farm Life & Fun Near Pune</h3>

              <p>
                Family Picnic • School Picnic • Corporate Outing • Water
                Activities • Farm Experiences
              </p>
            </div>
          </div>

          <div className="omSeoContactButtons">
            <a href="tel:+917066665554" className="omSeoCall">
              <i className="fa-solid fa-phone"></i>

              <span>
                <small>CALL NOW</small>
                +91 70666 65554
              </span>
            </a>

            <a
              href="https://wa.me/917066665554"
              target="_blank"
              rel="noreferrer"
              className="omSeoWhatsapp"
            >
              <i className="fa-brands fa-whatsapp"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmServiceLocations;