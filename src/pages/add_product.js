import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

const Addproduct = ({ setToken, setType, mobile, token }) => {

    const [products, setpost] = useState('')
    const [cart, setcart] = useState([])

    const [id, setid] = useState();
    const [price, setprice] = useState();
    const [productName, setname] = useState();
    const [quantity, setquantity] = useState();

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

            if (data.status == 'login') {
                setType('logout')
                setToken('')
                return
            }

            setpost(data.products)

            console.log(data.products)
        } catch (error) {
            console.log(error.response.data.status)

            if (error.response.data.status == 'login') {
                setType('logout')
                setToken('')
                return
            }
        }

    }

    async function addToCart(e) {
        e.preventDefault();

        if (id == null || quantity == null || productName == null) {
            alert('All fields must be filled')
            return
        }

        let errors = {};

        let name = "id";
        let msg = id;
        errors[name] = msg;

        let n = "quantity";
        let m = quantity;
        errors[n] = m;

        let a = "name";
        let b = productName;
        errors[a] = b;

        let z = "price";
        let x = price;
        errors[z] = x;

        // Object.assign(cart, errors);

        setcart([...cart, errors]);

        // cart.push(errors)

        setid(null)
        setname(null)
        setquantity(null)

        console.log(cart)


    }

    const handleSelect = (event) => {
        const value = event.target.value;
        const [pId, pName, pPrice] = JSON.parse(value);
        setid(pId)
        setname(pName)
        setprice(pPrice)
        console.log(pId, pName);
    };

    const clearCart = () => {
        setcart([])
    }

    useEffect(() => {
        console.log(token)
        window.scrollTo(0, 0)
        getpost();
    }, [])

    return (
        <div>
            <section id="main-content" className={mobile ? "merge-left" : ""}>
                <section className="wrapper">
                    <div className="market-updates">
                        <div className="col-md-12 market-update-gd">
                            <div className="">
                                <div className="panel panel-default">
                                    <div className="panel-heading" style={{ textAlign: "left" }}>
                                        New Products
                                    </div>
                                    <form onSubmit={addToCart} style={{
                                        paddingTop: '15px',
                                        paddingRight: '15px',
                                        paddingLeft: '15px',
                                        paddingBottom: '30px'
                                    }}>
                                        <label>Enter Name</label>
                                        <input type="text" className="ggg" name="name" placeholder="Name" onChange={e => setquantity(e.target.value)} required="" style={{
                                            width: '100%',
                                            padding: '15px 0px 15px 15px',
                                            border: '1px solid #ccc',
                                            outline: 'none',
                                            fontSize: '14px',
                                            color: '#333',
                                            margin: '14px 0px',
                                            backgroundColor: '#fff',
                                            paddingTop: '15px',
                                            paddingBottom: '15px'
                                        }} />

                                        <label>Enter Price</label>
                                        <input type="number" className="ggg" name="price" placeholder="Price" onChange={e => setquantity(e.target.value)} required="" style={{
                                            width: '100%',
                                            padding: '15px 0px 15px 15px',
                                            border: '1px solid #ccc',
                                            outline: 'none',
                                            fontSize: '14px',
                                            color: '#333',
                                            margin: '14px 0px',
                                            backgroundColor: '#fff',
                                            paddingTop: '15px',
                                            paddingBottom: '15px'
                                        }} />

                                        <label>Enter Quantity</label>
                                        <input type="number" className="ggg" name="quantity" placeholder="Quantity" onChange={e => setquantity(e.target.value)} required="" style={{
                                            width: '100%',
                                            padding: '15px 0px 15px 15px',
                                            border: '1px solid #ccc',
                                            outline: 'none',
                                            fontSize: '14px',
                                            color: '#333',
                                            margin: '14px 0px',
                                            backgroundColor: '#fff',
                                            paddingTop: '15px',
                                            paddingBottom: '15px'
                                        }} />

                                        <input type="submit" value="SAVE" name="login" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Addproduct;