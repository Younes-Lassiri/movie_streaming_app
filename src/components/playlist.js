import React from "react";
import playlist from './app_images/playlist.jpg';
import playlist_one from './app_images/playlist_one.jpg';
import playlist_two from './app_images/playlist_two.jpg';
import playlist_three from './app_images/playlist_three.jpg';
import playlist_four from './app_images/playlist_four.jpg';
import playlist_five from './app_images/playlist_five.jpg';
import best from './app_images/best.jpg';
export default function Playlist() {
    return(
        <div className="main-playlist-section">
            <div className="main-playlist-section-one">
                <h1>
                    <box-icon name='movie-play' color='#de1002' ></box-icon>Top <span>10 Playlist</span>
                </h1>
            </div>
            <div className="main-playlist-section-two">
                <div className="main-playlist-section-two-image-playlist">
                    <div className="main-playlist-section-two-image-playlist-box-icon">
                    <box-icon name='play' color='#ffffff' ></box-icon>
                    </div>
                    <img src={playlist}/>
                </div>
                <div className="main-playlist-section-two-scroll-playlist">
                    <div className="main-playlist-section-two-scroll-playlist-item"><img src={playlist_five}/>
                        <div className="main-playlist-section-two-scroll-playlist-item-content">
                            <h1>Erased</h1>
                            <div>
                                {[...Array(5)].map((_, i) => (
                                    <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="main-playlist-section-two-scroll-playlist-item"><img src={playlist_four}/>
                        <div className="main-playlist-section-two-scroll-playlist-item-content">
                        <h1>Avengers: Age of Ultron</h1>
                        <div>
                            {[...Array(5)].map((_, i) => (
                                <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon>
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="main-playlist-section-two-scroll-playlist-item"><img src={playlist_three}/>
                        <div className="main-playlist-section-two-scroll-playlist-item-content">
                        <h1>The Dark Knight</h1>
                        <div>
                            {[...Array(5)].map((_, i) => (
                                <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon>
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="main-playlist-section-two-scroll-playlist-item"><img src={playlist_two}/>
                        <div className="main-playlist-section-two-scroll-playlist-item-content">
                        <h1>Thor</h1>
                        <div>
                            {[...Array(5)].map((_, i) => (
                                <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon>
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="main-playlist-section-two-scroll-playlist-item"><img src={playlist_one}/>
                        <div className="main-playlist-section-two-scroll-playlist-item-content">
                        <h1>Scream</h1>
                        <div>
                            {[...Array(5)].map((_, i) => (
                                <box-icon key={i} name='star' type='solid' color='#de1002' ></box-icon>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-playlist-section-three">
                <div className="main-playlist-section-three-one"><img src={best}/></div>
                <div className="main-playlist-section-three-two">
                    <h1 className="main-playlist-section-three-two-h1">
                    <span>BEST MOVIE OF THE MONTH :</span> LIAM NEESON <span>BLACKLIGHT<br></br></span>
                    THEY’RE GONNA NEED MORE MEN
                    </h1>
                    <h2 className="main-playlist-section-three-two-h2">Thriller</h2>
                    <p>A humble businessman with a buried past seeks justice when his daughter is killed in an act of terrorism. A cat-and-mouse conflict ensues with a government official, whose past may hold clues to the killers' identities.</p>
                    <div className="main-playlist-section-three-two-reviews">
                        <div className="main-playlist-section-three-two-reviews-one">
                            <div className="main-playlist-section-three-two-reviews-one-item">
                                <h1>Running Time:</h1>
                                <h2>1 hr 53 min</h2>
                            </div>
                            <div className="main-playlist-section-three-two-reviews-one-item">
                                <h1>Genre:</h1>
                                <h2>Action, Thriller</h2>
                            </div>
                            <div className="main-playlist-section-three-two-reviews-one-item">
                                <h1>Director:</h1>
                                <h2>Martin Campbell</h2>
                            </div>
                            <div className="main-playlist-section-three-two-reviews-one-item">
                                <h1>Stars:</h1>
                                <h2>Katie Leung,Jackie Chan</h2>
                            </div>
                            <div className="main-playlist-section-three-two-reviews-one-item">
                                <h1>Release Date:</h1>
                                <h2>2022</h2>
                            </div>
                        </div>
                        <div className="main-playlist-section-three-two-reviews-two">
                            <div className="main-playlist-section-three-two-reviews-two-item">
                                <h1>Imdb - 9.4</h1>
                                <div className="main-playlist-section-three-two-reviews-two-item-white-one"></div>
                            </div>
                            <div className="main-playlist-section-three-two-reviews-two-item">
                                <h1>Metacritic - 7.2</h1>
                                <div className="main-playlist-section-three-two-reviews-two-item-white-two"></div>
                            </div>
                            <div className="main-playlist-section-three-two-reviews-two-item">
                                <h1>Rotten - 8.0</h1>
                                <div className="main-playlist-section-three-two-reviews-two-item-white-three"></div>
                            </div>
                            <div className="main-playlist-section-three-two-reviews-two-item">
                                <h1>Reelviews - 9.0</h1>
                                <div className="main-playlist-section-three-two-reviews-two-item-white-four"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}