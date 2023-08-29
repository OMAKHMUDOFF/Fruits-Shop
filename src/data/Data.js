import { useState } from "react";
import apricot from "../img/rec/apricot.png";
import cucumber from "../img/rec/cucumber.png";
import nuts from "../img/rec/nuts.png";
import brokoli from "../img/rec/brokoli.png";
import quince from "../img/rec/quince.png";

export function Data() {
  let [state, setState] = useState([
    {
      id: 1,
      disc: 15,
      like: false,
      img: apricot,
      desc: "Available(in stock)",
      title: "Fresh organic apricot",
      price: 15,
      num: 1,
      cart: false,
    },
    {
      id: 2,
      disc: 15,
      like: false,
      img: cucumber,
      desc: "Available(in stock)",
      title: "Cucumber",
      price: 15,
      num: 1,
      cart: false,
    },
    {
      id: 3,
      disc: 15,
      like: false,
      img: nuts,
      desc: "Available(in stock)",
      title: "Hazelnuts filbert nut",
      price: 15,
      num: 1,
      cart: false,
    },
    {
      id: 4,
      disc: 15,
      like: false,
      img: brokoli,
      desc: "Available(in stock)",
      title: "raw broccoli",
      price: 15,
      num: 1,
      cart: false,
    },
    {
      id: 5,
      disc: 15,
      like: false,
      img: quince,
      desc: "Available(in stock)",
      title: "Organic quince",
      price: 15,
      num: 1,
      cart: false,
    },
  ]);

  function plus(obj) {
    setState(
      state.map((item, i) => {
        return item.id === obj.id ? { ...item, num: item.num + 1 } : item;
      })
    );
  }
  function minus(obj) {
    if (obj.num > 1) {
      setState(
        state.map((item, i) => {
          return item.id === obj.id ? { ...item, num: item.num - 1 } : item;
        })
      );
    } else {
      alert("Can't go below one");
    }
  }

  function like(obj) {
    setState(
      state.map((like) => {
        return like.id === obj.id ? { ...like, like: !like.like } : like;
      })
    );
  }
  function cart(obj) {
    setState(
      state.map((cart) => {
        return cart.id === obj.id ? { ...cart, cart: !cart.cart } : cart;
      })
    );
  }
  return (
    <>
      <div className="r-cards">
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
                      <i className="fa-solid fa-heart"></i>
                    ) : (
                      <i className="fa-regular fa-heart"></i>
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
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
