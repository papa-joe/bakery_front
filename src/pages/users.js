import React from 'react';

const Users = ({ mobile }) => {
  return (
    <div>
      <section id="main-content" className={mobile ? "merge-left" : ""}>
        <section className="wrapper">
          <div className="">
            <div className="panel panel-default">
              <div className="panel-heading">
                Responsive Table
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