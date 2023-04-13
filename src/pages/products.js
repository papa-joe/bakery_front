import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Products = ({ setToken, setType, mobile, token }) => {

    const [post, setpost] = useState('')
    const navigate = useNavigate();

    const getpost = async () => {

        try {
            const { data } = await axios({
                url: 'http://localhost:4000/get_products',
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

            setpost(data.products)
        } catch (error) {

            if (error.response.data.status === 'login') {
                setType('logout')
                setToken('')
                return
            }
        }

    }

    const goToEdit = (p) => {
        localStorage.setItem('myObject', JSON.stringify(p));
        navigate('/edit-product')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getpost();
    }, [])

    return (
        <div>
            <section id="main-content" className={mobile ? "merge-left" : ""}>
                <section className="wrapper">
                    <div className="">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Products
                            </div>
                            <div className="row w3-res-tb">
                                <div className="col-sm-5 m-b-xs">
                                    <select className="input-sm form-control w-sm inline v-middle">
                                        <option value="0">Bulk action</option>
                                        <option value="1">Delete selected</option>
                                        <option value="2">Bulk edit</option>
                                        <option value="3">Export</option>
                                    </select>
                                    <button className="btn btn-sm btn-default">Apply</button>
                                </div>
                                <div className="col-sm-4">
                                </div>
                                <div className="col-sm-3">
                                    <div className="input-group">
                                        <input type="text" className="input-sm form-control" placeholder="Search" />
                                        <span className="input-group-btn">
                                            <button className="btn btn-sm btn-default" type="button">Go!</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped b-t b-light">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {post.length != 0 &&
                                            post.map((post, index) => (
                                                <tr key={index}>
                                                    <th>{post.name}</th>
                                                    <th>{post.price}</th>
                                                    <th>{post.quantity}</th>
                                                    <th>
                                                    <button onClick={() => goToEdit(post)}>Edit</button>

                                                    </th>
                                                </tr>
                                            ))
                                        }
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

export default Products;