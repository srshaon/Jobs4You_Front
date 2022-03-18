import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom'
import { useGetProfileByIdQuery, useUpdateProfileMutation } from '../../Redux-handler/ManageProfiles';
const ProfileEdit = ({ info }) => {
    const location = useLocation()
    console.log(location.pathname)
    const history = useHistory()
    const [profileInfo, setProfileInfo] = useState({
        fname: '', address: '', pEmail: '', pContact: '', lname: '', eContact: ''
    })

    const [updateProfile, { isLoading }] = useUpdateProfileMutation()
    useEffect(() => {
        if (info) {
            const { fname, lname, pEmail, pContact, address, eContact } = info
            setProfileInfo({ fname, pEmail, pContact, eContact, address, lname })
        }
    }, [info])

    const handleChange = (e) => setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { fname, lname, pEmail, pContact, address, eContact } = profileInfo
        await updateProfile({
            _id: info._id, fname, pEmail, pContact, eContact, address, lname
        })
        history.push('/candidates')
    }

    return (
        <>
            <div className='d-flex justify-content-center mt-4 '>{isLoading && <h5 className='test-primary'> updating.....</h5>}</div>
            <div className='d-flex justify-content-center mb-4 p-4 m-auto'>

                {info ? <form onSubmit={handleSubmit} className="mb-4">
                    <div className='form-group w-100'>
                        <label className='form-label'> First Name</label>
                        <input required onChange={handleChange} className="form-control px-3" value={profileInfo.fname} type="text" name="fname" id="" />


                        <br />
                        <label className='form-label'> Last Name</label>
                        <input required onChange={handleChange} className="form-control  px-3" value={profileInfo.lname} type="text" name="lname" id="" />
                        <br />
                        <label className='form-label'>Optional Email</label>
                        <input required onChange={handleChange} value={profileInfo.pEmail} className="px-3  
                            form-control " type="text" name="pEmail" id="" />
                        <br />
                        <label className='form-label'>Mobile</label>
                        <input required onChange={handleChange} value={profileInfo.pContact} className="px-3 form-control  " type="text" name="pContact" id="" />
                        <br />
                        <label className='form-label'>Address</label>
                        <input required onChange={handleChange} value={profileInfo.address} className="px-3 form-control  " type="text" name="address" id="" />
                        <br />
                        <label className='form-label'>Phone</label>
                        <input required onChange={handleChange} value={profileInfo.eContact} className="px-3 form-control  " type="text" name="eContact" id="" />
                        <br />


                        <input className="px-3 form-control  " style={{ backgroundColor: 'transparent', color: 'blue', border: '2px solid black' }} type="submit" value="Update" />
                    </div>

                </form> : <h3><Link to='/profileForm'>Please complete your profile</Link></h3>}
            </div>
        </>

    );
};

export default ProfileEdit;
