import React,{useState,useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useGetAllPostQuery, useUpdatePostMutation } from '../../Redux-handler/GovJobApiHandler';
import { Form,Button } from 'react-bootstrap';
const EditGovJob = () => {
    const history=useHistory()
    const[jobInfo,setJobInfo]=useState({
        organization:'',position:'',deadline:'',vacancy:null,
    })
    
    const{jobId}=useParams()
    console.log(jobId)
    const{data}=useGetAllPostQuery(undefined,{selectFromResult:({data})=>({data:data?.find(el=>el._id==jobId),})
})
console.log(data)
console.log(jobInfo)
    const [updateJob,{isLoading}]=useUpdatePostMutation()

useEffect(()=>{
if(data){
    setJobInfo({organization:data.organization,position:data.position,deadline:data.deadline,vacancy:data.vacancy})
}
},[data])
    const handleChange=(e)=>setJobInfo({...jobInfo,[e.target.name]:e.target.value})

    const handleSubmit=async(e)=>{
e.preventDefault()
await updateJob({
    _id:jobId,organization:jobInfo.organization,position:jobInfo.position,deadline:jobInfo.deadline,vacancy:jobInfo.vacancy
})
history.push('/allgovjobs')
    }
    
       return(
           <>
           <div className='d-flex justify-content-center mt-4 '>{isLoading&& <h5 className='test-primary'>Job post updating.....</h5> }</div>
           <div className='d-flex justify-content-center my-4 p-4'>
               
 <form onSubmit={handleSubmit} className="mb-1">
                            <input required onChange={handleChange} className="login-input p-1 form-control" value={jobInfo.organization} placeholder='organization' type="name" name="organization" id="" />
                            <br />
                            <br />
                            <input required onChange={handleChange} className="login-input  p-1" value={jobInfo.position} type="text" name="position" id="" placeholder='Position'/>

                            <br />
                            < Form.Control input required onChange={handleChange}  value={jobInfo.deadline} className="p-1  login-input" type="text" name="deadline" id="" placeholder="Deadline" />
                            <br />
                            <input required onChange={handleChange} 
                            value={jobInfo.vacancy}placeholder="Vacancy" className="p-1  login-input" type="number" name="vacancy" id="" />
                            <br />

                            <input style={{ backgroundColor: 'transparent', color: 'blue', border: '2px solid black' }} type="submit" value="Update" />
                        </form> 
                        </div> 
                       
                        </>
        
    );
};

export default EditGovJob;