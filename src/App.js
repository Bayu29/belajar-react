import { useState } from "react";
import ProductList from "./component/ProductList"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";


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
        <Switch>
          <Route exact path="/">
            <ProductList products={products} deleteProduct={deleteProduct} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
