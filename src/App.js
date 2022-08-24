import logo from './logo.svg';
import './App.css';
// import zomato from './components/zomato.js';
import Collections from './components/zomato.js'; 
function App() {
  const order = [
    {
        item: "Noodles",
        offer: "20% Offer",
        restaurant: "Taj Hotel",
        price: "Rs.210 "
    },
    {
        item: "Cold Coffee",
        offer: "10% Offer",
        restaurant: "Cafe Bar",
        price: "Rs.110"
    },
    {
        item: "Ice-Cream",
        offer: "10% Offer",
        restaurant: "Arun Ice-Creams",
        price: "Rs.150"
    },
    {
        item: "Biriyani",
        offer: "25% Offer",
        restaurant: "Hotel Azad",
        price: "Rs.250"
    }
]
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="headerwrapper">
            <h1 className="logo">ZOMATO</h1>
            <nav>
              <a className='navi' href="#">Investor Relations</a>
              <a className='navi' href="#">Add restaurant</a>
              <a className='navi' href="#">Log in</a>
              <a className='navi' href="#">Sign up</a>
            </nav>
          </div>
        </div>
      </header>
      <Collections item={order[0].item} offer={order[0].offer} restaurant={order[0].restaurant} price={order[0].price}></Collections>
      <Collections item={order[1].item} offer={order[1].offer} restaurant={order[1].restaurant} price={order[1].price}></Collections>
      <Collections item={order[2].item} offer={order[2].offer} restaurant={order[2].restaurant} price={order[2].price}></Collections>
      <Collections item={order[3].item} offer={order[3].offer} restaurant={order[3].restaurant} price={order[3].price}></Collections>
      
    </div>
  );
}

export default App;
