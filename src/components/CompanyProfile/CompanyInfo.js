import React from 'react';
import { useGetCompaniesQuery} from '../../Redux-handler/ManageProfiles';
import { useParams,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { CgProfile } from 'react-icons/cg';
import {Button} from 'react-bootstrap'
const CompanyInfo = ({info}) => {
  const history=useHistory()
  const{user,admin}=useAuth()
//   const{data}=useGetCompaniesQuery(undefined,{selectFromResult:({data})=>({data:data?.find(el=>el.email==user?.loginEmail),})

// })
const navigateToForm = () => {
    history.push("/profileForm");
  };
console.log(info)
    return (
      <section className='m-auto' style={{backgroundColor: "#eee"}}>
      <div className="container py-5">
        <div className="row">
          <div className="col-8">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item active" aria-current="page">{user?.displayName} Profile</li>
              </ol>
            </nav>
          </div>
        </div>
    
        <div className="row ">
          {/* <div className="col-lg-4">
            
          </div> */}
        <div className="col-lg-8">
       <div className="card mb-4">
              <div className="card-body text-center">
                <span className='fs-1 text-primary'><CgProfile /></span>
                <h5 className="my-3">{user?.displayName}</h5>
                <p className="text-muted mb-1">{user?.email}</p>
                <Button onClick={navigateToForm}>Complete Profile</Button>
              </div>
            </div>
            {info&&<div className="card mb-4 ms-1">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Company-Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{info?.cname}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Company Type</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{info?.industry}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Country</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{info?.country}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) {info?.contact}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Founded</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{info?.founded}</p>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </section>
    );
};

export default CompanyInfo;