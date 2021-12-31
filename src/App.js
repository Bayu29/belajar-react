import { useState } from "react";
import ProductList from "./component/ProductList"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./component/AddProduct";
import EditProduct from "./component/EditProduct";


function App() {

  const [products, setProducts] = useState([
    { id: 1, title: "Products 1", price: 899 },
    { id: 2, title: "Products 2", price: 901 },
    { id: 3, title: "Products 3", price: 599 },
    { id: 4, title: "Products 4", price: 699 },
    { id: 5, title: "Products 5", price: 799 },
  ]);


  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/">
            <ProductList products={products} deleteProduct={deleteProduct} />
          </Route>
          <Route exact path="/add">
            <AddProduct />
          </Route>
          <Route exact path="/edit/:id">
            <EditProduct />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
