import React from "react";
import logo from '../components/app_images/app_logo.png';
import footer_one from '../components/app_images/footer_one.jpg';
import footer_two from '../components/app_images/footer_two.jpg';
import footer_three from '../components/app_images/footer_three.jpg';
import footer_four from '../components/app_images/footer_four.jpg';
import footer_five from '../components/app_images/footer_five.jpg';
import footer_six from '../components/app_images/footer_six.jpg';
import footer_seven from '../components/app_images/footer_seven.jpg';
import footer_eight from '../components/app_images/footer_eight.jpg';
export default function Footer()
{
    const images_one = [
        footer_one,
        footer_two,
        footer_three,
        footer_four
    ];
    const images_two = [
        footer_five,
        footer_six,
        footer_seven,
        footer_eight,
    ];
    return(
        <div className="main-footer-section">
            <div className="main-footer-section-one">
                <img src={logo}/>
                <p>
                Lorem ipsum dolor sit amet consect etur adi pisicing elit sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet consect etur. 
                </p>
                <div className="main-footer-section-one-infos">
                    <div className="main-footer-section-one-infos-item">
                    <box-icon name='location-plus' type='solid' color='#ffffff' ></box-icon>
                        <span>
                            7934 Beaver Ridge Rd.<br></br>
                            Oakland, CA 94603
                        </span> 
                    </div>
                    <div className="main-footer-section-one-infos-item">
                        <box-icon name='gmail' type='logo' color='#ffffff' ></box-icon>
                            <span>mail@example.com</span> 
                    </div>
                    <div className="main-footer-section-one-infos-item">
                    <box-icon name='phone' type='solid' color='#ffffff' ></box-icon>
                        <span>+1 800 9123 456 78</span> 
                    </div>
                </div>
            </div>
            <div className="main-footer-section-two">
                <h1>Flickr <span>Stream</span></h1>
                <div className="main-footer-section-two-images">
                    {
                        images_one.map((img,i) => {
                            return(
                                <div className="main-footer-section-two-images-item" key={i}><box-icon name='plus' color='#ffffff' ></box-icon><img src={img}/></div>
                            )
                        })
                    }
                    {
                        images_two.map((img,i) => {
                            return(
                                <div className="main-footer-section-two-images-item" key={i}><box-icon name='plus' color='#ffffff' ></box-icon><img src={img}/></div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="main-footer-section-three">
            <div className="main-footer-section-three">
                <h1>Sign <span>Newsletter</span></h1>
                <div className="main-footer-section-three-input">
                    <input type='email' placeholder='Email'/>
                    <button>Subscribe</button>
                </div>
                <div className="main-footer-section-three-social-media">
                    <box-icon type='logo' name='facebook'></box-icon>
                    <box-icon name='twitter' type='logo'></box-icon>
                    <box-icon name='youtube' type='logo'></box-icon>
                    <box-icon name='linkedin' type='logo'></box-icon>
                    <box-icon name='instagram' type='logo'></box-icon>
                </div>
            </div>
            </div>
            <div className="main-footer-section-bottom">
                <h1>Copyright  ©  <span>Younes Lassiri</span>. All Rights Reserved</h1>
                <ul>
                    <li>home</li>
                    <li>features</li>
                    <li>pages</li>
                    <li>portfolio</li>
                    <li>blog</li>
                    <li>contact</li>
                </ul>

            </div>
        </div>
    )
}