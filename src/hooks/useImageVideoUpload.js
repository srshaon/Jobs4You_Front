
import axios from 'axios';
const useImageVideoUpload=(setImgUrl,setUploading,setVideoUrl)=>{
      const handleFile = (e) => {
          const fileInfo = e.target.files;
          const imgData = new FormData();
          imgData.set("key", "cd8b0025cccd4015a70e149fd2ab8ad0");
          imgData.append("image", fileInfo[0]);
          setUploading(true);
          axios.post("https://api.imgbb.com/1/upload", imgData)
          .then((response) => {
            setImgUrl(response.data.data.url);
            setUploading(false);
          console.log(response.data.data.url)
          });
        };
        const uploadVideo = (e) => {
          const fileInfo = e.target.files[0];
          console.log(fileInfo)
          const videoData = new FormData();
          videoData.append('file', fileInfo,fileInfo.name);
          console.log(fileInfo)
          videoData.append('upload_preset','iivzqhba');
          setUploading(true);
          axios.post("https://api.cloudinary.com/v1_1/razibul96/video/upload",videoData)
          .then((response) => {
            setVideoUrl(response.data.secure_url)
            setUploading(false);
           console.log(response)
           console.log(response.data.secure_url)
           });
        };
        return{
            handleFile,
            uploadVideo
        }
    
}
export default useImageVideoUpload;