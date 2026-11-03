import './Footer.scss'
import logoEconverse from '../../assets/logo-econverse.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img src={logoEconverse} alt="Econverse" />

          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit.
          </p>

          <div className="footer__social">
            <span>◎</span>
            <span>f</span>
            <span>in</span>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__column">
          <h3>Institucional</h3>
          <p>Sobre Nós</p>
          <p>Movimento</p>
          <p>Trabalhe conosco</p>
        </div>

        <div className="footer__column">
          <h3>Ajuda</h3>
          <p>Suporte</p>
          <p>Fale Conosco</p>
          <p>Perguntas Frequentes</p>
        </div>

        <div className="footer__column">
          <h3>Termos</h3>
          <p>Termos e Condições</p>
          <p>Política de Privacidade</p>
          <p>Troca e Devolução</p>
        </div>
      </div>

      <div className="footer__bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </footer>
  )
}

export default Footer