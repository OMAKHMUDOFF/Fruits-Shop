import { Data } from "../data/Data";

export function Rec() {
  return (
    <>
      <section id="Recomendation">
        <div className="c-title">
          <p>For you</p>
          <h1>Top featured products</h1>
        </div>
        {/* <div className="r-cards">
          {state.map((elem, i) => {
            return (
              <div className="r-card" key={elem.id}>
                <div className="disc-like">
                  <div className="disc">
                    <p>{elem.disc}% off</p>
                  </div>
                  <div className="likes">
                    <button onClick={() => like(elem)}>
                      {elem.like ? (
                        <i class="fa-solid fa-heart"></i>
                      ) : (
                        <i class="fa-regular fa-heart"></i>
                      )}
                    </button>
                  </div>
                </div>
                <div className="product-img">
                  <img src={elem.img} alt="" />
                </div>
                <div className="r-title">
                  <div className="desc">
                    <p>{elem.desc}</p>
                  </div>
                  <div className="title">
                    <h3>{elem.title}</h3>
                  </div>
                  <div className="price">
                    <p>
                      ${parseInt(elem.price - (elem.disc / 100) * elem.price)}
                      <del>${elem.price}</del>
                    </p>
                  </div>
                </div>
                <div className="btns-cart">
                  <div className="r-btns">
                    <button onClick={() => minus(elem)}>-</button>
                    <div className="r-num">{elem.num}</div>
                    <button onClick={() => plus(elem)}>+</button>
                  </div>
                  <div className="r-cart">
                    <button onClick={() => cart(elem)}>
                      {elem.cart ? (
                        <i class="fa-solid fa-check"></i>
                      ) : (
                        <i class="fa-solid fa-cart-arrow-down"></i>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
        <Data />
      </section>
    </>
  );
}
