import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Editproduct = ({ setToken, setType, mobile, token }) => {

    const [productPrice, setprice] = useState();
    const [stockPrice, setstockprice] = useState();
    const [productName, setname] = useState();
    const [productQuantity, setquantity] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState();
    const [id, setId] = useState();
    const [qty, setQty] = useState();

    const navigate = useNavigate();

    function getProduct() {
        const product = JSON.parse(localStorage.getItem('myObject'));
        setprice(product.price)
        setname(product.name)
        setquantity(product.quantity)
        setUrl('http://localhost:4000/stock_product/' + product.id)
        setId(product.id)
        console.log(product)
    }

    async function addProduct(e) {
        e.preventDefault();

        setIsLoading(true);

        if (qty == null) {
            setIsLoading(false);
            alert('All fields must be filled')
            return
        }

        let formfield = new FormData()

        formfield.append('id', productName)
        formfield.append('name', productName)
        formfield.append('price', productPrice)
        formfield.append('stock_price', stockPrice)
        formfield.append('quantity', qty)

        try {
            const { data } = await axios({
                url: url,
                method: 'POST',
                data: formfield,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
            })

            if (data.status == 'success') {
                setIsLoading(false);
                alert('Product edited successfully')
                navigate("/products");
                return
            }

            if (data.status == 'failed') {
                setIsLoading(false);
                alert('The Operation has failed, please check your entry and try again')
                return
            }
        } catch (error) {
            setIsLoading(false);
            alert('Something went wrong, please try again later')
            return
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getProduct()
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
                                        Edit Products
                                    </div>
                                    <form onSubmit={addProduct} style={{
                                        paddingTop: '15px',
                                        paddingRight: '15px',
                                        paddingLeft: '15px',
                                        paddingBottom: '30px'
                                    }}>
                                        <label>Enter Name</label>
                                        <input type="text" className="ggg" name="name" placeholder="Name" value={productName} onChange={e => setname(e.target.value)} required="" style={{
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

                                        <label>Enter Selling Price</label>
                                        <input type="number" className="ggg" name="price" placeholder="Price" value={productPrice} onChange={e => setprice(e.target.value)} required="" style={{
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

                                        <label>Enter Quantity</label><br></br>
                                        <small>Current quantity is: <strong>{productQuantity}</strong></small><br></br>
                                        <small>Enter quantity to add below</small>
                                        <input type="number" className="ggg" name="quantity" placeholder="Quantity" onChange={e => setQty(e.target.value)} required="" style={{
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

                                        <label>Enter Stocking Price</label>
                                        <input type="number" className="ggg" name="price" placeholder="Price" value={stockPrice} onChange={e => setstockprice(e.target.value)} required="" style={{
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

                                        <input type="submit" value={isLoading ? "SAVING..." : "SAVE"} name="login" disabled={isLoading} />
                                        {isLoading && <span style={{ marginLeft: '10px' }}>Loading...</span>}
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

export default Editproduct;