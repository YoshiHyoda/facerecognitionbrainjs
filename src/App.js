import './App.css';
import Navigation from "./components/navigation/Navigation";
import Particles from "react-particles-js"
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";

const particleOptions = {
  particles: {
    value: 30,
    density: {
      enable: true,
      value_area: 800
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className="particles"
        params={particleOptions} />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>

    </div>
  );
}

export default App;
