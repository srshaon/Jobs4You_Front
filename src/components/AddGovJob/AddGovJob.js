import './AddGovJob.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form';
import ModalMessage from './../ModalMessage/ModalMessage';

const AddGovJob = () => {
  // const{user,admin}=useAuth()
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [imgUrl, setImgUrl] = useState('')
  const [uploading, setUploading] = useState(false)
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data)
    const info = {
      place: data.organization,
      title: data.position,
      description: data.deadline,
      date: new Date().toLocaleString(),
      // email:user.email,
      img: imgUrl,
    }
    axios.post('https://afternoon-headland-45054.herokuapp.com/addGovJob', info)
      .then(response => {
        console.log(response.data)
        if (response.data.insertedId) {
          handleShow()
          reset()
        }
      });

  }

  // image upload
  const handleFile = (e) => {
    const fileInfo = e.target.files
    const imgData = new FormData()
    imgData.set("key", "cd8b0025cccd4015a70e149fd2ab8ad0")
    imgData.append("image", fileInfo[0])
    setUploading(true)
    axios.post('https://api.imgbb.com/1/upload', imgData)
      .then(response => {
        setImgUrl(response.data.data.url)
        setUploading(false)
      });
  }
  console.log(imgUrl)
  const productImageRegister = register("productImage",)
  // {required: true}
  return (
    <>
      <ModalMessage show={show} setShow={setShow} message={'Submitted'} />
      <div className="mt-5 d-flex justify-content-center row">
        <div className="p-4 rounded col-lg-6 col-sm-10 shadow">
          <h2 className="text-center text-primary mb-4">Create A Gov Job</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="form-control mt-2" type="text" placeholder="Organization" {...register("organization", { required: true })} />
            <input className="form-control mt-2" type="text" placeholder="Position" {...register("position", { required: true })} />
            <input className="form-control mt-2" type="text" placeholder="Deadline" {...register("deadline", { required: true })} />
            <input className="form-control mt-2"
              type="file"
              {...productImageRegister}
              onChange={e => {
                productImageRegister.onChange(e);
                handleFile(e);
              }} />
            {errors.exampleRequired && <span>This field is required</span>}
            {uploading ? <p>Uploading....</p> : <input className="form-control mt-2 bg-primary" type="submit" />}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddGovJob;