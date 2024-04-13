import { useState, useEffect } from 'react';
import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

const List = ({ products, setProducts }) => {

    const deleteProduct = (productId) => {
        setProducts(products.filter(product => product._id !== productId));
    };

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
                                        <DeleteButton productId={product._id} onDelete={deleteProduct} />
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
