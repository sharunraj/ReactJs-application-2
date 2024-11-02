import React from 'react'

const ProductItem = (props) => {
  return (
    <>
        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card">
                <img src={props.product.image} alt={props.product.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    <p className="card-text">{props.product.description}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    </>
)
}

export default ProductItem