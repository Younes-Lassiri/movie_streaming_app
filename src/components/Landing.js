import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Landing() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
        )
    };
    
    return(
        <div className="main-landing-section">
            <Slider {...settings} className="main-landing-section-slider">
                <div className="main-landing-section-slider-item">
                    <div className="main-landing-section-slider-item-content">
                    <h1>The Northman</h1>
                    <span className="main-landing-section-slider-item-span">
                    <div>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                    </div>
                    <span> 5 (Imdb) Year : 2022</span>
                    <button>Action</button>
                    </span>
                    <p>
                    The Northman is an action-filled epic that follows a young Viking prince on his quest to avenge his father’s murder. The film received largely positive reviews
                    </p>
                    <div className="main-landing-section-slider-item-content-infos">
                        <h1><span>Starring:</span> <h5>Alexander Skarsgård, Nicole Kidman, Ethan Hawke</h5></h1>
                        <h1><span>Genres:</span> <h5>Action</h5></h1>
                        <h1><span>Runtime:</span> <h5>2h 17m</h5></h1>
                    </div>
                    <button className="content-btn"><box-icon name='play-circle' color='#ffffff' ></box-icon>Watch Trailer</button>
                    </div>
                </div>
                <div className="main-landing-section-slider-item-two">
                <div className="main-landing-section-slider-item-content">
                    <h1>The 5th Wave</h1>
                    <span className="main-landing-section-slider-item-span">
                    <div>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                    </div>
                    <span> 5 (Imdb) Year : 2022</span>
                    <button>Action</button>
                    </span>
                    <p>
                    Four waves of increasingly deadly alien attacks have left most of Earth in ruin. Cassie is on the run, desperately trying to save her younger brother.
                    </p>
                    <div className="main-landing-section-slider-item-content-infos">
                        <h1><span>Starring:</span> <h5>Chloë Grace Moretz Matthew Zuk Gabriela Lopez</h5></h1>
                        <h1><span>Genres:</span> <h5>Action</h5></h1>
                        <h1><span>Runtime:</span> <h5>1h 52m</h5></h1>
                    </div>
                    <button className="content-btn"><box-icon name='play-circle' color='#ffffff' ></box-icon>Watch Trailer</button>
                    </div>
                </div>
                <div className="main-landing-section-slider-item-three">
                <div className="main-landing-section-slider-item-content">
                    <h1>The Ambulance</h1>
                    <span className="main-landing-section-slider-item-span">
                    <div>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                    </div>
                    <span> 5 (Imdb) Year : 2022</span>
                    <button>Action</button>
                    </span>
                    <p>
                    At top speed and with sirens wailing, Ambulance comes riding to the rescue for audiences facing an emergency shortage of Michael Bay action thrills
                    </p>
                    <div className="main-landing-section-slider-item-content-infos">
                        <h1><span>Starring:</span> <h5>Jake Gyllenhaal Yahya Abdul-Mateen Eiza González</h5></h1>
                        <h1><span>Genres:</span> <h5>Action</h5></h1>
                        <h1><span>Runtime:</span> <h5>2h 16m</h5></h1>
                    </div>
                    <button className="content-btn"><box-icon name='play-circle' color='#ffffff' ></box-icon>Watch Trailer</button>
                    </div>
                </div>
                <div className="main-landing-section-slider-item-four">
                <div className="main-landing-section-slider-item-content">
                    <h1>Finch</h1>
                    <span className="main-landing-section-slider-item-span">
                    <div>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                        <box-icon name='star' type='solid' color='#de1002' ></box-icon>
                    </div>
                    <span> 5 (Imdb) Year : 2022</span>
                    <button>Adventure</button>
                    </span>
                    <p>
                    On a post-apocalyptic Earth, a robot, built to protect the life of his creator's beloved dog learns about life, love, friendship and what it means to be human.
                    </p>
                    <div className="main-landing-section-slider-item-content-infos">
                        <h1><span>Starring:</span> <h5>Tom Hanks Caleb Landry Marie Wagenman</h5></h1>
                        <h1><span>Genres:</span> <h5>Adventure</h5></h1>
                        <h1><span>Runtime:</span> <h5>1h 55m</h5></h1>
                    </div>
                    <button className="content-btn"><box-icon name='play-circle' color='#ffffff' ></box-icon>Watch Trailer</button>
                    </div>
                </div>
                </Slider>
        </div>
    )
}