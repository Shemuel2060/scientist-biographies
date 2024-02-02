
import './App.css';
import Top from './components/Top';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import { SearchProvider } from './components/SearchContext';
// wraps its children to make context available to them.

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchProvider> 
        <Top/>
        <Content/>
      </SearchProvider>
     
      <Footer/>      
    </div>
  );
}

export default App;
