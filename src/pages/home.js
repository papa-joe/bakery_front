import React, { useState, useEffect } from "react";


const Home = ({mobile}) => {

    return (
        <div>
            <section id="main-content" className={mobile ? "merge-left" : ""}>
                <section className="wrapper">
                    <div className="market-updates">
                        <div className="col-md-3 market-update-gd">
                            <div className="market-update-block clr-block-2">
                                <div className="col-md-4 market-update-right">
                                    <i className="fa fa-eye"> </i>
                                </div>
                                <div className="col-md-8 market-update-left">
                                <h4>Batteries</h4>
                                <h3>13,500</h3>
                                <p>Other hand, we denounce</p>
                            </div>
                            <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="col-md-3 market-update-gd">
                            <div className="market-update-block clr-block-1">
                                <div className="col-md-4 market-update-right">
                                    <i className="fa fa-users" ></i>
                                </div>
                                <div className="col-md-8 market-update-left">
                                <h4>Users</h4>
                                    <h3>1,250</h3>
                                    <p>Other hand, we denounce</p>
                                </div>
                            <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="col-md-3 market-update-gd">
                            <div className="market-update-block clr-block-3">
                                <div className="col-md-4 market-update-right">
                                    <i className="fa fa-usd"></i>
                                </div>
                                <div className="col-md-8 market-update-left">
                                    <h4>Clients</h4>
                                    <h3>1,500</h3>
                                    <p>Other hand, we denounce</p>
                                </div>
                            <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="col-md-3 market-update-gd">
                            <div className="market-update-block clr-block-4">
                                <div className="col-md-4 market-update-right">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </div>
                                <div className="col-md-8 market-update-left">
                                    <h4>Tests</h4>
                                    <h3>1,500</h3>
                                    <p>Other hand, we denounce</p>
                                </div>
                            <div className="clearfix"> </div>
                            </div>
                        </div>
                    <div className="clearfix"> </div>
                    </div>  
                </section>
            </section>
        </div>
    );
};

export default Home;