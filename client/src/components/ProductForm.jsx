import { useState } from 'react'
import useForm from '../hooks/useForm'
import Form from './Form'
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
            <Form handleSubmit={handleSubmit} error={error} product={product} handleChange= {handleChange}/>
        </div>
    )
}

export default ProductForm;
