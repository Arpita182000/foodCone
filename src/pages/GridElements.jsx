import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ItemsList from "./ItemsList";
import { Provider } from 'react-redux';
import AppStore from '../utils/AppStore';

export default function GridElements({ gridData }) {
  const [showIndex, setShowIndex] = useState([]);

  // console.log(gridData);

  const openAccordion = (index) => {
    setShowIndex((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      {gridData?.cards?.length > 1 ? (
        gridData?.cards?.map((v, i) => (
          <div key={i} className="my-6">
            {v.card?.card?.title &&  
             <div
              className="flex justify-between items-center py-3 border-b-2 shadow-['0 2px 4px rgba(0, 0, 0, 0.1)] cursor-pointer px-2"
              onClick={() => openAccordion(i)}
            >

              
              <h1 className="text-black text-lg font-bold rounded">
                {v.card?.card?.title}&nbsp;
                
                {v.card.card?.itemCards?.length
                  ? `(${v.card.card?.itemCards.length})`
                  : ""}
              </h1>
              <div>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>}
          
            {showIndex[i] && <ItemsList items={v.card?.card} />}
          </div>
        ))
      ) : (
        <h2>Items are not found!!!</h2>
      )}
    </div>
  );
}
