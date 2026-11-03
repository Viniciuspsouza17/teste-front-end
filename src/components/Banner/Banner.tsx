import './Banner.scss'
import bannerImage from '../../assets/banner-black-friday.jpg'

function Banner() {
  return (
    <section
  className="banner"
style={{ backgroundImage: `url(${bannerImage})` }}
>
      <div className="banner__content">
        <h1>Venha conhecer nossas promoções</h1>

        <p>
  <strong>50% Off</strong> nos produtos
</p>

        <button type="button">
          Ver produto
        </button>
      </div>
    </section>
  )
}

export default Banner