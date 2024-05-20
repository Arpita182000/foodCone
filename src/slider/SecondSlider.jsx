import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";


export default function SecondSlider({secondSlide}) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;

    }
    return text.substring(0, maxLength) + '...';
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <>
         <div className="container border-b-2 border-[slate-200] pt-[6%]">
        <div className="featured-col ">
          <h4 className=" font-extrabold text-2xl my-3 px-2">{secondSlide.restApi.card.header.title}</h4>
        <Slider {...settings}>
          {SecondSlider.length >= 1 ?
            secondSlide.restApi.card?.gridElements?.infoWithStyle?.restaurants?.map((restaurant, index)=>{
              
                return(
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 best-container border-[danger]" key={index}>

                  <div className="" >
                  <Link to='/'>
                  <div  className="col">
                      <div className="item-box">
                        <div className="item-img">
                          <div className="main-img relative  ">
                            <img src={secondSlide.imageLink+restaurant.info.cloudinaryImageId }  alt='foodcone'/>
                            <h1 className="absolute bottom-[10px] left-[30%] text-white text-[25px] font-bold">hello world</h1>
                          </div>
                        </div>
                        <div className='p-4'>                      
                           <div className="font-bold text-[#02060CBF]">{truncateText(restaurant.info?.name,28)}</div>
                        <div className="row font-bold">
                           <div className='pe-1'>
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" ><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg></div>
                          <span className="text-[#02060CBF] text-[16px]">{restaurant.info?.avgRating}</span>
                          &nbsp;
                          <span className="text-[#02060CBF] text-[16px]">{restaurant.info?.sla?.slaString}</span>
                          &nbsp;
                        </div>
                        <p className='text-[14px] text-[#02060C99]'>{truncateText(restaurant.info.cuisines.join(','),30)} </p> 
                          </div>                
                      </div>
                    </div>
                  </Link>
                  </div>
                  </div>
                )
            })
            :
            ""
          
          }
       
         
        </Slider>

  </div>
  </div>
    </>
  );
}
