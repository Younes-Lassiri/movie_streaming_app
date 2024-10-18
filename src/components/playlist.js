import React from "react";
import playlist from './app_images/playlist.jpg';
import playlist_one from './app_images/playlist_one.jpg';
import playlist_two from './app_images/playlist_two.jpg';
import playlist_three from './app_images/playlist_three.jpg';
import playlist_four from './app_images/playlist_four.jpg';
import playlist_five from './app_images/playlist_five.jpg';
export default function Playlist() {
    return(
        <div className="main-playlist-section">
            <div className="main-playlist-section-one">
                <h1>
                    <box-icon name='movie-play' color='#de1002' ></box-icon>Top <span>10 Playlist</span>
                </h1>
            </div>
            <div className="main-playlist-section-two">
                <div className="main-playlist-section-two-image-playlist"><img src={playlist}/></div>
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
        </div>
    )
}