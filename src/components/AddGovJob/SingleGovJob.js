import React from 'react';
import {Col ,Card} from 'react-bootstrap';
import {AiFillEye ,AiTwotoneEdit} from "react-icons/ai";
import { Link } from 'react-router-dom';

const SingleGovJob = ({info}) => {
    return (
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
         <Link to={`/edit/${info._id}`}><span><AiTwotoneEdit/></span></Link> </div>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default SingleGovJob;