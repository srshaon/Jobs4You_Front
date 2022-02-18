import React,{useState,useEffect} from 'react';
import { Table,Button,InputGroup,FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import ModalMessage from './../ModalMessage/ModalMessage';
import Pagination from './../Pagination/Pagination';

const CandidatesList = () => {
    const[candidates,setCandidates]=useState([])
    const [pageNumber,setPageNumber]=useState(0)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res=>res.json())
.then(data=>setCandidates(data))
    },[])

    const removeCandidate=(id)=>{
        const confirmDelete=window.confirm('Are you sure? Do you want to remove?')
        if(confirmDelete){
            const remainingCandidates=candidates.filter(candidate=>candidate.id!==id)
            handleShow()
            setCandidates(remainingCandidates)
        }

    }
    

    const candidatePerPage=10
    const visitedPage=pageNumber*candidatePerPage
    const pageCount=Math.ceil(candidates.length/candidatePerPage)
    const tableHead=['Sl','Name','Designation','Email','Phone','Details','Action']
    return (
      <div className='theme2'>
        <div className='d-flex justify-content-center container mt-5'>
         <InputGroup className="mb-3 mt-5 w-75">
    <FormControl
      // placeholder="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2" className='bg-danger text-light'>Search</InputGroup.Text>
  </InputGroup>
  </div>
        <div className='container my-5 theme'>
            <Table responsive striped bordered hover>
  <thead>
    <tr>
      {tableHead.map(th=><th>{th}</th>)}
    </tr>
  </thead>
  <tbody>
   {candidates?.slice(visitedPage,visitedPage+candidatePerPage).map((candidate,index)=> {
       const{id,name,email,username,phone}=candidate;
       return(
   <tr>
      <td>{index+1}</td>
      <td><img className='custom-img me-2' src='https://th.bing.com/th/id/OIP.c2GTibztP9NW0_ITWQ2qwwHaGo?pid=ImgDet&rs=1'alt="" /> {name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td><Link to={`/candidate/${id}`}>Details</Link></td>
      <td><Button className="remove-btn" onClick={()=>{removeCandidate(id)}}>Remove</Button></td>
    </tr>)})}
  </tbody>
</Table>
<ModalMessage show={show} setShow={setShow} message={'Succesfully removed'} />
        </div>
        <Pagination pageCount={pageCount} setPageNumber={setPageNumber}/>
        </div>
    );
};

export default CandidatesList;