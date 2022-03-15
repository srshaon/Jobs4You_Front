import React,{useState,useEffect} from 'react';
import { useHistory, useParams,useLocation } from 'react-router-dom'
import {useUpdateCompanyMutation } from '../../Redux-handler/ManageProfiles';
import {Link} from 'react-router-dom'
const EditCompany = ({info}) => {
    const history=useHistory()
    const[profileInfo,setProfileInfo]=useState({
        cname:'',country:'',email:'',contact:'',industry:'',founded:''
    })
    
    const[updateProfile,{isLoading}]=useUpdateCompanyMutation()
useEffect(()=>{
if(info){
  const{cname,country,email,contact,industry,founded}=info
    setProfileInfo({cname,country,email,contact,industry,founded})
}
},[info])

    const handleChange=(e)=>setProfileInfo({...profileInfo,[e.target.name]:e.target.value})

    const handleSubmit=async(e)=>{
e.preventDefault()
const{cname,country,email,contact,industry,founded}=profileInfo
await updateProfile({
    _id:info._id,cname,country,email,contact,industry,founded
})

    }
    
       return(
           <>
           <div className='d-flex justify-content-center mt-4 '>{isLoading&& <h5 className='test-primary'> updating.....</h5> }</div>
           <div className='d-flex justify-content-center mb-4 p-4 m-auto'>
               
{info?<form onSubmit={handleSubmit} className="mb-4">
                           <div className='form-group w-100'>
                               <label className='form-label'> Company Name</label>
                           <input required onChange={handleChange} className="form-control px-3" value={profileInfo.cname} type="text" name="cname" id="" />
                           
                            
                            <br />
                            <label className='form-label'> Origin</label>
                            <input required onChange={handleChange} className="form-control  px-3" value={profileInfo.country} type="text" name="country" id="" />
                            <br />
                            <label className='form-label'>Email</label>
                            <input required onChange={handleChange}  value={profileInfo.email} readOnly className="px-3  
                            form-control " type="text" name="email" id=""/>
                            <br />
                            <label className='form-label'>Mobile</label>
                            <input required onChange={handleChange} value={profileInfo.contact} className="px-3 form-control  " type="text" name="contact" id="" />
                            <br />
                            <label className='form-label'>Founded</label>
                            <input required onChange={handleChange} value={profileInfo.founded} className="px-3 form-control  " type="text" name="founded" id="" />
                           
                            <br />
                            

                            <input className="px-3 form-control  " style={{ backgroundColor: 'transparent', color: 'blue', border: '2px solid black' }} type="submit" value="Update" />
                            </div>
                            
                        </form>:<h3><Link to='/profileForm'>Please complete your profile</Link></h3>}
                        </div>
                        </>
        
    );
};

export default EditCompany;
