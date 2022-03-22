
import axios from 'axios';
const useImageVideoUpload=(setImgUrl,setUploading)=>{
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
        return{
            handleFile
        }
    
}
export default useImageVideoUpload;