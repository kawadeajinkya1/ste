import React, { Component } from "react";
import classes from './Patronslider.module.css';
import Slider from "react-slick";
import Patron from "./Patron";

import img1 from "../../Assets/bajaj.png";
import img2 from "../../Assets/endu.png";
import img3 from "../../Assets/godrej.jpg";
import img4 from "../../Assets/landt.png";
import img5 from "../../Assets/tata.png";
import img6 from "../../Assets/varroc.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Patronslider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                }]

        };
        return (
            <div className={classes.hold}>
                <h1 className={classes.head}>Our Patron </h1>
                <Slider {...settings}>
                    <div>
                        <Patron img={img1}></Patron>
                    </div>
                    <div>
                        <Patron img={img2} ></Patron>
                    </div>
                    <div>
                        <Patron img={img3} ></Patron>
                    </div>
                    <div>
                        <Patron img={img4} ></Patron>
                    </div>
                    <div>
                        <Patron img={img5} ></Patron>
                    </div>
                    <div>
                        <Patron img={img6} ></Patron>
                    </div>
                 

                </Slider>
            </div>
        );
    }
}
