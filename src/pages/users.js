import React from 'react';

const Users = ({ mobile }) => {
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
                      <th>
                        <label className="i-checks m-b-none">
                          <input type="checkbox" /><i></i>
                        </label>
                      </th>
                      <th>Project</th>
                      <th>Task</th>
                      <th>Date</th>
                      <th ></th>
                    </tr>
                  </thead>
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