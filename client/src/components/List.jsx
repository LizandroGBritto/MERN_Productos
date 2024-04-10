import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';

const List = ({ products, setProducts }) => {

    const deleteOne = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                Swal.fire({
                    icon: "success",
                    title: "Eliminado",
                    text: "Eliminaste un nuevo Producto!"                });
                    setProducts(products.filter(product => product._id !== productId))
            })
            .catch(err => {
                console.log(err)
            })
    }

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.products)
                setIsLoading(false)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [setProducts])

    if (isLoading) return <h1>Loading...</h1>


    return (
        <div>
            <nav className="navbar ">
                <div className="container-fluid">
                <h2 className='text-center'>Lista de Productos</h2>
                <Link to="/new" className="btn btn-primary ">Añadir Producto</Link>
                </div>
            </nav>
            <div className="d-flex flex-column align-items-center ">
                {products.map(product => (
                    <div className="col-sm-8 mb-3 mt-3 mb-sm-0 bg-warning" key={product._id}>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-evenly  ">
                                    <div>
                                        <h4 className="card-title">{product.productName}</h4>
                                    </div>
                                    <div className="ml-auto">
                                        <Link className="btn btn-warning m-2" to={`/products/${product._id}`}>Ver producto</Link>
                                        <Link className="btn btn-warning m-2" to={`/products/${product._id}/update`}>Actualizar producto</Link>
                                        <button className="btn btn-danger m-2" onClick={() => deleteOne(product._id)}>Eliminar Producto</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default List;
