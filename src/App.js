import './App.css';
import Body from './Components/Body/Body';
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Body />
    </div>
  );
}

export default App;
