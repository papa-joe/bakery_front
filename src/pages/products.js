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
                            <div className="panel-heading" style={{ textAlign: "left" }}>
                                Products
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