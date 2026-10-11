
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header';
import HeroSection from './components/HeroSlider';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import Attractions from './pages/Attractions';
import Activities from './pages/Activities';
import Events from './pages/Events';
import EnquiryForm from './pages/EnquiryForm';
import ContactUs from './pages/ContactUs';
import NearbyPlaces from './pages/NearbyPlaces';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FaqSection from './pages/FaqSection';
import GallerySection from './pages/GallerySection';
import OnedayPicnicSpotNearPuneForFamily from './pages/One Day Picnic Spot Near Pune for Family';
import ScrollToTop from './components/ScrollToTop';
import OneDayTripNearPune from './pages/One Day Trip Near Pune';
import PicnicSpotNearPune from './pages/Picnic Spot Near Pune';
import PicnincDestinationNearPune from './pages/Picnic Destination Near Pune';
import CorporateOutingResortsNearPune from './pages/Corporate Outing Resorts Near Pune';
import AgriTourismNearPune from './pages/Agri Tourism Near Pune';
import DestinationWeddingNearPune from './pages/Destination Wedding Near Pune';
import HurdaPartyPlacesNearPune from './pages/Hurda Party Places Near Pune';
import WaterParkNearPune from './pages/Water Park Near Pune';
import Schoolpicnicspotsnearpuneforstudents from './pages/School Picnic Spots Near Pune for Students';
import OnedayAdventureResortsNearPune from './pages/One Day Adventure Resorts Near Pune';
import ResortNearPune from './pages/Resort Near Pune';
import ForestResortsNearPune from './pages/Forest Resorts Near Pune';
import NatureResortsNearPuneForWeekend from './pages/Nature Resorts Near Pune for Weekend';
import Mangomahotsavinpune from './pages/Mango Mahotsav in Pune';
import KrushiParyatanKendraNearPune from './pages/Krushi Paryatan Kendra Near Pune';
import CampningPlacesNearPune from './pages/Camping Places Near Pune';
import ActivitiesResortnearpune from './pages/Activities Resort Near Pune';
import AgroTourismNearMumbaiForFamily from './pages/Agro Tourism Near Mumbai for Family';
import OneDayPicnicSpotFromMumbai from './pages/One Day Picnic Spot From Mumbai';
import Onedaypicnincpakcge from './pages/One Day Picnic Packages Near Mumbai';
import Schoolpicnincspotsinmumbai from './pages/School Picnic Spots in Mumbai';
import ResortNearPimpriChinchwad from './pages/Resort Near Mumbai';
import Teamoutingplacesnearmumbai from './pages/Team Outing Places Near Mumbai';
import Corporateoutingnearmumbai from './pages/Corporate Outing Near Mumbai';
import Picnicspotnearnashik from './pages/Picnic Spot Near Nashik';
import Farmhouseonrentinpune from './pages/Farm House On Rent in Pune';
import Resortinpune from './pages/Resorts in Pune';
import Onedaypicnicresortnearpune from './pages/One Day Picnic Resorts Near Pune';
import Onedaygetawaynearpune from './pages/One Day Getaways Near Pune';
import Resortwithactivitiesnearpune from './pages/Resort With Activities Near Pune';
import Resortnearpimprichichwad from './pages/Resort Near Pimpri Chinchwad';
import Resortnearbypune from './pages/Resort Near by Pune';
import Resortnearpunewithactivities from './pages/Resorts Near Pune With Activities';
import Resortinmulshipune from './pages/Resorts in Mulshi Pune';
import Bestfamiyresortnearpune from './pages/Best Family Resort Near Pune';
import Bestresortnearpune from './pages/Best Resorts Near Pune';
import Agrotourismnearpune from './pages/Agro Tourism Near Pune for Family';
import Resortnearpuneforfamily from './pages/Resorts Near Pune for Family';
import Schoolpicnincspotnear from './pages/School Picnic Spot Near Pune';
import Schoolpicnincspotsnear from './pages/School Picnic Spots Near Pimpri Chinchwad';
import Schoolpicnincspotsinpimprichichwad from './pages/School Picnic Spots in Pimpri Chinchwad';
import SchoolPicnicSpotsNearMumbai from './pages/School Picnic Spots Near Mumbai';
import Schoolpicnincspotsnearnavimumbai from './pages/School Picnic Spots Near Navi Mumbai';
import SchoolPicnicSpotsInNaviMumbai from './pages/School Picnic Spots in Navi Mumbai';
import SchoolPicnicSpotsNearLonavala from './pages/School Picnic Spots Near Lonavala';
import SchoolPicnicSpotsNearTalegaonDabhade from './pages/School Picnic Spots Near Talegaon Dabhade';
import Schoolpicnincspotsnearchakan from './pages/School Picnic Spots Near Chakan';
import SchoolPicnicSpotsInKhedPune from './pages/School Picnic Spots in Khed Pune';
import SchoolPicnicSpotInNashik from './pages/School Picnic Spot in Nashik';
import SchoolPicnicSpotInAhmednagar from './pages/School Picnic Spot in Ahmednagar';
import Schoolpicnicspotindaund from './pages/School Picnic Spot in Daund';
import SchoolPicnicSpotInShirur from './pages/School Picnic Spot in Shirur';
import SchoolPicnicSpotInJunnar from './pages/School Picnic Spot in Junnar';
import SchoolPicnicSpotInAmbegaon from './pages/School Picnic Spot in Ambegaon';
import Schoolpicnicspotinmava from './pages/School Picnic Spot in Maval';
import Schoolpicnincspotinmulshipune from './pages/School Picnic Spot in Mulshi Pune';
import Schoolpicnicspotinvelhe from './pages/School Picnic Spot in Velhe';
import Schoolpicnicspotinbhor from './pages/School Picnic Spot in Bhor';
import Schoolpicnicspotinpurandar from './pages/School Picnic Spot in Purandar';
import Schoolpicnicspotinbaramati from './pages/School Picnic Spot in Baramati';
import Schoolpicnicspotinindapur from './pages/School Picnic Spot in Indapur';
import DestinationWeddingInPune from './pages/Destination Wedding in Pune';
import Weddingdestinationnearnearpimprichinchwad from './pages/Wedding Destination Near Pimpri Chinchwad';
import WeddingLocationsInPune from './pages/Wedding Locations in Pune';
import Marriagehallinpune from './pages/Marriage Hall in Pune';
import BanquetHallsInPimpriChinchwad from './pages/Banquet Halls in Pimpri Chinchwad';
import WeddingLawnsInPune from './pages/Wedding Lawns in Pune';
import Weddingvenuesinpune from './pages/Wedding Venues in Pune';
import TeamoutingPlacesNearPune from './pages/Team Outing Places Near Pune';
import CorporatePartyPlacesInPune from './pages/Corporate Party Places in Pune';
import FamilyResortsNearPune from './pages/Family Resorts Near Pune';
import WaterresortInPune from './pages/Water Resort in Pune';
import Waterparknearnavimumbai from './pages/Water Park Near Navi Mumbai';
import Adventureparknearpune from './pages/Adventure Park Near Pune';
import Aggrotourismnearpune from './pages/Agro Tourism Near Pune';
import Waterparknearpimprichichwad from './pages/Water Park Near Pimpri Chinchwad';
import Campingnearpune from './pages/Camping Near Pune';
import FarmhousewithSwimmingPoolNearPune from './pages/Farmhouse With Swimming Pool Near Pune';
import MorachiChincholiWaterPark from './pages/Morachi Chincholi Water Park';
import MorachiChincholi from './pages/Morachi Chincholi';
import Budgetresortnearpune from './pages/Budget Resorts Near Pune for Family';
import OnenightStayNearPune from './pages/One Night Stay Near Pune';
import Onedaypicnicspotnearpimprichinchwad from './pages/One Day Picnic Spot Near Pimpri Chinchwad';
import Onedaypicnicspotnearbhosari from './pages/One Day Picnic Spot Near Bhosari';
import OnedayPicnicSpotNearNigdi from './pages/One Day Picnic Spot Near Nigdi';
import Onedaypicnicspotnearakurdi from './pages/One Day Picnic Spot Near Akurdi';
import PicnicSpotNearSangviPune from './pages/Picnic Spot Near Sangvi Pune';
import Onedaypicnicspotnearwakad from './pages/One Day Picnic Spot Near Wakad';
import Onedatpicnicspotnearlonavala from './pages/One Day Picnic Spot Near Lonavala';
import Onedaypicnicspotneartathawade from './pages/One Day Picnic Spot Near Tathawade';
import Onedaypicnicspotnearravet from './pages/One Day Picnic Spot Near Ravet';
import OnedaypicnicspotnearChakan from './pages/One Day Picnic Spot Near Chakan';
import BestResortsInPuneWithSwimmingPool from './pages/Best Resorts in Pune With Swimming Pool';
import Onedaypicnicspotnearmoshi from './pages/One Day Picnic Spot Near Moshi';
import Onedaypicnicspotneartalawade from './pages/One Day Picnic Spot Near Talawade';
import Onedaypicnicspotnearchikhali from './pages/One Day Picnic Spot Near Chikhali Moshi';
import Onedaypicnicsportnearbalewadi from './pages/One Day Picnic Spot Near Balewadi';
import Onedaypicnicspotnearbaner from './pages/One Day Picnic Spot Near Baner';
import OnedayPicnicSpotNearDighiAlandi from './pages/One Day Picnic Spot Near Dighi Alandi';
import Onedaypincicspotnearpunawale from './pages/One Day Picnic Spot Near Punawale';
import Hurdapartynearshikrapur from './pages/Hurda Party Near Shikrapur Pune';
import PicnicSpotNearSanaswadi from './pages/Picnic Spot Near Sanaswadi';
import Picnicsportnearmanchar from './pages/Picnic Spot Near Manchar';
import PicnicSpotNearSinhagadRoad from './pages/Picnic Spot Near Sinhagad Road';
import PanshetPicnicSpot from './pages/Panshet Picnic Spot';
import PicnicspotNearVimanNagarPune from './pages/Picnic Spot Near Viman Nagar Pune';
import PicnicSpotNearNarayangaon from './pages/Picnic Spot Near Narayangaon';
import Picnicspotneardehuroad from './pages/Picnic Spot Near Dehu Road';
import PicnicSpotNearHadapsarForOneDayTrip from './pages/Picnic Spot Near Hadapsar for One Day Trip';
import Picnicspotsnearkothrud from './pages/Picnic Spot Near Kothrud Pune';
import Picnicspotsnearaundhpune from './pages/Picnic Spot Near Aundh Pune';
import Onedaypicnicspotnearkharadi from './pages/One Day Picnic Spot Near Kharadi';
import Picnicspotnearpashanpune from './pages/Picnic Spot Near Pashan Pune';
import Picnicspotsnearbavdhan from './pages/Picnic Spot Near Bavdhan';
import Picnicspotsneaderwarjepune from './pages/Picnic Spot Near Warje Pune';
import Onedaypicnicspotneardhayaripune from './pages/One Day Picnic Spot Near Dhayari Pune';
import Onedaypicnicspotsnearkatrajfor from './pages/One Day Picnic Spot Near Katraj for Family';
import Onedaypicnicspotnearkondhwa from './pages/One Day Picnic Spot Near Kondhwa';
import Picnicspotnearundri from './pages/Picnic Spot Near Undri for Family';
import Corporatepicnicspotnear from './pages/Corporate Picnic Spot Near Magarpatta City';
import TouristSpotNearWagholiPune from './pages/Tourist Spot Near Wagholi Pune';
import PicnicSpotNearLohegaonForFamily from './pages/Picnic Spot Near Lohegaon for Family';
import Onedaypicnicspotnearyerwada from './pages/One Day Picnic Spot Near Yerawada Pune';
import Picnicspotnearkoregaon from './pages/Picnic Spot Near Koregaon Park Pune';
import Onepicnicspotnearkalyaninagar from './pages/One Picnic Spot Near Kalyani Nagar Pune';
import Picnicspotnearpuneforstudent from './pages/Picnic Spot Near Pune for Students';
import Tourismspotnearpicnicnearshivajinagar from './pages/Tourist Spot Near Picnic Near Shivajinagar';
import PicnicSpotNearBibvewadiPune from './pages/Picnic Spot Near Bibvewadi Pune';
import Onedaypicnicspotnearnibm from './pages/One Day Picnic Spot Near NIBM Pune';
import Picnicspotnearmahalunga from './pages/Picnic Spot Near Mahalunge Pune';
import Picnicspotneartathawade from './pages/Picnic Spot Near Tathawade';
import Picnicspotnearpunewala from './pages/Picnic Spot Near Punawale';
import Picnicspotnearravet from './pages/Picnic Spot Near Ravet';
import Picnicspotnearkiwale from './pages/Picnic Spot Near Kiwale';
import Picnicspotnearpradhikarn from './pages/Picnic Spot Near Pradhikaran';
import PicnicSpotNearBhosari from './pages/Picnic Spot Near Bhosari';
import PicnicSpotNeartalawade from './pages/Picnic Spot Near Talawade';
import PicnicSpotNearchakan from './pages/Picnic Spot Near Chakan';
import Picnicspotneardighi from './pages/Picnic Spot Near Dighi';
import Picnicspotnearcharholi from './pages/Picnic Spot Near Charholi';
import PicnicSpotNearAlandi from './pages/Picnic Spot Near Alandi';
import OnepicnicSpotNearsanghvi from './pages/One Picnic Spot Near Sangvi Pune';
import Daypicnicspotnearpimple from './pages/Day Picnic Spot Near Pimple Saudagar';
import Picnicspotnearpimplegurav from './pages/Picnic Spot Near Pimple Gurav';
import Picnicspotnearpimplenilkh from './pages/Picnic Spot Near Pimple Nilakh';
import Picnicspotnearrahatani from './pages/Picnic Spot Near Rahatani';
import Picniaspotnearkalewadi from './pages/Picnic Spot Near Kalewadi';
import Picnicspotnearthegaon from './pages/Picnic Spot Near Thergaon';
import Picnicspotneargangechowk from './pages/Picnic Spot Near Dange Chowk';
import Picnicspotnearkasarwadifor from './pages/Picnic Spot Near Kasarwadi For Stay';
import Picnicspotnearphugewadi from './pages/Picnic Spot Near Phugewadi for Trip';
import Picnicspotneardapodi from './pages/Picnic Spot Near Dapodi Pune';
import Picnicspotneartalegaondabhane from './pages/Picnic Spot Near Talegaon Dabhade';
import Picnicspotnearmamurdi from './pages/Picnic Spot Near Mamurdi';
import Picnicspotnearmarunji from './pages/Picnic Spot Near Marunji';
import Picnicspotnearmaan from './pages/Picnic Spot Near Maan Hinjewadi';
import Picnicspotnearpiragut from './pages/Picnic Spot Near Pirangut';
import Picnicspotnearbhugaon from './pages/Picnic Spot Near Bhugaon';
import Picnicspotnearlavale from './pages/Picnic Spot Near Lavale';
import Picnicspotnearkhadakwasla from './pages/Picnic Spot Near Khadakwasla';
import Picnicspotnearlonavala from './pages/Picnic Spot Near Lonavala';
import Picnicspotnearkamshetu from './pages/Picnic Spot Near Kamshet';
import Picnicspotnearpawnalake from './pages/Picnic Spot Near Pawna Lake';
import Picnicspotnearsaswad from './pages/Picnic Spot Near Saswad';
import Omagotourismresort from './pages/Om Agro Tourism Resort';
import Omresortkoyali from './pages/Om Resort Koyali';
import HowToReach from './pages/HowToReach';
import Packages from './pages/Packages';
import OmServiceLocations from './components/OmServiceLocations';
import ContactButtons from './components/ContactButtons';

function App() {
  return (
    <Router>
     <Header/>
      <ContactButtons />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutSection />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/events" element={<Events />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route path="/how-to-reach" element={<HowToReach />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/near-by-places" element={<NearbyPlaces />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<FaqSection />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/one-day-picnic-spot-near-pune-for-family" element={<OnedayPicnicSpotNearPuneForFamily />} />

        <Route path="/one-day-trip-near-pune" element={<OneDayTripNearPune />} />
<Route path="/picnic-spot-near-pune" element={<PicnicSpotNearPune />} />
<Route path="/picnic-destination-near-pune" element={<PicnincDestinationNearPune />} />
<Route path="/corporate-outing-resorts-near-pune" element={<CorporateOutingResortsNearPune />} />
<Route path="/agri-tourism-near-pune" element={<AgriTourismNearPune />} />
<Route path="/destination-wedding-near-pune" element={<DestinationWeddingNearPune />} />
<Route path="/hurda-party-places-near-pune" element={<HurdaPartyPlacesNearPune />} />
<Route path="/water-park-near-pune" element={<WaterParkNearPune />} />
<Route path="/School-Picnic-Spots-Near-Pune-for-Students" element={<Schoolpicnicspotsnearpuneforstudents />} />
<Route path="/one-day-adventure-resorts-near-pune" element={<OnedayAdventureResortsNearPune />} />
<Route path="/resort-near-pune" element={<ResortNearPune />} />
<Route path="/forest-resorts-near-pune" element={<ForestResortsNearPune />} />
<Route path="/nature-resorts-near-pune-for-weekend" element={<NatureResortsNearPuneForWeekend />} />
<Route path="/mango-mahotsav-in-pune" element={<Mangomahotsavinpune />} />
<Route path="/krushi-paryatan-kendra-near-pune" element={<KrushiParyatanKendraNearPune />} />
<Route path="/camping-places-near-pune" element={<CampningPlacesNearPune />} />
<Route path="/activities-resort-near-pune" element={<ActivitiesResortnearpune />} />
<Route path="/agro-tourism-near-mumbai-for-family" element={<AgroTourismNearMumbaiForFamily />} />
<Route path="/one-day-picnic-spot-from-mumbai" element={<OneDayPicnicSpotFromMumbai />} />
<Route path="/one-day-picnic-packages-near-mumbai" element={<Onedaypicnincpakcge />} />
<Route path="/school-picnic-spots-in-mumbai" element={<Schoolpicnincspotsinmumbai />} />
<Route path="/resort-near-mumbai" element={<ResortNearPimpriChinchwad />} />
<Route path="/team-outing-places-near-mumbai" element={<Teamoutingplacesnearmumbai />} />
<Route path="/corporate-outing-near-mumbai" element={<Corporateoutingnearmumbai />} />
<Route path="/picnic-spot-near-nashik" element={<Picnicspotnearnashik />} />
<Route path="/farm-house-on-rent-in-pune" element={<Farmhouseonrentinpune />} />
<Route path="/resorts-in-pune" element={<Resortinpune />} />
<Route path="/one-day-picnic-resorts-near-pune" element={<Onedaypicnicresortnearpune />} />
<Route path="/one-day-getaways-near-pune" element={<Onedaygetawaynearpune />} />
<Route path="/resort-with-activities-near-pune" element={<Resortwithactivitiesnearpune />} />
<Route path="/resort-near-pimpri-chinchwad" element={<Resortnearpimprichichwad />} />
<Route path="/activities-resort-near-pune" element={<ActivitiesResortnearpune />} />
<Route path="/resort-near-by-pune" element={<Resortnearbypune />} />
<Route path="/resorts-near-pune-with-activities" element={<Resortnearpunewithactivities />} />
<Route path="/resorts-in-mulshi-pune" element={<Resortinmulshipune />} />
<Route path="/best-family-resort-near-pune" element={<Bestfamiyresortnearpune />} />
<Route path="/best-resorts-near-pune" element={<Bestresortnearpune />} />
<Route path="/agro-tourism-near-pune-for-family" element={<Agrotourismnearpune />} />
<Route path="/resorts-near-pune-for-family" element={<Resortnearpuneforfamily />} />
<Route path="/school-picnic-spot-near-pune" element={<Schoolpicnincspotnear />} />
<Route path="/school-picnic-spots-near-pimpri-chinchwad" element={<Schoolpicnincspotsnear />} />
<Route path="/school-picnic-spots-in-pimpri-chinchwad" element={<Schoolpicnincspotsinpimprichichwad />} />
<Route path="/school-picnic-spots-near-mumbai" element={<SchoolPicnicSpotsNearMumbai />} />
<Route path="/school-picnic-spots-near-navi-mumbai" element={<Schoolpicnincspotsnearnavimumbai />} />
<Route path="/school-picnic-spots-in-navi-mumbai" element={<SchoolPicnicSpotsInNaviMumbai />} />
<Route path="/school-picnic-spots-near-lonavala" element={<SchoolPicnicSpotsNearLonavala />} />
<Route path="/school-picnic-spots-near-talegaon-dabhade" element={<SchoolPicnicSpotsNearTalegaonDabhade />} />
<Route path="/school-picnic-spots-near-chakan" element={<Schoolpicnincspotsnearchakan />} />
<Route path="/school-picnic-spots-in-khed-pune" element={<SchoolPicnicSpotsInKhedPune />} />
<Route path="/school-picnic-spot-in-nashik" element={<SchoolPicnicSpotInNashik />} />
<Route path="/school-picnic-spot-in-ahmednagar" element={<SchoolPicnicSpotInAhmednagar />} />
<Route path="/school-picnic-spot-in-daund" element={<Schoolpicnicspotindaund />} />
<Route path="/school-picnic-spot-in-shirur" element={<SchoolPicnicSpotInShirur />} />
<Route path="/school-picnic-spot-in-junnar" element={<SchoolPicnicSpotInJunnar />} />
<Route path="/school-picnic-spot-in-ambegaon" element={<SchoolPicnicSpotInAmbegaon />} />
<Route path="/school-picnic-spot-in-maval" element={<Schoolpicnicspotinmava />} />
<Route path="/school-picnic-spot-in-mulshi-pune" element={<Schoolpicnincspotinmulshipune />} />
<Route path="/school-picnic-spot-in-velhe" element={<Schoolpicnicspotinvelhe />} />
<Route path="/school-picnic-spot-in-bhor" element={<Schoolpicnicspotinbhor />} />


<Route path="/school-picnic-spot-in-purandar" element={<Schoolpicnicspotinpurandar />} />
<Route path="/school-picnic-spot-in-baramati" element={<Schoolpicnicspotinbaramati />} />
<Route path="/school-picnic-spot-in-indapur" element={<Schoolpicnicspotinindapur />} />
<Route path="/destination-wedding-in-pune" element={<DestinationWeddingInPune />} />
<Route path="/wedding-destination-near-pimpri-chinchwad" element={<Weddingdestinationnearnearpimprichinchwad />} />
<Route path="/wedding-locations-in-pune" element={<WeddingLocationsInPune />} />
<Route path="/marriage-hall-in-pune" element={<Marriagehallinpune />} />
<Route path="/banquet-halls-in-pimpri-chinchwad" element={<BanquetHallsInPimpriChinchwad />} />
<Route path="/wedding-lawns-in-pune" element={<WeddingLawnsInPune />} />
<Route path="/wedding-venues-in-pune" element={<Weddingvenuesinpune />} />
<Route path="/team-outing-places-near-pune" element={<TeamoutingPlacesNearPune />} />
<Route path="/corporate-party-places-in-pune" element={<CorporatePartyPlacesInPune />} />
<Route path="/family-resorts-near-pune" element={<FamilyResortsNearPune />} />
<Route path="/water-resort-in-pune" element={<WaterresortInPune />} />
<Route path="/water-park-near-navi-mumbai" element={<Waterparknearnavimumbai />} />
<Route path="/adventure-park-near-pune" element={<Adventureparknearpune />} />
<Route path="/agro-tourism-near-pune" element={<Aggrotourismnearpune />} />
<Route path="/water-park-near-pimpri-chinchwad" element={<Waterparknearpimprichichwad />} />
<Route path="/camping-near-pune" element={<Campingnearpune />} />
<Route path="/farmhouse-with-swimming-pool-near-pune" element={<FarmhousewithSwimmingPoolNearPune />} />
<Route path="/morachi-chincholi-water-park" element={<MorachiChincholiWaterPark />} />
<Route path="/morachi-chincholi" element={<MorachiChincholi />} />
<Route path="/budget-resorts-near-pune-for-family" element={<Budgetresortnearpune />} />
<Route path="/one-night-stay-near-pune" element={<OnenightStayNearPune />} />
<Route path="/one-day-picnic-spot-near-pimpri-chinchwad" element={<Onedaypicnicspotnearpimprichinchwad />} />
<Route path="/one-day-picnic-spot-near-bhosari" element={<Onedaypicnicspotnearbhosari />} />
<Route path="/one-day-picnic-spot-near-nigdi" element={<OnedayPicnicSpotNearNigdi />} />
<Route path="/one-day-picnic-spot-near-akurdi" element={<Onedaypicnicspotnearakurdi />} />
<Route path="/picnic-spot-near-sangvi-pune" element={<PicnicSpotNearSangviPune />} />
<Route path="/one-day-picnic-spot-near-wakad" element={<Onedaypicnicspotnearwakad />} />
<Route path="/one-day-picnic-spot-near-lonavala" element={<Onedatpicnicspotnearlonavala />} />
<Route path="/one-day-picnic-spot-near-tathawade" element={<Onedaypicnicspotneartathawade />} />
<Route path="/one-day-picnic-spot-near-ravet" element={<Onedaypicnicspotnearravet />} />
<Route path="/one-day-picnic-spot-near-chakan" element={<OnedaypicnicspotnearChakan />} />
<Route path="/best-resorts-in-pune-with-swimming-pool" element={<BestResortsInPuneWithSwimmingPool />} />
<Route path="/one-day-picnic-spot-near-moshi" element={<Onedaypicnicspotnearmoshi />} />
<Route path="/one-day-picnic-spot-near-talawade" element={<Onedaypicnicspotneartalawade />} />
<Route path="/one-day-picnic-spot-near-chikhali-moshi" element={<Onedaypicnicspotnearchikhali />} />
<Route path="/one-day-picnic-spot-near-balewadi" element={<Onedaypicnicsportnearbalewadi />} />
<Route path="/one-day-picnic-spot-near-baner" element={<Onedaypicnicspotnearbaner />} />
<Route path="/one-day-picnic-spot-near-dighi-alandi" element={<OnedayPicnicSpotNearDighiAlandi />} />
<Route path="/one-day-picnic-spot-near-punawale" element={<Onedaypincicspotnearpunawale />} />
<Route path="/hurda-party-near-shikrapur-pune" element={<Hurdapartynearshikrapur />} />
<Route path="/picnic-spot-near-sanaswadi" element={<PicnicSpotNearSanaswadi />} />
<Route path="/picnic-spot-near-manchar" element={<Picnicsportnearmanchar />} />
<Route path="/picnic-spot-near-sinhagad-road" element={<PicnicSpotNearSinhagadRoad />} />
<Route path="/panshet-picnic-spot" element={<PanshetPicnicSpot />} />
<Route path="/picnic-spot-near-viman-nagar-pune" element={<PicnicspotNearVimanNagarPune />} />
<Route path="/picnic-spot-near-narayangaon" element={<PicnicSpotNearNarayangaon />} />
<Route path="/picnic-spot-near-dehu-road" element={<Picnicspotneardehuroad />} />
<Route path="/picnic-spot-near-hadapsar-for-one-day-trip" element={<PicnicSpotNearHadapsarForOneDayTrip />} />
<Route path="/picnic-spot-near-kothrud-pune" element={<Picnicspotsnearkothrud />} />
<Route path="/picnic-spot-near-aundh-pune" element={<Picnicspotsnearaundhpune />} />
<Route path="/one-day-picnic-spot-near-kharadi" element={<Onedaypicnicspotnearkharadi />} />
<Route path="/picnic-spot-near-pashan-pune" element={<Picnicspotnearpashanpune />} />
<Route path="/picnic-spot-near-bavdhan" element={<Picnicspotsnearbavdhan />} />
<Route path="/picnic-spot-near-warje-pune" element={<Picnicspotsneaderwarjepune />} />
<Route path="/one-day-picnic-spot-near-dhayari-pune" element={<Onedaypicnicspotneardhayaripune />} />
<Route path="/one-day-picnic-spot-near-katraj-for-family" element={<Onedaypicnicspotsnearkatrajfor />} />

<Route path="/one-day-picnic-spot-near-kondhwa" element={<Onedaypicnicspotnearkondhwa />} />
<Route path="/picnic-spot-near-undri-for-family" element={<Picnicspotnearundri />} />
<Route path="/corporate-picnic-spot-near-magarpatta-city" element={<Corporatepicnicspotnear />} />
<Route path="/tourist-spot-near-wagholi-pune" element={<TouristSpotNearWagholiPune />} />
<Route path="/picnic-spot-near-lohegaon-for-family" element={<PicnicSpotNearLohegaonForFamily />} />
<Route path="/one-day-picnic-spot-near-yerawada-pune" element={<Onedaypicnicspotnearyerwada />} />
<Route path="/picnic-spot-near-koregaon-park-pune" element={<Picnicspotnearkoregaon />} />
<Route path="/one-picnic-spot-near-kalyani-nagar-pune" element={<Onepicnicspotnearkalyaninagar />} />
<Route path="/picnic-spot-near-pune-for-students" element={<Picnicspotnearpuneforstudent />} />
<Route path="/tourist-spot-near-picnic-near-shivajinagar" element={<Tourismspotnearpicnicnearshivajinagar />} />
<Route path="/picnic-spot-near-bibvewadi-pune" element={<PicnicSpotNearBibvewadiPune />} />
<Route path="/one-day-picnic-spot-near-nibm-pune" element={<Onedaypicnicspotnearnibm />} />
<Route path="/picnic-spot-near-mahalunge-pune" element={<Picnicspotnearmahalunga />} />
<Route path="/picnic-spot-near-tathawade" element={<Picnicspotneartathawade />} />
<Route path="/picnic-spot-near-punawale" element={<Picnicspotnearpunewala />} />
<Route path="/picnic-spot-near-ravet" element={<Picnicspotnearravet />} />
<Route path="/picnic-spot-near-kiwale" element={<Picnicspotnearkiwale />} />
<Route path="/picnic-spot-near-pradhikaran" element={<Picnicspotnearpradhikarn />} />
<Route path="/picnic-spot-near-bhosari" element={<PicnicSpotNearBhosari />} />
<Route path="/picnic-spot-near-talawade" element={<PicnicSpotNeartalawade />} />
<Route path="/picnic-spot-near-chakan" element={<PicnicSpotNearchakan />} />
<Route path="/picnic-spot-near-dighi" element={<Picnicspotneardighi />} />
<Route path="/picnic-spot-near-charholi" element={<Picnicspotnearcharholi />} />
<Route path="/picnic-spot-near-alandi" element={<PicnicSpotNearAlandi />} />
<Route path="/one-picnic-spot-near-sangvi-pune" element={<OnepicnicSpotNearsanghvi />} />
<Route path="/day-picnic-spot-near-pimple-saudagar" element={<Daypicnicspotnearpimple />} />
<Route path="/picnic-spot-near-pimple-gurav" element={<Picnicspotnearpimplegurav />} />
<Route path="/picnic-spot-near-pimple-nilakh" element={<Picnicspotnearpimplenilkh />} />
<Route path="/picnic-spot-near-rahatani" element={<Picnicspotnearrahatani />} />
<Route path="/picnic-spot-near-kalewadi" element={<Picniaspotnearkalewadi />} />
<Route path="/picnic-spot-near-thergaon" element={<Picnicspotnearthegaon />} />
<Route path="/picnic-spot-near-dange-chowk" element={<Picnicspotneargangechowk />} />
<Route path="/picnic-spot-near-kasarwadi-for-stay" element={<Picnicspotnearkasarwadifor />} />
<Route path="/picnic-spot-near-phugewadi-for-trip" element={<Picnicspotnearphugewadi />} />
<Route path="/picnic-spot-near-dapodi-pune" element={<Picnicspotneardapodi />} />
<Route path="/picnic-spot-near-talegaon-dabhade" element={<Picnicspotneartalegaondabhane />} />
<Route path="/picnic-spot-near-mamurdi" element={<Picnicspotnearmamurdi />} />
<Route path="/picnic-spot-near-marunji" element={<Picnicspotnearmarunji />} />
<Route path="/picnic-spot-near-maan-hinjewadi" element={<Picnicspotnearmaan />} />
<Route path="/picnic-spot-near-pirangut" element={<Picnicspotnearpiragut />} />
<Route path="/picnic-spot-near-bhugaon" element={<Picnicspotnearbhugaon />} />
<Route path="/picnic-spot-near-lavale" element={<Picnicspotnearlavale />} />
<Route path="/picnic-spot-near-khadakwasla" element={<Picnicspotnearkhadakwasla />} />
<Route path="/picnic-spot-near-lonavala" element={<Picnicspotnearlonavala />} />
<Route path="/picnic-spot-near-kamshet" element={<Picnicspotnearkamshetu />} />
<Route path="/picnic-spot-near-pawna-lake" element={<Picnicspotnearpawnalake />} />
<Route path="/picnic-spot-near-saswad" element={<Picnicspotnearsaswad />} />
<Route path="/om-agro-tourism-resort" element={<Omagotourismresort />} />
<Route path="/om-resort-koyali" element={<Omresortkoyali />} />

      </Routes>

<OmServiceLocations/>
<Footer/>
    </Router>
  );
}

export default App;
