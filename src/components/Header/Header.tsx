
import './Header.scss'
import logoEconverse from '../../assets/logo-econverse.svg'
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Search,
  Package,
  Heart,
  CircleUserRound,
  ShoppingCart,
  Crown
} from 'lucide-react'

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <span>
          <ShieldCheck size={18} />
          Compra <strong>100% segura</strong>
        </span>
        <span>
          <Truck size={20} />
          <strong>Frete grátis</strong> acima de R$ 200
        </span>
        <span>
          <CreditCard size={19} />
          <strong>Parcele</strong> suas compras
        </span>
      </div>

      <div className="header__container">
        <div className="header__logo">
          <img src={logoEconverse} alt="Econverse" />
        </div>

        <div className="header__search">
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />
          <Search size={26} />
        </div>

        <div className="header__actions">
          <Package size={26} />
          <Heart size={28} />
          <CircleUserRound size={28} />
          <ShoppingCart size={28} />
        </div>
      </div>

      <nav className="header__nav">
        <a href="#categorias">TODAS CATEGORIAS</a>
        <a href="#produtos">SUPERMERCADO</a>
        <a href="#produtos">LIVROS</a>
        <a href="#produtos">MODA</a>
        <a href="#produtos">LANÇAMENTOS</a>
        <a href="#produtos">OFERTAS DO DIA</a>
        <a href="#newsletter">
          <Crown size={16} /> ASSINATURA
        </a>
      </nav>
    </header>
  )
}

export default Header
