import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carousal = () => {

        return (
            <div style={{height: "40px !important"}}>
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} showThumbs={false} preventMovementUntilSwipeScrollTolerance={true} transitionTime={2}
            // onChange={{}} onClickItem={{}} onClickThumb={{}}
            >
                <div>
                    <img src={require('../Images/cart.JPG')} />
                    
                </div>
                <div>
                    <img src={require('../Images/cart.JPG')} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={require('../Images/cart.JPG')} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            </div>
        );
    
};

export default Carousal;
