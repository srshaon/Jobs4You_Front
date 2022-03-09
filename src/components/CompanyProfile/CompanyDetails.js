import React from 'react';
import { useGetCompaniesQuery } from '../../Redux-handler/ManageProfiles';
import { useParams } from 'react-router-dom';

const CompanyDetails = () => {
  const{id}=useParams()
  const{data}=useGetCompaniesQuery(undefined,{selectFromResult:({data})=>({data:data?.find(el=>el._id==id),})
})
console.log(data)
    return (
        <section className='m-auto' style={{backgroundColor: "#eee"}}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item active" aria-current="page">Company Profile</li>
                </ol>
              </nav>
            </div>
          </div>
      
          <div className="row ">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://i.ibb.co/k6HhcvX/logo.png" alt="avatar" className="rounded-circle img-fluid" style={{width: "150px"}}/>
                  <h5 className="my-3">{data?.cname}</h5>
                  <p className="text-muted mb-1">{data?.email}</p>
                  <p className="text-muted mb-4">{data?.country}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">Follow</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0">https://{data?.cname}.com</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-github fa-lg" style={{color: "#333333"}}></i>
                      <p className="mb-0">{data?.cname}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-twitter fa-lg" style={{color: "#55acee"}}></i>
                      <p className="mb-0">@{data?.cname}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-instagram fa-lg" style={{color: "#ac2bac"}}></i>
                      <p className="mb-0">{data?.cname}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-facebook-f fa-lg" style={{color: "#3b5998"}}></i>
                      <p className="mb-0">{data?.cname}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4 ms-1">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full-Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{data?.cname}</p>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{data?.email}</p>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097){data?.contact}</p>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(098) {data?.contact}</p>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{data?.country}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="ms-1">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4"><span className="text-primary font-italic me-1"></span>Hiring History</p>
                      <p className="mb-1" style={{fontSize: ".77rem"}}> From Jobs4you</p>
                      <div className="progress rounded" style={{height: "5px"}}>
                        <div className="progress-bar" role="progressbar" style={{width:"80%"}}></div>
                      </div>
                      <p className="mt-4 mb-1" style={{fontSize:".77rem"}}>Personally Hire</p>
                      <div className="progress rounded" style={{height: "5px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: "72%"}}></div>
                      </div>
                      <p className="mt-4 mb-1" style={{fontSize:".77rem"}}>From Linkedin</p>
                      <div className="progress rounded" style={{height: "5px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: "89%"}}></div>
                      </div>
                      <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>By References</p>
                      <div className="progress rounded" style={{height: "5px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: "55%"}}></div>
                      </div>
                      <p className="mt-4 mb-1" style={{fontSize: ".77rem"}}>From Others</p>
                      <div className="progress rounded mb-2" style={{height: "5px"}}>
                        <div className="progress-bar" role="progressbar" style={{width: "66%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CompanyDetails;