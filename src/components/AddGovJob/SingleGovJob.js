import React,{useState,useEffect} from 'react';
import {Col ,Card} from 'react-bootstrap';
import {AiFillEye ,AiTwotoneEdit,AiOutlineDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDeleteGovJobMutation } from '../../Redux-handler/GovJobApiHandler';
import ModalMessage from '../ModalMessage/ModalMessage';
import useAuth from "../../hooks/useAuth";


const SingleGovJob = ({info}) => {
  const{role}=useAuth()
  console.log(role)
   const [show, setShow] = useState(false);
  const[deleteGovJob,{isSuccess}]=useDeleteGovJobMutation()
  useEffect(() => {
    if (isSuccess) {
      setShow(true)
    }
  }, [isSuccess])
    return (
      <><ModalMessage show={show} setShow={setShow} message={'Deleted Successfully'} />
        <Col>
      <Card>
        <div className='d-flex'>
        <img className='mx-2 mt-2' width="60" height="60" src="https://i.ibb.co/Npnt8Vz/bd.jpg" />
          <Card.Title className='mt-4'>{info.organization}</Card.Title>
        </div>
        <Card.Body>
          <Card.Text>
            {info.position}
          </Card.Text>
          <Card.Text>
           Deadline:  {info.deadline}
          </Card.Text>
          <Card.Text>
           Vacancy: {info.vacancy}
          </Card.Text>
          <div className='d-flex justify-content-between container'><Link to={`/home`}><span><AiFillEye/></span></Link>
         {(role==='admin')&&<Link to={`/edit/${info._id}`}><span><AiTwotoneEdit/></span></Link>} 
         {(role==='admin')&&<span onClick={() => deleteGovJob(info._id)}>
                      <AiOutlineDelete/>
                    </span>}
         </div>
        </Card.Body>
      </Card>
    </Col>
    </>
    );
};

export default SingleGovJob;