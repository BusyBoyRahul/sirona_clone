
import Rahul from "./components/Caurosel";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Category from "./components/Category";
import Bestseller from "./components/Bestseller";
import Banners from "./components/Banners";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Rahul />
      <About />
      <Category />
      <Bestseller />
      <Banners />
      <Solutions />
      <Footer />
    </div>
  );
}

export default App;
