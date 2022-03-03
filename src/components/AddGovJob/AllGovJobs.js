import React from 'react';
import { useGetAllPostQuery } from '../../Redux-handler/GovJobApiHandler';
import SingleGovJob from './SingleGovJob';
import { Row, Spinner } from 'react-bootstrap';

const AllGovJobs = () => {
    const{data,isLoading}=useGetAllPostQuery()
    console.log(useGetAllPostQuery())
    return (
        <>
        {isLoading&&<div className='d-flex justify-content-center mt-5'><Spinner className='text-center mt-5' animation='border' role='status'></Spinner></div>}
        <div className='d-flex justify-content-center mb-4'>
        <Row xs={1} md={3} className='my-5 container g-4'>
            {data?.map(info=><SingleGovJob info={info} key={info._id}/>)}
                    </Row>
                    </div>
                    </>
            
        
    );
};

export default AllGovJobs;