import './styles.css';
import Perfume from './assets/product.jpg';

export function App() {
  return (
    <>
      <main>
        <section className="card">
          <div className="image">
            <img src= {Perfume} />
          </div>
          <div className="description">
            <h2>PERFUME</h2>
            <div className="title">
              <h1>Gabrielle</h1>
              <h1>Essence Eau De</h1>
              <h1>Parfum</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam placeat facere quam tempora, repellat magnam quod nobis mollitia quo eveniet!</p>
            <div className="price">
              <p>$149.99</p>
              <p>$169.99</p>
            </div>
            <div className="button">
              <button type="button" className="btn-buy">Add to Cart</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}