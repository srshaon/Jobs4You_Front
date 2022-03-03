import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form';
import ModalMessage from './../ModalMessage/ModalMessage';
import { saveAs } from 'file-saver';

const PdfCreator = () => {
    // const{user,admin}=useAuth()
    const [downloading, setDownloading] = useState(false);
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    const [imgUrl,setImgUrl]=useState('')
    const [uploading,setUploading]=useState(false)
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
 
    const onSubmit = data =>{
        console.log(data)
        const info={
          name:data.name,
            email:data.email,
            phone:data.phone,
            date:new Date().toLocaleString(),
            // email:user.email,
            img:imgUrl,
            location:data.location,
            education:data.education,
            expYear:data.expYear,
            company:data.company,
            designation:data.designation,
            skills:data.skills,
            languages:data.languages,
            institute:data.institute

        }
        setDownloading(true)
      axios.post('http://localhost:5000/createPdf',info)
      .then(response => { 
        axios.get('http://localhost:5000/fetch-pdf', { responseType: 'blob' })
        .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
            saveAs(pdfBlob, 'Resume.pdf');
            setDownloading(false)
            console.log(res.data)
            handleShow()
         reset() 
          })
        
      });
     
    }
  
    // image upload
    const handleFile=(e)=>{
        const fileInfo=e.target.files
      const imgData=new FormData()
      imgData.set("key","cd8b0025cccd4015a70e149fd2ab8ad0")
      imgData.append("image",fileInfo[0])
      setUploading(true)
      axios.post('https://api.imgbb.com/1/upload',imgData)
          .then(response =>{setImgUrl(response.data.data.url)
          setUploading(false)});
      }
      console.log(imgUrl)
    const productImageRegister = register("productImage", )
    // {required: true}
    return (
        <>
{downloading&&<h3 className='mb-2 mt-5 text-center'>Resume Downloading....</h3>}
        <ModalMessage show={show} setShow={setShow} message={'Resume Downloaded'} />
          <div className="mt-5 d-flex justify-content-center row">
          <div className="p-4 rounded col-lg-6 col-sm-10 shadow">
          <h2 className="text-center text-primary mb-4">Create a Resume</h2>
     <form onSubmit={handleSubmit(onSubmit)}>
     <input className="form-control mt-2"  type="text" placeholder="Name" {...register("name",{ required: true })} />
     <input className="form-control mt-2"  type="text" placeholder="Email" {...register("email",{ required: true })} />
     <input className="form-control mt-2"  type="text" placeholder="Location" {...register("location",{ required: true })} />
     <input className="form-control mt-2"  type="text" placeholder="Last Education Status" {...register("education",{ required: true })} />
     <input className="form-control mt-2"  type="text" placeholder="Institute" {...register("institute",{ required: true })} />
     <input className="form-control mt-2"  type="number" placeholder="Experience year (optional)" {...register("expYear")} />
     <input className="form-control mt-2"  type="text" placeholder="Company name (optional)"  {...register("company")} />
     <input className="form-control mt-2"  type="text" placeholder="Designation (optional)"  {...register("designation")} />
     <input className="form-control mt-2"  type="text" placeholder="skills" {...register("skills",{ required: true })} />
     <input className="form-control mt-2"  type="text" placeholder="Languages" {...register("languages",{ required: true })} />
     <input className="form-control mt-2"
        type="file"
        {...productImageRegister }
        onChange={e => {
            productImageRegister.onChange(e);
            handleFile(e);
        }} />
     {errors.exampleRequired && <span>This field is required</span>}
     {uploading?<p>Uploading....</p>:<input className="form-control mt-2 bg-primary"  type="Submit"/>}
   </form>
   </div>
   </div>
   </>
    );
};

export default PdfCreator;