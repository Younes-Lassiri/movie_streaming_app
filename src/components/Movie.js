import React, { useEffect } from "react";
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
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Movie() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
    var upcoming_settings = {
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
        { id: 1, title: "News of the World", image: movie_one, views: 129, description: 'A Civil War veteran agrees to deliver a girl, taken by...' },
        { id: 2, title: "The 5th Wave", image: movie_two, views: 256, description: 'Four waves of increasingly deadly alien attacks have...' },
        { id: 3, title: "Finch", image: movie_three, views: 345, description: 'On a post-apocalyptic Earth, a robot, built to protect...' },
        { id: 4, title: "Resident Evil", image: movie_four, views: 98, description: 'Set in 1998, this origin story explores the secrets of...' },
        { id: 12, title: "The 5th Wave", image: movie_twelve, views: 410, description: 'Four waves of increasingly deadly alien attacks have...' },
        { id: 11, title: "The Northman", image: movie_eleven, views: 325, description: 'The Northman is an action-filled epic that follows a...' },
        { id: 7, title: "Panama", image: movie_ten, views: 150, description: 'An ex-marine is hired by a defense contractor to travel...' },
        { id: 8, title: "Blacklight", image: movie_eleven, views: 212, description: 'Travis Block is a government operative coming to terms...' },
        { id: 9, title: "Stillwater", image: movie_eight, views: 178, description: 'A father travels from Oklahoma to France to help his...' },
        { id: 10, title: "Hero", image: movie_seven, views: 289, description: 'A fraudster gets to fulfill his childhood dream of being...' },
        { id: 6, title: "Secrets of Dumbledore", image: movie_six, views: 200, description: 'Travis Block is a government operative coming to terms...' },
        { id: 5, title: "All the Old Knives", image: movie_five, views: 432, description: 'CIA agent Henry is tasked by his supervisor Vick to...' },

    ];
    const upcoming_movies = [
        { id: 12, title: "The 5th Wave", image: movie_twelve, views: 410, description: 'Four waves of increasingly deadly alien attacks have...' },
        { id: 11, title: "The Northman", image: movie_eleven, views: 325, description: 'The Northman is an action-filled epic that follows a...' },
        { id: 7, title: "Panama", image: movie_ten, views: 150, description: 'An ex-marine is hired by a defense contractor to travel...' },
        { id: 5, title: "All the Old Knives", image: movie_five, views: 432, description: 'CIA agent Henry is tasked by his supervisor Vick to...' },
        { id: 10, title: "Hero", image: movie_seven, views: 289, description: 'A fraudster gets to fulfill his childhood dream of being...' },
        { id: 9, title: "Stillwater", image: movie_eight, views: 178, description: 'A father travels from Oklahoma to France to help his...' },

    ];
    return(
        <div className="main-movie-section">
            <div className="main-movie-section-one">
                <div className="main-movie-section-one-one">
                    <h1>
                    <box-icon name='movie-play' color='#de1002' ></box-icon>Latest <span>Movies</span>
                    </h1>
                    <button>View All</button>
                </div>
                <div className="main-movie-section-one-two">
                <Slider {...settings}>
                {movies.map(movie => (
                <div key={movie.id} className="main-movie-section-one-two-item" data-aos="zoom-in">
                    <div className="main-movie-section-one-two-item-image">
                        <div className="main-movie-section-one-two-item-image-play">
                            <div className="main-movie-section-one-two-item-image-play-main">
                                <box-icon name='play' color='#ffffff' ></box-icon>
                            </div>
                        </div>
                        <img src={movie.image} alt={movie.title} />
                    </div>
                    <div className="main-movie-section-one-two-item-content">
                        <h1>{movie.title}</h1>
                        <p>{movie.description}</p>
                        <div>
                            {[...Array(5)].map((_, i) => (
                                <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon>
                            ))}
                        </div>
                        <span>{movie.views} Views</span>
                    </div>
                </div>
            ))}
                </Slider>
                </div>
            </div>
            <div className="main-movie-section-two">
                <div className="main-movie-section-one-one">
                    <h1>
                    <box-icon name='movie-play' color='#de1002' ></box-icon>Upcoming <span>Movies</span>
                    </h1>
                    <button>View All</button>
                </div>
                <div className="main-movie-section-two-one">
                <Slider {...upcoming_settings}>
                {upcoming_movies.map(movie => (
                <div key={movie.id} className="main-movie-section-one-two-item">
                    <div className="main-movie-section-one-two-item-image">
                        <div className="main-movie-section-one-two-item-image-play">
                            <div className="main-movie-section-one-two-item-image-play-main">
                                <box-icon name='play' color='#ffffff' ></box-icon>
                            </div>
                        </div>
                        <img src={movie.image} alt={movie.title} />
                    </div>
                    <div className="main-movie-section-one-two-item-content">
                        <h1>{movie.title}</h1>
                        <p>{movie.description}</p>
                        <div>
                            {[...Array(5)].map((_, i) => (
                                <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon>
                            ))}
                        </div>
                        <span>{movie.views} Views</span>
                    </div>
                </div>
            ))}
                </Slider>
                </div>
            </div>
        </div>
    )
}