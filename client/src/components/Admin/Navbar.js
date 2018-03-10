import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import API from '../../utils/API'

const navbarContent = (props) => {

    const styles={
        background: "#BA5370",
        background: "-webkit-linear-gradient(to right, #F4E2D8, #BA5370)",
        background: "linear-gradient(to right, #F4E2D8, #BA5370)",
        height: "100vh",
        position: "fixed",
        width: "20vh"
    }

    const icons={
        lineHeight: "5vh",
        color: "white",
        height: "5vh"
    }

        return    <div className="sidebar-content" style={styles}>

            {console.log(props)}

                <div className="sidebar-nav-links">
 
                        <ul className="sidebar-links" style={{listStyle: "none"}}>
                            <li className="sidebar-link">
                                <Link to="/">
                                    <Icon name='user' link className="sidebar-item" style={icons} />
                                </Link>
                            </li>
                            <li className="sidebar-link">
                                <Link to="/">
                                    <Icon name='block layout' link className="sidebar-item" style={icons} />
                                </Link>
                            </li>
                            <li className="sidebar-link">
                                <Link to="/">
                                    <Icon name='tasks' link className="sidebar-item" style={icons} />
                                </Link>
                            </li>
                            <li className="sidebar-link">
                                <Link to="/">
                                    <Icon name='travel' link className="sidebar-item" style={icons} />
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
};


export default navbarContent;