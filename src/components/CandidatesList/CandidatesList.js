import React, { useState, useEffect } from "react";
import { Table, Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CandidatesList.css";

import ModalMessage from "./../ModalMessage/ModalMessage";
import Pagination from "./../Pagination/Pagination";

import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { useDeleteCandidateByIdMutation, useGetProfilesQuery } from "../../Redux-handler/ManageProfiles";
import useAuth from "../../hooks/useAuth";

const CandidatesList = () => {
  const { user,role } = useAuth()
  console.log(role)
  const [deleteCandidate, { isSuccess }] = useDeleteCandidateByIdMutation()

  const { data: candidates } = useGetProfilesQuery();
  let sortedList = [];
  for (let i = candidates?.length - 1; i >= 0; i--) {
    sortedList.push(candidates[i]);
  }
  const [pageNumber, setPageNumber] = useState(0);
  const [show, setShow] = useState(false);
  const candidatePerPage = 10;
  const visitedPage = pageNumber * candidatePerPage;
  const pageCount = Math.ceil(candidates?.length / candidatePerPage);
  let tableHead = ["Sl", "Name", "Email", "Phone", "Details"];
  if (!user.role ==='company') {
    tableHead = ["Sl", "Name", "Email", "Phone", "Details", "Action"];
  }
  useEffect(() => {
    if (isSuccess) {
      setShow(true)
    }
  }, [isSuccess])
  return (
    <div className="theme2 my-5">
      <ModalMessage show={show} setShow={setShow} message={'Deleted Successfully'} />
      {/* <div className="d-flex justify-content-center container mt-5">
        <InputGroup className="mb-3 mt-5 w-75">
          <FormControl
            // placeholder="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2" className="bg-danger text-light">
            Search
          </InputGroup.Text>
        </InputGroup>
      </div> */}
      <div className="container my-5 theme">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              {tableHead.map((th) => (
                <th>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedList
              ?.slice(visitedPage, visitedPage + candidatePerPage)
              .map(({ _id, fname, pEmail, pContact,img}, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                  {img?<img className="custom-img me-2" src={img} alt="" srcset="" />
                    :<img
                      className="custom-img me-2"
                      src="https://th.bing.com/th/id/OIP.c2GTibztP9NW0_ITWQ2qwwHaGo?pid=ImgDet&rs=1"
                      alt=""
                    />}{" "}
                    {fname}
                  </td>
                  <td>{pEmail}</td>
                  <td>{pContact}</td>
                  <td>
                    {" "}
                    <Link to={`/candidates/${_id}`}>
                      <span>
                        <AiFillEye />
                      </span>
                    </Link>
                  </td>
                  {(!role==='company')&&<td>
                    {" "}
                    <span onClick={() => deleteCandidate(_id)}>
                      <AiOutlineDelete />
                    </span>
                  </td>}
                </tr>
              ))}
          </tbody>
        </Table>
        <ModalMessage
          show={show}
          setShow={setShow}
          message={"Succesfully removed"}
        />
      </div>
      <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
    </div>
  );
};

export default CandidatesList;
