import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoCard from "../Video/VideoCard";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  overflow-x: hidden;
`
function MySlider() {

    var settings = {
        dots: false,
        infinite: true,
        autoPLay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <h2> Categoria </h2>
            <StyledSlider {...settings}>
                <div>
                    <VideoCard width={'18rem'} height={'11rem'} />
                </div>
                <div>
                    <VideoCard width={'18rem'} height={'11rem'} />
                </div>
                <div>
                    <VideoCard width={'18rem'} height={'11rem'} />
                </div>
                <div>
                    <VideoCard width={'18rem'} height={'11rem'} />
                </div>
                <div>
                    <VideoCard width={'18rem'} height={'11rem'} />
                </div>
                <div>
                    <VideoCard width={'18rem'} height={'11rem'} />
                </div>
            </StyledSlider>
        </div>
    );
}



export default MySlider;
