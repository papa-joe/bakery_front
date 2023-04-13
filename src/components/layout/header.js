import React from "react";

function Header({mobile, setMobile}) {
    
    const addcomment = async () => {
        if(mobile){
            setMobile(false)
        }else{
            setMobile(true)
        }
    }
    return (
        <div>
            <header className="header fixed-top clearfix">
            <div className="brand">
                <a href="index.html" className="logo">
                    BAKERY
                </a>
                <div className="sidebar-toggle-box" onClick={addcomment}>
                    <div className="fa fa-bars"></div>
                </div>
            </div>
            <div className="nav notify-row" id="top_menu">
                {/* <ul className="nav top-menu">
                    <li className="dropdown">
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <i className="fa fa-tasks"></i>
                            <span className="badge bg-success">8</span>
                        </a>
                        <ul className="dropdown-menu extended tasks-bar">
                            <li>
                                <p className="">You have 8 pending tasks</p>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="task-info clearfix">
                                        <div className="desc pull-left">
                                            <h5>Target Sell</h5>
                                            <p>25% , Deadline  12 June’13</p>
                                        </div>
                                                <span className="notification-pie-chart pull-right" data-percent="45">
                                        <span className="percent"></span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="task-info clearfix">
                                        <div className="desc pull-left">
                                            <h5>Product Delivery</h5>
                                            <p>45% , Deadline  12 June’13</p>
                                        </div>
                                                <span className="notification-pie-chart pull-right" data-percent="78">
                                        <span className="percent"></span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="task-info clearfix">
                                        <div className="desc pull-left">
                                            <h5>Payment collection</h5>
                                            <p>87% , Deadline  12 June’13</p>
                                        </div>
                                                <span className="notification-pie-chart pull-right" data-percent="60">
                                        <span className="percent"></span>
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="task-info clearfix">
                                        <div className="desc pull-left">
                                            <h5>Target Sell</h5>
                                            <p>33% , Deadline  12 June’13</p>
                                        </div>
                                                <span className="notification-pie-chart pull-right" data-percent="90">
                                        <span className="percent"></span>
                                        </span>
                                    </div>
                                </a>
                            </li>

                            <li className="external">
                                <a href="#">See All Tasks</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li id="header_inbox_bar" className="dropdown">
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <i className="fa fa-envelope-o"></i>
                            <span className="badge bg-important">4</span>
                        </a>
                        <ul className="dropdown-menu extended inbox">
                            <li>
                                <p className="red">You have 4 Mails</p>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="photo"><img alt="avatar" src="images/3.png" /></span>
                                            <span className="subject">
                                            <span className="from">Jonathan Smith</span>
                                            <span className="time">Just now</span>
                                            </span>
                                            <span className="message">
                                                Hello, this is an example msg.
                                            </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="photo"><img alt="avatar" src="images/1.png" /></span>
                                            <span className="subject">
                                            <span className="from">Jane Doe</span>
                                            <span className="time">2 min ago</span>
                                            </span>
                                            <span className="message">
                                                Nice admin template
                                            </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="photo"><img alt="avatar" src="images/3.png" /></span>
                                            <span className="subject">
                                            <span className="from">Tasi sam</span>
                                            <span className="time">2 days ago</span>
                                            </span>
                                            <span className="message">
                                                This is an example msg.
                                            </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="photo"><img alt="avatar" src="images/2.png" /></span>
                                            <span className="subject">
                                            <span className="from">Mr. Perfect</span>
                                            <span className="time">2 hour ago</span>
                                            </span>
                                            <span className="message">
                                                Hi there, its a test
                                            </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">See all messages</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li id="header_notification_bar" className="dropdown">
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">

                            <i className="fa fa-bell-o"></i>
                            <span className="badge bg-warning">3</span>
                        </a>
                        <ul className="dropdown-menu extended notification">
                            <li>
                                <p>Notifications</p>
                            </li>
                            <li>
                                <div className="alert alert-info clearfix">
                                    <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                                    <div className="noti-info">
                                        <a href="#"> Server #1 overloaded.</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="alert alert-danger clearfix">
                                    <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                                    <div className="noti-info">
                                        <a href="#"> Server #2 overloaded.</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="alert alert-success clearfix">
                                    <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                                    <div className="noti-info">
                                        <a href="#"> Server #3 overloaded.</a>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </li>
                    
                </ul> */}
                
            </div>
            <div className="top-nav clearfix">
                {/* <ul className="nav pull-right top-menu">
                    <li>
                        <input type="text" className="form-control search" placeholder=" Search" />
                    </li>
                    <li className="dropdown">
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <img alt="" src="images/2.png" />
                            <span className="username">John Doe</span>
                            <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu extended logout">
                            <li><a href="#"><i className=" fa fa-suitcase"></i>Profile</a></li>
                            <li><a href="#"><i className="fa fa-cog"></i> Settings</a></li>
                            <li><a href="login.html"><i className="fa fa-key"></i> Log Out</a></li>
                        </ul>
                    </li>
                    
                
                </ul> */}
            </div>
            </header>
        </div>
    );
};

export default Header;