import './Brands.scss'
import logoEconverse from '../../assets/logo-econverse.svg'

function Brands() {
  return (
    <section className="brands">
      <div className="brands__container">
        <h2>Navegue por marcas</h2>

       <div className="brands__list">
  <div className="brands__item"><img src={logoEconverse} alt="Econverse" /></div>
  <div className="brands__item"><img src={logoEconverse} alt="Econverse" /></div>
  <div className="brands__item"><img src={logoEconverse} alt="Econverse" /></div>
  <div className="brands__item"><img src={logoEconverse} alt="Econverse" /></div>
  <div className="brands__item"><img src={logoEconverse} alt="Econverse" /></div>
</div>
      </div>
    </section>
  )
}

export default Brands