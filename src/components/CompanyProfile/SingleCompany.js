import React,{useState,useEffect} from "react";
import "./CompanyProfile.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth'
import { useDeleteCompanyByIdMutation } from "../../Redux-handler/ManageProfiles";
import defaultImg from "../../assets/Images/no_img_2.png";
import ModalMessage from "../ModalMessage/ModalMessage";
const SingleCompany = ({ info }) => {
  const [show, setShow] = useState(false);
  const{user,role}=useAuth()
  const[deleteCompany,{isSuccess}]=useDeleteCompanyByIdMutation()
  const { _id, cname,img} = info;
  useEffect(() => {
    if (isSuccess) {
      setShow(true)
    }
  }, [isSuccess])
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <ModalMessage show={show} setShow={setShow} message={'Deleted Successfully'} />
      <div className="card com-card p-3">
        <div className="d-flex align-items-center">
          <div className="image">
            {" "}
            {img?<img
              src={img}
              alt=""
              className="rounded"
              width="130"
            />
            :<img
              src={defaultImg}
              alt=""
              className="rounded"
              width="130"
            />}
            <p className="mt-4">
              <Link to={`company/${_id}`}>
                <span>
                  More <IoIosArrowRoundForward />
                </span>
              </Link>
            </p>
          </div>
          <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0">{cname}</h4>
            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
              <div className="d-flex flex-column">
                {" "}
                <span className="articles">Job Post</span>{" "}
                <span className="number1">38</span>{" "}
              </div>
              <div className="d-flex flex-column">
                {" "}
                <span className="followers">Followers</span>{" "}
                <span className="number2">980</span>{" "}
              </div>
              <div className="d-flex flex-column">
                {" "}
                <span className="rating">Hired</span>{" "}
                <span className="number3">300</span>{" "}
              </div>
            </div>
            <div className="button mt-2 d-flex flex-row align-items-center">
              {" "}
              <button className="btn btn-sm btn-outline-primary w-100">
                Chat
              </button>{" "}
             { (role==='seeker')?<button className="btn btn-sm btn-primary w-100 ml-2">
                Follow
              </button>
              :<button onClick={()=>deleteCompany(_id)} className="btn btn-sm btn-danger w-100 ml-2">
              Delete
            </button>}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCompany;
