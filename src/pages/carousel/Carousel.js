import slide1 from './../../assets/slide1.jpg';
import slide2 from './../../assets/slide2.jpg';
import slide3 from './../../assets/slide3.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css'
import './styles.css';
import React from "react";

export default () => (
<div >
    <Carousel autoPlay >
        <div>
            <img src={slide1}/>   
            <p className="legend">Legend 1</p>
        </div>

        <div>
            <img src={slide2}/>   
            <p className="legend">Legend 2</p>
        </div>

        <div>
            <img src={slide3}/>   
            <p className="legend">Legend 3</p>
        </div>

    </Carousel>
</div> 
); 