import React from 'react'
import { Link } from 'react-router-dom';
export default function RestPortion({fApi,fApi2,fApi3}) {
  return (
    <div>
       <div className="container  ">
        <h2 className="font-extrabold text-2xl  px-2 my-8">
          {fApi2.card.title}
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mb-10">
         {RestPortion.length >= 1 ? 
         fApi2.card?.brands.map((v,i)=>{
            return(
                <Link to={v.link} key={i}>
                <p className="p-3 border-2 rounded-xl ">
         {v.text}
          </p>
          </Link>
            )
         })
        :
        ""}
          
   
        </div>
      </div>
        <div className="container  ">
        <h2 className="font-extrabold text-2xl  px-2 my-8">
          {fApi.card.title}
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mb-10">
         {RestPortion.length >= 1 ? 
         fApi.card?.brands.map((v,i)=>{
            return(
                <Link to={v.link} key={i}>
                <p className="p-3 border-2 rounded-xl ">
         {v.text}
          </p>
          </Link>
            )
         })
        :
        ""}
          
   
        </div>
      </div>
      <div className="container  ">
        <h2 className="font-extrabold text-2xl  px-2 my-8">
          {fApi3.card.title}
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-10">
         {RestPortion.length >= 1 ? 
         fApi3.card?.brands.map((v,i)=>{
            return(
                <Link to={v.link} key={i}>
                <p className="p-3 border-2 rounded-xl ">
         {v.text}
          </p>
          </Link>
            )
         })
        :
        ""}
          
   
        </div>
      </div>
    </div>
  )
}




