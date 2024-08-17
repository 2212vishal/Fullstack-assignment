import React from 'react';
import {  FaEnvelope, FaPhone,FaMapMarkerAlt } from 'react-icons/fa';
import { GiAbstract045 } from "react-icons/gi";

function Footer() {
  return (
    <div className=" flex justify-center text-center  bg-primary dark:text-neutral-200 lg:text-left">
      <footer className="w-11/12 ">
        <div className="flex items-center justify-between border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
          <div className="mr-12 flex flex-col">
            <span className="text-3xl flex gap-2 items-baseline"> <GiAbstract045/> <p>Abstract</p> </span>
            <span>Branches</span>
          </div>
          {/* Social network icons container */}
          <div className="flex justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Submit Your Request
            </button>

          </div>
        </div>

        {/* Main container div */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Products section */}
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Resources
              </h6>
              <p className="mb-4">
                <p className="text-neutral-600 dark:text-neutral-200">Blog</p>
              </p>
              <p className="mb-4">
                <p className="text-neutral-600 dark:text-neutral-200">Help Center</p>
              </p>
              <p className="mb-4">
                <p className="text-neutral-600 dark:text-neutral-200">Release Notes</p>
              </p>
              <p>
                <p className="text-neutral-600 dark:text-neutral-200">Status</p>
              </p>
            </div>
            {/* Useful links section */}
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Community
              </h6>
              <p className="mb-4">
                <p className="text-neutral-600 dark:text-neutral-200">Twitter</p>
              </p>
              <p className="mb-4">
                <p className="text-neutral-600 dark:text-neutral-200">LinkedIN</p>
              </p>
              <p className="mb-4">
                <p className="text-neutral-600 dark:text-neutral-200">FaceBook</p>
              </p>
              <p>
                <p className="text-neutral-600 dark:text-neutral-200">Dribble</p>
              </p>
              <p>
                <p className="text-neutral-600 dark:text-neutral-200">Podcast</p>
              </p>
            </div>
            {/* Contact section */}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Company
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-3 h-5 w-5" />
                New York, NY 10012, US
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-3 h-5 w-5" />
                info@example.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <FaPhone className="mr-3 h-5 w-5" />
                + 01 234 567 88
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-3 h-5 w-5" />
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
    

        {/* Copyright section */}
        <div className="bg-primary p-6 text-center bg-primary">
          <span>© 2024 Copyright: Vishal Chaurasiya</span>
          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
