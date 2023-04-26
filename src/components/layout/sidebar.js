import React from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Sidebar = ({mobile, setToken, setType, token}) => {
    
    
    async function logout () {
        // axios({
        //     method: 'POST',
        //     url: 'http://localhost:4000/logout',
        //     headers: {
        //         "Content-Type": "application/json",
        //         'Authorization': 'Bearer ' + token
        //     },
        // }).then((res) => {

        //     if (res.status == 201) {
        //         console.log('complete')
        //         setType('logout')
        //         setToken('')
        //     } else {
        //         alert('Something went wrong')
        //     }

        // }, (err) => {
        //     alert('check ur network and try again')
        // })

        setType('logout')
        setToken('')

        
    }

    return <div>
       <aside>
            <div id="sidebar" className={mobile ? "nav-collapse hide-left-bar" : "nav-collapse"}>
                <div className="leftside-navigation">
                    <ul className="sidebar-menu" id="nav-accordion">
                        <li className="sub-menu side-bar-item">
                        <NavLink to="/">
                                <i className="fa fa-dashboard"></i>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="sub-menu side-bar-item">
                            <NavLink to="/add-user">
                                <i className="fa fa-book"></i>
                                <span>Add User</span>
                            </NavLink>
                        </li>
                        <li className="sub-menu side-bar-item">
                            <NavLink to="/users">
                                <i className="fa fa-book"></i>
                                <span>Users</span>
                            </NavLink>
                        </li>
                        <li className="sub-menu side-bar-item">
                        <NavLink to="/add-product">
                                <i className="fa fa-book"></i>
                                <span>Add Product</span>
                            </NavLink>
                        </li>
                        <li className="sub-menu side-bar-item">
                        <NavLink to="/products">
                                <i className="fa fa-book"></i>
                                <span>Products</span>
                            </NavLink>
                        </li>
                        <li className="sub-menu side-bar-item">
                        <NavLink to="/history">
                                <i className="fa fa-book"></i>
                                <span>History</span>
                            </NavLink>
                        </li>
                        <li className="sub-menu side-bar-item">
                        <NavLink to="/pos">
                                <i className="fa fa-book"></i>
                                <span>POS</span>
                            </NavLink>
                        </li>
                        <li className="sub-menu side-bar-item">
                            <a type='button' onClick={logout}>
                                <i className="fa fa-user"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                    </div>
                
            </div>
        </aside>
    </div>;
};

export default Sidebar;