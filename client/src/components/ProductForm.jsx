import { useState } from 'react'
import useForm from '../hooks/useForm'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const ProductForm = ({ updateProduct }) => {
    const initialValues = {
        productName: '',
        productPrice: 0,
        productDescription: ''
    };
    const navigate = useNavigate();

    const { values: product, handleChange, clearData } = useForm(initialValues);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res => {
                console.log(res);
                updateProduct(res.data.product);
                clearData();
                setError('');
                Swal.fire({
                    icon: 'success',
                    title: 'Excelente',
                    text: 'Agregaste un nuevo producto!',
                });
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                setError(err.response?.data?.error?.message || 'An error occurred');
            });
    };

    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <h2 className='text-center'>Add Product</h2>
                    <Link to="/" className="btn btn-danger ">Cancel</Link>
                </div>
            </nav>
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
        </div>
    )
}

export default ProductForm;
