import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Addproduct = ({ setToken, setType, mobile, token }) => {

    const [productPrice, setprice] = useState();
    const [productName, setname] = useState();
    const [productQuantity, setquantity] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    async function addProduct(e) {
        e.preventDefault();

        setIsLoading(true);

        if (productName == null || productPrice == null || productQuantity == null) {
            setIsLoading(false);
            alert('All fields must be filled')
            return
        }

        let formfield = new FormData()

        formfield.append('name', productName)
        formfield.append('price', productPrice)
        formfield.append('quantity', productQuantity)

        try {
            const { data } = await axios({
                url: 'http://localhost:4000/add_product',
                method: 'POST',
                data: formfield,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
            })

            if (data.status == 'success') {
                setIsLoading(false);
                setprice(null)
                setname(null)
                setquantity(null)
                alert('Product added successfully')
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
                                    <form onSubmit={addProduct} style={{
                                        paddingTop: '15px',
                                        paddingRight: '15px',
                                        paddingLeft: '15px',
                                        paddingBottom: '30px'
                                    }}>
                                        <label>Enter Name</label>
                                        <input type="text" className="ggg" name="name" placeholder="Name" onChange={e => setname(e.target.value)} required="" style={{
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
                                        <input type="number" className="ggg" name="price" placeholder="Price" onChange={e => setprice(e.target.value)} required="" style={{
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

export default Addproduct;