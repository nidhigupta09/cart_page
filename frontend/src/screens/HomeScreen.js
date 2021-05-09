import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";


const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

   
 return <div className="homescreen">

 <div>
 <nav class="navbar-bar">

  <ul class="navbar-nav">
  
  
  <li>
  <img src="https://ik.imagekit.io/dunzo/icons/website/bluegreen/category/grocery.png?tr=w-88,h-88,cm-pad_resize" height="50px"
    align="left"
  /></li>
    <h1><strong> Groceries & Essentials in Bangalore 197</strong></h1>
    
      
    


  </ul>
</nav>


</div>
<br></br>
<br></br>
<br></br>
<br></br>
      
      <div className="homescreen__products">

      
      {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>

    </div>;
};

export default HomeScreen;