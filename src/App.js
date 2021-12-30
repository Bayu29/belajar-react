import { useState, useEffect } from "react";
import ProductList from "./component/ProductList"

function App() {

  //const [title, setTitle] = useState('Hello World');

  // const clickMe = (name) => {
  //   console.log('Halo : ' + name);
  // }

  // const changeTitle = () => {
  //   setTitle("Title changed");
  // }

  const [products, setProducts] = useState([
    { id: 1, title: "Products 1", price: 899 },
    { id: 2, title: "Products 2", price: 901 },
    { id: 3, title: "Products 3", price: 599 },
    { id: 4, title: "Products 4", price: 699 },
    { id: 5, title: "Products 5", price: 799 },
  ]);

  const [name, setName] = useState('Bayu');

  // return (
  //   <div>
  //     <Header/>
  //     <button onClick = { () => clickMe('Bayu') } >Click Me</button>
  //   </div>
  // );

  // return (
  //   <div>
  //    <h1>{ title }</h1>
  //    <button onClick={ changeTitle }>Change Title</button>
  //   </div>
  // )

  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  }

  useEffect(() => {
    console.log('Use Effect Running');    
  }, [name]);

  return  (
    <div>
     <ProductList products={ products } deleteProduct={ deleteProduct }/>
     <button onClick={ () => setName('Jhon') }>Change Name</button>
     <p>Name: { name } </p>
    </div>
  )
}

export default App;
