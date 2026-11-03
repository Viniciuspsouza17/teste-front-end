import { useEffect, useState } from 'react'
import './Products.scss'
import ProductModal from '../ProductModal/ProductModal'

interface Product {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

function Products({ showTabs = true }: { showTabs?: boolean }) {
    const [products, setProducts] = useState<Product[]>([])
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
 useEffect(() => {
  fetch('/produtos.json')
    .then((response) => response.json())
    .then((data) => {
    console.log(data)
  setProducts(data.products)
})
    .catch((error) => {
      console.error('Erro ao carregar produtos:', error)
    })
}, [])   
  return ( <>
    <section className="products">
      <div className="products__container">
        <div className="products__heading">
  <h2>Produtos relacionados</h2>
  {!showTabs && (
    <span className="products__see-all">Ver todos</span>
  )}
</div>

       {showTabs && (
  <div className="products__tabs">
    <button type="button">Celular</button>
    <button type="button">Acessórios</button>
    <button type="button">Tablets</button>
    <button type="button">Notebooks</button>
    <button type="button">TVs</button>
    <button type="button">Ver todos</button>
  </div>
)}
        <div className="products__grid">
  {products.slice(0, 4).map((product, index) => (
    <div
  className="products__card"
  key={index}
  onClick={() => setSelectedProduct(product)}
>
      <img src={product.photo} alt={product.productName} />

      <p>{product.productName}</p>

      <strong>
        {product.price.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})}
      </strong>

<p className="products__installments">
  ou em até 10x sem juros
</p>

<span className="products__shipping">
  Frete grátis
</span>

<button type="button">
  COMPRAR
</button>
    </div>
  ))}
</div>
      </div>
    </section>
    {selectedProduct && (
  <ProductModal
    product={selectedProduct}
    onClose={() => setSelectedProduct(null)}
  />
)} </>
  )
}

export default Products