import './Categories.scss'

import tecnologia from '../../assets/icone-tecnologia.svg'
import supermercado from '../../assets/icone-supermercado.svg'
import bebidas from '../../assets/icone-bebidas.svg'
import ferramentas from '../../assets/icone-ferramentas.svg'
import saude from '../../assets/icone-saude.svg'
import esportes from '../../assets/icone-esportes.svg'
import moda from '../../assets/icone-moda.svg'

const categories = [
  { nome: 'Tecnologia', icone: tecnologia },
  { nome: 'Supermercado', icone: supermercado },
  { nome: 'Bebidas', icone: bebidas },
  { nome: 'Ferramentas', icone: ferramentas },
  { nome: 'Saúde', icone: saude },
  { nome: 'Esportes e Fitness', icone: esportes },
  { nome: 'Moda', icone: moda },
]

function Categories() {
  return (
    <section className="categories">
      <div className="categories__container">
        {categories.map((categoria) => (
          <div className="categories__item" key={categoria.nome}>
            <div className="categories__icon">
              <img src={categoria.icone} alt={categoria.nome} />
            </div>

            <span>{categoria.nome}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories