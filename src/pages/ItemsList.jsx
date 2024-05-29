import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Provider } from 'react-redux';
import AppStore from '../utils/AppStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ItemsList({ items }) {
  // console.log(items)

  const dispatch = useDispatch();
  const handelBtn = (item)=>{
    toast.success("item added successfully")
    dispatch(addItem(item))
  }
  const imgLink =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

  return (
<Provider store={AppStore}>
    <div>
    <ToastContainer className="custom-toast-container"
        autoClose={5000} // Close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
      {items.itemCards?.length > 1
        ? items.itemCards?.map((v, i) => {
            return (
              <>
                <div
                  key={v.card.info.id}
                  className="flex justify-between  border-b-2 p-2 mb-3"
                >
                  <div className=" w-9/12 ">
                    <h1 className="text-[16px] font-medium ">
                      {v.card?.info?.name}
                    </h1>
                    <p className="text-gray-500 text-[12px]">
                      {v.card?.info?.description}
                    </p>
                    <p>₹{v.card.info.price / 100}</p>
                  </div>
                  <div className="item-end w-3/12  rounded relative ">
                    <div className="w-[150px] mx-auto">
                      <img alt="image"
                        src={imgLink + v.card.info.imageId}
                        
                        className="w-100" 
                      />
                    </div>
                    <button className="absolute bg-black p-2 left-[41%] top-[60px] z-10  rounded text-white px-3" onClick={()=>handelBtn(v)}>
                      add+
                    </button>
                  </div>
                </div>
              </>
            );
          })
        : "" 
      
        }
    </div>
    </Provider>
  );
}
