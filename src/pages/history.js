import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const History = ({ setToken, setType, mobile, token, grade }) => {

    const [post, setpost] = useState('')
    const [filterDate, setDate] = useState();
    const navigate = useNavigate();

    const isAllowed = async () => {

        if (grade == 3) {
            navigate("/pos");
        }

    }

    const getpost = async () => {

        try {
            const { data } = await axios({
                url: 'http://localhost:4000/get_history',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
            })

            if (data.status === 'login') {
                setType('logout')
                setToken('')
                return
            }

            console.log(data.records)
            setpost(data.records)
        } catch (error) {

            if (error.response.data.status === 'login') {
                setType('logout')
                setToken('')
                return
            }
        }

    }

    const getRecords = async () => {
        alert('dfdsfsdf')
        let formfield = new FormData()

        formfield.append('date', filterDate)

        const { data } = await axios({
            url: 'http://localhost:4000/get_history',
            method: 'POST',
            data: formfield,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        })

        setpost([])
        setpost(data.records)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getpost();
        isAllowed();
    }, [])

    return (
        <div>
            <section id="main-content" className={mobile ? "merge-left" : ""}>
                <section className="wrapper">
                    <div className="">
                        <div className="panel panel-default">
                            <div className="panel-heading" style={{ textAlign: "left" }}>
                                History
                            </div>
                            <div className="row w3-res-tb">
                                <div className="col-sm-5 m-b-xs">
                                    
                                </div>
                                <div className="col-sm-4">
                                </div>
                                <div className="col-sm-3">
                                    <div className="input-group">
                                        <input onChange={e => setDate(e.target.value)} type="date" className="input-sm form-control" placeholder="Search" />
                                        <span className="input-group-btn">
                                            <button onClick={getRecords} className="btn btn-sm btn-default" type="button">Go!</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped b-t b-light">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Attendant</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {post.length != 0 &&
                                            post.map((post, index) => (
                                                <tr key={index} style={{ backgroundColor: post.type === "Expenditure" ? "#ffe6e6" : "#e6ffe6" }}>
                                                    <th>{post.name}</th>
                                                    <th>{post.type}</th>
                                                    <th>{post.price}</th>
                                                    <th>{post.quantity}</th>
                                                    <th>{post.total}</th>
                                                    <th>{post.seller}</th>
                                                    <th>{new Date(post.createdAt).toISOString().substring(0, 10)}</th>
                                                </tr>
                                            ))
                                        }
                                        {post.length != 0 && (
                                            <>
                                            <tr>
                                                <td colSpan="3"><strong>Total Expenditure</strong></td>
                                                <td>{post.reduce((acc, cur) => cur.type == 'Expenditure' ? acc + cur.total : acc + 0, 0)}</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3"><strong>Total Income</strong></td>
                                                <td>{post.reduce((acc, cur) => cur.type == 'Income' ? acc + cur.total : acc + 0, 0)}</td>
                                                <td></td>
                                            </tr>
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default History;