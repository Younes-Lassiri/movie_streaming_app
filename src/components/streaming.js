import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import movie_one from './app_images/movie_one.jpg';
import movie_two from './app_images/movie_two.jpg';
import movie_three from './app_images/movie_three.jpg';
import movie_four from './app_images/movie_four.jpg';
import movie_five from './app_images/movie_five.jpg';
import movie_six from './app_images/movie_six.jpg';
import movie_seven from './app_images/movie_seven.jpg';
import movie_eight from './app_images/movie_eight.jpg';
import movie_ten from './app_images/movie_ten.jpg';
import movie_eleven from './app_images/movie_eleven.jpg';
import movie_twelve from './app_images/movie_twelve.jpg';
export default function Streaming() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
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
        { id: 1, title: "News of the World", image: movie_one, views: 129},
        { id: 2, title: "The 5th Wave", image: movie_two, views: 256},
        { id: 3, title: "Finch", image: movie_three, views: 345},
        { id: 4, title: "Resident Evil", image: movie_four, views: 98},
        { id: 12, title: "The 5th Wave", image: movie_twelve, views: 410},
        { id: 11, title: "The Northman", image: movie_eleven, views: 325},
        { id: 7, title: "Panama", image: movie_ten, views: 150},
        { id: 8, title: "Blacklight", image: movie_eleven, views: 212},
        { id: 9, title: "Stillwater", image: movie_eight, views: 178},
        { id: 10, title: "Hero", image: movie_seven, views: 289},
        { id: 6, title: "Secrets of Dumbledore", image: movie_six, views: 200},
        { id: 5, title: "All the Old Knives", image: movie_five, views: 432},

    ];
    return(
        <div className="main-streaming-section">
            <div className="main-streaming-section-one">
                <div className="main-movie-section-one-one">
                    <h1>
                    <box-icon name='movie-play' color='#de1002' ></box-icon>Movie <span>Streaming Services</span>
                    </h1>
                    <button>View All</button>
                </div>
            </div>
            <div className="main-streaming-section-two">
                <div className="main-streaming-section-two-slider-divs">
                    {[...Array(23)].map((_, i) => (
                        <div className="main-streaming-section-two-slider-divs-item"></div>
                    ))}
                </div>
                <Slider {...settings} className="main-streaming-section-two-slider">
                    
                    {
                        movies.map((movie,i) => {
                            return(
                                <div className="main-streaming-section-two-item">
                                    <div className="main-choice-section-one-two-item-image-play">
                                        <div className="main-choice-section-one-two-item-image-play-main">
                                            <box-icon name='play' color='#ffffff' ></box-icon>
                                        </div>
                                    </div>
                                    <img src={movie.image}/>
                                    <div className="main-streaming-section-two-item-flex">
                                        <h1>{movie.title}</h1>
                                        <div className="main-streaming-section-two-item-stars">
                                            {[...Array(5)].map((_, i) => (
                                                <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon>
                                            ))}
                                        </div>
                                        <span>{movie.views} Views</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
                <div className="main-streaming-section-two-slider-divs">
                    {[...Array(23)].map((_, i) => (
                        <div className="main-streaming-section-two-slider-divs-item"></div>
                    ))}
                </div>
                </div>
        </div>
    )
}