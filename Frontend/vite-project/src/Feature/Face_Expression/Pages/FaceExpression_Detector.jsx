import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import {loadModel,detectFace  } from "../utills/utils";


const FaceExpressionDetector = () => {
  const webcamRef = useRef(null);

  const [expression, setExpression] = useState("Fetching...");
  const [landmarker, setLandmarker] = useState(null);
  

  useEffect(() => {
    loadModel({setLandmarker});
  }, []);

//   useEffect(() => {
//     if (!landmarker) return;

//     let interval = setInterval(() => {
//       detectFace();
//     }, 100);

//     return () => clearInterval(interval);
//   }, [landmarker]);



  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <h1>Face Expression Detection</h1>

      <Webcam
        ref={webcamRef}
        mirrored
        audio={false}
        width={640}
        height={480}
      />

      <h2>{expression}</h2>
      <button onClick={()=>{
        detectFace({landmarker, webcamRef, setExpression})
      }}>Detect Face Expression</button>
    </div>
  );
};

export default FaceExpressionDetector;