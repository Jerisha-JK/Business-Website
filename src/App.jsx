import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Navbar from "./Components/NavBar/Navbar";
import Fssai from "./Page/Registration/Fssai";
import Company from "./Page/Registration/Company";
import Trade_License from "./Page/Registration/Trade";
import ContactSection from "./Page/Contact/Contact";
import Business_Certificate from "./Page/Registration/Business_Cert";
import Business_License from "./Page/Registration/Business_Lic";
import NGO from "./Page/Registration/Ngo";
import Other from "./Page/Registration/Other";
import Partnership from "./Page/Compliance/Partnership";
import Msme from "./Page/Compliance/Msme";
import Shop from "./Page/Compliance/Shop";
import Nidhi from "./Page/Compliance/Nidhi";
import NgoCompliance from "./Page/Compliance/Ngo_compliance";
import Inc from "./Page/Compliance/Inc";
import Trust from "./Page/Compliance/Trust";
import LLP from "./Page/Compliance/Llp";
import Change_dir from "./Page/Compliance/Change_dir";
import Name_change from "./Page/Compliance/Change_com";
import Kyc from "./Page/Compliance/KYC";
import GST_Registration from "./Page/Taxation/Gst_register";
import GST_Return from "./Page/Taxation/Gst_return";
import Tax_Registration from "./Page/Taxation/Tax_register";






function App() {
  return (
    <Router>
      
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
       
       {/* Registrations */}
        <Route path="/company" element={<Company/>} />
        <Route path="/fssai" element={<Fssai/>} />
        <Route path="/trade" element={<Trade_License/>} />
        <Route path="/business-cert" element={<Business_Certificate/>} />
        <Route path="/business-lic" element={<Business_License/>} />
        <Route path="/ngo" element={<NGO/>} />
        <Route path="/other" element={<Other/>} />

        {/* Compliance & IPR */}
        <Route path="/msme" element={<Msme/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/nidhi" element={<Nidhi/>} />
        <Route path="/ngo-compliance" element={<NgoCompliance/>} />
        <Route path="/inc" element={<Inc/>} />
        <Route path="/trust" element={<Trust/>} />
        <Route path="/part" element={<Partnership/>} />
        <Route path="/llp" element={<LLP/>} />
        <Route path="/company-name" element={<Name_change/>} />
        <Route path="/change-dir" element={<Change_dir/>} />
        <Route path="/kyc" element={<Kyc/>} />

        {/* Taxation */}
        <Route path="/gst-register" element={<GST_Registration/>} />
        <Route path="/gst-return" element={<GST_Return/>} />
        <Route path="/tax" element={<Tax_Registration/>} />

        <Route path="/contact" element={<ContactSection/>} />
       
      </Routes>
      
     
    </Router>
  );
}

export default App;