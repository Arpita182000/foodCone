import React, { useState } from "react";
import cart from "../image/p.avif";
import Header from "../common/Header";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../utils/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const handelClearAll = () => {
    dispatch(clearItem());
  };
  let [count, setCount] = useState(1);
  const handelCount = (index) => {

    // Increment count, but ensure it doesn't go below 0
    setCount((prevCount) => Math.max(prevCount + 1, 0));
  };

  const handelMinusCount = (index) => {
    // Decrement count, but ensure it doesn't go below 0
    setCount((prevCount) => Math.max(prevCount - 1, 0));
    if (index === 0) {
      dispatch(removeItem());
    }
  };
  const cartItems = useSelector((store) => store.cart.items);
  const imgLink =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

  return (
    <>
      <Header />
      {cartItems.length > 0 ? (
        <>
          <div className="fulcontainer store-pr my-20">
            <div className="row container st-title">
              <span className="text-lg font-extrabold">Cart</span>
            </div>
          </div>
          <div className="max-w-[950px] p-5 mx-auto ">
            <div className="sm:flex justify-between items-center   ">
              <h3 className="uppercase font-bold sm:text-center">fproduct</h3>
              <div className="flex  justify-between items-center  uppercase font-bold text-[16px] gap-10 tracking-wide py-5 ">
                <span>price</span>
                <span>qty</span>
                <span>unitprice</span>
              </div>
            </div>
            {cartItems.map((v, index) => (
              // console.log(v.card.length)
              <div key={index} className="mb-[8%] border-2">
                <div className="max-w-[950px]  p-5 mx-auto ">
                  <div className="mb-[1px]">
                    <div className="">
                      <div className="sm:flex block justify-between items-center  my-4">
                        <div className="flex justify-center items-center sm:block w-100 rounded mb-3 ">
                          <img
                            alt=""
                            src={imgLink + v.card.info.imageId}
                            className="rounded w-100 h-100"
                          />
                        </div>
                        <h4 className=" flex justify-between items-center font-bold basis-[450px] px-4">
                          {v.card?.info?.name}
                        </h4>
                        <h2 className="basis-[300px]">
                          <div className="flex justify-between items-center  uppercase font-bold text-[16px] gap-10 tracking-wide py-5 border-b border-gray">
                            <span>₹{v.card.info.price / 100}</span>
                            <div className="flex justify-between items-center  price-qn">
                              <h2>
                                <button
                                  className="bg-gray-300 text-black px-1"
                                  onClick={() => handelMinusCount(index)}
                                >
                                  -&nbsp;
                                </button>
                                <span className="cursor-pointer px-3">
                                  {count}&nbsp;
                                </span>
                                <button
                                  className="bg-gray-300 text-black px-1"
                                  onClick={()=>handelCount(index)}
                                >
                                  +&nbsp;
                                </button>
                              </h2>
                            </div>
                            <span>
                              ₹{(v.card.info.price / 100) * `${count}`}
                            </span>
                          </div>
                        </h2>
                      </div>
                    </div>
                    {/* for small screen */}
                    {/* <div className="block md:hidden">
                      <div className="flex justify-center items-center border-b border-black ">
                        <h3 className="uppercase font-bold text-center text-xl my-5">
                          fproduct
                        </h3>
                      </div>
                      <div className="flex md:flex-row justify-between items-center sm:flex  my-4">
                        <div className="">
                          <img alt="" src={cart} />
                        </div>
                        <div className="flex-col border-2">
                          <h4 className="flex justify-between items-center font-bold text-[13px] px-4">
                            philips huia 7w br30 connected downlight lamp
                          </h4>
                          <h2 className=" p-5">
                            <div className=" flex justify-between items-center border-b border-gray">
                              <div className="my-2">
                                <h3> price</h3>
                              </div>
                              <div className="">
                                <h2>$999</h2>
                              </div>
                            </div>
                            <div className=" flex justify-between items-center border-b border-gray">
                              <div className="my-2">
                                <h3> qty</h3>
                              </div>
                              <div className="flex justify-between items-center  price-qn">
                                <h2>
                                  <span>-&nbsp;</span>
                                  <span>2&nbsp;</span>
                                  <span>+&nbsp;</span>
                                </h2>
                              </div>
                            </div>
                            <div className=" flex justify-between items-center border-b border-gray">
                              <div className="my-2">
                                <h3> unitprice</h3>
                              </div>
                              <div className="">
                                <h2>498</h2>
                              </div>
                            </div>
                          </h2>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
            <button
              className="bg-black text-white px-5 py-3  rounded mx-auto block my-5"
              onClick={handelClearAll}
            >
              remove all
            </button>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 border-t border-grey pt-[23px] box-border ">
              <div className="p-5 min-[250px]:mx-auto   ">
                <form className="flex items-center max-w-100 border border-gray-300">
                  <input
                    type="text"
                    className="sm:p-3 sm:px-7  p-2 px-[5px] "
                    placeholder="Voucher Code"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white sm:py-3 sm:px-7 p-2 px-[5px] "
                  >
                    Redeem
                  </button>
                </form>
              </div>
              <div className="p-5 border-l border-grey">
                <div className="access-div">
                  <div className="row menu-con-title">
                    <span>Subtotal</span>
                    <span>998</span>
                  </div>
                  <div className="row menu-con-title">
                    <span>Shipping Fee</span>
                    <span>60</span>
                  </div>
                  <div className="row menu-con-title">
                    <span>Coupon</span>
                    <span>No</span>
                  </div>
                  <div className="row cart-last-title">
                    <h2>TOTAL</h2>
                    <h2>1018</h2>
                  </div>
                </div>
                <div className="check-div">
                  <h4 className="check-div-btn-title"> Check out</h4>
                </div>
              </div>
            </div> */}
          </div>
        </>
      ) : (
        <div className="fulcontainer store-pr my-20">
          <div className="row container st-title">
            <span className="text-lg font-extrabold">Your cart is empty</span>
          </div>
          <div className="flex justify-center items-center py-[20%] text-lg font-bold">
            your Cart looks empty!!!!!!!!!!!!😭
          </div>
        </div>
      )}
    </>
  );
}
