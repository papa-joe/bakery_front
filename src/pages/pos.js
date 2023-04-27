import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

const Pos = ({ setToken, setType, mobile, token }) => {

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
        } catch (error) {

            if (error.response.data.status == 'login') {
                setType('logout')
                setToken('')
                return
            }
        }

    }

    const confirmSales = async () => {

        alert(JSON.stringify(cart))

        try {
            const { data } = await axios({
                url: 'http://localhost:4000/confirm_sales',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
                data: JSON.stringify(cart)
            })

            // console.log(data)

            // if (data.status == 'login') {
            //     setType('logout')
            //     setToken('')
            //     return
            // }
        } catch (error) {

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


    }

    const handleSelect = (event) => {
        const value = event.target.value;
        const [pId, pName, pPrice] = JSON.parse(value);
        setid(pId)
        setname(pName)
        setprice(pPrice)
    };

    const clearCart = () => {
        setcart([])
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getpost();
    }, [])

    return (
        <div>
            <section id="main-content" className={mobile ? "merge-left" : ""}>
                <section className="wrapper">
                    <div className="market-updates">
                        <div className="col-md-6 market-update-gd">
                            <div className="">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Products
                                    </div>
                                    <form onSubmit={addToCart} style={{
                                        paddingTop: '15px',
                                        paddingRight: '15px',
                                        paddingLeft: '15px',
                                        paddingBottom: '30px'
                                    }}>
                                        <select className="ggg" onChange={e => handleSelect(e)} name="cars" style={{
                                            width: '100%',
                                            padding: '15px 0px 15px 15px',
                                            border: '1px solid #ccc',
                                            outline: 'none',
                                            fontSize: '14px',
                                            color: '#333',
                                            margin: '4px 0px',
                                            backgroundColor: '#fff',
                                            paddingTop: '15px',
                                            paddingBottom: '15px'
                                        }}>

                                            <option value=''>Choose Product</option>
                                            {products.length != 0 &&
                                                products.map((p, index) => (
                                                    <option key={index} value={JSON.stringify([p.id, p.name, p.price])}>{p.name}</option>
                                                ))
                                            }
                                        </select>
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
                                        <input type="submit" value="ADD TO CART" name="login" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 market-update-gd">
                            <div className="">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Cart
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-striped b-t b-light">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.length != 0 &&
                                                    cart.map((c, index) => (
                                                        <tr key={index}>
                                                            <td>{c.name}</td>
                                                            <td>{c.quantity}</td>
                                                            <td>{c.price}</td>
                                                            <td>{c.quantity * c.price}</td>
                                                        </tr>
                                                    ))
                                                }
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td>Total:</td>
                                                    <td>
                                                        {cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td>Date:</td>
                                                    <td>
                                                        {new Date().toLocaleString(undefined, {
                                                            year: "numeric",
                                                            month: "numeric",
                                                            day: "numeric",
                                                            hour: "numeric",
                                                            minute: "numeric",
                                                            second: "numeric",
                                                            hour12: true,
                                                        })}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <form onSubmit={clearCart} style={{
                                            paddingTop: '30px',
                                            paddingRight: '15px',
                                            paddingLeft: '15px',
                                            paddingBottom: '30px'
                                        }}>
                                            <input type="submit" value="CLEAR CART" name="" style={{ marginRight: '5px' }} />
                                            <input type="button" value="CONFIRM" name="" onClick={confirmSales} />
                                        </form>
                                    </div>
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

export default Pos;