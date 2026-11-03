import './Newsletter.scss'

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__text">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine nossa newsletter e receba novidades e promoções exclusivas.
          </p>
        </div>

        <form className="newsletter__form">
          <input
            type="text"
            placeholder="Digite seu nome"
          />

          <input
            type="email"
            placeholder="Digite seu e-mail"
          />

          <button type="submit">
            Inscrever
          </button>
          <label className="newsletter__terms">
  <input type="checkbox" required />
  Aceito os termos e condições
</label>
        </form>
      </div>
    </section>
  )
}

export default Newsletter