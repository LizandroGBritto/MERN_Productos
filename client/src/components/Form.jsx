
const Form = ({handleSubmit, error, handleChange, product}) => {



    
    return (
        <form onSubmit={handleSubmit}>
                <div className="d-inline-block m-5 ">
                    <div>
                        <label className='mt-3'> Nombre del Producto</label>
                        <input className='form-control' type="text" name="productName" value={product.productName} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='mt-3'>Precio</label>
                        <input className='form-control' type="number" name="productPrice" value={product.productPrice} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='mt-3'>Descripcion del Producto</label>
                        <input className='form-control' type="text" name="productDescription" value={product.productDescription} onChange={handleChange} />
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>Enviar</button>
                <div className="text-danger">{error}</div>
            </form>
    )
}

export default Form