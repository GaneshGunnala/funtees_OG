import React, { useEffect, useState, useReducer } from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carousal from '../dataFiles/carousal'
const Carousal = () => {
        console.log(carousal);
        return (
            <div style={{height: "40px !important"}}>
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} showThumbs={false} preventMovementUntilSwipeScrollTolerance={true} transitionTime={2}
            showStatus={false}
            // onChange={{}} onClickItem={{}} onClickThumb={{}}
            >
                {
                carousal.data.map(item =>(
                <div>
                    <img src={item.imgSrc}></img>
                    
                </div>
                ))
                }
                
            </Carousel>
            </div>
        );
    
};

export default Carousal;
