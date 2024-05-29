import React, { useState } from "react";
import logo from "../image/logo.png";
import g from "../image/g.png";
import terms from "../image/Terms & Conditions _ Privacy Policy.png";
import app1 from '../image/App Store.png'
import { RestApi } from "../Api/RestApi";
import imageLink from "../Api/CDN-LINK";
import google from '../image/Google Play.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const [fApi4 ,setfApi4] = useState(
    RestApi[0].data.cards[9].card);
  return (

    <>
     <div className=' bg-slate-200 items-center p-5  w-[100%]'>
      <div className='max-w-screen-xl  mx-auto grid md:grid-cols-2 grid-cols-1 '>
        <h2 className='px-10 font-extrabold sm:text-3xl text-xl  text-gray-700'>{fApi4.card.title}</h2>
        <div className=" flex items-center justify-center sm:justify-end px-10">
                    <img src={app1} alt=''/>
                    <img src={google} alt=''/>
                </div>
      </div>
    </div>
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
   
  <div className="container mx-auto px-4">
    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
      <div className="px-4 sm:w-1/3 md:w-1/4 xl:w-1/6">
        <h5 className="text-xl font-bold mb-6">Features</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Cool stuff</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Random feature</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team feature</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Stuff for developers</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another one</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Last time</a>
          </li>
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
        <h5 className="text-xl font-bold mb-6">Resources</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource name</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another resource</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</a>
          </li>
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 className="text-xl font-bold mb-6">About</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms</a>
          </li>
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 className="text-xl font-bold mb-6">Help</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
        <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
        <div className="flex sm:justify-center xl:justify-start">
          <a href="" className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>
          <a href="" className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
          <a href="" className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>

    {/* <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
      <div class="sm:w-full px-4 md:w-1/6">
        <strong>FWR</strong>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 class="font-bold mb-2">Address</h6>
        <address class="not-italic mb-4 text-sm">
          123 6th St.<br/>
          Melbourne, FL 32904
        </address>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 class="font-bold mb-2">Free Resources</h6>
        <p class="mb-4 text-sm">Use our HTML blocks for <strong>FREE</strong>.<br/>
          <em>All are MIT License</em></p>
      </div>
      <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
        <button class="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">Get Started</button>
      </div>
    </div> */}
  </div>
</footer>
</>
  );
}
