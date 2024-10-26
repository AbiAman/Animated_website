/* eslint-disable no-unused-vars */
import Banner from "./components/Banner/Banner";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div>
          <Navbar />
          <Home />
          <Services />
          <Banner />
        </div>
      </div>
    </>
  );
}

export default App;
