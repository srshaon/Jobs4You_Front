import React,{useState,useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { useGetProfileByIdQuery, useUpdateProfileMutation } from '../../Redux-handler/ManageProfiles';
const ProfileEdit = () => {
    const history=useHistory()
    const[profileInfo,setProfileInfo]=useState({
        fname:'',lname:'',pEmail:'',pContact:''
    })
    const{profileId}=useParams()
    const{data}=useGetProfileByIdQuery(profileId)
    const[updateProfile,{isLoading}]=useUpdateProfileMutation()
useEffect(()=>{
if(data){
  const{fname,lname,pEmail,pContact}=data
    setProfileInfo({fname,lname,pEmail,pContact})
}
},[data])

    const handleChange=(e)=>setProfileInfo({...profileInfo,[e.target.name]:e.target.value})

    const handleSubmit=async(e)=>{
e.preventDefault()
const{fname,lname,pEmail,pContact}=profileInfo
await updateProfile({
    _id:profileId,fname,lname,pEmail,pContact
})
history.push('/candidates')
    }
    
       return(
           <>
           <div className='d-flex justify-content-center mt-4 '>{isLoading&& <h5 className='test-primary'>Job post updating.....</h5> }</div>
           <div className='d-flex justify-content-center my-4 p-4'>
               
<form onSubmit={handleSubmit} className="mb-1">
                            <input required onChange={handleChange} className="login-input p-1" value={profileInfo.fname} type="text" name="fname" id="" />
                            <br />
                            <br />
                            <input required onChange={handleChange} className="login-input  p-1" value={profileInfo.lname} type="text" name="lname" id="" />
                            <br />
                            <br />
                            <input required onChange={handleChange}  value={profileInfo.pEmail} className="p-1  
                            login-input" type="text" name="pEmail" id=""/>
                            <br />
                            <input required onChange={handleChange} value={profileInfo.pContact} className="p-1  login-input" type="text" name="pContact" id="" />
                            <br />

                            <input style={{ backgroundColor: 'transparent', color: 'blue', border: '2px solid black' }} type="submit" value="Update" />
                        </form> 
                        </div>
                        </>
        
    );
};

export default ProfileEdit;