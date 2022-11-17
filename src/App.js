import './global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DisplayHUD from './components/displayHUD/DisplayHUD';
import ControlPanel from './components/controlPanel/ControlPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-container'>
        <ControlPanel />
        <DisplayHUD />
      </div>
      <Footer />
    </div>
  );
}

export default App;
