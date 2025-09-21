import cottonSocksImg from "./assets/cotton-socks.png";
import plainTShirtImg from "./assets/plain-t-shirt.png";
import TennisBallImg from "./assets/tennis-balls.png";
import "./App.css";

function App() {
  return (
    <>
      <ProductDetails
        productName="Cotton Socks"
        price="10.90"
        discountprice="5.45"
        imgSrc={cottonSocksImg}
      />
      <ProductDetails
        productName="Tennis Ball"
        price="6.00"
        imgSrc={TennisBallImg}
      />
      <ProductDetails
        productName="Plain T Shirt"
        price="7.99"
        imgSrc={plainTShirtImg}
      />
    </>
  );
}

const ProductDetails = ({ productName, price, discountprice, imgSrc }) => {
  return (
    <>
      <h1>{productName}</h1>
      <img src={imgSrc} alt={`${productName} image`} width={150} />
      <div>
        {discountprice ? (
          <>
            <del>price: ${price}</del>
            <p>Discount Price: ${discountprice}</p>
          </>
        ) : (
          <p>price: ${price}</p>
        )}
      </div>
      <button>Add to cart</button>
    </>
  );
};

function LoginForm() {
  return (
    <>
      <div>
        <input type="text" placeholder="Email" />
      </div>

      <div>
        <input type="password" placeholder="Password" />
      </div>

      <button>Login</button>
      <button>Signup</button>
    </>
  );
}

export default App;
