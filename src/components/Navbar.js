import React, { useEffect, useState } from "react";
import '../components/main.css';
import logo from '../components/app_images/app_logo.png';
import useScrollStatus from "./userScrollStatus";
export default function Navbar() {
    const isScrolling = useScrollStatus(50);
    const [isFocused, setIsFocused] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };
    useEffect(() => {
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);
    return(
        <div>
            <div className={isScrolling? "main-navbar-section-scrolling": "main-navbar-section"}>
                <div className="main-navbar-section-one"><img src={logo}/></div>
                <div className="main-navbar-section-two">
                    <div className={isFocused? "main-navbar-section-two-one input-focused" : "main-navbar-section-two-one"}>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#595c67"><path d="M764.52-134.91 523.85-375.59q-29.76 21.05-65.44 33.07-35.67 12.02-76.29 12.02-102.19 0-173.86-71.67-71.67-71.68-71.67-173.83t71.67-173.83q71.67-71.67 173.83-71.67 102.15 0 173.82 71.67 71.68 71.68 71.68 173.86 0 40.86-12.02 76.3-12.03 35.43-33.07 64.95l240.91 241.15-58.89 58.66ZM382.09-413.5q67.84 0 115.17-47.33 47.33-47.32 47.33-115.17t-47.33-115.17q-47.33-47.33-115.17-47.33-67.85 0-115.18 47.33-47.32 47.32-47.32 115.17t47.32 115.17q47.33 47.33 115.18 47.33Z"/></svg>
                        </div>
                        <input type='text' placeholder="Search Site..." onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}/>
                    </div>
                    <button><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#ffffff"><path d="M764.52-134.91 523.85-375.59q-29.76 21.05-65.44 33.07-35.67 12.02-76.29 12.02-102.19 0-173.86-71.67-71.67-71.68-71.67-173.83t71.67-173.83q71.67-71.67 173.83-71.67 102.15 0 173.82 71.67 71.68 71.68 71.68 173.86 0 40.86-12.02 76.3-12.03 35.43-33.07 64.95l240.91 241.15-58.89 58.66ZM382.09-413.5q67.84 0 115.17-47.33 47.33-47.32 47.33-115.17t-47.33-115.17q-47.33-47.33-115.17-47.33-67.85 0-115.18 47.33-47.32 47.32-47.32 115.17t47.32 115.17q47.33 47.33 115.18 47.33Z"/></svg>Search</button>
                </div>
                <div className="main-navbar-section-three">
                <box-icon type='logo' name='facebook' color='#ffffff'></box-icon>
                <box-icon name='twitter' type='logo' color='#ffffff' ></box-icon>
                <box-icon name='youtube' type='logo' color='#ffffff' ></box-icon>
                <box-icon name='linkedin' type='logo' color='#ffffff' ></box-icon>
                <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
                </div>
                <div className="main-navbar-section-humb-mobile">
                    <div className="main-navbar-section-humb-mobile-main" onClick={() => setIsClicked(!isClicked)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        <div className={isScrolling? "main-navbar-section-navbar-scrolling": "main-navbar-section-navbar"}>
            <div className="main-navbar-section-navbar-main">
                <ul>
                    <li className="active-list-item">
                        home<box-icon name='chevron-down' color='#ffffff'></box-icon>
                        <div className='header-section-two-dropdown'>
                            <ul>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li><a href='/'>HomeMovie Sidebar Right</a></li>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li><a href='/'>HomeMovie Sidebar Right</a></li>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li className='header-section-two-dropdown-last-item'><a href='/'>HomeMovie Sidebar Right</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>features<box-icon name='chevron-down' color='#ffffff'></box-icon>
                    <div className='header-section-two-dropdown'>
                            <ul>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li><a href='/'>HomeMovie Sidebar Right</a></li>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li><a href='/'>HomeMovie Sidebar Right</a></li>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li className='header-section-two-dropdown-last-item'><a href='/'>HomeMovie Sidebar Right</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>pages<box-icon name='chevron-down' color='#ffffff'></box-icon>
                    <div className='header-section-two-dropdown'>
                            <ul>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li><a href='/'>HomeMovie Sidebar Right</a></li>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li><a href='/'>HomeMovie Sidebar Right</a></li>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li className='header-section-two-dropdown-last-item'><a href='/'>HomeMovie Sidebar Right</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>portfolio<box-icon name='chevron-down' color='#ffffff'></box-icon>
                    <div className='header-section-two-dropdown'>
                            <ul>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li><a href='/'>HomeMovie Sidebar Right</a></li>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li><a href='/'>HomeMovie Sidebar Right</a></li>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li className='header-section-two-dropdown-last-item'><a href='/'>HomeMovie Sidebar Right</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>blog<box-icon name='chevron-down' color='#ffffff'></box-icon>
                    <div className='header-section-two-dropdown'>
                            <ul>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li><a href='/'>HomeMovie Sidebar Right</a></li>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li><a href='/'>HomeMovie Sidebar Right</a></li>
                            <li><a href='/'>HomeMovie Studio</a></li>
                            <li><a href='/'>HomeMovie With Three Columns</a></li>
                            <li className='header-section-two-dropdown-last-item'><a href='/'>HomeMovie Sidebar Right</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">contact</a></li>
                </ul>
            </div>
        </div>
        {
            isClicked & isMobile? (
                <div className={isScrolling? "main-navbar-section-navbar-mobile-scrolling": "main-navbar-section-navbar-mobile"}>
                    <div className="main-navbar-section-navbar-main-mobile">
                        <ul>
                            <li>
                                <div className="list-main-parent">
                                    <div>home</div>
                                    <div className="list-main-parent-arrow"><box-icon name='down-arrow' type='solid' color='#bb0d02' ></box-icon></div>
                                </div>
                                <div className='header-section-two-dropdown-mobile'>
                                    <ul>
                                    <li><a href='/'>HomeMovie Studio</a></li>
                                    <li><a href='/'>HomeMovie With Three Columns</a></li>
                                    <li><a href='/'>HomeMovie Sidebar Right</a></li>
                                    <li><a href='/'>HomeMovie Studio</a></li>
                                    <li><a href='/'>HomeMovie With Three Columns</a></li>
                                    <li><a href='/'>HomeMovie Sidebar Right</a></li>
                                    <li><a href='/'>HomeMovie Studio</a></li>
                                    <li><a href='/'>HomeMovie With Three Columns</a></li>
                                    <li className='header-section-two-dropdown-last-item-mobile'><a href='/'>HomeMovie Sidebar Right</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="list-main-parent">
                                    <div>features</div>
                                    <div className="list-main-parent-arrow"><box-icon name='down-arrow' type='solid' color='#bb0d02' ></box-icon></div>
                                </div>
                                <div className='header-section-two-dropdown-mobile'>
                                    <ul>
                                    <li><a href='/'>HomeMovie Studio</a></li>
                                    <li><a href='/'>HomeMovie With Three Columns</a></li>
                                    <li><a href='/'>HomeMovie Sidebar Right</a></li>
                                    <li><a href='/'>HomeMovie Studio</a></li>
                                    <li><a href='/'>HomeMovie With Three Columns</a></li>
                                    <li className='header-section-two-dropdown-last-item-mobile'><a href='/'>HomeMovie Sidebar Right</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="list-main-parent">
                                    <div>pages</div>
                                    <div className="list-main-parent-arrow"><box-icon name='down-arrow' type='solid' color='#bb0d02' ></box-icon></div>
                                </div>
                                <div className='header-section-two-dropdown-mobile'>
                                    <ul>
                                    <li><a href='/'>HomeMovie Studio</a></li>
                                    <li><a href='/'>HomeMovie With Three Columns</a></li>
                                    <li><a href='/'>HomeMovie Sidebar Right</a></li>
                                    <li><a href='/'>HomeMovie Studio</a></li>
                                    <li><a href='/'>HomeMovie With Three Columns</a></li>
                                    <li className='header-section-two-dropdown-last-item-mobile'><a href='/'>HomeMovie Sidebar Right</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="list-main-parent">
                                    <div>portfolio</div>
                                    <div className="list-main-parent-arrow"><box-icon name='down-arrow' type='solid' color='#bb0d02' ></box-icon></div>
                                </div>
                                <div className='header-section-two-dropdown-mobile'>
                                    <ul>
                                    <li><a href='/'>HomeMovie Studio</a></li>
                                    <li><a href='/'>HomeMovie With Three Columns</a></li>
                                    <li><a href='/'>HomeMovie Sidebar Right</a></li>
                                    <li><a href='/'>HomeMovie Studio</a></li>
                                    <li><a href='/'>HomeMovie With Three Columns</a></li>
                                    <li><a href='/'>HomeMovie Sidebar Right</a></li>
                                    <li><a href='/'>HomeMovie Studio</a></li>
                                    <li><a href='/'>HomeMovie With Three Columns</a></li>
                                    <li className='header-section-two-dropdown-last-item-mobile'><a href='/'>HomeMovie Sidebar Right</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="list-main-parent">
                                    <div>blog</div>
                                    <div className="list-main-parent-arrow"><box-icon name='down-arrow' type='solid' color='#bb0d02' ></box-icon></div>
                                </div>
                                <div className='header-section-two-dropdown-mobile'>
                                    <ul>
                                    <li><a href='/'>HomeMovie Studio</a></li>
                                    <li><a href='/'>HomeMovie With Three Columns</a></li>
                                    <li><a href='/'>HomeMovie Sidebar Right</a></li>
                                    <li><a href='/'>HomeMovie Studio</a></li>
                                    <li><a href='/'>HomeMovie With Three Columns</a></li>
                                    <li className='header-section-two-dropdown-last-item-mobile'><a href='/'>HomeMovie Sidebar Right</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="main-navbar-section-navbar-main-mobile-contact-item"><a href="#">contact</a></li>
                        </ul>
                    </div>
                </div>
            ) : null
        }
        </div>
    )
}