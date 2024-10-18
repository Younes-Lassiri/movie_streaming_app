import React, { useEffect, useState } from "react";
import poster_one from './app_images/poster_one.jpg';
import poster_two from './app_images/poster_two.jpg';
import poster_three from './app_images/poster_three.jpg';
import poster_four from './app_images/poster_four.jpg';
import poster_five from './app_images/poster_five.jpg';
import poster_six from './app_images/poster_six.jpg';
import popular_one from './app_images/popular_one.jpg';
import popular_two from './app_images/popular_two.jpg';
import popular_three from './app_images/popular_three.jpg';
import popular_four from './app_images/popular_four.jpg';
import popular_five from './app_images/popular_five.jpg';
import popular_six from './app_images/popular_six.jpg';
import show_one from './app_images/show_one.jpg';
import show_two from './app_images/show_two.jpg';
import show_three from './app_images/show_three.jpg';
import show_four from './app_images/show_four.jpg';
export default function Trending() {
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
    const [type, setType] = useState('poster');
    function changeType(type) {
        const elements = document.querySelectorAll('.main-poster-section-one');
    
        elements.forEach(ele => {
            ele.classList.remove('main-poster-section-one');
            void ele.offsetWidth;
            ele.classList.add('main-poster-section-one');
        });
        setType(type);
    }
    const poster_movies = [
        { id: 1, title: "The Honest Thief", image: poster_one, description: 'Hoping to cut a deal, a professional bank robber agrees to return all the money he stole in exchange for a reduced sentence. But tw', imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 2, title: "Ambulance", image: poster_two, description: 'Ambulance is a 2022 American heist action thriller film directed and produced by Michael Bay. A co-production between New Republic', imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 3, title: "Panama", image: poster_three, description: 'An ex-marine is hired by a defense contractor to travel to Panama to complete an arms deal. In the process he becomes involved with', imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 4, title: "Beast", image: poster_four, description: 'A father and his two teenage daughters find themselves hunted by a massive rogue lion intent on proving that the Savanna has but one', imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 5, title: "Morbius", image: poster_five, description: 'The line between hero and villain will be broken. Watch the new trailer for Morbius', imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 6, title: "The Good Neighbour", image: poster_six, description: 'The budding friendship between two very different neighbours takes a tragic turn when David runs over a young woman and causes her', imdb: 8.4, year: 2022, runtime: '1h 39m' },

    ];				
    const popular_movies = [
        { id: 1, title: "Stillwater", image: popular_one, description: "A father travels from Oklahoma to France to help his estranged daughter, who is in prison for a murder she claims she didn't commit", imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 2, title: "Finch", image: popular_two, description: "On a post-apocalyptic Earth, a robot, built to protect the life of his creator's beloved dog learns about life, love, friendship an", imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 3, title: "Resident Evil", image: popular_three, description: "Set in 1998, this origin story explores the secrets of the mysterious Spencer Mansion and the ill-fated Raccoon City.", imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 4, title: "The Foreigner", image: popular_four, description: "A humble businessman with a buried past seeks justice when his daughter is killed in an act of terrorism. A cat-and-mouse conflict", imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 5, title: "Secrets of Dumbledore", image: popular_five, description: "Travis Block is a government operative coming to terms with his shadowy past. When he discovers a plot targeting U.S. citizens, Blo", imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 6, title: "Blacklight", image: popular_six, description: "Travis Block is a government operative coming to terms with his shadowy past. When he discovers a plot targeting U.S. citizens, Blo", imdb: 8.4, year: 2022, runtime: '1h 39m' },

    ];			
    const show_movies = [
        { id: 1, title: "Obi-Wan Kenobi: Limited Series", image: show_one, description: "This won't be the Obi-Wan Kenobi some viewers are looking for, but Ewan McGregor's soulful performance and some refreshing twists m", imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 2, title: "Ozark: Season 4", image: show_two, description: "Ozark hasn't gotten out clean just yet, but its mesmeric performances and taut suspense signal that the Byrde clan are as entertain", imdb: 8.4, year: 2022, runtime: '1h 39m' },				
        { id: 3, title: "Night Sky: Season 1", image: show_three, description: "Night Sky reaches for the stars when it really should have settled on a feature length finish, but the combined supernova of J.K. S", imdb: 8.4, year: 2022, runtime: '1h 39m' },			
        { id: 4, title: "Murderville: Season 1", image: show_four, description: "Murderville's improvisational premise can lead to stretches of dead air, but the moments of spontaneous inspiration are worthwhile", imdb: 8.4, year: 2022, runtime: '1h 39m' },

    ];
    const free_movies = [
        { id: 1, title: "Resident Evil", image: popular_three, description: "Set in 1998, this origin story explores the secrets of the mysterious Spencer Mansion and the ill-fated Raccoon City.", imdb: 8.4, year: 2022, runtime: '1h 39m' },{ id: 2, title: "Stillwater", image: popular_one, description: "A father travels from Oklahoma to France to help his estranged daughter, who is in prison for a murder she claims she didn't commit", imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 3, title: "Secrets of Dumbledore", image: popular_five, description: "Travis Block is a government operative coming to terms with his shadowy past. When he discovers a plot targeting U.S. citizens, Blo", imdb: 8.9, year: 2022, runtime: '1h 39m' },
        { id: 4, title: "The Foreigner", image: popular_four, description: "A humble businessman with a buried past seeks justice when his daughter is killed in an act of terrorism. A cat-and-mouse conflict", imdb: 8.4, year: 2022, runtime: '1h 39m' },{ id: 5, title: "Obi-Wan Kenobi: Limited Series", image: show_one, description: "This won't be the Obi-Wan Kenobi some viewers are looking for, but Ewan McGregor's soulful performance and some refreshing twists m", imdb: 8.4, year: 2022, runtime: '1h 39m' },{ id: 6, title: "Ozark: Season 4", image: show_two, description: "Ozark hasn't gotten out clean just yet, but its mesmeric performances and taut suspense signal that the Byrde clan are as entertain", imdb: 8.4, year: 2022, runtime: '1h 39m' },{ id: 7, title: "Blacklight", image: popular_six, description: "Travis Block is a government operative coming to terms with his shadowy past. When he discovers a plot targeting U.S. citizens, Blo", imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 8, title: "Beast", image: poster_four, description: 'A father and his two teenage daughters find themselves hunted by a massive rogue lion intent on proving that the Savanna has but one', imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 9, title: "Finch", image: popular_two, description: "On a post-apocalyptic Earth, a robot, built to protect the life of his creator's beloved dog learns about life, love, friendship an", imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 10, title: "Murderville: Season 1", image: show_four, description: "Murderville's improvisational premise can lead to stretches of dead air, but the moments of spontaneous inspiration are worthwhile", imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 11, title: "Panama", image: poster_three, description: 'An ex-marine is hired by a defense contractor to travel to Panama to complete an arms deal. In the process he becomes involved with', imdb: 8.4, year: 2022, runtime: '1h 39m' },
        { id: 12, title: "Morbius", image: poster_five, description: 'The line between hero and villain will be broken. Watch the new trailer for Morbius', imdb: 8.4, year: 2022, runtime: '1h 39m' },
    ]
    function selectedType() {
        switch (type) {
            case 'poster':
                return (
                    <div className="main-poster-section">
                        {
                            poster_movies.map((movie,i) => {
                                return(
                                    <div className="main-poster-section-one" key={i}>
                                        <div className="main-poster-section-one-image">
                                            <div className="main-poster-section-one-image-icons">
                                            <box-icon name='link' color='#de1002' ></box-icon>
                                            <box-icon name='search-alt-2' color='#de1002' ></box-icon>
                                            </div>
                                            <img src={movie.image}/>
                                        </div>
                                        <div className="main-poster-section-one-content">
                                            <h1>{movie.title}</h1>
                                            <h2>Action, Thriller</h2>
                                            <h3>
                                                <span className="poster-imdb">Imdb: {movie.imdb}</span>
                                                <span>
                                                <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon> Year: {movie.year}
                                                </span>
                                                <span>Runtime: {movie.runtime}</span>
                                            </h3>
                                            <p>{movie.description}</p>
                                            <button>More Info - trailer</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            case 'movie':
                return (
                    <div className="main-poster-section">
                        {
                            popular_movies.map((movie,i) => {
                                return(
                                    <div className="main-poster-section-one" key={i}>
                                        <div className="main-poster-section-one-image">
                                            <div className="main-poster-section-one-image-icons">
                                            <box-icon name='link' color='#de1002' ></box-icon>
                                            <box-icon name='search-alt-2' color='#de1002' ></box-icon>
                                            </div>
                                            <img src={movie.image}/>
                                        </div>
                                        <div className="main-poster-section-one-content">
                                            <h1>{movie.title}</h1>
                                            <h2>Action, Thriller</h2>
                                            <h3>
                                                <span className="poster-imdb">Imdb: {movie.imdb}</span>
                                                <span>
                                                <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon> Year: {movie.year}
                                                </span>
                                                <span>Runtime: {movie.runtime}</span>
                                            </h3>
                                            <p>{movie.description}</p>
                                            <button>More Info - trailer</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            case 'show':
                return (
                    <div className="main-poster-section">
                        {
                            show_movies.map((movie,i) => {
                                return(
                                    <div className="main-poster-section-one" key={i}>
                                        <div className="main-poster-section-one-image">
                                            <div className="main-poster-section-one-image-icons">
                                            <box-icon name='link' color='#de1002' ></box-icon>
                                            <box-icon name='search-alt-2' color='#de1002' ></box-icon>
                                            </div>
                                            <img src={movie.image}/>
                                        </div>
                                        <div className="main-poster-section-one-content">
                                            <h1>{movie.title}</h1>
                                            <h2>Action, Thriller</h2>
                                            <h3>
                                                <span className="poster-imdb">Imdb: {movie.imdb}</span>
                                                <span>
                                                <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon> Year: {movie.year}
                                                </span>
                                                <span>Runtime: {movie.runtime}</span>
                                            </h3>
                                            <p>{movie.description}</p>
                                            <button>More Info - trailer</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            case 'free':
                return (
                    <div className="main-poster-section">
                        {
                            free_movies.map((movie,i) => {
                                return(
                                    <div className="main-poster-section-one" key={i}>
                                        <div className="main-poster-section-one-image">
                                            <div className="main-poster-section-one-image-icons">
                                            <box-icon name='link' color='#de1002' ></box-icon>
                                            <box-icon name='search-alt-2' color='#de1002' ></box-icon>
                                            </div>
                                            <img src={movie.image}/>
                                        </div>
                                        <div className="main-poster-section-one-content">
                                            <h1>{movie.title}</h1>
                                            <h2>Action, Thriller</h2>
                                            <h3>
                                                <span className="poster-imdb">Imdb: {movie.imdb}</span>
                                                <span>
                                                <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon> Year: {movie.year}
                                                </span>
                                                <span>Runtime: {movie.runtime}</span>
                                            </h3>
                                            <p>{movie.description}</p>
                                            <button>More Info - trailer</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            default:
                return null;
        }
    };
    useEffect(() => {
        selectedType()
    }, [type]);
    return(
        <div className="main-trending-section">
            <div className="main-trending-section-one-one">
                <div className="main-trending-section-one-one-one">
                    <h1>
                    <box-icon name='movie-play' color='#de1002' ></box-icon>Trending <span>Movies</span>
                    </h1>
                    <ul>
                        <li onClick={() => changeType('poster')} className={type === 'poster'? 'list-item-selected' : null}>JUST AIRED</li>
                        <li onClick={() => changeType(('movie'))} className={type === 'movie'? 'list-item-selected' : null}>POPULAR MOVIES</li>
                        <li onClick={() => changeType('show')} className={type === 'show'? 'list-item-selected' : null}>TV SHOWS</li>
                        <li onClick={() => changeType('free')} className={type === 'free'? 'list-item-selected' : null}>FREE MOVIES</li>
                    </ul>
                </div>
            </div>
            <div className="main-trending-section-one">
                {selectedType()}
            </div>
        </div>
    )
}