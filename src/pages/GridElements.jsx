import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ItemsList from "./ItemsList";
import { Provider } from 'react-redux';
import AppStore from '../utils/AppStore'
export default function GridElements({ gridData, showIndex}) {
  console.log(gridData)
  const openAccordian = () => {

  };

  return (
 
    <div>
      {gridData?.cards?.length > 1 ? (
        gridData?.cards?.map((v, i) => (
          <div key={i}>
            <div
              className="flex justify-between items-center py-3 border-b-2 shadow-lg cursor-pointer px-2"
              onClick={openAccordian}
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
            </div>

            {showIndex === i ? <ItemsList items={v.card?.card} /> : null}
          </div>
        ))
      ) : (
        <h2>hhhhh</h2>
      )}
    </div>

  );
}
