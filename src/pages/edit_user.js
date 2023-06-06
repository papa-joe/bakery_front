import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const EditUser = ({ setToken, setType, mobile, token }) => {

    const [id, setId] = useState();
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [gender, setGender] = useState();
    const [password, setpassword] = useState();
    const [level, setLevel] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState();

    const navigate = useNavigate();

    function getuser() {
        const user = JSON.parse(localStorage.getItem('C_user'));
        setId(user.id)
        setFname(user.first_name)
        setLname(user.last_name)
        setEmail(user.email)
        setGender(user.gender)
        setpassword(user.password)
        setLevel(user.level)
        setUrl('http://localhost:4000/edit_user/')
        console.log(user)
    }

    async function editUser(e) {
        e.preventDefault();

        setIsLoading(true);

        if (fname == null || lname == null || email == null || level == null || gender == null) {
            setIsLoading(false);
            alert('All fields must be filled')
            return
        }

        let formfield = new FormData()

        formfield.append('id', id)
        formfield.append('first_name', fname)
        formfield.append('last_name', lname)
        formfield.append('email', email)
        formfield.append('level', level)
        formfield.append('gender', gender)

        if (password !== null) {
            formfield.append('password', password)
        }

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

            if (data.status === 'success') {
                setIsLoading(false);
                alert('User edited successfully')
                navigate("/users");
                return
            }

            if (data.status === 'failed') {
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
        getuser()
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
                                        Edit User
                                    </div>
                                    <form onSubmit={editUser} style={{
                                        paddingTop: '15px',
                                        paddingRight: '15px',
                                        paddingLeft: '15px',
                                        paddingBottom: '30px'
                                    }}>
                                        <label>Enter First Name</label>
                                        <input type="text" className="ggg" name="name" placeholder="Name" value={fname} onChange={e => setFname(e.target.value)} required="" style={{
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

                                        <label>Enter Last Name</label>
                                        <input type="text" className="ggg" name="price" placeholder="Price" value={lname} onChange={e => setLname(e.target.value)} required="" style={{
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

                                        <label>Enter Email</label>
                                        <input type="text" className="ggg" name="price" placeholder="Price" value={email} onChange={e => setEmail(e.target.value)} required="" style={{
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
                                            <option value={gender}>{gender}</option>
                                            <option value='Male'>Male</option>
                                            <option value='Female'>Female</option>
                                        </select>

                                        <label>Level</label>
                                        <input type="number" className="ggg" name="lv" placeholder="Level" value={level} onChange={e => setLevel(e.target.value)} required="" style={{
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
                                        <input type="password" className="ggg" name="price" placeholder="Price" onChange={e => setpassword(e.target.value)} required="" style={{
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

export default EditUser;