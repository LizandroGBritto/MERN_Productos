import { useParams, Link } from "react-router-dom"
import useAxios from "../hooks/useAxios"


const Detalle = () => {

    const { id } = useParams()
    const { data, isLoading, error } = useAxios(`http://localhost:8000/api/products/${id}`)


    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    const { product } = data

    return (
        <>
            <nav className="navbar ">
                <div className="container-fluid">
                    <h2 className='text-center ml-3'>Vista a detalle del  Producto</h2>
                    <Link to="/" className="btn btn-danger ">Go Back</Link>
                </div>
            </nav>

            <div className="d-flex">
                <div className="p-2 flex-fill">
                    <div className="card">
                        <div className="card-header">
                        <h1>{product.productName}</h1>
                    <p>Precio: {product.productPrice}</p>
                    <p>Descripcion: {product.productDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Detalle