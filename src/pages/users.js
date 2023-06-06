import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Users = ({ setToken, setType, mobile, token }) => {

  const [users, setUsers] = useState([])
  const navigate = useNavigate();

  const getUsers = async () => {

    try {
      const { data } = await axios({
        url: 'http://localhost:4000/get_users',
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
      })

      console.log(data)

      if (data.status === 'login') {
        setType('logout')
        setToken('')
        return
      }

      setUsers(data.users)
    } catch (error) {

      if (error.response.data.status === 'login') {
        setType('logout')
        setToken('')
        return
      }
    }

  }

  const goToEdit = (u) => {
    localStorage.setItem('C_user', JSON.stringify(u));
    navigate('/edit-user')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getUsers();
  }, [])

  return (
    <div>
      <section id="main-content" className={mobile ? "merge-left" : ""}>
        <section className="wrapper">
          <div className="">
            <div className="panel panel-default">
              <div className="panel-heading" style={{ textAlign: "left" }}>
                Users
              </div>
              <div className="table-responsive">
                <table className="table table-striped b-t b-light">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length != 0 &&
                      users.map((u, index) => (
                        <tr key={index}>
                          <th>{u.first_name}</th>
                          <th>{u.last_name}</th>
                          <th>{u.email}</th>
                          <th>{u.gender}</th>
                          <th>
                            <button onClick={() => goToEdit(u)}>Edit</button>

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

export default Users;