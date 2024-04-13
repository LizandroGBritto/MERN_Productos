import { useState, useEffect } from 'react'
import useForm from '../hooks/useForm'
import axios from 'axios';
import Swal from 'sweetalert2';
import Form from './Form';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';




const UpdateProduct = () => {


    const { id } = useParams();

    const initialValues = {
        productName: 'cargando...',
        productPrice: 'cargando...',
        productDescription: 'cargando...'
    };
    const navigate = useNavigate();

    const { values: product, handleChange, setValues } = useForm(initialValues);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res);
                setValues({
                productName: res.data.product.productName,
                productPrice: res.data.product.productPrice,
                productDescription: res.data.product.productDescription
            });
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(res => {
                console.log(res);
                setError('');
                Swal.fire({
                    icon: 'success',
                    title: 'Excelente',
                    text: 'Actualizaste un producto!',
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

export default UpdateProduct;
