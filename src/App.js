import { Routes, Route,useNavigate   } from "react-router-dom";
import Home from "./Home";
import HowitWorks from "./HowitWorks";
import SwappingPlace from "./SwappingPlace";
import Notification from "./Notification";
import Footer from "./common/Footer";
import Navigationbar from "./common/Navigationbar";
import About from './About';
import Login from "./Login";
import React from "react";
import Swappingoptionpage from "./Swappingoptionpage";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>
      
        <Navigationbar/>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/HowitWorks" element={<HowitWorks />} />
          <Route path="/SwappingPlace" element={<SwappingPlace />} />
          <Route path="/Notification" element={<Notification />} />

          <Route path="/About" element={<About/>} />
         <Route path="/Login" element={<Login />}/>
         <Route path="/Swappingoptionpage" element={<Swappingoptionpage/>}/>
          
        </Routes>
        <Footer />
       
      </div>
      

    </>
  );
}

export default App;
