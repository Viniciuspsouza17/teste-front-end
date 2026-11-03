import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import PromoBanners from './components/PromoBanners/PromoBanners'
import Brands from './components/Brands/Brands'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Products />
      <PromoBanners />
      <Products showTabs={false} />
      <PromoBanners />
      <Brands />
      <Products showTabs={false} />
      <Newsletter />
      <Footer />
   
    
    </>
  )
}

export default App
