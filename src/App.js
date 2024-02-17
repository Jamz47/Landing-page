import "./App.css";
import Navigationbar from "./NAVBAR/Navbar";
import Home from "./Pages/Home";
import Adds from "./components/Adds";
import Adds2 from "./components/Adds2";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Carousels from "./components/Carousels";
import Videobanner from "./components/Videobanner";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Follow from "./components/Follow";

const App = () => {
  return (
    <>
      <div className="App">
        <Navigationbar />
        <Carousels />
        <div className="scrolldown"></div>
      </div>
      <Home />
      <Banner />
      <Banner2 />
      <Videobanner />
      <Adds />
      <Adds2 />
      <Banner3 />
      <SearchBar />
      <Follow />
      <Footer />
    </>
  );
};

export default App;
