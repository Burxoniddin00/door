"use client";
import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { CSSTransition } from "react-transition-group";

const Headers = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalMenu, setShowModalMenu] = useState(false);

  return (
    <div className="flex justify-between items-center pt-5 pb-5 px-5 sm:px-10">
      <h1 className="text-2xl font-extrabold">Logo</h1>
      <ul className="flex gap-5 max-[650px]:hidden">
        <li className="relative group">
          <h4 className="text-xl font-semibold cursor-pointer">Home</h4>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <h4 className="text-xl font-semibold cursor-pointer">About us</h4>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <h4 className="text-xl font-semibold cursor-pointer">Join us</h4>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <h4 className="text-xl font-semibold cursor-pointer">Contact us</h4>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
      <button
        className="max-[650px]:hidden    rounded-xl border-solid border-2 p-1 text-xl font-semibold"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Sign up
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto max-w-3xl w-[90%] sm:w-[50%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="text-end p-5">
                  <button
                    className="text-xl text-black mb-3"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                  <div className="flex flex-col gap-5 text-black">
                    <input
                      className="text-xl rounded-2xl border-solid border-4 outline-none p-2 border-[#003049] w-full"
                      type="text"
                      placeholder="First Name"
                    />
                    <input
                      className="text-xl rounded-2xl border-solid border-4 outline-none p-2 border-[#003049] w-full"
                      type="text"
                      placeholder="Last Name"
                    />
                    <button className="rounded-xl border-solid border-2 p-1 text-xl font-semibold bg-[#003049] text-white">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <TfiMenu
        onClick={() => setShowModalMenu(true)}
        size={30}
        className="cursor-pointer min-[650px]:hidden"
      />
      <CSSTransition
        in={showModalMenu}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="fixed inset-0 z-50 flex justify-end items-start overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-full sm:w-[50%] max-w-[50%] h-full text-end">
            <div className="shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full">
              <div className="text-end p-5">
                <button
                  className="text-xl text-black mb-3"
                  onClick={() => setShowModalMenu(false)}
                >
                  X
                </button>
                <div className="flex flex-col gap-5 text-black">
                  <ul>
                    <li className="text-xl font-semibold cursor-pointer">
                      Home
                    </li>
                    <li className="text-xl font-semibold cursor-pointer">
                      About us
                    </li>
                    <li className="text-xl font-semibold cursor-pointer">
                      Join us
                    </li>
                    <li className="text-xl font-semibold cursor-pointer">
                      Contact us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Headers;
