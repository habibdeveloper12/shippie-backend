import React from 'react';
import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { BarLoader, BounceLoader, ClimbingBoxLoader } from 'react-spinners';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin:0 auto
  border-color: red;
`;
const Loading = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#3b82f6");




  return (
    <div>
      <div style={{"zIndex":10}} className="sweet-loading absolute top-1/2 right-1/2">
        <BounceLoader
          color={color} loading={loading} css={override} size={60} />
      </div>
    </div>
  );
}




export default Loading;