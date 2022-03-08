import React,{useState,useEffect} from 'react';
import { Row, Spinner } from 'react-bootstrap';
import {useGetCompaniesQuery } from "../../Redux-handler/ManageProfiles";
import CategorySelector from './CategorySelector';
import SingleCompany from './SingleCompny';

const CompanyProfile = () => {
    const[category,setCategory]=useState('')
    console.log(category)
    const{data:companies,isLoading}=useGetCompaniesQuery()
    let filteredProfiles;
    category ? filteredProfiles=companies?.filter(profile=>profile.industry==category):filteredProfiles=companies
    console.log(filteredProfiles)
    return (
        <section className='profile'>
        {isLoading&&<div className='d-flex justify-content-center mt-5'><Spinner className='text-center mt-5' animation='border' role='status'></Spinner></div>}
        <div className='d-flex justify-content-center mt-5'><CategorySelector companies={companies} setCategory={setCategory} /></div>
        
        <div className='d-flex justify-content-center mb-4'>
        <Row xs={1} md={2} className='mb-5 container g-4'>
            {filteredProfiles?.map(info=><SingleCompany info={info} key={info._id}/>)}
                    </Row>
                    </div>
                    </section>
            
        
    );
};

export default CompanyProfile ;