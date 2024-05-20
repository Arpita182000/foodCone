import React, { useState } from "react";
import SecondSlider from "../slider/SecondSlider";
import { RestApi } from "../Api/RestApi";
import imageLink from "../Api/CDN-LINK";
import MainSec from "../slider/MainSec";
import RestPortion from "./RestPortion";
import { Link } from "react-router-dom";
import UseContext from "../utils/UseContext";
import { useContext } from "react";
import { Provider } from 'react-redux';
import AppStore from '../utils/AppStore'
export default function Course() {
  const {loggedInUser} = useContext(UseContext)
  const [secondSlide, setSliderData] = useState({
    restApi: RestApi[0].data?.cards[1].card,
    imageLink: imageLink,
  });
  const [thirdSlide, setthirdSliderData] = useState({
    restApi: RestApi[0].data?.cards[4].card,
    imageLink: imageLink,
  });

  console.log(thirdSlide.restApi.card.gridElements.infoWithStyle.restaurants[0].info.id)
  const [fApi2, setfApi2] = useState(RestApi[0].data.cards[6].card);
  const [fApi, setfApi] = useState(RestApi[0].data.cards[7].card);
  const [fApi3, setfApi3] = useState(RestApi[0].data.cards[8].card);

  const [heading, setHeading] = useState(
    RestApi[0].data?.cards[2]?.card.card.title
  );

  return (

    <div>
      <SecondSlider secondSlide={secondSlide} />
      <div className="container border-b-2 border-[slate-200] ">
        <div className="best-seller">
          <h4 className=" font-extrabold text-2xl my-3 px-2 ">{loggedInUser},{heading}</h4>
          <div className="flex flex-wrap gap-3 my-4">
            <div className="text-[14px] px-3 py-[5px] border-2 border-gray rounded-full">
              Sort By
            </div>
            <div className="text-[14px] px-3 py-[5px] border-2 border-gray rounded-full">
              Filter
            </div>
            <div className="text-[14px] px-3 py-[5px] border-2 border-gray rounded-full">
              Fast Delivary
            </div>
            <div className="text-[14px] px-3 py-[5px] border-2 border-gray rounded-full">
              Offers
            </div>
            <div className="text-[14px] px-3 py-[5px] border-2 border-gray rounded-full">
              Rating 4.0+
            </div>
            <div className="text-[14px] px-3 py-[5px] border-2 border-gray rounded-full">
              Pure Veg
            </div>
            <div className="text-[14px] px-3 py-[5px] border-2 border-gray rounded-full">
              Rs.300-Rs.600
            </div>
            <div className="text-[14px] px-3 py-[5px] border-2 border-gray rounded-full">
              Less than Rs.300
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 best-container border-[danger]">
  {thirdSlide.restApi.card?.gridElements?.infoWithStyle?.restaurants?.map((restaurant, i) => (
    <Link key={restaurant.info.resId} to={"/pagesWithId/" + restaurant.info.id}>
      <MainSec restaurant={restaurant} />
    </Link>
  ))}
</div>

          
        </div>
      </div>
      <RestPortion fApi={fApi} fApi2={fApi2} fApi3={fApi3} />
    </div>

  );
}
