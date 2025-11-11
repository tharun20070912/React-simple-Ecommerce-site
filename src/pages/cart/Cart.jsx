import './cart.css';
import Productdata from '../../assets/jsondata/Productdata.json';

function Cart() {

//   function cash() {

//     let a = confirm("Confirm Payment");
//     if(!a==true){alert("Payment cancelled")}
//     alert("payment successful");
//     afterpay();

// }

// function coupcode() {
//     let coupcode = 987;
//     if (incoup == coupcode) {
//         alert("Coupen code applied");
//         mycart.total -= mycart.total / 100 * 10;
//         document.getElementById('totals').innerHTML = "TOTAL AMOUNT: ₹" + mycart.total;
//     }
//     else if(incoup<100||incoup>999){
//         alert("Incorrect Coupen code\n Code should contain only 3 digits");
//     }
//     else if(incoup!=coupcode&&incoup<1000||incoup>99){
//         alert("Incorrect Coupen code");
//     }
// }

// function payment() {
//     if(mycart.total!=0){
//         let password = 123456;
//         let passin = prompt("Enter you 6 digit pin");
//         if (passin == password) {
//             alert("Transation of rs. " + mycart.total + " has been completed Successfully!");
//             afterpay();
//         }
//         else if(passin!=password){alert("Incorrect pin!");}
//         else if(passin==NaN){
//             alert("UPI pin should contain only numbers of 6 Digits\nCharecters are not allowed");
//         }
//         else if(passin<100000||passin>999999){alert("The pin must contain only 6 digits.")}
//     }
//     else{alert("Please add products to the cart to buy");}
// }
// function upi(){
//         if(mycart.total!=0){
//         let inupi=prompt("Enter your upi ID");
//         if (!inupi){
//             let conf=confirm("Please enter an UPI ID to continue transation\n press cancel for payment cancellation")
//             if(conf==true){
//                 upi();
//             } 
//         }
//     if(inupi.toString().includes("@")){alert("Payment request sent successfully")}
//     else if(!inupi.toString().includes("@")){alert("Invalid UPI ID")}
//     }
//     else{alert("Please add products to the cart to buy");} 
// }


  //////////////////////////////////////////
  const productdata = Productdata.product;
  const saved = localStorage.getItem("cart");
  const savedcart = saved ? JSON.parse(saved) : [];
  const cartItems = [];
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
    {/* <section id="payment">
         
            <label><h1>ENTER COUPEN CODE:</h1><p style="margin-top:-50px;margin-left: 330px;">If any</p><input style="margin-top: 15px;" type="number" id="coup"></input></label>
        <button class="but" onClick="coupcode()">Apply</button>
        <h1>CHOOSE A PAYMENT METHOD:</h1>
        <button class="but" onClick="cash()">Cash</button>
        <button class="but" onClick="payment()">G-pay</button>
        <button class="but" onClick="upi()">UPI</button>
        
    </section> */}
    </>
  );
}

export default Cart;
