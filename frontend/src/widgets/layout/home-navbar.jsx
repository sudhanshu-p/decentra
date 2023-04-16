import React from "react";
import { NavLink } from "react-router-dom";
import "@/CSS/navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom"

export function HomeNavbar() {
    let navigate = useNavigate();
    const gotoLogin = () => {
    }
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-left">
                    <div className="nav-img">
                        <NavLink to={"/"}>
                            <img src={"./All-Images/decentra-logo.png"} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="nav-search">
                        <AiOutlineSearch />
                        <input type="text" placeholder="Search" />

                    </div>
                </div>
                <div className="nav-right">
                    <div className="nav-tabs">
                        <div className="compete-tab">
                            <NavLink to={"/compete"}>
                                <span className="tab-icon"></span>
                                <span className="tab-name">Compete</span>
                            </NavLink>
                        </div>
                        <div className="practice-tab">
                            {/* <NavLink to={"/practice"}> */}
                            <span className="tab-icon"></span>
                            <span className="tab-name">Practice</span>
                            {/* </NavLink> */}
                        </div>
                        <div className="courses-tab">
                            {/* <NavLink to={"/courses"}> */}
                            <span className="tab-icon"></span>
                            <span className="tab-name">Courses</span>
                            {/* </NavLink> */}
                        </div>
                        <div className="jobs-tab">
                            {/* <NavLink to={"/job-portal"}> */}
                            <span className="tab-icon"></span>
                            <span className="tab-name">jobs</span>
                            {/* </NavLink> */}
                        </div>

                    </div>
                    <div className="nav-btns">
                        <button className="btn host-btn">
                            <img
                                src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/host-icon.svg"
                                alt="host btn"
                            />
                            <span>Host</span>
                        </button>
                        <button className="btn login-btn" onClick={() => navigate('/login')}>
                            <span>Login</span>
                            <img
                                src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/login_icon.svg"
                                alt="host btn"
                            />
                        </button>
                        <button className="menu-btn">
                            <img
                                src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/hamburger_icon.svg"
                                alt="menu"
                            />
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default HomeNavbar;