import { Upload } from "antd";
import { uploadProfilePhoto } from "../../services/userService";

function UserPhotoUpload({user, setUser}) {
    const handleUpload = async (file) => {
        const token = localStorage.getItem("access_token");
    
        try {
          const data = await uploadProfilePhoto(file)
       
            setUser((prevState) => ({
              ...prevState,
              profilePhoto: data.profile_photo, 
            }));

            message.success('Profile photo uploaded successfully');
        } catch (error) {
          console.error('Error uploading photo:', error);
          message.error('An error occurred while uploading the photo.');
        }
      };

      return (
        <Upload beforeUpload={handleUpload} name="profile_photo" showUploadList={false}>
          <button style={{marginBlock: "10px"}}>Upload Photo</button>
        </Upload>
      )
}

export default UserPhotoUpload