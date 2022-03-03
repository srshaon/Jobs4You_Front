import './AddGovJob.css';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ModalMessage from './../ModalMessage/ModalMessage';
import { useCreatePostMutation } from "../../Redux-handler/GovJobApiHandler";
import { useHistory } from 'react-router';
const AddGovJob = () => {
  const [createJob, { isLoading, isSuccess }] = useCreatePostMutation()
  const history = useHistory()
  // const{user,admin}=useAuth()
  const [show, setShow] = useState(false);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

    console.log(data)
    const info = {
      organization: data.organization,
      position: data.position,
      deadline: data.deadline,
      vacancy: data.vacancy,
      date: new Date().toLocaleString(),

    }
    createJob(info)
    reset()
    history.push('allgovjobs')
  }

  useEffect(() => {
    if (isSuccess) {
      setShow(true)
    }
  }, [isSuccess])


  return (
    <>
      <ModalMessage show={show} setShow={setShow} message={'Submitted'} />
      {isLoading && <p>Post creating.....</p>}
      <div className="my-5 d-flex justify-content-center row">
        <div className="p-4 rounded col-lg-6 col-sm-10 shadow">
          <h2 className="text-center text-primary mb-4">Create A Gov Job</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="form-control mt-2" type="text" placeholder="Organization" {...register("organization", { required: true })} />
            <input className="form-control mt-2" type="text" placeholder="Position" {...register("position", { required: true })} />
            <input className="form-control mt-2" type="text" placeholder="Deadline" {...register("deadline", { required: true })} />
            <input className="form-control mt-2" type="text" placeholder="Job link" {...register("joblink", { required: true })} />
            <input className="form-control mt-2" type="number" placeholder="vacancy" {...register("vacancy", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>}
            <input className="form-control mt-2 bg-primary" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddGovJob;