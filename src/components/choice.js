import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import choice_one from './app_images/choice_one.jpg';
import choice_two from './app_images/choice_two.jpg';
import choice_three from './app_images/choice_three.jpg';
import choice_four from './app_images/choice_four.jpg';
import choice_five from './app_images/choice_five.jpg';
import choice_six from './app_images/choice_six.jpg';
export default function Choice() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: (
            <button type='button' className='slick-button slick-prev'>
                <box-icon name='chevron-left' color='rgba(255, 255, 255, 0.4)'></box-icon>
            </button>
        ),
        nextArrow: (
            <button type='button' className='slick-button slick-next'>
                <box-icon name='chevron-right' color='rgba(255, 255, 255, 0.4)'></box-icon>
            </button>
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                }
            }
        ]
    };
    const movies = [
        { id: 1, title: "Squid Game", image: choice_one, views: 22},
        { id: 2, title: "All of Us Are Dead", image: choice_two, views: 27},
        { id: 3, title: "Scream", image: choice_three, views: 22},
        { id: 4, title: "Pirates of the Caribbean", image: choice_four, views: 9},
        { id: 5, title: "Oblivion", image: choice_five, views: 11},
        { id: 6, title: "Memory", image: choice_six, views: 9},

    ];
    return(
        <div className="main-choice-section">
            <div className="main-choice-section-one">
                <div className="main-movie-section-one-one">
                    <h1>
                    <box-icon name='movie-play' color='#de1002' ></box-icon>Director's <span>Choice</span>
                    </h1>
                    <button>View All</button>
                </div>
                <div className="main-choice-section-one-slider">
                <Slider {...settings}>
                    {movies.map(movie => (
                    <div key={movie.id} className="main-choice-section-one-slider-item">
                        <div className="main-choice-section-one-two-item-image-play">
                            <div className="main-choice-section-one-two-item-image-play-main">
                                <box-icon name='play' color='#ffffff' ></box-icon>
                            </div>
                        </div>
                        <div className="main-choice-section-one-slider-item-infos">
                            <h1>{movie.title}</h1>
                            <div>
                                {[...Array(5)].map((_, i) => (
                                    <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon>
                                ))}
                            </div>
                            <span>{movie.views} Views</span>
                        </div>
                        <img src={movie.image}/>
                    </div>
                    ))}
                </Slider>
                </div>
            </div>
        </div>
    )
}