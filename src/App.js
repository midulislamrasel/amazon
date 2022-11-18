import './App.css';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}

export default App;
