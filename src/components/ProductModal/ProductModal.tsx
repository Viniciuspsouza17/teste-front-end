import './ProductModal.scss'

interface Product {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

interface ProductModalProps {
  product: Product
  onClose: () => void
}

function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        >
           ×
        </button>

        <img src={product.photo} alt={product.productName} />

        <div className="modal__info">
          <h2>{product.productName}</h2>

          <p>{product.descriptionShort}</p>

          <strong>
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
        </div>
      </div>
    </div>
  )
}

export default ProductModal