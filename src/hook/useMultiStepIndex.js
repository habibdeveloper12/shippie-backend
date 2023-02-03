import React from 'react';
import { ReactElement, useState } from "react"

function useMultiStepIndex(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

function next(){
  setCurrentStepIndex(i=>{
    if (i>steps.length-1) return i;
    return i+1;
  })
}
function back(){
 setCurrentStepIndex(i=>{
  if (i<=0) return i;
  return i-1;
 })
}
function goto(index){
 setCurrentStepIndex(index)
}



  return {
    currentStepIndex,
    step:steps[currentStepIndex],
    steps,
    goto,
    next,
    back
  }
}

export default useMultiStepIndex