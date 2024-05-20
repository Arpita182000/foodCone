import React, { useContext } from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import { useParams } from "react-router-dom";
import GridElements from "./GridElements";
import UseContext from "../utils/UseContext";
import { Provider } from 'react-redux';
import AppStore from '../utils/AppStore'

export default function PagesWithId() {
  const {id} = useParams();
  // console.log(id)


  const [resInfo, setResinfo] = useState(null);
  const [gridData,setGridData]= useState();
  const [showIndex,setShowIndex]=useState(1);


  useEffect(() => {
    getData();
  }, []);
 
 
  let getData = () => {
    axios
      .get(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1744548&lng=88.5605732&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
      )
      .then(function (response) {
        setResinfo(response.data.data.cards[2]?.card.card.info)
        // let getApiData = {
        //   icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/",
        //   data: response.data?.data?.cards[0]?.card?.card?.info,
        // };


        // setResinfo(getApiData);
        let GridData = response.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
        console.log(GridData)
        setGridData(GridData)
       
        
       
      });
  };

  const onlineStatus = useOnlineStatus();
  // const {setUserName,loggedInUser}=useContext(UseContext);
  if (onlineStatus === false) return <h1>Your internet is not working</h1>;

  // const {name,cuisine,area,rating} = resInfo[0].card.card.info;
  if (resInfo === null) return <Shimmer></Shimmer>;
  return (
    <Provider store={AppStore}>
    <div>
      <Header />
      <div className="max-w-[1120px] my-[8%] mx-auto">
        <p className="text-[12px] mb-10">
          <span>
            <Link to="/">Home</Link>
          </span>
          /<span>Home</span>/<span>Home</span>
        </p>
        {/* <input type="text" className="border-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/> */}
        <div className="grid sm:grid-cols-2  grid-cols-1 items-center justify-between">
          <div>
            <h2 className="font-bold text-xl py-1">{resInfo?.data?.name}</h2>
            <p className="text-xs text-gray-500 pb-2">
              {resInfo.data?.cuisines.join(",")}
            </p>
            <p className="text-xs text-gray-500 pb-2">
              {resInfo.data?.areaName}, {resInfo.data?.sla?.lastMileTravelString}
            </p>
          </div>
          <div className="">
            <p className="border-2 table">4.5</p>
            <p className="table">lorem</p>
          </div>
        </div>
        <div className="flex gap-2">
          <img src={resInfo.data?.availability?.feeDetails} alt="image" />
          <p className="text-xs text-gray-500 pb-2">
            {resInfo.data?.feeDetails?.message}
          </p>
        </div>
       
        <div className="max-w-[800px] flex gap-3">
          <div className="grid grid-cols-2 gap-3 ">
            {resInfo.data?.aggregatedDiscountInfo?.descriptionList.map((v, i) => {
              let app =  v.meta;
              let app2=app.split("|")
            
              return (
                <p className="p-2 border-2 rounded-xl ">
                  <div className="text-[16px] font-bold text-gray-600">{app2[0]}</div>
                  <div className="text-xs font-bold text-gray-500 mt-2">{app2[1]}</div>
                </p>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-3 ">
            {resInfo.data?.aggregatedDiscountInfo?.shortDescriptionList.map((v, i) => {
              let app =  v.meta;
              let app2=app.split("|")
              return (
                <p className="p-2 border-2 rounded-xl ">
                  <div className="text-[16px] font-bold text-gray-600 py-2">{app2[0]}</div>
                  <div className="text-[8px] font-bold text-gray-500 ">{app2[1]}</div>
                </p>
              );
            })}
          </div>
        </div>
        {/* <h2 className="border-b-[2px]">veg only</h2> */}
        <GridElements gridData={gridData} showIndex ={showIndex} />
      </div>
    </div>
    </Provider>
  );
}
