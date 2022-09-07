import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import ProductList from './components/ProductList/ProductList'
import BestProduct from './components/BestProduct/BestProduct';
import BrandStory from './components/BrandStory/BrandStory';
import Whathappened from './components/Whathappened/Whathappened';
import HappenedIssue from './components/HappenedIssue/HappenedIssue';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <BestProduct/>
      <ProductList/>
      <BrandStory/>
      <HappenedIssue/>
      <Whathappened/>
      <Footer/>
    </div>
  );
}

export default App;
