import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./common/Footer";
import Navigationbar from "./common/Navigationbar";
import Home from "./Component/Home/Home";
import Header from "./common/Header";
import SwappingPlace from "./Component/SwappingPlace/SwappingPlace";
import SwappingMain from "./Component/SwappingPlace/SwappingMain";

function App() {
  return (
    <>

      <div>
        <Navigationbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/SwappingMain" element={<SwappingMain/>} />

        </Routes>

        <Footer />
        
      </div>
    </>
  );
}

export default App;
