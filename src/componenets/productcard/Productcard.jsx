import './productcard.css'
import Addtocart from '../Addtocart'
function Productcard(props) {
  return (
    <div className="prdCrdframe"><div className="prdCrdimg">
        <img alt='Image not found' src={props.imgUrl ? props.imgUrl : 'src/assets/images/image_not_available.png'}></img></div>
            <div className="prdinfo">
                <h2>{props.prdname}</h2>
                <Addtocart stock={props.stock} cost={props.cost} key={props.key} inCart={props.inCart} id={props.id}  cartadd={props.cartadd}
  cartremove={props.cartremove}  />
            </div>
    </div>
  );
}       

export default Productcard;
