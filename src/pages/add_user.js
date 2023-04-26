import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

const Adduser = ({ setToken, setType, mobile, token }) => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastname] = useState();
    const [email, setEmail] = useState();
    const [level, setLevel] = useState();
    const [gender, setGender] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);

    async function addUser(e) {
        e.preventDefault();

        alert(gender)

        setIsLoading(true);

        if (firstName == null || lastName == null || email == null || level == null || gender == null || password == null) {
            setIsLoading(false);
            alert('All fields must be filled')
            return
        }

        let formfield = new FormData()

        formfield.append('first_name', firstName)
        formfield.append('last_name', lastName)
        formfield.append('email', email)
        formfield.append('level', level)
        formfield.append('gender', gender)
        formfield.append('password', password)

        try {
            const { data } = await axios({
                url: 'http://localhost:4000/add_user',
                method: 'POST',
                data: formfield,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
            })

            if (data.status == 'access') {
                setIsLoading(false);
                alert('Access denied')
                return
            }

            if (data.status == 'success') {
                setIsLoading(false);
                setFirstName(null)
                setLastname(null)
                setEmail(null)
                setLevel(null)
                setGender(null)
                setPassword(null)
                alert('User added successfully')
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
                                        New User
                                    </div>
                                    <form onSubmit={addUser} style={{
                                        paddingTop: '15px',
                                        paddingRight: '15px',
                                        paddingLeft: '15px',
                                        paddingBottom: '30px'
                                    }}>
                                        <label>First Name</label>
                                        <input type="text" className="ggg" name="name" placeholder="Name" onChange={e => setFirstName(e.target.value)} required="" style={{
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

                                        <label>Last Name</label>
                                        <input type="text" className="ggg" name="name" placeholder="Name" onChange={e => setLastname(e.target.value)} required="" style={{
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

                                        <label>Email</label>
                                        <input type="email" className="ggg" name="price" placeholder="Price" onChange={e => setEmail(e.target.value)} required="" style={{
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

                                        <label>Gender</label>
                                        <select className="ggg" onChange={e => setGender(e.target.value)} name="cars" style={{
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

                                            <option value='Male'>Male</option>
                                            <option value='Female'>Female</option>
                                        </select>

                                        <label>Level</label>
                                        <input type="number" className="ggg" name="quantity" placeholder="Quantity" onChange={e => setLevel(e.target.value)} required="" style={{
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

                                        <label>Password</label>
                                        <input type="password" className="ggg" name="price" placeholder="Price" onChange={e => setPassword(e.target.value)} required="" style={{
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

export default Adduser;