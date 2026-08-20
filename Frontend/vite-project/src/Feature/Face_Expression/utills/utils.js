  import {
  FaceLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision"
import { useState,useRef } from "react";


export const loadModel = async ({setLandmarker}) => {
  
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
    );

   const detector = await FaceLandmarker.createFromOptions(
      vision,
      {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
        },

        runningMode: "VIDEO",

        outputFaceBlendshapes: true,

        numFaces: 1,
      }
    );

    setLandmarker(detector);
  };

  const getScore = (blendshapes, name) => {
    const item = blendshapes.find(
      (shape) => shape.categoryName === name
    );

    return item ? item.score : 0;
  };

export const detectFace = ({ landmarker, webcamRef, setExpression }) => {
    if (
      !webcamRef.current ||
      !webcamRef.current.video ||
      webcamRef.current.video.readyState !== 4
    )
      return;

    const video = webcamRef.current.video;

    const result = landmarker.detectForVideo(
      video,
      performance.now()
    );

    if (
      !result.faceBlendshapes ||
      result.faceBlendshapes.length === 0
    ) {
      setExpression("No Face");
      return;
    }

    const blendshapes =
      result.faceBlendshapes[0].categories;

    const smileLeft = getScore(
      blendshapes,
      "mouthSmileLeft"
    );

    const smileRight = getScore(
      blendshapes,
      "mouthSmileRight"
    );

    const eyeLeft = getScore(
      blendshapes,
      "eyeBlinkLeft"
    );

    const eyeRight = getScore(
      blendshapes,
      "eyeBlinkRight"
    );

    const jawOpen = getScore(
      blendshapes,
      "jawOpen"
    );

    const browUp = getScore(
      blendshapes,
      "browInnerUp"
    );

    if (smileLeft > 0.6 && smileRight > 0.6) {
      setExpression("😊 Happy");
    } else if (eyeLeft > 0.8 && eyeRight > 0.8) {
      setExpression("😴 Eyes Closed");
    } else if (jawOpen > 0.7 && browUp > 0.5) {
      setExpression("😲 Surprise");
    } else if (jawOpen > 0.1) {
      setExpression("😮 Mouth Open");
    } else {
      setExpression("😐 Neutral");
    }
  };