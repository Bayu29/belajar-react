import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList= () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async() => {
        const response = await fetch('http://localhots:8000/products');
        const data = await response.json();
        setProducts(data);
    }

    const deleteProduct = async(id) => {
        await fetch(`https://localhost:8000/products/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        fetchData();
    }
}

;




export default ProductList