import Productcard from '../../componenets/productcard/Productcard.jsx'
import './home.css'
import Productdata from '../../assets/jsondata/Productdata.json'
import Searchbar from '../../componenets/searchbar/Searchbar.jsx'
import { useState } from 'react'
import Addtocart from '../../componenets/Addtocart.jsx'


function Home() {
  
  let [Cart,cartupdate]=useState(() => {
    try { return JSON.parse(localStorage.getItem('cart')) || []; }
    catch { return 0; }
      });

function addToCart(indx, ic) {
  cartupdate(prevCart => {
    const found = prevCart.findIndex(item => item[0] === indx);
    let updated;
    if (found !== -1) {
      updated = [...prevCart];
      updated[found][1] = ic;
    } else {
      updated = [...prevCart, [indx, ic]];
    }
    localStorage.setItem("cart", JSON.stringify(updated)); // Save
    return updated;
  });
}
//end of addToCart

function removeFromCart(indx, ic) {
  cartupdate(prevCart => {
    const found = prevCart.findIndex(item => item[0] === indx);
    let updated = [...prevCart];
    if (found !== -1) {
      updated[found][1] = ic;
      if (updated[found][1] === 0) updated.splice(found, 1);
    }
    localStorage.setItem("cart", JSON.stringify(updated)); //  Save
    return updated;
  });
}

  function cartCompare1(id) {
  const pid = (id);  
  for (let j = 0; j < Cart.length; j++) {
    if (pid === (Cart[j][0])) {
      return Cart[j][1];   
    }
  }
  return 0;                 
}

  const[search,searchupdate]=useState("");
  const ProductData = Productdata.product;
  var filteredProducts;
    if(search!=""){

  filteredProducts = ProductData.filter(product =>
  product.name.toLowerCase().includes(search.toLowerCase()));
 
  }
  else{
    filteredProducts=ProductData;
    //filteredProducts.sort((a,b)=>a.name.localeCompare(b.name));
  }

  return (
    <>
      <section className='prdCrdsection'>
        <Searchbar searchupdate={searchupdate}/>
         {/* <button onClick={console.log(Cart)}>checker</button>  */}
        {filteredProducts.map(product => (
          <Productcard
            key={product.id}
            id={product.id}
            prdname={product.name}
            stock={product.stock}
            cost={product.price}
            imgUrl={product.imgUrl}
            inCart={cartCompare1(product.id)}
            cartadd={addToCart}          // function
            cartremove={removeFromCart}  // function
          />
          
        ))}
      </section>
    </>
  );

}

export default Home;
