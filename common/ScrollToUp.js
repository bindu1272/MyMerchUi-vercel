"use client";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import './ScrollTop.scss'
const ScrollToUp = () => {
  return (
      //   <ScrollUpButton
      //     StopPosition={0}
      //     ShowAtPosition={300}
      //     EasingType="easeOutCubic"
      //     AnimationDuration={500}
      //     ContainerClassName="ScrollUpButton"
      //     TransitionClassName="ScrollUpButton__Toggled"
      //     style={{}}
      //     ToggledStyle={{}}
      // />
      <ScrollToTop
        smooth 
        className="ScrollUpButton"
        svgPath={"M19.196 23.429q0 0.232-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-7.018-7.018-7.018 7.018q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411zM19.196 16.571q0 0.232-0.179 0.411l-0.893 0.893q-0.179 0.179-0.411 0.179t-0.411-0.179l-7.018-7.018-7.018 7.018q-0.179 0.179-0.411 0.179t-0.411-0.179l-0.893-0.893q-0.179-0.179-0.179-0.411t0.179-0.411l8.321-8.321q0.179-0.179 0.411-0.179t0.411 0.179l8.321 8.321q0.179 0.179 0.179 0.411z"}
        width={500}
        height={500}
        color={"white"}
        />
  );
};
export default ScrollToUp;