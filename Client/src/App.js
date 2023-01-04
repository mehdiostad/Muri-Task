import Menu from "./components/Menu/Menu";
import ShopCards from "./components/ShopCards/ShopCards";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
function App() {
  return (
    <div className="app">
      {/* Left side */}
      <div className="app-left">
      <Menu/>
      </div>
      {/* Right side */}
      <div className="app-right">
      <Navbar/>
      <ShopCards/>
      </div>
    </div>
  );
}

export default App;
