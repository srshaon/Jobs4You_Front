import React from 'react';
import './CompanyProfile.css'
import { IoIosArrowRoundForward} from "react-icons/io";
import { Link } from 'react-router-dom';
const SingleCompany = ({info}) => {
const {_id,cname,email,contact}=info
    return (
      <div className="container mt-5 d-flex justify-content-center">
      <div className="card com-card p-3">
          <div className="d-flex align-items-center">
              <div className="image"> <img src="https://i.ibb.co/k6HhcvX/logo.png" className="rounded" width="130"/> 
              <p className='mt-4'><Link to={`company/${_id}`}><span>More <IoIosArrowRoundForward/></span></Link></p></div>
              <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0">{cname}</h4>
                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                      <div className="d-flex flex-column"> <span className="articles">Job Post</span> <span className="number1">38</span> </div>
                      <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">980</span> </div>
                      <div className="d-flex flex-column"> <span className="rating">Hired</span> <span className="number3">300</span> </div>
                  </div>
                  <div className="button mt-2 d-flex flex-row align-items-center"> <button className="btn btn-sm btn-outline-primary w-100">Chat</button> <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
              </div>
          </div>
      </div>
  </div>
    );
};

export default SingleCompany;