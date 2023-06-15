import "./MakeAdmin.css";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Typewriter } from "react-simple-typewriter";
import image from "../../assets/Images/admin_panel.jpg";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    fetch("https://jobs4you.onrender.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Admin Appointed Successfully");

          reset();
        }
      });
  };
  return (
    <div className="make-admin-container">
      <div>
        <img src={image} alt="" className="admin-bg" />
        <div className="admin-banner">
          <h5
            className="admin-banner-text mt-5"
          // style={{ backgroundColor: "black", color: "white", padding: "6px" }}
          >
            Enter an Email To Make Him/Her an Admin
          </h5>
          <form
            className="make-admin-form p-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="p-3 w-75"
              style={{ borderRadius: "7px" }}
              placeholder="registered user's email id"
              {...register("email", { required: true })}
            />

            <input
              className="py-3 px-4 ms-2"
              style={{
                backgroundColor: "purple",
                color: "white",
                fontWeight: "700",
                border: "none",
                borderRadius: "7px",
                height: "60px",
              }}
              type="submit"
            />
          </form>
        </div>
      </div>
      <div className="py-5">
        {/* <form className="make-admin-form p-1" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-75 me-1"
            style={{ border: "2px solid black", height: "50px" }}
            placeholder="registered user's email id"
            {...register("email", { required: true })}
          />

          <input
            style={{
              backgroundColor: "transparent",
              padding: "2px",
              fontWeight: "700",
              border: "2px solid white",
              height: "50px",
            }}
            type="submit"
          />
        </form> */}
      </div>
    </div>
    // <div style={{ border: '2px solid red', width: '100%' }} className="">
    //     <div >
    //         <img src={'https://i.ibb.co/G5gJssj/welcome-board-sign-with-text-office-198568-398-1.jpg'} alt="" className="img-fluid" />

    //         <div className="banner w-100">
    //             <div>

    //                 <div className="banner-form">
    //                     <form action="" className="d-md-flex justify-content-center banner-form-input">
    //                         <input
    //                             type="text"
    //                             name=""
    //                             id=""
    //                             placeholder="Job title or keyword"
    //                             className="search-field search-icon"
    //                             style={{ color: "orange" }}

    //                         />

    //                         <input
    //                             type="text"
    //                             name=""
    //                             id=""
    //                             placeholder="Location (city or country)"
    //                             className="search-field location-icon"
    //                             style={{ color: "orange" }}

    //                         />
    //                         <Link to="/searchResult">
    //                             <button className="search-btn footer-search-btn p-3">Find Jobs</button>
    //                         </Link>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default MakeAdmin;
