import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./common/Footer";
import Navigationbar from "./common/Navigationbar";
import Home from "./Component/Home/Home";
import Header from "./common/Header";
import SwappingMain from "./Component/SwappingPlace/SwappingMain";
import HowItWork from "./Component/HowItWork/HowItWork";
import Notification from "./Component/Notification/Notification";

function App() {
  return (
    <>
      <div>
        <Header />
        <Navigationbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/SwappingMain" element={<SwappingMain />} />
          <Route index path="/HowItWork" element={<HowItWork />} />
          <Route index path="/Notification" element={<Notification />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
