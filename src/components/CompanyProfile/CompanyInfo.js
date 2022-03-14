import React from 'react';
import { useGetCompaniesQuery,useGetProfilesQuery } from '../../Redux-handler/ManageProfiles';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Chart from '../Chart/Chart'
import { CgProfile } from 'react-icons/cg';
import {Button} from 'react-bootstrap'
const CompanyInfo = ({info}) => {
  const{user,admin}=useAuth()
    const {id}=useParams()
  const{data}=useGetProfilesQuery(undefined,{selectFromResult:({data})=>({data:data?.find(el=>el.pEmail==user?.loginEmail),})

})
console.log(info)
    return (
      <section className='m-auto' style={{backgroundColor: "#eee"}}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
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
                <Button>Complete Profile</Button>
              </div>
            </div>
            <div className="card mb-4 ms-1">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full-Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{info?.fname||info?.cname}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{info?.pEmail||info?.email}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(097){info?.pContact||info?.ontact}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) {info?.pContact||info?.ontact}</p>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{info?.address}</p>
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

export default CompanyInfo;