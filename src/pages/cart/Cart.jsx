import './cart.css';
import Productdata from '../../assets/jsondata/Productdata.json';

function Cart() {       

    const handlecash=()=> {     //used the program from my js task vending machine
      if(cartItems.length!=0){
     let a = confirm("Confirm Payment");
     if(!a==true){alert("Payment cancelled");return 0;}
     alert("payment successful");
     afterpay();
      }else{alert("Please add products to the cart to buy");} 
     return 0;
 }

 const handlegpay=()=> {    //used the program from my js task vending machine
     if(cartItems.length!=0){
         let password = 123456;
         let passin = prompt("Enter you 6 digit pin");
         if (passin == password) {
             alert("Transation of rs. " + total + " has been completed Successfully!");
             afterpay();
         }
         else if(passin!=password){alert("Incorrect pin!");}
         else if(passin==NaN){
             alert("UPI pin should contain only numbers of 6 Digits\nCharecters are not allowed");
         }
         else if(passin<100000||passin>999999){alert("The pin must contain only 6 digits.")}
     }
     else{alert("Please add products to the cart to buy");}
 }

 const handleupi=()=>{        //used the program from my js task vending machine
         if(cartItems.length!=0){
         let inupi=prompt("Enter your upi ID");
         if (!inupi){
             let conf=confirm("Please enter an UPI ID to continue transation\n press cancel for payment cancellation")
             if(conf==true){
                 upi();
             } 
         }
     if(inupi.toString().includes("@")){alert("Payment request sent successfully");afterpay();}
     else if(!inupi.toString().includes("@")){alert("Invalid UPI ID")}
     }
     else{alert("Please add products to the cart to buy");} 
 }
function afterpay(){  //used the program from my js task vending machine
  cartItems=[];

  localStorage.setItem("cart", JSON.stringify(cartItems)); 
  alert("Thanks for purchasing in EZ_CART ;)")
    return(window.location.reload());
}

  ////////////////////////////////////////// end of payment function
  const productdata = Productdata.product;
  const saved = localStorage.getItem("cart");
  var savedcart = saved ? JSON.parse(saved) : [];
  var cartItems = [];
if (savedcart.length!=0){
  for (let i = 0; i < savedcart.length; i++) {
    const temp = Number(savedcart[i][0]) - 1;
    cartItems.push({
      id: savedcart[i][0],
      name: productdata[temp].name,
      price: productdata[temp].price,
      subtotal: productdata[temp].price * savedcart[i][1],
      qty: savedcart[i][1],
      imgUrl: productdata[temp].imgUrl,
    });}
  }

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <>
    <section id="cartsection">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <table id="tab">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.imgUrl || './src/assets/images/image_not_available.png'}
                    alt={item.name}
                    width="80"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>{item.subtotal}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total:</td>
              <td>{total}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </section>
     <section id="payment">
        <h1>CHOOSE A PAYMENT METHOD:</h1>
        <button className="mybutton" onClick={handlecash}>Cash</button>
        <button className="mybutton" onClick={handlegpay}>Gpay</button>
        <button className="mybutton" onClick={handleupi}>UPI</button>
    </section> 
    </>
  );
}

export default Cart;
