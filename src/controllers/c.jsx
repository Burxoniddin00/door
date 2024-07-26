"use client"
import React, { useRef, useEffect } from "react";
import "./c.css";
function C() {
  
  
    return (
      <div className="container">
        <div ref={ref} className="resizeable">
          <div ref={refLeft} className="resizer resizer-l"></div>
          <div ref={refTop} className="resizer resizer-t"></div>
          <div ref={refRight} className="resizer resizer-r"></div>
          <div ref={refBottom} className="resizer resizer-b"></div>
        </div>
      </div>
    );
  }
  

  export default C;