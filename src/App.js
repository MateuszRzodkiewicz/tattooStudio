import "../src/Css/App.css";
import Navigation from "./Layout/Navigation";
import Pages from "./Layout/Pages";
import Footer from "./Layout/Footer";
import SocialMedia from "./components/Pages/socialMedia/SocialMedia";
import Navigation2 from "./Layout/Navigation2";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Navigation2 />
      <Pages />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
