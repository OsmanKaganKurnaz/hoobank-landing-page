
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Business from "./components/Business";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="font-poppins">
      <Navbar/>
      <Hero/>
      <Business/>
      <Billing/>
      <CardDeal/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
