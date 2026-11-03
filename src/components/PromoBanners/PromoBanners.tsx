import './PromoBanners.scss'
import bannerParceiros from '../../assets/banner-parceiros.png'

function PromoBanners() {
  return (
    <section className="promo-banners">
      <div className="promo-banners__container">

        <div
          className="promo-banners__item"
          style={{ backgroundImage: `url(${bannerParceiros})` }}
        >
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button type="button">Confira</button>
        </div>

        <div
          className="promo-banners__item"
          style={{ backgroundImage: `url(${bannerParceiros})` }}
        >
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button type="button">Confira</button>
        </div>

      </div>
    </section>
  )
}

export default PromoBanners