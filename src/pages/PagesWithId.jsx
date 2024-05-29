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
import { Provider } from "react-redux";
import AppStore from "../utils/AppStore";
import { pageWithIdApi } from "../Api/PageId";
import logo from "../image/d.jpeg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function PagesWithId() {
  const { id } = useParams();
  // console.log(id)

  const [resInfo, setResinfo] = useState(
    pageWithIdApi[0].data.cards[2]?.card?.card?.info
  );
  const [gridData, setGridData] = useState(
    pageWithIdApi[0].data.cards[4].groupedCard?.cardGroupMap?.REGULAR
  );

  const [isApiId, setIsApiID] = useState(
    pageWithIdApi[0].data.cards[2].card.card.info
  );

  // console.log(isApiId);
  // console.log(gridData);
  // console.log(resInfo);
  useEffect(() => {}, [isApiId]);

  // setResinfo(pageWithIdApi[0].data.data.cards[2]?.card.card.info)
  // console.log(setResinfo)
  // let GridData = isApiId.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  // console.log(GridData)
  // setGridData(GridData)

  // useEffect(() => {
  //   getData();
  // }, []);

  // let getData = () => {
  //   axios
  //     .get(pageWithIdApi)
  //     .then(function (response) {
  //       console.log(response)

  //       // let getApiData = {
  //       //   icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/",
  //       //   data: response.data?.data?.cards[0]?.card?.card?.info,
  //       // };

  //       // setResinfo(getApiData);

  //     });
  // };

  const onlineStatus = useOnlineStatus();
  // const {setUserName,loggedInUser}=useContext(UseContext);
  if (onlineStatus === false) return <h1>Your internet is not working</h1>;

  // const {name,cuisine,area,rating} = resInfo[0].card.card.info;
  if (resInfo === null) return <Shimmer></Shimmer>;
  return (
    <Provider store={AppStore}>
      <ToastContainer />
      <div className="xl:p-0 p-3">
        <Header />
        <div className="max-w-[1120px] my-[8%] mx-auto">
          <p className="text-[12px] mb-10">
            <span>
              <Link to="/">Home</Link>
            </span>
            /<span>Home</span>/<span className="font-bold">{resInfo?.areaName}</span>
          </p>
          {/* <input type="text" className="border-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/> */}
          <div className="grid sm:grid-cols-2  grid-cols-2  items-center justify-between">
            <div>
              <h2 className="font-bold text-xl py-1">{resInfo?.name}</h2>
              <p className="text-xs text-gray-500 pb-2">
                {resInfo?.cuisines.join(",")}
              </p>
              <p className="text-xs text-gray-500 pb-2">
                {resInfo?.areaName}, {resInfo.sla?.lastMileTravelString}
              </p>
            </div>
            <div className="border-2 w-20 h-15 text-center sm:ml-0 ml-12">
              <p className="table  mx-auto">{resInfo?.avgRating}</p>
              <p className="table border-t-2">{resInfo?.totalRatingsString}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={logo} alt="image" width={20} height={20} />
            <p className="text-xs text-gray-500 pb-2">
              {resInfo.feeDetails?.message.replace(/<\/?b>/g, " ")}
            </p>
          </div>

          <div className="max-w-[800px] sm:flex block gap-3">
            <div className="grid grid-cols-2 gap-3 my-3">
              {resInfo.aggregatedDiscountInfo?.descriptionList.map((v, i) => {
                let app = v.meta;
                let app2 = app.split("|");

                return (
                  <p className="p-2 border-2 rounded-xl ">
                    <div className="text-[16px] font-bold text-gray-600">
                      {app2[0]}
                    </div>
                    <div className="text-xs font-bold text-gray-500 mt-2">
                      {app2[1]}
                    </div>
                  </p>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-3 my-3">
              {resInfo.aggregatedDiscountInfo?.shortDescriptionList.map(
                (v, i) => {
                  let app = v.meta;
                  let app2 = app.split("|");
                  return (
                    <p className="p-2 border-2 rounded-xl ">
                      <div className="text-[16px] font-bold text-gray-600 py-2">
                        {app2[0]}
                      </div>
                      <div className="text-[8px] font-bold text-gray-500 ">
                        {app2[1]}
                      </div>
                    </p>
                  );
                }
              )}
            </div>
          </div>
          {/* <h2 className="border-b-[2px]">veg only</h2> */}
          <GridElements gridData={gridData} />
        </div>
      </div>
    </Provider>
  );
}
