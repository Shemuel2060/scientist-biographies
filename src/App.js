
import './App.css';
import Top from './components/Top';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Top/>
      <Content/>
      <Footer/>      
    </div>
  );
}

export default App;
